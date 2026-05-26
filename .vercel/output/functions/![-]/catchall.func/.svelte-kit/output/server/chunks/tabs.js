import { n as onDestroy, r as tick } from "./index-server.js";
import { M as get, N as readable, P as writable, a as bind_props, d as store_get, i as attributes, j as derived, m as html, nt as fallback, p as unsubscribe_stores, q as escape_html, s as ensure_array_like, u as slot } from "./dev.js";
import "./index-server2.js";
import hljs from "highlight.js";
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/array.js
/**
* Returns the array element after to the given index.
* @param array the array.
* @param currentIndex the index of the current element.
* @param loop loop to the beginning of the array if the next index is out of bounds?
*/
function next(array, index, loop = true) {
	if (index === array.length - 1) return loop ? array[0] : array[index];
	return array[index + 1];
}
/**
* Returns the array element prior to the given index.
* @param array the array.
* @param currentIndex the index of the current element.
* @param loop loop to the end of the array if the previous index is out of bounds?
*/
function prev(array, currentIndex, loop = true) {
	if (currentIndex <= 0) return loop ? array[array.length - 1] : array[0];
	return array[currentIndex - 1];
}
/**
* Returns the last element in an array.
* @param array the array.
*/
function last(array) {
	return array[array.length - 1];
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/style.js
/**
* A utility function that converts a style object to a string.
*
* @param style - The style object to convert
* @returns The style object as a string
*/
function styleToString(style) {
	return Object.keys(style).reduce((str, key) => {
		if (style[key] === void 0) return str;
		return str + `${key}:${style[key]};`;
	}, "");
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/attr.js
function disabledAttr(disabled) {
	return disabled ? true : void 0;
}
styleToString({
	position: "absolute",
	opacity: 0,
	"pointer-events": "none",
	margin: 0,
	transform: "translateX(-100%)"
});
/**
* @param portal The value of the `portal` option store.
* @returns the value of the `data-portal` attribute.
*/
function portalAttr(portal) {
	if (portal !== null) return "";
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/callbacks.js
/**
* Executes an array of callback functions with the same arguments.
* @template T The types of the arguments that the callback functions take.
* @param n array of callback functions to execute.
* @returns A new function that executes all of the original callback functions with the same arguments.
*/
function executeCallbacks(...callbacks) {
	return (...args) => {
		for (const callback of callbacks) if (typeof callback === "function") callback(...args);
	};
}
/**
* A no operation function (does nothing)
*/
function noop() {}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/object.js
function omit(obj, ...keys) {
	const result = {};
	for (const key of Object.keys(obj)) if (!keys.includes(key)) result[key] = obj[key];
	return result;
}
function removeUndefined(obj) {
	const result = {};
	for (const key in obj) {
		const value = obj[key];
		if (value !== void 0) result[key] = value;
	}
	return result;
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/store/lightable.js
function lightable(value) {
	function subscribe(run) {
		run(value);
		return () => {};
	}
	return { subscribe };
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/makeElement.js
var hiddenAction = (obj) => {
	return new Proxy(obj, {
		get(target, prop, receiver) {
			return Reflect.get(target, prop, receiver);
		},
		ownKeys(target) {
			return Reflect.ownKeys(target).filter((key) => key !== "action");
		}
	});
};
var isFunctionWithParams = (fn) => {
	return typeof fn === "function";
};
makeElement("empty");
function makeElement(name, args) {
	const { stores, action, returned } = args ?? {};
	const derivedStore = (() => {
		if (stores && returned) return derived(stores, (values) => {
			const result = returned(values);
			if (isFunctionWithParams(result)) {
				const fn = (...args) => {
					return hiddenAction(removeUndefined({
						...result(...args),
						[`data-melt-${name}`]: "",
						action: action ?? noop
					}));
				};
				fn.action = action ?? noop;
				return fn;
			}
			return hiddenAction(removeUndefined({
				...result,
				[`data-melt-${name}`]: "",
				action: action ?? noop
			}));
		});
		else {
			const result = returned?.();
			if (isFunctionWithParams(result)) {
				const resultFn = (...args) => {
					return hiddenAction(removeUndefined({
						...result(...args),
						[`data-melt-${name}`]: "",
						action: action ?? noop
					}));
				};
				resultFn.action = action ?? noop;
				return lightable(resultFn);
			}
			return lightable(hiddenAction(removeUndefined({
				...result,
				[`data-melt-${name}`]: "",
				action: action ?? noop
			})));
		}
	})();
	const actionFn = action ?? (() => {
		/** noop */
	});
	actionFn.subscribe = derivedStore.subscribe;
	return actionFn;
}
function createElHelpers(prefix) {
	const name = (part) => part ? `${prefix}-${part}` : prefix;
	const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
	const selector = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
	const getEl = (part) => document.querySelector(selector(part));
	return {
		name,
		attribute,
		selector,
		getEl
	};
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/is.js
var isBrowser = typeof document !== "undefined";
var isFunction = (v) => typeof v === "function";
function isShadowRoot(element) {
	return element instanceof ShadowRoot;
}
function isElement(element) {
	return element instanceof Element;
}
function isHTMLElement(element) {
	return element instanceof HTMLElement;
}
function isObject(value) {
	return value !== null && typeof value === "object";
}
function isReadable(value) {
	return isObject(value) && "subscribe" in value;
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/event.js
/**
* Adds an event listener to the specified target element(s) for the given event(s), and returns a function to remove it.
* @param target The target element(s) to add the event listener to.
* @param event The event(s) to listen for.
* @param handler The function to be called when the event is triggered.
* @param options An optional object that specifies characteristics about the event listener.
* @returns A function that removes the event listener from the target element(s).
*/
function addEventListener(target, event, handler, options) {
	const events = Array.isArray(event) ? event : [event];
	events.forEach((_event) => target.addEventListener(_event, handler, options));
	return () => {
		events.forEach((_event) => target.removeEventListener(_event, handler, options));
	};
}
function addMeltEventListener(target, event, handler, options) {
	const events = Array.isArray(event) ? event : [event];
	if (typeof handler === "function") {
		const handlerWithMelt = withMelt((_event) => handler(_event));
		events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
		return () => {
			events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
		};
	}
	return () => void 0;
}
function dispatchMeltEvent(originalEvent) {
	const node = originalEvent.currentTarget;
	if (!isHTMLElement(node)) return null;
	const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
		detail: { originalEvent },
		cancelable: true
	});
	node.dispatchEvent(customMeltEvent);
	return customMeltEvent;
}
function withMelt(handler) {
	return (event) => {
		if (dispatchMeltEvent(event)?.defaultPrevented) return;
		return handler(event);
	};
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/lifecycle.js
var safeOnDestroy = (fn) => {
	try {
		onDestroy(fn);
	} catch {
		return fn;
	}
};
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/locale.js
/**
* Detects the text direction in the element.
* @returns {TextDirection} The text direction ('ltr' for left-to-right or 'rtl' for right-to-left).
*/
function getElemDirection(elem) {
	return window.getComputedStyle(elem).getPropertyValue("direction");
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/withGet.js
/**
* Transforms an existing store into a store with a `get` method.
* Uses subscriptions to keep the value up to date, so make sure to call `destroy` when you're done with it.
* @date 20/01/2024 - 16:38:39
*
* @export
* @template {Readable<unknown>} T
* @param {T} store
* @returns {WithGet<T>}
*/
function withGet(store) {
	return {
		...store,
		get: () => get(store)
	};
}
withGet.writable = function(initial) {
	const internal = writable(initial);
	let value = initial;
	return {
		subscribe: internal.subscribe,
		set(newValue) {
			internal.set(newValue);
			value = newValue;
		},
		update(updater) {
			const newValue = updater(value);
			internal.set(newValue);
			value = newValue;
		},
		get() {
			return value;
		}
	};
};
withGet.derived = function(stores, fn) {
	const subscribers = /* @__PURE__ */ new Map();
	const get = () => {
		return fn(Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get());
	};
	const subscribe = (subscriber) => {
		const unsubscribers = [];
		(Array.isArray(stores) ? stores : [stores]).forEach((store) => {
			unsubscribers.push(store.subscribe(() => {
				subscriber(get());
			}));
		});
		subscriber(get());
		subscribers.set(subscriber, unsubscribers);
		return () => {
			const unsubscribers = subscribers.get(subscriber);
			if (unsubscribers) for (const unsubscribe of unsubscribers) unsubscribe();
			subscribers.delete(subscriber);
		};
	};
	return {
		get,
		subscribe
	};
};
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/overridable.js
var overridable = (_store, onChange) => {
	const store = withGet(_store);
	const update = (updater, sideEffect) => {
		store.update((curr) => {
			const next = updater(curr);
			let res = next;
			if (onChange) res = onChange({
				curr,
				next
			});
			sideEffect?.(res);
			return res;
		});
	};
	const set = (curr) => {
		update(() => curr);
	};
	return {
		...store,
		update,
		set
	};
};
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/sleep.js
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
//#endregion
//#region node_modules/.pnpm/nanoid@5.1.11/node_modules/nanoid/non-secure/index.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var nanoid = (size = 21) => {
	let id = "";
	let i = size | 0;
	while (i--) id += urlAlphabet[Math.random() * 64 | 0];
	return id;
};
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/id.js
/**
* A function that generates a random id
* @returns An id
*/
function generateId() {
	return nanoid(10);
}
function generateIds(args) {
	return args.reduce((acc, curr) => {
		acc[curr] = generateId();
		return acc;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/keyboard.js
/**
* A constant object that maps commonly used keyboard keys to their corresponding string values.
* This object can be used in other parts of the application to handle keyboard input and prevent
* hard-coded strings throughout.
*/
var kbd = {
	ALT: "Alt",
	ARROW_DOWN: "ArrowDown",
	ARROW_LEFT: "ArrowLeft",
	ARROW_RIGHT: "ArrowRight",
	ARROW_UP: "ArrowUp",
	BACKSPACE: "Backspace",
	CAPS_LOCK: "CapsLock",
	CONTROL: "Control",
	DELETE: "Delete",
	END: "End",
	ENTER: "Enter",
	ESCAPE: "Escape",
	F1: "F1",
	F10: "F10",
	F11: "F11",
	F12: "F12",
	F2: "F2",
	F3: "F3",
	F4: "F4",
	F5: "F5",
	F6: "F6",
	F7: "F7",
	F8: "F8",
	F9: "F9",
	HOME: "Home",
	META: "Meta",
	PAGE_DOWN: "PageDown",
	PAGE_UP: "PageUp",
	SHIFT: "Shift",
	SPACE: " ",
	TAB: "Tab",
	CTRL: "Control",
	ASTERISK: "*",
	A: "a",
	P: "p"
};
/** Key sets for navigation within lists, such as select, menu, and combobox. */
var FIRST_KEYS = [
	kbd.ARROW_DOWN,
	kbd.PAGE_UP,
	kbd.HOME
];
var LAST_KEYS = [
	kbd.ARROW_UP,
	kbd.PAGE_DOWN,
	kbd.END
];
[...FIRST_KEYS, ...LAST_KEYS];
var SELECTION_KEYS = [kbd.ENTER, kbd.SPACE];
var getNextKey = (dir = "ltr", orientation = "horizontal") => {
	return {
		horizontal: dir === "rtl" ? kbd.ARROW_LEFT : kbd.ARROW_RIGHT,
		vertical: kbd.ARROW_DOWN
	}[orientation];
};
var getPrevKey = (dir = "ltr", orientation = "horizontal") => {
	return {
		horizontal: dir === "rtl" ? kbd.ARROW_RIGHT : kbd.ARROW_LEFT,
		vertical: kbd.ARROW_UP
	}[orientation];
};
var getDirectionalKeys = (dir = "ltr", orientation = "horizontal") => {
	return {
		nextKey: getNextKey(dir, orientation),
		prevKey: getPrevKey(dir, orientation)
	};
};
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/debounce.js
function debounce(fn, wait = 500) {
	let timeout;
	const debounced = (...args) => {
		clearTimeout(timeout);
		const later = () => fn(...args);
		timeout = setTimeout(later, wait);
	};
	debounced.destroy = () => clearTimeout(timeout);
	return debounced;
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/platform.js
var isDom = () => typeof window !== "undefined";
function getPlatform() {
	return navigator.userAgentData?.platform ?? navigator.platform;
}
var pt = (v) => isDom() && v.test(getPlatform().toLowerCase());
var isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
var isMac = () => pt(/^mac/) && !isTouchDevice();
var isApple = () => pt(/mac|iphone|ipad|ipod/i);
var isIos = () => isApple() && !isMac();
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/scroll.js
var LOCK_CLASSNAME = "data-melt-scroll-lock";
function assignStyle(el, style) {
	if (!el) return;
	const previousStyle = el.style.cssText;
	Object.assign(el.style, style);
	return () => {
		el.style.cssText = previousStyle;
	};
}
function setCSSProperty(el, property, value) {
	if (!el) return;
	const previousValue = el.style.getPropertyValue(property);
	el.style.setProperty(property, value);
	return () => {
		if (previousValue) el.style.setProperty(property, previousValue);
		else el.style.removeProperty(property);
	};
}
function getPaddingProperty(documentElement) {
	const documentLeft = documentElement.getBoundingClientRect().left;
	return Math.round(documentLeft) + documentElement.scrollLeft ? "paddingLeft" : "paddingRight";
}
function removeScroll(_document) {
	const doc = _document ?? document;
	const win = doc.defaultView ?? window;
	const { documentElement, body } = doc;
	if (body.hasAttribute(LOCK_CLASSNAME)) return noop;
	body.setAttribute(LOCK_CLASSNAME, "");
	const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
	const setScrollbarWidthProperty = () => setCSSProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`);
	const paddingProperty = getPaddingProperty(documentElement);
	const scrollbarSidePadding = win.getComputedStyle(body)[paddingProperty];
	const setStyle = () => assignStyle(body, {
		overflow: "hidden",
		[paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
	});
	const setIOSStyle = () => {
		const { scrollX, scrollY, visualViewport } = win;
		const offsetLeft = visualViewport?.offsetLeft ?? 0;
		const offsetTop = visualViewport?.offsetTop ?? 0;
		const restoreStyle = assignStyle(body, {
			position: "fixed",
			overflow: "hidden",
			top: `${-(scrollY - Math.floor(offsetTop))}px`,
			left: `${-(scrollX - Math.floor(offsetLeft))}px`,
			right: "0",
			[paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
		});
		return () => {
			restoreStyle?.();
			win.scrollTo(scrollX, scrollY);
		};
	};
	const cleanups = [setScrollbarWidthProperty(), isIos() ? setIOSStyle() : setStyle()];
	return () => {
		cleanups.forEach((fn) => fn?.());
		body.removeAttribute(LOCK_CLASSNAME);
	};
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/store/effect.js
/**
* A utility function that creates an effect from a set of stores and a function.
* The effect is automatically cleaned up when the component is destroyed.
*
* @template S - The type of the stores object
* @param stores - The stores object to derive from
* @param fn - The function to run when the stores change
* @param opts {@link EffectOptions}
* @returns A function that can be used to unsubscribe the effect
*/
function effect(stores, fn, opts = {}) {
	const { skipFirstRun } = opts;
	let isFirstRun = true;
	let cb = void 0;
	const destroy = derived(stores, (stores) => {
		cb?.();
		if (isFirstRun && skipFirstRun) isFirstRun = false;
		else cb = fn(stores);
	}).subscribe(noop);
	const unsub = () => {
		destroy();
		cb?.();
	};
	safeOnDestroy(unsub);
	return unsub;
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/store/toWritableStores.js
/**
* Given an object of properties, returns an object of writable stores
* with the same properties and values.
*/
function toWritableStores(properties) {
	const result = {};
	Object.keys(properties).forEach((key) => {
		const propertyKey = key;
		const value = properties[propertyKey];
		result[propertyKey] = withGet(writable(value));
	});
	return result;
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/elements.js
/**
* Get an element's ancestor which has a `data-portal` attribute.
* This is used to handle nested portals/overlays/dialogs/popovers.
*/
function getPortalParent(node) {
	let parent = node.parentElement;
	while (isHTMLElement(parent) && !parent.hasAttribute("data-portal")) parent = parent.parentElement;
	return parent || "body";
}
/**
* Gets the destination for a portal given the node and a user-specified portal prop.
* If a portal prop is not `undefined`, it is used as the destination.
*/
function getPortalDestination(node, portalProp) {
	if (portalProp !== void 0) return portalProp;
	if (getPortalParent(node) === "body") return document.body;
	return null;
}
function isOrContainsTarget(node, target) {
	return node === target || node.contains(target);
}
function getOwnerDocument(el) {
	return el?.ownerDocument ?? document;
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/helpers/focus.js
async function handleFocus(args) {
	const { prop, defaultEl } = args;
	await Promise.all([sleep(1), tick]);
	if (prop === void 0) {
		defaultEl?.focus();
		return;
	}
	const returned = isFunction(prop) ? prop(defaultEl) : prop;
	if (typeof returned === "string") {
		const el = document.querySelector(returned);
		if (!isHTMLElement(el)) return;
		el.focus();
	} else if (isHTMLElement(returned)) returned.focus();
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/accordion/create.js
var { name: name$25, selector: selector$8 } = createElHelpers("accordion");
readable(false), readable(false), readable(void 0), readable(void 0);
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/collapsible/create.js
var { name: name$24 } = createElHelpers("collapsible");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/actions/escape-keydown/action.js
var layers$1 = /* @__PURE__ */ new Map();
var useEscapeKeydown = ((node, config = {}) => {
	let unsub = noop;
	function update(config = {}) {
		unsub();
		const options = {
			behaviorType: "close",
			...config
		};
		const behaviorType = isReadable(options.behaviorType) ? options.behaviorType : withGet(readable(options.behaviorType));
		layers$1.set(node, behaviorType);
		const onKeyDown = (e) => {
			if (e.key !== kbd.ESCAPE || !isResponsibleEscapeLayer(node)) return;
			const target = e.target;
			if (!isHTMLElement(target)) return;
			e.preventDefault();
			if (shouldIgnoreEvent(e, options.ignore)) return;
			if (shouldInvokeResponsibleLayerHandler(behaviorType.get())) options.handler?.(e);
		};
		unsub = executeCallbacks(addEventListener(document, "keydown", onKeyDown, { passive: false }), effect(behaviorType, ($behaviorType) => {
			if ($behaviorType === "close" || $behaviorType === "defer-otherwise-close" && [...layers$1.keys()][0] === node) node.dataset.escapee = "";
			else delete node.dataset.escapee;
		}), behaviorType.destroy || noop);
	}
	update(config);
	return {
		update,
		destroy() {
			layers$1.delete(node);
			delete node.dataset.escapee;
			unsub();
		}
	};
});
var isResponsibleEscapeLayer = (node) => {
	const layersArr = [...layers$1];
	/**
	* We first check if we can find a top layer with `close` or `ignore`.
	* If that top layer was found and matches the provided node, then the node is
	* responsible for the escape. Otherwise, we know that all layers defer so
	* the first layer is the responsible one.
	*/
	const topMostLayer = layersArr.findLast(([_, behaviorType]) => {
		const $behaviorType = behaviorType.get();
		return $behaviorType === "close" || $behaviorType === "ignore";
	});
	if (topMostLayer) return topMostLayer[0] === node;
	const [firstLayerNode] = layersArr[0];
	return firstLayerNode === node;
};
var shouldIgnoreEvent = (e, ignore) => {
	if (!ignore) return false;
	if (isFunction(ignore) && ignore(e)) return true;
	if (Array.isArray(ignore) && ignore.some((ignoreEl) => e.target === ignoreEl)) return true;
	return false;
};
var shouldInvokeResponsibleLayerHandler = (behaviorType) => {
	return behaviorType === "close" || behaviorType === "defer-otherwise-close";
};
//#endregion
//#region node_modules/.pnpm/tabbable@6.4.0/node_modules/tabbable/dist/index.esm.js
/*!
* tabbable 6.4.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
	var _element$getRootNode;
	return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
	return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
/**
* Determines if a node is inert or in an inert ancestor.
* @param {Node} [node]
* @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
*  see if any of them are inert. If false, only `node` itself is considered.
* @returns {boolean} True if inert itself or by way of being in an inert ancestor.
*  False if `node` is falsy.
*/
var _isInert = function isInert(node, lookUp) {
	var _node$getAttribute;
	if (lookUp === void 0) lookUp = true;
	var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
	return inertAtt === "" || inertAtt === "true" || lookUp && node && (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
};
/**
* Determines if a node's content is editable.
* @param {Element} [node]
* @returns True if it's content-editable; false if it's not or `node` is falsy.
*/
var isContentEditable = function isContentEditable(node) {
	var _node$getAttribute2;
	var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
	return attValue === "" || attValue === "true";
};
/**
* @param {Element} el container to check in
* @param {boolean} includeContainer add container to check
* @param {(node: Element) => boolean} filter filter candidates
* @returns {Element[]}
*/
var getCandidates = function getCandidates(el, includeContainer, filter) {
	if (_isInert(el)) return [];
	var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
	if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
	candidates = candidates.filter(filter);
	return candidates;
};
/**
* @callback GetShadowRoot
* @param {Element} element to check for shadow root
* @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
*/
/**
* @callback ShadowRootFilter
* @param {Element} shadowHostNode the element which contains shadow content
* @returns {boolean} true if a shadow root could potentially contain valid candidates.
*/
/**
* @typedef {Object} CandidateScope
* @property {Element} scopeParent contains inner candidates
* @property {Element[]} candidates list of candidates found in the scope parent
*/
/**
* @typedef {Object} IterativeOptions
* @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
*  if a function, implies shadow support is enabled and either returns the shadow root of an element
*  or a boolean stating if it has an undisclosed shadow root
* @property {(node: Element) => boolean} filter filter candidates
* @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
* @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
*/
/**
* @param {Element[]} elements list of element containers to match candidates from
* @param {boolean} includeContainer add container list to check
* @param {IterativeOptions} options
* @returns {Array.<Element|CandidateScope>}
*/
var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
	var candidates = [];
	var elementsToCheck = Array.from(elements);
	while (elementsToCheck.length) {
		var element = elementsToCheck.shift();
		if (_isInert(element, false)) continue;
		if (element.tagName === "SLOT") {
			var assigned = element.assignedElements();
			var nestedCandidates = _getCandidatesIteratively(assigned.length ? assigned : element.children, true, options);
			if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
			else candidates.push({
				scopeParent: element,
				candidates: nestedCandidates
			});
		} else {
			if (matches.call(element, candidateSelector) && options.filter(element) && (includeContainer || !elements.includes(element))) candidates.push(element);
			var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
			var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
			if (shadowRoot && validShadowRoot) {
				var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
				if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
				else candidates.push({
					scopeParent: element,
					candidates: _nestedCandidates
				});
			} else elementsToCheck.unshift.apply(elementsToCheck, element.children);
		}
	}
	return candidates;
};
/**
* @private
* Determines if the node has an explicitly specified `tabindex` attribute.
* @param {HTMLElement} node
* @returns {boolean} True if so; false if not.
*/
var hasTabIndex = function hasTabIndex(node) {
	return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
/**
* Determine the tab index of a given node.
* @param {HTMLElement} node
* @returns {number} Tab order (negative, 0, or positive number).
* @throws {Error} If `node` is falsy.
*/
var getTabIndex = function getTabIndex(node) {
	if (!node) throw new Error("No node provided");
	if (node.tabIndex < 0) {
		if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) return 0;
	}
	return node.tabIndex;
};
/**
* Determine the tab index of a given node __for sort order purposes__.
* @param {HTMLElement} node
* @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
*  has tabIndex -1, but needs to be sorted by document order in order for its content to be
*  inserted into the correct sort position.
* @returns {number} Tab order (negative, 0, or positive number).
*/
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
	var tabIndex = getTabIndex(node);
	if (tabIndex < 0 && isScope && !hasTabIndex(node)) return 0;
	return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
	return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
	return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput(node) {
	return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
	return node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
		return child.tagName === "SUMMARY";
	});
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
	for (var i = 0; i < nodes.length; i++) if (nodes[i].checked && nodes[i].form === form) return nodes[i];
};
var isTabbableRadio = function isTabbableRadio(node) {
	if (!node.name) return true;
	var radioScope = node.form || getRootNode(node);
	var queryRadios = function queryRadios(name) {
		return radioScope.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
	};
	var radioSet;
	if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") radioSet = queryRadios(window.CSS.escape(node.name));
	else try {
		radioSet = queryRadios(node.name);
	} catch (err) {
		console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
		return false;
	}
	var checked = getCheckedRadio(radioSet, node.form);
	return !checked || checked === node;
};
var isRadio = function isRadio(node) {
	return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
	return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached(node) {
	var _nodeRoot;
	var nodeRoot = node && getRootNode(node);
	var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
	var attached = false;
	if (nodeRoot && nodeRoot !== node) {
		var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
		attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
		while (!attached && nodeRootHost) {
			var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
			nodeRoot = getRootNode(nodeRootHost);
			nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
			attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
		}
	}
	return attached;
};
var isZeroArea = function isZeroArea(node) {
	var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
	return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
	var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
	if (displayCheck === "full-native") {
		if ("checkVisibility" in node) return !node.checkVisibility({
			checkOpacity: false,
			opacityProperty: false,
			contentVisibilityAuto: true,
			visibilityProperty: true,
			checkVisibilityCSS: true
		});
	}
	if (getComputedStyle(node).visibility === "hidden") return true;
	var nodeUnderDetails = matches.call(node, "details>summary:first-of-type") ? node.parentElement : node;
	if (matches.call(nodeUnderDetails, "details:not([open]) *")) return true;
	if (!displayCheck || displayCheck === "full" || displayCheck === "full-native" || displayCheck === "legacy-full") {
		if (typeof getShadowRoot === "function") {
			var originalNode = node;
			while (node) {
				var parentElement = node.parentElement;
				var rootNode = getRootNode(node);
				if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) return isZeroArea(node);
				else if (node.assignedSlot) node = node.assignedSlot;
				else if (!parentElement && rootNode !== node.ownerDocument) node = rootNode.host;
				else node = parentElement;
			}
			node = originalNode;
		}
		if (isNodeAttached(node)) return !node.getClientRects().length;
		if (displayCheck !== "legacy-full") return true;
	} else if (displayCheck === "non-zero-area") return isZeroArea(node);
	return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
		var parentNode = node.parentElement;
		while (parentNode) {
			if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
				for (var i = 0; i < parentNode.children.length; i++) {
					var child = parentNode.children.item(i);
					if (child.tagName === "LEGEND") return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
				}
				return true;
			}
			parentNode = parentNode.parentElement;
		}
	}
	return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
	if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) return false;
	return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
	if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) return false;
	return true;
};
var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
	var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
	if (isNaN(tabIndex) || tabIndex >= 0) return true;
	return false;
};
/**
* @param {Array.<Element|CandidateScope>} candidates
* @returns Element[]
*/
var _sortByOrder = function sortByOrder(candidates) {
	var regularTabbables = [];
	var orderedTabbables = [];
	candidates.forEach(function(item, i) {
		var isScope = !!item.scopeParent;
		var element = isScope ? item.scopeParent : item;
		var candidateTabindex = getSortOrderTabIndex(element, isScope);
		var elements = isScope ? _sortByOrder(item.candidates) : element;
		if (candidateTabindex === 0) isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
		else orderedTabbables.push({
			documentOrder: i,
			tabIndex: candidateTabindex,
			item,
			isScope,
			content: elements
		});
	});
	return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
		sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
		return acc;
	}, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
	options = options || {};
	var candidates;
	if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
		filter: isNodeMatchingSelectorTabbable.bind(null, options),
		flatten: false,
		getShadowRoot: options.getShadowRoot,
		shadowRootFilter: isShadowRootTabbable
	});
	else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
	return _sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
	options = options || {};
	var candidates;
	if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
		filter: isNodeMatchingSelectorFocusable.bind(null, options),
		flatten: true,
		getShadowRoot: options.getShadowRoot
	});
	else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
	return candidates;
};
var isTabbable = function isTabbable(node, options) {
	options = options || {};
	if (!node) throw new Error("No node provided");
	if (matches.call(node, candidateSelector) === false) return false;
	return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe:not([inert]):not([inert] *)").join(",");
var isFocusable = function isFocusable(node, options) {
	options = options || {};
	if (!node) throw new Error("No node provided");
	if (matches.call(node, focusableCandidateSelector) === false) return false;
	return isNodeMatchingSelectorFocusable(options, node);
};
//#endregion
//#region node_modules/.pnpm/focus-trap@7.8.0/node_modules/focus-trap/dist/focus-trap.esm.js
/*!
* focus-trap 7.8.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
function _arrayWithoutHoles(r) {
	if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _createForOfIteratorHelper(r, e) {
	var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (!t) {
		if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
			t && (r = t);
			var n = 0, F = function() {};
			return {
				s: F,
				n: function() {
					return n >= r.length ? { done: true } : {
						done: false,
						value: r[n++]
					};
				},
				e: function(r) {
					throw r;
				},
				f: F
			};
		}
		throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var o, a = true, u = false;
	return {
		s: function() {
			t = t.call(r);
		},
		n: function() {
			var r = t.next();
			return a = r.done, r;
		},
		e: function(r) {
			u = true, o = r;
		},
		f: function() {
			try {
				a || null == t.return || t.return();
			} finally {
				if (u) throw o;
			}
		}
	};
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: true,
		configurable: true,
		writable: true
	}) : e[r] = t, e;
}
function _iterableToArray(r) {
	if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), true).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _toConsumableArray(r) {
	return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r);
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	}
}
var activeFocusTraps = {
	getActiveTrap: function getActiveTrap(trapStack) {
		if ((trapStack === null || trapStack === void 0 ? void 0 : trapStack.length) > 0) return trapStack[trapStack.length - 1];
		return null;
	},
	activateTrap: function activateTrap(trapStack, trap) {
		if (trap !== activeFocusTraps.getActiveTrap(trapStack)) activeFocusTraps.pauseTrap(trapStack);
		var trapIndex = trapStack.indexOf(trap);
		if (trapIndex === -1) trapStack.push(trap);
		else {
			trapStack.splice(trapIndex, 1);
			trapStack.push(trap);
		}
	},
	deactivateTrap: function deactivateTrap(trapStack, trap) {
		var trapIndex = trapStack.indexOf(trap);
		if (trapIndex !== -1) trapStack.splice(trapIndex, 1);
		activeFocusTraps.unpauseTrap(trapStack);
	},
	pauseTrap: function pauseTrap(trapStack) {
		var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
		activeTrap === null || activeTrap === void 0 || activeTrap._setPausedState(true);
	},
	unpauseTrap: function unpauseTrap(trapStack) {
		var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
		if (activeTrap && !activeTrap._isManuallyPaused()) activeTrap._setPausedState(false);
	}
};
var isSelectableInput = function isSelectableInput(node) {
	return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent(e) {
	return (e === null || e === void 0 ? void 0 : e.key) === "Escape" || (e === null || e === void 0 ? void 0 : e.key) === "Esc" || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent(e) {
	return (e === null || e === void 0 ? void 0 : e.key) === "Tab" || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
};
var isKeyForward = function isKeyForward(e) {
	return isTabEvent(e) && !e.shiftKey;
};
var isKeyBackward = function isKeyBackward(e) {
	return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
	return setTimeout(fn, 0);
};
/**
* Get an option's value when it could be a plain value, or a handler that provides
*  the value.
* @param {*} value Option's value to check.
* @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
* @returns {*} The `value`, or the handler's returned value.
*/
var valueOrHandler = function valueOrHandler(value) {
	for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
	return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
	return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
};
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
	var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
	var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
	var config = _objectSpread2({
		returnFocusOnDeactivate: true,
		escapeDeactivates: true,
		delayInitialFocus: true,
		isolateSubtrees: false,
		isKeyForward,
		isKeyBackward
	}, userOptions);
	var state = {
		/** @type {Array<HTMLElement>} */
		containers: [],
		/** @type {Array<{
		*    container: HTMLElement,
		*    tabbableNodes: Array<HTMLElement>, // empty if none
		*    focusableNodes: Array<HTMLElement>, // empty if none
		*    posTabIndexesFound: boolean,
		*    firstTabbableNode: HTMLElement|undefined,
		*    lastTabbableNode: HTMLElement|undefined,
		*    firstDomTabbableNode: HTMLElement|undefined,
		*    lastDomTabbableNode: HTMLElement|undefined,
		*    nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
		*  }>}
		*/
		containerGroups: [],
		tabbableGroups: [],
		/** @type {Set<HTMLElement>} */
		adjacentElements: /* @__PURE__ */ new Set(),
		/** @type {Set<HTMLElement>} */
		alreadySilent: /* @__PURE__ */ new Set(),
		nodeFocusedBeforeActivation: null,
		mostRecentlyFocusedNode: null,
		active: false,
		paused: false,
		manuallyPaused: false,
		delayInitialFocusTimer: void 0,
		recentNavEvent: void 0
	};
	var trap;
	/**
	* Gets a configuration option value.
	* @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
	*  value will be taken from this object. Otherwise, value will be taken from base configuration.
	* @param {string} optionName Name of the option whose value is sought.
	* @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
	*  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
	*/
	var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
		return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
	};
	/**
	* Finds the index of the container that contains the element.
	* @param {HTMLElement} element
	* @param {Event} [event] If available, and `element` isn't directly found in any container,
	*  the event's composed path is used to see if includes any known trap containers in the
	*  case where the element is inside a Shadow DOM.
	* @returns {number} Index of the container in either `state.containers` or
	*  `state.containerGroups` (the order/length of these lists are the same); -1
	*  if the element isn't found.
	*/
	var findContainerIndex = function findContainerIndex(element, event) {
		var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === "function" ? event.composedPath() : void 0;
		return state.containerGroups.findIndex(function(_ref) {
			var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
			return container.contains(element) || (composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
				return node === element;
			});
		});
	};
	/**
	* Gets the node for the given option, which is expected to be an option that
	*  can be either a DOM node, a string that is a selector to get a node, `false`
	*  (if a node is explicitly NOT given), or a function that returns any of these
	*  values.
	* @param {string} optionName
	* @param {Object} options
	* @param {boolean} [options.hasFallback] True if the option could be a selector string
	*  and the option allows for a fallback scenario in the case where the selector is
	*  valid but does not match a node (i.e. the queried node doesn't exist in the DOM).
	* @param {Array} [options.params] Params to pass to the option if it's a function.
	* @returns {undefined | null | false | HTMLElement | SVGElement} Returns
	*  `undefined` if the option is not specified; `null` if the option didn't resolve
	*  to a node but `options.hasFallback=true`, `false` if the option resolved to `false`
	*  (node explicitly not given); otherwise, the resolved DOM node.
	* @throws {Error} If the option is set, not `false`, and is not, or does not
	*  resolve to a node, unless the option is a selector string and `options.hasFallback=true`.
	*/
	var getNodeForOption = function getNodeForOption(optionName) {
		var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$hasFallback = _ref2.hasFallback, hasFallback = _ref2$hasFallback === void 0 ? false : _ref2$hasFallback, _ref2$params = _ref2.params, params = _ref2$params === void 0 ? [] : _ref2$params;
		var optionValue = config[optionName];
		if (typeof optionValue === "function") optionValue = optionValue.apply(void 0, _toConsumableArray(params));
		if (optionValue === true) optionValue = void 0;
		if (!optionValue) {
			if (optionValue === void 0 || optionValue === false) return optionValue;
			throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
		}
		var node = optionValue;
		if (typeof optionValue === "string") {
			try {
				node = doc.querySelector(optionValue);
			} catch (err) {
				throw new Error("`".concat(optionName, "` appears to be an invalid selector; error=\"").concat(err.message, "\""));
			}
			if (!node) {
				if (!hasFallback) throw new Error("`".concat(optionName, "` as selector refers to no known node"));
			}
		}
		return node;
	};
	var getInitialFocusNode = function getInitialFocusNode() {
		var node = getNodeForOption("initialFocus", { hasFallback: true });
		if (node === false) return false;
		if (node === void 0 || node && !isFocusable(node, config.tabbableOptions)) if (findContainerIndex(doc.activeElement) >= 0) node = doc.activeElement;
		else {
			var firstTabbableGroup = state.tabbableGroups[0];
			node = firstTabbableGroup && firstTabbableGroup.firstTabbableNode || getNodeForOption("fallbackFocus");
		}
		else if (node === null) node = getNodeForOption("fallbackFocus");
		if (!node) throw new Error("Your focus-trap needs to have at least one focusable element");
		return node;
	};
	var updateTabbableNodes = function updateTabbableNodes() {
		state.containerGroups = state.containers.map(function(container) {
			var tabbableNodes = tabbable(container, config.tabbableOptions);
			var focusableNodes = focusable(container, config.tabbableOptions);
			var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : void 0;
			var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : void 0;
			var firstDomTabbableNode = focusableNodes.find(function(node) {
				return isTabbable(node);
			});
			var lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
				return isTabbable(node);
			});
			return {
				container,
				tabbableNodes,
				focusableNodes,
				/** True if at least one node with positive `tabindex` was found in this container. */
				posTabIndexesFound: !!tabbableNodes.find(function(node) {
					return getTabIndex(node) > 0;
				}),
				/** First tabbable node in container, __tabindex__ order; `undefined` if none. */
				firstTabbableNode,
				/** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
				lastTabbableNode,
				/** First tabbable node in container, __DOM__ order; `undefined` if none. */
				firstDomTabbableNode,
				/** Last tabbable node in container, __DOM__ order; `undefined` if none. */
				lastDomTabbableNode,
				/**
				* Finds the __tabbable__ node that follows the given node in the specified direction,
				*  in this container, if any.
				* @param {HTMLElement} node
				* @param {boolean} [forward] True if going in forward tab order; false if going
				*  in reverse.
				* @returns {HTMLElement|undefined} The next tabbable node, if any.
				*/
				nextTabbableNode: function nextTabbableNode(node) {
					var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
					var nodeIdx = tabbableNodes.indexOf(node);
					if (nodeIdx < 0) {
						if (forward) return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
							return isTabbable(el);
						});
						return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
							return isTabbable(el);
						});
					}
					return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
				}
			};
		});
		state.tabbableGroups = state.containerGroups.filter(function(group) {
			return group.tabbableNodes.length > 0;
		});
		if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
		if (state.containerGroups.find(function(g) {
			return g.posTabIndexesFound;
		}) && state.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
	};
	/**
	* Gets the current activeElement. If it's a web-component and has open shadow-root
	* it will recursively search inside shadow roots for the "true" activeElement.
	*
	* @param {Document | ShadowRoot} el
	*
	* @returns {HTMLElement} The element that currently has the focus
	**/
	var _getActiveElement = function getActiveElement(el) {
		var activeElement = el.activeElement;
		if (!activeElement) return;
		if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) return _getActiveElement(activeElement.shadowRoot);
		return activeElement;
	};
	var _tryFocus = function tryFocus(node) {
		if (node === false) return;
		if (node === _getActiveElement(document)) return;
		if (!node || !node.focus) {
			_tryFocus(getInitialFocusNode());
			return;
		}
		node.focus({ preventScroll: !!config.preventScroll });
		state.mostRecentlyFocusedNode = node;
		if (isSelectableInput(node)) node.select();
	};
	var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
		var node = getNodeForOption("setReturnFocus", { params: [previousActiveElement] });
		return node ? node : node === false ? false : previousActiveElement;
	};
	/**
	* Finds the next node (in either direction) where focus should move according to a
	*  keyboard focus-in event.
	* @param {Object} params
	* @param {Node} [params.target] Known target __from which__ to navigate, if any.
	* @param {KeyboardEvent|FocusEvent} [params.event] Event to use if `target` isn't known (event
	*  will be used to determine the `target`). Ignored if `target` is specified.
	* @param {boolean} [params.isBackward] True if focus should move backward.
	* @returns {Node|undefined} The next node, or `undefined` if a next node couldn't be
	*  determined given the current state of the trap.
	*/
	var findNextNavNode = function findNextNavNode(_ref3) {
		var target = _ref3.target, event = _ref3.event, _ref3$isBackward = _ref3.isBackward, isBackward = _ref3$isBackward === void 0 ? false : _ref3$isBackward;
		target = target || getActualTarget(event);
		updateTabbableNodes();
		var destinationNode = null;
		if (state.tabbableGroups.length > 0) {
			var containerIndex = findContainerIndex(target, event);
			var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
			if (containerIndex < 0) if (isBackward) destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
			else destinationNode = state.tabbableGroups[0].firstTabbableNode;
			else if (isBackward) {
				var startOfGroupIndex = state.tabbableGroups.findIndex(function(_ref4) {
					var firstTabbableNode = _ref4.firstTabbableNode;
					return target === firstTabbableNode;
				});
				if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) startOfGroupIndex = containerIndex;
				if (startOfGroupIndex >= 0) {
					var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
					var destinationGroup = state.tabbableGroups[destinationGroupIndex];
					destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
				} else if (!isTabEvent(event)) destinationNode = containerGroup.nextTabbableNode(target, false);
			} else {
				var lastOfGroupIndex = state.tabbableGroups.findIndex(function(_ref5) {
					var lastTabbableNode = _ref5.lastTabbableNode;
					return target === lastTabbableNode;
				});
				if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) lastOfGroupIndex = containerIndex;
				if (lastOfGroupIndex >= 0) {
					var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
					var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
					destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
				} else if (!isTabEvent(event)) destinationNode = containerGroup.nextTabbableNode(target);
			}
		} else destinationNode = getNodeForOption("fallbackFocus");
		return destinationNode;
	};
	var checkPointerDown = function checkPointerDown(e) {
		if (findContainerIndex(getActualTarget(e), e) >= 0) return;
		if (valueOrHandler(config.clickOutsideDeactivates, e)) {
			trap.deactivate({ returnFocus: config.returnFocusOnDeactivate });
			return;
		}
		if (valueOrHandler(config.allowOutsideClick, e)) return;
		e.preventDefault();
	};
	var checkFocusIn = function checkFocusIn(event) {
		var target = getActualTarget(event);
		var targetContained = findContainerIndex(target, event) >= 0;
		if (targetContained || target instanceof Document) {
			if (targetContained) state.mostRecentlyFocusedNode = target;
		} else {
			event.stopImmediatePropagation();
			var nextNode;
			var navAcrossContainers = true;
			if (state.mostRecentlyFocusedNode) {
				if (getTabIndex(state.mostRecentlyFocusedNode) > 0) {
					var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
					var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
					if (tabbableNodes.length > 0) {
						var mruTabIdx = tabbableNodes.findIndex(function(node) {
							return node === state.mostRecentlyFocusedNode;
						});
						if (mruTabIdx >= 0) {
							if (config.isKeyForward(state.recentNavEvent)) {
								if (mruTabIdx + 1 < tabbableNodes.length) {
									nextNode = tabbableNodes[mruTabIdx + 1];
									navAcrossContainers = false;
								}
							} else if (mruTabIdx - 1 >= 0) {
								nextNode = tabbableNodes[mruTabIdx - 1];
								navAcrossContainers = false;
							}
						}
					}
				} else if (!state.containerGroups.some(function(g) {
					return g.tabbableNodes.some(function(n) {
						return getTabIndex(n) > 0;
					});
				})) navAcrossContainers = false;
			} else navAcrossContainers = false;
			if (navAcrossContainers) nextNode = findNextNavNode({
				target: state.mostRecentlyFocusedNode,
				isBackward: config.isKeyBackward(state.recentNavEvent)
			});
			if (nextNode) _tryFocus(nextNode);
			else _tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
		}
		state.recentNavEvent = void 0;
	};
	var checkKeyNav = function checkKeyNav(event) {
		var isBackward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		state.recentNavEvent = event;
		var destinationNode = findNextNavNode({
			event,
			isBackward
		});
		if (destinationNode) {
			if (isTabEvent(event)) event.preventDefault();
			_tryFocus(destinationNode);
		}
	};
	var checkTabKey = function checkTabKey(event) {
		if (config.isKeyForward(event) || config.isKeyBackward(event)) checkKeyNav(event, config.isKeyBackward(event));
	};
	var checkEscapeKey = function checkEscapeKey(event) {
		if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
			event.preventDefault();
			trap.deactivate();
		}
	};
	var checkClick = function checkClick(e) {
		if (findContainerIndex(getActualTarget(e), e) >= 0) return;
		if (valueOrHandler(config.clickOutsideDeactivates, e)) return;
		if (valueOrHandler(config.allowOutsideClick, e)) return;
		e.preventDefault();
		e.stopImmediatePropagation();
	};
	var addListeners = function addListeners() {
		if (!state.active) return;
		activeFocusTraps.activateTrap(trapStack, trap);
		state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
			_tryFocus(getInitialFocusNode());
		}) : _tryFocus(getInitialFocusNode());
		doc.addEventListener("focusin", checkFocusIn, true);
		doc.addEventListener("mousedown", checkPointerDown, {
			capture: true,
			passive: false
		});
		doc.addEventListener("touchstart", checkPointerDown, {
			capture: true,
			passive: false
		});
		doc.addEventListener("click", checkClick, {
			capture: true,
			passive: false
		});
		doc.addEventListener("keydown", checkTabKey, {
			capture: true,
			passive: false
		});
		doc.addEventListener("keydown", checkEscapeKey);
		return trap;
	};
	/**
	* Traverses up the DOM from each of `containers`, collecting references to
	* the elements that are siblings to `container` or an ancestor of `container`.
	* @param {Array<HTMLElement>} containers
	*/
	var collectAdjacentElements = function collectAdjacentElements(containers) {
		if (state.active && !state.paused) trap._setSubtreeIsolation(false);
		state.adjacentElements.clear();
		state.alreadySilent.clear();
		var containerAncestors = /* @__PURE__ */ new Set();
		var adjacentElements = /* @__PURE__ */ new Set();
		var _iterator = _createForOfIteratorHelper(containers), _step;
		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var container = _step.value;
				containerAncestors.add(container);
				var insideShadowRoot = typeof ShadowRoot !== "undefined" && container.getRootNode() instanceof ShadowRoot;
				var current = container;
				while (current) {
					containerAncestors.add(current);
					var parent = current.parentElement;
					var siblings = [];
					if (parent) siblings = parent.children;
					else if (!parent && insideShadowRoot) {
						siblings = current.getRootNode().children;
						parent = current.getRootNode().host;
						insideShadowRoot = typeof ShadowRoot !== "undefined" && parent.getRootNode() instanceof ShadowRoot;
					}
					var _iterator2 = _createForOfIteratorHelper(siblings), _step2;
					try {
						for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
							var child = _step2.value;
							adjacentElements.add(child);
						}
					} catch (err) {
						_iterator2.e(err);
					} finally {
						_iterator2.f();
					}
					current = parent;
				}
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
		containerAncestors.forEach(function(el) {
			adjacentElements["delete"](el);
		});
		state.adjacentElements = adjacentElements;
	};
	var removeListeners = function removeListeners() {
		if (!state.active) return;
		doc.removeEventListener("focusin", checkFocusIn, true);
		doc.removeEventListener("mousedown", checkPointerDown, true);
		doc.removeEventListener("touchstart", checkPointerDown, true);
		doc.removeEventListener("click", checkClick, true);
		doc.removeEventListener("keydown", checkTabKey, true);
		doc.removeEventListener("keydown", checkEscapeKey);
		return trap;
	};
	var mutationObserver = typeof window !== "undefined" && "MutationObserver" in window ? new MutationObserver(function checkDomRemoval(mutations) {
		if (mutations.some(function(mutation) {
			return Array.from(mutation.removedNodes).some(function(node) {
				return node === state.mostRecentlyFocusedNode;
			});
		})) _tryFocus(getInitialFocusNode());
	}) : void 0;
	var updateObservedNodes = function updateObservedNodes() {
		if (!mutationObserver) return;
		mutationObserver.disconnect();
		if (state.active && !state.paused) state.containers.map(function(container) {
			mutationObserver.observe(container, {
				subtree: true,
				childList: true
			});
		});
	};
	trap = {
		get active() {
			return state.active;
		},
		get paused() {
			return state.paused;
		},
		activate: function activate(activateOptions) {
			if (state.active) return this;
			var onActivate = getOption(activateOptions, "onActivate");
			var onPostActivate = getOption(activateOptions, "onPostActivate");
			var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
			var preexistingTrap = activeFocusTraps.getActiveTrap(trapStack);
			var revertState = false;
			if (preexistingTrap && !preexistingTrap.paused) {
				var _preexistingTrap$_set;
				(_preexistingTrap$_set = preexistingTrap._setSubtreeIsolation) === null || _preexistingTrap$_set === void 0 || _preexistingTrap$_set.call(preexistingTrap, false);
				revertState = true;
			}
			try {
				if (!checkCanFocusTrap) updateTabbableNodes();
				state.active = true;
				state.paused = false;
				state.nodeFocusedBeforeActivation = _getActiveElement(doc);
				onActivate === null || onActivate === void 0 || onActivate();
				var finishActivation = function finishActivation() {
					if (checkCanFocusTrap) updateTabbableNodes();
					addListeners();
					updateObservedNodes();
					if (config.isolateSubtrees) trap._setSubtreeIsolation(true);
					onPostActivate === null || onPostActivate === void 0 || onPostActivate();
				};
				if (checkCanFocusTrap) {
					checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
					return this;
				}
				finishActivation();
			} catch (error) {
				if (preexistingTrap === activeFocusTraps.getActiveTrap(trapStack) && revertState) {
					var _preexistingTrap$_set2;
					(_preexistingTrap$_set2 = preexistingTrap._setSubtreeIsolation) === null || _preexistingTrap$_set2 === void 0 || _preexistingTrap$_set2.call(preexistingTrap, true);
				}
				throw error;
			}
			return this;
		},
		deactivate: function deactivate(deactivateOptions) {
			if (!state.active) return this;
			var options = _objectSpread2({
				onDeactivate: config.onDeactivate,
				onPostDeactivate: config.onPostDeactivate,
				checkCanReturnFocus: config.checkCanReturnFocus
			}, deactivateOptions);
			clearTimeout(state.delayInitialFocusTimer);
			state.delayInitialFocusTimer = void 0;
			if (!state.paused) trap._setSubtreeIsolation(false);
			state.alreadySilent.clear();
			removeListeners();
			state.active = false;
			state.paused = false;
			updateObservedNodes();
			activeFocusTraps.deactivateTrap(trapStack, trap);
			var onDeactivate = getOption(options, "onDeactivate");
			var onPostDeactivate = getOption(options, "onPostDeactivate");
			var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
			var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
			onDeactivate === null || onDeactivate === void 0 || onDeactivate();
			var finishDeactivation = function finishDeactivation() {
				delay(function() {
					if (returnFocus) _tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
					onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
				});
			};
			if (returnFocus && checkCanReturnFocus) {
				checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
				return this;
			}
			finishDeactivation();
			return this;
		},
		pause: function pause(pauseOptions) {
			if (!state.active) return this;
			state.manuallyPaused = true;
			return this._setPausedState(true, pauseOptions);
		},
		unpause: function unpause(unpauseOptions) {
			if (!state.active) return this;
			state.manuallyPaused = false;
			if (trapStack[trapStack.length - 1] !== this) return this;
			return this._setPausedState(false, unpauseOptions);
		},
		updateContainerElements: function updateContainerElements(containerElements) {
			state.containers = [].concat(containerElements).filter(Boolean).map(function(element) {
				return typeof element === "string" ? doc.querySelector(element) : element;
			});
			if (config.isolateSubtrees) collectAdjacentElements(state.containers);
			if (state.active) {
				updateTabbableNodes();
				if (config.isolateSubtrees && !state.paused) trap._setSubtreeIsolation(true);
			}
			updateObservedNodes();
			return this;
		}
	};
	Object.defineProperties(trap, {
		_isManuallyPaused: { value: function value() {
			return state.manuallyPaused;
		} },
		_setPausedState: { value: function value(paused, options) {
			if (state.paused === paused) return this;
			state.paused = paused;
			if (paused) {
				var onPause = getOption(options, "onPause");
				var onPostPause = getOption(options, "onPostPause");
				onPause === null || onPause === void 0 || onPause();
				removeListeners();
				updateObservedNodes();
				trap._setSubtreeIsolation(false);
				onPostPause === null || onPostPause === void 0 || onPostPause();
			} else {
				var onUnpause = getOption(options, "onUnpause");
				var onPostUnpause = getOption(options, "onPostUnpause");
				onUnpause === null || onUnpause === void 0 || onUnpause();
				trap._setSubtreeIsolation(true);
				updateTabbableNodes();
				addListeners();
				updateObservedNodes();
				onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
			}
			return this;
		} },
		_setSubtreeIsolation: { value: function value(isEnabled) {
			if (config.isolateSubtrees) state.adjacentElements.forEach(function(el) {
				var _el$getAttribute;
				if (isEnabled) switch (config.isolateSubtrees) {
					case "aria-hidden":
						if (el.ariaHidden === "true" || ((_el$getAttribute = el.getAttribute("aria-hidden")) === null || _el$getAttribute === void 0 ? void 0 : _el$getAttribute.toLowerCase()) === "true") state.alreadySilent.add(el);
						el.setAttribute("aria-hidden", "true");
						break;
					default:
						if (el.inert || el.hasAttribute("inert")) state.alreadySilent.add(el);
						el.setAttribute("inert", true);
						break;
				}
				else if (state.alreadySilent.has(el));
				else switch (config.isolateSubtrees) {
					case "aria-hidden":
						el.removeAttribute("aria-hidden");
						break;
					default:
						el.removeAttribute("inert");
						break;
				}
			});
		} }
	});
	trap.updateContainerElements(elements);
	return trap;
};
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/actions/focus-trap/action.js
var useFocusTrap = ((node, config = {}) => {
	let unsub = noop;
	const update = (config) => {
		unsub();
		const trap = createFocusTrap(node, {
			returnFocusOnDeactivate: false,
			allowOutsideClick: true,
			escapeDeactivates: false,
			clickOutsideDeactivates: false,
			...config
		});
		unsub = trap.deactivate;
		trap.activate();
	};
	update(config);
	return {
		destroy: unsub,
		update
	};
});
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/actions/modal/action.js
var useModal = ((node, config) => {
	let unsubInteractOutside = noop;
	function update(config) {
		unsubInteractOutside();
		const { onClose, shouldCloseOnInteractOutside, closeOnInteractOutside } = config;
		function closeModal() {
			onClose?.();
		}
		function onInteractOutsideStart(e) {
			const target = e.target;
			if (!isElement(target)) return;
			e.stopImmediatePropagation();
		}
		function onInteractOutside(e) {
			if (!shouldCloseOnInteractOutside?.(e)) return;
			e.stopImmediatePropagation();
			closeModal();
		}
		unsubInteractOutside = useInteractOutside(node, {
			onInteractOutsideStart,
			onInteractOutside: closeOnInteractOutside ? onInteractOutside : void 0,
			enabled: closeOnInteractOutside
		}).destroy;
	}
	update(config);
	return {
		update,
		destroy() {
			unsubInteractOutside();
		}
	};
});
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/actions/portal.js
var usePortal = ((el, target = "body") => {
	let targetEl;
	if (!isHTMLElement(target) && typeof target !== "string") return { destroy: noop };
	async function update(newTarget = "body") {
		target = newTarget;
		if (typeof target === "string") {
			targetEl = document.querySelector(target);
			if (targetEl === null) {
				await tick();
				targetEl = document.querySelector(target);
			}
			if (targetEl === null) throw new Error(`No element found matching css selector: "${target}"`);
		} else if (target instanceof HTMLElement) targetEl = target;
		else throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
		el.dataset.portal = "";
		targetEl.appendChild(el);
		el.hidden = false;
	}
	function destroy() {
		el.remove();
	}
	update(target);
	return {
		update,
		destroy
	};
});
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/internal/actions/interact-outside/action.js
var layers = /* @__PURE__ */ new Set();
var useInteractOutside = ((node, config = {}) => {
	let unsubEvents = noop;
	let unsubPointerDown = noop;
	let unsubPointerUp = noop;
	let unsubResetInterceptedEvents = noop;
	layers.add(node);
	const documentObj = getOwnerDocument(node);
	let isPointerDown = false;
	let isPointerDownInside = false;
	const interceptedEvents = {
		pointerdown: false,
		pointerup: false,
		mousedown: false,
		mouseup: false,
		touchstart: false,
		touchend: false,
		click: false
	};
	const resetInterceptedEvents = () => {
		for (const eventType in interceptedEvents) interceptedEvents[eventType] = false;
	};
	const isAnyEventIntercepted = () => {
		for (const isIntercepted of Object.values(interceptedEvents)) if (isIntercepted) return true;
		return false;
	};
	/**
	* To determine event interception, events are marked as intercepted in the capture phase.
	* If they are not invoked again in the bubbling phase, it indicates user interception.
	*/
	const setupCapturePhaseHandlerAndMarkAsIntercepted = (eventType, handler) => {
		return addEventListener(documentObj, eventType, (e) => {
			interceptedEvents[eventType] = true;
			handler?.(e);
		}, true);
	};
	/**
	* An event listener for the bubbling phase marks events as not intercepted.
	*/
	const setupBubblePhaseHandlerAndMarkAsNotIntercepted = (eventType, handler) => {
		return addEventListener(documentObj, eventType, (e) => {
			interceptedEvents[eventType] = false;
			const computedData = {};
			if (isHTMLElement(e.target) && isShadowRoot(e.target.shadowRoot)) computedData.shadowTarget = e.composedPath()[0];
			handler?.(e, computedData);
		});
	};
	function update(config) {
		unsubEvents();
		unsubPointerDown();
		unsubPointerUp();
		unsubResetInterceptedEvents();
		resetInterceptedEvents();
		const { onInteractOutside, onInteractOutsideStart, enabled } = {
			enabled: true,
			...config
		};
		if (!enabled) return;
		let wasTopLayerInPointerDownCapture = false;
		/**
		* Debouncing `onPointerDown` ensures that other events can be flagged as not intercepted,
		* allowing a comprehensive check for intercepted events thereafter.
		*/
		const onPointerDownDebounced = debounce((e, computedEventData) => {
			if (!wasTopLayerInPointerDownCapture || isAnyEventIntercepted()) return;
			if (onInteractOutside && isValidEvent(e, node)) onInteractOutsideStart?.(e);
			const target = computedEventData?.shadowTarget ? computedEventData.shadowTarget : e.target;
			if (isElement(target) && isOrContainsTarget(node, target)) isPointerDownInside = true;
			isPointerDown = true;
		}, 10);
		unsubPointerDown = onPointerDownDebounced.destroy;
		/**
		* Debouncing `onPointerUp` ensures that other events can be flagged as not intercepted,
		* allowing a comprehensive check for intercepted events thereafter.
		*/
		const onPointerUpDebounced = debounce((e) => {
			if (wasTopLayerInPointerDownCapture && !isAnyEventIntercepted() && shouldTriggerInteractOutside(e)) onInteractOutside?.(e);
			resetPointerState();
		}, 10);
		unsubPointerUp = onPointerUpDebounced.destroy;
		/**
		* Debounces `resetInterceptedEvents` to avoid premature resetting while events are still firing. The debounce
		* delay is intentionally set longer than `onPointerUp`'s to ensure `onPointerUp` events are fully processed
		* during the bubbling phase before `resetInterceptedEventsDebounced` executes in the capture phase.
		*/
		const resetInterceptedEventsDebounced = debounce(resetInterceptedEvents, 20);
		unsubResetInterceptedEvents = resetInterceptedEventsDebounced.destroy;
		const markTopLayerInPointerDown = () => {
			wasTopLayerInPointerDownCapture = isHighestLayer(node);
		};
		unsubEvents = executeCallbacks(
			/** Capture Events For Interaction Start */
			setupCapturePhaseHandlerAndMarkAsIntercepted("pointerdown", markTopLayerInPointerDown),
			setupCapturePhaseHandlerAndMarkAsIntercepted("mousedown", markTopLayerInPointerDown),
			setupCapturePhaseHandlerAndMarkAsIntercepted("touchstart", markTopLayerInPointerDown),
			/**
			* Intercepted events are reset only at the end of an interaction, allowing
			* interception at the start while still capturing the entire interaction.
			* Additionally, intercepted events are reset in the capture phase with `resetInterceptedEventsDebounced`,
			* accommodating events not invoked in the bubbling phase due to user interception.
			*/
			setupCapturePhaseHandlerAndMarkAsIntercepted("pointerup", resetInterceptedEventsDebounced),
			setupCapturePhaseHandlerAndMarkAsIntercepted("mouseup", resetInterceptedEventsDebounced),
			setupCapturePhaseHandlerAndMarkAsIntercepted("touchend", resetInterceptedEventsDebounced),
			setupCapturePhaseHandlerAndMarkAsIntercepted("click", resetInterceptedEventsDebounced),
			/** Bubbling Events For Interaction Start */
			setupBubblePhaseHandlerAndMarkAsNotIntercepted("pointerdown", onPointerDownDebounced),
			setupBubblePhaseHandlerAndMarkAsNotIntercepted("mousedown", onPointerDownDebounced),
			setupBubblePhaseHandlerAndMarkAsNotIntercepted("touchstart", onPointerDownDebounced),
			/**
			* To effectively detect an end of an interaction, we must monitor all relevant events,
			* not just `click` events. This is because on touch devices, actions like pressing,
			* moving the finger, and lifting it off the screen may not trigger a `click` event,
			* but should still invoke `onPointerUp` to properly handle the interaction.
			*/
			setupBubblePhaseHandlerAndMarkAsNotIntercepted("pointerup", onPointerUpDebounced),
			setupBubblePhaseHandlerAndMarkAsNotIntercepted("mouseup", onPointerUpDebounced),
			setupBubblePhaseHandlerAndMarkAsNotIntercepted("touchend", onPointerUpDebounced),
			setupBubblePhaseHandlerAndMarkAsNotIntercepted("click", onPointerUpDebounced)
		);
	}
	function shouldTriggerInteractOutside(e) {
		if (isPointerDown && !isPointerDownInside && isValidEvent(e, node)) return true;
		return false;
	}
	function resetPointerState() {
		isPointerDown = false;
		isPointerDownInside = false;
	}
	update(config);
	return {
		update,
		destroy() {
			unsubEvents();
			unsubPointerDown();
			unsubPointerUp();
			unsubResetInterceptedEvents();
			layers.delete(node);
		}
	};
});
function isValidEvent(e, node) {
	if ("button" in e && e.button > 0) return false;
	const target = e.target;
	if (!isElement(target)) return false;
	const ownerDocument = target.ownerDocument;
	if (!ownerDocument || !ownerDocument.documentElement.contains(target)) return false;
	return node && !isOrContainsTarget(node, target);
}
function isHighestLayer(node) {
	return Array.from(layers).at(-1) === node;
}
kbd.ARROW_LEFT, kbd.ESCAPE, kbd.ARROW_RIGHT, kbd.SHIFT, kbd.CAPS_LOCK, kbd.CONTROL, kbd.ALT, kbd.META, kbd.ENTER, kbd.F1, kbd.F2, kbd.F3, kbd.F4, kbd.F5, kbd.F6, kbd.F7, kbd.F8, kbd.F9, kbd.F10, kbd.F11, kbd.F12;
kbd.ARROW_LEFT, kbd.ESCAPE, kbd.ARROW_RIGHT, kbd.SHIFT, kbd.CAPS_LOCK, kbd.CONTROL, kbd.ALT, kbd.META, kbd.ENTER, kbd.F1, kbd.F2, kbd.F3, kbd.F4, kbd.F5, kbd.F6, kbd.F7, kbd.F8, kbd.F9, kbd.F10, kbd.F11, kbd.F12;
var { name: name$23 } = createElHelpers("combobox");
[...SELECTION_KEYS, kbd.ARROW_RIGHT], [...SELECTION_KEYS, kbd.ARROW_LEFT];
kbd.ARROW_LEFT, kbd.ARROW_RIGHT;
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/context-menu/create.js
var { name: name$22, selector: selector$7 } = createElHelpers("context-menu");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/date-field/_internal/parts.js
var DATE_SEGMENT_PARTS = [
	"day",
	"month",
	"year"
];
var TIME_SEGMENT_PARTS = [
	"hour",
	"minute",
	"second",
	"dayPeriod"
];
var NON_EDITABLE_SEGMENT_PARTS = ["literal", "timeZoneName"];
[...[...DATE_SEGMENT_PARTS, ...TIME_SEGMENT_PARTS], ...NON_EDITABLE_SEGMENT_PARTS].filter((part) => part !== "literal");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/calendar/create.js
var defaults$3 = {
	isDateDisabled: void 0,
	isDateUnavailable: void 0,
	value: void 0,
	preventDeselect: false,
	numberOfMonths: 1,
	pagedNavigation: false,
	weekStartsOn: 0,
	fixedWeeks: false,
	calendarLabel: "Event Date",
	locale: "en",
	minValue: void 0,
	maxValue: void 0,
	disabled: false,
	readonly: false,
	weekdayFormat: "narrow"
};
var { name: name$21 } = createElHelpers("calendar");
var { name: name$20 } = createElHelpers("dateField");
({ ...omit(defaults$3, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat") });
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/date-range-field/create.js
var { name: name$19 } = createElHelpers("dateField");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/dialog/create.js
var { name: name$18 } = createElHelpers("dialog");
var defaults$1 = {
	preventScroll: true,
	escapeBehavior: "close",
	closeOnOutsideClick: true,
	role: "dialog",
	defaultOpen: false,
	portal: "body",
	forceVisible: false,
	openFocus: void 0,
	closeFocus: void 0,
	onOutsideClick: void 0
};
var dialogIdParts = [
	"content",
	"title",
	"description"
];
function createDialog(props) {
	const withDefaults = {
		...defaults$1,
		...props
	};
	const options = toWritableStores(omit(withDefaults, "ids"));
	const { preventScroll, escapeBehavior, closeOnOutsideClick, role, portal, forceVisible, openFocus, closeFocus, onOutsideClick } = options;
	const activeTrigger = withGet.writable(null);
	const ids = toWritableStores({
		...generateIds(dialogIdParts),
		...withDefaults.ids
	});
	const open = overridable(withDefaults.open ?? writable(withDefaults.defaultOpen), withDefaults?.onOpenChange);
	const isVisible = derived([open, forceVisible], ([$open, $forceVisible]) => {
		return $open || $forceVisible;
	});
	let unsubScroll = noop;
	function handleOpen(e) {
		const el = e.currentTarget;
		const triggerEl = e.currentTarget;
		if (!isHTMLElement(el) || !isHTMLElement(triggerEl)) return;
		open.set(true);
		activeTrigger.set(triggerEl);
	}
	function handleClose() {
		open.set(false);
	}
	const trigger = makeElement(name$18("trigger"), {
		stores: [open],
		returned: ([$open]) => {
			return {
				"aria-haspopup": "dialog",
				"aria-expanded": $open,
				type: "button"
			};
		},
		action: (node) => {
			return { destroy: executeCallbacks(addMeltEventListener(node, "click", (e) => {
				handleOpen(e);
			}), addMeltEventListener(node, "keydown", (e) => {
				if (e.key !== kbd.ENTER && e.key !== kbd.SPACE) return;
				e.preventDefault();
				handleOpen(e);
			})) };
		}
	});
	const overlay = makeElement(name$18("overlay"), {
		stores: [isVisible, open],
		returned: ([$isVisible, $open]) => {
			return {
				hidden: $isVisible ? void 0 : true,
				tabindex: -1,
				style: $isVisible ? void 0 : styleToString({ display: "none" }),
				"aria-hidden": true,
				"data-state": $open ? "open" : "closed"
			};
		}
	});
	const content = makeElement(name$18("content"), {
		stores: [
			isVisible,
			ids.content,
			ids.description,
			ids.title,
			open
		],
		returned: ([$isVisible, $contentId, $descriptionId, $titleId, $open]) => {
			return {
				id: $contentId,
				role: role.get(),
				"aria-describedby": $descriptionId,
				"aria-labelledby": $titleId,
				"aria-modal": $isVisible ? "true" : void 0,
				"data-state": $open ? "open" : "closed",
				tabindex: -1,
				hidden: $isVisible ? void 0 : true,
				style: $isVisible ? void 0 : styleToString({ display: "none" })
			};
		},
		action: (node) => {
			let unsubEscape = noop;
			let unsubModal = noop;
			let unsubFocusTrap = noop;
			const unsubDerived = effect([isVisible, closeOnOutsideClick], ([$isVisible, $closeOnOutsideClick]) => {
				unsubModal();
				unsubEscape();
				unsubFocusTrap();
				if (!$isVisible) return;
				unsubModal = useModal(node, {
					closeOnInteractOutside: $closeOnOutsideClick,
					onClose: handleClose,
					shouldCloseOnInteractOutside(e) {
						onOutsideClick.get()?.(e);
						if (e.defaultPrevented) return false;
						return true;
					}
				}).destroy;
				unsubEscape = useEscapeKeydown(node, {
					handler: handleClose,
					behaviorType: escapeBehavior
				}).destroy;
				unsubFocusTrap = useFocusTrap(node, { fallbackFocus: node }).destroy;
			});
			return { destroy: () => {
				unsubScroll();
				unsubDerived();
				unsubModal();
				unsubEscape();
				unsubFocusTrap();
			} };
		}
	});
	const portalled = makeElement(name$18("portalled"), {
		stores: portal,
		returned: ($portal) => ({ "data-portal": portalAttr($portal) }),
		action: (node) => {
			const unsubPortal = effect([portal], ([$portal]) => {
				if ($portal === null) return noop;
				const portalDestination = getPortalDestination(node, $portal);
				if (portalDestination === null) return noop;
				return usePortal(node, portalDestination).destroy;
			});
			return { destroy() {
				unsubPortal();
			} };
		}
	});
	const title = makeElement(name$18("title"), {
		stores: [ids.title],
		returned: ([$titleId]) => ({ id: $titleId })
	});
	const description = makeElement(name$18("description"), {
		stores: [ids.description],
		returned: ([$descriptionId]) => ({ id: $descriptionId })
	});
	const close = makeElement(name$18("close"), {
		returned: () => ({ type: "button" }),
		action: (node) => {
			return { destroy: executeCallbacks(addMeltEventListener(node, "click", () => {
				handleClose();
			}), addMeltEventListener(node, "keydown", (e) => {
				if (e.key !== kbd.SPACE && e.key !== kbd.ENTER) return;
				e.preventDefault();
				handleClose();
			})) };
		}
	});
	effect([open, preventScroll], ([$open, $preventScroll]) => {
		if (!isBrowser) return;
		if ($preventScroll && $open) unsubScroll = removeScroll();
		if ($open) {
			const contentEl = document.getElementById(ids.content.get());
			handleFocus({
				prop: openFocus.get(),
				defaultEl: contentEl
			});
		}
		return () => {
			if (!forceVisible.get()) unsubScroll();
		};
	});
	effect(open, ($open) => {
		if (!isBrowser || $open) return;
		handleFocus({
			prop: closeFocus.get(),
			defaultEl: activeTrigger.get()
		});
	}, { skipFirstRun: true });
	return {
		ids,
		elements: {
			content,
			trigger,
			title,
			description,
			overlay,
			close,
			portalled
		},
		states: { open },
		options
	};
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/link-preview/create.js
var { name: name$17 } = createElHelpers("hover-card");
kbd.ARROW_LEFT, kbd.ARROW_RIGHT, kbd.HOME, kbd.END;
var { name: name$16 } = createElHelpers("menubar");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/pagination/create.js
var { name: name$15, selector: selector$6 } = createElHelpers("pagination");
var { name: name$14, selector: selector$5 } = createElHelpers("pin-input");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/popover/create.js
var { name: name$13 } = createElHelpers("popover");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/progress/create.js
var { name: name$12 } = createElHelpers("progress");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/radio-group/create.js
var { name: name$11, selector: selector$4 } = createElHelpers("radio-group");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/range-calendar/create.js
var { name: name$10 } = createElHelpers("calendar");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/scroll-area/create.js
var { name: name$9 } = createElHelpers("scroll-area");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/slider/create.js
var { name: name$8 } = createElHelpers("slider");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/switch/create.js
var { name: name$7 } = createElHelpers("switch");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/tabs/create.js
var defaults = {
	orientation: "horizontal",
	activateOnFocus: true,
	loop: true,
	autoSet: true
};
var { name: name$6, selector: selector$3 } = createElHelpers("tabs");
function createTabs(props) {
	const withDefaults = {
		...defaults,
		...props
	};
	const options = toWritableStores(omit(withDefaults, "defaultValue", "value", "onValueChange", "autoSet"));
	const { orientation, activateOnFocus, loop } = options;
	const value = overridable(withDefaults.value ?? writable(withDefaults.defaultValue), withDefaults?.onValueChange);
	let ssrValue = withDefaults.defaultValue ?? value.get();
	const root = makeElement(name$6(), {
		stores: orientation,
		returned: ($orientation) => {
			return { "data-orientation": $orientation };
		}
	});
	const list = makeElement(name$6("list"), {
		stores: orientation,
		returned: ($orientation) => {
			return {
				role: "tablist",
				"aria-orientation": $orientation,
				"data-orientation": $orientation
			};
		}
	});
	const parseTriggerProps = (props) => {
		if (typeof props === "string") return { value: props };
		else return props;
	};
	return {
		elements: {
			root,
			list,
			trigger: makeElement(name$6("trigger"), {
				stores: [value, orientation],
				returned: ([$value, $orientation]) => {
					return (props) => {
						const { value: tabValue, disabled } = parseTriggerProps(props);
						if (!$value && !ssrValue && withDefaults.autoSet) {
							ssrValue = tabValue;
							$value = tabValue;
							value.set(tabValue);
						}
						const isActive = (isBrowser ? $value : ssrValue) === tabValue;
						return {
							type: "button",
							role: "tab",
							"data-state": isActive ? "active" : "inactive",
							tabindex: isActive ? 0 : -1,
							"data-value": tabValue,
							"data-orientation": $orientation,
							"data-disabled": disabledAttr(disabled),
							disabled: disabledAttr(disabled)
						};
					};
				},
				action: (node) => {
					return { destroy: executeCallbacks(addMeltEventListener(node, "focus", () => {
						const disabled = node.dataset.disabled === "true";
						const tabValue = node.dataset.value;
						if (activateOnFocus.get() && !disabled && tabValue !== void 0) value.set(tabValue);
					}), addMeltEventListener(node, "click", (e) => {
						node.focus();
						e.preventDefault();
						if (node.dataset.disabled === "true") return;
						const tabValue = node.dataset.value;
						node.focus();
						if (tabValue !== void 0) value.set(tabValue);
					}), addMeltEventListener(node, "keydown", (e) => {
						const tabValue = node.dataset.value;
						if (!tabValue) return;
						const el = e.currentTarget;
						if (!isHTMLElement(el)) return;
						const rootEl = el.closest(selector$3());
						if (!isHTMLElement(rootEl)) return;
						const $loop = loop.get();
						const enabledTriggers = Array.from(rootEl.querySelectorAll("[role=\"tab\"]")).filter((trigger) => isHTMLElement(trigger)).filter((el) => !el.hasAttribute("data-disabled"));
						const triggerIdx = enabledTriggers.findIndex((el) => el === e.target);
						const { nextKey, prevKey } = getDirectionalKeys(getElemDirection(rootEl), orientation.get());
						if (e.key === nextKey) {
							e.preventDefault();
							next(enabledTriggers, triggerIdx, $loop).focus();
						} else if (e.key === prevKey) {
							e.preventDefault();
							prev(enabledTriggers, triggerIdx, $loop).focus();
						} else if (e.key === kbd.ENTER || e.key === kbd.SPACE) {
							e.preventDefault();
							value.set(tabValue);
						} else if (e.key === kbd.HOME) {
							e.preventDefault();
							enabledTriggers[0].focus();
						} else if (e.key === kbd.END) {
							e.preventDefault();
							last(enabledTriggers).focus();
						}
					})) };
				}
			}),
			content: makeElement(name$6("content"), {
				stores: value,
				returned: ($value) => {
					return (tabValue) => {
						return {
							role: "tabpanel",
							"aria-labelledby": tabValue,
							hidden: isBrowser ? $value === tabValue ? void 0 : true : ssrValue === tabValue ? void 0 : true,
							tabindex: 0
						};
					};
				}
			})
		},
		states: { value },
		options
	};
}
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/tags-input/create.js
var { name: name$5, attribute, selector: selector$2 } = createElHelpers("tags-input");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/toast/create.js
var { name: name$4 } = createElHelpers("toast");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/toggle-group/create.js
var { name: name$3, selector: selector$1 } = createElHelpers("toggle-group");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/toolbar/create.js
var { name: name$2, selector } = createElHelpers("toolbar");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/tooltip/create.js
var { name: name$1 } = createElHelpers("tooltip");
//#endregion
//#region node_modules/.pnpm/@melt-ui+svelte@0.86.6_svelte@5.55.9/node_modules/@melt-ui/svelte/dist/builders/tree/create.js
var { name } = createElHelpers("tree-view");
//#endregion
//#region src/routes/examples/components/code/code.svelte
function Code($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		function transformString(input, language) {
			return hljs.highlight(input, { language }).value;
		}
		let code = $$props["code"];
		let language = fallback($$props["language"], "text");
		$$renderer.push(`<pre class="code-preview svelte-16lwm6i"><code>${html(transformString(code, language))}</code></pre>`);
		bind_props($$props, {
			code,
			language
		});
	});
}
//#endregion
//#region src/routes/examples/components/tabs/tabs.svelte
function Tabs($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let tabs = fallback($$props["tabs"], () => [
			"preview",
			"html",
			"css"
		], true);
		const { elements: { root, list, content, trigger } } = createTabs({ defaultValue: "tab-preview" });
		function getTabName(tab) {
			switch (tab) {
				case "preview": return "Preview";
				case "html": return "HTML";
				case "css": return "CSS";
				default: return "";
			}
		}
		const triggers = tabs.map((tab) => ({
			id: `tab-${tab}`,
			title: getTabName(tab)
		}));
		$$renderer.push(`<div${attributes({
			...store_get($$store_subs ??= {}, "$root", root),
			class: "tabs__container"
		}, "svelte-1gpmexg")}><nav${attributes({
			...store_get($$store_subs ??= {}, "$list", list),
			class: "tabs__navigation"
		}, "svelte-1gpmexg")}><!--[-->`);
		const each_array = ensure_array_like(triggers);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let triggerItem = each_array[$$index];
			$$renderer.push(`<button${attributes({
				...store_get($$store_subs ??= {}, "$trigger", trigger)(triggerItem.id),
				class: "tabs__trigger"
			}, "svelte-1gpmexg")}>${escape_html(triggerItem.title)}</button>`);
		}
		$$renderer.push(`<!--]--></nav> <div${attributes({
			...store_get($$store_subs ??= {}, "$content", content)("tab-preview"),
			class: "tabs__content tabs__content--preview"
		}, "svelte-1gpmexg")}><!--[-->`);
		slot($$renderer, $$props, "preview", {}, null);
		$$renderer.push(`<!--]--></div> <div${attributes({
			...store_get($$store_subs ??= {}, "$content", content)("tab-html"),
			class: "tabs__content"
		}, "svelte-1gpmexg")}><!--[-->`);
		slot($$renderer, $$props, "html", {}, null);
		$$renderer.push(`<!--]--></div> <div${attributes({
			...store_get($$store_subs ??= {}, "$content", content)("tab-css"),
			class: "tabs__content"
		}, "svelte-1gpmexg")}><!--[-->`);
		slot($$renderer, $$props, "css", {}, null);
		$$renderer.push(`<!--]--></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { tabs });
	});
}
//#endregion
export { Code as n, createDialog as r, Tabs as t };
