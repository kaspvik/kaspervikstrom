"use client";

import styles from "./brev.module.css";

export default function BrevPage() {
  const today = new Date().toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.root}>
      <button className={styles.printBtn} onClick={() => window.print()}>
        <span>Skriv ut / Spara PDF</span>
      </button>

      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.name}>Kasper Vikström</div>
          <div className={styles.contactRow}>
            <a href="mailto:kasper.vik@hotmail.com">kasper.vik@hotmail.com</a>
            <span className={styles.dot} />
            <a href="tel:+46736200915">073-620 09 15</a>
            <span className={styles.dot} />
            <span>Göteborg</span>
            <span className={styles.dot} />
            <a
              href="https://kaspervikstrom.se"
              target="_blank"
              rel="noopener noreferrer">
              kaspervikstrom.se
            </a>
          </div>
        </header>

        <div className={styles.dateLine}>Göteborg, {today}</div>

        <div className={styles.letterBody}>
          <p className={styles.greeting}>Hej alla på Deploja!</p>

          <p>
            Jag heter Kasper Vikström och bor i centrala Göteborg. Jag är
            nyutexaminerad frontendutvecklare från Medieinstitutet, där jag
            under min LIA fick byta skolbänk mot en produktionssatt dashboard
            och presentationslösning hos Webdoc, Carasent Group. Lösningen
            används i dag dagligen av ungefär 100 anställda. Innan dess var jag
            aktiv som kommunikatör och studentrepresentant vid Humanistiska
            fakulteten under min kandidatexamen, vilket gav mig en bra grund i
            både projektarbete och samarbete i grupp.
          </p>

          <p>
            Även om min bakgrund är som utvecklare har jag alltid jobbat nära
            design. Jag har använt Figma genomgående under mina år som
            utvecklare, och tillgänglighet är något jag konsekvent vägt in i
            alla mina projekt, från kontrast och tangentbordsnavigering till
            semantisk struktur. Under LIA:n omsatte jag Figmaunderlag till 20
            till 30 återanvändbara och tillgänglighetsanpassade UI komponenter i
            Storybook, i tätt samarbete med UX i ett team om 6 till 8 personer.
            Jag tog även fram Figmaunderlag till mitt eget examensarbete Boomi
            Countdown, som blev utsett till årets bästa examensarbete 2026 på
            Medieinstitutet, och har designat och byggt min egen portfolio från
            grunden. Min erfarenhet av Figma kommer alltså mest från
            utvecklarhållet snarare än som ren designer, men jag ser det som en
            styrka snarare än en begränsning: jag vet vad som är rimligt att
            implementera, hur komponenter bör dokumenteras för att vara enkla
            att bygga vidare på, och hur man för en dialog mellan design och
            utveckling utan att något går förlorat på vägen.
          </p>

          <p>
            Det som lockar mig med rollen som UX designer hos Deploja är just
            möjligheten att växa vidare inom det jag redan brinner mest för, att
            skapa digitala upplevelser som är både genomtänkta och tillgängliga.
            Jag har fortfarande mest erfarenhet från utvecklarsidan, men jag
            söker mig aktivt mot roller där designarbetet väger tyngre, och jag
            är övertygad om att min bakgrund som utvecklare gör mig till en UX
            designer som kommunicerar väl med utvecklingsteam och förstår vad
            som faktiskt går att bygga.
          </p>

          <p>
            Jag tror att jag skulle passa bra in i teamet då jag är
            lösningsorienterad, nyfiken och har lätt för att ta till mig ny
            kunskap. Jag trivs bäst i samarbeten där man stöttar varandra och
            delar med sig, och bidrar gärna med både engagemang och energi i
            vardagen. Kort sagt: en glädjespridare med viljan att växa in i en
            designroll!
          </p>

          <p>
            Jag ser gärna att vi hörs för att prata vidare om hur min bakgrund
            som utvecklare kan komplettera ert designteam.
          </p>

          <p className={styles.signoff}>
            Med vänliga hälsningar,
            <br />
            Kasper Vikström
          </p>
        </div>
      </div>
    </div>
  );
}
