jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
	},
	easeInQuad: function (x, t, b, c, d) {
		return c * (t /= d) * t + b
	},
	easeOutQuad: function (x, t, b, c, d) {
		return - c * (t /= d) * (t - 2) + b
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return - c / 2 * (--t * (t - 2) - 1) + b
	},
	easeInCubic: function (x, t, b, c, d) {
		return c * (t /= d) * t * t + b
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b
	},
	easeInQuart: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b
	},
	easeOutQuart: function (x, t, b, c, d) {
		return - c * ((t = t / d - 1) * t * t * t - 1) + b
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return - c / 2 * ((t -= 2) * t * t * t - 2) + b
	},
	easeInQuint: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
	},
	easeInSine: function (x, t, b, c, d) {
		return - c * Math.cos(t / d * (Math.PI / 2)) + c + b
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b
	},
	easeInOutSine: function (x, t, b, c, d) {
		return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
	},
	easeInExpo: function (x, t, b, c, d) {
		return t == 0 ? b: c * Math.pow(2, 10 * (t / d - 1)) + b
	},
	easeOutExpo: function (x, t, b, c, d) {
		return t == d ? b + c: c * ( - Math.pow(2, -10 * t / d) + 1) + b
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * ( - Math.pow(2, -10 * --t) + 2) + b
	},
	easeInCirc: function (x, t, b, c, d) {
		return - c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return - c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
	},
	easeInElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * 0.3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * 0.3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d / 2) == 2) return b + c;
		if (!p) p = d * 0.44999999999999996;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return - 0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t /= d) < 0.36363636363636365) return c * (7.5625 * t * t) + b;
		else if (t < 0.7272727272727273) return c * (7.5625 * (t -= 0.5454545454545454) * t + 0.75) + b;
		else if (t < 0.9090909090909091) return c * (7.5625 * (t -= 0.8181818181818182) * t + 0.9375) + b;
		else return c * (7.5625 * (t -= 0.9545454545454546) * t + 0.984375) + b
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
	}
});
(function ($) {
	var x = "2.65";
	if ($.support == undefined) $.support = {
		opacity: !$.browser.msie
	};
	function log() {
		if (window.console && window.console.log) window.console.log("[cycle] " + Array.prototype.join.call(arguments, " "))
	}
	$.fn.cycle = function (e, f) {
		var o = {
			s: this.selector,
			c: this.context
		};
		if (this.length == 0 && e != "stop") {
			if (!$.isReady && o.s) {
				log("DOM not ready, queuing slideshow");
				$(function () {
					$(o.s, o.c).cycle(e, f)
				});
				return this
			}
			log("terminating; zero elements found by selector" + ($.isReady ? "": " (DOM not ready)"));
			return this
		}
		return this.each(function () {
			e = handleArguments(this, e, f);
			if (e === false) return;
			if (this.cycleTimeout) clearTimeout(this.cycleTimeout);
			this.cycleTimeout = this.cyclePause = 0;
			var a = $(this);
			var b = e.slideExpr ? $(e.slideExpr, this) : a.children();
			var c = b.get();
			if (c.length < 2) {
				log("terminating; too few slides: " + c.length);
				return
			}
			var d = buildOptions(a, b, c, e, o);
			if (d === false) return;
			if (d.timeout || d.continuous) this.cycleTimeout = setTimeout(function () {
				go(c, d, 0, !d.rev)
			},
			d.continuous ? 10 : d.timeout + (d.delay || 0))
		})
	};
	function handleArguments(a, b, c) {
		if (a.cycleStop == undefined) a.cycleStop = 0;
		if (b === undefined || b === null) b = {};
		if (b.constructor == String) switch (b) {
		case "stop":
			a.cycleStop++;
			if (a.cycleTimeout) clearTimeout(a.cycleTimeout);
			a.cycleTimeout = 0;
			$(a).removeData("cycle.opts");
			return false;
		case "pause":
			a.cyclePause = 1;
			return false;
		case "resume":
			a.cyclePause = 0;
			if (c === true) {
				b = $(a).data("cycle.opts");
				if (!b) {
					log("options not found, can not resume");
					return false
				}
				if (a.cycleTimeout) {
					clearTimeout(a.cycleTimeout);
					a.cycleTimeout = 0
				}
				go(b.elements, b, 1, 1)
			}
			return false;
		default:
			b = {
				fx: b
			}
		} else if (b.constructor == Number) {
			var d = b;
			b = $(a).data("cycle.opts");
			if (!b) {
				log("options not found, can not advance slide");
				return false
			}
			if (d < 0 || d >= b.elements.length) {
				log("invalid slide index: " + d);
				return false
			}
			b.nextSlide = d;
			if (a.cycleTimeout) {
				clearTimeout(a.cycleTimeout);
				a.cycleTimeout = 0
			}
			if (typeof c == "string") b.oneTimeFx = c;
			go(b.elements, b, 1, d >= b.currSlide);
			return false
		}
		return b
	}
	function removeFilter(a, b) {
		if (!$.support.opacity && (b.cleartype && a.style.filter)) try {
			a.style.removeAttribute("filter")
		} catch(smother) {}
	}
	function buildOptions(f, g, j, k, o) {
		var l = $.extend({},
		$.fn.cycle.defaults, k || {},
		$.metadata ? f.metadata() : $.meta ? f.data() : {});
		if (l.autostop) l.countdown = l.autostopCount || j.length;
		var m = f[0];
		f.data("cycle.opts", l);
		l.$cont = f;
		l.stopCount = m.cycleStop;
		l.elements = j;
		l.before = l.before ? [l.before] : [];
		l.after = l.after ? [l.after] : [];
		l.after.unshift(function () {
			l.busy = 0
		});
		if (!$.support.opacity && l.cleartype) l.after.push(function () {
			removeFilter(this, l)
		});
		if (l.continuous) l.after.push(function () {
			go(j, l, 0, !l.rev)
		});
		saveOriginalOpts(l);
		if (!$.support.opacity && (l.cleartype && !l.cleartypeNoBg)) clearTypeFix(g);
		if (f.css("position") == "static") f.css("position", "relative");
		if (l.width) f.width(l.width);
		if (l.height && l.height != "auto") f.height(l.height);
		if (l.startingSlide) l.startingSlide = parseInt(l.startingSlide);
		if (l.random) {
			l.randomMap = [];
			for (var i = 0; i < j.length; i++) l.randomMap.push(i);
			l.randomMap.sort(function (a, b) {
				return Math.random() - 0.5
			});
			l.randomIndex = 0;
			l.startingSlide = l.randomMap[0]
		} else if (l.startingSlide >= j.length) l.startingSlide = 0;
		l.currSlide = l.startingSlide = l.startingSlide || 0;
		var n = l.startingSlide;
		g.css({
			position: "absolute",
			top: 0,
			left: 0
		}).hide().each(function (i) {
			var z = n ? i >= n ? j.length - (i - n) : n - i: j.length - i;
			$(this).css("z-index", z)
		});
		$(j[n]).css("opacity", 1).show();
		removeFilter(j[n], l);
		if (l.fit && l.width) g.width(l.width);
		if (l.fit && (l.height && l.height != "auto")) g.height(l.height);
		var p = l.containerResize && !f.innerHeight();
		if (p) {
			var q = 0,
			maxh = 0;
			for (var i = 0; i < j.length; i++) {
				var r = $(j[i]),
				e = r[0],
				w = r.outerWidth(),
				h = r.outerHeight();
				if (!w) w = e.offsetWidth;
				if (!h) h = e.offsetHeight;
				q = w > q ? w: q;
				maxh = h > maxh ? h: maxh
			}
			if (q > 0 && maxh > 0) f.css({
				width: q + "px",
				height: maxh + "px"
			})
		}
		if (l.pause) f.hover(function () {
			this.cyclePause++
		},
		function () {
			this.cyclePause--
		});
		if (supportMultiTransitions(l) === false) return false;
		if (!l.multiFx) {
			var s = $.fn.cycle.transitions[l.fx];
			if ($.isFunction(s)) s(f, g, l);
			else if (l.fx != "custom" && !l.multiFx) {
				log("unknown transition: " + l.fx, "; slideshow terminating");
				return false
			}
		}
		var t = false;
		k.requeueAttempts = k.requeueAttempts || 0;
		g.each(function () {
			var a = $(this);
			this.cycleH = l.fit && l.height ? l.height: a.height();
			this.cycleW = l.fit && l.width ? l.width: a.width();
			if (a.is("img")) {
				var b = $.browser.msie && (this.cycleW == 28 && (this.cycleH == 30 && !this.complete));
				var c = $.browser.opera && (this.cycleW == 42 && (this.cycleH == 19 && !this.complete));
				var d = this.cycleH == 0 && (this.cycleW == 0 && !this.complete);
				if (b || (c || d)) if (o.s && (l.requeueOnImageNotLoaded && ++k.requeueAttempts < 100)) {
					log(k.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH);
					setTimeout(function () {
						$(o.s, o.c).cycle(k)
					},
					l.requeueTimeout);
					t = true;
					return false
				} else log("could not determine size of image: " + this.src, this.cycleW, this.cycleH)
			}
			return true
		});
		if (t) return false;
		l.cssBefore = l.cssBefore || {};
		l.animIn = l.animIn || {};
		l.animOut = l.animOut || {};
		g.not(":eq(" + n + ")").css(l.cssBefore);
		if (l.cssFirst) $(g[n]).css(l.cssFirst);
		if (l.timeout) {
			l.timeout = parseInt(l.timeout);
			if (l.speed.constructor == String) l.speed = $.fx.speeds[l.speed] || parseInt(l.speed);
			if (!l.sync) l.speed = l.speed / 2;
			while (l.timeout - l.speed < 250) l.timeout += l.speed
		}
		if (l.easing) l.easeIn = l.easeOut = l.easing;
		if (!l.speedIn) l.speedIn = l.speed;
		if (!l.speedOut) l.speedOut = l.speed;
		l.slideCount = j.length;
		l.currSlide = l.lastSlide = n;
		if (l.random) {
			l.nextSlide = l.currSlide;
			if (++l.randomIndex == j.length) l.randomIndex = 0;
			l.nextSlide = l.randomMap[l.randomIndex]
		} else l.nextSlide = l.startingSlide >= j.length - 1 ? 0 : l.startingSlide + 1;
		var u = g[n];
		if (l.before.length) l.before[0].apply(u, [u, u, l, true]);
		if (l.after.length > 1) l.after[1].apply(u, [u, u, l, true]);
		if (l.next) $(l.next).click(function () {
			return advance(l, l.rev ? -1 : 1)
		});
		if (l.prev) $(l.prev).click(function () {
			return advance(l, l.rev ? 1 : -1)
		});
		if (l.pager) buildPager(j, l);
		exposeAddSlide(l, j);
		return l
	}
	function saveOriginalOpts(a) {
		a.original = {
			before: [],
			after: []
		};
		a.original.cssBefore = $.extend({},
		a.cssBefore);
		a.original.cssAfter = $.extend({},
		a.cssAfter);
		a.original.animIn = $.extend({},
		a.animIn);
		a.original.animOut = $.extend({},
		a.animOut);
		$.each(a.before, function () {
			a.original.before.push(this)
		});
		$.each(a.after, function () {
			a.original.after.push(this)
		})
	}
	function supportMultiTransitions(a) {
		var b = $.fn.cycle.transitions;
		if (a.fx.indexOf(",") > 0) {
			a.multiFx = true;
			a.fxs = a.fx.replace(/\s*/g, "").split(",");
			for (var i = 0; i < a.fxs.length; i++) {
				var c = a.fxs[i];
				var d = b[c];
				if (!d || (!b.hasOwnProperty(c) || !$.isFunction(d))) {
					log("discarding unknown transition: ", c);
					a.fxs.splice(i, 1);
					i--
				}
			}
			if (!a.fxs.length) {
				log("No valid transitions named; slideshow terminating.");
				return false
			}
		} else if (a.fx == "all") {
			a.multiFx = true;
			a.fxs = [];
			for (p in b) {
				var d = b[p];
				if (b.hasOwnProperty(p) && $.isFunction(d)) a.fxs.push(p)
			}
		}
		if (a.multiFx && a.randomizeEffects) {
			var e = Math.floor(Math.random() * 20) + 30;
			for (var i = 0; i < e; i++) {
				var f = Math.floor(Math.random() * a.fxs.length);
				a.fxs.push(a.fxs.splice(f, 1)[0])
			}
			log("randomized fx sequence: ", a.fxs)
		}
		return true
	}
	function exposeAddSlide(d, e) {
		d.addSlide = function (a, b) {
			var c = $(a),
			s = c[0];
			if (!d.autostopCount) d.countdown++;
			e[b ? "unshift": "push"](s);
			if (d.els) d.els[b ? "unshift": "push"](s);
			d.slideCount = e.length;
			c.css("position", "absolute");
			c[b ? "prependTo": "appendTo"](d.$cont);
			if (b) {
				d.currSlide++;
				d.nextSlide++
			}
			if (!$.support.opacity && (d.cleartype && !d.cleartypeNoBg)) clearTypeFix(c);
			if (d.fit && d.width) c.width(d.width);
			if (d.fit && (d.height && d.height != "auto")) $slides.height(d.height);
			s.cycleH = d.fit && d.height ? d.height: c.height();
			s.cycleW = d.fit && d.width ? d.width: c.width();
			c.css(d.cssBefore);
			if (d.pager) $.fn.cycle.createPagerAnchor(e.length - 1, s, $(d.pager), e, d);
			if ($.isFunction(d.onAddSlide)) d.onAddSlide(c);
			else c.hide()
		}
	}
	$.fn.cycle.resetState = function (a, b) {
		b = b || a.fx;
		a.before = [];
		a.after = [];
		a.cssBefore = $.extend({},
		a.original.cssBefore);
		a.cssAfter = $.extend({},
		a.original.cssAfter);
		a.animIn = $.extend({},
		a.original.animIn);
		a.animOut = $.extend({},
		a.original.animOut);
		a.fxFn = null;
		$.each(a.original.before, function () {
			a.before.push(this)
		});
		$.each(a.original.after, function () {
			a.after.push(this)
		});
		var c = $.fn.cycle.transitions[b];
		if ($.isFunction(c)) c(a.$cont, $(a.elements), a)
	};
	function go(a, b, c, d) {
		if (c && (b.busy && b.manualTrump)) {
			$(a).stop(true, true);
			b.busy = false
		}
		if (b.busy) return;
		var p = b.$cont[0],
		curr = a[b.currSlide],
		next = a[b.nextSlide];
		if (p.cycleStop != b.stopCount || p.cycleTimeout === 0 && !c) return;
		if (!c && (!p.cyclePause && (b.autostop && --b.countdown <= 0 || b.nowrap && (!b.random && b.nextSlide < b.currSlide)))) {
			if (b.end) b.end(b);
			return
		}
		if (c || !p.cyclePause) {
			var e = b.fx;
			curr.cycleH = curr.cycleH || $(curr).height();
			curr.cycleW = curr.cycleW || $(curr).width();
			next.cycleH = next.cycleH || $(next).height();
			next.cycleW = next.cycleW || $(next).width();
			if (b.multiFx) {
				if (b.lastFx == undefined || ++b.lastFx >= b.fxs.length) b.lastFx = 0;
				e = b.fxs[b.lastFx];
				b.currFx = e
			}
			if (b.oneTimeFx) {
				e = b.oneTimeFx;
				b.oneTimeFx = null
			}
			$.fn.cycle.resetState(b, e);
			if (b.before.length) $.each(b.before, function (i, o) {
				if (p.cycleStop != b.stopCount) return;
				o.apply(next, [curr, next, b, d])
			});
			var f = function () {
				$.each(b.after, function (i, o) {
					if (p.cycleStop != b.stopCount) return;
					o.apply(next, [curr, next, b, d])
				})
			};
			if (b.nextSlide != b.currSlide) {
				b.busy = 1;
				if (b.fxFn) b.fxFn(curr, next, b, f, d);
				else if ($.isFunction($.fn.cycle[b.fx])) $.fn.cycle[b.fx](curr, next, b, f);
				else $.fn.cycle.custom(curr, next, b, f, c && b.fastOnEvent)
			}
			b.lastSlide = b.currSlide;
			if (b.random) {
				b.currSlide = b.nextSlide;
				if (++b.randomIndex == a.length) b.randomIndex = 0;
				b.nextSlide = b.randomMap[b.randomIndex]
			} else {
				var g = b.nextSlide + 1 == a.length;
				b.nextSlide = g ? 0 : b.nextSlide + 1;
				b.currSlide = g ? a.length - 1 : b.nextSlide - 1
			}
			if (b.pager) $.fn.cycle.updateActivePagerLink(b.pager, b.currSlide)
		}
		var h = 0;
		if (b.timeout && !b.continuous) h = getTimeout(curr, next, b, d);
		else if (b.continuous && p.cyclePause) h = 10;
		if (h > 0) p.cycleTimeout = setTimeout(function () {
			go(a, b, 0, !b.rev)
		},
		h)
	}
	$.fn.cycle.updateActivePagerLink = function (a, b) {
		$(a).find("a").removeClass("activeSlide").filter("a:eq(" + b + ")").addClass("activeSlide")
	};
	function getTimeout(a, b, c, d) {
		if (c.timeoutFn) {
			var t = c.timeoutFn(a, b, c, d);
			if (t !== false) return t
		}
		return c.timeout
	}
	$.fn.cycle.next = function (a) {
		advance(a, a.rev ? -1 : 1)
	};
	$.fn.cycle.prev = function (a) {
		advance(a, a.rev ? 1 : -1)
	};
	function advance(a, b) {
		var c = a.elements;
		var p = a.$cont[0],
		timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0
		}
		if (a.random && b < 0) {
			a.randomIndex--;
			if (--a.randomIndex == -2) a.randomIndex = c.length - 2;
			else if (a.randomIndex == -1) a.randomIndex = c.length - 1;
			a.nextSlide = a.randomMap[a.randomIndex]
		} else if (a.random) {
			if (++a.randomIndex == c.length) a.randomIndex = 0;
			a.nextSlide = a.randomMap[a.randomIndex]
		} else {
			a.nextSlide = a.currSlide + b;
			if (a.nextSlide < 0) {
				if (a.nowrap) return false;
				a.nextSlide = c.length - 1
			} else if (a.nextSlide >= c.length) {
				if (a.nowrap) return false;
				a.nextSlide = 0
			}
		}
		if ($.isFunction(a.prevNextClick)) a.prevNextClick(b > 0, a.nextSlide, c[a.nextSlide]);
		go(c, a, 1, b >= 0);
		return false
	}
	function buildPager(a, b) {
		var c = $(b.pager);
		$.each(a, function (i, o) {
			$.fn.cycle.createPagerAnchor(i, o, c, a, b)
		});
		$.fn.cycle.updateActivePagerLink(b.pager, b.startingSlide)
	}
	$.fn.cycle.createPagerAnchor = function (i, b, c, d, e) {
		var a = $.isFunction(e.pagerAnchorBuilder) ? e.pagerAnchorBuilder(i, b) : '<a href="#">' + (i + 1) + "</a>";
		if (!a) return;
		var f = $(a);
		if (f.parents("body").length == 0) {
			var g = [];
			if (c.length > 1) {
				c.each(function () {
					var a = f.clone(true);
					$(this).append(a);
					g.push(a)
				});
				f = $(g)
			} else f.appendTo(c)
		}
		f.bind(e.pagerEvent, function () {
			e.nextSlide = i;
			var p = e.$cont[0],
			timeout = p.cycleTimeout;
			if (timeout) {
				clearTimeout(timeout);
				p.cycleTimeout = 0
			}
			if ($.isFunction(e.pagerClick)) e.pagerClick(e.nextSlide, d[e.nextSlide]);
			go(d, e, 1, e.currSlide < i);
			return false
		});
		if (e.pauseOnPagerHover) f.hover(function () {
			e.$cont[0].cyclePause++
		},
		function () {
			e.$cont[0].cyclePause--
		})
	};
	$.fn.cycle.hopsFromLast = function (a, b) {
		var d, l = a.lastSlide,
		c = a.currSlide;
		if (b) d = c > l ? c - l: a.slideCount - l;
		else d = c < l ? l - c: l + a.slideCount - c;
		return d
	};
	function clearTypeFix(b) {
		function hex(s) {
			s = parseInt(s).toString(16);
			return s.length < 2 ? "0" + s: s
		}
		function getBg(e) {
			for (; e && e.nodeName.toLowerCase() != "html"; e = e.parentNode) {
				var v = $.css(e, "background-color");
				if (v.indexOf("rgb") >= 0) {
					var a = v.match(/\d+/g);
					return "#" + hex(a[0]) + hex(a[1]) + hex(a[2])
				}
				if (v && v != "transparent") return v
			}
			return "#ffffff"
		}
		b.each(function () {
			$(this).css("background-color", getBg(this))
		})
	}
	$.fn.cycle.commonReset = function (a, b, c, w, h, d) {
		$(c.elements).not(a).hide();
		c.cssBefore.opacity = 1;
		c.cssBefore.display = "block";
		if (w !== false && b.cycleW > 0) c.cssBefore.width = b.cycleW;
		if (h !== false && b.cycleH > 0) c.cssBefore.height = b.cycleH;
		c.cssAfter = c.cssAfter || {};
		c.cssAfter.display = "none";
		$(a).css("zIndex", c.slideCount + (d === true ? 1 : 0));
		$(b).css("zIndex", c.slideCount + (d === true ? 0 : 1))
	};
	$.fn.cycle.custom = function (a, b, c, d, e) {
		var f = $(a),
		$n = $(b);
		var g = c.speedIn,
		speedOut = c.speedOut,
		easeIn = c.easeIn,
		easeOut = c.easeOut;
		$n.css(c.cssBefore);
		if (e) {
			if (typeof e == "number") g = speedOut = e;
			else g = speedOut = 1;
			easeIn = easeOut = null
		}
		var h = function () {
			$n.animate(c.animIn, g, easeIn, d)
		};
		f.animate(c.animOut, speedOut, easeOut, function () {
			if (c.cssAfter) f.css(c.cssAfter);
			if (!c.sync) h()
		});
		if (c.sync) h()
	};
	$.fn.cycle.transitions = {
		fade: function (d, e, f) {
			e.not(":eq(" + f.currSlide + ")").css("opacity", 0);
			f.before.push(function (a, b, c) {
				$.fn.cycle.commonReset(a, b, c);
				c.cssBefore.opacity = 0
			});
			f.animIn = {
				opacity: 1
			};
			f.animOut = {
				opacity: 0
			};
			f.cssBefore = {
				top: 0,
				left: 0
			}
		}
	};
	$.fn.cycle.ver = function () {
		return x
	};
	$.fn.cycle.defaults = {
		fx: "fade",
		timeout: 4E3,
		timeoutFn: null,
		continuous: 0,
		speed: 1E3,
		speedIn: null,
		speedOut: null,
		next: null,
		prev: null,
		prevNextClick: null,
		pager: null,
		pagerClick: null,
		pagerEvent: "click",
		pagerAnchorBuilder: null,
		before: null,
		after: null,
		end: null,
		easing: null,
		easeIn: null,
		easeOut: null,
		shuffle: null,
		animIn: null,
		animOut: null,
		cssBefore: null,
		cssAfter: null,
		fxFn: null,
		height: "auto",
		startingSlide: 0,
		sync: 1,
		random: 0,
		fit: 0,
		containerResize: 1,
		pause: 0,
		pauseOnPagerHover: 0,
		autostop: 0,
		autostopCount: 0,
		delay: 0,
		slideExpr: null,
		cleartype: !$.support.opacity,
		nowrap: 0,
		fastOnEvent: 0,
		randomizeEffects: 1,
		rev: 0,
		manualTrump: true,
		requeueOnImageNotLoaded: true,
		requeueTimeout: 250
	}
})(jQuery);
(function ($) {
	$.fn.cycle.transitions.scrollUp = function (a, b, c) {
		a.css("overflow", "hidden");
		c.before.push($.fn.cycle.commonReset);
		var h = a.height();
		c.cssBefore = {
			top: h,
			left: 0
		};
		c.cssFirst = {
			top: 0
		};
		c.animIn = {
			top: 0
		};
		c.animOut = {
			top: -h
		}
	};
	$.fn.cycle.transitions.scrollDown = function (a, b, c) {
		a.css("overflow", "hidden");
		c.before.push($.fn.cycle.commonReset);
		var h = a.height();
		c.cssFirst = {
			top: 0
		};
		c.cssBefore = {
			top: -h,
			left: 0
		};
		c.animIn = {
			top: 0
		};
		c.animOut = {
			top: h
		}
	};
	$.fn.cycle.transitions.scrollLeft = function (a, b, c) {
		a.css("overflow", "hidden");
		c.before.push($.fn.cycle.commonReset);
		var w = a.width();
		c.cssFirst = {
			left: 0
		};
		c.cssBefore = {
			left: w,
			top: 0
		};
		c.animIn = {
			left: 0
		};
		c.animOut = {
			left: 0 - w
		}
	};
	$.fn.cycle.transitions.scrollRight = function (a, b, c) {
		a.css("overflow", "hidden");
		c.before.push($.fn.cycle.commonReset);
		var w = a.width();
		c.cssFirst = {
			left: 0
		};
		c.cssBefore = {
			left: -w,
			top: 0
		};
		c.animIn = {
			left: 0
		};
		c.animOut = {
			left: w
		}
	};
	$.fn.cycle.transitions.scrollHorz = function (e, f, g) {
		e.css("overflow", "hidden").width();
		g.before.push(function (a, b, c, d) {
			$.fn.cycle.commonReset(a, b, c);
			c.cssBefore.left = d ? b.cycleW - 1 : 1 - b.cycleW;
			c.animOut.left = d ? -a.cycleW: a.cycleW
		});
		g.cssFirst = {
			left: 0
		};
		g.cssBefore = {
			top: 0
		};
		g.animIn = {
			left: 0
		};
		g.animOut = {
			top: 0
		}
	};
	$.fn.cycle.transitions.scrollVert = function (e, f, g) {
		e.css("overflow", "hidden");
		g.before.push(function (a, b, c, d) {
			$.fn.cycle.commonReset(a, b, c);
			c.cssBefore.top = d ? 1 - b.cycleH: b.cycleH - 1;
			c.animOut.top = d ? a.cycleH: -a.cycleH
		});
		g.cssFirst = {
			top: 0
		};
		g.cssBefore = {
			left: 0
		};
		g.animIn = {
			top: 0
		};
		g.animOut = {
			left: 0
		}
	};
	$.fn.cycle.transitions.slideX = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$(c.elements).not(a).hide();
			$.fn.cycle.commonReset(a, b, c, false, true);
			c.animIn.width = b.cycleW
		});
		f.cssBefore = {
			left: 0,
			top: 0,
			width: 0
		};
		f.animIn = {
			width: "show"
		};
		f.animOut = {
			width: 0
		}
	};
	$.fn.cycle.transitions.slideY = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$(c.elements).not(a).hide();
			$.fn.cycle.commonReset(a, b, c, true, false);
			c.animIn.height = b.cycleH
		});
		f.cssBefore = {
			left: 0,
			top: 0,
			height: 0
		};
		f.animIn = {
			height: "show"
		};
		f.animOut = {
			height: 0
		}
	};
	$.fn.cycle.transitions.shuffle = function (j, l, m) {
		var w = j.css("overflow", "visible").width();
		l.css({
			left: 0,
			top: 0
		});
		m.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, true, true, true)
		});
		m.speed = m.speed / 2;
		m.random = 0;
		m.shuffle = m.shuffle || {
			left: -w,
			top: 15
		};
		m.els = [];
		for (var i = 0; i < l.length; i++) m.els.push(l[i]);
		for (var i = 0; i < m.currSlide; i++) m.els.push(m.els.shift());
		m.fxFn = function (b, c, d, e, f) {
			var g = f ? $(b) : $(c);
			$(c).css(d.cssBefore);
			var h = d.slideCount;
			g.animate(d.shuffle, d.speedIn, d.easeIn, function () {
				var a = $.fn.cycle.hopsFromLast(d, f);
				for (var k = 0; k < a; k++) f ? d.els.push(d.els.shift()) : d.els.unshift(d.els.pop());
				if (f) for (var i = 0, len = d.els.length; i < len; i++) $(d.els[i]).css("z-index", len - i + h);
				else {
					var z = $(b).css("z-index");
					g.css("z-index", parseInt(z) + 1 + h)
				}
				g.animate({
					left: 0,
					top: 0
				},
				d.speedOut, d.easeOut, function () {
					$(f ? this: b).hide();
					if (e) e()
				})
			})
		};
		m.cssBefore = {
			display: "block",
			opacity: 1,
			top: 0,
			left: 0
		}
	};
	$.fn.cycle.transitions.turnUp = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, true, false);
			c.cssBefore.top = b.cycleH;
			c.animIn.height = b.cycleH
		});
		f.cssFirst = {
			top: 0
		};
		f.cssBefore = {
			left: 0,
			height: 0
		};
		f.animIn = {
			top: 0
		};
		f.animOut = {
			height: 0
		}
	};
	$.fn.cycle.transitions.turnDown = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, true, false);
			c.animIn.height = b.cycleH;
			c.animOut.top = a.cycleH
		});
		f.cssFirst = {
			top: 0
		};
		f.cssBefore = {
			left: 0,
			top: 0,
			height: 0
		};
		f.animOut = {
			height: 0
		}
	};
	$.fn.cycle.transitions.turnLeft = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, false, true);
			c.cssBefore.left = b.cycleW;
			c.animIn.width = b.cycleW
		});
		f.cssBefore = {
			top: 0,
			width: 0
		};
		f.animIn = {
			left: 0
		};
		f.animOut = {
			width: 0
		}
	};
	$.fn.cycle.transitions.turnRight = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, false, true);
			c.animIn.width = b.cycleW;
			c.animOut.left = a.cycleW
		});
		f.cssBefore = {
			top: 0,
			left: 0,
			width: 0
		};
		f.animIn = {
			left: 0
		};
		f.animOut = {
			width: 0
		}
	};
	$.fn.cycle.transitions.zoom = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, false, false, true);
			c.cssBefore.top = b.cycleH / 2;
			c.cssBefore.left = b.cycleW / 2;
			c.animIn = {
				top: 0,
				left: 0,
				width: b.cycleW,
				height: b.cycleH
			};
			c.animOut = {
				width: 0,
				height: 0,
				top: a.cycleH / 2,
				left: a.cycleW / 2
			}
		});
		f.cssFirst = {
			top: 0,
			left: 0
		};
		f.cssBefore = {
			width: 0,
			height: 0
		}
	};
	$.fn.cycle.transitions.fadeZoom = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, false, false);
			c.cssBefore.left = b.cycleW / 2;
			c.cssBefore.top = b.cycleH / 2;
			c.animIn = {
				top: 0,
				left: 0,
				width: b.cycleW,
				height: b.cycleH
			}
		});
		f.cssBefore = {
			width: 0,
			height: 0
		};
		f.animOut = {
			opacity: 0
		}
	};
	$.fn.cycle.transitions.blindX = function (d, e, f) {
		var w = d.css("overflow", "hidden").width();
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c);
			c.animIn.width = b.cycleW;
			c.animOut.left = a.cycleW
		});
		f.cssBefore = {
			left: w,
			top: 0
		};
		f.animIn = {
			left: 0
		};
		f.animOut = {
			left: w
		}
	};
	$.fn.cycle.transitions.blindY = function (d, e, f) {
		var h = d.css("overflow", "hidden").height();
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c);
			c.animIn.height = b.cycleH;
			c.animOut.top = a.cycleH
		});
		f.cssBefore = {
			top: h,
			left: 0
		};
		f.animIn = {
			top: 0
		};
		f.animOut = {
			top: h
		}
	};
	$.fn.cycle.transitions.blindZ = function (d, e, f) {
		var h = d.css("overflow", "hidden").height();
		var w = d.width();
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c);
			c.animIn.height = b.cycleH;
			c.animOut.top = a.cycleH
		});
		f.cssBefore = {
			top: h,
			left: w
		};
		f.animIn = {
			top: 0,
			left: 0
		};
		f.animOut = {
			top: h,
			left: w
		}
	};
	$.fn.cycle.transitions.growX = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, false, true);
			c.cssBefore.left = this.cycleW / 2;
			c.animIn = {
				left: 0,
				width: this.cycleW
			};
			c.animOut = {
				left: 0
			}
		});
		f.cssBefore = {
			width: 0,
			top: 0
		}
	};
	$.fn.cycle.transitions.growY = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, true, false);
			c.cssBefore.top = this.cycleH / 2;
			c.animIn = {
				top: 0,
				height: this.cycleH
			};
			c.animOut = {
				top: 0
			}
		});
		f.cssBefore = {
			height: 0,
			left: 0
		}
	};
	$.fn.cycle.transitions.curtainX = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, false, true, true);
			c.cssBefore.left = b.cycleW / 2;
			c.animIn = {
				left: 0,
				width: this.cycleW
			};
			c.animOut = {
				left: a.cycleW / 2,
				width: 0
			}
		});
		f.cssBefore = {
			top: 0,
			width: 0
		}
	};
	$.fn.cycle.transitions.curtainY = function (d, e, f) {
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, true, false, true);
			c.cssBefore.top = b.cycleH / 2;
			c.animIn = {
				top: 0,
				height: b.cycleH
			};
			c.animOut = {
				top: a.cycleH / 2,
				height: 0
			}
		});
		f.cssBefore = {
			left: 0,
			height: 0
		}
	};
	$.fn.cycle.transitions.cover = function (e, f, g) {
		var d = g.direction || "left";
		var w = e.css("overflow", "hidden").width();
		var h = e.height();
		g.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c);
			if (d == "right") c.cssBefore.left = -w;
			else if (d == "up") c.cssBefore.top = h;
			else if (d == "down") c.cssBefore.top = -h;
			else c.cssBefore.left = w
		});
		g.animIn = {
			left: 0,
			top: 0
		};
		g.animOut = {
			opacity: 1
		};
		g.cssBefore = {
			top: 0,
			left: 0
		}
	};
	$.fn.cycle.transitions.uncover = function (e, f, g) {
		var d = g.direction || "left";
		var w = e.css("overflow", "hidden").width();
		var h = e.height();
		g.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, true, true, true);
			if (d == "right") c.animOut.left = w;
			else if (d == "up") c.animOut.top = -h;
			else if (d == "down") c.animOut.top = h;
			else c.animOut.left = -w
		});
		g.animIn = {
			left: 0,
			top: 0
		};
		g.animOut = {
			opacity: 1
		};
		g.cssBefore = {
			top: 0,
			left: 0
		}
	};
	$.fn.cycle.transitions.toss = function (d, e, f) {
		var w = d.css("overflow", "visible").width();
		var h = d.height();
		f.before.push(function (a, b, c) {
			$.fn.cycle.commonReset(a, b, c, true, true, true);
			if (!c.animOut.left && !c.animOut.top) c.animOut = {
				left: w * 2,
				top: -h / 2,
				opacity: 0
			};
			else c.animOut.opacity = 0
		});
		f.cssBefore = {
			left: 0,
			top: 0
		};
		f.animIn = {
			left: 0
		}
	};
	$.fn.cycle.transitions.wipe = function (n, o, p) {
		var w = n.css("overflow", "hidden").width();
		var h = n.height();
		p.cssBefore = p.cssBefore || {};
		var q;
		if (p.clip) if (/l2r/.test(p.clip)) q = "rect(0px 0px " + h + "px 0px)";
		else if (/r2l/.test(p.clip)) q = "rect(0px " + w + "px " + h + "px " + w + "px)";
		else if (/t2b/.test(p.clip)) q = "rect(0px " + w + "px 0px 0px)";
		else if (/b2t/.test(p.clip)) q = "rect(" + h + "px " + w + "px " + h + "px 0px)";
		else if (/zoom/.test(p.clip)) {
			var t = parseInt(h / 2);
			var l = parseInt(w / 2);
			q = "rect(" + t + "px " + l + "px " + t + "px " + l + "px)"
		}
		p.cssBefore.clip = p.cssBefore.clip || (q || "rect(0px 0px 0px 0px)");
		var d = p.cssBefore.clip.match(/(\d+)/g);
		var t = parseInt(d[0]),
		r = parseInt(d[1]),
		b = parseInt(d[2]),
		l = parseInt(d[3]);
		p.before.push(function (g, i, j) {
			if (g == i) return;
			var k = $(g),
			$next = $(i);
			$.fn.cycle.commonReset(g, i, j, true, true, false);
			j.cssAfter.display = "block";
			var m = 1,
			count = parseInt(j.speedIn / 13) - 1;
			(function f() {
				var a = t ? t - parseInt(m * (t / count)) : 0;
				var c = l ? l - parseInt(m * (l / count)) : 0;
				var d = b < h ? b + parseInt(m * ((h - b) / count || 1)) : h;
				var e = r < w ? r + parseInt(m * ((w - r) / count || 1)) : w;
				$next.css({
					clip: "rect(" + a + "px " + e + "px " + d + "px " + c + "px)"
				});
				m++<=count ? setTimeout(f, 13) : k.css("display", "none")
			})()
		});
		p.cssBefore = {
			display: "block",
			opacity: 1,
			top: 0,
			left: 0
		};
		p.animIn = {
			left: 0
		};
		p.animOut = {
			left: 0
		}
	}
})(jQuery);
(function ($) {
	$.fn.superfish = function (d) {
		var e = $.fn.superfish,
		c = e.c,
		$arrow = $(['<span class="', c.arrowClass, '"> &#187;</span>'].join("")),
		over = function () {
			var a = $(this),
			menu = getMenu(a);
			clearTimeout(menu.sfTimer);
			a.showSuperfishUl().siblings().hideSuperfishUl()
		},
		out = function () {
			var a = $(this),
			menu = getMenu(a),
			o = e.op;
			clearTimeout(menu.sfTimer);
			menu.sfTimer = setTimeout(function () {
				o.retainPath = $.inArray(a[0], o.$path) > -1;
				a.hideSuperfishUl();
				if (o.$path.length && a.parents(["li.", o.hoverClass].join("")).length < 1) over.call(o.$path)
			},
			o.delay)
		},
		getMenu = function (a) {
			var b = a.parents(["ul.", c.menuClass, ":first"].join(""))[0];
			e.op = e.o[b.serial];
			return b
		},
		addArrow = function (a) {
			a.addClass(c.anchorClass).append($arrow.clone())
		};
		return this.each(function () {
			var s = this.serial = e.o.length;
			var o = $.extend({},
			e.defaults, d);
			o.$path = $("li." + o.pathClass, this).slice(0, o.pathLevels).each(function () {
				$(this).addClass([o.hoverClass, c.bcClass].join(" ")).filter("li:has(ul)").removeClass(o.pathClass)
			});
			e.o[s] = e.op = o;
			$("li:has(ul)", this)[$.fn.hoverIntent && !o.disableHI ? "hoverIntent": "hover"](over, out).each(function () {
				if (o.autoArrows) addArrow($(">a:first-child", this))
			}).not("." + c.bcClass).hideSuperfishUl();
			var b = $("a", this);
			b.each(function (i) {
				var a = b.eq(i).parents("li");
				b.eq(i).focus(function () {
					over.call(a)
				}).blur(function () {
					out.call(a)
				})
			});
			o.onInit.call(this)
		}).each(function () {
			var a = [c.menuClass];
			if (e.op.dropShadows && !($.browser.msie && $.browser.version < 7)) a.push(c.shadowClass);
			$(this).addClass(a.join(" "))
		})
	};
	var f = $.fn.superfish;
	f.o = [];
	f.op = {};
	f.IE7fix = function () {
		var o = f.op;
		if ($.browser.msie && ($.browser.version > 6 && (o.dropShadows && o.animation.opacity != undefined))) this.toggleClass(f.c.shadowClass + "-off")
	};
	f.c = {
		bcClass: "sf-breadcrumb",
		menuClass: "sf-js-enabled",
		anchorClass: "sf-with-ul",
		arrowClass: "sf-sub-indicator",
		shadowClass: "sf-shadow"
	};
	f.defaults = {
		hoverClass: "sfHover",
		pathClass: "overideThisToUse",
		pathLevels: 1,
		delay: 800,
		animation: {
			opacity: "show"
		},
		speed: "normal",
		autoArrows: true,
		dropShadows: true,
		disableHI: false,
		onInit: function () {},
		onBeforeShow: function () {},
		onShow: function () {},
		onHide: function () {}
	};
	$.fn.extend({
		hideSuperfishUl: function () {
			var o = f.op,
			not = o.retainPath === true ? o.$path: "";
			o.retainPath = false;
			var a = $(["li.", o.hoverClass].join(""), this).add(this).not(not).removeClass(o.hoverClass).find(">ul").hide().css("visibility", "hidden");
			o.onHide.call(a);
			return this
		},
		showSuperfishUl: function () {
			var o = f.op,
			sh = f.c.shadowClass + "-off",
			$ul = this.addClass(o.hoverClass).find(">ul:hidden").css("visibility", "visible");
			f.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation, o.speed, function () {
				f.IE7fix.call($ul);
				o.onShow.call($ul)
			});
			return this
		}
	})
})(jQuery);
jQuery("ul.nav").superfish({
	delay: 300,
	animation: {
		opacity: "show",
		height: "show"
	},
	speed: "fast",
	autoArrows: true,
	dropShadows: false
});
jQuery("ul.nav > li > a.sf-with-ul").parent("li").addClass("sf-ul");
var $featured_content = jQuery("#featured #slides");
if ($featured_content.length) {
	var et_featured_options = {
		timeout: 0,
		speed: 500,
		cleartypeNoBg: true,
		prev: "#featured a#left-arrow",
		next: "#featured a#right-arrow",
		pager: "div#controllers"
	};
	$featured_content.css("backgroundImage", "none");
	$featured_content.cycle(et_featured_options);
	var $et_featured_single_slide = $featured_content.find(".slide");
	if ($et_featured_single_slide.length === 1) {
		$et_featured_single_slide.css("display", "block");
		jQuery("#featured a#left-arrow, #featured a#right-arrow").hide()
	}
}
var $footer_widget = jQuery("#footer-widgets .footer-widget");
if ($footer_widget.length) $footer_widget.each(function (a, b) {
	if ((a + 1) % 4 == 0) jQuery(b).addClass("last").after("<div class='clear'></div>")
});
function et_search_bar() {
	var a = jQuery("#search-form"),
	$searchinput = a.find("input#searchinput"),
	searchvalue = $searchinput.val();
	$searchinput.focus(function () {
		if (jQuery(this).val() === searchvalue) jQuery(this).val("")
	}).blur(function () {
		if (jQuery(this).val() === "") jQuery(this).val(searchvalue)
	})
}
et_search_bar();
jQuery(function () {
	var c = jQuery(".main-item");
	c.mouseenter(function (e) {
		move_thumb(jQuery(this), e);
		jQuery(this).children(".boutique_description_border").css({
			display: "block",
			opacity: "0",
			top: y,
			left: x + 10
		}).stop(true, true).animate({
			opacity: 1
		},
		400)
	}).mousemove(function (e) {
		move_thumb(jQuery(this), e);
		jQuery(this).children(".boutique_description_border").css({
			top: y + 10,
			left: x + 20
		})
	}).mouseleave(function () {
		jQuery(this).children(".boutique_description_border").stop(true, true).animate({
			opacity: "hide"
		},
		"fast")
	});
	function move_thumb(a, b) {
		x = b.pageX - a.offset().left;
		y = b.pageY - a.offset().top
	}
});
function resizeThumb(a) {
	var b = document.getElementById("popular");
	var c = b.getElementsByTagName("img");
	for (var i = 0; i < c.length; i++) c[i].src = c[i].src.replace(/\/s72\-c/g, "/s" + a + "-c")
}
resizeThumb(137);