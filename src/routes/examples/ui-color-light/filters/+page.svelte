<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="filters">
      <div>
        <div class="blur" />
        <p>blur</p>
      </div>
      <div>
        <div class="brightness" />
        <p>brightness</p>
      </div>
      <div>
        <div class="contrast" />
        <p>contrast</p>
      </div>
      <div>
        <div class="drop-shadows" />
        <p>drop-shadows</p>
      </div>
      <div>
        <div class="grayscale" />
        <p>grayscale</p>
      </div>
      <div>
        <div class="hue-rotate" />
        <p>hue-rotate</p>
      </div>
      <div>
        <div class="invert" />
        <p>invert</p>
      </div>
      <div>
        <div class="opacity" />
        <p>opacity</p>
      </div>
      <div>
        <div class="saturate" />
        <p>saturate</p>
      </div>
      <div>
        <div class="sepia" />
        <p>sepia</p>
      </div>
    </div>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<div class="blur" />
<div class="brightness" />
<div class="contrast" />
<div class="drop-shadows" />
<div class="grayscale" />
<div class="hue-rotate" />
<div class="invert" />
<div class="opacity" />
<div class="saturate" />
<div class="sepia" />`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`.blur,
.brightness,
.contrast,
.drop-shadows,
.grayscale,
.hue-rotate,
.invert,
.opacity,
.saturate,
.sepia {
  aspect-ratio: 1 / 1;
  background-image: url("./picture.png");
  background-size: cover;
  border-radius: 100%;
  height: 5rem;
  width: 5rem;
}

.blur {
  filter: blur(0.25rem);
}

.brightness {
  filter: brightness(150%);
}

.contrast {
  filter: contrast(50%);
}

.drop-shadows {
  filter: drop-shadow(0 0 5px black);
}

.grayscale {
  filter: grayscale(100%);
}

.hue-rotate {
  filter: hue-rotate(35deg);
}

.invert {
  filter: invert(100%);
}

.opacity {
  filter: opacity(0.4);
}

.saturate {
  filter: saturate(300%);
}

.sepia {
  filter: sepia(100%);
}`} />
  </div>
</Tabs>

<style>
  .tab__preview {
    align-items: center;
    height: 100%;
    overflow: scroll;
    padding: 2rem;
    width: 100%;
  }

  .filters {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 1rem;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 480px) {
    .filters {
      grid-template-columns: repeat(5, max-content);
    }
  }

  .filters p {
    color: rgb(55 65 81 / 0.7);
    font-size: 0.75rem;
    font-weight: 400;
    text-align: center;
  }

  .blur,
  .brightness,
  .contrast,
  .drop-shadows,
  .grayscale,
  .hue-rotate,
  .invert,
  .opacity,
  .saturate,
  .sepia {
    aspect-ratio: 1 / 1;
    background-image: url("./picture.png");
    background-size: cover;
    border-radius: 100%;
    height: 5rem;
    width: 5rem;
  }

  .blur {
    filter: blur(0.25rem);
  }

  .brightness {
    filter: brightness(150%);
  }

  .contrast {
    filter: contrast(50%);
  }

  .drop-shadows {
    filter: drop-shadow(0 0 5px black);
  }

  .grayscale {
    filter: grayscale(100%);
  }

  .hue-rotate {
    filter: hue-rotate(35deg);
  }

  .invert {
    filter: invert(100%);
  }

  .opacity {
    filter: opacity(0.4);
  }

  .saturate {
    filter: saturate(300%);
  }

  .sepia {
    filter: sepia(100%);
  }
</style>
