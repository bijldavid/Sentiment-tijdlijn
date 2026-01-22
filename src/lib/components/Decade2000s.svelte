<script>
  import TimeSeriesChart from "./TimeSeriesChart.svelte";
  export let data;
  export let distribution;
  export let gender;
  export let expertise;
  export let dataScale;
  // Add a color and style for the line and dots specific to this decade
  const lineColor = "var(--decade4-line)";
  const lineWidth = 2;
  const lineDash = "5 10";
  const pointColor = "var(--decade4-dot)";
  const pointSize = 4;
</script>

<li>
  <div class="period-intro">
    <h2>2000 - 2009</h2>
    <p>
      Robots zullen taken met en voor mensen uitvoeren, in plaats van ze te
      vervangen.
    </p>
  </div>

  <div class="top-content">
    <article>
      <div class="text-container">
        <h3>Robotje Qrio wordt nieuwe huisvriend</h3>
        <p>
          In de jaren ’80 wordt er, anders dan in de jaren ’70, niet alleen door
          wetenschappers en bedrijven over AI gesproken, maar ook door gewone
          mensen. Door schaakcomputers verschijnt AI in de sportwereld, een
          herkenbare context voor een breed publiek. Hierdoor wordt AI
          zichtbaarder en een onderwerp waar meer mensen over meepraten.
        </p>
      </div>
      <img src="/images/decade-4/robotje.png" alt="" />
      <span></span>
    </article>

    <article>
      <img src="/images/decade-4/decade4_quote.png" alt="" />
      <span></span>
    </article>
  </div>

  <div class="bottom-content">
    <article>
      <img src="/images/decade-4/indejaren80.png" alt="" />
      <span></span>
    </article>

    <article>
      <img src="/images/decade-4/bijvoegelijkenaamwoorden.png" alt="" />
      <span></span>
    </article>

    <article>
      <div class="text-container">
        <h3>AI is goed in meten, slecht in begrijpen</h3>
        <p>
          Wetenschappers zoals Paul Churchland en Daniel Dennett benadrukken dat
          computers patronen kunnen herkennen, maar geen betekenis ervaren. Dat
          betekent: een camera kan gezichten of gedrag detecteren, maar begrijpt
          niet wat intentie, schuld of context is.
        </p>
      </div>
      <img src="/images/decade-4/science.png" alt="" />
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
      dateRange={["2000-01-01", "2010-01-01"]}
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

  <img src="/images/decade-4/decade4_bg.png" alt="" />
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
    font-family: "comicsans", sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
  }

  li .period-intro p {
    font-family: "comicsans", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
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
    font-family: "museosans", sans-serif;
    font-size: 1vw;
  }

  .text-container p {
    font-family: "jura", sans-serif;
  }

  .zero-line {
    background: var(--decade4-black);
  }

  li span {
    --dash-line: var(--decade4-black);
  }

  li span::before {
    background: var(--decade4-black);
  }

  li span::after {
    background: var(--decade4-white);
    border: 8px solid var(--decade4-black);
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
    bottom: 35%;
  }

  .top-content article:nth-of-type(1) span {
    height: 40%;
    left: 18%;
  }

  .top-content article:nth-of-type(1) img {
    left: 8%;
    bottom: 50%;
    height: 40%;
  }

  /* -------------------------- */
  /* 2nd ARTICLE */
  /* -------------------------- */

  .top-content article:nth-of-type(2) {
    right: 5%;
  }

  .top-content article:nth-of-type(2) span {
    height: 30%;
    left: 48%;
  }

  .top-content article:nth-of-type(2) img {
    bottom: 40%;
    left: 50%;
    translate: -50%;
    height: 60%;
  }

  /* ========================================== */
  /* BOTTOM CONTENT */
  /* ========================================== */

  .bottom-content article {
    position: absolute;
    aspect-ratio: 1 / 0.8;
    width: 30vw;
  }

  /* -------------------------- */
  /* 1st ARTICLE */
  /* -------------------------- */

  .bottom-content article:nth-of-type(1) {
    left: 0%;
  }

  .bottom-content article:nth-of-type(1) span {
    height: 20%;
    left: 35%;
  }

  .bottom-content article:nth-of-type(1) img {
    top: 30%;
    left: 15%;
    height: 70%;
  }

  /* -------------------------- */
  /* 2nd ARTICLE */
  /* -------------------------- */

  .bottom-content article:nth-of-type(2) {
    left: 50%;
    translate: -50%;
  }

  .bottom-content article:nth-of-type(2) span {
    height: 30%;
    left: 50%;
  }

  .bottom-content article:nth-of-type(2) img {
    top: 38%;
    left: 50%;
    translate: -50%;
    height: 60%;
  }

  /* -------------------------- */
  /* 3rd ARTICLE */
  /* -------------------------- */

  .bottom-content article:nth-of-type(3) {
    right: 0%;
  }

  .bottom-content article:nth-of-type(3) .text-container {
    max-width: 45%;
    right: 15%;
    bottom: 20%;
  }

  .bottom-content article:nth-of-type(3) span {
    height: 30%;
    right: 60%;
  }

  .bottom-content article:nth-of-type(3) img {
    bottom: 20%;
    left: 0%;
    height: 40%;
  }
</style>
