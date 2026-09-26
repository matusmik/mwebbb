# Rodinná poradňa od A po Z – web

Web pre Mgr. Adrianu Záskalanovú (rodinná poradkyňa, psychologička, koučka, Banská Bystrica).
Kóduje sa presne podľa dizajnu z Figmy. Používateľ je začiatočník – vysvetľuj stručne a po slovensky.

## ⚠️ ZÁVÄZNÉ PRAVIDLÁ – TYPOGRAFIA A ROZOSTUPY (nikdy neporušiť)

Aktuálny `index.html` je **overený pixel po pixli voči Figme** (odchýlka ≤ 2 px pri 1440 px).
Referenčné snímky: `design/referencia-1440.jpg` (PC). Pre mobil/tablet platí Figma (pozri nižšie) – `design/referencia-390.jpg` je staršia verzia.

1. **NIKDY nemeň** font, veľkosť, váhu, výšku riadku, `tracking` (medzery medzi písmenami) ani rozostupy (`mt-*`, `pt-*`, `gap-*`, `px-*` …) existujúcich prvkov, pokiaľ to používateľ výslovne nežiada. Pri inej úprave sa týchto tried nedotýkaj – ani „na upratanie“, ani „pre konzistenciu“.
2. **NIKDY nemeň** blok `FONT START … FONT END` v `<head>` (Google Fonts odkaz a `<style>` s `font-family`). Nepridávaj `font-sans`, `font-serif`, `font-mono` ani vlastné `fontFamily` do tailwind.config. Iné fonty než Crimson Pro a Vujahday Script sa na webe nepoužívajú.
3. **Bežný text nemá žiadny `tracking-*`.** Záporný tracking majú iba veľké nadpisy (presne podľa tabuľky nižšie). Nikdy nepridávaj `tracking-tight`, `tracking-wide`, `tracking-wider` a pod.
4. Nepoužívaj všeobecné Tailwind veľkosti (`text-3xl`, `text-4xl`, `leading-relaxed`, `leading-tight`, `font-medium`…) namiesto hodnôt z tabuľky. Nový text vždy skopíruj z tabuľky nižšie – celý reťazec tried.
5. Ak vytváraš novú sekciu a nie si si istý typom textu, **opýtaj sa**, nehádaj.
6. Po každej úprave porovnaj výsledok s referenčnou snímkou (Playwright screenshot pri 1440 px a 390 px). Ak sa nezmenené časti líšia, vráť to.
7. Ak si omylom zmenil typografiu, obnov pôvodné triedy z gitu (`git diff`, `git checkout -- index.html`).

### Presné reťazce tried (kopíruj doslova)

| Typ textu | Triedy |
|---|---|
| H1 hero / Prax a vzdelanie | `font-light text-[40px] leading-[1.15] md:text-[48px] md:leading-none md:tracking-[-0.02em] lg:text-[80px] lg:leading-[1.1] lg:tracking-[-0.03em]` |
| H2 sekcie | `font-light text-[36px] leading-[1.2] tracking-[-0.02em] md:text-[44px] md:leading-[49px] md:tracking-normal lg:text-[64px] lg:leading-none lg:tracking-[-0.02em]` (Služby: `lg:leading-[1.1]`) |
| H2 záver (veľký) | rovnaké ako H1 |
| H3 (Spolupracujem) | `font-light text-[32px] leading-[1.2] tracking-[-0.02em] lg:text-[36px] lg:leading-[1.1] lg:tracking-[-0.03em]` |
| H3 v karte (Nenašli ste odpoveď) | `font-light text-[32px] leading-[1.2] tracking-[-0.02em] lg:text-[36px] lg:leading-[1.15]` |
| Nadpis ružovej karty (Služby) | `text-[28px] leading-[1.1] tracking-[-0.02em] lg:text-[30px] lg:tracking-normal` |
| Otázka v akordeóne | `text-xl leading-[1.3] md:text-2xl md:leading-[1.25] lg:text-[30px] lg:leading-[38px]` |
| Odpoveď v akordeóne | `font-light text-xl leading-[1.3]` |
| Nadpis-štítok (Online, U vás doma…) | `inline-block bg-tertiary-300 rounded-sm px-1 text-[28px] leading-[31px] tracking-[-0.02em] lg:text-[30px] lg:leading-[38px] lg:tracking-normal` |
| Štítok na Prax a vzdelanie | `inline-block bg-yellow-50 rounded-sm px-1 text-neutral-600 text-[28px] leading-[1.1] lg:text-[32px] lg:leading-[38px] tracking-[-0.02em]` |
| Nadpis v kontaktnej karte | `mt-4 font-light text-[32px] leading-[1.2] tracking-[-0.02em] lg:font-normal lg:text-[33px] lg:tracking-normal` |
| Bežný text (light) | `font-light text-xl leading-[1.3]` (20 px na všetkých zariadeniach) |
| Text v rozbalenej karte Služieb | `font-light text-xl leading-[1.3] lg:leading-[1.4]` |
| Text na farebnej karte (regular) | `text-xl leading-[1.3]` |
| Text v natočenej zelenej karte | `text-xl leading-[1.3] lg:text-[24px] lg:leading-[1.25]` |
| Text pod štítkom (Prax a vzdelanie) | `text-2xl leading-[1.4]`, úvodná fráza `<em class="italic">` |
| E-mail veľký (kontakt) | `font-light text-2xl leading-[1.4] md:text-[28px] md:leading-[1.1] lg:text-[30px] lg:leading-[1.2]` |
| Menu v hlavičke | `text-base` (váha 400), medzery `gap-[34px]`; odkaz `-mx-2 px-2 h-[34px] inline-flex items-center rounded-lg hover:bg-accent-500 active:bg-accent-300 transition-colors` |
| Mobilné menu | `text-2xl`, medzery `gap-[43px]` |
| Logo (hlavička) | `italic text-xl lg:text-[22.5px]`; v pätičke `italic text-2xl lg:text-[22.5px]` |
| Text tlačidla | `italic text-base` |
| „Viac informácií +“ | `font-bold text-base leading-none`, odsadenie `mt-4` |
| Tučné slovo v texte | `<strong class="font-bold">` |
| Ručný popisok | `font-script text-neutral-500 text-lg leading-6 lg:text-2xl` – na mobile vodorovne a na stred, natočenie len od tabletu/PC |
| Malý text pätičky | `text-sm` |

**Mobil a tablet (Figma: `svghomepageomobile.txt`, `svghomepagetablet.txt`, `praxavzdelaniemobilesvg.txt` = mobil aj tablet na jednom plátne, CSS v `css*mobile.txt` / `css*tablet.txt`):**
hlavička 72 px, `px-4`; sekcie `py-12 px-4` (mobil), `py-16 px-8` (tablet). Na mobile a tablete nie je vlna nad zelenou sekciou. Na mobile nie sú natočené karty Nenašli ste odpoveď a Kde sa stretneme, záver je zarovnaný vľavo. V „O mne“ je na mobile fotka cez celú šírku medzi 1. a 2. odsekom. Tablet: hero, Služby a O mne sú v dvoch stĺpcoch. V návrhu pre tablet chýbajú Otázky – na webe ostávajú.
### Blok fontov v `<head>` (musí zostať presne takto)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Vujahday+Script&display=swap" rel="stylesheet">
<style>
  body { font-family: 'Crimson Pro', serif; }
  .font-script { font-family: 'Vujahday Script', cursive; }
</style>
```
`<body>` má triedy `bg-secondary-500 text-primary-500 antialiased` – **bez akejkoľvek font triedy**. Hlavne nikdy nepridávaj `font-serif`: Tailwind by ním prepísal Crimson Pro na Georgiu/Times (presne táto chyba už raz nastala).

## Stack a pravidlá

- Stránky: `index.html` (homepage) a `prax-a-vzdelanie.html` (podstránka). Header, záver a pätička sú v oboch súboroch – pri zmene uprav oba. Čisté HTML5 + Tailwind CSS v3 cez CDN (`https://cdn.tailwindcss.com`) + ikony Lucide (`<i data-lucide="...">`, na konci stránky `lucide.createIcons()`).
- Žiadne frameworky (React, Vue, Next…), žiadny build krok.
- Obrázky v priečinku `images/` (`hero.png`, `o-mne.jpg`, `favicon.svg`, `apple-touch-icon.png`, `og-image.png`). Nové obrázky pomenúvaj zmysluplne.
- Každá sekcia je ohraničená komentármi `<!-- NÁZOV SEKCIA START -->` / `<!-- NÁZOV SEKCIA END -->`. Nové sekcie označuj rovnako.
- Mobile-first: základné triedy = mobil, `md:` = tablet (≥768 px), `lg:` = PC (≥1024 px). Dizajn z Figmy je pre šírku 1440 px a platí pre `lg:`.
- Stránka sa nesmie na mobile posúvať do strany (natočené karty sú v kontajneri s `overflow-hidden`).
- Nasadenie: GitHub → Vercel (automaticky po pushnutí). Pred commitom/pushom sa opýtaj.

## Farby (tailwind.config v `<head>`)

| Token | Hex | Použitie |
|---|---|---|
| `primary-500` | #3D2217 | hlavný text, tmavé tlačidlá, kontaktná sekcia |
| `secondary-500` | #F0E9D5 | krémové pozadie stránky, text na tmavom |
| `neutral-500` | #764B2A | hnedá sekcia Služby, sekundárny text, ručné popisky |
| `neutral-600` | #6B4426 | tmavšia hnedá |
| `accent-500` | #F1D1E7 | ružové karty, otvorená otázka (ružová) |
| `accent-300` | #F6E0EF | kliknutie (active) na odkazy v menu |
| `accent-600` | #ECC0DE | hover ružových kariet, kliknutie (active) na tlačidlá |
| `tertiary-300` | #DEE1B7 | svetlozelené štítky nadpisov, otvorená otázka (zelená) |
| `tertiary-500` | #B8BA87 | zelená sekcia „Stretneme sa“ + vlna (spodný padding sekcie `lg:pb-[127px]`) |
| `yellow-50` | #FDEDD3 | žlté štítky (chips), žltá karta „Nenašli ste odpoveď“ |
| `yellow-500` | #F5AA33 | doplnková žltá (zatiaľ nepoužitá) |
| — | #644E45 | orámovanie tlačidla „Viac o mojich skúsenostiach“ |

## Typografia

Fonty z Google Fonts: **Crimson Pro** (všetko) a **Vujahday Script** (ručne písané popisky, trieda `.font-script`).
Font je nastavený v `<style>` v `<head>` (`body { font-family: 'Crimson Pro' }`).

| Prvok | PC (lg) | Tablet / mobil |
|---|---|---|
| H1 (hero) | 80px, light 300, line-height 1.1, tracking -0.03em | 48px/1.0 / 40px/1.15 |
| H2 sekcie | 64px, light 300, line-height 1 (`lg:leading-none`), tracking -0.02em | 44px/49px / 36px/1.2 |
| H2 záver („Verím, že…“) | 80px, 300, 1.1, -0.03em | 48px / 40px |
| H3 malé nadpisy | 36px, 300, 1.1, -0.03em | 32px |
| Nadpisy kariet / otázok | 30px, regular 400, riadok 38px | karty 28px, otázky 24px / 20px |
| Bežný text | 20px (`text-xl`), light 300, line-height 1.3 | 20px |
| Menu | 16px, 400, medzera 34px | – |
| Logo | 22.5px, italic, 400 | 20px |
| Text tlačidiel | 16px, italic | 16px |
| „Viac informácií +“ | 16px, bold 700 | 16px |
| Ručné popisky | Vujahday Script 24px, `text-neutral-500`, mierne natočené (-9° až -11°) | 18–20px, na mobile nenatočené |

Kurzíva v nadpisoch (`<em class="italic">`) je súčasť dizajnu (napr. „S čím *pomáham*“).

**Pozor:** keď dávaš `leading-[…]` k textu s `lg:text-xl`, pridaj aj `lg:leading-[…]`, inak `lg:text-xl` prepíše výšku riadku na 28px.

## Layout (PC, šírka 1440 px)

- Header: výška 72px mobil aj tablet / 82px PC (`h-[72px] lg:h-[82px]`), `px-4 lg:pl-16 lg:pr-[72px]`, sticky, na mobile/tablete hamburger + menu cez celú obrazovku.
- Hlavný kontajner sekcií: `max-w-[1090px] mx-auto` (od x=175 do 1265). Pravý stĺpec má 535px (`lg:grid-cols-[1fr_535px]`).
- Kontakt: `max-w-[1120px]`. Otázky: `max-w-[866px]`.
- Typické vertikálne odsadenie sekcií: 88px hore/dole (`lg:pt-[88px]`).
- Mobil: `px-4`, tablet: `md:px-8`.

## Komponenty

**Tlačidlo plné (tmavé):**
`grain inline-flex items-center gap-2 h-[46px] px-6 rounded-full bg-primary-500 text-secondary-500 italic text-base shadow-[2px_2px_6px_rgba(0,0,0,0.02)] hover:bg-accent-500 hover:text-primary-500 active:bg-accent-600 transition-colors`
Svetlé: `grain … bg-secondary-500 text-primary-500 … hover:bg-accent-500 active:bg-accent-600 transition-colors`.
Obrysové: `inline-flex items-center gap-2 h-[48px] px-6 rounded-full border border-[#644E45] text-primary-500 italic text-base shadow-[2px_2px_6px_rgba(0,0,0,0.02)] hover:bg-accent-500 hover:border-accent-500 active:bg-accent-600 active:border-accent-600 transition-colors`.
Hover všetkých tlačidiel = ružová `accent-500`, kliknutie = `accent-600`.

**Šípka v tlačidlách** (presne z Figmy, používaj vždy túto, nie Lucide):
```html
<svg width="13" height="8" viewBox="408 617 13 8" fill="currentColor" aria-hidden="true"><path d="M420.354 621.211C420.549 621.016 420.549 620.699 420.354 620.504L417.172 617.322C416.976 617.127 416.66 617.127 416.464 617.322C416.269 617.517 416.269 617.834 416.464 618.029L419.293 620.858L416.464 623.686C416.269 623.881 416.269 624.198 416.464 624.393C416.66 624.588 416.976 624.588 417.172 624.393L420.354 621.211ZM408 620.858V621.358H420V620.858V620.358H408V620.858Z"/></svg>
```

**Zrnitá textúra (`.grain`):** Figma má na pozadiach, kartách a tlačidlách jemný šum. Replikuje ho trieda `.grain` definovaná v `<head>` (blok `ZRNITÁ TEXTÚRA`) – SVG feTurbulence ako `::after` prekrytie. Pridaj `grain` na každý prvok, ktorý má vo Figme noise efekt. Pri tvaroch v SVG (vlna) je rovnaký filter priamo v SVG.

**Tiene z Figmy:** karty `shadow-[2px_2px_4px_rgba(0,0,0,0.03)]`, tlačidlá `shadow-[2px_2px_6px_rgba(0,0,0,0.02)]`.

**Rozbaľovacie karty (Služby, Otázky):** `<details class="group ...">` + `<summary class="list-none [&::-webkit-details-marker]:hidden">`, ikony `plus` / `minus` s `group-open:hidden` / `hidden group-open:block`. Karty: `rounded-2xl`, výška zatvorenej 70px (`min-h-[70px]` alebo `py-4` + riadok 38px), rozostup 16px (Služby) / 24px (Otázky).
Otázky: na mobile cez celú šírku (`-mx-4 md:mx-0 md:rounded-2xl`), `px-8`; zatvorená `bg-secondary-500`, otvorená `open:bg-accent-500` (ružová) alebo `open:bg-tertiary-300` (zelená).

**„Viac informácií +“ (Stretneme sa):** tlačidlo `data-more` s `aria-expanded`, skrytý obsah je `previousElementSibling`; text a ikona sa prepínajú cez `group-aria-expanded:`. JS je na konci bloku sekcie.

**Štítky:** nadpis-štítok `inline-block bg-tertiary-300 rounded-sm px-1 text-[28px] lg:text-[30px] leading-[38px]`; žlté štítky v kartách Služieb `inline-flex items-center h-[30px] px-2.5 rounded-lg bg-yellow-50 text-neutral-600 text-xl`.

**Natočené karty:** `rotate-[3.14deg]` (zelená sekcia, kontakt), `rotate-[0.6deg]` (žltá karta), na mobile menší uhol (`rotate-[2deg]`).

## Sekcie (v tomto poradí)

1. `HEADER` – logo, menu (O mne → `#o-mne`, Služby, Ako sa stretneme, Prax a vzdelanie → `prax-a-vzdelanie.html`, Kontakt), mobilné menu.
2. `HERO SEKCIA` (`#uvod`) – nadpis vľavo, fotka `images/hero.jpg` vpravo (716×794 na PC), popisok „Online a v okolí Banskej Bystrice“.
3. `SLUŽBY SEKCIA` (`#sluzby`) – hnedé pozadie, 6 ružových rozbaľovacích kariet, blok „Spolupracujem“ (odkaz na bbpsycholog.sk).
4. `O MNE SEKCIA` (`#o-mne`) – fotka `images/o-mne.jpg` (424×530), text, obrysové tlačidlo „Viac o mojich skúsenostiach“ → `prax-a-vzdelanie.html`.
5. `STRETNEME SA SEKCIA` (`#ako-sa-stretneme`) – SVG vlna hore (sekcia má `bg-secondary-500`, aby nad vlnou nebola biela), 4 formy stretnutia, natočená krémová karta.
6. `OTÁZKY SEKCIA` (`#otazky`) – 10 otázok, žltá karta „Nenašli ste odpoveď“.
7. `KONTAKT SEKCIA` (`#kontakt`) – tmavé pozadie, e-mail, ružová natočená karta „Kde sa stretneme“.
8. `ZÁVER SEKCIA` – „Verím, že každá rodina…“ + tlačidlo.
9. `PÄTIČKA` – logo, meno, sociálne siete, e-mail, spodný riadok © / Ochrana osobných údajov / Design by Klára Záskalanová.

## Podstránka Prax a vzdelanie (`prax-a-vzdelanie.html`)

V menu má „Prax a vzdelanie“ aktívny stav `bg-accent-300`, ostatné odkazy vedú na `index.html#…`.
1. `PRAX SEKCIA` (`#prax`) – H1 „Prax a vzdelanie“, „Pracovala som ako“ + šípka, fotka `images/praxavzdelaniefoto.png` (424×530) s popiskom „stále spoznávam, ako deti vnímajú svet“, 3 štítky (ružový `bg-accent-600` + 2 žlté `bg-yellow-50`, 32px), pod nimi text 24px/1.4 (regular), kurzívou len úvodná fráza. Šípka je ručne kreslená `<path>` priamo z Figmy. Predloha: `praxavzdelaniesvg.txt`. Kontajner `max-w-[1338px]` (obsah x=83–1357), pravý stĺpec 535px.
2. `VZDELANIE SEKCIA` (`#vzdelanie`) – hnedé pozadie, `lg:px-16`, 5 položiek v 3 stĺpcoch (424px, medzera 88px/16px).
3. `ZÁVER SEKCIA` a `PÄTIČKA` – rovnaké ako na homepage.

## Postup pri novom dizajne z Figmy (SVG export)

Používateľ posiela SVG export z Figmy (text je v ňom prevedený na krivky, fotky sú vložené ako base64).
1. SVG vyrenderuj (Playwright/Chromium) a pozri si ho ako obrázok – to je vizuálna predloha.
2. Rozmery a pozície ber z `<rect>` a z bounding boxov `<path>` (getBoundingClientRect). Farby z `fill`.
3. Veľkosť písma zisti porovnaním šírky textu v SVG s textom vyrenderovaným v Crimson Pro (Figma rendruje o ~1–2 % širšie ako Chrome).
4. Fotky vytiahni z base64 `<image>` a orež ich podľa transformácie v `<pattern>`, ulož do `images/`.
5. Ikony (šípky a pod.) ber priamo ako `<path>` z SVG.
6. Výsledok vyrenderuj pri 1440 px, porovnaj s predlohou (odchýlka do ~2 px) a skontroluj aj 390 px a 820 px.

## Treba doplniť (od používateľa)

- Texty `TEXT DOPLNIŤ`: 5 kariet v Službách (okrem „Máme bábätko“), rozbalené texty „U vás doma“, „Na prechádzke“, „E-mailom“, 8 odpovedí v Otázkach.
- Štítky `Štítok` v kartách Služieb.
- Odkazy `href="#"`: Instagram, Facebook, Ochrana osobných údajov.
- Overiť e-maily: v kontakte `zaskalanova@rodinna-poradna.sk`, v pätičke `rodinnaporadnaaz@gmail.com`.
- Farby otvorených otázok: vo Figme sú otvorené len dve („Ako si dohodnúť návštevu?“ = zelená, „Ako presne funguje poradenstvo e-mailom?“ = ružová), ostatné sa zatiaľ striedajú.
- Text karty „Online“ je vo Figme krémový (pravdepodobne chyba) – v kóde je tmavý ako ostatné.
