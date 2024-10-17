(() => {
  "use strict";
  var e = (function () {
    function e() {
      (this.highlightClass = "upez-highlight"),
        (this.builderStateKey = null),
        (this.builderStateObserver = null),
        console.log("HoverEffect constructor called"),
        this.addHighlightStyle();
    }
    return (
      (e.prototype.addHighlightStyle = function () {
        console.log("Adding highlight style");
        var e = document.createElement("style");
        (e.textContent = "\n      .".concat(
          this.highlightClass,
          " {\n        outline: 5px solid red !important;\n        background-color:  !important;\n        transition: all 0.3s ease-in-out;\n        position: relative;\n        z-index: 9999;\n      }\n    "
        )),
          document.head.appendChild(e),
          console.log("Highlight style added");
      }),
      (e.prototype.getTemplateSettings = function () {
        var e, t, n;
        return (
          (this.builderStateKey &&
            window.builderState &&
            (null ===
              (n =
                null ===
                  (t =
                    null === (e = window.builderState[this.builderStateKey]) ||
                    void 0 === e
                      ? void 0
                      : e[0]) || void 0 === t
                  ? void 0
                  : t.data) || void 0 === n
              ? void 0
              : n.settings)) ||
          []
        );
      }),
      (e.prototype.findSettingByValue = function (e) {
        var t = this.getTemplateSettings();
        return (
          console.log("Searching for setting with value:", e),
          console.log("Available settings:", t),
          t.find(function (t) {
            var n = String(t.value) === e || String(t.default) === e;
            return n && console.log("Matched setting:", t), n;
          })
        );
      }),
      (e.prototype.addHoverListeners = function () {
        var e = this;
        console.log("Adding hover listeners"),
          document.body.addEventListener("mouseover", function (t) {
            var n = t.target;
            console.log("Mouseover event on:", n.tagName, n.textContent);
            var o = e.findSettingForElement(n);
            n.classList.add(e.highlightClass),
              o
                ? console.log("Template Setting found:", o)
                : console.log("No template setting found for this element");
          }),
          document.body.addEventListener("mouseout", function (t) {
            t.target.classList.remove(e.highlightClass);
          }),
          console.log("Hover listeners added");
      }),
      (e.prototype.findSettingForElement = function (e) {
        var t,
          n = null === (t = e.textContent) || void 0 === t ? void 0 : t.trim();
        if ((console.log("Searching for setting with text:", n), n))
          return this.findSettingByValue(n);
      }),
      (e.prototype.init = function () {
        return (
          (e = this),
          (t = void 0),
          (o = function () {
            var e;
            return (function (e, t) {
              var n,
                o,
                i,
                r = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                },
                l = Object.create(
                  ("function" == typeof Iterator ? Iterator : Object).prototype
                );
              return (
                (l.next = a(0)),
                (l.throw = a(1)),
                (l.return = a(2)),
                "function" == typeof Symbol &&
                  (l[Symbol.iterator] = function () {
                    return this;
                  }),
                l
              );
              function a(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; l && ((l = 0), a[0] && (r = 0)), r; )
                      try {
                        if (
                          ((n = 1),
                          o &&
                            (i =
                              2 & a[0]
                                ? o.return
                                : a[0]
                                ? o.throw || ((i = o.return) && i.call(o), 0)
                                : o.next) &&
                            !(i = i.call(o, a[1])).done)
                        )
                          return i;
                        switch (
                          ((o = 0), i && (a = [2 & a[0], i.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            i = a;
                            break;
                          case 4:
                            return r.label++, { value: a[1], done: !1 };
                          case 5:
                            r.label++, (o = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = r.ops.pop()), r.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = r.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              r = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!i || (a[1] > i[0] && a[1] < i[3]))
                            ) {
                              r.label = a[1];
                              break;
                            }
                            if (6 === a[0] && r.label < i[1]) {
                              (r.label = i[1]), (i = a);
                              break;
                            }
                            if (i && r.label < i[2]) {
                              (r.label = i[2]), r.ops.push(a);
                              break;
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue;
                        }
                        a = t.call(e, r);
                      } catch (e) {
                        (a = [6, e]), (o = 0);
                      } finally {
                        n = i = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            })(this, function (t) {
              switch (t.label) {
                case 0:
                  console.log("HoverEffect init started"), (t.label = 1);
                case 1:
                  return (
                    t.trys.push([1, 3, 4, 5]), [4, this.waitForBuilderState()]
                  );
                case 2:
                  return (
                    t.sent(),
                    this.addHoverListeners(),
                    console.log("Hover effect initialized"),
                    [3, 5]
                  );
                case 3:
                  return (
                    (e = t.sent()),
                    console.error("Error in init method:", e),
                    [3, 5]
                  );
                case 4:
                  return (
                    this.builderStateObserver &&
                      this.builderStateObserver.disconnect(),
                    [7]
                  );
                case 5:
                  return [2];
              }
            });
          }),
          new ((n = void 0) || (n = Promise))(function (i, r) {
            function l(e) {
              try {
                s(o.next(e));
              } catch (e) {
                r(e);
              }
            }
            function a(e) {
              try {
                s(o.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(l, a);
            }
            s((o = o.apply(e, t || [])).next());
          })
        );
        var e, t, n, o;
      }),
      (e.prototype.waitForBuilderState = function () {
        var e = this;
        return new Promise(function (t) {
          window.builderState && Object.keys(window.builderState).length > 0
            ? (e.initBuilderStateKey(), t())
            : ((e.builderStateObserver = new MutationObserver(function () {
                window.builderState &&
                  Object.keys(window.builderState).length > 0 &&
                  (e.initBuilderStateKey(),
                  t(),
                  e.builderStateObserver.disconnect());
              })),
              e.builderStateObserver.observe(document, {
                attributes: !0,
                childList: !0,
                subtree: !0,
              }),
              setTimeout(function () {
                console.warn(
                  "builderState not set after 10 seconds, continuing initialization"
                ),
                  t();
              }, 1e4));
        });
      }),
      (e.prototype.initBuilderStateKey = function () {
        if (window.builderState) {
          var e = Object.keys(window.builderState);
          e.length > 0
            ? ((this.builderStateKey = e[0]),
              console.log("builderStateKey initialized:", this.builderStateKey))
            : console.warn("builderState is empty");
        } else console.warn("builderState is not defined");
      }),
      e
    );
  })();
  function t() {
    try {
      console.log("Attempting to create HoverEffect instance");
      var t = new e();
      console.log("HoverEffect instance created successfully"),
        console.log("Calling init method"),
        t
          .init()
          .then(function () {
            console.log("HoverEffect initialized successfully"),
              console.log(
                "You can now hover over the elements to see the effect"
              );
          })
          .catch(function (e) {
            console.error("Error initializing HoverEffect:", e);
          });
    } catch (e) {
      console.error("Error creating HoverEffect instance:", e);
    }
  }
  console.log("Script started"),
    "complete" === document.readyState
      ? t()
      : window.addEventListener("load", t),
    console.log("Script ended");
})();
