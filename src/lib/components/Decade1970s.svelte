<script>
    import TimeSeriesChart from "./TimeSeriesChart.svelte";
    export let data;
    export let distribution;
    export let gender;
    export let expertise;
    export let dataScale;
    // Add a color and style for the line and dots specific to this decade
    const lineColor = "var(--decade1-line)";
    const lineWidth = 3;
    const lineDash = "10 10";
    const pointColor = "var(--decade1-dot, #0051ff)";
    const pointSize = 3;
</script>

<li>
    <div class="period-intro">
        <h2>1970 - 1979</h2>
        <p>De computers gaan ons leven veranderen!</p>
        <img src="/images/decade-1/lijntje.png" alt="" />
    </div>

    <div class="top-content">
        <article>
            <div class="text-container">
                <h3>De jaren 70</h3>
                <p>
                    In de jaren '70 werd in Nederlandse kranten nog relatief
                    weinig over computers en kunstmatige intelligentie
                    geschreven.
                </p>
            </div>
            <img src="/images/decade-1/woman_blur.png" alt="" />
            <span></span>
        </article>

        <article>
            <div class="text-container">
                <h3>Wetenschappers</h3>
                <p>
                    In de jaren '70 wordt het AI-verhaal vooral verteld door
                    wetenschappers, die waarschuwen en nuanceren, terwijl
                    niet-wetenschappers — vooral uit het bedrijfsleven — AI
                    framen als vooruitgang en economische kans.
                </p>
            </div>
            <img src="/images/decade-1/wetenschappers.png" alt="" />
            <span></span>
        </article>
    </div>

    <div class="bottom-content">
        <article>
            <div class="text-container">
                <h3>De telegraaf</h3>
                <p>
                    In de jaren zeventig schreef De Telegraaf over technologie
                    vanuit het bedrijfsleven en toekomstbeelden, in een
                    optimistische en spectaculaire toon. Computers en AI werden
                    gepresenteerd als innovaties die ons leven ingrijpend zouden
                    veranderen, met nadruk op vooruitgang en belofte.
                </p>
            </div>
            <img src="/images/decade-1/decade1_newspaper.png" alt="" />
            <span></span>
        </article>

        <article>
            <img src="/images/decade-1/decade1_quote.png" alt="" />
            <span></span>
        </article>

        <article>
            <div class="text-container">
                <h3>U kunt nu kennis maken met Shaky</h3>
                <p>
                    Shaky was een experimentele robot uit 1972, ontwikkeld bij
                    SRI International, die zelfstandig kon waarnemen, redeneren
                    en bewegen.<br />
                    Het was de eerste robot die kunstmatige intelligentie gebruikte
                    om plannen te maken en die plannen ook in de echte wereld uit
                    te voeren.
                </p>
            </div>
            <img src="/images/decade-1/shaky.png" alt="" />
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
            dateRange={["1970-01-01", "1980-01-01"]}
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

    <img src="/images/decade-1/decade1_bg.png" alt="" />

    <div class="y-axis">
        <p>Positief</p>
        <p>Negatief</p>
    </div>
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

    li .period-intro {
        max-width: 20rem;
    }

    li .period-intro h2 {
        font-family: "Fette";
        font-weight: 400;
        font-style: normal;
        font-size: 3.5rem;
    }

    li .period-intro p {
        font-family: "inria";
        font-weight: 400;
        font-style: normal;
        font-size: 1.4rem;
    }

    .top-content {
        left: var(--inline-padding);
        width: calc(100% - var(--inline-padding));
    }

    .bottom-content {
        left: var(--inline-padding);
        width: calc(100% - var(--inline-padding));
    }

    .chart-container {
        padding-left: var(--inline-padding);
    }

    .zero-line {
        width: calc(100% - var(--inline-padding));
        background: var(--decade1-black);
    }

    span {
        --dash-line: var(--decade1-black);
    }

    .text-container h3 {
        font-family: "letter";
        font-weight: 700;
    }

    .text-container p {
        font-family: "letter";
        font-weight: 400;
    }

    /* ========================================== */
    /* TOP CONTENT */
    /* ========================================== */

    /* -------------------------- */
    /* 1st ARTICLE */
    /* -------------------------- */

    .top-content article:nth-of-type(1) {
        left: 25%;
    }

    .top-content article:nth-of-type(1) .text-container {
        max-width: 50%;
        right: 10%;
        bottom: 22%;
    }

    .top-content article:nth-of-type(1) span {
        height: 50%;
        left: 30%;
    }

    .top-content article:nth-of-type(1) img {
        top: 0;
        left: 12.5%;
        height: 44%;
    }

    /* -------------------------- */
    /* 2nd ARTICLE */
    /* -------------------------- */

    .top-content article:nth-of-type(2) {
        left: 60%;
    }

    .top-content article:nth-of-type(2) .text-container {
        max-width: 90%;
        left: 5%;
        top: 15%;
    }

    .top-content article:nth-of-type(2) span {
        height: 50%;
        left: 5%;
    }

    .top-content article:nth-of-type(2) img {
        bottom: 5%;
        right: 12.5%;
        height: 50%;
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
        left: 3%;
    }

    .bottom-content article:nth-of-type(1) .text-container {
        max-width: 55%;
        right: 5%;
        bottom: 15%;
    }

    .bottom-content article:nth-of-type(1) span {
        height: 30%;
        left: 20%;
    }

    .bottom-content article:nth-of-type(1) img {
        bottom: 5%;
        left: 0%;
        height: 60%;
        mix-blend-mode: multiply;
    }

    /* -------------------------- */
    /* 2nd ARTICLE */
    /* -------------------------- */

    .bottom-content article:nth-of-type(2) {
        left: 50%;
        translate: -50%;
    }

    .bottom-content article:nth-of-type(2) span {
        height: 50%;
        left: 50%;
    }

    .bottom-content article:nth-of-type(2) img {
        bottom: 5%;
        right: 0%;
        width: 100%;
    }

    /* -------------------------- */
    /* 3rd ARTICLE */
    /* -------------------------- */

    .bottom-content article:nth-of-type(3) {
        right: 0%;
    }

    .bottom-content article:nth-of-type(3) .text-container {
        max-width: 50%;
        right: 5%;
        bottom: 7.5%;
    }

    .bottom-content article:nth-of-type(3) span {
        height: 30%;
        left: 50%;
    }

    .bottom-content article:nth-of-type(3) img {
        bottom: 0%;
        left: 5%;
        height: 90%;
    }

    /* ========================================== */
    /* Y axis */
    /* ========================================== */

    .y-axis {
        position: absolute;
        left: 5rem;
        top: 50%;
        translate: 0 -50%;
        height: 400px;
        width: 4px;
        background: black;
    }

    .y-axis p {
        position: absolute;
        left: -4em;
        rotate: -90deg;
        font-family: "letter";
        font-weight: 700;
        font-size: 0.8rem;
    }

    .y-axis p:first-of-type {
        top: 0;
        translate: 0 170%;
    }

    .y-axis p:last-of-type {
        bottom: 0;
        translate: 0 -170%;
    }

    .y-axis::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 50%;
        translate: -50% 0;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 10px solid black;
    }

    .y-axis::before {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        translate: -50% 0;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 10px solid black;
    }
</style>
