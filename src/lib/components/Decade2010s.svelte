<script>
  import TimeSeriesChart from "./TimeSeriesChart.svelte";
  export let data;
  export let distribution;
  export let gender;
  export let expertise;
  export let dataScale;
  // Add a color and style for the line and dots specific to this decade
  const lineColor = "var(--decade5-line)";
  const lineWidth = 2;
  const lineDash = "0 0";
  const pointColor = "var(--decade5-dot, #0051ff)";
  const pointSize = 3;
</script>

<li>
  <div class="period-intro">
    <h2>2010 - 2019</h2>
    <p>
      In de jaren ’80 wordt er, anders dan in de jaren ’70, niet alleen door
    </p>
  </div>

  <div class="top-content">
    <article>
      <div class="text-container">
        <h3>Robotisering in zorg en dagelijks leven</h3>
        <p>
          Robots helpen steeds vaker in de zorg en thuis. Ze kunnen ouderen
          gezelschap houden, herinneren aan medicijnen of helpen bij simpele
          taken. Dat kan fijn zijn, vooral tegen eenzaamheid. Toch vinden veel
          mensen menselijk contact belangrijk. Robots kunnen helpen, maar ze
          vervangen geen echte aandacht.
        </p>
      </div>
      <img src="/images/decade-5/zorg.png" alt="" />
      <span></span>
    </article>

    <article>
      <div class="text-container">
        <h3>Algoritmen en waarheid</h3>
        <p>
          Algoritmen helpen computers beslissingen te maken. Ze worden gebruikt
          door politie en rechters, maar zijn niet altijd eerlijk. Deepfakes
          maken nepbeelden die echt lijken. Daardoor wordt het moeilijker om te
          weten wat waar is.
        </p>
      </div>
      <img src="/images/decade-5/algoritmen.png" alt="" />
      <span></span>
    </article>
  </div>

  <div class="bottom-content">
    <article>
      <div class="text-container">
        <h3>robotisering van werk en economie</h3>
        <p>
          Steeds meer werk wordt gedaan door robots en computers. Ze maken
          producten sneller en goedkoper. Daardoor verdwijnen sommige banen,
          vooral simpel en herhalend werk. Tegelijk ontstaan er nieuwe banen,
          waarvoor mensen nieuwe vaardigheden nodig hebben. Robotisering
          verandert het werk, maar mensen blijven belangrijk.
        </p>
      </div>
      <img src="/images/decade-5/werk.png" alt="" />
      <span></span>
    </article>

    <article>
      <div class="text-container">
        <h3>Privacy en toezicht</h3>
        <p>
          Bedrijven zoals Google en Facebook verzamelen veel gegevens over
          mensen. Ze weten wat je zoekt, liket en bekijkt. Overheden gebruiken
          ook steeds vaker camera’s en digitale systemen om toezicht te houden.
          Dat kan helpen bij veiligheid, maar het zorgt ook voor zorgen over
          privacy. Mensen vragen zich af wie hun gegevens ziet en hoe die worden
          gebruikt.
        </p>
      </div>
      <img src="/images/decade-5/privacy.png" alt="" />
      <span></span>
    </article>

    <article>
      <img src="/images/decade-5/NRC.png" alt="" />
      <span></span>
    </article>
  </div>

  <div class="chart-container">
    <TimeSeriesChart
      {data}
      mode={distribution}
      {gender}
      {expertise}
      dataScale={parseInt(dataScale)}
      dateRange={["2010-01-01", "2020-01-01"]}
      bleedDays={5475}
      margin={0}
      lineColor={lineColor}
      lineWidth={lineWidth}
      lineDash={lineDash}
      pointColor={pointColor}
      pointSize={pointSize}
    />
  </div>

  <span class="zero-line"></span>

  <img src="/images/decade-5/decade5_bg.png" alt="" />
</li>

<style>
  li {
    --inline-padding: 5rem;
    position: relative;
    max-width: 100vw;
    height: 100%;
    flex-shrink: 0;
    flex-basis: 100%;
    color: black;
    scroll-snap-align: center;
  }

  li .period-intro {
    max-width: 20rem;
  }

  li .period-intro h2 {
    font-family: "crayon", sans-serif;
    font-weight: 700;
    color: var(--decade5-blue);
    font-size: 3.25rem;
  }

  li .period-intro p {
    font-family: "helvetica", sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1rem;
  }

  .top-content {
    left: 0;
    width: 100%;
  }

  .bottom-content {
    left: 0;
    width: 100%;
  }

  .text-container h3 {
    font-family: "heletica", sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--decade5-blue);
    font-size: 1vw;
  }

  .text-container p {
    font-family: "helvetica", sans-serif;
  }

  .zero-line {
    background: var(--decade5-darkblue);
  }

  li span {
    --dash-line: var(--decade5-darkblue);
  }

  li span::before {
    background: var(--decade5-darkblue);
  }

  li span::after {
    background: var(--decade5-white);
    border: 8px solid var(--decade5-darkblue);
  }

  /* ========================================== */
  /* TOP CONTENT */
  /* ========================================== */

  .top-content article {
    position: absolute;
    aspect-ratio: 1 / 0.55;
    width: 40vw;
  }

  /* -------------------------- */
  /* 1st ARTICLE */
  /* -------------------------- */

  .top-content article:nth-of-type(1) {
    left: 20%;
  }

  .top-content article:nth-of-type(1) .text-container {
    max-width: 35%;
    right: 30%;
    bottom: 30%;
  }

  .top-content article:nth-of-type(1) span {
    height: 20%;
    left: 18%;
  }

  .top-content article:nth-of-type(1) img {
    left: 0%;
    bottom: 30%;
    height: 50%;
  }

  /* -------------------------- */
  /* 2nd ARTICLE */
  /* -------------------------- */

  .top-content article:nth-of-type(2) {
    right: 5%;
  }

  .top-content article:nth-of-type(2) .text-container {
    max-width: 50%;
    right: 0%;
    top: 20%;
  }

  .top-content article:nth-of-type(2) span {
    height: 30%;
    left: 48%;
  }

  .top-content article:nth-of-type(2) img {
    bottom: 40%;
    left: 20%;
    translate: -50%;
    height: 60%;
  }

  /* ========================================== */
  /* BOTTOM CONTENT */
  /* ========================================== */

  .bottom-content article {
    position: absolute;
    aspect-ratio: 1 / 0.7;
    width: 32vw;
  }

  /* -------------------------- */
  /* 1st ARTICLE */
  /* -------------------------- */

  .bottom-content article:nth-of-type(1) {
    left: 0%;
  }

  .bottom-content article:nth-of-type(1) .text-container {
    max-width: 40%;
    right: 0%;
    top: 30%;
  }

  .bottom-content article:nth-of-type(1) span {
    height: 20%;
    left: 35%;
  }

  .bottom-content article:nth-of-type(1) img {
    top: 30%;
    left: 0%;
    height: 60%;
  }

  /* -------------------------- */
  /* 2nd ARTICLE */
  /* -------------------------- */

  .bottom-content article:nth-of-type(2) {
    left: 57%;
    translate: -50%;
  }

  .bottom-content article:nth-of-type(2) .text-container {
    max-width: 55%;
    right: 0%;
    top: 30%;
  }

  .bottom-content article:nth-of-type(2) span {
    height: 20%;
    left: 40%;
  }

  .bottom-content article:nth-of-type(2) img {
    top: 30%;
    left: -20%;
    height: 50%;
  }

  /* -------------------------- */
  /* 3rd ARTICLE */
  /* -------------------------- */

  .bottom-content article:nth-of-type(3) {
    right: 0%;
  }

  .bottom-content article:nth-of-type(3) span {
    height: 50%;
    left: 30%;
  }

  .bottom-content article:nth-of-type(3) img {
    top: 20%;
    right: 10%;
    height: 80%;
  }
</style>
