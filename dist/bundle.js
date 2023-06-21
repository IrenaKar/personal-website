/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e = {
      113: (e, n, t) => {
        "use strict";
        t.d(n, { Z: () => m });
        var r = t(81),
          a = t.n(r),
          l = t(645),
          i = t.n(l),
          o = t(667),
          s = t.n(o),
          u = new URL(t(60), t.b),
          c = new URL(t(489), t.b),
          d = i()(a()),
          f = s()(u),
          p = s()(c);
        d.push([
          e.id,
          `/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \`sans\` font-family by default.\n5. Use the user's configured \`sans\` font-feature-settings by default.\n6. Use the user's configured \`sans\` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \`mono\` font family by default.\n2. Correct the odd \`em\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \`inherit\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.bottom-10 {\n  bottom: 2.5rem;\n}\n.left-0 {\n  left: 0px;\n}\n.left-\\[50\\%\\] {\n  left: 50%;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-20 {\n  z-index: 20;\n}\n.float-left {\n  float: left;\n}\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mb-\\[60px\\] {\n  margin-bottom: 60px;\n}\n.ml-1 {\n  margin-left: 0.25rem;\n}\n.ml-5 {\n  margin-left: 1.25rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mr-5 {\n  margin-right: 1.25rem;\n}\n.mr-auto {\n  margin-right: auto;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mt-10 {\n  margin-top: 2.5rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-\\[60px\\] {\n  margin-top: 60px;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-\\[100vh\\] {\n  height: 100vh;\n}\n.h-\\[190px\\] {\n  height: 190px;\n}\n.h-\\[27px\\] {\n  height: 27px;\n}\n.h-\\[300px\\] {\n  height: 300px;\n}\n.h-\\[40px\\] {\n  height: 40px;\n}\n.h-\\[50px\\] {\n  height: 50px;\n}\n.h-\\[55px\\] {\n  height: 55px;\n}\n.h-full {\n  height: 100%;\n}\n.min-h-\\[100vh\\] {\n  min-height: 100vh;\n}\n.min-h-\\[250px\\] {\n  min-height: 250px;\n}\n.w-8 {\n  width: 2rem;\n}\n.w-\\[100vw\\] {\n  width: 100vw;\n}\n.w-\\[190px\\] {\n  width: 190px;\n}\n.w-\\[27px\\] {\n  width: 27px;\n}\n.w-\\[30\\%\\] {\n  width: 30%;\n}\n.w-\\[50px\\] {\n  width: 50px;\n}\n.w-\\[70\\%\\] {\n  width: 70%;\n}\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-\\[190px\\] {\n  min-width: 190px;\n}\n.max-w-\\[270px\\] {\n  max-width: 270px;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.translate-x-\\[-50\\%\\] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-rotate-45 {\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-0 {\n  --tw-rotate: 0deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-45 {\n  --tw-rotate: 45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes bounce {\n\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n.animate-bounce {\n  animation: bounce 1s infinite;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.list-disc {\n  list-style-type: disc;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-10 {\n  gap: 2.5rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.gap-5 {\n  gap: 1.25rem;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.gap-\\[60px\\] {\n  gap: 60px;\n}\n.self-start {\n  align-self: flex-start;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n}\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\n.bg-orange-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 88 12 / var(--tw-bg-opacity));\n}\n.bg-stone-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-cover {\n  background-size: cover;\n}\n.bg-center {\n  background-position: center;\n}\n.stroke-gray-50 {\n  stroke: #f9fafb;\n}\n.stroke-gray-500 {\n  stroke: #6b7280;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-5 {\n  padding: 1.25rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-20 {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\n.pl-3 {\n  padding-left: 0.75rem;\n}\n.pt-5 {\n  padding-top: 1.25rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.leading-snug {\n  line-height: 1.375;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.tracking-\\[2px\\] {\n  letter-spacing: 2px;\n}\n.tracking-\\[4px\\] {\n  letter-spacing: 4px;\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-gray-50 {\n  --tw-text-opacity: 1;\n  color: rgb(249 250 251 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.text-orange-600 {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\n.text-stone-100 {\n  --tw-text-opacity: 1;\n  color: rgb(245 245 244 / var(--tw-text-opacity));\n}\n.underline-offset-1 {\n  text-underline-offset: 1px;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline-gray-300 {\n  outline-color: #d1d5db;\n}\n.fade {\n    animation: fade-in 2s ease-in-out;\n  }\n\n@font-face {\n  font-family: "Inter", sans-serif;\n  src: url(${f}) format("woff2"),\n    url(${p}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\nbody {\n  font-family: inter, sans-serif;\n  background: #f9fafb;\n}\n\nli a::after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: "";\n  display: block;\n  height: 2px;\n  position: absolute;\n  background: #ea580c;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n\na:hover::after {\n  width: 100%;\n  left: 0;\n}\n\n@keyframes slide-in {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.openMenu {\n  animation: slide-in 0.4s ease-in-out;\n}\n\n.hover\\:bg-orange-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(194 65 12 / var(--tw-bg-opacity));\n}\n\n@media (min-width: 640px) {\n\n  .sm\\:float-right {\n    float: right;\n  }\n\n  .sm\\:mb-20 {\n    margin-bottom: 5rem;\n  }\n\n  .sm\\:ml-auto {\n    margin-left: auto;\n  }\n\n  .sm\\:mt-3 {\n    margin-top: 0.75rem;\n  }\n\n  .sm\\:min-h-\\[210px\\] {\n    min-height: 210px;\n  }\n\n  .sm\\:w-\\[50\\%\\] {\n    width: 50%;\n  }\n\n  .sm\\:w-fit {\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n\n  .sm\\:max-w-\\[100\\%\\] {\n    max-width: 100%;\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:justify-center {\n    justify-content: center;\n  }\n\n  .sm\\:gap-0 {\n    gap: 0px;\n  }\n\n  .sm\\:gap-5 {\n    gap: 1.25rem;\n  }\n\n  .sm\\:p-7 {\n    padding: 1.75rem;\n  }\n\n  .sm\\:pt-10 {\n    padding-top: 2.5rem;\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .md\\:bottom-20 {\n    bottom: 5rem;\n  }\n\n  .md\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .md\\:ml-\\[250px\\] {\n    margin-left: 250px;\n  }\n\n  .md\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:hidden {\n    display: none;\n  }\n\n  .md\\:h-\\[72px\\] {\n    height: 72px;\n  }\n\n  .md\\:h-fit {\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:gap-16 {\n    gap: 4rem;\n  }\n\n  .md\\:gap-5 {\n    gap: 1.25rem;\n  }\n\n  .md\\:whitespace-nowrap {\n    white-space: nowrap;\n  }\n\n  .md\\:px-20 {\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n\n  .md\\:pl-0 {\n    padding-left: 0px;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .lg\\:w-\\[40\\%\\] {\n    width: 40%;\n  }\n\n  .lg\\:w-\\[550px\\] {\n    width: 550px;\n  }\n\n  .lg\\:px-40 {\n    padding-left: 10rem;\n    padding-right: 10rem;\n  }\n\n  .lg\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .lg\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .lg\\:text-8xl {\n    font-size: 6rem;\n    line-height: 1;\n  }\n\n  .lg\\:tracking-\\[10px\\] {\n    letter-spacing: 10px;\n  }\n}\n\n@media (min-width: 1280px) {\n\n  .xl\\:ml-0 {\n    margin-left: 0px;\n  }\n\n  .xl\\:mr-5 {\n    margin-right: 1.25rem;\n  }\n\n  .xl\\:block {\n    display: block;\n  }\n\n  .xl\\:w-\\[300px\\] {\n    width: 300px;\n  }\n\n  .xl\\:min-w-\\[300px\\] {\n    min-width: 300px;\n  }\n\n  .xl\\:flex-row {\n    flex-direction: row;\n  }\n\n  .xl\\:gap-1 {\n    gap: 0.25rem;\n  }\n\n  .xl\\:gap-\\[60px\\] {\n    gap: 60px;\n  }\n\n  .xl\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .xl\\:text-9xl {\n    font-size: 8rem;\n    line-height: 1;\n  }\n}\n`,
          "",
        ]);
        const m = d;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, a, l) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var s = this[o][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var c = [].concat(e[u]);
                (r && i[c[0]]) ||
                  (void 0 !== l &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = l)),
                  t &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = t))
                      : (c[2] = t)),
                  a &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = a))
                      : (c[4] = "".concat(a))),
                  n.push(c));
              }
            }),
            n
          );
        };
      },
      667: (e) => {
        "use strict";
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      854: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/IrenaKaramachoskaResume2023.pdf";
      },
      198: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/bootstrap.png";
      },
      246: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/css.png";
      },
      172: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/firebase.png";
      },
      329: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/html.png";
      },
      760: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/javascript.png";
      },
      350: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/jquery.png";
      },
      549: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/mui.png";
      },
      293: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/react.png";
      },
      910: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/tailwind.png";
      },
      725: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/typescript.png";
      },
      784: (e, n, t) => {
        "use strict";
        t.d(n, { Z: () => r });
        const r = t.p + "images/my-photo.png";
      },
      849: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/bikes-preview.png";
      },
      7: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/bikes.png";
      },
      161: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/brainster-labs.png";
      },
      718: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/bubble-logo.png";
      },
      581: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/car-racing.png";
      },
      17: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/coin-tracker-preview.png";
      },
      392: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/cointracker.png";
      },
      994: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/goodcarbon.png";
      },
      928: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/notes-preview.png";
      },
      66: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/notes.png";
      },
      417: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/race-preview.png";
      },
      380: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/resourceya-preview.png";
      },
      364: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/resourceya.png";
      },
      975: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "images/todoProject1.png";
      },
      448: (e, n, t) => {
        "use strict";
        var r = t(294),
          a = t(840);
        function l(e) {
          for (
            var n =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              t = 1;
            t < arguments.length;
            t++
          )
            n += "&args[]=" + encodeURIComponent(arguments[t]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            n +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          o = {};
        function s(e, n) {
          u(e, n), u(e + "Capture", n);
        }
        function u(e, n) {
          for (o[e] = n, e = 0; e < n.length; e++) i.add(n[e]);
        }
        var c = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, n, t, r, a, l, i) {
          (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = t),
            (this.propertyName = e),
            (this.type = n),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var n = e[0];
            g[n] = new h(n, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var b = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function y(e, n, t, r) {
          var a = g.hasOwnProperty(n) ? g[n] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < n.length) ||
              ("o" !== n[0] && "O" !== n[0]) ||
              ("n" !== n[1] && "N" !== n[1])) &&
            ((function (e, n, t, r) {
              if (
                null == n ||
                (function (e, n, t, r) {
                  if (null !== t && 0 === t.type) return !1;
                  switch (typeof n) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== t
                          ? !t.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, n, t, r)
              )
                return !0;
              if (r) return !1;
              if (null !== t)
                switch (t.type) {
                  case 3:
                    return !n;
                  case 4:
                    return !1 === n;
                  case 5:
                    return isNaN(n);
                  case 6:
                    return isNaN(n) || 1 > n;
                }
              return !1;
            })(n, t, a, r) && (t = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(m, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(n) &&
                (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === t ? 3 !== a.type && "" : t)
              : ((n = a.attributeName),
                (r = a.attributeNamespace),
                null === t
                  ? e.removeAttribute(n)
                  : ((t =
                      3 === (a = a.type) || (4 === a && !0 === t)
                        ? ""
                        : "" + t),
                    r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var n = e.replace(b, v);
            g[n] = new h(n, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var n = e.replace(b, v);
              g[n] = new h(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var n = e.replace(b, v);
            g[n] = new h(
              n,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          z = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          P = Symbol.for("react.suspense_list"),
          I = Symbol.for("react.memo"),
          L = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var M = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function j(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          O = Object.assign;
        function D(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (e) {
              var n = e.stack.trim().match(/\n( *(at )?)/);
              F = (n && n[1]) || "";
            }
          return "\n" + F + e;
        }
        var U = !1;
        function A(e, n) {
          if (!e || U) return "";
          U = !0;
          var t = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (n)
              if (
                ((n = function () {
                  throw Error();
                }),
                Object.defineProperty(n.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(n, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], n);
              } else {
                try {
                  n.call();
                } catch (e) {
                  r = e;
                }
                e.call(n.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (n) {
            if (n && r && "string" == typeof n.stack) {
              for (
                var a = n.stack.split("\n"),
                  l = r.stack.split("\n"),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = t);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = A(e.type, !1));
            case 11:
              return (e = A(e.type.render, !1));
            case 1:
              return (e = A(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case T:
              return "Suspense";
            case P:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case _:
                return (e._context.displayName || "Context") + ".Provider";
              case z:
                var n = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = n.displayName || n.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case I:
                return null !== (n = e.displayName || null)
                  ? n
                  : H(e.type) || "Memo";
              case L:
                (n = e._payload), (e = e._init);
                try {
                  return H(e(n));
                } catch (e) {}
            }
          return null;
        }
        function $(e) {
          var n = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (n.displayName || "Context") + ".Consumer";
            case 10:
              return (n._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = n.render).displayName || e.name || ""),
                n.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return n;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(n);
            case 8:
              return n === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" == typeof n)
                return n.displayName || n.name || null;
              if ("string" == typeof n) return n;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var n = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === n || "radio" === n)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var n = W(e) ? "checked" : "value",
                t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
                r = "" + e[n];
              if (
                !e.hasOwnProperty(n) &&
                void 0 !== t &&
                "function" == typeof t.get &&
                "function" == typeof t.set
              ) {
                var a = t.get,
                  l = t.set;
                return (
                  Object.defineProperty(e, n, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, n, { enumerable: t.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[n];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var n = e._valueTracker;
          if (!n) return !0;
          var t = n.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== t && (n.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (n) {
            return e.body;
          }
        }
        function Y(e, n) {
          var t = n.checked;
          return O({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != t ? t : e._wrapperState.initialChecked,
          });
        }
        function X(e, n) {
          var t = null == n.defaultValue ? "" : n.defaultValue,
            r = null != n.checked ? n.checked : n.defaultChecked;
          (t = V(null != n.value ? n.value : t)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: t,
              controlled:
                "checkbox" === n.type || "radio" === n.type
                  ? null != n.checked
                  : null != n.value,
            });
        }
        function J(e, n) {
          null != (n = n.checked) && y(e, "checked", n, !1);
        }
        function Z(e, n) {
          J(e, n);
          var t = V(n.value),
            r = n.type;
          if (null != t)
            "number" === r
              ? ((0 === t && "" === e.value) || e.value != t) &&
                (e.value = "" + t)
              : e.value !== "" + t && (e.value = "" + t);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          n.hasOwnProperty("value")
            ? ee(e, n.type, t)
            : n.hasOwnProperty("defaultValue") &&
              ee(e, n.type, V(n.defaultValue)),
            null == n.checked &&
              null != n.defaultChecked &&
              (e.defaultChecked = !!n.defaultChecked);
        }
        function G(e, n, t) {
          if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var r = n.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== n.value && null !== n.value)
              )
            )
              return;
            (n = "" + e._wrapperState.initialValue),
              t || n === e.value || (e.value = n),
              (e.defaultValue = n);
          }
          "" !== (t = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== t && (e.name = t);
        }
        function ee(e, n, t) {
          ("number" === n && K(e.ownerDocument) === e) ||
            (null == t
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
        }
        var ne = Array.isArray;
        function te(e, n, t, r) {
          if (((e = e.options), n)) {
            n = {};
            for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
            for (t = 0; t < e.length; t++)
              (a = n.hasOwnProperty("$" + e[t].value)),
                e[t].selected !== a && (e[t].selected = a),
                a && r && (e[t].defaultSelected = !0);
          } else {
            for (t = "" + V(t), n = null, a = 0; a < e.length; a++) {
              if (e[a].value === t)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== n || e[a].disabled || (n = e[a]);
            }
            null !== n && (n.selected = !0);
          }
        }
        function re(e, n) {
          if (null != n.dangerouslySetInnerHTML) throw Error(l(91));
          return O({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, n) {
          var t = n.value;
          if (null == t) {
            if (((t = n.children), (n = n.defaultValue), null != t)) {
              if (null != n) throw Error(l(92));
              if (ne(t)) {
                if (1 < t.length) throw Error(l(93));
                t = t[0];
              }
              n = t;
            }
            null == n && (n = ""), (t = n);
          }
          e._wrapperState = { initialValue: V(t) };
        }
        function le(e, n) {
          var t = V(n.value),
            r = V(n.defaultValue);
          null != t &&
            ((t = "" + t) !== e.value && (e.value = t),
            null == n.defaultValue &&
              e.defaultValue !== t &&
              (e.defaultValue = t)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var n = e.textContent;
          n === e._wrapperState.initialValue &&
            "" !== n &&
            null !== n &&
            (e.value = n);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, n) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(n)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, n) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = n;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + n.valueOf().toString() + "</svg>",
                    n = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; n.firstChild; ) e.appendChild(n.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, n, t, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, n);
                  });
                }
              : ce);
        function fe(e, n) {
          if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && 3 === t.nodeType)
              return void (t.nodeValue = n);
          }
          e.textContent = n;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, n, t) {
          return null == n || "boolean" == typeof n || "" === n
            ? ""
            : t ||
              "number" != typeof n ||
              0 === n ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + n).trim()
            : n + "px";
        }
        function ge(e, n) {
          for (var t in ((e = e.style), n))
            if (n.hasOwnProperty(t)) {
              var r = 0 === t.indexOf("--"),
                a = he(t, n[t], r);
              "float" === t && (t = "cssFloat"),
                r ? e.setProperty(t, a) : (e[t] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (n) {
            (n = n + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[n] = pe[e]);
          });
        });
        var be = O(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ve(e, n) {
          if (n) {
            if (
              be[e] &&
              (null != n.children || null != n.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != n.dangerouslySetInnerHTML) {
              if (null != n.children) throw Error(l(60));
              if (
                "object" != typeof n.dangerouslySetInnerHTML ||
                !("__html" in n.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != n.style && "object" != typeof n.style)
              throw Error(l(62));
          }
        }
        function ye(e, n) {
          if (-1 === e.indexOf("-")) return "string" == typeof n.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = ya(e))) {
            if ("function" != typeof ke) throw Error(l(280));
            var n = e.stateNode;
            n && ((n = xa(n)), ke(e.stateNode, e.type, n));
          }
        }
        function _e(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              n = Ee;
            if (((Ee = Se = null), Ce(e), n))
              for (e = 0; e < n.length; e++) Ce(n[e]);
          }
        }
        function ze(e, n) {
          return e(n);
        }
        function Te() {}
        var Pe = !1;
        function Ie(e, n, t) {
          if (Pe) return e(n, t);
          Pe = !0;
          try {
            return ze(e, n, t);
          } finally {
            (Pe = !1), (null !== Se || null !== Ee) && (Te(), Ne());
          }
        }
        function Le(e, n) {
          var t = e.stateNode;
          if (null === t) return null;
          var r = xa(t);
          if (null === r) return null;
          t = r[n];
          e: switch (n) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (t && "function" != typeof t) throw Error(l(231, n, typeof t));
          return t;
        }
        var Me = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            Me = !1;
          }
        function je(e, n, t, r, a, l, i, o, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            n.apply(t, u);
          } catch (e) {
            this.onError(e);
          }
        }
        var Fe = !1,
          Oe = null,
          De = !1,
          Ue = null,
          Ae = {
            onError: function (e) {
              (Fe = !0), (Oe = e);
            },
          };
        function Be(e, n, t, r, a, l, i, o, s) {
          (Fe = !1), (Oe = null), je.apply(Ae, arguments);
        }
        function He(e) {
          var n = e,
            t = e;
          if (e.alternate) for (; n.return; ) n = n.return;
          else {
            e = n;
            do {
              0 != (4098 & (n = e).flags) && (t = n.return), (e = n.return);
            } while (e);
          }
          return 3 === n.tag ? t : null;
        }
        function $e(e) {
          if (13 === e.tag) {
            var n = e.memoizedState;
            if (
              (null === n &&
                null !== (e = e.alternate) &&
                (n = e.memoizedState),
              null !== n)
            )
              return n.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (He(e) !== e) throw Error(l(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var n = e.alternate;
              if (!n) {
                if (null === (n = He(e))) throw Error(l(188));
                return n !== e ? null : e;
              }
              for (var t = e, r = n; ; ) {
                var a = t.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    t = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === t) return Ve(a), e;
                    if (i === r) return Ve(a), n;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (t.return !== r.return) (t = a), (r = i);
                else {
                  for (var o = !1, s = a.child; s; ) {
                    if (s === t) {
                      (o = !0), (t = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (t = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = i.child; s; ) {
                      if (s === t) {
                        (o = !0), (t = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = i), (t = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(l(189));
                  }
                }
                if (t.alternate !== r) throw Error(l(190));
              }
              if (3 !== t.tag) throw Error(l(188));
              return t.stateNode.current === t ? e : n;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var n = Qe(e);
            if (null !== n) return n;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Je = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Ge = a.unstable_ImmediatePriority,
          en = a.unstable_UserBlockingPriority,
          nn = a.unstable_NormalPriority,
          tn = a.unstable_LowPriority,
          rn = a.unstable_IdlePriority,
          an = null,
          ln = null;
        var on = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((sn(e) / un) | 0)) | 0;
              },
          sn = Math.log,
          un = Math.LN2;
        var cn = 64,
          dn = 4194304;
        function fn(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function pn(e, n) {
          var t = e.pendingLanes;
          if (0 === t) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & t;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (r = fn(o)) : 0 !== (l &= i) && (r = fn(l));
          } else 0 !== (i = t & ~a) ? (r = fn(i)) : 0 !== l && (r = fn(l));
          if (0 === r) return 0;
          if (
            0 !== n &&
            n !== r &&
            0 == (n & a) &&
            ((a = r & -r) >= (l = n & -n) || (16 === a && 0 != (4194240 & l)))
          )
            return n;
          if ((0 != (4 & r) && (r |= 16 & t), 0 !== (n = e.entangledLanes)))
            for (e = e.entanglements, n &= r; 0 < n; )
              (a = 1 << (t = 31 - on(n))), (r |= e[t]), (n &= ~a);
          return r;
        }
        function mn(e, n) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return n + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return n + 5e3;
            default:
              return -1;
          }
        }
        function hn(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function gn() {
          var e = cn;
          return 0 == (4194240 & (cn <<= 1)) && (cn = 64), e;
        }
        function bn(e) {
          for (var n = [], t = 0; 31 > t; t++) n.push(e);
          return n;
        }
        function vn(e, n, t) {
          (e.pendingLanes |= n),
            536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(n = 31 - on(n))] = t);
        }
        function yn(e, n) {
          var t = (e.entangledLanes |= n);
          for (e = e.entanglements; t; ) {
            var r = 31 - on(t),
              a = 1 << r;
            (a & n) | (e[r] & n) && (e[r] |= n), (t &= ~a);
          }
        }
        var wn = 0;
        function xn(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 != (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kn,
          Sn,
          En,
          Cn,
          _n,
          Nn = !1,
          zn = [],
          Tn = null,
          Pn = null,
          In = null,
          Ln = new Map(),
          Mn = new Map(),
          Rn = [],
          jn =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Fn(e, n) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tn = null;
              break;
            case "dragenter":
            case "dragleave":
              Pn = null;
              break;
            case "mouseover":
            case "mouseout":
              In = null;
              break;
            case "pointerover":
            case "pointerout":
              Ln.delete(n.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Mn.delete(n.pointerId);
          }
        }
        function On(e, n, t, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: n,
                domEventName: t,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== n && null !== (n = ya(n)) && Sn(n),
              e)
            : ((e.eventSystemFlags |= r),
              (n = e.targetContainers),
              null !== a && -1 === n.indexOf(a) && n.push(a),
              e);
        }
        function Dn(e) {
          var n = va(e.target);
          if (null !== n) {
            var t = He(n);
            if (null !== t)
              if (13 === (n = t.tag)) {
                if (null !== (n = $e(t)))
                  return (
                    (e.blockedOn = n),
                    void _n(e.priority, function () {
                      En(t);
                    })
                  );
              } else if (
                3 === n &&
                t.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === t.tag ? t.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Un(e) {
          if (null !== e.blockedOn) return !1;
          for (var n = e.targetContainers; 0 < n.length; ) {
            var t = Xn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (null !== t)
              return null !== (n = ya(t)) && Sn(n), (e.blockedOn = t), !1;
            var r = new (t = e.nativeEvent).constructor(t.type, t);
            (we = r), t.target.dispatchEvent(r), (we = null), n.shift();
          }
          return !0;
        }
        function An(e, n, t) {
          Un(e) && t.delete(n);
        }
        function Bn() {
          (Nn = !1),
            null !== Tn && Un(Tn) && (Tn = null),
            null !== Pn && Un(Pn) && (Pn = null),
            null !== In && Un(In) && (In = null),
            Ln.forEach(An),
            Mn.forEach(An);
        }
        function Hn(e, n) {
          e.blockedOn === n &&
            ((e.blockedOn = null),
            Nn ||
              ((Nn = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bn)));
        }
        function $n(e) {
          function n(n) {
            return Hn(n, e);
          }
          if (0 < zn.length) {
            Hn(zn[0], e);
            for (var t = 1; t < zn.length; t++) {
              var r = zn[t];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Tn && Hn(Tn, e),
              null !== Pn && Hn(Pn, e),
              null !== In && Hn(In, e),
              Ln.forEach(n),
              Mn.forEach(n),
              t = 0;
            t < Rn.length;
            t++
          )
            (r = Rn[t]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rn.length && null === (t = Rn[0]).blockedOn; )
            Dn(t), null === t.blockedOn && Rn.shift();
        }
        var Vn = w.ReactCurrentBatchConfig,
          Wn = !0;
        function Qn(e, n, t, r) {
          var a = wn,
            l = Vn.transition;
          Vn.transition = null;
          try {
            (wn = 1), Kn(e, n, t, r);
          } finally {
            (wn = a), (Vn.transition = l);
          }
        }
        function qn(e, n, t, r) {
          var a = wn,
            l = Vn.transition;
          Vn.transition = null;
          try {
            (wn = 4), Kn(e, n, t, r);
          } finally {
            (wn = a), (Vn.transition = l);
          }
        }
        function Kn(e, n, t, r) {
          if (Wn) {
            var a = Xn(e, n, t, r);
            if (null === a) Vr(e, n, r, Yn, t), Fn(e, r);
            else if (
              (function (e, n, t, r, a) {
                switch (n) {
                  case "focusin":
                    return (Tn = On(Tn, e, n, t, r, a)), !0;
                  case "dragenter":
                    return (Pn = On(Pn, e, n, t, r, a)), !0;
                  case "mouseover":
                    return (In = On(In, e, n, t, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Ln.set(l, On(Ln.get(l) || null, e, n, t, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Mn.set(l, On(Mn.get(l) || null, e, n, t, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, n, t, r)
            )
              r.stopPropagation();
            else if ((Fn(e, r), 4 & n && -1 < jn.indexOf(e))) {
              for (; null !== a; ) {
                var l = ya(a);
                if (
                  (null !== l && kn(l),
                  null === (l = Xn(e, n, t, r)) && Vr(e, n, r, Yn, t),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, n, r, null, t);
          }
        }
        var Yn = null;
        function Xn(e, n, t, r) {
          if (((Yn = null), null !== (e = va((e = xe(r))))))
            if (null === (n = He(e))) e = null;
            else if (13 === (t = n.tag)) {
              if (null !== (e = $e(n))) return e;
              e = null;
            } else if (3 === t) {
              if (n.stateNode.current.memoizedState.isDehydrated)
                return 3 === n.tag ? n.stateNode.containerInfo : null;
              e = null;
            } else n !== e && (e = null);
          return (Yn = e), null;
        }
        function Jn(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Ge:
                  return 1;
                case en:
                  return 4;
                case nn:
                case tn:
                  return 16;
                case rn:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zn = null,
          Gn = null,
          et = null;
        function nt() {
          if (et) return et;
          var e,
            n,
            t = Gn,
            r = t.length,
            a = "value" in Zn ? Zn.value : Zn.textContent,
            l = a.length;
          for (e = 0; e < r && t[e] === a[e]; e++);
          var i = r - e;
          for (n = 1; n <= i && t[r - n] === a[l - n]; n++);
          return (et = a.slice(e, 1 < n ? 1 - n : void 0));
        }
        function tt(e) {
          var n = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === n && (e = 13)
              : (e = n),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rt() {
          return !0;
        }
        function at() {
          return !1;
        }
        function lt(e) {
          function n(n, t, r, a, l) {
            for (var i in ((this._reactName = n),
            (this._targetInst = r),
            (this.type = t),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? rt
                : at),
              (this.isPropagationStopped = at),
              this
            );
          }
          return (
            O(n.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = rt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = rt));
              },
              persist: function () {},
              isPersistent: rt,
            }),
            n
          );
        }
        var it,
          ot,
          st,
          ut = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ct = lt(ut),
          dt = O({}, ut, { view: 0, detail: 0 }),
          ft = lt(dt),
          pt = O({}, dt, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Ct,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== st &&
                    (st && "mousemove" === e.type
                      ? ((it = e.screenX - st.screenX),
                        (ot = e.screenY - st.screenY))
                      : (ot = it = 0),
                    (st = e)),
                  it);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ot;
            },
          }),
          mt = lt(pt),
          ht = lt(O({}, pt, { dataTransfer: 0 })),
          gt = lt(O({}, dt, { relatedTarget: 0 })),
          bt = lt(
            O({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vt = O({}, ut, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yt = lt(vt),
          wt = lt(O({}, ut, { data: 0 })),
          xt = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kt = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          St = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Et(e) {
          var n = this.nativeEvent;
          return n.getModifierState
            ? n.getModifierState(e)
            : !!(e = St[e]) && !!n[e];
        }
        function Ct() {
          return Et;
        }
        var _t = O({}, dt, {
            key: function (e) {
              if (e.key) {
                var n = xt[e.key] || e.key;
                if ("Unidentified" !== n) return n;
              }
              return "keypress" === e.type
                ? 13 === (e = tt(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kt[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Ct,
            charCode: function (e) {
              return "keypress" === e.type ? tt(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tt(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nt = lt(_t),
          zt = lt(
            O({}, pt, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tt = lt(
            O({}, dt, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Ct,
            })
          ),
          Pt = lt(
            O({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          It = O({}, pt, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Lt = lt(It),
          Mt = [9, 13, 27, 32],
          Rt = c && "CompositionEvent" in window,
          jt = null;
        c && "documentMode" in document && (jt = document.documentMode);
        var Ft = c && "TextEvent" in window && !jt,
          Ot = c && (!Rt || (jt && 8 < jt && 11 >= jt)),
          Dt = String.fromCharCode(32),
          Ut = !1;
        function At(e, n) {
          switch (e) {
            case "keyup":
              return -1 !== Mt.indexOf(n.keyCode);
            case "keydown":
              return 229 !== n.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bt(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Ht = !1;
        var $t = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vt(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === n ? !!$t[e.type] : "textarea" === n;
        }
        function Wt(e, n, t, r) {
          _e(r),
            0 < (n = Qr(n, "onChange")).length &&
              ((t = new ct("onChange", "change", null, t, r)),
              e.push({ event: t, listeners: n }));
        }
        var Qt = null,
          qt = null;
        function Kt(e) {
          Dr(e, 0);
        }
        function Yt(e) {
          if (q(wa(e))) return e;
        }
        function Xt(e, n) {
          if ("change" === e) return n;
        }
        var Jt = !1;
        if (c) {
          var Zt;
          if (c) {
            var Gt = "oninput" in document;
            if (!Gt) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Gt = "function" == typeof er.oninput);
            }
            Zt = Gt;
          } else Zt = !1;
          Jt = Zt && (!document.documentMode || 9 < document.documentMode);
        }
        function nr() {
          Qt && (Qt.detachEvent("onpropertychange", tr), (qt = Qt = null));
        }
        function tr(e) {
          if ("value" === e.propertyName && Yt(qt)) {
            var n = [];
            Wt(n, qt, e, xe(e)), Ie(Kt, n);
          }
        }
        function rr(e, n, t) {
          "focusin" === e
            ? (nr(), (qt = t), (Qt = n).attachEvent("onpropertychange", tr))
            : "focusout" === e && nr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yt(qt);
        }
        function lr(e, n) {
          if ("click" === e) return Yt(n);
        }
        function ir(e, n) {
          if ("input" === e || "change" === e) return Yt(n);
        }
        var or =
          "function" == typeof Object.is
            ? Object.is
            : function (e, n) {
                return (
                  (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n)
                );
              };
        function sr(e, n) {
          if (or(e, n)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof n ||
            null === n
          )
            return !1;
          var t = Object.keys(e),
            r = Object.keys(n);
          if (t.length !== r.length) return !1;
          for (r = 0; r < t.length; r++) {
            var a = t[r];
            if (!d.call(n, a) || !or(e[a], n[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, n) {
          var t,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((t = e + r.textContent.length), e <= n && t >= n))
                return { node: r, offset: n - e };
              e = t;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, n) {
          return (
            !(!e || !n) &&
            (e === n ||
              ((!e || 3 !== e.nodeType) &&
                (n && 3 === n.nodeType
                  ? dr(e, n.parentNode)
                  : "contains" in e
                  ? e.contains(n)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(n)))))
          );
        }
        function fr() {
          for (var e = window, n = K(); n instanceof e.HTMLIFrameElement; ) {
            try {
              var t = "string" == typeof n.contentWindow.location.href;
            } catch (e) {
              t = !1;
            }
            if (!t) break;
            n = K((e = n.contentWindow).document);
          }
          return n;
        }
        function pr(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            n &&
            (("input" === n &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === n ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var n = fr(),
            t = e.focusedElem,
            r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            dr(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && pr(t))
              if (
                ((n = r.start),
                void 0 === (e = r.end) && (e = n),
                "selectionStart" in t)
              )
                (t.selectionStart = n),
                  (t.selectionEnd = Math.min(e, t.value.length));
              else if (
                (e =
                  ((n = t.ownerDocument || document) && n.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = t.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(t, l));
                var i = cr(t, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((n = n.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(n), e.extend(i.node, i.offset))
                    : (n.setEnd(i.node, i.offset), e.addRange(n)));
              }
            for (n = [], e = t; (e = e.parentNode); )
              1 === e.nodeType &&
                n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" == typeof t.focus && t.focus(), t = 0;
              t < n.length;
              t++
            )
              ((e = n[t]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          br = null,
          vr = null,
          yr = !1;
        function wr(e, n, t) {
          var r =
            t.window === t
              ? t.document
              : 9 === t.nodeType
              ? t
              : t.ownerDocument;
          yr ||
            null == gr ||
            gr !== K(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && sr(vr, r)) ||
              ((vr = r),
              0 < (r = Qr(br, "onSelect")).length &&
                ((n = new ct("onSelect", "select", null, n, t)),
                e.push({ event: n, listeners: r }),
                (n.target = gr))));
        }
        function xr(e, n) {
          var t = {};
          return (
            (t[e.toLowerCase()] = n.toLowerCase()),
            (t["Webkit" + e] = "webkit" + n),
            (t["Moz" + e] = "moz" + n),
            t
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var n,
            t = kr[e];
          for (n in t)
            if (t.hasOwnProperty(n) && n in Er) return (Sr[e] = t[n]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var _r = Cr("animationend"),
          Nr = Cr("animationiteration"),
          zr = Cr("animationstart"),
          Tr = Cr("transitionend"),
          Pr = new Map(),
          Ir =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Lr(e, n) {
          Pr.set(e, n), s(n, [e]);
        }
        for (var Mr = 0; Mr < Ir.length; Mr++) {
          var Rr = Ir[Mr];
          Lr(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Lr(_r, "onAnimationEnd"),
          Lr(Nr, "onAnimationIteration"),
          Lr(zr, "onAnimationStart"),
          Lr("dblclick", "onDoubleClick"),
          Lr("focusin", "onFocus"),
          Lr("focusout", "onBlur"),
          Lr(Tr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var jr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(jr)
          );
        function Or(e, n, t) {
          var r = e.type || "unknown-event";
          (e.currentTarget = t),
            (function (e, n, t, r, a, i, o, s, u) {
              if ((Be.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(l(198));
                var c = Oe;
                (Fe = !1), (Oe = null), De || ((De = !0), (Ue = c));
              }
            })(r, n, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, n) {
          n = 0 != (4 & n);
          for (var t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (n)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    s = o.instance,
                    u = o.currentTarget;
                  if (((o = o.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Or(a, o, u), (l = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (o = r[i]).instance),
                    (u = o.currentTarget),
                    (o = o.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Or(a, o, u), (l = s);
                }
            }
          }
          if (De) throw ((e = Ue), (De = !1), (Ue = null), e);
        }
        function Ur(e, n) {
          var t = n[ha];
          void 0 === t && (t = n[ha] = new Set());
          var r = e + "__bubble";
          t.has(r) || ($r(n, e, 2, !1), t.add(r));
        }
        function Ar(e, n, t) {
          var r = 0;
          n && (r |= 4), $r(t, e, r, n);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (n) {
                "selectionchange" !== n &&
                  (Fr.has(n) || Ar(n, !1, e), Ar(n, !0, e));
              });
            var n = 9 === e.nodeType ? e : e.ownerDocument;
            null === n || n[Br] || ((n[Br] = !0), Ar("selectionchange", !1, n));
          }
        }
        function $r(e, n, t, r) {
          switch (Jn(n)) {
            case 1:
              var a = Qn;
              break;
            case 4:
              a = qn;
              break;
            default:
              a = Kn;
          }
          (t = a.bind(null, n, t, e)),
            (a = void 0),
            !Me ||
              ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(n, t, { capture: !0, passive: a })
                : e.addEventListener(n, t, !0)
              : void 0 !== a
              ? e.addEventListener(n, t, { passive: a })
              : e.addEventListener(n, t, !1);
        }
        function Vr(e, n, t, r, a) {
          var l = r;
          if (0 == (1 & n) && 0 == (2 & n) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = va(o))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = l = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Ie(function () {
            var r = l,
              a = xe(t),
              i = [];
            e: {
              var o = Pr.get(e);
              if (void 0 !== o) {
                var s = ct,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tt(t)) break e;
                  case "keydown":
                  case "keyup":
                    s = Nt;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gt);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gt);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gt;
                    break;
                  case "click":
                    if (2 === t.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = mt;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = ht;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Tt;
                    break;
                  case _r:
                  case Nr:
                  case zr:
                    s = bt;
                    break;
                  case Tr:
                    s = Pt;
                    break;
                  case "scroll":
                    s = ft;
                    break;
                  case "wheel":
                    s = Lt;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = yt;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = zt;
                }
                var c = 0 != (4 & n),
                  d = !c && "scroll" === e,
                  f = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== f &&
                        null != (h = Le(m, f)) &&
                        c.push(Wr(m, h, p))),
                    d)
                  )
                    break;
                  m = m.return;
                }
                0 < c.length &&
                  ((o = new s(o, u, null, t, a)),
                  i.push({ event: o, listeners: c }));
              }
            }
            if (0 == (7 & n)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  t === we ||
                  !(u = t.relatedTarget || t.fromElement) ||
                  (!va(u) && !u[ma])) &&
                  (s || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = t.relatedTarget || t.toElement)
                          ? va(u)
                          : null) &&
                        (u !== (d = He(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = mt),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = zt),
                    (h = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (m = "pointer")),
                  (d = null == s ? o : wa(s)),
                  (p = null == u ? o : wa(u)),
                  ((o = new c(h, m + "leave", s, t, a)).target = d),
                  (o.relatedTarget = p),
                  (h = null),
                  va(a) === r &&
                    (((c = new c(f, m + "enter", u, t, a)).target = p),
                    (c.relatedTarget = d),
                    (h = c)),
                  (d = h),
                  s && u)
                )
                  e: {
                    for (f = u, m = 0, p = c = s; p; p = qr(p)) m++;
                    for (p = 0, h = f; h; h = qr(h)) p++;
                    for (; 0 < m - p; ) (c = qr(c)), m--;
                    for (; 0 < p - m; ) (f = qr(f)), p--;
                    for (; m--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Kr(i, o, s, c, !1),
                  null !== u && null !== d && Kr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (o = r ? wa(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === s && "file" === o.type)
              )
                var g = Xt;
              else if (Vt(o))
                if (Jt) g = ir;
                else {
                  g = ar;
                  var b = rr;
                }
              else
                (s = o.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? Wt(i, g, t, a)
                  : (b && b(e, o, r),
                    "focusout" === e &&
                      (b = o._wrapperState) &&
                      b.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (b = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Vt(b) || "true" === b.contentEditable) &&
                    ((gr = b), (br = r), (vr = null));
                  break;
                case "focusout":
                  vr = br = gr = null;
                  break;
                case "mousedown":
                  yr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (yr = !1), wr(i, t, a);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  wr(i, t, a);
              }
              var v;
              if (Rt)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Ht
                  ? At(e, t) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === t.keyCode &&
                    (y = "onCompositionStart");
              y &&
                (Ot &&
                  "ko" !== t.locale &&
                  (Ht || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Ht && (v = nt())
                    : ((Gn = "value" in (Zn = a) ? Zn.value : Zn.textContent),
                      (Ht = !0))),
                0 < (b = Qr(r, y)).length &&
                  ((y = new wt(y, e, null, t, a)),
                  i.push({ event: y, listeners: b }),
                  v ? (y.data = v) : null !== (v = Bt(t)) && (y.data = v))),
                (v = Ft
                  ? (function (e, n) {
                      switch (e) {
                        case "compositionend":
                          return Bt(n);
                        case "keypress":
                          return 32 !== n.which ? null : ((Ut = !0), Dt);
                        case "textInput":
                          return (e = n.data) === Dt && Ut ? null : e;
                        default:
                          return null;
                      }
                    })(e, t)
                  : (function (e, n) {
                      if (Ht)
                        return "compositionend" === e || (!Rt && At(e, n))
                          ? ((e = nt()), (et = Gn = Zn = null), (Ht = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(n.ctrlKey || n.altKey || n.metaKey) ||
                            (n.ctrlKey && n.altKey)
                          ) {
                            if (n.char && 1 < n.char.length) return n.char;
                            if (n.which) return String.fromCharCode(n.which);
                          }
                          return null;
                        case "compositionend":
                          return Ot && "ko" !== n.locale ? null : n.data;
                      }
                    })(e, t)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wt("onBeforeInput", "beforeinput", null, t, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = v));
            }
            Dr(i, n);
          });
        }
        function Wr(e, n, t) {
          return { instance: e, listener: n, currentTarget: t };
        }
        function Qr(e, n) {
          for (var t = n + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Le(e, t)) && r.unshift(Wr(e, l, a)),
              null != (l = Le(e, n)) && r.push(Wr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, n, t, r, a) {
          for (var l = n._reactName, i = []; null !== t && t !== r; ) {
            var o = t,
              s = o.alternate,
              u = o.stateNode;
            if (null !== s && s === r) break;
            5 === o.tag &&
              null !== u &&
              ((o = u),
              a
                ? null != (s = Le(t, l)) && i.unshift(Wr(t, s, o))
                : a || (null != (s = Le(t, l)) && i.push(Wr(t, s, o)))),
              (t = t.return);
          }
          0 !== i.length && e.push({ event: n, listeners: i });
        }
        var Yr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" == typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Xr, "");
        }
        function Zr(e, n, t) {
          if (((n = Jr(n)), Jr(e) !== n && t)) throw Error(l(425));
        }
        function Gr() {}
        var ea = null,
          na = null;
        function ta(e, n) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" == typeof n.children ||
            "number" == typeof n.children ||
            ("object" == typeof n.dangerouslySetInnerHTML &&
              null !== n.dangerouslySetInnerHTML &&
              null != n.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" == typeof setTimeout ? setTimeout : void 0,
          aa = "function" == typeof clearTimeout ? clearTimeout : void 0,
          la = "function" == typeof Promise ? Promise : void 0,
          ia =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== la
              ? function (e) {
                  return la.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, n) {
          var t = n,
            r = 0;
          do {
            var a = t.nextSibling;
            if ((e.removeChild(t), a && 8 === a.nodeType))
              if ("/$" === (t = a.data)) {
                if (0 === r) return e.removeChild(a), void $n(n);
                r--;
              } else ("$" !== t && "$?" !== t && "$!" !== t) || r++;
            t = a;
          } while (t);
          $n(n);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var n = e.nodeType;
            if (1 === n || 3 === n) break;
            if (8 === n) {
              if ("$" === (n = e.data) || "$!" === n || "$?" === n) break;
              if ("/$" === n) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var n = 0; e; ) {
            if (8 === e.nodeType) {
              var t = e.data;
              if ("$" === t || "$!" === t || "$?" === t) {
                if (0 === n) return e;
                n--;
              } else "/$" === t && n++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ma = "__reactContainer$" + da,
          ha = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          ba = "__reactHandles$" + da;
        function va(e) {
          var n = e[fa];
          if (n) return n;
          for (var t = e.parentNode; t; ) {
            if ((n = t[ma] || t[fa])) {
              if (
                ((t = n.alternate),
                null !== n.child || (null !== t && null !== t.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((t = e[fa])) return t;
                  e = ca(e);
                }
              return n;
            }
            t = (e = t).parentNode;
          }
          return null;
        }
        function ya(e) {
          return !(e = e[fa] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function _a(e, n) {
          Sa++, (ka[Sa] = e.current), (e.current = n);
        }
        var Na = {},
          za = Ea(Na),
          Ta = Ea(!1),
          Pa = Na;
        function Ia(e, n) {
          var t = e.type.contextTypes;
          if (!t) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in t) l[a] = n[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                n),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function La(e) {
          return null != (e = e.childContextTypes);
        }
        function Ma() {
          Ca(Ta), Ca(za);
        }
        function Ra(e, n, t) {
          if (za.current !== Na) throw Error(l(168));
          _a(za, n), _a(Ta, t);
        }
        function ja(e, n, t) {
          var r = e.stateNode;
          if (
            ((n = n.childContextTypes), "function" != typeof r.getChildContext)
          )
            return t;
          for (var a in (r = r.getChildContext()))
            if (!(a in n)) throw Error(l(108, $(e) || "Unknown", a));
          return O({}, t, r);
        }
        function Fa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (Pa = za.current),
            _a(za, e),
            _a(Ta, Ta.current),
            !0
          );
        }
        function Oa(e, n, t) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          t
            ? ((e = ja(e, n, Pa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Ta),
              Ca(za),
              _a(za, e))
            : Ca(Ta),
            _a(Ta, t);
        }
        var Da = null,
          Ua = !1,
          Aa = !1;
        function Ba(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Ha() {
          if (!Aa && null !== Da) {
            Aa = !0;
            var e = 0,
              n = wn;
            try {
              var t = Da;
              for (wn = 1; e < t.length; e++) {
                var r = t[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Ua = !1);
            } catch (n) {
              throw (null !== Da && (Da = Da.slice(e + 1)), qe(Ge, Ha), n);
            } finally {
              (wn = n), (Aa = !1);
            }
          }
          return null;
        }
        var $a = [],
          Va = 0,
          Wa = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Ya = null,
          Xa = 1,
          Ja = "";
        function Za(e, n) {
          ($a[Va++] = Qa), ($a[Va++] = Wa), (Wa = e), (Qa = n);
        }
        function Ga(e, n, t) {
          (qa[Ka++] = Xa), (qa[Ka++] = Ja), (qa[Ka++] = Ya), (Ya = e);
          var r = Xa;
          e = Ja;
          var a = 32 - on(r) - 1;
          (r &= ~(1 << a)), (t += 1);
          var l = 32 - on(n) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Xa = (1 << (32 - on(n) + a)) | (t << a) | r),
              (Ja = l + e);
          } else (Xa = (1 << l) | (t << a) | r), (Ja = e);
        }
        function el(e) {
          null !== e.return && (Za(e, 1), Ga(e, 1, 0));
        }
        function nl(e) {
          for (; e === Wa; )
            (Wa = $a[--Va]), ($a[Va] = null), (Qa = $a[--Va]), ($a[Va] = null);
          for (; e === Ya; )
            (Ya = qa[--Ka]),
              (qa[Ka] = null),
              (Ja = qa[--Ka]),
              (qa[Ka] = null),
              (Xa = qa[--Ka]),
              (qa[Ka] = null);
        }
        var tl = null,
          rl = null,
          al = !1,
          ll = null;
        function il(e, n) {
          var t = Lu(5, null, null, 0);
          (t.elementType = "DELETED"),
            (t.stateNode = n),
            (t.return = e),
            null === (n = e.deletions)
              ? ((e.deletions = [t]), (e.flags |= 16))
              : n.push(t);
        }
        function ol(e, n) {
          switch (e.tag) {
            case 5:
              var t = e.type;
              return (
                null !==
                  (n =
                    1 !== n.nodeType ||
                    t.toLowerCase() !== n.nodeName.toLowerCase()
                      ? null
                      : n) &&
                ((e.stateNode = n), (tl = e), (rl = ua(n.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) &&
                ((e.stateNode = n), (tl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (n = 8 !== n.nodeType ? null : n) &&
                ((t = null !== Ya ? { id: Xa, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: n,
                  treeContext: t,
                  retryLane: 1073741824,
                }),
                ((t = Lu(18, null, null, 0)).stateNode = n),
                (t.return = e),
                (e.child = t),
                (tl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sl(e) {
          return 0 != (1 & e.mode) && 0 == (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var n = rl;
            if (n) {
              var t = n;
              if (!ol(e, n)) {
                if (sl(e)) throw Error(l(418));
                n = ua(t.nextSibling);
                var r = tl;
                n && ol(e, n)
                  ? il(r, t)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (tl = e));
              }
            } else {
              if (sl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (tl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          tl = e;
        }
        function dl(e) {
          if (e !== tl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var n;
          if (
            ((n = 3 !== e.tag) &&
              !(n = 5 !== e.tag) &&
              (n =
                "head" !== (n = e.type) &&
                "body" !== n &&
                !ta(e.type, e.memoizedProps)),
            n && (n = rl))
          ) {
            if (sl(e)) throw (fl(), Error(l(418)));
            for (; n; ) il(e, n), (n = ua(n.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType) {
                  var t = e.data;
                  if ("/$" === t) {
                    if (0 === n) {
                      rl = ua(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = tl ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function pl() {
          (rl = tl = null), (al = !1);
        }
        function ml(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var hl = w.ReactCurrentBatchConfig;
        function gl(e, n) {
          if (e && e.defaultProps) {
            for (var t in ((n = O({}, n)), (e = e.defaultProps)))
              void 0 === n[t] && (n[t] = e[t]);
            return n;
          }
          return n;
        }
        var bl = Ea(null),
          vl = null,
          yl = null,
          wl = null;
        function xl() {
          wl = yl = vl = null;
        }
        function kl(e) {
          var n = bl.current;
          Ca(bl), (e._currentValue = n);
        }
        function Sl(e, n, t) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), null !== r && (r.childLanes |= n))
                : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n),
              e === t)
            )
              break;
            e = e.return;
          }
        }
        function El(e, n) {
          (vl = e),
            (wl = yl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & n) && (wo = !0), (e.firstContext = null));
        }
        function Cl(e) {
          var n = e._currentValue;
          if (wl !== e)
            if (
              ((e = { context: e, memoizedValue: n, next: null }), null === yl)
            ) {
              if (null === vl) throw Error(l(308));
              (yl = e), (vl.dependencies = { lanes: 0, firstContext: e });
            } else yl = yl.next = e;
          return n;
        }
        var _l = null;
        function Nl(e) {
          null === _l ? (_l = [e]) : _l.push(e);
        }
        function zl(e, n, t, r) {
          var a = n.interleaved;
          return (
            null === a
              ? ((t.next = t), Nl(n))
              : ((t.next = a.next), (a.next = t)),
            (n.interleaved = t),
            Tl(e, r)
          );
        }
        function Tl(e, n) {
          e.lanes |= n;
          var t = e.alternate;
          for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; )
            (e.childLanes |= n),
              null !== (t = e.alternate) && (t.childLanes |= n),
              (t = e),
              (e = e.return);
          return 3 === t.tag ? t.stateNode : null;
        }
        var Pl = !1;
        function Il(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ll(e, n) {
          (e = e.updateQueue),
            n.updateQueue === e &&
              (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ml(e, n) {
          return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Rl(e, n, t) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 != (2 & Ts))) {
            var a = r.pending;
            return (
              null === a ? (n.next = n) : ((n.next = a.next), (a.next = n)),
              (r.pending = n),
              Tl(e, t)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((n.next = n), Nl(r))
              : ((n.next = a.next), (a.next = n)),
            (r.interleaved = n),
            Tl(e, t)
          );
        }
        function jl(e, n, t) {
          if (
            null !== (n = n.updateQueue) &&
            ((n = n.shared), 0 != (4194240 & t))
          ) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), yn(e, t);
          }
        }
        function Fl(e, n) {
          var t = e.updateQueue,
            r = e.alternate;
          if (null !== r && t === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (t = t.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: t.eventTime,
                  lane: t.lane,
                  tag: t.tag,
                  payload: t.payload,
                  callback: t.callback,
                  next: null,
                };
                null === l ? (a = l = i) : (l = l.next = i), (t = t.next);
              } while (null !== t);
              null === l ? (a = l = n) : (l = l.next = n);
            } else a = l = n;
            return (
              (t = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = t)
            );
          }
          null === (e = t.lastBaseUpdate)
            ? (t.firstBaseUpdate = n)
            : (e.next = n),
            (t.lastBaseUpdate = n);
        }
        function Ol(e, n, t, r) {
          var a = e.updateQueue;
          Pl = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              u = s.next;
            (s.next = null), null === i ? (l = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, o = l; ; ) {
              var f = o.lane,
                p = o.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = o;
                  switch (((f = n), (p = t), h.tag)) {
                    case 1:
                      if ("function" == typeof (m = h.payload)) {
                        d = m.call(p, d, f);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (f =
                          "function" == typeof (m = h.payload)
                            ? m.call(p, d, f)
                            : m)
                      )
                        break e;
                      d = O({}, d, f);
                      break e;
                    case 2:
                      Pl = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (f = o).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (n = a.shared.interleaved))
            ) {
              a = n;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== n);
            } else null === l && (a.shared.lanes = 0);
            (Os |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Dl(e, n, t) {
          if (((e = n.effects), (n.effects = null), null !== e))
            for (n = 0; n < e.length; n++) {
              var r = e[n],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = t), "function" != typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Ul = new r.Component().refs;
        function Al(e, n, t, r) {
          (t = null == (t = t(r, (n = e.memoizedState))) ? n : O({}, n, t)),
            (e.memoizedState = t),
            0 === e.lanes && (e.updateQueue.baseState = t);
        }
        var Bl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, n, t) {
            e = e._reactInternals;
            var r = nu(),
              a = tu(e),
              l = Ml(r, a);
            (l.payload = n),
              null != t && (l.callback = t),
              null !== (n = Rl(e, l, a)) && (ru(n, e, a, r), jl(n, e, a));
          },
          enqueueReplaceState: function (e, n, t) {
            e = e._reactInternals;
            var r = nu(),
              a = tu(e),
              l = Ml(r, a);
            (l.tag = 1),
              (l.payload = n),
              null != t && (l.callback = t),
              null !== (n = Rl(e, l, a)) && (ru(n, e, a, r), jl(n, e, a));
          },
          enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var t = nu(),
              r = tu(e),
              a = Ml(t, r);
            (a.tag = 2),
              null != n && (a.callback = n),
              null !== (n = Rl(e, a, r)) && (ru(n, e, r, t), jl(n, e, r));
          },
        };
        function Hl(e, n, t, r, a, l, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !n.prototype ||
                !n.prototype.isPureReactComponent ||
                !sr(t, r) ||
                !sr(a, l);
        }
        function $l(e, n, t) {
          var r = !1,
            a = Na,
            l = n.contextType;
          return (
            "object" == typeof l && null !== l
              ? (l = Cl(l))
              : ((a = La(n) ? Pa : za.current),
                (l = (r = null != (r = n.contextTypes)) ? Ia(e, a) : Na)),
            (n = new n(t, l)),
            (e.memoizedState =
              null !== n.state && void 0 !== n.state ? n.state : null),
            (n.updater = Bl),
            (e.stateNode = n),
            (n._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            n
          );
        }
        function Vl(e, n, t, r) {
          (e = n.state),
            "function" == typeof n.componentWillReceiveProps &&
              n.componentWillReceiveProps(t, r),
            "function" == typeof n.UNSAFE_componentWillReceiveProps &&
              n.UNSAFE_componentWillReceiveProps(t, r),
            n.state !== e && Bl.enqueueReplaceState(n, n.state, null);
        }
        function Wl(e, n, t, r) {
          var a = e.stateNode;
          (a.props = t), (a.state = e.memoizedState), (a.refs = Ul), Il(e);
          var l = n.contextType;
          "object" == typeof l && null !== l
            ? (a.context = Cl(l))
            : ((l = La(n) ? Pa : za.current), (a.context = Ia(e, l))),
            (a.state = e.memoizedState),
            "function" == typeof (l = n.getDerivedStateFromProps) &&
              (Al(e, n, l, t), (a.state = e.memoizedState)),
            "function" == typeof n.getDerivedStateFromProps ||
              "function" == typeof a.getSnapshotBeforeUpdate ||
              ("function" != typeof a.UNSAFE_componentWillMount &&
                "function" != typeof a.componentWillMount) ||
              ((n = a.state),
              "function" == typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" == typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              n !== a.state && Bl.enqueueReplaceState(a, a.state, null),
              Ol(e, t, a, r),
              (a.state = e.memoizedState)),
            "function" == typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ql(e, n, t) {
          if (
            null !== (e = t.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (t._owner) {
              if ((t = t._owner)) {
                if (1 !== t.tag) throw Error(l(309));
                var r = t.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                i = "" + e;
              return null !== n &&
                null !== n.ref &&
                "function" == typeof n.ref &&
                n.ref._stringRef === i
                ? n.ref
                : ((n = function (e) {
                    var n = a.refs;
                    n === Ul && (n = a.refs = {}),
                      null === e ? delete n[i] : (n[i] = e);
                  }),
                  (n._stringRef = i),
                  n);
            }
            if ("string" != typeof e) throw Error(l(284));
            if (!t._owner) throw Error(l(290, e));
          }
          return e;
        }
        function ql(e, n) {
          throw (
            ((e = Object.prototype.toString.call(n)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(n).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Kl(e) {
          return (0, e._init)(e._payload);
        }
        function Yl(e) {
          function n(n, t) {
            if (e) {
              var r = n.deletions;
              null === r ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t);
            }
          }
          function t(t, r) {
            if (!e) return null;
            for (; null !== r; ) n(t, r), (r = r.sibling);
            return null;
          }
          function r(e, n) {
            for (e = new Map(); null !== n; )
              null !== n.key ? e.set(n.key, n) : e.set(n.index, n),
                (n = n.sibling);
            return e;
          }
          function a(e, n) {
            return ((e = Ru(e, n)).index = 0), (e.sibling = null), e;
          }
          function i(n, t, r) {
            return (
              (n.index = r),
              e
                ? null !== (r = n.alternate)
                  ? (r = r.index) < t
                    ? ((n.flags |= 2), t)
                    : r
                  : ((n.flags |= 2), t)
                : ((n.flags |= 1048576), t)
            );
          }
          function o(n) {
            return e && null === n.alternate && (n.flags |= 2), n;
          }
          function s(e, n, t, r) {
            return null === n || 6 !== n.tag
              ? (((n = Du(t, e.mode, r)).return = e), n)
              : (((n = a(n, t)).return = e), n);
          }
          function u(e, n, t, r) {
            var l = t.type;
            return l === S
              ? d(e, n, t.props.children, r, t.key)
              : null !== n &&
                (n.elementType === l ||
                  ("object" == typeof l &&
                    null !== l &&
                    l.$$typeof === L &&
                    Kl(l) === n.type))
              ? (((r = a(n, t.props)).ref = Ql(e, n, t)), (r.return = e), r)
              : (((r = ju(t.type, t.key, t.props, null, e.mode, r)).ref = Ql(
                  e,
                  n,
                  t
                )),
                (r.return = e),
                r);
          }
          function c(e, n, t, r) {
            return null === n ||
              4 !== n.tag ||
              n.stateNode.containerInfo !== t.containerInfo ||
              n.stateNode.implementation !== t.implementation
              ? (((n = Uu(t, e.mode, r)).return = e), n)
              : (((n = a(n, t.children || [])).return = e), n);
          }
          function d(e, n, t, r, l) {
            return null === n || 7 !== n.tag
              ? (((n = Fu(t, e.mode, r, l)).return = e), n)
              : (((n = a(n, t)).return = e), n);
          }
          function f(e, n, t) {
            if (("string" == typeof n && "" !== n) || "number" == typeof n)
              return ((n = Du("" + n, e.mode, t)).return = e), n;
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return (
                    ((t = ju(n.type, n.key, n.props, null, e.mode, t)).ref = Ql(
                      e,
                      null,
                      n
                    )),
                    (t.return = e),
                    t
                  );
                case k:
                  return ((n = Uu(n, e.mode, t)).return = e), n;
                case L:
                  return f(e, (0, n._init)(n._payload), t);
              }
              if (ne(n) || j(n))
                return ((n = Fu(n, e.mode, t, null)).return = e), n;
              ql(e, n);
            }
            return null;
          }
          function p(e, n, t, r) {
            var a = null !== n ? n.key : null;
            if (("string" == typeof t && "" !== t) || "number" == typeof t)
              return null !== a ? null : s(e, n, "" + t, r);
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return t.key === a ? u(e, n, t, r) : null;
                case k:
                  return t.key === a ? c(e, n, t, r) : null;
                case L:
                  return p(e, n, (a = t._init)(t._payload), r);
              }
              if (ne(t) || j(t)) return null !== a ? null : d(e, n, t, r, null);
              ql(e, t);
            }
            return null;
          }
          function m(e, n, t, r, a) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r)
              return s(n, (e = e.get(t) || null), "" + r, a);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    a
                  );
                case L:
                  return m(e, n, t, (0, r._init)(r._payload), a);
              }
              if (ne(r) || j(r))
                return d(n, (e = e.get(t) || null), r, a, null);
              ql(n, r);
            }
            return null;
          }
          function h(a, l, o, s) {
            for (
              var u = null, c = null, d = l, h = (l = 0), g = null;
              null !== d && h < o.length;
              h++
            ) {
              d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
              var b = p(a, d, o[h], s);
              if (null === b) {
                null === d && (d = g);
                break;
              }
              e && d && null === b.alternate && n(a, d),
                (l = i(b, l, h)),
                null === c ? (u = b) : (c.sibling = b),
                (c = b),
                (d = g);
            }
            if (h === o.length) return t(a, d), al && Za(a, h), u;
            if (null === d) {
              for (; h < o.length; h++)
                null !== (d = f(a, o[h], s)) &&
                  ((l = i(d, l, h)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return al && Za(a, h), u;
            }
            for (d = r(a, d); h < o.length; h++)
              null !== (g = m(d, a, h, o[h], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? h : g.key),
                (l = i(g, l, h)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return n(a, e);
                }),
              al && Za(a, h),
              u
            );
          }
          function g(a, o, s, u) {
            var c = j(s);
            if ("function" != typeof c) throw Error(l(150));
            if (null == (s = c.call(s))) throw Error(l(151));
            for (
              var d = (c = null), h = o, g = (o = 0), b = null, v = s.next();
              null !== h && !v.done;
              g++, v = s.next()
            ) {
              h.index > g ? ((b = h), (h = null)) : (b = h.sibling);
              var y = p(a, h, v.value, u);
              if (null === y) {
                null === h && (h = b);
                break;
              }
              e && h && null === y.alternate && n(a, h),
                (o = i(y, o, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y),
                (h = b);
            }
            if (v.done) return t(a, h), al && Za(a, g), c;
            if (null === h) {
              for (; !v.done; g++, v = s.next())
                null !== (v = f(a, v.value, u)) &&
                  ((o = i(v, o, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return al && Za(a, g), c;
            }
            for (h = r(a, h); !v.done; g++, v = s.next())
              null !== (v = m(h, a, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  h.delete(null === v.key ? g : v.key),
                (o = i(v, o, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                h.forEach(function (e) {
                  return n(a, e);
                }),
              al && Za(a, g),
              c
            );
          }
          return function e(r, l, i, s) {
            if (
              ("object" == typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" == typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var u = i.key, c = l; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === S) {
                          if (7 === c.tag) {
                            t(r, c.sibling),
                              ((l = a(c, i.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" == typeof u &&
                            null !== u &&
                            u.$$typeof === L &&
                            Kl(u) === c.type)
                        ) {
                          t(r, c.sibling),
                            ((l = a(c, i.props)).ref = Ql(r, c, i)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        t(r, c);
                        break;
                      }
                      n(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((l = Fu(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = l))
                      : (((s = ju(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = Ql(r, l, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return o(r);
                case k:
                  e: {
                    for (c = i.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          t(r, l.sibling),
                            ((l = a(l, i.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        t(r, l);
                        break;
                      }
                      n(r, l), (l = l.sibling);
                    }
                    ((l = Uu(i, r.mode, s)).return = r), (r = l);
                  }
                  return o(r);
                case L:
                  return e(r, l, (c = i._init)(i._payload), s);
              }
              if (ne(i)) return h(r, l, i, s);
              if (j(i)) return g(r, l, i, s);
              ql(r, i);
            }
            return ("string" == typeof i && "" !== i) || "number" == typeof i
              ? ((i = "" + i),
                null !== l && 6 === l.tag
                  ? (t(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (t(r, l), ((l = Du(i, r.mode, s)).return = r), (r = l)),
                o(r))
              : t(r, l);
          };
        }
        var Xl = Yl(!0),
          Jl = Yl(!1),
          Zl = {},
          Gl = Ea(Zl),
          ei = Ea(Zl),
          ni = Ea(Zl);
        function ti(e) {
          if (e === Zl) throw Error(l(174));
          return e;
        }
        function ri(e, n) {
          switch ((_a(ni, n), _a(ei, e), _a(Gl, Zl), (e = n.nodeType))) {
            case 9:
            case 11:
              n = (n = n.documentElement) ? n.namespaceURI : se(null, "");
              break;
            default:
              n = se(
                (n = (e = 8 === e ? n.parentNode : n).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Gl), _a(Gl, n);
        }
        function ai() {
          Ca(Gl), Ca(ei), Ca(ni);
        }
        function li(e) {
          ti(ni.current);
          var n = ti(Gl.current),
            t = se(n, e.type);
          n !== t && (_a(ei, e), _a(Gl, t));
        }
        function ii(e) {
          ei.current === e && (Ca(Gl), Ca(ei));
        }
        var oi = Ea(0);
        function si(e) {
          for (var n = e; null !== n; ) {
            if (13 === n.tag) {
              var t = n.memoizedState;
              if (
                null !== t &&
                (null === (t = t.dehydrated) ||
                  "$?" === t.data ||
                  "$!" === t.data)
              )
                return n;
            } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
              if (0 != (128 & n.flags)) return n;
            } else if (null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return null;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
          return null;
        }
        var ui = [];
        function ci() {
          for (var e = 0; e < ui.length; e++)
            ui[e]._workInProgressVersionPrimary = null;
          ui.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          fi = w.ReactCurrentBatchConfig,
          pi = 0,
          mi = null,
          hi = null,
          gi = null,
          bi = !1,
          vi = !1,
          yi = 0,
          wi = 0;
        function xi() {
          throw Error(l(321));
        }
        function ki(e, n) {
          if (null === n) return !1;
          for (var t = 0; t < n.length && t < e.length; t++)
            if (!or(e[t], n[t])) return !1;
          return !0;
        }
        function Si(e, n, t, r, a, i) {
          if (
            ((pi = i),
            (mi = n),
            (n.memoizedState = null),
            (n.updateQueue = null),
            (n.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? io : oo),
            (e = t(r, a)),
            vi)
          ) {
            i = 0;
            do {
              if (((vi = !1), (yi = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (gi = hi = null),
                (n.updateQueue = null),
                (di.current = so),
                (e = t(r, a));
            } while (vi);
          }
          if (
            ((di.current = lo),
            (n = null !== hi && null !== hi.next),
            (pi = 0),
            (gi = hi = mi = null),
            (bi = !1),
            n)
          )
            throw Error(l(300));
          return e;
        }
        function Ei() {
          var e = 0 !== yi;
          return (yi = 0), e;
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e), gi
          );
        }
        function _i() {
          if (null === hi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = hi.next;
          var n = null === gi ? mi.memoizedState : gi.next;
          if (null !== n) (gi = n), (hi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (hi = e).memoizedState,
              baseState: hi.baseState,
              baseQueue: hi.baseQueue,
              queue: hi.queue,
              next: null,
            }),
              null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function Ni(e, n) {
          return "function" == typeof n ? n(e) : n;
        }
        function zi(e) {
          var n = _i(),
            t = n.queue;
          if (null === t) throw Error(l(311));
          t.lastRenderedReducer = e;
          var r = hi,
            a = r.baseQueue,
            i = t.pending;
          if (null !== i) {
            if (null !== a) {
              var o = a.next;
              (a.next = i.next), (i.next = o);
            }
            (r.baseQueue = a = i), (t.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (o = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((pi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (o = r)) : (u = u.next = f),
                  (mi.lanes |= d),
                  (Os |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (o = r) : (u.next = s),
              or(r, n.memoizedState) || (wo = !0),
              (n.memoizedState = r),
              (n.baseState = o),
              (n.baseQueue = u),
              (t.lastRenderedState = r);
          }
          if (null !== (e = t.interleaved)) {
            a = e;
            do {
              (i = a.lane), (mi.lanes |= i), (Os |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (t.lanes = 0);
          return [n.memoizedState, t.dispatch];
        }
        function Ti(e) {
          var n = _i(),
            t = n.queue;
          if (null === t) throw Error(l(311));
          t.lastRenderedReducer = e;
          var r = t.dispatch,
            a = t.pending,
            i = n.memoizedState;
          if (null !== a) {
            t.pending = null;
            var o = (a = a.next);
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (o !== a);
            or(i, n.memoizedState) || (wo = !0),
              (n.memoizedState = i),
              null === n.baseQueue && (n.baseState = i),
              (t.lastRenderedState = i);
          }
          return [i, r];
        }
        function Pi() {}
        function Ii(e, n) {
          var t = mi,
            r = _i(),
            a = n(),
            i = !or(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wo = !0)),
            (r = r.queue),
            $i(Ri.bind(null, t, r, e), [e]),
            r.getSnapshot !== n ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((t.flags |= 2048),
              Di(9, Mi.bind(null, t, r, a, n), void 0, null),
              null === Ps)
            )
              throw Error(l(349));
            0 != (30 & pi) || Li(t, n, a);
          }
          return a;
        }
        function Li(e, n, t) {
          (e.flags |= 16384),
            (e = { getSnapshot: n, value: t }),
            null === (n = mi.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (mi.updateQueue = n),
                (n.stores = [e]))
              : null === (t = n.stores)
              ? (n.stores = [e])
              : t.push(e);
        }
        function Mi(e, n, t, r) {
          (n.value = t), (n.getSnapshot = r), ji(n) && Fi(e);
        }
        function Ri(e, n, t) {
          return t(function () {
            ji(n) && Fi(e);
          });
        }
        function ji(e) {
          var n = e.getSnapshot;
          e = e.value;
          try {
            var t = n();
            return !or(e, t);
          } catch (e) {
            return !0;
          }
        }
        function Fi(e) {
          var n = Tl(e, 1);
          null !== n && ru(n, e, 1, -1);
        }
        function Oi(e) {
          var n = Ci();
          return (
            "function" == typeof e && (e = e()),
            (n.memoizedState = n.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ni,
              lastRenderedState: e,
            }),
            (n.queue = e),
            (e = e.dispatch = no.bind(null, mi, e)),
            [n.memoizedState, e]
          );
        }
        function Di(e, n, t, r) {
          return (
            (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
            null === (n = mi.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (mi.updateQueue = n),
                (n.lastEffect = e.next = e))
              : null === (t = n.lastEffect)
              ? (n.lastEffect = e.next = e)
              : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
            e
          );
        }
        function Ui() {
          return _i().memoizedState;
        }
        function Ai(e, n, t, r) {
          var a = Ci();
          (mi.flags |= e),
            (a.memoizedState = Di(1 | n, t, void 0, void 0 === r ? null : r));
        }
        function Bi(e, n, t, r) {
          var a = _i();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== hi) {
            var i = hi.memoizedState;
            if (((l = i.destroy), null !== r && ki(r, i.deps)))
              return void (a.memoizedState = Di(n, t, l, r));
          }
          (mi.flags |= e), (a.memoizedState = Di(1 | n, t, l, r));
        }
        function Hi(e, n) {
          return Ai(8390656, 8, e, n);
        }
        function $i(e, n) {
          return Bi(2048, 8, e, n);
        }
        function Vi(e, n) {
          return Bi(4, 2, e, n);
        }
        function Wi(e, n) {
          return Bi(4, 4, e, n);
        }
        function Qi(e, n) {
          return "function" == typeof n
            ? ((e = e()),
              n(e),
              function () {
                n(null);
              })
            : null != n
            ? ((e = e()),
              (n.current = e),
              function () {
                n.current = null;
              })
            : void 0;
        }
        function qi(e, n, t) {
          return (
            (t = null != t ? t.concat([e]) : null),
            Bi(4, 4, Qi.bind(null, n, e), t)
          );
        }
        function Ki() {}
        function Yi(e, n) {
          var t = _i();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== r && null !== n && ki(n, r[1])
            ? r[0]
            : ((t.memoizedState = [e, n]), e);
        }
        function Xi(e, n) {
          var t = _i();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== r && null !== n && ki(n, r[1])
            ? r[0]
            : ((e = e()), (t.memoizedState = [e, n]), e);
        }
        function Ji(e, n, t) {
          return 0 == (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (wo = !0)),
              (e.memoizedState = t))
            : (or(t, n) ||
                ((t = gn()), (mi.lanes |= t), (Os |= t), (e.baseState = !0)),
              n);
        }
        function Zi(e, n) {
          var t = wn;
          (wn = 0 !== t && 4 > t ? t : 4), e(!0);
          var r = fi.transition;
          fi.transition = {};
          try {
            e(!1), n();
          } finally {
            (wn = t), (fi.transition = r);
          }
        }
        function Gi() {
          return _i().memoizedState;
        }
        function eo(e, n, t) {
          var r = tu(e);
          if (
            ((t = {
              lane: r,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            to(e))
          )
            ro(n, t);
          else if (null !== (t = zl(e, n, t, r))) {
            ru(t, e, r, nu()), ao(t, n, r);
          }
        }
        function no(e, n, t) {
          var r = tu(e),
            a = {
              lane: r,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (to(e)) ro(n, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = n.lastRenderedReducer)
            )
              try {
                var i = n.lastRenderedState,
                  o = l(i, t);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
                  var s = n.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Nl(n))
                      : ((a.next = s.next), (s.next = a)),
                    void (n.interleaved = a)
                  );
                }
              } catch (e) {}
            null !== (t = zl(e, n, a, r)) &&
              (ru(t, e, r, (a = nu())), ao(t, n, r));
          }
        }
        function to(e) {
          var n = e.alternate;
          return e === mi || (null !== n && n === mi);
        }
        function ro(e, n) {
          vi = bi = !0;
          var t = e.pending;
          null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)),
            (e.pending = n);
        }
        function ao(e, n, t) {
          if (0 != (4194240 & t)) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), yn(e, t);
          }
        }
        var lo = {
            readContext: Cl,
            useCallback: xi,
            useContext: xi,
            useEffect: xi,
            useImperativeHandle: xi,
            useInsertionEffect: xi,
            useLayoutEffect: xi,
            useMemo: xi,
            useReducer: xi,
            useRef: xi,
            useState: xi,
            useDebugValue: xi,
            useDeferredValue: xi,
            useTransition: xi,
            useMutableSource: xi,
            useSyncExternalStore: xi,
            useId: xi,
            unstable_isNewReconciler: !1,
          },
          io = {
            readContext: Cl,
            useCallback: function (e, n) {
              return (Ci().memoizedState = [e, void 0 === n ? null : n]), e;
            },
            useContext: Cl,
            useEffect: Hi,
            useImperativeHandle: function (e, n, t) {
              return (
                (t = null != t ? t.concat([e]) : null),
                Ai(4194308, 4, Qi.bind(null, n, e), t)
              );
            },
            useLayoutEffect: function (e, n) {
              return Ai(4194308, 4, e, n);
            },
            useInsertionEffect: function (e, n) {
              return Ai(4, 2, e, n);
            },
            useMemo: function (e, n) {
              var t = Ci();
              return (
                (n = void 0 === n ? null : n),
                (e = e()),
                (t.memoizedState = [e, n]),
                e
              );
            },
            useReducer: function (e, n, t) {
              var r = Ci();
              return (
                (n = void 0 !== t ? t(n) : n),
                (r.memoizedState = r.baseState = n),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: n,
                }),
                (r.queue = e),
                (e = e.dispatch = eo.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e);
            },
            useState: Oi,
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e);
            },
            useTransition: function () {
              var e = Oi(!1),
                n = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [n, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, t) {
              var r = mi,
                a = Ci();
              if (al) {
                if (void 0 === t) throw Error(l(407));
                t = t();
              } else {
                if (((t = n()), null === Ps)) throw Error(l(349));
                0 != (30 & pi) || Li(r, n, t);
              }
              a.memoizedState = t;
              var i = { value: t, getSnapshot: n };
              return (
                (a.queue = i),
                Hi(Ri.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Di(9, Mi.bind(null, r, i, t, n), void 0, null),
                t
              );
            },
            useId: function () {
              var e = Ci(),
                n = Ps.identifierPrefix;
              if (al) {
                var t = Ja;
                (n =
                  ":" +
                  n +
                  "R" +
                  (t = (Xa & ~(1 << (32 - on(Xa) - 1))).toString(32) + t)),
                  0 < (t = yi++) && (n += "H" + t.toString(32)),
                  (n += ":");
              } else n = ":" + n + "r" + (t = wi++).toString(32) + ":";
              return (e.memoizedState = n);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: Cl,
            useCallback: Yi,
            useContext: Cl,
            useEffect: $i,
            useImperativeHandle: qi,
            useInsertionEffect: Vi,
            useLayoutEffect: Wi,
            useMemo: Xi,
            useReducer: zi,
            useRef: Ui,
            useState: function () {
              return zi(Ni);
            },
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              return Ji(_i(), hi.memoizedState, e);
            },
            useTransition: function () {
              return [zi(Ni)[0], _i().memoizedState];
            },
            useMutableSource: Pi,
            useSyncExternalStore: Ii,
            useId: Gi,
            unstable_isNewReconciler: !1,
          },
          so = {
            readContext: Cl,
            useCallback: Yi,
            useContext: Cl,
            useEffect: $i,
            useImperativeHandle: qi,
            useInsertionEffect: Vi,
            useLayoutEffect: Wi,
            useMemo: Xi,
            useReducer: Ti,
            useRef: Ui,
            useState: function () {
              return Ti(Ni);
            },
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              var n = _i();
              return null === hi
                ? (n.memoizedState = e)
                : Ji(n, hi.memoizedState, e);
            },
            useTransition: function () {
              return [Ti(Ni)[0], _i().memoizedState];
            },
            useMutableSource: Pi,
            useSyncExternalStore: Ii,
            useId: Gi,
            unstable_isNewReconciler: !1,
          };
        function uo(e, n) {
          try {
            var t = "",
              r = n;
            do {
              (t += B(r)), (r = r.return);
            } while (r);
            var a = t;
          } catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: n, stack: a, digest: null };
        }
        function co(e, n, t) {
          return {
            value: e,
            source: null,
            stack: null != t ? t : null,
            digest: null != n ? n : null,
          };
        }
        function fo(e, n) {
          try {
            console.error(n.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var po = "function" == typeof WeakMap ? WeakMap : Map;
        function mo(e, n, t) {
          ((t = Ml(-1, t)).tag = 3), (t.payload = { element: null });
          var r = n.value;
          return (
            (t.callback = function () {
              Ws || ((Ws = !0), (Qs = r)), fo(0, n);
            }),
            t
          );
        }
        function ho(e, n, t) {
          (t = Ml(-1, t)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var a = n.value;
            (t.payload = function () {
              return r(a);
            }),
              (t.callback = function () {
                fo(0, n);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" == typeof l.componentDidCatch &&
              (t.callback = function () {
                fo(0, n),
                  "function" != typeof r &&
                    (null === qs ? (qs = new Set([this])) : qs.add(this));
                var e = n.stack;
                this.componentDidCatch(n.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            t
          );
        }
        function go(e, n, t) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new po();
            var a = new Set();
            r.set(n, a);
          } else void 0 === (a = r.get(n)) && ((a = new Set()), r.set(n, a));
          a.has(t) || (a.add(t), (e = _u.bind(null, e, n, t)), n.then(e, e));
        }
        function bo(e) {
          do {
            var n;
            if (
              ((n = 13 === e.tag) &&
                (n = null === (n = e.memoizedState) || null !== n.dehydrated),
              n)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vo(e, n, t, r, a) {
          return 0 == (1 & e.mode)
            ? (e === n
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (t.flags |= 131072),
                  (t.flags &= -52805),
                  1 === t.tag &&
                    (null === t.alternate
                      ? (t.tag = 17)
                      : (((n = Ml(-1, 1)).tag = 2), Rl(t, n, 1))),
                  (t.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yo = w.ReactCurrentOwner,
          wo = !1;
        function xo(e, n, t, r) {
          n.child = null === e ? Jl(n, null, t, r) : Xl(n, e.child, t, r);
        }
        function ko(e, n, t, r, a) {
          t = t.render;
          var l = n.ref;
          return (
            El(n, a),
            (r = Si(e, n, t, r, l, a)),
            (t = Ei()),
            null === e || wo
              ? (al && t && el(n), (n.flags |= 1), xo(e, n, r, a), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, n, a))
          );
        }
        function So(e, n, t, r, a) {
          if (null === e) {
            var l = t.type;
            return "function" != typeof l ||
              Mu(l) ||
              void 0 !== l.defaultProps ||
              null !== t.compare ||
              void 0 !== t.defaultProps
              ? (((e = ju(t.type, null, r, n, n.mode, a)).ref = n.ref),
                (e.return = n),
                (n.child = e))
              : ((n.tag = 15), (n.type = l), Eo(e, n, l, r, a));
          }
          if (((l = e.child), 0 == (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (t = null !== (t = t.compare) ? t : sr)(i, r) &&
              e.ref === n.ref
            )
              return Wo(e, n, a);
          }
          return (
            (n.flags |= 1),
            ((e = Ru(l, r)).ref = n.ref),
            (e.return = n),
            (n.child = e)
          );
        }
        function Eo(e, n, t, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === n.ref) {
              if (((wo = !1), (n.pendingProps = r = l), 0 == (e.lanes & a)))
                return (n.lanes = e.lanes), Wo(e, n, a);
              0 != (131072 & e.flags) && (wo = !0);
            }
          }
          return No(e, n, t, r, a);
        }
        function Co(e, n, t) {
          var r = n.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 == (1 & n.mode))
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                _a(Rs, Ms),
                (Ms |= t);
            else {
              if (0 == (1073741824 & t))
                return (
                  (e = null !== l ? l.baseLanes | t : t),
                  (n.lanes = n.childLanes = 1073741824),
                  (n.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (n.updateQueue = null),
                  _a(Rs, Ms),
                  (Ms |= e),
                  null
                );
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : t),
                _a(Rs, Ms),
                (Ms |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | t), (n.memoizedState = null))
              : (r = t),
              _a(Rs, Ms),
              (Ms |= r);
          return xo(e, n, a, t), n.child;
        }
        function _o(e, n) {
          var t = n.ref;
          ((null === e && null !== t) || (null !== e && e.ref !== t)) &&
            ((n.flags |= 512), (n.flags |= 2097152));
        }
        function No(e, n, t, r, a) {
          var l = La(t) ? Pa : za.current;
          return (
            (l = Ia(n, l)),
            El(n, a),
            (t = Si(e, n, t, r, l, a)),
            (r = Ei()),
            null === e || wo
              ? (al && r && el(n), (n.flags |= 1), xo(e, n, t, a), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, n, a))
          );
        }
        function zo(e, n, t, r, a) {
          if (La(t)) {
            var l = !0;
            Fa(n);
          } else l = !1;
          if ((El(n, a), null === n.stateNode))
            Vo(e, n), $l(n, t, r), Wl(n, t, r, a), (r = !0);
          else if (null === e) {
            var i = n.stateNode,
              o = n.memoizedProps;
            i.props = o;
            var s = i.context,
              u = t.contextType;
            "object" == typeof u && null !== u
              ? (u = Cl(u))
              : (u = Ia(n, (u = La(t) ? Pa : za.current)));
            var c = t.getDerivedStateFromProps,
              d =
                "function" == typeof c ||
                "function" == typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((o !== r || s !== u) && Vl(n, i, r, u)),
              (Pl = !1);
            var f = n.memoizedState;
            (i.state = f),
              Ol(n, r, i, a),
              (s = n.memoizedState),
              o !== r || f !== s || Ta.current || Pl
                ? ("function" == typeof c &&
                    (Al(n, t, c, r), (s = n.memoizedState)),
                  (o = Pl || Hl(n, t, o, r, f, s, u))
                    ? (d ||
                        ("function" != typeof i.UNSAFE_componentWillMount &&
                          "function" != typeof i.componentWillMount) ||
                        ("function" == typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" == typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" == typeof i.componentDidMount &&
                        (n.flags |= 4194308))
                    : ("function" == typeof i.componentDidMount &&
                        (n.flags |= 4194308),
                      (n.memoizedProps = r),
                      (n.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = o))
                : ("function" == typeof i.componentDidMount &&
                    (n.flags |= 4194308),
                  (r = !1));
          } else {
            (i = n.stateNode),
              Ll(e, n),
              (o = n.memoizedProps),
              (u = n.type === n.elementType ? o : gl(n.type, o)),
              (i.props = u),
              (d = n.pendingProps),
              (f = i.context),
              "object" == typeof (s = t.contextType) && null !== s
                ? (s = Cl(s))
                : (s = Ia(n, (s = La(t) ? Pa : za.current)));
            var p = t.getDerivedStateFromProps;
            (c =
              "function" == typeof p ||
              "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((o !== d || f !== s) && Vl(n, i, r, s)),
              (Pl = !1),
              (f = n.memoizedState),
              (i.state = f),
              Ol(n, r, i, a);
            var m = n.memoizedState;
            o !== d || f !== m || Ta.current || Pl
              ? ("function" == typeof p &&
                  (Al(n, t, p, r), (m = n.memoizedState)),
                (u = Pl || Hl(n, t, u, r, f, m, s) || !1)
                  ? (c ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate &&
                        "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, m, s),
                      "function" == typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, m, s)),
                    "function" == typeof i.componentDidUpdate && (n.flags |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate &&
                      (n.flags |= 1024))
                  : ("function" != typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (n.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (n.flags |= 1024),
                    (n.memoizedProps = r),
                    (n.memoizedState = m)),
                (i.props = r),
                (i.state = m),
                (i.context = s),
                (r = u))
              : ("function" != typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (n.flags |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (n.flags |= 1024),
                (r = !1));
          }
          return To(e, n, t, r, l, a);
        }
        function To(e, n, t, r, a, l) {
          _o(e, n);
          var i = 0 != (128 & n.flags);
          if (!r && !i) return a && Oa(n, t, !1), Wo(e, n, l);
          (r = n.stateNode), (yo.current = n);
          var o =
            i && "function" != typeof t.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (n.flags |= 1),
            null !== e && i
              ? ((n.child = Xl(n, e.child, null, l)),
                (n.child = Xl(n, null, o, l)))
              : xo(e, n, o, l),
            (n.memoizedState = r.state),
            a && Oa(n, t, !0),
            n.child
          );
        }
        function Po(e) {
          var n = e.stateNode;
          n.pendingContext
            ? Ra(0, n.pendingContext, n.pendingContext !== n.context)
            : n.context && Ra(0, n.context, !1),
            ri(e, n.containerInfo);
        }
        function Io(e, n, t, r, a) {
          return pl(), ml(a), (n.flags |= 256), xo(e, n, t, r), n.child;
        }
        var Lo,
          Mo,
          Ro,
          jo,
          Fo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Oo(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Do(e, n, t) {
          var r,
            a = n.pendingProps,
            i = oi.current,
            o = !1,
            s = 0 != (128 & n.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
            r
              ? ((o = !0), (n.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            _a(oi, 1 & i),
            null === e)
          )
            return (
              ul(n),
              null !== (e = n.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & n.mode)
                    ? (n.lanes = 1)
                    : "$!" === e.data
                    ? (n.lanes = 8)
                    : (n.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = n.mode),
                      (o = n.child),
                      (s = { mode: "hidden", children: s }),
                      0 == (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = Ou(s, a, 0, null)),
                      (e = Fu(e, a, t, null)),
                      (o.return = n),
                      (e.return = n),
                      (o.sibling = e),
                      (n.child = o),
                      (n.child.memoizedState = Oo(t)),
                      (n.memoizedState = Fo),
                      e)
                    : Uo(n, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, n, t, r, a, i, o) {
              if (t)
                return 256 & n.flags
                  ? ((n.flags &= -257), Ao(e, n, o, (r = co(Error(l(422))))))
                  : null !== n.memoizedState
                  ? ((n.child = e.child), (n.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = n.mode),
                    (r = Ou(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Fu(i, a, o, null)).flags |= 2),
                    (r.return = n),
                    (i.return = n),
                    (r.sibling = i),
                    (n.child = r),
                    0 != (1 & n.mode) && Xl(n, e.child, null, o),
                    (n.child.memoizedState = Oo(o)),
                    (n.memoizedState = Fo),
                    i);
              if (0 == (1 & n.mode)) return Ao(e, n, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Ao(e, n, o, (r = co((i = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 != (o & e.childLanes)), wo || s)) {
                if (null !== (r = Ps)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 != (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Tl(e, a), ru(r, e, a, -1));
                }
                return gu(), Ao(e, n, o, (r = co(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((n.flags |= 128),
                  (n.child = e.child),
                  (n = zu.bind(null, e)),
                  (a._reactRetry = n),
                  null)
                : ((e = i.treeContext),
                  (rl = ua(a.nextSibling)),
                  (tl = n),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Ka++] = Xa),
                    (qa[Ka++] = Ja),
                    (qa[Ka++] = Ya),
                    (Xa = e.id),
                    (Ja = e.overflow),
                    (Ya = n)),
                  (n = Uo(n, r.children)),
                  (n.flags |= 4096),
                  n);
            })(e, n, s, a, r, i, t);
          if (o) {
            (o = a.fallback), (s = n.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 == (1 & s) && n.child !== i
                ? (((a = n.child).childLanes = 0),
                  (a.pendingProps = u),
                  (n.deletions = null))
                : ((a = Ru(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (o = Ru(r, o))
                : ((o = Fu(o, s, t, null)).flags |= 2),
              (o.return = n),
              (a.return = n),
              (a.sibling = o),
              (n.child = a),
              (a = o),
              (o = n.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Oo(t)
                  : {
                      baseLanes: s.baseLanes | t,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = e.childLanes & ~t),
              (n.memoizedState = Fo),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Ru(o, { mode: "visible", children: a.children })),
            0 == (1 & n.mode) && (a.lanes = t),
            (a.return = n),
            (a.sibling = null),
            null !== e &&
              (null === (t = n.deletions)
                ? ((n.deletions = [e]), (n.flags |= 16))
                : t.push(e)),
            (n.child = a),
            (n.memoizedState = null),
            a
          );
        }
        function Uo(e, n) {
          return (
            ((n = Ou(
              { mode: "visible", children: n },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = n)
          );
        }
        function Ao(e, n, t, r) {
          return (
            null !== r && ml(r),
            Xl(n, e.child, null, t),
            ((e = Uo(n, n.pendingProps.children)).flags |= 2),
            (n.memoizedState = null),
            e
          );
        }
        function Bo(e, n, t) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n), Sl(e.return, n, t);
        }
        function Ho(e, n, t, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: n,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: t,
                tailMode: a,
              })
            : ((l.isBackwards = n),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = t),
              (l.tailMode = a));
        }
        function $o(e, n, t) {
          var r = n.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((xo(e, n, r.children, t), 0 != (2 & (r = oi.current))))
            (r = (1 & r) | 2), (n.flags |= 128);
          else {
            if (null !== e && 0 != (128 & e.flags))
              e: for (e = n.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bo(e, t, n);
                else if (19 === e.tag) Bo(e, t, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === n) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((_a(oi, r), 0 == (1 & n.mode))) n.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (t = n.child, a = null; null !== t; )
                  null !== (e = t.alternate) && null === si(e) && (a = t),
                    (t = t.sibling);
                null === (t = a)
                  ? ((a = n.child), (n.child = null))
                  : ((a = t.sibling), (t.sibling = null)),
                  Ho(n, !1, a, t, l);
                break;
              case "backwards":
                for (t = null, a = n.child, n.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    n.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = t), (t = a), (a = e);
                }
                Ho(n, !0, t, null, l);
                break;
              case "together":
                Ho(n, !1, null, null, void 0);
                break;
              default:
                n.memoizedState = null;
            }
          return n.child;
        }
        function Vo(e, n) {
          0 == (1 & n.mode) &&
            null !== e &&
            ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
        }
        function Wo(e, n, t) {
          if (
            (null !== e && (n.dependencies = e.dependencies),
            (Os |= n.lanes),
            0 == (t & n.childLanes))
          )
            return null;
          if (null !== e && n.child !== e.child) throw Error(l(153));
          if (null !== n.child) {
            for (
              t = Ru((e = n.child), e.pendingProps), n.child = t, t.return = n;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((t = t.sibling = Ru(e, e.pendingProps)).return = n);
            t.sibling = null;
          }
          return n.child;
        }
        function Qo(e, n) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                n = e.tail;
                for (var t = null; null !== n; )
                  null !== n.alternate && (t = n), (n = n.sibling);
                null === t ? (e.tail = null) : (t.sibling = null);
                break;
              case "collapsed":
                t = e.tail;
                for (var r = null; null !== t; )
                  null !== t.alternate && (r = t), (t = t.sibling);
                null === r
                  ? n || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qo(e) {
          var n = null !== e.alternate && e.alternate.child === e.child,
            t = 0,
            r = 0;
          if (n)
            for (var a = e.child; null !== a; )
              (t |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (t |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = t), n;
        }
        function Ko(e, n, t) {
          var r = n.pendingProps;
          switch ((nl(n), n.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return qo(n), null;
            case 1:
            case 17:
              return La(n.type) && Ma(), qo(n), null;
            case 3:
              return (
                (r = n.stateNode),
                ai(),
                Ca(Ta),
                Ca(za),
                ci(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(n)
                    ? (n.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 == (256 & n.flags)) ||
                      ((n.flags |= 1024),
                      null !== ll && (ou(ll), (ll = null)))),
                Mo(e, n),
                qo(n),
                null
              );
            case 5:
              ii(n);
              var a = ti(ni.current);
              if (((t = n.type), null !== e && null != n.stateNode))
                Ro(e, n, t, r, a),
                  e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              else {
                if (!r) {
                  if (null === n.stateNode) throw Error(l(166));
                  return qo(n), null;
                }
                if (((e = ti(Gl.current)), dl(n))) {
                  (r = n.stateNode), (t = n.type);
                  var i = n.memoizedProps;
                  switch (
                    ((r[fa] = n), (r[pa] = i), (e = 0 != (1 & n.mode)), t)
                  ) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < jr.length; a++) Ur(jr[a], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      X(r, i), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ur("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ur("invalid", r);
                  }
                  for (var s in (ve(t, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" == typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" == typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : o.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Ur("scroll", r);
                    }
                  switch (t) {
                    case "input":
                      Q(r), G(r, i, !0);
                      break;
                    case "textarea":
                      Q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof i.onClick && (r.onclick = Gr);
                  }
                  (r = a), (n.updateQueue = r), null !== r && (n.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(t)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === t
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = s.createElement(t, { is: r.is }))
                        : ((e = s.createElement(t)),
                          "select" === t &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, t)),
                    (e[fa] = n),
                    (e[pa] = r),
                    Lo(e, n, !1, !1),
                    (n.stateNode = e);
                  e: {
                    switch (((s = ye(t, r)), t)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < jr.length; a++) Ur(jr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ur("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (a = r);
                        break;
                      case "details":
                        Ur("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = Y(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = O({}, r, { value: void 0 })),
                          Ur("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ur("invalid", e);
                    }
                    for (i in (ve(t, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" == typeof c
                            ? ("textarea" !== t || "" !== c) && fe(e, c)
                            : "number" == typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (o.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Ur("scroll", e)
                              : null != c && y(e, i, c, s));
                      }
                    switch (t) {
                      case "input":
                        Q(e), G(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? te(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              te(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" == typeof a.onClick && (e.onclick = Gr);
                    }
                    switch (t) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (n.flags |= 4);
                }
                null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              }
              return qo(n), null;
            case 6:
              if (e && null != n.stateNode) jo(e, n, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === n.stateNode)
                  throw Error(l(166));
                if (((t = ti(ni.current)), ti(Gl.current), dl(n))) {
                  if (
                    ((r = n.stateNode),
                    (t = n.memoizedProps),
                    (r[fa] = n),
                    (i = r.nodeValue !== t) && null !== (e = tl))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, t, 0 != (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, t, 0 != (1 & e.mode));
                    }
                  i && (n.flags |= 4);
                } else
                  ((r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(
                    r
                  ))[fa] = n),
                    (n.stateNode = r);
              }
              return qo(n), null;
            case 13:
              if (
                (Ca(oi),
                (r = n.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 != (1 & n.mode) &&
                  0 == (128 & n.flags)
                )
                  fl(), pl(), (n.flags |= 98560), (i = !1);
                else if (((i = dl(n)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = n.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[fa] = n;
                  } else
                    pl(),
                      0 == (128 & n.flags) && (n.memoizedState = null),
                      (n.flags |= 4);
                  qo(n), (i = !1);
                } else null !== ll && (ou(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & n.flags ? n : null;
              }
              return 0 != (128 & n.flags)
                ? ((n.lanes = t), n)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((n.child.flags |= 8192),
                    0 != (1 & n.mode) &&
                      (null === e || 0 != (1 & oi.current)
                        ? 0 === js && (js = 3)
                        : gu())),
                  null !== n.updateQueue && (n.flags |= 4),
                  qo(n),
                  null);
            case 4:
              return (
                ai(),
                Mo(e, n),
                null === e && Hr(n.stateNode.containerInfo),
                qo(n),
                null
              );
            case 10:
              return kl(n.type._context), qo(n), null;
            case 19:
              if ((Ca(oi), null === (i = n.memoizedState))) return qo(n), null;
              if (((r = 0 != (128 & n.flags)), null === (s = i.rendering)))
                if (r) Qo(i, !1);
                else {
                  if (0 !== js || (null !== e && 0 != (128 & e.flags)))
                    for (e = n.child; null !== e; ) {
                      if (null !== (s = si(e))) {
                        for (
                          n.flags |= 128,
                            Qo(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((n.updateQueue = r), (n.flags |= 4)),
                            n.subtreeFlags = 0,
                            r = t,
                            t = n.child;
                          null !== t;

                        )
                          (e = r),
                            ((i = t).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (t = t.sibling);
                        return _a(oi, (1 & oi.current) | 2), n.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Je() > $s &&
                    ((n.flags |= 128),
                    (r = !0),
                    Qo(i, !1),
                    (n.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(s))) {
                    if (
                      ((n.flags |= 128),
                      (r = !0),
                      null !== (t = e.updateQueue) &&
                        ((n.updateQueue = t), (n.flags |= 4)),
                      Qo(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return qo(n), null;
                  } else
                    2 * Je() - i.renderingStartTime > $s &&
                      1073741824 !== t &&
                      ((n.flags |= 128),
                      (r = !0),
                      Qo(i, !1),
                      (n.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = n.child), (n.child = s))
                  : (null !== (t = i.last) ? (t.sibling = s) : (n.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((n = i.tail),
                  (i.rendering = n),
                  (i.tail = n.sibling),
                  (i.renderingStartTime = Je()),
                  (n.sibling = null),
                  (t = oi.current),
                  _a(oi, r ? (1 & t) | 2 : 1 & t),
                  n)
                : (qo(n), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== n.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (n.flags |= 8192),
                r && 0 != (1 & n.mode)
                  ? 0 != (1073741824 & Ms) &&
                    (qo(n), 6 & n.subtreeFlags && (n.flags |= 8192))
                  : qo(n),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, n.tag));
        }
        function Yo(e, n) {
          switch ((nl(n), n.tag)) {
            case 1:
              return (
                La(n.type) && Ma(),
                65536 & (e = n.flags)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 3:
              return (
                ai(),
                Ca(Ta),
                Ca(za),
                ci(),
                0 != (65536 & (e = n.flags)) && 0 == (128 & e)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 5:
              return ii(n), null;
            case 13:
              if (
                (Ca(oi),
                null !== (e = n.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === n.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = n.flags)
                ? ((n.flags = (-65537 & e) | 128), n)
                : null;
            case 19:
              return Ca(oi), null;
            case 4:
              return ai(), null;
            case 10:
              return kl(n.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Lo = function (e, n) {
          for (var t = n.child; null !== t; ) {
            if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
            else if (4 !== t.tag && null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === n) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === n) return;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }),
          (Mo = function () {}),
          (Ro = function (e, n, t, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = n.stateNode), ti(Gl.current);
              var l,
                i = null;
              switch (t) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (i = []);
                  break;
                case "select":
                  (a = O({}, a, { value: void 0 })),
                    (r = O({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" != typeof a.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = Gr);
              }
              for (c in (ve(t, r), (t = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (l in s)
                      s.hasOwnProperty(l) && (t || (t = {}), (t[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (o.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (l in s)
                        !s.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (t || (t = {}), (t[l] = ""));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          s[l] !== u[l] &&
                          (t || (t = {}), (t[l] = u[l]));
                    } else t || (i || (i = []), i.push(c, t)), (t = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" != typeof u && "number" != typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Ur("scroll", e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              t && (i = i || []).push("style", t);
              var c = i;
              (n.updateQueue = c) && (n.flags |= 4);
            }
          }),
          (jo = function (e, n, t, r) {
            t !== r && (n.flags |= 4);
          });
        var Xo = !1,
          Jo = !1,
          Zo = "function" == typeof WeakSet ? WeakSet : Set,
          Go = null;
        function es(e, n) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                Cu(e, n, t);
              }
            else t.current = null;
        }
        function ns(e, n, t) {
          try {
            t();
          } catch (t) {
            Cu(e, n, t);
          }
        }
        var ts = !1;
        function rs(e, n, t) {
          var r = n.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && ns(n, t, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, n) {
          if (
            null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)
          ) {
            var t = (n = n.next);
            do {
              if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r();
              }
              t = t.next;
            } while (t !== n);
          }
        }
        function ls(e) {
          var n = e.ref;
          if (null !== n) {
            var t = e.stateNode;
            e.tag, (e = t), "function" == typeof n ? n(e) : (n.current = e);
          }
        }
        function is(e) {
          var n = e.alternate;
          null !== n && ((e.alternate = null), is(n)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (n = e.stateNode) &&
              (delete n[fa],
              delete n[pa],
              delete n[ha],
              delete n[ga],
              delete n[ba]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function os(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || os(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              n
                ? 8 === t.nodeType
                  ? t.parentNode.insertBefore(e, n)
                  : t.insertBefore(e, n)
                : (8 === t.nodeType
                    ? (n = t.parentNode).insertBefore(e, t)
                    : (n = t).appendChild(e),
                  null != (t = t._reactRootContainer) ||
                    null !== n.onclick ||
                    (n.onclick = Gr));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, n, t), e = e.sibling; null !== e; )
              us(e, n, t), (e = e.sibling);
        }
        function cs(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, n, t), e = e.sibling; null !== e; )
              cs(e, n, t), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, n, t) {
          for (t = t.child; null !== t; ) ms(e, n, t), (t = t.sibling);
        }
        function ms(e, n, t) {
          if (ln && "function" == typeof ln.onCommitFiberUnmount)
            try {
              ln.onCommitFiberUnmount(an, t);
            } catch (e) {}
          switch (t.tag) {
            case 5:
              Jo || es(t, n);
            case 6:
              var r = ds,
                a = fs;
              (ds = null),
                ps(e, n, t),
                (fs = a),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (t = t.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(t)
                        : e.removeChild(t))
                    : ds.removeChild(t.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (t = t.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, t)
                      : 1 === e.nodeType && sa(e, t),
                    $n(e))
                  : sa(ds, t.stateNode));
              break;
            case 4:
              (r = ds),
                (a = fs),
                (ds = t.stateNode.containerInfo),
                (fs = !0),
                ps(e, n, t),
                (ds = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Jo &&
                null !== (r = t.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 != (2 & l) || 0 != (4 & l)) &&
                      ns(t, n, i),
                    (a = a.next);
                } while (a !== r);
              }
              ps(e, n, t);
              break;
            case 1:
              if (
                !Jo &&
                (es(t, n),
                "function" == typeof (r = t.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = t.memoizedProps),
                    (r.state = t.memoizedState),
                    r.componentWillUnmount();
                } catch (e) {
                  Cu(t, n, e);
                }
              ps(e, n, t);
              break;
            case 21:
              ps(e, n, t);
              break;
            case 22:
              1 & t.mode
                ? ((Jo = (r = Jo) || null !== t.memoizedState),
                  ps(e, n, t),
                  (Jo = r))
                : ps(e, n, t);
              break;
            default:
              ps(e, n, t);
          }
        }
        function hs(e) {
          var n = e.updateQueue;
          if (null !== n) {
            e.updateQueue = null;
            var t = e.stateNode;
            null === t && (t = e.stateNode = new Zo()),
              n.forEach(function (n) {
                var r = Tu.bind(null, e, n);
                t.has(n) || (t.add(n), n.then(r, r));
              });
          }
        }
        function gs(e, n) {
          var t = n.deletions;
          if (null !== t)
            for (var r = 0; r < t.length; r++) {
              var a = t[r];
              try {
                var i = e,
                  o = n,
                  s = o;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(l(160));
                ms(i, o, a), (ds = null), (fs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (e) {
                Cu(a, n, e);
              }
            }
          if (12854 & n.subtreeFlags)
            for (n = n.child; null !== n; ) bs(n, e), (n = n.sibling);
        }
        function bs(e, n) {
          var t = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(n, e), vs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (n) {
                  Cu(e, e.return, n);
                }
                try {
                  rs(5, e, e.return);
                } catch (n) {
                  Cu(e, e.return, n);
                }
              }
              break;
            case 1:
              gs(n, e), vs(e), 512 & r && null !== t && es(t, t.return);
              break;
            case 5:
              if (
                (gs(n, e),
                vs(e),
                512 & r && null !== t && es(t, t.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (n) {
                  Cu(e, e.return, n);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== t ? t.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      J(a, i),
                      ye(s, o);
                    var c = ye(s, i);
                    for (o = 0; o < u.length; o += 2) {
                      var d = u[o],
                        f = u[o + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : y(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        Z(a, i);
                        break;
                      case "textarea":
                        le(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var m = i.value;
                        null != m
                          ? te(a, !!i.multiple, m, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? te(a, !!i.multiple, i.defaultValue, !0)
                              : te(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (n) {
                    Cu(e, e.return, n);
                  }
              }
              break;
            case 6:
              if ((gs(n, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (n) {
                  Cu(e, e.return, n);
                }
              }
              break;
            case 3:
              if (
                (gs(n, e),
                vs(e),
                4 & r && null !== t && t.memoizedState.isDehydrated)
              )
                try {
                  $n(n.containerInfo);
                } catch (n) {
                  Cu(e, e.return, n);
                }
              break;
            case 4:
            default:
              gs(n, e), vs(e);
              break;
            case 13:
              gs(n, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hs = Je())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== t && null !== t.memoizedState),
                1 & e.mode
                  ? ((Jo = (c = Jo) || d), gs(n, e), (Jo = c))
                  : gs(n, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
                )
                  for (Go = e, d = e.child; null !== d; ) {
                    for (f = Go = d; null !== Go; ) {
                      switch (((m = (p = Go).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var h = p.stateNode;
                          if ("function" == typeof h.componentWillUnmount) {
                            (r = p), (t = p.return);
                            try {
                              (n = r),
                                (h.props = n.memoizedProps),
                                (h.state = n.memoizedState),
                                h.componentWillUnmount();
                            } catch (e) {
                              Cu(r, t, e);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ks(f);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), (Go = m)) : ks(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" == typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (o =
                                null != (u = f.memoizedProps.style) &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = he("display", o)));
                      } catch (n) {
                        Cu(e, e.return, n);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (n) {
                        Cu(e, e.return, n);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              gs(n, e), vs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function vs(e) {
          var n = e.flags;
          if (2 & n) {
            try {
              e: {
                for (var t = e.return; null !== t; ) {
                  if (os(t)) {
                    var r = t;
                    break e;
                  }
                  t = t.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    cs(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (n) {
              Cu(e, e.return, n);
            }
            e.flags &= -3;
          }
          4096 & n && (e.flags &= -4097);
        }
        function ys(e, n, t) {
          (Go = e), ws(e, n, t);
        }
        function ws(e, n, t) {
          for (var r = 0 != (1 & e.mode); null !== Go; ) {
            var a = Go,
              l = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Xo;
              if (!i) {
                var o = a.alternate,
                  s = (null !== o && null !== o.memoizedState) || Jo;
                o = Xo;
                var u = Jo;
                if (((Xo = i), (Jo = s) && !u))
                  for (Go = a; null !== Go; )
                    (s = (i = Go).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Ss(a)
                        : null !== s
                        ? ((s.return = i), (Go = s))
                        : Ss(a);
                for (; null !== l; ) (Go = l), ws(l, n, t), (l = l.sibling);
                (Go = a), (Xo = o), (Jo = u);
              }
              xs(e);
            } else
              0 != (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Go = l))
                : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Go; ) {
            var n = Go;
            if (0 != (8772 & n.flags)) {
              var t = n.alternate;
              try {
                if (0 != (8772 & n.flags))
                  switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jo || as(5, n);
                      break;
                    case 1:
                      var r = n.stateNode;
                      if (4 & n.flags && !Jo)
                        if (null === t) r.componentDidMount();
                        else {
                          var a =
                            n.elementType === n.type
                              ? t.memoizedProps
                              : gl(n.type, t.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            t.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = n.updateQueue;
                      null !== i && Dl(n, i, r);
                      break;
                    case 3:
                      var o = n.updateQueue;
                      if (null !== o) {
                        if (((t = null), null !== n.child))
                          switch (n.child.tag) {
                            case 5:
                            case 1:
                              t = n.child.stateNode;
                          }
                        Dl(n, o, t);
                      }
                      break;
                    case 5:
                      var s = n.stateNode;
                      if (null === t && 4 & n.flags) {
                        t = s;
                        var u = n.memoizedProps;
                        switch (n.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && t.focus();
                            break;
                          case "img":
                            u.src && (t.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === n.memoizedState) {
                        var c = n.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && $n(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Jo || (512 & n.flags && ls(n));
              } catch (e) {
                Cu(n, n.return, e);
              }
            }
            if (n === e) {
              Go = null;
              break;
            }
            if (null !== (t = n.sibling)) {
              (t.return = n.return), (Go = t);
              break;
            }
            Go = n.return;
          }
        }
        function ks(e) {
          for (; null !== Go; ) {
            var n = Go;
            if (n === e) {
              Go = null;
              break;
            }
            var t = n.sibling;
            if (null !== t) {
              (t.return = n.return), (Go = t);
              break;
            }
            Go = n.return;
          }
        }
        function Ss(e) {
          for (; null !== Go; ) {
            var n = Go;
            try {
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  var t = n.return;
                  try {
                    as(4, n);
                  } catch (e) {
                    Cu(n, t, e);
                  }
                  break;
                case 1:
                  var r = n.stateNode;
                  if ("function" == typeof r.componentDidMount) {
                    var a = n.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      Cu(n, a, e);
                    }
                  }
                  var l = n.return;
                  try {
                    ls(n);
                  } catch (e) {
                    Cu(n, l, e);
                  }
                  break;
                case 5:
                  var i = n.return;
                  try {
                    ls(n);
                  } catch (e) {
                    Cu(n, i, e);
                  }
              }
            } catch (e) {
              Cu(n, n.return, e);
            }
            if (n === e) {
              Go = null;
              break;
            }
            var o = n.sibling;
            if (null !== o) {
              (o.return = n.return), (Go = o);
              break;
            }
            Go = n.return;
          }
        }
        var Es,
          Cs = Math.ceil,
          _s = w.ReactCurrentDispatcher,
          Ns = w.ReactCurrentOwner,
          zs = w.ReactCurrentBatchConfig,
          Ts = 0,
          Ps = null,
          Is = null,
          Ls = 0,
          Ms = 0,
          Rs = Ea(0),
          js = 0,
          Fs = null,
          Os = 0,
          Ds = 0,
          Us = 0,
          As = null,
          Bs = null,
          Hs = 0,
          $s = 1 / 0,
          Vs = null,
          Ws = !1,
          Qs = null,
          qs = null,
          Ks = !1,
          Ys = null,
          Xs = 0,
          Js = 0,
          Zs = null,
          Gs = -1,
          eu = 0;
        function nu() {
          return 0 != (6 & Ts) ? Je() : -1 !== Gs ? Gs : (Gs = Je());
        }
        function tu(e) {
          return 0 == (1 & e.mode)
            ? 1
            : 0 != (2 & Ts) && 0 !== Ls
            ? Ls & -Ls
            : null !== hl.transition
            ? (0 === eu && (eu = gn()), eu)
            : 0 !== (e = wn)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jn(e.type));
        }
        function ru(e, n, t, r) {
          if (50 < Js) throw ((Js = 0), (Zs = null), Error(l(185)));
          vn(e, t, r),
            (0 != (2 & Ts) && e === Ps) ||
              (e === Ps && (0 == (2 & Ts) && (Ds |= t), 4 === js && su(e, Ls)),
              au(e, r),
              1 === t &&
                0 === Ts &&
                0 == (1 & n.mode) &&
                (($s = Je() + 500), Ua && Ha()));
        }
        function au(e, n) {
          var t = e.callbackNode;
          !(function (e, n) {
            for (
              var t = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - on(l),
                o = 1 << i,
                s = a[i];
              -1 === s
                ? (0 != (o & t) && 0 == (o & r)) || (a[i] = mn(o, n))
                : s <= n && (e.expiredLanes |= o),
                (l &= ~o);
            }
          })(e, n);
          var r = pn(e, e === Ps ? Ls : 0);
          if (0 === r)
            null !== t && Ke(t),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((n = r & -r), e.callbackPriority !== n)) {
            if ((null != t && Ke(t), 1 === n))
              0 === e.tag
                ? (function (e) {
                    (Ua = !0), Ba(e);
                  })(uu.bind(null, e))
                : Ba(uu.bind(null, e)),
                ia(function () {
                  0 == (6 & Ts) && Ha();
                }),
                (t = null);
            else {
              switch (xn(r)) {
                case 1:
                  t = Ge;
                  break;
                case 4:
                  t = en;
                  break;
                case 16:
                default:
                  t = nn;
                  break;
                case 536870912:
                  t = rn;
              }
              t = Pu(t, lu.bind(null, e));
            }
            (e.callbackPriority = n), (e.callbackNode = t);
          }
        }
        function lu(e, n) {
          if (((Gs = -1), (eu = 0), 0 != (6 & Ts))) throw Error(l(327));
          var t = e.callbackNode;
          if (Su() && e.callbackNode !== t) return null;
          var r = pn(e, e === Ps ? Ls : 0);
          if (0 === r) return null;
          if (0 != (30 & r) || 0 != (r & e.expiredLanes) || n) n = bu(e, r);
          else {
            n = r;
            var a = Ts;
            Ts |= 2;
            var i = hu();
            for (
              (Ps === e && Ls === n) ||
              ((Vs = null), ($s = Je() + 500), pu(e, n));
              ;

            )
              try {
                yu();
                break;
              } catch (n) {
                mu(e, n);
              }
            xl(),
              (_s.current = i),
              (Ts = a),
              null !== Is ? (n = 0) : ((Ps = null), (Ls = 0), (n = js));
          }
          if (0 !== n) {
            if (
              (2 === n && 0 !== (a = hn(e)) && ((r = a), (n = iu(e, a))),
              1 === n)
            )
              throw ((t = Fs), pu(e, 0), su(e, r), au(e, Je()), t);
            if (6 === n) su(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 == (30 & r) &&
                  !(function (e) {
                    for (var n = e; ; ) {
                      if (16384 & n.flags) {
                        var t = n.updateQueue;
                        if (null !== t && null !== (t = t.stores))
                          for (var r = 0; r < t.length; r++) {
                            var a = t[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(l(), a)) return !1;
                            } catch (e) {
                              return !1;
                            }
                          }
                      }
                      if (((t = n.child), 16384 & n.subtreeFlags && null !== t))
                        (t.return = n), (n = t);
                      else {
                        if (n === e) break;
                        for (; null === n.sibling; ) {
                          if (null === n.return || n.return === e) return !0;
                          n = n.return;
                        }
                        (n.sibling.return = n.return), (n = n.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (n = bu(e, r)) &&
                    0 !== (i = hn(e)) &&
                    ((r = i), (n = iu(e, i))),
                  1 === n))
              )
                throw ((t = Fs), pu(e, 0), su(e, r), au(e, Je()), t);
              switch (((e.finishedWork = a), (e.finishedLanes = r), n)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  ku(e, Bs, Vs);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (n = Hs + 500 - Je()))
                  ) {
                    if (0 !== pn(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      nu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ku.bind(null, e, Bs, Vs), n);
                    break;
                  }
                  ku(e, Bs, Vs);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (n = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - on(r);
                    (i = 1 << o), (o = n[o]) > a && (a = o), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cs(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ku.bind(null, e, Bs, Vs), r);
                    break;
                  }
                  ku(e, Bs, Vs);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return au(e, Je()), e.callbackNode === t ? lu.bind(null, e) : null;
        }
        function iu(e, n) {
          var t = As;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, n).flags |= 256),
            2 !== (e = bu(e, n)) && ((n = Bs), (Bs = t), null !== n && ou(n)),
            e
          );
        }
        function ou(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function su(e, n) {
          for (
            n &= ~Us,
              n &= ~Ds,
              e.suspendedLanes |= n,
              e.pingedLanes &= ~n,
              e = e.expirationTimes;
            0 < n;

          ) {
            var t = 31 - on(n),
              r = 1 << t;
            (e[t] = -1), (n &= ~r);
          }
        }
        function uu(e) {
          if (0 != (6 & Ts)) throw Error(l(327));
          Su();
          var n = pn(e, 0);
          if (0 == (1 & n)) return au(e, Je()), null;
          var t = bu(e, n);
          if (0 !== e.tag && 2 === t) {
            var r = hn(e);
            0 !== r && ((n = r), (t = iu(e, r)));
          }
          if (1 === t) throw ((t = Fs), pu(e, 0), su(e, n), au(e, Je()), t);
          if (6 === t) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = n),
            ku(e, Bs, Vs),
            au(e, Je()),
            null
          );
        }
        function cu(e, n) {
          var t = Ts;
          Ts |= 1;
          try {
            return e(n);
          } finally {
            0 === (Ts = t) && (($s = Je() + 500), Ua && Ha());
          }
        }
        function du(e) {
          null !== Ys && 0 === Ys.tag && 0 == (6 & Ts) && Su();
          var n = Ts;
          Ts |= 1;
          var t = zs.transition,
            r = wn;
          try {
            if (((zs.transition = null), (wn = 1), e)) return e();
          } finally {
            (wn = r), (zs.transition = t), 0 == (6 & (Ts = n)) && Ha();
          }
        }
        function fu() {
          (Ms = Rs.current), Ca(Rs);
        }
        function pu(e, n) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var t = e.timeoutHandle;
          if ((-1 !== t && ((e.timeoutHandle = -1), aa(t)), null !== Is))
            for (t = Is.return; null !== t; ) {
              var r = t;
              switch ((nl(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && Ma();
                  break;
                case 3:
                  ai(), Ca(Ta), Ca(za), ci();
                  break;
                case 5:
                  ii(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Ca(oi);
                  break;
                case 10:
                  kl(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              t = t.return;
            }
          if (
            ((Ps = e),
            (Is = e = Ru(e.current, null)),
            (Ls = Ms = n),
            (js = 0),
            (Fs = null),
            (Us = Ds = Os = 0),
            (Bs = As = null),
            null !== _l)
          ) {
            for (n = 0; n < _l.length; n++)
              if (null !== (r = (t = _l[n]).interleaved)) {
                t.interleaved = null;
                var a = r.next,
                  l = t.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                t.pending = r;
              }
            _l = null;
          }
          return e;
        }
        function mu(e, n) {
          for (;;) {
            var t = Is;
            try {
              if ((xl(), (di.current = lo), bi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                bi = !1;
              }
              if (
                ((pi = 0),
                (gi = hi = mi = null),
                (vi = !1),
                (yi = 0),
                (Ns.current = null),
                null === t || null === t.return)
              ) {
                (js = 1), (Fs = n), (Is = null);
                break;
              }
              e: {
                var i = e,
                  o = t.return,
                  s = t,
                  u = n;
                if (
                  ((n = Ls),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" == typeof u &&
                    "function" == typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var m = bo(o);
                  if (null !== m) {
                    (m.flags &= -257),
                      vo(m, o, s, 0, n),
                      1 & m.mode && go(i, c, n),
                      (u = c);
                    var h = (n = m).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(u), (n.updateQueue = g);
                    } else h.add(u);
                    break e;
                  }
                  if (0 == (1 & n)) {
                    go(i, c, n), gu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var b = bo(o);
                  if (null !== b) {
                    0 == (65536 & b.flags) && (b.flags |= 256),
                      vo(b, o, s, 0, n),
                      ml(uo(u, s));
                    break e;
                  }
                }
                (i = u = uo(u, s)),
                  4 !== js && (js = 2),
                  null === As ? (As = [i]) : As.push(i),
                  (i = o);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (n &= -n),
                        (i.lanes |= n),
                        Fl(i, mo(0, u, n));
                      break e;
                    case 1:
                      s = u;
                      var v = i.type,
                        y = i.stateNode;
                      if (
                        0 == (128 & i.flags) &&
                        ("function" == typeof v.getDerivedStateFromError ||
                          (null !== y &&
                            "function" == typeof y.componentDidCatch &&
                            (null === qs || !qs.has(y))))
                      ) {
                        (i.flags |= 65536),
                          (n &= -n),
                          (i.lanes |= n),
                          Fl(i, ho(i, s, n));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xu(t);
            } catch (e) {
              (n = e), Is === t && null !== t && (Is = t = t.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = _s.current;
          return (_s.current = lo), null === e ? lo : e;
        }
        function gu() {
          (0 !== js && 3 !== js && 2 !== js) || (js = 4),
            null === Ps ||
              (0 == (268435455 & Os) && 0 == (268435455 & Ds)) ||
              su(Ps, Ls);
        }
        function bu(e, n) {
          var t = Ts;
          Ts |= 2;
          var r = hu();
          for ((Ps === e && Ls === n) || ((Vs = null), pu(e, n)); ; )
            try {
              vu();
              break;
            } catch (n) {
              mu(e, n);
            }
          if ((xl(), (Ts = t), (_s.current = r), null !== Is))
            throw Error(l(261));
          return (Ps = null), (Ls = 0), js;
        }
        function vu() {
          for (; null !== Is; ) wu(Is);
        }
        function yu() {
          for (; null !== Is && !Ye(); ) wu(Is);
        }
        function wu(e) {
          var n = Es(e.alternate, e, Ms);
          (e.memoizedProps = e.pendingProps),
            null === n ? xu(e) : (Is = n),
            (Ns.current = null);
        }
        function xu(e) {
          var n = e;
          do {
            var t = n.alternate;
            if (((e = n.return), 0 == (32768 & n.flags))) {
              if (null !== (t = Ko(t, n, Ms))) return void (Is = t);
            } else {
              if (null !== (t = Yo(t, n)))
                return (t.flags &= 32767), void (Is = t);
              if (null === e) return (js = 6), void (Is = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (n = n.sibling)) return void (Is = n);
            Is = n = e;
          } while (null !== n);
          0 === js && (js = 5);
        }
        function ku(e, n, t) {
          var r = wn,
            a = zs.transition;
          try {
            (zs.transition = null),
              (wn = 1),
              (function (e, n, t, r) {
                do {
                  Su();
                } while (null !== Ys);
                if (0 != (6 & Ts)) throw Error(l(327));
                t = e.finishedWork;
                var a = e.finishedLanes;
                if (null === t) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  t === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = t.lanes | t.childLanes;
                if (
                  ((function (e, n) {
                    var t = e.pendingLanes & ~n;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= n),
                      (e.mutableReadLanes &= n),
                      (e.entangledLanes &= n),
                      (n = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < t; ) {
                      var a = 31 - on(t),
                        l = 1 << a;
                      (n[a] = 0), (r[a] = -1), (e[a] = -1), (t &= ~l);
                    }
                  })(e, i),
                  e === Ps && ((Is = Ps = null), (Ls = 0)),
                  (0 == (2064 & t.subtreeFlags) && 0 == (2064 & t.flags)) ||
                    Ks ||
                    ((Ks = !0),
                    Pu(nn, function () {
                      return Su(), null;
                    })),
                  (i = 0 != (15990 & t.flags)),
                  0 != (15990 & t.subtreeFlags) || i)
                ) {
                  (i = zs.transition), (zs.transition = null);
                  var o = wn;
                  wn = 1;
                  var s = Ts;
                  (Ts |= 4),
                    (Ns.current = null),
                    (function (e, n) {
                      if (((ea = Wn), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var t = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (t =
                                ((t = e.ownerDocument) && t.defaultView) ||
                                window).getSelection && t.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              t = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                t.nodeType, i.nodeType;
                              } catch (e) {
                                t = null;
                                break e;
                              }
                              var o = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              n: for (;;) {
                                for (
                                  var m;
                                  f !== t ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = o + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = o + r),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (m = f.firstChild);

                                )
                                  (p = f), (f = m);
                                for (;;) {
                                  if (f === e) break n;
                                  if (
                                    (p === t && ++c === a && (s = o),
                                    p === i && ++d === r && (u = o),
                                    null !== (m = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = m;
                              }
                              t =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else t = null;
                          }
                        t = t || { start: 0, end: 0 };
                      } else t = null;
                      for (
                        na = { focusedElem: e, selectionRange: t },
                          Wn = !1,
                          Go = n;
                        null !== Go;

                      )
                        if (
                          ((e = (n = Go).child),
                          0 != (1028 & n.subtreeFlags) && null !== e)
                        )
                          (e.return = n), (Go = e);
                        else
                          for (; null !== Go; ) {
                            n = Go;
                            try {
                              var h = n.alternate;
                              if (0 != (1024 & n.flags))
                                switch (n.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        b = h.memoizedState,
                                        v = n.stateNode,
                                        y = v.getSnapshotBeforeUpdate(
                                          n.elementType === n.type
                                            ? g
                                            : gl(n.type, g),
                                          b
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var w = n.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (e) {
                              Cu(n, n.return, e);
                            }
                            if (null !== (e = n.sibling)) {
                              (e.return = n.return), (Go = e);
                              break;
                            }
                            Go = n.return;
                          }
                      (h = ts), (ts = !1);
                    })(e, t),
                    bs(t, e),
                    mr(na),
                    (Wn = !!ea),
                    (na = ea = null),
                    (e.current = t),
                    ys(t, e, a),
                    Xe(),
                    (Ts = s),
                    (wn = o),
                    (zs.transition = i);
                } else e.current = t;
                if (
                  (Ks && ((Ks = !1), (Ys = e), (Xs = a)),
                  (i = e.pendingLanes),
                  0 === i && (qs = null),
                  (function (e) {
                    if (ln && "function" == typeof ln.onCommitFiberRoot)
                      try {
                        ln.onCommitFiberRoot(
                          an,
                          e,
                          void 0,
                          128 == (128 & e.current.flags)
                        );
                      } catch (e) {}
                  })(t.stateNode),
                  au(e, Je()),
                  null !== n)
                )
                  for (r = e.onRecoverableError, t = 0; t < n.length; t++)
                    (a = n[t]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Ws) throw ((Ws = !1), (e = Qs), (Qs = null), e);
                0 != (1 & Xs) && 0 !== e.tag && Su(),
                  (i = e.pendingLanes),
                  0 != (1 & i)
                    ? e === Zs
                      ? Js++
                      : ((Js = 0), (Zs = e))
                    : (Js = 0),
                  Ha();
              })(e, n, t, r);
          } finally {
            (zs.transition = a), (wn = r);
          }
          return null;
        }
        function Su() {
          if (null !== Ys) {
            var e = xn(Xs),
              n = zs.transition,
              t = wn;
            try {
              if (((zs.transition = null), (wn = 16 > e ? 16 : e), null === Ys))
                var r = !1;
              else {
                if (((e = Ys), (Ys = null), (Xs = 0), 0 != (6 & Ts)))
                  throw Error(l(331));
                var a = Ts;
                for (Ts |= 4, Go = e.current; null !== Go; ) {
                  var i = Go,
                    o = i.child;
                  if (0 != (16 & Go.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Go = c; null !== Go; ) {
                          var d = Go;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Go = f);
                          else
                            for (; null !== Go; ) {
                              var p = (d = Go).sibling,
                                m = d.return;
                              if ((is(d), d === c)) {
                                Go = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), (Go = p);
                                break;
                              }
                              Go = m;
                            }
                        }
                      }
                      var h = i.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var b = g.sibling;
                            (g.sibling = null), (g = b);
                          } while (null !== g);
                        }
                      }
                      Go = i;
                    }
                  }
                  if (0 != (2064 & i.subtreeFlags) && null !== o)
                    (o.return = i), (Go = o);
                  else
                    e: for (; null !== Go; ) {
                      if (0 != (2048 & (i = Go).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var v = i.sibling;
                      if (null !== v) {
                        (v.return = i.return), (Go = v);
                        break e;
                      }
                      Go = i.return;
                    }
                }
                var y = e.current;
                for (Go = y; null !== Go; ) {
                  var w = (o = Go).child;
                  if (0 != (2064 & o.subtreeFlags) && null !== w)
                    (w.return = o), (Go = w);
                  else
                    e: for (o = y; null !== Go; ) {
                      if (0 != (2048 & (s = Go).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (e) {
                          Cu(s, s.return, e);
                        }
                      if (s === o) {
                        Go = null;
                        break e;
                      }
                      var x = s.sibling;
                      if (null !== x) {
                        (x.return = s.return), (Go = x);
                        break e;
                      }
                      Go = s.return;
                    }
                }
                if (
                  ((Ts = a),
                  Ha(),
                  ln && "function" == typeof ln.onPostCommitFiberRoot)
                )
                  try {
                    ln.onPostCommitFiberRoot(an, e);
                  } catch (e) {}
                r = !0;
              }
              return r;
            } finally {
              (wn = t), (zs.transition = n);
            }
          }
          return !1;
        }
        function Eu(e, n, t) {
          (e = Rl(e, (n = mo(0, (n = uo(t, n)), 1)), 1)),
            (n = nu()),
            null !== e && (vn(e, 1, n), au(e, n));
        }
        function Cu(e, n, t) {
          if (3 === e.tag) Eu(e, e, t);
          else
            for (; null !== n; ) {
              if (3 === n.tag) {
                Eu(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === qs || !qs.has(r)))
                ) {
                  (n = Rl(n, (e = ho(n, (e = uo(t, e)), 1)), 1)),
                    (e = nu()),
                    null !== n && (vn(n, 1, e), au(n, e));
                  break;
                }
              }
              n = n.return;
            }
        }
        function _u(e, n, t) {
          var r = e.pingCache;
          null !== r && r.delete(n),
            (n = nu()),
            (e.pingedLanes |= e.suspendedLanes & t),
            Ps === e &&
              (Ls & t) === t &&
              (4 === js ||
              (3 === js && (130023424 & Ls) === Ls && 500 > Je() - Hs)
                ? pu(e, 0)
                : (Us |= t)),
            au(e, n);
        }
        function Nu(e, n) {
          0 === n &&
            (0 == (1 & e.mode)
              ? (n = 1)
              : ((n = dn), 0 == (130023424 & (dn <<= 1)) && (dn = 4194304)));
          var t = nu();
          null !== (e = Tl(e, n)) && (vn(e, n, t), au(e, t));
        }
        function zu(e) {
          var n = e.memoizedState,
            t = 0;
          null !== n && (t = n.retryLane), Nu(e, t);
        }
        function Tu(e, n) {
          var t = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (t = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(n), Nu(e, t);
        }
        function Pu(e, n) {
          return qe(e, n);
        }
        function Iu(e, n, t, r) {
          (this.tag = e),
            (this.key = t),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = n),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lu(e, n, t, r) {
          return new Iu(e, n, t, r);
        }
        function Mu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ru(e, n) {
          var t = e.alternate;
          return (
            null === t
              ? (((t = Lu(e.tag, n, e.key, e.mode)).elementType =
                  e.elementType),
                (t.type = e.type),
                (t.stateNode = e.stateNode),
                (t.alternate = e),
                (e.alternate = t))
              : ((t.pendingProps = n),
                (t.type = e.type),
                (t.flags = 0),
                (t.subtreeFlags = 0),
                (t.deletions = null)),
            (t.flags = 14680064 & e.flags),
            (t.childLanes = e.childLanes),
            (t.lanes = e.lanes),
            (t.child = e.child),
            (t.memoizedProps = e.memoizedProps),
            (t.memoizedState = e.memoizedState),
            (t.updateQueue = e.updateQueue),
            (n = e.dependencies),
            (t.dependencies =
              null === n
                ? null
                : { lanes: n.lanes, firstContext: n.firstContext }),
            (t.sibling = e.sibling),
            (t.index = e.index),
            (t.ref = e.ref),
            t
          );
        }
        function ju(e, n, t, r, a, i) {
          var o = 2;
          if (((r = e), "function" == typeof e)) Mu(e) && (o = 1);
          else if ("string" == typeof e) o = 5;
          else
            e: switch (e) {
              case S:
                return Fu(t.children, a, i, n);
              case E:
                (o = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Lu(12, t, n, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = Lu(13, t, n, a)).elementType = T), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Lu(19, t, n, a)).elementType = P), (e.lanes = i), e
                );
              case M:
                return Ou(t, a, i, n);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case _:
                      o = 10;
                      break e;
                    case N:
                      o = 9;
                      break e;
                    case z:
                      o = 11;
                      break e;
                    case I:
                      o = 14;
                      break e;
                    case L:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((n = Lu(o, t, n, a)).elementType = e),
            (n.type = r),
            (n.lanes = i),
            n
          );
        }
        function Fu(e, n, t, r) {
          return ((e = Lu(7, e, r, n)).lanes = t), e;
        }
        function Ou(e, n, t, r) {
          return (
            ((e = Lu(22, e, r, n)).elementType = M),
            (e.lanes = t),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Du(e, n, t) {
          return ((e = Lu(6, e, null, n)).lanes = t), e;
        }
        function Uu(e, n, t) {
          return (
            ((n = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              n
            )).lanes = t),
            (n.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            n
          );
        }
        function Au(e, n, t, r, a) {
          (this.tag = n),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = bn(0)),
            (this.expirationTimes = bn(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = bn(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, n, t, r, a, l, i, o, s) {
          return (
            (e = new Au(e, n, t, o, s)),
            1 === n ? ((n = 1), !0 === l && (n |= 8)) : (n = 0),
            (l = Lu(3, null, null, n)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: t,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Il(l),
            e
          );
        }
        function Hu(e) {
          if (!e) return Na;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var n = e;
            do {
              switch (n.tag) {
                case 3:
                  n = n.stateNode.context;
                  break e;
                case 1:
                  if (La(n.type)) {
                    n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              n = n.return;
            } while (null !== n);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var t = e.type;
            if (La(t)) return ja(e, t, n);
          }
          return n;
        }
        function $u(e, n, t, r, a, l, i, o, s) {
          return (
            ((e = Bu(t, r, !0, e, 0, l, 0, o, s)).context = Hu(null)),
            (t = e.current),
            ((l = Ml((r = nu()), (a = tu(t)))).callback = null != n ? n : null),
            Rl(t, l, a),
            (e.current.lanes = a),
            vn(e, a, r),
            au(e, r),
            e
          );
        }
        function Vu(e, n, t, r) {
          var a = n.current,
            l = nu(),
            i = tu(a);
          return (
            (t = Hu(t)),
            null === n.context ? (n.context = t) : (n.pendingContext = t),
            ((n = Ml(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (n.callback = r),
            null !== (e = Rl(a, n, i)) && (ru(e, a, i, l), jl(e, a, i)),
            i
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, n) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var t = e.retryLane;
            e.retryLane = 0 !== t && t < n ? t : n;
          }
        }
        function qu(e, n) {
          Qu(e, n), (e = e.alternate) && Qu(e, n);
        }
        Es = function (e, n, t) {
          if (null !== e)
            if (e.memoizedProps !== n.pendingProps || Ta.current) wo = !0;
            else {
              if (0 == (e.lanes & t) && 0 == (128 & n.flags))
                return (
                  (wo = !1),
                  (function (e, n, t) {
                    switch (n.tag) {
                      case 3:
                        Po(n), pl();
                        break;
                      case 5:
                        li(n);
                        break;
                      case 1:
                        La(n.type) && Fa(n);
                        break;
                      case 4:
                        ri(n, n.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = n.type._context,
                          a = n.memoizedProps.value;
                        _a(bl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = n.memoizedState))
                          return null !== r.dehydrated
                            ? (_a(oi, 1 & oi.current), (n.flags |= 128), null)
                            : 0 != (t & n.child.childLanes)
                            ? Do(e, n, t)
                            : (_a(oi, 1 & oi.current),
                              null !== (e = Wo(e, n, t)) ? e.sibling : null);
                        _a(oi, 1 & oi.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 != (t & n.childLanes)), 0 != (128 & e.flags))
                        ) {
                          if (r) return $o(e, n, t);
                          n.flags |= 128;
                        }
                        if (
                          (null !== (a = n.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          _a(oi, oi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (n.lanes = 0), Co(e, n, t);
                    }
                    return Wo(e, n, t);
                  })(e, n, t)
                );
              wo = 0 != (131072 & e.flags);
            }
          else (wo = !1), al && 0 != (1048576 & n.flags) && Ga(n, Qa, n.index);
          switch (((n.lanes = 0), n.tag)) {
            case 2:
              var r = n.type;
              Vo(e, n), (e = n.pendingProps);
              var a = Ia(n, za.current);
              El(n, t), (a = Si(null, n, r, e, a, t));
              var i = Ei();
              return (
                (n.flags |= 1),
                "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof
                  ? ((n.tag = 1),
                    (n.memoizedState = null),
                    (n.updateQueue = null),
                    La(r) ? ((i = !0), Fa(n)) : (i = !1),
                    (n.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Il(n),
                    (a.updater = Bl),
                    (n.stateNode = a),
                    (a._reactInternals = n),
                    Wl(n, r, e, t),
                    (n = To(null, n, r, !0, i, t)))
                  : ((n.tag = 0),
                    al && i && el(n),
                    xo(null, n, a, t),
                    (n = n.child)),
                n
              );
            case 16:
              r = n.elementType;
              e: {
                switch (
                  (Vo(e, n),
                  (e = n.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (n.type = r),
                  (a = n.tag =
                    (function (e) {
                      if ("function" == typeof e) return Mu(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === z) return 11;
                        if (e === I) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    n = No(null, n, r, e, t);
                    break e;
                  case 1:
                    n = zo(null, n, r, e, t);
                    break e;
                  case 11:
                    n = ko(null, n, r, e, t);
                    break e;
                  case 14:
                    n = So(null, n, r, gl(r.type, e), t);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return n;
            case 0:
              return (
                (r = n.type),
                (a = n.pendingProps),
                No(e, n, r, (a = n.elementType === r ? a : gl(r, a)), t)
              );
            case 1:
              return (
                (r = n.type),
                (a = n.pendingProps),
                zo(e, n, r, (a = n.elementType === r ? a : gl(r, a)), t)
              );
            case 3:
              e: {
                if ((Po(n), null === e)) throw Error(l(387));
                (r = n.pendingProps),
                  (a = (i = n.memoizedState).element),
                  Ll(e, n),
                  Ol(n, r, null, t);
                var o = n.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (n.updateQueue.baseState = i),
                    (n.memoizedState = i),
                    256 & n.flags)
                  ) {
                    n = Io(e, n, r, t, (a = uo(Error(l(423)), n)));
                    break e;
                  }
                  if (r !== a) {
                    n = Io(e, n, r, t, (a = uo(Error(l(424)), n)));
                    break e;
                  }
                  for (
                    rl = ua(n.stateNode.containerInfo.firstChild),
                      tl = n,
                      al = !0,
                      ll = null,
                      t = Jl(n, null, r, t),
                      n.child = t;
                    t;

                  )
                    (t.flags = (-3 & t.flags) | 4096), (t = t.sibling);
                } else {
                  if ((pl(), r === a)) {
                    n = Wo(e, n, t);
                    break e;
                  }
                  xo(e, n, r, t);
                }
                n = n.child;
              }
              return n;
            case 5:
              return (
                li(n),
                null === e && ul(n),
                (r = n.type),
                (a = n.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                ta(r, a)
                  ? (o = null)
                  : null !== i && ta(r, i) && (n.flags |= 32),
                _o(e, n),
                xo(e, n, o, t),
                n.child
              );
            case 6:
              return null === e && ul(n), null;
            case 13:
              return Do(e, n, t);
            case 4:
              return (
                ri(n, n.stateNode.containerInfo),
                (r = n.pendingProps),
                null === e ? (n.child = Xl(n, null, r, t)) : xo(e, n, r, t),
                n.child
              );
            case 11:
              return (
                (r = n.type),
                (a = n.pendingProps),
                ko(e, n, r, (a = n.elementType === r ? a : gl(r, a)), t)
              );
            case 7:
              return xo(e, n, n.pendingProps, t), n.child;
            case 8:
            case 12:
              return xo(e, n, n.pendingProps.children, t), n.child;
            case 10:
              e: {
                if (
                  ((r = n.type._context),
                  (a = n.pendingProps),
                  (i = n.memoizedProps),
                  (o = a.value),
                  _a(bl, r._currentValue),
                  (r._currentValue = o),
                  null !== i)
                )
                  if (or(i.value, o)) {
                    if (i.children === a.children && !Ta.current) {
                      n = Wo(e, n, t);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = n.child) && (i.return = n);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        o = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Ml(-1, t & -t)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= t),
                              null !== (u = i.alternate) && (u.lanes |= t),
                              Sl(i.return, t, n),
                              (s.lanes |= t);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        o = i.type === n.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(l(341));
                        (o.lanes |= t),
                          null !== (s = o.alternate) && (s.lanes |= t),
                          Sl(o, t, n),
                          (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === n) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                xo(e, n, a.children, t), (n = n.child);
              }
              return n;
            case 9:
              return (
                (a = n.type),
                (r = n.pendingProps.children),
                El(n, t),
                (r = r((a = Cl(a)))),
                (n.flags |= 1),
                xo(e, n, r, t),
                n.child
              );
            case 14:
              return (
                (a = gl((r = n.type), n.pendingProps)),
                So(e, n, r, (a = gl(r.type, a)), t)
              );
            case 15:
              return Eo(e, n, n.type, n.pendingProps, t);
            case 17:
              return (
                (r = n.type),
                (a = n.pendingProps),
                (a = n.elementType === r ? a : gl(r, a)),
                Vo(e, n),
                (n.tag = 1),
                La(r) ? ((e = !0), Fa(n)) : (e = !1),
                El(n, t),
                $l(n, r, a),
                Wl(n, r, a, t),
                To(null, n, r, !0, e, t)
              );
            case 19:
              return $o(e, n, t);
            case 22:
              return Co(e, n, t);
          }
          throw Error(l(156, n.tag));
        };
        var Ku =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Gu() {}
        function ec(e, n, t, r, a) {
          var l = t._reactRootContainer;
          if (l) {
            var i = l;
            if ("function" == typeof a) {
              var o = a;
              a = function () {
                var e = Wu(i);
                o.call(e);
              };
            }
            Vu(n, i, e, a);
          } else
            i = (function (e, n, t, r, a) {
              if (a) {
                if ("function" == typeof r) {
                  var l = r;
                  r = function () {
                    var e = Wu(i);
                    l.call(e);
                  };
                }
                var i = $u(n, r, e, 0, null, !1, 0, "", Gu);
                return (
                  (e._reactRootContainer = i),
                  (e[ma] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" == typeof r) {
                var o = r;
                r = function () {
                  var e = Wu(s);
                  o.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, "", Gu);
              return (
                (e._reactRootContainer = s),
                (e[ma] = s.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Vu(n, s, t, r);
                }),
                s
              );
            })(t, n, e, a, r);
          return Wu(i);
        }
        (Xu.prototype.render = Yu.prototype.render =
          function (e) {
            var n = this._internalRoot;
            if (null === n) throw Error(l(409));
            Vu(e, n, null, null);
          }),
          (Xu.prototype.unmount = Yu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var n = e.containerInfo;
                du(function () {
                  Vu(null, e, null, null);
                }),
                  (n[ma] = null);
              }
            }),
          (Xu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var n = Cn();
              e = { blockedOn: null, target: e, priority: n };
              for (
                var t = 0;
                t < Rn.length && 0 !== n && n < Rn[t].priority;
                t++
              );
              Rn.splice(t, 0, e), 0 === t && Dn(e);
            }
          }),
          (kn = function (e) {
            switch (e.tag) {
              case 3:
                var n = e.stateNode;
                if (n.current.memoizedState.isDehydrated) {
                  var t = fn(n.pendingLanes);
                  0 !== t &&
                    (yn(n, 1 | t),
                    au(n, Je()),
                    0 == (6 & Ts) && (($s = Je() + 500), Ha()));
                }
                break;
              case 13:
                du(function () {
                  var n = Tl(e, 1);
                  if (null !== n) {
                    var t = nu();
                    ru(n, e, 1, t);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (Sn = function (e) {
            if (13 === e.tag) {
              var n = Tl(e, 134217728);
              if (null !== n) ru(n, e, 134217728, nu());
              qu(e, 134217728);
            }
          }),
          (En = function (e) {
            if (13 === e.tag) {
              var n = tu(e),
                t = Tl(e, n);
              if (null !== t) ru(t, e, n, nu());
              qu(e, n);
            }
          }),
          (Cn = function () {
            return wn;
          }),
          (_n = function (e, n) {
            var t = wn;
            try {
              return (wn = e), n();
            } finally {
              wn = t;
            }
          }),
          (ke = function (e, n, t) {
            switch (n) {
              case "input":
                if ((Z(e, t), (n = t.name), "radio" === t.type && null != n)) {
                  for (t = e; t.parentNode; ) t = t.parentNode;
                  for (
                    t = t.querySelectorAll(
                      "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
                    ),
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(l(90));
                      q(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, t);
                break;
              case "select":
                null != (n = t.value) && te(e, !!t.multiple, n, !1);
            }
          }),
          (ze = cu),
          (Te = du);
        var nc = {
            usingClientEntryPoint: !1,
            Events: [ya, wa, xa, _e, Ne, cu],
          },
          tc = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (an = ac.inject(rc)), (ln = ac);
            } catch (ce) {}
        }
        (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nc),
          (n.createPortal = function (e, n) {
            var t =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ju(n)) throw Error(l(200));
            return (function (e, n, t) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: n,
                implementation: t,
              };
            })(e, n, null, t);
          }),
          (n.createRoot = function (e, n) {
            if (!Ju(e)) throw Error(l(299));
            var t = !1,
              r = "",
              a = Ku;
            return (
              null != n &&
                (!0 === n.unstable_strictMode && (t = !0),
                void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
              (n = Bu(e, 1, !1, null, 0, t, 0, r, a)),
              (e[ma] = n.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Yu(n)
            );
          }),
          (n.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var n = e._reactInternals;
            if (void 0 === n) {
              if ("function" == typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = We(n)) ? null : e.stateNode);
          }),
          (n.flushSync = function (e) {
            return du(e);
          }),
          (n.hydrate = function (e, n, t) {
            if (!Zu(n)) throw Error(l(200));
            return ec(null, e, n, !0, t);
          }),
          (n.hydrateRoot = function (e, n, t) {
            if (!Ju(e)) throw Error(l(405));
            var r = (null != t && t.hydratedSources) || null,
              a = !1,
              i = "",
              o = Ku;
            if (
              (null != t &&
                (!0 === t.unstable_strictMode && (a = !0),
                void 0 !== t.identifierPrefix && (i = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (n = $u(n, null, e, 1, null != t ? t : null, a, 0, i, o)),
              (e[ma] = n.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (t = r[e])._getVersion)(t._source)),
                  null == n.mutableSourceEagerHydrationData
                    ? (n.mutableSourceEagerHydrationData = [t, a])
                    : n.mutableSourceEagerHydrationData.push(t, a);
            return new Xu(n);
          }),
          (n.render = function (e, n, t) {
            if (!Zu(n)) throw Error(l(200));
            return ec(null, e, n, !1, t);
          }),
          (n.unmountComponentAtNode = function (e) {
            if (!Zu(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ma] = null);
                });
              }),
              !0)
            );
          }),
          (n.unstable_batchedUpdates = cu),
          (n.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
            if (!Zu(t)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, n, t, !1, r);
          }),
          (n.version = "18.2.0-next-9e3b772b8-20220608");
      },
      745: (e, n, t) => {
        "use strict";
        var r = t(935);
        (n.s = r.createRoot), r.hydrateRoot;
      },
      935: (e, n, t) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = t(448));
      },
      408: (e, n) => {
        "use strict";
        var t = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function b(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = g),
            (this.updater = t || m);
        }
        function v() {}
        function y(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = g),
            (this.updater = t || m);
        }
        (b.prototype.isReactComponent = {}),
          (b.prototype.setState = function (e, n) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, n, "setState");
          }),
          (b.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = b.prototype);
        var w = (y.prototype = new v());
        (w.constructor = y), h(w, b.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, n, r) {
          var a,
            l = {},
            i = null,
            o = null;
          if (null != n)
            for (a in (void 0 !== n.ref && (o = n.ref),
            void 0 !== n.key && (i = "" + n.key),
            n))
              k.call(n, a) && !E.hasOwnProperty(a) && (l[a] = n[a]);
          var s = arguments.length - 2;
          if (1 === s) l.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
          return {
            $$typeof: t,
            type: e,
            key: i,
            ref: o,
            props: l,
            _owner: S.current,
          };
        }
        function _(e) {
          return "object" == typeof e && null !== e && e.$$typeof === t;
        }
        var N = /\/+/g;
        function z(e, n) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var n = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return n[e];
                  })
                );
              })("" + e.key)
            : n.toString(36);
        }
        function T(e, n, a, l, i) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case t:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === l ? "." + z(s, 0) : l),
              x(i)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  T(i, n, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (_(i) &&
                    (i = (function (e, n) {
                      return {
                        $$typeof: t,
                        type: e.type,
                        key: n,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  n.push(i)),
              1
            );
          if (((s = 0), (l = "" === l ? "." : l + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = l + z((o = e[u]), u);
              s += T(o, n, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), u = 0; !(o = e.next()).done; )
              s += T((o = o.value), n, a, (c = l + z(o, u++)), i);
          else if ("object" === o)
            throw (
              ((n = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === n
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : n) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function P(e, n, t) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            T(e, r, "", "", function (e) {
              return n.call(t, e, a++);
            }),
            r
          );
        }
        function I(e) {
          if (-1 === e._status) {
            var n = e._result;
            (n = n()).then(
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = n));
              },
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = n));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = n));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          M = { transition: null },
          R = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: S,
          };
        (n.Children = {
          map: P,
          forEach: function (e, n, t) {
            P(
              e,
              function () {
                n.apply(this, arguments);
              },
              t
            );
          },
          count: function (e) {
            var n = 0;
            return (
              P(e, function () {
                n++;
              }),
              n
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (n.Component = b),
          (n.Fragment = a),
          (n.Profiler = i),
          (n.PureComponent = y),
          (n.StrictMode = l),
          (n.Suspense = c),
          (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (n.cloneElement = function (e, n, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              l = e.key,
              i = e.ref,
              o = e._owner;
            if (null != n) {
              if (
                (void 0 !== n.ref && ((i = n.ref), (o = S.current)),
                void 0 !== n.key && (l = "" + n.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in n)
                k.call(n, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === n[u] && void 0 !== s ? s[u] : n[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: t,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: o,
            };
          }),
          (n.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (n.createElement = C),
          (n.createFactory = function (e) {
            var n = C.bind(null, e);
            return (n.type = e), n;
          }),
          (n.createRef = function () {
            return { current: null };
          }),
          (n.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (n.isValidElement = _),
          (n.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: I,
            };
          }),
          (n.memo = function (e, n) {
            return { $$typeof: d, type: e, compare: void 0 === n ? null : n };
          }),
          (n.startTransition = function (e) {
            var n = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = n;
            }
          }),
          (n.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (n.useCallback = function (e, n) {
            return L.current.useCallback(e, n);
          }),
          (n.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (n.useDebugValue = function () {}),
          (n.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (n.useEffect = function (e, n) {
            return L.current.useEffect(e, n);
          }),
          (n.useId = function () {
            return L.current.useId();
          }),
          (n.useImperativeHandle = function (e, n, t) {
            return L.current.useImperativeHandle(e, n, t);
          }),
          (n.useInsertionEffect = function (e, n) {
            return L.current.useInsertionEffect(e, n);
          }),
          (n.useLayoutEffect = function (e, n) {
            return L.current.useLayoutEffect(e, n);
          }),
          (n.useMemo = function (e, n) {
            return L.current.useMemo(e, n);
          }),
          (n.useReducer = function (e, n, t) {
            return L.current.useReducer(e, n, t);
          }),
          (n.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (n.useState = function (e) {
            return L.current.useState(e);
          }),
          (n.useSyncExternalStore = function (e, n, t) {
            return L.current.useSyncExternalStore(e, n, t);
          }),
          (n.useTransition = function () {
            return L.current.useTransition();
          }),
          (n.version = "18.2.0");
      },
      294: (e, n, t) => {
        "use strict";
        e.exports = t(408);
      },
      53: (e, n) => {
        "use strict";
        function t(e, n) {
          var t = e.length;
          e.push(n);
          e: for (; 0 < t; ) {
            var r = (t - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, n))) break e;
            (e[r] = n), (e[t] = a), (t = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var n = e[0],
            t = e.pop();
          if (t !== n) {
            e[0] = t;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                u = o + 1,
                c = e[u];
              if (0 > l(s, t))
                u < a && 0 > l(c, s)
                  ? ((e[r] = c), (e[u] = t), (r = u))
                  : ((e[r] = s), (e[o] = t), (r = o));
              else {
                if (!(u < a && 0 > l(c, t))) break e;
                (e[r] = c), (e[u] = t), (r = u);
              }
            }
          }
          return n;
        }
        function l(e, n) {
          var t = e.sortIndex - n.sortIndex;
          return 0 !== t ? t : e.id - n.id;
        }
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var i = performance;
          n.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            s = o.now();
          n.unstable_now = function () {
            return o.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          b = "function" == typeof setTimeout ? setTimeout : null,
          v = "function" == typeof clearTimeout ? clearTimeout : null,
          y = "undefined" != typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var n = r(c); null !== n; ) {
            if (null === n.callback) a(c);
            else {
              if (!(n.startTime <= e)) break;
              a(c), (n.sortIndex = n.expirationTime), t(u, n);
            }
            n = r(c);
          }
        }
        function x(e) {
          if (((g = !1), w(e), !h))
            if (null !== r(u)) (h = !0), M(k);
            else {
              var n = r(c);
              null !== n && R(x, n.startTime - e);
            }
        }
        function k(e, t) {
          (h = !1), g && ((g = !1), v(_), (_ = -1)), (m = !0);
          var l = p;
          try {
            for (
              w(t), f = r(u);
              null !== f && (!(f.expirationTime > t) || (e && !T()));

            ) {
              var i = f.callback;
              if ("function" == typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var o = i(f.expirationTime <= t);
                (t = n.unstable_now()),
                  "function" == typeof o
                    ? (f.callback = o)
                    : f === r(u) && a(u),
                  w(t);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && R(x, d.startTime - t), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = l), (m = !1);
          }
        }
        "undefined" != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          _ = -1,
          N = 5,
          z = -1;
        function T() {
          return !(n.unstable_now() - z < N);
        }
        function P() {
          if (null !== C) {
            var e = n.unstable_now();
            z = e;
            var t = !0;
            try {
              t = C(!0, e);
            } finally {
              t ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" == typeof y)
          S = function () {
            y(P);
          };
        else if ("undefined" != typeof MessageChannel) {
          var I = new MessageChannel(),
            L = I.port2;
          (I.port1.onmessage = P),
            (S = function () {
              L.postMessage(null);
            });
        } else
          S = function () {
            b(P, 0);
          };
        function M(e) {
          (C = e), E || ((E = !0), S());
        }
        function R(e, t) {
          _ = b(function () {
            e(n.unstable_now());
          }, t);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            h || m || ((h = !0), M(k));
          }),
          (n.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (n.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var n = 3;
                break;
              default:
                n = p;
            }
            var t = p;
            p = n;
            try {
              return e();
            } finally {
              p = t;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (e, n) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var t = p;
            p = e;
            try {
              return n();
            } finally {
              p = t;
            }
          }),
          (n.unstable_scheduleCallback = function (e, a, l) {
            var i = n.unstable_now();
            switch (
              ("object" == typeof l && null !== l
                ? (l = "number" == typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  t(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (v(_), (_ = -1)) : (g = !0), R(x, l - i)))
                : ((e.sortIndex = o), t(u, e), h || m || ((h = !0), M(k))),
              e
            );
          }),
          (n.unstable_shouldYield = T),
          (n.unstable_wrapCallback = function (e) {
            var n = p;
            return function () {
              var t = p;
              p = n;
              try {
                return e.apply(this, arguments);
              } finally {
                p = t;
              }
            };
          });
      },
      840: (e, n, t) => {
        "use strict";
        e.exports = t(53);
      },
      379: (e) => {
        "use strict";
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var l = {}, i = [], o = 0; o < e.length; o++) {
            var s = e[o],
              u = r.base ? s[0] + r.base : s[0],
              c = l[u] || 0,
              d = "".concat(u, " ").concat(c);
            l[u] = c + 1;
            var f = t(d),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) n[f].references++, n[f].updater(p);
            else {
              var m = a(p, r);
              (r.byIndex = o),
                n.splice(o, 0, { identifier: d, updater: m, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function a(e, n) {
          var t = n.domAPI(n);
          t.update(e);
          return function (n) {
            if (n) {
              if (
                n.css === e.css &&
                n.media === e.media &&
                n.sourceMap === e.sourceMap &&
                n.supports === e.supports &&
                n.layer === e.layer
              )
                return;
              t.update((e = n));
            } else t.remove();
          };
        }
        e.exports = function (e, a) {
          var l = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < l.length; i++) {
              var o = t(l[i]);
              n[o].references--;
            }
            for (var s = r(e, a), u = 0; u < l.length; u++) {
              var c = t(l[u]);
              0 === n[c].references && (n[c].updater(), n.splice(c, 1));
            }
            l = s;
          };
        };
      },
      569: (e) => {
        "use strict";
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        "use strict";
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var a = void 0 !== t.layer;
                a &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  a && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var l = t.sourceMap;
                l &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(l)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      672: (e, n, t) => {
        var r = { "./IrenaKaramachoskaResume2023.pdf": 854 };
        function a(e) {
          var n = l(e);
          return t(n);
        }
        function l(e) {
          if (!t.o(r, e)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw ((n.code = "MODULE_NOT_FOUND"), n);
          }
          return r[e];
        }
        (a.keys = function () {
          return Object.keys(r);
        }),
          (a.resolve = l),
          (e.exports = a),
          (a.id = 672);
      },
      891: (e, n, t) => {
        var r = {
          "./bootstrap.png": 198,
          "./css.png": 246,
          "./firebase.png": 172,
          "./html.png": 329,
          "./javascript.png": 760,
          "./jquery.png": 350,
          "./mui.png": 549,
          "./react.png": 293,
          "./tailwind.png": 910,
          "./typescript.png": 725,
        };
        function a(e) {
          var n = l(e);
          return t(n);
        }
        function l(e) {
          if (!t.o(r, e)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw ((n.code = "MODULE_NOT_FOUND"), n);
          }
          return r[e];
        }
        (a.keys = function () {
          return Object.keys(r);
        }),
          (a.resolve = l),
          (e.exports = a),
          (a.id = 891);
      },
      220: (e, n, t) => {
        var r = {
          "./bikes-preview.png": 849,
          "./bikes.png": 7,
          "./brainster-labs.png": 161,
          "./bubble-logo.png": 718,
          "./car-racing.png": 581,
          "./coin-tracker-preview.png": 17,
          "./cointracker.png": 392,
          "./goodcarbon.png": 994,
          "./notes-preview.png": 928,
          "./notes.png": 66,
          "./race-preview.png": 417,
          "./resourceya-preview.png": 380,
          "./resourceya.png": 364,
          "./todoProject1.png": 975,
        };
        function a(e) {
          var n = l(e);
          return t(n);
        }
        function l(e) {
          if (!t.o(r, e)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw ((n.code = "MODULE_NOT_FOUND"), n);
          }
          return r[e];
        }
        (a.keys = function () {
          return Object.keys(r);
        }),
          (a.resolve = l),
          (e.exports = a),
          (a.id = 220);
      },
      489: (e, n, t) => {
        "use strict";
        e.exports = t.p + "27e15d31e8c4322f9a0b.woff";
      },
      60: (e, n, t) => {
        "use strict";
        e.exports = t.p + "d7335feb9a0fd39492fd.woff2";
      },
    },
    n = {};
  function t(r) {
    var a = n[r];
    if (void 0 !== a) return a.exports;
    var l = (n[r] = { id: r, exports: {} });
    return e[r](l, l.exports, t), l.exports;
  }
  (t.m = e),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        if (r.length) for (var a = r.length - 1; a > -1 && !e; ) e = r[a--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      "use strict";
      var e = t(294),
        n = t(745);
      const r = ({ onClick: n }) =>
          e.createElement(
            "div",
            {
              onClick: n,
              className:
                "flex flex-col gap-1 h-4 w-8 mt-5 ml-5 md:hidden fixed left-0",
            },
            e.createElement("span", {
              className: "border-2 bg-gray-400 border-gray-400 w-full rounded",
            }),
            e.createElement("span", {
              className: "border-2 bg-gray-400 border-gray-400 w-full rounded",
            }),
            e.createElement("span", {
              className: "border-2 bg-gray-400 border-gray-400 w-full rounded",
            })
          ),
        a = ["home", "about-me", "technologies", "projects", "contact"],
        l = { _origin: "https://api.emailjs.com" },
        i = (e, n, t) => {
          if (!e)
            throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
          if (!n)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
          if (!t)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
          return !0;
        };
      class o {
        constructor(e) {
          (this.status = e ? e.status : 0),
            (this.text = e ? e.responseText : "Network Error");
        }
      }
      const s = (e, n, t = {}) =>
          new Promise((r, a) => {
            const i = new XMLHttpRequest();
            i.addEventListener("load", ({ target: e }) => {
              const n = new o(e);
              200 === n.status || "OK" === n.text ? r(n) : a(n);
            }),
              i.addEventListener("error", ({ target: e }) => {
                a(new o(e));
              }),
              i.open("POST", l._origin + e, !0),
              Object.keys(t).forEach((e) => {
                i.setRequestHeader(e, t[e]);
              }),
              i.send(n);
          }),
        u = (e, n, t, r) => {
          const a = r || l._userID,
            o = ((e) => {
              let n;
              if (
                ((n = "string" == typeof e ? document.querySelector(e) : e),
                !n || "FORM" !== n.nodeName)
              )
                throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
              return n;
            })(t);
          i(a, e, n);
          const u = new FormData(o);
          return (
            u.append("lib_version", "3.11.0"),
            u.append("service_id", e),
            u.append("template_id", n),
            u.append("user_id", a),
            s("/api/v1.0/email/send-form", u)
          );
        },
        c = (e) => {
          e.preventDefault();
          const n = window.document.getElementById(
            e.currentTarget.href.split("#")[1]
          );
          if (n) {
            const e = document.getElementById("header"),
              t = e?.offsetHeight,
              r = n.getBoundingClientRect().top - (t ?? 0);
            window.scrollTo({
              top: window.window.scrollY + r,
              behavior: "smooth",
            });
          }
        },
        d = (e) => (
          window.addEventListener("scroll", e),
          () => {
            window.removeEventListener("scroll", e);
          }
        ),
        f = (n, t, r) => {
          const [a, l] = (0, e.useState)(t),
            i = sessionStorage.getItem("activeSection");
          return (
            (0, e.useEffect)(() => {
              l(i ?? t),
                d(() => {
                  const e = window.scrollY,
                    a = Array.from(n).find((n) => {
                      const t = r?.offsetHeight,
                        a = n.offsetTop,
                        l = n.offsetHeight - (t ?? 0);
                      return e < a + l;
                    }),
                    i = a ? a.id : null;
                  l(i), sessionStorage.setItem("activeSection", i || t);
                });
            }, [a]),
            a
          );
        },
        p = () => {
          const [n, t] = (0, e.useState)(!1),
            [l, i] = (0, e.useState)(!1),
            o = document.querySelectorAll("section"),
            s = document.getElementById("header"),
            u = f(o, "home", s),
            p = () => {
              window.scrollY >= 100 ? i(!0) : i(!1);
            };
          return (
            (0, e.useEffect)(() => {
              d(p);
            }, []),
            e.createElement(
              "div",
              { id: "header", className: "h-[55px] md:h-[72px]" },
              e.createElement(
                "div",
                {
                  className: `${
                    n ? "flex flex-col bg-white openMenu" : "hidden"
                  } ${
                    l ? "bg-white shadow-md" : "bg-stone-50"
                  } z-10 fixed md:flex w-[100vw] h-[100vh] md:h-fit p-5`,
                },
                n &&
                  e.createElement(
                    "div",
                    {
                      className:
                        "flex flex-col gap-1 h-4 w-8 relative mt-2 md:hidden",
                      onClick: () => {
                        t(!1);
                      },
                    },
                    e.createElement("span", {
                      className:
                        "border-2 bg-gray-400 border-gray-400 w-full rounded rotate-45 absolute",
                    }),
                    e.createElement("span", {
                      className:
                        "border-2 bg-gray-400 border-gray-400 w-full rounded -rotate-45 absolute",
                    })
                  ),
                e.createElement(
                  "ul",
                  {
                    className:
                      "flex flex-col gap-5 md:flex-row md:gap-16 md:pl-0 md:mx-auto mt-10 md:mt-0",
                  },
                  a.map((n, r) =>
                    e.createElement(
                      "li",
                      { key: r },
                      e.createElement(
                        "a",
                        {
                          "data-to-scrollspy-id": n,
                          className:
                            (u === n ? "text-orange-600" : "text-gray-400") +
                            "  font-bold py-1 text-lg sm:text-base block relative tracking-[2px] whitespace-nowrap",
                          href: `#${n}`,
                          onClick: (e) => {
                            t(!1), c(e);
                          },
                        },
                        "about-me" === n ? n.replace(/-/g, " ") : n
                      )
                    )
                  )
                )
              ),
              !n &&
                e.createElement(
                  "div",
                  {
                    className: `${
                      l && "shadow-md"
                    } w-full h-[55px] z-20 fixed md:hidden bg-stone-50`,
                  },
                  e.createElement(r, {
                    onClick: () => {
                      t(!n);
                    },
                  })
                )
            )
          );
        },
        m = {
          description:
            "During my career as a frontend developer, I have had the opportunity to work with a range of cutting-edge technologies. Of course, <b>HTML</b> and <b>CSS</b> have been my trusted companions throughout my journey. Aside from that, in my latest role I thrived in a dynamic and fast-paced environment where I had the privilege of working with a powerful stack of technologies such as <b>TypeScript</b>, <b>React</b>, <b>SCSS</b>, and <b>Tailwind CSS</b> environment.\n  <br/><br/>My previous experiences equipped me with a strong foundation in <b>JavaScript</b>, along with the popular frameworks and libraries like <b>React</b>, <b>Material-UI</b> and <b>Bootstrap</b>. Working within this tech stack allowed me to deliver high-quality, performant, and visually appealing front-end solutions.",
          logos: [
            "typescript",
            "tailwind",
            "javascript",
            "react",
            "mui",
            "html",
            "css",
            "bootstrap",
          ],
        },
        h = ({ children: n, className: t, id: r, sectionRef: a }) =>
          e.createElement(
            "section",
            {
              ref: a,
              id: r,
              className: `w-full px-5 py-20 md:px-20 lg:px-40 ${t}`,
            },
            n
          ),
        g = () =>
          e.createElement(
            h,
            {
              id: "technologies",
              className: "flex flex-col items-center justify-center",
            },
            e.createElement(
              "div",
              { className: "flex flex-col" },
              e.createElement(
                "div",
                {
                  className:
                    "text-4xl font-bold text-gray-400 mr-auto mb-[60px]",
                },
                "technologies"
              ),
              e.createElement(
                "div",
                { className: "mb-10" },
                e.createElement("p", {
                  className: "mb-2 text-gray-600 max-w-full text-sm",
                  dangerouslySetInnerHTML: { __html: m.description },
                })
              ),
              e.createElement(
                "div",
                { className: "flex gap-5 flex-wrap" },
                m.logos.map((n, r) =>
                  e.createElement(
                    "div",
                    { key: r, className: "w-[50px] h-[50px]" },
                    e.createElement("img", {
                      src: t(891)(`./${n}.png`).default,
                      alt: `Logo ${r}`,
                      key: r,
                    })
                  )
                )
              )
            )
          );
      var b;
      function v() {
        return (
          (v = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          v.apply(this, arguments)
        );
      }
      const y = function (n) {
        return e.createElement(
          "svg",
          v(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlSpace: "preserve",
              width: "1em",
              height: "1em",
              fill: "#9CA3AF",
              viewBox: "0 0 330 330",
            },
            n
          ),
          b ||
            (b = e.createElement("path", {
              d: "M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z",
            }))
        );
      };
      var w, x;
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          k.apply(this, arguments)
        );
      }
      const S = function (n) {
        return e.createElement(
          "svg",
          k(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              fill: "none",
              viewBox: "0 0 24 24",
            },
            n
          ),
          w ||
            (w = e.createElement(
              "g",
              {
                stroke: "#f9fafb",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                clipPath: "url(#linkedin_svg__a)",
              },
              e.createElement("path", {
                d: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6ZM8 11v5M8 8v.01M12 16v-5",
              }),
              e.createElement("path", { d: "M16 16v-3a2 2 0 0 0-4 0" })
            )),
          x ||
            (x = e.createElement(
              "defs",
              null,
              e.createElement(
                "clipPath",
                { id: "linkedin_svg__a" },
                e.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })
              )
            ))
        );
      };
      var E, C;
      function _() {
        return (
          (_ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          _.apply(this, arguments)
        );
      }
      const N = function (n) {
        return e.createElement(
          "svg",
          _(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              fill: "none",
              viewBox: "0 0 24 24",
            },
            n
          ),
          E ||
            (E = e.createElement(
              "g",
              { clipPath: "url(#github_svg__a)" },
              e.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21",
              })
            )),
          C ||
            (C = e.createElement(
              "defs",
              null,
              e.createElement(
                "clipPath",
                { id: "github_svg__a" },
                e.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })
              )
            ))
        );
      };
      var z, T;
      function P() {
        return (
          (P = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          P.apply(this, arguments)
        );
      }
      const I = function (n) {
        return e.createElement(
          "svg",
          P(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              fill: "none",
              viewBox: "0 0 24 24",
            },
            n
          ),
          z ||
            (z = e.createElement(
              "g",
              {
                stroke: "#f9fafb",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                clipPath: "url(#download_svg__a)",
              },
              e.createElement("path", {
                d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12",
              })
            )),
          T ||
            (T = e.createElement(
              "defs",
              null,
              e.createElement(
                "clipPath",
                { id: "download_svg__a" },
                e.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })
              )
            ))
        );
      };
      var L, M;
      function R() {
        return (
          (R = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          R.apply(this, arguments)
        );
      }
      const j = function (n) {
          return e.createElement(
            "svg",
            R(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                width: "1em",
                height: "1em",
              },
              n
            ),
            L ||
              (L = e.createElement(
                "g",
                {
                  stroke: "#6b7280",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  clipPath: "url(#externalLink_svg__a)",
                },
                e.createElement("path", {
                  d: "M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5M10 14 20 4M15 4h5v5",
                })
              )),
            M ||
              (M = e.createElement(
                "defs",
                null,
                e.createElement(
                  "clipPath",
                  { id: "externalLink_svg__a" },
                  e.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })
                )
              ))
          );
        },
        F = ["Hi there, I'm Irena"],
        O = ["frontend developer"],
        D = (n) => {
          const [t, r] = (0, e.useState)(0),
            [a, l] = (0, e.useState)(0),
            [i, o] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            if (t === n.length - 1 && a === n[t].length) return;
            if (a === n[t].length + 1 && t !== n.length - 1 && !i)
              return void o(!0);
            if (0 === a && i) return o(!1), void r((e) => e + 1);
            const e = setTimeout(() => {
              l((e) => e + (i ? -1 : 1));
            }, Math.max(i ? 75 : a === n[t].length ? 1e3 : 150, 100 * Math.random()));
            return () => clearTimeout(e);
          }, [a, t, i, n]);
          return n[t].substring(0, a);
        },
        U = () => {
          const n = D(F),
            [t, r] = (0, e.useState)(!1),
            [a, l] = (0, e.useState)(!1),
            [i, o] = (0, e.useState)(!1),
            [s, u] = (0, e.useState)(5),
            f = () => u(window.scrollY);
          return (
            (0, e.useEffect)(() => {
              d(f);
            }, []),
            (0, e.useEffect)(() => {
              r(s < 300);
            }, [s]),
            setTimeout(() => {
              l(!0),
                setTimeout(() => {
                  o(!0);
                }, 1e3);
            }, 3e3),
            e.createElement(
              h,
              {
                id: "home",
                className:
                  "flex items-center justify-start sm:justify-center min-h-[100vh]",
              },
              e.createElement(
                e.Fragment,
                null,
                e.createElement(
                  "div",
                  { className: "min-h-[250px] sm:min-h-[210px]" },
                  e.createElement(
                    "h1",
                    {
                      className:
                        "max-w-[270px] sm:max-w-[100%] self-start text-6xl lg:text-8xl xl:text-9xl font-bold text-gray-600 mb-5 leading-tight md:whitespace-nowrap",
                    },
                    n
                  ),
                  e.createElement(
                    "div",
                    { className: a ? "block" : "hidden" },
                    e.createElement(
                      "h2",
                      {
                        className: a
                          ? "fade text-orange-600 text-xl lg:text-5xl float-left sm:float-right tracking-[4px] lg:tracking-[10px] whitespace-nowrap"
                          : "",
                      },
                      e.createElement("span", null, O)
                    )
                  )
                ),
                i &&
                  e.createElement(
                    "a",
                    { href: "#about-me", onClick: (e) => c(e) },
                    e.createElement(y, {
                      className:
                        (t ? "fade pointer" : "hidden") +
                        " animate-bounce absolute bottom-10 md:bottom-20 left-[50%] translate-x-[-50%]",
                      width: 40,
                      height: 40,
                    })
                  )
              )
            )
          );
        },
        A = {
          personalBiography:
            "<b>Berlin based promising frontend developer!</b> While my professional journey has taken me through various fields, I have discovered my true passion and purpose in frontend development.\n  Coming from a diverse professional background, including financial management, accounting and human resources, I found myself most fulfilled when I started writing lines of code and bringing designs to life. \n  I love the challenges that frontend development presents and the opportunity to constantly explore and push the boundaries of what is possible. I’m spending practically my whole day experimenting with a variety of frontend development tools, explore different approaches to solving problems, and improve my ability to create beautiful and user-friendly web interfaces.",
          professionalBiography: {
            description:
              "My journey as a frontend developer began when I enrolled in a web development academy. Since then, I've successfully completed two additional courses for React and Typescript and also participated in numerous projects, applying the practical skills I acquired during my training.\n    In addition to my frontend expertise, I bring valuable experience from other administrative works in the past. Over the years, I have honed my skills, becoming a diligent, hardworking, and professional employee.",
            roles: [
              {
                company: "goodcarbon, Berlin",
                date: "December 2022 - ",
                role: "Frontend Developer",
              },
              {
                company: "Ryaktive Software Development Agency, Skopje",
                date: "November 2021 - December 2022",
                role: "Frontend Developer",
              },
              {
                company: "ODW-ELEKTRIK, Struga",
                date: "May 2019 - November 2021",
                role: "Accountant and Human resources assistant",
              },
              {
                company: "Moneymax Financial Company, Ohrid",
                date: "May 2018 - November 2019",
                role: "Loan officer and Debt collector",
              },
              {
                company: "INCA Cultural Organisation, Struga",
                date: "May 2014 - October 2019",
                role: "Financial Manager",
              },
            ],
          },
          linkedIn: "https://www.linkedin.com/in/irena-karamachoska-55944a204/",
          github: "https://github.com/IrenaKar",
          resume: "./IrenaKaramachoskaResume2023",
        },
        B = ({ sectionRef: n }) =>
          e.createElement(
            h,
            {
              sectionRef: n,
              id: "about-me",
              className: "flex flex-col bg-gray-600 text-left",
            },
            e.createElement(
              e.Fragment,
              null,
              e.createElement(
                "div",
                { className: "text-4xl font-bold text-gray-400 mb-[60px]" },
                "about me"
              ),
              e.createElement(
                "div",
                { className: "flex flex-col xl:flex-row gap-10 xl:gap-[60px]" },
                e.createElement(
                  "div",
                  { className: "flex flex-col md:flex-row gap-[60px] w-fit" },
                  e.createElement(
                    "div",
                    { className: "min-w-[190px] w-[190px] h-[190px]" },
                    e.createElement("img", {
                      className: "block w-full",
                      src: t(784).Z,
                      alt: "My photo",
                    })
                  ),
                  e.createElement(
                    "div",
                    { className: "w-fit text-sm" },
                    e.createElement("p", {
                      className: "mb-5 text-gray-50",
                      dangerouslySetInnerHTML: { __html: A.personalBiography },
                    }),
                    e.createElement("p", {
                      className: "mb-5 text-gray-50",
                      dangerouslySetInnerHTML: {
                        __html: A.professionalBiography.description,
                      },
                    })
                  )
                ),
                e.createElement(
                  "div",
                  {
                    className:
                      "flex flex-col gap-5 md:ml-[250px] xl:ml-0 lg:w-[550px]",
                  },
                  e.createElement(
                    "ul",
                    { className: "list-disc pl-3 flex flex-col gap-5" },
                    A.professionalBiography.roles.map((n, t) =>
                      e.createElement(
                        "li",
                        { key: t, className: "mb-3 text-gray-50 text-sm" },
                        e.createElement(
                          "span",
                          { className: "font-bold mr-2" },
                          `${n.company} -`
                        ),
                        e.createElement("span", null, n.role),
                        e.createElement("span", { className: "block" }, n.date)
                      )
                    )
                  )
                )
              ),
              e.createElement(
                "div",
                {
                  className:
                    "flex sm:ml-auto gap-5 mr-5 mt-[60px] text-gray-50",
                },
                e.createElement(
                  "div",
                  { className: "flex flex-row gap-2" },
                  e.createElement(
                    "span",
                    { className: "whitespace-nowrap" },
                    "Find me on:"
                  ),
                  e.createElement(
                    "a",
                    { target: "_blank", href: A.linkedIn },
                    e.createElement(S, { width: 20, height: 20 })
                  ),
                  e.createElement(
                    "a",
                    { target: "_blank", href: A.github },
                    e.createElement(N, {
                      className: "stroke-gray-50",
                      width: 20,
                      height: 20,
                    })
                  )
                ),
                e.createElement(
                  "a",
                  {
                    className: "flex gap-2",
                    href: t(672)(`${A.resume}.pdf`).default,
                    download: "Resume Irena Karamachoska",
                  },
                  e.createElement("span", null, "Resume:"),
                  e.createElement(I, { width: 20, height: 20 })
                )
              )
            )
          ),
        H = ({ longDescription: n }) =>
          e.createElement(
            "div",
            { className: "pt-5 sm:pt-10 text-gray-400" },
            e.createElement(
              "div",
              { className: "font-bold text-sm hidden xl:block" },
              "project details"
            ),
            e.createElement("div", {
              className: "text-sm text-gray-600 text-left mt-0 sm:mt-3",
              dangerouslySetInnerHTML: { __html: n },
            })
          ),
        $ = ({
          title: n,
          description: r,
          image: a,
          resources: l,
          projectUrl: i,
          github: o,
          longDescription: s,
        }) => {
          const [u, c] = (0, e.useState)(!1),
            d = l.map((n, r) =>
              "Bubble.io" === n
                ? e.createElement(
                    "div",
                    { key: r, className: "text-sm text-gray-600" },
                    n
                  )
                : e.createElement(
                    "div",
                    { key: r, className: "w-[27px] h-[27px]" },
                    e.createElement("img", {
                      className: "block w-full h-full",
                      src: t(891)(`./${n}.png`).default,
                      alt: n,
                    })
                  )
            );
          return e.createElement(
            "div",
            { className: "gap-2 rounded-lg shadow bg-white p-5 sm:p-7" },
            e.createElement(
              "div",
              { className: "flex flex-col xl:flex-row w-full gap-4" },
              e.createElement("div", {
                className:
                  "w-full xl:min-w-[300px] xl:w-[300px] h-[300px] bg-cover rounded-md bg-center",
                style: { backgroundImage: `url(${t(220)(`./${a}`).default})` },
              }),
              e.createElement(
                "div",
                { className: "flex flex-col w-full py-2" },
                e.createElement(
                  "div",
                  { className: "text-2xl font-bold text-gray-600 mb-5" },
                  n
                ),
                e.createElement(
                  "div",
                  {
                    className:
                      "h-full flex flex-col gap-8 xl:gap-1 justify-between",
                  },
                  e.createElement("div", {
                    dangerouslySetInnerHTML: { __html: r },
                    className: "text-gray-600 text-sm",
                  }),
                  e.createElement(
                    "div",
                    { className: "flex flex-col items-start gap-3" },
                    e.createElement(
                      "span",
                      { className: "text-gray-400 text-sm font-bold" },
                      "technologies"
                    ),
                    e.createElement("div", { className: "flex gap-3" }, d)
                  ),
                  e.createElement(
                    "div",
                    {
                      className:
                        "flex flex-col sm:flex-row w-full justify-between gap-8 sm:gap-0",
                    },
                    e.createElement(
                      "div",
                      {
                        className:
                          "flex flex-row gap-5 w-full sm:w-fit justify-between",
                      },
                      e.createElement(
                        "a",
                        {
                          target: "_blank",
                          href: i,
                          className:
                            "flex gap-1 border-b-2 pb-1 border-gray-400",
                        },
                        e.createElement(j, { width: 16, height: 16 }),
                        e.createElement(
                          "span",
                          {
                            className:
                              "text-gray-500 text-sm font-bold underline-offset-1",
                          },
                          o ? "view project" : "view website"
                        )
                      ),
                      o &&
                        e.createElement(
                          "a",
                          {
                            target: "_blank",
                            href: o,
                            className:
                              "flex gap-1 border-b-2 pb-1 border-gray-400",
                          },
                          e.createElement(N, {
                            className: "stroke-gray-500",
                            width: 16,
                            height: 16,
                          }),
                          e.createElement(
                            "span",
                            {
                              className:
                                "text-gray-500 text-sm font-bold underline-offset-1",
                            },
                            "view github"
                          )
                        )
                    ),
                    e.createElement(
                      "div",
                      {
                        onClick: () => {
                          c(!u);
                        },
                        className:
                          "flex flex-row gap-5 cursor-pointer xl:mr-5 w-full sm:w-fit justify-between",
                      },
                      e.createElement(
                        "span",
                        { className: "text-sm text-gray-500 font-bold" },
                        u ? "hide details" : "view details"
                      ),
                      e.createElement(y, {
                        className:
                          (u ? "rotate-180" : "rotate-0") + " cursor-pointer",
                        width: 16,
                        height: 16,
                      })
                    )
                  )
                )
              )
            ),
            u && e.createElement(H, { longDescription: s })
          );
        },
        V = [
          {
            image: "goodcarbon.png",
            title: "Digital investment and trading platform",
            description:
              "During my latest role as a junior frontend developer, I had the opportunity to work on an exciting MVP project. Our team was tasked with building a digital investment and trading platform for nature-based climate solutions and trading of carbon credits. The goal of the project was to create a marketplace solution and full checkout flow. To bring this project to life, we utilized a combination of modern technologies. The frontend of the platform was built using <b>React</b>, <b>TypeScript,</b> and <b>Tailwind CSS.</b>",
            longDescription:
              '<p>By focusing on the frontend development aspects of the marketplace, the team created user-friendly interface for users to explore projects of four different financial products, view project details, and make investments. The technical implementation involved dynamic rendering, interactive user interface design, investment workflow, state management, responsive design, and data synchronization between the frontend and backend components of the platform.</p>\n    <br/>\n    <br/>\n    Features:\n    <br/>\n    <ul style="list-style-type: disc; padding-left: 20px;">\n    <li><b>Marketplace Solution for Multiple Financial Products: </b>This feature required fetching projects data from the backend API and mapping them to the appropriate UI components. The project cards were generated dynamically, allowing for scalability and reusability as new different projects were added to the platform.</li>\n    <li><b>Secure Registration and Login Authentication: </b>To ensure the highest level of security, this feature was built as a separate microfrontend dedicated only to authentication. The advantages of having authentication as a separate microfrontend is that this modularity allowed for independent development and deployment of the authentication microfrontend. Furthermore, it provides reusability, as the same authentication microfrontend could potentially be used in other projects or integrated into different parts of the platform.</li>\n    <li><b>Utilized Components from a Custom Published UI Library: </b>By using a custom UI library, the project can ensure a consistent and cohesive design throughout the platform as the library provides pre-designed and pre-styled components that follow a unified visual language. It also ensures consistent code and structure across the application.</li>\n    <li><b>User-Friendly Checkout Flow: </b>The frontend development for this feature included state management libraries like Redux Persist, to manage the application\'s state. This ensured that data related to the marketplace, project details, and user investments remained synchronized across different components.</li>\n    </ul>\n    <br/>\n    <br/>\n    Challenges and Solutions:\n    <br/>\n    <ul style="list-style-type: disc; padding-left: 20px;">\n    <li><b>Microfrontend Independence and Data Sharing: </b>The project consisted of four distinct microfrontends that faced limitations in running entirely independently due to the need for data sharing. To address this, we implemented Storybook with mock data replicated from the real backend response for each component and structured them within templates. This approach allowed us to view and interact with the components, as well as complete pages with all the features, regardless of the backend response.</li>\n    </ul>\n    <br/>\n    <br/>\n    <p>Working on this project I not only gained valuable technical learnings but also upgraded my skills in React by working on more complex frontend challenges. The project provided me with experience in working with a microfrontend architecture. As a result, I became proficient in building reusable and modular components, streamlining development processes, and ensuring a consistent user experience across the platform.\n    Integrating with backend APIs and effectively managing data retrieval and synchronization allowed me to deepen my knowledge in these areas. I utilized libraries such as Axios for API communication and state management techniques like Redux and Redux Persist to efficiently manage and share data between components.\n    Working extensively with TypeScript, I gained a strong understanding of TypeScript\'s type system, enabling me to catch potential errors during development and improve the overall quality of the codebase.</p>',
            resources: ["react", "typescript", "tailwind"],
            projectUrl: "https://goodcarbon.earth/",
            github: "",
          },
          {
            image: "resourceya-preview.png",
            title: "Education platform",
            description:
              "As a fresh frontend developer, I landed on this project through my first job as a frontend developer. The project involved building a marketplace platform allowed teachers to exchange and sell their educational resources. The platform was built using the no-code tool Bubble.io, overcoming design limitations with blended custom JavaScript and CSS code to achieve the desired aesthetics and responsiveness.",
            longDescription:
              "<p>The objective of the project was to create a user-friendly and efficient marketplace platform where teachers could easily exchange and sell educational resources. The platform needed to handle various user interactions, provide seamless payment processing, ensure data security, and deliver a visually appealing user interface.</p>\n    <br/>\n    <br/>\n    Features:\n    <br/>\n    <ul style=\"list-style-type: disc; padding-left: 20px;\">\n    <li><b>User Registration and Authentication: </b>A seamless and secure registration process that allows teachers to create accounts using their LinkedIn or Google credentials or by providing their email.</li>\n    <li><b>Material Upload and Management: </b>Teachers are able to easily upload their educational resources, including documents, presentations, worksheets, and more. The platform provides efficient management features, allowing teachers to edit, delete, save drafts, and publish their resources.</li>\n    <li><b>Advanced Search and Filtering: </b>A powerful search engine that allows users to find relevant resources based on specific criteria, such as grade level, subject, price, format, and resource type. The platform provides an intuitive and user-friendly filtering system to refine search results.</li>\n    <li><b>Reviews and Ratings: </b>Teachers are able to receive feedback from buyers through a review and rating system.</li>\n    <li><b>Payment Processing: </b>Integration with a secure and reliable payment gateway to facilitate transactions between buyers and sellers.</li>\n    <li><b>User and Admin Dashboards: </b>Personalized dashboards for teachers to manage their uploaded resources, track sales and payments, view reviews and ratings, and monitor their overall activity on the platform and administrative dashboard that empowers platform administrators to manage user accounts.</li>\n    <li><b>Social Features: </b>The ability for users to follow other teachers' profiles, fostering a sense of community and facilitating collaboration and knowledge-sharing among educators.</li>\n    </ul>\n    <br/>\n    <br/>\n    Challenges and Solutions:\n    <br/>\n    <ul style=\"list-style-type: disc; padding-left: 20px;\">\n    <li><b>Database Limitations for Storing resources: </b>Although bubble.io has an integrated cloudfront based database, its capacity can be very low for handling such a large amount of resources. To overcome these limitations we integrated a cloud storage service called Wasabi. This allowed us to securely store the educational resources uploaded by teachers and ensured that the platform could handle a large volume of files without any database capacity issues.</li>\n    <li><b>Customization of UI Elements: </b>Bubble.io has predefined UI elements, which sometimes didn't align with the UI design requirements. To address this challenge, we utilized custom JavaScript and CSS code through the API Connector feature. This allowed us to implement the desired styling and make the UI elements match the specifications provided by the UI/UX designer.</li>\n    <li><b>Responsive Design Limitations: </b>Bubble.io had limited options for responsive design, making it challenging to achieve a fully responsive user interface. However, we later leveraged Bubble's new responsive engine, which introduced more advanced features and capabilities.</li>\n    <li><b>Integration of External Services: </b>Integrating external services like Algolia for the search engine and Wasabi for cloud storage posed some challenges. However, we made use of Bubble.io's API Connector feature, which allowed us to connect and communicate with external services seamlessly. By utilizing this feature, we successfully integrated Algolia for advanced search functionality.</li>\n    </ul>\n    <br/>\n    <br/>\n    <p>Throughout this project, I gained invaluable insights and learnings as a frontend developer. Firstly, I discovered the importance of finding creative solutions when faced with limitations. I learned the power of customization through the utilization of custom JavaScript and CSS code, enabling me to align UI elements with the desired design specifications. The experience of working with Bubble.io's responsive engine taught me the significance of staying updated on new features and improvements to ensure optimal user experiences across devices. Integrating external services like Algolia reinforced the importance of using APIs to expand functionality. Overall, this project equipped me with a range of technical skills and problem-solving abilities, empowering me to build robust and user-friendly marketplace platforms in the future.\n    </p>\n    ",
            resources: ["Bubble.io"],
            projectUrl: "https://resourceya.com/",
            github: "",
          },
          {
            image: "coin-tracker-preview.png",
            title: "Coin Tracker",
            description:
              "The Coin Tracker is a native application developed as a graduation project for an academy for frontend development. It aims to provide users with a simple and intuitive interface to track their monthly incomes and expenses, organized by categories. It is build using <b>React</b> and <b>Material Ui</b>. Although it does not include backend connectivity or user authentication, it does enforce basic form validation using the Formik library",
            longDescription:
              '<p>The application provides users with an overview of their total incomes, total expenses, and detailed information about each individual income or expense. The primary objective of the Coin Tracker application is to help users effectively manage their finances by providing a convenient and user-friendly interface for tracking their monthly incomes and expenses. By offering the ability to categorize transactions and set a budget, users can gain insights into their spending patterns and make rational financial decisions.</p> \n    <br/>\n    <br/>\n    Features:\n    <br/>\n    <ul style="list-style-type: disc; padding-left: 20px;">\n    <li><b>Users Login: </b>Users can log in to the application by providing their email and password. Basic form validation ensures that the fields are not empty, and the email format is correct. User authentication and backend connectivity are not implemented in this version.</li>\n    <li><b>Dashboard Overview: </b>The dashboard presents a summary of users total incomes and total expenses for the current month. Users can see a clear visualization of their financial situation at a glance.</li>\n    <li><b>Categories Management: </b>Users can add, edit, and delete custom categories to organize their incomes and expenses effectively.</li>\n    <li><b>Responsive design: </b>Since this is a native application, the responsive design was very important part of implementation. Thanks to the ready components of the <b>Material Ui</b> framework, the application was able to achieve a visually appealing and consistent UI across different devices and screen sizes.</li>\n    </ul>\n    <br/>\n    <br/>\n    Technologies Used:\n    <br/>\n    <ul style="list-style-type: disc; padding-left: 20px;">\n    <li><b>React: </b>A JavaScript library for building user interfaces.</li>\n    <li><b>Material UI:</b>UI component library for React that implements Google\'s Material Design principles.</li>\n    </ul>\n    <br/>\n    <br/>\n    Challenges and Solutions:\n    <br/>\n    <ul style="list-style-type: disc; padding-left: 20px;">\n    <li><b>Simpple User Authentication: </b> Implementing user authentication system while ensuring a smooth user experience. Integrated Firebase Authentication to handle simple user registration, login, and change password. This allowed for secure and straightforward user authentication without the need for complex backend logic.</li>\n    <li><b>Data Management and Synchronization: </b> Designing a data structure that efficiently manages todo items. Leveraged Firebase Realtime Database to store and retrieve todo data. The real-time database updates ensured that any changes made to todos were instantly reflected across connected clients.</li>\n    </ul>\n    <br/>\n    <br/>\n   <p>Working on the Coin Tracker project as a fresh frontend developer was a valuable experience that provided the opportunity to enhance proficiency in React, and Material UI. Through building the user interface components using React, I gained a deep understanding of component-based architecture and efficient state management and I had a chance to use my practical skills that I learned at the academy.</p>',
            resources: ["html", "css", "mui", "react", "javascript"],
            projectUrl: "https://cointrackerproject.netlify.app/#/",
            github: "https://github.com/IrenaKar/Coin-tracker",
          },
          {
            image: "notes-preview.png",
            title: "To do List",
            description:
              "I embarked on this project with a goal to create a todo application using React and JavaScript, where I wanted to empower users with the ability to create personalized profiles, log in, manage their todo lists, and perform essential operations such as adding, editing, deleting, and marking todos as complete. To elevate the functionality for such data managment, I decided to integrate a dynamic backend using <b>Firebase,</b> a no-code backend tool.",
            longDescription:
              '<p>The objective of this project was to develop a user-friendly and dynamic todo application that allows users to create profiles, log in, manage their todo lists, and perform operations such as adding, editing, deleting, and marking todos as complete. As a junior frontend developer with limited experience and knowledge in backend technologies, I made the strategic decision to utilize Firebase as the backend solution for this project. Firebase, being a no-code tool, allowed me to overcome the challenges of working with traditional backend technologies by providing a user-friendly and simplified approach to managing the application\'s data and user authentication.</p>\n    <br/>\n    <br/>\n    Features:\n    <br/>\n    <ul style="list-style-type: disc; padding-left: 20px;">\n    <li><b>User authentication: </b> Users can create an account, log in, and access their own todo lists.</li>\n    <li><b>Todo management: </b> Users can create new todos, edit existing ones, delete todos, and mark them as complete.</li>\n    <li><b>Real-time updates: </b> Any changes made to the todos are instantly synced, ensuring a seamless user experience</li>\n    <li><b>Responsive design: </b> The application is designed to be responsive and accessible on various devices, including desktops, tablets, and mobile phones.</li>\n    </ul>\n    <br/>\n    <br/>\n    Technologies Used:\n    <br/>\n    <ul style="list-style-type: disc; padding-left: 20px;">\n    <li><b>React: </b> A JavaScript library for building user interfaces.</li>\n    <li><b>JavaScript: </b> The programming language used for frontend logic and interactivity.</li>\n    <li><b>Firebase: </b> A no-code backend tool providing real-time database and user authentication services.</li>\n    <li><b>HTML</b> and <b>CSS: </b> Markup and styling languages for structuring and presenting the application\'s user interface.</li>\n    </ul>\n    <br/>\n    <br/>\n    Challenges and Solutions:\n    <br/>\n    <ul style="list-style-type: disc; padding-left: 20px;">\n    <li><b>Simpple User Authentication: </b> Implementing user authentication system while ensuring a smooth user experience. Integrated Firebase Authentication to handle simple user registration, login, and change password. This allowed for secure and straightforward user authentication without the need for complex backend logic.</li>\n    <li><b>Data Management and Synchronization: </b> Designing a data structure that efficiently manages todo items. Leveraged Firebase Realtime Database to store and retrieve todo data. The real-time database updates ensured that any changes made to todos were instantly reflected across connected clients.</li>\n    </ul>\n    <br/>\n    <br/>\n   <p>Building a dynamic todo application using <b>React, JavaScript,</b> and <b>Firebase</b> as the backend was an exciting and valuable learning experience for me as a junior frontend developer. The successful integration of Firebase provided real-time data synchronization and user authentication, enhancing the functionality and usability of the application. Working on this project improved my skills in React and my understanding how data structure works and what it takes for simple authentication and data management applications.</p>\n      ',
            resources: ["html", "css", "javascript", "react", "firebase"],
            projectUrl:
              "https://6317089d6702a72ca289df82--mypersonalnotesmanager.netlify.app/",
            github: "https://github.com/IrenaKar/notes",
          },
          {
            image: "race-preview.png",
            title: "Car racing game",
            description:
              "The Car Racing Project is a challenge project undertaken at an academy for frontend development developed using jQuery and Bootstrap. The core functionality of the racing game involves generating random numbers for each car using JavaScript's Math.random() function. By comparing these numbers, the winner will be determined based on which car reaches the goal first, establishing the ultimate victory.",
            longDescription:
              '<br/>\n    <br/>\n    Features:\n    <br/>\n    <ul style="list-style-type: disc; padding-left: 20px;">\n    <li><b>User Interface: </b>The project required designing an intuitive user interface that displays the racing track, cars, buttons, and relevant information. By using the Bootstrap framework, I utilized it to provide a clean and visually appealing design.</li>\n    <li><b>Random Number Generation: </b>Utilizing the Math.random() function to generate random numbers for both cars ensures an element of chance in determining the race outcome.</li>\n    <li><b>Race Outcome Calculation: </b>Comparing the randomly generated numbers for the cars allows determining which car reaches the goal first and declaring the winner accordingly.</li>\n    <li><b>Local Storage: </b>Implementing local storage allows recording and persisting the results from previous games, enabling players to track their progress.</li>\n    </ul>\n    Technologies Used:\n    <br/>\n    <ul style="list-style-type: disc; padding-left: 20px;">\n    <li><b>HTML: </b>The project\'s structure and layout are built using HTML, defining the elements and their placement.</li>\n    <li><b>Bootstrap:</b>The Bootstrap framework is employed for its responsive grid system, pre-styled components, and utility classes, simplifying the styling process and ensuring a consistent and responsive design.</li>\n    <li><b>jQuery:</b>jQuery, a JavaScript library, is used to simplify DOM manipulation, handle events, and facilitate smooth animations in the project.</li>\n    </ul>\n    <br/>\n    <br/>\n    Challenges and Solutions:\n    <br/>\n    <ul style="list-style-type: disc; padding-left: 20px;">\n    <li><b>Animation and Car Movement: </b> Implementing smooth animation to simulate the movement of cars along the racing track can be challenging. In jQuery it was very straightforward to achieve it with using animate method.</li>\n    </ul>\n    ',
            resources: ["html", "css", "bootstrap", "jquery"],
            projectUrl:
              "https://60f9c8d475e5b73f1ab9af4e--nervous-goldberg-4a1b9b.netlify.app/",
            github: "https://github.com/IrenaKar/Racing-car",
          },
        ],
        W = () =>
          e.createElement(
            h,
            {
              id: "projects",
              className:
                "flex flex-col items-center justify-center bg-gray-100",
            },
            e.createElement(
              e.Fragment,
              null,
              e.createElement(
                "div",
                {
                  className:
                    "text-4xl font-bold text-gray-400 mr-auto mb-[60px]",
                },
                "projects"
              ),
              e.createElement(
                "div",
                { className: "flex flex-col w-full gap-10 mr-auto" },
                V.map((n, t) =>
                  e.createElement($, {
                    key: t,
                    longDescription: n.longDescription,
                    title: n.title,
                    description: n.description,
                    image: n.image,
                    resources: n.resources,
                    projectUrl: n.projectUrl,
                    github: n.github,
                  })
                )
              )
            )
          ),
        Q = () => {
          const n = (0, e.useRef)(null);
          return e.createElement(
            h,
            {
              id: "contact",
              className:
                "flex flex-col sm:flex-row gap-10 md:gap-5 items-center sm:mb-20",
            },
            e.createElement(
              e.Fragment,
              null,
              e.createElement(
                "div",
                {
                  className:
                    "text-gray-600 mr-auto sm:w-[50%] lg:w-[40%] flex flex-col sm:gap-5",
                },
                e.createElement(
                  "div",
                  {
                    className:
                      "text-2xl lg:text-3xl xl:text-4xl leading-snug mb-5",
                  },
                  e.createElement(
                    "span",
                    { className: "font-bold" },
                    "I am super excited to talk in details about my projects"
                  ),
                  e.createElement(
                    "span",
                    { className: "block" },
                    "and share my experience with you!"
                  )
                ),
                e.createElement(
                  "div",
                  { className: "text-sm" },
                  " Write me a message in order to arrange a meeting or find me on my ",
                  e.createElement(
                    "a",
                    { className: "font-bold", href: A.linkedIn },
                    "LinkedIn"
                  ),
                  e.createElement("span", { className: "ml-1" }, "profile.")
                )
              ),
              e.createElement(
                "form",
                {
                  className: "flex flex-col w-full sm:w-[50%] gap-3",
                  ref: n,
                  onSubmit: (e) =>
                    ((e, n) => {
                      e.preventDefault(),
                        u(
                          "service_tswo7ex",
                          "template_y9vc7bj",
                          n.current,
                          "TqqbocdrCkBv16ZzO"
                        ).then(
                          (e) => {
                            console.log(e.text);
                          },
                          (e) => {
                            console.log(e.text);
                          }
                        ),
                        e.target instanceof HTMLFormElement && e.target.reset();
                    })(e, n),
                },
                e.createElement(
                  "div",
                  { className: "flex flex-col gap-1" },
                  e.createElement(
                    "label",
                    { className: "text-gray-600 text-sm" },
                    "Subject"
                  ),
                  e.createElement("input", {
                    placeholder: "Write your subject",
                    className:
                      "py-1 outline-gray-300 text-sm bg-gray-200 p-2 text-gray-400 h-[40px] rounded",
                    type: "text",
                    name: "subject",
                    required: !0,
                  })
                ),
                e.createElement(
                  "div",
                  { className: "flex flex-col gap-1" },
                  e.createElement(
                    "label",
                    { className: "text-gray-600 text-sm" },
                    "Message"
                  ),
                  e.createElement("textarea", {
                    placeholder: "Write your message",
                    className:
                      "outline-gray-300 text-sm bg-gray-200 p-2 text-gray-400",
                    name: "message",
                    rows: 4,
                    cols: 50,
                    required: !0,
                  })
                ),
                e.createElement(
                  "div",
                  { className: "flex flex-row items-end gap-5" },
                  e.createElement(
                    "div",
                    { className: "flex flex-col gap-1 w-[70%]" },
                    e.createElement(
                      "label",
                      { className: "text-gray-600 text-sm" },
                      "Email"
                    ),
                    e.createElement("input", {
                      placeholder: "Write your email address",
                      className:
                        "py-1 outline-gray-300 text-sm bg-gray-200 p-2 text-gray-400 h-[40px] rounded",
                      type: "email",
                      name: "email",
                      required: !0,
                    })
                  ),
                  e.createElement(
                    "div",
                    { className: "w-[30%]" },
                    e.createElement("input", {
                      className:
                        "bg-orange-600 hover:bg-orange-700 cursor-pointer text-stone-100 py-1 w-full h-[40px] rounded",
                      type: "submit",
                      value: "Send",
                      required: !0,
                    })
                  )
                )
              )
            )
          );
        };
      var q = t(379),
        K = t.n(q),
        Y = t(795),
        X = t.n(Y),
        J = t(569),
        Z = t.n(J),
        G = t(565),
        ee = t.n(G),
        ne = t(216),
        te = t.n(ne),
        re = t(589),
        ae = t.n(re),
        le = t(113),
        ie = {};
      (ie.styleTagTransform = ae()),
        (ie.setAttributes = ee()),
        (ie.insert = Z().bind(null, "head")),
        (ie.domAPI = X()),
        (ie.insertStyleElement = te());
      K()(le.Z, ie);
      le.Z && le.Z.locals && le.Z.locals;
      const oe = () => {
          const n = (0, e.useRef)(null);
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(p, null),
            e.createElement(U, { sectionRef: n }),
            e.createElement(B, { sectionRef: n }),
            e.createElement(g, null),
            e.createElement(W, null),
            e.createElement(Q, null)
          );
        },
        se = document.getElementById("app-root");
      (0, n.s)(se).render(e.createElement(oe, null));
    })();
})();
