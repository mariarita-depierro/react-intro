export default function Main() {
  const components = {
    theyAre: "file separati",
    whyUseThem: "per suddividere le funzionalità",
    mainStructure: ["Header, ", "Main e ", "Footer"],
  };

  return (
    <main>
      -----------------Main--------------------
      <section>
        <article>
          <h2>Cosa sono i componenti React?</h2>
          <h3>{components.theyAre}</h3>
        </article>
        <article>
          <h2>Quali sono quelli principali?</h2>
          <h3>{components.mainStructure}</h3>
        </article>
        <article>
          <h2>React viene utilizzato anche:</h2>
          <h3>{components.whyUseThem}</h3>
        </article>
      </section>
      -----------------Main--------------------
    </main>
  );
}
