<script>
    import TimeSeriesChart from "./TimeSeriesChart.svelte";
    export let data;
    export let distribution;
    export let gender;
    export let expertise;
    export let dataScale;
    // Add a color and style for the line and dots specific to this decade
    const lineColor = "var(--decade2-line)";
    const lineWidth = 1;
    const lineDash = "0 0";
    const pointColor = "var(--decade2-dot)";
    const pointSize = 3;
</script>

<li>
    <div class="period-intro">
        <h2>1980 - 1989</h2>
        <p>Het grenst aan Science fiction</p>
    </div>

    <div class="top-content">
        <article>
            <div class="text-container">
                <h3>Grootmeester Genna</h3>
                <p>
                    Gennadi Sosonko is een schaakgrootmeester die in kranten
                    wordt geciteerd over het verschil tussen mens en
                    schaakcomputer. Hij benadrukt dat schakers intuïtie, emoties
                    en afleiding hebben, iets wat computers missen. Zo laat hij
                    zien dat menselijke intelligentie anders werkt dan die van
                    een machine.
                </p>
            </div>
            <img src="/images/decade-2/grootmeester_genna.png" alt="" />
            <span></span>
        </article>

        <article>
            <div class="text-container">
                <h3>Gameboy</h3>
                <p>
                    Gennadi Sosonko is een schaakgrootmeester die in kranten
                    wordt geciteerd over het verschil tussen mens en
                    schaakcomputer. Hij benadrukt dat schakers intuïtie, emoties
                    en afleiding hebben, iets wat computers missen. Zo laat hij
                    zien dat menselijke intelligentie anders werkt dan die van
                    een machine.
                </p>
            </div>
            <img src="/images/decade-2/gameboy.png" alt="" />
            <span></span>
        </article>
    </div>

    <div class="bottom-content">
        <article>
            <div class="text-container">
                <h3>Sport vs. wetenschap</h3>
                <p>
                    In de jaren '80 wordt er, anders dan in de jaren '70, niet
                    alleen door wetenschappers en bedrijven over AI gesproken,
                    maar ook door gewone mensen. Door schaakcomputers verschijnt
                    AI in de sportwereld, een herkenbare context voor een breed
                    publiek. Hierdoor wordt AI zichtbaarder en een onderwerp
                    waar meer mensen over meepraten.
                </p>
            </div>
            <img src="/images/decade-2/newspaper.png" alt="" />
            <span></span>
        </article>

        <article>
            <img src="/images/decade-2/decade2_quote.png" alt="" />
            <span></span>
        </article>

        <article>
            <div class="text-container">
                <h3>Dagblad</h3>
                <p>
                    Gennadi Sosonko is een schaakgrootmeester die in kranten
                    wordt geciteerd over het verschil tussen mens en
                    schaakcomputer. Hij benadrukt dat schakers intuïtie, emoties
                    en afleiding hebben, iets wat computers missen. Zo laat hij
                    zien dat menselijke intelligentie anders werkt dan die van
                    een machine.
                </p>
            </div>
            <img src="/images/decade-2/decade2_newspaper.png" alt="" />
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
            dateRange={["1980-01-01", "1990-01-01"]}
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

    <img src="/images/decade-2/decade2_bg.png" alt="" />
</li>

<style>
    li {
        --inline-padding: 5rem;
        position: relative;
        max-width: 100vw;
        height: 100%;
        flex-shrink: 0;
        flex-basis: 100%;
        color: white;
        scroll-snap-align: center;
    }

    li .period-intro {
        max-width: 20rem;
    }

    li .period-intro h2 {
        font-family: "apparat-excond", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 3.5rem;
        background: linear-gradient(
            180deg,
            var(--decade2-yellow) 33%,
            var(--decade2-red) 33%,
            var(--decade2-red) 50%,
            var(--decade2-blue) 50%,
            var(--decade2-blue) 66%,
            var(--decade2-pink) 66%,
            var(--decade2-pink) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    li .period-intro p {
        font-family: "bttf";
        font-style: normal;
        font-size: 1rem;
        color: var(--decade2-pink);
    }

    .top-content {
        left: 0;
        width: 100%;
    }

    .bottom-content {
        left: 0;
        width: 100%;
    }

    .zero-line {
        background: linear-gradient(
            90deg,
            var(--decade2-yellow) 20%,
            var(--decade2-red) 20%,
            var(--decade2-red) 40%,
            var(--decade2-green) 40%,
            var(--decade2-green) 60%,
            var(--decade2-blue) 60%,
            var(--decade2-blue) 80%,
            var(--decade2-pink) 80%,
            var(--decade2-pink) 100%
        );
    }

    .text-container h3 {
        font-family: "jura";
    }


    .text-container p {
        font-family: "jura";
    }

    /* ========================================== */
    /* TOP CONTENT */
    /* ========================================== */

    .top-content article {
        position: absolute;
        aspect-ratio: 1 / 0.75;
        width: 30vw;
    }

    /* -------------------------- */
    /* 1st ARTICLE */
    /* -------------------------- */

    .top-content article:nth-of-type(1) {
        left: 25%;
    }

    .top-content article:nth-of-type(1) .text-container {
        max-width: 50%;
        right: 0%;
        bottom: 50%;
    }

    .top-content article:nth-of-type(1) span {
        --dash-line: var(--decade2-red);
        height: 40%;
        left: 20%;
    }

    .top-content article:nth-of-type(1) span::before {
        background: var(--decade2-red);
    }

    .top-content article:nth-of-type(1) span::after {
        background: var(--decade2-black);
        border: 8px solid var(--decade2-red);
    }

    .top-content article:nth-of-type(1) img {
        left: 0%;
        bottom: 50%;
        height: 44%;
    }

    /* -------------------------- */
    /* 2nd ARTICLE */
    /* -------------------------- */

    .top-content article:nth-of-type(2) {
        left: 60%;
    }

    .top-content article:nth-of-type(2) .text-container {
        max-width: 50%;
        right: 0%;
        bottom: 50%;
    }

    .top-content article:nth-of-type(2) span {
        --dash-line: var(--decade2-blue);
        height: 40%;
        left: 50%;
    }

    .top-content article:nth-of-type(2) span::before {
        background: var(--decade2-blue);
    }

    .top-content article:nth-of-type(2) span::after {
        background: var(--decade2-black);
        border: 8px solid var(--decade2-blue);
    }

    .top-content article:nth-of-type(2) img {
        left: 0%;
        bottom: 40%;
        height: 60%;
    }

    /* ========================================== */
    /* BOTTOM CONTENT */
    /* ========================================== */

    .bottom-content article {
        position: absolute;
        aspect-ratio: 1 / 0.6;
        width: 35vw;
    }

    /* -------------------------- */
    /* 1st ARTICLE */
    /* -------------------------- */

    .bottom-content article:nth-of-type(1) {
        left: 0%;
    }

    .bottom-content article:nth-of-type(1) .text-container {
        max-width: 55%;
        left: 20%;
        top: 40%;
    }

    .bottom-content article:nth-of-type(1) span {
        --dash-line: var(--decade2-yellow);
        height: 30%;
        left: 40%;
    }

    .bottom-content article:nth-of-type(1) span::before {
        background: var(--decade2-yellow);
    }

    .bottom-content article:nth-of-type(1) span::after {
        background: var(--decade2-black);
        border: 8px solid var(--decade2-yellow);
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
        left: 45%;
        translate: -50%;
    }

    .bottom-content article:nth-of-type(2) span {
        --dash-line: var(--decade2-green);
        height: 50%;
        left: 50%;
    }

    .bottom-content article:nth-of-type(2) span::before {
        background: var(--decade2-green);
    }

    .bottom-content article:nth-of-type(2) span::after {
        background: var(--decade2-black);
        border: 8px solid var(--decade2-green);
    }

    .bottom-content article:nth-of-type(2) img {
        bottom: 5%;
        left: 50%;
        translate: -50%;
        width: 80%;
    }

    /* -------------------------- */
    /* 3rd ARTICLE */
    /* -------------------------- */

    .bottom-content article:nth-of-type(3) {
        right: 0%;
    }

    .bottom-content article:nth-of-type(3) .text-container {
        max-width: 50%;
        left: 0%;
        top: 30%;
    }

    .bottom-content article:nth-of-type(3) span {
        --dash-line: var(--decade2-pink);
        height: 30%;
        right: 50%;
    }

    .bottom-content article:nth-of-type(3) span::before {
        background: var(--decade2-pink);
    }

    .bottom-content article:nth-of-type(3) span::after {
        background: var(--decade2-black);
        border: 8px solid var(--decade2-pink);
    }

    .bottom-content article:nth-of-type(3) img {
        bottom: 20%;
        right: 10%;
        height: 70%;
    }
</style>
