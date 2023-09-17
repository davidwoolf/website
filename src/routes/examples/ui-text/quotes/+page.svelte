<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <blockquote
      cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
      <p>
        The &lt;blockquote&gt; HTML element indicates that the enclosed text is an
        extended quotation.
      </p>
      <footer>
        <cite
          >— MDN Web Docs, <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"
            target="_blank"
            >https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote</a
          ></cite>
      </footer>
    </blockquote>

    <p>
      In contrast, <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"
        >The &lt;q&gt; HTML element indicates that the enclosed text is a short inline
        quotation</q>
    </p>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
<p>
  The <blockquote> HTML element indicates that the enclosed text is an
  extended quotation.
</p>
<footer>
  <cite>
    — MDN Web Docs, 
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" target="_blank">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote</a>
  </cite>
</footer>
</blockquote>

<p>In contrast, <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">The <q> HTML element indicates that the enclosed text is a short inline quotation</q></p>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`blockquote {
  background-color: rgb(19 78 74 / 0.1);
  margin: 0;
  padding: 1rem;
}

blockquote p {
  font-size: 1.125rem;
  margin: 0;
}

blockquote footer {
  margin: 0.5rem 0 0;
}

blockquote cite {
  font-style: normal;
  font-size: 0.875rem;
}`} />
  </div>
</Tabs>

<style>
  .tab__preview {
    padding: 2rem;
  }

  blockquote {
    background-color: rgb(19 78 74 / 0.1);
    margin: 0;
    padding: 1rem;
  }

  blockquote p {
    font-size: 1.125rem;
    margin: 0;
  }

  blockquote footer {
    margin: 0.5rem 0 0;
  }

  blockquote cite {
    font-style: normal;
    font-size: 0.875rem;
  }
</style>
