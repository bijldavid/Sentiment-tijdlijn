<script>
    import TimeSeriesChart from "./TimeSeriesChart.svelte";
    export let data;
    export let distribution;
    export let gender;
    export let expertise;
    export let dataScale;
    // Add a color and style for the line and dots specific to this decade
    const lineColor = "var(--decade3-line)";
    const lineWidth = 2;
    const lineDash = "0 0";
    const pointColor = "var(--decade3-dot)";
    const pointSize = 2;
</script>

<li>
    <div class="period-intro">
        <h2>1990 - 1999</h2>
        <p>Computers beginnen bijna menselijk te lijken</p>
    </div>

    <div class="top-content">
        <article>
            <div class="text-container">
                <h3>Robot Ronald nog te slecht voor WK</h3>
                <p>
                    Voetbalrobots worden in de jaren ’90 gebruikt als
                    laagdrempelige testomgeving voor kunstmatige intelligentie.
                    De nadruk ligt op de tekortkomingen van de robots:
                    traagheid, gebrekkige coördinatie en beperkt inzicht. De
                    technologie wordt gepresenteerd als experimenteel en speels,
                    niet als serieuze vervanging van menselijke sport.
                </p>
            </div>
            <img src="/images/decade-3/robotronald.png" alt="" />
            <span></span>
        </article>

        <article>
            <div class="text-container">
                <h3>Science fiction</h3>
                <p>
                    In de jaren ’90 werd technologie vaak uitgelegd via
                    sciencefiction. Kranten schreven regelmatig over Stanley
                    Kubrick en Steven Spielberg, zoals in Kubrick terug bij
                    science fiction en Spielberg maakt filmproject Kubrick af.
                    Films over kunstmatige intelligentie maakten nieuwe
                    technologie begrijpelijk voor een groot publiek.
                    Sciencefiction vormde zo een brug tussen fantasie en
                    werkelijkheid. Het liet mogelijke toekomsten zien, maar riep
                    ook twijfel en vragen op. Technologie werd daardoor tegelijk
                    spannend en onzeker voorgesteld.
                </p>
            </div>
            <img src="/images/decade-3/kubricka.png" alt="" />
            <span></span>
        </article>
    </div>

    <div class="bottom-content">
        <article>
            <div class="text-container">
                <h3>Spraakherkenning</h3>
                <p>
                    In de jaren ’90 wordt spraakherkenning in de media neergezet
                    als een technologie die bijna bruikbaar is, maar nog
                    duidelijk tekortschiet. Artikelen uit De Telegraaf en NRC
                    Handelsblad benadrukken zowel de vooruitgang als de
                    beperkingen. Vooral accenten, context en natuurlijke taal
                    blijken problematisch. Spraakherkenning fungeert in dit
                    decennium daardoor vooral als illustratie van hoe complex
                    menselijke communicatie is voor computers.
                </p>
            </div>
            <img src="/images/decade-3/spraakherkenning.png" alt="" />
            <span></span>
        </article>

        <article>
            <img src="/images/decade-3/decade3_quote.png" alt="" />
            <span></span>
        </article>

        <article>
            <div class="text-container">
                <h3>Trouw</h3>
                <p>
                    Voetbalrobots worden in de jaren ’90 gebruikt als
                    laagdrempelige testomgeving voor kunstmatige intelligentie.
                    Dit blijkt uit titels als Voetbalrobots in actie, Duitsland
                    wordt kampioen voetbal – voor robots en Robot Ronald nog te
                    slecht voor WK. De nadruk ligt op de tekortkomingen van de
                    robots: traagheid, gebrekkige coördinatie en beperkt
                    inzicht. De technologie wordt gepresenteerd als
                    experimenteel en speels, niet als serieuze vervanging van
                    menselijke sport.
                </p>
            </div>
            <img src="/images/decade-3/decade3_newspaper.png" alt="" />
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
            dateRange={["1990-01-01", "2000-01-01"]}
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

    <img src="/images/decade-3/decade3_bg.png" alt="" />
</li>

<svg style="position: fixed;">
    <defs>
        <filter id="pixelate-mosaic" x="0%" y="0%" width="100%" height="100%">
            <feGaussianBlur
                stdDeviation="0.3"
                in="SourceGraphic"
                result="smoothed"
            />
            <feImage
                width="3"
                height="3"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWSURBVAgdY1ywgOEDAwKxgJhIgFQ+AP/vCNK2s+8LAAAAAElFTkSuQmCC"
                result="displacement-map"
            />
            <feTile in="displacement-map" result="pixelate-map" />
            <feDisplacementMap
                in="smoothed"
                in2="pixelate-map"
                xChannelSelector="R"
                yChannelSelector="G"
                scale="5"
                result="pre-final"
            />
            <feComposite operator="in" in2="SourceGraphic" />
        </filter>

        <filter id="pixelate200" x="0" y="0">
            <feFlood x="0.75" y="0.75" height="1" width="1" />
            <feComposite width="2.5" height="2.5" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="0.75" />
        </filter>
    </defs>
</svg>

<style>
    li {
        --inline-padding: 5rem;
        position: relative;
        max-width: 100vw;
        height: 100%;
        flex-shrink: 0;
        flex-basis: 100%;
        color: var(--decade3-brown);
        scroll-snap-align: center;
    }

    li .period-intro {
        max-width: 20rem;
    }

    li .period-intro h2 {
        font-family: "ppneuebit", sans-serif;
        font-size: 3.5rem;
    }

    li .period-intro p {
        font-family: "ppneuebit", sans-serif;
        text-transform: uppercase;
        font-size: 2rem;
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
        background: var(--decade3-brown);
    }

    .text-container h3 {
        text-transform: uppercase;
        font-family: "ppneuebit", sans-serif;
    }

    .text-container p {
        font-family: "ppneuebit", sans-serif;
        font-size: 0.8vw;
        line-height: 1.2em;
    }

    li span {
        --dash-line: var(--decade3-brown);
        filter: url(#pixelate200);
    }

    li span::before {
        background: var(--decade3-brown);
    }

    li span::after {
        background: var(--decade3-white);
        border: 8px solid var(--decade3-brown);
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
        right: 27.5%;
        bottom: 40%;
    }

    .top-content article:nth-of-type(1) span {
        height: 30%;
        left: 22.5%;
    }

    .top-content article:nth-of-type(1) img {
        left: 12.5%;
        bottom: 40%;
        height: 50%;
    }

    /* -------------------------- */
    /* 2nd ARTICLE */
    /* -------------------------- */

    .top-content article:nth-of-type(2) {
        right: 5%;
    }

    .top-content article:nth-of-type(2) .text-container {
        max-width: 35%;
        right: 27.5%;
        bottom: 40%;
    }

    .top-content article:nth-of-type(2) span {
        height: 30%;
        left: 22.5%;
    }

    .top-content article:nth-of-type(2) img {
        left: 12.5%;
        bottom: 40%;
        height: 50%;
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
        max-width: 45%;
        right: 0%;
        top: 45%;
    }

    .bottom-content article:nth-of-type(1) span {
        height: 30%;
        left: 27%;
    }

    .bottom-content article:nth-of-type(1) img {
        top: 40%;
        left: 0%;
        height: 50%;
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
        top: 60%;
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
        right: 5%;
        top: 45%;
    }

    .bottom-content article:nth-of-type(3) span {
        height: 30%;
        right: 60%;
    }

    .bottom-content article:nth-of-type(3) img {
        top: 40%;
        left: 0%;
        height: 60%;
    }
</style>
