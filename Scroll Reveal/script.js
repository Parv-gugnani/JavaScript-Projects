!(function (e, n) {
  "function" == typeof define && define.amd
    ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n)
    : "object" == typeof exports
    ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax))
    : n(
        e.ScrollMagic || (e.jQuery && e.jQuery.ScrollMagic),
        e.TweenMax || e.TweenLite,
        e.TimelineMax || e.TimelineLite
      );
})(this, function (e, n, o) {
  "use strict";
  var t = window.console || {},
    r = Function.prototype.bind.call(t.error || t.log || function () {}, t);
  e ||
    r(
      "(animation.gsap) -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."
    ),
    n ||
      r(
        "(animation.gsap) -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."
      ),
    e.Scene.addOption("tweenChanges", !1, function (e) {
      return !!e;
    }),
    e.Scene.extend(function () {
      var e,
        t = this,
        r = function () {
          t._log &&
            (Array.prototype.splice.call(
              arguments,
              1,
              0,
              "(animation.gsap)",
              "->"
            ),
            t._log.apply(this, arguments));
        };
      t.on("progress.plugin_gsap", function () {
        i();
      }),
        t.on("destroy.plugin_gsap", function (e) {
          t.removeTween(e.reset);
        });
      var i = function () {
        if (e) {
          var n = t.progress(),
            o = t.state();
          e.repeat && -1 === e.repeat()
            ? "DURING" === o && e.paused()
              ? e.play()
              : "DURING" === o || e.paused() || e.pause()
            : n != e.progress() &&
              (0 === t.duration()
                ? n > 0
                  ? e.play()
                  : e.reverse()
                : t.tweenChanges() && e.tweenTo
                ? e.tweenTo(n * e.duration())
                : e.progress(n).pause());
        }
      };
      (t.setTween = function (a, s, l) {
        var c;
        arguments.length > 1 &&
          (arguments.length < 3 && ((l = s), (s = 1)), (a = n.to(a, s, l)));
        try {
          (c = o ? new o({ smoothChildTiming: !0 }).add(a) : a).pause();
        } catch (e) {
          return (
            r(
              1,
              "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"
            ),
            t
          );
        }
        if (
          (e && t.removeTween(),
          (e = c),
          a.repeat && -1 === a.repeat() && (e.repeat(-1), e.yoyo(a.yoyo())),
          t.tweenChanges() &&
            !e.tweenTo &&
            r(
              2,
              "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."
            ),
          e && t.controller() && t.triggerElement() && t.loglevel() >= 2)
        ) {
          var u = n.getTweensOf(t.triggerElement()),
            p = t.controller().info("vertical");
          u.forEach(function (e, n) {
            var o = e.vars.css || e.vars;
            if (
              p
                ? void 0 !== o.top || void 0 !== o.bottom
                : void 0 !== o.left || void 0 !== o.right
            )
              return (
                r(
                  2,
                  "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"
                ),
                !1
              );
          });
        }
        if (parseFloat(TweenLite.version) >= 1.14)
          for (
            var g,
              d,
              f = e.getChildren ? e.getChildren(!0, !0, !1) : [e],
              w = function () {
                r(
                  2,
                  "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another"
                );
              },
              h = 0;
            h < f.length;
            h++
          )
            (g = f[h]),
              d !== w &&
                ((d = g.vars.onOverwrite),
                (g.vars.onOverwrite = function () {
                  d && d.apply(this, arguments), w.apply(this, arguments);
                }));
        return r(3, "added tween"), i(), t;
      }),
        (t.removeTween = function (n) {
          return (
            e &&
              (n && e.progress(0).pause(),
              e.kill(),
              (e = void 0),
              r(3, "removed tween (reset: " + (n ? "true" : "false") + ")")),
            t
          );
        });
    });
});

var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector(".scroll-container"),
  ease: 0.09, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true,
});

window.addEventListener("load", onLoad);

function onLoad() {
  updateScroller();
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll);
}

function updateScroller() {
  var resized = scroller.resizeRequest > 0;

  if (resized) {
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }

  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }

  TweenLite.set(scroller.target, {
    y: -scroller.y,
  });

  requestId =
    scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

const controller = new ScrollMagic.Controller();

var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

var myNodeList = document.querySelectorAll(".img-loader");

forEach(myNodeList, function (index, value) {
  const tween = TweenMax.to(value, 2, {
    borderTopLeftRadius: "100%",
    borderTopRightRadius: "100%",
    delay: 0.3,
    height: 0,
    ease: Power2.easeOut,
  });

  const itemScene = new ScrollMagic.Scene({
    triggerElement: value,
    triggerHook: 0.6,
    reverse: false,
  })
    .setTween(tween)
    .addTo(controller);
});
