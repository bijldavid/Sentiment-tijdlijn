<script>
  import TimeSeriesChart from "./TimeSeriesChart.svelte";
  export let data;
  export let distribution;
  export let gender;
  export let expertise;
  export let dataScale;
  // Add a color and style for the line and dots specific to this decade
  const lineColor = "var(--decade6-line)";
  const lineWidth = 1;
  const lineDash = "0 0";
  const pointColor = "var(--decade6-dot, #0051ff)";
  const pointSize = 2;
</script>

<li>
  <div class="period-intro">
    <h2>2020 - 2024</h2>
    <p>Slimmer, sneller, maar niet zonder gevolgen</p>
  </div>

  <div class="top-content">
    <article>
      <div class="text-container">
        <h3>Deepfakes ondermijnen vertrouwen</h3>
        <p>
          Steeds vaker is het lastig te zien of beeld en geluid echt zijn. Met
          AI kunnen stemmen, foto’s en video’s worden nagemaakt, wat leidt tot
          oplichting en nepnieuws. Hierdoor komt vertrouwen onder druk te staan.
        </p>
      </div>
      <img src="/images/decade-6/deepfakes.png" alt="" />
      <span></span>
      <div class="glass-container">
        <div></div>
        <div></div>
      </div>
    </article>

    <article>
      <div class="text-container">
        <h3>AI kost veel energie</h3>
        <p>
          AI werkt in grote datacenters die veel stroom en water gebruiken.
          Terwijl AI steeds belangrijker wordt, groeit ook de druk op het
          klimaat. Dit laat zien dat AI niet alleen digitaal is, maar ook een
          grote impact heeft op de echte wereld.
        </p>
      </div>
      <img src="/images/decade-6/energie.png" alt="" />
      <span></span>
      <div class="glass-container">
        <div></div>
        <div></div>
      </div>
    </article>
  </div>

  <div class="bottom-content">
    <article>
      <div class="text-container">
        <h3>AI wordt normaal</h3>
        <p>
          Aan het begin van dit decennium voelde kunstmatige intelligentie nog
          als iets voor de toekomst. Vanaf 2023 verandert dat duidelijk: AI
          wordt gebruikt op school, op werk en thuis. Dit laat zien dat AI geen
          experiment meer is, maar onderdeel van het dagelijks leven.
        </p>
      </div>
      <img src="/images/decade-6/normaal.png" alt="" />
      <span></span>
      <div class="glass-container">
        <div></div>
        <div></div>
      </div>
    </article>

    <article>
      <div class="text-container">
        <h3>AI als machtsmiddel</h3>
        <p>
          AI draait niet alleen om slimme software, maar ook om macht en geld.
          Chipbedrijven groeien snel en datacenters gebruiken veel energie,
          terwijl overheden moeite hebben om bij te blijven. AI is daardoor ook
          een politieke en economische strijd.
        </p>
      </div>
      <img src="/images/decade-6/machtsmiddel.png" alt="" />
      <span></span>
      <div class="glass-container">
        <div></div>
        <div></div>
      </div>
    </article>

    <article>
      <div class="text-container">
        <h3>conclusie</h3>
        <p>
          Tussen 1970 en 2024 verandert de manier waarop kranten over AI
          schrijven sterk. In de beginjaren is AI vooral een abstract
          toekomstidee, vaak technisch en ver van het dagelijks leven. In de
          jaren daarna wordt AI steeds praktischer, maar blijft het iets voor
          experts en bedrijven. Vanaf 2010 groeit de aandacht voor
          maatschappelijke gevolgen zoals privacy en macht. Rond 2022–2023 wordt
          AI ineens alledaags, met grote zorgen over waarheid, werk en controle.
          AI verschuift zo in de kranten van belofte naar bepalende kracht in de
          samenleving.
        </p>
      </div>
      <span></span>
      <div class="glass-container">
        <div></div>
        <div></div>
      </div>
    </article>
  </div>

  <div class="chart-container">
    <TimeSeriesChart
      {data}
      mode={distribution}
      {gender}
      {expertise}
      dataScale={parseInt(dataScale)}
      dateRange={["2020-01-01", "2024-12-31"]}
      bleedDays={5475}
      margin={0}
      {lineColor}
      {lineWidth}
      {lineDash}
      {pointColor}
      {pointSize}
    />
  </div>

  <span class="zero-line"></span>

  <div class="image-toner"></div>
  <img src="/images/decade-6/decade6_bg.png" alt="" />
</li>

<style>
  li {
    --inline-padding: 5rem;
    position: relative;
    max-width: 100vw;
    height: 100%;
    flex-shrink: 0;
    flex-basis: 100%;
    color: var(--decade1-black);
    scroll-snap-align: center;
  }

  li > img {
    z-index: -2;
  }
/* 
  li :global(.chart-container) {
    mix-blend-mode: overlay;
    filter: brightness(200%);
  } */

  li .image-toner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(33, 33, 33);
    opacity: 0.5;
    z-index: -1;
  }

  li .period-intro {
    max-width: 20rem;
  }

  li .period-intro h2 {
    font-family: "helvetica";
    text-transform: uppercase;
    font-weight: 400;
    font-size: 2.5rem;
    color: var(--decade6-white);
  }

  li .period-intro p {
    font-family: "rm-mono";
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--decade6-white);
  }

  .top-content {
    right: var(--inline-padding);
    width: calc(100% - var(--inline-padding));
  }

  .bottom-content {
    right: var(--inline-padding);
    width: calc(100% - var(--inline-padding));
  }

  .chart-container {
    padding-right: var(--inline-padding);
  }

  .zero-line {
    width: calc(100% - var(--inline-padding));
    background: var(--decade6-white);
    left: 0;
  }

  li span {
    background: var(--decade6-white);
    width: 1px;
  }

  li span::before {
    background: radial-gradient(
      circle,
      var(--decade6-white) 20%,
      transparent 20%
    );
    border: 1px solid var(--decade6-white);
    width: 40px;
  }

  li span::after {
    background: transparent;
    border: 8px solid var(--decade6-white);
  }

  .text-container h3 {
    font-family: "rm-mono";
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1vw;
    color: var(--decade6-white);
  }

  .text-container p {
    font-family: "helvetica";
    font-weight: 400;
    color: var(--decade6-white);
  }

  /* ========================================== */
  /* TOP CONTENT */
  /* ========================================== */

  .top-content article {
    position: absolute;
    aspect-ratio: 1 / 0.8;
    width: 28vw;
  }

  /* -------------------------- */
  /* 1st ARTICLE */
  /* -------------------------- */

  .top-content article:nth-of-type(1) {
    left: 20%;
  }

  .top-content article:nth-of-type(1) .text-container {
    max-width: 50%;
    right: 0%;
    top: 10%;
  }

  .top-content article:nth-of-type(1) span {
    height: 50%;
    left: 30%;
  }

  .top-content article:nth-of-type(1) img {
    top: 10%;
    left: 10%;
    height: 35%;
  }

  .top-content article:nth-of-type(1) .glass-container {
    height: 60%;
    width: 90%;
    top: -2%;
    right: -5%;
  }

  /* -------------------------- */
  /* 2nd ARTICLE */
  /* -------------------------- */

  .top-content article:nth-of-type(2) {
    left: 60%;
  }

  .top-content article:nth-of-type(2) .text-container {
    max-width: 55%;
    left: 0%;
    top: 10%;
  }

  .top-content article:nth-of-type(2) span {
    height: 50%;
    left: 30%;
  }

  .top-content article:nth-of-type(2) img {
    top: 10%;
    right: 5%;
    height: 40%;
  }

  .top-content article:nth-of-type(2) .glass-container {
    height: 70%;
    width: 90%;
    top: -7%;
    left: -10%;
  }

  /* ========================================== */
  /* BOTTOM CONTENT */
  /* ========================================== */

  .bottom-content article {
    position: absolute;
    aspect-ratio: 1 / 0.75;
    width: 30vw;
  }

  /* -------------------------- */
  /* 1st ARTICLE */
  /* -------------------------- */

  .bottom-content article:nth-of-type(1) {
    left: 0%;
  }

  .bottom-content article:nth-of-type(1) .text-container {
    max-width: 50%;
    right: 0%;
    bottom: 10%;
  }

  .bottom-content article:nth-of-type(1) span {
    height: 47%;
    left: 50%;
  }

  .bottom-content article:nth-of-type(1) img {
    bottom: 10%;
    left: 15%;
    height: 35%;
  }

  .bottom-content article:nth-of-type(1) .glass-container {
    height: 70%;
    width: 90%;
    bottom: -7%;
    right: -10%;
  }

  /* -------------------------- */
  /* 2nd ARTICLE */
  /* -------------------------- */

  .bottom-content article:nth-of-type(2) {
    left: 50%;
    translate: -50%;
  }

  .bottom-content article:nth-of-type(2) .text-container {
    max-width: 45%;
    right: 5%;
    bottom: 10%;
  }

  .bottom-content article:nth-of-type(2) span {
    height: 48%;
    left: 65%;
  }

  .bottom-content article:nth-of-type(2) img {
    bottom: 10%;
    left: 15%;
    height: 35%;
  }

  .bottom-content article:nth-of-type(2) .glass-container {
    height: 60%;
    width: 80%;
    bottom: 0%;
    right: 0%;
  }

  /* -------------------------- */
  /* 3rd ARTICLE */
  /* -------------------------- */

  .bottom-content article:nth-of-type(3) {
    right: 0%;
  }

  .bottom-content article:nth-of-type(3) .text-container {
    max-width: 60%;
    right: 0%;
    bottom: 7.5%;
  }

  .bottom-content article:nth-of-type(3) span {
    height: 35%;
    left: 50%;
  }

  .bottom-content article:nth-of-type(3) .glass-container {
    height: 18vw;
    width: 18vw;
    bottom: -10%;
    left: 20%;
    border-radius: 50%;
  }

  .bottom-content article:nth-of-type(3) .glass-container div {
    display: none;
  }
</style>
