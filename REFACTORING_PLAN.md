# Refactoring Plan — Clean Code (SRP & OCP)

## Mevcut Durum

Kütüphane genel olarak iyi yapılandırılmış: domain/application/ui katmanları ayrı, bileşenler küçük ve odaklı.
Ancak aşağıdaki noktalarda SRP ve OCP ihlalleri tespit edildi.

---

## 1. Grid Bileşeninin Parçalanması (SRP — Yüksek Öncelik)

### Sorun

`src/ui/parts/grid/index.tsx` tek bir dosyada 5+ sorumluluk taşıyor:

- Item render (week vs day branching + slot resolution)
- Row render
- Section render (month + header + expandable zones)
- Utility fonksiyon (`joinClassNames`)
- Sabit tanımı (`LABELS`)

226 satırlık bu dosya, kütüphanenin en karmaşık ve değişime en açık noktası.

### Hedef

Her render sorumluluğu kendi bileşenine taşınır. Grid yalnızca section listesini iterate eder.

### Adımlar

#### 1.1 `joinClassNames` utility'sini çıkar

- [ ] `src/ui/utils/join-class-names.ts` dosyası oluştur
- [ ] `joinClassNames` fonksiyonunu taşı
- [ ] Grid ve ihtiyaç duyan diğer bileşenlerde import et

#### 1.2 `ItemCell` bileşeni oluştur

- [ ] `src/ui/parts/item-cell/index.tsx` dosyası oluştur
- [ ] `renderItem` fonksiyonundaki mantığı bu bileşene taşı
- [ ] Props: `item: CalendarItem`, `customization`, `onDaySelect`, `onWeekSelect`
- [ ] Grid'den `renderItem` fonksiyonunu kaldır, yerine `<ItemCell />` kullan

#### 1.3 `SectionRow` bileşeni oluştur

- [ ] `src/ui/parts/section-row/index.tsx` dosyası oluştur
- [ ] `renderRows` fonksiyonundaki mantığı bu bileşene taşı
- [ ] `ItemCell`'i içeride kullan

#### 1.4 `SectionBlock` bileşeni oluştur

- [ ] `src/ui/parts/section-block/index.tsx` dosyası oluştur
- [ ] Grid'in `sections.map` içindeki tek bir section'ın render mantığını taşı
- [ ] Sorumluluk: Month render, WeekdayHeader render, ExpandableZone'lar, satır render
- [ ] Grid sadece `sections.map((s) => <SectionBlock ... />)` haline gelir

#### 1.5 Grid'i sadeleştir

- [ ] Grid'in son hali: section listesi üzerinde `SectionBlock` render eden sade bir bileşen
- [ ] Tüm `renderItem`, `renderRows`, `joinClassNames`, `LABELS` Grid'den kaldırılmış olmalı

---

## 2. CalendarValue Kind Branching'i Merkezileştir (OCP — Yüksek Öncelik)

### Sorun

`CalendarValue.kind` üzerinden if/else branching 5+ dosyaya yayılmış:

| Dosya | Fonksiyon |
|---|---|
| `domain/value.ts` | `deriveActiveMonth` |
| `application/split-visible-rows.ts` | `splitVisibleRows` |
| `application/build-render-model.ts` | `mapRow`, `buildRenderModel` |
| `ui/parts/grid/index.tsx` | `renderItem` |
| `root.tsx` | inline `value.kind === 'month'` |

Yeni bir kind eklendiğinde tüm bu dosyalar değişmek zorunda.

### Hedef

Kind-spesifik davranışlar strategy map'lerinde toplanır. Yeni kind eklemek = yeni bir entry eklemek.

### Adımlar

#### 2.1 `deriveActiveMonth` — strategy map

- [ ] `domain/value.ts` içinde:

```ts
const activeMonthDerivers: Record<
  CalendarValue['kind'],
  (key: string) => string | undefined
> = {
  month: (key) => key,
  day: (key) => key.slice(0, 7),
  week: (key) => format(startOfISOWeek(parseISO(key)), 'yyyy-MM'),
};

export function deriveActiveMonth(value?: CalendarValue): string | undefined {
  if (!value) return undefined;
  return activeMonthDerivers[value.kind](value.key);
}
```

#### 2.2 `splitVisibleRows` — strategy map

- [ ] `application/split-visible-rows.ts` içinde:

```ts
type SplitStrategy = (rows: CalendarItem[][], value: CalendarValue) => VisibleRows;

const splitStrategies: Record<CalendarValue['kind'], SplitStrategy> = {
  month: (rows) => { /* today-based split */ },
  day: (rows, value) => { /* value.key match split */ },
  week: (rows, value) => { /* value.key match split */ },
};
```

- [ ] `day` ve `week` aynı stratejiyi paylaşıyorsa ortak bir fonksiyon çıkar

#### 2.3 `renderItem` kind branching — bileşen map

- [ ] Adım 1.2'de oluşturulan `ItemCell` içinde kind'a göre bileşen seçimi bir map üzerinden yapılır:

```ts
const renderers: Record<CalendarItem['kind'], ComponentType<...>> = {
  day: DayCellRenderer,
  week: WeekCellRenderer,
};
```

#### 2.4 `root.tsx` inline kind check

- [ ] `value.kind === 'month'` kontrolünü `domain/value.ts`'e `isMonthSelected(value)` gibi bir fonksiyon olarak taşı (zaten `isMonthValue` var, onu kullan)

---

## 3. `build-render-model.ts` Parçalanması (SRP — Orta Öncelik)

### Sorun

Dosya hem veri dönüşümü (mapping) hem de model birleştirme (orchestration) yapıyor.
`mapRow` fonksiyonu marker ve cell için iki ayrı mapping path içeriyor.

### Hedef

Mapping ve orchestration ayrılır. Her mapper tek bir item türüne odaklanır.

### Adımlar

#### 3.1 Item mapper'ları ayır

- [ ] `src/application/map-day-item.ts` — Cell → CalendarDayItem dönüşümü
- [ ] `src/application/map-week-item.ts` — Marker → CalendarWeekItem dönüşümü
- [ ] Her mapper kendi `buildVisualState` çağrısını yapar

#### 3.2 `mapRow` fonksiyonunu sadeleştir

- [ ] `mapRow` yalnızca item.kind'a göre doğru mapper'ı çağırır
- [ ] Adım 2.3'teki strategy pattern burada da kullanılabilir

#### 3.3 `buildMonthLabel`'ı taşı

- [ ] `src/domain/section-label.ts` veya benzer bir dosyaya taşı
- [ ] Bu fonksiyon domain bilgisi içerdiğinden `domain/` katmanında olmalı

---

## 4. Root Bileşenindeki Inline SVG (SRP — Düşük Öncelik)

### Sorun

`src/ui/parts/root/index.tsx:22-35` — Toggle chevron SVG'si bileşenin içine gömülü.

### Hedef

Icon ayrı bir bileşen/sabit olur. Root yalnızca layout ve composition yapar.

### Adımlar

- [ ] `src/ui/icons/chevron.tsx` dosyası oluştur
- [ ] SVG'yi `ChevronIcon` bileşeni olarak taşı, `direction: 'up' | 'down'` prop'u alsın
- [ ] Root'ta `ChevronIcon` kullan

---

## 5. LABELS Sabit Tekrarını Gider (DRY — Düşük Öncelik)

### Sorun

`LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']` iki yerde tanımlı:

- `src/ui/parts/grid/index.tsx:28`
- `src/ui/parts/weekday-header/index.tsx:7`

### Adımlar

- [ ] `src/ui/constants.ts` dosyası oluştur
- [ ] `DEFAULT_WEEKDAY_LABELS` sabiti olarak tek yerde tanımla
- [ ] Her iki dosyada import ile kullan

---

## Uygulama Sırası

Bağımlılıklar nedeniyle önerilen sıra:

```
Adım 5 (LABELS)          ─── bağımsız, hızlı
  │
Adım 4 (SVG çıkarma)     ─── bağımsız, hızlı
  │
Adım 2 (OCP strategy)    ─── temel altyapı, diğer adımlara girdi sağlar
  │
Adım 3 (build-render-model parçalama) ─── Adım 2'deki strategy'leri kullanır
  │
Adım 1 (Grid parçalama)  ─── en büyük değişiklik, Adım 2 ve 3'e bağımlı
```

Her adım bağımsız bir commit olmalı. Her commit sonrası testler yeşil kalmalı.

---

## Kapsam Dışı

- Yeni özellik eklenmeyecek
- Public API değişmeyecek (`CalendarProps`, `CalendarPureProps` korunur)
- Stil dosyaları (`.scss`) değişmeyecek (sadece import path'leri güncellenecek)
- Test dosyaları refactoring'e paralel güncellenecek
