<script>
  import { onMount } from "svelte";
  import Decade1970s from "$lib/components/Decade1970s.svelte";
  import Decade1980s from "$lib/components/Decade1980s.svelte";
  import Decade1990s from "$lib/components/Decade1990s.svelte";
  import Decade2000s from "$lib/components/Decade2000s.svelte";
  import Decade2010s from "$lib/components/Decade2010s.svelte";
  import Decade2020s from "$lib/components/Decade2020s.svelte";
  export let data;

  const raw = data.data;

  let distribution = "mean"; // "mean" | "median" | "raw"
  let gender = "both"; // "male" | "female" | "both"
  let expertise = "both"; // "expert" | "non-expert" | "both"
  let dataScale = "0"; // "0" (day) | "1" (week) | "2" (month) | "3" (year)

  onMount(() => {
    const items = document.querySelectorAll("li");
    const detailsElement = document.querySelector("details");
    const tooltipElement = document.querySelector(".tool-tip");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            // Remove all existing period classes
            for (let i = 1; i <= 6; i++) {
              detailsElement.classList.remove(`period-${i}`);
              tooltipElement.classList.remove(`period-${i}`);
            }

            // Get the index and add the corresponding period class
            const allItems = Array.from(items);
            const itemIndex = allItems.indexOf(entry.target);
            const periodClass = `period-${itemIndex + 1}`;
            detailsElement.classList.add(periodClass);
            tooltipElement.classList.add(periodClass);
          }
        });
      },
      {
        threshold: 0.5,
        root: document.querySelector("ul"),
      },
    );

    items.forEach((item) => observer.observe(item));
  });
</script>

<section>
  <!-- ======================================================== -->
  <!-- FILTER CONTROLS -->
  <!-- ======================================================== -->

  <details>
    <summary>
      <div class="details-icon"><span></span><span></span></div>
      <p>Kies filters</p>
    </summary>
    <form>
      <fieldset>
        <legend>Data verdeling</legend>
        <label for="mean"
          >Gemiddelde
          <input
            id="mean"
            value="mean"
            type="radio"
            name="distribution"
            bind:group={distribution}
          />
        </label>
        <label for="median"
          >Mediaan
          <input
            id="median"
            value="median"
            type="radio"
            name="distribution"
            bind:group={distribution}
          />
        </label>
        <label for="raw"
          >Ruwe data
          <input
            id="raw"
            value="raw"
            type="radio"
            name="distribution"
            bind:group={distribution}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Kies geslacht</legend>
        <label for="male"
          >Man
          <input
            id="male"
            value="male"
            type="radio"
            name="gender"
            bind:group={gender}
          />
        </label>
        <label for="female"
          >Vrouw
          <input
            id="female"
            value="female"
            type="radio"
            name="gender"
            bind:group={gender}
          />
        </label>
        <label for="both-gender"
          >Beide
          <input
            id="both-gender"
            value="both"
            type="radio"
            name="gender"
            bind:group={gender}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Expert / non expert</legend>
        <label for="expert"
          >Expert
          <input
            id="expert"
            value="expert"
            type="radio"
            name="expertise"
            bind:group={expertise}
          />
        </label>
        <label for="non-expert"
          >Non Expert
          <input
            id="non-expert"
            value="non-expert"
            type="radio"
            name="expertise"
            bind:group={expertise}
          />
        </label>
        <label for="both-expertise"
          >Beide
          <input
            id="both-expertise"
            value="both"
            type="radio"
            name="expertise"
            bind:group={expertise}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Data schaal</legend>
        <label for="data-scale"
          >Data schaal: {["Dag", "Week", "Maand", "Jaar"][dataScale]}
          <input
            type="range"
            id="data-scale"
            name="data-scale"
            min="0"
            max="3"
            bind:value={dataScale}
          />
        </label>
      </fieldset>
    </form>
  </details>

  <!-- ======================================================== -->
  <!-- CHARTS -->
  <!-- ======================================================== -->

  <ul>
    <div class="y-axis"></div>
    <Decade1970s data={raw} {distribution} {gender} {expertise} {dataScale} />
    <Decade1980s data={raw} {distribution} {gender} {expertise} {dataScale} />
    <Decade1990s data={raw} {distribution} {gender} {expertise} {dataScale} />
    <Decade2000s data={raw} {distribution} {gender} {expertise} {dataScale} />
    <Decade2010s data={raw} {distribution} {gender} {expertise} {dataScale} />
    <Decade2020s data={raw} {distribution} {gender} {expertise} {dataScale} />

    <div class="tool-tip"></div>
  </ul>
</section>

<style>
  section {
    height: 100%;
  }

  section details {
    --details-size: max-content;

    position: fixed;
    top: 1rem;
    right: 1rem;
    /* padding: 1.5rem; */
    width: 27rem;
    z-index: 1000;
    transition:
      background-color 0.5s ease,
      border-radius 0.5s ease,
      border 0.5s ease;
  }

  section details summary {
    position: relative;
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    padding: 1.5rem;
    gap: 1rem;
  }

  section details summary p {
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    left: 4rem;
    transition: color 0.5s ease;
  }

  details summary .details-icon {
    position: relative;
    display: grid;
    place-items: center;
    height: 1rem;
    aspect-ratio: 1;
    transition: rotate 0.3s ease;
  }

  details summary:hover .details-icon {
    rotate: z 180deg;
  }

  details summary .details-icon span {
    position: absolute;
    display: block;
    height: 100%;
    width: 2px;
    transition:
      background-color 0.5s ease,
      width 0.5s ease;
  }

  details summary .details-icon span:nth-of-type(1) {
    rotate: z 0deg;
    transition: rotate 0.15s ease;
  }

  details[open] summary .details-icon span:nth-of-type(1) {
    rotate: z 90deg;
  }

  details summary .details-icon span:nth-of-type(2) {
    rotate: z 90deg;
  }

  section details form {
    display: grid;
    gap: 1.5rem;
    padding: 0 1.5rem 2rem 1.5rem;
  }

  section details form fieldset {
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 2rem;
  }

  section details form fieldset label {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    transition: color 0.5s ease;
  }

  section details form fieldset label::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    right: -1rem;
    top: 0;
    transition: background-color 0.5s ease;
  }

  section details form fieldset:last-of-type label {
    display: grid;
    gap: 0.5rem;
    white-space: nowrap;
    border: none;
    transition: color 0.5s ease;
  }

  section details form fieldset label:last-of-type::before,
  section details form fieldset:last-of-type label::before {
    display: none;
  }

  section details form fieldset legend {
    font-weight: bold;
    margin-bottom: 0.5rem;
    transition: color 0.5s ease;
  }

  section details form fieldset label input[type="radio"] {
    position: relative;
    appearance: none;
    height: 0.75rem;
    aspect-ratio: 1;
    transition:
      background-color 0.5s ease,
      border-radius 0.5s ease,
      border 0.5s ease;
  }

  section details form fieldset label input[type="radio"]:checked::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    height: 0.5rem;
    aspect-ratio: 1;
    transition:
      background-color 0.5s ease,
      border-radius 0.5s ease;
  }

  section details form fieldset:last-of-type label {
    width: 100%;
  }

  section details form fieldset:not(:last-of-type) label input {
    order: -1;
  }

  section details form fieldset label input[type="range"] {
    margin-top: 0.5rem;
  }

  @supports (interpolate-size: allow-keywords) {
    details {
      max-height: var(--details-size);
      overflow-x: hidden;
    }

    details::details-content {
      block-size: 0;
      transition:
        block-size 0.3s ease,
        content-visibility 0.3s ease allow-discrete;
    }

    details:open::details-content {
      block-size: var(--details-size);
    }
  }

  input[type="range"] {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    outline: none;
    z-index: 1;
    transition:
      background-color 0.5s ease,
      border 0.5s ease,
      border-radius 0.5s ease;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    transition:
      background-color 0.5s ease,
      border 0.5s ease,
      border-radius 0.5s ease;
  }

  input[type="range"]::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    transition:
      background-color 0.5s ease,
      border 0.5s ease,
      border-radius 0.5s ease;
  }

  /* ========================================== */
  /* CHART CAROUSEL */
  /* ========================================== */

  section ul {
    height: 100%;
    display: flex;
    overflow: scroll;
    scroll-snap-type: x mandatory;
  }

  /* ========================================== */
  /* TOOLTIP */
  /* ========================================== */

  .tool-tip {
    position: fixed;
    padding: 1rem;
    opacity: 0;
    translate: -50% -100%;
    pointer-events: none;
    transition: opacity 150ms ease;
    z-index: 1000;
    max-width: 25rem;
  }

  .tool-tip::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50% 100%;
    height: 20px;
    width: 20px;
    z-index: -1;
  }
</style>
