import { d as store_get, i as attributes, p as unsubscribe_stores } from "../../../../../chunks/dev.js";
import { n as Code, r as createDialog, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/button/aria-expanded/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const { elements: { trigger, overlay, content, title, description, close, portalled }, states: { open } } = createDialog({ forceVisible: true });
		Tabs($$renderer, {
			tabs: [
				"preview",
				"html",
				"css"
			],
			$$slots: {
				preview: ($$renderer) => {
					$$renderer.push(`<div slot="preview"><button${attributes({
						...store_get($$store_subs ??= {}, "$trigger", trigger),
						class: "open-dialog"
					}, "svelte-16rz71x")}>open dialog</button> <div${attributes({ ...store_get($$store_subs ??= {}, "$portalled", portalled) }, "svelte-16rz71x")}>`);
					if (store_get($$store_subs ??= {}, "$open", open)) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div${attributes({
							...store_get($$store_subs ??= {}, "$overlay", overlay),
							class: "overlay"
						}, "svelte-16rz71x")}></div> <div${attributes({
							...store_get($$store_subs ??= {}, "$content", content),
							class: "content"
						}, "svelte-16rz71x")}><button${attributes({
							...store_get($$store_subs ??= {}, "$close", close),
							class: "close-dialog",
							"aria-label": "close dialog"
						}, "svelte-16rz71x")}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button> <h2${attributes({
							...store_get($$store_subs ??= {}, "$title", title),
							class: "title"
						}, "svelte-16rz71x")}>Dialog title</h2> <p${attributes({
							...store_get($$store_subs ??= {}, "$description", description),
							class: "description"
						}, "svelte-16rz71x")}>Dialog description</p></div>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div></div>`);
				},
				html: ($$renderer) => {
					$$renderer.push(`<div slot="html" class="tab__code">`);
					Code($$renderer, {
						language: "html",
						code: `<div>
  <button type="button" aria-haspopup="dialog" aria-controls="popup-id" aria-expanded="false">open dialog</button>
  <div id="popup-id">
    <!-- popup content goes here -->
  </div>
</div>`
					});
					$$renderer.push(`<!----></div>`);
				},
				css: ($$renderer) => {
					$$renderer.push(`<div slot="css" class="tab__code">`);
					Code($$renderer, {
						language: "css",
						code: `button {
  all: unset;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
  font-size: 0.875rem;
  font-weight: 500;
  height: 2rem;
  padding: 0 1rem;
  outline: revert;
}`
					});
					$$renderer.push(`<!----></div>`);
				}
			}
		});
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
