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
          <p className={styles.greeting}>
            Hej Evelina och alla på Friday Väst!
          </p>

          <p>
            Jag heter Kasper Vikström och bor i centrala Göteborg. Jag är
            nyutexaminerad Frontend utvecklare från Medieinstitutet, där jag
            under min LIA period fick byta skolbänk mot en produktionssatt
            dashboard och presentationslösning hos Webdoc, Carasent Group.
            Lösningen används i dag dagligen av ungefär 100 anställda. Innan
            dess var jag aktiv som kommunikatör och studentrepresentant vid
            Humanistiska fakulteten under min kandidatexamen, vilket gav mig en
            bra grund i både projektarbete och samarbete i grupp.
          </p>

          <p>
            Jag har god erfarenhet av JavaScript, TypeScript och React, och har
            under utbildning och praktik jobbat i allt från Next.js projekt till
            komponentbibliotek i Storybook. Under LIA:n byggde jag 20 till 30
            återanvändbara UI komponenter och integrerade bland annat drag och
            släpp samt datavisualisering i skarp drift. Mitt examensarbete, ett
            realtidsspel byggt med React och Firebase, blev utsett till årets
            bästa examensarbete 2025 på Medieinstitutet. Jag är alltså van vid
            att röra mig mellan frontend och de delar av backend och databas som
            krävs för att få en lösning hel, och ser gärna fram emot att
            fördjupa mig ytterligare där, gärna med nya verktyg som .NET/C# om
            det är vad rollen kräver.
          </p>

          <p>
            Det som lockar mig med den här tjänsten är att få vara med och bygga
            digitala självbetjäningslösningar som faktiskt gör vardagen enklare
            för människor. Det är precis den typen av användarnära och praktiska
            produkter jag trivs bäst med att jobba i. Jag gillar när tekniken
            får vara osynlig och lösningen bara funkar, och det är den känslan
            jag vill fortsätta jaga i nästa roll.
          </p>

          <p>
            Jag tror att jag skulle passa bra in i teamet då jag är
            lösningsorienterad, nyfiken och har lätt för att ta till mig ny
            kunskap. Jag trivs bäst i samarbeten där man stöttar varandra och
            delar med sig, och bidrar gärna med både engagemang och energi i
            vardagen. Kort sagt: en glädjespridare med viljan att växa in i en
            fullstack roll!
          </p>

          <p>
            Jag ser fram emot att höra mer om tekniken och teamet bakom
            tjänsten, och tar gärna ett samtal för att prata vidare om hur jag
            skulle kunna bidra.
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
