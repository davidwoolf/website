<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="color-mix">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>

    <div class="current-color">
      <span> current color </span>
    </div>
    <div class="list">test</div>
    srgb
    <div class="color color1" />
    srgb-linear
    <div class="color color2" />
    display-p3
    <div class="color color3" />
    prophoto-rgb
    <div class="color color4" />
    rec2020
    <div class="color color5" />
    xyz
    <div class="color color6" />
    xyz-d50
    <div class="color color7" />
    xyz-d65
    <div class="color color8" />
    <!-- <div class="oklab" />
    <div class="oklch" /> -->
    <!-- <div class="hex" />
    <div class="rgb" />
    <div class="hsl" />
    <div class="hwb" />
    <div class="lab" />
    <div class="lch" />
    <div class="oklab" />
     -->
  </div>

  <div slot="html" class="tab__code">
    <Code language="html" code={``} />
  </div>
  <div slot="css" class="tab__code">
    <Code language="css" code={``} />
  </div>
</Tabs>

<style>
  .tab__preview {
    align-items: center;
    height: 100%;
    overflow: scroll;
    width: 24rem;
  }

  .color {
    background: linear-gradient(to right, var(--start), var(--end));
    /* background: var(--start); */
    height: 3rem;
    margin: 0 auto;
  }

  .color1 {
    background: linear-gradient(90deg in lch longer hue, var(--start), var(--end));
    --start: color(srgb 1 0 0);
    --end: color(srgb 0 1 1);
  }

  .color2 {
    background: linear-gradient(in srgb-linear to right, var(--start), var(--end));
    --start: color(srgb-linear 1 0 0);
    --end: color(srgb-linear 0 1 1);
  }

  .color3 {
    --start: color(display-p3 1 50% 0);
    --end: color(display-p3 0 0 1);
  }

  .color4 {
    --start: color(prophoto-rgb 1 50% 0);
    --end: color(prophoto-rgb 0 0 1);
  }

  .color5 {
    --start: color(rec2020 1 50% 0);
    --end: color(rec2020 0 0 1);
  }

  .color6 {
    --start: color(xyz 1 50% 0);
    --end: color(xyz 0 0 1);
  }

  .color7 {
    --start: color(xyz-d50 1 50% 0);
    --end: color(xyz 0 0 1);
  }

  .color8 {
    --start: color(xyz-d65 1 50% 0);
    --end: color(xyz 0 0 1);
  }

  .hex {
    --start: #f00;
    --end: #00f;
  }

  .rgb {
    --start: rgb(255 0 0);
    --end: rgb(0 0 255);
  }

  .hsl {
    --start: hsl(0 100% 50%);
    --end: hsl(240 100% 50%);
  }

  .hwb {
    --start: hwb(0 0% 0%);
    --end: hwb(240 0% 0%);
  }

  .lab {
    --start: lab(50% 125 125);
    --end: lab(10% 0 -125);
  }

  .lch {
    --start: lch(62.8% 100% 29.2338851923426);
    --end: lch(60% 50% 240);
  }

  .oklab {
    --start: oklab(100% 100% 100%);
    --end: oklab(50% -0.3 -0.4);
  }

  .oklch {
    --start: oklch(62.8% 0.4 29.2338851923426);
    --end: oklch(60% 0.4 240);
  }

  .list {
    background: repeating-radial-gradient(
      rgb(0 0 255 / 0.05) 0 10%,
      rgb(255 255 255 / 0.05) 10% 20%
    );
    /* background: radial-gradient(blue 0 50%, white 50% 100%); */
    background-size: 35px 35px;
    height: 200px;
    margin-top: -100px;
    position: sticky;
    top: 200px;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }

  :root {
    color-scheme: light dark;
  }

  .current-color {
    color-scheme: dark;
    background: Canvas;
    color: CanvasText;
    height: 200px;

    /* AccentColor
    AccentColorText
    ActiveText
    ButtonBorder
    ButtonFace
    ButtonText
    Canvas
    CanvasText
    Field
    FieldText
    GrayText
    Highlight
    HighlightText
    LinkText
    Mark
    MarkText
    VisitedText */
  }

  .color-mix {
    align-items: center;
    display: flex;

    height: 6rem;
    justify-content: center;
  }

  .color-mix {
    color: red;
    filter: opacity(0.5) drop-shadow(0 0 3px rgb(0 0 0 / 0.3)) opacity(0.5);
  }

  .color-mix:active {
  }

  .color-mix div {
    flex: 1;
    height: 2rem;
  }

  .color-mix div:nth-child(1) {
    background-color: color-mix(in srgb, red 70%, transparent 30%);
    position: relative;
    z-index: 2;
  }

  .color-mix div:nth-child(2) {
    background-color: color-mix(in srgb-linear, red, yellow);
    margin-left: -1rem;
  }

  .color-mix div:nth-child(3) {
    background-color: color-mix(in hsl, red, yellow);
  }

  .color-mix div:nth-child(4) {
    background-color: color-mix(in lab, red, yellow);
  }

  .color-mix div:nth-child(5) {
    background-color: color-mix(in oklab, red, yellow);
  }

  .color-mix div:nth-child(6) {
    background-color: color-mix(in oklch, red, yellow);
  }
</style>
