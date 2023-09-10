<main class="main">
  <div class="content">
    <slot />
  </div>
</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    overflow: hidden;
    padding: 0;
  }

  .main {
    height: 100vh;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    position: relative;
    width: 100vw;
  }

  .content {
    background-color: #fff;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
    height: 100%;
    position: relative;
    z-index: 10;
  }

  :global(.form) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  :global(.label) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  :global(.label > span) {
    color: rgb(55 65 81);
    font-weight: 500;
    font-size: 0.875rem;
  }

  :global(.input) {
    border: 1px solid rgb(19 78 74 / 0.1);
    border-radius: 0.375rem;
    font-size: 0.875rem;
    height: 2rem;
    padding: 0.5rem;
  }

  :global(.button) {
    background-color: rgb(15 118 110);
    border: 1px solid rgb(15 118 110 / 0.3);
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    color: rgb(255 255 255);
    font-size: 0.875rem;
    font-weight: 500;
    height: 2rem;
    padding: 0.25rem 1rem;
  }

  :global(.button.button__subdued) {
    background-color: rgb(255 255 255);
    color: rgb(4 47 46);
  }

  :global(.tab__code) {
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    overflow: scroll;
  }
</style>
