import { ref as a, openBlock as _, createElementBlock as l, Fragment as d, createElementVNode as r, toDisplayString as p, pushScopeId as u, popScopeId as i } from "vue";
const s = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [c, n] of t)
    o[c] = n;
  return o;
}, b = (e) => (u("data-v-8bde0b5c"), e = e(), i(), e), v = /* @__PURE__ */ b(() => /* @__PURE__ */ r("button", { class: "" }, "124", -1)), f = {
  __name: "HelloWorld",
  setup(e) {
    const t = a(0), o = () => {
      t.value++;
    };
    return (c, n) => (_(), l(d, null, [
      r("button", {
        type: "button",
        onClick: o
      }, "count is " + p(t.value), 1),
      v
    ], 64));
  }
}, y = /* @__PURE__ */ s(f, [["__scopeId", "data-v-8bde0b5c"]]), m = {};
function h(e, t) {
  return _(), l("div", null, "hello");
}
const g = /* @__PURE__ */ s(m, [["render", h]]);
export {
  g as AutoTable,
  y as HelloWord
};
