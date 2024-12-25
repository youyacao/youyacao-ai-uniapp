var t = function() {
	return t = Object.assign || function(t) {
		for (var e, i = 1, n = arguments.length; i < n; i++)
			for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
		return t
	}, t.apply(this, arguments)
};

function e(t, e, i, n) {
	return new(i || (i = Promise))((function(r, o) {
		function s(t) {
			try {
				h(n.next(t))
			} catch (t) {
				o(t)
			}
		}

		function a(t) {
			try {
				h(n.throw(t))
			} catch (t) {
				o(t)
			}
		}

		function h(t) {
			var e;
			t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
				t(e)
			}))).then(s, a)
		}
		h((n = n.apply(t, e || [])).next())
	}))
}

function i(t, e) {
	var i, n, r, o, s = {
		label: 0,
		sent: function() {
			if (1 & r[0]) throw r[1];
			return r[1]
		},
		trys: [],
		ops: []
	};
	return o = {
		next: a(0),
		throw: a(1),
		return: a(2)
	}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
		return this
	}), o;

	function a(o) {
		return function(a) {
			return function(o) {
				if (i) throw new TypeError("Generator is already executing.");
				for (; s;) try {
					if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(
							n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
					switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
						case 0:
						case 1:
							r = o;
							break;
						case 4:
							return s.label++, {
								value: o[1],
								done: !1
							};
						case 5:
							s.label++, n = o[1], o = [0];
							continue;
						case 7:
							o = s.ops.pop(), s.trys.pop();
							continue;
						default:
							if (!(r = s.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !==
									o[0])) {
								s = 0;
								continue
							}
							if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
								s.label = o[1];
								break
							}
							if (6 === o[0] && s.label < r[1]) {
								s.label = r[1], r = o;
								break
							}
							if (r && s.label < r[2]) {
								s.label = r[2], s.ops.push(o);
								break
							}
							r[2] && s.ops.pop(), s.trys.pop();
							continue
					}
					o = e.call(t, s)
				} catch (t) {
					o = [6, t], n = 0
				} finally {
					i = r = 0
				}
				if (5 & o[0]) throw o[1];
				return {
					value: o[0] ? o[1] : void 0,
					done: !0
				}
			}([o, a])
		}
	}
}
var n = {
		MP_WEIXIN: "mp-weixin",
		MP_QQ: "mp-qq",
		MP_ALIPAY: "mp-alipay",
		MP_BAIDU: "mp-baidu",
		MP_TOUTIAO: "mp-toutiao",
		MP_DINGDING: "mp-dingding",
		H5: "h5",
		WEB: "web",
		PLUS: "plus"
	},
	r = ["Top", "Right", "Bottom", "Left"],
	o = "right",
	s = "bottom",
	a = ["contentSize", "clientSize", "borderSize", "offsetSize"],
	h = "row",
	c = "column",
	f = {
		TOP: "top",
		MIDDLE: "middle",
		BOTTOM: s
	},
	l = {
		LEFT: "left",
		CENTER: "center",
		RIGHT: o
	},
	d = "view",
	u = "text",
	p = "image",
	g = "qrcode",
	v = "block",
	y = "inline-block",
	x = "none",
	b = "flex",
	w = "absolute",
	m = "fixed",
	S = {
		display: v,
		color: "#000000",
		lineHeight: "1.4em",
		fontSize: 14,
		fontWeight: 400,
		fontFamily: "sans-serif",
		lineCap: "butt",
		flexDirection: h,
		flexWrap: "nowrap",
		textAlign: "left",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		position: "static",
		transformOrigin: "".concat("center", " ").concat("center")
	},
	z = {
		upx2px: function(t) {
			return window.innerWidth / 750 * t
		},
		getSystemInfoSync: function() {
			return {
				screenWidth: window.innerWidth,
				screenHeight: window.innerHeight
			}
		},
		getImageInfo: function(t) {
			var e = t.src,
				i = t.success,
				n = t.fail,
				r = new Image;
			r.onload = function() {
				i({
					width: r.naturalWidth,
					height: r.naturalHeight,
					path: r.src,
					src: e
				})
			}, r.onerror = n, r.src = e
		}
	},
	I = "object" == typeof window ? "undefined" == typeof uni || "undefined" != typeof uni && !uni.addInterceptor ? n
	.WEB : n.H5 : "object" == typeof swan ? n.MP_BAIDU : "object" == typeof tt ? n.MP_TOUTIAO : "object" ==
	typeof plus ? n.PLUS : "object" == typeof wx ? n.MP_WEIXIN : void 0,
	M = I == n.MP_WEIXIN ? wx : "undefined" != typeof uni ? uni.getImageInfo ? {
		upx2px: function(t) {
			return uni.upx2px(t)
		},
		getSystemInfoSync: function() {
			return uni.getSystemInfoSync()
		},
		getImageInfo: function(t) {
			return uni.getImageInfo(t)
		},
		downloadFile: function(t) {
			return uni.downloadFile(t)
		}
	} : Object.assign(uni, z) : "undefined" != typeof window ? z : uni;
if (!M.upx2px) {
	var k = ((M.getSystemInfoSync && M.getSystemInfoSync()).screenWidth || 375) / 750;
	M.upx2px = function(t) {
		return k * t
	}
}

function B(t) {
	return /^-?\d+(\.\d+)?$/.test(t)
}

function W(t, e, i) {
	if (B(t)) return 1 * t;
	if ("string" == typeof t) {
		var n = /^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|vw|vh|px|%)$/g.exec(t);
		if (!t || !n) return 0;
		var r = n[3];
		t = parseFloat(t);
		var o = 0;
		if ("rpx" === r) o = M.upx2px(t);
		else if ("px" === r) o = 1 * t;
		else if ("%" === r && e) o = t * W(e) / 100;
		else if ("em" === r && e) o = t * W(e || 14);
		else if (["vw", "vh"].includes(r)) {
			var s = M.getSystemInfoSync(),
				a = s.screenWidth,
				h = s.screenHeight;
			o = t * ("vw" == r ? a : h) / 100
		}
		return 1 * o.toFixed(2)
	}
	return 0
}

function P(t) {
	return /%$/.test(t)
}

function O(t) {
	return /^-?([0-9]+)?([.]{1}[0-9]+){0,1}(rpx|px)$/.test(t)
}
var T = function(t) {
		return !(!t || !t.startsWith("linear") && !t.startsWith("radial"))
	},
	L = function(t, e, i, n, r, o) {
		t.startsWith("linear") ? function(t, e, i, n, r, o) {
			for (var s = function(t, e, i, n, r) {
						void 0 === n && (n = 0);
						void 0 === r && (r = 0);
						var o = t.match(/([-]?\d{1,3})deg/),
							s = o && o[1] ? parseFloat(o[1]) : 0;
						s >= 360 && (s -= 360);
						s < 0 && (s += 360);
						if (0 === (s = Math.round(s))) return {
							x0: Math.round(e / 2) + n,
							y0: i + r,
							x1: Math.round(e / 2) + n,
							y1: r
						};
						if (180 === s) return {
							x0: Math.round(e / 2) + n,
							y0: r,
							x1: Math.round(e / 2) + n,
							y1: i + r
						};
						if (90 === s) return {
							x0: n,
							y0: Math.round(i / 2) + r,
							x1: e + n,
							y1: Math.round(i / 2) + r
						};
						if (270 === s) return {
							x0: e + n,
							y0: Math.round(i / 2) + r,
							x1: n,
							y1: Math.round(i / 2) + r
						};
						var a = Math.round(180 * Math.asin(e / Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2))) / Math
							.PI);
						if (s === a) return {
							x0: n,
							y0: i + r,
							x1: e + n,
							y1: r
						};
						if (s === 180 - a) return {
							x0: n,
							y0: r,
							x1: e + n,
							y1: i + r
						};
						if (s === 180 + a) return {
							x0: e + n,
							y0: r,
							x1: n,
							y1: i + r
						};
						if (s === 360 - a) return {
							x0: e + n,
							y0: i + r,
							x1: n,
							y1: r
						};
						var h = 0,
							c = 0,
							f = 0,
							l = 0;
						if (s < a || s > 180 - a && s < 180 || s > 180 && s < 180 + a || s > 360 - a) {
							var d = s * Math.PI / 180,
								u = s < a || s > 360 - a ? i / 2 : -i / 2,
								p = Math.tan(d) * u,
								g = s < a || s > 180 - a && s < 180 ? e / 2 - p : -e / 2 - p;
							h = -(f = p + (v = Math.pow(Math.sin(d), 2) * g)), c = -(l = u + v / Math.tan(d))
						}
						if (s > a && s < 90 || s > 90 && s < 90 + a || s > 180 + a && s < 270 || s > 270 && s <
							360 - a) {
							var v;
							d = (90 - s) * Math.PI / 180, p = s > a && s < 90 || s > 90 && s < 90 + a ? e / 2 : -e /
								2, u = Math.tan(d) * p, g = s > a && s < 90 || s > 270 && s < 360 - a ? i / 2 - u :
								-i / 2 - u;
							h = -(f = p + (v = Math.pow(Math.sin(d), 2) * g) / Math.tan(d)), c = -(l = u + v)
						}
						return h = Math.round(h + e / 2) + n, c = Math.round(i / 2 - c) + r, f = Math.round(f + e /
							2) + n, l = Math.round(i / 2 - l) + r, {
							x0: h,
							y0: c,
							x1: f,
							y1: l
						}
					}(r, t, e, i, n), a = s.x0, h = s.y0, c = s.x1, f = s.y1, l = o.createLinearGradient(a, h, c,
					f), d = r.match(/linear-gradient\((.+)\)/)[1], u = R(d.substring(d.indexOf(",") + 1)), p =
					0; p < u.colors.length; p++) l.addColorStop(u.percents[p], u.colors[p]);
			o.setFillStyle(l)
		}(e, i, n, r, t, o) : t.startsWith("radial") && function(t, e, i, n, r, o) {
			for (var s = R(r.match(/radial-gradient\((.+)\)/)[1]), a = Math.round(t / 2) + i, h = Math.round(e /
					2) + n, c = o.createRadialGradient(a, h, 0, a, h, Math.max(t, e) / 2), f = 0; f < s.colors
				.length; f++) c.addColorStop(s.percents[f], s.colors[f]);
			o.setFillStyle(c)
		}(e, i, n, r, t, o)
	};

function R(t) {
	for (var e = [], i = [], n = 0, r = t.substring(0, t.length - 1).split("%,"); n < r.length; n++) {
		var o = r[n];
		e.push(o.substring(0, o.lastIndexOf(" ")).trim()), i.push(o.substring(o.lastIndexOf(" "), o.length) / 100)
	}
	return {
		colors: e,
		percents: i
	}
}

function F(t, e, i) {
	return e in t ? Object.defineProperty(t, e, {
		value: i,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : t[e] = i, t
}

function A() {
	return A = Object.assign ? Object.assign.bind() : function(t) {
		for (var e = 1; e < arguments.length; e++) {
			var i = arguments[e];
			for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
		}
		return t
	}, A.apply(this, arguments)
}

function j(t, e) {
	return j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
		return t.__proto__ = e, t
	}, j(t, e)
}

function E(t, e) {
	(null == e || e > t.length) && (e = t.length);
	for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
	return n
}

function C(t, e) {
	var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
	if (i) return (i = i.call(t)).next.bind(i);
	if (Array.isArray(t) || (i = function(t, e) {
			if (t) {
				if ("string" == typeof t) return E(t, e);
				var i = Object.prototype.toString.call(t).slice(8, -1);
				return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ?
					Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? E(t,
						e) : void 0
			}
		}(t)) || e && t && "number" == typeof t.length) {
		i && (t = i);
		var n = 0;
		return function() {
			return n >= t.length ? {
				done: !0
			} : {
				done: !1,
				value: t[n++]
			}
		}
	}
	throw new TypeError(
		"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
		)
}

function H(t) {
	return "number" == typeof t
}

function D(t) {
	return "auto" === t || null === t
}

function $(t) {
	return /%$/.test(t)
}
var Y = p,
	U = u,
	N = d,
	X = g,
	_ = y,
	q = w,
	G = m;

function V(t) {
	return t.replace(/-([a-z])/g, (function(t, e) {
		return e.toUpperCase()
	}))
}

function J(t, e) {
	var i, n, o = function(t) {
			var e = t.match(/([a-z]+)/)[1];
			return [e, V(t.split(e)[1])]
		}(t),
		s = o[0],
		a = o[1],
		h = e.split(" ");
	if (a) return (i = {})[s + a] = e, i;
	if (h.length && !a) {
		var c = h[0],
			f = h[1],
			l = h[2],
			d = h[3];
		return (n = {})[s + r[0]] = c, n[s + r[1]] = f || c, n[s + r[2]] = l || c, n[s + r[3]] = d || f || c, n
	}
}

function Q(t) {
	t = t.trim();
	for (var e = new Array, i = "+", n = "", r = t.length, o = 0; o < r; ++o) {
		if ("." === t[o] || !isNaN(Number(t[o])) && " " !== t[o]) n += t[o];
		else if ("(" === t[o]) {
			for (var s = 1, a = o; s > 0;) "(" === t[a += 1] && (s += 1), ")" === t[a] && (s -= 1);
			n = "".concat(Q(t.slice(o + 1, a))), o = a
		}
		if (isNaN(Number(t[o])) && "." !== t[o] || o === r - 1) {
			var h = parseFloat(n);
			switch (i) {
				case "+":
					e.push(h);
					break;
				case "-":
					e.push(-h);
					break;
				case "*":
					e.push(e.pop() * h);
					break;
				case "/":
					e.push(e.pop() / h)
			}
			i = t[o], n = ""
		}
	}
	for (var c = 0; e.length;) c += e.pop();
	return c
}
var Z, K = 0,
	et = function() {
		function t() {
			F(this, "elements", []), F(this, "afterElements", []), F(this, "beforeElements", []), F(this, "ids", []), F(
					this, "width", 0), F(this, "height", 0), F(this, "top", 0), F(this, "left", 0), F(this, "pre",
				null), F(this, "offsetX", 0), F(this, "offsetY", 0), K++, this.id = K
		}
		var e = t.prototype;
		return e.fixedBind = function(t, e) {
			void 0 === e && (e = 0), this.container = e ? t.parent : t.root, this.container.fixedLine = this, this
				.fixedAdd(t)
		}, e.fixedAdd = function(t) {
			if (!this.ids.includes(t.id)) {
				this.ids.push(t.id), this.elements.push(t);
				var e = t.computedStyle.zIndex;
				(void 0 === e ? 0 : e) >= 0 ? this.afterElements.push(t) : this.beforeElements.push(t), this
					.refreshLayout()
			}
		}, e.bind = function(t) {
			this.container = t.parent, this.container.line = null, this.container.lines ? (this.container.lines
					.push(this), this.pre = this.getPreLine(), this.top = this.pre.top + this.pre.height, this
					.left = this.container.contentSize.left) : (this.top = this.container.contentSize.top, this
					.left = this.container.contentSize.left, this.container.lines = [this]), this.isInline = t
				.isInline(), this.container.line = this, this.outerWidth = t.parent && t.parent.contentSize.width ?
				t.parent.contentSize.width : 1 / 0, this.add(t)
		}, e.getPreLine = function() {
			return this.container.lines[this.container.lines.length - 2]
		}, e.canIEnter = function(t) {
			return !((100 * t.offsetSize.width + 100 * this.width) / 100 > this.outerWidth) || (this.closeLine(), !
				1)
		}, e.closeLine = function() {
			delete this.container.line
		}, e.add = function(t) {
			this.ids.includes(t.id) || (this.ids.push(t.id), this.elements.push(t), this.refreshWidthHeight(t))
		}, e.refreshWidthHeight = function(t) {
			t.offsetSize.height > this.height && (this.height = t.offsetSize.height), this.width += t.offsetSize
				.width || 0, (this.container.lineMaxWidth || 0) < this.width && (this.container.lineMaxWidth = this
					.width)
		}, e.refreshXAlign = function() {
			if (this.isInline) {
				var t = this.container.contentSize.width - this.width,
					e = this.container.style.textAlign;
				"center" === e ? t /= 2 : "left" === e && (t = 0), this.offsetX = t
			}
		}, e.getOffsetY = function(t) {
			if (!t || !t.style) return 0;
			var e = (t.style || {}).verticalAlign;
			return e === s ? this.height - t.contentSize.height : "middle" === e ? (this.height - t.contentSize
				.height) / 2 : 0
		}, e.setIndent = function(t) {
			var e = t.style.textIndent;
			if (e && /^calc/.test(e)) {
				var i = /^calc\((.+)\)$/.exec(e);
				if (i && i[1]) {
					var n = i[1].replace(/([^\s\(\+\-\*\/]+)\.(left|right|bottom|top|width|height)/g, (function(e) {
							var i = e.split("."),
								n = i[0],
								r = i[1],
								o = t.parent.querySelector(n);
							if (o && o.offsetSize) {
								var s = {
									right: o.offsetSize.left + o.offsetSize.width,
									bottom: o.offsetSize.top + o.offsetSize.height
								};
								return o.offsetSize[r] || s[r] || 0
							}
						})),
						r = Q(n.replace(new RegExp(/-?[0-9]+(\.[0-9]+)?(rpx|px|%)/, "g"), W));
					t.style.textIndent = r
				}
			}
		}, e.layout = function(t, e) {
			var i = this;
			this.refreshXAlign(), this.pre ? (this.top = this.pre.top + this.pre.height + this.offsetY, this.left =
					e + this.offsetX) : (this.top = Math.max(this.top, this.container.contentSize.top, t) + this
					.offsetY, this.left = Math.max(this.left, this.container.contentSize.left, e) + this.offsetX),
				this.elements.forEach((function(t, e) {
					i.setIndent(t);
					var n = i.elements[e - 1],
						r = i.getOffsetY(t);
					t.style.top = i.top + r, t.style.left = n ? n.offsetSize.left + n.offsetSize.width : i
						.left, t.getBoxPosition()
				}))
		}, e.refreshLayout = function() {
			this.afterElements = this.afterElements.sort((function(t, e) {
				return t.computedStyle.zIndex - e.computedStyle.zIndex
			})), this.beforeElements = this.beforeElements.sort((function(t, e) {
				return t.computedStyle.zIndex - e.computedStyle.zIndex
			}))
		}, t
	}(),
	it = ((Z = {})[h] = {
		width: "width",
		contentWidth: "width",
		lineMaxWidth: "lineMaxWidth",
		left: "left",
		top: "top",
		height: "height",
		lineMaxHeight: "lineMaxHeight",
		marginLeft: "marginLeft"
	}, Z[c] = {
		width: "height",
		contentWidth: "height",
		lineMaxWidth: "lineMaxWidth",
		left: "top",
		top: "left",
		height: "width",
		lineMaxHeight: "lineMaxHeight",
		marginLeft: "marginTop"
	}, Z),
	nt = function(t) {
		var e, i;

		function n() {
			var e;
			return F(function(t) {
					if (void 0 === t) throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called");
					return t
				}(e = t.call(this) || this), "outerWidth", 0), e.exactValue = 0, e.flexTotal = 0, e.width = 0, e.key =
				null, e.flexDirection = "row", e
		}
		i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, j(e, i);
		var r = n.prototype;
		return r.bind = function(t) {
			this.container = t.parent, this.container.line = this, this.container.lines ? (this.container.lines
					.push(this), this.pre = this.getPreLine(), this.top = this.pre.top + this.pre.height, this
					.left = this.container.contentSize.left) : (this.top = this.container.contentSize.top, this
					.left = this.container.contentSize.left, this.container.lines = [this]), t.parent && (this
					.flexDirection = t.parent.style.flexDirection, this.key = it[this.flexDirection]), this
				.initHeight(t), this.outerWidth = t.parent && t.parent.contentSize[this.key.contentWidth] ? t.parent
				.contentSize[this.key.contentWidth] : 1 / 0, this.add(t)
		}, r.add = function(t) {
			this.ids.push(t.id);
			var e = t.style.flex;
			H(e) ? this.flexTotal += e : H(this.getWidth(t.style)) && (this.exactValue += this.getWidth(t
				.offsetSize)), this.elements.push(t), this.refreshWidthHeight(t), t.next || this.closeLine()
		}, r.closeLine = function() {
			this.calcFlex()
		}, r.initHeight = function(t) {
			this[this.key.height] = 0
		}, r.getWidth = function(t) {
			return t[this.key.width] || 0
		}, r.getHeight = function(t) {
			return t[this.key.height] || 0
		}, r.setWidth = function(t, e) {
			t[this.key.width] = e
		}, r.setHeight = function(t, e) {
			t[this.key.height] = e
		}, r.calcFlex = function() {
			var t = this,
				e = this.container.contentSize[this.key.contentWidth],
				i = 0;
			this.elements.forEach((function(n) {
				var r = n.style,
					o = n.contentSize,
					s = t.getWidth(r) || t.getWidth(o);
				H(r.flex) && (s = r.flex / t.flexTotal * (e - t.exactValue)), t.setWidth(n
						.computedStyle, s), n.isFlexCalc = !0, delete n.line, delete n.lines, delete n
					.lineMaxWidth, n.getBoxWidthHeight(), i = Math.max(i, t.getHeight(n.offsetSize))
			})), this.setHeight(this, i)
		}, r.refreshWidthHeight = function(t) {
			var e = this.container.style.alignItems;
			e && !t.style.alignSelf && (t.style.alignSelf = e);
			var i = this.getHeight(t.offsetSize);
			i > this[this.key.height] && (this.container[this.key.lineMaxHeight] = this[this.key.height] = i), this[
				this.key.width] += this.getWidth(t.offsetSize);
			var n = Math.min(this.getWidth(this), !this.getWidth(this.container.contentSize) && 1 / 0);
			(this.container[this.key.lineMaxWidth] || 0) < n && (this.container[this.key.lineMaxWidth] = n)
		}, r.refreshXAlign = function() {
			var t = this,
				e = this.elements.reduce((function(e, i) {
					return e + t.getWidth(i.offsetSize)
				}), 0),
				i = (this.outerWidth == 1 / 0 ? 0 : this.outerWidth - e) || 0,
				n = this.container.style.justifyContent;
			"center" === n ? i /= 2 : "flex-start" === n ? i = 0 : ["space-between", "space-around"].includes(n) &&
				(! function(e, i) {
					void 0 === i && (i = 0), i /= t.elements.length + (e ? -1 : 1), t.elements.forEach((
						function(n, r) {
							var o;
							e && !r || (n.style.margin ? n.style.margin[t.key.marginLeft] += i : n.style
								.margin = ((o = {})[t.key.marginLeft] = i, o), n.getBoxPosition())
						})), i = 0
				}("space-between" == n, i), i = 0), this.offsetX = i || 0, this.refreshYAlign()
		}, r.refreshYAlign = function() {
			var t = this;
			if (1 == this.container.lines.length) return 0;
			var e = this.container.lines.reduce((function(e, i) {
					return e + t.getHeight(i)
				}), 0),
				i = this.container.style.alignItems,
				n = this.getHeight(this.container.contentSize);
			if ("center" === i) {
				var r = (n - e) / (this.container.lines.length + 1);
				this.container.lines.forEach((function(t) {
					t.offsetY = r
				}))
			}
			if ("flex-end" === i) {
				var o = n - e;
				this.container.lines[0].offsetY = o
			}
		}, r.getOffsetY = function(t) {
			if (this.container.lines.length > 1) return 0;
			var e = t.style.alignSelf,
				i = this.getHeight(this.container.contentSize),
				n = i - this.getHeight(t.offsetSize);
			return "flex-end" === e ? n : "center" === e ? n / 2 : "stretch" === e ? (n && t.name == d && (t.style[
					this.key.width] = this.getWidth(t.offsetSize), t.style[this.key.height] = i, delete t
				.line, delete t.lines, t.getBoxWidthHeight()), 0) : 0
		}, r.layout = function(t, e) {
			var i = this;
			this.refreshXAlign(), this.pre ? (this.top = this.pre.top + this.pre.height + this.offsetY, this.left =
					e + this.offsetX) : (this.top = Math.max(this.top, this.container.contentSize.top, t) + this
					.offsetY, this.left = Math.max(this.left, this.container.contentSize.left, e) + this.offsetX),
				this.elements.forEach((function(t, e) {
					i.setIndent(t);
					var n = i.elements[e - 1],
						r = i.getOffsetY(t);
					t.style[i.key.top] = i[i.key.top] + r, t.style[i.key.left] = n ? n.offsetSize[i.key
						.left] + i.getWidth(n.offsetSize) : i[i.key.left], t.getBoxPosition()
				}))
		}, n
	}(et),
	rt = p,
	ot = u,
	st = d,
	at = v,
	ht = y,
	ct = b,
	ft = w,
	lt = m,
	dt = 0,
	ut = {
		left: null,
		top: null,
		width: null,
		height: null
	},
	pt = new Map,
	gt = function() {
		function t(t, e, i, n) {
			var o = this;
			F(this, "id", dt++), F(this, "style", {
					left: null,
					top: null,
					width: null,
					height: null
				}), F(this, "computedStyle", {}), F(this, "originStyle", {}), F(this, "children", {}), F(this,
					"layoutBox", A({}, ut)), F(this, "contentSize", A({}, ut)), F(this, "clientSize", A({}, ut)), F(
					this, "borderSize", A({}, ut)), F(this, "offsetSize", A({}, ut)), this.ctx = n, this.root = i, e &&
				(this.parent = e), this.name = t.type || t.name, this.attributes = this.getAttributes(t);
			var s = function(t, e) {
				var i, n = ["color", "fontSize", "lineHeight", "verticalAlign", "fontWeight", "textAlign"],
					o = t.type,
					s = void 0 === o ? N : o,
					a = t.styles,
					h = void 0 === a ? {} : a,
					c = (e || {}).computedStyle,
					f = Object.assign({}, S);
				if ([U, Y, X].includes(s) && !h.display && (f.display = _), c)
					for (var l = 0; l < n.length; l++) {
						var d = n[l];
						(h[d] || c[d]) && (h[d] = h[(i = d, i.replace(/([A-Z])/g, "-$1").toLowerCase())] || h[d] ||
							c[d])
					}
				for (var u = function(t) {
						var e, i, n, o, a = h[t];
						if (/-/.test(t) && (t = V(t), f[t] = a), /^(box|text)?shadow$/i.test(t)) {
							var c = [];
							return a.replace(/((-?\d+(rpx|px|vw|vh)?\s+?){3})(.+)/, (function() {
								for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[
									e];
								c = t[1].match(/-?\d+(rpx|px|vw|vh)?/g).map((function(t) {
									return W(t)
								})).concat(t[4])
							})), /^text/.test(t) ? f.textShadow = c : f.boxShadow = c, "continue"
						}
						if (/^border/i.test(t) && !/radius$/i.test(t)) {
							var l = t.match(/^border([BTRLa-z]+)?/)[0],
								d = t.match(/[W|S|C][a-z]+/),
								u = a.replace(/([\(,])\s+|\s+([\),])/g, "$1$2").split(" ").map((function(t) {
									return /^\d/.test(t) ? W(t, "") : t
								}));
							return f[l] || (f[l] = {}), 1 == u.length && d ? f[l][l + d[0]] = u[0] : f[l] = ((
									e = {})[l + "Width"] = B(u[0]) ? u[0] : 0, e[l + "Style"] = u[1] ||
								"solid", e[l + "Color"] = u[2] || "black", e), "continue"
						}
						if (/^background(color)?$/i.test(t)) return f.backgroundColor = a, "continue";
						if (/^objectPosition$/i.test(t)) return f[t] = a.split(" "), "continue";
						if (/^backgroundPosition$/i.test(t)) return f[t] = a.split(" "), "continue";
						if (/padding|margin|radius/i.test(t)) {
							var p = /radius$/i.test(t),
								g = "borderRadius",
								v = p ? g : t.match(/[a-z]+/)[0],
								y = function(t, e) {
									return "border".concat(t).concat(e, "Radius")
								},
								x = [0, 0, 0, 0].map((function(t, e) {
									return p ? [y(r[0], r[3]), y(r[0], r[1]), y(r[2], r[1]), y(r[2], r[
										3])][e] : v + r[e]
								}));
							if ("padding" === t || "margin" === t || /^(border)?radius$/i.test(t)) {
								u = "".concat(a).split(" ").map((function(e) {
									return /^-?\d+(rpx|px|vh|vw)?$/.test(e) ? W(e) : "margin" !=
										t && /auto/.test(e) ? 0 : e
								}), []) || [0];
								var b = p ? g : t,
									w = u[0],
									m = u[1],
									S = u[2],
									z = u[3];
								f[b] = ((i = {})[x[0]] = D(w) ? 0 : w, i[x[1]] = B(m) || D(m) ? m : w, i[x[2]] =
									D(B(S) ? S : w) ? 0 : B(S) ? S : w, i[x[3]] = B(z) ? z : null != m ? m :
									w, i)
							} else "object" == typeof f[v] || (f[v] = ((n = {})[x[0]] = f[v] || 0, n[x[1]] = f[
									v] || 0, n[x[2]] = f[v] || 0, n[x[3]] = f[v] || 0, n)), f[v][t] =
								"margin" == v && D(a) || $(a) ? a : W(a);
							return "continue"
						}
						if (/^transform$/i.test(t)) return f[t] = {}, a.replace(
							/([a-zA-Z]+)\(([0-9,-\.%rpxdeg\s]+)\)/g, (function(e, i, n) {
								var r = n.split(",").map((function(t) {
										return t.replace(/(^\s*)|(\s*$)/g, "")
									})),
									o = function(t, e) {
										return t.includes("deg") ? 1 * t : e && !$(e) ? W(t, e) : t
									};
								i.includes("matrix") ? f[t][i] = r.map((function(t) {
										return 1 * t
									})) : i.includes("rotate") ? f[t][i] = 1 * n.match(
										/^-?\d+(\.\d+)?/)[0] : /[X, Y]/.test(i) ? f[t][i] = /[X]/
									.test(i) ? o(r[0], h.width) : o(r[0], h.height) : (f[t][i +
										"X"] = o(r[0], h.width), f[t][i + "Y"] = o(r[1] || r[0], h
											.height))
							})), "continue";
						if (/^font$/i.test(t) && console.warn("font 不支持简写"), /^textindent/i.test(t) && (f[t] =
								/^calc/.test(a) ? a : W(a)), /^textstroke/i.test(t)) {
							var I = t.match(/color|width|type$/i),
								M = (l = "textStroke", a.split(" ").map((function(t) {
									return /^\d+(rpx|px|vh|vw)?$/.test(t) ? W(t) : t
								})));
							return I ? f[l] ? f[l][I[0]] = M[0] : f[l] = ((o = {})[I[0]] = M[0], o) : f[l] = {
								width: M[0],
								color: M[1],
								type: M[2]
							}, "continue"
						}
						/^left|top$/i.test(t) && ![q, G].includes(h.position) ? f[t] = 0 : f[t] =
							/^-?[\d\.]+(px|rpx|vw|vh)?$/.test(a) ? W(a) : /em$/.test(a) && s == U ? W(a, h
								.fontSize) : a
					}, p = 0, g = Object.keys(h); p < g.length; p++) u(g[p]);
				return f
			}(t, e);
			this.isAbsolute = s.position == ft, this.isFixed = s.position == lt, this.originStyle = s, this.styles = t
				.styles, Object.keys(s).forEach((function(t) {
					Object.defineProperty(o.style, t, {
						configurable: !0,
						enumerable: !0,
						get: function() {
							return s[t]
						},
						set: function(e) {
							s[t] = e
						}
					})
				}));
			var a = {
				contentSize: A({}, this.contentSize),
				clientSize: A({}, this.clientSize),
				borderSize: A({}, this.borderSize),
				offsetSize: A({}, this.offsetSize)
			};
			Object.keys(a).forEach((function(t) {
				Object.keys(o[t]).forEach((function(e) {
					Object.defineProperty(o[t], e, {
						configurable: !0,
						enumerable: !0,
						get: function() {
							return a[t][e]
						},
						set: function(i) {
							a[t][e] = i
						}
					})
				}))
			})), this.computedStyle = this.style
		}
		var e = t.prototype;
		return e.add = function(t) {
			t.parent = this, this.children[t.id] = t
		}, e.getChildren = function() {
			var t = this;
			return Object.keys(this.children).map((function(e) {
				return t.children[e]
			}))
		}, e.prev = function(t) {
			void 0 === t && (t = this);
			var e = t.parent.getChildren();
			return e[e.findIndex((function(e) {
				return e.id == t.id
			})) - 1]
		}, e.querySelector = function(t) {
			var e = this.getChildren();
			if ("string" != typeof t) return null;
			var i = e.find((function(e) {
				var i = e.id,
					n = e.attributes;
				return i == t || n && n.uid == t
			}));
			return i || (this.parent && this.parent.querySelector && this.parent.querySelector(t) || null)
		}, e.getLineRect = function(t, e) {
			var i = {
					width: 0,
					height: 0
				},
				n = e ? e.lines : this.parent && this.parent.lines;
			return n && n.find((function(e) {
				return e.ids.includes(t)
			})) || i
		}, e.setPosition = function(t, e) {
			var i = {
				left: "width",
				top: "height",
				right: "width",
				bottom: "height"
			};
			Object.keys(i).forEach((function(n) {
				var r = n == o ? "left" : "top";
				[o, s].includes(n) && void 0 !== t.style[n] && !B(t.originStyle[r]) ? t.style[r] = e[i[
					n]] - t.offsetSize[i[n]] - W(t.style[n], e[i[n]]) : t.style[n] = W(t.style[n],
					e[i[n]])
			}))
		}, e.getAttributes = function(t) {
			var e = t.attributes,
				i = void 0 === e ? {} : e,
				n = t.uid,
				r = t.url,
				o = t.src,
				s = t.replace,
				a = t.text;
			return n && (i.uid = n), (r || o) && (i.src = i.src || r || o), s && (i.replace = s), a && (i.text = a),
				i
		}, e.getOffsetSize = function(t, e, i) {
			void 0 === i && (i = a[3]);
			var n = e || {},
				r = n.margin,
				o = (r = void 0 === r ? {} : r).marginLeft,
				s = void 0 === o ? 0 : o,
				h = r.marginTop,
				c = void 0 === h ? 0 : h,
				f = r.marginRight,
				l = void 0 === f ? 0 : f,
				d = r.marginBottom,
				u = void 0 === d ? 0 : d,
				p = n.padding,
				g = (p = void 0 === p ? {} : p).paddingLeft,
				v = void 0 === g ? 0 : g,
				y = p.paddingTop,
				x = void 0 === y ? 0 : y,
				b = p.paddingRight,
				w = void 0 === b ? 0 : b,
				m = p.paddingBottom,
				S = void 0 === m ? 0 : m,
				z = n.border,
				I = (z = void 0 === z ? {} : z).borderWidth,
				M = void 0 === I ? 0 : I,
				k = n.borderTop,
				B = (k = void 0 === k ? {} : k).borderTopWidth,
				W = void 0 === B ? M : B,
				P = n.borderBottom,
				O = (P = void 0 === P ? {} : P).borderBottomWidth,
				T = void 0 === O ? M : O,
				L = n.borderRight,
				R = (L = void 0 === L ? {} : L).borderRightWidth,
				F = void 0 === R ? M : R,
				A = n.borderLeft,
				j = (A = void 0 === A ? {} : A).borderLeftWidth,
				E = void 0 === j ? M : j,
				C = s < 0 && l < 0 ? Math.abs(s + l) : 0,
				H = c < 0 && u < 0 ? Math.abs(c + u) : 0,
				D = s >= 0 && l < 0,
				$ = c >= 0 && u < 0;
			return i == a[0] && (this[i].left = t.left + s + v + E + (D ? 2 * -l : 0), this[i].top = t.top + c + x +
					W + ($ ? 2 * -u : 0), this[i].width = t.width + (this[i].widthAdd ? 0 : C), this[i].height = t
					.height + (this[i].heightAdd ? 0 : H), this[i].widthAdd = C, this[i].heightAdd = H), i == a[
				1] && (this[i].left = t.left + s + E + (D < 0 ? -l : 0), this[i].top = t.top + c + W + ($ ? -u : 0),
					this[i].width = t.width + v + w, this[i].height = t.height + x + S), i == a[2] && (this[i]
					.left = t.left + s + E / 2 + (D < 0 ? -l : 0), this[i].top = t.top + c + W / 2 + ($ ? -u : 0),
					this[i].width = t.width + v + w + E / 2 + F / 2, this[i].height = t.height + x + S + T / 2 + W /
					2), i == a[3] && (this[i].left = t.left + (D < 0 ? -l : 0), this[i].top = t.top + ($ ? -u : 0),
					this[i].width = t.width + v + w + E + F + s + l, this[i].height = t.height + x + S + T + W + u +
					c), this[i]
		}, e.layoutBoxUpdate = function(t, e, i, n) {
			var r = this;
			if (void 0 === i && (i = -1), "border-box" == e.boxSizing) {
				var o = e || {},
					s = o.border,
					h = (s = void 0 === s ? {} : s).borderWidth,
					c = void 0 === h ? 0 : h,
					f = o.borderTop,
					l = (f = void 0 === f ? {} : f).borderTopWidth,
					d = void 0 === l ? c : l,
					u = o.borderBottom,
					p = (u = void 0 === u ? {} : u).borderBottomWidth,
					g = void 0 === p ? c : p,
					v = o.borderRight,
					y = (v = void 0 === v ? {} : v).borderRightWidth,
					x = void 0 === y ? c : y,
					b = o.borderLeft,
					w = (b = void 0 === b ? {} : b).borderLeftWidth,
					m = void 0 === w ? c : w,
					S = o.padding,
					z = (S = void 0 === S ? {} : S).paddingTop,
					I = void 0 === z ? 0 : z,
					M = S.paddingRight,
					k = void 0 === M ? 0 : M,
					B = S.paddingBottom,
					W = void 0 === B ? 0 : B,
					P = S.paddingLeft,
					O = void 0 === P ? 0 : P;
				i || (t.width -= O + k + x + m), 1 !== i || n || (t.height -= I + W + d + g)
			}
			this.layoutBox && (a.forEach((function(i) {
				return r.layoutBox[i] = r.getOffsetSize(t, e, i)
			})), this.layoutBox = Object.assign({}, this.layoutBox, this.layoutBox.borderSize))
		}, e.getBoxPosition = function() {
			var t = this.computedStyle,
				e = this.fixedLine,
				i = this.lines,
				n = t.left,
				r = void 0 === n ? 0 : n,
				o = t.top,
				s = void 0 === o ? 0 : o,
				a = A({}, this.contentSize, {
					left: r,
					top: s
				}),
				h = this.contentSize.top - this.offsetSize.top,
				c = this.contentSize.left - this.offsetSize.left;
			if (this.root.fixedLine && !this.root.isDone) {
				this.root.isDone = !0;
				for (var f, l = C(this.root.fixedLine.elements); !(f = l()).done;) {
					var d = f.value;
					d.setPosition(d, this.root.offsetSize), d.getBoxPosition()
				}
			}
			if (e)
				for (var u, p = C(e.elements); !(u = p()).done;) {
					var g = u.value,
						v = A({}, this.borderSize, {
							left: r,
							top: s
						});
					g.setPosition(g, v);
					var y = this.borderSize.top - this.offsetSize.top,
						x = this.borderSize.left - this.offsetSize.left;
					g.style.left += r + x, g.style.top += s + y, g.getBoxPosition()
				}
			if (i)
				for (var b, w = C(i); !(b = w()).done;) {
					b.value.layout(a.top + h, a.left + c)
				}
			return this.layoutBoxUpdate(a, t), this.layoutBox
		}, e.getBoxState = function(t, e) {
			return this.isBlock(t) || this.isBlock(e)
		}, e.isBlock = function(t) {
			return void 0 === t && (t = this), t && t.style.display == at
		}, e.isFlex = function(t) {
			return void 0 === t && (t = this), t && t.style.display == ct
		}, e.isInFlow = function() {
			return !(this.isAbsolute || this.isFixed)
		}, e.inFlexBox = function(t) {
			return void 0 === t && (t = this), !!t.isInFlow() && (!!t.parent && (!(!t.parent || t.parent.style
				.display !== ct) || void 0))
		}, e.isInline = function(t) {
			return void 0 === t && (t = this), t && t.style.display == ht
		}, e.contrastSize = function(t, e, i) {
			var n = t;
			return i && (n = Math.min(n, i)), e && (n = Math.max(n, e)), n
		}, e.measureText = function(t, e) {
			var i = this.ctx.measureText(t),
				n = i.width,
				r = i.actualBoundingBoxAscent,
				o = i.actualBoundingBoxDescent;
			return {
				ascent: r,
				descent: o,
				width: n,
				fontHeight: r + o || .7 * e + 1
			}
		}, e.getParentSize = function(t, e) {
			if (void 0 === t && (t = this), void 0 === e && (e = !1), t && t.parent) {
				if (t.parent.contentSize.width) return t.parent.contentSize;
				if (e) return this.getParentSize(t.parent, e)
			}
			return null
		}, e.getBoxWidthHeight = function() {
			var t = this,
				e = this.name,
				i = this.computedStyle,
				n = this.attributes,
				r = this.parent,
				o = void 0 === r ? {} : r,
				s = this.ctx,
				a = this.getChildren(),
				h = i.left,
				c = void 0 === h ? 0 : h,
				f = i.top,
				l = void 0 === f ? 0 : f,
				d = i.bottom,
				u = i.right,
				p = i.width,
				g = void 0 === p ? 0 : p,
				v = i.minWidth,
				y = i.maxWidth,
				x = i.minHeight,
				b = i.maxHeight,
				w = i.height,
				m = void 0 === w ? 0 : w,
				S = i.fontSize,
				z = i.fontWeight,
				I = i.fontFamily,
				M = i.fontStyle,
				k = i.position;
			i.textIndent;
			var B = i.lineClamp,
				P = i.lineHeight,
				O = i.padding,
				T = void 0 === O ? {} : O,
				L = i.margin,
				R = void 0 === L ? {} : L,
				F = i.border,
				A = (F = void 0 === F ? {} : F).borderWidth,
				j = void 0 === A ? 0 : A,
				E = i.borderRight,
				C = (E = void 0 === E ? {} : E).borderRightWidth,
				H = void 0 === C ? j : C,
				Y = i.borderLeft,
				U = (Y = void 0 === Y ? {} : Y).borderLeftWidth,
				N = void 0 === U ? j : U,
				X = o.contentSize && o.contentSize.width,
				_ = o.contentSize && o.contentSize.height;
			if ($(g) && X && (g = W(g, X)), $(g) && !X && (g = null), $(m) && _ && (m = W(m, _)), $(m) && !_ && (m =
					null), $(v) && X && (v = W(v, X)), $(y) && X && (y = W(y, X)), $(x) && _ && (x = W(x, _)), $(
				b) && _ && (b = W(b, _)), i.padding && X)
				for (var q in i.padding) Object.hasOwnProperty.call(T, q) && (T[q] = W(T[q], X));
			var G = T.paddingRight,
				V = void 0 === G ? 0 : G,
				J = T.paddingLeft,
				Q = void 0 === J ? 0 : J;
			if (i.margin && [R.marginLeft, R.marginRight].includes("auto"))
				if (g) {
					var Z = X && X - g - V - Q - N - H || 0;
					R.marginLeft == R.marginRight ? R.marginLeft = R.marginRight = Z / 2 : D(R.marginLeft) ? R
						.marginLeft = Z : R.marginRight = Z
				} else R.marginLeft = R.marginRight = 0;
			var K = R.marginRight,
				tt = void 0 === K ? 0 : K,
				it = R.marginLeft,
				at = {
					width: g,
					height: m,
					left: 0,
					top: 0
				},
				ht = Q + V + N + H + (void 0 === it ? 0 : it) + tt;
			if (this.offsetWidth = ht, e == ot && !this.attributes.widths) {
				var ct = n.text || "";
				s.save(), s.setFonts({
					fontFamily: I,
					fontSize: S,
					fontWeight: z,
					fontStyle: M
				}), ct.length, "\n" == ct && (ct = "", this.isBr = !0), ("" + ct).split("\n").map((function(e) {
					var i = Array.from(e).map((function(e) {
							var i = "" + (/^[\u4e00-\u9fa5]+$/.test(e) ? "cn" : e) + I + S + z +
								M,
								n = pt.get(i);
							if (n) return {
								width: n,
								text: e
							};
							var r = t.measureText(e, S).width;
							return pt.set(i, r), {
								width: r,
								text: e
							}
						})),
						n = t.measureText(e, S),
						r = n.fontHeight,
						o = n.ascent,
						s = n.descent;
					t.attributes.fontHeight = r, t.attributes.ascent = o, t.attributes.descent = s, t
						.attributes.widths || (t.attributes.widths = []), t.attributes.widths.push({
							widths: i,
							total: i.reduce((function(t, e) {
								return t + e.width
							}), 0)
						})
				})), s.restore()
			}
			if (e == rt && null == g) {
				var lt = n.width,
					dt = n.height;
				at.width = this.contrastSize(Math.round(lt * m / dt) || 0, v, y), this.layoutBoxUpdate(at, i, 0)
			}
			if (e == ot && null == g) {
				var ut = this.attributes.widths,
					gt = Math.max.apply(Math, ut.map((function(t) {
						return t.total
					})));
				if (o && X > 0 && (gt > X || this.isBlock(this)) && !this.isAbsolute && !this.isFixed) gt = X;
				at.width = this.contrastSize(gt, v, y), this.layoutBoxUpdate(at, i, 0)
			}
			if (e == ot && (o.style.flex || !this.attributes.lines)) {
				var vt = this.attributes.widths.length;
				this.attributes.widths.forEach((function(t) {
					return t.widths.reduce((function(t, e, i) {
						return t + e.width > at.width ? (vt++, e.width) : t + e.width
					}), 0)
				})), vt = B && vt > B ? B : vt, this.attributes.lines = vt
			}
			if (e == rt && null == m) {
				var yt = n.width,
					xt = n.height;
				n.text, at.height = this.contrastSize(W(at.width * xt / yt) || 0, x, b), this.layoutBoxUpdate(at, i,
					1)
			}
			e == ot && null == m && (P = W(P, S), at.height = this.contrastSize(W(this.attributes.lines * P), x, b),
				this.layoutBoxUpdate(at, i, 1, !0)), !g && o && o.children && X && (!this.isFlex(o) || o
				.isFlexCalc) && ([st, ot].includes(e) && this.isFlex() || e == st && this.isBlock(this) && this
				.isInFlow()) && (at.width = this.contrastSize(X - (o.isFlexCalc ? 0 : ht), v, y), this
				.layoutBoxUpdate(at, i)), g && !$(g) && (at.width = this.contrastSize(g, v, y), this
				.layoutBoxUpdate(at, i, 0)), m && !$(m) && (at.height = this.contrastSize(at.height, x, b), this
				.layoutBoxUpdate(at, i, 1));
			var bt = 0;
			if (a.length) {
				var wt = null,
					mt = !1;
				a.forEach((function(e, n) {
					e.getBoxWidthHeight();
					var r = a[n + 1];
					if (r && r.isInFlow() && (e.next = r), !t.line || !t.line.ids.includes(e.id))
						if (e.isInFlow() && !e.inFlexBox()) {
							var o = t.getBoxState(wt, e);
							if (e.isBr) return mt = !0;
							t.line && t.line.canIEnter(e) && !o && !mt ? t.line.add(e) : (mt = !1, (
								new et).bind(e)), wt = e
						} else e.inFlexBox() ? t.line && (t.line.canIEnter(e) || "nowrap" == i
							.flexWrap) ? t.line.add(e) : (new nt).bind(e) : e.isFixed ? t.root
							.fixedLine ? t.root.fixedLine.fixedAdd(e) : (new et).fixedBind(e) : t
							.fixedLine ? t.fixedLine.fixedAdd(e) : (new et).fixedBind(e, 1)
				})), this.lines && (bt = this.lines.reduce((function(t, e) {
					return t + e.height
				}), 0))
			}
			var St = 0,
				zt = 0;
			if (!g && (this.isAbsolute || this.isFixed) && X) {
				var It = k == ft ? X : this.root.width,
					Mt = It - ($(c) ? W(c, It) : c) - ($(u) ? W(u, It) : u);
				St = i.left ? Mt : this.lineMaxWidth
			}
			if (!m && (null != l ? l : this.isAbsolute || this.isFixed && _)) {
				var kt = k == ft ? _ : this.root.height,
					Bt = kt - ($(l) ? W(l, kt) : l) - ($(d) ? W(d, kt) : d);
				zt = i.top ? Bt : 0
			}
			if (g && !$(g) || at.width || (at.width = St || this.contrastSize((this.isBlock(this) && !this
					.isInFlow() ? X || o.lineMaxWidth : this.lineMaxWidth) || this.lineMaxWidth, v, y), this
					.layoutBoxUpdate(at, i, 0)), m || !bt && !zt || (at.height = zt || this.contrastSize(bt, x, b),
					this.layoutBoxUpdate(at, i)), i.borderRadius && this.borderSize && this.borderSize.width)
				for (var q in i.borderRadius) Object.hasOwnProperty.call(i.borderRadius, q) && (i.borderRadius[q] =
					W(i.borderRadius[q], this.borderSize.width));
			return this.layoutBox
		}, e.layout = function() {
			return this.getBoxWidthHeight(), this.root.offsetSize = this.offsetSize, this.root.contentSize = this
				.contentSize, this.getBoxPosition(), this.offsetSize
		}, t
	}(),
	vt = function() {
		var t, e, i, n, r, o, s = [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28,
				22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28
			],
			a = [3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028,
				3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177
			],
			h = [30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590,
				20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597,
				3340, 2107
			],
			c = [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0,
				16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24,
				26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4,
				0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38,
				22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18,
				4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2,
				92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11,
				22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30,
				11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28,
				1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28,
				3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15,
				28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24,
				30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14,
				45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10,
				2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30,
				12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45,
				28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13,
				3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24,
				30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14,
				23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15,
				30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49,
				10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117,
				30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20,
				61, 15, 30
			],
			f = [255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129,
				28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130,
				69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102,
				221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19,
				92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94,
				155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13,
				103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32,
				137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171,
				20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73,
				236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203,
				89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173,
				232, 116, 214, 244, 234, 168, 80, 88, 175
			],
			l = [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201,
				143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159,
				35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47,
				94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223,
				163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129,
				31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218,
				169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213,
				183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171,
				75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56,
				112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9,
				18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233,
				207, 131, 27, 54, 108, 216, 173, 71, 142, 0
			],
			d = [],
			u = [],
			p = [],
			g = [],
			v = [],
			y = 2;

		function x(t, e) {
			var i;
			t > e && (i = t, t = e, e = i), i = e, i *= e, i += e, i >>= 1, g[i += t] = 1
		}

		function b(t, i) {
			var n;
			for (p[t + e * i] = 1, n = -2; n < 2; n++) p[t + n + e * (i - 2)] = 1, p[t - 2 + e * (i + n + 1)] = 1, p[t +
				2 + e * (i + n)] = 1, p[t + n + 1 + e * (i + 2)] = 1;
			for (n = 0; n < 2; n++) x(t - 1, i + n), x(t + 1, i - n), x(t - n, i - 1), x(t + n, i + 1)
		}

		function w(t) {
			for (; t >= 255;) t = ((t -= 255) >> 8) + (255 & t);
			return t
		}
		var m = [];

		function S(t, e, i, n) {
			var r, o, s;
			for (r = 0; r < n; r++) d[i + r] = 0;
			for (r = 0; r < e; r++) {
				if (255 != (s = f[d[t + r] ^ d[i]]))
					for (o = 1; o < n; o++) d[i + o - 1] = d[i + o] ^ l[w(s + m[n - o])];
				else
					for (o = i; o < i + n; o++) d[o] = d[o + 1];
				d[i + n - 1] = 255 == s ? 0 : l[w(s + m[0])]
			}
		}

		function z(t, e) {
			var i;
			return t > e && (i = t, t = e, e = i), i = e, i += e * e, i >>= 1, g[i += t]
		}

		function I(t) {
			var i, n, r, o;
			switch (t) {
				case 0:
					for (n = 0; n < e; n++)
						for (i = 0; i < e; i++) i + n & 1 || z(i, n) || (p[i + n * e] ^= 1);
					break;
				case 1:
					for (n = 0; n < e; n++)
						for (i = 0; i < e; i++) 1 & n || z(i, n) || (p[i + n * e] ^= 1);
					break;
				case 2:
					for (n = 0; n < e; n++)
						for (r = 0, i = 0; i < e; i++, r++) 3 == r && (r = 0), r || z(i, n) || (p[i + n * e] ^= 1);
					break;
				case 3:
					for (o = 0, n = 0; n < e; n++, o++)
						for (3 == o && (o = 0), r = o, i = 0; i < e; i++, r++) 3 == r && (r = 0), r || z(i, n) || (p[i +
							n * e] ^= 1);
					break;
				case 4:
					for (n = 0; n < e; n++)
						for (r = 0, o = n >> 1 & 1, i = 0; i < e; i++, r++) 3 == r && (r = 0, o = !o), o || z(i, n) || (
							p[i + n * e] ^= 1);
					break;
				case 5:
					for (o = 0, n = 0; n < e; n++, o++)
						for (3 == o && (o = 0), r = 0, i = 0; i < e; i++, r++) 3 == r && (r = 0), (i & n & 1) + !(!r | !
							o) || z(i, n) || (p[i + n * e] ^= 1);
					break;
				case 6:
					for (o = 0, n = 0; n < e; n++, o++)
						for (3 == o && (o = 0), r = 0, i = 0; i < e; i++, r++) 3 == r && (r = 0), (i & n & 1) + (r &&
							r == o) & 1 || z(i, n) || (p[i + n * e] ^= 1);
					break;
				case 7:
					for (o = 0, n = 0; n < e; n++, o++)
						for (3 == o && (o = 0), r = 0, i = 0; i < e; i++, r++) 3 == r && (r = 0), (r && r == o) + (i +
							n & 1) & 1 || z(i, n) || (p[i + n * e] ^= 1)
			}
		}

		function M(t) {
			var e, i = 0;
			for (e = 0; e <= t; e++) v[e] >= 5 && (i += 3 + v[e] - 5);
			for (e = 3; e < t - 1; e += 2) v[e - 2] == v[e + 2] && v[e + 2] == v[e - 1] && v[e - 1] == v[e + 1] && 3 *
				v[e - 1] == v[e] && (0 == v[e - 3] || e + 3 > t || 3 * v[e - 3] >= 4 * v[e] || 3 * v[e + 3] >= 4 * v[
				e]) && (i += 40);
			return i
		}

		function k() {
			var t, i, n, r, o, s = 0,
				a = 0;
			for (i = 0; i < e - 1; i++)
				for (t = 0; t < e - 1; t++)(p[t + e * i] && p[t + 1 + e * i] && p[t + e * (i + 1)] && p[t + 1 + e * (i +
					1)] || !(p[t + e * i] || p[t + 1 + e * i] || p[t + e * (i + 1)] || p[t + 1 + e * (i + 1)])) && (
					s += 3);
			for (i = 0; i < e; i++) {
				for (v[0] = 0, n = r = t = 0; t < e; t++)(o = p[t + e * i]) == r ? v[n]++ : v[++n] = 1, a += (r = o) ?
					1 : -1;
				s += M(n)
			}
			a < 0 && (a = -a);
			var h = a,
				c = 0;
			for (h += h << 2, h <<= 1; h > e * e;) h -= e * e, c++;
			for (s += 10 * c, t = 0; t < e; t++) {
				for (v[0] = 0, n = r = i = 0; i < e; i++)(o = p[t + e * i]) == r ? v[n]++ : v[++n] = 1, r = o;
				s += M(n)
			}
			return s
		}
		var B = null;
		return {
			api: {
				get ecclevel() {
					return y
				},
				set ecclevel(t) {
					y = t
				},
				get size() {
					return _size
				},
				set size(t) {
					_size = t
				},
				get canvas() {
					return B
				},
				set canvas(t) {
					B = t
				},
				getFrame: function(v) {
					return function(v) {
						var M, B, W, P, O, T, L, R;
						P = v.length, t = 0;
						do {
							if (t++, W = 4 * (y - 1) + 16 * (t - 1), i = c[W++], n = c[W++], r = c[W++], o = c[
									W], P <= (W = r * (i + n) + n - 3 + (t <= 9))) break
						} while (t < 40);
						for (e = 17 + 4 * t, O = r + (r + o) * (i + n) + n, P = 0; P < O; P++) u[P] = 0;
						for (d = v.slice(0), P = 0; P < e * e; P++) p[P] = 0;
						for (P = 0; P < (e * (e + 1) + 1) / 2; P++) g[P] = 0;
						for (P = 0; P < 3; P++) {
							for (W = 0, B = 0, 1 == P && (W = e - 7), 2 == P && (B = e - 7), p[B + 3 + e * (W +
									3)] = 1, M = 0; M < 6; M++) p[B + M + e * W] = 1, p[B + e * (W + M + 1)] =
								1, p[B + 6 + e * (W + M)] = 1, p[B + M + 1 + e * (W + 6)] = 1;
							for (M = 1; M < 5; M++) x(B + M, W + 1), x(B + 1, W + M + 1), x(B + 5, W + M), x(B +
								M + 1, W + 5);
							for (M = 2; M < 4; M++) p[B + M + e * (W + 2)] = 1, p[B + 2 + e * (W + M + 1)] = 1,
								p[B + 4 + e * (W + M)] = 1, p[B + M + 1 + e * (W + 4)] = 1
						}
						if (t > 1)
							for (P = s[t], B = e - 7;;) {
								for (M = e - 7; M > P - 3 && (b(M, B), !(M < P));) M -= P;
								if (B <= P + 9) break;
								b(6, B -= P), b(B, 6)
							}
						for (p[8 + e * (e - 8)] = 1, B = 0; B < 7; B++) x(7, B), x(e - 8, B), x(7, B + e - 7);
						for (M = 0; M < 8; M++) x(M, 7), x(M + e - 8, 7), x(M, e - 8);
						for (M = 0; M < 9; M++) x(M, 8);
						for (M = 0; M < 8; M++) x(M + e - 8, 8), x(8, M);
						for (B = 0; B < 7; B++) x(8, B + e - 7);
						for (M = 0; M < e - 14; M++) 1 & M ? (x(8 + M, 6), x(6, 8 + M)) : (p[8 + M + 6 * e] = 1,
							p[6 + e * (8 + M)] = 1);
						if (t > 6)
							for (P = a[t - 7], W = 17, M = 0; M < 6; M++)
								for (B = 0; B < 3; B++, W--) 1 & (W > 11 ? t >> W - 12 : P >> W) ? (p[5 - M +
									e * (2 - B + e - 11)] = 1, p[2 - B + e - 11 + e * (5 - M)] = 1) : (x(5 -
									M, 2 - B + e - 11), x(2 - B + e - 11, 5 - M));
						for (B = 0; B < e; B++)
							for (M = 0; M <= B; M++) p[M + e * B] && x(M, B);
						for (O = d.length, T = 0; T < O; T++) u[T] = d.charCodeAt(T);
						if (d = u.slice(0), O >= (M = r * (i + n) + n) - 2 && (O = M - 2, t > 9 && O--), T = O,
							t > 9) {
							for (d[T + 2] = 0, d[T + 3] = 0; T--;) P = d[T], d[T + 3] |= 255 & P << 4, d[T +
								2] = P >> 4;
							d[2] |= 255 & O << 4, d[1] = O >> 4, d[0] = 64 | O >> 12
						} else {
							for (d[T + 1] = 0, d[T + 2] = 0; T--;) P = d[T], d[T + 2] |= 255 & P << 4, d[T +
								1] = P >> 4;
							d[1] |= 255 & O << 4, d[0] = 64 | O >> 4
						}
						for (T = O + 3 - (t < 10); T < M;) d[T++] = 236, d[T++] = 17;
						for (m[0] = 1, T = 0; T < o; T++) {
							for (m[T + 1] = 1, L = T; L > 0; L--) m[L] = m[L] ? m[L - 1] ^ l[w(f[m[L]] + T)] :
								m[L - 1];
							m[0] = l[w(f[m[0]] + T)]
						}
						for (T = 0; T <= o; T++) m[T] = f[m[T]];
						for (W = M, B = 0, T = 0; T < i; T++) S(B, r, W, o), B += r, W += o;
						for (T = 0; T < n; T++) S(B, r + 1, W, o), B += r + 1, W += o;
						for (B = 0, T = 0; T < r; T++) {
							for (L = 0; L < i; L++) u[B++] = d[T + L * r];
							for (L = 0; L < n; L++) u[B++] = d[i * r + T + L * (r + 1)]
						}
						for (L = 0; L < n; L++) u[B++] = d[i * r + T + L * (r + 1)];
						for (T = 0; T < o; T++)
							for (L = 0; L < i + n; L++) u[B++] = d[M + T + L * o];
						for (d = u, M = B = e - 1, W = O = 1, R = (r + o) * (i + n) + n, T = 0; T < R; T++)
							for (P = d[T], L = 0; L < 8; L++, P <<= 1) {
								128 & P && (p[M + e * B] = 1);
								do {
									O ? M-- : (M++, W ? 0 != B ? B-- : (W = !W, 6 == (M -= 2) && (M--, B = 9)) :
										B != e - 1 ? B++ : (W = !W, 6 == (M -= 2) && (M--, B -= 8))), O = !O
								} while (z(M, B))
							}
						for (d = p.slice(0), P = 0, B = 3e4, W = 0; W < 8 && (I(W), (M = k()) < B && (B = M, P =
								W), 7 != P); W++) p = d.slice(0);
						for (P != W && I(P), B = h[P + (y - 1 << 3)], W = 0; W < 8; W++, B >>= 1) 1 & B && (p[
							e - 1 - W + 8 * e] = 1, W < 6 ? p[8 + e * W] = 1 : p[8 + e * (W + 1)] = 1);
						for (W = 0; W < 7; W++, B >>= 1) 1 & B && (p[8 + e * (e - 7 + W)] = 1, W ? p[6 - W + 8 *
							e] = 1 : p[7 + 8 * e] = 1);
						return p
					}(v)
				},
				utf16to8: function(t) {
					var e, i, n, r;
					for (e = "", n = t.length, i = 0; i < n; i++)(r = t.charCodeAt(i)) >= 1 && r <= 127 ? e += t
						.charAt(i) : r > 2047 ? (e += String.fromCharCode(224 | r >> 12 & 15), e += String
							.fromCharCode(128 | r >> 6 & 63), e += String.fromCharCode(128 | r >> 0 & 63)) : (e +=
							String.fromCharCode(192 | r >> 6 & 31), e += String.fromCharCode(128 | r >> 0 & 63));
					return e
				},
				draw: function(t, i, n, r, o) {
					i.drawView(n, r);
					var s = i.ctx,
						a = n.contentSize,
						h = a.width,
						c = a.height,
						f = a.left,
						l = a.top;
					r.borderRadius, r.backgroundColor;
					var d = r.color,
						u = void 0 === d ? "#000000" : d;
					r.border, n.contentSize.left, n.borderSize.left, n.contentSize.top, n.borderSize.top;
					if (y = o || y, s) {
						s.save(), i.setOpacity(r), i.setTransform(n, r);
						var p = Math.min(h, c);
						t = this.utf16to8(t);
						var g = this.getFrame(t),
							v = p / e;
						s.setFillStyle(u);
						for (var x = 0; x < e; x++)
							for (var b = 0; b < e; b++) g[b * e + x] && s.fillRect(f + v * x, l + v * b, v, v);
						s.restore(), i.setBorder(n, r)
					} else console.warn("No canvas provided to draw QR code in!")
				}
			}
		}
	}(),
	yt = p,
	xt = u,
	bt = g,
	wt = d,
	mt = f.TOP,
	St = f.MIDDLE,
	zt = f.BOTTOM,
	It = l.LEFT,
	Mt = l.CENTER,
	kt = l.RIGHT,
	Bt = function() {
		function r(t) {
			var e, i, r = this;
			this.v = "1.9.5.1", this.id = null, this.pixelRatio = 1, this.width = 0, this.height = 0, this.sleep = 1e3 /
				30, this.count = 0, this.isRate = !1, this.isDraw = !0, this.isCache = !0, this.fixed = "", this
				.useCORS = !1, this.performance = !1, this.imageBus = [], this.createImage = function(t, e) {
					return new Promise((function(i, n) {
						var o = null;
						window || r.canvas.createImage ? (o = r.canvas && r.canvas.createImage ? r.canvas
							.createImage() : new Image, e && o.setAttribute("crossOrigin", "Anonymous"),
							o.src = t, o.onload = function() {
								i({
									width: o.naturalWidth || o.width,
									height: o.naturalHeight || o.height,
									path: o,
									src: this.src
								})
							}, o.onerror = function(t) {
								n(t)
							}) : n({
							fail: "getImageInfo fail",
							src: t
						})
					}))
				}, this.options = t, Object.assign(this, t), this.ctx = (e = t.context, i = {
					get: function(t, i) {
						if ("setFonts" === i) return function(t) {
							var i = t.fontFamily,
								r = void 0 === i ? "sans-serif" : i,
								o = t.fontSize,
								s = void 0 === o ? 14 : o,
								a = t.fontWeight,
								h = void 0 === a ? "normal" : a,
								c = t.fontStyle,
								f = void 0 === c ? "normal" : c;
							I == n.MP_TOUTIAO && (h = "bold" == h ? "bold" : "", f = "italic" == f ?
								"italic" : ""), e.font = "".concat(f, " ").concat(h, " ").concat(
								Math.round(s), "px ").concat(r)
						};
						if (!e.draw || !e.setFillStyle) {
							if ("setFillStyle" === i) return function(t) {
								e.fillStyle = t
							};
							if ("setStrokeStyle" === i) return function(t) {
								e.strokeStyle = t
							};
							if ("setLineWidth" === i) return function(t) {
								e.lineWidth = t
							};
							if ("setLineCap" === i) return function(t) {
								e.lineCap = t
							};
							if ("setFontSize" === i) return function(t) {
								e.font = "".concat(String(t), "px sans-serif")
							};
							if ("setGlobalAlpha" === i) return function(t) {
								e.globalAlpha = t
							};
							if ("setLineJoin" === i) return function(t) {
								e.lineJoin = t
							};
							if ("setTextAlign" === i) return function(t) {
								e.textAlign = t
							};
							if ("setMiterLimit" === i) return function(t) {
								e.miterLimit = t
							};
							if ("setShadow" === i) return function(t, i, n, r) {
								e.shadowOffsetX = t, e.shadowOffsetY = i, e.shadowBlur = n, e
									.shadowColor = r
							};
							if ("setTextBaseline" === i) return function(t) {
								e.textBaseline = t
							};
							if ("createCircularGradient" === i) return function() {};
							if ("draw" === i) return function() {};
							if ("function" == typeof e[i]) return function() {
								for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
								return e[i].apply(e, t)
							}
						}
						return t[i]
					},
					set: function(t, i, n) {
						return e[i] = n, !0
					}
				}, new Proxy(e, i)), this.progress = 0, this.root = {
					width: t.width,
					height: t.height,
					fontSizeRate: 1,
					fixedLine: null
				}, this.size = this.root;
			var o = 0;
			Object.defineProperty(this, "progress", {
				configurable: !0,
				set: function(t) {
					o = t, r.lifecycle("onProgress", t / r.count)
				},
				get: function() {
					return o || 0
				}
			})
		}
		return r.prototype.lifecycle = function(t, e) {
			this.options.listen && this.options.listen[t] && this.options.listen[t](e)
		}, r.prototype.setContext = function(t) {
			t && (this.ctx = t)
		}, r.prototype.init = function() {
			if (this.canvas.height || n.WEB == I) {
				this.ctx.setTransform(1, 0, 0, 1, 0, 0);
				var t = this.size.height * this.pixelRatio,
					e = this.size.width * this.pixelRatio;
				this.canvas.height = t, this.canvas.width = e, this.ctx.scale(this.pixelRatio, this.pixelRatio)
			}
		}, r.prototype.clear = function() {
			this.ctx.clearRect(0, 0, this.size.width, this.size.height)
		}, r.prototype.clipPath = function(t, e, i, n, r, o, s) {
			void 0 === o && (o = !1), void 0 === s && (s = !1);
			var a = this.ctx;
			if (/polygon/.test(r)) {
				var h = r.match(/-?\d+(rpx|px|%)?\s+-?\d+(rpx|px|%)?/g) || [];
				a.beginPath(), h.map((function(r) {
					var o = r.split(" "),
						s = o[0],
						a = o[1];
					return [W(s, i) + t, W(a, n) + e]
				})).forEach((function(t, e) {
					0 == e ? a.moveTo(t[0], t[1]) : a.lineTo(t[0], t[1])
				})), a.closePath(), s && a.stroke(), o && a.fill()
			}
		}, r.prototype.roundRect = function(t, e, i, n, r, o, s) {
			if (void 0 === o && (o = !1), void 0 === s && (s = !1), !(r < 0)) {
				var a = this.ctx;
				if (a.beginPath(), r) {
					var h = r || {},
						c = h.borderTopLeftRadius,
						f = void 0 === c ? r || 0 : c,
						l = h.borderTopRightRadius,
						d = void 0 === l ? r || 0 : l,
						u = h.borderBottomRightRadius,
						p = void 0 === u ? r || 0 : u,
						g = h.borderBottomLeftRadius,
						v = void 0 === g ? r || 0 : g;
					a.arc(t + i - p, e + n - p, p, 0, .5 * Math.PI), a.lineTo(t + v, e + n), a.arc(t + v, e + n - v,
							v, .5 * Math.PI, Math.PI), a.lineTo(t, e + f), a.arc(t + f, e + f, f, Math.PI, 1.5 *
							Math.PI), a.lineTo(t + i - d, e), a.arc(t + i - d, e + d, d, 1.5 * Math.PI, 2 * Math
						.PI), a.lineTo(t + i, e + n - p)
				} else a.rect(t, e, i, n);
				a.closePath(), s && a.stroke(), o && a.fill()
			}
		}, r.prototype.setTransform = function(t, e) {
			var i = e.transform,
				n = e.transformOrigin,
				r = this.ctx,
				o = i || {},
				s = o.scaleX,
				a = void 0 === s ? 1 : s,
				h = o.scaleY,
				c = void 0 === h ? 1 : h,
				f = o.translateX,
				l = void 0 === f ? 0 : f,
				d = o.translateY,
				u = void 0 === d ? 0 : d,
				p = o.rotate,
				g = void 0 === p ? 0 : p,
				v = o.skewX,
				y = void 0 === v ? 0 : v,
				x = o.skewY,
				b = void 0 === x ? 0 : x,
				w = t.left,
				m = t.top,
				S = t.width,
				z = t.height;
			l = W(l, S) || 0, u = W(u, z) || 0;
			var I = W("0%", 1),
				M = W("50%", 1),
				k = W("100%", 1),
				P = {
					top: I,
					center: M,
					bottom: k
				},
				O = {
					left: I,
					center: M,
					right: k
				};
			if (n = n.split(" ").filter((function(t, e) {
					return e < 2
				})).reduce((function(t, e) {
					if (/\d+/.test(e)) {
						var i = W(e, 1) / (/px|rpx$/.test(e) ? B(t.x) ? z : S : 1);
						return B(t.x) ? Object.assign(t, {
							y: i
						}) : Object.assign(t, {
							x: i
						})
					}
					return B(O[e]) && !B(t.x) ? Object.assign(t, {
						x: O[e]
					}) : Object.assign(t, {
						y: P[e] || .5
					})
				}), {}), (l || u) && r.translate(l, u), (a || c) && r.scale(a, c), g) {
				var T = w + S * n.x,
					L = m + z * n.y;
				r.translate(T, L), r.rotate(g * Math.PI / 180), r.translate(-T, -L)
			}(y || b) && r.transform(1, Math.tan(b * Math.PI / 180), Math.tan(y * Math.PI / 180), 1, 0, 0)
		}, r.prototype.setBackground = function(t, e, i, r, o) {
			var s = this.ctx;
			t && "transparent" != t ? T(t) ? L(t, e, i, r, o, s) : s.setFillStyle(t) : [n.MP_TOUTIAO, n.MP_BAIDU]
				.includes(I) ? s.setFillStyle("rgba(0,0,0,0)") : s.setFillStyle("transparent")
		}, r.prototype.setShadow = function(t) {
			var e = t.boxShadow,
				i = void 0 === e ? [] : e,
				n = this.ctx;
			if (i.length) {
				var r = i[0],
					o = i[1],
					s = i[2],
					a = i[3];
				n.setShadow(r, o, s, a)
			}
		}, r.prototype.setBorder = function(t, e) {
			var i = this.ctx,
				n = t.width,
				r = t.height,
				o = t.left,
				s = t.top,
				a = e.border,
				h = e.borderBottom,
				c = e.borderTop,
				f = e.borderRight,
				l = e.borderLeft,
				d = e.borderRadius,
				u = e.lineCap,
				p = a || {},
				g = p.borderWidth,
				v = void 0 === g ? 0 : g,
				y = p.borderStyle,
				x = p.borderColor,
				b = h || {},
				w = b.borderBottomWidth,
				m = void 0 === w ? v : w,
				S = b.borderBottomStyle,
				z = void 0 === S ? y : S,
				M = b.borderBottomColor,
				k = void 0 === M ? x : M,
				B = c || {},
				W = B.borderTopWidth,
				P = void 0 === W ? v : W,
				O = B.borderTopStyle,
				T = void 0 === O ? y : O,
				L = B.borderTopColor,
				R = void 0 === L ? x : L,
				F = f || {},
				A = F.borderRightWidth,
				j = void 0 === A ? v : A,
				E = F.borderRightStyle,
				C = void 0 === E ? y : E,
				H = F.borderRightColor,
				D = void 0 === H ? x : H,
				$ = l || {},
				Y = $.borderLeftWidth,
				U = void 0 === Y ? v : Y,
				N = $.borderLeftStyle,
				X = void 0 === N ? y : N,
				_ = $.borderLeftColor,
				q = void 0 === _ ? x : _,
				G = d || {},
				V = G.borderTopLeftRadius,
				J = void 0 === V ? d || 0 : V,
				Q = G.borderTopRightRadius,
				Z = void 0 === Q ? d || 0 : Q,
				K = G.borderBottomRightRadius,
				tt = void 0 === K ? d || 0 : K,
				et = G.borderBottomLeftRadius,
				it = void 0 === et ? d || 0 : et;
			if (h || l || c || f || a) {
				var nt = function(t, e, n) {
						"dashed" == e ? /mp/.test(I) ? i.setLineDash([Math.ceil(4 * t / 3), Math.ceil(4 * t / 3)]) :
							i.setLineDash([Math.ceil(6 * t), Math.ceil(6 * t)]) : "dotted" == e && i.setLineDash([t,
								t
							]), i.setStrokeStyle(n)
					},
					rt = function(t, e, n, r, o, s, a, h, c, f, l, d, p, g, v) {
						i.save(), i.setLineCap(v ? "square" : u), i.setLineWidth(d), nt(d, p, g), i.beginPath(), i
							.arc(t, e, a, Math.PI * c, Math.PI * f), i.lineTo(n, r), i.arc(o, s, h, Math.PI * f,
								Math.PI * l), i.stroke(), i.restore()
					};
				if (i.save(), a && !h && !l && !c && !f) return i.setLineWidth(v), nt(v, y, x), this.roundRect(o, s,
					n, r, d, !1, !!x), void i.restore();
				m && rt(o + n - tt, s + r - tt, o + it, s + r, o + it, s + r - it, tt, it, .25, .5, .75, m, z, k,
					U && j), U && rt(o + it, s + r - it, o, s + J, o + J, s + J, it, J, .75, 1, 1.25, U, X, q,
					P && m), P && rt(o + J, s + J, o + n - Z, s, o + n - Z, s + Z, J, Z, 1.25, 1.5, 1.75, P, T,
					R, U && j), j && rt(o + n - Z, s + Z, o + n, s + r - tt, o + n - tt, s + r - tt, Z, tt,
					1.75, 2, .25, j, C, D, P && m)
			}
		}, r.prototype.setOpacity = function(t) {
			var e = t.opacity,
				i = void 0 === e ? 1 : e;
			this.ctx.setGlobalAlpha(i)
		}, r.prototype.drawPattern = function(t, n, r) {
			return e(this, void 0, void 0, (function() {
				var e = this;
				return i(this, (function(i) {
					return [2, new Promise((function(i, o) {
						e.drawView(n, r, !0, !1, !0);
						var s = e,
							a = s.ctx;
						s.canvas;
						var h = n.width,
							c = n.height,
							f = n.left,
							l = n.top,
							d = r || {},
							u = d.borderRadius,
							p = void 0 === u ? 0 : u,
							g = d.backgroundImage,
							v = d.backgroundRepeat,
							y = void 0 === v ? "repeat" : v;
						g && function(t) {
							var o = a.createPattern(t.src, y);
							a.setFillStyle(o), e.roundRect(f, l, h, c,
								p, !0, !1), e.setBorder(n, r), i()
						}(t)
					}))]
				}))
			}))
		}, r.prototype.drawView = function(t, e, i, n, r) {
			void 0 === i && (i = !0), void 0 === n && (n = !0), void 0 === r && (r = !0);
			var o = this.ctx,
				s = t.width,
				a = t.height,
				h = t.left,
				c = t.top,
				f = e || {},
				l = f.borderRadius,
				d = void 0 === l ? 0 : l,
				u = f.backgroundColor,
				p = void 0 === u ? "transparent" : u,
				g = f.overflow;
			e.opacity && this.setOpacity(e), this.setTransform(t, e), r && (o.save(), this.setShadow(e)), i && this
				.setBackground(p, s, a, h, c), e.clipPath ? this.clipPath(h, c, s, a, e.clipPath, i, !1) : this
				.roundRect(h, c, s, a, d, i, !1), r && o.restore(), n && this.setBorder(t, e), "hidden" == g && o
				.clip()
		}, r.prototype.drawImage = function(t, r, o, s) {
			return void 0 === r && (r = {}), void 0 === o && (o = {}), void 0 === s && (s = !0), e(this, void 0,
				void 0, (function() {
					var a = this;
					return i(this, (function(h) {
						switch (h.label) {
							case 0:
								return [4, new Promise((function(h, c) {
									return e(a, void 0, void 0, (function() {
										var e, a, c, f, l, d, u, p,
											g, v, y, x, b, w, m, S,
											z, M, k, B, T, L = this;
										return i(this, (function(
										i) {
											return e =
												this
												.ctx,
												a = o
												.borderRadius,
												c =
												void 0 ===
												a ? 0 :
												a, f = o
												.backgroundColor,
												l =
												void 0 ===
												f ?
												"transparent" :
												f, d = o
												.objectFit,
												u =
												void 0 ===
												d ?
												"fill" :
												d, p = o
												.backgroundSize,
												g =
												void 0 ===
												p ?
												"fill" :
												p, v = o
												.objectPosition,
												y = o
												.backgroundPosition,
												x = o
												.boxShadow,
												o
												.backgroundImage &&
												(u = g,
													v =
													y),
												x &&
												this
												.drawView(
													r,
													Object
													.assign(
														o, {
															backgroundColor: l ||
																x &&
																(l ||
																	"#ffffff"
																	)
														}
														),
													!0,
													!1,
													!0),
												b = r
												.width,
												w = r
												.height,
												m = r
												.left,
												S = r
												.top, e
												.save(),
												z = r
												.contentSize
												.left -
												r
												.borderSize
												.left,
												M = r
												.contentSize
												.top - r
												.borderSize
												.top,
												s || (
													this
													.setOpacity(
														o
														),
													this
													.setTransform(
														r,
														o
														),
													this
													.setBackground(
														l,
														b,
														w,
														m,
														S
														),
													this
													.roundRect(
														m,
														S,
														b,
														w,
														c,
														!
														!
														(c ||
															!
															x &&
															l
															),
														!
														1
														)
													),
												m += z,
												S += M,
												e
											.clip(), k =
												function(
													t) {
													if ("fill" !==
														u
														) {
														var i =
															function(
																t,
																e,
																i
																) {
																var n =
																	t
																	.objectFit,
																	r =
																	t
																	.objectPosition,
																	o =
																	e
																	.width /
																	e
																	.height,
																	s =
																	i
																	.width /
																	i
																	.height,
																	a =
																	1,
																	h =
																	"contain",
																	c =
																	"cover";
																n == h &&
																	o >=
																	s ||
																	n ==
																	c &&
																	o <
																	s ?
																	a =
																	e
																	.height /
																	i
																	.height :
																	(n ==
																		h &&
																		o <
																		s ||
																		n ==
																		c &&
																		o >=
																		s
																		) &&
																	(a = e
																		.width /
																		i
																		.width
																		);
																var f =
																	i
																	.width *
																	a,
																	l =
																	i
																	.height *
																	a,
																	d =
																	r ||
																	[],
																	u =
																	d[
																		0],
																	p =
																	d[
																		1],
																	g =
																	O(
																		u) ?
																	W(u, e
																		.width
																		) :
																	(e.width -
																		f
																		) *
																	(P(u) ?
																		W(u,
																			1) :
																		{
																			left: 0,
																			center: .5,
																			right: 1
																		}
																		[u ||
																			"center"
																		]
																		),
																	v =
																	O(
																		p) ?
																	W(p, e
																		.height
																		) :
																	(e.height -
																		l
																		) *
																	(P(p) ?
																		W(p,
																			1) :
																		{
																			top: 0,
																			center: .5,
																			bottom: 1
																		}
																		[p ||
																			"center"
																		]
																		),
																	y =
																	function(
																		t,
																		e
																		) {
																		return [(t -
																				g) /
																			a,
																			(e -
																				v) /
																			a
																		]
																	},
																	x =
																	y(0,
																		0),
																	b =
																	x[
																		0],
																	w =
																	x[
																		1],
																	m =
																	y(e.width,
																		e
																		.height
																		),
																	S =
																	m[
																		0],
																	z =
																	m[
																		1],
																	I =
																	Math
																	.max,
																	M =
																	Math
																	.min;
																return {
																	sx: I(b,
																		0),
																	sy: I(w,
																		0),
																	sw: M(S -
																		b,
																		i
																		.width
																		),
																	sh: M(z -
																		w,
																		i
																		.height
																		),
																	dx: I(g,
																		0),
																	dy: I(v,
																		0),
																	dw: M(f, e
																		.width
																		),
																	dh: M(l, e
																		.height
																		)
																}
															}
															({
																	objectFit: u,
																	objectPosition: v
																},
																r
																.contentSize,
																t
																),
															o =
															i
															.sx,
															s =
															i
															.sy,
															a =
															i
															.sh,
															h =
															i
															.sw,
															c =
															i
															.dx,
															f =
															i
															.dy,
															l =
															i
															.dh,
															d =
															i
															.dw;
														I == n
															.MP_BAIDU ?
															e
															.drawImage(
																t
																.src,
																c +
																m,
																f +
																S,
																d,
																l,
																o,
																s,
																h,
																a
																) :
															e
															.drawImage(
																t
																.src,
																o,
																s,
																h,
																a,
																c +
																m,
																f +
																S,
																d,
																l
																)
													} else
														e
														.drawImage(
															t
															.src,
															m,
															S,
															b,
															w
															)
												}, B =
												function() {
													e.restore(),
														L
														.drawView(
															r,
															o,
															!
															1,
															!
															0,
															!
															1
															),
														h(
															1)
												}, T =
												function(
													t) {
													k(t),
														B()
												}, T(t),
												[2]
										}))
									}))
								}))];
							case 1:
								return h.sent(), [2]
						}
					}))
				}))
		}, r.prototype.drawText = function(t, e, i, n) {
			var r = this,
				o = this.ctx,
				s = e.borderSize,
				a = e.contentSize,
				h = e.left,
				c = e.top,
				f = a.width,
				l = a.height,
				d = a.left - s.left || 0,
				u = a.top - s.top || 0,
				p = i.color,
				g = i.lineHeight,
				v = i.fontSize,
				y = i.fontWeight,
				x = i.fontFamily,
				b = i.fontStyle,
				w = i.textIndent,
				m = void 0 === w ? 0 : w,
				S = i.textAlign,
				z = i.textStroke,
				I = i.verticalAlign,
				M = void 0 === I ? St : I,
				k = i.backgroundColor,
				P = i.lineClamp,
				O = i.backgroundClip,
				T = i.textShadow,
				L = i.textDecoration;
			if (m = B(m) ? m : 0, this.drawView(e, i, O != xt), g = W(g, v), t) {
				o.save(), h += d, c += u;
				var R = n.fontHeight,
					F = n.descent,
					A = void 0 === F ? 0 : F,
					j = n.ascent,
					E = A + (void 0 === j ? 0 : j);
				switch (o.setFonts({
						fontFamily: x,
						fontSize: v,
						fontWeight: y,
						fontStyle: b
					}), o.setTextBaseline(St), o.setTextAlign(S), O ? this.setBackground(k, f, l, h, c) : o
					.setFillStyle(p), S) {
					case It:
						break;
					case Mt:
						h += .5 * f;
						break;
					case kt:
						h += f
				}
				var C = n.lines * g,
					H = Math.ceil((l - C) / 2);
				switch (H < 0 && (H = 0), M) {
					case mt:
						break;
					case St:
						c += H;
						break;
					case zt:
						c += 2 * H
				}
				var D = (g - R) / 2,
					$ = g / 2,
					Y = function(t) {
						var e = o.measureText(t),
							i = e.actualBoundingBoxDescent,
							n = void 0 === i ? 0 : i,
							r = e.actualBoundingBoxAscent;
						return M == mt ? {
							fix: E ? void 0 === r ? 0 : r : $ - D / 2,
							lineY: E ? 0 : D - D / 2
						} : M == St ? {
							fix: E ? $ + n / 4 : $,
							lineY: E ? 0 : D
						} : M == zt ? {
							fix: E ? g - n : $ + D / 2,
							lineY: E ? 2 * D : D + D / 2
						} : {
							fix: 0,
							height: 0,
							lineY: 0
						}
					},
					U = function(t, e, i) {
						var r = t;
						switch (S) {
							case It:
								r += i;
								break;
							case Mt:
								r = (t -= i / 2) + i;
								break;
							case kt:
								r = t, t -= i
						}
						if (L) {
							o.setLineWidth(v / 13), o.beginPath();
							var s = .1 * n.fontHeight;
							/\bunderline\b/.test(L) && (o.moveTo(t, e + n.fontHeight + s), o.lineTo(r, e + n
									.fontHeight + s)), /\boverline\b/.test(L) && (o.moveTo(t, e - s), o.lineTo(r,
									e - s)), /\bline-through\b/.test(L) && (o.moveTo(t, e + .5 * n.fontHeight), o
									.lineTo(r, e + .5 * n.fontHeight)), o.closePath(), o.setStrokeStyle(p), o
								.stroke()
						}
					},
					N = function(t, e, i) {
						var n = function() {
								o.setLineWidth(z.width), o.setStrokeStyle(z.color), o.strokeText(t, e, i)
							},
							s = "outset";
						z && z.type !== s ? (o.save(), r.setShadow({
							boxShadow: T
						}), o.fillText(t, e, i), o.restore(), n()) : z && z.type == s ? (o.save(), r.setShadow({
							boxShadow: T
						}), n(), o.restore(), o.save(), o.fillText(t, e, i), o.restore()) : (r.setShadow({
							boxShadow: T
						}), o.fillText(t, e, i))
					};
				if (!n.widths || 1 == n.widths.length && n.widths[0].total + m <= a.width) {
					var X = Y(t),
						_ = X.fix,
						q = void 0 === _ ? 0 : _,
						G = X.lineY;
					return N(t, h + m, c + q), U(h + m, c + G, n && n.widths && n.widths[0].total || n.text), c +=
						g, o.restore(), void this.setBorder(e, i)
				}
				for (var V = c, J = h, Q = "", Z = 0, K = o.measureText("...").width, tt = n.widths, et = 0; et < tt
					.length; et++) {
					var it = tt[et].widths,
						nt = 0;
					Q = "", c += 1 == (Z += 1) ? 0 : g, 1 == Z && m && (nt = m, J = h + m);
					for (var rt = 0; rt < it.length; rt++) {
						1 !== Z && m && (J = h);
						var ot = it[rt],
							st = ot.width,
							at = ot.text,
							ht = (it[rt + 1] || {}).width;
						if (Q += at, (nt += st) + (void 0 === ht ? 0 : ht) + (0 == Z ? m : 0) + (Z == P ? K : 0) > a
							.width) {
							Z >= P && (Q += "…"), Z++, nt = 0;
							var ct = Y(Q);
							q = ct.fix, G = ct.lineY;
							N(Q, J, c + q), U(J, c + G, nt), c += g, Q = ""
						} else if (rt == it.length - 1) {
							et != tt.length - 1 && Z == P && K + nt < a.width && (Q += "…");
							var ft = Y(Q);
							q = ft.fix, G = ft.lineY;
							N(Q, J, c + q), U(J, c + G, nt)
						}
						if (c > V + l || Z > P) break
					}
				}
				o.restore()
			}
		}, r.prototype.source = function(t) {
			return e(this, void 0, void 0, (function() {
				var e, n, r, o, s = this;
				return i(this, (function(i) {
					switch (i.label) {
						case 0:
							if (this.node = null, e = +new Date, "{}" == JSON.stringify(t))
								return [2];
							if (t.styles = t.styles || t.css || {}, !t.type)
								for (n in t.type = wt, t)["views", "children", "type",
									"css", "styles"].includes(n) || (t.styles[n] = t[n],
									delete t[n]);
							return t.styles.boxSizing || (t.styles.boxSizing =
								"border-box"), [4, this.create(t)];
						case 1:
							return (r = i.sent()) ? (o = r.layout() || {}, this.size = o,
								this.node = r, this.onEffectFinished().then((function(
								t) {
									return s.lifecycle("onEffectSuccess", t)
								})).catch((function(t) {
									return s.lifecycle("onEffectFail", t)
								})), this.performance && console.log("布局用时：" + (+
									new Date - e) + "ms"), [2, this.size]) : [2, console
								.warn("no node")
							]
					}
				}))
			}))
		}, r.prototype.getImageInfo = function(t) {
			return this.imageBus[t] || (this.imageBus[t] = this.createImage(t, this.useCORS)), this.imageBus[t]
		}, r.prototype.create = function(n, r) {
			return e(this, void 0, void 0, (function() {
				function e(i, n, r) {
					void 0 === n && (n = {}), void 0 === r && (r = !0);
					var o = [];
					return i.forEach((function(i) {
						var s = i.styles,
							a = void 0 === s ? {} : s,
							h = i.css,
							c = void 0 === h ? {} : h,
							f = i.children,
							l = void 0 === f ? [] : f,
							d = i.views,
							u = void 0 === d ? [] : d,
							p = i.text,
							g = void 0 === p ? "" : p,
							v = i.type,
							y = void 0 === v ? "" : v;
						!l && u && (i.children = l = u);
						var x = {};
						x = t(t(r ? t({}, n) : {}, a), c);
						var b = {},
							w = {},
							m = {};
						Object.keys(x).map((function(t) {
							if (t.includes("padding") || t.includes("margin")) {
								var e = J(t, x[t]);
								Object.keys(e).map((function(t) {
									t.includes("Left") ? w[t] = e[
										t] : t.includes("Right") ?
										m[t] = e[t] : b[t] = e[t]
								}))
							}
						}));
						if (x.textIndent && (w.textIndent = x.textIndent, delete n
								.textIndent), "" !== g) {
							var S = Array.from(g);
							S.forEach((function(t, e) {
								var i = Object.assign({}, x, b);
								0 === e ? Object.assign(i, w) : e == S.length -
									1 && Object.assign(i, m), delete i.padding,
									delete i.margin, o.push({
										type: "text",
										text: t,
										styles: i
									})
							}))
						}
						if (y == yt || y == bt) o.push(i);
						else if ("block" === a.display && l.length > 0) {
							var z = e(l, x, !1);
							i.children = z, i.flattened = !0, o.push(i)
						} else if (l.length > 0) {
							z = e(l, x, r);
							o = o.concat(z)
						}
					})), o
				}
				var o, s, a, h, c, f, l, d, u, p, g, v, y, b, w, m, S, z, I, M, k, B, W, P;
				return i(this, (function(i) {
					switch (i.label) {
						case 0:
							if (!n) return [2];
							if (n.styles || (n.styles = n.css || {}), o = n.type, s = n
								.show, a = void 0 === s || s, h = o == yt, c = [xt, bt]
								.includes(o), f = "textBox" == o, l = n.styles || {}, d = l
								.backgroundImage, u = l.display, h && !n.src && !n.url)
								return [2];
							if (u == x || !a) return [2];
							if (c || f) {
								if (p = n.children, g = n.views, !p && g && (n.children =
										p = g), !n.text && (!p || p && !p.length)) return [
									2];
								p && p.length && !n.flattened && (v = e(n.children || n
									.views), n.type = "view", n.children = v)
							}
							if (!(h || n.type == wt && d)) return [3, 4];
							y = h ? n.src : "", b = /url\(['"]?(.*?)['"]?\)/.exec(d), d &&
								b && b[1] && (y = b[1] || ""), i.label = 1;
						case 1:
							return i.trys.push([1, 3, , 4]), [4, this.getImageInfo(y)];
						case 2:
							return w = i.sent(), m = w.width, S = w.height, !(z = w.path) &&
								h ? [2] : (z && (n.attributes = Object.assign(n
									.attributes || {}, {
										width: m,
										height: S,
										path: z,
										src: z,
										naturalSrc: y
									})), [3, 4]);
						case 3:
							return I = i.sent(), n.type != wt ? [2] : (this.lifecycle(
								"onEffectFail", t(t({}, I), {
									src: y
								})), [3, 4]);
						case 4:
							if (this.count += 1, M = new gt(n, r, this.root, this.ctx), !(
									k = n.children || n.views)) return [3, 8];
							B = 0, i.label = 5;
						case 5:
							return B < k.length ? (W = k[B], [4, this.create(W, M)]) : [3,
								8];
						case 6:
							(P = i.sent()) && M.add(P), i.label = 7;
						case 7:
							return B++, [3, 5];
						case 8:
							return [2, M]
					}
				}))
			}))
		}, r.prototype.drawNode = function(t, n) {
			return void 0 === n && (n = !1), e(this, void 0, void 0, (function() {
				var e, r, o, s, a, h, c, f, l, d, u, p, g, v, y, x, b, w, m, S, z, I, M;
				return i(this, (function(i) {
					switch (i.label) {
						case 0:
							return e = t.layoutBox, r = t.computedStyle, o = t.attributes,
								s = t.name, a = t.children, h = t.fixedLine, c = t
								.attributes, f = c.src, l = c.text, d = r.position, u = r
								.backgroundImage, p = r.backgroundRepeat, ["fixed"]
								.includes(d) && !n ? [2] : (this.ctx.save(), s !== wt ? [3,
										7
									] : f && u ? p ? [4, this.drawPattern(o, e, r)] : [3,
									2] : [3, 5]);
						case 1:
							return i.sent(), [3, 4];
						case 2:
							return [4, this.drawImage(o, e, r, !1)];
						case 3:
							i.sent(), i.label = 4;
						case 4:
							return [3, 6];
						case 5:
							this.drawView(e, r), i.label = 6;
						case 6:
							return [3, 10];
						case 7:
							return s === yt && f ? [4, this.drawImage(o, e, r, !1)] : [3,
							9];
						case 8:
							return i.sent(), [3, 10];
						case 9:
							s === xt ? this.drawText(l, e, r, o) : s === bt && vt.api && vt
								.api.draw(l, this, e, r), i.label = 10;
						case 10:
							if (this.progress += 1, v = (g = h || {}).beforeElements, y = g
								.afterElements, !v) return [3, 14];
							x = 0, b = v, i.label = 11;
						case 11:
							return x < b.length ? (M = b[x], [4, this.drawNode(M)]) : [3,
								14];
						case 12:
							i.sent(), i.label = 13;
						case 13:
							return x++, [3, 11];
						case 14:
							if (!a) return [3, 18];
							w = Object.values ? Object.values(a) : Object.keys(a).map((
								function(t) {
									return a[t]
								})), m = 0, S = w, i.label = 15;
						case 15:
							return m < S.length ? "absolute" === (M = S[m]).computedStyle
								.position ? [3, 17] : [4, this.drawNode(M)] : [3, 18];
						case 16:
							i.sent(), i.label = 17;
						case 17:
							return m++, [3, 15];
						case 18:
							if (!y) return [3, 22];
							z = 0, I = y, i.label = 19;
						case 19:
							return z < I.length ? (M = I[z], [4, this.drawNode(M)]) : [3,
								22];
						case 20:
							i.sent(), i.label = 21;
						case 21:
							return z++, [3, 19];
						case 22:
							return this.ctx.restore(), [2]
					}
				}))
			}))
		}, r.prototype.render = function(t) {
			var n = this;
			return void 0 === t && (t = 30), new Promise((function(r, o) {
				return e(n, void 0, void 0, (function() {
					var e, n, s, a, h, c, f, l, d, u;
					return i(this, (function(i) {
						switch (i.label) {
							case 0:
								return e = +new Date, this.init(), [4, (p = t,
									void 0 === p && (p = 0),
									new Promise((function(t) {
										return setTimeout(t, p)
									})))];
							case 1:
								i.sent(), i.label = 2;
							case 2:
								if (i.trys.push([2, 14, , 15]), !this.node)
									return [3, 12];
								if (n = this.root.fixedLine || {}, s = n
									.beforeElements, a = n.afterElements, !s)
									return [3, 6];
								h = 0, c = s, i.label = 3;
							case 3:
								return h < c.length ? (d = c[h], [4, this
									.drawNode(d, !0)
								]) : [3, 6];
							case 4:
								i.sent(), i.label = 5;
							case 5:
								return h++, [3, 3];
							case 6:
								return [4, this.drawNode(this.node)];
							case 7:
								if (i.sent(), !a) return [3, 11];
								f = 0, l = a, i.label = 8;
							case 8:
								return f < l.length ? (d = l[f], [4, this
									.drawNode(d, !0)
								]) : [3, 11];
							case 9:
								i.sent(), i.label = 10;
							case 10:
								return f++, [3, 8];
							case 11:
								return r(this.node), [3, 13];
							case 12:
								this.lifecycle("onEffectFail", "node is empty"),
									i.label = 13;
							case 13:
								return [3, 15];
							case 14:
								return u = i.sent(), this.lifecycle(
									"onEffectFail", u), o(u), [3, 15];
							case 15:
								return this.performance && console.log("渲染用时：" +
									(+new Date - e - 30) + "ms"), [2]
						}
						var p
					}))
				}))
			}))
		}, r.prototype.onEffectFinished = function() {
			var t = this,
				e = Object.keys(this.imageBus).map((function(e) {
					return t.imageBus[e]
				}));
			return Promise.all(e)
		}, r.prototype.destroy = function() {
			this.node = []
		}, r.prototype.save = function(t) {
			try {
				var e = t || {},
					i = e.fileType,
					n = void 0 === i ? "png" : i,
					r = e.quality,
					o = void 0 === r ? 1 : r;
				return this.canvas.toDataURL("image/".concat(n), o)
			} catch (t) {
				return this.lifecycle("onEffectFail", "image cross domain"), t
			}
		}, r
	}();
n.WEB == I && (window.Painter = Bt);
export {
	Bt as Painter, Bt as
	default
};