<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";

  export let data = [];
  export let mode = "median"; // "median" | "mean" | "raw"
  export let dataScale = 0; // 0 (day) | 1 (week) | 2 (month) | 3 (year)
  export let margin = 0;
  export let gender = "both"; // "male" | "female" | "both"
  export let expertise = "both"; // "expert" | "non-expert" | "both"
  export let lineColor = "#0051ff"; // default color
  export let lineWidth = 1; // default thickness
  export let lineDash = null; // default solid
  export let pointColor = "#0051ff"; // default dot color
  export let pointSize = 1.5; // default dot radius

  export let dateRange = null; // [start, end]
  export let bleedDays = 600;

  let svgElement;
  let shouldAnimate = false;
  let tooltip;

  // unique clip id per instance
  const clipId = `clip-${Math.random().toString(36).slice(2)}`;

  onMount(() => {
    tooltip = document.querySelector(".tool-tip");
  });

  function toNumber(v) {
    const n = +v;
    return Number.isFinite(n) ? n : null;
  }

  function normalizeDate(d) {
    const x = d instanceof Date ? d : new Date(d);
    return Number.isNaN(x.getTime()) ? null : x;
  }

  function getBucketFn() {
    switch (dataScale) {
      case 1:
        return d3.timeWeek;
      case 2:
        return d3.timeMonth;
      case 3:
        return d3.timeYear;
      default:
        return d3.timeDay;
    }
  }

  function getAggFn() {
    if (mode === "mean") return (values) => d3.mean(values, (d) => d.score);
    return (values) => d3.median(values, (d) => d.score);
  }

  function prep(raw) {
    // Build maps of source -> gender and source -> expertise value
    const sourceGenderMap = {};
    const sourceExpertiseMap = {};
    for (const item of raw) {
      if (item.source) {
        if (item["Man/Vrouw"] && !sourceGenderMap[item.source]) {
          sourceGenderMap[item.source] = item["Man/Vrouw"];
        }
        if (
          item["AI-expert J/N"] != null &&
          item["AI-expert J/N"] !== "" &&
          !sourceExpertiseMap[item.source]
        ) {
          sourceExpertiseMap[item.source] = item["AI-expert J/N"];
        }
      }
    }

    const parsed = raw
      .filter(
        (d) =>
          d.datum_publicatie != null &&
          String(d.datum_publicatie).trim() !== "",
      )
      .map((d) => ({
        date: new Date(d.datum_publicatie),
        score: toNumber(d.sentiment_score),
        raw: d,
      }))
      .filter((d) => !Number.isNaN(d.date.getTime()) && d.score != null)
      .filter((d) => {
        if (gender === "both") return true;
        // Use gender from the raw object, or fall back to the source's gender from the map
        const genderValue = (
          d.raw["Man/Vrouw"] ||
          sourceGenderMap[d.raw.source] ||
          ""
        ).trim();
        if (gender === "male") return genderValue.toLowerCase() === "man";
        if (gender === "female") return genderValue.toLowerCase() === "vrouw";
        return true;
      })
      .filter((d) => {
        if (expertise === "both") return true;
        // Use expertise from the raw object, or fall back to the source's expertise from the map
        const expertiseValue =
          d.raw["AI-expert J/N"] != null && d.raw["AI-expert J/N"] !== ""
            ? d.raw["AI-expert J/N"]
            : sourceExpertiseMap[d.raw.source];
        if (expertise === "expert")
          return expertiseValue === 1 || expertiseValue === "1";
        if (expertise === "non-expert")
          return expertiseValue === 0 || expertiseValue === "0";
        return true;
      });

    let start = null;
    let end = null;

    if (dateRange?.length === 2) {
      start = normalizeDate(dateRange[0]);
      end = normalizeDate(dateRange[1]);
    }

    let expandedStart = start;
    let expandedEnd = end;

    if (start && end) {
      expandedStart = d3.timeDay.offset(start, -bleedDays);
      expandedEnd = d3.timeDay.offset(end, bleedDays);
    }

    const filtered =
      start && end
        ? parsed.filter((d) => d.date >= expandedStart && d.date <= expandedEnd)
        : parsed;

    const bucketFn = getBucketFn();
    const aggFn = getAggFn();

    let series;

    if (mode === "raw") {
      series = filtered.slice().sort((a, b) => a.date - b.date);
    } else {
      series = d3
        .rollups(
          filtered,
          (values) => ({
            value: aggFn(values),
            count: values.length,
            values,
          }),
          (d) => bucketFn(d.date),
        )
        .map(([date, stats]) => ({
          date,
          score: stats.value,
          count: stats.count,
          raw: stats.values,
        }))
        .filter((d) => Number.isFinite(d.score))
        .sort((a, b) => a.date - b.date);
    }

    return { series, start, end };
  }

  function draw() {
    if (!svgElement || !data.length) return;

    const { series, start, end } = prep(data);
    if (!series.length) return;

    const width = svgElement.clientWidth;
    const height = svgElement.clientHeight;

    const svg = d3
      .select(svgElement)
      .attr("width", width)
      .attr("height", height);

    const t = shouldAnimate
      ? d3.transition().duration(600).ease(d3.easeCubicInOut)
      : d3.transition().duration(0);

    svg
      .select(".clip-rect")
      .attr("x", margin)
      .attr("y", margin)
      .attr("width", Math.max(0, width - margin * 2))
      .attr("height", Math.max(0, height - margin * 2));

    svg.select(".points").selectAll("*").remove();

    const xDomain =
      start && end ? [start, end] : d3.extent(series, (d) => d.date);

    const xScale = d3
      .scaleTime()
      .domain(xDomain)
      .range([margin, width - margin]);

    const verticalPadding = 10;
    const yScale = d3
      .scaleLinear()
      .domain([-1, 1])
      .range([height - margin - verticalPadding, margin + verticalPadding]);

    const isRaw = mode === "raw";

    const line = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.score));

    const lineSelection = svg.select(".line");

    if (!isRaw) {
      lineSelection.datum(series).transition(t)
        .attr("d", line)
        .attr("stroke", lineColor)
        .attr("stroke-width", lineWidth)
        .attr("stroke-dasharray", lineDash || null);
    }
    // if isRaw → do nothing (line geometry stays frozen)

    svg
      .attr("x1", margin)
      .attr("x2", width - margin)
      .attr("y1", yScale(0))
      .attr("y2", yScale(0));

    const points = svg
      .select(".points")
      .selectAll("circle")
      .data(series, (d) => d.date); // key by date for smoother transitions

    const mergedPoints = points.join(
      (enter) =>
        enter
          .append("circle")
          .attr("cx", (d) => xScale(d.date))
          .attr("cy", (d) => yScale(d.score))
          .attr("r", 0)
          .attr("fill", pointColor)
          .call((enter) => enter.transition(t).attr("r", pointSize)),

      (update) =>
        update.call((update) =>
          update
            .transition(t)
            .attr("cx", (d) => xScale(d.date))
            .attr("cy", (d) => yScale(d.score))
            .attr("fill", pointColor)
            .attr("r", pointSize)
        ),

      (exit) => exit.call((exit) => exit.transition(t).attr("r", 0).remove()),
    );

    // Ensure circles can receive pointer events
    mergedPoints.style("pointer-events", "all");


    // Add hover interactions
    mergedPoints
      .on("mouseenter", function(event, d) {
        if (!tooltip) {
          console.warn("tooltip element not found");
          return;
        }
        
        // Get the content to display
        let content;
        if (mode === "raw") {
          // In raw mode, d.raw is a single object
          content = d.raw?.content || "No content available";
        } else {
          // In aggregated mode, d.raw is an array of values
          // Pick a random one from the array
          const values = Array.isArray(d.raw) ? d.raw : [];
          if (values.length > 0) {
            const randomIndex = Math.floor(Math.random() * values.length);
            const randomItem = values[randomIndex];
            content = randomItem.raw?.content || "No content available";
          } else {
            content = "No content available";
          }
        }
        
        // Capitalize first character and wrap in quotes
        const formattedContent = content.charAt(0).toUpperCase() + content.slice(1);
        tooltip.textContent = `"${formattedContent}"`;
        
        tooltip.style.opacity = "1";
        tooltip.style.left = `${event.pageX + 0}px`;
        tooltip.style.top = `${event.pageY - 20}px`;
      })
      .on("mousemove", function(event) {
        if (!tooltip) return;
        tooltip.style.left = `${event.pageX + 0}px`;
        tooltip.style.top = `${event.pageY - 20}px`;
      })
      .on("mouseleave", function() {
        if (!tooltip) return;
        tooltip.style.opacity = "0";
      });
  }

  $: gender,
    expertise,
    mode,
    dataScale,
    data,
    (() => {
      shouldAnimate = true;
      draw();
    })();

  onMount(() => {
    draw();

    // Set up ResizeObserver to redraw chart on container resize
    const resizeObserver = new ResizeObserver(() => {
      shouldAnimate = false;
      draw();
    });

    resizeObserver.observe(svgElement.parentElement);

    return () => {
      resizeObserver.disconnect();
    };
  });
</script>

<div class="svg-container" class:raw={mode === "raw"}>
  <svg bind:this={svgElement}>
    <defs>
      <clipPath id={clipId}>
        <rect class="clip-rect" />
      </clipPath>
    </defs>

    <g class="plot" clip-path={`url(#${clipId})`}>
      <path class="line"></path>
      <g class="points"></g>
    </g>
  </svg>
</div>

<style>
  .svg-container {
    width: 100%;
    height: 400px;
  }

  .svg-container svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  :global(.line) {
    fill: none;
    opacity: 0.9;
  }

  .line {
    transition: opacity 0.2s ease;
  }

  :global(.raw .line) {
    opacity: 0;
  }
</style>
