var WOW;
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [], i = e.document, o = Object.getPrototypeOf, r = n.slice, a = n.concat, s = n.push, l = n.indexOf, u = {},
        c = u.toString, d = u.hasOwnProperty, h = d.toString, f = h.call(Object), p = {}, g = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, m = function (e) {
            return null != e && e === e.window
        }, v = {type: !0, src: !0, noModule: !0};

    function y(e, t, n) {
        var o, r = (t = t || i).createElement("script");
        if (r.text = e, n) for (o in v) n[o] && (r[o] = n[o]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[c.call(e)] || "object" : typeof e
    }

    var x = function (e, t) {
        return new x.fn.init(e, t)
    }, w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function k(e) {
        var t = !!e && "length" in e && e.length, n = b(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    x.fn = x.prototype = {
        jquery: "3.3.1", constructor: x, length: 0, toArray: function () {
            return r.call(this)
        }, get: function (e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return x.each(this, e)
        }, map: function (e) {
            return this.pushStack(x.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(r.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: s, sort: n.sort, splice: n.splice
    }, x.extend = x.fn.extend = function () {
        var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (i = e[t]) && (u && i && (x.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && x.isPlainObject(n) ? n : {}, a[t] = x.extend(u, r, i)) : void 0 !== i && (a[t] = i));
        return a
    }, x.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = o(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || h.call(n) !== f))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            y(e)
        }, each: function (e, t) {
            var n, i = 0;
            if (k(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(w, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (k(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        }, grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var i, o, r = 0, s = [];
            if (k(e)) for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o); else for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return a.apply([], s)
        }, guid: 1, support: p
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var C = function (e) {
        var t, n, i, o, r, a, s, l, u, c, d, h, f, p, g, m, v, y, b, x = "sizzle" + 1 * new Date, w = e.document, k = 0,
            C = 0, _ = ae(), T = ae(), S = ae(), E = function (e, t) {
                return e === t && (d = !0), 0
            }, A = {}.hasOwnProperty, I = [], P = I.pop, D = I.push, M = I.push, O = I.slice, L = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            j = "\\[" + R + "*(" + F + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + R + "*\\]",
            H = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
            W = new RegExp(R + "+", "g"), B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            z = new RegExp("^" + R + "*," + R + "*"), V = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            q = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"), $ = new RegExp(H),
            Y = new RegExp("^" + F + "$"), U = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + j),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            }, X = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"), ee = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, ie = function () {
                h()
            }, oe = ye(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            M.apply(I = O.call(w.childNodes), w.childNodes), I[w.childNodes.length].nodeType
        } catch (e) {
            M = {
                apply: I.length ? function (e, t) {
                    D.apply(e, O.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }

        function re(e, t, i, o) {
            var r, s, u, c, d, p, v, y = t && t.ownerDocument, k = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return i;
            if (!o && ((t ? t.ownerDocument || t : w) !== f && h(t), t = t || f, g)) {
                if (11 !== k && (d = K.exec(e))) if (r = d[1]) {
                    if (9 === k) {
                        if (!(u = t.getElementById(r))) return i;
                        if (u.id === r) return i.push(u), i
                    } else if (y && (u = y.getElementById(r)) && b(t, u) && u.id === r) return i.push(u), i
                } else {
                    if (d[2]) return M.apply(i, t.getElementsByTagName(e)), i;
                    if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return M.apply(i, t.getElementsByClassName(r)), i
                }
                if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
                    if (1 !== k) y = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = x), s = (p = a(e)).length; s--;) p[s] = "#" + c + " " + ve(p[s]);
                        v = p.join(","), y = Z.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return M.apply(i, y.querySelectorAll(v)), i
                    } catch (e) {
                    } finally {
                        c === x && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(B, "$1"), t, i, o)
        }

        function ae() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
        }

        function se(e) {
            return e[x] = !0, e
        }

        function le(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
        }

        function ce(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function fe(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function pe(e) {
            return se(function (t) {
                return t = +t, se(function (n, i) {
                    for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (t in n = re.support = {}, r = re.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, h = re.setDocument = function (e) {
            var t, o, a = e ? e.ownerDocument || e : w;
            return a !== f && 9 === a.nodeType && a.documentElement ? (p = (f = a).documentElement, g = !r(f), w !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = le(function (e) {
                return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = G.test(f.getElementsByClassName), n.getById = le(function (e) {
                return p.appendChild(e).id = x, !f.getElementsByName || !f.getElementsByName(x).length
            }), n.getById ? (i.filter.ID = function (e) {
                var t = e.replace(J, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (i.filter.ID = function (e) {
                var t = e.replace(J, ee);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                        for (o = t.getElementsByName(e), i = 0; r = o[i++];) if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                    }
                    return []
                }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], m = [], (n.qsa = G.test(f.querySelectorAll)) && (le(function (e) {
                p.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
            }), le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            })), (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", H)
            }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = G.test(p.compareDocumentPosition), b = t || G.test(p.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, E = t ? function (e, t) {
                if (e === t) return d = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === w && b(w, e) ? -1 : t === f || t.ownerDocument === w && b(w, t) ? 1 : c ? L(c, e) - L(c, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return d = !0, 0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], s = [t];
                if (!o || !r) return e === f ? -1 : t === f ? 1 : o ? -1 : r ? 1 : c ? L(c, e) - L(c, t) : 0;
                if (o === r) return ce(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[i] === s[i];) i++;
                return i ? ce(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0
            }, f) : f
        }, re.matches = function (e, t) {
            return re(e, null, null, t)
        }, re.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && h(e), t = t.replace(q, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return re(t, f, null, [e]).length > 0
        }, re.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && h(e), b(e, t)
        }, re.attr = function (e, t) {
            (e.ownerDocument || e) !== f && h(e);
            var o = i.attrHandle[t.toLowerCase()],
                r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
            return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, re.escape = function (e) {
            return (e + "").replace(te, ne)
        }, re.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, re.uniqueSort = function (e) {
            var t, i = [], o = 0, r = 0;
            if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(E), d) {
                for (; t = e[r++];) t === e[r] && (o = i.push(r));
                for (; o--;) e.splice(i[o], 1)
            }
            return c = null, e
        }, o = re.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[i++];) n += o(t);
            return n
        }, (i = re.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(J, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && _(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (i) {
                        var o = re.attr(i, e);
                        return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === i && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, d, h, f, p, g = r !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (h = t; h = h[g];) if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                for (b = (f = (u = (c = (d = (h = m)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === k && u[1]) && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();) if (1 === h.nodeType && ++b && h === t) {
                                    c[e] = [k, f, b];
                                    break
                                }
                            } else if (y && (b = f = (u = (c = (d = (h = t)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === k && u[1]), !1 === b) for (; (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((c = (d = h[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [k, b]), h !== t));) ;
                            return (b -= o) === i || b % i == 0 && b / i >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                    return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        for (var i, r = o(e, t), a = r.length; a--;) e[i = L(e, r[a])] = !(n[i] = r[a])
                    }) : function (e) {
                        return o(e, 0, n)
                    }) : o
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [], n = [], i = s(e.replace(B, "$1"));
                    return i[x] ? se(function (e, t, n, o) {
                        for (var r, a = i(e, null, o, []), s = e.length; s--;) (r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function (e, o, r) {
                        return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                    }
                }), has: se(function (e) {
                    return function (t) {
                        return re(e, t).length > 0
                    }
                }), contains: se(function (e) {
                    return e = e.replace(J, ee), function (t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }), lang: se(function (e) {
                    return Y.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === p
                }, focus: function (e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: fe(!1), disabled: fe(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !i.pseudos.empty(e)
                }, header: function (e) {
                    return Q.test(e.nodeName)
                }, input: function (e) {
                    return X.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: pe(function () {
                    return [0]
                }), last: pe(function (e, t) {
                    return [t - 1]
                }), eq: pe(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: pe(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: pe(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: pe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }), gt: pe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[t] = de(t);
        for (t in{submit: !0, reset: !0}) i.pseudos[t] = he(t);

        function me() {
        }

        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(e, t, n) {
            var i = t.dir, o = t.next, r = o || i, a = n && "parentNode" === r, s = C++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];) if (1 === t.nodeType || a) return e(t, n, o);
                return !1
            } : function (t, n, l) {
                var u, c, d, h = [k, s];
                if (l) {
                    for (; t = t[i];) if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || a) if (c = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((u = c[r]) && u[0] === k && u[1] === s) return h[2] = u[2];
                    if (c[r] = h, h[2] = e(t, n, l)) return !0
                }
                return !1
            }
        }

        function be(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function xe(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (r = e[s]) && (n && !n(r, i, o) || (a.push(r), u && t.push(s)));
            return a
        }

        function we(e, t, n, i, o, r) {
            return i && !i[x] && (i = we(i)), o && !o[x] && (o = we(o, r)), se(function (r, a, s, l) {
                var u, c, d, h = [], f = [], p = a.length, g = r || function (e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []), m = !e || !r && t ? g : xe(g, h, e, s, l),
                    v = n ? o || (r ? e : p || i) ? [] : a : m;
                if (n && n(m, v, s, l), i) for (u = xe(v, f), i(u, [], s, l), c = u.length; c--;) (d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = v.length; c--;) (d = v[c]) && u.push(m[c] = d);
                            o(null, v = [], u, l)
                        }
                        for (c = v.length; c--;) (d = v[c]) && (u = o ? L(r, d) : h[c]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else v = xe(v === a ? v.splice(p, v.length) : v), o ? o(null, a, v, l) : M.apply(a, v)
            })
        }

        function ke(e) {
            for (var t, n, o, r = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = ye(function (e) {
                return e === t
            }, s, !0), d = ye(function (e) {
                return L(t, e) > -1
            }, s, !0), h = [function (e, n, i) {
                var o = !a && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                return t = null, o
            }]; l < r; l++) if (n = i.relative[e[l].type]) h = [ye(be(h), n)]; else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                    for (o = ++l; o < r && !i.relative[e[o].type]; o++) ;
                    return we(l > 1 && be(h), l > 1 && ve(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(B, "$1"), n, l < o && ke(e.slice(l, o)), o < r && ke(e = e.slice(o)), o < r && ve(e))
                }
                h.push(n)
            }
            return be(h)
        }

        function Ce(e, t) {
            var n = t.length > 0, o = e.length > 0, r = function (r, a, s, l, c) {
                var d, p, m, v = 0, y = "0", b = r && [], x = [], w = u, C = r || o && i.find.TAG("*", c),
                    _ = k += null == w ? 1 : Math.random() || .1, T = C.length;
                for (c && (u = a === f || a || c); y !== T && null != (d = C[y]); y++) {
                    if (o && d) {
                        for (p = 0, a || d.ownerDocument === f || (h(d), s = !g); m = e[p++];) if (m(d, a || f, s)) {
                            l.push(d);
                            break
                        }
                        c && (k = _)
                    }
                    n && ((d = !m && d) && v--, r && b.push(d))
                }
                if (v += y, n && y !== v) {
                    for (p = 0; m = t[p++];) m(b, x, a, s);
                    if (r) {
                        if (v > 0) for (; y--;) b[y] || x[y] || (x[y] = P.call(l));
                        x = xe(x)
                    }
                    M.apply(l, x), c && !r && x.length > 0 && v + t.length > 1 && re.uniqueSort(l)
                }
                return c && (k = _, u = w), b
            };
            return n ? se(r) : r
        }

        return me.prototype = i.filters = i.pseudos, i.setFilters = new me, a = re.tokenize = function (e, t) {
            var n, o, r, a, s, l, u, c = T[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = i.preFilter; s;) {
                for (a in n && !(o = z.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), n = !1, (o = V.exec(s)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace(B, " ")
                }), s = s.slice(n.length)), i.filter) !(o = U[a].exec(s)) || u[a] && !(o = u[a](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: a,
                    matches: o
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? re.error(e) : T(e, l).slice(0)
        }, s = re.compile = function (e, t) {
            var n, i = [], o = [], r = S[e + " "];
            if (!r) {
                for (t || (t = a(e)), n = t.length; n--;) (r = ke(t[n]))[x] ? i.push(r) : o.push(r);
                (r = S(e, Ce(o, i))).selector = e
            }
            return r
        }, l = re.select = function (e, t, n, o) {
            var r, l, u, c, d, h = "function" == typeof e && e, f = !o && a(e = h.selector || e);
            if (n = n || [], 1 === f.length) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(J, ee), t) || [])[0])) return n;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (r = U.needsContext.test(e) ? 0 : l.length; r-- && (u = l[r], !i.relative[c = u.type]);) if ((d = i.find[c]) && (o = d(u.matches[0].replace(J, ee), Z.test(l[0].type) && ge(t.parentNode) || t))) {
                    if (l.splice(r, 1), !(e = o.length && ve(l))) return M.apply(n, o), n;
                    break
                }
            }
            return (h || s(e, f))(o, t, !g, n, !t || Z.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(E).join("") === x, n.detectDuplicates = !!d, h(), n.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || ue(N, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), re
    }(e);
    x.find = C, x.expr = C.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = C.uniqueSort, x.text = C.getText, x.isXMLDoc = C.isXML, x.contains = C.contains, x.escapeSelector = C.escape;
    var _ = function (e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (o && x(e).is(n)) break;
            i.push(e)
        }
        return i
    }, T = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, S = x.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, t, n) {
        return g(t) ? x.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? x.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? x.grep(e, function (e) {
            return l.call(t, e) > -1 !== n
        }) : x.filter(t, e, n)
    }

    x.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, x.fn.extend({
        find: function (e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
                for (t = 0; t < i; t++) if (x.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, o[t], n);
            return i > 1 ? x.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(I(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(I(this, e || [], !0))
        }, is: function (e) {
            return !!I(this, "string" == typeof e && S.test(e) ? x(e) : e || [], !1).length
        }
    });
    var P, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function (e, t, n) {
        var o, r;
        if (!e) return this;
        if (n = n || P, "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(o[1]) && x.isPlainObject(t)) for (o in t) g(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, P = x(i);
    var M = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};

    function L(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    x.fn.extend({
        has: function (e) {
            var t = x(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, i = 0, o = this.length, r = [], a = "string" != typeof e && x(e);
            if (!S.test(e)) for (; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? x.uniqueSort(r) : r)
        }, index: function (e) {
            return e ? "string" == typeof e ? l.call(x(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return _(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return _(e, "parentNode", n)
        }, next: function (e) {
            return L(e, "nextSibling")
        }, prev: function (e) {
            return L(e, "previousSibling")
        }, nextAll: function (e) {
            return _(e, "nextSibling")
        }, prevAll: function (e) {
            return _(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return _(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return _(e, "previousSibling", n)
        }, siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return T(e.firstChild)
        }, contents: function (e) {
            return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, function (e, t) {
        x.fn[e] = function (n, i) {
            var o = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = x.filter(i, o)), this.length > 1 && (O[e] || x.uniqueSort(o), M.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var N = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function F(e) {
        throw e
    }

    function j(e, t, n, i) {
        var o;
        try {
            e && g(o = e.promise) ? o.call(e).done(t).fail(n) : e && g(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    x.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return x.each(e.match(N) || [], function (e, n) {
                t[n] = !0
            }), t
        }(e) : x.extend({}, e);
        var t, n, i, o, r = [], a = [], s = -1, l = function () {
            for (o = o || e.once, i = t = !0; a.length; s = -1) for (n = a.shift(); ++s < r.length;) !1 === r[s].apply(n[0], n[1]) && e.stopOnFalse && (s = r.length, n = !1);
            e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
        }, u = {
            add: function () {
                return r && (n && !t && (s = r.length - 1, a.push(n)), function t(n) {
                    x.each(n, function (n, i) {
                        g(i) ? e.unique && u.has(i) || r.push(i) : i && i.length && "string" !== b(i) && t(i)
                    })
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return x.each(arguments, function (e, t) {
                    for (var n; (n = x.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= s && s--
                }), this
            }, has: function (e) {
                return e ? x.inArray(e, r) > -1 : r.length > 0
            }, empty: function () {
                return r && (r = []), this
            }, disable: function () {
                return o = a = [], r = n = "", this
            }, disabled: function () {
                return !r
            }, lock: function () {
                return o = a = [], n || t || (r = n = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (e, n) {
                return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return u
    }, x.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", o = {
                    state: function () {
                        return i
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return o.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return x.Deferred(function (t) {
                            x.each(n, function (n, i) {
                                var o = g(e[i[4]]) && e[i[4]];
                                r[i[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, i, o) {
                        var r = 0;

                        function a(t, n, i, o) {
                            return function () {
                                var s = this, l = arguments, u = function () {
                                    var e, u;
                                    if (!(t < r)) {
                                        if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        u = e && ("object" == typeof e || "function" == typeof e) && e.then, g(u) ? o ? u.call(e, a(r, n, R, o), a(r, n, F, o)) : (r++, u.call(e, a(r, n, R, o), a(r, n, F, o), a(r, n, R, n.notifyWith))) : (i !== R && (s = void 0, l = [e]), (o || n.resolveWith)(s, l))
                                    }
                                }, c = o ? u : function () {
                                    try {
                                        u()
                                    } catch (e) {
                                        x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= r && (i !== F && (s = void 0, l = [e]), n.rejectWith(s, l))
                                    }
                                };
                                t ? c() : (x.Deferred.getStackHook && (c.stackTrace = x.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }

                        return x.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(o) ? o : R, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : R)), n[2][3].add(a(0, e, g(i) ? i : F))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? x.extend(e, o) : o
                    }
                }, r = {};
            return x.each(n, function (e, t) {
                var a = t[2], s = t[5];
                o[t[1]] = a.add, s && a.add(function () {
                    i = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), r[t[0]] = function () {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = a.fireWith
            }), o.promise(r), t && t.call(r, r), r
        }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), o = r.call(arguments), a = x.Deferred(), s = function (e) {
                return function (n) {
                    i[e] = this, o[e] = arguments.length > 1 ? r.call(arguments) : n, --t || a.resolveWith(i, o)
                }
            };
            if (t <= 1 && (j(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(o[n] && o[n].then))) return a.then();
            for (; n--;) j(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, x.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var W = x.Deferred();

    function B() {
        i.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), x.ready()
    }

    x.fn.ready = function (e) {
        return W.then(e).catch(function (e) {
            x.readyException(e)
        }), this
    }, x.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || W.resolveWith(i, [x]))
        }
    }), x.ready.then = W.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(x.ready) : (i.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var z = function (e, t, n, i, o, r, a) {
        var s = 0, l = e.length, u = null == n;
        if ("object" === b(n)) for (s in o = !0, n) z(e, t, s, n[s], !0, r, a); else if (void 0 !== i && (o = !0, g(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                return u.call(x(e), n)
            })), t)) for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
    }, V = /^-ms-/, q = /-([a-z])/g;

    function $(e, t) {
        return t.toUpperCase()
    }

    function Y(e) {
        return e.replace(V, "ms-").replace(q, $)
    }

    var U = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function X() {
        this.expando = x.expando + X.uid++
    }

    X.uid = 1, X.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[Y(t)] = n; else for (i in t) o[Y(i)] = t[i];
            return o
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(N) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                (void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var Q = new X, G = new X, K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;

    function J(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
            try {
                n = function (e) {
                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                }(n)
            } catch (e) {
            }
            G.set(e, t, n)
        } else n = void 0;
        return n
    }

    x.extend({
        hasData: function (e) {
            return G.hasData(e) || Q.hasData(e)
        }, data: function (e, t, n) {
            return G.access(e, t, n)
        }, removeData: function (e, t) {
            G.remove(e, t)
        }, _data: function (e, t, n) {
            return Q.access(e, t, n)
        }, _removeData: function (e, t) {
            Q.remove(e, t)
        }
    }), x.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0], a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = G.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = Y(i.slice(5)), J(r, i, o[i]));
                    Q.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                G.set(this, e)
            }) : z(this, function (t) {
                var n;
                if (r && void 0 === t) {
                    if (void 0 !== (n = G.get(r, e))) return n;
                    if (void 0 !== (n = J(r, e))) return n
                } else this.each(function () {
                    G.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                G.remove(this, e)
            })
        }
    }), x.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Q.get(e, t), n && (!i || Array.isArray(n) ? i = Q.access(e, t, x.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = x.queue(e, t), i = n.length, o = n.shift(), r = x._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
                x.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: x.Callbacks("once memory").add(function () {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), x.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                x.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, o = x.Deferred(), r = this, a = this.length, s = function () {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = Q.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], ie = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display")
        }, oe = function (e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = a[r];
            return o
        };

    function re(e, t, n, i) {
        var o, r, a = 20, s = i ? function () {
                return i.cur()
            } : function () {
                return x.css(e, t, "")
            }, l = s(), u = n && n[3] || (x.cssNumber[t] ? "" : "px"),
            c = (x.cssNumber[t] || "px" !== u && +l) && te.exec(x.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--;) x.style(e, t, c + u), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), c /= r;
            c *= 2, x.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
    }

    var ae = {};

    function se(e) {
        var t, n = e.ownerDocument, i = e.nodeName, o = ae[i];
        return o || (t = n.body.appendChild(n.createElement(i)), o = x.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), ae[i] = o, o)
    }

    function le(e, t) {
        for (var n, i, o = [], r = 0, a = e.length; r < a; r++) (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Q.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ie(i) && (o[r] = se(i))) : "none" !== n && (o[r] = "none", Q.set(i, "display", n)));
        for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }

    x.fn.extend({
        show: function () {
            return le(this, !0)
        }, hide: function () {
            return le(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ie(this) ? x(this).show() : x(this).hide()
            })
        }
    });
    var ue = /^(?:checkbox|radio)$/i, ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, de = /^$|^module$|\/(?:java|ecma)script/i,
        he = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function fe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? x.merge([e], n) : n
    }

    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }

    he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
    var ge = /<|&#?\w+;/;

    function me(e, t, n, i, o) {
        for (var r, a, s, l, u, c, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) if ((r = e[f]) || 0 === r) if ("object" === b(r)) x.merge(h, r.nodeType ? [r] : r); else if (ge.test(r)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (ce.exec(r) || ["", ""])[1].toLowerCase(), l = he[s] || he._default, a.innerHTML = l[1] + x.htmlPrefilter(r) + l[2], c = l[0]; c--;) a = a.lastChild;
            x.merge(h, a.childNodes), (a = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = h[f++];) if (i && x.inArray(r, i) > -1) o && o.push(r); else if (u = x.contains(r.ownerDocument, r), a = fe(d.appendChild(r), "script"), u && pe(a), n) for (c = 0; r = a[c++];) de.test(r.type || "") && n.push(r);
        return d
    }

    !function () {
        var e = i.createDocumentFragment().appendChild(i.createElement("div")), t = i.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ve = i.documentElement, ye = /^key/, be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function ke() {
        return !1
    }

    function Ce() {
        try {
            return i.activeElement
        } catch (e) {
        }
    }

    function _e(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) {
            for (s in"string" != typeof n && (i = i || n, n = void 0), t) _e(e, s, n, i, t[s], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = ke; else if (!o) return e;
        return 1 === r && (a = o, (o = function (e) {
            return x().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = x.guid++)), e.each(function () {
            x.event.add(this, t, o, i, n)
        })
    }

    x.event = {
        global: {}, add: function (e, t, n, i, o) {
            var r, a, s, l, u, c, d, h, f, p, g, m = Q.get(e);
            if (m) for (n.handler && (n = (r = n).handler, o = r.selector), o && x.find.matchesSelector(ve, o), n.guid || (n.guid = x.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
            }), u = (t = (t || "").match(N) || [""]).length; u--;) f = g = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), f && (d = x.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = x.event.special[f] || {}, c = x.extend({
                type: f,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && x.expr.match.needsContext.test(o),
                namespace: p.join(".")
            }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, c) : h.push(c), x.event.global[f] = !0)
        }, remove: function (e, t, n, i, o) {
            var r, a, s, l, u, c, d, h, f, p, g, m = Q.hasData(e) && Q.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(N) || [""]).length; u--;) if (f = g = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                    for (d = x.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = h.length; r--;) c = h[r], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(r, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
                    a && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || x.removeEvent(e, f, m.handle), delete l[f])
                } else for (f in l) x.event.remove(e, f + t[u], n, i, !0);
                x.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, i, o, r, a, s = x.event.fix(e), l = new Array(arguments.length),
                u = (Q.get(this, "events") || {})[s.type] || [], c = x.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = x.event.handlers.call(this, s, u), t = 0; (o = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        }, handlers: function (e, t) {
            var n, i, o, r, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? x(o, this).index(u) > -1 : x.find(o, this, null, [u]).length), a[o] && r.push(i);
                r.length && s.push({elem: u, handlers: r})
            }
            return u = this, l < t.length && s.push({elem: u, handlers: t.slice(l)}), s
        }, addProp: function (e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[x.expando] ? e : new x.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Ce() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Ce() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return E(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, x.Event = function (e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, x.event.addProp), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        x.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = e.relatedTarget, o = e.handleObj;
                return i && (i === this || x.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.fn.extend({
        on: function (e, t, n, i) {
            return _e(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return _e(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                x.event.remove(this, e, n, t)
            })
        }
    });
    var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Se = /<script|<style|<link/i, Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ie(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function De(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Me(e, t) {
        var n, i, o, r, a, s, l, u;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (r = Q.access(e), a = Q.set(t, r), u = r.events)) for (o in delete a.handle, a.events = {}, u) for (n = 0, i = u[o].length; n < i; n++) x.event.add(t, o, u[o][n]);
            G.hasData(e) && (s = G.access(e), l = x.extend({}, s), G.set(t, l))
        }
    }

    function Oe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ue.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Le(e, t, n, i) {
        t = a.apply([], t);
        var o, r, s, l, u, c, d = 0, h = e.length, f = h - 1, m = t[0], v = g(m);
        if (v || h > 1 && "string" == typeof m && !p.checkClone && Ee.test(m)) return e.each(function (o) {
            var r = e.eq(o);
            v && (t[0] = m.call(this, o, r.html())), Le(r, t, n, i)
        });
        if (h && (r = (o = me(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (l = (s = x.map(fe(o, "script"), Pe)).length; d < h; d++) u = o, d !== f && (u = x.clone(u, !0, !0), l && x.merge(s, fe(u, "script"))), n.call(e[d], u, d);
            if (l) for (c = s[s.length - 1].ownerDocument, x.map(s, De), d = 0; d < l; d++) u = s[d], de.test(u.type || "") && !Q.access(u, "globalEval") && x.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(u.src) : y(u.textContent.replace(Ae, ""), c, u))
        }
        return e
    }

    function Ne(e, t, n) {
        for (var i, o = t ? x.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || x.cleanData(fe(i)), i.parentNode && (n && x.contains(i.ownerDocument, i) && pe(fe(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    x.extend({
        htmlPrefilter: function (e) {
            return e.replace(Te, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, o, r, a, s = e.cloneNode(!0), l = x.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (a = fe(s), i = 0, o = (r = fe(e)).length; i < o; i++) Oe(r[i], a[i]);
            if (t) if (n) for (r = r || fe(e), a = a || fe(s), i = 0, o = r.length; i < o; i++) Me(r[i], a[i]); else Me(e, s);
            return (a = fe(s, "script")).length > 0 && pe(a, !l && fe(e, "script")), s
        }, cleanData: function (e) {
            for (var t, n, i, o = x.event.special, r = 0; void 0 !== (n = e[r]); r++) if (U(n)) {
                if (t = n[Q.expando]) {
                    if (t.events) for (i in t.events) o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                    n[Q.expando] = void 0
                }
                n[G.expando] && (n[G.expando] = void 0)
            }
        }
    }), x.fn.extend({
        detach: function (e) {
            return Ne(this, e, !0)
        }, remove: function (e) {
            return Ne(this, e)
        }, text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? x.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Le(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Le(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ie(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Le(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Le(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(fe(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return x.clone(this, e, t)
            })
        }, html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !he[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(fe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return Le(this, arguments, function (t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(fe(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        x.fn[e] = function (e) {
            for (var n, i = [], o = x(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), x(o[a])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Fe = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, je = new RegExp(ne.join("|"), "i");

    function He(e, t, n) {
        var i, o, r, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), !p.pixelBoxStyles() && Re.test(a) && je.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function We(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ve.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                o = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", ve.removeChild(u), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }

        var o, r, a, s, l, u = i.createElement("div"), c = i.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, x.extend(p, {
            boxSizingReliable: function () {
                return t(), r
            }, pixelBoxStyles: function () {
                return t(), s
            }, pixelPosition: function () {
                return t(), o
            }, reliableMarginLeft: function () {
                return t(), l
            }, scrollboxSize: function () {
                return t(), a
            }
        }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/, ze = /^--/,
        Ve = {position: "absolute", visibility: "hidden", display: "block"},
        qe = {letterSpacing: "0", fontWeight: "400"}, $e = ["Webkit", "Moz", "ms"], Ye = i.createElement("div").style;

    function Ue(e) {
        var t = x.cssProps[e];
        return t || (t = x.cssProps[e] = function (e) {
            if (e in Ye) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;) if ((e = $e[n] + t) in Ye) return e
        }(e) || e), t
    }

    function Xe(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Qe(e, t, n, i, o, r) {
        var a = "width" === t ? 1 : 0, s = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += x.css(e, n + ne[a], !0, o)), i ? ("content" === n && (l -= x.css(e, "padding" + ne[a], !0, o)), "margin" !== n && (l -= x.css(e, "border" + ne[a] + "Width", !0, o))) : (l += x.css(e, "padding" + ne[a], !0, o), "padding" !== n ? l += x.css(e, "border" + ne[a] + "Width", !0, o) : s += x.css(e, "border" + ne[a] + "Width", !0, o));
        return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5))), l
    }

    function Ge(e, t, n) {
        var i = Fe(e), o = He(e, t, i), r = "border-box" === x.css(e, "boxSizing", !1, i), a = r;
        if (Re.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return a = a && (p.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === x.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (o = parseFloat(o) || 0) + Qe(e, t, n || (r ? "border" : "content"), a, i, o) + "px"
    }

    function Ke(e, t, n, i, o) {
        return new Ke.prototype.init(e, t, n, i, o)
    }

    x.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = He(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = Y(t), l = ze.test(t), u = e.style;
                if (l || (t = Ue(s)), a = x.cssHooks[t] || x.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : u[t];
                "string" == (r = typeof n) && (o = te.exec(n)) && o[1] && (n = re(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (x.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var o, r, a, s = Y(t);
            return ze.test(t) || (t = Ue(s)), (a = x.cssHooks[t] || x.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = He(e, t, i)), "normal" === o && t in qe && (o = qe[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), x.each(["height", "width"], function (e, t) {
        x.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !Be.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, t, i) : oe(e, Ve, function () {
                    return Ge(e, t, i)
                })
            }, set: function (e, n, i) {
                var o, r = Fe(e), a = "border-box" === x.css(e, "boxSizing", !1, r), s = i && Qe(e, t, i, a, r);
                return a && p.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Qe(e, t, "border", !1, r) - .5)), s && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = x.css(e, t)), Xe(0, n, s)
            }
        }
    }), x.cssHooks.marginLeft = We(p.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), x.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        x.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = Xe)
    }), x.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var i, o, r = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = Fe(e), o = t.length; a < o; a++) r[t[a]] = x.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), x.Tween = Ke, Ke.prototype = {
        constructor: Ke, init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (x.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }, Ke.prototype.init.prototype = Ke.prototype, Ke.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Ke.propHooks.scrollTop = Ke.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, x.fx = Ke.prototype.init, x.fx.step = {};
    var Ze, Je, et = /^(?:toggle|show|hide)$/, tt = /queueHooks$/;

    function nt() {
        Je && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, x.fx.interval), x.fx.tick())
    }

    function it() {
        return e.setTimeout(function () {
            Ze = void 0
        }), Ze = Date.now()
    }

    function ot(e, t) {
        var n, i = 0, o = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function rt(e, t, n) {
        for (var i, o = (at.tweeners[t] || []).concat(at.tweeners["*"]), r = 0, a = o.length; r < a; r++) if (i = o[r].call(n, t, e)) return i
    }

    function at(e, t, n) {
        var i, o, r = 0, a = at.prefilters.length, s = x.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o) return !1;
            for (var t = Ze || it(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), r = 0, a = u.tweens.length; r < a; r++) u.tweens[r].run(i);
            return s.notifyWith(e, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
        }, u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {specialEasing: {}, easing: x.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ze || it(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < i; n++) u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (function (e, t) {
            var n, i, o, r, a;
            for (n in e) if (o = t[i = Y(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = x.cssHooks[i]) && "expand" in a) for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o); else t[i] = o
        }(c, u.opts.specialEasing); r < a; r++) if (i = at.prefilters[r].call(u, e, c, u.opts)) return g(i.stop) && (x._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return x.map(c, rt, u), g(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    x.Animation = x.extend(at, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return re(n.elem, e, te.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(N);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var i, o, r, a, s, l, u, c, d = "width" in t || "height" in t, h = this, f = {}, p = e.style,
                g = e.nodeType && ie(e), m = Q.get(e, "fxshow");
            for (i in n.queue || (null == (a = x._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, h.always(function () {
                h.always(function () {
                    a.unqueued--, x.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (o = t[i], et.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i]) continue;
                    g = !0
                }
                f[i] = m && m[i] || x.style(e, i)
            }
            if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f)) for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = Q.get(e, "display")), "none" === (c = x.css(e, "display")) && (u ? c = u : (le([e], !0), u = e.style.display || u, c = x.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === x.css(e, "float") && (l || (h.done(function () {
                p.display = u
            }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(e, "fxshow", {display: u}), r && (m.hidden = !g), g && le([e], !0), h.done(function () {
                for (i in g || le([e]), Q.remove(e, "fxshow"), f) x.style(e, i, f[i])
            })), l = rt(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }], prefilter: function (e, t) {
            t ? at.prefilters.unshift(e) : at.prefilters.push(e)
        }
    }), x.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            g(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
        }, i
    }, x.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(ie).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var o = x.isEmptyObject(e), r = x.speed(t, n, i), a = function () {
                var t = at(this, x.extend({}, e), r);
                (o || Q.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, o = null != e && e + "queueHooks", r = x.timers, a = Q.get(this);
                if (o) a[o] && a[o].stop && i(a[o]); else for (o in a) a[o] && a[o].stop && tt.test(o) && i(a[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || x.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Q.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = x.timers, a = i ? i.length : 0;
                for (n.finish = !0, x.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), x.each(["toggle", "show", "hide"], function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, i, o)
        }
    }), x.each({
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        x.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), x.timers = [], x.fx.tick = function () {
        var e, t = 0, n = x.timers;
        for (Ze = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), Ze = void 0
    }, x.fx.timer = function (e) {
        x.timers.push(e), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        Je || (Je = !0, nt())
    }, x.fx.stop = function () {
        Je = null
    }, x.fx.speeds = {slow: 600, fast: 200, _default: 400}, x.fn.delay = function (t, n) {
        return t = x.fx && x.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(o)
            }
        })
    }, function () {
        var e = i.createElement("input"), t = i.createElement("select").appendChild(i.createElement("option"));
        e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
    }();
    var st, lt = x.expr.attrHandle;
    x.fn.extend({
        attr: function (e, t) {
            return z(this, x.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                x.removeAttr(this, e)
            })
        }
    }), x.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === r && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? st : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, o = t && t.match(N);
            if (o && 1 === e.nodeType) for (; n = o[i++];) e.removeAttribute(n)
        }
    }), st = {
        set: function (e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = lt[t] || x.find.attr;
        lt[t] = function (e, t, i) {
            var o, r, a = t.toLowerCase();
            return i || (r = lt[a], lt[a] = o, o = null != n(e, t, i) ? a : null, lt[a] = r), o
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i, ct = /^(?:a|area)$/i;

    function dt(e) {
        return (e.match(N) || []).join(" ")
    }

    function ht(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ft(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
    }

    x.fn.extend({
        prop: function (e, t) {
            return z(this, x.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[x.propFix[e] || e]
            })
        }
    }), x.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && x.isXMLDoc(e) || (t = x.propFix[t] || t, o = x.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), p.optSelected || (x.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, a, s, l = 0;
            if (g(e)) return this.each(function (t) {
                x(this).addClass(e.call(this, t, ht(this)))
            });
            if ((t = ft(e)).length) for (; n = this[l++];) if (o = ht(n), i = 1 === n.nodeType && " " + dt(o) + " ") {
                for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o !== (s = dt(i)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, o, r, a, s, l = 0;
            if (g(e)) return this.each(function (t) {
                x(this).removeClass(e.call(this, t, ht(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = ft(e)).length) for (; n = this[l++];) if (o = ht(n), i = 1 === n.nodeType && " " + dt(o) + " ") {
                for (a = 0; r = t[a++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                o !== (s = dt(i)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                x(this).toggleClass(e.call(this, n, ht(this), t), t)
            }) : this.each(function () {
                var t, o, r, a;
                if (i) for (o = 0, r = x(this), a = ft(e); t = a[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || ((t = ht(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + dt(ht(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var pt = /\r/g;
    x.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = g(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, x(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(pt, "") : null == n ? "" : n : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : dt(x.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, i, o = e.options, r = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        l = a ? r + 1 : o.length;
                    for (i = r < 0 ? l : a ? r : 0; i < l; i++) if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                        if (t = x(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, i, o = e.options, r = x.makeArray(t), a = o.length; a--;) ((i = o[a]).selected = x.inArray(x.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1
            }
        }, p.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var gt = /^(?:focusinfocus|focusoutblur)$/, mt = function (e) {
        e.stopPropagation()
    };
    x.extend(x.event, {
        trigger: function (t, n, o, r) {
            var a, s, l, u, c, h, f, p, v = [o || i], y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = p = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !gt.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[y] || {}, r || !f.trigger || !1 !== f.trigger.apply(o, n))) {
                if (!r && !f.noBubble && !m(o)) {
                    for (u = f.delegateType || y, gt.test(u + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), l = s;
                    l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0; (s = v[a++]) && !t.isPropagationStopped();) p = s, t.type = a > 1 ? u : f.bindType || y, (h = (Q.get(s, "events") || {})[t.type] && Q.get(s, "handle")) && h.apply(s, n), (h = c && s[c]) && h.apply && U(s) && (t.result = h.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = y, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !U(o) || c && g(o[y]) && !m(o) && ((l = o[c]) && (o[c] = null), x.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, mt), o[y](), t.isPropagationStopped() && p.removeEventListener(y, mt), x.event.triggered = void 0, l && (o[c] = l)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = x.extend(new x.Event, n, {type: e, isSimulated: !0});
            x.event.trigger(i, null, t)
        }
    }), x.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                x.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0)
        }
    }), p.focusin || x.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, o = Q.access(i, t);
                o || i.addEventListener(e, n, !0), Q.access(i, t, (o || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, o = Q.access(i, t) - 1;
                o ? Q.access(i, t, o) : (i.removeEventListener(e, n, !0), Q.remove(i, t))
            }
        }
    });
    var vt = e.location, yt = Date.now(), bt = /\?/;
    x.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t), n
    };
    var xt = /\[\]$/, wt = /\r?\n/g, kt = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

    function _t(e, t, n, i) {
        var o;
        if (Array.isArray(t)) x.each(t, function (t, o) {
            n || xt.test(e) ? i(e, o) : _t(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        }); else if (n || "object" !== b(t)) i(e, t); else for (o in t) _t(e + "[" + o + "]", t[o], n, i)
    }

    x.param = function (e, t) {
        var n, i = [], o = function (e, t) {
            var n = g(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
            o(this.name, this.value)
        }); else for (n in e) _t(n, e[n], t, o);
        return i.join("&")
    }, x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && Ct.test(this.nodeName) && !kt.test(e) && (this.checked || !ue.test(e))
            }).map(function (e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, function (e) {
                    return {name: t.name, value: e.replace(wt, "\r\n")}
                }) : {name: t.name, value: n.replace(wt, "\r\n")}
            }).get()
        }
    });
    var Tt = /%20/g, St = /#.*$/, Et = /([?&])_=[^&]*/, At = /^(.*?):[ \t]*([^\r\n]*)$/gm, It = /^(?:GET|HEAD)$/,
        Pt = /^\/\//, Dt = {}, Mt = {}, Ot = "*/".concat("*"), Lt = i.createElement("a");

    function Nt(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0, r = t.toLowerCase().match(N) || [];
            if (g(n)) for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Rt(e, t, n, i) {
        var o = {}, r = e === Mt;

        function a(s) {
            var l;
            return o[s] = !0, x.each(e[s] || [], function (e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
            }), l
        }

        return a(t.dataTypes[0]) || !o["*"] && a("*")
    }

    function Ft(e, t) {
        var n, i, o = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && x.extend(!0, e, i), e
    }

    Lt.href = vt.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ot,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": x.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Ft(Ft(e, x.ajaxSettings), t) : Ft(x.ajaxSettings, e)
        },
        ajaxPrefilter: Nt(Dt),
        ajaxTransport: Nt(Mt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, a, s, l, u, c, d, h, f, p = x.ajaxSetup({}, n), g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? x(g) : x.event, v = x.Deferred(),
                y = x.Callbacks("once memory"), b = p.statusCode || {}, w = {}, k = {}, C = "canceled", _ = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) for (s = {}; t = At.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return c ? a : null
                    }, setRequestHeader: function (e, t) {
                        return null == c && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, w[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == c && (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (c) _.always(e[_.status]); else for (t in e) b[t] = [b[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || C;
                        return o && o.abort(t), T(0, t), this
                    }
                };
            if (v.promise(_), p.url = ((t || p.url || vt.href) + "").replace(Pt, vt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(N) || [""], null == p.crossDomain) {
                u = i.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Lt.protocol + "//" + Lt.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), Rt(Dt, p, n, _), c) return _;
            for (h in(d = x.event && p.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), r = p.url.replace(St, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Tt, "+")) : (f = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (bt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Et, "$1"), f = (bt.test(r) ? "&" : "?") + "_=" + yt++ + f), p.url = r + f), p.ifModified && (x.lastModified[r] && _.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && _.setRequestHeader("If-None-Match", x.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : p.accepts["*"]), p.headers) _.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, _, p) || c)) return _.abort();
            if (C = "abort", y.add(p.complete), _.done(p.success), _.fail(p.error), o = Rt(Mt, p, n, _)) {
                if (_.readyState = 1, d && m.trigger("ajaxSend", [_, p]), c) return _;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    _.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, o.send(w, T)
                } catch (e) {
                    if (c) throw e;
                    T(-1, e)
                }
            } else T(-1, "No Transport");

            function T(t, n, i, s) {
                var u, h, f, w, k, C = n;
                c || (c = !0, l && e.clearTimeout(l), o = void 0, a = s || "", _.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = function (e, t, n) {
                    for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (o in s) if (s[o] && s[o].test(i)) {
                        l.unshift(o);
                        break
                    }
                    if (l[0] in n) r = l[0]; else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            a || (a = o)
                        }
                        r = r || a
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(p, _, i)), w = function (e, t, n, i) {
                    var o, r, a, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (r = c.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                        if (!(a = u[l + " " + r] || u["* " + r])) for (o in u) if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e.throws) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + r}
                        }
                    }
                    return {state: "success", data: t}
                }(p, w, _, u), u ? (p.ifModified && ((k = _.getResponseHeader("Last-Modified")) && (x.lastModified[r] = k), (k = _.getResponseHeader("etag")) && (x.etag[r] = k)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, h = w.data, u = !(f = w.error))) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (n || C) + "", u ? v.resolveWith(g, [h, C, _]) : v.rejectWith(g, [_, C, f]), _.statusCode(b), b = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [_, p, u ? h : f]), y.fireWith(g, [_, C]), d && (m.trigger("ajaxComplete", [_, p]), --x.active || x.event.trigger("ajaxStop")))
            }

            return _
        },
        getJSON: function (e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], function (e, t) {
        x[t] = function (e, n, i, o) {
            return g(n) && (o = o || i, i = n, n = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, x.isPlainObject(e) && e))
        }
    }), x._evalUrl = function (e) {
        return x.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, x.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = x(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                x(this).replaceWith(this.childNodes)
            }), this
        }
    }), x.expr.pseudos.hidden = function (e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var jt = {0: 200, 1223: 204}, Ht = x.ajaxSettings.xhr();
    p.cors = !!Ht && "withCredentials" in Ht, p.ajax = Ht = !!Ht, x.ajaxTransport(function (t) {
        var n, i;
        if (p.cors || Ht && !t.crossDomain) return {
            send: function (o, r) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                n = function (e) {
                    return function () {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(jt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), x.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), x.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), x.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain) return {
            send: function (o, r) {
                t = x("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                    t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            }, abort: function () {
                n && n()
            }
        }
    });
    var Wt = [], Bt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Wt.pop() || x.expando + "_" + yt++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, a,
            s = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Bt, "$1" + o) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return a || x.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            a = arguments
        }, i.always(function () {
            void 0 === r ? x(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Wt.push(o)), a && g(r) && r(a[0]), a = r = void 0
        }), "script"
    }), p.createHTMLDocument = function () {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), x.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(o)) : t = i), r = A.exec(e), a = !n && [], r ? [t.createElement(r[1])] : (r = me([e], t, a), a && a.length && x(a).remove(), x.merge([], r.childNodes)));
        var o, r, a
    }, x.fn.load = function (e, t, n) {
        var i, o, r, a = this, s = e.indexOf(" ");
        return s > -1 && (i = dt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && x.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, a.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), x.expr.pseudos.animated = function (e) {
        return x.grep(x.timers, function (t) {
            return e === t.elem
        }).length
    }, x.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, a, s, l, u = x.css(e, "position"), c = x(e), d = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), r = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1 ? (a = (i = c.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), g(t) && (t = t.call(e, n, x.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, x.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                x.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, i = this[0], o = {top: 0, left: 0};
                if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect(); else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0), o.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - x.css(i, "marginTop", !0),
                    left: t.left - o.left - x.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || ve
            })
        }
    }), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function (i) {
            return z(this, function (e, i, o) {
                var r;
                if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
            }, e, i, arguments.length)
        }
    }), x.each(["top", "left"], function (e, t) {
        x.cssHooks[t] = We(p.pixelPosition, function (e, n) {
            if (n) return n = He(e, t), Re.test(n) ? x(e).position()[t] + "px" : n
        })
    }), x.each({Height: "height", Width: "width"}, function (e, t) {
        x.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            x.fn[i] = function (o, r) {
                var a = arguments.length && (n || "boolean" != typeof o),
                    s = n || (!0 === o || !0 === r ? "margin" : "border");
                return z(this, function (t, n, o) {
                    var r;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? x.css(t, n, s) : x.style(t, n, o, s)
                }, t, a ? o : void 0, a)
            }
        })
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), x.proxy = function (e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = r.call(arguments, 2), (o = function () {
            return e.apply(t || this, i.concat(r.call(arguments)))
        }).guid = e.guid = e.guid || x.guid++, o
    }, x.holdReady = function (e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = E, x.isFunction = g, x.isWindow = m, x.camelCase = Y, x.type = b, x.now = Date.now, x.isNumeric = function (e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    });
    var zt = e.jQuery, Vt = e.$;
    return x.noConflict = function (t) {
        return e.$ === x && (e.$ = Vt), t && e.jQuery === x && (e.jQuery = zt), x
    }, t || (e.jQuery = e.$ = x), x
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function () {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = window.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function i(e) {
        if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
        var o = t(e), r = o.overflow, a = o.overflowX, s = o.overflowY;
        return /(auto|scroll)/.test(r + s + a) ? e : i(n(e))
    }

    function o(e) {
        var n = e && e.offsetParent, i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? o(n) : n : window.document.documentElement
    }

    function r(e) {
        return null === e.parentNode ? e : r(e.parentNode)
    }

    function a(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, s = n ? t : e,
            l = document.createRange();
        l.setStart(i, 0), l.setEnd(s, 0);
        var u = l.commonAncestorContainer;
        if (e !== u && t !== u || i.contains(s)) return function (e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
        }(u) ? u : o(u);
        var c = r(e);
        return c.host ? a(c.host, t) : a(e, r(t).host)
    }

    function s(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = window.document.documentElement;
            return (window.document.scrollingElement || i)[t]
        }
        return e[t]
    }

    function l(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = s(t, "top"), o = s(t, "left"),
            r = n ? -1 : 1;
        return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
    }

    function u(e, t) {
        var n = "x" === t ? "Left" : "Top", i = "Left" == n ? "Right" : "Bottom";
        return +e["border" + n + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0]
    }

    function c(e, t, n, i) {
        return R(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], q() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function d() {
        var e = window.document.body, t = window.document.documentElement, n = q() && window.getComputedStyle(t);
        return {height: c("Height", e, t, n), width: c("Width", e, t, n)}
    }

    function h(e) {
        return X({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function f(e) {
        var n = {};
        if (q()) try {
            n = e.getBoundingClientRect();
            var i = s(e, "top"), o = s(e, "left");
            n.top += i, n.left += o, n.bottom += i, n.right += o
        } catch (e) {
        } else n = e.getBoundingClientRect();
        var r = {left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top},
            a = "HTML" === e.nodeName ? d() : {}, l = a.width || e.clientWidth || r.right - r.left,
            c = a.height || e.clientHeight || r.bottom - r.top, f = e.offsetWidth - l, p = e.offsetHeight - c;
        if (f || p) {
            var g = t(e);
            f -= u(g, "x"), p -= u(g, "y"), r.width -= f, r.height -= p
        }
        return h(r)
    }

    function p(e, n) {
        var o = q(), r = "HTML" === n.nodeName, a = f(e), s = f(n), u = i(e), c = t(n),
            d = +c.borderTopWidth.split("px")[0], p = +c.borderLeftWidth.split("px")[0],
            g = h({top: a.top - s.top - d, left: a.left - s.left - p, width: a.width, height: a.height});
        if (g.marginTop = 0, g.marginLeft = 0, !o && r) {
            var m = +c.marginTop.split("px")[0], v = +c.marginLeft.split("px")[0];
            g.top -= d - m, g.bottom -= d - m, g.left -= p - v, g.right -= p - v, g.marginTop = m, g.marginLeft = v
        }
        return (o ? n.contains(u) : n === u && "BODY" !== u.nodeName) && (g = l(g, n)), g
    }

    function g(e) {
        var t = window.document.documentElement, n = p(e, t), i = R(t.clientWidth, window.innerWidth || 0),
            o = R(t.clientHeight, window.innerHeight || 0), r = s(t), a = s(t, "left");
        return h({top: r - n.top + n.marginTop, left: a - n.left + n.marginLeft, width: i, height: o})
    }

    function m(e) {
        var i = e.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || m(n(e)))
    }

    function v(e, t, o, r) {
        var s = {top: 0, left: 0}, l = a(e, t);
        if ("viewport" === r) s = g(l); else {
            var u;
            "scrollParent" === r ? "BODY" === (u = i(n(e))).nodeName && (u = window.document.documentElement) : u = "window" === r ? window.document.documentElement : r;
            var c = p(u, l);
            if ("HTML" !== u.nodeName || m(l)) s = c; else {
                var h = d(), f = h.height, v = h.width;
                s.top += c.top - c.marginTop, s.bottom = f + c.top, s.left += c.left - c.marginLeft, s.right = v + c.left
            }
        }
        return s.left += o, s.top += o, s.right -= o, s.bottom -= o, s
    }

    function y(e, t, n, i, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = v(n, i, r, o), s = {
            top: {width: a.width, height: t.top - a.top},
            right: {width: a.right - t.right, height: a.height},
            bottom: {width: a.width, height: a.bottom - t.bottom},
            left: {width: t.left - a.left, height: a.height}
        }, l = Object.keys(s).map(function (e) {
            return X({key: e}, s[e], {
                area: function (e) {
                    return e.width * e.height
                }(s[e])
            })
        }).sort(function (e, t) {
            return t.area - e.area
        }), u = l.filter(function (e) {
            var t = e.width, i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        }), c = 0 < u.length ? u[0].key : l[0].key, d = e.split("-")[1];
        return c + (d ? "-" + d : "")
    }

    function b(e, t, n) {
        return p(n, a(t, n))
    }

    function x(e) {
        var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {width: e.offsetWidth + i, height: e.offsetHeight + n}
    }

    function w(e) {
        var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function k(e, t, n) {
        n = n.split("-")[0];
        var i = x(e), o = {width: i.width, height: i.height}, r = -1 !== ["right", "left"].indexOf(n),
            a = r ? "top" : "left", s = r ? "left" : "top", l = r ? "height" : "width", u = r ? "width" : "height";
        return o[a] = t[a] + t[l] / 2 - i[l] / 2, o[s] = n === s ? t[s] - i[u] : t[w(s)], o
    }

    function C(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function _(t, n, i) {
        return (void 0 === i ? t : t.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var i = C(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(t, "name", i))).forEach(function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = h(n.offsets.popper), n.offsets.reference = h(n.offsets.reference), n = i(n, t))
        }), n
    }

    function T(e, t) {
        return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function S(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
            var o = t[i], r = o ? "" + o + n : e;
            if (void 0 !== window.document.body.style[r]) return r
        }
        return null
    }

    function E(e, t, n, o) {
        n.updateBound = o, window.addEventListener("resize", n.updateBound, {passive: !0});
        var r = i(e);
        return function e(t, n, o, r) {
            var a = "BODY" === t.nodeName, s = a ? window : t;
            s.addEventListener(n, o, {passive: !0}), a || e(i(s.parentNode), n, o, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function A() {
        var e;
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = (this.reference, e = this.state, window.removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function I(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function P(e, t) {
        Object.keys(t).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && I(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function D(e, t, n) {
        var i = C(e, function (e) {
            return e.name === t
        }), o = !!i && e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!o) {
            var r = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }

    function M(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = G.indexOf(e),
            i = G.slice(n + 1).concat(G.slice(0, n));
        return t ? i.reverse() : i
    }

    function O(e, t, n, i) {
        var o = [0, 0], r = -1 !== ["right", "left"].indexOf(i), a = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), s = a.indexOf(C(a, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            u = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
        return (u = u.map(function (e, i) {
            var o = (1 === i ? !r : r) ? "height" : "width", a = !1;
            return e.reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return function (e, t, n, i) {
                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +o[1], a = o[2];
                    if (!r) return e;
                    if (0 === a.indexOf("%")) {
                        var s;
                        switch (a) {
                            case"%p":
                                s = n;
                                break;
                            case"%":
                            case"%r":
                            default:
                                s = i
                        }
                        return h(s)[t] / 100 * r
                    }
                    return "vh" === a || "vw" === a ? ("vh" === a ? R(document.documentElement.clientHeight, window.innerHeight || 0) : R(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r
                }(e, o, t, n)
            })
        })).forEach(function (e, t) {
            e.forEach(function (n, i) {
                I(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }), o
    }

    for (var L = Math.min, N = Math.floor, R = Math.max, F = ["native code", "[object MutationObserverConstructor]"], j = "undefined" != typeof window, H = ["Edge", "Trident", "Firefox"], W = 0, B = 0; B < H.length; B += 1) if (j && 0 <= navigator.userAgent.indexOf(H[B])) {
        W = 1;
        break
    }
    var z, V = j && function (e) {
            return F.some(function (t) {
                return -1 < (e || "").toString().indexOf(t)
            })
        }(window.MutationObserver) ? function (e) {
            var t = !1, n = 0, i = document.createElement("span");
            return new MutationObserver(function () {
                e(), t = !1
            }).observe(i, {attributes: !0}), function () {
                t || (t = !0, i.setAttribute("x-index", n), ++n)
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, W))
            }
        }, q = function () {
            return void 0 == z && (z = -1 !== navigator.appVersion.indexOf("MSIE 10")), z
        }, $ = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, Y = function () {
            function e(e, t) {
                for (var n, i = 0; i < t.length; i++) (n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), U = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, X = Object.assign || function (e) {
            for (var t, n = 1; n < arguments.length; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        Q = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        G = Q.slice(3), K = "flip", Z = "clockwise", J = "counterclockwise", ee = function () {
            function t(n, i) {
                var o = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                $(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(o.update)
                }, this.update = V(this.update.bind(this)), this.options = X({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n.jquery ? n[0] : n, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(X({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                    o.options.modifiers[e] = X({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return X({name: e}, o.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && e(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state)
                }), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }

            return Y(t, [{
                key: "update", value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                            e.offsets.reference = b(this.state, this.popper, this.reference), e.placement = y(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = k(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = _(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, T(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[S("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = E(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return A.call(this)
                }
            }]), t
        }();
    return ee.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ee.placements = Q, ee.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {
        },
        onUpdate: function () {
        },
        modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
                    if (i) {
                        var o = e.offsets, r = o.reference, a = o.popper, s = -1 !== ["bottom", "top"].indexOf(n),
                            l = s ? "left" : "top", u = s ? "width" : "height",
                            c = {start: U({}, l, r[l]), end: U({}, l, r[l] + r[u] - a[u])};
                        e.offsets.popper = X({}, a, c[i])
                    }
                    return e
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (e, t) {
                    var n, i = t.offset, o = e.placement, r = e.offsets, a = r.popper, s = r.reference,
                        l = o.split("-")[0];
                    return n = I(+i) ? [+i, 0] : O(i, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (e, t) {
                    var n = t.boundariesElement || o(e.instance.popper);
                    e.instance.reference === n && (n = o(n));
                    var i = v(e.instance.popper, e.instance.reference, t.padding, n);
                    t.boundaries = i;
                    var r = t.priority, a = e.offsets.popper, s = {
                        primary: function (e) {
                            var n = a[e];
                            return a[e] < i[e] && !t.escapeWithReference && (n = R(a[e], i[e])), U({}, e, n)
                        }, secondary: function (e) {
                            var n = "right" === e ? "left" : "top", o = a[n];
                            return a[e] > i[e] && !t.escapeWithReference && (o = L(a[n], i[e] - ("right" === e ? a.width : a.height))), U({}, n, o)
                        }
                    };
                    return r.forEach(function (e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        a = X({}, a, s[t](e))
                    }), e.offsets.popper = a, e
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, n = t.popper, i = t.reference, o = e.placement.split("-")[0], r = N,
                        a = -1 !== ["top", "bottom"].indexOf(o), s = a ? "right" : "bottom", l = a ? "left" : "top",
                        u = a ? "width" : "height";
                    return n[s] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[u]), n[l] > r(i[s]) && (e.offsets.popper[l] = r(i[s])), e
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (e, n) {
                    if (!D(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var i = n.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i))) return e
                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var o = e.placement.split("-")[0], r = e.offsets, a = r.popper, s = r.reference,
                        l = -1 !== ["left", "right"].indexOf(o), u = l ? "height" : "width", c = l ? "Top" : "Left",
                        d = c.toLowerCase(), f = l ? "left" : "top", p = l ? "bottom" : "right", g = x(i)[u];
                    s[p] - g < a[d] && (e.offsets.popper[d] -= a[d] - (s[p] - g)), s[d] + g > a[p] && (e.offsets.popper[d] += s[d] + g - a[p]);
                    var m = s[d] + s[u] / 2 - g / 2, v = t(e.instance.popper, "margin" + c).replace("px", ""),
                        y = m - h(e.offsets.popper)[d] - v;
                    return y = R(L(a[u] - g, y), 0), e.arrowElement = i, e.offsets.arrow = {}, e.offsets.arrow[d] = Math.round(y), e.offsets.arrow[f] = "", e
                }, element: "[x-arrow]"
            }, flip: {
                order: 600, enabled: !0, fn: function (e, t) {
                    if (T(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        i = e.placement.split("-")[0], o = w(i), r = e.placement.split("-")[1] || "", a = [];
                    switch (t.behavior) {
                        case K:
                            a = [i, o];
                            break;
                        case Z:
                            a = M(i);
                            break;
                        case J:
                            a = M(i, !0);
                            break;
                        default:
                            a = t.behavior
                    }
                    return a.forEach(function (s, l) {
                        if (i !== s || a.length === l + 1) return e;
                        i = e.placement.split("-")[0], o = w(i);
                        var u = e.offsets.popper, c = e.offsets.reference, d = N,
                            h = "left" === i && d(u.right) > d(c.left) || "right" === i && d(u.left) < d(c.right) || "top" === i && d(u.bottom) > d(c.top) || "bottom" === i && d(u.top) < d(c.bottom),
                            f = d(u.left) < d(n.left), p = d(u.right) > d(n.right), g = d(u.top) < d(n.top),
                            m = d(u.bottom) > d(n.bottom),
                            v = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && m,
                            y = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!t.flipVariations && (y && "start" === r && f || y && "end" === r && p || !y && "start" === r && g || !y && "end" === r && m);
                        (h || v || b) && (e.flipped = !0, (h || v) && (i = a[l + 1]), b && (r = function (e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = X({}, e.offsets.popper, k(e.instance.popper, e.offsets.reference, e.placement)), e = _(e.instance.modifiers, e, "flip"))
                    }), e
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            }, inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = e.offsets, o = i.popper, r = i.reference,
                        a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n);
                    return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0), e.placement = w(t), e.offsets.popper = h(o), e
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!D(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, n = C(e.instance.modifiers, function (e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var n = t.x, i = t.y, r = e.offsets.popper, a = C(e.instance.modifiers, function (e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, l, u = void 0 === a ? t.gpuAcceleration : a, c = f(o(e.instance.popper)),
                        d = {position: r.position},
                        h = {left: N(r.left), top: N(r.top), bottom: N(r.bottom), right: N(r.right)},
                        p = "bottom" === n ? "top" : "bottom", g = "right" === i ? "left" : "right", m = S("transform");
                    if (l = "bottom" == p ? -c.height + h.bottom : h.top, s = "right" == g ? -c.width + h.right : h.left, u && m) d[m] = "translate3d(" + s + "px, " + l + "px, 0)", d[p] = 0, d[g] = 0, d.willChange = "transform"; else {
                        var v = "bottom" == p ? -1 : 1, y = "right" == g ? -1 : 1;
                        d[p] = l * v, d[g] = s * y, d.willChange = p + ", " + g
                    }
                    var b = {"x-placement": e.placement};
                    return e.attributes = X({}, b, e.attributes), e.styles = X({}, d, e.styles), e.arrowStyles = X({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    return P(e.instance.popper, e.styles), function (e, t) {
                        Object.keys(t).forEach(function (n) {
                            !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                        })
                    }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && P(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, n, i, o) {
                    var r = b(0, t, e),
                        a = y(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a), P(t, {position: "absolute"}), n
                }, gpuAcceleration: void 0
            }
        }
    }, ee
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function (e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function (t) {
                r(e, t, n[t])
            })
        }
        return e
    }

    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = function (e) {
        var t = "transitionend";

        function n(t) {
            var n = this, o = !1;
            return e(this).one(i.TRANSITION_END, function () {
                o = !0
            }), setTimeout(function () {
                o || i.triggerTransitionEnd(n)
            }, t), this
        }

        var i = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            }, getSelectorFromElement: function (t) {
                var n = t.getAttribute("data-target");
                n && "#" !== n || (n = t.getAttribute("href") || "");
                try {
                    return e(document).find(n).length > 0 ? n : null
                } catch (e) {
                    return null
                }
            }, getTransitionDurationFromElement: function (t) {
                if (!t) return 0;
                var n = e(t).css("transition-duration");
                return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
            }, reflow: function (e) {
                return e.offsetHeight
            }, triggerTransitionEnd: function (n) {
                e(n).trigger(t)
            }, supportsTransitionEnd: function () {
                return Boolean(t)
            }, isElement: function (e) {
                return (e[0] || e).nodeType
            }, typeCheckConfig: function (e, t, n) {
                for (var o in n) if (Object.prototype.hasOwnProperty.call(n, o)) {
                    var r = n[o], a = t[o],
                        s = a && i.isElement(a) ? "element" : (l = a, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + s + '" but expected type "' + r + '".')
                }
                var l
            }
        };
        return e.fn.emulateTransitionEnd = n, e.event.special[i.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        }, i
    }(t), l = function (e) {
        var t = e.fn.alert,
            n = {CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api"},
            i = "alert", r = "fade", a = "show", l = function () {
                function t(e) {
                    this._element = e
                }

                var l = t.prototype;
                return l.close = function (e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, l.dispose = function () {
                    e.removeData(this._element, "bs.alert"), this._element = null
                }, l._getRootElement = function (t) {
                    var n = s.getSelectorFromElement(t), o = !1;
                    return n && (o = e(n)[0]), o || (o = e(t).closest("." + i)[0]), o
                }, l._triggerCloseEvent = function (t) {
                    var i = e.Event(n.CLOSE);
                    return e(t).trigger(i), i
                }, l._removeElement = function (t) {
                    var n = this;
                    if (e(t).removeClass(a), e(t).hasClass(r)) {
                        var i = s.getTransitionDurationFromElement(t);
                        e(t).one(s.TRANSITION_END, function (e) {
                            return n._destroyElement(t, e)
                        }).emulateTransitionEnd(i)
                    } else this._destroyElement(t)
                }, l._destroyElement = function (t) {
                    e(t).detach().trigger(n.CLOSED).remove()
                }, t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this), o = i.data("bs.alert");
                        o || (o = new t(this), i.data("bs.alert", o)), "close" === n && o[n](this)
                    })
                }, t._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, o(t, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }]), t
            }();
        return e(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l)), e.fn.alert = l._jQueryInterface, e.fn.alert.Constructor = l, e.fn.alert.noConflict = function () {
            return e.fn.alert = t, l._jQueryInterface
        }, l
    }(t), u = function (e) {
        var t = "button", n = e.fn[t], i = "active", r = "btn", a = "focus", s = '[data-toggle^="button"]',
            l = '[data-toggle="buttons"]', u = "input", c = ".active", d = ".btn", h = {
                CLICK_DATA_API: "click.bs.button.data-api",
                FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
            }, f = function () {
                function t(e) {
                    this._element = e
                }

                var n = t.prototype;
                return n.toggle = function () {
                    var t = !0, n = !0, o = e(this._element).closest(l)[0];
                    if (o) {
                        var r = e(this._element).find(u)[0];
                        if (r) {
                            if ("radio" === r.type) if (r.checked && e(this._element).hasClass(i)) t = !1; else {
                                var a = e(o).find(c)[0];
                                a && e(a).removeClass(i)
                            }
                            if (t) {
                                if (r.hasAttribute("disabled") || o.hasAttribute("disabled") || r.classList.contains("disabled") || o.classList.contains("disabled")) return;
                                r.checked = !e(this._element).hasClass(i), e(r).trigger("change")
                            }
                            r.focus(), n = !1
                        }
                    }
                    n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i)), t && e(this._element).toggleClass(i)
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.button"), this._element = null
                }, t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.button");
                        i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
                    })
                }, o(t, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }]), t
            }();
        return e(document).on(h.CLICK_DATA_API, s, function (t) {
            t.preventDefault();
            var n = t.target;
            e(n).hasClass(r) || (n = e(n).closest(d)), f._jQueryInterface.call(e(n), "toggle")
        }).on(h.FOCUS_BLUR_DATA_API, s, function (t) {
            var n = e(t.target).closest(d)[0];
            e(n).toggleClass(a, /^focus(in)?$/.test(t.type))
        }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
            return e.fn[t] = n, f._jQueryInterface
        }, f
    }(t), c = function (e) {
        var t = "carousel", n = "bs.carousel", i = "." + n, r = e.fn[t],
            l = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, u = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }, c = "next", d = "prev", h = "left", f = "right", p = {
                SLIDE: "slide" + i,
                SLID: "slid" + i,
                KEYDOWN: "keydown" + i,
                MOUSEENTER: "mouseenter" + i,
                MOUSELEAVE: "mouseleave" + i,
                TOUCHEND: "touchend" + i,
                LOAD_DATA_API: "load.bs.carousel.data-api",
                CLICK_DATA_API: "click.bs.carousel.data-api"
            }, g = "carousel", m = "active", v = "slide", y = "carousel-item-right", b = "carousel-item-left",
            x = "carousel-item-next", w = "carousel-item-prev", k = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            }, C = function () {
                function r(t, n) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(k.INDICATORS)[0], this._addEventListeners()
                }

                var C = r.prototype;
                return C.next = function () {
                    this._isSliding || this._slide(c)
                }, C.nextWhenVisible = function () {
                    !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                }, C.prev = function () {
                    this._isSliding || this._slide(d)
                }, C.pause = function (t) {
                    t || (this._isPaused = !0), e(this._element).find(k.NEXT_PREV)[0] && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, C.cycle = function (e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, C.to = function (t) {
                    var n = this;
                    this._activeElement = e(this._element).find(k.ACTIVE_ITEM)[0];
                    var i = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(p.SLID, function () {
                        return n.to(t)
                    }); else {
                        if (i === t) return this.pause(), void this.cycle();
                        var o = t > i ? c : d;
                        this._slide(o, this._items[t])
                    }
                }, C.dispose = function () {
                    e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, C._getConfig = function (e) {
                    return e = a({}, l, e), s.typeCheckConfig(t, e, u), e
                }, C._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard && e(this._element).on(p.KEYDOWN, function (e) {
                        return t._keydown(e)
                    }), "hover" === this._config.pause && (e(this._element).on(p.MOUSEENTER, function (e) {
                        return t.pause(e)
                    }).on(p.MOUSELEAVE, function (e) {
                        return t.cycle(e)
                    }), "ontouchstart" in document.documentElement && e(this._element).on(p.TOUCHEND, function () {
                        t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                            return t.cycle(e)
                        }, 500 + t._config.interval)
                    }))
                }, C._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next()
                    }
                }, C._getItemIndex = function (t) {
                    return this._items = e.makeArray(e(t).parent().find(k.ITEM)), this._items.indexOf(t)
                }, C._getItemByDirection = function (e, t) {
                    var n = e === c, i = e === d, o = this._getItemIndex(t), r = this._items.length - 1;
                    if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
                    var a = (o + (e === d ? -1 : 1)) % this._items.length;
                    return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                }, C._triggerSlideEvent = function (t, n) {
                    var i = this._getItemIndex(t), o = this._getItemIndex(e(this._element).find(k.ACTIVE_ITEM)[0]),
                        r = e.Event(p.SLIDE, {relatedTarget: t, direction: n, from: o, to: i});
                    return e(this._element).trigger(r), r
                }, C._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        e(this._indicatorsElement).find(k.ACTIVE).removeClass(m);
                        var n = this._indicatorsElement.children[this._getItemIndex(t)];
                        n && e(n).addClass(m)
                    }
                }, C._slide = function (t, n) {
                    var i, o, r, a = this, l = e(this._element).find(k.ACTIVE_ITEM)[0], u = this._getItemIndex(l),
                        d = n || l && this._getItemByDirection(t, l), g = this._getItemIndex(d),
                        C = Boolean(this._interval);
                    if (t === c ? (i = b, o = x, r = h) : (i = y, o = w, r = f), d && e(d).hasClass(m)) this._isSliding = !1; else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && l && d) {
                        this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(d);
                        var _ = e.Event(p.SLID, {relatedTarget: d, direction: r, from: u, to: g});
                        if (e(this._element).hasClass(v)) {
                            e(d).addClass(o), s.reflow(d), e(l).addClass(i), e(d).addClass(i);
                            var T = s.getTransitionDurationFromElement(l);
                            e(l).one(s.TRANSITION_END, function () {
                                e(d).removeClass(i + " " + o).addClass(m), e(l).removeClass(m + " " + o + " " + i), a._isSliding = !1, setTimeout(function () {
                                    return e(a._element).trigger(_)
                                }, 0)
                            }).emulateTransitionEnd(T)
                        } else e(l).removeClass(m), e(d).addClass(m), this._isSliding = !1, e(this._element).trigger(_);
                        C && this.cycle()
                    }
                }, r._jQueryInterface = function (t) {
                    return this.each(function () {
                        var i = e(this).data(n), o = a({}, l, e(this).data());
                        "object" == typeof t && (o = a({}, o, t));
                        var s = "string" == typeof t ? t : o.slide;
                        if (i || (i = new r(this, o), e(this).data(n, i)), "number" == typeof t) i.to(t); else if ("string" == typeof s) {
                            if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                            i[s]()
                        } else o.interval && (i.pause(), i.cycle())
                    })
                }, r._dataApiClickHandler = function (t) {
                    var i = s.getSelectorFromElement(this);
                    if (i) {
                        var o = e(i)[0];
                        if (o && e(o).hasClass(g)) {
                            var l = a({}, e(o).data(), e(this).data()), u = this.getAttribute("data-slide-to");
                            u && (l.interval = !1), r._jQueryInterface.call(e(o), l), u && e(o).data(n).to(u), t.preventDefault()
                        }
                    }
                }, o(r, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return l
                    }
                }]), r
            }();
        return e(document).on(p.CLICK_DATA_API, k.DATA_SLIDE, C._dataApiClickHandler), e(window).on(p.LOAD_DATA_API, function () {
            e(k.DATA_RIDE).each(function () {
                var t = e(this);
                C._jQueryInterface.call(t, t.data())
            })
        }), e.fn[t] = C._jQueryInterface, e.fn[t].Constructor = C, e.fn[t].noConflict = function () {
            return e.fn[t] = r, C._jQueryInterface
        }, C
    }(t), d = function (e) {
        var t = "collapse", n = "bs.collapse", i = e.fn[t], r = {toggle: !0, parent: ""},
            l = {toggle: "boolean", parent: "(string|element)"}, u = {
                SHOW: "show.bs.collapse",
                SHOWN: "shown.bs.collapse",
                HIDE: "hide.bs.collapse",
                HIDDEN: "hidden.bs.collapse",
                CLICK_DATA_API: "click.bs.collapse.data-api"
            }, c = "show", d = "collapse", h = "collapsing", f = "collapsed", p = "width", g = "height",
            m = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, v = function () {
                function i(t, n) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var i = e(m.DATA_TOGGLE), o = 0; o < i.length; o++) {
                        var r = i[o], a = s.getSelectorFromElement(r);
                        null !== a && e(a).filter(t).length > 0 && (this._selector = a, this._triggerArray.push(r))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }

                var v = i.prototype;
                return v.toggle = function () {
                    e(this._element).hasClass(c) ? this.hide() : this.show()
                }, v.show = function () {
                    var t, o, r = this;
                    if (!this._isTransitioning && !e(this._element).hasClass(c) && (this._parent && 0 === (t = e.makeArray(e(this._parent).find(m.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (o = e(t).not(this._selector).data(n)) && o._isTransitioning))) {
                        var a = e.Event(u.SHOW);
                        if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                            t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), o || e(t).data(n, null));
                            var l = this._getDimension();
                            e(this._element).removeClass(d).addClass(h), this._element.style[l] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var p = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                                g = s.getTransitionDurationFromElement(this._element);
                            e(this._element).one(s.TRANSITION_END, function () {
                                e(r._element).removeClass(h).addClass(d).addClass(c), r._element.style[l] = "", r.setTransitioning(!1), e(r._element).trigger(u.SHOWN)
                            }).emulateTransitionEnd(g), this._element.style[l] = this._element[p] + "px"
                        }
                    }
                }, v.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass(c)) {
                        var n = e.Event(u.HIDE);
                        if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", s.reflow(this._element), e(this._element).addClass(h).removeClass(d).removeClass(c), this._triggerArray.length > 0) for (var o = 0; o < this._triggerArray.length; o++) {
                                var r = this._triggerArray[o], a = s.getSelectorFromElement(r);
                                if (null !== a) e(a).hasClass(c) || e(r).addClass(f).attr("aria-expanded", !1)
                            }
                            this.setTransitioning(!0);
                            this._element.style[i] = "";
                            var l = s.getTransitionDurationFromElement(this._element);
                            e(this._element).one(s.TRANSITION_END, function () {
                                t.setTransitioning(!1), e(t._element).removeClass(h).addClass(d).trigger(u.HIDDEN)
                            }).emulateTransitionEnd(l)
                        }
                    }
                }, v.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, v.dispose = function () {
                    e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, v._getConfig = function (e) {
                    return (e = a({}, r, e)).toggle = Boolean(e.toggle), s.typeCheckConfig(t, e, l), e
                }, v._getDimension = function () {
                    return e(this._element).hasClass(p) ? p : g
                }, v._getParent = function () {
                    var t = this, n = null;
                    s.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                    var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return e(n).find(o).each(function (e, n) {
                        t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                    }), n
                }, v._addAriaAndCollapsedClass = function (t, n) {
                    if (t) {
                        var i = e(t).hasClass(c);
                        n.length > 0 && e(n).toggleClass(f, !i).attr("aria-expanded", i)
                    }
                }, i._getTargetFromElement = function (t) {
                    var n = s.getSelectorFromElement(t);
                    return n ? e(n)[0] : null
                }, i._jQueryInterface = function (t) {
                    return this.each(function () {
                        var o = e(this), s = o.data(n), l = a({}, r, o.data(), "object" == typeof t && t ? t : {});
                        if (!s && l.toggle && /show|hide/.test(t) && (l.toggle = !1), s || (s = new i(this, l), o.data(n, s)), "string" == typeof t) {
                            if (void 0 === s[t]) throw new TypeError('No method named "' + t + '"');
                            s[t]()
                        }
                    })
                }, o(i, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return r
                    }
                }]), i
            }();
        return e(document).on(u.CLICK_DATA_API, m.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var i = e(this), o = s.getSelectorFromElement(this);
            e(o).each(function () {
                var t = e(this), o = t.data(n) ? "toggle" : i.data();
                v._jQueryInterface.call(t, o)
            })
        }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
            return e.fn[t] = i, v._jQueryInterface
        }, v
    }(t), h = function (e) {
        var t = "dropdown", i = "bs.dropdown", r = "." + i, l = e.fn[t], u = new RegExp("38|40|27"), c = {
                HIDE: "hide" + r,
                HIDDEN: "hidden" + r,
                SHOW: "show" + r,
                SHOWN: "shown" + r,
                CLICK: "click" + r,
                CLICK_DATA_API: "click.bs.dropdown.data-api",
                KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
            }, d = "disabled", h = "show", f = "dropup", p = "dropright", g = "dropleft", m = "dropdown-menu-right",
            v = "position-static", y = '[data-toggle="dropdown"]', b = ".dropdown form", x = ".dropdown-menu",
            w = ".navbar-nav", k = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", C = "top-start",
            _ = "top-end", T = "bottom-start", S = "bottom-end", E = "right-start", A = "left-start",
            I = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, P = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            }, D = function () {
                function l(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }

                var b = l.prototype;
                return b.toggle = function () {
                    if (!this._element.disabled && !e(this._element).hasClass(d)) {
                        var t = l._getParentFromElement(this._element), i = e(this._menu).hasClass(h);
                        if (l._clearMenus(), !i) {
                            var o = {relatedTarget: this._element}, r = e.Event(c.SHOW, o);
                            if (e(t).trigger(r), !r.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var a = this._element;
                                    "parent" === this._config.reference ? a = t : s.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(v), this._popper = new n(a, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === e(t).closest(w).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(h), e(t).toggleClass(h).trigger(e.Event(c.SHOWN, o))
                            }
                        }
                    }
                }, b.dispose = function () {
                    e.removeData(this._element, i), e(this._element).off(r), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, b.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, b._addEventListeners = function () {
                    var t = this;
                    e(this._element).on(c.CLICK, function (e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle()
                    })
                }, b._getConfig = function (n) {
                    return n = a({}, this.constructor.Default, e(this._element).data(), n), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
                }, b._getMenuElement = function () {
                    if (!this._menu) {
                        var t = l._getParentFromElement(this._element);
                        this._menu = e(t).find(x)[0]
                    }
                    return this._menu
                }, b._getPlacement = function () {
                    var t = e(this._element).parent(), n = T;
                    return t.hasClass(f) ? (n = C, e(this._menu).hasClass(m) && (n = _)) : t.hasClass(p) ? n = E : t.hasClass(g) ? n = A : e(this._menu).hasClass(m) && (n = S), n
                }, b._detectNavbar = function () {
                    return e(this._element).closest(".navbar").length > 0
                }, b._getPopperConfig = function () {
                    var e = this, t = {};
                    "function" == typeof this._config.offset ? t.fn = function (t) {
                        return t.offsets = a({}, t.offsets, e._config.offset(t.offsets) || {}), t
                    } : t.offset = this._config.offset;
                    var n = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: t,
                            flip: {enabled: this._config.flip},
                            preventOverflow: {boundariesElement: this._config.boundary}
                        }
                    };
                    return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
                }, l._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data(i);
                        if (n || (n = new l(this, "object" == typeof t ? t : null), e(this).data(i, n)), "string" == typeof t) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, l._clearMenus = function (t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = e.makeArray(e(y)), o = 0; o < n.length; o++) {
                        var r = l._getParentFromElement(n[o]), a = e(n[o]).data(i), s = {relatedTarget: n[o]};
                        if (a) {
                            var u = a._menu;
                            if (e(r).hasClass(h) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(r, t.target))) {
                                var d = e.Event(c.HIDE, s);
                                e(r).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[o].setAttribute("aria-expanded", "false"), e(u).removeClass(h), e(r).removeClass(h).trigger(e.Event(c.HIDDEN, s)))
                            }
                        }
                    }
                }, l._getParentFromElement = function (t) {
                    var n, i = s.getSelectorFromElement(t);
                    return i && (n = e(i)[0]), n || t.parentNode
                }, l._dataApiKeydownHandler = function (t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(x).length)) : u.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(d))) {
                        var n = l._getParentFromElement(this), i = e(n).hasClass(h);
                        if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                            var o = e(n).find(k).get();
                            if (0 !== o.length) {
                                var r = o.indexOf(t.target);
                                38 === t.which && r > 0 && r--, 40 === t.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var a = e(n).find(y)[0];
                                e(a).trigger("focus")
                            }
                            e(this).trigger("click")
                        }
                    }
                }, o(l, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return I
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return P
                    }
                }]), l
            }();
        return e(document).on(c.KEYDOWN_DATA_API, y, D._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, x, D._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, D._clearMenus).on(c.CLICK_DATA_API, y, function (t) {
            t.preventDefault(), t.stopPropagation(), D._jQueryInterface.call(e(this), "toggle")
        }).on(c.CLICK_DATA_API, b, function (e) {
            e.stopPropagation()
        }), e.fn[t] = D._jQueryInterface, e.fn[t].Constructor = D, e.fn[t].noConflict = function () {
            return e.fn[t] = l, D._jQueryInterface
        }, D
    }(t), f = function (e) {
        var t = "modal", n = ".bs.modal", i = e.fn.modal, r = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
            l = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, u = {
                HIDE: "hide.bs.modal",
                HIDDEN: "hidden.bs.modal",
                SHOW: "show.bs.modal",
                SHOWN: "shown.bs.modal",
                FOCUSIN: "focusin.bs.modal",
                RESIZE: "resize.bs.modal",
                CLICK_DISMISS: "click.dismiss.bs.modal",
                KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                CLICK_DATA_API: "click.bs.modal.data-api"
            }, c = "modal-scrollbar-measure", d = "modal-backdrop", h = "modal-open", f = "fade", p = "show", g = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top",
                NAVBAR_TOGGLER: ".navbar-toggler"
            }, m = function () {
                function i(t, n) {
                    this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                }

                var m = i.prototype;
                return m.toggle = function (e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, m.show = function (t) {
                    var n = this;
                    if (!this._isTransitioning && !this._isShown) {
                        e(this._element).hasClass(f) && (this._isTransitioning = !0);
                        var i = e.Event(u.SHOW, {relatedTarget: t});
                        e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(h), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(u.CLICK_DISMISS, g.DATA_DISMISS, function (e) {
                            return n.hide(e)
                        }), e(this._dialog).on(u.MOUSEDOWN_DISMISS, function () {
                            e(n._element).one(u.MOUSEUP_DISMISS, function (t) {
                                e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function () {
                            return n._showElement(t)
                        }))
                    }
                }, m.hide = function (t) {
                    var n = this;
                    if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                        var i = e.Event(u.HIDE);
                        if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var o = e(this._element).hasClass(f);
                            if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(u.FOCUSIN), e(this._element).removeClass(p), e(this._element).off(u.CLICK_DISMISS), e(this._dialog).off(u.MOUSEDOWN_DISMISS), o) {
                                var r = s.getTransitionDurationFromElement(this._element);
                                e(this._element).one(s.TRANSITION_END, function (e) {
                                    return n._hideModal(e)
                                }).emulateTransitionEnd(r)
                            } else this._hideModal()
                        }
                    }
                }, m.dispose = function () {
                    e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                }, m.handleUpdate = function () {
                    this._adjustDialog()
                }, m._getConfig = function (e) {
                    return e = a({}, r, e), s.typeCheckConfig(t, e, l), e
                }, m._showElement = function (t) {
                    var n = this, i = e(this._element).hasClass(f);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && s.reflow(this._element), e(this._element).addClass(p), this._config.focus && this._enforceFocus();
                    var o = e.Event(u.SHOWN, {relatedTarget: t}), r = function () {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(o)
                    };
                    if (i) {
                        var a = s.getTransitionDurationFromElement(this._element);
                        e(this._dialog).one(s.TRANSITION_END, r).emulateTransitionEnd(a)
                    } else r()
                }, m._enforceFocus = function () {
                    var t = this;
                    e(document).off(u.FOCUSIN).on(u.FOCUSIN, function (n) {
                        document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                    })
                }, m._setEscapeEvent = function () {
                    var t = this;
                    this._isShown && this._config.keyboard ? e(this._element).on(u.KEYDOWN_DISMISS, function (e) {
                        27 === e.which && (e.preventDefault(), t.hide())
                    }) : this._isShown || e(this._element).off(u.KEYDOWN_DISMISS)
                }, m._setResizeEvent = function () {
                    var t = this;
                    this._isShown ? e(window).on(u.RESIZE, function (e) {
                        return t.handleUpdate(e)
                    }) : e(window).off(u.RESIZE)
                }, m._hideModal = function () {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                        e(document.body).removeClass(h), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(u.HIDDEN)
                    })
                }, m._removeBackdrop = function () {
                    this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                }, m._showBackdrop = function (t) {
                    var n = this, i = e(this._element).hasClass(f) ? f : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = d, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(u.CLICK_DISMISS, function (e) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                            }), i && s.reflow(this._backdrop), e(this._backdrop).addClass(p), !t) return;
                        if (!i) return void t();
                        var o = s.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(o)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(p);
                        var r = function () {
                            n._removeBackdrop(), t && t()
                        };
                        if (e(this._element).hasClass(f)) {
                            var a = s.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(s.TRANSITION_END, r).emulateTransitionEnd(a)
                        } else r()
                    } else t && t()
                }, m._adjustDialog = function () {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, m._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, m._checkScrollbar = function () {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, m._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        e(g.FIXED_CONTENT).each(function (n, i) {
                            var o = e(i)[0].style.paddingRight, r = e(i).css("padding-right");
                            e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                        }), e(g.STICKY_CONTENT).each(function (n, i) {
                            var o = e(i)[0].style.marginRight, r = e(i).css("margin-right");
                            e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                        }), e(g.NAVBAR_TOGGLER).each(function (n, i) {
                            var o = e(i)[0].style.marginRight, r = e(i).css("margin-right");
                            e(i).data("margin-right", o).css("margin-right", parseFloat(r) + t._scrollbarWidth + "px")
                        });
                        var n = document.body.style.paddingRight, i = e(document.body).css("padding-right");
                        e(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                    }
                }, m._resetScrollbar = function () {
                    e(g.FIXED_CONTENT).each(function (t, n) {
                        var i = e(n).data("padding-right");
                        void 0 !== i && e(n).css("padding-right", i).removeData("padding-right")
                    }), e(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (t, n) {
                        var i = e(n).data("margin-right");
                        void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                    });
                    var t = e(document.body).data("padding-right");
                    void 0 !== t && e(document.body).css("padding-right", t).removeData("padding-right")
                }, m._getScrollbarWidth = function () {
                    var e = document.createElement("div");
                    e.className = c, document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, i._jQueryInterface = function (t, n) {
                    return this.each(function () {
                        var o = e(this).data("bs.modal"), s = a({}, r, e(this).data(), "object" == typeof t && t ? t : {});
                        if (o || (o = new i(this, s), e(this).data("bs.modal", o)), "string" == typeof t) {
                            if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                            o[t](n)
                        } else s.show && o.show(n)
                    })
                }, o(i, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return r
                    }
                }]), i
            }();
        return e(document).on(u.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
            var n, i = this, o = s.getSelectorFromElement(this);
            o && (n = e(o)[0]);
            var r = e(n).data("bs.modal") ? "toggle" : a({}, e(n).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var l = e(n).one(u.SHOW, function (t) {
                t.isDefaultPrevented() || l.one(u.HIDDEN, function () {
                    e(i).is(":visible") && i.focus()
                })
            });
            m._jQueryInterface.call(e(n), r, this)
        }), e.fn.modal = m._jQueryInterface, e.fn.modal.Constructor = m, e.fn.modal.noConflict = function () {
            return e.fn.modal = i, m._jQueryInterface
        }, m
    }(t), p = function (e) {
        var t = "tooltip", i = ".bs.tooltip", r = e.fn[t], l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), u = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }, c = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, d = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent"
            }, h = "show", f = "out", p = {
                HIDE: "hide" + i,
                HIDDEN: "hidden" + i,
                SHOW: "show" + i,
                SHOWN: "shown" + i,
                INSERTED: "inserted" + i,
                CLICK: "click" + i,
                FOCUSIN: "focusin" + i,
                FOCUSOUT: "focusout" + i,
                MOUSEENTER: "mouseenter" + i,
                MOUSELEAVE: "mouseleave" + i
            }, g = "fade", m = "show", v = ".tooltip-inner", y = ".arrow", b = "hover", x = "focus", w = "click",
            k = "manual", C = function () {
                function r(e, t) {
                    if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }

                var C = r.prototype;
                return C.enable = function () {
                    this._isEnabled = !0
                }, C.disable = function () {
                    this._isEnabled = !1
                }, C.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, C.toggle = function (t) {
                    if (this._isEnabled) if (t) {
                        var n = this.constructor.DATA_KEY, i = e(t.currentTarget).data(n);
                        i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }, C.dispose = function () {
                    clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, C.show = function () {
                    var t = this;
                    if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var i = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(i);
                        var o = e.contains(this.element.ownerDocument.documentElement, this.element);
                        if (i.isDefaultPrevented() || !o) return;
                        var r = this.getTipElement(), a = s.getUID(this.constructor.NAME);
                        r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(r).addClass(g);
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                            u = this._getAttachment(l);
                        this.addAttachmentClass(u);
                        var c = !1 === this.config.container ? document.body : e(this.config.container);
                        e(r).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(c), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
                            placement: u,
                            modifiers: {
                                offset: {offset: this.config.offset},
                                flip: {behavior: this.config.fallbackPlacement},
                                arrow: {element: y},
                                preventOverflow: {boundariesElement: this.config.boundary}
                            },
                            onCreate: function (e) {
                                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                            },
                            onUpdate: function (e) {
                                t._handlePopperPlacementChange(e)
                            }
                        }), e(r).addClass(m), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                        var d = function () {
                            t.config.animation && t._fixTransition();
                            var n = t._hoverState;
                            t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === f && t._leave(null, t)
                        };
                        if (e(this.tip).hasClass(g)) {
                            var h = s.getTransitionDurationFromElement(this.tip);
                            e(this.tip).one(s.TRANSITION_END, d).emulateTransitionEnd(h)
                        } else d()
                    }
                }, C.hide = function (t) {
                    var n = this, i = this.getTipElement(), o = e.Event(this.constructor.Event.HIDE), r = function () {
                        n._hoverState !== h && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                    };
                    if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
                        if (e(i).removeClass(m), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[w] = !1, this._activeTrigger[x] = !1, this._activeTrigger[b] = !1, e(this.tip).hasClass(g)) {
                            var a = s.getTransitionDurationFromElement(i);
                            e(i).one(s.TRANSITION_END, r).emulateTransitionEnd(a)
                        } else r();
                        this._hoverState = ""
                    }
                }, C.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, C.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, C.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-tooltip-" + t)
                }, C.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, C.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(v), this.getTitle()), t.removeClass(g + " " + m)
                }, C.setElementContent = function (t, n) {
                    var i = this.config.html;
                    "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                }, C.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, C._getAttachment = function (e) {
                    return c[e.toUpperCase()]
                }, C._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach(function (n) {
                        if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                            return t.toggle(e)
                        }); else if (n !== k) {
                            var i = n === b ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                o = n === b ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element).on(i, t.config.selector, function (e) {
                                return t._enter(e)
                            }).on(o, t.config.selector, function (e) {
                                return t._leave(e)
                            })
                        }
                        e(t.element).closest(".modal").on("hide.bs.modal", function () {
                            return t.hide()
                        })
                    }), this.config.selector ? this.config = a({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, C._fixTitle = function () {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, C._enter = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? x : b] = !0), e(n.getTipElement()).hasClass(m) || n._hoverState === h ? n._hoverState = h : (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                        n._hoverState === h && n.show()
                    }, n.config.delay.show) : n.show())
                }, C._leave = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? x : b] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                        n._hoverState === f && n.hide()
                    }, n.config.delay.hide) : n.hide())
                }, C._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                    return !1
                }, C._getConfig = function (n) {
                    return "number" == typeof(n = a({}, this.constructor.Default, e(this.element).data(), "object" == typeof n && n ? n : {})).delay && (n.delay = {
                        show: n.delay,
                        hide: n.delay
                    }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
                }, C._getDelegateConfig = function () {
                    var e = {};
                    if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, C._cleanTipClass = function () {
                    var t = e(this.getTipElement()), n = t.attr("class").match(l);
                    null !== n && n.length > 0 && t.removeClass(n.join(""))
                }, C._handlePopperPlacementChange = function (e) {
                    this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, C._fixTransition = function () {
                    var t = this.getTipElement(), n = this.config.animation;
                    null === t.getAttribute("x-placement") && (e(t).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, r._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data("bs.tooltip"), i = "object" == typeof t && t;
                        if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, o(r, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return d
                    }
                }, {
                    key: "NAME", get: function () {
                        return t
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event", get: function () {
                        return p
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return i
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return u
                    }
                }]), r
            }();
        return e.fn[t] = C._jQueryInterface, e.fn[t].Constructor = C, e.fn[t].noConflict = function () {
            return e.fn[t] = r, C._jQueryInterface
        }, C
    }(t), g = function (e) {
        var t = "popover", n = ".bs.popover", i = e.fn[t], r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            s = a({}, p.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), l = a({}, p.DefaultType, {content: "(string|element|function)"}), u = "fade", c = "show",
            d = ".popover-header", h = ".popover-body", f = {
                HIDE: "hide" + n,
                HIDDEN: "hidden" + n,
                SHOW: "show" + n,
                SHOWN: "shown" + n,
                INSERTED: "inserted" + n,
                CLICK: "click" + n,
                FOCUSIN: "focusin" + n,
                FOCUSOUT: "focusout" + n,
                MOUSEENTER: "mouseenter" + n,
                MOUSELEAVE: "mouseleave" + n
            }, g = function (i) {
                var a, p;

                function g() {
                    return i.apply(this, arguments) || this
                }

                p = i, (a = g).prototype = Object.create(p.prototype), a.prototype.constructor = a, a.__proto__ = p;
                var m = g.prototype;
                return m.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, m.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-popover-" + t)
                }, m.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, m.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(d), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(h), n), t.removeClass(u + " " + c)
                }, m._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, m._cleanTipClass = function () {
                    var t = e(this.getTipElement()), n = t.attr("class").match(r);
                    null !== n && n.length > 0 && t.removeClass(n.join(""))
                }, g._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data("bs.popover"), i = "object" == typeof t ? t : null;
                        if ((n || !/destroy|hide/.test(t)) && (n || (n = new g(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, o(g, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return s
                    }
                }, {
                    key: "NAME", get: function () {
                        return t
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return "bs.popover"
                    }
                }, {
                    key: "Event", get: function () {
                        return f
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return n
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return l
                    }
                }]), g
            }(p);
        return e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
            return e.fn[t] = i, g._jQueryInterface
        }, g
    }(t), m = function (e) {
        var t = "scrollspy", n = e.fn[t], i = {offset: 10, method: "auto", target: ""},
            r = {offset: "number", method: "string", target: "(string|element)"}, l = {
                ACTIVATE: "activate.bs.scrollspy",
                SCROLL: "scroll.bs.scrollspy",
                LOAD_DATA_API: "load.bs.scrollspy.data-api"
            }, u = "dropdown-item", c = "active", d = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            }, h = "offset", f = "position", p = function () {
                function n(t, n) {
                    var i = this;
                    this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(l.SCROLL, function (e) {
                        return i._process(e)
                    }), this.refresh(), this._process()
                }

                var p = n.prototype;
                return p.refresh = function () {
                    var t = this, n = this._scrollElement === this._scrollElement.window ? h : f,
                        i = "auto" === this._config.method ? n : this._config.method,
                        o = i === f ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
                        var n, r = s.getSelectorFromElement(t);
                        if (r && (n = e(r)[0]), n) {
                            var a = n.getBoundingClientRect();
                            if (a.width || a.height) return [e(n)[i]().top + o, r]
                        }
                        return null
                    }).filter(function (e) {
                        return e
                    }).sort(function (e, t) {
                        return e[0] - t[0]
                    }).forEach(function (e) {
                        t._offsets.push(e[0]), t._targets.push(e[1])
                    })
                }, p.dispose = function () {
                    e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, p._getConfig = function (n) {
                    if ("string" != typeof(n = a({}, i, "object" == typeof n && n ? n : {})).target) {
                        var o = e(n.target).attr("id");
                        o || (o = s.getUID(t), e(n.target).attr("id", o)), n.target = "#" + o
                    }
                    return s.typeCheckConfig(t, n, r), n
                }, p._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, p._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, p._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, p._process = function () {
                    var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var o = this._offsets.length; o--;) {
                            this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                        }
                    }
                }, p._activate = function (t) {
                    this._activeTarget = t, this._clear();
                    var n = this._selector.split(",");
                    n = n.map(function (e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    });
                    var i = e(n.join(","));
                    i.hasClass(u) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(c), i.addClass(c)) : (i.addClass(c), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(c), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(c)), e(this._scrollElement).trigger(l.ACTIVATE, {relatedTarget: t})
                }, p._clear = function () {
                    e(this._selector).filter(d.ACTIVE).removeClass(c)
                }, n._jQueryInterface = function (t) {
                    return this.each(function () {
                        var i = e(this).data("bs.scrollspy");
                        if (i || (i = new n(this, "object" == typeof t && t), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, o(n, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return i
                    }
                }]), n
            }();
        return e(window).on(l.LOAD_DATA_API, function () {
            for (var t = e.makeArray(e(d.DATA_SPY)), n = t.length; n--;) {
                var i = e(t[n]);
                p._jQueryInterface.call(i, i.data())
            }
        }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
            return e.fn[t] = n, p._jQueryInterface
        }, p
    }(t), v = function (e) {
        var t = e.fn.tab, n = {
                HIDE: "hide.bs.tab",
                HIDDEN: "hidden.bs.tab",
                SHOW: "show.bs.tab",
                SHOWN: "shown.bs.tab",
                CLICK_DATA_API: "click.bs.tab.data-api"
            }, i = "dropdown-menu", r = "active", a = "disabled", l = "fade", u = "show", c = ".dropdown",
            d = ".nav, .list-group", h = ".active", f = "> li > .active",
            p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', g = ".dropdown-toggle",
            m = "> .dropdown-menu .active", v = function () {
                function t(e) {
                    this._element = e
                }

                var p = t.prototype;
                return p.show = function () {
                    var t = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(r) || e(this._element).hasClass(a))) {
                        var i, o, l = e(this._element).closest(d)[0], u = s.getSelectorFromElement(this._element);
                        if (l) {
                            var c = "UL" === l.nodeName ? f : h;
                            o = (o = e.makeArray(e(l).find(c)))[o.length - 1]
                        }
                        var p = e.Event(n.HIDE, {relatedTarget: this._element}), g = e.Event(n.SHOW, {relatedTarget: o});
                        if (o && e(o).trigger(p), e(this._element).trigger(g), !g.isDefaultPrevented() && !p.isDefaultPrevented()) {
                            u && (i = e(u)[0]), this._activate(this._element, l);
                            var m = function () {
                                var i = e.Event(n.HIDDEN, {relatedTarget: t._element}),
                                    r = e.Event(n.SHOWN, {relatedTarget: o});
                                e(o).trigger(i), e(t._element).trigger(r)
                            };
                            i ? this._activate(i, i.parentNode, m) : m()
                        }
                    }
                }, p.dispose = function () {
                    e.removeData(this._element, "bs.tab"), this._element = null
                }, p._activate = function (t, n, i) {
                    var o = this, r = ("UL" === n.nodeName ? e(n).find(f) : e(n).children(h))[0],
                        a = i && r && e(r).hasClass(l), u = function () {
                            return o._transitionComplete(t, r, i)
                        };
                    if (r && a) {
                        var c = s.getTransitionDurationFromElement(r);
                        e(r).one(s.TRANSITION_END, u).emulateTransitionEnd(c)
                    } else u()
                }, p._transitionComplete = function (t, n, o) {
                    if (n) {
                        e(n).removeClass(u + " " + r);
                        var a = e(n.parentNode).find(m)[0];
                        a && e(a).removeClass(r), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (e(t).addClass(r), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), s.reflow(t), e(t).addClass(u), t.parentNode && e(t.parentNode).hasClass(i)) {
                        var l = e(t).closest(c)[0];
                        l && e(l).find(g).addClass(r), t.setAttribute("aria-expanded", !0)
                    }
                    o && o()
                }, t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this), o = i.data("bs.tab");
                        if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
                            if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n]()
                        }
                    })
                }, o(t, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }]), t
            }();
        return e(document).on(n.CLICK_DATA_API, p, function (t) {
            t.preventDefault(), v._jQueryInterface.call(e(this), "show")
        }), e.fn.tab = v._jQueryInterface, e.fn.tab.Constructor = v, e.fn.tab.noConflict = function () {
            return e.fn.tab = t, v._jQueryInterface
        }, v
    }(t);
    !function (e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = s, e.Alert = l, e.Button = u, e.Carousel = c, e.Collapse = d, e.Dropdown = h, e.Modal = f, e.Popover = g, e.Scrollspy = m, e.Tab = v, e.Tooltip = p, Object.defineProperty(e, "__esModule", {value: !0})
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, i, o) {
        return jQuery.easing[jQuery.easing.def](e, t, n, i, o)
    },
    easeInQuad: function (e, t, n, i, o) {
        return i * (t /= o) * t + n
    },
    easeOutQuad: function (e, t, n, i, o) {
        return -i * (t /= o) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, i, o) {
        return i * (t /= o) * t * t + n
    },
    easeOutCubic: function (e, t, n, i, o) {
        return i * ((t = t / o - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, i, o) {
        return i * (t /= o) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, i, o) {
        return -i * ((t = t / o - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, i, o) {
        return i * (t /= o) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, i, o) {
        return i * ((t = t / o - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, i, o) {
        return -i * Math.cos(t / o * (Math.PI / 2)) + i + n
    },
    easeOutSine: function (e, t, n, i, o) {
        return i * Math.sin(t / o * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, i, o) {
        return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n
    },
    easeInExpo: function (e, t, n, i, o) {
        return 0 == t ? n : i * Math.pow(2, 10 * (t / o - 1)) + n
    },
    easeOutExpo: function (e, t, n, i, o) {
        return t == o ? n + i : i * (1 - Math.pow(2, -10 * t / o)) + n
    },
    easeInOutExpo: function (e, t, n, i, o) {
        return 0 == t ? n : t == o ? n + i : (t /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
    },
    easeInCirc: function (e, t, n, i, o) {
        return -i * (Math.sqrt(1 - (t /= o) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, i, o) {
        return i * Math.sqrt(1 - (t = t / o - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, i, o) {
        return (t /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, i, o) {
        var r = 1.70158, a = 0, s = i;
        if (0 == t) return n;
        if (1 == (t /= o)) return n + i;
        if (a || (a = .3 * o), s < Math.abs(i)) {
            s = i;
            r = a / 4
        } else r = a / (2 * Math.PI) * Math.asin(i / s);
        return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) + n
    },
    easeOutElastic: function (e, t, n, i, o) {
        var r = 1.70158, a = 0, s = i;
        if (0 == t) return n;
        if (1 == (t /= o)) return n + i;
        if (a || (a = .3 * o), s < Math.abs(i)) {
            s = i;
            r = a / 4
        } else r = a / (2 * Math.PI) * Math.asin(i / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * o - r) * (2 * Math.PI) / a) + i + n
    },
    easeInOutElastic: function (e, t, n, i, o) {
        var r = 1.70158, a = 0, s = i;
        if (0 == t) return n;
        if (2 == (t /= o / 2)) return n + i;
        if (a || (a = o * (.3 * 1.5)), s < Math.abs(i)) {
            s = i;
            r = a / 4
        } else r = a / (2 * Math.PI) * Math.asin(i / s);
        return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) * -.5 + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) * .5 + i + n
    },
    easeInBack: function (e, t, n, i, o, r) {
        return void 0 == r && (r = 1.70158), i * (t /= o) * t * ((r + 1) * t - r) + n
    },
    easeOutBack: function (e, t, n, i, o, r) {
        return void 0 == r && (r = 1.70158), i * ((t = t / o - 1) * t * ((r + 1) * t + r) + 1) + n
    },
    easeInOutBack: function (e, t, n, i, o, r) {
        return void 0 == r && (r = 1.70158), (t /= o / 2) < 1 ? i / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + n : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + n
    },
    easeInBounce: function (e, t, n, i, o) {
        return i - jQuery.easing.easeOutBounce(e, o - t, 0, i, o) + n
    },
    easeOutBounce: function (e, t, n, i, o) {
        return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, i, o) {
        return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, i, o) + .5 * i + n
    }
}), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (e) {
    function t(e) {
        var t = e.length, i = n.type(e);
        return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    if (!e.jQuery) {
        var n = function (e, t) {
            return new n.fn.init(e, t)
        };
        n.isWindow = function (e) {
            return null != e && e == e.window
        }, n.type = function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[a.call(e)] || "object" : typeof e
        }, n.isArray = Array.isArray || function (e) {
            return "array" === n.type(e)
        }, n.isPlainObject = function (e) {
            var t;
            if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
            try {
                if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            for (t in e) ;
            return void 0 === t || r.call(e, t)
        }, n.each = function (e, n, i) {
            var o = 0, r = e.length, a = t(e);
            if (i) {
                if (a) for (; r > o && !1 !== n.apply(e[o], i); o++) ; else for (o in e) if (!1 === n.apply(e[o], i)) break
            } else if (a) for (; r > o && !1 !== n.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === n.call(e[o], o, e[o])) break;
            return e
        }, n.data = function (e, t, o) {
            if (void 0 === o) {
                var r = (a = e[n.expando]) && i[a];
                if (void 0 === t) return r;
                if (r && t in r) return r[t]
            } else if (void 0 !== t) {
                var a = e[n.expando] || (e[n.expando] = ++n.uuid);
                return i[a] = i[a] || {}, i[a][t] = o, o
            }
        }, n.removeData = function (e, t) {
            var o = e[n.expando], r = o && i[o];
            r && n.each(t, function (e, t) {
                delete r[t]
            })
        }, n.extend = function () {
            var e, t, i, o, r, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++) if (null != (r = arguments[l])) for (o in r) e = s[o], s !== (i = r[o]) && (c && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[o] = n.extend(c, a, i)) : void 0 !== i && (s[o] = i));
            return s
        }, n.queue = function (e, i, o) {
            if (e) {
                i = (i || "fx") + "queue";
                var r = n.data(e, i);
                return o ? (!r || n.isArray(o) ? r = n.data(e, i, function (e, n) {
                    var i = n || [];
                    return null != e && (t(Object(e)) ? function (e, t) {
                        for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
                        if (n != n) for (; void 0 !== t[i];) e[o++] = t[i++];
                        e.length = o
                    }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                }(o)) : r.push(o), r) : r || []
            }
        }, n.dequeue = function (e, t) {
            n.each(e.nodeType ? [e] : e, function (e, i) {
                t = t || "fx";
                var o = n.queue(i, t), r = o.shift();
                "inprogress" === r && (r = o.shift()), r && ("fx" === t && o.unshift("inprogress"), r.call(i, function () {
                    n.dequeue(i, t)
                }))
            })
        }, n.fn = n.prototype = {
            init: function (e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            }, offset: function () {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            }, position: function () {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }

                var t = this[0], e = e.apply(t), i = this.offset(),
                    o = /^(?:body|html)$/i.test(e.nodeName) ? {top: 0, left: 0} : n(e).offset();
                return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: i.top - o.top,
                    left: i.left - o.left
                }
            }
        };
        var i = {};
        n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
        for (var o = {}, r = o.hasOwnProperty, a = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) o["[object " + s[l] + "]"] = s[l].toLowerCase();
        n.fn.init.prototype = n.fn, e.Velocity = {Utilities: n}
    }
}(window), function (e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function () {
    return function (e, t, n, i) {
        function o(e) {
            return f.isWrapped(e) ? e = [].slice.call(e) : f.isNode(e) && (e = [e]), e
        }

        function r(e) {
            var t = c.data(e, "velocity");
            return null === t ? i : t
        }

        function a(e, n, i, o) {
            function r(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function a(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, n) {
                return ((r(t, n) * e + a(t, n)) * e + s(t)) * e
            }

            function u(e, t, n) {
                return 3 * r(t, n) * e * e + 2 * a(t, n) * e + s(t)
            }

            function c(t, n) {
                for (var o = 0; f > o; ++o) {
                    var r = u(n, e, i);
                    if (0 === r) return n;
                    n -= (l(n, e, i) - t) / r
                }
                return n
            }

            function d(t, n, o) {
                var r, a, s = 0;
                do {
                    (r = l(a = n + (o - n) / 2, e, i) - t) > 0 ? o = a : n = a
                } while (Math.abs(r) > g && ++s < m);
                return a
            }

            function h() {
                k = !0, (e != n || i != o) && function () {
                    for (var t = 0; v > t; ++t) w[t] = l(t * y, e, i)
                }()
            }

            var f = 4, p = .001, g = 1e-7, m = 10, v = 11, y = 1 / (v - 1), b = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var x = 0; 4 > x; ++x) if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
            e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
            var w = b ? new Float32Array(v) : new Array(v), k = !1, C = function (t) {
                return k || h(), e === n && i === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(function (t) {
                    for (var n = 0, o = 1, r = v - 1; o != r && w[o] <= t; ++o) n += y;
                    var a = n + (t - w[--o]) / (w[o + 1] - w[o]) * y, s = u(a, e, i);
                    return s >= p ? c(t, a) : 0 == s ? a : d(t, n, n + y)
                }(t), n, o)
            };
            C.getControlPoints = function () {
                return [{x: e, y: n}, {x: i, y: o}]
            };
            var _ = "generateBezier(" + [e, n, i, o] + ")";
            return C.toString = function () {
                return _
            }, C
        }

        function s(e, t) {
            var n = e;
            return f.isString(e) ? v.Easings[e] || (n = !1) : n = f.isArray(e) && 1 === e.length ? function (e) {
                return function (t) {
                    return Math.round(t * e) * (1 / e)
                }
            }.apply(null, e) : f.isArray(e) && 2 === e.length ? y.apply(null, e.concat([t])) : !(!f.isArray(e) || 4 !== e.length) && a.apply(null, e), !1 === n && (n = v.Easings[v.defaults.easing] ? v.defaults.easing : m), n
        }

        function l(e) {
            if (e) {
                var t = (new Date).getTime(), n = v.State.calls.length;
                n > 1e4 && (v.State.calls = function (e) {
                    for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                        var o = e[t];
                        o && i.push(o)
                    }
                    return i
                }(v.State.calls));
                for (var o = 0; n > o; o++) if (v.State.calls[o]) {
                    var a = v.State.calls[o], s = a[0], d = a[2], h = a[3], p = !!h, g = null;
                    h || (h = v.State.calls[o][3] = t - 16);
                    for (var m = Math.min((t - h) / d.duration, 1), y = 0, x = s.length; x > y; y++) {
                        var k = s[y], C = k.element;
                        if (r(C)) {
                            var _ = !1;
                            if (d.display !== i && null !== d.display && "none" !== d.display) {
                                if ("flex" === d.display) {
                                    c.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (e, t) {
                                        b.setPropertyValue(C, "display", t)
                                    })
                                }
                                b.setPropertyValue(C, "display", d.display)
                            }
                            for (var T in d.visibility !== i && "hidden" !== d.visibility && b.setPropertyValue(C, "visibility", d.visibility), k) if ("element" !== T) {
                                var S, E = k[T], A = f.isString(E.easing) ? v.Easings[E.easing] : E.easing;
                                if (1 === m) S = E.endValue; else {
                                    var I = E.endValue - E.startValue;
                                    if (S = E.startValue + I * A(m, d, I), !p && S === E.currentValue) continue
                                }
                                if (E.currentValue = S, "tween" === T) g = S; else {
                                    if (b.Hooks.registered[T]) {
                                        var P = b.Hooks.getRoot(T), D = r(C).rootPropertyValueCache[P];
                                        D && (E.rootPropertyValue = D)
                                    }
                                    var M = b.setPropertyValue(C, T, E.currentValue + (0 === parseFloat(S) ? "" : E.unitType), E.rootPropertyValue, E.scrollData);
                                    b.Hooks.registered[T] && (r(C).rootPropertyValueCache[P] = b.Normalizations.registered[P] ? b.Normalizations.registered[P]("extract", null, M[1]) : M[1]), "transform" === M[0] && (_ = !0)
                                }
                            }
                            d.mobileHA && r(C).transformCache.translate3d === i && (r(C).transformCache.translate3d = "(0px, 0px, 0px)", _ = !0), _ && b.flushTransformCache(C)
                        }
                    }
                    d.display !== i && "none" !== d.display && (v.State.calls[o][2].display = !1), d.visibility !== i && "hidden" !== d.visibility && (v.State.calls[o][2].visibility = !1), d.progress && d.progress.call(a[1], a[1], m, Math.max(0, h + d.duration - t), h, g), 1 === m && u(o)
                }
            }
            v.State.isTicking && w(l)
        }

        function u(e, t) {
            if (!v.State.calls[e]) return !1;
            for (var n = v.State.calls[e][0], o = v.State.calls[e][1], a = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, d = n.length; d > u; u++) {
                var h = n[u].element;
                if (t || a.loop || ("none" === a.display && b.setPropertyValue(h, "display", a.display), "hidden" === a.visibility && b.setPropertyValue(h, "visibility", a.visibility)), !0 !== a.loop && (c.queue(h)[1] === i || !/\.velocityQueueEntryFlag/i.test(c.queue(h)[1])) && r(h)) {
                    r(h).isAnimating = !1, r(h).rootPropertyValueCache = {};
                    var f = !1;
                    c.each(b.Lists.transforms3D, function (e, t) {
                        var n = /^scale/.test(t) ? 1 : 0, o = r(h).transformCache[t];
                        r(h).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(o) && (f = !0, delete r(h).transformCache[t])
                    }), a.mobileHA && (f = !0, delete r(h).transformCache.translate3d), f && b.flushTransformCache(h), b.Values.removeClass(h, "velocity-animating")
                }
                if (!t && a.complete && !a.loop && u === d - 1) try {
                    a.complete.call(o, o)
                } catch (e) {
                    setTimeout(function () {
                        throw e
                    }, 1)
                }
                s && !0 !== a.loop && s(o), r(h) && !0 === a.loop && !t && (c.each(r(h).tweensContainer, function (e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), v(h, "reverse", {loop: !0, delay: a.delay})), !1 !== a.queue && c.dequeue(h, a.queue)
            }
            v.State.calls[e] = !1;
            for (var p = 0, g = v.State.calls.length; g > p; p++) if (!1 !== v.State.calls[p]) {
                l = !0;
                break
            }
            !1 === l && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
        }

        var c, d = function () {
            if (n.documentMode) return n.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = n.createElement("div");
                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
            }
            return i
        }(), h = function () {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                var n, i = (new Date).getTime();
                return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function () {
                    t(i + n)
                }, n)
            }
        }(), f = {
            isString: function (e) {
                return "string" == typeof e
            }, isArray: Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, isFunction: function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }, isNode: function (e) {
                return e && e.nodeType
            }, isNodeList: function (e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            }, isWrapped: function (e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            }, isSVG: function (e) {
                return t.SVGElement && e instanceof t.SVGElement
            }, isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0
            }
        }, p = !1;
        if (e.fn && e.fn.jquery ? (c = e, p = !0) : c = t.Velocity.Utilities, 8 >= d && !p) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(7 >= d)) {
            var g = 400, m = "swing", v = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: n.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: c,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: g,
                    easing: m,
                    begin: i,
                    complete: i,
                    progress: i,
                    display: i,
                    visibility: i,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function (e) {
                    c.data(e, "velocity", {
                        isSVG: f.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {major: 1, minor: 2, patch: 2},
                debug: !1
            };
            t.pageYOffset !== i ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
            var y = function () {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, n, i) {
                    var o = {x: t.x + i.dx * n, v: t.v + i.dv * n, tension: t.tension, friction: t.friction};
                    return {dx: o.v, dv: e(o)}
                }

                function n(n, i) {
                    var o = {dx: n.v, dv: e(n)}, r = t(n, .5 * i, o), a = t(n, .5 * i, r), s = t(n, i, a),
                        l = 1 / 6 * (o.dx + 2 * (r.dx + a.dx) + s.dx), u = 1 / 6 * (o.dv + 2 * (r.dv + a.dv) + s.dv);
                    return n.x = n.x + l * i, n.v = n.v + u * i, n
                }

                return function e(t, i, o) {
                    var r, a, s, l = {x: -1, v: 0, tension: null, friction: null}, u = [0], c = 0;
                    for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, o = o || null, l.tension = t, l.friction = i, (r = null !== o) ? a = (c = e(t, i)) / o * .016 : a = .016; s = n(s || l, a), u.push(1 + s.x), c += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;) ;
                    return r ? function (e) {
                        return u[e * (u.length - 1) | 0]
                    } : c
                }
            }();
            v.Easings = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, spring: function (e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, c.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
                v.Easings[t[0]] = a.apply(null, t[1])
            });
            var b = v.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    }, registered: {}, register: function () {
                        for (var e = 0; e < b.Lists.colors.length; e++) {
                            var t = "color" === b.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            b.Hooks.templates[b.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var n, i, o;
                        if (d) for (n in b.Hooks.templates) {
                            o = (i = b.Hooks.templates[n])[0].split(" ");
                            var r = i[1].match(b.RegEx.valueSplit);
                            "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), b.Hooks.templates[n] = [o.join(" "), r.join(" ")])
                        }
                        for (n in b.Hooks.templates) for (var e in o = (i = b.Hooks.templates[n])[0].split(" ")) {
                            var a = n + o[e], s = e;
                            b.Hooks.registered[a] = [n, s]
                        }
                    }, getRoot: function (e) {
                        var t = b.Hooks.registered[e];
                        return t ? t[0] : e
                    }, cleanRootPropertyValue: function (e, t) {
                        return b.RegEx.valueUnwrap.test(t) && (t = t.match(b.RegEx.valueUnwrap)[1]), b.Values.isCSSNullValue(t) && (t = b.Hooks.templates[e][1]), t
                    }, extractValue: function (e, t) {
                        var n = b.Hooks.registered[e];
                        if (n) {
                            var i = n[0], o = n[1];
                            return (t = b.Hooks.cleanRootPropertyValue(i, t)).toString().match(b.RegEx.valueSplit)[o]
                        }
                        return t
                    }, injectValue: function (e, t, n) {
                        var i = b.Hooks.registered[e];
                        if (i) {
                            var o, r = i[0], a = i[1];
                            return (o = (n = b.Hooks.cleanRootPropertyValue(r, n)).toString().match(b.RegEx.valueSplit))[a] = t, o.join(" ")
                        }
                        return n
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function (e, t, n) {
                            switch (e) {
                                case"name":
                                    return "clip";
                                case"extract":
                                    var i;
                                    return b.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : i = (i = n.toString().match(b.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : n, i;
                                case"inject":
                                    return "rect(" + n + ")"
                            }
                        }, blur: function (e, t, n) {
                            switch (e) {
                                case"name":
                                    return v.State.isFirefox ? "filter" : "-webkit-filter";
                                case"extract":
                                    var i = parseFloat(n);
                                    if (!i && 0 !== i) {
                                        var o = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        i = o ? o[1] : 0
                                    }
                                    return i;
                                case"inject":
                                    return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        }, opacity: function (e, t, n) {
                            if (8 >= d) switch (e) {
                                case"name":
                                    return "filter";
                                case"extract":
                                    var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i ? i[1] / 100 : 1;
                                case"inject":
                                    return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                            } else switch (e) {
                                case"name":
                                    return "opacity";
                                case"extract":
                                case"inject":
                                    return n
                            }
                        }
                    }, register: function () {
                        9 >= d || v.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
                        for (var e = 0; e < b.Lists.transformsBase.length; e++) !function () {
                            var t = b.Lists.transformsBase[e];
                            b.Normalizations.registered[t] = function (e, n, o) {
                                switch (e) {
                                    case"name":
                                        return "transform";
                                    case"extract":
                                        return r(n) === i || r(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : r(n).transformCache[t].replace(/[()]/g, "");
                                    case"inject":
                                        var a = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case"translate":
                                                a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                break;
                                            case"scal":
                                            case"scale":
                                                v.State.isAndroid && r(n).transformCache[t] === i && 1 > o && (o = 1), a = !/(\d)$/i.test(o);
                                                break;
                                            case"skew":
                                                a = !/(deg|\d)$/i.test(o);
                                                break;
                                            case"rotate":
                                                a = !/(deg|\d)$/i.test(o)
                                        }
                                        return a || (r(n).transformCache[t] = "(" + o + ")"), r(n).transformCache[t]
                                }
                            }
                        }();
                        for (e = 0; e < b.Lists.colors.length; e++) !function () {
                            var t = b.Lists.colors[e];
                            b.Normalizations.registered[t] = function (e, n, o) {
                                switch (e) {
                                    case"name":
                                        return t;
                                    case"extract":
                                        var r;
                                        if (b.RegEx.wrappedValueAlreadyExtracted.test(o)) r = o; else {
                                            var a, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(o) ? a = s[o] !== i ? s[o] : s.black : b.RegEx.isHex.test(o) ? a = "rgb(" + b.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (a = s.black), r = (a || o).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= d || 3 !== r.split(" ").length || (r += " 1"), r;
                                    case"inject":
                                        return 8 >= d ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function (e) {
                        return e.replace(/-(\w)/g, function (e, t) {
                            return t.toUpperCase()
                        })
                    }, SVGAttribute: function (e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (d || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    }, prefixCheck: function (e) {
                        if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                            var o;
                            if (o = 0 === n ? e : t[n] + e.replace(/^\w/, function (e) {
                                    return e.toUpperCase()
                                }), f.isString(v.State.prefixElement.style[o])) return v.State.prefixMatches[e] = o, [o, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function (e) {
                        var t;
                        return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
                            return t + t + n + n + i + i
                        }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    }, isCSSNullValue: function (e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    }, getUnitType: function (e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    }, getDisplayType: function (e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    }, addClass: function (e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    }, removeClass: function (e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function (e, n, o, a) {
                    function s(e, n) {
                        function o() {
                            h && b.setPropertyValue(e, "display", "none")
                        }

                        var l = 0;
                        if (8 >= d) l = c.css(e, n); else {
                            var u, h = !1;
                            if (/^(width|height)$/.test(n) && 0 === b.getPropertyValue(e, "display") && (h = !0, b.setPropertyValue(e, "display", b.Values.getDisplayType(e))), !a) {
                                if ("height" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var f = e.offsetHeight - (parseFloat(b.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingBottom")) || 0);
                                    return o(), f
                                }
                                if ("width" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var p = e.offsetWidth - (parseFloat(b.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingRight")) || 0);
                                    return o(), p
                                }
                            }
                            u = r(e) === i ? t.getComputedStyle(e, null) : r(e).computedStyle ? r(e).computedStyle : r(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), ("" === (l = 9 === d && "filter" === n ? u.getPropertyValue(n) : u[n]) || null === l) && (l = e.style[n]), o()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                            var g = s(e, "position");
                            ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = c(e).position()[n] + "px")
                        }
                        return l
                    }

                    var l;
                    if (b.Hooks.registered[n]) {
                        var u = n, h = b.Hooks.getRoot(u);
                        o === i && (o = b.getPropertyValue(e, b.Names.prefixCheck(h)[0])), b.Normalizations.registered[h] && (o = b.Normalizations.registered[h]("extract", e, o)), l = b.Hooks.extractValue(u, o)
                    } else if (b.Normalizations.registered[n]) {
                        var f, p;
                        "transform" !== (f = b.Normalizations.registered[n]("name", e)) && (p = s(e, b.Names.prefixCheck(f)[0]), b.Values.isCSSNullValue(p) && b.Hooks.templates[n] && (p = b.Hooks.templates[n][1])), l = b.Normalizations.registered[n]("extract", e, p)
                    }
                    if (!/^[\d-]/.test(l)) if (r(e) && r(e).isSVG && b.Names.SVGAttribute(n)) if (/^(height|width)$/i.test(n)) try {
                        l = e.getBBox()[n]
                    } catch (e) {
                        l = 0
                    } else l = e.getAttribute(n); else l = s(e, b.Names.prefixCheck(n)[0]);
                    return b.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + n + ": " + l), l
                },
                setPropertyValue: function (e, n, i, o, a) {
                    var s = n;
                    if ("scroll" === n) a.container ? a.container["scroll" + a.direction] = i : "Left" === a.direction ? t.scrollTo(i, a.alternateValue) : t.scrollTo(a.alternateValue, i); else if (b.Normalizations.registered[n] && "transform" === b.Normalizations.registered[n]("name", e)) b.Normalizations.registered[n]("inject", e, i), s = "transform", i = r(e).transformCache[n]; else {
                        if (b.Hooks.registered[n]) {
                            var l = n, u = b.Hooks.getRoot(n);
                            o = o || b.getPropertyValue(e, u), i = b.Hooks.injectValue(l, i, o), n = u
                        }
                        if (b.Normalizations.registered[n] && (i = b.Normalizations.registered[n]("inject", e, i), n = b.Normalizations.registered[n]("name", e)), s = b.Names.prefixCheck(n)[0], 8 >= d) try {
                            e.style[s] = i
                        } catch (e) {
                            v.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                        } else r(e) && r(e).isSVG && b.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
                        v.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                    }
                    return [s, i]
                },
                flushTransformCache: function (e) {
                    function t(t) {
                        return parseFloat(b.getPropertyValue(e, t))
                    }

                    var n = "";
                    if ((d || v.State.isAndroid && !v.State.isChrome) && r(e).isSVG) {
                        var i = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        };
                        c.each(r(e).transformCache, function (e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
                        })
                    } else {
                        var o, a;
                        c.each(r(e).transformCache, function (t) {
                            return o = r(e).transformCache[t], "transformPerspective" === t ? (a = o, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void(n += t + o + " "))
                        }), a && (n = "perspective" + a + " " + n)
                    }
                    b.setPropertyValue(e, "transform", n)
                }
            };
            b.Hooks.register(), b.Normalizations.register(), v.hook = function (e, t, n) {
                var a = i;
                return e = o(e), c.each(e, function (e, o) {
                    if (r(o) === i && v.init(o), n === i) a === i && (a = v.CSS.getPropertyValue(o, t)); else {
                        var s = v.CSS.setPropertyValue(o, t, n);
                        "transform" === s[0] && v.CSS.flushTransformCache(o), a = s
                    }
                }), a
            };
            var x = function () {
                function e() {
                    return d ? E.promise || null : h
                }

                function a() {
                    function e(e) {
                        function h(e, t) {
                            var n = i, o = i, r = i;
                            return f.isArray(e) ? (n = e[0], !f.isArray(e[1]) && /^[\d-]/.test(e[1]) || f.isFunction(e[1]) || b.RegEx.isHex.test(e[1]) ? r = e[1] : (f.isString(e[1]) && !b.RegEx.isHex.test(e[1]) || f.isArray(e[1])) && (o = t ? e[1] : s(e[1], u.duration), e[2] !== i && (r = e[2]))) : n = e, t || (o = o || u.easing), f.isFunction(n) && (n = n.call(a, _, C)), f.isFunction(r) && (r = r.call(a, _, C)), [n || 0, o, r]
                        }

                        function p(e, t) {
                            var n, i;
                            return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                                return n = e, ""
                            }), n || (n = b.Values.getUnitType(e)), [i, n]
                        }

                        function g() {
                            var e = {
                                    myParent: a.parentNode || n.body,
                                    position: b.getPropertyValue(a, "position"),
                                    fontSize: b.getPropertyValue(a, "fontSize")
                                }, i = e.position === L.lastPosition && e.myParent === L.lastParent,
                                o = e.fontSize === L.lastFontSize;
                            L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                            var s = 100, l = {};
                            if (o && i) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight; else {
                                var u = r(a).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                v.init(u), e.myParent.appendChild(u), c.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                    v.CSS.setPropertyValue(u, t, "hidden")
                                }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), c.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                    v.CSS.setPropertyValue(u, t, s + "%")
                                }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(b.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                            }
                            return null === L.remToPx && (L.remToPx = parseFloat(b.getPropertyValue(n.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                        }

                        if (u.begin && 0 === _) try {
                            u.begin.call(m, m)
                        } catch (e) {
                            setTimeout(function () {
                                throw e
                            }, 1)
                        }
                        if ("scroll" === S) {
                            var x, k, T, A = /^x$/i.test(u.axis) ? "Left" : "Top", I = parseFloat(u.offset) || 0;
                            u.container ? f.isWrapped(u.container) || f.isNode(u.container) ? (u.container = u.container[0] || u.container, T = (x = u.container["scroll" + A]) + c(a).position()[A.toLowerCase()] + I) : u.container = null : (x = v.State.scrollAnchor[v.State["scrollProperty" + A]], k = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], T = c(a).offset()[A.toLowerCase()] + I), d = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: x,
                                    currentValue: x,
                                    endValue: T,
                                    unitType: "",
                                    easing: u.easing,
                                    scrollData: {container: u.container, direction: A, alternateValue: k}
                                }, element: a
                            }, v.debug && console.log("tweensContainer (scroll): ", d.scroll, a)
                        } else if ("reverse" === S) {
                            if (!r(a).tweensContainer) return void c.dequeue(a, u.queue);
                            "none" === r(a).opts.display && (r(a).opts.display = "auto"), "hidden" === r(a).opts.visibility && (r(a).opts.visibility = "visible"), r(a).opts.loop = !1, r(a).opts.begin = null, r(a).opts.complete = null, w.easing || delete u.easing, w.duration || delete u.duration, u = c.extend({}, r(a).opts, u);
                            var P = c.extend(!0, {}, r(a).tweensContainer);
                            for (var D in P) if ("element" !== D) {
                                var M = P[D].startValue;
                                P[D].startValue = P[D].currentValue = P[D].endValue, P[D].endValue = M, f.isEmptyObject(w) || (P[D].easing = u.easing), v.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(P[D]), a)
                            }
                            d = P
                        } else if ("start" === S) {
                            for (var O in r(a).tweensContainer && !0 === r(a).isAnimating && (P = r(a).tweensContainer), c.each(y, function (e, t) {
                                if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
                                    var n = h(t, !0), o = n[0], r = n[1], a = n[2];
                                    if (b.RegEx.isHex.test(o)) {
                                        for (var s = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(o), u = a ? b.Values.hexToRgb(a) : i, c = 0; c < s.length; c++) {
                                            var d = [l[c]];
                                            r && d.push(r), u !== i && d.push(u[c]), y[e + s[c]] = d
                                        }
                                        delete y[e]
                                    }
                                }
                            }), y) {
                                var R = h(y[O]), F = R[0], j = R[1], H = R[2];
                                O = b.Names.camelCase(O);
                                var W = b.Hooks.getRoot(O), B = !1;
                                if (r(a).isSVG || "tween" === W || !1 !== b.Names.prefixCheck(W)[1] || b.Normalizations.registered[W] !== i) {
                                    (u.display !== i && null !== u.display && "none" !== u.display || u.visibility !== i && "hidden" !== u.visibility) && /opacity|filter/.test(O) && !H && 0 !== F && (H = 0), u._cacheValues && P && P[O] ? (H === i && (H = P[O].endValue + P[O].unitType), B = r(a).rootPropertyValueCache[W]) : b.Hooks.registered[O] ? H === i ? (B = b.getPropertyValue(a, W), H = b.getPropertyValue(a, O, B)) : B = b.Hooks.templates[W][1] : H === i && (H = b.getPropertyValue(a, O));
                                    var z, V, q, $ = !1;
                                    if (H = (z = p(O, H))[0], q = z[1], F = (z = p(O, F))[0].replace(/^([+-\/*])=/, function (e, t) {
                                            return $ = t, ""
                                        }), V = z[1], H = parseFloat(H) || 0, F = parseFloat(F) || 0, "%" === V && (/^(fontSize|lineHeight)$/.test(O) ? (F /= 100, V = "em") : /^scale/.test(O) ? (F /= 100, V = "") : /(Red|Green|Blue)$/i.test(O) && (F = F / 100 * 255, V = "")), /[\/*]/.test($)) V = q; else if (q !== V && 0 !== H) if (0 === F) V = q; else {
                                        o = o || g();
                                        var Y = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";
                                        switch (q) {
                                            case"%":
                                                H *= "x" === Y ? o.percentToPxWidth : o.percentToPxHeight;
                                                break;
                                            case"px":
                                                break;
                                            default:
                                                H *= o[q + "ToPx"]
                                        }
                                        switch (V) {
                                            case"%":
                                                H *= 1 / ("x" === Y ? o.percentToPxWidth : o.percentToPxHeight);
                                                break;
                                            case"px":
                                                break;
                                            default:
                                                H *= 1 / o[V + "ToPx"]
                                        }
                                    }
                                    switch ($) {
                                        case"+":
                                            F = H + F;
                                            break;
                                        case"-":
                                            F = H - F;
                                            break;
                                        case"*":
                                            F *= H;
                                            break;
                                        case"/":
                                            F = H / F
                                    }
                                    d[O] = {
                                        rootPropertyValue: B,
                                        startValue: H,
                                        currentValue: H,
                                        endValue: F,
                                        unitType: V,
                                        easing: j
                                    }, v.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(d[O]), a)
                                } else v.debug && console.log("Skipping [" + W + "] due to a lack of browser support.")
                            }
                            d.element = a
                        }
                        d.element && (b.Values.addClass(a, "velocity-animating"), N.push(d), "" === u.queue && (r(a).tweensContainer = d, r(a).opts = u), r(a).isAnimating = !0, _ === C - 1 ? (v.State.calls.push([N, m, u, null, E.resolver]), !1 === v.State.isTicking && (v.State.isTicking = !0, l())) : _++)
                    }

                    var o, a = this, u = c.extend({}, v.defaults, w), d = {};
                    switch (r(a) === i && v.init(a), parseFloat(u.delay) && !1 !== u.queue && c.queue(a, u.queue, function (e) {
                        v.velocityQueueEntryFlag = !0, r(a).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(u.delay)),
                            next: e
                        }
                    }), u.duration.toString().toLowerCase()) {
                        case"fast":
                            u.duration = 200;
                            break;
                        case"normal":
                            u.duration = g;
                            break;
                        case"slow":
                            u.duration = 600;
                            break;
                        default:
                            u.duration = parseFloat(u.duration) || 1
                    }
                    !1 !== v.mock && (!0 === v.mock ? u.duration = u.delay = 1 : (u.duration *= parseFloat(v.mock) || 1, u.delay *= parseFloat(v.mock) || 1)), u.easing = s(u.easing, u.duration), u.begin && !f.isFunction(u.begin) && (u.begin = null), u.progress && !f.isFunction(u.progress) && (u.progress = null), u.complete && !f.isFunction(u.complete) && (u.complete = null), u.display !== i && null !== u.display && (u.display = u.display.toString().toLowerCase(), "auto" === u.display && (u.display = v.CSS.Values.getDisplayType(a))), u.visibility !== i && null !== u.visibility && (u.visibility = u.visibility.toString().toLowerCase()), u.mobileHA = u.mobileHA && v.State.isMobile && !v.State.isGingerbread, !1 === u.queue ? u.delay ? setTimeout(e, u.delay) : e() : c.queue(a, u.queue, function (t, n) {
                        return !0 === n ? (E.promise && E.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void e())
                    }), "" !== u.queue && "fx" !== u.queue || "inprogress" === c.queue(a)[0] || c.dequeue(a)
                }

                var d, h, p, m, y, w,
                    k = arguments[0] && (arguments[0].p || c.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || f.isString(arguments[0].properties));
                if (f.isWrapped(this) ? (d = !1, p = 0, m = this, h = this) : (d = !0, p = 1, m = k ? arguments[0].elements || arguments[0].e : arguments[0]), m = o(m)) {
                    k ? (y = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (y = arguments[p], w = arguments[p + 1]);
                    var C = m.length, _ = 0;
                    if (!/^(stop|finish)$/i.test(y) && !c.isPlainObject(w)) {
                        w = {};
                        for (var T = p + 1; T < arguments.length; T++) f.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? f.isString(arguments[T]) || f.isArray(arguments[T]) ? w.easing = arguments[T] : f.isFunction(arguments[T]) && (w.complete = arguments[T]) : w.duration = arguments[T]
                    }
                    var S, E = {promise: null, resolver: null, rejecter: null};
                    switch (d && v.Promise && (E.promise = new v.Promise(function (e, t) {
                        E.resolver = e, E.rejecter = t
                    })), y) {
                        case"scroll":
                            S = "scroll";
                            break;
                        case"reverse":
                            S = "reverse";
                            break;
                        case"finish":
                        case"stop":
                            c.each(m, function (e, t) {
                                r(t) && r(t).delayTimer && (clearTimeout(r(t).delayTimer.setTimeout), r(t).delayTimer.next && r(t).delayTimer.next(), delete r(t).delayTimer)
                            });
                            var A = [];
                            return c.each(v.State.calls, function (e, t) {
                                t && c.each(t[1], function (n, o) {
                                    var a = w === i ? "" : w;
                                    return !0 !== a && t[2].queue !== a && (w !== i || !1 !== t[2].queue) || void c.each(m, function (n, i) {
                                        i === o && ((!0 === w || f.isString(w)) && (c.each(c.queue(i, f.isString(w) ? w : ""), function (e, t) {
                                            f.isFunction(t) && t(null, !0)
                                        }), c.queue(i, f.isString(w) ? w : "", [])), "stop" === y ? (r(i) && r(i).tweensContainer && !1 !== a && c.each(r(i).tweensContainer, function (e, t) {
                                            t.endValue = t.currentValue
                                        }), A.push(e)) : "finish" === y && (t[2].duration = 1))
                                    })
                                })
                            }), "stop" === y && (c.each(A, function (e, t) {
                                u(t, !0)
                            }), E.promise && E.resolver(m)), e();
                        default:
                            if (!c.isPlainObject(y) || f.isEmptyObject(y)) {
                                if (f.isString(y) && v.Redirects[y]) {
                                    var I = (O = c.extend({}, w)).duration, P = O.delay || 0;
                                    return !0 === O.backwards && (m = c.extend(!0, [], m).reverse()), c.each(m, function (e, t) {
                                        parseFloat(O.stagger) ? O.delay = P + parseFloat(O.stagger) * e : f.isFunction(O.stagger) && (O.delay = P + O.stagger.call(t, e, C)), O.drag && (O.duration = parseFloat(I) || (/^(callout|transition)/.test(y) ? 1e3 : g), O.duration = Math.max(O.duration * (O.backwards ? 1 - e / C : (e + 1) / C), .75 * O.duration, 200)), v.Redirects[y].call(t, t, O || {}, e, C, m, E.promise ? E : i)
                                    }), e()
                                }
                                var D = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return E.promise ? E.rejecter(new Error(D)) : console.log(D), e()
                            }
                            S = "start"
                    }
                    var M, O, L = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    }, N = [];
                    if (c.each(m, function (e, t) {
                            f.isNode(t) && a.call(t)
                        }), (O = c.extend({}, v.defaults, w)).loop = parseInt(O.loop), M = 2 * O.loop - 1, O.loop) for (var R = 0; M > R; R++) {
                        var F = {delay: O.delay, progress: O.progress};
                        R === M - 1 && (F.display = O.display, F.visibility = O.visibility, F.complete = O.complete), x(m, "reverse", F)
                    }
                    return e()
                }
            };
            (v = c.extend(x, v)).animate = x;
            var w = t.requestAnimationFrame || h;
            return v.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function () {
                n.hidden ? (w = function (e) {
                    return setTimeout(function () {
                        e(!0)
                    }, 16)
                }, l()) : w = t.requestAnimationFrame || h
            }), e.Velocity = v, e !== t && (e.fn.velocity = x, e.fn.velocity.defaults = v.defaults), c.each(["Down", "Up"], function (e, t) {
                v.Redirects["slide" + t] = function (e, n, o, r, a, s) {
                    var l = c.extend({}, n), u = l.begin, d = l.complete,
                        h = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""}, f = {};
                    l.display === i && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                        for (var n in u && u.call(a, a), h) {
                            f[n] = e.style[n];
                            var i = v.CSS.getPropertyValue(e, n);
                            h[n] = "Down" === t ? [i, 0] : [0, i]
                        }
                        f.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function () {
                        for (var t in f) e.style[t] = f[t];
                        d && d.call(a, a), s && s.resolver(a)
                    }, v(e, h, l)
                }
            }), c.each(["In", "Out"], function (e, t) {
                v.Redirects["fade" + t] = function (e, n, o, r, a, s) {
                    var l = c.extend({}, n), u = {opacity: "In" === t ? 1 : 0}, d = l.complete;
                    l.complete = o !== r - 1 ? l.begin = null : function () {
                        d && d.call(a, a), s && s.resolver(a)
                    }, l.display === i && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
                }
            }), v
        }
        jQuery.fn.velocity = jQuery.fn.animate
    }(window.jQuery || window.Zepto || window, window, document)
})), function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = e()
    }
}(function () {
    return function () {
        return function e(t, n, i) {
            function o(a, s) {
                if (!n[a]) {
                    if (!t[a]) {
                        var l = "function" == typeof require && require;
                        if (!s && l) return l(a, !0);
                        if (r) return r(a, !0);
                        var u = new Error("Cannot find module '" + a + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = n[a] = {exports: {}};
                    t[a][0].call(c.exports, function (e) {
                        var n = t[a][1][e];
                        return o(n || e)
                    }, c, c.exports, e, t, n, i)
                }
                return n[a].exports
            }

            for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
            return o
        }
    }()({
        1: [function (e, t, n) {
        }, {}], 2: [function (e, t, n) {
            var i = e(6);

            function o(e) {
                if (e) {
                    var t = [0, 0, 0], n = 1, o = e.match(/^#([a-fA-F0-9]{3})$/i);
                    if (o) {
                        o = o[1];
                        for (var r = 0; r < t.length; r++) t[r] = parseInt(o[r] + o[r], 16)
                    } else if (o = e.match(/^#([a-fA-F0-9]{6})$/i)) {
                        o = o[1];
                        for (r = 0; r < t.length; r++) t[r] = parseInt(o.slice(2 * r, 2 * r + 2), 16)
                    } else if (o = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (r = 0; r < t.length; r++) t[r] = parseInt(o[r + 1]);
                        n = parseFloat(o[4])
                    } else if (o = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(o[r + 1]));
                        n = parseFloat(o[4])
                    } else if (o = e.match(/(\w+)/)) {
                        if ("transparent" == o[1]) return [0, 0, 0, 0];
                        if (!(t = i[o[1]])) return
                    }
                    for (r = 0; r < t.length; r++) t[r] = c(t[r], 0, 255);
                    return n = n || 0 == n ? c(n, 0, 1) : 1, t[3] = n, t
                }
            }

            function r(e) {
                if (e) {
                    var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (t) {
                        var n = parseFloat(t[4]);
                        return [c(parseInt(t[1]), 0, 360), c(parseFloat(t[2]), 0, 100), c(parseFloat(t[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function a(e) {
                if (e) {
                    var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (t) {
                        var n = parseFloat(t[4]);
                        return [c(parseInt(t[1]), 0, 360), c(parseFloat(t[2]), 0, 100), c(parseFloat(t[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function s(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
            }

            function l(e, t) {
                return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
            }

            function u(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
            }

            function c(e, t, n) {
                return Math.min(Math.max(t, e), n)
            }

            function d(e) {
                var t = e.toString(16).toUpperCase();
                return t.length < 2 ? "0" + t : t
            }

            t.exports = {
                getRgba: o, getHsla: r, getRgb: function (e) {
                    var t = o(e);
                    return t && t.slice(0, 3)
                }, getHsl: function (e) {
                    var t = r(e);
                    return t && t.slice(0, 3)
                }, getHwb: a, getAlpha: function (e) {
                    var t = o(e);
                    if (t) return t[3];
                    if (t = r(e)) return t[3];
                    if (t = a(e)) return t[3]
                }, hexString: function (e) {
                    return "#" + d(e[0]) + d(e[1]) + d(e[2])
                }, rgbString: function (e, t) {
                    if (t < 1 || e[3] && e[3] < 1) return s(e, t);
                    return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
                }, rgbaString: s, percentString: function (e, t) {
                    if (t < 1 || e[3] && e[3] < 1) return l(e, t);
                    var n = Math.round(e[0] / 255 * 100), i = Math.round(e[1] / 255 * 100),
                        o = Math.round(e[2] / 255 * 100);
                    return "rgb(" + n + "%, " + i + "%, " + o + "%)"
                }, percentaString: l, hslString: function (e, t) {
                    if (t < 1 || e[3] && e[3] < 1) return u(e, t);
                    return "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
                }, hslaString: u, hwbString: function (e, t) {
                    void 0 === t && (t = void 0 !== e[3] ? e[3] : 1);
                    return "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
                }, keyword: function (e) {
                    return h[e.slice(0, 3)]
                }
            };
            var h = {};
            for (var f in i) h[i[f]] = f
        }, {6: 6}], 3: [function (e, t, n) {
            var i = e(5), o = e(2), r = function (e) {
                return e instanceof r ? e : this instanceof r ? (this.valid = !1, this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                }, void("string" == typeof e ? (t = o.getRgba(e)) ? this.setValues("rgb", t) : (t = o.getHsla(e)) ? this.setValues("hsl", t) : (t = o.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new r(e);
                var t
            };
            r.prototype = {
                isValid: function () {
                    return this.valid
                }, rgb: function () {
                    return this.setSpace("rgb", arguments)
                }, hsl: function () {
                    return this.setSpace("hsl", arguments)
                }, hsv: function () {
                    return this.setSpace("hsv", arguments)
                }, hwb: function () {
                    return this.setSpace("hwb", arguments)
                }, cmyk: function () {
                    return this.setSpace("cmyk", arguments)
                }, rgbArray: function () {
                    return this.values.rgb
                }, hslArray: function () {
                    return this.values.hsl
                }, hsvArray: function () {
                    return this.values.hsv
                }, hwbArray: function () {
                    var e = this.values;
                    return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
                }, cmykArray: function () {
                    return this.values.cmyk
                }, rgbaArray: function () {
                    var e = this.values;
                    return e.rgb.concat([e.alpha])
                }, hslaArray: function () {
                    var e = this.values;
                    return e.hsl.concat([e.alpha])
                }, alpha: function (e) {
                    return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
                }, red: function (e) {
                    return this.setChannel("rgb", 0, e)
                }, green: function (e) {
                    return this.setChannel("rgb", 1, e)
                }, blue: function (e) {
                    return this.setChannel("rgb", 2, e)
                }, hue: function (e) {
                    return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
                }, saturation: function (e) {
                    return this.setChannel("hsl", 1, e)
                }, lightness: function (e) {
                    return this.setChannel("hsl", 2, e)
                }, saturationv: function (e) {
                    return this.setChannel("hsv", 1, e)
                }, whiteness: function (e) {
                    return this.setChannel("hwb", 1, e)
                }, blackness: function (e) {
                    return this.setChannel("hwb", 2, e)
                }, value: function (e) {
                    return this.setChannel("hsv", 2, e)
                }, cyan: function (e) {
                    return this.setChannel("cmyk", 0, e)
                }, magenta: function (e) {
                    return this.setChannel("cmyk", 1, e)
                }, yellow: function (e) {
                    return this.setChannel("cmyk", 2, e)
                }, black: function (e) {
                    return this.setChannel("cmyk", 3, e)
                }, hexString: function () {
                    return o.hexString(this.values.rgb)
                }, rgbString: function () {
                    return o.rgbString(this.values.rgb, this.values.alpha)
                }, rgbaString: function () {
                    return o.rgbaString(this.values.rgb, this.values.alpha)
                }, percentString: function () {
                    return o.percentString(this.values.rgb, this.values.alpha)
                }, hslString: function () {
                    return o.hslString(this.values.hsl, this.values.alpha)
                }, hslaString: function () {
                    return o.hslaString(this.values.hsl, this.values.alpha)
                }, hwbString: function () {
                    return o.hwbString(this.values.hwb, this.values.alpha)
                }, keyword: function () {
                    return o.keyword(this.values.rgb, this.values.alpha)
                }, rgbNumber: function () {
                    var e = this.values.rgb;
                    return e[0] << 16 | e[1] << 8 | e[2]
                }, luminosity: function () {
                    for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
                        var i = e[n] / 255;
                        t[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                    }
                    return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                }, contrast: function (e) {
                    var t = this.luminosity(), n = e.luminosity();
                    return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
                }, level: function (e) {
                    var t = this.contrast(e);
                    return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
                }, dark: function () {
                    var e = this.values.rgb;
                    return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
                }, light: function () {
                    return !this.dark()
                }, negate: function () {
                    for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
                    return this.setValues("rgb", e), this
                }, lighten: function (e) {
                    var t = this.values.hsl;
                    return t[2] += t[2] * e, this.setValues("hsl", t), this
                }, darken: function (e) {
                    var t = this.values.hsl;
                    return t[2] -= t[2] * e, this.setValues("hsl", t), this
                }, saturate: function (e) {
                    var t = this.values.hsl;
                    return t[1] += t[1] * e, this.setValues("hsl", t), this
                }, desaturate: function (e) {
                    var t = this.values.hsl;
                    return t[1] -= t[1] * e, this.setValues("hsl", t), this
                }, whiten: function (e) {
                    var t = this.values.hwb;
                    return t[1] += t[1] * e, this.setValues("hwb", t), this
                }, blacken: function (e) {
                    var t = this.values.hwb;
                    return t[2] += t[2] * e, this.setValues("hwb", t), this
                }, greyscale: function () {
                    var e = this.values.rgb, t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                    return this.setValues("rgb", [t, t, t]), this
                }, clearer: function (e) {
                    var t = this.values.alpha;
                    return this.setValues("alpha", t - t * e), this
                }, opaquer: function (e) {
                    var t = this.values.alpha;
                    return this.setValues("alpha", t + t * e), this
                }, rotate: function (e) {
                    var t = this.values.hsl, n = (t[0] + e) % 360;
                    return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
                }, mix: function (e, t) {
                    var n = e, i = void 0 === t ? .5 : t, o = 2 * i - 1, r = this.alpha() - n.alpha(),
                        a = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2, s = 1 - a;
                    return this.rgb(a * this.red() + s * n.red(), a * this.green() + s * n.green(), a * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i))
                }, toJSON: function () {
                    return this.rgb()
                }, clone: function () {
                    var e, t, n = new r, i = this.values, o = n.values;
                    for (var a in i) i.hasOwnProperty(a) && (e = i[a], "[object Array]" === (t = {}.toString.call(e)) ? o[a] = e.slice(0) : "[object Number]" === t ? o[a] = e : console.error("unexpected color value:", e));
                    return n
                }
            }, r.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, r.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, r.prototype.getValues = function (e) {
                for (var t = this.values, n = {}, i = 0; i < e.length; i++) n[e.charAt(i)] = t[e][i];
                return 1 !== t.alpha && (n.a = t.alpha), n
            }, r.prototype.setValues = function (e, t) {
                var n, o, r = this.values, a = this.spaces, s = this.maxes, l = 1;
                if (this.valid = !0, "alpha" === e) l = t; else if (t.length) r[e] = t.slice(0, e.length), l = t[e.length]; else if (void 0 !== t[e.charAt(0)]) {
                    for (n = 0; n < e.length; n++) r[e][n] = t[e.charAt(n)];
                    l = t.a
                } else if (void 0 !== t[a[e][0]]) {
                    var u = a[e];
                    for (n = 0; n < e.length; n++) r[e][n] = t[u[n]];
                    l = t.alpha
                }
                if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === e) return !1;
                for (n = 0; n < e.length; n++) o = Math.max(0, Math.min(s[e][n], r[e][n])), r[e][n] = Math.round(o);
                for (var c in a) c !== e && (r[c] = i[e][c](r[e]));
                return !0
            }, r.prototype.setSpace = function (e, t) {
                var n = t[0];
                return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this)
            }, r.prototype.setChannel = function (e, t, n) {
                var i = this.values[e];
                return void 0 === n ? i[t] : n === i[t] ? this : (i[t] = n, this.setValues(e, i), this)
            }, "undefined" != typeof window && (window.Color = r), t.exports = r
        }, {2: 2, 5: 5}], 4: [function (e, t, n) {
            function i(e) {
                var t, n, i = e[0] / 255, o = e[1] / 255, r = e[2] / 255, a = Math.min(i, o, r), s = Math.max(i, o, r),
                    l = s - a;
                return s == a ? t = 0 : i == s ? t = (o - r) / l : o == s ? t = 2 + (r - i) / l : r == s && (t = 4 + (i - o) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (a + s) / 2, [t, 100 * (s == a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n]
            }

            function o(e) {
                var t, n, i = e[0], o = e[1], r = e[2], a = Math.min(i, o, r), s = Math.max(i, o, r), l = s - a;
                return n = 0 == s ? 0 : l / s * 1e3 / 10, s == a ? t = 0 : i == s ? t = (o - r) / l : o == s ? t = 2 + (r - i) / l : r == s && (t = 4 + (i - o) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, s / 255 * 1e3 / 10]
            }

            function a(e) {
                var t = e[0], n = e[1], o = e[2];
                return [i(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, o))), 100 * (o = 1 - 1 / 255 * Math.max(t, Math.max(n, o)))]
            }

            function s(e) {
                var t, n = e[0] / 255, i = e[1] / 255, o = e[2] / 255;
                return [100 * ((1 - n - (t = Math.min(1 - n, 1 - i, 1 - o))) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * ((1 - o - t) / (1 - t) || 0), 100 * t]
            }

            function l(e) {
                return T[JSON.stringify(e)]
            }

            function u(e) {
                var t = e[0] / 255, n = e[1] / 255, i = e[2] / 255;
                return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * i), 100 * (.0193 * t + .1192 * n + .9505 * i)]
            }

            function c(e) {
                var t = u(e), n = t[0], i = t[1], o = t[2];
                return i /= 100, o /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
            }

            function d(e) {
                var t, n, i, o, r, a = e[0] / 360, s = e[1] / 100, l = e[2] / 100;
                if (0 == s) return [r = 255 * l, r, r];
                t = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];
                for (var u = 0; u < 3; u++) (i = a + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, r = 6 * i < 1 ? t + 6 * (n - t) * i : 2 * i < 1 ? n : 3 * i < 2 ? t + (n - t) * (2 / 3 - i) * 6 : t, o[u] = 255 * r;
                return o
            }

            function h(e) {
                var t = e[0] / 60, n = e[1] / 100, i = e[2] / 100, o = Math.floor(t) % 6, r = t - Math.floor(t),
                    a = 255 * i * (1 - n), s = 255 * i * (1 - n * r), l = 255 * i * (1 - n * (1 - r));
                i *= 255;
                switch (o) {
                    case 0:
                        return [i, l, a];
                    case 1:
                        return [s, i, a];
                    case 2:
                        return [a, i, l];
                    case 3:
                        return [a, s, i];
                    case 4:
                        return [l, a, i];
                    case 5:
                        return [i, a, s]
                }
            }

            function f(e) {
                var t, n, i, o, a = e[0] / 360, s = e[1] / 100, l = e[2] / 100, u = s + l;
                switch (u > 1 && (s /= u, l /= u), n = 1 - l, i = 6 * a - (t = Math.floor(6 * a)), 0 != (1 & t) && (i = 1 - i), o = s + i * (n - s), t) {
                    default:
                    case 6:
                    case 0:
                        r = n, g = o, b = s;
                        break;
                    case 1:
                        r = o, g = n, b = s;
                        break;
                    case 2:
                        r = s, g = n, b = o;
                        break;
                    case 3:
                        r = s, g = o, b = n;
                        break;
                    case 4:
                        r = o, g = s, b = n;
                        break;
                    case 5:
                        r = n, g = s, b = o
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function p(e) {
                var t = e[0] / 100, n = e[1] / 100, i = e[2] / 100, o = e[3] / 100;
                return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, i * (1 - o) + o))]
            }

            function m(e) {
                var t, n, i, o = e[0] / 100, r = e[1] / 100, a = e[2] / 100;
                return n = -.9689 * o + 1.8758 * r + .0415 * a, i = .0557 * o + -.204 * r + 1.057 * a, t = (t = 3.2406 * o + -1.5372 * r + -.4986 * a) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
            }

            function v(e) {
                var t = e[0], n = e[1], i = e[2];
                return n /= 100, i /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
            }

            function y(e) {
                var t, n, i, o, r = e[0], a = e[1], s = e[2];
                return r <= 8 ? o = (n = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((r + 16) / 116, 3), o = Math.pow(n / 100, 1 / 3)), [t = t / 95.047 <= .008856 ? t = 95.047 * (a / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + o, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3)]
            }

            function x(e) {
                var t, n = e[0], i = e[1], o = e[2];
                return (t = 360 * Math.atan2(o, i) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(i * i + o * o), t]
            }

            function w(e) {
                return m(y(e))
            }

            function k(e) {
                var t, n = e[0], i = e[1];
                return t = e[2] / 360 * 2 * Math.PI, [n, i * Math.cos(t), i * Math.sin(t)]
            }

            function C(e) {
                return _[e]
            }

            t.exports = {
                rgb2hsl: i,
                rgb2hsv: o,
                rgb2hwb: a,
                rgb2cmyk: s,
                rgb2keyword: l,
                rgb2xyz: u,
                rgb2lab: c,
                rgb2lch: function (e) {
                    return x(c(e))
                },
                hsl2rgb: d,
                hsl2hsv: function (e) {
                    var t = e[0], n = e[1] / 100, i = e[2] / 100;
                    if (0 === i) return [0, 0, 0];
                    return [t, 100 * (2 * (n *= (i *= 2) <= 1 ? i : 2 - i) / (i + n)), 100 * ((i + n) / 2)]
                },
                hsl2hwb: function (e) {
                    return a(d(e))
                },
                hsl2cmyk: function (e) {
                    return s(d(e))
                },
                hsl2keyword: function (e) {
                    return l(d(e))
                },
                hsv2rgb: h,
                hsv2hsl: function (e) {
                    var t, n, i = e[0], o = e[1] / 100, r = e[2] / 100;
                    return t = o * r, [i, 100 * (t = (t /= (n = (2 - o) * r) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
                },
                hsv2hwb: function (e) {
                    return a(h(e))
                },
                hsv2cmyk: function (e) {
                    return s(h(e))
                },
                hsv2keyword: function (e) {
                    return l(h(e))
                },
                hwb2rgb: f,
                hwb2hsl: function (e) {
                    return i(f(e))
                },
                hwb2hsv: function (e) {
                    return o(f(e))
                },
                hwb2cmyk: function (e) {
                    return s(f(e))
                },
                hwb2keyword: function (e) {
                    return l(f(e))
                },
                cmyk2rgb: p,
                cmyk2hsl: function (e) {
                    return i(p(e))
                },
                cmyk2hsv: function (e) {
                    return o(p(e))
                },
                cmyk2hwb: function (e) {
                    return a(p(e))
                },
                cmyk2keyword: function (e) {
                    return l(p(e))
                },
                keyword2rgb: C,
                keyword2hsl: function (e) {
                    return i(C(e))
                },
                keyword2hsv: function (e) {
                    return o(C(e))
                },
                keyword2hwb: function (e) {
                    return a(C(e))
                },
                keyword2cmyk: function (e) {
                    return s(C(e))
                },
                keyword2lab: function (e) {
                    return c(C(e))
                },
                keyword2xyz: function (e) {
                    return u(C(e))
                },
                xyz2rgb: m,
                xyz2lab: v,
                xyz2lch: function (e) {
                    return x(v(e))
                },
                lab2xyz: y,
                lab2rgb: w,
                lab2lch: x,
                lch2lab: k,
                lch2xyz: function (e) {
                    return y(k(e))
                },
                lch2rgb: function (e) {
                    return w(k(e))
                }
            };
            var _ = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }, T = {};
            for (var S in _) T[JSON.stringify(_[S])] = S
        }, {}], 5: [function (e, t, n) {
            var i = e(4), o = function () {
                return new u
            };
            for (var r in i) {
                o[r + "Raw"] = function (e) {
                    return function (t) {
                        return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), i[e](t)
                    }
                }(r);
                var a = /(\w+)2(\w+)/.exec(r), s = a[1], l = a[2];
                (o[s] = o[s] || {})[l] = o[r] = function (e) {
                    return function (t) {
                        "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                        var n = i[e](t);
                        if ("string" == typeof n || void 0 === n) return n;
                        for (var o = 0; o < n.length; o++) n[o] = Math.round(n[o]);
                        return n
                    }
                }(r)
            }
            var u = function () {
                this.convs = {}
            };
            u.prototype.routeSpace = function (e, t) {
                var n = t[0];
                return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n))
            }, u.prototype.setValues = function (e, t) {
                return this.space = e, this.convs = {}, this.convs[e] = t, this
            }, u.prototype.getValues = function (e) {
                var t = this.convs[e];
                if (!t) {
                    var n = this.space, i = this.convs[n];
                    t = o[n][e](i), this.convs[e] = t
                }
                return t
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (e) {
                u.prototype[e] = function (t) {
                    return this.routeSpace(e, arguments)
                }
            }), t.exports = o
        }, {4: 4}], 6: [function (e, t, n) {
            "use strict";
            t.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}], 7: [function (e, t, n) {
            var i = e(29)();
            i.helpers = e(45), e(27)(i), i.defaults = e(25), i.Element = e(26), i.elements = e(40), i.Interaction = e(28), i.layouts = e(30), i.platform = e(48), i.plugins = e(31), i.Ticks = e(34), e(22)(i), e(23)(i), e(24)(i), e(33)(i), e(32)(i), e(35)(i), e(55)(i), e(53)(i), e(54)(i), e(56)(i), e(57)(i), e(58)(i), e(15)(i), e(16)(i), e(17)(i), e(18)(i), e(19)(i), e(20)(i), e(21)(i), e(8)(i), e(9)(i), e(10)(i), e(11)(i), e(12)(i), e(13)(i), e(14)(i);
            var o = e(49);
            for (var r in o) o.hasOwnProperty(r) && i.plugins.register(o[r]);
            i.platform.initialize(), t.exports = i, "undefined" != typeof window && (window.Chart = i), i.Legend = o.legend._element, i.Title = o.title._element, i.pluginService = i.plugins, i.PluginBase = i.Element.extend({}), i.canvasHelpers = i.helpers.canvas, i.layoutService = i.layouts
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            40: 40,
            45: 45,
            48: 48,
            49: 49,
            53: 53,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            58: 58,
            8: 8,
            9: 9
        }], 8: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Bar = function (t, n) {
                    return n.type = "bar", new e(t, n)
                }
            }
        }, {}], 9: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Bubble = function (t, n) {
                    return n.type = "bubble", new e(t, n)
                }
            }
        }, {}], 10: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Doughnut = function (t, n) {
                    return n.type = "doughnut", new e(t, n)
                }
            }
        }, {}], 11: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Line = function (t, n) {
                    return n.type = "line", new e(t, n)
                }
            }
        }, {}], 12: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.PolarArea = function (t, n) {
                    return n.type = "polarArea", new e(t, n)
                }
            }
        }, {}], 13: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Radar = function (t, n) {
                    return n.type = "radar", new e(t, n)
                }
            }
        }, {}], 14: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Scatter = function (t, n) {
                    return n.type = "scatter", new e(t, n)
                }
            }
        }, {}], 15: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(40), r = e(45);
            i._set("bar", {
                hover: {mode: "label"},
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {offsetGridLines: !0}
                    }], yAxes: [{type: "linear"}]
                }
            }), i._set("horizontalBar", {
                hover: {mode: "index", axis: "y"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom"}],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {offsetGridLines: !0}
                    }]
                },
                elements: {rectangle: {borderSkipped: "left"}},
                tooltips: {
                    callbacks: {
                        title: function (e, t) {
                            var n = "";
                            return e.length > 0 && (e[0].yLabel ? n = e[0].yLabel : t.labels.length > 0 && e[0].index < t.labels.length && (n = t.labels[e[0].index])), n
                        }, label: function (e, t) {
                            return (t.datasets[e.datasetIndex].label || "") + ": " + e.xLabel
                        }
                    }, mode: "index", axis: "y"
                }
            }), t.exports = function (e) {
                e.controllers.bar = e.DatasetController.extend({
                    dataElementType: o.Rectangle, initialize: function () {
                        var t;
                        e.DatasetController.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
                    }, update: function (e) {
                        var t, n, i = this.getMeta().data;
                        for (this._ruler = this.getRuler(), t = 0, n = i.length; t < n; ++t) this.updateElement(i[t], t, e)
                    }, updateElement: function (e, t, n) {
                        var i = this, o = i.chart, a = i.getMeta(), s = i.getDataset(), l = e.custom || {},
                            u = o.options.elements.rectangle;
                        e._xScale = i.getScaleForId(a.xAxisID), e._yScale = i.getScaleForId(a.yAxisID), e._datasetIndex = i.index, e._index = t, e._model = {
                            datasetLabel: s.label,
                            label: o.data.labels[t],
                            borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                            backgroundColor: l.backgroundColor ? l.backgroundColor : r.valueAtIndexOrDefault(s.backgroundColor, t, u.backgroundColor),
                            borderColor: l.borderColor ? l.borderColor : r.valueAtIndexOrDefault(s.borderColor, t, u.borderColor),
                            borderWidth: l.borderWidth ? l.borderWidth : r.valueAtIndexOrDefault(s.borderWidth, t, u.borderWidth)
                        }, i.updateElementGeometry(e, t, n), e.pivot()
                    }, updateElementGeometry: function (e, t, n) {
                        var i = this, o = e._model, r = i.getValueScale(), a = r.getBasePixel(), s = r.isHorizontal(),
                            l = i._ruler || i.getRuler(), u = i.calculateBarValuePixels(i.index, t),
                            c = i.calculateBarIndexPixels(i.index, t, l);
                        o.horizontal = s, o.base = n ? a : u.base, o.x = s ? n ? a : u.head : c.center, o.y = s ? c.center : n ? a : u.head, o.height = s ? c.size : void 0, o.width = s ? void 0 : c.size
                    }, getValueScaleId: function () {
                        return this.getMeta().yAxisID
                    }, getIndexScaleId: function () {
                        return this.getMeta().xAxisID
                    }, getValueScale: function () {
                        return this.getScaleForId(this.getValueScaleId())
                    }, getIndexScale: function () {
                        return this.getScaleForId(this.getIndexScaleId())
                    }, _getStacks: function (e) {
                        var t, n, i = this.chart, o = this.getIndexScale().options.stacked,
                            r = void 0 === e ? i.data.datasets.length : e + 1, a = [];
                        for (t = 0; t < r; ++t) (n = i.getDatasetMeta(t)).bar && i.isDatasetVisible(t) && (!1 === o || !0 === o && -1 === a.indexOf(n.stack) || void 0 === o && (void 0 === n.stack || -1 === a.indexOf(n.stack))) && a.push(n.stack);
                        return a
                    }, getStackCount: function () {
                        return this._getStacks().length
                    }, getStackIndex: function (e, t) {
                        var n = this._getStacks(e), i = void 0 !== t ? n.indexOf(t) : -1;
                        return -1 === i ? n.length - 1 : i
                    }, getRuler: function () {
                        var e, t, n = this.getIndexScale(), i = this.getStackCount(), o = this.index,
                            a = n.isHorizontal(), s = a ? n.left : n.top, l = s + (a ? n.width : n.height), u = [];
                        for (e = 0, t = this.getMeta().data.length; e < t; ++e) u.push(n.getPixelForValue(null, e, o));
                        return {
                            min: r.isNullOrUndef(n.options.barThickness) ? function (e, t) {
                                var n, i, o, r, a = e.isHorizontal() ? e.width : e.height, s = e.getTicks();
                                for (o = 1, r = t.length; o < r; ++o) a = Math.min(a, t[o] - t[o - 1]);
                                for (o = 0, r = s.length; o < r; ++o) i = e.getPixelForTick(o), a = o > 0 ? Math.min(a, i - n) : a, n = i;
                                return a
                            }(n, u) : -1, pixels: u, start: s, end: l, stackCount: i, scale: n
                        }
                    }, calculateBarValuePixels: function (e, t) {
                        var n, i, o, r, a, s, l = this.chart, u = this.getMeta(), c = this.getValueScale(),
                            d = l.data.datasets, h = c.getRightValue(d[e].data[t]), f = c.options.stacked, p = u.stack,
                            g = 0;
                        if (f || void 0 === f && void 0 !== p) for (n = 0; n < e; ++n) (i = l.getDatasetMeta(n)).bar && i.stack === p && i.controller.getValueScaleId() === c.id && l.isDatasetVisible(n) && (o = c.getRightValue(d[n].data[t]), (h < 0 && o < 0 || h >= 0 && o > 0) && (g += o));
                        return r = c.getPixelForValue(g), {
                            size: s = ((a = c.getPixelForValue(g + h)) - r) / 2,
                            base: r,
                            head: a,
                            center: a + s / 2
                        }
                    }, calculateBarIndexPixels: function (e, t, n) {
                        var i = n.scale.options, o = "flex" === i.barThickness ? function (e, t, n) {
                                var i, o = t.pixels, r = o[e], a = e > 0 ? o[e - 1] : null,
                                    s = e < o.length - 1 ? o[e + 1] : null, l = n.categoryPercentage;
                                return null === a && (a = r - (null === s ? t.end - r : s - r)), null === s && (s = r + r - a), i = r - (r - a) / 2 * l, {
                                    chunk: (s - a) / 2 * l / t.stackCount,
                                    ratio: n.barPercentage,
                                    start: i
                                }
                            }(t, n, i) : function (e, t, n) {
                                var i, o, a = n.barThickness, s = t.stackCount, l = t.pixels[e];
                                return r.isNullOrUndef(a) ? (i = t.min * n.categoryPercentage, o = n.barPercentage) : (i = a * s, o = 1), {
                                    chunk: i / s,
                                    ratio: o,
                                    start: l - i / 2
                                }
                            }(t, n, i), a = this.getStackIndex(e, this.getMeta().stack),
                            s = o.start + o.chunk * a + o.chunk / 2,
                            l = Math.min(r.valueOrDefault(i.maxBarThickness, 1 / 0), o.chunk * o.ratio);
                        return {base: s - l / 2, head: s + l / 2, center: s, size: l}
                    }, draw: function () {
                        var e = this.chart, t = this.getValueScale(), n = this.getMeta().data, i = this.getDataset(),
                            o = n.length, a = 0;
                        for (r.canvas.clipArea(e.ctx, e.chartArea); a < o; ++a) isNaN(t.getRightValue(i.data[a])) || n[a].draw();
                        r.canvas.unclipArea(e.ctx)
                    }, setHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e._index, i = e.custom || {},
                            o = e._model;
                        o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r.valueAtIndexOrDefault(t.hoverBackgroundColor, n, r.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r.valueAtIndexOrDefault(t.hoverBorderColor, n, r.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r.valueAtIndexOrDefault(t.hoverBorderWidth, n, o.borderWidth)
                    }, removeHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e._index, i = e.custom || {},
                            o = e._model, a = this.chart.options.elements.rectangle;
                        o.backgroundColor = i.backgroundColor ? i.backgroundColor : r.valueAtIndexOrDefault(t.backgroundColor, n, a.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : r.valueAtIndexOrDefault(t.borderColor, n, a.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : r.valueAtIndexOrDefault(t.borderWidth, n, a.borderWidth)
                    }
                }), e.controllers.horizontalBar = e.controllers.bar.extend({
                    getValueScaleId: function () {
                        return this.getMeta().xAxisID
                    }, getIndexScaleId: function () {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 16: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(40), r = e(45);
            i._set("bubble", {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom", id: "x-axis-0"}],
                    yAxes: [{type: "linear", position: "left", id: "y-axis-0"}]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e, t) {
                            var n = t.datasets[e.datasetIndex].label || "",
                                i = t.datasets[e.datasetIndex].data[e.index];
                            return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + i.r + ")"
                        }
                    }
                }
            }), t.exports = function (e) {
                e.controllers.bubble = e.DatasetController.extend({
                    dataElementType: o.Point, update: function (e) {
                        var t = this, n = t.getMeta().data;
                        r.each(n, function (n, i) {
                            t.updateElement(n, i, e)
                        })
                    }, updateElement: function (e, t, n) {
                        var i = this, o = i.getMeta(), r = e.custom || {}, a = i.getScaleForId(o.xAxisID),
                            s = i.getScaleForId(o.yAxisID), l = i._resolveElementOptions(e, t),
                            u = i.getDataset().data[t], c = i.index,
                            d = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof u ? u : NaN, t, c),
                            h = n ? s.getBasePixel() : s.getPixelForValue(u, t, c);
                        e._xScale = a, e._yScale = s, e._options = l, e._datasetIndex = c, e._index = t, e._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            radius: n ? 0 : l.radius,
                            skip: r.skip || isNaN(d) || isNaN(h),
                            x: d,
                            y: h
                        }, e.pivot()
                    }, setHoverStyle: function (e) {
                        var t = e._model, n = e._options;
                        t.backgroundColor = r.valueOrDefault(n.hoverBackgroundColor, r.getHoverColor(n.backgroundColor)), t.borderColor = r.valueOrDefault(n.hoverBorderColor, r.getHoverColor(n.borderColor)), t.borderWidth = r.valueOrDefault(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius
                    }, removeHoverStyle: function (e) {
                        var t = e._model, n = e._options;
                        t.backgroundColor = n.backgroundColor, t.borderColor = n.borderColor, t.borderWidth = n.borderWidth, t.radius = n.radius
                    }, _resolveElementOptions: function (e, t) {
                        var n, i, o, a = this.chart, s = a.data.datasets[this.index], l = e.custom || {},
                            u = a.options.elements.point, c = r.options.resolve, d = s.data[t], h = {},
                            f = {chart: a, dataIndex: t, dataset: s, datasetIndex: this.index},
                            p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                        for (n = 0, i = p.length; n < i; ++n) h[o = p[n]] = c([l[o], s[o], u[o]], f, t);
                        return h.radius = c([l.radius, d ? d.r : void 0, s.radius, u.radius], f, t), h
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 17: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(40), r = e(45);
            i._set("doughnut", {
                animation: {animateRotate: !0, animateScale: !1},
                hover: {mode: "single"},
                legendCallback: function (e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    var n = e.data, i = n.datasets, o = n.labels;
                    if (i.length) for (var r = 0; r < i[0].data.length; ++r) t.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), o[r] && t.push(o[r]), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (e) {
                            var t = e.data;
                            return t.labels.length && t.datasets.length ? t.labels.map(function (n, i) {
                                var o = e.getDatasetMeta(0), a = t.datasets[0], s = o.data[i], l = s && s.custom || {},
                                    u = r.valueAtIndexOrDefault, c = e.options.elements.arc;
                                return {
                                    text: n,
                                    fillStyle: l.backgroundColor ? l.backgroundColor : u(a.backgroundColor, i, c.backgroundColor),
                                    strokeStyle: l.borderColor ? l.borderColor : u(a.borderColor, i, c.borderColor),
                                    lineWidth: l.borderWidth ? l.borderWidth : u(a.borderWidth, i, c.borderWidth),
                                    hidden: isNaN(a.data[i]) || o.data[i].hidden,
                                    index: i
                                }
                            }) : []
                        }
                    }, onClick: function (e, t) {
                        var n, i, o, r = t.index, a = this.chart;
                        for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) (o = a.getDatasetMeta(n)).data[r] && (o.data[r].hidden = !o.data[r].hidden);
                        a.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -.5 * Math.PI,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e, t) {
                            var n = t.labels[e.index], i = ": " + t.datasets[e.datasetIndex].data[e.index];
                            return r.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                        }
                    }
                }
            }), i._set("pie", r.clone(i.doughnut)), i._set("pie", {cutoutPercentage: 0}), t.exports = function (e) {
                e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
                    dataElementType: o.Arc,
                    linkScales: r.noop,
                    getRingIndex: function (e) {
                        for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t;
                        return t
                    },
                    update: function (e) {
                        var t = this, n = t.chart, i = n.chartArea, o = n.options, a = o.elements.arc,
                            s = i.right - i.left - a.borderWidth, l = i.bottom - i.top - a.borderWidth,
                            u = Math.min(s, l), c = {x: 0, y: 0}, d = t.getMeta(), h = o.cutoutPercentage,
                            f = o.circumference;
                        if (f < 2 * Math.PI) {
                            var p = o.rotation % (2 * Math.PI),
                                g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
                                m = {x: Math.cos(p), y: Math.sin(p)}, v = {x: Math.cos(g), y: Math.sin(g)},
                                y = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                b = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                x = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                w = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                k = h / 100, C = {
                                    x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : k), v.x * (v.x < 0 ? 1 : k)),
                                    y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : k), v.y * (v.y < 0 ? 1 : k))
                                }, _ = {
                                    x: y ? 1 : Math.max(m.x * (m.x > 0 ? 1 : k), v.x * (v.x > 0 ? 1 : k)),
                                    y: b ? 1 : Math.max(m.y * (m.y > 0 ? 1 : k), v.y * (v.y > 0 ? 1 : k))
                                }, T = {width: .5 * (_.x - C.x), height: .5 * (_.y - C.y)};
                            u = Math.min(s / T.width, l / T.height), c = {x: -.5 * (_.x + C.x), y: -.5 * (_.y + C.y)}
                        }
                        n.borderWidth = t.getMaxBorderWidth(d.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(h ? n.outerRadius / 100 * h : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = c.x * n.outerRadius, n.offsetY = c.y * n.outerRadius, d.total = t.calculateTotal(), t.outerRadius = n.outerRadius - n.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - n.radiusLength, 0), r.each(d.data, function (n, i) {
                            t.updateElement(n, i, e)
                        })
                    },
                    updateElement: function (e, t, n) {
                        var i = this, o = i.chart, a = o.chartArea, s = o.options, l = s.animation,
                            u = (a.left + a.right) / 2, c = (a.top + a.bottom) / 2, d = s.rotation, h = s.rotation,
                            f = i.getDataset(),
                            p = n && l.animateRotate ? 0 : e.hidden ? 0 : i.calculateCircumference(f.data[t]) * (s.circumference / (2 * Math.PI)),
                            g = n && l.animateScale ? 0 : i.innerRadius, m = n && l.animateScale ? 0 : i.outerRadius,
                            v = r.valueAtIndexOrDefault;
                        r.extend(e, {
                            _datasetIndex: i.index,
                            _index: t,
                            _model: {
                                x: u + o.offsetX,
                                y: c + o.offsetY,
                                startAngle: d,
                                endAngle: h,
                                circumference: p,
                                outerRadius: m,
                                innerRadius: g,
                                label: v(f.label, t, o.data.labels[t])
                            }
                        });
                        var y = e._model;
                        this.removeHoverStyle(e), n && l.animateRotate || (y.startAngle = 0 === t ? s.rotation : i.getMeta().data[t - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), e.pivot()
                    },
                    removeHoverStyle: function (t) {
                        e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                    },
                    calculateTotal: function () {
                        var e, t = this.getDataset(), n = this.getMeta(), i = 0;
                        return r.each(n.data, function (n, o) {
                            e = t.data[o], isNaN(e) || n.hidden || (i += Math.abs(e))
                        }), i
                    },
                    calculateCircumference: function (e) {
                        var t = this.getMeta().total;
                        return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0
                    },
                    getMaxBorderWidth: function (e) {
                        for (var t, n, i = 0, o = this.index, r = e.length, a = 0; a < r; a++) t = e[a]._model ? e[a]._model.borderWidth : 0, i = (n = e[a]._chart ? e[a]._chart.config.data.datasets[o].hoverBorderWidth : 0) > (i = t > i ? t : i) ? n : i;
                        return i
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 18: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(40), r = e(45);
            i._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {mode: "label"},
                scales: {xAxes: [{type: "category", id: "x-axis-0"}], yAxes: [{type: "linear", id: "y-axis-0"}]}
            }), t.exports = function (e) {
                function t(e, t) {
                    return r.valueOrDefault(e.showLine, t.showLines)
                }

                e.controllers.line = e.DatasetController.extend({
                    datasetElementType: o.Line,
                    dataElementType: o.Point,
                    update: function (e) {
                        var n, i, o, a = this, s = a.getMeta(), l = s.dataset, u = s.data || [], c = a.chart.options,
                            d = c.elements.line, h = a.getScaleForId(s.yAxisID), f = a.getDataset(), p = t(f, c);
                        for (p && (o = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = a.index, l._children = u, l._model = {
                            spanGaps: f.spanGaps ? f.spanGaps : c.spanGaps,
                            tension: o.tension ? o.tension : r.valueOrDefault(f.lineTension, d.tension),
                            backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || d.backgroundColor,
                            borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || d.borderWidth,
                            borderColor: o.borderColor ? o.borderColor : f.borderColor || d.borderColor,
                            borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || d.borderCapStyle,
                            borderDash: o.borderDash ? o.borderDash : f.borderDash || d.borderDash,
                            borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || d.borderDashOffset,
                            borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || d.borderJoinStyle,
                            fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : d.fill,
                            steppedLine: o.steppedLine ? o.steppedLine : r.valueOrDefault(f.steppedLine, d.stepped),
                            cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : r.valueOrDefault(f.cubicInterpolationMode, d.cubicInterpolationMode)
                        }, l.pivot()), n = 0, i = u.length; n < i; ++n) a.updateElement(u[n], n, e);
                        for (p && 0 !== l._model.tension && a.updateBezierControlPoints(), n = 0, i = u.length; n < i; ++n) u[n].pivot()
                    },
                    getPointBackgroundColor: function (e, t) {
                        var n = this.chart.options.elements.point.backgroundColor, i = this.getDataset(),
                            o = e.custom || {};
                        return o.backgroundColor ? n = o.backgroundColor : i.pointBackgroundColor ? n = r.valueAtIndexOrDefault(i.pointBackgroundColor, t, n) : i.backgroundColor && (n = i.backgroundColor), n
                    },
                    getPointBorderColor: function (e, t) {
                        var n = this.chart.options.elements.point.borderColor, i = this.getDataset(),
                            o = e.custom || {};
                        return o.borderColor ? n = o.borderColor : i.pointBorderColor ? n = r.valueAtIndexOrDefault(i.pointBorderColor, t, n) : i.borderColor && (n = i.borderColor), n
                    },
                    getPointBorderWidth: function (e, t) {
                        var n = this.chart.options.elements.point.borderWidth, i = this.getDataset(),
                            o = e.custom || {};
                        return isNaN(o.borderWidth) ? !isNaN(i.pointBorderWidth) || r.isArray(i.pointBorderWidth) ? n = r.valueAtIndexOrDefault(i.pointBorderWidth, t, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = o.borderWidth, n
                    },
                    updateElement: function (e, t, n) {
                        var i, o, a = this, s = a.getMeta(), l = e.custom || {}, u = a.getDataset(), c = a.index,
                            d = u.data[t], h = a.getScaleForId(s.yAxisID), f = a.getScaleForId(s.xAxisID),
                            p = a.chart.options.elements.point;
                        void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), i = f.getPixelForValue("object" == typeof d ? d : NaN, t, c), o = n ? h.getBasePixel() : a.calculatePointY(d, t, c), e._xScale = f, e._yScale = h, e._datasetIndex = c, e._index = t, e._model = {
                            x: i,
                            y: o,
                            skip: l.skip || isNaN(i) || isNaN(o),
                            radius: l.radius || r.valueAtIndexOrDefault(u.pointRadius, t, p.radius),
                            pointStyle: l.pointStyle || r.valueAtIndexOrDefault(u.pointStyle, t, p.pointStyle),
                            backgroundColor: a.getPointBackgroundColor(e, t),
                            borderColor: a.getPointBorderColor(e, t),
                            borderWidth: a.getPointBorderWidth(e, t),
                            tension: s.dataset._model ? s.dataset._model.tension : 0,
                            steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                            hitRadius: l.hitRadius || r.valueAtIndexOrDefault(u.pointHitRadius, t, p.hitRadius)
                        }
                    },
                    calculatePointY: function (e, t, n) {
                        var i, o, r, a = this.chart, s = this.getMeta(), l = this.getScaleForId(s.yAxisID), u = 0,
                            c = 0;
                        if (l.options.stacked) {
                            for (i = 0; i < n; i++) if (o = a.data.datasets[i], "line" === (r = a.getDatasetMeta(i)).type && r.yAxisID === l.id && a.isDatasetVisible(i)) {
                                var d = Number(l.getRightValue(o.data[t]));
                                d < 0 ? c += d || 0 : u += d || 0
                            }
                            var h = Number(l.getRightValue(e));
                            return h < 0 ? l.getPixelForValue(c + h) : l.getPixelForValue(u + h)
                        }
                        return l.getPixelForValue(e)
                    },
                    updateBezierControlPoints: function () {
                        var e, t, n, i, o = this.getMeta(), a = this.chart.chartArea, s = o.data || [];

                        function l(e, t, n) {
                            return Math.max(Math.min(e, n), t)
                        }

                        if (o.dataset._model.spanGaps && (s = s.filter(function (e) {
                                return !e._model.skip
                            })), "monotone" === o.dataset._model.cubicInterpolationMode) r.splineCurveMonotone(s); else for (e = 0, t = s.length; e < t; ++e) n = s[e]._model, i = r.splineCurve(r.previousItem(s, e)._model, n, r.nextItem(s, e)._model, o.dataset._model.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
                        if (this.chart.options.elements.line.capBezierPoints) for (e = 0, t = s.length; e < t; ++e) (n = s[e]._model).controlPointPreviousX = l(n.controlPointPreviousX, a.left, a.right), n.controlPointPreviousY = l(n.controlPointPreviousY, a.top, a.bottom), n.controlPointNextX = l(n.controlPointNextX, a.left, a.right), n.controlPointNextY = l(n.controlPointNextY, a.top, a.bottom)
                    },
                    draw: function () {
                        var e = this.chart, n = this.getMeta(), i = n.data || [], o = e.chartArea, a = i.length, s = 0;
                        for (r.canvas.clipArea(e.ctx, o), t(this.getDataset(), e.options) && n.dataset.draw(), r.canvas.unclipArea(e.ctx); s < a; ++s) i[s].draw(o)
                    },
                    setHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e._index, i = e.custom || {},
                            o = e._model;
                        o.radius = i.hoverRadius || r.valueAtIndexOrDefault(t.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor || r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, n, r.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor || r.valueAtIndexOrDefault(t.pointHoverBorderColor, n, r.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth || r.valueAtIndexOrDefault(t.pointHoverBorderWidth, n, o.borderWidth)
                    },
                    removeHoverStyle: function (e) {
                        var t = this, n = t.chart.data.datasets[e._datasetIndex], i = e._index, o = e.custom || {},
                            a = e._model;
                        void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), a.radius = o.radius || r.valueAtIndexOrDefault(n.pointRadius, i, t.chart.options.elements.point.radius), a.backgroundColor = t.getPointBackgroundColor(e, i), a.borderColor = t.getPointBorderColor(e, i), a.borderWidth = t.getPointBorderWidth(e, i)
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 19: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(40), r = e(45);
            i._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {display: !1},
                    gridLines: {circular: !0},
                    pointLabels: {display: !1},
                    ticks: {beginAtZero: !0}
                },
                animation: {animateRotate: !0, animateScale: !0},
                startAngle: -.5 * Math.PI,
                legendCallback: function (e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    var n = e.data, i = n.datasets, o = n.labels;
                    if (i.length) for (var r = 0; r < i[0].data.length; ++r) t.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), o[r] && t.push(o[r]), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (e) {
                            var t = e.data;
                            return t.labels.length && t.datasets.length ? t.labels.map(function (n, i) {
                                var o = e.getDatasetMeta(0), a = t.datasets[0], s = o.data[i].custom || {},
                                    l = r.valueAtIndexOrDefault, u = e.options.elements.arc;
                                return {
                                    text: n,
                                    fillStyle: s.backgroundColor ? s.backgroundColor : l(a.backgroundColor, i, u.backgroundColor),
                                    strokeStyle: s.borderColor ? s.borderColor : l(a.borderColor, i, u.borderColor),
                                    lineWidth: s.borderWidth ? s.borderWidth : l(a.borderWidth, i, u.borderWidth),
                                    hidden: isNaN(a.data[i]) || o.data[i].hidden,
                                    index: i
                                }
                            }) : []
                        }
                    }, onClick: function (e, t) {
                        var n, i, o, r = t.index, a = this.chart;
                        for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) (o = a.getDatasetMeta(n)).data[r].hidden = !o.data[r].hidden;
                        a.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e, t) {
                            return t.labels[e.index] + ": " + e.yLabel
                        }
                    }
                }
            }), t.exports = function (e) {
                e.controllers.polarArea = e.DatasetController.extend({
                    dataElementType: o.Arc,
                    linkScales: r.noop,
                    update: function (e) {
                        var t = this, n = t.chart, i = n.chartArea, o = t.getMeta(), a = n.options, s = a.elements.arc,
                            l = Math.min(i.right - i.left, i.bottom - i.top);
                        n.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(a.cutoutPercentage ? n.outerRadius / 100 * a.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), t.outerRadius = n.outerRadius - n.radiusLength * t.index, t.innerRadius = t.outerRadius - n.radiusLength, o.count = t.countVisibleElements(), r.each(o.data, function (n, i) {
                            t.updateElement(n, i, e)
                        })
                    },
                    updateElement: function (e, t, n) {
                        for (var i = this, o = i.chart, a = i.getDataset(), s = o.options, l = s.animation, u = o.scale, c = o.data.labels, d = i.calculateCircumference(a.data[t]), h = u.xCenter, f = u.yCenter, p = 0, g = i.getMeta(), m = 0; m < t; ++m) isNaN(a.data[m]) || g.data[m].hidden || ++p;
                        var v = s.startAngle, y = e.hidden ? 0 : u.getDistanceFromCenterForValue(a.data[t]),
                            b = v + d * p, x = b + (e.hidden ? 0 : d),
                            w = l.animateScale ? 0 : u.getDistanceFromCenterForValue(a.data[t]);
                        r.extend(e, {
                            _datasetIndex: i.index,
                            _index: t,
                            _scale: u,
                            _model: {
                                x: h,
                                y: f,
                                innerRadius: 0,
                                outerRadius: n ? w : y,
                                startAngle: n && l.animateRotate ? v : b,
                                endAngle: n && l.animateRotate ? v : x,
                                label: r.valueAtIndexOrDefault(c, t, c[t])
                            }
                        }), i.removeHoverStyle(e), e.pivot()
                    },
                    removeHoverStyle: function (t) {
                        e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function () {
                        var e = this.getDataset(), t = this.getMeta(), n = 0;
                        return r.each(t.data, function (t, i) {
                            isNaN(e.data[i]) || t.hidden || n++
                        }), n
                    },
                    calculateCircumference: function (e) {
                        var t = this.getMeta().count;
                        return t > 0 && !isNaN(e) ? 2 * Math.PI / t : 0
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 20: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(40), r = e(45);
            i._set("radar", {scale: {type: "radialLinear"}, elements: {line: {tension: 0}}}), t.exports = function (e) {
                e.controllers.radar = e.DatasetController.extend({
                    datasetElementType: o.Line,
                    dataElementType: o.Point,
                    linkScales: r.noop,
                    update: function (e) {
                        var t = this, n = t.getMeta(), i = n.dataset, o = n.data, a = i.custom || {},
                            s = t.getDataset(), l = t.chart.options.elements.line, u = t.chart.scale;
                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), r.extend(n.dataset, {
                            _datasetIndex: t.index,
                            _scale: u,
                            _children: o,
                            _loop: !0,
                            _model: {
                                tension: a.tension ? a.tension : r.valueOrDefault(s.lineTension, l.tension),
                                backgroundColor: a.backgroundColor ? a.backgroundColor : s.backgroundColor || l.backgroundColor,
                                borderWidth: a.borderWidth ? a.borderWidth : s.borderWidth || l.borderWidth,
                                borderColor: a.borderColor ? a.borderColor : s.borderColor || l.borderColor,
                                fill: a.fill ? a.fill : void 0 !== s.fill ? s.fill : l.fill,
                                borderCapStyle: a.borderCapStyle ? a.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                borderDash: a.borderDash ? a.borderDash : s.borderDash || l.borderDash,
                                borderDashOffset: a.borderDashOffset ? a.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                            }
                        }), n.dataset.pivot(), r.each(o, function (n, i) {
                            t.updateElement(n, i, e)
                        }, t), t.updateBezierControlPoints()
                    },
                    updateElement: function (e, t, n) {
                        var i = this, o = e.custom || {}, a = i.getDataset(), s = i.chart.scale,
                            l = i.chart.options.elements.point, u = s.getPointPositionForValue(t, a.data[t]);
                        void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius), r.extend(e, {
                            _datasetIndex: i.index,
                            _index: t,
                            _scale: s,
                            _model: {
                                x: n ? s.xCenter : u.x,
                                y: n ? s.yCenter : u.y,
                                tension: o.tension ? o.tension : r.valueOrDefault(a.lineTension, i.chart.options.elements.line.tension),
                                radius: o.radius ? o.radius : r.valueAtIndexOrDefault(a.pointRadius, t, l.radius),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : r.valueAtIndexOrDefault(a.pointBackgroundColor, t, l.backgroundColor),
                                borderColor: o.borderColor ? o.borderColor : r.valueAtIndexOrDefault(a.pointBorderColor, t, l.borderColor),
                                borderWidth: o.borderWidth ? o.borderWidth : r.valueAtIndexOrDefault(a.pointBorderWidth, t, l.borderWidth),
                                pointStyle: o.pointStyle ? o.pointStyle : r.valueAtIndexOrDefault(a.pointStyle, t, l.pointStyle),
                                hitRadius: o.hitRadius ? o.hitRadius : r.valueAtIndexOrDefault(a.pointHitRadius, t, l.hitRadius)
                            }
                        }), e._model.skip = o.skip ? o.skip : isNaN(e._model.x) || isNaN(e._model.y)
                    },
                    updateBezierControlPoints: function () {
                        var e = this.chart.chartArea, t = this.getMeta();
                        r.each(t.data, function (n, i) {
                            var o = n._model,
                                a = r.splineCurve(r.previousItem(t.data, i, !0)._model, o, r.nextItem(t.data, i, !0)._model, o.tension);
                            o.controlPointPreviousX = Math.max(Math.min(a.previous.x, e.right), e.left), o.controlPointPreviousY = Math.max(Math.min(a.previous.y, e.bottom), e.top), o.controlPointNextX = Math.max(Math.min(a.next.x, e.right), e.left), o.controlPointNextY = Math.max(Math.min(a.next.y, e.bottom), e.top), n.pivot()
                        })
                    },
                    setHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e.custom || {}, i = e._index,
                            o = e._model;
                        o.radius = n.hoverRadius ? n.hoverRadius : r.valueAtIndexOrDefault(t.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, i, r.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : r.valueAtIndexOrDefault(t.pointHoverBorderColor, i, r.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : r.valueAtIndexOrDefault(t.pointHoverBorderWidth, i, o.borderWidth)
                    },
                    removeHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e.custom || {}, i = e._index,
                            o = e._model, a = this.chart.options.elements.point;
                        o.radius = n.radius ? n.radius : r.valueAtIndexOrDefault(t.pointRadius, i, a.radius), o.backgroundColor = n.backgroundColor ? n.backgroundColor : r.valueAtIndexOrDefault(t.pointBackgroundColor, i, a.backgroundColor), o.borderColor = n.borderColor ? n.borderColor : r.valueAtIndexOrDefault(t.pointBorderColor, i, a.borderColor), o.borderWidth = n.borderWidth ? n.borderWidth : r.valueAtIndexOrDefault(t.pointBorderWidth, i, a.borderWidth)
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 21: [function (e, t, n) {
            "use strict";
            e(25)._set("scatter", {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{id: "x-axis-1", type: "linear", position: "bottom"}],
                    yAxes: [{id: "y-axis-1", type: "linear", position: "left"}]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e) {
                            return "(" + e.xLabel + ", " + e.yLabel + ")"
                        }
                    }
                }
            }), t.exports = function (e) {
                e.controllers.scatter = e.controllers.line
            }
        }, {25: 25}], 22: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(26), r = e(45);
            i._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: r.noop,
                    onComplete: r.noop
                }
            }), t.exports = function (e) {
                e.Animation = o.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), e.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function (e, t, n, i) {
                        var o, r, a = this.animations;
                        for (t.chart = e, i || (e.animating = !0), o = 0, r = a.length; o < r; ++o) if (a[o].chart === e) return void(a[o] = t);
                        a.push(t), 1 === a.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function (e) {
                        var t = r.findIndex(this.animations, function (t) {
                            return t.chart === e
                        });
                        -1 !== t && (this.animations.splice(t, 1), e.animating = !1)
                    },
                    requestAnimationFrame: function () {
                        var e = this;
                        null === e.request && (e.request = r.requestAnimFrame.call(window, function () {
                            e.request = null, e.startDigest()
                        }))
                    },
                    startDigest: function () {
                        var e = this, t = Date.now(), n = 0;
                        e.dropFrames > 1 && (n = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1), e.advance(1 + n);
                        var i = Date.now();
                        e.dropFrames += (i - t) / e.frameDuration, e.animations.length > 0 && e.requestAnimationFrame()
                    },
                    advance: function (e) {
                        for (var t, n, i = this.animations, o = 0; o < i.length;) n = (t = i[o]).chart, t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), r.callback(t.render, [n, t], n), r.callback(t.onAnimationProgress, [t], n), t.currentStep >= t.numSteps ? (r.callback(t.onAnimationComplete, [t], n), n.animating = !1, i.splice(o, 1)) : ++o
                    }
                }, Object.defineProperty(e.Animation.prototype, "animationObject", {
                    get: function () {
                        return this
                    }
                }), Object.defineProperty(e.Animation.prototype, "chartInstance", {
                    get: function () {
                        return this.chart
                    }, set: function (e) {
                        this.chart = e
                    }
                })
            }
        }, {25: 25, 26: 26, 45: 45}], 23: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(45), r = e(28), a = e(30), s = e(48), l = e(31);
            t.exports = function (e) {
                function t(e) {
                    return "top" === e || "bottom" === e
                }

                e.types = {}, e.instances = {}, e.controllers = {}, o.extend(e.prototype, {
                    construct: function (t, n) {
                        var r = this;
                        n = function (e) {
                            var t = (e = e || {}).data = e.data || {};
                            return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = o.configMerge(i.global, i[e.type], e.options || {}), e
                        }(n);
                        var a = s.acquireContext(t, n), l = a && a.canvas, u = l && l.height, c = l && l.width;
                        r.id = o.uid(), r.ctx = a, r.canvas = l, r.config = n, r.width = c, r.height = u, r.aspectRatio = u ? c / u : null, r.options = n.options, r._bufferedRender = !1, r.chart = r, r.controller = r, e.instances[r.id] = r, Object.defineProperty(r, "data", {
                            get: function () {
                                return r.config.data
                            }, set: function (e) {
                                r.config.data = e
                            }
                        }), a && l ? (r.initialize(), r.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    }, initialize: function () {
                        var e = this;
                        return l.notify(e, "beforeInit"), o.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.initToolTip(), l.notify(e, "afterInit"), e
                    }, clear: function () {
                        return o.canvas.clear(this), this
                    }, stop: function () {
                        return e.animationService.cancelAnimation(this), this
                    }, resize: function (e) {
                        var t = this, n = t.options, i = t.canvas, r = n.maintainAspectRatio && t.aspectRatio || null,
                            a = Math.max(0, Math.floor(o.getMaximumWidth(i))),
                            s = Math.max(0, Math.floor(r ? a / r : o.getMaximumHeight(i)));
                        if ((t.width !== a || t.height !== s) && (i.width = t.width = a, i.height = t.height = s, i.style.width = a + "px", i.style.height = s + "px", o.retinaScale(t, n.devicePixelRatio), !e)) {
                            var u = {width: a, height: s};
                            l.notify(t, "resize", [u]), t.options.onResize && t.options.onResize(t, u), t.stop(), t.update(t.options.responsiveAnimationDuration)
                        }
                    }, ensureScalesHaveIDs: function () {
                        var e = this.options, t = e.scales || {}, n = e.scale;
                        o.each(t.xAxes, function (e, t) {
                            e.id = e.id || "x-axis-" + t
                        }), o.each(t.yAxes, function (e, t) {
                            e.id = e.id || "y-axis-" + t
                        }), n && (n.id = n.id || "scale")
                    }, buildOrUpdateScales: function () {
                        var n = this, i = n.options, r = n.scales || {}, a = [],
                            s = Object.keys(r).reduce(function (e, t) {
                                return e[t] = !1, e
                            }, {});
                        i.scales && (a = a.concat((i.scales.xAxes || []).map(function (e) {
                            return {options: e, dtype: "category", dposition: "bottom"}
                        }), (i.scales.yAxes || []).map(function (e) {
                            return {options: e, dtype: "linear", dposition: "left"}
                        }))), i.scale && a.push({
                            options: i.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), o.each(a, function (i) {
                            var a = i.options, l = a.id, u = o.valueOrDefault(a.type, i.dtype);
                            t(a.position) !== t(i.dposition) && (a.position = i.dposition), s[l] = !0;
                            var c = null;
                            if (l in r && r[l].type === u) (c = r[l]).options = a, c.ctx = n.ctx, c.chart = n; else {
                                var d = e.scaleService.getScaleConstructor(u);
                                if (!d) return;
                                c = new d({id: l, type: u, options: a, ctx: n.ctx, chart: n}), r[c.id] = c
                            }
                            c.mergeTicksOptions(), i.isDefault && (n.scale = c)
                        }), o.each(s, function (e, t) {
                            e || delete r[t]
                        }), n.scales = r, e.scaleService.addScalesToLayout(this)
                    }, buildOrUpdateControllers: function () {
                        var t = this, n = [], i = [];
                        return o.each(t.data.datasets, function (o, r) {
                            var a = t.getDatasetMeta(r), s = o.type || t.config.type;
                            if (a.type && a.type !== s && (t.destroyDatasetMeta(r), a = t.getDatasetMeta(r)), a.type = s, n.push(a.type), a.controller) a.controller.updateIndex(r), a.controller.linkScales(); else {
                                var l = e.controllers[a.type];
                                if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                                a.controller = new l(t, r), i.push(a.controller)
                            }
                        }, t), i
                    }, resetElements: function () {
                        var e = this;
                        o.each(e.data.datasets, function (t, n) {
                            e.getDatasetMeta(n).controller.reset()
                        }, e)
                    }, reset: function () {
                        this.resetElements(), this.tooltip.initialize()
                    }, update: function (t) {
                        var n, i, r = this;
                        if (t && "object" == typeof t || (t = {
                                duration: t,
                                lazy: arguments[1]
                            }), i = (n = r).options, o.each(n.scales, function (e) {
                                a.removeBox(n, e)
                            }), i = o.configMerge(e.defaults.global, e.defaults[n.config.type], i), n.options = n.config.options = i, n.ensureScalesHaveIDs(), n.buildOrUpdateScales(), n.tooltip._options = i.tooltips, n.tooltip.initialize(), l._invalidate(r), !1 !== l.notify(r, "beforeUpdate")) {
                            r.tooltip._data = r.data;
                            var s = r.buildOrUpdateControllers();
                            o.each(r.data.datasets, function (e, t) {
                                r.getDatasetMeta(t).controller.buildOrUpdateElements()
                            }, r), r.updateLayout(), r.options.animation && r.options.animation.duration && o.each(s, function (e) {
                                e.reset()
                            }), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], l.notify(r, "afterUpdate"), r._bufferedRender ? r._bufferedRequest = {
                                duration: t.duration,
                                easing: t.easing,
                                lazy: t.lazy
                            } : r.render(t)
                        }
                    }, updateLayout: function () {
                        !1 !== l.notify(this, "beforeLayout") && (a.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout"))
                    }, updateDatasets: function () {
                        if (!1 !== l.notify(this, "beforeDatasetsUpdate")) {
                            for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                            l.notify(this, "afterDatasetsUpdate")
                        }
                    }, updateDataset: function (e) {
                        var t = this.getDatasetMeta(e), n = {meta: t, index: e};
                        !1 !== l.notify(this, "beforeDatasetUpdate", [n]) && (t.controller.update(), l.notify(this, "afterDatasetUpdate", [n]))
                    }, render: function (t) {
                        var n = this;
                        t && "object" == typeof t || (t = {duration: t, lazy: arguments[1]});
                        var i = t.duration, r = t.lazy;
                        if (!1 !== l.notify(n, "beforeRender")) {
                            var a = n.options.animation, s = function (e) {
                                l.notify(n, "afterRender"), o.callback(a && a.onComplete, [e], n)
                            };
                            if (a && (void 0 !== i && 0 !== i || void 0 === i && 0 !== a.duration)) {
                                var u = new e.Animation({
                                    numSteps: (i || a.duration) / 16.66,
                                    easing: t.easing || a.easing,
                                    render: function (e, t) {
                                        var n = o.easing.effects[t.easing], i = t.currentStep, r = i / t.numSteps;
                                        e.draw(n(r), r, i)
                                    },
                                    onAnimationProgress: a.onProgress,
                                    onAnimationComplete: s
                                });
                                e.animationService.addAnimation(n, u, i, r)
                            } else n.draw(), s(new e.Animation({numSteps: 0, chart: n}));
                            return n
                        }
                    }, draw: function (e) {
                        var t = this;
                        t.clear(), o.isNullOrUndef(e) && (e = 1), t.transition(e), !1 !== l.notify(t, "beforeDraw", [e]) && (o.each(t.boxes, function (e) {
                            e.draw(t.chartArea)
                        }, t), t.scale && t.scale.draw(), t.drawDatasets(e), t._drawTooltip(e), l.notify(t, "afterDraw", [e]))
                    }, transition: function (e) {
                        for (var t = 0, n = (this.data.datasets || []).length; t < n; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                        this.tooltip.transition(e)
                    }, drawDatasets: function (e) {
                        var t = this;
                        if (!1 !== l.notify(t, "beforeDatasetsDraw", [e])) {
                            for (var n = (t.data.datasets || []).length - 1; n >= 0; --n) t.isDatasetVisible(n) && t.drawDataset(n, e);
                            l.notify(t, "afterDatasetsDraw", [e])
                        }
                    }, drawDataset: function (e, t) {
                        var n = this.getDatasetMeta(e), i = {meta: n, index: e, easingValue: t};
                        !1 !== l.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(t), l.notify(this, "afterDatasetDraw", [i]))
                    }, _drawTooltip: function (e) {
                        var t = this.tooltip, n = {tooltip: t, easingValue: e};
                        !1 !== l.notify(this, "beforeTooltipDraw", [n]) && (t.draw(), l.notify(this, "afterTooltipDraw", [n]))
                    }, getElementAtEvent: function (e) {
                        return r.modes.single(this, e)
                    }, getElementsAtEvent: function (e) {
                        return r.modes.label(this, e, {intersect: !0})
                    }, getElementsAtXAxis: function (e) {
                        return r.modes["x-axis"](this, e, {intersect: !0})
                    }, getElementsAtEventForMode: function (e, t, n) {
                        var i = r.modes[t];
                        return "function" == typeof i ? i(this, e, n) : []
                    }, getDatasetAtEvent: function (e) {
                        return r.modes.dataset(this, e, {intersect: !0})
                    }, getDatasetMeta: function (e) {
                        var t = this.data.datasets[e];
                        t._meta || (t._meta = {});
                        var n = t._meta[this.id];
                        return n || (n = t._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), n
                    }, getVisibleDatasetCount: function () {
                        for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++;
                        return e
                    }, isDatasetVisible: function (e) {
                        var t = this.getDatasetMeta(e);
                        return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
                    }, generateLegend: function () {
                        return this.options.legendCallback(this)
                    }, destroyDatasetMeta: function (e) {
                        var t = this.id, n = this.data.datasets[e], i = n._meta && n._meta[t];
                        i && (i.controller.destroy(), delete n._meta[t])
                    }, destroy: function () {
                        var t, n, i = this, r = i.canvas;
                        for (i.stop(), t = 0, n = i.data.datasets.length; t < n; ++t) i.destroyDatasetMeta(t);
                        r && (i.unbindEvents(), o.canvas.clear(i), s.releaseContext(i.ctx), i.canvas = null, i.ctx = null), l.notify(i, "destroy"), delete e.instances[i.id]
                    }, toBase64Image: function () {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    }, initToolTip: function () {
                        var t = this;
                        t.tooltip = new e.Tooltip({
                            _chart: t,
                            _chartInstance: t,
                            _data: t.data,
                            _options: t.options.tooltips
                        }, t)
                    }, bindEvents: function () {
                        var e = this, t = e._listeners = {}, n = function () {
                            e.eventHandler.apply(e, arguments)
                        };
                        o.each(e.options.events, function (i) {
                            s.addEventListener(e, i, n), t[i] = n
                        }), e.options.responsive && (n = function () {
                            e.resize()
                        }, s.addEventListener(e, "resize", n), t.resize = n)
                    }, unbindEvents: function () {
                        var e = this, t = e._listeners;
                        t && (delete e._listeners, o.each(t, function (t, n) {
                            s.removeEventListener(e, n, t)
                        }))
                    }, updateHoverStyle: function (e, t, n) {
                        var i, o, r, a = n ? "setHoverStyle" : "removeHoverStyle";
                        for (o = 0, r = e.length; o < r; ++o) (i = e[o]) && this.getDatasetMeta(i._datasetIndex).controller[a](i)
                    }, eventHandler: function (e) {
                        var t = this, n = t.tooltip;
                        if (!1 !== l.notify(t, "beforeEvent", [e])) {
                            t._bufferedRender = !0, t._bufferedRequest = null;
                            var i = t.handleEvent(e);
                            n && (i = n._start ? n.handleEvent(e) : i | n.handleEvent(e)), l.notify(t, "afterEvent", [e]);
                            var o = t._bufferedRequest;
                            return o ? t.render(o) : i && !t.animating && (t.stop(), t.render(t.options.hover.animationDuration, !0)), t._bufferedRender = !1, t._bufferedRequest = null, t
                        }
                    }, handleEvent: function (e) {
                        var t, n = this, i = n.options || {}, r = i.hover;
                        return n.lastActive = n.lastActive || [], "mouseout" === e.type ? n.active = [] : n.active = n.getElementsAtEventForMode(e, r.mode, r), o.callback(i.onHover || i.hover.onHover, [e.native, n.active], n), "mouseup" !== e.type && "click" !== e.type || i.onClick && i.onClick.call(n, e.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), t = !o.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, t
                    }
                }), e.Controller = e
            }
        }, {25: 25, 28: 28, 30: 30, 31: 31, 45: 45, 48: 48}], 24: [function (e, t, n) {
            "use strict";
            var i = e(45);
            t.exports = function (e) {
                var t = ["push", "pop", "shift", "splice", "unshift"];

                function n(e, n) {
                    var i = e._chartjs;
                    if (i) {
                        var o = i.listeners, r = o.indexOf(n);
                        -1 !== r && o.splice(r, 1), o.length > 0 || (t.forEach(function (t) {
                            delete e[t]
                        }), delete e._chartjs)
                    }
                }

                e.DatasetController = function (e, t) {
                    this.initialize(e, t)
                }, i.extend(e.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function (e, t) {
                        this.chart = e, this.index = t, this.linkScales(), this.addElements()
                    },
                    updateIndex: function (e) {
                        this.index = e
                    },
                    linkScales: function () {
                        var e = this, t = e.getMeta(), n = e.getDataset();
                        null !== t.xAxisID && t.xAxisID in e.chart.scales || (t.xAxisID = n.xAxisID || e.chart.options.scales.xAxes[0].id), null !== t.yAxisID && t.yAxisID in e.chart.scales || (t.yAxisID = n.yAxisID || e.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function () {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function () {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function (e) {
                        return this.chart.scales[e]
                    },
                    reset: function () {
                        this.update(!0)
                    },
                    destroy: function () {
                        this._data && n(this._data, this)
                    },
                    createMetaDataset: function () {
                        var e = this.datasetElementType;
                        return e && new e({_chart: this.chart, _datasetIndex: this.index})
                    },
                    createMetaData: function (e) {
                        var t = this.dataElementType;
                        return t && new t({_chart: this.chart, _datasetIndex: this.index, _index: e})
                    },
                    addElements: function () {
                        var e, t, n = this.getMeta(), i = this.getDataset().data || [], o = n.data;
                        for (e = 0, t = i.length; e < t; ++e) o[e] = o[e] || this.createMetaData(e);
                        n.dataset = n.dataset || this.createMetaDataset()
                    },
                    addElementAndReset: function (e) {
                        var t = this.createMetaData(e);
                        this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
                    },
                    buildOrUpdateElements: function () {
                        var e, o, r = this, a = r.getDataset(), s = a.data || (a.data = []);
                        r._data !== s && (r._data && n(r._data, r), o = r, (e = s)._chartjs ? e._chartjs.listeners.push(o) : (Object.defineProperty(e, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {listeners: [o]}
                        }), t.forEach(function (t) {
                            var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1), o = e[t];
                            Object.defineProperty(e, t, {
                                configurable: !0, enumerable: !1, value: function () {
                                    var t = Array.prototype.slice.call(arguments), r = o.apply(this, t);
                                    return i.each(e._chartjs.listeners, function (e) {
                                        "function" == typeof e[n] && e[n].apply(e, t)
                                    }), r
                                }
                            })
                        })), r._data = s), r.resyncElements()
                    },
                    update: i.noop,
                    transition: function (e) {
                        for (var t = this.getMeta(), n = t.data || [], i = n.length, o = 0; o < i; ++o) n[o].transition(e);
                        t.dataset && t.dataset.transition(e)
                    },
                    draw: function () {
                        var e = this.getMeta(), t = e.data || [], n = t.length, i = 0;
                        for (e.dataset && e.dataset.draw(); i < n; ++i) t[i].draw()
                    },
                    removeHoverStyle: function (e, t) {
                        var n = this.chart.data.datasets[e._datasetIndex], o = e._index, r = e.custom || {},
                            a = i.valueAtIndexOrDefault, s = e._model;
                        s.backgroundColor = r.backgroundColor ? r.backgroundColor : a(n.backgroundColor, o, t.backgroundColor), s.borderColor = r.borderColor ? r.borderColor : a(n.borderColor, o, t.borderColor), s.borderWidth = r.borderWidth ? r.borderWidth : a(n.borderWidth, o, t.borderWidth)
                    },
                    setHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e._index, o = e.custom || {},
                            r = i.valueAtIndexOrDefault, a = i.getHoverColor, s = e._model;
                        s.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : r(t.hoverBackgroundColor, n, a(s.backgroundColor)), s.borderColor = o.hoverBorderColor ? o.hoverBorderColor : r(t.hoverBorderColor, n, a(s.borderColor)), s.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : r(t.hoverBorderWidth, n, s.borderWidth)
                    },
                    resyncElements: function () {
                        var e = this.getMeta(), t = this.getDataset().data, n = e.data.length, i = t.length;
                        i < n ? e.data.splice(i, n - i) : i > n && this.insertElements(n, i - n)
                    },
                    insertElements: function (e, t) {
                        for (var n = 0; n < t; ++n) this.addElementAndReset(e + n)
                    },
                    onDataPush: function () {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function () {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function () {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function (e, t) {
                        this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
                    },
                    onDataUnshift: function () {
                        this.insertElements(0, arguments.length)
                    }
                }), e.DatasetController.extend = i.inherits
            }
        }, {45: 45}], 25: [function (e, t, n) {
            "use strict";
            var i = e(45);
            t.exports = {
                _set: function (e, t) {
                    return i.merge(this[e] || (this[e] = {}), t)
                }
            }
        }, {45: 45}], 26: [function (e, t, n) {
            "use strict";
            var i = e(3), o = e(45);
            var r = function (e) {
                o.extend(this, e), this.initialize.apply(this, arguments)
            };
            o.extend(r.prototype, {
                initialize: function () {
                    this.hidden = !1
                }, pivot: function () {
                    var e = this;
                    return e._view || (e._view = o.clone(e._model)), e._start = {}, e
                }, transition: function (e) {
                    var t = this, n = t._model, o = t._start, r = t._view;
                    return n && 1 !== e ? (r || (r = t._view = {}), o || (o = t._start = {}), function (e, t, n, o) {
                        var r, a, s, l, u, c, d, h, f, p = Object.keys(n);
                        for (r = 0, a = p.length; r < a; ++r) if (c = n[s = p[r]], t.hasOwnProperty(s) || (t[s] = c), (l = t[s]) !== c && "_" !== s[0]) {
                            if (e.hasOwnProperty(s) || (e[s] = l), (d = typeof c) == typeof(u = e[s])) if ("string" === d) {
                                if ((h = i(u)).valid && (f = i(c)).valid) {
                                    t[s] = f.mix(h, o).rgbString();
                                    continue
                                }
                            } else if ("number" === d && isFinite(u) && isFinite(c)) {
                                t[s] = u + (c - u) * o;
                                continue
                            }
                            t[s] = c
                        }
                    }(o, r, n, e), t) : (t._view = n, t._start = null, t)
                }, tooltipPosition: function () {
                    return {x: this._model.x, y: this._model.y}
                }, hasValue: function () {
                    return o.isNumber(this._model.x) && o.isNumber(this._model.y)
                }
            }), r.extend = o.inherits, t.exports = r
        }, {3: 3, 45: 45}], 27: [function (e, t, n) {
            "use strict";
            var i = e(3), o = e(25), r = e(45);
            t.exports = function (e) {
                function t(e, t, n) {
                    var i;
                    return "string" == typeof e ? (i = parseInt(e, 10), -1 !== e.indexOf("%") && (i = i / 100 * t.parentNode[n])) : i = e, i
                }

                function n(e) {
                    return void 0 !== e && null !== e && "none" !== e
                }

                function a(e, i, o) {
                    var r = document.defaultView, a = e.parentNode, s = r.getComputedStyle(e)[i],
                        l = r.getComputedStyle(a)[i], u = n(s), c = n(l), d = Number.POSITIVE_INFINITY;
                    return u || c ? Math.min(u ? t(s, e, o) : d, c ? t(l, a, o) : d) : "none"
                }

                r.configMerge = function () {
                    return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (t, n, i, o) {
                            var a = n[t] || {}, s = i[t];
                            "scales" === t ? n[t] = r.scaleMerge(a, s) : "scale" === t ? n[t] = r.merge(a, [e.scaleService.getScaleDefaults(s.type), s]) : r._merger(t, n, i, o)
                        }
                    })
                }, r.scaleMerge = function () {
                    return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (t, n, i, o) {
                            if ("xAxes" === t || "yAxes" === t) {
                                var a, s, l, u = i[t].length;
                                for (n[t] || (n[t] = []), a = 0; a < u; ++a) l = i[t][a], s = r.valueOrDefault(l.type, "xAxes" === t ? "category" : "linear"), a >= n[t].length && n[t].push({}), !n[t][a].type || l.type && l.type !== n[t][a].type ? r.merge(n[t][a], [e.scaleService.getScaleDefaults(s), l]) : r.merge(n[t][a], l)
                            } else r._merger(t, n, i, o)
                        }
                    })
                }, r.where = function (e, t) {
                    if (r.isArray(e) && Array.prototype.filter) return e.filter(t);
                    var n = [];
                    return r.each(e, function (e) {
                        t(e) && n.push(e)
                    }), n
                }, r.findIndex = Array.prototype.findIndex ? function (e, t, n) {
                    return e.findIndex(t, n)
                } : function (e, t, n) {
                    n = void 0 === n ? e : n;
                    for (var i = 0, o = e.length; i < o; ++i) if (t.call(n, e[i], i, e)) return i;
                    return -1
                }, r.findNextWhere = function (e, t, n) {
                    r.isNullOrUndef(n) && (n = -1);
                    for (var i = n + 1; i < e.length; i++) {
                        var o = e[i];
                        if (t(o)) return o
                    }
                }, r.findPreviousWhere = function (e, t, n) {
                    r.isNullOrUndef(n) && (n = e.length);
                    for (var i = n - 1; i >= 0; i--) {
                        var o = e[i];
                        if (t(o)) return o
                    }
                }, r.isNumber = function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                }, r.almostEquals = function (e, t, n) {
                    return Math.abs(e - t) < n
                }, r.almostWhole = function (e, t) {
                    var n = Math.round(e);
                    return n - t < e && n + t > e
                }, r.max = function (e) {
                    return e.reduce(function (e, t) {
                        return isNaN(t) ? e : Math.max(e, t)
                    }, Number.NEGATIVE_INFINITY)
                }, r.min = function (e) {
                    return e.reduce(function (e, t) {
                        return isNaN(t) ? e : Math.min(e, t)
                    }, Number.POSITIVE_INFINITY)
                }, r.sign = Math.sign ? function (e) {
                    return Math.sign(e)
                } : function (e) {
                    return 0 === (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
                }, r.log10 = Math.log10 ? function (e) {
                    return Math.log10(e)
                } : function (e) {
                    var t = Math.log(e) * Math.LOG10E, n = Math.round(t);
                    return e === Math.pow(10, n) ? n : t
                }, r.toRadians = function (e) {
                    return e * (Math.PI / 180)
                }, r.toDegrees = function (e) {
                    return e * (180 / Math.PI)
                }, r.getAngleFromPoint = function (e, t) {
                    var n = t.x - e.x, i = t.y - e.y, o = Math.sqrt(n * n + i * i), r = Math.atan2(i, n);
                    return r < -.5 * Math.PI && (r += 2 * Math.PI), {angle: r, distance: o}
                }, r.distanceBetweenPoints = function (e, t) {
                    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                }, r.aliasPixel = function (e) {
                    return e % 2 == 0 ? 0 : .5
                }, r.splineCurve = function (e, t, n, i) {
                    var o = e.skip ? t : e, r = t, a = n.skip ? t : n,
                        s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                        l = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)), u = s / (s + l),
                        c = l / (s + l), d = i * (u = isNaN(u) ? 0 : u), h = i * (c = isNaN(c) ? 0 : c);
                    return {
                        previous: {x: r.x - d * (a.x - o.x), y: r.y - d * (a.y - o.y)},
                        next: {x: r.x + h * (a.x - o.x), y: r.y + h * (a.y - o.y)}
                    }
                }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function (e) {
                    var t, n, i, o, a, s, l, u, c, d = (e || []).map(function (e) {
                        return {model: e._model, deltaK: 0, mK: 0}
                    }), h = d.length;
                    for (t = 0; t < h; ++t) if (!(i = d[t]).model.skip) {
                        if (n = t > 0 ? d[t - 1] : null, (o = t < h - 1 ? d[t + 1] : null) && !o.model.skip) {
                            var f = o.model.x - i.model.x;
                            i.deltaK = 0 !== f ? (o.model.y - i.model.y) / f : 0
                        }
                        !n || n.model.skip ? i.mK = i.deltaK : !o || o.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                    }
                    for (t = 0; t < h - 1; ++t) i = d[t], o = d[t + 1], i.model.skip || o.model.skip || (r.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = o.mK = 0 : (a = i.mK / i.deltaK, s = o.mK / i.deltaK, (u = Math.pow(a, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), i.mK = a * l * i.deltaK, o.mK = s * l * i.deltaK)));
                    for (t = 0; t < h; ++t) (i = d[t]).model.skip || (n = t > 0 ? d[t - 1] : null, o = t < h - 1 ? d[t + 1] : null, n && !n.model.skip && (c = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - c, i.model.controlPointPreviousY = i.model.y - c * i.mK), o && !o.model.skip && (c = (o.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + c, i.model.controlPointNextY = i.model.y + c * i.mK))
                }, r.nextItem = function (e, t, n) {
                    return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
                }, r.previousItem = function (e, t, n) {
                    return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
                }, r.niceNum = function (e, t) {
                    var n = Math.floor(r.log10(e)), i = e / Math.pow(10, n);
                    return (t ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                }, r.requestAnimFrame = "undefined" == typeof window ? function (e) {
                    e()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                    return window.setTimeout(e, 1e3 / 60)
                }, r.getRelativePosition = function (e, t) {
                    var n, i, o = e.originalEvent || e, a = e.currentTarget || e.srcElement,
                        s = a.getBoundingClientRect(), l = o.touches;
                    l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = o.clientX, i = o.clientY);
                    var u = parseFloat(r.getStyle(a, "padding-left")), c = parseFloat(r.getStyle(a, "padding-top")),
                        d = parseFloat(r.getStyle(a, "padding-right")), h = parseFloat(r.getStyle(a, "padding-bottom")),
                        f = s.right - s.left - u - d, p = s.bottom - s.top - c - h;
                    return {
                        x: n = Math.round((n - s.left - u) / f * a.width / t.currentDevicePixelRatio),
                        y: i = Math.round((i - s.top - c) / p * a.height / t.currentDevicePixelRatio)
                    }
                }, r.getConstraintWidth = function (e) {
                    return a(e, "max-width", "clientWidth")
                }, r.getConstraintHeight = function (e) {
                    return a(e, "max-height", "clientHeight")
                }, r.getMaximumWidth = function (e) {
                    var t = e.parentNode;
                    if (!t) return e.clientWidth;
                    var n = parseInt(r.getStyle(t, "padding-left"), 10),
                        i = parseInt(r.getStyle(t, "padding-right"), 10), o = t.clientWidth - n - i,
                        a = r.getConstraintWidth(e);
                    return isNaN(a) ? o : Math.min(o, a)
                }, r.getMaximumHeight = function (e) {
                    var t = e.parentNode;
                    if (!t) return e.clientHeight;
                    var n = parseInt(r.getStyle(t, "padding-top"), 10),
                        i = parseInt(r.getStyle(t, "padding-bottom"), 10), o = t.clientHeight - n - i,
                        a = r.getConstraintHeight(e);
                    return isNaN(a) ? o : Math.min(o, a)
                }, r.getStyle = function (e, t) {
                    return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
                }, r.retinaScale = function (e, t) {
                    var n = e.currentDevicePixelRatio = t || window.devicePixelRatio || 1;
                    if (1 !== n) {
                        var i = e.canvas, o = e.height, r = e.width;
                        i.height = o * n, i.width = r * n, e.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = o + "px", i.style.width = r + "px")
                    }
                }, r.fontString = function (e, t, n) {
                    return t + " " + e + "px " + n
                }, r.longestText = function (e, t, n, i) {
                    var o = (i = i || {}).data = i.data || {}, a = i.garbageCollect = i.garbageCollect || [];
                    i.font !== t && (o = i.data = {}, a = i.garbageCollect = [], i.font = t), e.font = t;
                    var s = 0;
                    r.each(n, function (t) {
                        void 0 !== t && null !== t && !0 !== r.isArray(t) ? s = r.measureText(e, o, a, s, t) : r.isArray(t) && r.each(t, function (t) {
                            void 0 === t || null === t || r.isArray(t) || (s = r.measureText(e, o, a, s, t))
                        })
                    });
                    var l = a.length / 2;
                    if (l > n.length) {
                        for (var u = 0; u < l; u++) delete o[a[u]];
                        a.splice(0, l)
                    }
                    return s
                }, r.measureText = function (e, t, n, i, o) {
                    var r = t[o];
                    return r || (r = t[o] = e.measureText(o).width, n.push(o)), r > i && (i = r), i
                }, r.numberOfLabelLines = function (e) {
                    var t = 1;
                    return r.each(e, function (e) {
                        r.isArray(e) && e.length > t && (t = e.length)
                    }), t
                }, r.color = i ? function (e) {
                    return e instanceof CanvasGradient && (e = o.global.defaultColor), i(e)
                } : function (e) {
                    return console.error("Color.js not found!"), e
                }, r.getHoverColor = function (e) {
                    return e instanceof CanvasPattern ? e : r.color(e).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {25: 25, 3: 3, 45: 45}], 28: [function (e, t, n) {
            "use strict";
            var i = e(45);

            function o(e, t) {
                return e.native ? {x: e.x, y: e.y} : i.getRelativePosition(e, t)
            }

            function r(e, t) {
                var n, i, o, r, a;
                for (i = 0, r = e.data.datasets.length; i < r; ++i) if (e.isDatasetVisible(i)) for (o = 0, a = (n = e.getDatasetMeta(i)).data.length; o < a; ++o) {
                    var s = n.data[o];
                    s._view.skip || t(s)
                }
            }

            function a(e, t) {
                var n = [];
                return r(e, function (e) {
                    e.inRange(t.x, t.y) && n.push(e)
                }), n
            }

            function s(e, t, n, i) {
                var o = Number.POSITIVE_INFINITY, a = [];
                return r(e, function (e) {
                    if (!n || e.inRange(t.x, t.y)) {
                        var r = e.getCenterPoint(), s = i(t, r);
                        s < o ? (a = [e], o = s) : s === o && a.push(e)
                    }
                }), a
            }

            function l(e) {
                var t = -1 !== e.indexOf("x"), n = -1 !== e.indexOf("y");
                return function (e, i) {
                    var o = t ? Math.abs(e.x - i.x) : 0, r = n ? Math.abs(e.y - i.y) : 0;
                    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2))
                }
            }

            function u(e, t, n) {
                var i = o(t, e);
                n.axis = n.axis || "x";
                var r = l(n.axis), u = n.intersect ? a(e, i) : s(e, i, !1, r), c = [];
                return u.length ? (e.data.datasets.forEach(function (t, n) {
                    if (e.isDatasetVisible(n)) {
                        var i = e.getDatasetMeta(n).data[u[0]._index];
                        i && !i._view.skip && c.push(i)
                    }
                }), c) : []
            }

            t.exports = {
                modes: {
                    single: function (e, t) {
                        var n = o(t, e), i = [];
                        return r(e, function (e) {
                            if (e.inRange(n.x, n.y)) return i.push(e), i
                        }), i.slice(0, 1)
                    }, label: u, index: u, dataset: function (e, t, n) {
                        var i = o(t, e);
                        n.axis = n.axis || "xy";
                        var r = l(n.axis), u = n.intersect ? a(e, i) : s(e, i, !1, r);
                        return u.length > 0 && (u = e.getDatasetMeta(u[0]._datasetIndex).data), u
                    }, "x-axis": function (e, t) {
                        return u(e, t, {intersect: !1})
                    }, point: function (e, t) {
                        return a(e, o(t, e))
                    }, nearest: function (e, t, n) {
                        var i = o(t, e);
                        n.axis = n.axis || "xy";
                        var r = l(n.axis), a = s(e, i, n.intersect, r);
                        return a.length > 1 && a.sort(function (e, t) {
                            var n = e.getArea() - t.getArea();
                            return 0 === n && (n = e._datasetIndex - t._datasetIndex), n
                        }), a.slice(0, 1)
                    }, x: function (e, t, n) {
                        var i = o(t, e), a = [], s = !1;
                        return r(e, function (e) {
                            e.inXRange(i.x) && a.push(e), e.inRange(i.x, i.y) && (s = !0)
                        }), n.intersect && !s && (a = []), a
                    }, y: function (e, t, n) {
                        var i = o(t, e), a = [], s = !1;
                        return r(e, function (e) {
                            e.inYRange(i.y) && a.push(e), e.inRange(i.x, i.y) && (s = !0)
                        }), n.intersect && !s && (a = []), a
                    }
                }
            }
        }, {45: 45}], 29: [function (e, t, n) {
            "use strict";
            e(25)._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {onHover: null, mode: "nearest", intersect: !0, animationDuration: 400},
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {padding: {top: 0, right: 0, bottom: 0, left: 0}}
            }), t.exports = function () {
                var e = function (e, t) {
                    return this.construct(e, t), this
                };
                return e.Chart = e, e
            }
        }, {25: 25}], 30: [function (e, t, n) {
            "use strict";
            var i = e(45);

            function o(e, t) {
                return i.where(e, function (e) {
                    return e.position === t
                })
            }

            function r(e, t) {
                e.forEach(function (e, t) {
                    return e._tmpIndex_ = t, e
                }), e.sort(function (e, n) {
                    var i = t ? n : e, o = t ? e : n;
                    return i.weight === o.weight ? i._tmpIndex_ - o._tmpIndex_ : i.weight - o.weight
                }), e.forEach(function (e) {
                    delete e._tmpIndex_
                })
            }

            t.exports = {
                defaults: {}, addBox: function (e, t) {
                    e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t)
                }, removeBox: function (e, t) {
                    var n = e.boxes ? e.boxes.indexOf(t) : -1;
                    -1 !== n && e.boxes.splice(n, 1)
                }, configure: function (e, t, n) {
                    for (var i, o = ["fullWidth", "position", "weight"], r = o.length, a = 0; a < r; ++a) i = o[a], n.hasOwnProperty(i) && (t[i] = n[i])
                }, update: function (e, t, n) {
                    if (e) {
                        var a = e.options.layout || {}, s = i.options.toPadding(a.padding), l = s.left, u = s.right,
                            c = s.top, d = s.bottom, h = o(e.boxes, "left"), f = o(e.boxes, "right"),
                            p = o(e.boxes, "top"), g = o(e.boxes, "bottom"), m = o(e.boxes, "chartArea");
                        r(h, !0), r(f, !1), r(p, !0), r(g, !1);
                        var v = t - l - u, y = n - c - d, b = y / 2, x = (t - v / 2) / (h.length + f.length),
                            w = (n - b) / (p.length + g.length), k = v, C = y, _ = [];
                        i.each(h.concat(f, p, g), function (e) {
                            var t, n = e.isHorizontal();
                            n ? (t = e.update(e.fullWidth ? v : k, w), C -= t.height) : (t = e.update(x, C), k -= t.width), _.push({
                                horizontal: n,
                                minSize: t,
                                box: e
                            })
                        });
                        var T = 0, S = 0, E = 0, A = 0;
                        i.each(p.concat(g), function (e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                T = Math.max(T, t.left), S = Math.max(S, t.right)
                            }
                        }), i.each(h.concat(f), function (e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                E = Math.max(E, t.top), A = Math.max(A, t.bottom)
                            }
                        });
                        var I = l, P = u, D = c, M = d;
                        i.each(h.concat(f), H), i.each(h, function (e) {
                            I += e.width
                        }), i.each(f, function (e) {
                            P += e.width
                        }), i.each(p.concat(g), H), i.each(p, function (e) {
                            D += e.height
                        }), i.each(g, function (e) {
                            M += e.height
                        }), i.each(h.concat(f), function (e) {
                            var t = i.findNextWhere(_, function (t) {
                                return t.box === e
                            }), n = {left: 0, right: 0, top: D, bottom: M};
                            t && e.update(t.minSize.width, C, n)
                        }), I = l, P = u, D = c, M = d, i.each(h, function (e) {
                            I += e.width
                        }), i.each(f, function (e) {
                            P += e.width
                        }), i.each(p, function (e) {
                            D += e.height
                        }), i.each(g, function (e) {
                            M += e.height
                        });
                        var O = Math.max(T - I, 0);
                        I += O, P += Math.max(S - P, 0);
                        var L = Math.max(E - D, 0);
                        D += L, M += Math.max(A - M, 0);
                        var N = n - D - M, R = t - I - P;
                        R === k && N === C || (i.each(h, function (e) {
                            e.height = N
                        }), i.each(f, function (e) {
                            e.height = N
                        }), i.each(p, function (e) {
                            e.fullWidth || (e.width = R)
                        }), i.each(g, function (e) {
                            e.fullWidth || (e.width = R)
                        }), C = N, k = R);
                        var F = l + O, j = c + L;
                        i.each(h.concat(p), W), F += k, j += C, i.each(f, W), i.each(g, W), e.chartArea = {
                            left: I,
                            top: D,
                            right: I + k,
                            bottom: D + C
                        }, i.each(m, function (t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(k, C)
                        })
                    }

                    function H(e) {
                        var t = i.findNextWhere(_, function (t) {
                            return t.box === e
                        });
                        if (t) if (e.isHorizontal()) {
                            var n = {left: Math.max(I, T), right: Math.max(P, S), top: 0, bottom: 0};
                            e.update(e.fullWidth ? v : k, y / 2, n)
                        } else e.update(t.minSize.width, C)
                    }

                    function W(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? l : I, e.right = e.fullWidth ? t - u : I + k, e.top = j, e.bottom = j + e.height, j = e.bottom) : (e.left = F, e.right = F + e.width, e.top = D, e.bottom = D + C, F = e.right)
                    }
                }
            }
        }, {45: 45}], 31: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(45);
            i._set("global", {plugins: {}}), t.exports = {
                _plugins: [], _cacheId: 0, register: function (e) {
                    var t = this._plugins;
                    [].concat(e).forEach(function (e) {
                        -1 === t.indexOf(e) && t.push(e)
                    }), this._cacheId++
                }, unregister: function (e) {
                    var t = this._plugins;
                    [].concat(e).forEach(function (e) {
                        var n = t.indexOf(e);
                        -1 !== n && t.splice(n, 1)
                    }), this._cacheId++
                }, clear: function () {
                    this._plugins = [], this._cacheId++
                }, count: function () {
                    return this._plugins.length
                }, getAll: function () {
                    return this._plugins
                }, notify: function (e, t, n) {
                    var i, o, r, a, s, l = this.descriptors(e), u = l.length;
                    for (i = 0; i < u; ++i) if ("function" == typeof(s = (r = (o = l[i]).plugin)[t]) && ((a = [e].concat(n || [])).push(o.options), !1 === s.apply(r, a))) return !1;
                    return !0
                }, descriptors: function (e) {
                    var t = e.$plugins || (e.$plugins = {});
                    if (t.id === this._cacheId) return t.descriptors;
                    var n = [], r = [], a = e && e.config || {}, s = a.options && a.options.plugins || {};
                    return this._plugins.concat(a.plugins || []).forEach(function (e) {
                        if (-1 === n.indexOf(e)) {
                            var t = e.id, a = s[t];
                            !1 !== a && (!0 === a && (a = o.clone(i.global.plugins[t])), n.push(e), r.push({
                                plugin: e,
                                options: a || {}
                            }))
                        }
                    }), t.descriptors = r, t.id = this._cacheId, r
                }, _invalidate: function (e) {
                    delete e.$plugins
                }
            }
        }, {25: 25, 45: 45}], 32: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(26), r = e(45), a = e(34);

            function s(e) {
                var t, n, i = [];
                for (t = 0, n = e.length; t < n; ++t) i.push(e[t].label);
                return i
            }

            function l(e, t, n) {
                var i = e.getPixelForTick(t);
                return n && (i -= 0 === t ? (e.getPixelForTick(1) - i) / 2 : (i - e.getPixelForTick(t - 1)) / 2), i
            }

            i._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {display: !1, labelString: "", lineHeight: 1.2, padding: {top: 4, bottom: 4}},
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: a.formatters.values,
                    minor: {},
                    major: {}
                }
            }), t.exports = function (e) {
                function t(e, t, n) {
                    return r.isArray(t) ? r.longestText(e, n, t) : e.measureText(t).width
                }

                function n(e) {
                    var t = r.valueOrDefault, n = i.global, o = t(e.fontSize, n.defaultFontSize),
                        a = t(e.fontStyle, n.defaultFontStyle), s = t(e.fontFamily, n.defaultFontFamily);
                    return {size: o, style: a, family: s, font: r.fontString(o, a, s)}
                }

                function a(e) {
                    return r.options.toLineHeight(r.valueOrDefault(e.lineHeight, 1.2), r.valueOrDefault(e.fontSize, i.global.defaultFontSize))
                }

                e.Scale = o.extend({
                    getPadding: function () {
                        return {
                            left: this.paddingLeft || 0,
                            top: this.paddingTop || 0,
                            right: this.paddingRight || 0,
                            bottom: this.paddingBottom || 0
                        }
                    },
                    getTicks: function () {
                        return this._ticks
                    },
                    mergeTicksOptions: function () {
                        var e = this.options.ticks;
                        for (var t in!1 === e.minor && (e.minor = {display: !1}), !1 === e.major && (e.major = {display: !1}), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
                    },
                    beforeUpdate: function () {
                        r.callback(this.options.beforeUpdate, [this])
                    },
                    update: function (e, t, n) {
                        var i, o, a, s, l, u, c = this;
                        for (c.beforeUpdate(), c.maxWidth = e, c.maxHeight = t, c.margins = r.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, n), c.longestTextCache = c.longestTextCache || {}, c.beforeSetDimensions(), c.setDimensions(), c.afterSetDimensions(), c.beforeDataLimits(), c.determineDataLimits(), c.afterDataLimits(), c.beforeBuildTicks(), l = c.buildTicks() || [], c.afterBuildTicks(), c.beforeTickToLabelConversion(), a = c.convertTicksToLabels(l) || c.ticks, c.afterTickToLabelConversion(), c.ticks = a, i = 0, o = a.length; i < o; ++i) s = a[i], (u = l[i]) ? u.label = s : l.push(u = {
                            label: s,
                            major: !1
                        });
                        return c._ticks = l, c.beforeCalculateTickRotation(), c.calculateTickRotation(), c.afterCalculateTickRotation(), c.beforeFit(), c.fit(), c.afterFit(), c.afterUpdate(), c.minSize
                    },
                    afterUpdate: function () {
                        r.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function () {
                        r.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function () {
                        var e = this;
                        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
                    },
                    afterSetDimensions: function () {
                        r.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function () {
                        r.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: r.noop,
                    afterDataLimits: function () {
                        r.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function () {
                        r.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: r.noop,
                    afterBuildTicks: function () {
                        r.callback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function () {
                        r.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function () {
                        var e = this.options.ticks;
                        this.ticks = this.ticks.map(e.userCallback || e.callback, this)
                    },
                    afterTickToLabelConversion: function () {
                        r.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function () {
                        r.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function () {
                        var e = this, t = e.ctx, i = e.options.ticks, o = s(e._ticks), a = n(i);
                        t.font = a.font;
                        var l = i.minRotation || 0;
                        if (o.length && e.options.display && e.isHorizontal()) for (var u, c = r.longestText(t, a.font, o, e.longestTextCache), d = c, h = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; d > h && l < i.maxRotation;) {
                            var f = r.toRadians(l);
                            if (u = Math.cos(f), Math.sin(f) * c > e.maxHeight) {
                                l--;
                                break
                            }
                            l++, d = u * c
                        }
                        e.labelRotation = l
                    },
                    afterCalculateTickRotation: function () {
                        r.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function () {
                        r.callback(this.options.beforeFit, [this])
                    },
                    fit: function () {
                        var e = this, i = e.minSize = {width: 0, height: 0}, o = s(e._ticks), l = e.options,
                            u = l.ticks, c = l.scaleLabel, d = l.gridLines, h = l.display, f = e.isHorizontal(),
                            p = n(u), g = l.gridLines.tickMarkLength;
                        if (i.width = f ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : h && d.drawTicks ? g : 0, i.height = f ? h && d.drawTicks ? g : 0 : e.maxHeight, c.display && h) {
                            var m = a(c) + r.options.toPadding(c.padding).height;
                            f ? i.height += m : i.width += m
                        }
                        if (u.display && h) {
                            var v = r.longestText(e.ctx, p.font, o, e.longestTextCache), y = r.numberOfLabelLines(o),
                                b = .5 * p.size, x = e.options.ticks.padding;
                            if (f) {
                                e.longestLabelWidth = v;
                                var w = r.toRadians(e.labelRotation), k = Math.cos(w),
                                    C = Math.sin(w) * v + p.size * y + b * (y - 1) + b;
                                i.height = Math.min(e.maxHeight, i.height + C + x), e.ctx.font = p.font;
                                var _ = t(e.ctx, o[0], p.font), T = t(e.ctx, o[o.length - 1], p.font);
                                0 !== e.labelRotation ? (e.paddingLeft = "bottom" === l.position ? k * _ + 3 : k * b + 3, e.paddingRight = "bottom" === l.position ? k * b + 3 : k * T + 3) : (e.paddingLeft = _ / 2 + 3, e.paddingRight = T / 2 + 3)
                            } else u.mirror ? v = 0 : v += x + b, i.width = Math.min(e.maxWidth, i.width + v), e.paddingTop = p.size / 2, e.paddingBottom = p.size / 2
                        }
                        e.handleMargins(), e.width = i.width, e.height = i.height
                    },
                    handleMargins: function () {
                        var e = this;
                        e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
                    },
                    afterFit: function () {
                        r.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function () {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function () {
                        return this.options.fullWidth
                    },
                    getRightValue: function (e) {
                        if (r.isNullOrUndef(e)) return NaN;
                        if ("number" == typeof e && !isFinite(e)) return NaN;
                        if (e) if (this.isHorizontal()) {
                            if (void 0 !== e.x) return this.getRightValue(e.x)
                        } else if (void 0 !== e.y) return this.getRightValue(e.y);
                        return e
                    },
                    getLabelForIndex: r.noop,
                    getPixelForValue: r.noop,
                    getValueForPixel: r.noop,
                    getPixelForTick: function (e) {
                        var t = this, n = t.options.offset;
                        if (t.isHorizontal()) {
                            var i = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (n ? 0 : 1), 1),
                                o = i * e + t.paddingLeft;
                            n && (o += i / 2);
                            var r = t.left + Math.round(o);
                            return r += t.isFullWidth() ? t.margins.left : 0
                        }
                        var a = t.height - (t.paddingTop + t.paddingBottom);
                        return t.top + e * (a / (t._ticks.length - 1))
                    },
                    getPixelForDecimal: function (e) {
                        var t = this;
                        if (t.isHorizontal()) {
                            var n = (t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft,
                                i = t.left + Math.round(n);
                            return i += t.isFullWidth() ? t.margins.left : 0
                        }
                        return t.top + e * t.height
                    },
                    getBasePixel: function () {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function () {
                        var e = this.min, t = this.max;
                        return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
                    },
                    _autoSkip: function (e) {
                        var t, n, i, o, a = this, s = a.isHorizontal(), l = a.options.ticks.minor, u = e.length,
                            c = r.toRadians(a.labelRotation), d = Math.cos(c), h = a.longestLabelWidth * d, f = [];
                        for (l.maxTicksLimit && (o = l.maxTicksLimit), s && (t = !1, (h + l.autoSkipPadding) * u > a.width - (a.paddingLeft + a.paddingRight) && (t = 1 + Math.floor((h + l.autoSkipPadding) * u / (a.width - (a.paddingLeft + a.paddingRight)))), o && u > o && (t = Math.max(t, Math.floor(u / o)))), n = 0; n < u; n++) i = e[n], (t > 1 && n % t > 0 || n % t == 0 && n + t >= u) && n !== u - 1 && delete i.label, f.push(i);
                        return f
                    },
                    draw: function (e) {
                        var t = this, o = t.options;
                        if (o.display) {
                            var s = t.ctx, u = i.global, c = o.ticks.minor, d = o.ticks.major || c, h = o.gridLines,
                                f = o.scaleLabel, p = 0 !== t.labelRotation, g = t.isHorizontal(),
                                m = c.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                                v = r.valueOrDefault(c.fontColor, u.defaultFontColor), y = n(c),
                                b = r.valueOrDefault(d.fontColor, u.defaultFontColor), x = n(d),
                                w = h.drawTicks ? h.tickMarkLength : 0,
                                k = r.valueOrDefault(f.fontColor, u.defaultFontColor), C = n(f),
                                _ = r.options.toPadding(f.padding), T = r.toRadians(t.labelRotation), S = [],
                                E = t.options.gridLines.lineWidth,
                                A = "right" === o.position ? t.right : t.right - E - w,
                                I = "right" === o.position ? t.right + w : t.right,
                                P = "bottom" === o.position ? t.top + E : t.bottom - w - E,
                                D = "bottom" === o.position ? t.top + E + w : t.bottom + E;
                            if (r.each(m, function (n, i) {
                                    if (!r.isNullOrUndef(n.label)) {
                                        var a, s, d, f, v, y, b, x, k, C, _, M, O, L, N = n.label;
                                        i === t.zeroLineIndex && o.offset === h.offsetGridLines ? (a = h.zeroLineWidth, s = h.zeroLineColor, d = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (a = r.valueAtIndexOrDefault(h.lineWidth, i), s = r.valueAtIndexOrDefault(h.color, i), d = r.valueOrDefault(h.borderDash, u.borderDash), f = r.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
                                        var R = "middle", F = "middle", j = c.padding;
                                        if (g) {
                                            var H = w + j;
                                            "bottom" === o.position ? (F = p ? "middle" : "top", R = p ? "right" : "center", L = t.top + H) : (F = p ? "middle" : "bottom", R = p ? "left" : "center", L = t.bottom - H);
                                            var W = l(t, i, h.offsetGridLines && m.length > 1);
                                            W < t.left && (s = "rgba(0,0,0,0)"), W += r.aliasPixel(a), O = t.getPixelForTick(i) + c.labelOffset, v = b = k = _ = W, y = P, x = D, C = e.top, M = e.bottom + E
                                        } else {
                                            var B, z = "left" === o.position;
                                            c.mirror ? (R = z ? "left" : "right", B = j) : (R = z ? "right" : "left", B = w + j), O = z ? t.right - B : t.left + B;
                                            var V = l(t, i, h.offsetGridLines && m.length > 1);
                                            V < t.top && (s = "rgba(0,0,0,0)"), V += r.aliasPixel(a), L = t.getPixelForTick(i) + c.labelOffset, v = A, b = I, k = e.left, _ = e.right + E, y = x = C = M = V
                                        }
                                        S.push({
                                            tx1: v,
                                            ty1: y,
                                            tx2: b,
                                            ty2: x,
                                            x1: k,
                                            y1: C,
                                            x2: _,
                                            y2: M,
                                            labelX: O,
                                            labelY: L,
                                            glWidth: a,
                                            glColor: s,
                                            glBorderDash: d,
                                            glBorderDashOffset: f,
                                            rotation: -1 * T,
                                            label: N,
                                            major: n.major,
                                            textBaseline: F,
                                            textAlign: R
                                        })
                                    }
                                }), r.each(S, function (e) {
                                    if (h.display && (s.save(), s.lineWidth = e.glWidth, s.strokeStyle = e.glColor, s.setLineDash && (s.setLineDash(e.glBorderDash), s.lineDashOffset = e.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(e.tx1, e.ty1), s.lineTo(e.tx2, e.ty2)), h.drawOnChartArea && (s.moveTo(e.x1, e.y1), s.lineTo(e.x2, e.y2)), s.stroke(), s.restore()), c.display) {
                                        s.save(), s.translate(e.labelX, e.labelY), s.rotate(e.rotation), s.font = e.major ? x.font : y.font, s.fillStyle = e.major ? b : v, s.textBaseline = e.textBaseline, s.textAlign = e.textAlign;
                                        var n = e.label;
                                        if (r.isArray(n)) for (var i = n.length, o = 1.5 * y.size, a = t.isHorizontal() ? 0 : -o * (i - 1) / 2, l = 0; l < i; ++l) s.fillText("" + n[l], 0, a), a += o; else s.fillText(n, 0, 0);
                                        s.restore()
                                    }
                                }), f.display) {
                                var M, O, L = 0, N = a(f) / 2;
                                if (g) M = t.left + (t.right - t.left) / 2, O = "bottom" === o.position ? t.bottom - N - _.bottom : t.top + N + _.top; else {
                                    var R = "left" === o.position;
                                    M = R ? t.left + N + _.top : t.right - N - _.top, O = t.top + (t.bottom - t.top) / 2, L = R ? -.5 * Math.PI : .5 * Math.PI
                                }
                                s.save(), s.translate(M, O), s.rotate(L), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = k, s.font = C.font, s.fillText(f.labelString, 0, 0), s.restore()
                            }
                            if (h.drawBorder) {
                                s.lineWidth = r.valueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = r.valueAtIndexOrDefault(h.color, 0);
                                var F = t.left, j = t.right + E, H = t.top, W = t.bottom + E,
                                    B = r.aliasPixel(s.lineWidth);
                                g ? (H = W = "top" === o.position ? t.bottom : t.top, H += B, W += B) : (F = j = "left" === o.position ? t.right : t.left, F += B, j += B), s.beginPath(), s.moveTo(F, H), s.lineTo(j, W), s.stroke()
                            }
                        }
                    }
                })
            }
        }, {25: 25, 26: 26, 34: 34, 45: 45}], 33: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(45), r = e(30);
            t.exports = function (e) {
                e.scaleService = {
                    constructors: {}, defaults: {}, registerScaleType: function (e, t, n) {
                        this.constructors[e] = t, this.defaults[e] = o.clone(n)
                    }, getScaleConstructor: function (e) {
                        return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
                    }, getScaleDefaults: function (e) {
                        return this.defaults.hasOwnProperty(e) ? o.merge({}, [i.scale, this.defaults[e]]) : {}
                    }, updateScaleDefaults: function (e, t) {
                        this.defaults.hasOwnProperty(e) && (this.defaults[e] = o.extend(this.defaults[e], t))
                    }, addScalesToLayout: function (e) {
                        o.each(e.scales, function (t) {
                            t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, r.addBox(e, t)
                        })
                    }
                }
            }
        }, {25: 25, 30: 30, 45: 45}], 34: [function (e, t, n) {
            "use strict";
            var i = e(45);
            t.exports = {
                formatters: {
                    values: function (e) {
                        return i.isArray(e) ? e : "" + e
                    }, linear: function (e, t, n) {
                        var o = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                        Math.abs(o) > 1 && e !== Math.floor(e) && (o = e - Math.floor(e));
                        var r = i.log10(Math.abs(o)), a = "";
                        if (0 !== e) {
                            var s = -1 * Math.floor(r);
                            s = Math.max(Math.min(s, 20), 0), a = e.toFixed(s)
                        } else a = "0";
                        return a
                    }, logarithmic: function (e, t, n) {
                        var o = e / Math.pow(10, Math.floor(i.log10(e)));
                        return 0 === e ? "0" : 1 === o || 2 === o || 5 === o || 0 === t || t === n.length - 1 ? e.toExponential() : ""
                    }
                }
            }
        }, {45: 45}], 35: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(26), r = e(45);
            i._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: r.noop,
                        title: function (e, t) {
                            var n = "", i = t.labels, o = i ? i.length : 0;
                            if (e.length > 0) {
                                var r = e[0];
                                r.xLabel ? n = r.xLabel : o > 0 && r.index < o && (n = i[r.index])
                            }
                            return n
                        },
                        afterTitle: r.noop,
                        beforeBody: r.noop,
                        beforeLabel: r.noop,
                        label: function (e, t) {
                            var n = t.datasets[e.datasetIndex].label || "";
                            return n && (n += ": "), n += e.yLabel
                        },
                        labelColor: function (e, t) {
                            var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
                            return {borderColor: n.borderColor, backgroundColor: n.backgroundColor}
                        },
                        labelTextColor: function () {
                            return this._options.bodyFontColor
                        },
                        afterLabel: r.noop,
                        afterBody: r.noop,
                        beforeFooter: r.noop,
                        footer: r.noop,
                        afterFooter: r.noop
                    }
                }
            }), t.exports = function (e) {
                function t(e, t) {
                    var n = r.color(e);
                    return n.alpha(t * n.alpha()).rgbaString()
                }

                function n(e, t) {
                    return t && (r.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
                }

                function a(e) {
                    var t = i.global, n = r.valueOrDefault;
                    return {
                        xPadding: e.xPadding,
                        yPadding: e.yPadding,
                        xAlign: e.xAlign,
                        yAlign: e.yAlign,
                        bodyFontColor: e.bodyFontColor,
                        _bodyFontFamily: n(e.bodyFontFamily, t.defaultFontFamily),
                        _bodyFontStyle: n(e.bodyFontStyle, t.defaultFontStyle),
                        _bodyAlign: e.bodyAlign,
                        bodyFontSize: n(e.bodyFontSize, t.defaultFontSize),
                        bodySpacing: e.bodySpacing,
                        titleFontColor: e.titleFontColor,
                        _titleFontFamily: n(e.titleFontFamily, t.defaultFontFamily),
                        _titleFontStyle: n(e.titleFontStyle, t.defaultFontStyle),
                        titleFontSize: n(e.titleFontSize, t.defaultFontSize),
                        _titleAlign: e.titleAlign,
                        titleSpacing: e.titleSpacing,
                        titleMarginBottom: e.titleMarginBottom,
                        footerFontColor: e.footerFontColor,
                        _footerFontFamily: n(e.footerFontFamily, t.defaultFontFamily),
                        _footerFontStyle: n(e.footerFontStyle, t.defaultFontStyle),
                        footerFontSize: n(e.footerFontSize, t.defaultFontSize),
                        _footerAlign: e.footerAlign,
                        footerSpacing: e.footerSpacing,
                        footerMarginTop: e.footerMarginTop,
                        caretSize: e.caretSize,
                        cornerRadius: e.cornerRadius,
                        backgroundColor: e.backgroundColor,
                        opacity: 0,
                        legendColorBackground: e.multiKeyBackground,
                        displayColors: e.displayColors,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth
                    }
                }

                e.Tooltip = o.extend({
                    initialize: function () {
                        this._model = a(this._options), this._lastActive = []
                    }, getTitle: function () {
                        var e = this._options.callbacks, t = e.beforeTitle.apply(this, arguments),
                            i = e.title.apply(this, arguments), o = e.afterTitle.apply(this, arguments), r = [];
                        return r = n(r = n(r = n(r, t), i), o)
                    }, getBeforeBody: function () {
                        var e = this._options.callbacks.beforeBody.apply(this, arguments);
                        return r.isArray(e) ? e : void 0 !== e ? [e] : []
                    }, getBody: function (e, t) {
                        var i = this, o = i._options.callbacks, a = [];
                        return r.each(e, function (e) {
                            var r = {before: [], lines: [], after: []};
                            n(r.before, o.beforeLabel.call(i, e, t)), n(r.lines, o.label.call(i, e, t)), n(r.after, o.afterLabel.call(i, e, t)), a.push(r)
                        }), a
                    }, getAfterBody: function () {
                        var e = this._options.callbacks.afterBody.apply(this, arguments);
                        return r.isArray(e) ? e : void 0 !== e ? [e] : []
                    }, getFooter: function () {
                        var e = this._options.callbacks, t = e.beforeFooter.apply(this, arguments),
                            i = e.footer.apply(this, arguments), o = e.afterFooter.apply(this, arguments), r = [];
                        return r = n(r = n(r = n(r, t), i), o)
                    }, update: function (t) {
                        var n, i, o, s, l, u, c, d = this, h = d._options, f = d._model, p = d._model = a(h),
                            g = d._active, m = d._data, v = {xAlign: f.xAlign, yAlign: f.yAlign}, y = {x: f.x, y: f.y},
                            b = {width: f.width, height: f.height}, x = {x: f.caretX, y: f.caretY};
                        if (g.length) {
                            p.opacity = 1;
                            var w = [], k = [];
                            x = e.Tooltip.positioners[h.position].call(d, g, d._eventPosition);
                            var C = [];
                            for (n = 0, i = g.length; n < i; ++n) C.push((o = g[n], s = void 0, l = void 0, void 0, void 0, s = o._xScale, l = o._yScale || o._scale, u = o._index, c = o._datasetIndex, {
                                xLabel: s ? s.getLabelForIndex(u, c) : "",
                                yLabel: l ? l.getLabelForIndex(u, c) : "",
                                index: u,
                                datasetIndex: c,
                                x: o._model.x,
                                y: o._model.y
                            }));
                            h.filter && (C = C.filter(function (e) {
                                return h.filter(e, m)
                            })), h.itemSort && (C = C.sort(function (e, t) {
                                return h.itemSort(e, t, m)
                            })), r.each(C, function (e) {
                                w.push(h.callbacks.labelColor.call(d, e, d._chart)), k.push(h.callbacks.labelTextColor.call(d, e, d._chart))
                            }), p.title = d.getTitle(C, m), p.beforeBody = d.getBeforeBody(C, m), p.body = d.getBody(C, m), p.afterBody = d.getAfterBody(C, m), p.footer = d.getFooter(C, m), p.x = Math.round(x.x), p.y = Math.round(x.y), p.caretPadding = h.caretPadding, p.labelColors = w, p.labelTextColors = k, p.dataPoints = C, y = function (e, t, n, i) {
                                var o = e.x, r = e.y, a = e.caretSize, s = e.caretPadding, l = e.cornerRadius,
                                    u = n.xAlign, c = n.yAlign, d = a + s, h = l + s;
                                return "right" === u ? o -= t.width : "center" === u && ((o -= t.width / 2) + t.width > i.width && (o = i.width - t.width), o < 0 && (o = 0)), "top" === c ? r += d : r -= "bottom" === c ? t.height + d : t.height / 2, "center" === c ? "left" === u ? o += d : "right" === u && (o -= d) : "left" === u ? o -= h : "right" === u && (o += h), {
                                    x: o,
                                    y: r
                                }
                            }(p, b = function (e, t) {
                                var n = e._chart.ctx, i = 2 * t.yPadding, o = 0, a = t.body,
                                    s = a.reduce(function (e, t) {
                                        return e + t.before.length + t.lines.length + t.after.length
                                    }, 0);
                                s += t.beforeBody.length + t.afterBody.length;
                                var l = t.title.length, u = t.footer.length, c = t.titleFontSize, d = t.bodyFontSize,
                                    h = t.footerFontSize;
                                i += l * c, i += l ? (l - 1) * t.titleSpacing : 0, i += l ? t.titleMarginBottom : 0, i += s * d, i += s ? (s - 1) * t.bodySpacing : 0, i += u ? t.footerMarginTop : 0, i += u * h, i += u ? (u - 1) * t.footerSpacing : 0;
                                var f = 0, p = function (e) {
                                    o = Math.max(o, n.measureText(e).width + f)
                                };
                                return n.font = r.fontString(c, t._titleFontStyle, t._titleFontFamily), r.each(t.title, p), n.font = r.fontString(d, t._bodyFontStyle, t._bodyFontFamily), r.each(t.beforeBody.concat(t.afterBody), p), f = t.displayColors ? d + 2 : 0, r.each(a, function (e) {
                                    r.each(e.before, p), r.each(e.lines, p), r.each(e.after, p)
                                }), f = 0, n.font = r.fontString(h, t._footerFontStyle, t._footerFontFamily), r.each(t.footer, p), {
                                    width: o += 2 * t.xPadding,
                                    height: i
                                }
                            }(this, p), v = function (e, t) {
                                var n, i, o, r, a, s = e._model, l = e._chart, u = e._chart.chartArea, c = "center",
                                    d = "center";
                                s.y < t.height ? d = "top" : s.y > l.height - t.height && (d = "bottom");
                                var h = (u.left + u.right) / 2, f = (u.top + u.bottom) / 2;
                                "center" === d ? (n = function (e) {
                                    return e <= h
                                }, i = function (e) {
                                    return e > h
                                }) : (n = function (e) {
                                    return e <= t.width / 2
                                }, i = function (e) {
                                    return e >= l.width - t.width / 2
                                }), o = function (e) {
                                    return e + t.width + s.caretSize + s.caretPadding > l.width
                                }, r = function (e) {
                                    return e - t.width - s.caretSize - s.caretPadding < 0
                                }, a = function (e) {
                                    return e <= f ? "top" : "bottom"
                                }, n(s.x) ? (c = "left", o(s.x) && (c = "center", d = a(s.y))) : i(s.x) && (c = "right", r(s.x) && (c = "center", d = a(s.y)));
                                var p = e._options;
                                return {xAlign: p.xAlign ? p.xAlign : c, yAlign: p.yAlign ? p.yAlign : d}
                            }(this, b), d._chart)
                        } else p.opacity = 0;
                        return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = y.x, p.y = y.y, p.width = b.width, p.height = b.height, p.caretX = x.x, p.caretY = x.y, d._model = p, t && h.custom && h.custom.call(d, p), d
                    }, drawCaret: function (e, t) {
                        var n = this._chart.ctx, i = this._view, o = this.getCaretPosition(e, t, i);
                        n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3)
                    }, getCaretPosition: function (e, t, n) {
                        var i, o, r, a, s, l, u = n.caretSize, c = n.cornerRadius, d = n.xAlign, h = n.yAlign, f = e.x,
                            p = e.y, g = t.width, m = t.height;
                        if ("center" === h) s = p + m / 2, "left" === d ? (o = (i = f) - u, r = i, a = s + u, l = s - u) : (o = (i = f + g) + u, r = i, a = s - u, l = s + u); else if ("left" === d ? (i = (o = f + c + u) - u, r = o + u) : "right" === d ? (i = (o = f + g - c - u) - u, r = o + u) : (i = (o = n.caretX) - u, r = o + u), "top" === h) s = (a = p) - u, l = a; else {
                            s = (a = p + m) + u, l = a;
                            var v = r;
                            r = i, i = v
                        }
                        return {x1: i, x2: o, x3: r, y1: a, y2: s, y3: l}
                    }, drawTitle: function (e, n, i, o) {
                        var a = n.title;
                        if (a.length) {
                            i.textAlign = n._titleAlign, i.textBaseline = "top";
                            var s, l, u = n.titleFontSize, c = n.titleSpacing;
                            for (i.fillStyle = t(n.titleFontColor, o), i.font = r.fontString(u, n._titleFontStyle, n._titleFontFamily), s = 0, l = a.length; s < l; ++s) i.fillText(a[s], e.x, e.y), e.y += u + c, s + 1 === a.length && (e.y += n.titleMarginBottom - c)
                        }
                    }, drawBody: function (e, n, i, o) {
                        var a = n.bodyFontSize, s = n.bodySpacing, l = n.body;
                        i.textAlign = n._bodyAlign, i.textBaseline = "top", i.font = r.fontString(a, n._bodyFontStyle, n._bodyFontFamily);
                        var u = 0, c = function (t) {
                            i.fillText(t, e.x + u, e.y), e.y += a + s
                        };
                        i.fillStyle = t(n.bodyFontColor, o), r.each(n.beforeBody, c);
                        var d = n.displayColors;
                        u = d ? a + 2 : 0, r.each(l, function (s, l) {
                            var u = t(n.labelTextColors[l], o);
                            i.fillStyle = u, r.each(s.before, c), r.each(s.lines, function (r) {
                                d && (i.fillStyle = t(n.legendColorBackground, o), i.fillRect(e.x, e.y, a, a), i.lineWidth = 1, i.strokeStyle = t(n.labelColors[l].borderColor, o), i.strokeRect(e.x, e.y, a, a), i.fillStyle = t(n.labelColors[l].backgroundColor, o), i.fillRect(e.x + 1, e.y + 1, a - 2, a - 2), i.fillStyle = u), c(r)
                            }), r.each(s.after, c)
                        }), u = 0, r.each(n.afterBody, c), e.y -= s
                    }, drawFooter: function (e, n, i, o) {
                        var a = n.footer;
                        a.length && (e.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = t(n.footerFontColor, o), i.font = r.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), r.each(a, function (t) {
                            i.fillText(t, e.x, e.y), e.y += n.footerFontSize + n.footerSpacing
                        }))
                    }, drawBackground: function (e, n, i, o, r) {
                        i.fillStyle = t(n.backgroundColor, r), i.strokeStyle = t(n.borderColor, r), i.lineWidth = n.borderWidth;
                        var a = n.xAlign, s = n.yAlign, l = e.x, u = e.y, c = o.width, d = o.height, h = n.cornerRadius;
                        i.beginPath(), i.moveTo(l + h, u), "top" === s && this.drawCaret(e, o), i.lineTo(l + c - h, u), i.quadraticCurveTo(l + c, u, l + c, u + h), "center" === s && "right" === a && this.drawCaret(e, o), i.lineTo(l + c, u + d - h), i.quadraticCurveTo(l + c, u + d, l + c - h, u + d), "bottom" === s && this.drawCaret(e, o), i.lineTo(l + h, u + d), i.quadraticCurveTo(l, u + d, l, u + d - h), "center" === s && "left" === a && this.drawCaret(e, o), i.lineTo(l, u + h), i.quadraticCurveTo(l, u, l + h, u), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke()
                    }, draw: function () {
                        var e = this._chart.ctx, t = this._view;
                        if (0 !== t.opacity) {
                            var n = {width: t.width, height: t.height}, i = {x: t.x, y: t.y},
                                o = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                                r = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                            this._options.enabled && r && (this.drawBackground(i, t, e, n, o), i.x += t.xPadding, i.y += t.yPadding, this.drawTitle(i, t, e, o), this.drawBody(i, t, e, o), this.drawFooter(i, t, e, o))
                        }
                    }, handleEvent: function (e) {
                        var t, n = this, i = n._options;
                        return n._lastActive = n._lastActive || [], "mouseout" === e.type ? n._active = [] : n._active = n._chart.getElementsAtEventForMode(e, i.mode, i), (t = !r.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                            x: e.x,
                            y: e.y
                        }, n.update(!0), n.pivot())), t
                    }
                }), e.Tooltip.positioners = {
                    average: function (e) {
                        if (!e.length) return !1;
                        var t, n, i = 0, o = 0, r = 0;
                        for (t = 0, n = e.length; t < n; ++t) {
                            var a = e[t];
                            if (a && a.hasValue()) {
                                var s = a.tooltipPosition();
                                i += s.x, o += s.y, ++r
                            }
                        }
                        return {x: Math.round(i / r), y: Math.round(o / r)}
                    }, nearest: function (e, t) {
                        var n, i, o, a = t.x, s = t.y, l = Number.POSITIVE_INFINITY;
                        for (n = 0, i = e.length; n < i; ++n) {
                            var u = e[n];
                            if (u && u.hasValue()) {
                                var c = u.getCenterPoint(), d = r.distanceBetweenPoints(t, c);
                                d < l && (l = d, o = u)
                            }
                        }
                        if (o) {
                            var h = o.tooltipPosition();
                            a = h.x, s = h.y
                        }
                        return {x: a, y: s}
                    }
                }
            }
        }, {25: 25, 26: 26, 45: 45}], 36: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(26), r = e(45);
            i._set("global", {
                elements: {
                    arc: {
                        backgroundColor: i.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), t.exports = o.extend({
                inLabelRange: function (e) {
                    var t = this._view;
                    return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
                }, inRange: function (e, t) {
                    var n = this._view;
                    if (n) {
                        for (var i = r.getAngleFromPoint(n, {
                            x: e,
                            y: t
                        }), o = i.angle, a = i.distance, s = n.startAngle, l = n.endAngle; l < s;) l += 2 * Math.PI;
                        for (; o > l;) o -= 2 * Math.PI;
                        for (; o < s;) o += 2 * Math.PI;
                        var u = o >= s && o <= l, c = a >= n.innerRadius && a <= n.outerRadius;
                        return u && c
                    }
                    return !1
                }, getCenterPoint: function () {
                    var e = this._view, t = (e.startAngle + e.endAngle) / 2, n = (e.innerRadius + e.outerRadius) / 2;
                    return {x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n}
                }, getArea: function () {
                    var e = this._view;
                    return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
                }, tooltipPosition: function () {
                    var e = this._view, t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                        n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
                    return {x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n}
                }, draw: function () {
                    var e = this._chart.ctx, t = this._view, n = t.startAngle, i = t.endAngle;
                    e.beginPath(), e.arc(t.x, t.y, t.outerRadius, n, i), e.arc(t.x, t.y, t.innerRadius, i, n, !0), e.closePath(), e.strokeStyle = t.borderColor, e.lineWidth = t.borderWidth, e.fillStyle = t.backgroundColor, e.fill(), e.lineJoin = "bevel", t.borderWidth && e.stroke()
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 37: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(26), r = e(45), a = i.global;
            i._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: a.defaultColor,
                        borderWidth: 3,
                        borderColor: a.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), t.exports = o.extend({
                draw: function () {
                    var e, t, n, i, o = this._view, s = this._chart.ctx, l = o.spanGaps, u = this._children.slice(),
                        c = a.elements.line, d = -1;
                    for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = o.borderCapStyle || c.borderCapStyle, s.setLineDash && s.setLineDash(o.borderDash || c.borderDash), s.lineDashOffset = o.borderDashOffset || c.borderDashOffset, s.lineJoin = o.borderJoinStyle || c.borderJoinStyle, s.lineWidth = o.borderWidth || c.borderWidth, s.strokeStyle = o.borderColor || a.defaultColor, s.beginPath(), d = -1, e = 0; e < u.length; ++e) t = u[e], n = r.previousItem(u, e), i = t._view, 0 === e ? i.skip || (s.moveTo(i.x, i.y), d = e) : (n = -1 === d ? n : u[d], i.skip || (d !== e - 1 && !l || -1 === d ? s.moveTo(i.x, i.y) : r.canvas.lineTo(s, n._view, t._view), d = e));
                    s.stroke(), s.restore()
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 38: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(26), r = e(45), a = i.global.defaultColor;

            function s(e) {
                var t = this._view;
                return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
            }

            i._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: a,
                        borderColor: a,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), t.exports = o.extend({
                inRange: function (e, t) {
                    var n = this._view;
                    return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                }, inLabelRange: s, inXRange: s, inYRange: function (e) {
                    var t = this._view;
                    return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
                }, getCenterPoint: function () {
                    var e = this._view;
                    return {x: e.x, y: e.y}
                }, getArea: function () {
                    return Math.PI * Math.pow(this._view.radius, 2)
                }, tooltipPosition: function () {
                    var e = this._view;
                    return {x: e.x, y: e.y, padding: e.radius + e.borderWidth}
                }, draw: function (e) {
                    var t = this._view, n = this._model, o = this._chart.ctx, s = t.pointStyle, l = t.radius, u = t.x,
                        c = t.y, d = r.color, h = 0;
                    t.skip || (o.strokeStyle = t.borderColor || a, o.lineWidth = r.valueOrDefault(t.borderWidth, i.global.elements.point.borderWidth), o.fillStyle = t.backgroundColor || a, void 0 !== e && (n.x < e.left || 1.01 * e.right < n.x || n.y < e.top || 1.01 * e.bottom < n.y) && (n.x < e.left ? h = (u - n.x) / (e.left - n.x) : 1.01 * e.right < n.x ? h = (n.x - u) / (n.x - e.right) : n.y < e.top ? h = (c - n.y) / (e.top - n.y) : 1.01 * e.bottom < n.y && (h = (n.y - c) / (n.y - e.bottom)), h = Math.round(100 * h) / 100, o.strokeStyle = d(o.strokeStyle).alpha(h).rgbString(), o.fillStyle = d(o.fillStyle).alpha(h).rgbString()), r.canvas.drawPoint(o, s, l, u, c))
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 39: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(26);

            function r(e) {
                return void 0 !== e._view.width
            }

            function a(e) {
                var t, n, i, o, a = e._view;
                if (r(e)) {
                    var s = a.width / 2;
                    t = a.x - s, n = a.x + s, i = Math.min(a.y, a.base), o = Math.max(a.y, a.base)
                } else {
                    var l = a.height / 2;
                    t = Math.min(a.x, a.base), n = Math.max(a.x, a.base), i = a.y - l, o = a.y + l
                }
                return {left: t, top: i, right: n, bottom: o}
            }

            i._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: i.global.defaultColor,
                        borderColor: i.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), t.exports = o.extend({
                draw: function () {
                    var e, t, n, i, o, r, a, s = this._chart.ctx, l = this._view, u = l.borderWidth;
                    if (l.horizontal ? (e = l.base, t = l.x, n = l.y - l.height / 2, i = l.y + l.height / 2, o = t > e ? 1 : -1, r = 1, a = l.borderSkipped || "left") : (e = l.x - l.width / 2, t = l.x + l.width / 2, n = l.y, o = 1, r = (i = l.base) > n ? 1 : -1, a = l.borderSkipped || "bottom"), u) {
                        var c = Math.min(Math.abs(e - t), Math.abs(n - i)), d = (u = u > c ? c : u) / 2,
                            h = e + ("left" !== a ? d * o : 0), f = t + ("right" !== a ? -d * o : 0),
                            p = n + ("top" !== a ? d * r : 0), g = i + ("bottom" !== a ? -d * r : 0);
                        h !== f && (n = p, i = g), p !== g && (e = h, t = f)
                    }
                    s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
                    var m = [[e, i], [e, n], [t, n], [t, i]], v = ["bottom", "left", "top", "right"].indexOf(a, 0);

                    function y(e) {
                        return m[(v + e) % 4]
                    }

                    -1 === v && (v = 0);
                    var b = y(0);
                    s.moveTo(b[0], b[1]);
                    for (var x = 1; x < 4; x++) b = y(x), s.lineTo(b[0], b[1]);
                    s.fill(), u && s.stroke()
                }, height: function () {
                    var e = this._view;
                    return e.base - e.y
                }, inRange: function (e, t) {
                    var n = !1;
                    if (this._view) {
                        var i = a(this);
                        n = e >= i.left && e <= i.right && t >= i.top && t <= i.bottom
                    }
                    return n
                }, inLabelRange: function (e, t) {
                    if (!this._view) return !1;
                    var n = a(this);
                    return r(this) ? e >= n.left && e <= n.right : t >= n.top && t <= n.bottom
                }, inXRange: function (e) {
                    var t = a(this);
                    return e >= t.left && e <= t.right
                }, inYRange: function (e) {
                    var t = a(this);
                    return e >= t.top && e <= t.bottom
                }, getCenterPoint: function () {
                    var e, t, n = this._view;
                    return r(this) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), {x: e, y: t}
                }, getArea: function () {
                    var e = this._view;
                    return e.width * Math.abs(e.y - e.base)
                }, tooltipPosition: function () {
                    var e = this._view;
                    return {x: e.x, y: e.y}
                }
            })
        }, {25: 25, 26: 26}], 40: [function (e, t, n) {
            "use strict";
            t.exports = {}, t.exports.Arc = e(36), t.exports.Line = e(37), t.exports.Point = e(38), t.exports.Rectangle = e(39)
        }, {36: 36, 37: 37, 38: 38, 39: 39}], 41: [function (e, t, n) {
            "use strict";
            var i = e(42);
            n = t.exports = {
                clear: function (e) {
                    e.ctx.clearRect(0, 0, e.width, e.height)
                }, roundedRect: function (e, t, n, i, o, r) {
                    if (r) {
                        var a = Math.min(r, i / 2), s = Math.min(r, o / 2);
                        e.moveTo(t + a, n), e.lineTo(t + i - a, n), e.quadraticCurveTo(t + i, n, t + i, n + s), e.lineTo(t + i, n + o - s), e.quadraticCurveTo(t + i, n + o, t + i - a, n + o), e.lineTo(t + a, n + o), e.quadraticCurveTo(t, n + o, t, n + o - s), e.lineTo(t, n + s), e.quadraticCurveTo(t, n, t + a, n)
                    } else e.rect(t, n, i, o)
                }, drawPoint: function (e, t, n, i, o) {
                    var r, a, s, l, u, c;
                    if (!t || "object" != typeof t || "[object HTMLImageElement]" !== (r = t.toString()) && "[object HTMLCanvasElement]" !== r) {
                        if (!(isNaN(n) || n <= 0)) {
                            switch (t) {
                                default:
                                    e.beginPath(), e.arc(i, o, n, 0, 2 * Math.PI), e.closePath(), e.fill();
                                    break;
                                case"triangle":
                                    e.beginPath(), u = (a = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2, e.moveTo(i - a / 2, o + u / 3), e.lineTo(i + a / 2, o + u / 3), e.lineTo(i, o - 2 * u / 3), e.closePath(), e.fill();
                                    break;
                                case"rect":
                                    c = 1 / Math.SQRT2 * n, e.beginPath(), e.fillRect(i - c, o - c, 2 * c, 2 * c), e.strokeRect(i - c, o - c, 2 * c, 2 * c);
                                    break;
                                case"rectRounded":
                                    var d = n / Math.SQRT2, h = i - d, f = o - d, p = Math.SQRT2 * n;
                                    e.beginPath(), this.roundedRect(e, h, f, p, p, n / 2), e.closePath(), e.fill();
                                    break;
                                case"rectRot":
                                    c = 1 / Math.SQRT2 * n, e.beginPath(), e.moveTo(i - c, o), e.lineTo(i, o + c), e.lineTo(i + c, o), e.lineTo(i, o - c), e.closePath(), e.fill();
                                    break;
                                case"cross":
                                    e.beginPath(), e.moveTo(i, o + n), e.lineTo(i, o - n), e.moveTo(i - n, o), e.lineTo(i + n, o), e.closePath();
                                    break;
                                case"crossRot":
                                    e.beginPath(), s = Math.cos(Math.PI / 4) * n, l = Math.sin(Math.PI / 4) * n, e.moveTo(i - s, o - l), e.lineTo(i + s, o + l), e.moveTo(i - s, o + l), e.lineTo(i + s, o - l), e.closePath();
                                    break;
                                case"star":
                                    e.beginPath(), e.moveTo(i, o + n), e.lineTo(i, o - n), e.moveTo(i - n, o), e.lineTo(i + n, o), s = Math.cos(Math.PI / 4) * n, l = Math.sin(Math.PI / 4) * n, e.moveTo(i - s, o - l), e.lineTo(i + s, o + l), e.moveTo(i - s, o + l), e.lineTo(i + s, o - l), e.closePath();
                                    break;
                                case"line":
                                    e.beginPath(), e.moveTo(i - n, o), e.lineTo(i + n, o), e.closePath();
                                    break;
                                case"dash":
                                    e.beginPath(), e.moveTo(i, o), e.lineTo(i + n, o), e.closePath()
                            }
                            e.stroke()
                        }
                    } else e.drawImage(t, i - t.width / 2, o - t.height / 2, t.width, t.height)
                }, clipArea: function (e, t) {
                    e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
                }, unclipArea: function (e) {
                    e.restore()
                }, lineTo: function (e, t, n, i) {
                    if (n.steppedLine) return "after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y), void e.lineTo(n.x, n.y);
                    n.tension ? e.bezierCurveTo(i ? t.controlPointPreviousX : t.controlPointNextX, i ? t.controlPointPreviousY : t.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y)
                }
            };
            i.clear = n.clear, i.drawRoundedRectangle = function (e) {
                e.beginPath(), n.roundedRect.apply(n, arguments), e.closePath()
            }
        }, {42: 42}], 42: [function (e, t, n) {
            "use strict";
            var i, o = {
                noop: function () {
                }, uid: (i = 0, function () {
                    return i++
                }), isNullOrUndef: function (e) {
                    return null === e || void 0 === e
                }, isArray: Array.isArray ? Array.isArray : function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }, isObject: function (e) {
                    return null !== e && "[object Object]" === Object.prototype.toString.call(e)
                }, valueOrDefault: function (e, t) {
                    return void 0 === e ? t : e
                }, valueAtIndexOrDefault: function (e, t, n) {
                    return o.valueOrDefault(o.isArray(e) ? e[t] : e, n)
                }, callback: function (e, t, n) {
                    if (e && "function" == typeof e.call) return e.apply(n, t)
                }, each: function (e, t, n, i) {
                    var r, a, s;
                    if (o.isArray(e)) if (a = e.length, i) for (r = a - 1; r >= 0; r--) t.call(n, e[r], r); else for (r = 0; r < a; r++) t.call(n, e[r], r); else if (o.isObject(e)) for (a = (s = Object.keys(e)).length, r = 0; r < a; r++) t.call(n, e[s[r]], s[r])
                }, arrayEquals: function (e, t) {
                    var n, i, r, a;
                    if (!e || !t || e.length !== t.length) return !1;
                    for (n = 0, i = e.length; n < i; ++n) if (r = e[n], a = t[n], r instanceof Array && a instanceof Array) {
                        if (!o.arrayEquals(r, a)) return !1
                    } else if (r !== a) return !1;
                    return !0
                }, clone: function (e) {
                    if (o.isArray(e)) return e.map(o.clone);
                    if (o.isObject(e)) {
                        for (var t = {}, n = Object.keys(e), i = n.length, r = 0; r < i; ++r) t[n[r]] = o.clone(e[n[r]]);
                        return t
                    }
                    return e
                }, _merger: function (e, t, n, i) {
                    var r = t[e], a = n[e];
                    o.isObject(r) && o.isObject(a) ? o.merge(r, a, i) : t[e] = o.clone(a)
                }, _mergerIf: function (e, t, n) {
                    var i = t[e], r = n[e];
                    o.isObject(i) && o.isObject(r) ? o.mergeIf(i, r) : t.hasOwnProperty(e) || (t[e] = o.clone(r))
                }, merge: function (e, t, n) {
                    var i, r, a, s, l, u = o.isArray(t) ? t : [t], c = u.length;
                    if (!o.isObject(e)) return e;
                    for (i = (n = n || {}).merger || o._merger, r = 0; r < c; ++r) if (t = u[r], o.isObject(t)) for (l = 0, s = (a = Object.keys(t)).length; l < s; ++l) i(a[l], e, t, n);
                    return e
                }, mergeIf: function (e, t) {
                    return o.merge(e, t, {merger: o._mergerIf})
                }, extend: function (e) {
                    for (var t = function (t, n) {
                        e[n] = t
                    }, n = 1, i = arguments.length; n < i; ++n) o.each(arguments[n], t);
                    return e
                }, inherits: function (e) {
                    var t = this, n = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
                        return t.apply(this, arguments)
                    }, i = function () {
                        this.constructor = n
                    };
                    return i.prototype = t.prototype, n.prototype = new i, n.extend = o.inherits, e && o.extend(n.prototype, e), n.__super__ = t.prototype, n
                }
            };
            t.exports = o, o.callCallback = o.callback, o.indexOf = function (e, t, n) {
                return Array.prototype.indexOf.call(e, t, n)
            }, o.getValueOrDefault = o.valueOrDefault, o.getValueAtIndexOrDefault = o.valueAtIndexOrDefault
        }, {}], 43: [function (e, t, n) {
            "use strict";
            var i = e(42), o = {
                linear: function (e) {
                    return e
                }, easeInQuad: function (e) {
                    return e * e
                }, easeOutQuad: function (e) {
                    return -e * (e - 2)
                }, easeInOutQuad: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                }, easeInCubic: function (e) {
                    return e * e * e
                }, easeOutCubic: function (e) {
                    return (e -= 1) * e * e + 1
                }, easeInOutCubic: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                }, easeInQuart: function (e) {
                    return e * e * e * e
                }, easeOutQuart: function (e) {
                    return -((e -= 1) * e * e * e - 1)
                }, easeInOutQuart: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                }, easeInQuint: function (e) {
                    return e * e * e * e * e
                }, easeOutQuint: function (e) {
                    return (e -= 1) * e * e * e * e + 1
                }, easeInOutQuint: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                }, easeInSine: function (e) {
                    return 1 - Math.cos(e * (Math.PI / 2))
                }, easeOutSine: function (e) {
                    return Math.sin(e * (Math.PI / 2))
                }, easeInOutSine: function (e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                }, easeInExpo: function (e) {
                    return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                }, easeOutExpo: function (e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                }, easeInOutExpo: function (e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
                }, easeInCirc: function (e) {
                    return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
                }, easeOutCirc: function (e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }, easeInOutCirc: function (e) {
                    return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                }, easeInElastic: function (e) {
                    var t = 1.70158, n = 0, i = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n))
                }, easeOutElastic: function (e) {
                    var t = 1.70158, n = 0, i = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
                }, easeInOutElastic: function (e) {
                    var t = 1.70158, n = 0, i = 1;
                    return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), e < 1 ? i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
                }, easeInBack: function (e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t)
                }, easeOutBack: function (e) {
                    var t = 1.70158;
                    return (e -= 1) * e * ((t + 1) * e + t) + 1
                }, easeInOutBack: function (e) {
                    var t = 1.70158;
                    return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
                }, easeInBounce: function (e) {
                    return 1 - o.easeOutBounce(1 - e)
                }, easeOutBounce: function (e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }, easeInOutBounce: function (e) {
                    return e < .5 ? .5 * o.easeInBounce(2 * e) : .5 * o.easeOutBounce(2 * e - 1) + .5
                }
            };
            t.exports = {effects: o}, i.easingEffects = o
        }, {42: 42}], 44: [function (e, t, n) {
            "use strict";
            var i = e(42);
            t.exports = {
                toLineHeight: function (e, t) {
                    var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!n || "normal" === n[1]) return 1.2 * t;
                    switch (e = +n[2], n[3]) {
                        case"px":
                            return e;
                        case"%":
                            e /= 100
                    }
                    return t * e
                }, toPadding: function (e) {
                    var t, n, o, r;
                    return i.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, o = +e.bottom || 0, r = +e.left || 0) : t = n = o = r = +e || 0, {
                        top: t,
                        right: n,
                        bottom: o,
                        left: r,
                        height: t + o,
                        width: r + n
                    }
                }, resolve: function (e, t, n) {
                    var o, r, a;
                    for (o = 0, r = e.length; o < r; ++o) if (void 0 !== (a = e[o]) && (void 0 !== t && "function" == typeof a && (a = a(t)), void 0 !== n && i.isArray(a) && (a = a[n]), void 0 !== a)) return a
                }
            }
        }, {42: 42}], 45: [function (e, t, n) {
            "use strict";
            t.exports = e(42), t.exports.easing = e(43), t.exports.canvas = e(41), t.exports.options = e(44)
        }, {41: 41, 42: 42, 43: 43, 44: 44}], 46: [function (e, t, n) {
            t.exports = {
                acquireContext: function (e) {
                    return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
                }
            }
        }, {}], 47: [function (e, t, n) {
            "use strict";
            var i = e(45), o = "$chartjs", r = "chartjs-", a = r + "render-monitor", s = r + "render-animation",
                l = ["animationstart", "webkitAnimationStart"], u = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };

            function c(e, t) {
                var n = i.getStyle(e, t), o = n && n.match(/^(\d+)(\.\d+)?px$/);
                return o ? Number(o[1]) : void 0
            }

            var d = !!function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("e", null, t)
                } catch (e) {
                }
                return e
            }() && {passive: !0};

            function h(e, t, n) {
                e.addEventListener(t, n, d)
            }

            function f(e, t, n) {
                e.removeEventListener(t, n, d)
            }

            function p(e, t, n, i, o) {
                return {type: e, chart: t, native: o || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null}
            }

            function g(e, t, n) {
                var u, c, d, f, g = e[o] || (e[o] = {}), m = g.resizer = function (e) {
                    var t = document.createElement("div"), n = r + "size-monitor",
                        i = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                    t.style.cssText = i, t.className = n, t.innerHTML = '<div class="' + n + '-expand" style="' + i + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + i + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                    var o = t.childNodes[0], a = t.childNodes[1];
                    t._reset = function () {
                        o.scrollLeft = 1e6, o.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6
                    };
                    var s = function () {
                        t._reset(), e()
                    };
                    return h(o, "scroll", s.bind(o, "expand")), h(a, "scroll", s.bind(a, "shrink")), t
                }((u = function () {
                    if (g.resizer) return t(p("resize", n))
                }, d = !1, f = [], function () {
                    f = Array.prototype.slice.call(arguments), c = c || this, d || (d = !0, i.requestAnimFrame.call(window, function () {
                        d = !1, u.apply(c, f)
                    }))
                }));
                !function (e, t) {
                    var n = e[o] || (e[o] = {}), r = n.renderProxy = function (e) {
                        e.animationName === s && t()
                    };
                    i.each(l, function (t) {
                        h(e, t, r)
                    }), n.reflow = !!e.offsetParent, e.classList.add(a)
                }(e, function () {
                    if (g.resizer) {
                        var t = e.parentNode;
                        t && t !== m.parentNode && t.insertBefore(m, t.firstChild), m._reset()
                    }
                })
            }

            function m(e) {
                var t = e[o] || {}, n = t.resizer;
                delete t.resizer, function (e) {
                    var t = e[o] || {}, n = t.renderProxy;
                    n && (i.each(l, function (t) {
                        f(e, t, n)
                    }), delete t.renderProxy), e.classList.remove(a)
                }(e), n && n.parentNode && n.parentNode.removeChild(n)
            }

            t.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document, initialize: function () {
                    var e, t, n, i = "from{opacity:0.99}to{opacity:1}";
                    t = "@-webkit-keyframes " + s + "{" + i + "}@keyframes " + s + "{" + i + "}." + a + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", n = (e = this)._style || document.createElement("style"), e._style || (e._style = n, t = "/* Chart.js */\n" + t, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(t))
                }, acquireContext: function (e, t) {
                    "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
                    var n = e && e.getContext && e.getContext("2d");
                    return n && n.canvas === e ? (function (e, t) {
                        var n = e.style, i = e.getAttribute("height"), r = e.getAttribute("width");
                        if (e[o] = {
                                initial: {
                                    height: i,
                                    width: r,
                                    style: {display: n.display, height: n.height, width: n.width}
                                }
                            }, n.display = n.display || "block", null === r || "" === r) {
                            var a = c(e, "width");
                            void 0 !== a && (e.width = a)
                        }
                        if (null === i || "" === i) if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2); else {
                            var s = c(e, "height");
                            void 0 !== a && (e.height = s)
                        }
                    }(e, t), n) : null
                }, releaseContext: function (e) {
                    var t = e.canvas;
                    if (t[o]) {
                        var n = t[o].initial;
                        ["height", "width"].forEach(function (e) {
                            var o = n[e];
                            i.isNullOrUndef(o) ? t.removeAttribute(e) : t.setAttribute(e, o)
                        }), i.each(n.style || {}, function (e, n) {
                            t.style[n] = e
                        }), t.width = t.width, delete t[o]
                    }
                }, addEventListener: function (e, t, n) {
                    var r = e.canvas;
                    if ("resize" !== t) {
                        var a = n[o] || (n[o] = {});
                        h(r, t, (a.proxies || (a.proxies = {}))[e.id + "_" + t] = function (t) {
                            n(function (e, t) {
                                var n = u[e.type] || e.type, o = i.getRelativePosition(e, t);
                                return p(n, t, o.x, o.y, e)
                            }(t, e))
                        })
                    } else g(r, n, e)
                }, removeEventListener: function (e, t, n) {
                    var i = e.canvas;
                    if ("resize" !== t) {
                        var r = ((n[o] || {}).proxies || {})[e.id + "_" + t];
                        r && f(i, t, r)
                    } else m(i)
                }
            }, i.addEvent = h, i.removeEvent = f
        }, {45: 45}], 48: [function (e, t, n) {
            "use strict";
            var i = e(45), o = e(46), r = e(47), a = r._enabled ? r : o;
            t.exports = i.extend({
                initialize: function () {
                }, acquireContext: function () {
                }, releaseContext: function () {
                }, addEventListener: function () {
                }, removeEventListener: function () {
                }
            }, a)
        }, {45: 45, 46: 46, 47: 47}], 49: [function (e, t, n) {
            "use strict";
            t.exports = {}, t.exports.filler = e(50), t.exports.legend = e(51), t.exports.title = e(52)
        }, {50: 50, 51: 51, 52: 52}], 50: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(40), r = e(45);
            i._set("global", {plugins: {filler: {propagate: !0}}});
            var a = {
                dataset: function (e) {
                    var t = e.fill, n = e.chart, i = n.getDatasetMeta(t),
                        o = i && n.isDatasetVisible(t) && i.dataset._children || [], r = o.length || 0;
                    return r ? function (e, t) {
                        return t < r && o[t]._view || null
                    } : null
                }, boundary: function (e) {
                    var t = e.boundary, n = t ? t.x : null, i = t ? t.y : null;
                    return function (e) {
                        return {x: null === n ? e.x : n, y: null === i ? e.y : i}
                    }
                }
            };

            function s(e, t, n) {
                var i, o = e._model || {}, r = o.fill;
                if (void 0 === r && (r = !!o.backgroundColor), !1 === r || null === r) return !1;
                if (!0 === r) return "origin";
                if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = t + i), !(i === t || i < 0 || i >= n) && i;
                switch (r) {
                    case"bottom":
                        return "start";
                    case"top":
                        return "end";
                    case"zero":
                        return "origin";
                    case"origin":
                    case"start":
                    case"end":
                        return r;
                    default:
                        return !1
                }
            }

            function l(e) {
                var t, n = e.el._model || {}, i = e.el._scale || {}, o = e.fill, r = null;
                if (isFinite(o)) return null;
                if ("start" === o ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === o ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePosition ? r = i.getBasePosition() : i.getBasePixel && (r = i.getBasePixel()), void 0 !== r && null !== r) {
                    if (void 0 !== r.x && void 0 !== r.y) return r;
                    if ("number" == typeof r && isFinite(r)) return {
                        x: (t = i.isHorizontal()) ? r : null,
                        y: t ? null : r
                    }
                }
                return null
            }

            function u(e, t, n) {
                var i, o = e[t].fill, r = [t];
                if (!n) return o;
                for (; !1 !== o && -1 === r.indexOf(o);) {
                    if (!isFinite(o)) return o;
                    if (!(i = e[o])) return !1;
                    if (i.visible) return o;
                    r.push(o), o = i.fill
                }
                return !1
            }

            function c(e) {
                var t = e.fill, n = "dataset";
                return !1 === t ? null : (isFinite(t) || (n = "boundary"), a[n](e))
            }

            function d(e) {
                return e && !e.skip
            }

            function h(e, t, n, i, o) {
                var a;
                if (i && o) {
                    for (e.moveTo(t[0].x, t[0].y), a = 1; a < i; ++a) r.canvas.lineTo(e, t[a - 1], t[a]);
                    for (e.lineTo(n[o - 1].x, n[o - 1].y), a = o - 1; a > 0; --a) r.canvas.lineTo(e, n[a], n[a - 1], !0)
                }
            }

            t.exports = {
                id: "filler", afterDatasetsUpdate: function (e, t) {
                    var n, i, r, a, d = (e.data.datasets || []).length, h = t.propagate, f = [];
                    for (i = 0; i < d; ++i) a = null, (r = (n = e.getDatasetMeta(i)).dataset) && r._model && r instanceof o.Line && (a = {
                        visible: e.isDatasetVisible(i),
                        fill: s(r, i, d),
                        chart: e,
                        el: r
                    }), n.$filler = a, f.push(a);
                    for (i = 0; i < d; ++i) (a = f[i]) && (a.fill = u(f, i, h), a.boundary = l(a), a.mapper = c(a))
                }, beforeDatasetDraw: function (e, t) {
                    var n = t.meta.$filler;
                    if (n) {
                        var o = e.ctx, a = n.el, s = a._view, l = a._children || [], u = n.mapper,
                            c = s.backgroundColor || i.global.defaultColor;
                        u && c && l.length && (r.canvas.clipArea(o, e.chartArea), function (e, t, n, i, o, r) {
                            var a, s, l, u, c, f, p, g = t.length, m = i.spanGaps, v = [], y = [], b = 0, x = 0;
                            for (e.beginPath(), a = 0, s = g + !!r; a < s; ++a) c = n(u = t[l = a % g]._view, l, i), f = d(u), p = d(c), f && p ? (b = v.push(u), x = y.push(c)) : b && x && (m ? (f && v.push(u), p && y.push(c)) : (h(e, v, y, b, x), b = x = 0, v = [], y = []));
                            h(e, v, y, b, x), e.closePath(), e.fillStyle = o, e.fill()
                        }(o, l, u, s, c, a._loop), r.canvas.unclipArea(o))
                    }
                }
            }
        }, {25: 25, 40: 40, 45: 45}], 51: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(26), r = e(45), a = e(30), s = r.noop;

            function l(e, t) {
                return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
            }

            i._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function (e, t) {
                        var n = t.datasetIndex, i = this.chart, o = i.getDatasetMeta(n);
                        o.hidden = null === o.hidden ? !i.data.datasets[n].hidden : null, i.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40, padding: 10, generateLabels: function (e) {
                            var t = e.data;
                            return r.isArray(t.datasets) ? t.datasets.map(function (t, n) {
                                return {
                                    text: t.label,
                                    fillStyle: r.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                    hidden: !e.isDatasetVisible(n),
                                    lineCap: t.borderCapStyle,
                                    lineDash: t.borderDash,
                                    lineDashOffset: t.borderDashOffset,
                                    lineJoin: t.borderJoinStyle,
                                    lineWidth: t.borderWidth,
                                    strokeStyle: t.borderColor,
                                    pointStyle: t.pointStyle,
                                    datasetIndex: n
                                }
                            }, this) : []
                        }
                    }
                }, legendCallback: function (e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    for (var n = 0; n < e.data.datasets.length; n++) t.push('<li><span style="background-color:' + e.data.datasets[n].backgroundColor + '"></span>'), e.data.datasets[n].label && t.push(e.data.datasets[n].label), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                }
            });
            var u = o.extend({
                initialize: function (e) {
                    r.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
                }, beforeUpdate: s, update: function (e, t, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                }, afterUpdate: s, beforeSetDimensions: s, setDimensions: function () {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                }, afterSetDimensions: s, beforeBuildLabels: s, buildLabels: function () {
                    var e = this, t = e.options.labels || {}, n = r.callback(t.generateLabels, [e.chart], e) || [];
                    t.filter && (n = n.filter(function (n) {
                        return t.filter(n, e.chart.data)
                    })), e.options.reverse && n.reverse(), e.legendItems = n
                }, afterBuildLabels: s, beforeFit: s, fit: function () {
                    var e = this, t = e.options, n = t.labels, o = t.display, a = e.ctx, s = i.global,
                        u = r.valueOrDefault, c = u(n.fontSize, s.defaultFontSize),
                        d = u(n.fontStyle, s.defaultFontStyle), h = u(n.fontFamily, s.defaultFontFamily),
                        f = r.fontString(c, d, h), p = e.legendHitBoxes = [], g = e.minSize, m = e.isHorizontal();
                    if (m ? (g.width = e.maxWidth, g.height = o ? 10 : 0) : (g.width = o ? 10 : 0, g.height = e.maxHeight), o) if (a.font = f, m) {
                        var v = e.lineWidths = [0], y = e.legendItems.length ? c + n.padding : 0;
                        a.textAlign = "left", a.textBaseline = "top", r.each(e.legendItems, function (t, i) {
                            var o = l(n, c) + c / 2 + a.measureText(t.text).width;
                            v[v.length - 1] + o + n.padding >= e.width && (y += c + n.padding, v[v.length] = e.left), p[i] = {
                                left: 0,
                                top: 0,
                                width: o,
                                height: c
                            }, v[v.length - 1] += o + n.padding
                        }), g.height += y
                    } else {
                        var b = n.padding, x = e.columnWidths = [], w = n.padding, k = 0, C = 0, _ = c + b;
                        r.each(e.legendItems, function (e, t) {
                            var i = l(n, c) + c / 2 + a.measureText(e.text).width;
                            C + _ > g.height && (w += k + n.padding, x.push(k), k = 0, C = 0), k = Math.max(k, i), C += _, p[t] = {
                                left: 0,
                                top: 0,
                                width: i,
                                height: c
                            }
                        }), w += k, x.push(k), g.width += w
                    }
                    e.width = g.width, e.height = g.height
                }, afterFit: s, isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                }, draw: function () {
                    var e = this, t = e.options, n = t.labels, o = i.global, a = o.elements.line, s = e.width,
                        u = e.lineWidths;
                    if (t.display) {
                        var c, d = e.ctx, h = r.valueOrDefault, f = h(n.fontColor, o.defaultFontColor),
                            p = h(n.fontSize, o.defaultFontSize), g = h(n.fontStyle, o.defaultFontStyle),
                            m = h(n.fontFamily, o.defaultFontFamily), v = r.fontString(p, g, m);
                        d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = f, d.fillStyle = f, d.font = v;
                        var y = l(n, p), b = e.legendHitBoxes, x = e.isHorizontal();
                        c = x ? {x: e.left + (s - u[0]) / 2, y: e.top + n.padding, line: 0} : {
                            x: e.left + n.padding,
                            y: e.top + n.padding,
                            line: 0
                        };
                        var w = p + n.padding;
                        r.each(e.legendItems, function (i, l) {
                            var f = d.measureText(i.text).width, g = y + p / 2 + f, m = c.x, v = c.y;
                            x ? m + g >= s && (v = c.y += w, c.line++, m = c.x = e.left + (s - u[c.line]) / 2) : v + w > e.bottom && (m = c.x = m + e.columnWidths[c.line] + n.padding, v = c.y = e.top + n.padding, c.line++), function (e, n, i) {
                                if (!(isNaN(y) || y <= 0)) {
                                    d.save(), d.fillStyle = h(i.fillStyle, o.defaultColor), d.lineCap = h(i.lineCap, a.borderCapStyle), d.lineDashOffset = h(i.lineDashOffset, a.borderDashOffset), d.lineJoin = h(i.lineJoin, a.borderJoinStyle), d.lineWidth = h(i.lineWidth, a.borderWidth), d.strokeStyle = h(i.strokeStyle, o.defaultColor);
                                    var s = 0 === h(i.lineWidth, a.borderWidth);
                                    if (d.setLineDash && d.setLineDash(h(i.lineDash, a.borderDash)), t.labels && t.labels.usePointStyle) {
                                        var l = p * Math.SQRT2 / 2, u = l / Math.SQRT2, c = e + u, f = n + u;
                                        r.canvas.drawPoint(d, i.pointStyle, l, c, f)
                                    } else s || d.strokeRect(e, n, y, p), d.fillRect(e, n, y, p);
                                    d.restore()
                                }
                            }(m, v, i), b[l].left = m, b[l].top = v, function (e, t, n, i) {
                                var o = p / 2, r = y + o + e, a = t + o;
                                d.fillText(n.text, r, a), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(r, a), d.lineTo(r + i, a), d.stroke())
                            }(m, v, i, f), x ? c.x += g + n.padding : c.y += w
                        })
                    }
                }, handleEvent: function (e) {
                    var t = this, n = t.options, i = "mouseup" === e.type ? "click" : e.type, o = !1;
                    if ("mousemove" === i) {
                        if (!n.onHover) return
                    } else {
                        if ("click" !== i) return;
                        if (!n.onClick) return
                    }
                    var r = e.x, a = e.y;
                    if (r >= t.left && r <= t.right && a >= t.top && a <= t.bottom) for (var s = t.legendHitBoxes, l = 0; l < s.length; ++l) {
                        var u = s[l];
                        if (r >= u.left && r <= u.left + u.width && a >= u.top && a <= u.top + u.height) {
                            if ("click" === i) {
                                n.onClick.call(t, e.native, t.legendItems[l]), o = !0;
                                break
                            }
                            if ("mousemove" === i) {
                                n.onHover.call(t, e.native, t.legendItems[l]), o = !0;
                                break
                            }
                        }
                    }
                    return o
                }
            });

            function c(e, t) {
                var n = new u({ctx: e.ctx, options: t, chart: e});
                a.configure(e, n, t), a.addBox(e, n), e.legend = n
            }

            t.exports = {
                id: "legend", _element: u, beforeInit: function (e) {
                    var t = e.options.legend;
                    t && c(e, t)
                }, beforeUpdate: function (e) {
                    var t = e.options.legend, n = e.legend;
                    t ? (r.mergeIf(t, i.global.legend), n ? (a.configure(e, n, t), n.options = t) : c(e, t)) : n && (a.removeBox(e, n), delete e.legend)
                }, afterEvent: function (e, t) {
                    var n = e.legend;
                    n && n.handleEvent(t)
                }
            }
        }, {25: 25, 26: 26, 30: 30, 45: 45}], 52: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(26), r = e(45), a = e(30), s = r.noop;
            i._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var l = o.extend({
                initialize: function (e) {
                    r.extend(this, e), this.legendHitBoxes = []
                },
                beforeUpdate: s,
                update: function (e, t, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: s,
                beforeSetDimensions: s,
                setDimensions: function () {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: s,
                beforeBuildLabels: s,
                buildLabels: s,
                afterBuildLabels: s,
                beforeFit: s,
                fit: function () {
                    var e = this, t = r.valueOrDefault, n = e.options, o = n.display,
                        a = t(n.fontSize, i.global.defaultFontSize), s = e.minSize,
                        l = r.isArray(n.text) ? n.text.length : 1, u = r.options.toLineHeight(n.lineHeight, a),
                        c = o ? l * u + 2 * n.padding : 0;
                    e.isHorizontal() ? (s.width = e.maxWidth, s.height = c) : (s.width = c, s.height = e.maxHeight), e.width = s.width, e.height = s.height
                },
                afterFit: s,
                isHorizontal: function () {
                    var e = this.options.position;
                    return "top" === e || "bottom" === e
                },
                draw: function () {
                    var e = this, t = e.ctx, n = r.valueOrDefault, o = e.options, a = i.global;
                    if (o.display) {
                        var s, l, u, c = n(o.fontSize, a.defaultFontSize), d = n(o.fontStyle, a.defaultFontStyle),
                            h = n(o.fontFamily, a.defaultFontFamily), f = r.fontString(c, d, h),
                            p = r.options.toLineHeight(o.lineHeight, c), g = p / 2 + o.padding, m = 0, v = e.top,
                            y = e.left, b = e.bottom, x = e.right;
                        t.fillStyle = n(o.fontColor, a.defaultFontColor), t.font = f, e.isHorizontal() ? (l = y + (x - y) / 2, u = v + g, s = x - y) : (l = "left" === o.position ? y + g : x - g, u = v + (b - v) / 2, s = b - v, m = Math.PI * ("left" === o.position ? -.5 : .5)), t.save(), t.translate(l, u), t.rotate(m), t.textAlign = "center", t.textBaseline = "middle";
                        var w = o.text;
                        if (r.isArray(w)) for (var k = 0, C = 0; C < w.length; ++C) t.fillText(w[C], 0, k, s), k += p; else t.fillText(w, 0, 0, s);
                        t.restore()
                    }
                }
            });

            function u(e, t) {
                var n = new l({ctx: e.ctx, options: t, chart: e});
                a.configure(e, n, t), a.addBox(e, n), e.titleBlock = n
            }

            t.exports = {
                id: "title", _element: l, beforeInit: function (e) {
                    var t = e.options.title;
                    t && u(e, t)
                }, beforeUpdate: function (e) {
                    var t = e.options.title, n = e.titleBlock;
                    t ? (r.mergeIf(t, i.global.title), n ? (a.configure(e, n, t), n.options = t) : u(e, t)) : n && (a.removeBox(e, n), delete e.titleBlock)
                }
            }
        }, {25: 25, 26: 26, 30: 30, 45: 45}], 53: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                var t = e.Scale.extend({
                    getLabels: function () {
                        var e = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
                    }, determineDataLimits: function () {
                        var e, t = this, n = t.getLabels();
                        t.minIndex = 0, t.maxIndex = n.length - 1, void 0 !== t.options.ticks.min && (e = n.indexOf(t.options.ticks.min), t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = n.indexOf(t.options.ticks.max), t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex]
                    }, buildTicks: function () {
                        var e = this, t = e.getLabels();
                        e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
                    }, getLabelForIndex: function (e, t) {
                        var n = this, i = n.chart.data, o = n.isHorizontal();
                        return i.yLabels && !o ? n.getRightValue(i.datasets[t].data[e]) : n.ticks[e - n.minIndex]
                    }, getPixelForValue: function (e, t) {
                        var n, i = this, o = i.options.offset,
                            r = Math.max(i.maxIndex + 1 - i.minIndex - (o ? 0 : 1), 1);
                        if (void 0 !== e && null !== e && (n = i.isHorizontal() ? e.x : e.y), void 0 !== n || void 0 !== e && isNaN(t)) {
                            var a = i.getLabels();
                            e = n || e;
                            var s = a.indexOf(e);
                            t = -1 !== s ? s : t
                        }
                        if (i.isHorizontal()) {
                            var l = i.width / r, u = l * (t - i.minIndex);
                            return o && (u += l / 2), i.left + Math.round(u)
                        }
                        var c = i.height / r, d = c * (t - i.minIndex);
                        return o && (d += c / 2), i.top + Math.round(d)
                    }, getPixelForTick: function (e) {
                        return this.getPixelForValue(this.ticks[e], e + this.minIndex, null)
                    }, getValueForPixel: function (e) {
                        var t = this, n = t.options.offset, i = Math.max(t._ticks.length - (n ? 0 : 1), 1),
                            o = t.isHorizontal(), r = (o ? t.width : t.height) / i;
                        return e -= o ? t.left : t.top, n && (e -= r / 2), (e <= 0 ? 0 : Math.round(e / r)) + t.minIndex
                    }, getBasePixel: function () {
                        return this.bottom
                    }
                });
                e.scaleService.registerScaleType("category", t, {position: "bottom"})
            }
        }, {}], 54: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(45), r = e(34);
            t.exports = function (e) {
                var t = {position: "left", ticks: {callback: r.formatters.linear}}, n = e.LinearScaleBase.extend({
                    determineDataLimits: function () {
                        var e = this, t = e.options, n = e.chart, i = n.data.datasets, r = e.isHorizontal();

                        function a(t) {
                            return r ? t.xAxisID === e.id : t.yAxisID === e.id
                        }

                        e.min = null, e.max = null;
                        var s = t.stacked;
                        if (void 0 === s && o.each(i, function (e, t) {
                                if (!s) {
                                    var i = n.getDatasetMeta(t);
                                    n.isDatasetVisible(t) && a(i) && void 0 !== i.stack && (s = !0)
                                }
                            }), t.stacked || s) {
                            var l = {};
                            o.each(i, function (i, r) {
                                var s = n.getDatasetMeta(r),
                                    u = [s.type, void 0 === t.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                void 0 === l[u] && (l[u] = {positiveValues: [], negativeValues: []});
                                var c = l[u].positiveValues, d = l[u].negativeValues;
                                n.isDatasetVisible(r) && a(s) && o.each(i.data, function (n, i) {
                                    var o = +e.getRightValue(n);
                                    isNaN(o) || s.data[i].hidden || (c[i] = c[i] || 0, d[i] = d[i] || 0, t.relativePoints ? c[i] = 100 : o < 0 ? d[i] += o : c[i] += o)
                                })
                            }), o.each(l, function (t) {
                                var n = t.positiveValues.concat(t.negativeValues), i = o.min(n), r = o.max(n);
                                e.min = null === e.min ? i : Math.min(e.min, i), e.max = null === e.max ? r : Math.max(e.max, r)
                            })
                        } else o.each(i, function (t, i) {
                            var r = n.getDatasetMeta(i);
                            n.isDatasetVisible(i) && a(r) && o.each(t.data, function (t, n) {
                                var i = +e.getRightValue(t);
                                isNaN(i) || r.data[n].hidden || (null === e.min ? e.min = i : i < e.min && (e.min = i), null === e.max ? e.max = i : i > e.max && (e.max = i))
                            })
                        });
                        e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var e, t = this.options.ticks;
                        if (this.isHorizontal()) e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.width / 50)); else {
                            var n = o.valueOrDefault(t.fontSize, i.global.defaultFontSize);
                            e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)))
                        }
                        return e
                    }, handleDirectionalChanges: function () {
                        this.isHorizontal() || this.ticks.reverse()
                    }, getLabelForIndex: function (e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    }, getPixelForValue: function (e) {
                        var t = this, n = t.start, i = +t.getRightValue(e), o = t.end - n;
                        return t.isHorizontal() ? t.left + t.width / o * (i - n) : t.bottom - t.height / o * (i - n)
                    }, getValueForPixel: function (e) {
                        var t = this, n = t.isHorizontal(), i = n ? t.width : t.height,
                            o = (n ? e - t.left : t.bottom - e) / i;
                        return t.start + (t.end - t.start) * o
                    }, getPixelForTick: function (e) {
                        return this.getPixelForValue(this.ticksAsNumbers[e])
                    }
                });
                e.scaleService.registerScaleType("linear", n, t)
            }
        }, {25: 25, 34: 34, 45: 45}], 55: [function (e, t, n) {
            "use strict";
            var i = e(45);
            t.exports = function (e) {
                var t = i.noop;
                e.LinearScaleBase = e.Scale.extend({
                    getRightValue: function (t) {
                        return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t)
                    }, handleTickRangeOptions: function () {
                        var e = this, t = e.options.ticks;
                        if (t.beginAtZero) {
                            var n = i.sign(e.min), o = i.sign(e.max);
                            n < 0 && o < 0 ? e.max = 0 : n > 0 && o > 0 && (e.min = 0)
                        }
                        var r = void 0 !== t.min || void 0 !== t.suggestedMin,
                            a = void 0 !== t.max || void 0 !== t.suggestedMax;
                        void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), r !== a && e.min >= e.max && (r ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
                    }, getTickLimit: t, handleDirectionalChanges: t, buildTicks: function () {
                        var e = this, t = e.options.ticks, n = e.getTickLimit(), o = {
                            maxTicks: n = Math.max(2, n),
                            min: t.min,
                            max: t.max,
                            stepSize: i.valueOrDefault(t.fixedStepSize, t.stepSize)
                        }, r = e.ticks = function (e, t) {
                            var n, o = [];
                            if (e.stepSize && e.stepSize > 0) n = e.stepSize; else {
                                var r = i.niceNum(t.max - t.min, !1);
                                n = i.niceNum(r / (e.maxTicks - 1), !0)
                            }
                            var a = Math.floor(t.min / n) * n, s = Math.ceil(t.max / n) * n;
                            e.min && e.max && e.stepSize && i.almostWhole((e.max - e.min) / e.stepSize, n / 1e3) && (a = e.min, s = e.max);
                            var l = (s - a) / n;
                            l = i.almostEquals(l, Math.round(l), n / 1e3) ? Math.round(l) : Math.ceil(l);
                            var u = 1;
                            n < 1 && (u = Math.pow(10, n.toString().length - 2), a = Math.round(a * u) / u, s = Math.round(s * u) / u), o.push(void 0 !== e.min ? e.min : a);
                            for (var c = 1; c < l; ++c) o.push(Math.round((a + c * n) * u) / u);
                            return o.push(void 0 !== e.max ? e.max : s), o
                        }(o, e);
                        e.handleDirectionalChanges(), e.max = i.max(r), e.min = i.min(r), t.reverse ? (r.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
                    }, convertTicksToLabels: function () {
                        var t = this;
                        t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
                    }
                })
            }
        }, {45: 45}], 56: [function (e, t, n) {
            "use strict";
            var i = e(45), o = e(34);
            t.exports = function (e) {
                var t = {position: "left", ticks: {callback: o.formatters.logarithmic}}, n = e.Scale.extend({
                    determineDataLimits: function () {
                        var e = this, t = e.options, n = e.chart, o = n.data.datasets, r = e.isHorizontal();

                        function a(t) {
                            return r ? t.xAxisID === e.id : t.yAxisID === e.id
                        }

                        e.min = null, e.max = null, e.minNotZero = null;
                        var s = t.stacked;
                        if (void 0 === s && i.each(o, function (e, t) {
                                if (!s) {
                                    var i = n.getDatasetMeta(t);
                                    n.isDatasetVisible(t) && a(i) && void 0 !== i.stack && (s = !0)
                                }
                            }), t.stacked || s) {
                            var l = {};
                            i.each(o, function (o, r) {
                                var s = n.getDatasetMeta(r),
                                    u = [s.type, void 0 === t.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                n.isDatasetVisible(r) && a(s) && (void 0 === l[u] && (l[u] = []), i.each(o.data, function (t, n) {
                                    var i = l[u], o = +e.getRightValue(t);
                                    isNaN(o) || s.data[n].hidden || o < 0 || (i[n] = i[n] || 0, i[n] += o)
                                }))
                            }), i.each(l, function (t) {
                                if (t.length > 0) {
                                    var n = i.min(t), o = i.max(t);
                                    e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? o : Math.max(e.max, o)
                                }
                            })
                        } else i.each(o, function (t, o) {
                            var r = n.getDatasetMeta(o);
                            n.isDatasetVisible(o) && a(r) && i.each(t.data, function (t, n) {
                                var i = +e.getRightValue(t);
                                isNaN(i) || r.data[n].hidden || i < 0 || (null === e.min ? e.min = i : i < e.min && (e.min = i), null === e.max ? e.max = i : i > e.max && (e.max = i), 0 !== i && (null === e.minNotZero || i < e.minNotZero) && (e.minNotZero = i))
                            })
                        });
                        this.handleTickRangeOptions()
                    }, handleTickRangeOptions: function () {
                        var e = this, t = e.options.ticks, n = i.valueOrDefault;
                        e.min = n(t.min, e.min), e.max = n(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(i.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(i.log10(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(i.log10(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(i.log10(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(i.log10(e.max))) : e.minNotZero = 1)
                    }, buildTicks: function () {
                        var e = this, t = e.options.ticks, n = !e.isHorizontal(), o = {min: t.min, max: t.max},
                            r = e.ticks = function (e, t) {
                                var n, o, r = [], a = i.valueOrDefault,
                                    s = a(e.min, Math.pow(10, Math.floor(i.log10(t.min)))),
                                    l = Math.floor(i.log10(t.max)), u = Math.ceil(t.max / Math.pow(10, l));
                                0 === s ? (n = Math.floor(i.log10(t.minNotZero)), o = Math.floor(t.minNotZero / Math.pow(10, n)), r.push(s), s = o * Math.pow(10, n)) : (n = Math.floor(i.log10(s)), o = Math.floor(s / Math.pow(10, n)));
                                var c = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                                do {
                                    r.push(s), 10 == ++o && (o = 1, c = ++n >= 0 ? 1 : c), s = Math.round(o * Math.pow(10, n) * c) / c
                                } while (n < l || n === l && o < u);
                                var d = a(e.max, s);
                                return r.push(d), r
                            }(o, e);
                        e.max = i.max(r), e.min = i.min(r), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n && r.reverse()
                    }, convertTicksToLabels: function () {
                        this.tickValues = this.ticks.slice(), e.Scale.prototype.convertTicksToLabels.call(this)
                    }, getLabelForIndex: function (e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    }, getPixelForTick: function (e) {
                        return this.getPixelForValue(this.tickValues[e])
                    }, _getFirstTickValue: function (e) {
                        var t = Math.floor(i.log10(e));
                        return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t)
                    }, getPixelForValue: function (t) {
                        var n, o, r, a, s, l = this, u = l.options.ticks.reverse, c = i.log10,
                            d = l._getFirstTickValue(l.minNotZero), h = 0;
                        return t = +l.getRightValue(t), u ? (r = l.end, a = l.start, s = -1) : (r = l.start, a = l.end, s = 1), l.isHorizontal() ? (n = l.width, o = u ? l.right : l.left) : (n = l.height, s *= -1, o = u ? l.top : l.bottom), t !== r && (0 === r && (n -= h = i.getValueOrDefault(l.options.ticks.fontSize, e.defaults.global.defaultFontSize), r = d), 0 !== t && (h += n / (c(a) - c(r)) * (c(t) - c(r))), o += s * h), o
                    }, getValueForPixel: function (t) {
                        var n, o, r, a, s = this, l = s.options.ticks.reverse, u = i.log10,
                            c = s._getFirstTickValue(s.minNotZero);
                        if (l ? (o = s.end, r = s.start) : (o = s.start, r = s.end), s.isHorizontal() ? (n = s.width, a = l ? s.right - t : t - s.left) : (n = s.height, a = l ? t - s.top : s.bottom - t), a !== o) {
                            if (0 === o) {
                                var d = i.getValueOrDefault(s.options.ticks.fontSize, e.defaults.global.defaultFontSize);
                                a -= d, n -= d, o = c
                            }
                            a *= u(r) - u(o), a /= n, a = Math.pow(10, u(o) + a)
                        }
                        return a
                    }
                });
                e.scaleService.registerScaleType("logarithmic", n, t)
            }
        }, {34: 34, 45: 45}], 57: [function (e, t, n) {
            "use strict";
            var i = e(25), o = e(45), r = e(34);
            t.exports = function (e) {
                var t = i.global, n = {
                    display: !0,
                    animate: !0,
                    position: "chartArea",
                    angleLines: {display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1},
                    gridLines: {circular: !1},
                    ticks: {
                        showLabelBackdrop: !0,
                        backdropColor: "rgba(255,255,255,0.75)",
                        backdropPaddingY: 2,
                        backdropPaddingX: 2,
                        callback: r.formatters.linear
                    },
                    pointLabels: {
                        display: !0, fontSize: 10, callback: function (e) {
                            return e
                        }
                    }
                };

                function a(e) {
                    var t = e.options;
                    return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
                }

                function s(e) {
                    var n = e.options.pointLabels, i = o.valueOrDefault(n.fontSize, t.defaultFontSize),
                        r = o.valueOrDefault(n.fontStyle, t.defaultFontStyle),
                        a = o.valueOrDefault(n.fontFamily, t.defaultFontFamily);
                    return {size: i, style: r, family: a, font: o.fontString(i, r, a)}
                }

                function l(e, t, n, i, o) {
                    return e === i || e === o ? {start: t - n / 2, end: t + n / 2} : e < i || e > o ? {
                        start: t - n - 5,
                        end: t
                    } : {start: t, end: t + n + 5}
                }

                function u(e) {
                    return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
                }

                function c(e, t, n, i) {
                    if (o.isArray(t)) for (var r = n.y, a = 1.5 * i, s = 0; s < t.length; ++s) e.fillText(t[s], n.x, r), r += a; else e.fillText(t, n.x, n.y)
                }

                function d(e, t, n) {
                    90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h)
                }

                function h(e) {
                    return o.isNumber(e) ? e : 0
                }

                var f = e.LinearScaleBase.extend({
                    setDimensions: function () {
                        var e = this, n = e.options, i = n.ticks;
                        e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
                        var r = o.min([e.height, e.width]), a = o.valueOrDefault(i.fontSize, t.defaultFontSize);
                        e.drawingArea = n.display ? r / 2 - (a / 2 + i.backdropPaddingY) : r / 2
                    }, determineDataLimits: function () {
                        var e = this, t = e.chart, n = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
                        o.each(t.data.datasets, function (r, a) {
                            if (t.isDatasetVisible(a)) {
                                var s = t.getDatasetMeta(a);
                                o.each(r.data, function (t, o) {
                                    var r = +e.getRightValue(t);
                                    isNaN(r) || s.data[o].hidden || (n = Math.min(r, n), i = Math.max(r, i))
                                })
                            }
                        }), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = i === Number.NEGATIVE_INFINITY ? 0 : i, e.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var e = this.options.ticks, n = o.valueOrDefault(e.fontSize, t.defaultFontSize);
                        return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)))
                    }, convertTicksToLabels: function () {
                        var t = this;
                        e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                    }, getLabelForIndex: function (e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    }, fit: function () {
                        var e, t;
                        this.options.pointLabels.display ? function (e) {
                            var t, n, i, r = s(e), u = Math.min(e.height / 2, e.width / 2),
                                c = {r: e.width, l: 0, t: e.height, b: 0}, d = {};
                            e.ctx.font = r.font, e._pointLabelSizes = [];
                            var h, f, p, g = a(e);
                            for (t = 0; t < g; t++) {
                                i = e.getPointPosition(t, u), h = e.ctx, f = r.size, p = e.pointLabels[t] || "", n = o.isArray(p) ? {
                                    w: o.longestText(h, h.font, p),
                                    h: p.length * f + 1.5 * (p.length - 1) * f
                                } : {w: h.measureText(p).width, h: f}, e._pointLabelSizes[t] = n;
                                var m = e.getIndexAngle(t), v = o.toDegrees(m) % 360, y = l(v, i.x, n.w, 0, 180),
                                    b = l(v, i.y, n.h, 90, 270);
                                y.start < c.l && (c.l = y.start, d.l = m), y.end > c.r && (c.r = y.end, d.r = m), b.start < c.t && (c.t = b.start, d.t = m), b.end > c.b && (c.b = b.end, d.b = m)
                            }
                            e.setReductions(u, c, d)
                        }(this) : (e = this, t = Math.min(e.height / 2, e.width / 2), e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0))
                    }, setReductions: function (e, t, n) {
                        var i = t.l / Math.sin(n.l), o = Math.max(t.r - this.width, 0) / Math.sin(n.r),
                            r = -t.t / Math.cos(n.t), a = -Math.max(t.b - this.height, 0) / Math.cos(n.b);
                        i = h(i), o = h(o), r = h(r), a = h(a), this.drawingArea = Math.min(Math.round(e - (i + o) / 2), Math.round(e - (r + a) / 2)), this.setCenterPoint(i, o, r, a)
                    }, setCenterPoint: function (e, t, n, i) {
                        var o = this, r = o.width - t - o.drawingArea, a = e + o.drawingArea, s = n + o.drawingArea,
                            l = o.height - i - o.drawingArea;
                        o.xCenter = Math.round((a + r) / 2 + o.left), o.yCenter = Math.round((s + l) / 2 + o.top)
                    }, getIndexAngle: function (e) {
                        return e * (2 * Math.PI / a(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    }, getDistanceFromCenterForValue: function (e) {
                        var t = this;
                        if (null === e) return 0;
                        var n = t.drawingArea / (t.max - t.min);
                        return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n
                    }, getPointPosition: function (e, t) {
                        var n = this.getIndexAngle(e) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(n) * t) + this.xCenter,
                            y: Math.round(Math.sin(n) * t) + this.yCenter
                        }
                    }, getPointPositionForValue: function (e, t) {
                        return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
                    }, getBasePosition: function () {
                        var e = this.min, t = this.max;
                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0)
                    }, draw: function () {
                        var e = this, n = e.options, i = n.gridLines, r = n.ticks, l = o.valueOrDefault;
                        if (n.display) {
                            var h = e.ctx, f = this.getIndexAngle(0), p = l(r.fontSize, t.defaultFontSize),
                                g = l(r.fontStyle, t.defaultFontStyle), m = l(r.fontFamily, t.defaultFontFamily),
                                v = o.fontString(p, g, m);
                            o.each(e.ticks, function (n, s) {
                                if (s > 0 || r.reverse) {
                                    var u = e.getDistanceFromCenterForValue(e.ticksAsNumbers[s]);
                                    if (i.display && 0 !== s && function (e, t, n, i) {
                                            var r = e.ctx;
                                            if (r.strokeStyle = o.valueAtIndexOrDefault(t.color, i - 1), r.lineWidth = o.valueAtIndexOrDefault(t.lineWidth, i - 1), e.options.gridLines.circular) r.beginPath(), r.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI), r.closePath(), r.stroke(); else {
                                                var s = a(e);
                                                if (0 === s) return;
                                                r.beginPath();
                                                var l = e.getPointPosition(0, n);
                                                r.moveTo(l.x, l.y);
                                                for (var u = 1; u < s; u++) l = e.getPointPosition(u, n), r.lineTo(l.x, l.y);
                                                r.closePath(), r.stroke()
                                            }
                                        }(e, i, u, s), r.display) {
                                        var c = l(r.fontColor, t.defaultFontColor);
                                        if (h.font = v, h.save(), h.translate(e.xCenter, e.yCenter), h.rotate(f), r.showLabelBackdrop) {
                                            var d = h.measureText(n).width;
                                            h.fillStyle = r.backdropColor, h.fillRect(-d / 2 - r.backdropPaddingX, -u - p / 2 - r.backdropPaddingY, d + 2 * r.backdropPaddingX, p + 2 * r.backdropPaddingY)
                                        }
                                        h.textAlign = "center", h.textBaseline = "middle", h.fillStyle = c, h.fillText(n, 0, -u), h.restore()
                                    }
                                }
                            }), (n.angleLines.display || n.pointLabels.display) && function (e) {
                                var n = e.ctx, i = e.options, r = i.angleLines, l = i.pointLabels;
                                n.lineWidth = r.lineWidth, n.strokeStyle = r.color;
                                var h = e.getDistanceFromCenterForValue(i.ticks.reverse ? e.min : e.max), f = s(e);
                                n.textBaseline = "top";
                                for (var p = a(e) - 1; p >= 0; p--) {
                                    if (r.display) {
                                        var g = e.getPointPosition(p, h);
                                        n.beginPath(), n.moveTo(e.xCenter, e.yCenter), n.lineTo(g.x, g.y), n.stroke(), n.closePath()
                                    }
                                    if (l.display) {
                                        var m = e.getPointPosition(p, h + 5),
                                            v = o.valueAtIndexOrDefault(l.fontColor, p, t.defaultFontColor);
                                        n.font = f.font, n.fillStyle = v;
                                        var y = e.getIndexAngle(p), b = o.toDegrees(y);
                                        n.textAlign = u(b), d(b, e._pointLabelSizes[p], m), c(n, e.pointLabels[p] || "", m, f.size)
                                    }
                                }
                            }(e)
                        }
                    }
                });
                e.scaleService.registerScaleType("radialLinear", f, n)
            }
        }, {25: 25, 34: 34, 45: 45}], 58: [function (e, t, n) {
            "use strict";
            var i = e(1);
            i = "function" == typeof i ? i : window.moment;
            var o = e(25), r = e(45), a = Number.MIN_SAFE_INTEGER || -9007199254740991,
                s = Number.MAX_SAFE_INTEGER || 9007199254740991, l = {
                    millisecond: {common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]},
                    second: {common: !0, size: 1e3, steps: [1, 2, 5, 10, 30]},
                    minute: {common: !0, size: 6e4, steps: [1, 2, 5, 10, 30]},
                    hour: {common: !0, size: 36e5, steps: [1, 2, 3, 6, 12]},
                    day: {common: !0, size: 864e5, steps: [1, 2, 5]},
                    week: {common: !1, size: 6048e5, steps: [1, 2, 3, 4]},
                    month: {common: !0, size: 2628e6, steps: [1, 2, 3]},
                    quarter: {common: !1, size: 7884e6, steps: [1, 2, 3, 4]},
                    year: {common: !0, size: 3154e7}
                }, u = Object.keys(l);

            function c(e, t) {
                return e - t
            }

            function d(e) {
                var t, n, i, o = {}, r = [];
                for (t = 0, n = e.length; t < n; ++t) o[i = e[t]] || (o[i] = !0, r.push(i));
                return r
            }

            function h(e, t, n, i) {
                var o = function (e, t, n) {
                        for (var i, o, r, a = 0, s = e.length - 1; a >= 0 && a <= s;) {
                            if (o = e[(i = a + s >> 1) - 1] || null, r = e[i], !o) return {lo: null, hi: r};
                            if (r[t] < n) a = i + 1; else {
                                if (!(o[t] > n)) return {lo: o, hi: r};
                                s = i - 1
                            }
                        }
                        return {lo: r, hi: null}
                    }(e, t, n), r = o.lo ? o.hi ? o.lo : e[e.length - 2] : e[0],
                    a = o.lo ? o.hi ? o.hi : e[e.length - 1] : e[1], s = a[t] - r[t], l = s ? (n - r[t]) / s : 0,
                    u = (a[i] - r[i]) * l;
                return r[i] + u
            }

            function f(e, t) {
                var n = t.parser, o = t.parser || t.format;
                return "function" == typeof n ? n(e) : "string" == typeof e && "string" == typeof o ? i(e, o) : (e instanceof i || (e = i(e)), e.isValid() ? e : "function" == typeof o ? o(e) : e)
            }

            function p(e, t) {
                if (r.isNullOrUndef(e)) return null;
                var n = t.options.time, i = f(t.getRightValue(e), n);
                return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null
            }

            function g(e) {
                for (var t = u.indexOf(e) + 1, n = u.length; t < n; ++t) if (l[u[t]].common) return u[t]
            }

            function m(e, t, n, o) {
                var a, c = o.time, d = c.unit || function (e, t, n, i) {
                        var o, r, a, c = u.length;
                        for (o = u.indexOf(e); o < c - 1; ++o) if (a = (r = l[u[o]]).steps ? r.steps[r.steps.length - 1] : s, r.common && Math.ceil((n - t) / (a * r.size)) <= i) return u[o];
                        return u[c - 1]
                    }(c.minUnit, e, t, n), h = g(d), f = r.valueOrDefault(c.stepSize, c.unitStepSize),
                    p = "week" === d && c.isoWeekday, m = o.ticks.major.enabled, v = l[d], y = i(e), b = i(t), x = [];
                for (f || (f = function (e, t, n, i) {
                    var o, r, a, s = t - e, u = l[n], c = u.size, d = u.steps;
                    if (!d) return Math.ceil(s / (i * c));
                    for (o = 0, r = d.length; o < r && (a = d[o], !(Math.ceil(s / (c * a)) <= i)); ++o) ;
                    return a
                }(e, t, d, n)), p && (y = y.isoWeekday(p), b = b.isoWeekday(p)), y = y.startOf(p ? "day" : d), (b = b.startOf(p ? "day" : d)) < t && b.add(1, d), a = i(y), m && h && !p && !c.round && (a.startOf(h), a.add(~~((y - a) / (v.size * f)) * f, d)); a < b; a.add(f, d)) x.push(+a);
                return x.push(+a), x
            }

            t.exports = function (e) {
                var t = e.Scale.extend({
                    initialize: function () {
                        if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), e.Scale.prototype.initialize.call(this)
                    }, update: function () {
                        var t = this.options;
                        return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), e.Scale.prototype.update.apply(this, arguments)
                    }, getRightValue: function (t) {
                        return t && void 0 !== t.t && (t = t.t), e.Scale.prototype.getRightValue.call(this, t)
                    }, determineDataLimits: function () {
                        var e, t, n, o, l, u, h = this, f = h.chart, g = h.options.time, m = g.unit || "day", v = s,
                            y = a, b = [], x = [], w = [];
                        for (e = 0, n = f.data.labels.length; e < n; ++e) w.push(p(f.data.labels[e], h));
                        for (e = 0, n = (f.data.datasets || []).length; e < n; ++e) if (f.isDatasetVisible(e)) if (l = f.data.datasets[e].data, r.isObject(l[0])) for (x[e] = [], t = 0, o = l.length; t < o; ++t) u = p(l[t], h), b.push(u), x[e][t] = u; else b.push.apply(b, w), x[e] = w.slice(0); else x[e] = [];
                        w.length && (w = d(w).sort(c), v = Math.min(v, w[0]), y = Math.max(y, w[w.length - 1])), b.length && (b = d(b).sort(c), v = Math.min(v, b[0]), y = Math.max(y, b[b.length - 1])), v = p(g.min, h) || v, y = p(g.max, h) || y, v = v === s ? +i().startOf(m) : v, y = y === a ? +i().endOf(m) + 1 : y, h.min = Math.min(v, y), h.max = Math.max(v + 1, y), h._horizontal = h.isHorizontal(), h._table = [], h._timestamps = {
                            data: b,
                            datasets: x,
                            labels: w
                        }
                    }, buildTicks: function () {
                        var e, t, n, o = this, r = o.min, a = o.max, s = o.options, c = s.time, d = [], v = [];
                        switch (s.ticks.source) {
                            case"data":
                                d = o._timestamps.data;
                                break;
                            case"labels":
                                d = o._timestamps.labels;
                                break;
                            case"auto":
                            default:
                                d = m(r, a, o.getLabelCapacity(r), s)
                        }
                        for ("ticks" === s.bounds && d.length && (r = d[0], a = d[d.length - 1]), r = p(c.min, o) || r, a = p(c.max, o) || a, e = 0, t = d.length; e < t; ++e) (n = d[e]) >= r && n <= a && v.push(n);
                        return o.min = r, o.max = a, o._unit = c.unit || function (e, t, n, o) {
                            var r, a, s = i.duration(i(o).diff(i(n)));
                            for (r = u.length - 1; r >= u.indexOf(t); r--) if (a = u[r], l[a].common && s.as(a) >= e.length) return a;
                            return u[t ? u.indexOf(t) : 0]
                        }(v, c.minUnit, o.min, o.max), o._majorUnit = g(o._unit), o._table = function (e, t, n, i) {
                            if ("linear" === i || !e.length) return [{time: t, pos: 0}, {time: n, pos: 1}];
                            var o, r, a, s, l, u = [], c = [t];
                            for (o = 0, r = e.length; o < r; ++o) (s = e[o]) > t && s < n && c.push(s);
                            for (c.push(n), o = 0, r = c.length; o < r; ++o) l = c[o + 1], a = c[o - 1], s = c[o], void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === s || u.push({
                                time: s,
                                pos: o / (r - 1)
                            });
                            return u
                        }(o._timestamps.data, r, a, s.distribution), o._offsets = function (e, t, n, i, o) {
                            var r, a, s = 0, l = 0;
                            return o.offset && t.length && (o.time.min || (r = t.length > 1 ? t[1] : i, a = t[0], s = (h(e, "time", r, "pos") - h(e, "time", a, "pos")) / 2), o.time.max || (r = t[t.length - 1], a = t.length > 1 ? t[t.length - 2] : n, l = (h(e, "time", r, "pos") - h(e, "time", a, "pos")) / 2)), {
                                left: s,
                                right: l
                            }
                        }(o._table, v, r, a, s), o._labelFormat = function (e, t) {
                            var n, i, o, r = e.length;
                            for (n = 0; n < r; n++) {
                                if (0 !== (i = f(e[n], t)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                0 === i.second() && 0 === i.minute() && 0 === i.hour() || (o = !0)
                            }
                            return o ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                        }(o._timestamps.data, c), function (e, t) {
                            var n, o, r, a, s = [];
                            for (n = 0, o = e.length; n < o; ++n) r = e[n], a = !!t && r === +i(r).startOf(t), s.push({
                                value: r,
                                major: a
                            });
                            return s
                        }(v, o._majorUnit)
                    }, getLabelForIndex: function (e, t) {
                        var n = this.chart.data, i = this.options.time,
                            o = n.labels && e < n.labels.length ? n.labels[e] : "", a = n.datasets[t].data[e];
                        return r.isObject(a) && (o = this.getRightValue(a)), i.tooltipFormat ? f(o, i).format(i.tooltipFormat) : "string" == typeof o ? o : f(o, i).format(this._labelFormat)
                    }, tickFormatFunction: function (e, t, n, i) {
                        var o = this.options, a = e.valueOf(), s = o.time.displayFormats, l = s[this._unit],
                            u = this._majorUnit, c = s[u], d = e.clone().startOf(u).valueOf(), h = o.ticks.major,
                            f = h.enabled && u && c && a === d, p = e.format(i || (f ? c : l)),
                            g = f ? h : o.ticks.minor, m = r.valueOrDefault(g.callback, g.userCallback);
                        return m ? m(p, t, n) : p
                    }, convertTicksToLabels: function (e) {
                        var t, n, o = [];
                        for (t = 0, n = e.length; t < n; ++t) o.push(this.tickFormatFunction(i(e[t].value), t, e));
                        return o
                    }, getPixelForOffset: function (e) {
                        var t = this, n = t._horizontal ? t.width : t.height, i = t._horizontal ? t.left : t.top,
                            o = h(t._table, "time", e, "pos");
                        return i + n * (t._offsets.left + o) / (t._offsets.left + 1 + t._offsets.right)
                    }, getPixelForValue: function (e, t, n) {
                        var i = null;
                        if (void 0 !== t && void 0 !== n && (i = this._timestamps.datasets[n][t]), null === i && (i = p(e, this)), null !== i) return this.getPixelForOffset(i)
                    }, getPixelForTick: function (e) {
                        var t = this.getTicks();
                        return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
                    }, getValueForPixel: function (e) {
                        var t = this, n = t._horizontal ? t.width : t.height, o = t._horizontal ? t.left : t.top,
                            r = (n ? (e - o) / n : 0) * (t._offsets.left + 1 + t._offsets.left) - t._offsets.right,
                            a = h(t._table, "pos", r, "time");
                        return i(a)
                    }, getLabelWidth: function (e) {
                        var t = this.options.ticks, n = this.ctx.measureText(e).width, i = r.toRadians(t.maxRotation),
                            a = Math.cos(i), s = Math.sin(i);
                        return n * a + r.valueOrDefault(t.fontSize, o.global.defaultFontSize) * s
                    }, getLabelCapacity: function (e) {
                        var t = this, n = t.options.time.displayFormats.millisecond,
                            o = t.tickFormatFunction(i(e), 0, [], n), r = t.getLabelWidth(o),
                            a = t.isHorizontal() ? t.width : t.height, s = Math.floor(a / r);
                        return s > 0 ? s : 1
                    }
                });
                e.scaleService.registerScaleType("time", t, {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {autoSkip: !1, source: "auto", major: {enabled: !1}}
                })
            }
        }, {1: 1, 25: 25, 45: 45}]
    }, {}, [7])(7)
}), function (e) {
    WOW = function () {
        return {
            init: function () {
                var t = [], n = 1;

                function i() {
                    var n = window.innerHeight, i = window.scrollY;
                    e(".wow").each(function () {
                        if ("visible" != e(this).css("visibility") && (n + i - 100 > o(this) && i < o(this) || n + i - 100 > o(this) + e(this).height() && i < o(this) + e(this).height() || n + i == e(document).height() && o(this) + 100 > e(document).height())) {
                            var r = e(this).index(".wow"), a = e(this).attr("data-wow-delay");
                            if (a) {
                                a = e(this).attr("data-wow-delay").slice(0, -1);
                                var s = this;
                                parseFloat(a);
                                e(s).addClass("animated"), e(s).css({visibility: "visible"}), e(s).css({"animation-delay": a}), e(s).css({"animation-name": t[r]});
                                var l = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                e(this).attr("data-wow-delay") && (l += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                s = this;
                                setTimeout(function () {
                                    e(s).removeClass("animated")
                                }, l)
                            } else {
                                e(this).addClass("animated"), e(this).css({visibility: "visible"}), e(this).css({"animation-name": t[r]});
                                l = 1e3 * e(this).css("animation-duration").slice(0, -1), s = this;
                                setTimeout(function () {
                                    e(s).removeClass("animated")
                                }, l)
                            }
                        }
                    })
                }

                function o(e) {
                    var t = e.getBoundingClientRect(), n = document.body, i = document.documentElement,
                        o = window.pageYOffset || i.scrollTop || n.scrollTop, r = i.clientTop || n.clientTop || 0,
                        a = t.top + o - r;
                    return Math.round(a)
                }

                e(".wow").each(function () {
                    e(this).css({visibility: "hidden"}), t[e(this).index(".wow")] = e(this).css("animation-name"), e(this).css({"animation-name": "none"})
                }), e(window).scroll(function () {
                    var t, r;
                    n ? (t = window.innerHeight, r = window.scrollY, e(".wow.animated").each(function () {
                        if (t + r - 100 > o(this) && r > o(this) + 100 || t + r - 100 < o(this) && r < o(this) + 100 || o(this) + e(this).height > e(document).height() - 100) e(this).removeClass("animated"), e(this).css({"animation-name": "none"}), e(this).css({visibility: "hidden"}); else {
                            var n = 1e3 * e(this).css("animation-duration").slice(0, -1);
                            e(this).attr("data-wow-delay") && (n += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                            var i = this;
                            setTimeout(function () {
                                e(i).removeClass("animated")
                            }, n)
                        }
                    }), i(), n--) : i()
                }), e(".wow").each(function () {
                    var n = e(this).index(".wow"), i = e(this).attr("data-wow-delay");
                    i ? (i = e(this).attr("data-wow-delay").slice(0, -1), parseFloat(i), e(this).addClass("animated"), e(this).css({visibility: "visible"}), e(this).css({"animation-delay": i + "s"}), e(this).css({"animation-name": t[n]})) : (e(this).addClass("animated"), e(this).css({visibility: "visible"}), e(this).css({"animation-name": t[n]}))
                })
            }
        }
    }
}(jQuery), function (e) {
    e(window).on("scroll", function () {
        var t = e(".navbar");
        t.length && (t.offset().top > 50 ? e(".scrolling-navbar").addClass("top-nav-collapse") : e(".scrolling-navbar").removeClass("top-nav-collapse"))
    })
}(jQuery), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function () {
        return e.Waves = t.call(e), e.Waves
    }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
}("object" == typeof global ? global : this, function () {
    "use strict";
    var e = e || {}, t = document.querySelectorAll.bind(document), n = Object.prototype.toString,
        i = "ontouchstart" in window;

    function o(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }

    function r(e) {
        var i, r = n.call(e);
        return "[object String]" === r ? t(e) : o(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r) && e.hasOwnProperty("length") ? e : o(i = e) && i.nodeType > 0 ? [e] : []
    }

    function a(e) {
        var t, n, i = {top: 0, left: 0}, o = e && e.ownerDocument;
        return t = o.documentElement, void 0 !== e.getBoundingClientRect && (i = e.getBoundingClientRect()), n = function (e) {
            return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
            var t
        }(o), {top: i.top + n.pageYOffset - t.clientTop, left: i.left + n.pageXOffset - t.clientLeft}
    }

    function s(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
        return t
    }

    var l = {
        duration: 750, delay: 200, show: function (e, t, n) {
            if (2 === e.button) return !1;
            t = t || this;
            var i = document.createElement("div");
            i.className = "waves-ripple waves-rippling", t.appendChild(i);
            var o = a(t), r = 0, u = 0;
            "touches" in e && e.touches.length ? (r = e.touches[0].pageY - o.top, u = e.touches[0].pageX - o.left) : (r = e.pageY - o.top, u = e.pageX - o.left), u = u >= 0 ? u : 0, r = r >= 0 ? r : 0;
            var c = "scale(" + t.clientWidth / 100 * 3 + ")", d = "translate(0,0)";
            n && (d = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", u), i.setAttribute("data-y", r), i.setAttribute("data-scale", c), i.setAttribute("data-translate", d);
            var h = {top: r + "px", left: u + "px"};
            i.classList.add("waves-notransition"), i.setAttribute("style", s(h)), i.classList.remove("waves-notransition"), h["-webkit-transform"] = c + " " + d, h["-moz-transform"] = c + " " + d, h["-ms-transform"] = c + " " + d, h["-o-transform"] = c + " " + d, h.transform = c + " " + d, h.opacity = "1";
            var f = "mousemove" === e.type ? 2500 : l.duration;
            h["-webkit-transition-duration"] = f + "ms", h["-moz-transition-duration"] = f + "ms", h["-o-transition-duration"] = f + "ms", h["transition-duration"] = f + "ms", i.setAttribute("style", s(h))
        }, hide: function (e, t) {
            for (var n = (t = t || this).getElementsByClassName("waves-rippling"), o = 0, r = n.length; o < r; o++) c(e, t, n[o]);
            i && (t.removeEventListener("touchend", l.hide), t.removeEventListener("touchcancel", l.hide)), t.removeEventListener("mouseup", l.hide), t.removeEventListener("mouseleave", l.hide)
        }
    }, u = {
        input: function (e) {
            var t = e.parentNode;
            if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                n.className = e.className + " waves-input-wrapper", e.className = "waves-button-input", t.replaceChild(n, e), n.appendChild(e);
                var i = window.getComputedStyle(e, null), o = i.color, r = i.backgroundColor;
                n.setAttribute("style", "color:" + o + ";background:" + r), e.setAttribute("style", "background-color:rgba(0,0,0,0);")
            }
        }, img: function (e) {
            var t = e.parentNode;
            if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                t.replaceChild(n, e), n.appendChild(e)
            }
        }
    };

    function c(e, t, n) {
        if (n) {
            n.classList.remove("waves-rippling");
            var i = n.getAttribute("data-x"), o = n.getAttribute("data-y"), r = n.getAttribute("data-scale"),
                a = n.getAttribute("data-translate"), u = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
            u < 0 && (u = 0), "mousemove" === e.type && (u = 150);
            var c = "mousemove" === e.type ? 2500 : l.duration;
            setTimeout(function () {
                var e = {
                    top: o + "px",
                    left: i + "px",
                    opacity: "0",
                    "-webkit-transition-duration": c + "ms",
                    "-moz-transition-duration": c + "ms",
                    "-o-transition-duration": c + "ms",
                    "transition-duration": c + "ms",
                    "-webkit-transform": r + " " + a,
                    "-moz-transform": r + " " + a,
                    "-ms-transform": r + " " + a,
                    "-o-transform": r + " " + a,
                    transform: r + " " + a
                };
                n.setAttribute("style", s(e)), setTimeout(function () {
                    try {
                        t.removeChild(n)
                    } catch (e) {
                        return !1
                    }
                }, c)
            }, u)
        }
    }

    var d = {
        touches: 0, allowEvent: function (e) {
            var t = !0;
            return /^(mousedown|mousemove)$/.test(e.type) && d.touches && (t = !1), t
        }, registerEvent: function (e) {
            var t = e.type;
            "touchstart" === t ? d.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function () {
                d.touches && (d.touches -= 1)
            }, 500)
        }
    };

    function h(e) {
        var t = function (e) {
            if (!1 === d.allowEvent(e)) return null;
            for (var t = null, n = e.target || e.srcElement; n.parentElement;) {
                if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                    t = n;
                    break
                }
                n = n.parentElement
            }
            return t
        }(e);
        if (null !== t) {
            if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
            if (d.registerEvent(e), "touchstart" === e.type && l.delay) {
                var n = !1, o = setTimeout(function () {
                    o = null, l.show(e, t)
                }, l.delay), r = function (i) {
                    o && (clearTimeout(o), o = null, l.show(e, t)), n || (n = !0, l.hide(i, t)), s()
                }, a = function (e) {
                    o && (clearTimeout(o), o = null), r(e), s()
                };
                t.addEventListener("touchmove", a, !1), t.addEventListener("touchend", r, !1), t.addEventListener("touchcancel", r, !1);
                var s = function () {
                    t.removeEventListener("touchmove", a), t.removeEventListener("touchend", r), t.removeEventListener("touchcancel", r)
                }
            } else l.show(e, t), i && (t.addEventListener("touchend", l.hide, !1), t.addEventListener("touchcancel", l.hide, !1)), t.addEventListener("mouseup", l.hide, !1), t.addEventListener("mouseleave", l.hide, !1)
        }
    }

    return e.init = function (e) {
        var t = document.body;
        "duration" in (e = e || {}) && (l.duration = e.duration), "delay" in e && (l.delay = e.delay), i && (t.addEventListener("touchstart", h, !1), t.addEventListener("touchcancel", d.registerEvent, !1), t.addEventListener("touchend", d.registerEvent, !1)), t.addEventListener("mousedown", h, !1)
    }, e.attach = function (e, t) {
        var i, o;
        e = r(e), "[object Array]" === n.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
        for (var a = 0, s = e.length; a < s; a++) o = (i = e[a]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (u[o](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + t)
    }, e.ripple = function (e, t) {
        var n = (e = r(e)).length;
        if ((t = t || {}).wait = t.wait || 0, t.position = t.position || null, n) for (var i, o, s, u = {}, c = 0, d = {
            type: "mousedown",
            button: 1
        }, h = function (e, t) {
            return function () {
                l.hide(e, t)
            }
        }; c < n; c++) if (i = e[c], o = t.position || {
                x: i.clientWidth / 2,
                y: i.clientHeight / 2
            }, s = a(i), u.x = s.left + o.x, u.y = s.top + o.y, d.pageX = u.x, d.pageY = u.y, l.show(d, i), t.wait >= 0 && null !== t.wait) {
            setTimeout(h({type: "mouseup", button: 1}, i), t.wait)
        }
    }, e.calm = function (e) {
        for (var t = {type: "mouseup", button: 1}, n = 0, i = (e = r(e)).length; n < i; n++) l.hide(t, e[n])
    }, e.displayEffect = function (t) {
        console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), e.init(t)
    }, e
}), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(), function (e) {
    var t = ["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function (e) {
        return "input[type=" + e + "]"
    }).join(", ") + ", textarea", n = function (e) {
        var t = e.siblings("label, i"), n = e.val().length, i = e.attr("placeholder");
        t[(n || i ? "add" : "remove") + "Class"]("active")
    }, i = function (e) {
        if (e.hasClass("validate")) {
            var t = e.val(), n = !t.length, i = !e[0].validity.badInput;
            if (n && i) e.removeClass("valid").removeClass("invalid"); else {
                var o = e.is(":valid"), r = Number(e.attr("length")) || 0;
                o && (!r || r > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
            }
        }
    }, o = function () {
        var t = e(void 0);
        if (t.val().length) {
            var n = e(".hiddendiv"), i = t.css("font-family"), o = t.css("font-size");
            o && n.css("font-size", o), i && n.css("font-family", i), "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text(t.val() + "\n");
            var r = n.html().replace(/\n/g, "<br>");
            n.html(r), n.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", n.height())
        }
    };
    e(t).each(function (t, i) {
        var o = e(i), r = o.siblings("label, i");
        n(o), i.validity.badInput && r.addClass("active")
    }), e(document).on("focus", t, function (t) {
        e(t.target).siblings("label, i").addClass("active")
    }), e(document).on("blur", t, function (t) {
        var n = e(t.target), o = !n.val(), r = !t.target.validity.badInput, a = void 0 === n.attr("placeholder");
        o && r && a && n.siblings("label, i").removeClass("active"), i(n)
    }), e(document).on("change", t, function (t) {
        var o = e(t.target);
        n(o), i(o)
    }), e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("reset", function (n) {
        var i = e(n.target);
        i.is("form") && (i.find(t).removeClass("valid").removeClass("invalid").each(function (t, n) {
            var i = e(n), o = !i.val(), r = !i.attr("placeholder");
            o && r && i.siblings("label, i").removeClass("active")
        }), i.find("select.initialized").each(function (t, n) {
            var i = e(n), o = i.siblings("input.select-dropdown"), r = i.children("[selected]").val();
            i.val(r), o.val(r)
        }))
    }), function () {
        var t = e(".md-textarea-auto");
        if (t.length) {
            var n = void 0;
            n = window.attachEvent ? function (e, t, n) {
                e.attachEvent("on" + t, n)
            } : function (e, t, n) {
                e.addEventListener(t, n, !1)
            }, t.each(function () {
                var e = this;

                function t() {
                    e.style.height = "auto", e.style.height = e.scrollHeight + "px"
                }

                function i() {
                    window.setTimeout(t, 0)
                }

                n(e, "change", t), n(e, "cut", i), n(e, "paste", i), n(e, "drop", i), n(e, "keydown", i), t()
            })
        }
    }();
    var r = e("body");
    if (!e(".hiddendiv").first().length) {
        var a = e('<div class="hiddendiv common"></div>');
        r.append(a)
    }
    e(".materialize-textarea").each(o), r.on("keyup keydown", ".materialize-textarea", o)
}(jQuery), $(document).ready(function () {
    $("body").attr("aria-busy", !0), $("#preloader-markup").load("mdb-addons/preloader.html", function () {
        $(window).on("load", function () {
            $("#mdb-preloader").fadeOut("slow"), $("body").removeAttr("aria-busy")
        })
    })
}), function (e) {
    e(document).on("click.card", ".card", function (t) {
        var n = e(this).find(".card-reveal");
        if (n.length) {
            var i = e(t.target), o = i.is(".card-reveal .card-title"), r = i.is(".card-reveal .card-title i"),
                a = i.is(".card .activator"), s = i.is(".card .activator i");
            o || r ? n.removeClass("show") : (a || s) && n.addClass("show")
        }
    }), e(".rotate-btn").on("click", function () {
        var t = e(this).attr("data-card");
        e("#" + t).toggleClass("flipped")
    }), e(".card-share > a").on("click", function (t) {
        t.preventDefault(), e(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")
    })
}(jQuery), function (e) {
    function t() {
        var t = Number(e(this).attr("length")), n = Number(e(this).val().length), i = n <= t;
        e(this).parent().find('span[class="character-counter"]').html(n + "/" + t), function (e, t) {
            var n = t.hasClass("invalid");
            e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"))
        }(i, e(this))
    }

    function n() {
        e(this).parent().find('span[class="character-counter"]').html("")
    }

    e.fn.characterCounter = function () {
        return this.each(function () {
            var i, o;
            void 0 !== e(this).attr("length") && (e(this).on("input", t), e(this).on("focus", t), e(this).on("blur", n), i = e(this), o = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), i.parent().append(o))
        })
    }, e(document).ready(function () {
        e("input, textarea").characterCounter()
    })
}(jQuery), function (e) {
    e(["jquery"], function (e) {
        return function () {
            var t, n, i, o = 0, r = {error: "error", info: "info", success: "success", warning: "warning"}, a = {
                clear: function (n, i) {
                    var o = d();
                    t || s(o);
                    l(n, o, i) || function (n) {
                        for (var i = t.children(), o = i.length - 1; o >= 0; o--) l(e(i[o]), n)
                    }(o)
                }, remove: function (n) {
                    var i = d();
                    t || s(i);
                    if (n && 0 === e(":focus", n).length) return void h(n);
                    t.children().length && t.remove()
                }, error: function (e, t, n) {
                    return c({
                        type: r.error,
                        iconClass: d().iconClasses.error,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }, getContainer: s, info: function (e, t, n) {
                    return c({type: r.info, iconClass: d().iconClasses.info, message: e, optionsOverride: n, title: t})
                }, options: {}, subscribe: function (e) {
                    n = e
                }, success: function (e, t, n) {
                    return c({
                        type: r.success,
                        iconClass: d().iconClasses.success,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }, version: "2.1.1", warning: function (e, t, n) {
                    return c({
                        type: r.warning,
                        iconClass: d().iconClasses.warning,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }
            };
            return a;

            function s(n, i) {
                return n || (n = d()), (t = e("#" + n.containerId)).length ? t : (i && (t = function (n) {
                    return (t = e("<div/>").attr("id", n.containerId).addClass(n.positionClass).attr("aria-live", "polite").attr("role", "alert")).appendTo(e(n.target)), t
                }(n)), t)
            }

            function l(t, n, i) {
                var o = !(!i || !i.force) && i.force;
                return !(!t || !o && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
                    duration: n.hideDuration,
                    easing: n.hideEasing,
                    complete: function () {
                        h(t)
                    }
                }), !0)
            }

            function u(e) {
                n && n(e)
            }

            function c(n) {
                var r = d(), a = n.iconClass || r.iconClass;
                if (void 0 !== n.optionsOverride && (r = e.extend(r, n.optionsOverride), a = n.optionsOverride.iconClass || a), !function (e, t) {
                        if (e.preventDuplicates) {
                            if (t.message === i) return !0;
                            i = t.message
                        }
                        return !1
                    }(r, n)) {
                    o++, t = s(r, !0);
                    var l = null, c = e("<div/>"), f = e("<div/>"), p = e("<div/>"), g = e("<div/>"),
                        m = e(r.closeHtml), v = {intervalId: null, hideEta: null, maxHideTime: null},
                        y = {toastId: o, state: "visible", startTime: new Date, options: r, map: n};
                    return n.iconClass && c.addClass(r.toastClass).addClass(a), n.title && (f.append(n.title).addClass(r.titleClass), c.append(f)), n.message && (p.append(n.message).addClass(r.messageClass), c.append(p)), r.closeButton && (m.addClass("toast-close-button").attr("role", "button"), c.prepend(m)), r.progressBar && (g.addClass("toast-progress"), c.prepend(g)), r.newestOnTop ? t.prepend(c) : t.append(c), c.hide(), c[r.showMethod]({
                        duration: r.showDuration,
                        easing: r.showEasing,
                        complete: r.onShown
                    }), r.timeOut > 0 && (l = setTimeout(b, r.timeOut), v.maxHideTime = parseFloat(r.timeOut), v.hideEta = (new Date).getTime() + v.maxHideTime, r.progressBar && (v.intervalId = setInterval(k, 10))), function () {
                        c.hover(w, x), !r.onclick && r.tapToDismiss && c.click(b);
                        r.closeButton && m && m.click(function (e) {
                            e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), b(!0)
                        });
                        r.onclick && c.click(function () {
                            r.onclick(), b()
                        })
                    }(), u(y), r.debug && console && console.log(y), c
                }

                function b(t) {
                    if (!e(":focus", c).length || t) return clearTimeout(v.intervalId), c[r.hideMethod]({
                        duration: r.hideDuration,
                        easing: r.hideEasing,
                        complete: function () {
                            h(c), r.onHidden && "hidden" !== y.state && r.onHidden(), y.state = "hidden", y.endTime = new Date, u(y)
                        }
                    })
                }

                function x() {
                    (r.timeOut > 0 || r.extendedTimeOut > 0) && (l = setTimeout(b, r.extendedTimeOut), v.maxHideTime = parseFloat(r.extendedTimeOut), v.hideEta = (new Date).getTime() + v.maxHideTime)
                }

                function w() {
                    clearTimeout(l), v.hideEta = 0, c.stop(!0, !0)[r.showMethod]({
                        duration: r.showDuration,
                        easing: r.showEasing
                    })
                }

                function k() {
                    var e = (v.hideEta - (new Date).getTime()) / v.maxHideTime * 100;
                    g.width(e + "%")
                }
            }

            function d() {
                return e.extend({}, {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1
                }, a.options)
            }

            function h(e) {
                t || (t = s()), e.is(":visible") || (e.remove(), e = null, 0 === t.children().length && (t.remove(), i = void 0))
            }
        }()
    })
}("function" == typeof define && define.amd ? define : function (e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}, SMOOTH_SCROLL_DURATION = 700;
$(".smooth-scroll").on("click", "a", function () {
    var e = $(this).attr("href");
    if ("undefined" !== (void 0 === e ? "undefined" : _typeof(e)) && 0 === e.indexOf("#")) {
        var t = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
            n = $(this).closest("ul").attr("data-allow-hashes");
        return $("body,html").animate({scrollTop: $(e).offset().top - t}, SMOOTH_SCROLL_DURATION), "undefined" !== (void 0 === n ? "undefined" : _typeof(n)) && !1 !== n && history.replaceState(null, null, e), !1
    }
}), function (e) {
    e.fn.scrollTo = function (t) {
        return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
    }, e.fn.dropdown = function (t) {
        this.each(function () {
            var n = e(this), i = e.extend({}, e.fn.dropdown.defaults, t), o = !1, r = e("#" + n.attr("data-activates"));

            function a() {
                void 0 !== n.data("induration") && (i.inDuration = n.data("inDuration")), void 0 !== n.data("outduration") && (i.outDuration = n.data("outDuration")), void 0 !== n.data("constrainwidth") && (i.constrain_width = n.data("constrainwidth")), void 0 !== n.data("hover") && (i.hover = n.data("hover")), void 0 !== n.data("gutter") && (i.gutter = n.data("gutter")), void 0 !== n.data("beloworigin") && (i.belowOrigin = n.data("beloworigin")), void 0 !== n.data("alignment") && (i.alignment = n.data("alignment"))
            }

            function s(t) {
                "focus" === t && (o = !0), a(), r.addClass("active"), n.addClass("active"), !0 === i.constrain_width ? r.css("width", n.outerWidth()) : r.css("white-space", "nowrap");
                var s = window.innerHeight, l = n.innerHeight(), u = n.offset().left,
                    c = n.offset().top - e(window).scrollTop(), d = i.alignment, h = 0, f = 0, p = 0;
                !0 === i.belowOrigin && (p = l);
                var g = 0, m = n.parent();
                if (!m.is("body") && m[0].scrollHeight > m[0].clientHeight && (g = m[0].scrollTop), u + r.innerWidth() > e(window).width() ? d = "right" : u - r.innerWidth() + n.innerWidth() < 0 && (d = "left"), c + r.innerHeight() > s) if (c + l - r.innerHeight() < 0) {
                    var v = s - c - p;
                    r.css("max-height", v)
                } else p || (p += l), p -= r.innerHeight();
                if ("left" === d) h = i.gutter, f = n.position().left + h; else if ("right" === d) {
                    f = n.position().left + n.outerWidth() - r.outerWidth() + (h = -i.gutter)
                }
                r.css({
                    position: "absolute",
                    top: n.position().top + p + g,
                    left: f
                }), r.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: i.inDuration,
                    easing: "easeOutCubic",
                    complete: function () {
                        e(this).css("height", "")
                    }
                }).animate({opacity: 1, scrollTop: 0}, {queue: !1, duration: i.inDuration, easing: "easeOutSine"})
            }

            function l() {
                o = !1, r.fadeOut(i.outDuration), r.removeClass("active"), n.removeClass("active"), setTimeout(function () {
                    r.css("max-height", "")
                }, i.outDuration)
            }

            if (a(), n.after(r), i.hover) {
                var u = !1;
                n.unbind("click." + n.attr("id")), n.on("mouseenter", function () {
                    !1 === u && (s(), u = !0)
                }), n.on("mouseleave", function (t) {
                    var n = t.toElement || t.relatedTarget;
                    e(n).closest(".dropdown-content").is(r) || (r.stop(!0, !0), l(), u = !1)
                }), r.on("mouseleave", function (t) {
                    var i = t.toElement || t.relatedTarget;
                    e(i).closest(".dropdown-button").is(n) || (r.stop(!0, !0), l(), u = !1)
                })
            } else n.unbind("click." + n.attr("id")), n.bind("click." + n.attr("id"), function (t) {
                o || (n[0] !== t.currentTarget || n.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? n.hasClass("active") && (l(), e(document).unbind("click." + r.attr("id") + " touchstart." + r.attr("id"))) : (t.preventDefault(), s("click")), r.hasClass("active") && e(document).bind("click." + r.attr("id") + " touchstart." + r.attr("id"), function (t) {
                    r.is(t.target) || n.is(t.target) || n.find(t.target).length || (l(), e(document).unbind("click." + r.attr("id") + " touchstart." + r.attr("id")))
                }))
            });
            n.on("open", function (e, t) {
                s(t)
            }), n.on("close", l)
        })
    }, e.fn.dropdown.defaults = {
        inDuration: 300,
        outDuration: 225,
        constrain_width: !0,
        hover: !1,
        gutter: 0,
        belowOrigin: !1,
        alignment: "left"
    }, e(".dropdown-button").dropdown()
}(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");

function dropdownEffectData(e) {
    var t = "fadeIn", n = "fadeOut", i = $(e), o = $(".dropdown-menu", e), r = i.parents("ul.nav");
    return r.height > 0 && (t = r.data("dropdown-in") || null, n = r.data("dropdown-out") || null), {
        target: e,
        dropdown: i,
        dropdownMenu: o,
        effectIn: o.data("dropdown-in") || t,
        effectOut: o.data("dropdown-out") || n
    }
}

function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass(["animated", t].join(" ")))
}

function dropdownEffectEnd(e, t) {
    e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass(["animated", e.effectIn, e.effectOut].join(" ")), "function" == typeof t && t()
    })
}

dropdownSelectors.on({
    "show.bs.dropdown": function () {
        var e = dropdownEffectData(this);
        dropdownEffectStart(e, e.effectIn)
    }, "shown.bs.dropdown": function () {
        var e = dropdownEffectData(this);
        e.effectIn && e.effectOut && dropdownEffectEnd(e)
    }, "hide.bs.dropdown": function (e) {
        var t = dropdownEffectData(this);
        t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function () {
            t.dropdown.removeClass("show"), t.dropdownMenu.removeClass("show")
        }))
    }
}), function (e) {
    e(document).ready(function () {
        e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function () {
            var n = e(this);
            t(n)
        }), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function () {
            var t = e(this);
            n(t)
        }), e(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function () {
            var i = e(this).parent();
            i.hasClass("active") ? n(i) : t(i)
        })
    }), e.fn.extend({
        openFAB: function () {
            t(e(this))
        }, closeFAB: function () {
            n(e(this))
        }
    });
    var t = function (e) {
        var t = e;
        t.hasClass("active") || (t.addClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function (e) {
            e.classList.add("shown")
        }))
    }, n = function (e) {
        e.removeClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function (e) {
            e.classList.remove("shown")
        })
    };
    e(".fixed-action-btn").on("click", function (i) {
        var o, r;
        return i.preventDefault(), o = e(".fixed-action-btn"), (r = o).hasClass("active") ? n(r) : t(r), !1
    })
}(jQuery), function (e, t, n, i) {
    "use strict";
    var o, r = ["", "webkit", "Moz", "MS", "ms", "o"], a = t.createElement("div"), s = "function", l = Math.round,
        u = Math.abs, c = Date.now;

    function d(e, t, n) {
        return setTimeout(y(e, n), t)
    }

    function h(e, t, n) {
        return !!Array.isArray(e) && (f(e, n[t], n), !0)
    }

    function f(e, t, n) {
        var o;
        if (e) if (e.forEach) e.forEach(t, n); else if (e.length !== i) for (o = 0; o < e.length;) t.call(n, e[o], o, e), o++; else for (o in e) e.hasOwnProperty(o) && t.call(n, e[o], o, e)
    }

    function p(t, n, i) {
        var o = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function () {
            var n = new Error("get-stack-trace"),
                i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                r = e.console && (e.console.warn || e.console.log);
            return r && r.call(e.console, o, i), t.apply(this, arguments)
        }
    }

    o = "function" != typeof Object.assign ? function (e) {
        if (e === i || null === e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            if (o !== i && null !== o) for (var r in o) o.hasOwnProperty(r) && (t[r] = o[r])
        }
        return t
    } : Object.assign;
    var g = p(function (e, t, n) {
        for (var o = Object.keys(t), r = 0; r < o.length;) (!n || n && e[o[r]] === i) && (e[o[r]] = t[o[r]]), r++;
        return e
    }, "extend", "Use `assign`."), m = p(function (e, t) {
        return g(e, t, !0)
    }, "merge", "Use `assign`.");

    function v(e, t, n) {
        var i, r = t.prototype;
        (i = e.prototype = Object.create(r)).constructor = e, i._super = r, n && o(i, n)
    }

    function y(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function b(e, t) {
        return typeof e == s ? e.apply(t && t[0] || i, t) : e
    }

    function x(e, t) {
        return e === i ? t : e
    }

    function w(e, t, n) {
        f(T(t), function (t) {
            e.addEventListener(t, n, !1)
        })
    }

    function k(e, t, n) {
        f(T(t), function (t) {
            e.removeEventListener(t, n, !1)
        })
    }

    function C(e, t) {
        for (; e;) {
            if (e == t) return !0;
            e = e.parentNode
        }
        return !1
    }

    function _(e, t) {
        return e.indexOf(t) > -1
    }

    function T(e) {
        return e.trim().split(/\s+/g)
    }

    function S(e, t, n) {
        if (e.indexOf && !n) return e.indexOf(t);
        for (var i = 0; i < e.length;) {
            if (n && e[i][n] == t || !n && e[i] === t) return i;
            i++
        }
        return -1
    }

    function E(e) {
        return Array.prototype.slice.call(e, 0)
    }

    function A(e, t, n) {
        for (var i = [], o = [], r = 0; r < e.length;) {
            var a = t ? e[r][t] : e[r];
            S(o, a) < 0 && i.push(e[r]), o[r] = a, r++
        }
        return n && (i = t ? i.sort(function (e, n) {
            return e[t] > n[t]
        }) : i.sort()), i
    }

    function I(e, t) {
        for (var n, o, a = t[0].toUpperCase() + t.slice(1), s = 0; s < r.length;) {
            if ((o = (n = r[s]) ? n + a : t) in e) return o;
            s++
        }
        return i
    }

    var P = 1;

    function D(t) {
        var n = t.ownerDocument || t;
        return n.defaultView || n.parentWindow || e
    }

    var M = "ontouchstart" in e, O = I(e, "PointerEvent") !== i,
        L = M && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), N = 25, R = 1, F = 2, j = 4, H = 8,
        W = 1, B = 2, z = 4, V = 8, q = 16, $ = B | z, Y = V | q, U = $ | Y, X = ["x", "y"], Q = ["clientX", "clientY"];

    function G(e, t) {
        var n = this;
        this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
            b(e.options.enable, [e]) && n.handler(t)
        }, this.init()
    }

    function K(e, t, n) {
        var o = n.pointers.length, r = n.changedPointers.length, a = t & R && o - r == 0, s = t & (j | H) && o - r == 0;
        n.isFirst = !!a, n.isFinal = !!s, a && (e.session = {}), n.eventType = t, function (e, t) {
            var n = e.session, o = t.pointers, r = o.length;
            n.firstInput || (n.firstInput = Z(t));
            r > 1 && !n.firstMultiple ? n.firstMultiple = Z(t) : 1 === r && (n.firstMultiple = !1);
            var a = n.firstInput, s = n.firstMultiple, l = s ? s.center : a.center, d = t.center = J(o);
            t.timeStamp = c(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = ie(l, d), t.distance = ne(l, d), function (e, t) {
                var n = t.center, i = e.offsetDelta || {}, o = e.prevDelta || {}, r = e.prevInput || {};
                t.eventType !== R && r.eventType !== j || (o = e.prevDelta = {
                    x: r.deltaX || 0,
                    y: r.deltaY || 0
                }, i = e.offsetDelta = {x: n.x, y: n.y});
                t.deltaX = o.x + (n.x - i.x), t.deltaY = o.y + (n.y - i.y)
            }(n, t), t.offsetDirection = te(t.deltaX, t.deltaY);
            var h = ee(t.deltaTime, t.deltaX, t.deltaY);
            t.overallVelocityX = h.x, t.overallVelocityY = h.y, t.overallVelocity = u(h.x) > u(h.y) ? h.x : h.y, t.scale = s ? (f = s.pointers, p = o, ne(p[0], p[1], Q) / ne(f[0], f[1], Q)) : 1, t.rotation = s ? function (e, t) {
                return ie(t[1], t[0], Q) + ie(e[1], e[0], Q)
            }(s.pointers, o) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, function (e, t) {
                var n, o, r, a, s = e.lastInterval || t, l = t.timeStamp - s.timeStamp;
                if (t.eventType != H && (l > N || s.velocity === i)) {
                    var c = t.deltaX - s.deltaX, d = t.deltaY - s.deltaY, h = ee(l, c, d);
                    o = h.x, r = h.y, n = u(h.x) > u(h.y) ? h.x : h.y, a = te(c, d), e.lastInterval = t
                } else n = s.velocity, o = s.velocityX, r = s.velocityY, a = s.direction;
                t.velocity = n, t.velocityX = o, t.velocityY = r, t.direction = a
            }(n, t);
            var f, p;
            var g = e.element;
            C(t.srcEvent.target, g) && (g = t.srcEvent.target);
            t.target = g
        }(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
    }

    function Z(e) {
        for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
            clientX: l(e.pointers[n].clientX),
            clientY: l(e.pointers[n].clientY)
        }, n++;
        return {timeStamp: c(), pointers: t, center: J(t), deltaX: e.deltaX, deltaY: e.deltaY}
    }

    function J(e) {
        var t = e.length;
        if (1 === t) return {x: l(e[0].clientX), y: l(e[0].clientY)};
        for (var n = 0, i = 0, o = 0; o < t;) n += e[o].clientX, i += e[o].clientY, o++;
        return {x: l(n / t), y: l(i / t)}
    }

    function ee(e, t, n) {
        return {x: t / e || 0, y: n / e || 0}
    }

    function te(e, t) {
        return e === t ? W : u(e) >= u(t) ? e < 0 ? B : z : t < 0 ? V : q
    }

    function ne(e, t, n) {
        n || (n = X);
        var i = t[n[0]] - e[n[0]], o = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + o * o)
    }

    function ie(e, t, n) {
        n || (n = X);
        var i = t[n[0]] - e[n[0]], o = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(o, i) / Math.PI
    }

    G.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && w(this.element, this.evEl, this.domHandler), this.evTarget && w(this.target, this.evTarget, this.domHandler), this.evWin && w(D(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && k(this.element, this.evEl, this.domHandler), this.evTarget && k(this.target, this.evTarget, this.domHandler), this.evWin && k(D(this.element), this.evWin, this.domHandler)
        }
    };
    var oe = {mousedown: R, mousemove: F, mouseup: j}, re = "mousedown", ae = "mousemove mouseup";

    function se() {
        this.evEl = re, this.evWin = ae, this.pressed = !1, G.apply(this, arguments)
    }

    v(se, G, {
        handler: function (e) {
            var t = oe[e.type];
            t & R && 0 === e.button && (this.pressed = !0), t & F && 1 !== e.which && (t = j), this.pressed && (t & j && (this.pressed = !1), this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: "mouse",
                srcEvent: e
            }))
        }
    });
    var le = {pointerdown: R, pointermove: F, pointerup: j, pointercancel: H, pointerout: H},
        ue = {2: "touch", 3: "pen", 4: "mouse", 5: "kinect"}, ce = "pointerdown",
        de = "pointermove pointerup pointercancel";

    function he() {
        this.evEl = ce, this.evWin = de, G.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    e.MSPointerEvent && !e.PointerEvent && (ce = "MSPointerDown", de = "MSPointerMove MSPointerUp MSPointerCancel"), v(he, G, {
        handler: function (e) {
            var t = this.store, n = !1, i = e.type.toLowerCase().replace("ms", ""), o = le[i],
                r = ue[e.pointerType] || e.pointerType, a = "touch" == r, s = S(t, e.pointerId, "pointerId");
            o & R && (0 === e.button || a) ? s < 0 && (t.push(e), s = t.length - 1) : o & (j | H) && (n = !0), s < 0 || (t[s] = e, this.callback(this.manager, o, {
                pointers: t,
                changedPointers: [e],
                pointerType: r,
                srcEvent: e
            }), n && t.splice(s, 1))
        }
    });
    var fe = {touchstart: R, touchmove: F, touchend: j, touchcancel: H}, pe = "touchstart",
        ge = "touchstart touchmove touchend touchcancel";

    function me() {
        this.evTarget = pe, this.evWin = ge, this.started = !1, G.apply(this, arguments)
    }

    v(me, G, {
        handler: function (e) {
            var t = fe[e.type];
            if (t === R && (this.started = !0), this.started) {
                var n = function (e, t) {
                    var n = E(e.touches), i = E(e.changedTouches);
                    t & (j | H) && (n = A(n.concat(i), "identifier", !0));
                    return [n, i]
                }.call(this, e, t);
                t & (j | H) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: "touch",
                    srcEvent: e
                })
            }
        }
    });
    var ve = {touchstart: R, touchmove: F, touchend: j, touchcancel: H},
        ye = "touchstart touchmove touchend touchcancel";

    function be() {
        this.evTarget = ye, this.targetIds = {}, G.apply(this, arguments)
    }

    v(be, G, {
        handler: function (e) {
            var t = ve[e.type], n = function (e, t) {
                var n = E(e.touches), i = this.targetIds;
                if (t & (R | F) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
                var o, r, a = E(e.changedTouches), s = [], l = this.target;
                if (r = n.filter(function (e) {
                        return C(e.target, l)
                    }), t === R) for (o = 0; o < r.length;) i[r[o].identifier] = !0, o++;
                o = 0;
                for (; o < a.length;) i[a[o].identifier] && s.push(a[o]), t & (j | H) && delete i[a[o].identifier], o++;
                if (!s.length) return;
                return [A(r.concat(s), "identifier", !0), s]
            }.call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: "touch",
                srcEvent: e
            })
        }
    });
    var xe = 2500, we = 25;

    function ke() {
        G.apply(this, arguments);
        var e = y(this.handler, this);
        this.touch = new be(this.manager, e), this.mouse = new se(this.manager, e), this.primaryTouch = null, this.lastTouches = []
    }

    function Ce(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
            var n = {x: t.clientX, y: t.clientY};
            this.lastTouches.push(n);
            var i = this.lastTouches;
            setTimeout(function () {
                var e = i.indexOf(n);
                e > -1 && i.splice(e, 1)
            }, xe)
        }
    }

    v(ke, G, {
        handler: function (e, t, n) {
            var i = "touch" == n.pointerType, o = "mouse" == n.pointerType;
            if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (i) (function (e, t) {
                    e & R ? (this.primaryTouch = t.changedPointers[0].identifier, Ce.call(this, t)) : e & (j | H) && Ce.call(this, t)
                }).call(this, t, n); else if (o && function (e) {
                        for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                            var o = this.lastTouches[i], r = Math.abs(t - o.x), a = Math.abs(n - o.y);
                            if (r <= we && a <= we) return !0
                        }
                        return !1
                    }.call(this, n)) return;
                this.callback(e, t, n)
            }
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var _e = I(a.style, "touchAction"), Te = _e !== i, Se = "auto", Ee = "manipulation", Ae = "none", Ie = "pan-x",
        Pe = "pan-y", De = function () {
            if (!Te) return !1;
            var t = {}, n = e.CSS && e.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
                t[i] = !n || e.CSS.supports("touch-action", i)
            }), t
        }();

    function Me(e, t) {
        this.manager = e, this.set(t)
    }

    Me.prototype = {
        set: function (e) {
            "compute" == e && (e = this.compute()), Te && this.manager.element.style && De[e] && (this.manager.element.style[_e] = e), this.actions = e.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var e = [];
            return f(this.manager.recognizers, function (t) {
                b(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }), function (e) {
                if (_(e, Ae)) return Ae;
                var t = _(e, Ie), n = _(e, Pe);
                if (t && n) return Ae;
                if (t || n) return t ? Ie : Pe;
                if (_(e, Ee)) return Ee;
                return Se
            }(e.join(" "))
        }, preventDefaults: function (e) {
            var t = e.srcEvent, n = e.offsetDirection;
            if (this.manager.session.prevented) t.preventDefault(); else {
                var i = this.actions, o = _(i, Ae) && !De[Ae], r = _(i, Pe) && !De[Pe], a = _(i, Ie) && !De[Ie];
                if (o) {
                    var s = 1 === e.pointers.length, l = e.distance < 2, u = e.deltaTime < 250;
                    if (s && l && u) return
                }
                if (!a || !r) return o || r && n & $ || a && n & Y ? this.preventSrc(t) : void 0
            }
        }, preventSrc: function (e) {
            this.manager.session.prevented = !0, e.preventDefault()
        }
    };
    var Oe = 1, Le = 2, Ne = 4, Re = 8, Fe = Re, je = 16;

    function He(e) {
        this.options = o({}, this.defaults, e || {}), this.id = P++, this.manager = null, this.options.enable = x(this.options.enable, !0), this.state = Oe, this.simultaneous = {}, this.requireFail = []
    }

    function We(e) {
        return e & je ? "cancel" : e & Re ? "end" : e & Ne ? "move" : e & Le ? "start" : ""
    }

    function Be(e) {
        return e == q ? "down" : e == V ? "up" : e == B ? "left" : e == z ? "right" : ""
    }

    function ze(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }

    function Ve() {
        He.apply(this, arguments)
    }

    function qe() {
        Ve.apply(this, arguments), this.pX = null, this.pY = null
    }

    function $e() {
        Ve.apply(this, arguments)
    }

    function Ye() {
        He.apply(this, arguments), this._timer = null, this._input = null
    }

    function Ue() {
        Ve.apply(this, arguments)
    }

    function Xe() {
        Ve.apply(this, arguments)
    }

    function Qe() {
        He.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function Ge(e, t) {
        return (t = t || {}).recognizers = x(t.recognizers, Ge.defaults.preset), new Ke(e, t)
    }

    He.prototype = {
        defaults: {}, set: function (e) {
            return o(this.options, e), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (e) {
            if (h(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return t[(e = ze(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
        }, dropRecognizeWith: function (e) {
            return h(e, "dropRecognizeWith", this) ? this : (e = ze(e, this), delete this.simultaneous[e.id], this)
        }, requireFailure: function (e) {
            if (h(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return -1 === S(t, e = ze(e, this)) && (t.push(e), e.requireFailure(this)), this
        }, dropRequireFailure: function (e) {
            if (h(e, "dropRequireFailure", this)) return this;
            e = ze(e, this);
            var t = S(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (e) {
            return !!this.simultaneous[e.id]
        }, emit: function (e) {
            var t = this, n = this.state;

            function i(n) {
                t.manager.emit(n, e)
            }

            n < Re && i(t.options.event + We(n)), i(t.options.event), e.additionalEvent && i(e.additionalEvent), n >= Re && i(t.options.event + We(n))
        }, tryEmit: function (e) {
            if (this.canEmit()) return this.emit(e);
            this.state = 32
        }, canEmit: function () {
            for (var e = 0; e < this.requireFail.length;) {
                if (!(this.requireFail[e].state & (32 | Oe))) return !1;
                e++
            }
            return !0
        }, recognize: function (e) {
            var t = o({}, e);
            if (!b(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
            this.state & (Fe | je | 32) && (this.state = Oe), this.state = this.process(t), this.state & (Le | Ne | Re | je) && this.tryEmit(t)
        }, process: function (e) {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, v(Ve, He, {
        defaults: {pointers: 1}, attrTest: function (e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        }, process: function (e) {
            var t = this.state, n = e.eventType, i = t & (Le | Ne), o = this.attrTest(e);
            return i && (n & H || !o) ? t | je : i || o ? n & j ? t | Re : t & Le ? t | Ne : Le : 32
        }
    }), v(qe, Ve, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: U}, getTouchAction: function () {
            var e = this.options.direction, t = [];
            return e & $ && t.push(Pe), e & Y && t.push(Ie), t
        }, directionTest: function (e) {
            var t = this.options, n = !0, i = e.distance, o = e.direction, r = e.deltaX, a = e.deltaY;
            return o & t.direction || (t.direction & $ ? (o = 0 === r ? W : r < 0 ? B : z, n = r != this.pX, i = Math.abs(e.deltaX)) : (o = 0 === a ? W : a < 0 ? V : q, n = a != this.pY, i = Math.abs(e.deltaY))), e.direction = o, n && i > t.threshold && o & t.direction
        }, attrTest: function (e) {
            return Ve.prototype.attrTest.call(this, e) && (this.state & Le || !(this.state & Le) && this.directionTest(e))
        }, emit: function (e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = Be(e.direction);
            t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
        }
    }), v($e, Ve, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [Ae]
        }, attrTest: function (e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & Le)
        }, emit: function (e) {
            if (1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
        }
    }), v(Ye, He, {
        defaults: {event: "press", pointers: 1, time: 251, threshold: 9}, getTouchAction: function () {
            return [Se]
        }, process: function (e) {
            var t = this.options, n = e.pointers.length === t.pointers, i = e.distance < t.threshold,
                o = e.deltaTime > t.time;
            if (this._input = e, !i || !n || e.eventType & (j | H) && !o) this.reset(); else if (e.eventType & R) this.reset(), this._timer = d(function () {
                this.state = Fe, this.tryEmit()
            }, t.time, this); else if (e.eventType & j) return Fe;
            return 32
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (e) {
            this.state === Fe && (e && e.eventType & j ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = c(), this.manager.emit(this.options.event, this._input)))
        }
    }), v(Ue, Ve, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [Ae]
        }, attrTest: function (e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & Le)
        }
    }), v(Xe, Ve, {
        defaults: {event: "swipe", threshold: 10, velocity: .3, direction: $ | Y, pointers: 1},
        getTouchAction: function () {
            return qe.prototype.getTouchAction.call(this)
        },
        attrTest: function (e) {
            var t, n = this.options.direction;
            return n & ($ | Y) ? t = e.overallVelocity : n & $ ? t = e.overallVelocityX : n & Y && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && u(t) > this.options.velocity && e.eventType & j
        },
        emit: function (e) {
            var t = Be(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
        }
    }), v(Qe, He, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        }, getTouchAction: function () {
            return [Ee]
        }, process: function (e) {
            var t = this.options, n = e.pointers.length === t.pointers, i = e.distance < t.threshold,
                o = e.deltaTime < t.time;
            if (this.reset(), e.eventType & R && 0 === this.count) return this.failTimeout();
            if (i && o && n) {
                if (e.eventType != j) return this.failTimeout();
                var r = !this.pTime || e.timeStamp - this.pTime < t.interval,
                    a = !this.pCenter || ne(this.pCenter, e.center) < t.posThreshold;
                if (this.pTime = e.timeStamp, this.pCenter = e.center, a && r ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = d(function () {
                    this.state = Fe, this.tryEmit()
                }, t.interval, this), Le) : Fe
            }
            return 32
        }, failTimeout: function () {
            return this._timer = d(function () {
                this.state = 32
            }, this.options.interval, this), 32
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == Fe && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), Ge.VERSION = "2.0.7", Ge.defaults = {
        domEvents: !1,
        touchAction: "compute",
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[Ue, {enable: !1}], [$e, {enable: !1}, ["rotate"]], [Xe, {direction: $}], [qe, {direction: $}, ["swipe"]], [Qe], [Qe, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [Ye]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };

    function Ke(e, t) {
        var n;
        this.options = o({}, Ge.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new ((n = this).options.inputClass || (O ? he : L ? be : M ? ke : se))(n, K), this.touchAction = new Me(this, this.options.touchAction), Ze(this, !0), f(this.options.recognizers, function (e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
        }, this)
    }

    function Ze(e, t) {
        var n, i = e.element;
        i.style && (f(e.options.cssProps, function (o, r) {
            n = I(i.style, r), t ? (e.oldCssProps[n] = i.style[n], i.style[n] = o) : i.style[n] = e.oldCssProps[n] || ""
        }), t || (e.oldCssProps = {}))
    }

    Ke.prototype = {
        set: function (e) {
            return o(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
        }, stop: function (e) {
            this.session.stopped = e ? 2 : 1
        }, recognize: function (e) {
            var t = this.session;
            if (!t.stopped) {
                var n;
                this.touchAction.preventDefaults(e);
                var i = this.recognizers, o = t.curRecognizer;
                (!o || o && o.state & Fe) && (o = t.curRecognizer = null);
                for (var r = 0; r < i.length;) n = i[r], 2 === t.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(e), !o && n.state & (Le | Ne | Re) && (o = t.curRecognizer = n), r++
            }
        }, get: function (e) {
            if (e instanceof He) return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++) if (t[n].options.event == e) return t[n];
            return null
        }, add: function (e) {
            if (h(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
        }, remove: function (e) {
            if (h(e, "remove", this)) return this;
            if (e = this.get(e)) {
                var t = this.recognizers, n = S(t, e);
                -1 !== n && (t.splice(n, 1), this.touchAction.update())
            }
            return this
        }, on: function (e, t) {
            if (e !== i && t !== i) {
                var n = this.handlers;
                return f(T(e), function (e) {
                    n[e] = n[e] || [], n[e].push(t)
                }), this
            }
        }, off: function (e, t) {
            if (e !== i) {
                var n = this.handlers;
                return f(T(e), function (e) {
                    t ? n[e] && n[e].splice(S(n[e], t), 1) : delete n[e]
                }), this
            }
        }, emit: function (e, n) {
            this.options.domEvents && function (e, n) {
                var i = t.createEvent("Event");
                i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
            }(e, n);
            var i = this.handlers[e] && this.handlers[e].slice();
            if (i && i.length) {
                n.type = e, n.preventDefault = function () {
                    n.srcEvent.preventDefault()
                };
                for (var o = 0; o < i.length;) i[o](n), o++
            }
        }, destroy: function () {
            this.element && Ze(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, o(Ge, {
        INPUT_START: R,
        INPUT_MOVE: F,
        INPUT_END: j,
        INPUT_CANCEL: H,
        STATE_POSSIBLE: Oe,
        STATE_BEGAN: Le,
        STATE_CHANGED: Ne,
        STATE_ENDED: Re,
        STATE_RECOGNIZED: Fe,
        STATE_CANCELLED: je,
        STATE_FAILED: 32,
        DIRECTION_NONE: W,
        DIRECTION_LEFT: B,
        DIRECTION_RIGHT: z,
        DIRECTION_UP: V,
        DIRECTION_DOWN: q,
        DIRECTION_HORIZONTAL: $,
        DIRECTION_VERTICAL: Y,
        DIRECTION_ALL: U,
        Manager: Ke,
        Input: G,
        TouchAction: Me,
        TouchInput: be,
        MouseInput: se,
        PointerEventInput: he,
        TouchMouseInput: ke,
        SingleTouchInput: me,
        Recognizer: He,
        AttrRecognizer: Ve,
        Tap: Qe,
        Pan: qe,
        Swipe: Xe,
        Pinch: $e,
        Rotate: Ue,
        Press: Ye,
        on: w,
        off: k,
        each: f,
        merge: m,
        extend: g,
        assign: o,
        inherit: v,
        bindFn: y,
        prefixed: I
    }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = Ge, "function" == typeof define && define.amd ? define(function () {
        return Ge
    }) : "undefined" != typeof module && module.exports ? module.exports = Ge : e.Hammer = Ge
}(window, document), function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
}(function (e, t) {
    var n;
    e.fn.hammer = function (n) {
        return this.each(function () {
            !function (n, i) {
                var o = e(n);
                o.data("hammer") || o.data("hammer", new t(o[0], i))
            }(this, n)
        })
    }, t.Manager.prototype.emit = (n = t.Manager.prototype.emit, function (t, i) {
        n.call(this, t, i), e(this.element).trigger({type: t, gesture: i})
    })
});
var _createClass = function () {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

!function (e) {
    var t = 240, n = 1440, i = 2, o = .3, r = -.5, a = -.3, s = .5, l = 10, u = function () {
        function u(c, d) {
            var h = this;
            _classCallCheck(this, u);
            var f = !1, p = {MENU_WIDTH: t, edge: "left", closeOnClick: !1};
            d = e.extend(p, d), this.options = d;
            var g = c;
            this.menu_id = e("#" + g.attr("data-activates"));
            var m = e("#" + this.menu_id.attr("id") + "> .sidenav-bg");
            d.MENU_WIDTH !== t && (this.menu_id.css("width", d.MENU_WIDTH), m.css("width", d.MENU_WIDTH));
            var v = e('<div class="drag-target"></div>');
            e("body").append(v), "left" === d.edge ? (this.menu_id.css("transform", "translateX(-100%)"), v.css({left: 0})) : (this.menu_id.addClass("right-aligned").css("transform", "translateX(100%)"), v.css({right: 0})), this.menu_id.hasClass("fixed") && (window.innerWidth > n && this.menu_id.css("transform", "translateX(0)"), e(window).resize(function () {
                window.innerWidth > n ? e("#sidenav-overlay").length ? h.removeMenu(!0) : h.menu_id.css("transform", "translateX(0%)") : !1 === f && ("left" === d.edge ? h.menu_id.css("transform", "translateX(-100%)") : h.menu_id.css("transform", "translateX(100%)"))
            })), !0 === this.options.closeOnClick && this.menu_id.on("click", "a:not(.collapsible-header)", function () {
                h.removeMenu()
            }), g.click(function (t) {
                if (t.preventDefault(), !0 === f) f = !1, h.removeMenu(); else {
                    var n = e("body"), i = e('<div id="sidenav-overlay"></div>');
                    n.append(i), "left" === h.options.edge ? h.menu_id.velocity({translateX: [0, -1 * d.MENU_WIDTH]}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }) : h.menu_id.velocity({translateX: [0, d.MENU_WIDTH]}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), i.click(function () {
                        h.removeMenu()
                    })
                }
            }), v.click(function () {
                h.removeMenu()
            }), v.hammer({prevent_default: !1}).bind("pan", function (t) {
                if ("touch" === t.gesture.pointerType) {
                    var n = t.gesture.center.x, o = e("body"), r = o.innerWidth();
                    if (o.css("overflow", "hidden"), o.width(r), 0 === e("#sidenav-overlay").length) {
                        var a = e('<div id="sidenav-overlay"></div>');
                        a.css("opacity", 0).click(function () {
                            h.removeMenu()
                        }), e("body").append(a)
                    }
                    if ("left" === d.edge && (n > d.MENU_WIDTH ? n = d.MENU_WIDTH : n < 0 && (n = 0)), "left" === d.edge) n < d.MENU_WIDTH / i ? f = !1 : n >= d.MENU_WIDTH / i && (f = !0), h.menu_id.css("transform", "translateX(" + (n - d.MENU_WIDTH) + "px)"); else {
                        n < window.innerWidth - d.MENU_WIDTH / i ? f = !0 : n >= window.innerWidth - d.MENU_WIDTH / i && (f = !1);
                        var s = n - d.MENU_WIDTH / i;
                        s < 0 && (s = 0), h.menu_id.css("transform", "translateX(" + s + "px)")
                    }
                    var l = void 0;
                    "left" === d.edge ? (l = n / d.MENU_WIDTH, e("#sidenav-overlay").velocity({opacity: l}, {
                        duration: 10,
                        queue: !1,
                        easing: "easeOutQuad"
                    })) : (l = Math.abs((n - window.innerWidth) / d.MENU_WIDTH), e("#sidenav-overlay").velocity({opacity: l}, {
                        duration: 10,
                        queue: !1,
                        easing: "easeOutQuad"
                    }))
                }
            }).bind("panend", function (t) {
                if ("touch" === t.gesture.pointerType) {
                    var n = t.gesture.velocityX, u = t.gesture.center.x, c = u - d.MENU_WIDTH, p = u - d.MENU_WIDTH / i;
                    c > 0 && (c = 0), p < 0 && (p = 0), "left" === d.edge ? f && n <= o || n < r ? (0 !== c && h.menu_id.velocity({translateX: [0, c]}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), e("#sidenav-overlay").velocity({opacity: 1}, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), v.css({width: "10px", right: "", left: 0})) : (!f || n > o) && (e("body").css({
                        overflow: "",
                        width: ""
                    }), h.menu_id.velocity({translateX: [-1 * d.MENU_WIDTH - l, c]}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), e("#sidenav-overlay").velocity({opacity: 0}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                            e(this).remove()
                        }
                    }), v.css({
                        width: "10px",
                        right: "",
                        left: 0
                    })) : f && n >= a || n > s ? (h.menu_id.velocity({translateX: [0, p]}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), e("#sidenav-overlay").velocity({opacity: 1}, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), v.css({width: "50%", right: "", left: 0})) : (!f || n < a) && (e("body").css({
                        overflow: "",
                        width: ""
                    }), h.menu_id.velocity({translateX: [d.MENU_WIDTH + l, p]}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), e("#sidenav-overlay").velocity({opacity: 0}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                            e(h).remove()
                        }
                    }), v.css({width: "10px", right: 0, left: ""}))
                }
            })
        }

        return _createClass(u, [{
            key: "removeMenu", value: function (t) {
                var n = this;
                e("body").css({
                    overflow: "",
                    width: ""
                }), "left" === this.options.edge ? this.menu_id.velocity({translateX: "-100%"}, {
                    duration: 200,
                    queue: !1,
                    easing: "easeOutCubic",
                    complete: function () {
                        !0 === t && (n.menu_id.removeAttr("style"), n.menu_id.css("width", n.options.MENU_WIDTH))
                    }
                }) : this.menu_id.velocity({translateX: "100%"}, {
                    duration: 200,
                    queue: !1,
                    easing: "easeOutCubic",
                    complete: function () {
                        !0 === t && (n.menu_id.removeAttr("style"), n.menu_id.css("width", n.options.MENU_WIDTH))
                    }
                }), e("#sidenav-overlay").velocity({opacity: 0}, {
                    duration: 200,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function () {
                        e("#sidenav-overlay").remove()
                    }
                })
            }
        }, {
            key: "show", value: function () {
                this.trigger("click")
            }
        }, {
            key: "hide", value: function () {
                e("#sidenav-overlay").trigger("click")
            }
        }]), u
    }();
    e.fn.sideNav = function (t) {
        return this.each(function () {
            new u(e(this), t)
        })
    }
}(jQuery), function (e) {
    e.fn.collapsible = function (t) {
        var n = {accordion: void 0};

        function i(t, n) {
            $panelHeaders = t.find("> li > .collapsible-header"), n.hasClass("active") ? n.parent().addClass("active") : n.parent().removeClass("active"), n.parent().hasClass("active") ? n.siblings(".collapsible-body").stop(!0, !1).slideDown({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            }) : n.siblings(".collapsible-body").stop(!0, !1).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            }), $panelHeaders.not(n).removeClass("active").parent().removeClass("active"), $panelHeaders.not(n).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            })
        }

        function o(t) {
            t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            })
        }

        function r(e) {
            return a(e).length > 0
        }

        function a(e) {
            return e.closest("li > .collapsible-header")
        }

        return t = e.extend(n, t), this.each(function () {
            var n = e(this), s = e(this).find("> li > .collapsible-header"), l = n.data("collapsible");
            n.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), t.accordion || "accordion" === l || void 0 === l ? ((s = n.find("> li > .collapsible-header")).on("click.collapse", function (t) {
                var o = e(t.target);
                r(o) && (o = a(o)), o.toggleClass("active"), i(n, o)
            }), i(n, s.filter(".active").first())) : s.each(function () {
                e(this).on("click.collapse", function (t) {
                    var n = e(t.target);
                    r(n) && (n = a(n)), n.toggleClass("active"), o(n)
                }), e(this).hasClass("active") && o(e(this))
            })
        })
    }, e(".collapsible").collapsible()
}(jQuery), function (e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function (e) {
    var t = function (e, t) {
        var n, i = document.createElement("canvas");
        e.appendChild(i), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(i);
        var o = i.getContext("2d");
        i.width = i.height = t.size;
        var r = 1;
        window.devicePixelRatio > 1 && (r = window.devicePixelRatio, i.style.width = i.style.height = [t.size, "px"].join(""), i.width = i.height = t.size * r, o.scale(r, r)), o.translate(t.size / 2, t.size / 2), o.rotate((t.rotate / 180 - .5) * Math.PI);
        var a = (t.size - t.lineWidth) / 2;
        t.scaleColor && t.scaleLength && (a -= t.scaleLength + 2), Date.now = Date.now || function () {
            return +new Date
        };
        var s = function (e, t, n) {
                var i = (n = Math.min(Math.max(-1, n || 0), 1)) <= 0;
                o.beginPath(), o.arc(0, 0, a, 0, 2 * Math.PI * n, i), o.strokeStyle = e, o.lineWidth = t, o.stroke()
            },
            l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
                window.setTimeout(e, 1e3 / 60)
            }, u = function () {
                t.scaleColor && function () {
                    var e, n;
                    o.lineWidth = 1, o.fillStyle = t.scaleColor, o.save();
                    for (var i = 24; i > 0; --i) i % 6 == 0 ? (n = t.scaleLength, e = 0) : (n = .6 * t.scaleLength, e = t.scaleLength - n), o.fillRect(-t.size / 2 + e, 0, n, 1), o.rotate(Math.PI / 12);
                    o.restore()
                }(), t.trackColor && s(t.trackColor, t.trackWidth || t.lineWidth, 1)
            };
        this.getCanvas = function () {
            return i
        }, this.getCtx = function () {
            return o
        }, this.clear = function () {
            o.clearRect(t.size / -2, t.size / -2, t.size, t.size)
        }, this.draw = function (e) {
            var i;
            t.scaleColor || t.trackColor ? o.getImageData && o.putImageData ? n ? o.putImageData(n, 0, 0) : (u(), n = o.getImageData(0, 0, t.size * r, t.size * r)) : (this.clear(), u()) : this.clear(), o.lineCap = t.lineCap, i = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, s(i, t.lineWidth, e / 100)
        }.bind(this), this.animate = function (e, n) {
            var i = Date.now();
            t.onStart(e, n);
            var o = function () {
                var r = Math.min(Date.now() - i, t.animate.duration),
                    a = t.easing(this, r, e, n - e, t.animate.duration);
                this.draw(a), t.onStep(e, n, a), r >= t.animate.duration ? t.onStop(e, n) : l(o)
            }.bind(this);
            l(o)
        }.bind(this)
    };
    e.fn.easyPieChart = function (n) {
        return this.each(function () {
            var i;
            e.data(this, "easyPieChart") || (i = e.extend({}, n, e(this).data()), e.data(this, "easyPieChart", new function (e, n) {
                var i = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    trackWidth: void 0,
                    size: 110,
                    rotate: 0,
                    animate: {duration: 1e3, enabled: !0},
                    easing: function (e, t, n, i, o) {
                        return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
                    },
                    onStart: function (e, t) {
                    },
                    onStep: function (e, t, n) {
                    },
                    onStop: function (e, t) {
                    }
                };
                i.renderer = t;
                var o = {}, r = 0, a = function () {
                    for (var t in this.el = e, this.options = o, i) i.hasOwnProperty(t) && (o[t] = n && void 0 !== n[t] ? n[t] : i[t], "function" == typeof o[t] && (o[t] = o[t].bind(this)));
                    "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = i.easing, "number" == typeof o.animate && (o.animate = {
                        duration: o.animate,
                        enabled: !0
                    }), "boolean" != typeof o.animate || o.animate || (o.animate = {
                        duration: 1e3,
                        enabled: o.animate
                    }), this.renderer = new o.renderer(e, o), this.renderer.draw(r), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
                }.bind(this);
                this.update = function (e) {
                    return e = parseFloat(e), o.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this
                }.bind(this), this.disableAnimation = function () {
                    return o.animate.enabled = !1, this
                }, this.enableAnimation = function () {
                    return o.animate.enabled = !0, this
                }, a()
            }(this, i)))
        })
    }
}), function (e) {
    var t = "input[type=range]", n = !1, i = void 0;
    e(document).on("change", t, function () {
        var t = e(this);
        t.siblings(".thumb").find(".value").html(t.val())
    }), e(document).on("input mousedown touchstart", t, function (o) {
        var r = e(this), a = r.siblings(".thumb"), s = r.outerWidth();
        if (!a.length && function () {
                var n = e('<span class="thumb"><span class="value"></span></span>');
                e(t).after(n)
            }(), a.find(".value").html(r.val()), n = !0, r.addClass("active"), a.hasClass("active") || a.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {duration: 300, easing: "easeOutExpo"}), "input" !== o.type) {
            var l = void 0 === o.pageX || null === o.pageX;
            (i = l ? o.originalEvent.touches[0].pageX - e(this).offset().left : o.pageX - e(this).offset().left) < 0 ? i = 0 : i > s && (i = s), a.addClass("active").css("left", i)
        }
        a.find(".value").html(r.val())
    }), e(document).on("mouseup touchend", ".range-field", function () {
        n = !1, e(this).removeClass("active")
    }), e(document).on("mousemove touchmove", ".range-field", function (i) {
        var o = e(this).children(".thumb"), r = void 0;
        if (n) {
            o.hasClass("active") || o.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }), r = void 0 === i.pageX || null === i.pageX ? i.originalEvent.touches[0].pageX - e(this).offset().left : i.pageX - e(this).offset().left;
            var a = e(this).outerWidth();
            r < 0 ? r = 0 : r > a && (r = a), o.addClass("active").css("left", r), o.find(".value").html(o.siblings(t).val())
        }
    }), e(document).on("mouseout touchleave", ".range-field", function () {
        if (!n) {
            var t = e(this).children(".thumb");
            t.hasClass("active") && t.velocity({
                height: "0",
                width: "0",
                top: "10px",
                marginLeft: "-6px"
            }, {duration: 100}), t.removeClass("active")
        }
    })
}(jQuery), function (e) {
    e(document).on("change", '.file-field input[type="file"]', function (t) {
        var n = e(t.target), i = n.closest(".file-field").find("input.file-path"), o = [];
        n[0].files.forEach(function (e) {
            return o.push(e.name)
        }), i.val(o.join(", ")), i.trigger("change")
    })
}(jQuery), function (e) {
    var t = function (e, t, i) {
        var o = e.indexOf(t), r = -1 === o;
        return r ? e.push(t) : e.splice(o, 1), i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(t).toggleClass("active"), i.find("option").eq(t).prop("selected", r), n(e, i), r
    }, n = function (e, t) {
        for (var n = "", i = e.length, o = 0; o < i; o++) {
            var r = t.find("option").eq(e[o]).text();
            n += 0 === o ? r : ", " + r
        }
        "" === n && (n = t.find("option:disabled").eq(0).text()), t.siblings("input.select-dropdown").val(n)
    }, i = function () {
        var t = e(this), n = t.closest("ul"), i = t.val();
        n.find("li span.filtrable").each(function () {
            var t = e(this);
            "string" == typeof this.outerHTML && (-1 === this.textContent.toLowerCase().indexOf(i.toLowerCase()) ? t.hide().parent().hide() : t.show().parent().show())
        })
    };
    e.fn.material_select = function (n) {
        e(this).each(function () {
            var o = e(this);
            if (!o.hasClass("browser-default")) {
                var r = Boolean(o.attr("multiple")), a = o.data("select-id");
                if (a && (o.parent().find("span.caret").remove(), o.parent().find("input").remove(), o.unwrap(), e("ul#select-options-" + a).remove()), "destroy" !== n) {
                    var s,
                        l = (s = (new Date).getTime(), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                            var t = (s + 16 * Math.random()) % 16 | 0;
                            return s = Math.floor(s / 16), ("x" === e ? t : 3 & t | 8).toString(16)
                        }));
                    o.data("select-id", l);
                    var u = e('<div class="select-wrapper"></div>');
                    u.addClass(o.attr("class"));
                    var c = e('<ul id="select-options-' + l + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>'),
                        d = o.children("option, optgroup"), h = [],
                        f = o.find("option:selected").html() || o.find("option:first").html() || "",
                        p = Boolean(o.attr("searchable")), g = !1;
                    p && function (t, n) {
                        var o = t.attr("searchable"),
                            r = e('<span class="search-wrap ml-2"><div class="md-form mt-0"><input type="text" class="search form-control" placeholder="' + o + '"></div></span>');
                        n.append(r), r.find(".search").keyup(i)
                    }(o, c);
                    var m = function (t, n, i) {
                        var o = n.is(":disabled") ? "disabled " : "",
                            r = "optgroup-option" === i ? "optgroup-option " : "", a = n.data("icon"),
                            s = n.attr("class");
                        if (a) {
                            var l = "";
                            return s && (l = ' class="' + s + '"'), "multiple" === i ? t.append(e('<li class="' + o + '"><img alt="" src="' + a + '"' + l + '><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + n.html() + "</span></li>")) : t.append(e('<li class="' + o + r + '"><img alt="" src="' + a + '"' + l + '><span class="filtrable">' + n.html() + "</span></li>")), !0
                        }
                        "multiple" === i ? t.append(e('<li class="' + o + '"><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + n.html() + "</span></li>")) : t.append(e('<li class="' + o + r + '"><span class="filtrable">' + n.html() + "</span></li>"))
                    };
                    d.length && d.each(function () {
                        var t = e(this);
                        if (t.is("option")) r ? m(c, t, "multiple") : m(c, t); else if (t.is("optgroup")) {
                            var n = t.children("option");
                            c.append(e('<li class="optgroup"><span>' + t.attr("label") + "</span></li>")), n.each(function () {
                                m(c, e(this), "optgroup-option")
                            })
                        }
                    });
                    var v = Boolean(o.find("optgroup").length), y = o.parent().find("button.btn-save");
                    y.length && y.on("click", function () {
                        e("input.select-dropdown").trigger("close")
                    }), c.find("li:not(.optgroup)").each(function (i) {
                        e(this).click(function (a) {
                            var s = e(this);
                            if (!s.hasClass("disabled") && !s.hasClass("optgroup")) {
                                var l = !0;
                                r ? (e('input[type="checkbox"]', this).prop("checked", function (e, t) {
                                    return !t
                                }), l = t(h, p ? v ? s.index() - s.prevAll(".optgroup").length - 1 : s.index() - 1 : v ? s.index() - s.prevAll(".optgroup").length : s.index(), o), w.trigger("focus")) : (c.find("li").removeClass("active"), s.toggleClass("active"), w.val(s.text())), k(c, s), o.find("option").eq(i).prop("selected", l), o.trigger("change"), void 0 !== n && n()
                            }
                            a.stopPropagation()
                        })
                    }), o.wrap(u);
                    var b = e('<span class="caret">&#9660;</span>');
                    o.is(":disabled") && b.addClass("disabled");
                    var x = f.replace(/"/g, "&quot;"),
                        w = e('<input type="text" class="select-dropdown" readonly="true" ' + (o.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + l + '" value="' + x + '"/>');
                    o.before(w), w.before(b), w.after(c), o.is(":disabled") || w.dropdown({
                        hover: !1,
                        closeOnClick: !1
                    }), o.attr("tabindex") && e(w[0]).attr("tabindex", o.attr("tabindex")), o.addClass("initialized"), w.on({
                        focus: function () {
                            var t = e(this);
                            if (e("ul.select-dropdown").not(c[0]).is(":visible") && e("input.select-dropdown").trigger("close"), !c.is(":visible")) {
                                t.trigger("open", ["focus"]);
                                var n = t.val(), i = c.find("li").filter(function () {
                                    return e(this).text().toLowerCase() === n.toLowerCase()
                                })[0];
                                k(c, i)
                            }
                        }, click: function (e) {
                            e.stopPropagation()
                        }
                    }), w.on("blur", function () {
                        r || p || e(this).trigger("close"), c.find("li.selected").removeClass("selected")
                    }), !r && p && c.find("li").on("click", function () {
                        w.trigger("close")
                    }), c.hover(function () {
                        g = !0
                    }, function () {
                        g = !1
                    }), c.on("mousedown", function (t) {
                        e(".modal-content").find(c).length && this.scrollHeight > this.offsetHeight && t.preventDefault()
                    }), e(window).on({
                        click: function () {
                            (r || p) && (g || w.trigger("close"))
                        }
                    }), r && o.find("option:selected:not(:disabled)").each(function () {
                        var n = e(this).index();
                        t(h, n, o), c.find("li").eq(n).find(":checkbox").prop("checked", !0)
                    });
                    var k = function (t, n) {
                        n && (t.find("li.selected").removeClass("selected"), e(n).addClass("selected"))
                    }, C = [];
                    w.on("keydown", function (t) {
                        var n = 9 === t.which, i = 27 === t.which, o = 13 === t.which, a = 38 === t.which,
                            s = 40 === t.which;
                        if (n) w.trigger("close"); else if (!s || c.is(":visible")) {
                            if (!o || c.is(":visible")) {
                                t.preventDefault();
                                var l = String.fromCharCode(t.which).toLowerCase();
                                if (l && -1 === [9, 13, 27, 38, 40].indexOf(t.which)) {
                                    C.push(l);
                                    var u = C.join(""), d = c.find("li").filter(function () {
                                        return 0 === e(this).text().toLowerCase().indexOf(u)
                                    })[0];
                                    d && k(c, d)
                                }
                                if (o) {
                                    var h = c.find("li.selected:not(.disabled)")[0];
                                    h && (e(h).trigger("click"), r || w.trigger("close"))
                                }
                                s && (c.find("li.selected").length ? newOption = c.find("li.selected").next("li:not(.disabled)")[0] : newOption = c.find("li:not(.disabled)")[0], k(c, newOption)), i && w.trigger("close"), a && (newOption = c.find("li.selected").prev("li:not(.disabled)")[0], newOption && k(c, newOption)), setTimeout(function () {
                                    C = []
                                }, 1e3)
                            }
                        } else w.trigger("open")
                    })
                } else o.data("select-id", null).removeClass("initialized")
            }
        })
    }
}(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function (e) {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
}), function (e) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
}(function (e) {
    var t = e(window), n = e(document), i = e(document.documentElement),
        o = null != document.documentElement.style.transition;

    function r(t, l, c, d) {
        if (!t) return r;
        var h = !1, f = {id: t.id || "P" + Math.abs(~~(Math.random() * new Date))},
            p = c ? e.extend(!0, {}, c.defaults, d) : d || {}, g = e.extend({}, r.klasses(), p.klass), m = e(t),
            v = function () {
                return this.start()
            }, y = v.prototype = {
                constructor: v, $node: m, start: function () {
                    return f && f.start ? y : (f.methods = {}, f.start = !0, f.open = !1, f.type = t.type, t.autofocus = t == u(), t.readOnly = !p.editable, t.id = t.id || f.id, "text" != t.type && (t.type = "text"), y.component = new c(y, p), y.$root = e('<div class="' + g.picker + '" id="' + t.id + '_root" />'), s(y.$root[0], "hidden", !0), y.$holder = e(b()).appendTo(y.$root), x(), p.formatSubmit && function () {
                        var n;
                        !0 === p.hiddenName ? (n = t.name, t.name = "") : n = (n = ["string" == typeof p.hiddenPrefix ? p.hiddenPrefix : "", "string" == typeof p.hiddenSuffix ? p.hiddenSuffix : "_submit"])[0] + t.name + n[1];
                        y._hidden = e('<input type=hidden name="' + n + '"' + (m.data("value") || t.value ? ' value="' + y.get("select", p.formatSubmit) + '"' : "") + ">")[0], m.on("change." + f.id, function () {
                            y._hidden.value = t.value ? y.get("select", p.formatSubmit) : ""
                        })
                    }(), function () {
                        m.data(l, y).addClass(g.input).val(m.data("value") ? y.get("select", p.format) : t.value), p.editable || m.on("focus." + f.id + " click." + f.id, function (e) {
                            e.preventDefault(), y.open()
                        }).on("keydown." + f.id, k);
                        s(t, {haspopup: !0, expanded: !1, readonly: !1, owns: t.id + "_root"})
                    }(), p.containerHidden ? e(p.containerHidden).append(y._hidden) : m.after(y._hidden), p.container ? e(p.container).append(y.$root) : m.after(y.$root), y.on({
                        start: y.component.onStart,
                        render: y.component.onRender,
                        stop: y.component.onStop,
                        open: y.component.onOpen,
                        close: y.component.onClose,
                        set: y.component.onSet
                    }).on({
                        start: p.onStart,
                        render: p.onRender,
                        stop: p.onStop,
                        open: p.onOpen,
                        close: p.onClose,
                        set: p.onSet
                    }), h = function (e) {
                        var t;
                        e.currentStyle ? t = e.currentStyle.position : window.getComputedStyle && (t = getComputedStyle(e).position);
                        return "fixed" == t
                    }(y.$holder[0]), t.autofocus && y.open(), y.trigger("start").trigger("render"))
                }, render: function (t) {
                    return t ? (y.$holder = e(b()), x(), y.$root.html(y.$holder)) : y.$root.find("." + g.box).html(y.component.nodes(f.open)), y.trigger("render")
                }, stop: function () {
                    return f.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), m.removeClass(g.input).removeData(l), setTimeout(function () {
                        m.off("." + f.id)
                    }, 0), t.type = f.type, t.readOnly = !1, y.trigger("stop"), f.methods = {}, f.start = !1, y) : y
                }, open: function (l) {
                    return f.open ? y : (m.addClass(g.active), s(t, "expanded", !0), setTimeout(function () {
                        y.$root.addClass(g.opened), s(y.$root[0], "hidden", !1)
                    }, 0), !1 !== l && (f.open = !0, h && i.css("overflow", "hidden").css("padding-right", "+=" + a()), h && o ? y.$holder.find("." + g.frame).one("transitionend", function () {
                        y.$holder[0].focus()
                    }) : y.$holder[0].focus(), n.on("click." + f.id + " focusin." + f.id, function (e) {
                        var n = e.target;
                        n != t && n != document && 3 != e.which && y.close(n === y.$holder[0])
                    }).on("keydown." + f.id, function (t) {
                        var n = t.keyCode, i = y.component.key[n], o = t.target;
                        27 == n ? y.close(!0) : o != y.$holder[0] || !i && 13 != n ? e.contains(y.$root[0], o) && 13 == n && (t.preventDefault(), o.click()) : (t.preventDefault(), i ? r._.trigger(y.component.key.go, y, [r._.trigger(i)]) : y.$root.find("." + g.highlighted).hasClass(g.disabled) || (y.set("select", y.component.item.highlight), p.closeOnSelect && y.close(!0)))
                    })), y.trigger("open"))
                }, close: function (e) {
                    return e && (p.editable ? t.focus() : (y.$holder.off("focus.toOpen").focus(), setTimeout(function () {
                        y.$holder.on("focus.toOpen", w)
                    }, 0))), m.removeClass(g.active), s(t, "expanded", !1), setTimeout(function () {
                        y.$root.removeClass(g.opened + " " + g.focused), s(y.$root[0], "hidden", !0)
                    }, 0), f.open ? (f.open = !1, h && i.css("overflow", "").css("padding-right", "-=" + a()), n.off("." + f.id), y.trigger("close")) : y
                }, clear: function (e) {
                    return y.set("clear", null, e)
                }, set: function (t, n, i) {
                    var o, r, a = e.isPlainObject(t), s = a ? t : {};
                    if (i = a && e.isPlainObject(n) ? n : i || {}, t) {
                        for (o in a || (s[t] = n), s) r = s[o], o in y.component.item && (void 0 === r && (r = null), y.component.set(o, r, i)), "select" != o && "clear" != o || m.val("clear" == o ? "" : y.get(o, p.format)).trigger("change");
                        y.render()
                    }
                    return i.muted ? y : y.trigger("set", s)
                }, get: function (e, n) {
                    if (null != f[e = e || "value"]) return f[e];
                    if ("valueSubmit" == e) {
                        if (y._hidden) return y._hidden.value;
                        e = "value"
                    }
                    if ("value" == e) return t.value;
                    if (e in y.component.item) {
                        if ("string" == typeof n) {
                            var i = y.component.get(e);
                            return i ? r._.trigger(y.component.formats.toString, y.component, [n, i]) : ""
                        }
                        return y.component.get(e)
                    }
                }, on: function (t, n, i) {
                    var o, r, a = e.isPlainObject(t), s = a ? t : {};
                    if (t) for (o in a || (s[t] = n), s) r = s[o], i && (o = "_" + o), f.methods[o] = f.methods[o] || [], f.methods[o].push(r);
                    return y
                }, off: function () {
                    var e, t, n = arguments;
                    for (e = 0, namesCount = n.length; e < namesCount; e += 1) (t = n[e]) in f.methods && delete f.methods[t];
                    return y
                }, trigger: function (e, t) {
                    var n = function (e) {
                        var n = f.methods[e];
                        n && n.map(function (e) {
                            r._.trigger(e, y, [t])
                        })
                    };
                    return n("_" + e), n(e), y
                }
            };

        function b() {
            return r._.node("div", r._.node("div", r._.node("div", r._.node("div", y.component.nodes(f.open), g.box), g.wrap), g.frame), g.holder, 'tabindex="-1"')
        }

        function x() {
            y.$holder.on({
                keydown: k, "focus.toOpen": w, blur: function () {
                    m.removeClass(g.target)
                }, focusin: function (e) {
                    y.$root.removeClass(g.focused), e.stopPropagation()
                }, "mousedown click": function (t) {
                    var n = t.target;
                    n != y.$holder[0] && (t.stopPropagation(), "mousedown" != t.type || e(n).is("input, select, textarea, button, option") || (t.preventDefault(), y.$holder[0].focus()))
                }
            }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
                var t = e(this), n = t.data(), i = t.hasClass(g.navDisabled) || t.hasClass(g.disabled), o = u();
                o = o && (o.type || o.href), (i || o && !e.contains(y.$root[0], o)) && y.$holder[0].focus(), !i && n.nav ? y.set("highlight", y.component.item.highlight, {nav: n.nav}) : !i && "pick" in n ? (y.set("select", n.pick), p.closeOnSelect && y.close(!0)) : n.clear ? (y.clear(), p.closeOnClear && y.close(!0)) : n.close && y.close(!0)
            })
        }

        function w(e) {
            e.stopPropagation(), m.addClass(g.target), y.$root.addClass(g.focused), y.open()
        }

        function k(e) {
            var t = e.keyCode, n = /^(8|46)$/.test(t);
            if (27 == t) return y.close(!0), !1;
            (32 == t || n || !f.open && y.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? y.clear().close() : y.open())
        }

        return new v
    }

    function a() {
        if (i.height() <= t.height()) return 0;
        var n = e('<div style="visibility:hidden;width:100px" />').appendTo("body"), o = n[0].offsetWidth;
        n.css("overflow", "scroll");
        var r = e('<div style="width:100%" />').appendTo(n)[0].offsetWidth;
        return n.remove(), o - r
    }

    function s(t, n, i) {
        if (e.isPlainObject(n)) for (var o in n) l(t, o, n[o]); else l(t, n, i)
    }

    function l(e, t, n) {
        e.setAttribute(("role" == t ? "" : "aria-") + t, n)
    }

    function u() {
        try {
            return document.activeElement
        } catch (e) {
        }
    }

    return r.klasses = function (e) {
        return {
            picker: e = e || "picker",
            opened: e + "--opened",
            focused: e + "--focused",
            input: e + "__input",
            active: e + "__input--active",
            target: e + "__input--target",
            holder: e + "__holder",
            frame: e + "__frame",
            wrap: e + "__wrap",
            box: e + "__box"
        }
    }, r._ = {
        group: function (e) {
            for (var t, n = "", i = r._.trigger(e.min, e); i <= r._.trigger(e.max, e, [i]); i += e.i) t = r._.trigger(e.item, e, [i]), n += r._.node(e.node, t[0], t[1], t[2]);
            return n
        }, node: function (t, n, i, o) {
            return n ? (n = e.isArray(n) ? n.join("") : n, "<" + t + (i = i ? ' class="' + i + '"' : "") + (o = o ? " " + o : "") + ">" + n + "</" + t + ">") : ""
        }, lead: function (e) {
            return (e < 10 ? "0" : "") + e
        }, trigger: function (e, t, n) {
            return "function" == typeof e ? e.apply(t, n || []) : e
        }, digits: function (e) {
            return /\d/.test(e[1]) ? 2 : 1
        }, isDate: function (e) {
            return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
        }, isInteger: function (e) {
            return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
        }, ariaAttr: function (t, n) {
            e.isPlainObject(t) || (t = {attribute: n});
            for (var i in n = "", t) {
                var o = ("role" == i ? "" : "aria-") + i, r = t[i];
                n += null == r ? "" : o + '="' + t[i] + '"'
            }
            return n
        }
    }, r.extend = function (t, n) {
        e.fn[t] = function (i, o) {
            var a = this.data(t);
            return "picker" == i ? a : a && "string" == typeof i ? r._.trigger(a[i], a, [o]) : this.each(function () {
                e(this).data(t) || new r(this, t, n, i)
            })
        }, e.fn[t].defaults = n.defaults
    }, r
}), function (e) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
}(function (e, t) {
    var n, i = e._;

    function o(e, t) {
        var n, i = this, o = e.$node[0], r = o.value, a = e.$node.data("value"), s = a || r,
            l = a ? t.formatSubmit : t.format, u = function () {
                return o.currentStyle ? "rtl" == o.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
            };
        i.settings = t, i.$node = e.$node, i.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, i.item = {}, i.item.clear = null, i.item.disable = (t.disable || []).slice(0), i.item.enable = -(!0 === (n = i.item.disable)[0] ? n.shift() : -1), i.set("min", t.min).set("max", t.max).set("now"), s ? i.set("select", s, {
            format: l,
            defaultValue: !0
        }) : i.set("select", null).set("highlight", i.item.now), i.key = {
            40: 7, 38: -7, 39: function () {
                return u() ? -1 : 1
            }, 37: function () {
                return u() ? 1 : -1
            }, go: function (e) {
                var t = i.item.highlight, n = new Date(t.year, t.month, t.date + e);
                i.set("highlight", n, {interval: e}), this.render()
            }
        }, e.on("render", function () {
            e.$root.find("." + t.klass.selectMonth).on("change", function () {
                var n = this.value;
                n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
            }), e.$root.find("." + t.klass.selectYear).on("change", function () {
                var n = this.value;
                n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function () {
            var n = "";
            i.disabled(i.get("now")) && (n = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + n + ", select").attr("disabled", !1)
        }, 1).on("close", function () {
            e.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }

    o.prototype.set = function (e, t, n) {
        var i = this, o = i.item;
        return null === t ? ("clear" == e && (e = "select"), o[e] = t, i) : (o["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[e].split(" ").map(function (o) {
            return t = i[o](e, t, n)
        }).pop(), "select" == e ? i.set("highlight", o.select, n) : "highlight" == e ? i.set("view", o.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (o.select && i.disabled(o.select) && i.set("select", o.select, n), o.highlight && i.disabled(o.highlight) && i.set("highlight", o.highlight, n)), i)
    }, o.prototype.get = function (e) {
        return this.item[e]
    }, o.prototype.create = function (e, n, o) {
        var r;
        return (n = void 0 === n ? e : n) == -1 / 0 || n == 1 / 0 ? r = n : t.isPlainObject(n) && i.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = i.isDate(n) ? n : this.create().obj) : n = i.isInteger(n) || i.isDate(n) ? this.normalize(new Date(n), o) : this.now(e, n, o), {
            year: r || n.getFullYear(),
            month: r || n.getMonth(),
            date: r || n.getDate(),
            day: r || n.getDay(),
            obj: r || n,
            pick: r || n.getTime()
        }
    }, o.prototype.createRange = function (e, n) {
        var o = this, r = function (e) {
            return !0 === e || t.isArray(e) || i.isDate(e) ? o.create(e) : e
        };
        return i.isInteger(e) || (e = r(e)), i.isInteger(n) || (n = r(n)), i.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : i.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]), {
            from: r(e),
            to: r(n)
        }
    }, o.prototype.withinRange = function (e, t) {
        return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
    }, o.prototype.overlapRanges = function (e, t) {
        return e = this.createRange(e.from, e.to), t = this.createRange(t.from, t.to), this.withinRange(e, t.from) || this.withinRange(e, t.to) || this.withinRange(t, e.from) || this.withinRange(t, e.to)
    }, o.prototype.now = function (e, t, n) {
        return t = new Date, n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n)
    }, o.prototype.navigate = function (e, n, i) {
        var o, r, a, s, l = t.isArray(n), u = t.isPlainObject(n), c = this.item.view;
        if (l || u) {
            for (u ? (r = n.year, a = n.month, s = n.date) : (r = +n[0], a = +n[1], s = +n[2]), i && i.nav && c && c.month !== a && (r = c.year, a = c.month), r = (o = new Date(r, a + (i && i.nav ? i.nav : 0), 1)).getFullYear(), a = o.getMonth(); new Date(r, a, s).getMonth() !== a;) s -= 1;
            n = [r, a, s]
        }
        return n
    }, o.prototype.normalize = function (e) {
        return e.setHours(0, 0, 0, 0), e
    }, o.prototype.measure = function (e, t) {
        return t ? "string" == typeof t ? t = this.parse(e, t) : i.isInteger(t) && (t = this.now(e, t, {rel: t})) : t = "min" == e ? -1 / 0 : 1 / 0, t
    }, o.prototype.viewset = function (e, t) {
        return this.create([t.year, t.month, 1])
    }, o.prototype.validate = function (e, n, o) {
        var r, a, s, l, u = this, c = n, d = o && o.interval ? o.interval : 1, h = -1 === u.item.enable, f = u.item.min,
            p = u.item.max, g = h && u.item.disable.filter(function (e) {
                if (t.isArray(e)) {
                    var o = u.create(e).pick;
                    o < n.pick ? r = !0 : o > n.pick && (a = !0)
                }
                return i.isInteger(e)
            }).length;
        if ((!o || !o.nav && !o.defaultValue) && (!h && u.disabled(n) || h && u.disabled(n) && (g || r || a) || !h && (n.pick <= f.pick || n.pick >= p.pick))) for (h && !g && (!a && d > 0 || !r && d < 0) && (d *= -1); u.disabled(n) && (Math.abs(d) > 1 && (n.month < c.month || n.month > c.month) && (n = c, d = d > 0 ? 1 : -1), n.pick <= f.pick ? (s = !0, d = 1, n = u.create([f.year, f.month, f.date + (n.pick === f.pick ? 0 : -1)])) : n.pick >= p.pick && (l = !0, d = -1, n = u.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : 1)])), !s || !l);) n = u.create([n.year, n.month, n.date + d]);
        return n
    }, o.prototype.disabled = function (e) {
        var n = this, o = n.item.disable.filter(function (o) {
            return i.isInteger(o) ? e.day === (n.settings.firstDay ? o : o - 1) % 7 : t.isArray(o) || i.isDate(o) ? e.pick === n.create(o).pick : t.isPlainObject(o) ? n.withinRange(o, e) : void 0
        });
        return o = o.length && !o.filter(function (e) {
            return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
        }).length, -1 === n.item.enable ? !o : o || e.pick < n.item.min.pick || e.pick > n.item.max.pick
    }, o.prototype.parse = function (e, t, n) {
        var o = this, r = {};
        return t && "string" == typeof t ? (n && n.format || ((n = n || {}).format = o.settings.format), o.formats.toArray(n.format).map(function (e) {
            var n = o.formats[e], a = n ? i.trigger(n, o, [t, r]) : e.replace(/^!/, "").length;
            n && (r[e] = t.substr(0, a)), t = t.substr(a)
        }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t
    }, o.prototype.formats = function () {
        function e(e, t, n) {
            var i = e.match(/[^\x00-\x7F]+|\w+/)[0];
            return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length
        }

        function t(e) {
            return e.match(/\w+/)[0].length
        }

        return {
            d: function (e, t) {
                return e ? i.digits(e) : t.date
            }, dd: function (e, t) {
                return e ? 2 : i.lead(t.date)
            }, ddd: function (e, n) {
                return e ? t(e) : this.settings.weekdaysShort[n.day]
            }, dddd: function (e, n) {
                return e ? t(e) : this.settings.weekdaysFull[n.day]
            }, m: function (e, t) {
                return e ? i.digits(e) : t.month + 1
            }, mm: function (e, t) {
                return e ? 2 : i.lead(t.month + 1)
            }, mmm: function (t, n) {
                var i = this.settings.monthsShort;
                return t ? e(t, i, n) : i[n.month]
            }, mmmm: function (t, n) {
                var i = this.settings.monthsFull;
                return t ? e(t, i, n) : i[n.month]
            }, yy: function (e, t) {
                return e ? 2 : ("" + t.year).slice(2)
            }, yyyy: function (e, t) {
                return e ? 4 : t.year
            }, toArray: function (e) {
                return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            }, toString: function (e, t) {
                var n = this;
                return n.formats.toArray(e).map(function (e) {
                    return i.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
                }).join("")
            }
        }
    }(), o.prototype.isDateExact = function (e, n) {
        return i.isInteger(e) && i.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (i.isDate(e) || t.isArray(e)) && (i.isDate(n) || t.isArray(n)) ? this.create(e).pick === this.create(n).pick : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && (this.isDateExact(e.from, n.from) && this.isDateExact(e.to, n.to))
    }, o.prototype.isDateOverlap = function (e, n) {
        var o = this.settings.firstDay ? 1 : 0;
        return i.isInteger(e) && (i.isDate(n) || t.isArray(n)) ? (e = e % 7 + o) === this.create(n).day + 1 : i.isInteger(n) && (i.isDate(e) || t.isArray(e)) ? (n = n % 7 + o) === this.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && this.overlapRanges(e, n)
    }, o.prototype.flipEnable = function (e) {
        var t = this.item;
        t.enable = e || (-1 == t.enable ? 1 : -1)
    }, o.prototype.deactivate = function (e, n) {
        var o = this, r = o.item.disable.slice(0);
        return "flip" == n ? o.flipEnable() : !1 === n ? (o.flipEnable(1), r = []) : !0 === n ? (o.flipEnable(-1), r = []) : n.map(function (e) {
            for (var n, a = 0; a < r.length; a += 1) if (o.isDateExact(e, r[a])) {
                n = !0;
                break
            }
            n || (i.isInteger(e) || i.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e)
        }), r
    }, o.prototype.activate = function (e, n) {
        var o = this, r = o.item.disable, a = r.length;
        return "flip" == n ? o.flipEnable() : !0 === n ? (o.flipEnable(1), r = []) : !1 === n ? (o.flipEnable(-1), r = []) : n.map(function (e) {
            var n, s, l, u;
            for (l = 0; l < a; l += 1) {
                if (s = r[l], o.isDateExact(s, e)) {
                    n = r[l] = null, u = !0;
                    break
                }
                if (o.isDateOverlap(s, e)) {
                    t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e)[3] || n.push("inverted") : i.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                    break
                }
            }
            if (n) for (l = 0; l < a; l += 1) if (o.isDateExact(r[l], e)) {
                r[l] = null;
                break
            }
            if (u) for (l = 0; l < a; l += 1) if (o.isDateOverlap(r[l], e)) {
                r[l] = null;
                break
            }
            n && r.push(n)
        }), r.filter(function (e) {
            return null != e
        })
    }, o.prototype.nodes = function (e) {
        var t, n, o = this, r = o.settings, a = o.item, s = a.now, l = a.select, u = a.highlight, c = a.view,
            d = a.disable, h = a.min, f = a.max,
            p = (t = (r.showWeekdaysFull ? r.weekdaysFull : r.weekdaysShort).slice(0), n = r.weekdaysFull.slice(0), r.firstDay && (t.push(t.shift()), n.push(n.shift())), i.node("thead", i.node("tr", i.group({
                min: 0,
                max: 6,
                i: 1,
                node: "th",
                item: function (e) {
                    return [t[e], r.klass.weekdays, 'scope=col title="' + n[e] + '"']
                }
            })))), g = function (e) {
                return i.node("div", " ", r.klass["nav" + (e ? "Next" : "Prev")] + (e && c.year >= f.year && c.month >= f.month || !e && c.year <= h.year && c.month <= h.month ? " " + r.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + i.ariaAttr({
                    role: "button",
                    controls: o.$node[0].id + "_table"
                }) + ' title="' + (e ? r.labelMonthNext : r.labelMonthPrev) + '"')
            }, m = function () {
                var t = r.showMonthsShort ? r.monthsShort : r.monthsFull;
                return r.selectMonths ? i.node("select", i.group({
                    min: 0,
                    max: 11,
                    i: 1,
                    node: "option",
                    item: function (e) {
                        return [t[e], 0, "value=" + e + (c.month == e ? " selected" : "") + (c.year == h.year && e < h.month || c.year == f.year && e > f.month ? " disabled" : "")]
                    }
                }), r.klass.selectMonth, (e ? "" : "disabled") + " " + i.ariaAttr({controls: o.$node[0].id + "_table"}) + ' title="' + r.labelMonthSelect + '"') : i.node("div", t[c.month], r.klass.month)
            }, v = function () {
                var t = c.year, n = !0 === r.selectYears ? 5 : ~~(r.selectYears / 2);
                if (n) {
                    var a = h.year, s = f.year, l = t - n, u = t + n;
                    if (a > l && (u += a - l, l = a), s < u) {
                        var d = l - a, p = u - s;
                        l -= d > p ? p : d, u = s
                    }
                    return i.node("select", i.group({
                        min: l, max: u, i: 1, node: "option", item: function (e) {
                            return [e, 0, "value=" + e + (t == e ? " selected" : "")]
                        }
                    }), r.klass.selectYear, (e ? "" : "disabled") + " " + i.ariaAttr({controls: o.$node[0].id + "_table"}) + ' title="' + r.labelYearSelect + '"')
                }
                return i.node("div", t, r.klass.year)
            };
        return i.node("div", (r.selectYears ? v() + m() : m() + v()) + g() + g(1), r.klass.header) + i.node("table", p + i.node("tbody", i.group({
            min: 0,
            max: 5,
            i: 1,
            node: "tr",
            item: function (e) {
                var t = r.firstDay && 0 === o.create([c.year, c.month, 1]).day ? -7 : 0;
                return [i.group({
                    min: 7 * e - c.day + t + 1, max: function () {
                        return this.min + 7 - 1
                    }, i: 1, node: "td", item: function (e) {
                        e = o.create([c.year, c.month, e + (r.firstDay ? 1 : 0)]);
                        var t, n = l && l.pick == e.pick, a = u && u.pick == e.pick,
                            p = d && o.disabled(e) || e.pick < h.pick || e.pick > f.pick,
                            g = i.trigger(o.formats.toString, o, [r.format, e]);
                        return [i.node("div", e.date, (t = [r.klass.day], t.push(c.month == e.month ? r.klass.infocus : r.klass.outfocus), s.pick == e.pick && t.push(r.klass.now), n && t.push(r.klass.selected), a && t.push(r.klass.highlighted), p && t.push(r.klass.disabled), t.join(" ")), "data-pick=" + e.pick + " " + i.ariaAttr({
                            role: "gridcell",
                            label: g,
                            selected: !(!n || o.$node.val() !== g) || null,
                            activedescendant: !!a || null,
                            disabled: !!p || null
                        })), "", i.ariaAttr({role: "presentation"})]
                    }
                })]
            }
        })), r.klass.table, 'id="' + o.$node[0].id + '_table" ' + i.ariaAttr({
            role: "grid",
            controls: o.$node[0].id,
            readonly: !0
        })) + i.node("div", i.node("button", r.today, r.klass.buttonToday, "type=button data-pick=" + s.pick + (e && !o.disabled(s) ? "" : " disabled") + " " + i.ariaAttr({controls: o.$node[0].id})) + i.node("button", r.clear, r.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + i.ariaAttr({controls: o.$node[0].id})) + i.node("button", r.close, r.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + i.ariaAttr({controls: o.$node[0].id})), r.klass.footer)
    }, o.defaults = {
        labelMonthNext: "Next month",
        labelMonthPrev: "Previous month",
        labelMonthSelect: "Select a month",
        labelYearSelect: "Select a year",
        monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        today: "Today",
        clear: "Clear",
        close: "Close",
        closeOnSelect: !0,
        closeOnClear: !0,
        format: "d mmmm, yyyy",
        klass: {
            table: (n = e.klasses().picker + "__") + "table",
            header: n + "header",
            navPrev: n + "nav--prev",
            navNext: n + "nav--next",
            navDisabled: n + "nav--disabled",
            month: n + "month",
            year: n + "year",
            selectMonth: n + "select--month",
            selectYear: n + "select--year",
            weekdays: n + "weekday",
            day: n + "day",
            disabled: n + "day--disabled",
            selected: n + "day--selected",
            highlighted: n + "day--highlighted",
            now: n + "day--today",
            infocus: n + "day--infocus",
            outfocus: n + "day--outfocus",
            footer: n + "footer",
            buttonClear: n + "button--clear",
            buttonToday: n + "button--today",
            buttonClose: n + "button--close"
        }
    }, e.extend("pickadate", o)
}), $.extend($.fn.pickadate.defaults, {
    selectMonths: !0, selectYears: 15, onRender: function () {
        var e = this.$root, t = this.get("highlight", "yyyy"), n = this.get("highlight", "dd"),
            i = this.get("highlight", "mmm"), o = this.get("highlight", "dddd");
        e.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + '</div><div class="picker__month-display"><div>' + i + '</div></div><div class="picker__day-display"><div>' + n + '</div></div><div    class="picker__year-display"><div>' + t + "</div></div></div>")
    }
}), function () {
    var e, t, n, i = window.jQuery, o = i(window), r = i(document), a = "http://www.w3.org/2000/svg",
        s = "SVGAngle" in window && ((t = document.createElement("div")).innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == a, t.innerHTML = "", e),
        l = "transition" in (n = document.createElement("div").style) || "WebkitTransition" in n || "MozTransition" in n || "msTransition" in n || "OTransition" in n,
        u = "ontouchstart" in window, c = "mousedown" + (u ? " touchstart" : ""),
        d = "mousemove.clockpicker" + (u ? " touchmove.clockpicker" : ""),
        h = "mouseup.clockpicker" + (u ? " touchend.clockpicker" : ""),
        f = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null;

    function p(e) {
        return document.createElementNS(a, e)
    }

    function g(e) {
        return (e < 10 ? "0" : "") + e
    }

    var m = 0;
    var v = 135, y = 110, b = 80, x = 20, w = 2 * v, k = l ? 350 : 1,
        C = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");

    function _(e, t) {
        var n, o, a = i(C), l = a.find(".clockpicker-plate"), u = a.find(".picker__holder"),
            f = a.find(".clockpicker-hours"), _ = a.find(".clockpicker-minutes"),
            S = a.find(".clockpicker-am-pm-block"), E = "INPUT" === e.prop("tagName"), A = E ? e : e.find("input"),
            I = (A.prop("type"), i("label[for=" + A.attr("id") + "]")), P = this;
        if (this.id = (o = ++m + "", (n = "cp") ? n + o : o), this.element = e, this.holder = u, this.options = t, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = E, this.input = A, this.label = I, this.popover = a, this.plate = l, this.hoursView = f, this.minutesView = _, this.amPmBlock = S, this.spanHours = a.find(".clockpicker-span-hours"), this.spanMinutes = a.find(".clockpicker-span-minutes"), this.spanAmPm = a.find(".clockpicker-span-am-pm"), this.footer = a.find(".picker__footer"), this.amOrPm = "", t.twelvehour) {
            var D = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
            i(D);
            t.ampmclickable ? (this.spanAmPm.empty(), i('<div id="click-am">AM</div>').on("click", function () {
                P.spanAmPm.children("#click-am").addClass("text-primary"), P.spanAmPm.children("#click-pm").removeClass("text-primary"), P.amOrPm = "AM"
            }).appendTo(this.spanAmPm), i('<div id="click-pm">PM</div>').on("click", function () {
                P.spanAmPm.children("#click-pm").addClass("text-primary"), P.spanAmPm.children("#click-am").removeClass("text-primary"), P.amOrPm = "PM"
            }).appendTo(this.spanAmPm)) : (i('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function () {
                P.amOrPm = "AM", P.amPmBlock.children(".pm-button").removeClass("active"), P.amPmBlock.children(".am-button").addClass("active"), P.spanAmPm.empty().append("AM")
            }).appendTo(this.amPmBlock), i('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function () {
                P.amOrPm = "PM", P.amPmBlock.children(".am-button").removeClass("active"), P.amPmBlock.children(".pm-button").addClass("active"), P.spanAmPm.empty().append("PM")
            }).appendTo(this.amPmBlock))
        }
        t.darktheme && a.addClass("darktheme"), i('<button type="button" class="btn btn-flat clockpicker-button" tabindex="' + (t.twelvehour ? "3" : "1") + '">' + t.donetext + "</button>").click(i.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(i.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(i.proxy(this.toggleView, this, "minutes")), A.on("focus.clockpicker click.clockpicker", i.proxy(this.show, this));
        var M, O, L, N, R = i('<div class="clockpicker-tick"></div>');
        if (t.twelvehour) for (M = 0; M < 12; M += t.hourstep) O = R.clone(), L = M / 6 * Math.PI, N = y, O.css("font-size", "140%"), O.css({
            left: v + Math.sin(L) * N - x,
            top: v - Math.cos(L) * N - x
        }), O.html(0 === M ? 12 : M), f.append(O), O.on(c, H); else for (M = 0; M < 24; M += t.hourstep) {
            O = R.clone(), L = M / 6 * Math.PI;
            var F = M > 0 && M < 13;
            N = F ? b : y, O.css({
                left: v + Math.sin(L) * N - x,
                top: v - Math.cos(L) * N - x
            }), F && O.css("font-size", "120%"), O.html(0 === M ? "00" : M), f.append(O), O.on(c, H)
        }
        var j = Math.max(t.minutestep, 5);
        for (M = 0; M < 60; M += j) for (M = 0; M < 60; M += 5) O = R.clone(), L = M / 30 * Math.PI, O.css({
            left: v + Math.sin(L) * y - x,
            top: v - Math.cos(L) * y - x
        }), O.css("font-size", "140%"), O.html(g(M)), _.append(O), O.on(c, H);

        function H(e, n) {
            var i = l.offset(), o = /^touch/.test(e.type), a = i.left + v, u = i.top + v,
                c = (o ? e.originalEvent.touches[0] : e).pageX - a, f = (o ? e.originalEvent.touches[0] : e).pageY - u,
                p = Math.sqrt(c * c + f * f), g = !1;
            if (!n || !(p < y - x || p > y + x)) {
                e.preventDefault();
                var m = setTimeout(function () {
                    P.popover.addClass("clockpicker-moving")
                }, 200);
                s && l.append(P.canvas), P.setHand(c, f, !n, !0), r.off(d).on(d, function (e) {
                    e.preventDefault();
                    var t = /^touch/.test(e.type), n = (t ? e.originalEvent.touches[0] : e).pageX - a,
                        i = (t ? e.originalEvent.touches[0] : e).pageY - u;
                    (g || n !== c || i !== f) && (g = !0, P.setHand(n, i, !1, !0))
                }), r.off(h).on(h, function (e) {
                    r.off(h), e.preventDefault();
                    var i = /^touch/.test(e.type), o = (i ? e.originalEvent.changedTouches[0] : e).pageX - a,
                        s = (i ? e.originalEvent.changedTouches[0] : e).pageY - u;
                    (n || g) && o === c && s === f && P.setHand(o, s), "hours" === P.currentView ? P.toggleView("minutes", k / 2) : t.autoclose && (P.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
                        P.done()
                    }, k / 2)), l.prepend(W), clearTimeout(m), P.popover.removeClass("clockpicker-moving"), r.off(d)
                })
            }
        }

        if (l.on(c, function (e) {
                0 === i(e.target).closest(".clockpicker-tick").length && H(e, !0)
            }), s) {
            var W = a.find(".clockpicker-canvas"), B = p("svg");
            B.setAttribute("class", "clockpicker-svg"), B.setAttribute("width", w), B.setAttribute("height", w);
            var z = p("g");
            z.setAttribute("transform", "translate(" + v + "," + v + ")");
            var V = p("circle");
            V.setAttribute("class", "clockpicker-canvas-bearing"), V.setAttribute("cx", 0), V.setAttribute("cy", 0), V.setAttribute("r", 2);
            var q = p("line");
            q.setAttribute("x1", 0), q.setAttribute("y1", 0);
            var $ = p("circle");
            $.setAttribute("class", "clockpicker-canvas-bg"), $.setAttribute("r", x);
            var Y = p("circle");
            Y.setAttribute("class", "clockpicker-canvas-fg"), Y.setAttribute("r", 5), z.appendChild(q), z.appendChild($), z.appendChild(Y), z.appendChild(V), B.appendChild(z), W.append(B), this.hand = q, this.bg = $, this.fg = Y, this.bearing = V, this.g = z, this.canvas = W
        }
        T(this.options.init)
    }

    function T(e) {
        e && "function" == typeof e && e()
    }

    _.DEFAULTS = {
        default: "",
        fromnow: 0,
        donetext: "Done",
        autoclose: !1,
        ampmclickable: !1,
        darktheme: !1,
        twelvehour: !1,
        vibrate: !0,
        hourstep: 1,
        minutestep: 1,
        ampmSubmit: !1
    }, _.prototype.toggle = function () {
        this[this.isShown ? "hide" : "show"]()
    }, _.prototype.locate = function () {
        var e = this.element, t = this.popover;
        e.offset(), e.outerWidth(), e.outerHeight(), this.options.align;
        t.show()
    }, _.prototype.parseInputValue = function () {
        var e = this.input.prop("value") || this.options.default || "";
        if ("now" === e && (e = new Date(+new Date + this.options.fromnow)), e instanceof Date && (e = e.getHours() + ":" + e.getMinutes()), e = e.split(":"), this.hours = +e[0] || 0, this.minutes = +(e[1] + "").replace(/\D/g, "") || 0, this.hours = Math.round(this.hours / this.options.hourstep) * this.options.hourstep, this.minutes = Math.round(this.minutes / this.options.minutestep) * this.options.minutestep, this.options.twelvehour) {
            var t = (e[1] + "").replace(/\d+/g, "").toLowerCase();
            this.amOrPm = this.hours > 12 || "pm" === t ? "PM" : "AM"
        }
    }, _.prototype.show = function (e) {
        if (!this.isShown) {
            T(this.options.beforeShow), i(":input").each(function () {
                i(this).attr("tabindex", -1)
            });
            var t = this;
            this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), i(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), o.on("resize.clockpicker" + this.id, function () {
                t.isShown && t.locate()
            }), this.isAppended = !0), this.parseInputValue(), this.spanHours.html(g(this.hours)), this.spanMinutes.html(g(this.minutes)), this.options.twelvehour && this.spanAmPm.empty().append(this.amOrPm), this.toggleView("hours"), this.locate(), this.isShown = !0, r.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function (e) {
                var n = i(e.target);
                0 === n.closest(t.popover.find(".picker__wrap")).length && 0 === n.closest(t.input).length && t.hide()
            }), r.on("keyup.clockpicker." + this.id, function (e) {
                27 === e.keyCode && t.hide()
            }), T(this.options.afterShow)
        }
    }, _.prototype.hide = function () {
        T(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), i(document.body).css("overflow", "visible"), this.isShown = !1, i(":input").each(function (e) {
            i(this).attr("tabindex", e + 1)
        }), r.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), r.off("keyup.clockpicker." + this.id), this.popover.hide(), T(this.options.afterHide)
    }, _.prototype.toggleView = function (e, t) {
        var n = !1;
        "minutes" === e && "visible" === i(this.hoursView).css("visibility") && (T(this.options.beforeHourSelect), n = !0);
        var o = "hours" === e, r = o ? this.hoursView : this.minutesView, a = o ? this.minutesView : this.hoursView;
        this.currentView = e, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), a.addClass("clockpicker-dial-out"), r.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(t), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
            a.css("visibility", "hidden")
        }, k), n && T(this.options.afterHourSelect)
    }, _.prototype.resetClock = function (e) {
        var t = this.currentView, n = this[t], i = "hours" === t, o = n * (Math.PI / (i ? 6 : 30)),
            r = i && n > 0 && n < 13 ? b : y, a = Math.sin(o) * r, l = -Math.cos(o) * r, u = this;
        s && e ? (u.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
            u.canvas.removeClass("clockpicker-canvas-out"), u.setHand(a, l)
        }, e)) : this.setHand(a, l)
    }, _.prototype.setHand = function (e, t, n, o) {
        var r, a, l = Math.atan2(e, -t), u = "hours" === this.currentView, c = Math.sqrt(e * e + t * t),
            d = this.options, h = u && c < (y + b) / 2, p = h ? b : y;
        if (r = u ? d.hourstep / 6 * Math.PI : d.minutestep / 30 * Math.PI, d.twelvehour && (p = y), l < 0 && (l = 2 * Math.PI + l), l = (a = Math.round(l / r)) * r, u ? (a *= d.hourstep, d.twelvehour || !h != a > 0 || (a += 12), d.twelvehour && 0 === a && (a = 12), 24 === a && (a = 0)) : 60 === (a *= d.minutestep) && (a = 0), u ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : a % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== a && f && this.options.vibrate && (this.vibrateTimer || (navigator[f](10), this.vibrateTimer = setTimeout(i.proxy(function () {
                this.vibrateTimer = null
            }, this), 100))), this[this.currentView] = a, this[u ? "spanHours" : "spanMinutes"].html(g(a)), s) {
            o || !u && a % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
            var m = Math.sin(l) * p, v = -Math.cos(l) * p;
            this.hand.setAttribute("x2", m), this.hand.setAttribute("y2", v), this.bg.setAttribute("cx", m), this.bg.setAttribute("cy", v), this.fg.setAttribute("cx", m), this.fg.setAttribute("cy", v)
        } else this[u ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
            var e = i(this);
            e.toggleClass("active", a === +e.html())
        })
    }, _.prototype.getTime = function (e) {
        this.parseInputValue();
        var t = this.hours;
        this.options.twelvehour && t < 12 && "PM" === this.amOrPm && (t += 12);
        var n = new Date;
        return n.setMinutes(this.minutes), n.setHours(t), n.setSeconds(0), e && e.apply(this.element, n) || n
    }, _.prototype.done = function () {
        T(this.options.beforeDone), this.hide(), this.label.addClass("active");
        var e = this.input.prop("value"), t = this.hours, n = ":" + g(this.minutes);
        this.isHTML5 && this.options.twelvehour && (this.hours < 12 && "PM" === this.amOrPm && (t += 12), 12 === this.hours && "AM" === this.amOrPm && (t = 0)), n = g(t) + n, !this.isHTML5 && this.options.twelvehour && (n += this.amOrPm), this.input.prop("value", n), n !== e && (this.input.trigger("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), T(this.options.afterDone)
    }, _.prototype.remove = function () {
        this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (o.off("resize.clockpicker" + this.id), this.popover.remove())
    }, i.fn.pickatime = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);

        function n() {
            var n = i(this), o = n.data("clockpicker");
            if (o) "function" == typeof o[e] && o[e].apply(o, t); else {
                var r = i.extend({}, _.DEFAULTS, n.data(), "object" == typeof e && e);
                n.data("clockpicker", new _(n, r))
            }
        }

        if (1 == this.length) {
            var o = n.apply(this[0]);
            return void 0 !== o ? o : this
        }
        return this.each(n)
    }
}(), function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function () {
    "use strict";
    return function (e, t, n, i) {
        var o = {
            features: null, bind: function (e, t, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1)
            }, isArray: function (e) {
                return e instanceof Array
            }, createEl: function (e, t) {
                var n = document.createElement(t || "div");
                return e && (n.className = e), n
            }, getScrollY: function () {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            }, unbind: function (e, t, n) {
                o.bind(e, t, n, !0)
            }, removeClass: function (e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }, addClass: function (e, t) {
                o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            }, hasClass: function (e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            }, getChildByClass: function (e, t) {
                for (var n = e.firstChild; n;) {
                    if (o.hasClass(n, t)) return n;
                    n = n.nextSibling
                }
            }, arraySearch: function (e, t, n) {
                for (var i = e.length; i--;) if (e[i][n] === t) return i;
                return -1
            }, extend: function (e, t, n) {
                for (var i in t) if (t.hasOwnProperty(i)) {
                    if (n && e.hasOwnProperty(i)) continue;
                    e[i] = t[i]
                }
            }, easing: {
                sine: {
                    out: function (e) {
                        return Math.sin(e * (Math.PI / 2))
                    }, inOut: function (e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                }, cubic: {
                    out: function (e) {
                        return --e * e * e + 1
                    }
                }
            }, detectFeatures: function () {
                if (o.features) return o.features;
                var e = o.createEl().style, t = "", n = {};
                if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
                    var i = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        r && r.length > 0 && (r = parseInt(r[1], 10)) >= 1 && 8 > r && (n.isOldIOSPhone = !0)
                    }
                    var a = i.match(/Android\s([0-9\.]*)/), s = a ? a[1] : 0;
                    (s = parseFloat(s)) >= 1 && (4.4 > s && (n.isOldAndroid = !0), n.androidVersion = s), n.isMobileOpera = /opera mini|opera mobi/i.test(i)
                }
                for (var l, u, c = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], h = 0; 4 > h; h++) {
                    t = d[h];
                    for (var f = 0; 3 > f; f++) l = c[f], u = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l), !n[l] && u in e && (n[l] = u);
                    t && !n.raf && (t = t.toLowerCase(), n.raf = window[t + "RequestAnimationFrame"], n.raf && (n.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                }
                if (!n.raf) {
                    var p = 0;
                    n.raf = function (e) {
                        var t = (new Date).getTime(), n = Math.max(0, 16 - (t - p)), i = window.setTimeout(function () {
                            e(t + n)
                        }, n);
                        return p = t + n, i
                    }, n.caf = function (e) {
                        clearTimeout(e)
                    }
                }
                return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n
            }
        };
        o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, n, i) {
            t = t.split(" ");
            for (var o, r = (i ? "detach" : "attach") + "Event", a = function () {
                n.handleEvent.call(n)
            }, s = 0; s < t.length; s++) if (o = t[s]) if ("object" == typeof n && n.handleEvent) {
                if (i) {
                    if (!n["oldIE" + o]) return !1
                } else n["oldIE" + o] = a;
                e[r]("on" + o, n["oldIE" + o])
            } else e[r]("on" + o, n)
        });
        var r = this, a = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function (e) {
                return "A" === e.tagName
            },
            getDoubleTapZoom: function (e, t) {
                return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        o.extend(a, i);
        var s, l, u, c, d, h, f, p, g, m, v, y, b, x, w, k, C, _, T, S, E, A, I, P, D, M, O, L, N, R, F, j, H, W, B, z,
            V, q, $, Y, U, X, Q, G, K, Z, J, ee, te, ne, ie, oe, re, ae, se, le = {x: 0, y: 0}, ue = {x: 0, y: 0},
            ce = {x: 0, y: 0}, de = {}, he = 0, fe = {}, pe = {x: 0, y: 0}, ge = 0, me = !0, ve = [], ye = {}, be = !1,
            xe = function (e, t) {
                o.extend(r, t.publicMethods), ve.push(e)
            }, we = function (e) {
                var t = Wt();
                return e > t - 1 ? e - t : 0 > e ? t + e : e
            }, ke = {}, Ce = function (e, t) {
                return ke[e] || (ke[e] = []), ke[e].push(t)
            }, _e = function (e) {
                var t = ke[e];
                if (t) {
                    var n = Array.prototype.slice.call(arguments);
                    n.shift();
                    for (var i = 0; i < t.length; i++) t[i].apply(r, n)
                }
            }, Te = function () {
                return (new Date).getTime()
            }, Se = function (e) {
                re = e, r.bg.style.opacity = e * a.bgOpacity
            }, Ee = function (e, t, n, i, o) {
                (!be || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), e[A] = y + t + "px, " + n + "px" + b + " scale(" + i + ")"
            }, Ae = function (e) {
                ee && (e && (m > r.currItem.fitRatio ? be || (Qt(r.currItem, !1, !0), be = !0) : be && (Qt(r.currItem), be = !1)), Ee(ee, ce.x, ce.y, m))
            }, Ie = function (e) {
                e.container && Ee(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
            }, Pe = function (e, t) {
                t[A] = y + e + "px, 0px" + b
            }, De = function (e, t) {
                if (!a.loop && t) {
                    var n = c + (pe.x * he - e) / pe.x, i = Math.round(e - ut.x);
                    (0 > n && i > 0 || n >= Wt() - 1 && 0 > i) && (e = ut.x + i * a.mainScrollEndFriction)
                }
                ut.x = e, Pe(e, d)
            }, Me = function (e, t) {
                var n = ct[e] - fe[e];
                return ue[e] + le[e] + n - n * (t / v)
            }, Oe = function (e, t) {
                e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
            }, Le = function (e) {
                e.x = Math.round(e.x), e.y = Math.round(e.y)
            }, Ne = null, Re = function () {
                Ne && (o.unbind(document, "mousemove", Re), o.addClass(e, "pswp--has_mouse"), a.mouseUsed = !0, _e("mouseUsed")), Ne = setTimeout(function () {
                    Ne = null
                }, 100)
            }, Fe = function (e, t) {
                var n = $t(r.currItem, de, e);
                return t && (J = n), n
            }, je = function (e) {
                return e || (e = r.currItem), e.initialZoomLevel
            }, He = function (e) {
                return e || (e = r.currItem), e.w > 0 ? a.maxSpreadZoom : 1
            }, We = function (e, t, n, i) {
                return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Me(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
            }, Be = function (e) {
                var t = "";
                a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
            }, ze = function (e) {
                e && (U || Y || te || z) && (e.preventDefault(), e.stopPropagation())
            }, Ve = function () {
                r.setScrollOffset(0, o.getScrollY())
            }, qe = {}, $e = 0, Ye = function (e) {
                qe[e] && (qe[e].raf && M(qe[e].raf), $e--, delete qe[e])
            }, Ue = function (e) {
                qe[e] && Ye(e), qe[e] || ($e++, qe[e] = {})
            }, Xe = function () {
                for (var e in qe) qe.hasOwnProperty(e) && Ye(e)
            }, Qe = function (e, t, n, i, o, r, a) {
                var s, l = Te();
                Ue(e);
                var u = function () {
                    if (qe[e]) {
                        if ((s = Te() - l) >= i) return Ye(e), r(n), void(a && a());
                        r((n - t) * o(s / i) + t), qe[e].raf = D(u)
                    }
                };
                u()
            }, Ge = {
                shout: _e, listen: Ce, viewportSize: de, options: a, isMainScrollAnimating: function () {
                    return te
                }, getZoomLevel: function () {
                    return m
                }, getCurrentIndex: function () {
                    return c
                }, isDragging: function () {
                    return q
                }, isZooming: function () {
                    return K
                }, setScrollOffset: function (e, t) {
                    fe.x = e, R = fe.y = t, _e("updateScrollOffset", fe)
                }, applyZoomPan: function (e, t, n, i) {
                    ce.x = t, ce.y = n, m = e, Ae(i)
                }, init: function () {
                    if (!s && !l) {
                        var n;
                        r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), O = e.className, s = !0, F = o.detectFeatures(), D = F.raf, M = F.caf, A = F.transform, N = F.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), d = r.container.style, r.itemHolders = k = [{
                            el: r.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {el: r.container.children[1], wrap: 0, index: -1}, {
                            el: r.container.children[2],
                            wrap: 0,
                            index: -1
                        }], k[0].el.style.display = k[2].el.style.display = "none", function () {
                            if (A) {
                                var t = F.perspective && !P;
                                return y = "translate" + (t ? "3d(" : "("), void(b = F.perspective ? ", 0px)" : ")")
                            }
                            A = "left", o.addClass(e, "pswp--ie"), Pe = function (e, t) {
                                t.left = e + "px"
                            }, Ie = function (e) {
                                var t = e.fitRatio > 1 ? 1 : e.fitRatio, n = e.container.style, i = t * e.w, o = t * e.h;
                                n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                            }, Ae = function () {
                                if (ee) {
                                    var e = ee, t = r.currItem, n = t.fitRatio > 1 ? 1 : t.fitRatio, i = n * t.w,
                                        o = n * t.h;
                                    e.width = i + "px", e.height = o + "px", e.left = ce.x + "px", e.top = ce.y + "px"
                                }
                            }
                        }(), g = {resize: r.updateSize, scroll: Ve, keydown: Be, click: ze};
                        var i = F.isOldIOSPhone || F.isOldAndroid || F.isMobileOpera;
                        for (F.animationName && F.transform && !i || (a.showAnimationDuration = a.hideAnimationDuration = 0), n = 0; n < ve.length; n++) r["init" + ve[n]]();
                        t && (r.ui = new t(r, o)).init(), _e("firstUpdate"), c = c || a.index || 0, (isNaN(c) || 0 > c || c >= Wt()) && (c = 0), r.currItem = Ht(c), (F.isOldIOSPhone || F.isOldAndroid) && (me = !1), e.setAttribute("aria-hidden", "false"), a.modal && (me ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === R && (_e("initialLayout"), R = L = o.getScrollY());
                        var u = "pswp--open ";
                        for (a.mainClass && (u += a.mainClass + " "), a.showHideOpacity && (u += "pswp--animate_opacity "), u += P ? "pswp--touch" : "pswp--notouch", u += F.animationName ? " pswp--css_animation" : "", u += F.svg ? " pswp--svg" : "", o.addClass(e, u), r.updateSize(), h = -1, ge = null, n = 0; 3 > n; n++) Pe((n + h) * pe.x, k[n].el.style);
                        N || o.bind(r.scrollWrap, p, r), Ce("initialZoomInEnd", function () {
                            r.setContent(k[0], c - 1), r.setContent(k[2], c + 1), k[0].el.style.display = k[2].el.style.display = "block", a.focus && e.focus(), o.bind(document, "keydown", r), F.transform && o.bind(r.scrollWrap, "click", r), a.mouseUsed || o.bind(document, "mousemove", Re), o.bind(window, "resize scroll", r), _e("bindEvents")
                        }), r.setContent(k[1], c), r.updateCurrItem(), _e("afterInit"), me || (x = setInterval(function () {
                            $e || q || K || m !== r.currItem.initialZoomLevel || r.updateSize()
                        }, 1e3)), o.addClass(e, "pswp--visible")
                    }
                }, close: function () {
                    s && (s = !1, l = !0, _e("close"), o.unbind(window, "resize", r), o.unbind(window, "scroll", g.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", Re), F.transform && o.unbind(r.scrollWrap, "click", r), q && o.unbind(window, f, r), _e("unbindEvents"), Bt(r.currItem, null, !0, r.destroy))
                }, destroy: function () {
                    _e("destroy"), Nt && clearTimeout(Nt), e.setAttribute("aria-hidden", "true"), e.className = O, x && clearInterval(x), o.unbind(r.scrollWrap, p, r), o.unbind(window, "scroll", r), ft(), Xe(), ke = null
                }, panTo: function (e, t, n) {
                    n || (e > J.min.x ? e = J.min.x : e < J.max.x && (e = J.max.x), t > J.min.y ? t = J.min.y : t < J.max.y && (t = J.max.y)), ce.x = e, ce.y = t, Ae()
                }, handleEvent: function (e) {
                    e = e || window.event, g[e.type] && g[e.type](e)
                }, goTo: function (e) {
                    var t = (e = we(e)) - c;
                    ge = t, c = e, r.currItem = Ht(c), he -= t, De(pe.x * he), Xe(), te = !1, r.updateCurrItem()
                }, next: function () {
                    r.goTo(c + 1)
                }, prev: function () {
                    r.goTo(c - 1)
                }, updateCurrZoomItem: function (e) {
                    if (e && _e("beforeChange", 0), k[1].el.children.length) {
                        var t = k[1].el.children[0];
                        ee = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                    } else ee = null;
                    J = r.currItem.bounds, v = m = r.currItem.initialZoomLevel, ce.x = J.center.x, ce.y = J.center.y, e && _e("afterChange")
                }, invalidateCurrItems: function () {
                    w = !0;
                    for (var e = 0; 3 > e; e++) k[e].item && (k[e].item.needsUpdate = !0)
                }, updateCurrItem: function (e) {
                    if (0 !== ge) {
                        var t, n = Math.abs(ge);
                        if (!(e && 2 > n)) {
                            r.currItem = Ht(c), be = !1, _e("beforeChange", ge), n >= 3 && (h += ge + (ge > 0 ? -3 : 3), n = 3);
                            for (var i = 0; n > i; i++) ge > 0 ? (t = k.shift(), k[2] = t, Pe((++h + 2) * pe.x, t.el.style), r.setContent(t, c - n + i + 1 + 1)) : (t = k.pop(), k.unshift(t), Pe(--h * pe.x, t.el.style), r.setContent(t, c + n - i - 1 - 1));
                            if (ee && 1 === Math.abs(ge)) {
                                var o = Ht(C);
                                o.initialZoomLevel !== m && ($t(o, de), Qt(o), Ie(o))
                            }
                            ge = 0, r.updateCurrZoomItem(), C = c, _e("afterChange")
                        }
                    }
                }, updateSize: function (t) {
                    if (!me && a.modal) {
                        var n = o.getScrollY();
                        if (R !== n && (e.style.top = n + "px", R = n), !t && ye.x === window.innerWidth && ye.y === window.innerHeight) return;
                        ye.x = window.innerWidth, ye.y = window.innerHeight, e.style.height = ye.y + "px"
                    }
                    if (de.x = r.scrollWrap.clientWidth, de.y = r.scrollWrap.clientHeight, Ve(), pe.x = de.x + Math.round(de.x * a.spacing), pe.y = de.y, De(pe.x * he), _e("beforeResize"), void 0 !== h) {
                        for (var i, s, l, u = 0; 3 > u; u++) i = k[u], Pe((u + h) * pe.x, i.el.style), l = c + u - 1, a.loop && Wt() > 2 && (l = we(l)), (s = Ht(l)) && (w || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(i, l), 1 === u && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && l >= 0 && r.setContent(i, l), s && s.container && ($t(s, de), Qt(s), Ie(s));
                        w = !1
                    }
                    v = m = r.currItem.initialZoomLevel, (J = r.currItem.bounds) && (ce.x = J.center.x, ce.y = J.center.y, Ae(!0)), _e("resize")
                }, zoomTo: function (e, t, n, i, r) {
                    t && (v = m, ct.x = Math.abs(t.x) - ce.x, ct.y = Math.abs(t.y) - ce.y, Oe(ue, ce));
                    var a = Fe(e, !1), s = {};
                    We("x", a, s, e), We("y", a, s, e);
                    var l = m, u = ce.x, c = ce.y;
                    Le(s);
                    var d = function (t) {
                        1 === t ? (m = e, ce.x = s.x, ce.y = s.y) : (m = (e - l) * t + l, ce.x = (s.x - u) * t + u, ce.y = (s.y - c) * t + c), r && r(t), Ae(1 === t)
                    };
                    n ? Qe("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, d) : d(1)
                }
            }, Ke = {}, Ze = {}, Je = {}, et = {}, tt = {}, nt = [], it = {}, ot = [], rt = {}, at = 0, st = {x: 0, y: 0},
            lt = 0, ut = {x: 0, y: 0}, ct = {x: 0, y: 0}, dt = {x: 0, y: 0}, ht = function (e, t) {
                return rt.x = Math.abs(e.x - t.x), rt.y = Math.abs(e.y - t.y), Math.sqrt(rt.x * rt.x + rt.y * rt.y)
            }, ft = function () {
                X && (M(X), X = null)
            }, pt = function () {
                q && (X = D(pt), At())
            }, gt = function (e, t) {
                return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : gt(e.parentNode, t))
            }, mt = {}, vt = function (e, t) {
                return mt.prevent = !gt(e.target, a.isClickableElement), _e("preventDragEvent", e, t, mt), mt.prevent
            }, yt = function (e, t) {
                return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
            }, bt = function (e, t, n) {
                n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
            }, xt = function () {
                var e = ce.y - r.currItem.initialPosition.y;
                return 1 - Math.abs(e / (de.y / 2))
            }, wt = {}, kt = {}, Ct = [], _t = function (e) {
                for (; Ct.length > 0;) Ct.pop();
                return I ? (se = 0, nt.forEach(function (e) {
                    0 === se ? Ct[0] = e : 1 === se && (Ct[1] = e), se++
                })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Ct[0] = yt(e.touches[0], wt), e.touches.length > 1 && (Ct[1] = yt(e.touches[1], kt))) : (wt.x = e.pageX, wt.y = e.pageY, wt.id = "", Ct[0] = wt), Ct
            }, Tt = function (e, t) {
                var n, i, o, s, l = ce[e] + t[e], u = t[e] > 0, c = ut.x + t.x, d = ut.x - it.x;
                return n = l > J.min[e] || l < J.max[e] ? a.panEndFriction : 1, l = ce[e] + t[e] * n, !a.allowPanToNext && m !== r.currItem.initialZoomLevel || (ee ? "h" !== ne || "x" !== e || Y || (u ? (l > J.min[e] && (n = a.panEndFriction, J.min[e], i = J.min[e] - ue[e]), (0 >= i || 0 > d) && Wt() > 1 ? (s = c, 0 > d && c > it.x && (s = it.x)) : J.min.x !== J.max.x && (o = l)) : (l < J.max[e] && (n = a.panEndFriction, J.max[e], i = ue[e] - J.max[e]), (0 >= i || d > 0) && Wt() > 1 ? (s = c, d > 0 && c < it.x && (s = it.x)) : J.min.x !== J.max.x && (o = l))) : s = c, "x" !== e) ? void(te || Q || m > r.currItem.fitRatio && (ce[e] += t[e] * n)) : (void 0 !== s && (De(s, !0), Q = s !== it.x), J.min.x !== J.max.x && (void 0 !== o ? ce.x = o : Q || (ce.x += t.x * n)), void 0 !== s)
            }, St = function (e) {
                if (!("mousedown" === e.type && e.button > 0)) {
                    if (jt) return void e.preventDefault();
                    if (!V || "mousedown" !== e.type) {
                        if (vt(e, !0) && e.preventDefault(), _e("pointerDown"), I) {
                            var t = o.arraySearch(nt, e.pointerId, "id");
                            0 > t && (t = nt.length), nt[t] = {x: e.pageX, y: e.pageY, id: e.pointerId}
                        }
                        var n = _t(e), i = n.length;
                        G = null, Xe(), q && 1 !== i || (q = ie = !0, o.bind(window, f, r), B = ae = oe = z = Q = U = $ = Y = !1, ne = null, _e("firstTouchStart", n), Oe(ue, ce), le.x = le.y = 0, Oe(et, n[0]), Oe(tt, et), it.x = pe.x * he, ot = [{
                            x: et.x,
                            y: et.y
                        }], H = j = Te(), Fe(m, !0), ft(), pt()), !K && i > 1 && !te && !Q && (v = m, Y = !1, K = $ = !0, le.y = le.x = 0, Oe(ue, ce), Oe(Ke, n[0]), Oe(Ze, n[1]), bt(Ke, Ze, dt), ct.x = Math.abs(dt.x) - ce.x, ct.y = Math.abs(dt.y) - ce.y, Z = ht(Ke, Ze))
                    }
                }
            }, Et = function (e) {
                if (e.preventDefault(), I) {
                    var t = o.arraySearch(nt, e.pointerId, "id");
                    if (t > -1) {
                        var n = nt[t];
                        n.x = e.pageX, n.y = e.pageY
                    }
                }
                if (q) {
                    var i = _t(e);
                    if (ne || U || K) G = i; else if (ut.x !== pe.x * he) ne = "h"; else {
                        var r = Math.abs(i[0].x - et.x) - Math.abs(i[0].y - et.y);
                        Math.abs(r) >= 10 && (ne = r > 0 ? "h" : "v", G = i)
                    }
                }
            }, At = function () {
                if (G) {
                    var e = G.length;
                    if (0 !== e) if (Oe(Ke, G[0]), Je.x = Ke.x - et.x, Je.y = Ke.y - et.y, K && e > 1) {
                        if (et.x = Ke.x, et.y = Ke.y, !Je.x && !Je.y && function (e, t) {
                                return e.x === t.x && e.y === t.y
                            }(G[1], Ze)) return;
                        Oe(Ze, G[1]), Y || (Y = !0, _e("zoomGestureStarted"));
                        var t = ht(Ke, Ze), n = Ot(t);
                        n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ae = !0);
                        var i = 1, o = je(), s = He();
                        if (o > n) if (a.pinchToClose && !ae && v <= r.currItem.initialZoomLevel) {
                            var l = 1 - (o - n) / (o / 1.2);
                            Se(l), _e("onPinchClose", l), oe = !0
                        } else (i = (o - n) / o) > 1 && (i = 1), n = o - i * (o / 3); else n > s && ((i = (n - s) / (6 * o)) > 1 && (i = 1), n = s + i * o);
                        0 > i && (i = 0), bt(Ke, Ze, st), le.x += st.x - dt.x, le.y += st.y - dt.y, Oe(dt, st), ce.x = Me("x", n), ce.y = Me("y", n), B = n > m, m = n, Ae()
                    } else {
                        if (!ne) return;
                        if (ie && (ie = !1, Math.abs(Je.x) >= 10 && (Je.x -= G[0].x - tt.x), Math.abs(Je.y) >= 10 && (Je.y -= G[0].y - tt.y)), et.x = Ke.x, et.y = Ke.y, 0 === Je.x && 0 === Je.y) return;
                        if ("v" === ne && a.closeOnVerticalDrag && "fit" === a.scaleMode && m === r.currItem.initialZoomLevel) {
                            le.y += Je.y, ce.y += Je.y;
                            var u = xt();
                            return z = !0, _e("onVerticalDrag", u), Se(u), void Ae()
                        }
                        (function (e, t, n) {
                            if (e - H > 50) {
                                var i = ot.length > 2 ? ot.shift() : {};
                                i.x = t, i.y = n, ot.push(i), H = e
                            }
                        })(Te(), Ke.x, Ke.y), U = !0, J = r.currItem.bounds, Tt("x", Je) || (Tt("y", Je), Le(ce), Ae())
                    }
                }
            }, It = function (e) {
                if (F.isOldAndroid) {
                    if (V && "mouseup" === e.type) return;
                    e.type.indexOf("touch") > -1 && (clearTimeout(V), V = setTimeout(function () {
                        V = 0
                    }, 600))
                }
                var t;
                if (_e("pointerUp"), vt(e, !1) && e.preventDefault(), I) {
                    var n = o.arraySearch(nt, e.pointerId, "id");
                    n > -1 && (t = nt.splice(n, 1)[0], navigator.pointerEnabled ? t.type = e.pointerType || "mouse" : (t.type = {
                        4: "mouse",
                        2: "touch",
                        3: "pen"
                    }[e.pointerType], t.type || (t.type = e.pointerType || "mouse")))
                }
                var i, s = _t(e), l = s.length;
                if ("mouseup" === e.type && (l = 0), 2 === l) return G = null, !0;
                1 === l && Oe(tt, s[0]), 0 !== l || ne || te || (t || ("mouseup" === e.type ? t = {
                    x: e.pageX,
                    y: e.pageY,
                    type: "mouse"
                } : e.changedTouches && e.changedTouches[0] && (t = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY,
                    type: "touch"
                })), _e("touchRelease", e, t));
                var u = -1;
                if (0 === l && (q = !1, o.unbind(window, f, r), ft(), K ? u = 0 : -1 !== lt && (u = Te() - lt)), lt = 1 === l ? Te() : -1, i = -1 !== u && 150 > u ? "zoom" : "swipe", K && 2 > l && (K = !1, 1 === l && (i = "zoomPointerUp"), _e("zoomGestureEnded")), G = null, U || Y || te || z) if (Xe(), W || (W = Pt()), W.calculateSwipeSpeed("x"), z) if (xt() < a.verticalDragRange) r.close(); else {
                    var c = ce.y, d = re;
                    Qe("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
                        ce.y = (r.currItem.initialPosition.y - c) * e + c, Se((1 - d) * e + d), Ae()
                    }), _e("onVerticalDrag", 1)
                } else {
                    if ((Q || te) && 0 === l) {
                        if (Mt(i, W)) return;
                        i = "zoomPointerUp"
                    }
                    if (!te) return "swipe" !== i ? void Lt() : void(!Q && m > r.currItem.fitRatio && Dt(W))
                }
            }, Pt = function () {
                var e, t, n = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function (i) {
                        ot.length > 1 ? (e = Te() - H + 50, t = ot[ot.length - 2][i]) : (e = Te() - j, t = tt[i]), n.lastFlickOffset[i] = et[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                    },
                    calculateOverBoundsAnimOffset: function (e, t) {
                        n.backAnimStarted[e] || (ce[e] > J.min[e] ? n.backAnimDestination[e] = J.min[e] : ce[e] < J.max[e] && (n.backAnimDestination[e] = J.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, Qe("bounceZoomPan" + e, ce[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
                            ce[e] = t, Ae()
                        }))))
                    },
                    calculateAnimOffset: function (e) {
                        n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, ce[e] += n.distanceOffset[e])
                    },
                    panAnimLoop: function () {
                        return qe.zoomPan && (qe.zoomPan.raf = D(n.panAnimLoop), n.now = Te(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Ae(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (ce.x = Math.round(ce.x), ce.y = Math.round(ce.y), Ae(), void Ye("zoomPan")) : void 0
                    }
                };
                return n
            }, Dt = function (e) {
                return e.calculateSwipeSpeed("y"), J = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (Ue("zoomPan"), e.lastNow = Te(), void e.panAnimLoop())
            }, Mt = function (e, t) {
                var n, i, s;
                if (te || (at = c), "swipe" === e) {
                    var l = et.x - tt.x, u = t.lastFlickDist.x < 10;
                    l > 30 && (u || t.lastFlickOffset.x > 20) ? i = -1 : -30 > l && (u || t.lastFlickOffset.x < -20) && (i = 1)
                }
                i && (0 > (c += i) ? (c = a.loop ? Wt() - 1 : 0, s = !0) : c >= Wt() && (c = a.loop ? 0 : Wt() - 1, s = !0), (!s || a.loop) && (ge += i, he -= i, n = !0));
                var d, h = pe.x * he, f = Math.abs(h - ut.x);
                return n || h > ut.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, at === c && (n = !1), te = !0, _e("mainScrollAnimStart"), Qe("mainScroll", ut.x, h, d, o.easing.cubic.out, De, function () {
                    Xe(), te = !1, at = -1, (n || at !== c) && r.updateCurrItem(), _e("mainScrollAnimComplete")
                }), n && r.updateCurrItem(!0), n
            }, Ot = function (e) {
                return 1 / Z * e * v
            }, Lt = function () {
                var e = m, t = je(), n = He();
                t > m ? e = t : m > n && (e = n);
                var i, a = re;
                return oe && !B && !ae && t > m ? (r.close(), !0) : (oe && (i = function (e) {
                    Se((1 - a) * e + a)
                }), r.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
            };
        xe("Gestures", {
            publicMethods: {
                initGestures: function () {
                    var e = function (e, t, n, i, o) {
                        _ = e + t, T = e + n, S = e + i, E = o ? e + o : ""
                    };
                    (I = F.pointerEvent) && F.touch && (F.touch = !1), I ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : F.touch ? (e("touch", "start", "move", "end", "cancel"), P = !0) : e("mouse", "down", "move", "up"), f = T + " " + S + " " + E, p = _, I && !P && (P = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = P, g[_] = St, g[T] = Et, g[S] = It, E && (g[E] = g[S]), F.touch && (p += " mousedown", f += " mousemove mouseup", g.mousedown = g[_], g.mousemove = g[T], g.mouseup = g[S]), P || (a.allowPanToNext = !1)
                }
            }
        });
        var Nt, Rt, Ft, jt, Ht, Wt, Bt = function (t, n, i, s) {
            var l;
            Nt && clearTimeout(Nt), jt = !0, Ft = !0, t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(c);
            var d = i ? a.hideAnimationDuration : a.showAnimationDuration, h = function () {
                Ye("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Se(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), _e("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), jt = !1
            };
            if (!d || !l || void 0 === l.x) return _e("initialZoom" + (i ? "Out" : "In")), m = t.initialZoomLevel, Oe(ce, t.initialPosition), Ae(), e.style.opacity = i ? 0 : 1, Se(1), void(d ? setTimeout(function () {
                h()
            }, d) : h());
            !function () {
                var n = u, s = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
                t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (m = l.w / t.w, ce.x = l.x, ce.y = l.y - L, r[s ? "template" : "bg"].style.opacity = .001, Ae()), Ue("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), s && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
                    o.addClass(e, "pswp--animate_opacity")
                }, 30)), Nt = setTimeout(function () {
                    if (_e("initialZoom" + (i ? "Out" : "In")), i) {
                        var r = l.w / t.w, a = {x: ce.x, y: ce.y}, u = m, c = re, f = function (t) {
                            1 === t ? (m = r, ce.x = l.x, ce.y = l.y - R) : (m = (r - u) * t + u, ce.x = (l.x - a.x) * t + a.x, ce.y = (l.y - R - a.y) * t + a.y), Ae(), s ? e.style.opacity = 1 - t : Se(c - t * c)
                        };
                        n ? Qe("initialZoom", 0, 1, d, o.easing.cubic.out, f, h) : (f(1), Nt = setTimeout(h, d + 20))
                    } else m = t.initialZoomLevel, Oe(ce, t.initialPosition), Ae(), Se(1), s ? e.style.opacity = 1 : Se(1), Nt = setTimeout(h, d + 20)
                }, i ? 25 : 90)
            }()
        }, zt = {}, Vt = [], qt = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function () {
                return Rt.length
            }
        }, $t = function (e, t, n) {
            if (e.src && !e.loadError) {
                var i = !n;
                if (i && (e.vGap || (e.vGap = {
                        top: 0,
                        bottom: 0
                    }), _e("parseVerticalMargin", e)), zt.x = t.x, zt.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                    var o = zt.x / e.w, r = zt.y / e.h;
                    e.fitRatio = r > o ? o : r;
                    var s = a.scaleMode;
                    "orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        }, max: {x: 0, y: 0}, min: {x: 0, y: 0}
                    })
                }
                if (!n) return;
                return function (e, t, n) {
                    var i = e.bounds;
                    i.center.x = Math.round((zt.x - t) / 2), i.center.y = Math.round((zt.y - n) / 2) + e.vGap.top, i.max.x = t > zt.x ? Math.round(zt.x - t) : i.center.x, i.max.y = n > zt.y ? Math.round(zt.y - n) + e.vGap.top : i.center.y, i.min.x = t > zt.x ? 0 : i.center.x, i.min.y = n > zt.y ? e.vGap.top : i.center.y
                }(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
            }
            return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
                center: {x: 0, y: 0},
                max: {x: 0, y: 0},
                min: {x: 0, y: 0}
            }, e.initialPosition = e.bounds.center, e.bounds
        }, Yt = function (e, t, n, i, o, a) {
            t.loadError || i && (t.imageAppended = !0, Qt(t, i, t === r.currItem && be), n.appendChild(i), a && setTimeout(function () {
                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
            }, 500))
        }, Ut = function (e) {
            e.loading = !0, e.loaded = !1;
            var t = e.img = o.createEl("pswp__img", "img"), n = function () {
                e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
            };
            return t.onload = n, t.onerror = function () {
                e.loadError = !0, n()
            }, t.src = e.src, t
        }, Xt = function (e, t) {
            return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = a.errorMsg.replace("%url%", e.src), !0) : void 0
        }, Qt = function (e, t, n) {
            if (e.src) {
                t || (t = e.container.lastChild);
                var i = n ? e.w : Math.round(e.w * e.fitRatio), o = n ? e.h : Math.round(e.h * e.fitRatio);
                e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
            }
        }, Gt = function () {
            if (Vt.length) {
                for (var e, t = 0; t < Vt.length; t++) (e = Vt[t]).holder.index === e.index && Yt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                Vt = []
            }
        };
        xe("Controller", {
            publicMethods: {
                lazyLoadItem: function (e) {
                    e = we(e);
                    var t = Ht(e);
                    t && (!t.loaded && !t.loading || w) && (_e("gettingData", e, t), t.src && Ut(t))
                }, initController: function () {
                    o.extend(a, qt, !0), r.items = Rt = n, Ht = r.getItemAt, Wt = a.getNumItemsFn, a.loop, Wt() < 3 && (a.loop = !1), Ce("beforeChange", function (e) {
                        var t, n = a.preload, i = null === e || e >= 0, o = Math.min(n[0], Wt()),
                            s = Math.min(n[1], Wt());
                        for (t = 1; (i ? s : o) >= t; t++) r.lazyLoadItem(c + t);
                        for (t = 1; (i ? o : s) >= t; t++) r.lazyLoadItem(c - t)
                    }), Ce("initialLayout", function () {
                        r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(c)
                    }), Ce("mainScrollAnimComplete", Gt), Ce("initialZoomInEnd", Gt), Ce("destroy", function () {
                        for (var e, t = 0; t < Rt.length; t++) (e = Rt[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                        Vt = null
                    })
                }, getItemAt: function (e) {
                    return e >= 0 && void 0 !== Rt[e] && Rt[e]
                }, allowProgressiveImg: function () {
                    return a.forceProgressiveLoading || !P || a.mouseUsed || screen.width > 1200
                }, setContent: function (e, t) {
                    a.loop && (t = we(t));
                    var n = r.getItemAt(e.index);
                    n && (n.container = null);
                    var i, l = r.getItemAt(t);
                    if (l) {
                        _e("gettingData", t, l), e.index = t, e.item = l;
                        var u = l.container = o.createEl("pswp__zoom-wrap");
                        if (!l.src && l.html && (l.html.tagName ? u.appendChild(l.html) : u.innerHTML = l.html), Xt(l), $t(l, de), !l.src || l.loadError || l.loaded) l.src && !l.loadError && ((i = o.createEl("pswp__img", "img")).style.opacity = 1, i.src = l.src, Qt(l, i), Yt(0, l, u, i)); else {
                            if (l.loadComplete = function (n) {
                                    if (s) {
                                        if (e && e.index === t) {
                                            if (Xt(n, !0)) return n.loadComplete = n.img = null, $t(n, de), Ie(n), void(e.index === c && r.updateCurrZoomItem());
                                            n.imageAppended ? !jt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : F.transform && (te || jt) ? Vt.push({
                                                item: n,
                                                baseDiv: u,
                                                img: n.img,
                                                index: t,
                                                holder: e,
                                                clearPlaceholder: !0
                                            }) : Yt(0, n, u, n.img, 0, !0)
                                        }
                                        n.loadComplete = null, n.img = null, _e("imageLoadComplete", t, n)
                                    }
                                }, o.features.transform) {
                                var d = "pswp__img pswp__img--placeholder";
                                d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                var h = o.createEl(d, l.msrc ? "img" : "");
                                l.msrc && (h.src = l.msrc), Qt(l, h), u.appendChild(h), l.placeholder = h
                            }
                            l.loading || Ut(l), r.allowProgressiveImg() && (!Ft && F.transform ? Vt.push({
                                item: l,
                                baseDiv: u,
                                img: l.img,
                                index: t,
                                holder: e
                            }) : Yt(0, l, u, l.img, 0, !0))
                        }
                        Ft || t !== c ? Ie(l) : (ee = u.style, Bt(l, i || l.img)), e.el.innerHTML = "", e.el.appendChild(u)
                    } else e.el.innerHTML = ""
                }, cleanSlide: function (e) {
                    e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });
        var Kt, Zt, Jt = {}, en = function (e, t, n) {
            var i = document.createEvent("CustomEvent"),
                o = {origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch"};
            i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
        };
        xe("Tap", {
            publicMethods: {
                initTap: function () {
                    Ce("firstTouchStart", r.onTapStart), Ce("touchRelease", r.onTapRelease), Ce("destroy", function () {
                        Jt = {}, Kt = null
                    })
                }, onTapStart: function (e) {
                    e.length > 1 && (clearTimeout(Kt), Kt = null)
                }, onTapRelease: function (e, t) {
                    if (t && !U && !$ && !$e) {
                        var n = t;
                        if (Kt && (clearTimeout(Kt), Kt = null, function (e, t) {
                                return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                            }(n, Jt))) return void _e("doubleTap", n);
                        if ("mouse" === t.type) return void en(e, t, "mouse");
                        if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap")) return void en(e, t);
                        Oe(Jt, n), Kt = setTimeout(function () {
                            en(e, t), Kt = null
                        }, 300)
                    }
                }
            }
        }), xe("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function () {
                    N || (P ? Ce("mouseUsed", function () {
                        r.setupDesktopZoom()
                    }) : r.setupDesktopZoom(!0))
                }, setupDesktopZoom: function (t) {
                    Zt = {};
                    var n = "wheel mousewheel DOMMouseScroll";
                    Ce("bindEvents", function () {
                        o.bind(e, n, r.handleMouseWheel)
                    }), Ce("unbindEvents", function () {
                        Zt && o.unbind(e, n, r.handleMouseWheel)
                    }), r.mouseZoomedIn = !1;
                    var i, a = function () {
                        r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > m ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s()
                    }, s = function () {
                        i && (o.removeClass(e, "pswp--dragging"), i = !1)
                    };
                    Ce("resize", a), Ce("afterChange", a), Ce("pointerDown", function () {
                        r.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
                    }), Ce("pointerUp", s), t || a()
                }, handleMouseWheel: function (e) {
                    if (m <= r.currItem.fitRatio) return a.modal && (!a.closeOnScroll || $e || q ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (u = !0, r.close())), !0;
                    if (e.stopPropagation(), Zt.x = 0, "deltaX" in e) 1 === e.deltaMode ? (Zt.x = 18 * e.deltaX, Zt.y = 18 * e.deltaY) : (Zt.x = e.deltaX, Zt.y = e.deltaY); else if ("wheelDelta" in e) e.wheelDeltaX && (Zt.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? Zt.y = -.16 * e.wheelDeltaY : Zt.y = -.16 * e.wheelDelta; else {
                        if (!("detail" in e)) return;
                        Zt.y = e.detail
                    }
                    Fe(m, !0);
                    var t = ce.x - Zt.x, n = ce.y - Zt.y;
                    (a.modal || t <= J.min.x && t >= J.max.x && n <= J.min.y && n >= J.max.y) && e.preventDefault(), r.panTo(t, n)
                }, toggleDesktopZoom: function (t) {
                    t = t || {x: de.x / 2 + fe.x, y: de.y / 2 + fe.y};
                    var n = a.getDoubleTapZoom(!0, r.currItem), i = m === n;
                    r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                }
            }
        });
        var tn, nn, on, rn, an, sn, ln, un, cn, dn, hn, fn, pn = {history: !0, galleryUID: 1}, gn = function () {
            return hn.hash.substring(1)
        }, mn = function () {
            tn && clearTimeout(tn), on && clearTimeout(on)
        }, vn = function () {
            var e = gn(), t = {};
            if (e.length < 5) return t;
            var n, i = e.split("&");
            for (n = 0; n < i.length; n++) if (i[n]) {
                var o = i[n].split("=");
                o.length < 2 || (t[o[0]] = o[1])
            }
            if (a.galleryPIDs) {
                var r = t.pid;
                for (t.pid = 0, n = 0; n < Rt.length; n++) if (Rt[n].pid === r) {
                    t.pid = n;
                    break
                }
            } else t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0), t
        }, yn = function () {
            if (on && clearTimeout(on), $e || q) on = setTimeout(yn, 500); else {
                rn ? clearTimeout(nn) : rn = !0;
                var e = c + 1, t = Ht(c);
                t.hasOwnProperty("pid") && (e = t.pid);
                var n = ln + "&gid=" + a.galleryUID + "&pid=" + e;
                un || -1 === hn.hash.indexOf(n) && (dn = !0);
                var i = hn.href.split("#")[0] + "#" + n;
                fn ? "#" + n !== window.location.hash && history[un ? "replaceState" : "pushState"]("", document.title, i) : un ? hn.replace(i) : hn.hash = n, un = !0, nn = setTimeout(function () {
                    rn = !1
                }, 60)
            }
        };
        xe("History", {
            publicMethods: {
                initHistory: function () {
                    if (o.extend(a, pn, !0), a.history) {
                        hn = window.location, dn = !1, cn = !1, un = !1, ln = gn(), fn = "pushState" in history, ln.indexOf("gid=") > -1 && (ln = (ln = ln.split("&gid=")[0]).split("?gid=")[0]), Ce("afterChange", r.updateURL), Ce("unbindEvents", function () {
                            o.unbind(window, "hashchange", r.onHashChange)
                        });
                        var e = function () {
                            sn = !0, cn || (dn ? history.back() : ln ? hn.hash = ln : fn ? history.pushState("", document.title, hn.pathname + hn.search) : hn.hash = ""), mn()
                        };
                        Ce("unbindEvents", function () {
                            u && e()
                        }), Ce("destroy", function () {
                            sn || e()
                        }), Ce("firstUpdate", function () {
                            c = vn().pid
                        });
                        var t = ln.indexOf("pid=");
                        t > -1 && "&" === (ln = ln.substring(0, t)).slice(-1) && (ln = ln.slice(0, -1)), setTimeout(function () {
                            s && o.bind(window, "hashchange", r.onHashChange)
                        }, 40)
                    }
                }, onHashChange: function () {
                    return gn() === ln ? (cn = !0, void r.close()) : void(rn || (an = !0, r.goTo(vn().pid), an = !1))
                }, updateURL: function () {
                    mn(), an || (un ? tn = setTimeout(yn, 800) : yn())
                }
            }
        }), o.extend(r, Ge)
    }
}), function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function () {
    "use strict";
    return function (e, t) {
        var n, i, o, r, a, s, l, u, c, d, h, f, p, g, m, v, y, b, x = this, w = !1, k = !0, C = !0, _ = {
            barsSize: {top: 44, bottom: "auto"},
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function (e, t) {
                return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
            getImageURLForShare: function () {
                return e.currItem.src || ""
            },
            getPageURLForShare: function () {
                return window.location.href
            },
            getTextForShare: function () {
                return e.currItem.title || ""
            },
            indexIndicatorSep: " / ",
            fitControlsWidth: 1200
        }, T = function (e) {
            if (v) return !0;
            e = e || window.event, m.timeToIdle && m.mouseUsed && !c && N();
            for (var n, i, o = (e.target || e.srcElement).getAttribute("class") || "", r = 0; r < H.length; r++) (n = H[r]).onTap && o.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
            if (i) {
                e.stopPropagation && e.stopPropagation(), v = !0;
                var a = t.features.isOldAndroid ? 600 : 30;
                setTimeout(function () {
                    v = !1
                }, a)
            }
        }, S = function () {
            return !e.likelyTouchDevice || m.mouseUsed || screen.width > m.fitControlsWidth
        }, E = function (e, n, i) {
            t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
        }, A = function () {
            var e = 1 === m.getNumItemsFn();
            e !== g && (E(i, "ui--one-slide", e), g = e)
        }, I = function () {
            E(l, "share-modal--hidden", C)
        }, P = function () {
            return (C = !C) ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
                C && I()
            }, 300)) : (I(), setTimeout(function () {
                C || t.addClass(l, "pswp__share-modal--fade-in")
            }, 30)), C || M(), !1
        }, D = function (t) {
            var n = (t = t || window.event).target || t.srcElement;
            return e.shout("shareLinkClick", t, n), !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), C || P(), 1))
        }, M = function () {
            for (var e, t, n, i, o = "", r = 0; r < m.shareButtons.length; r++) e = m.shareButtons[r], t = m.getImageURLForShare(e), n = m.getPageURLForShare(e), i = m.getTextForShare(e), o += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(i)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", m.parseShareButtonOut && (o = m.parseShareButtonOut(e, o));
            l.children[0].innerHTML = o, l.children[0].onclick = D
        }, O = function (e) {
            for (var n = 0; n < m.closeElClasses.length; n++) if (t.hasClass(e, "pswp__" + m.closeElClasses[n])) return !0
        }, L = 0, N = function () {
            clearTimeout(b), L = 0, c && x.setIdle(!1)
        }, R = function (e) {
            var t = (e = e || window.event).relatedTarget || e.toElement;
            t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function () {
                x.setIdle(!0)
            }, m.timeToIdleOutside))
        }, F = function (e) {
            f !== e && (E(h, "preloader--active", !e), f = e)
        }, j = function (e) {
            var n = e.vGap;
            if (S()) {
                var a = m.barsSize;
                if (m.captionEl && "auto" === a.bottom) if (r || ((r = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")), i.insertBefore(r, o), t.addClass(i, "pswp__ui--fit")), m.addCaptionHTMLFn(e, r, !0)) {
                    var s = r.clientHeight;
                    n.bottom = parseInt(s, 10) || 44
                } else n.bottom = a.top; else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                n.top = a.top
            } else n.top = n.bottom = 0
        }, H = [{
            name: "caption", option: "captionEl", onInit: function (e) {
                o = e
            }
        }, {
            name: "share-modal", option: "shareEl", onInit: function (e) {
                l = e
            }, onTap: function () {
                P()
            }
        }, {
            name: "button--share", option: "shareEl", onInit: function (e) {
                s = e
            }, onTap: function () {
                P()
            }
        }, {name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom}, {
            name: "counter",
            option: "counterEl",
            onInit: function (e) {
                a = e
            }
        }, {name: "button--close", option: "closeEl", onTap: e.close}, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: e.prev
        }, {name: "button--arrow--right", option: "arrowEl", onTap: e.next}, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
                n.isFullscreen() ? n.exit() : n.enter()
            }
        }, {
            name: "preloader", option: "preloaderEl", onInit: function (e) {
                h = e
            }
        }];
        x.init = function () {
            t.extend(e.options, _, !0), m = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, function () {
                var e;
                d("onVerticalDrag", function (e) {
                    k && .95 > e ? x.hideControls() : !k && e >= .95 && x.showControls()
                }), d("onPinchClose", function (t) {
                    k && .9 > t ? (x.hideControls(), e = !0) : e && !k && t > .9 && x.showControls()
                }), d("zoomGestureEnded", function () {
                    (e = !1) && !k && x.showControls()
                })
            }(), d("beforeChange", x.update), d("doubleTap", function (t) {
                var n = e.currItem.initialZoomLevel;
                e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(m.getDoubleTapZoom(!1, e.currItem), t, 333)
            }), d("preventDragEvent", function (e, t, n) {
                var i = e.target || e.srcElement;
                i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
            }), d("bindEvents", function () {
                t.bind(i, "pswpTap click", T), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
            }), d("unbindEvents", function () {
                C || P(), y && clearInterval(y), t.unbind(document, "mouseout", R), t.unbind(document, "mousemove", N), t.unbind(i, "pswpTap click", T), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (m.hideAnimationDuration = 0, n.exit()), n = null)
            }), d("destroy", function () {
                m.captionEl && (r && i.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
            }), m.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function () {
                m.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
            }), d("initialZoomOut", function () {
                t.addClass(i, "pswp__ui--hidden")
            }), d("parseVerticalMargin", j), function () {
                var e, n, o, r = function (i) {
                    if (i) for (var r = i.length, a = 0; r > a; a++) {
                        e = i[a], n = e.className;
                        for (var s = 0; s < H.length; s++) o = H[s], n.indexOf("pswp__" + o.name) > -1 && (m[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                    }
                };
                r(i.children);
                var a = t.getChildByClass(i, "pswp__top-bar");
                a && r(a.children)
            }(), m.shareEl && s && l && (C = !0), A(), m.timeToIdle && d("mouseUsed", function () {
                t.bind(document, "mousemove", N), t.bind(document, "mouseout", R), y = setInterval(function () {
                    2 == ++L && x.setIdle(!0)
                }, m.timeToIdle / 2)
            }), m.fullscreenEl && !t.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")), m.preloaderEl && (F(!0), d("beforeChange", function () {
                clearTimeout(p), p = setTimeout(function () {
                    e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && F(!1) : F(!0)
                }, m.loadingIndicatorDelay)
            }), d("imageLoadComplete", function (t, n) {
                e.currItem === n && F(!0)
            }))
        }, x.setIdle = function (e) {
            c = e, E(i, "ui--idle", e)
        }, x.update = function () {
            k && e.currItem ? (x.updateIndexIndicator(), m.captionEl && (m.addCaptionHTMLFn(e.currItem, o), E(o, "caption--empty", !e.currItem.title)), w = !0) : w = !1, C || P(), A()
        }, x.updateFullscreen = function (i) {
            i && setTimeout(function () {
                e.setScrollOffset(0, t.getScrollY())
            }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, x.updateIndexIndicator = function () {
            m.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + m.indexIndicatorSep + m.getNumItemsFn())
        }, x.onGlobalTap = function (n) {
            var i = (n = n || window.event).target || n.srcElement;
            if (!v) if (n.detail && "mouse" === n.detail.pointerType) {
                if (O(i)) return void e.close();
                t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? m.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
            } else if (m.tapToToggleControls && (k ? x.hideControls() : x.showControls()), m.tapToClose && (t.hasClass(i, "pswp__img") || O(i))) return void e.close()
        }, x.onMouseOver = function (e) {
            var t = (e = e || window.event).target || e.srcElement;
            E(i, "ui--over-close", O(t))
        }, x.hideControls = function () {
            t.addClass(i, "pswp__ui--hidden"), k = !1
        }, x.showControls = function () {
            k = !0, w || x.update(), t.removeClass(i, "pswp__ui--hidden")
        }, x.supportsFullscreen = function () {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, x.getFullscreenAPI = function () {
            var t, n = document.documentElement, i = "fullscreenchange";
            return n.requestFullscreen ? t = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: i
            } : n.mozRequestFullScreen ? t = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + i
            } : n.webkitRequestFullscreen ? t = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + i
            } : n.msRequestFullscreen && (t = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), t && (t.enter = function () {
                return u = m.closeOnScroll, m.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, t.exit = function () {
                return m.closeOnScroll = u, document[this.exitK]()
            }, t.isFullscreen = function () {
                return document[this.elementK]
            }), t
        }
    }
});
var initPhotoSwipeFromDOM = function (e) {
    for (var t = function (e) {
        (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1;
        var t = function e(t, n) {
            return t && (n(t) ? t : e(t.parentNode, n))
        }(e.target || e.srcElement, function (e) {
            return e.tagName && "FIGURE" === e.tagName.toUpperCase()
        });
        if (t) {
            for (var i, o = t.parentNode, r = t.parentNode.childNodes, a = r.length, s = 0, l = 0; l < a; l++) if (1 === r[l].nodeType) {
                if (r[l] === t) {
                    i = s;
                    break
                }
                s++
            }
            return i >= 0 && n(i, o), !1
        }
    }, n = function (e, t, n, i) {
        var o, r, a = document.querySelectorAll(".pswp")[0];
        if (r = function (e) {
                for (var t, n, i, o, r = e.childNodes, a = r.length, s = [], l = 0; l < a; l++) 1 === (t = r[l]).nodeType && (i = (n = t.children[0]).getAttribute("data-size").split("x"), o = {
                    src: n.getAttribute("href"),
                    w: parseInt(i[0], 10),
                    h: parseInt(i[1], 10)
                }, t.children.length > 1 && (o.title = t.children[1].innerHTML), n.children.length > 0 && (o.msrc = n.children[0].getAttribute("src")), o.el = t, s.push(o));
                return s
            }(t), o = {
                galleryUID: t.getAttribute("data-pswp-uid"), getThumbBoundsFn: function (e) {
                    var t = r[e].el.getElementsByTagName("img")[0],
                        n = window.pageYOffset || document.documentElement.scrollTop, i = t.getBoundingClientRect();
                    return {x: i.left, y: i.top + n, w: i.width}
                }
            }, i) if (o.galleryPIDs) {
            for (var s = 0; s < r.length; s++) if (r[s].pid == e) {
                o.index = s;
                break
            }
        } else o.index = parseInt(e, 10) - 1; else o.index = parseInt(e, 10);
        isNaN(o.index) || (n && (o.showAnimationDuration = 0), new PhotoSwipe(a, PhotoSwipeUI_Default, r, o).init())
    }, i = document.querySelectorAll(e), o = 0, r = i.length; o < r; o++) i[o].setAttribute("data-pswp-uid", o + 1), i[o].onclick = t;
    var a = function () {
        var e = window.location.hash.substring(1), t = {};
        if (e.length < 5) return t;
        for (var n = e.split("&"), i = 0; i < n.length; i++) if (n[i]) {
            var o = n[i].split("=");
            o.length < 2 || (t[o[0]] = o[1])
        }
        return t.gid && (t.gid = parseInt(t.gid, 10)), t
    }();
    a.pid && a.gid && n(a.pid, i[a.gid - 1], !0, !0)
};
initPhotoSwipeFromDOM(".mdb-lightbox"), function (e) {
    e.fn.sticky = function (t) {
        var n = e.extend({}, {topSpacing: 0, zIndex: "", stopper: ".sticky-stopper", stickyClass: !1}, t);
        var i = "number" == typeof n.zIndex;
        var o = 0 < e(n.stopper).length || "number" == typeof n.stopper;
        return this.each(function () {
            var t = e(this), r = t.outerHeight(), a = t.outerWidth(), s = n.topSpacing, l = n.zIndex,
                u = t.offset().top - s, c = e("<div></div>").width(a).height(r).addClass("sticky-placeholder"),
                d = n.stopper, h = e(window);

            function f() {
                var a = h.scrollTop(), f = d, p = t.parent().width();
                (c.width(p), o && "string" == typeof d) && (f = e(d).offset().top - r - s);
                if (u < a) {
                    if (n.stickyClass && t.addClass(n.stickyClass), t.after(c).css({
                            position: "fixed",
                            top: s,
                            width: p
                        }), i && t.css({zIndex: l}), o && f < a) {
                        var g = f - a + s;
                        t.css({top: g})
                    }
                } else n.stickyClass && t.removeClass(n.stickyClass), t.css({
                    position: "static",
                    top: null,
                    left: null,
                    width: "auto"
                }), c.remove()
            }

            h.innerHeight() > r && (h.bind("scroll", f), h.bind("load", f), h.bind("resize", f))
        })
    }
}(jQuery), function e(t, n, i) {
    function o(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(a, !0);
                if (r) return r(a, !0);
                var u = new Error("Cannot find module '" + a + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var c = n[a] = {exports: {}};
            t[a][0].call(c.exports, function (e) {
                var n = t[a][1][e];
                return o(n || e)
            }, c, c.exports, e, t, n, i)
        }
        return n[a].exports
    }

    for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
    return o
}({
    1: [function (e, t, n) {
        "use strict";
        var i = e("../main");
        "function" == typeof define && define.amd ? define(i) : (window.PerfectScrollbar = i, void 0 === window.Ps && (window.Ps = i))
    }, {"../main": 7}],
    2: [function (e, t, n) {
        "use strict";
        n.add = function (e, t) {
            e.classList ? e.classList.add(t) : function (e, t) {
                var n = e.className.split(" ");
                n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")
            }(e, t)
        }, n.remove = function (e, t) {
            e.classList ? e.classList.remove(t) : function (e, t) {
                var n = e.className.split(" "), i = n.indexOf(t);
                i >= 0 && n.splice(i, 1), e.className = n.join(" ")
            }(e, t)
        }, n.list = function (e) {
            return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
        }
    }, {}],
    3: [function (e, t, n) {
        "use strict";
        var i = {
            e: function (e, t) {
                var n = document.createElement(e);
                return n.className = t, n
            }, appendTo: function (e, t) {
                return t.appendChild(e), e
            }
        };
        i.css = function (e, t, n) {
            return "object" == typeof t ? function (e, t) {
                for (var n in t) {
                    var i = t[n];
                    "number" == typeof i && (i = i.toString() + "px"), e.style[n] = i
                }
                return e
            }(e, t) : void 0 === n ? function (e, t) {
                return window.getComputedStyle(e)[t]
            }(e, t) : function (e, t, n) {
                return "number" == typeof n && (n = n.toString() + "px"), e.style[t] = n, e
            }(e, t, n)
        }, i.matches = function (e, t) {
            return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
        }, i.remove = function (e) {
            void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
        }, i.queryChildren = function (e, t) {
            return Array.prototype.filter.call(e.childNodes, function (e) {
                return i.matches(e, t)
            })
        }, t.exports = i
    }, {}],
    4: [function (e, t, n) {
        "use strict";
        var i = function (e) {
            this.element = e, this.events = {}
        };
        i.prototype.bind = function (e, t) {
            void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
        }, i.prototype.unbind = function (e, t) {
            var n = void 0 !== t;
            this.events[e] = this.events[e].filter(function (i) {
                return !(!n || i === t) || (this.element.removeEventListener(e, i, !1), !1)
            }, this)
        }, i.prototype.unbindAll = function () {
            for (var e in this.events) this.unbind(e)
        };
        var o = function () {
            this.eventElements = []
        };
        o.prototype.eventElement = function (e) {
            var t = this.eventElements.filter(function (t) {
                return t.element === e
            })[0];
            return void 0 === t && (t = new i(e), this.eventElements.push(t)), t
        }, o.prototype.bind = function (e, t, n) {
            this.eventElement(e).bind(t, n)
        }, o.prototype.unbind = function (e, t, n) {
            this.eventElement(e).unbind(t, n)
        }, o.prototype.unbindAll = function () {
            for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
        }, o.prototype.once = function (e, t, n) {
            var i = this.eventElement(e), o = function (e) {
                i.unbind(t, o), n(e)
            };
            i.bind(t, o)
        }, t.exports = o
    }, {}],
    5: [function (e, t, n) {
        "use strict";
        t.exports = function () {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            return function () {
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
        }()
    }, {}],
    6: [function (e, t, n) {
        "use strict";

        function i(e) {
            return function (t, n) {
                e(t, "ps--in-scrolling"), void 0 !== n ? e(t, "ps--" + n) : (e(t, "ps--x"), e(t, "ps--y"))
            }
        }

        var o = e("./class"), r = e("./dom"), a = n.toInt = function (e) {
            return parseInt(e, 10) || 0
        }, s = n.clone = function (e) {
            if (e) {
                if (Array.isArray(e)) return e.map(s);
                if ("object" == typeof e) {
                    var t = {};
                    for (var n in e) t[n] = s(e[n]);
                    return t
                }
                return e
            }
            return null
        };
        n.extend = function (e, t) {
            var n = s(e);
            for (var i in t) n[i] = s(t[i]);
            return n
        }, n.isEditable = function (e) {
            return r.matches(e, "input,[contenteditable]") || r.matches(e, "select,[contenteditable]") || r.matches(e, "textarea,[contenteditable]") || r.matches(e, "button,[contenteditable]")
        }, n.removePsClasses = function (e) {
            for (var t = o.list(e), n = 0; n < t.length; n++) {
                var i = t[n];
                0 === i.indexOf("ps-") && o.remove(e, i)
            }
        }, n.outerWidth = function (e) {
            return a(r.css(e, "width")) + a(r.css(e, "paddingLeft")) + a(r.css(e, "paddingRight")) + a(r.css(e, "borderLeftWidth")) + a(r.css(e, "borderRightWidth"))
        }, n.startScrolling = i(o.add), n.stopScrolling = i(o.remove), n.env = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
        }
    }, {"./class": 2, "./dom": 3}],
    7: [function (e, t, n) {
        "use strict";
        var i = e("./plugin/destroy"), o = e("./plugin/initialize"), r = e("./plugin/update");
        t.exports = {initialize: o, update: r, destroy: i}
    }, {"./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21}],
    8: [function (e, t, n) {
        "use strict";
        t.exports = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        }
    }, {}],
    9: [function (e, t, n) {
        "use strict";
        var i = e("../lib/helper"), o = e("../lib/dom"), r = e("./instances");
        t.exports = function (e) {
            var t = r.get(e);
            t && (t.event.unbindAll(), o.remove(t.scrollbarX), o.remove(t.scrollbarY), o.remove(t.scrollbarXRail), o.remove(t.scrollbarYRail), i.removePsClasses(e), r.remove(e))
        }
    }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18}],
    10: [function (e, t, n) {
        "use strict";
        var i = e("../instances"), o = e("../update-geometry"), r = e("../update-scroll");
        t.exports = function (e) {
            !function (e, t) {
                function n(e) {
                    return e.getBoundingClientRect()
                }

                var i = function (e) {
                    e.stopPropagation()
                };
                t.event.bind(t.scrollbarY, "click", i), t.event.bind(t.scrollbarYRail, "click", function (i) {
                    var a = i.pageY - window.pageYOffset - n(t.scrollbarYRail).top > t.scrollbarYTop ? 1 : -1;
                    r(e, "top", e.scrollTop + a * t.containerHeight), o(e), i.stopPropagation()
                }), t.event.bind(t.scrollbarX, "click", i), t.event.bind(t.scrollbarXRail, "click", function (i) {
                    var a = i.pageX - window.pageXOffset - n(t.scrollbarXRail).left > t.scrollbarXLeft ? 1 : -1;
                    r(e, "left", e.scrollLeft + a * t.containerWidth), o(e), i.stopPropagation()
                })
            }(e, i.get(e))
        }
    }, {"../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    11: [function (e, t, n) {
        "use strict";
        var i = e("../../lib/helper"), o = e("../../lib/dom"), r = e("../instances"), a = e("../update-geometry"),
            s = e("../update-scroll");
        t.exports = function (e) {
            var t = r.get(e);
            (function (e, t) {
                function n(n) {
                    var o = r + n * t.railXRatio,
                        a = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                    t.scrollbarXLeft = o < 0 ? 0 : o > a ? a : o;
                    var l = i.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                    s(e, "left", l)
                }

                var r = null, l = null, u = function (t) {
                    n(t.pageX - l), a(e), t.stopPropagation(), t.preventDefault()
                }, c = function () {
                    i.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", u)
                };
                t.event.bind(t.scrollbarX, "mousedown", function (n) {
                    l = n.pageX, r = i.toInt(o.css(t.scrollbarX, "left")) * t.railXRatio, i.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", u), t.event.once(t.ownerDocument, "mouseup", c), n.stopPropagation(), n.preventDefault()
                })
            })(e, t), function (e, t) {
                function n(n) {
                    var o = r + n * t.railYRatio,
                        a = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                    t.scrollbarYTop = o < 0 ? 0 : o > a ? a : o;
                    var l = i.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                    s(e, "top", l)
                }

                var r = null, l = null, u = function (t) {
                    n(t.pageY - l), a(e), t.stopPropagation(), t.preventDefault()
                }, c = function () {
                    i.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", u)
                };
                t.event.bind(t.scrollbarY, "mousedown", function (n) {
                    l = n.pageY, r = i.toInt(o.css(t.scrollbarY, "top")) * t.railYRatio, i.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", u), t.event.once(t.ownerDocument, "mouseup", c), n.stopPropagation(), n.preventDefault()
                })
            }(e, t)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function (e, t, n) {
        "use strict";

        function i(e, t) {
            var n = !1;
            t.event.bind(e, "mouseenter", function () {
                n = !0
            }), t.event.bind(e, "mouseleave", function () {
                n = !1
            });
            t.event.bind(t.ownerDocument, "keydown", function (i) {
                if (!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented)) {
                    var a = r.matches(t.scrollbarX, ":focus") || r.matches(t.scrollbarY, ":focus");
                    if (n || a) {
                        var u = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (u) {
                            if ("IFRAME" === u.tagName) u = u.contentDocument.activeElement; else for (; u.shadowRoot;) u = u.shadowRoot.activeElement;
                            if (o.isEditable(u)) return
                        }
                        var c = 0, d = 0;
                        switch (i.which) {
                            case 37:
                                c = i.metaKey ? -t.contentWidth : i.altKey ? -t.containerWidth : -30;
                                break;
                            case 38:
                                d = i.metaKey ? t.contentHeight : i.altKey ? t.containerHeight : 30;
                                break;
                            case 39:
                                c = i.metaKey ? t.contentWidth : i.altKey ? t.containerWidth : 30;
                                break;
                            case 40:
                                d = i.metaKey ? -t.contentHeight : i.altKey ? -t.containerHeight : -30;
                                break;
                            case 33:
                                d = 90;
                                break;
                            case 32:
                                d = i.shiftKey ? 90 : -90;
                                break;
                            case 34:
                                d = -90;
                                break;
                            case 35:
                                d = i.ctrlKey ? -t.contentHeight : -t.containerHeight;
                                break;
                            case 36:
                                d = i.ctrlKey ? e.scrollTop : t.containerHeight;
                                break;
                            default:
                                return
                        }
                        l(e, "top", e.scrollTop - d), l(e, "left", e.scrollLeft + c), s(e), function (n, i) {
                            var o = e.scrollTop;
                            if (0 === n) {
                                if (!t.scrollbarYActive) return !1;
                                if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
                            }
                            var r = e.scrollLeft;
                            if (0 === i) {
                                if (!t.scrollbarXActive) return !1;
                                if (0 === r && n < 0 || r >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
                            }
                            return !0
                        }(c, d) && i.preventDefault()
                    }
                }
            })
        }

        var o = e("../../lib/helper"), r = e("../../lib/dom"), a = e("../instances"), s = e("../update-geometry"),
            l = e("../update-scroll");
        t.exports = function (e) {
            i(e, a.get(e))
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13: [function (e, t, n) {
        "use strict";

        function i(e, t) {
            function n(n) {
                var o = function (e) {
                    var t = e.deltaX, n = -1 * e.deltaY;
                    return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
                }(n), s = o[0], l = o[1];
                (function (t, n) {
                    var i = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                    if (i) {
                        var o = window.getComputedStyle(i);
                        if (![o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) return !1;
                        var r = i.scrollHeight - i.clientHeight;
                        if (r > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === r && n < 0)) return !0;
                        var a = i.scrollLeft - i.clientWidth;
                        if (a > 0 && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === a && t > 0)) return !0
                    }
                    return !1
                })(s, l) || (i = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (a(e, "top", l ? e.scrollTop - l * t.settings.wheelSpeed : e.scrollTop + s * t.settings.wheelSpeed), i = !0) : t.scrollbarXActive && !t.scrollbarYActive && (a(e, "left", s ? e.scrollLeft + s * t.settings.wheelSpeed : e.scrollLeft - l * t.settings.wheelSpeed), i = !0) : (a(e, "top", e.scrollTop - l * t.settings.wheelSpeed), a(e, "left", e.scrollLeft + s * t.settings.wheelSpeed)), r(e), (i = i || function (n, i) {
                    var o = e.scrollTop;
                    if (0 === n) {
                        if (!t.scrollbarYActive) return !1;
                        if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
                    }
                    var r = e.scrollLeft;
                    if (0 === i) {
                        if (!t.scrollbarXActive) return !1;
                        if (0 === r && n < 0 || r >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
                    }
                    return !0
                }(s, l)) && (n.stopPropagation(), n.preventDefault()))
            }

            var i = !1;
            void 0 !== window.onwheel ? t.event.bind(e, "wheel", n) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", n)
        }

        var o = e("../instances"), r = e("../update-geometry"), a = e("../update-scroll");
        t.exports = function (e) {
            i(e, o.get(e))
        }
    }, {"../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    14: [function (e, t, n) {
        "use strict";
        var i = e("../instances"), o = e("../update-geometry");
        t.exports = function (e) {
            !function (e, t) {
                t.event.bind(e, "scroll", function () {
                    o(e)
                })
            }(e, i.get(e))
        }
    }, {"../instances": 18, "../update-geometry": 19}],
    15: [function (e, t, n) {
        "use strict";

        function i(e, t) {
            function n() {
                l || (l = setInterval(function () {
                    return r.get(e) ? (s(e, "top", e.scrollTop + u.top), s(e, "left", e.scrollLeft + u.left), void a(e)) : void clearInterval(l)
                }, 50))
            }

            function i() {
                l && (clearInterval(l), l = null), o.stopScrolling(e)
            }

            var l = null, u = {top: 0, left: 0}, c = !1;
            t.event.bind(t.ownerDocument, "selectionchange", function () {
                e.contains(function () {
                    var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                    return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
                }()) ? c = !0 : (c = !1, i())
            }), t.event.bind(window, "mouseup", function () {
                c && (c = !1, i())
            }), t.event.bind(window, "keyup", function () {
                c && (c = !1, i())
            }), t.event.bind(window, "mousemove", function (t) {
                if (c) {
                    var r = {x: t.pageX, y: t.pageY}, a = {
                        left: e.offsetLeft,
                        right: e.offsetLeft + e.offsetWidth,
                        top: e.offsetTop,
                        bottom: e.offsetTop + e.offsetHeight
                    };
                    r.x < a.left + 3 ? (u.left = -5, o.startScrolling(e, "x")) : r.x > a.right - 3 ? (u.left = 5, o.startScrolling(e, "x")) : u.left = 0, r.y < a.top + 3 ? (u.top = a.top + 3 - r.y < 5 ? -5 : -20, o.startScrolling(e, "y")) : r.y > a.bottom - 3 ? (u.top = r.y - a.bottom + 3 < 5 ? 5 : 20, o.startScrolling(e, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? i() : n()
                }
            })
        }

        var o = e("../../lib/helper"), r = e("../instances"), a = e("../update-geometry"), s = e("../update-scroll");
        t.exports = function (e) {
            i(e, r.get(e))
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    16: [function (e, t, n) {
        "use strict";
        var i = e("../../lib/helper"), o = e("../instances"), r = e("../update-geometry"), a = e("../update-scroll");
        t.exports = function (e) {
            (i.env.supportsTouch || i.env.supportsIePointer) && function (e, t, n, i) {
                function s(n, i) {
                    var o = e.scrollTop, r = e.scrollLeft, a = Math.abs(n), s = Math.abs(i);
                    if (s > a) {
                        if (i < 0 && o === t.contentHeight - t.containerHeight || i > 0 && 0 === o) return !t.settings.swipePropagation
                    } else if (a > s && (n < 0 && r === t.contentWidth - t.containerWidth || n > 0 && 0 === r)) return !t.settings.swipePropagation;
                    return !0
                }

                function l(t, n) {
                    a(e, "top", e.scrollTop - n), a(e, "left", e.scrollLeft - t), r(e)
                }

                function u() {
                    x = !0
                }

                function c() {
                    x = !1
                }

                function d(e) {
                    return e.targetTouches ? e.targetTouches[0] : e
                }

                function h(e) {
                    return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                }

                function f(e) {
                    if (h(e)) {
                        w = !0;
                        var t = d(e);
                        m.pageX = t.pageX, m.pageY = t.pageY, v = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
                    }
                }

                function p(e) {
                    if (!w && t.settings.swipePropagation && f(e), !x && w && h(e)) {
                        var n = d(e), i = {pageX: n.pageX, pageY: n.pageY}, o = i.pageX - m.pageX,
                            r = i.pageY - m.pageY;
                        l(o, r), m = i;
                        var a = (new Date).getTime(), u = a - v;
                        u > 0 && (y.x = o / u, y.y = r / u, v = a), s(o, r) && (e.stopPropagation(), e.preventDefault())
                    }
                }

                function g() {
                    !x && w && (w = !1, t.settings.swipeEasing && (clearInterval(b), b = setInterval(function () {
                        return o.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
                    }, 10)))
                }

                var m = {}, v = 0, y = {}, b = null, x = !1, w = !1;
                n ? (t.event.bind(window, "touchstart", u), t.event.bind(window, "touchend", c), t.event.bind(e, "touchstart", f), t.event.bind(e, "touchmove", p), t.event.bind(e, "touchend", g)) : i && (window.PointerEvent ? (t.event.bind(window, "pointerdown", u), t.event.bind(window, "pointerup", c), t.event.bind(e, "pointerdown", f), t.event.bind(e, "pointermove", p), t.event.bind(e, "pointerup", g)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", u), t.event.bind(window, "MSPointerUp", c), t.event.bind(e, "MSPointerDown", f), t.event.bind(e, "MSPointerMove", p), t.event.bind(e, "MSPointerUp", g)))
            }(e, o.get(e), i.env.supportsTouch, i.env.supportsIePointer)
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    17: [function (e, t, n) {
        "use strict";
        var i = e("../lib/helper"), o = e("../lib/class"), r = e("./instances"), a = e("./update-geometry"), s = {
            "click-rail": e("./handler/click-rail"),
            "drag-scrollbar": e("./handler/drag-scrollbar"),
            keyboard: e("./handler/keyboard"),
            wheel: e("./handler/mouse-wheel"),
            touch: e("./handler/touch"),
            selection: e("./handler/selection")
        }, l = e("./handler/native-scroll");
        t.exports = function (e, t) {
            t = "object" == typeof t ? t : {}, o.add(e, "ps");
            var n = r.add(e);
            n.settings = i.extend(n.settings, t), o.add(e, "ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function (t) {
                s[t](e)
            }), l(e), a(e)
        }
    }, {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function (e, t, n) {
        "use strict";

        function i(e) {
            return e.getAttribute("data-ps-id")
        }

        var o = e("../lib/helper"), r = e("../lib/class"), a = e("./default-setting"), s = e("../lib/dom"),
            l = e("../lib/event-manager"), u = e("../lib/guid"), c = {};
        n.add = function (e) {
            var t = u();
            return function (e, t) {
                e.setAttribute("data-ps-id", t)
            }(e, t), c[t] = new function (e) {
                function t() {
                    r.add(e, "ps--focus")
                }

                function n() {
                    r.remove(e, "ps--focus")
                }

                var i = this;
                i.settings = o.clone(a), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, i.contentHeight = null, i.isRtl = "rtl" === s.css(e, "direction"), i.isNegativeScroll = function () {
                    var t, n = e.scrollLeft;
                    return e.scrollLeft = -1, t = e.scrollLeft < 0, e.scrollLeft = n, t
                }(), i.negativeScrollAdjustment = i.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, i.event = new l, i.ownerDocument = e.ownerDocument || document, i.scrollbarXRail = s.appendTo(s.e("div", "ps__scrollbar-x-rail"), e), i.scrollbarX = s.appendTo(s.e("div", "ps__scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", t), i.event.bind(i.scrollbarX, "blur", n), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = o.toInt(s.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom == i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : o.toInt(s.css(i.scrollbarXRail, "top")), i.railBorderXWidth = o.toInt(s.css(i.scrollbarXRail, "borderLeftWidth")) + o.toInt(s.css(i.scrollbarXRail, "borderRightWidth")), s.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = o.toInt(s.css(i.scrollbarXRail, "marginLeft")) + o.toInt(s.css(i.scrollbarXRail, "marginRight")), s.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = s.appendTo(s.e("div", "ps__scrollbar-y-rail"), e), i.scrollbarY = s.appendTo(s.e("div", "ps__scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", t), i.event.bind(i.scrollbarY, "blur", n), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = o.toInt(s.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight == i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : o.toInt(s.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? o.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = o.toInt(s.css(i.scrollbarYRail, "borderTopWidth")) + o.toInt(s.css(i.scrollbarYRail, "borderBottomWidth")), s.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = o.toInt(s.css(i.scrollbarYRail, "marginTop")) + o.toInt(s.css(i.scrollbarYRail, "marginBottom")), s.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
            }(e), c[t]
        }, n.remove = function (e) {
            delete c[i(e)], function (e) {
                e.removeAttribute("data-ps-id")
            }(e)
        }, n.get = function (e) {
            return c[i(e)]
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function (e, t, n) {
        "use strict";

        function i(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
        }

        var o = e("../lib/helper"), r = e("../lib/class"), a = e("../lib/dom"), s = e("./instances"),
            l = e("./update-scroll");
        t.exports = function (e) {
            var t, n = s.get(e);
            n.containerWidth = e.clientWidth, n.containerHeight = e.clientHeight, n.contentWidth = e.scrollWidth, n.contentHeight = e.scrollHeight, e.contains(n.scrollbarXRail) || ((t = a.queryChildren(e, ".ps__scrollbar-x-rail")).length > 0 && t.forEach(function (e) {
                a.remove(e)
            }), a.appendTo(n.scrollbarXRail, e)), e.contains(n.scrollbarYRail) || ((t = a.queryChildren(e, ".ps__scrollbar-y-rail")).length > 0 && t.forEach(function (e) {
                a.remove(e)
            }), a.appendTo(n.scrollbarYRail, e)), !n.settings.suppressScrollX && n.containerWidth + n.settings.scrollXMarginOffset < n.contentWidth ? (n.scrollbarXActive = !0, n.railXWidth = n.containerWidth - n.railXMarginWidth, n.railXRatio = n.containerWidth / n.railXWidth, n.scrollbarXWidth = i(n, o.toInt(n.railXWidth * n.containerWidth / n.contentWidth)), n.scrollbarXLeft = o.toInt((n.negativeScrollAdjustment + e.scrollLeft) * (n.railXWidth - n.scrollbarXWidth) / (n.contentWidth - n.containerWidth))) : n.scrollbarXActive = !1, !n.settings.suppressScrollY && n.containerHeight + n.settings.scrollYMarginOffset < n.contentHeight ? (n.scrollbarYActive = !0, n.railYHeight = n.containerHeight - n.railYMarginHeight, n.railYRatio = n.containerHeight / n.railYHeight, n.scrollbarYHeight = i(n, o.toInt(n.railYHeight * n.containerHeight / n.contentHeight)), n.scrollbarYTop = o.toInt(e.scrollTop * (n.railYHeight - n.scrollbarYHeight) / (n.contentHeight - n.containerHeight))) : n.scrollbarYActive = !1, n.scrollbarXLeft >= n.railXWidth - n.scrollbarXWidth && (n.scrollbarXLeft = n.railXWidth - n.scrollbarXWidth), n.scrollbarYTop >= n.railYHeight - n.scrollbarYHeight && (n.scrollbarYTop = n.railYHeight - n.scrollbarYHeight), function (e, t) {
                var n = {width: t.railXWidth};
                t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft, t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop, a.css(t.scrollbarXRail, n);
                var i = {top: e.scrollTop, height: t.railYHeight};
                t.isScrollbarYUsingRight ? t.isRtl ? i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : i.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : i.left = t.scrollbarYLeft + e.scrollLeft, a.css(t.scrollbarYRail, i), a.css(t.scrollbarX, {
                    left: t.scrollbarXLeft,
                    width: t.scrollbarXWidth - t.railBorderXWidth
                }), a.css(t.scrollbarY, {top: t.scrollbarYTop, height: t.scrollbarYHeight - t.railBorderYWidth})
            }(e, n), n.scrollbarXActive ? r.add(e, "ps--active-x") : (r.remove(e, "ps--active-x"), n.scrollbarXWidth = 0, n.scrollbarXLeft = 0, l(e, "left", 0)), n.scrollbarYActive ? r.add(e, "ps--active-y") : (r.remove(e, "ps--active-y"), n.scrollbarYHeight = 0, n.scrollbarYTop = 0, l(e, "top", 0))
        }
    }, {"../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20}],
    20: [function (e, t, n) {
        "use strict";
        var i = e("./instances"), o = function (e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0), t
        };
        t.exports = function (e, t, n) {
            if (void 0 === e) throw"You must provide an element to the update-scroll function";
            if (void 0 === t) throw"You must provide an axis to the update-scroll function";
            if (void 0 === n) throw"You must provide a value to the update-scroll function";
            "top" === t && n <= 0 && (e.scrollTop = n = 0, e.dispatchEvent(o("ps-y-reach-start"))), "left" === t && n <= 0 && (e.scrollLeft = n = 0, e.dispatchEvent(o("ps-x-reach-start")));
            var r = i.get(e);
            "top" === t && n >= r.contentHeight - r.containerHeight && ((n = r.contentHeight - r.containerHeight) - e.scrollTop <= 1 ? n = e.scrollTop : e.scrollTop = n, e.dispatchEvent(o("ps-y-reach-end"))), "left" === t && n >= r.contentWidth - r.containerWidth && ((n = r.contentWidth - r.containerWidth) - e.scrollLeft <= 1 ? n = e.scrollLeft : e.scrollLeft = n, e.dispatchEvent(o("ps-x-reach-end"))), void 0 === r.lastTop && (r.lastTop = e.scrollTop), void 0 === r.lastLeft && (r.lastLeft = e.scrollLeft), "top" === t && n < r.lastTop && e.dispatchEvent(o("ps-scroll-up")), "top" === t && n > r.lastTop && e.dispatchEvent(o("ps-scroll-down")), "left" === t && n < r.lastLeft && e.dispatchEvent(o("ps-scroll-left")), "left" === t && n > r.lastLeft && e.dispatchEvent(o("ps-scroll-right")), "top" === t && n !== r.lastTop && (e.scrollTop = r.lastTop = n, e.dispatchEvent(o("ps-scroll-y"))), "left" === t && n !== r.lastLeft && (e.scrollLeft = r.lastLeft = n, e.dispatchEvent(o("ps-scroll-x")))
        }
    }, {"./instances": 18}],
    21: [function (e, t, n) {
        "use strict";
        var i = e("../lib/helper"), o = e("../lib/dom"), r = e("./instances"), a = e("./update-geometry"),
            s = e("./update-scroll");
        t.exports = function (e) {
            var t = r.get(e);
            t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, o.css(t.scrollbarXRail, "display", "block"), o.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = i.toInt(o.css(t.scrollbarXRail, "marginLeft")) + i.toInt(o.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = i.toInt(o.css(t.scrollbarYRail, "marginTop")) + i.toInt(o.css(t.scrollbarYRail, "marginBottom")), o.css(t.scrollbarXRail, "display", "none"), o.css(t.scrollbarYRail, "display", "none"), a(e), s(e, "top", e.scrollTop), s(e, "left", e.scrollLeft), o.css(t.scrollbarXRail, "display", ""), o.css(t.scrollbarYRail, "display", ""))
        }
    }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20}]
}, {}, [1]), function (e) {
    e(document).ready(function () {
        e(document).on("click", ".chip .close", function () {
            var t = e(this);
            t.closest(".chips").data("initialized") || t.closest(".chip").remove()
        })
    }), e.fn.materialChip = function (t) {
        var n = this;
        return this.$el = e(this), this.$document = e(document), this.eventsHandled = !1, this.defaultOptions = {
            data: [],
            placeholder: "",
            secondaryPlaceholder: ""
        }, this.selectors = {
            chips: ".chips",
            chip: ".chip",
            input: "input",
            delete: ".fa",
            selectedChip: ".selected"
        }, this.keyCodes = {
            enter: 13,
            backspace: 8,
            delete: 46,
            arrowLeft: 37,
            arrowRight: 39
        }, "data" === t ? this.$el.data("chips") : "options" === t ? this.$el.data("options") : (this.$el.data("options", e.extend({}, this.defaultOptions, t)), this.init = function () {
            n.$el.each(function (t, i) {
                var o = e(i);
                if (!o.data("initialized")) {
                    var r = o.data("options");
                    r.data && Array.isArray(r.data) || (r.data = []), o.data("chips", r.data), o.data("index", t), o.data("initialized", !0), o.hasClass(n.selectors.chips) || o.addClass("chips"), n.renderChips(o)
                }
            })
        }, this.handleEvents = function () {
            var t = this;
            this.$document.on("click", this.selectors.chips, function (n) {
                e(n.target).find(t.selectors.input).focus()
            }), this.$document.on("click", this.selectors.chip, function (n) {
                e(t.selectors.chip).removeClass("selected"), e(n.target).addClass("selected")
            }), this.$document.on("keydown", function (n) {
                if (!e(n.target).is("input, textarea")) {
                    var i = t.$document.find(t.selectors.chip + t.selectors.selectedChip),
                        o = i.closest(t.selectors.chips), r = i.siblings(t.selectors.chip).length;
                    if (i.length) {
                        var a = n.which === t.keyCodes.backspace, s = n.which === t.keyCodes.delete,
                            l = n.which === t.keyCodes.arrowLeft, u = n.which === t.keyCodes.arrowRight;
                        a || s ? (n.preventDefault(), t.deleteSelectedChip(o, i, r)) : l ? t.selectLeftChip(o, i) : u && t.selectRightChip(o, i, r)
                    }
                }
            }), this.$document.on("focusin", this.selectors.chips + " " + this.selectors.input, function (n) {
                e(n.target).closest(t.selectors.chips).addClass("focus"), e(t.selectors.chip).removeClass("selected")
            }), this.$document.on("focusout", this.selectors.chips + " " + this.selectors.input, function (n) {
                e(n.target).closest(t.selectors.chips).removeClass("focus")
            }), this.$document.on("keydown", this.selectors.chips + " " + this.selectors.input, function (n) {
                var i = e(n.target), o = i.closest(t.selectors.chips), r = o.data("index"),
                    a = o.children(t.selectors.chip).length;
                if (n.which === t.keyCodes.enter) return n.preventDefault(), t.addChip(r, {tag: i.val()}, o), void i.val("");
                var s = n.keyCode === t.keyCodes.arrowLeft || n.keyCode === t.keyCodes.delete, l = "" === i.val();
                s && l && a && (t.selectChip(r, a - 1, o), i.blur())
            }), this.$document.on("click", this.selectors.chips + " " + this.selectors.delete, function (n) {
                var i = e(n.target), o = i.closest(t.selectors.chips), r = i.closest(t.selectors.chip);
                n.stopPropagation(), t.deleteChip(o.data("index"), r.index(), o), o.find("input").focus()
            })
        }, this.deleteSelectedChip = function (e, t, i) {
            var o = e.data("index"), r = t.index();
            n.deleteChip(o, r, e);
            var a = null;
            r < i - 1 ? a = r : r !== i && r !== i - 1 || (a = i - 1), a < 0 && (a = null), null !== a && n.selectChip(o, a, e), i || e.find("input").focus()
        }, this.selectLeftChip = function (t, i) {
            var o = i.index() - 1;
            o < 0 || (e(n.selectors.chip).removeClass("selected"), n.selectChip(t.data("index"), o, t))
        }, this.selectRightChip = function (t, i, o) {
            var r = i.index() + 1;
            e(n.selectors.chip).removeClass("selected"), r > o ? t.find("input").focus() : n.selectChip(t.data("index"), r, t)
        }, this.renderChips = function (e) {
            var t = "";
            e.data("chips").forEach(function (e) {
                t += n.getSingleChipHtml(e)
            }), t += '<input class="input" placeholder="">', e.html(t), n.setPlaceholder(e)
        }, this.getSingleChipHtml = function (e) {
            if (!e.tag) return "";
            var t = '<div class="chip">' + e.tag;
            return e.image && (t += ' <img src="' + e.image + '"> '), t += '<i class="close fa fa-times"></i>', t += "</div>"
        }, this.setPlaceholder = function (e) {
            var t = e.data("options");
            e.data("chips").length && t.placeholder ? e.find("input").prop("placeholder", t.placeholder) : !e.data("chips").length && t.secondaryPlaceholder && e.find("input").prop("placeholder", t.secondaryPlaceholder)
        }, this.isValid = function (e, t) {
            for (var n = e.data("chips"), i = 0; i < n.length; i++) if (n[i].tag === t.tag) return !1;
            return "" !== t.tag
        }, this.addChip = function (t, i, o) {
            if (n.isValid(o, i)) {
                var r = n.getSingleChipHtml(i);
                o.data("chips").push(i), e(r).insertBefore(o.find("input")), o.trigger("chip.add", i), n.setPlaceholder(o)
            }
        }, this.deleteChip = function (e, t, i) {
            var o = i.data("chips")[t];
            i.find(".chip").eq(t).remove(), i.data("chips").splice(t, 1), i.trigger("chip.delete", o), n.setPlaceholder(i)
        }, this.selectChip = function (e, t, n) {
            var i = n.find(".chip").eq(t);
            i && !1 === i.hasClass("selected") && (i.addClass("selected"), n.trigger("chip.select", n.data("chips")[t]))
        }, this.getChipsElement = function (e, t) {
            return t.eq(e)
        }, this.init(), this.eventsHandled || (this.handleEvents(), this.eventsHandled = !0), this)
    }, e.fn.material_chip = e.fn.materialChip
}(jQuery), function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: i})
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 11)
}([function (e, t, n) {
    "use strict";
    (function (t) {
        var n;
        n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = n
    }).call(t, n(2))
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, function (e, t, n) {
    "use strict";
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    i = function () {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
    }
    e.exports = i
}, , , , , , , , , function (e, t, n) {
    e.exports = n(12)
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = s(n(1)), r = n(0), a = s(n(13));

    function s(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var l = r.window.jarallax;
    if (r.window.jarallax = a.default, r.window.jarallax.noConflict = function () {
            return r.window.jarallax = l, this
        }, void 0 !== r.jQuery) {
        var u = function () {
            var e = arguments || [];
            Array.prototype.unshift.call(e, this);
            var t = a.default.apply(r.window, e);
            return "object" !== (void 0 === t ? "undefined" : i(t)) ? t : this
        };
        u.constructor = a.default.constructor;
        var c = r.jQuery.fn.jarallax;
        r.jQuery.fn.jarallax = u, r.jQuery.fn.jarallax.noConflict = function () {
            return r.jQuery.fn.jarallax = c, this
        }
    }
    (0, o.default)(function () {
        (0, a.default)(document.querySelectorAll("[data-jarallax]"))
    })
}, function (e, t, n) {
    "use strict";
    (function (e) {
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function (e, t) {
                    var n = [], i = !0, o = !1, r = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0) ;
                    } catch (e) {
                        o = !0, r = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, a = u(n(1)), s = u(n(14)), l = n(0);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var c = function () {
            for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n++) if (t && void 0 !== t.style[e[n]]) return e[n];
            return !1
        }(), d = void 0, h = void 0, f = void 0, p = !1, g = !1;

        function m(e) {
            d = l.window.innerWidth || document.documentElement.clientWidth, h = l.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === e ? "undefined" : r(e)) || "load" !== e.type && "dom-loaded" !== e.type || (p = !0)
        }

        m(), l.window.addEventListener("resize", m), l.window.addEventListener("orientationchange", m), l.window.addEventListener("load", m), (0, a.default)(function () {
            m({type: "dom-loaded"})
        });
        var v = [], y = !1;

        function b() {
            if (v.length) {
                f = void 0 !== l.window.pageYOffset ? l.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                var e = p || !y || y.width !== d || y.height !== h, t = g || e || !y || y.y !== f;
                p = !1, g = !1, (e || t) && (v.forEach(function (n) {
                    e && n.onResize(), t && n.onScroll()
                }), y = {width: d, height: h, y: f}), (0, s.default)(b)
            }
        }

        var x = !!e.ResizeObserver && new e.ResizeObserver(function (e) {
            e && e.length && (0, s.default)(function () {
                e.forEach(function (e) {
                    e.target && e.target.jarallax && (p || e.target.jarallax.onResize(), g = !0)
                })
            })
        }), w = 0, k = function () {
            function e(t, n) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var o = this;
                o.instanceID = w++, o.$item = t, o.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: !1,
                    disableVideo: !1,
                    automaticResize: !0,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoPlayOnlyVisible: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var a = o.$item.getAttribute("data-jarallax"), s = JSON.parse(a || "{}");
                a && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
                var l = o.$item.dataset || {}, u = {};
                if (Object.keys(l).forEach(function (e) {
                        var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                        t && void 0 !== o.defaults[t] && (u[t] = l[e])
                    }), o.options = o.extend({}, o.defaults, s, u, n), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach(function (e) {
                        "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1)
                    }), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))), (o.options.noAndroid || o.options.noIos) && (console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"), o.options.disableParallax || (o.options.noIos && o.options.noAndroid ? o.options.disableParallax = /iPad|iPhone|iPod|Android/ : o.options.noIos ? o.options.disableParallax = /iPad|iPhone|iPod/ : o.options.noAndroid && (o.options.disableParallax = /Android/))), "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)), o.options.disableParallax instanceof RegExp) {
                    var c = o.options.disableParallax;
                    o.options.disableParallax = function () {
                        return c.test(navigator.userAgent)
                    }
                }
                if ("function" != typeof o.options.disableParallax && (o.options.disableParallax = function () {
                        return !1
                    }), "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)), o.options.disableVideo instanceof RegExp) {
                    var d = o.options.disableVideo;
                    o.options.disableVideo = function () {
                        return d.test(navigator.userAgent)
                    }
                }
                "function" != typeof o.options.disableVideo && (o.options.disableVideo = function () {
                    return !1
                });
                var h = o.options.elementInViewport;
                h && "object" === (void 0 === h ? "undefined" : r(h)) && void 0 !== h.length && (h = i(h, 1)[0]);
                h instanceof Element || (h = null), o.options.elementInViewport = h, o.image = {
                    src: o.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
                }, o.initImg() && o.canInitParallax() && o.init()
            }

            return o(e, [{
                key: "css", value: function (e, t) {
                    return "string" == typeof t ? l.window.getComputedStyle(e).getPropertyValue(t) : (t.transform && c && (t[c] = t.transform), Object.keys(t).forEach(function (n) {
                        e.style[n] = t[n]
                    }), e)
                }
            }, {
                key: "extend", value: function (e) {
                    var t = arguments;
                    return e = e || {}, Object.keys(arguments).forEach(function (n) {
                        t[n] && Object.keys(t[n]).forEach(function (i) {
                            e[i] = t[n][i]
                        })
                    }), e
                }
            }, {
                key: "getWindowData", value: function () {
                    return {width: d, height: h, y: f}
                }
            }, {
                key: "initImg", value: function () {
                    var e = this.options.imgElement;
                    return e && "string" == typeof e && (e = this.$item.querySelector(e)), e instanceof Element || (e = null), e && (this.options.keepImg ? this.image.$item = e.cloneNode(!0) : (this.image.$item = e, this.image.$itemParent = e.parentNode), this.image.useImgTag = !0), !!this.image.$item || (null === this.image.src && (this.image.src = this.css(this.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!this.image.src || "none" === this.image.src))
                }
            }, {
                key: "canInitParallax", value: function () {
                    return c && !this.options.disableParallax()
                }
            }, {
                key: "init", value: function () {
                    var e = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        pointerEvents: "none"
                    }, t = {};
                    if (!this.options.keepImg) {
                        var n = this.$item.getAttribute("style");
                        if (n && this.$item.setAttribute("data-jarallax-original-styles", n), this.image.useImgTag) {
                            var i = this.image.$item.getAttribute("style");
                            i && this.image.$item.setAttribute("data-jarallax-original-styles", i)
                        }
                    }
                    if ("static" === this.css(this.$item, "position") && this.css(this.$item, {position: "relative"}), "auto" === this.css(this.$item, "z-index") && this.css(this.$item, {zIndex: 0}), this.image.$container = document.createElement("div"), this.css(this.image.$container, e), this.css(this.image.$container, {"z-index": this.options.zIndex}), this.image.$container.setAttribute("id", "jarallax-container-" + this.instanceID), this.$item.appendChild(this.image.$container), this.image.useImgTag ? t = this.extend({
                            "object-fit": this.options.imgSize,
                            "object-position": this.options.imgPosition,
                            "font-family": "object-fit: " + this.options.imgSize + "; object-position: " + this.options.imgPosition + ";",
                            "max-width": "none"
                        }, e, t) : (this.image.$item = document.createElement("div"), this.image.src && (t = this.extend({
                            "background-position": this.options.imgPosition,
                            "background-size": this.options.imgSize,
                            "background-repeat": this.options.imgRepeat,
                            "background-image": 'url("' + this.image.src + '")'
                        }, e, t))), "opacity" !== this.options.type && "scale" !== this.options.type && "scale-opacity" !== this.options.type && 1 !== this.options.speed || (this.image.position = "absolute"), "fixed" === this.image.position) for (var o = 0, r = this.$item; null !== r && r !== document && 0 === o;) {
                        var a = this.css(r, "-webkit-transform") || this.css(r, "-moz-transform") || this.css(r, "transform");
                        a && "none" !== a && (o = 1, this.image.position = "absolute"), r = r.parentNode
                    }
                    t.position = this.image.position, this.css(this.image.$item, t), this.image.$container.appendChild(this.image.$item), this.coverImage(), this.clipContainer(), this.onScroll(!0), this.options.automaticResize && x && x.observe(this.$item), this.options.onInit && this.options.onInit.call(this), "none" !== this.css(this.$item, "background-image") && this.css(this.$item, {"background-image": "none"}), this.addToParallaxList()
                }
            }, {
                key: "addToParallaxList", value: function () {
                    v.push(this), 1 === v.length && b()
                }
            }, {
                key: "removeFromParallaxList", value: function () {
                    var e = this;
                    v.forEach(function (t, n) {
                        t.instanceID === e.instanceID && v.splice(n, 1)
                    })
                }
            }, {
                key: "destroy", value: function () {
                    this.removeFromParallaxList();
                    var e = this.$item.getAttribute("data-jarallax-original-styles");
                    if (this.$item.removeAttribute("data-jarallax-original-styles"), e ? this.$item.setAttribute("style", e) : this.$item.removeAttribute("style"), this.image.useImgTag) {
                        var t = this.image.$item.getAttribute("data-jarallax-original-styles");
                        this.image.$item.removeAttribute("data-jarallax-original-styles"), t ? this.image.$item.setAttribute("style", e) : this.image.$item.removeAttribute("style"), this.image.$itemParent && this.image.$itemParent.appendChild(this.image.$item)
                    }
                    this.$clipStyles && this.$clipStyles.parentNode.removeChild(this.$clipStyles), this.image.$container && this.image.$container.parentNode.removeChild(this.image.$container), this.options.onDestroy && this.options.onDestroy.call(this), delete this.$item.jarallax
                }
            }, {
                key: "clipContainer", value: function () {
                    if ("fixed" === this.image.position) {
                        var e = this.image.$container.getBoundingClientRect(), t = e.width, n = e.height;
                        if (!this.$clipStyles) this.$clipStyles = document.createElement("style"), this.$clipStyles.setAttribute("type", "text/css"), this.$clipStyles.setAttribute("id", "jarallax-clip-" + this.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles);
                        var i = "#jarallax-container-" + this.instanceID + " {\n           clip: rect(0 " + t + "px " + n + "px 0);\n           clip: rect(0, " + t + "px, " + n + "px, 0);\n        }";
                        this.$clipStyles.styleSheet ? this.$clipStyles.styleSheet.cssText = i : this.$clipStyles.innerHTML = i
                    }
                }
            }, {
                key: "coverImage", value: function () {
                    var e = this.image.$container.getBoundingClientRect(), t = e.height, n = this.options.speed,
                        i = "scroll" === this.options.type || "scroll-opacity" === this.options.type, o = 0, r = t,
                        a = 0;
                    return i && (o = n < 0 ? n * Math.max(t, h) : n * (t + h), n > 1 ? r = Math.abs(o - h) : n < 0 ? r = o / n + Math.abs(o) : r += Math.abs(h - t) * (1 - n), o /= 2), this.parallaxScrollDistance = o, a = i ? (h - r) / 2 : (t - r) / 2, this.css(this.image.$item, {
                        height: r + "px",
                        marginTop: a + "px",
                        left: "fixed" === this.image.position ? e.left + "px" : "0",
                        width: e.width + "px"
                    }), this.options.onCoverImage && this.options.onCoverImage.call(this), {
                        image: {
                            height: r,
                            marginTop: a
                        }, container: e
                    }
                }
            }, {
                key: "isVisible", value: function () {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll", value: function (e) {
                    var t = this.$item.getBoundingClientRect(), n = t.top, i = t.height, o = {}, r = t;
                    if (this.options.elementInViewport && (r = this.options.elementInViewport.getBoundingClientRect()), this.isElementInViewport = r.bottom >= 0 && r.right >= 0 && r.top <= h && r.left <= d, e || this.isElementInViewport) {
                        var a = Math.max(0, n), s = Math.max(0, i + n), l = Math.max(0, -n), u = Math.max(0, n + i - h),
                            c = Math.max(0, i - (n + i - h)), f = Math.max(0, -n + h - i),
                            p = 1 - 2 * (h - n) / (h + i), g = 1;
                        if (i < h ? g = 1 - (l || u) / i : s <= h ? g = s / h : c <= h && (g = c / h), "opacity" !== this.options.type && "scale-opacity" !== this.options.type && "scroll-opacity" !== this.options.type || (o.transform = "translate3d(0,0,0)", o.opacity = g), "scale" === this.options.type || "scale-opacity" === this.options.type) {
                            var m = 1;
                            this.options.speed < 0 ? m -= this.options.speed * g : m += this.options.speed * (1 - g), o.transform = "scale(" + m + ") translate3d(0,0,0)"
                        }
                        if ("scroll" === this.options.type || "scroll-opacity" === this.options.type) {
                            var v = this.parallaxScrollDistance * p;
                            "absolute" === this.image.position && (v -= n), o.transform = "translate3d(0," + v + "px,0)"
                        }
                        this.css(this.image.$item, o), this.options.onScroll && this.options.onScroll.call(this, {
                            section: t,
                            beforeTop: a,
                            beforeTopEnd: s,
                            afterTop: l,
                            beforeBottom: u,
                            beforeBottomEnd: c,
                            afterBottom: f,
                            visiblePercent: g,
                            fromViewportCenter: p
                        })
                    }
                }
            }, {
                key: "onResize", value: function () {
                    this.coverImage(), this.clipContainer()
                }
            }]), e
        }(), C = function (e) {
            ("object" === ("undefined" == typeof HTMLElement ? "undefined" : r(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
            for (var t = arguments[1], n = Array.prototype.slice.call(arguments, 2), i = e.length, o = 0, a = void 0; o < i; o++) if ("object" === (void 0 === t ? "undefined" : r(t)) || void 0 === t ? e[o].jarallax || (e[o].jarallax = new k(e[o], t)) : e[o].jarallax && (a = e[o].jarallax[t].apply(e[o].jarallax, n)), void 0 !== a) return a;
            return e
        };
        C.constructor = k, t.default = C
    }).call(t, n(2))
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        o = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || function (e) {
            var t = +new Date, n = Math.max(0, 16 - (t - r)), i = setTimeout(e, n);
            return r = t, i
        }, r = +new Date;
    var a = i.cancelAnimationFrame || i.webkitCancelAnimationFrame || i.mozCancelAnimationFrame || clearTimeout;
    Function.prototype.bind && (o = o.bind(i), a = a.bind(i)), (e.exports = o).cancel = a
}]), function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: i})
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 7)
}([function (e, t, n) {
    "use strict";
    (function (t) {
        var n;
        n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = n
    }).call(t, n(2))
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, function (e, t, n) {
    "use strict";
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    i = function () {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
    }
    e.exports = i
}, function (e, t, n) {
    "use strict";
    e.exports = n(9)
}, , , , function (e, t, n) {
    e.exports = n(8)
}, function (e, t, n) {
    "use strict";
    var i = s(n(3)), o = s(n(0)), r = s(n(1)), a = s(n(10));

    function s(e) {
        return e && e.__esModule ? e : {default: e}
    }

    o.default.VideoWorker = o.default.VideoWorker || i.default, (0, a.default)(), (0, r.default)(function () {
        "undefined" != typeof jarallax && jarallax(document.querySelectorAll("[data-jarallax-video]"))
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();

    function r() {
        this._done = [], this._fail = []
    }

    r.prototype = {
        execute: function (e, t) {
            var n = e.length;
            for (t = Array.prototype.slice.call(t); n--;) e[n].apply(null, t)
        }, resolve: function () {
            this.execute(this._done, arguments)
        }, reject: function () {
            this.execute(this._fail, arguments)
        }, done: function (e) {
            this._done.push(e)
        }, fail: function (e) {
            this._fail.push(e)
        }
    };
    var a = 0, s = 0, l = 0, u = 0, c = 0, d = new r, h = new r, f = function () {
        function e(t, n) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            this.url = t, this.options_default = {
                autoplay: !1,
                loop: !1,
                mute: !1,
                volume: 100,
                showContols: !0,
                startTime: 0,
                endTime: 0
            }, this.options = this.extend({}, this.options_default, n), this.videoID = this.parseURL(t), this.videoID && (this.ID = a++, this.loadAPI(), this.init())
        }

        return o(e, [{
            key: "extend", value: function (e) {
                var t = arguments;
                return e = e || {}, Object.keys(arguments).forEach(function (n) {
                    t[n] && Object.keys(t[n]).forEach(function (i) {
                        e[i] = t[n][i]
                    })
                }), e
            }
        }, {
            key: "parseURL", value: function (e) {
                var t, n, i,
                    o = !(!(t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== t[1].length) && t[1],
                    r = function (e) {
                        var t = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
                        return !(!t || !t[3]) && t[3]
                    }(e), a = (n = {}, i = 0, e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/).forEach(function (e) {
                        var t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                        t && t[1] && t[2] && (n["ogv" === t[1] ? "ogg" : t[1]] = t[2], i = 1)
                    }), !!i && n);
                return o ? (this.type = "youtube", o) : r ? (this.type = "vimeo", r) : !!a && (this.type = "local", a)
            }
        }, {
            key: "isValid", value: function () {
                return !!this.videoID
            }
        }, {
            key: "on", value: function (e, t) {
                this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
            }
        }, {
            key: "off", value: function (e, t) {
                var n = this;
                this.userEventsList && this.userEventsList[e] && (t ? this.userEventsList[e].forEach(function (i, o) {
                    i === t && (n.userEventsList[e][o] = !1)
                }) : delete this.userEventsList[e])
            }
        }, {
            key: "fire", value: function (e) {
                var t = this, n = [].slice.call(arguments, 1);
                this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach(function (e) {
                    e && e.apply(t, n)
                })
            }
        }, {
            key: "play", value: function (e) {
                var t = this;
                t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(function (e) {
                    e && t.player.play()
                })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.paused && t.player.play()))
            }
        }, {
            key: "pause", value: function () {
                var e = this;
                e.player && ("youtube" === e.type && e.player.pauseVideo && YT.PlayerState.PLAYING === e.player.getPlayerState() && e.player.pauseVideo(), "vimeo" === e.type && e.player.getPaused().then(function (t) {
                    t || e.player.pause()
                }), "local" === e.type && (e.player.paused || e.player.pause()))
            }
        }, {
            key: "mute", value: function () {
                this.player && ("youtube" === this.type && this.player.mute && this.player.mute(), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(0), "local" === this.type && (this.$video.muted = !0))
            }
        }, {
            key: "unmute", value: function () {
                this.player && ("youtube" === this.type && this.player.mute && this.player.unMute(), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(this.options.volume), "local" === this.type && (this.$video.muted = !1))
            }
        }, {
            key: "setVolume", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.player && e && ("youtube" === this.type && this.player.setVolume && this.player.setVolume(e), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(e), "local" === this.type && (this.$video.volume = e / 100))
            }
        }, {
            key: "getVolume", value: function (e) {
                this.player ? ("youtube" === this.type && this.player.getVolume && e(this.player.getVolume()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(function (t) {
                    e(t)
                }), "local" === this.type && e(100 * this.$video.volume)) : e(!1)
            }
        }, {
            key: "getMuted", value: function (e) {
                this.player ? ("youtube" === this.type && this.player.isMuted && e(this.player.isMuted()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(function (t) {
                    e(!!t)
                }), "local" === this.type && e(this.$video.muted)) : e(null)
            }
        }, {
            key: "getImageURL", value: function (e) {
                var t = this;
                if (t.videoImage) e(t.videoImage); else {
                    if ("youtube" === t.type) {
                        var n = ["maxresdefault", "sddefault", "hqdefault", "0"], i = 0, o = new Image;
                        o.onload = function () {
                            120 !== (this.naturalWidth || this.width) || i === n.length - 1 ? (t.videoImage = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg", e(t.videoImage)) : (i++, this.src = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg")
                        }, o.src = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg"
                    }
                    if ("vimeo" === t.type) {
                        var r = new XMLHttpRequest;
                        r.open("GET", "https://vimeo.com/api/v2/video/" + t.videoID + ".json", !0), r.onreadystatechange = function () {
                            if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                                var n = JSON.parse(this.responseText);
                                t.videoImage = n[0].thumbnail_large, e(t.videoImage)
                            }
                        }, r.send(), r = null
                    }
                }
            }
        }, {
            key: "getIframe", value: function (e) {
                this.getVideo(e)
            }
        }, {
            key: "getVideo", value: function (e) {
                var t = this;
                t.$video ? e(t.$video) : t.onAPIready(function () {
                    var n = void 0;
                    if (t.$video || ((n = document.createElement("div")).style.display = "none"), "youtube" === t.type) {
                        t.playerOptions = {}, t.playerOptions.videoId = t.videoID, t.playerOptions.playerVars = {
                            autohide: 1,
                            rel: 0,
                            autoplay: 0,
                            playsinline: 1
                        }, t.options.showContols || (t.playerOptions.playerVars.iv_load_policy = 3, t.playerOptions.playerVars.modestbranding = 1, t.playerOptions.playerVars.controls = 0, t.playerOptions.playerVars.showinfo = 0, t.playerOptions.playerVars.disablekb = 1);
                        var i = void 0, o = void 0;
                        t.playerOptions.events = {
                            onReady: function (e) {
                                t.options.mute ? e.target.mute() : t.options.volume && e.target.setVolume(t.options.volume), t.options.autoplay && t.play(t.options.startTime), t.fire("ready", e), setInterval(function () {
                                    t.getVolume(function (n) {
                                        t.options.volume !== n && (t.options.volume = n, t.fire("volumechange", e))
                                    })
                                }, 150)
                            }, onStateChange: function (e) {
                                t.options.loop && e.data === YT.PlayerState.ENDED && t.play(t.options.startTime), i || e.data !== YT.PlayerState.PLAYING || (i = 1, t.fire("started", e)), e.data === YT.PlayerState.PLAYING && t.fire("play", e), e.data === YT.PlayerState.PAUSED && t.fire("pause", e), e.data === YT.PlayerState.ENDED && t.fire("ended", e), e.data === YT.PlayerState.PLAYING ? o = setInterval(function () {
                                    t.fire("timeupdate", e), t.options.endTime && t.player.getCurrentTime() >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                                }, 150) : clearInterval(o)
                            }
                        };
                        var r = !t.$video;
                        if (r) {
                            var a = document.createElement("div");
                            a.setAttribute("id", t.playerID), n.appendChild(a), document.body.appendChild(n)
                        }
                        t.player = t.player || new window.YT.Player(t.playerID, t.playerOptions), r && (t.$video = document.getElementById(t.playerID), t.videoWidth = parseInt(t.$video.getAttribute("width"), 10) || 1280, t.videoHeight = parseInt(t.$video.getAttribute("height"), 10) || 720)
                    }
                    if ("vimeo" === t.type) {
                        t.playerOptions = "", t.playerOptions += "player_id=" + t.playerID, t.playerOptions += "&autopause=0", t.playerOptions += "&transparent=0", t.options.showContols || (t.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), t.playerOptions += "&autoplay=" + (t.options.autoplay ? "1" : "0"), t.playerOptions += "&loop=" + (t.options.loop ? 1 : 0), t.$video || (t.$video = document.createElement("iframe"), t.$video.setAttribute("id", t.playerID), t.$video.setAttribute("src", "https://player.vimeo.com/video/" + t.videoID + "?" + t.playerOptions), t.$video.setAttribute("frameborder", "0"), n.appendChild(t.$video), document.body.appendChild(n)), t.player = t.player || new Vimeo.Player(t.$video), t.player.getVideoWidth().then(function (e) {
                            t.videoWidth = e || 1280
                        }), t.player.getVideoHeight().then(function (e) {
                            t.videoHeight = e || 720
                        }), t.options.startTime && t.options.autoplay && t.player.setCurrentTime(t.options.startTime), t.options.mute ? t.player.setVolume(0) : t.options.volume && t.player.setVolume(t.options.volume);
                        var s = void 0;
                        t.player.on("timeupdate", function (e) {
                            s || (t.fire("started", e), s = 1), t.fire("timeupdate", e), t.options.endTime && t.options.endTime && e.seconds >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                        }), t.player.on("play", function (e) {
                            t.fire("play", e), t.options.startTime && 0 === e.seconds && t.play(t.options.startTime)
                        }), t.player.on("pause", function (e) {
                            t.fire("pause", e)
                        }), t.player.on("ended", function (e) {
                            t.fire("ended", e)
                        }), t.player.on("loaded", function (e) {
                            t.fire("ready", e)
                        }), t.player.on("volumechange", function (e) {
                            t.fire("volumechange", e)
                        })
                    }
                    if ("local" === t.type) {
                        t.$video || (t.$video = document.createElement("video"), t.options.mute ? t.$video.muted = !0 : t.$video.volume && (t.$video.volume = t.options.volume / 100), t.options.loop && (t.$video.loop = !0), t.$video.setAttribute("playsinline", ""), t.$video.setAttribute("webkit-playsinline", ""), t.$video.setAttribute("id", t.playerID), n.appendChild(t.$video), document.body.appendChild(n), Object.keys(t.videoID).forEach(function (e) {
                            var n, i, o, r;
                            n = t.$video, i = t.videoID[e], o = "video/" + e, (r = document.createElement("source")).src = i, r.type = o, n.appendChild(r)
                        })), t.player = t.player || t.$video;
                        var l = void 0;
                        t.player.addEventListener("playing", function (e) {
                            l || t.fire("started", e), l = 1
                        }), t.player.addEventListener("timeupdate", function (e) {
                            t.fire("timeupdate", e), t.options.endTime && t.options.endTime && this.currentTime >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                        }), t.player.addEventListener("play", function (e) {
                            t.fire("play", e)
                        }), t.player.addEventListener("pause", function (e) {
                            t.fire("pause", e)
                        }), t.player.addEventListener("ended", function (e) {
                            t.fire("ended", e)
                        }), t.player.addEventListener("loadedmetadata", function () {
                            t.videoWidth = this.videoWidth || 1280, t.videoHeight = this.videoHeight || 720, t.fire("ready"), t.options.autoplay && t.play(t.options.startTime)
                        }), t.player.addEventListener("volumechange", function (e) {
                            t.getVolume(function (e) {
                                t.options.volume = e
                            }), t.fire("volumechange", e)
                        })
                    }
                    e(t.$video)
                })
            }
        }, {
            key: "init", value: function () {
                this.playerID = "VideoWorker-" + this.ID
            }
        }, {
            key: "loadAPI", value: function () {
                if (!s || !l) {
                    var e = "";
                    if ("youtube" !== this.type || s || (s = 1, e = "https://www.youtube.com/iframe_api"), "vimeo" !== this.type || l || (l = 1, e = "https://player.vimeo.com/api/player.js"), e) {
                        var t = document.createElement("script"), n = document.getElementsByTagName("head")[0];
                        t.src = e, n.appendChild(t), n = null, t = null
                    }
                }
            }
        }, {
            key: "onAPIready", value: function (e) {
                if ("youtube" === this.type && ("undefined" != typeof YT && 0 !== YT.loaded || u ? "object" === ("undefined" == typeof YT ? "undefined" : i(YT)) && 1 === YT.loaded ? e() : d.done(function () {
                        e()
                    }) : (u = 1, window.onYouTubeIframeAPIReady = function () {
                        window.onYouTubeIframeAPIReady = null, d.resolve("done"), e()
                    })), "vimeo" === this.type) if ("undefined" != typeof Vimeo || c) "undefined" != typeof Vimeo ? e() : h.done(function () {
                    e()
                }); else {
                    c = 1;
                    var t = setInterval(function () {
                        "undefined" != typeof Vimeo && (clearInterval(t), h.resolve("done"), e())
                    }, 20)
                }
                "local" === this.type && e()
            }
        }]), e
    }();
    t.default = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.default.jarallax;
        if (void 0 === e) return;
        var t = e.constructor, n = t.prototype.init;
        t.prototype.init = function () {
            var e = this;
            n.apply(e), e.video && !e.options.disableVideo() && e.video.getVideo(function (t) {
                var n = t.parentNode;
                e.css(t, {
                    position: e.image.position,
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    maxWidth: "none",
                    maxHeight: "none",
                    margin: 0,
                    zIndex: -1
                }), e.$video = t, e.image.$container.appendChild(t), n.parentNode.removeChild(n)
            })
        };
        var r = t.prototype.coverImage;
        t.prototype.coverImage = function () {
            var e = r.apply(this), t = !!this.image.$item && this.image.$item.nodeName;
            if (e && this.video && t && ("IFRAME" === t || "VIDEO" === t)) {
                var n = e.image.height, i = n * this.image.width / this.image.height, o = (e.container.width - i) / 2,
                    a = e.image.marginTop;
                e.container.width > i && (i = e.container.width, n = i * this.image.height / this.image.width, o = 0, a += (e.image.height - n) / 2), "IFRAME" === t && (n += 400, a -= 200), this.css(this.$video, {
                    width: i + "px",
                    marginLeft: o + "px",
                    height: n + "px",
                    marginTop: a + "px"
                })
            }
            return e
        };
        var a = t.prototype.initImg;
        t.prototype.initImg = function () {
            var e = a.apply(this);
            return this.options.videoSrc || (this.options.videoSrc = this.$item.getAttribute("data-jarallax-video") || null), this.options.videoSrc ? (this.defaultInitImgResult = e, !0) : e
        };
        var s = t.prototype.canInitParallax;
        t.prototype.canInitParallax = function () {
            var e = this, t = s.apply(e);
            if (!e.options.videoSrc) return t;
            var n = new i.default(e.options.videoSrc, {
                autoplay: !0,
                loop: !0,
                showContols: !1,
                startTime: e.options.videoStartTime || 0,
                endTime: e.options.videoEndTime || 0,
                mute: e.options.videoVolume ? 0 : 1,
                volume: e.options.videoVolume || 0
            });
            if (n.isValid()) if (t) {
                if (n.on("ready", function () {
                        if (e.options.videoPlayOnlyVisible) {
                            var t = e.onScroll;
                            e.onScroll = function () {
                                t.apply(e), e.isVisible() ? n.play() : n.pause()
                            }
                        } else n.play()
                    }), n.on("started", function () {
                        e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.video.videoWidth || 1280, e.image.height = e.video.videoHeight || 720, e.options.imgWidth = e.image.width, e.options.imgHeight = e.image.height, e.coverImage(), e.clipContainer(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
                    }), e.video = n, !e.defaultInitImgResult) return "local" !== n.type ? (n.getImageURL(function (t) {
                    e.image.src = t, e.init()
                }), !1) : (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0)
            } else e.defaultInitImgResult || n.getImageURL(function (t) {
                var n = e.$item.getAttribute("style");
                n && e.$item.setAttribute("data-jarallax-original-styles", n), e.css(e.$item, {
                    "background-image": 'url("' + t + '")',
                    "background-position": "center",
                    "background-size": "cover"
                })
            });
            return t
        };
        var l = t.prototype.destroy;
        t.prototype.destroy = function () {
            this.image.$default_item && (this.image.$item = this.image.$default_item, delete this.image.$default_item), l.apply(this)
        }
    };
    var i = r(n(3)), o = r(n(0));

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }
}]), $.fn.mdb_autocomplete = function (e) {
    return e = $.extend({data: {}}, e), this.each(function () {
        var t = $(this), n = void 0, i = e.data;
        Object.keys(i).length && (n = $('<ul class="mdb-autocomplete-wrap"></ul>')).insertAfter($(this)), t.on("keyup", function (e) {
            var o = t.val();
            if (n.empty(), o.length) for (var r in i) if (-1 !== i[r].toLowerCase().indexOf(o.toLowerCase())) {
                var a = $("<li>" + i[r] + "</li>");
                n.append(a)
            }
            13 === e.which && (n.children(":first").trigger("click"), n.empty()), 0 === o.length ? $(".mdb-autocomplete-clear").css("visibility", "hidden") : $(".mdb-autocomplete-clear").css("visibility", "visible")
        }), n.on("click", "li", function () {
            t.val($(this).text()), n.empty()
        }), $(".mdb-autocomplete-clear").on("click", function (e) {
            e.preventDefault(), t.val(""), $(this).css("visibility", "hidden"), n.empty(), $(this).parent().find("label").removeClass("active")
        })
    })
}, $("body").on("shown.bs.modal", ".modal", function () {
    $(".modal-backdrop").length || ($modal_dialog = $(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && ($(this).addClass("modal-scrolling"), $("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && ($(this).addClass("modal-content-clickable"), $("body").addClass("scrollable")))
}), $("body").on("hidden.bs.modal", ".modal", function () {
    $("body").removeClass("scrollable")
});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
        var e = /\blang(?:uage)?-([\w-]+)\b/i, t = 0, n = _self.Prism = {
            manual: _self.Prism && _self.Prism.manual,
            disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
            util: {
                encode: function (e) {
                    return e instanceof i ? new i(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                }, type: function (e) {
                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                }, objId: function (e) {
                    return e.__id || Object.defineProperty(e, "__id", {value: ++t}), e.__id
                }, clone: function (e, t) {
                    var i = n.util.type(e);
                    switch (t = t || {}, i) {
                        case"Object":
                            if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                            var o = {};
                            for (var r in t[n.util.objId(e)] = o, e) e.hasOwnProperty(r) && (o[r] = n.util.clone(e[r], t));
                            return o;
                        case"Array":
                            if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                            o = [];
                            return t[n.util.objId(e)] = o, e.forEach(function (e, i) {
                                o[i] = n.util.clone(e, t)
                            }), o
                    }
                    return e
                }
            },
            languages: {
                extend: function (e, t) {
                    var i = n.util.clone(n.languages[e]);
                    for (var o in t) i[o] = t[o];
                    return i
                }, insertBefore: function (e, t, i, o) {
                    var r = (o = o || n.languages)[e];
                    if (2 == arguments.length) {
                        for (var a in i = arguments[1]) i.hasOwnProperty(a) && (r[a] = i[a]);
                        return r
                    }
                    var s = {};
                    for (var l in r) if (r.hasOwnProperty(l)) {
                        if (l == t) for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
                        s[l] = r[l]
                    }
                    return n.languages.DFS(n.languages, function (t, n) {
                        n === o[e] && t != e && (this[t] = s)
                    }), o[e] = s
                }, DFS: function (e, t, i, o) {
                    for (var r in o = o || {}, e) e.hasOwnProperty(r) && (t.call(e, r, e[r], i || r), "Object" !== n.util.type(e[r]) || o[n.util.objId(e[r])] ? "Array" !== n.util.type(e[r]) || o[n.util.objId(e[r])] || (o[n.util.objId(e[r])] = !0, n.languages.DFS(e[r], t, r, o)) : (o[n.util.objId(e[r])] = !0, n.languages.DFS(e[r], t, null, o)))
                }
            },
            plugins: {},
            highlightAll: function (e, t) {
                n.highlightAllUnder(document, e, t)
            },
            highlightAllUnder: function (e, t, i) {
                var o = {
                    callback: i,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                n.hooks.run("before-highlightall", o);
                for (var r, a = o.elements || e.querySelectorAll(o.selector), s = 0; r = a[s++];) n.highlightElement(r, !0 === t, o.callback)
            },
            highlightElement: function (t, i, o) {
                for (var r, a, s = t; s && !e.test(s.className);) s = s.parentNode;
                s && (r = (s.className.match(e) || [, ""])[1].toLowerCase(), a = n.languages[r]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r, t.parentNode && (s = t.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r));
                var l = {element: t, language: r, grammar: a, code: t.textContent};
                if (n.hooks.run("before-sanity-check", l), !l.code || !l.grammar) return l.code && (n.hooks.run("before-highlight", l), l.element.textContent = l.code, n.hooks.run("after-highlight", l)), void n.hooks.run("complete", l);
                if (n.hooks.run("before-highlight", l), i && _self.Worker) {
                    var u = new Worker(n.filename);
                    u.onmessage = function (e) {
                        l.highlightedCode = e.data, n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, o && o.call(l.element), n.hooks.run("after-highlight", l), n.hooks.run("complete", l)
                    }, u.postMessage(JSON.stringify({language: l.language, code: l.code, immediateClose: !0}))
                } else l.highlightedCode = n.highlight(l.code, l.grammar, l.language), n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, o && o.call(t), n.hooks.run("after-highlight", l), n.hooks.run("complete", l)
            },
            highlight: function (e, t, o) {
                var r = {code: e, grammar: t, language: o};
                return n.hooks.run("before-tokenize", r), r.tokens = n.tokenize(r.code, r.grammar), n.hooks.run("after-tokenize", r), i.stringify(n.util.encode(r.tokens), r.language)
            },
            matchGrammar: function (e, t, i, o, r, a, s) {
                var l = n.Token;
                for (var u in i) if (i.hasOwnProperty(u) && i[u]) {
                    if (u == s) return;
                    var c = i[u];
                    c = "Array" === n.util.type(c) ? c : [c];
                    for (var d = 0; d < c.length; ++d) {
                        var h = c[d], f = h.inside, p = !!h.lookbehind, g = !!h.greedy, m = 0, v = h.alias;
                        if (g && !h.pattern.global) {
                            var y = h.pattern.toString().match(/[imuy]*$/)[0];
                            h.pattern = RegExp(h.pattern.source, y + "g")
                        }
                        h = h.pattern || h;
                        for (var b = o, x = r; b < t.length; x += t[b].length, ++b) {
                            var w = t[b];
                            if (t.length > e.length) return;
                            if (!(w instanceof l)) {
                                if (g && b != t.length - 1) {
                                    if (h.lastIndex = x, !(E = h.exec(e))) break;
                                    for (var k = E.index + (p ? E[1].length : 0), C = E.index + E[0].length, _ = b, T = x, S = t.length; _ < S && (T < C || !t[_].type && !t[_ - 1].greedy); ++_) k >= (T += t[_].length) && (++b, x = T);
                                    if (t[b] instanceof l) continue;
                                    A = _ - b, w = e.slice(x, T), E.index -= x
                                } else {
                                    h.lastIndex = 0;
                                    var E = h.exec(w), A = 1
                                }
                                if (E) {
                                    p && (m = E[1] ? E[1].length : 0);
                                    C = (k = E.index + m) + (E = E[0].slice(m)).length;
                                    var I = w.slice(0, k), P = w.slice(C), D = [b, A];
                                    I && (++b, x += I.length, D.push(I));
                                    var M = new l(u, f ? n.tokenize(E, f) : E, v, E, g);
                                    if (D.push(M), P && D.push(P), Array.prototype.splice.apply(t, D), 1 != A && n.matchGrammar(e, t, i, b, x, !0, u), a) break
                                } else if (a) break
                            }
                        }
                    }
                }
            },
            tokenize: function (e, t, i) {
                var o = [e], r = t.rest;
                if (r) {
                    for (var a in r) t[a] = r[a];
                    delete t.rest
                }
                return n.matchGrammar(e, o, t, 0, 0, !1), o
            },
            hooks: {
                all: {}, add: function (e, t) {
                    var i = n.hooks.all;
                    i[e] = i[e] || [], i[e].push(t)
                }, run: function (e, t) {
                    var i = n.hooks.all[e];
                    if (i && i.length) for (var o, r = 0; o = i[r++];) o(t)
                }
            }
        }, i = n.Token = function (e, t, n, i, o) {
            this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length, this.greedy = !!o
        };
        if (i.stringify = function (e, t, o) {
                if ("string" == typeof e) return e;
                if ("Array" === n.util.type(e)) return e.map(function (n) {
                    return i.stringify(n, t, e)
                }).join("");
                var r = {
                    type: e.type,
                    content: i.stringify(e.content, t, o),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: o
                };
                if (e.alias) {
                    var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(r.classes, a)
                }
                n.hooks.run("wrap", r);
                var s = Object.keys(r.attributes).map(function (e) {
                    return e + '="' + (r.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                }).join(" ");
                return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + r.content + "</" + r.tag + ">"
            }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", function (e) {
            var t = JSON.parse(e.data), i = t.language, o = t.code, r = t.immediateClose;
            _self.postMessage(n.highlight(o, n.languages[i], i)), r && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return o && (n.filename = o.src, n.manual || o.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism
    }();

function get_social_counts() {
    var e = window.location.protocol + "//" + window.location.host + window.location.pathname;
    $.ajax({
        type: "GET",
        url: "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/inc/get_social_counts.php?thisurl=" + e,
        dataType: "json",
        success: function (e) {
            var t = 1 * document.getElementById("dom-target-fb").textContent.valueOf() + e.facebook;
            t > 0 ? $("#facebook-span").text(t) : $("#facebook-span").hide()
        }
    })
}

function loadTemplatesBy(e, t) {
    $.post(ajax_object.ajaxurl, {action: "ajax_action", category: e}, function (t) {
        console.log(e), $("#products").html(t)
    })
}

"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        greedy: !0,
        inside: {
            tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
            "attr-value": {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                inside: {punctuation: [/^=/, {pattern: /(^|[^\\])["']/, lookbehind: !0}]}
            },
            punctuation: /\/?>/,
            "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
    url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^{}\s][^{};]*?(?=\s*\{)/,
    string: {pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css",
        greedy: !0
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
            "attr-name": {pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside},
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {pattern: /.+/i, inside: Prism.languages.css}
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
    string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {punctuation: /[.\\]/}
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
        alias: "function"
    },
    constant: /\b[A-Z][A-Z\d_]*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\${[^}]+}/,
                inside: {"interpolation-punctuation": {pattern: /^\${|}$/, alias: "punctuation"}, rest: null}
            }, string: /[\s\S]+/
        }
    }
}), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript",
        greedy: !0
    }
}), Prism.languages.js = Prism.languages.javascript, Prism.languages["markup-templating"] = {}, Object.defineProperties(Prism.languages["markup-templating"], {
    buildPlaceholders: {
        value: function (e, t, n, i) {
            e.language === t && (e.tokenStack = [], e.code = e.code.replace(n, function (n) {
                if ("function" == typeof i && !i(n)) return n;
                for (var o = e.tokenStack.length; -1 !== e.code.indexOf("___" + t.toUpperCase() + o + "___");) ++o;
                return e.tokenStack[o] = n, "___" + t.toUpperCase() + o + "___"
            }), e.grammar = Prism.languages.markup)
        }
    }, tokenizePlaceholders: {
        value: function (e, t) {
            if (e.language === t && e.tokenStack) {
                e.grammar = Prism.languages[t];
                var n = 0, i = Object.keys(e.tokenStack), o = function (r) {
                    if (!(n >= i.length)) for (var a = 0; a < r.length; a++) {
                        var s = r[a];
                        if ("string" == typeof s || s.content && "string" == typeof s.content) {
                            var l = i[n], u = e.tokenStack[l], c = "string" == typeof s ? s : s.content,
                                d = c.indexOf("___" + t.toUpperCase() + l + "___");
                            if (d > -1) {
                                ++n;
                                var h, f = c.substring(0, d),
                                    p = new Prism.Token(t, Prism.tokenize(u, e.grammar, t), "language-" + t, u),
                                    g = c.substring(d + ("___" + t.toUpperCase() + l + "___").length);
                                if (f || g ? (h = [f, p, g].filter(function (e) {
                                        return !!e
                                    }), o(h)) : h = p, "string" == typeof s ? Array.prototype.splice.apply(r, [a, 1].concat(h)) : s.content = h, n >= i.length) break
                            }
                        } else s.content && "string" != typeof s.content && o(s.content)
                    }
                };
                o(e.tokens)
            }
        }
    }
}), Prism.languages.json = {
    property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
    string: {pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0},
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    punctuation: /[{}[\]);,]/,
    operator: /:/g,
    boolean: /\b(?:true|false)\b/i,
    null: /\bnull\b/i
}, Prism.languages.jsonp = Prism.languages.json, function (e) {
    e.languages.php = e.languages.extend("clike", {
        keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
        constant: /\b[A-Z0-9_]{2,}\b/,
        comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0}
    }), e.languages.insertBefore("php", "string", {
        "shell-comment": {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0,
            alias: "comment"
        }
    }), e.languages.insertBefore("php", "keyword", {
        delimiter: {pattern: /\?>|<\?(?:php|=)?/i, alias: "important"},
        variable: /\$+(?:\w+\b|(?={))/i,
        package: {pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: {punctuation: /\\/}}
    }), e.languages.insertBefore("php", "operator", {
        property: {
            pattern: /(->)[\w]+/,
            lookbehind: !0
        }
    }), e.languages.insertBefore("php", "string", {
        "nowdoc-string": {
            pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
            greedy: !0,
            alias: "string",
            inside: {
                delimiter: {
                    pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {punctuation: /^<<<'?|[';]$/}
                }
            }
        },
        "heredoc-string": {
            pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
            greedy: !0,
            alias: "string",
            inside: {
                delimiter: {
                    pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {punctuation: /^<<<"?|[";]$/}
                }, interpolation: null
            }
        },
        "single-quoted-string": {pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: "string"},
        "double-quoted-string": {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            greedy: !0,
            alias: "string",
            inside: {interpolation: null}
        }
    }), delete e.languages.php.string;
    var t = {
        pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
        lookbehind: !0,
        inside: {rest: e.languages.php}
    };
    e.languages.php["heredoc-string"].inside.interpolation = t, e.languages.php["double-quoted-string"].inside.interpolation = t, e.hooks.add("before-tokenize", function (t) {
        if (/(?:<\?php|<\?)/gi.test(t.code)) {
            e.languages["markup-templating"].buildPlaceholders(t, "php", /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)
        }
    }), e.hooks.add("after-tokenize", function (t) {
        e.languages["markup-templating"].tokenizePlaceholders(t, "php")
    })
}(Prism), Prism.languages.typescript = Prism.languages.extend("javascript", {
    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/
}), Prism.languages.ts = Prism.languages.typescript, Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0
    },
    atrule: {pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: {rule: /@[\w-]+/}},
    url: /(?:[-a-z]+-)*url(?=\()/i,
    selector: {
        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
        inside: {parent: {pattern: /&/, alias: "important"}, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/}
    }
}), Prism.languages.insertBefore("scss", "atrule", {
    keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: !0
    }]
}), Prism.languages.scss.property = {
    pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
    inside: {variable: /\$[-\w]+|#\{\$[-\w]+\}/}
}, Prism.languages.insertBefore("scss", "important", {variable: /\$[-\w]+|#\{\$[-\w]+\}/}), Prism.languages.insertBefore("scss", "function", {
    placeholder: {
        pattern: /%[-\w]+/,
        alias: "selector"
    },
    statement: {pattern: /\B!(?:default|optional)\b/i, alias: "keyword"},
    boolean: /\b(?:true|false)\b/,
    null: /\bnull\b/,
    operator: {pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0}
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss, function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var e = /\n(?!$)/g, t = function (t) {
            var i = n(t)["white-space"];
            if ("pre-wrap" === i || "pre-line" === i) {
                var o = t.querySelector("code"), r = t.querySelector(".line-numbers-rows"),
                    a = t.querySelector(".line-numbers-sizer"), s = o.textContent.split(e);
                a || ((a = document.createElement("span")).className = "line-numbers-sizer", o.appendChild(a)), a.style.display = "block", s.forEach(function (e, t) {
                    a.textContent = e || "\n";
                    var n = a.getBoundingClientRect().height;
                    r.children[t].style.height = n + "px"
                }), a.textContent = "", a.style.display = "none"
            }
        }, n = function (e) {
            return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
        };
        window.addEventListener("resize", function () {
            Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"), t)
        }), Prism.hooks.add("complete", function (n) {
            if (n.code) {
                var i = n.element.parentNode, o = /\s*\bline-numbers\b\s*/;
                if (i && /pre/i.test(i.nodeName) && (o.test(i.className) || o.test(n.element.className)) && !n.element.querySelector(".line-numbers-rows")) {
                    o.test(n.element.className) && (n.element.className = n.element.className.replace(o, " ")), o.test(i.className) || (i.className += " line-numbers");
                    var r, a = n.code.match(e), s = a ? a.length + 1 : 1, l = new Array(s + 1);
                    l = l.join("<span></span>"), (r = document.createElement("span")).setAttribute("aria-hidden", "true"), r.className = "line-numbers-rows", r.innerHTML = l, i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)), n.element.appendChild(r), t(i), Prism.hooks.run("line-numbers", n)
                }
            }
        }), Prism.hooks.add("line-numbers", function (e) {
            e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
        }), Prism.plugins.lineNumbers = {
            getLine: function (e, t) {
                if ("PRE" === e.tagName && e.classList.contains("line-numbers")) {
                    var n = e.querySelector(".line-numbers-rows"), i = parseInt(e.getAttribute("data-start"), 10) || 1,
                        o = i + (n.children.length - 1);
                    t < i && (t = i), t > o && (t = o);
                    var r = t - i;
                    return n.children[r]
                }
            }
        }
    }
}(), function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var e = [], t = {}, n = function () {
        };
        Prism.plugins.toolbar = {};
        var i = Prism.plugins.toolbar.registerButton = function (n, i) {
            var o;
            o = "function" == typeof i ? i : function (e) {
                var t;
                return "function" == typeof i.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function () {
                    i.onClick.call(this, e)
                })) : "string" == typeof i.url ? (t = document.createElement("a")).href = i.url : t = document.createElement("span"), t.textContent = i.text, t
            }, e.push(t[n] = o)
        }, o = Prism.plugins.toolbar.hook = function (i) {
            var o = i.element.parentNode;
            if (o && /pre/i.test(o.nodeName) && !o.parentNode.classList.contains("code-toolbar")) {
                var r = document.createElement("div");
                r.classList.add("code-toolbar"), o.parentNode.insertBefore(r, o), r.appendChild(o);
                var a = document.createElement("div");
                a.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (e = document.body.getAttribute("data-toolbar-order").split(",").map(function (e) {
                    return t[e] || n
                })), e.forEach(function (e) {
                    var t = e(i);
                    if (t) {
                        var n = document.createElement("div");
                        n.classList.add("toolbar-item"), n.appendChild(t), a.appendChild(n)
                    }
                }), r.appendChild(a)
            }
        };
        i("label", function (e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                var n, i, o = t.getAttribute("data-label");
                try {
                    i = document.querySelector("template#" + o)
                } catch (e) {
                }
                return i ? n = i.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = o), n
            }
        }), Prism.hooks.add("complete", o)
    }
}(), function () {
    if (("undefined" == typeof self || self.Prism) && self.document && Function.prototype.bind) {
        var e, t, n = {
                gradient: {
                    create: (e = {}, t = function (t) {
                        if (e[t]) return e[t];
                        var n = t.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/), i = n && n[1],
                            o = n && n[2],
                            r = t.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g, "").split(/\s*,\s*/);
                        return o.indexOf("linear") >= 0 ? e[t] = function (e, t, n) {
                            var i = "180deg";
                            return /^(?:-?\d*\.?\d+(?:deg|rad)|to\b|top|right|bottom|left)/.test(n[0]) && (i = n.shift()).indexOf("to ") < 0 && (i.indexOf("top") >= 0 ? i = i.indexOf("left") >= 0 ? "to bottom right" : i.indexOf("right") >= 0 ? "to bottom left" : "to bottom" : i.indexOf("bottom") >= 0 ? i = i.indexOf("left") >= 0 ? "to top right" : i.indexOf("right") >= 0 ? "to top left" : "to top" : i.indexOf("left") >= 0 ? i = "to right" : i.indexOf("right") >= 0 ? i = "to left" : e && (i.indexOf("deg") >= 0 ? i = 90 - parseFloat(i) + "deg" : i.indexOf("rad") >= 0 && (i = Math.PI / 2 - parseFloat(i) + "rad"))), t + "(" + i + "," + n.join(",") + ")"
                        }(i, o, r) : o.indexOf("radial") >= 0 ? e[t] = function (e, t, n) {
                            if (n[0].indexOf("at") < 0) {
                                var i = "center", o = "ellipse", r = "farthest-corner";
                                if (/\bcenter|top|right|bottom|left\b|^\d+/.test(n[0]) && (i = n.shift().replace(/\s*-?\d+(?:rad|deg)\s*/, "")), /\bcircle|ellipse|closest|farthest|contain|cover\b/.test(n[0])) {
                                    var a = n.shift().split(/\s+/);
                                    !a[0] || "circle" !== a[0] && "ellipse" !== a[0] || (o = a.shift()), a[0] && (r = a.shift()), "cover" === r ? r = "farthest-corner" : "contain" === r && (r = "clothest-side")
                                }
                                return t + "(" + o + " " + r + " at " + i + "," + n.join(",") + ")"
                            }
                            return t + "(" + n.join(",") + ")"
                        }(0, o, r) : e[t] = o + "(" + r.join(",") + ")"
                    }, function () {
                        new Prism.plugins.Previewer("gradient", function (e) {
                            return this.firstChild.style.backgroundImage = "", this.firstChild.style.backgroundImage = t(e), !!this.firstChild.style.backgroundImage
                        }, "*", function () {
                            this._elt.innerHTML = "<div></div>"
                        })
                    }),
                    tokens: {
                        gradient: {
                            pattern: /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,
                            inside: {function: /[\w-]+(?=\()/, punctuation: /[(),]/}
                        }
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        sass: [{
                            lang: "sass",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }, {
                            lang: "sass",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                }, angle: {
                    create: function () {
                        new Prism.plugins.Previewer("angle", function (e) {
                            var t, n, i = parseFloat(e), o = e.match(/[a-z]+$/i);
                            if (!i || !o) return !1;
                            switch (o = o[0]) {
                                case"deg":
                                    t = 360;
                                    break;
                                case"grad":
                                    t = 400;
                                    break;
                                case"rad":
                                    t = 2 * Math.PI;
                                    break;
                                case"turn":
                                    t = 1
                            }
                            return n = 100 * i / t, n %= 100, this[(i < 0 ? "set" : "remove") + "Attribute"]("data-negative", ""), this.querySelector("circle").style.strokeDasharray = Math.abs(n) + ",500", !0
                        }, "*", function () {
                            this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                        })
                    },
                    tokens: {angle: /(?:\b|\B-|(?=\B\.))\d*\.?\d+(?:deg|g?rad|turn)\b/i},
                    languages: {
                        css: !0,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                        },
                        sass: [{
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }, {
                            lang: "sass",
                            before: "operator",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                }, color: {
                    create: function () {
                        new Prism.plugins.Previewer("color", function (e) {
                            return this.style.backgroundColor = "", this.style.backgroundColor = e, !!this.style.backgroundColor
                        })
                    },
                    tokens: {
                        color: {
                            pattern: /\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                            inside: {function: /[\w-]+(?=\()/, punctuation: /[(),]/}
                        }
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                        },
                        sass: [{
                            lang: "sass",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }, {
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                }, easing: {
                    create: function () {
                        new Prism.plugins.Previewer("easing", function (e) {
                            var t = (e = {
                                linear: "0,0,1,1",
                                ease: ".25,.1,.25,1",
                                "ease-in": ".42,0,1,1",
                                "ease-out": "0,0,.58,1",
                                "ease-in-out": ".42,0,.58,1"
                            }[e] || e).match(/-?\d*\.?\d+/g);
                            if (4 === t.length) {
                                t = t.map(function (e, t) {
                                    return 100 * (t % 2 ? 1 - e : e)
                                }), this.querySelector("path").setAttribute("d", "M0,100 C" + t[0] + "," + t[1] + ", " + t[2] + "," + t[3] + ", 100,0");
                                var n = this.querySelectorAll("line");
                                return n[0].setAttribute("x2", t[0]), n[0].setAttribute("y2", t[1]), n[1].setAttribute("x2", t[2]), n[1].setAttribute("y2", t[3]), !0
                            }
                            return !1
                        }, "*", function () {
                            this._elt.innerHTML = '<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /></svg>'
                        })
                    },
                    tokens: {
                        easing: {
                            pattern: /\bcubic-bezier\((?:-?\d*\.?\d+,\s*){3}-?\d*\.?\d+\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i,
                            inside: {function: /[\w-]+(?=\()/, punctuation: /[(),]/}
                        }
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        sass: [{
                            lang: "sass",
                            inside: "inside",
                            before: "punctuation",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }, {
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                }, time: {
                    create: function () {
                        new Prism.plugins.Previewer("time", function (e) {
                            var t = parseFloat(e), n = e.match(/[a-z]+$/i);
                            return !(!t || !n) && (n = n[0], this.querySelector("circle").style.animationDuration = 2 * t + n, !0)
                        }, "*", function () {
                            this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                        })
                    },
                    tokens: {time: /(?:\b|\B-|(?=\B\.))\d*\.?\d+m?s\b/i},
                    languages: {
                        css: !0,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                        },
                        sass: [{
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }, {
                            lang: "sass",
                            before: "operator",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                }
            }, i = /(?:^|\s)token(?=$|\s)/, o = /(?:^|\s)active(?=$|\s)/g, r = /(?:^|\s)flipped(?=$|\s)/g,
            a = function (e, t, n, i) {
                this._elt = null, this._type = e, this._clsRegexp = RegExp("(?:^|\\s)" + e + "(?=$|\\s)"), this._token = null, this.updater = t, this._mouseout = this.mouseout.bind(this), this.initializer = i;
                var o = this;
                n || (n = ["*"]), "Array" !== Prism.util.type(n) && (n = [n]), n.forEach(function (e) {
                    "string" != typeof e && (e = e.lang), a.byLanguages[e] || (a.byLanguages[e] = []), a.byLanguages[e].indexOf(o) < 0 && a.byLanguages[e].push(o)
                }), a.byType[e] = this
            };
        for (var s in a.prototype.init = function () {
            this._elt || (this._elt = document.createElement("div"), this._elt.className = "prism-previewer prism-previewer-" + this._type, document.body.appendChild(this._elt), this.initializer && this.initializer())
        }, a.prototype.isDisabled = function (e) {
            do {
                if (e.hasAttribute && e.hasAttribute("data-previewers")) return -1 === (e.getAttribute("data-previewers") || "").split(/\s+/).indexOf(this._type)
            } while (e = e.parentNode);
            return !1
        }, a.prototype.check = function (e) {
            if (!i.test(e.className) || !this.isDisabled(e)) {
                do {
                    if (i.test(e.className) && this._clsRegexp.test(e.className)) break
                } while (e = e.parentNode);
                e && e !== this._token && (this._token = e, this.show())
            }
        }, a.prototype.mouseout = function () {
            this._token.removeEventListener("mouseout", this._mouseout, !1), this._token = null, this.hide()
        }, a.prototype.show = function () {
            if (this._elt || this.init(), this._token) if (this.updater.call(this._elt, this._token.textContent)) {
                this._token.addEventListener("mouseout", this._mouseout, !1);
                var e = function (e) {
                    var t = 0, n = 0, i = e;
                    if (i.parentNode) {
                        do {
                            t += i.offsetLeft, n += i.offsetTop
                        } while ((i = i.offsetParent) && i.nodeType < 9);
                        i = e;
                        do {
                            t -= i.scrollLeft, n -= i.scrollTop
                        } while ((i = i.parentNode) && !/body/i.test(i.nodeName))
                    }
                    return {
                        top: n,
                        right: innerWidth - t - e.offsetWidth,
                        bottom: innerHeight - n - e.offsetHeight,
                        left: t
                    }
                }(this._token);
                this._elt.className += " active", e.top - this._elt.offsetHeight > 0 ? (this._elt.className = this._elt.className.replace(r, ""), this._elt.style.top = e.top + "px", this._elt.style.bottom = "") : (this._elt.className += " flipped", this._elt.style.bottom = e.bottom + "px", this._elt.style.top = ""), this._elt.style.left = e.left + Math.min(200, this._token.offsetWidth / 2) + "px"
            } else this.hide()
        }, a.prototype.hide = function () {
            this._elt.className = this._elt.className.replace(o, "")
        }, a.byLanguages = {}, a.byType = {}, a.initEvents = function (e, t) {
            var n = [];
            a.byLanguages[t] && (n = n.concat(a.byLanguages[t])), a.byLanguages["*"] && (n = n.concat(a.byLanguages["*"])), e.addEventListener("mouseover", function (e) {
                var t = e.target;
                n.forEach(function (e) {
                    e.check(t)
                })
            }, !1)
        }, Prism.plugins.Previewer = a, Prism.hooks.add("before-highlight", function (e) {
            for (var t in n) {
                var i = n[t].languages;
                if (e.language && i[e.language] && !i[e.language].initialized) {
                    var o = i[e.language];
                    "Array" !== Prism.util.type(o) && (o = [o]), o.forEach(function (o) {
                        var r, a, s, l;
                        !0 === o ? (r = "important", a = e.language, o = e.language) : (r = o.before || "important", a = o.inside || o.lang, s = o.root || Prism.languages, l = o.skip, o = e.language), !l && Prism.languages[o] && (Prism.languages.insertBefore(a, r, n[t].tokens, s), e.grammar = Prism.languages[o], i[e.language] = {initialized: !0})
                    })
                }
            }
        }), Prism.hooks.add("after-highlight", function (e) {
            (a.byLanguages["*"] || a.byLanguages[e.language]) && a.initEvents(e.element, e.language)
        }), n) n[s].create()
    }
}(), function () {
    var e = Object.assign || function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    };

    function t(t) {
        this.defaults = e({}, t)
    }

    function n(e) {
        for (var t = 0, n = 0; n < e.length; ++n) e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
        return e.length + t
    }

    t.prototype = {
        setDefaults: function (t) {
            this.defaults = e(this.defaults, t)
        }, normalize: function (t, n) {
            for (var i in n = e(this.defaults, n)) {
                var o = i.replace(/-(\w)/g, function (e, t) {
                    return t.toUpperCase()
                });
                "normalize" !== i && "setDefaults" !== o && n[i] && this[o] && (t = this[o].call(this, t, n[i]))
            }
            return t
        }, leftTrim: function (e) {
            return e.replace(/^\s+/, "")
        }, rightTrim: function (e) {
            return e.replace(/\s+$/, "")
        }, tabsToSpaces: function (e, t) {
            return t = 0 | t || 4, e.replace(/\t/g, new Array(++t).join(" "))
        }, spacesToTabs: function (e, t) {
            return t = 0 | t || 4, e.replace(new RegExp(" {" + t + "}", "g"), "\t")
        }, removeTrailing: function (e) {
            return e.replace(/\s*?$/gm, "")
        }, removeInitialLineFeed: function (e) {
            return e.replace(/^(?:\r?\n|\r)/, "")
        }, removeIndent: function (e) {
            var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
            return t && t[0].length ? (t.sort(function (e, t) {
                return e.length - t.length
            }), t[0].length ? e.replace(new RegExp("^" + t[0], "gm"), "") : e) : e
        }, indent: function (e, t) {
            return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&")
        }, breakLines: function (e, t) {
            t = !0 === t ? 80 : 0 | t || 80;
            for (var i = e.split("\n"), o = 0; o < i.length; ++o) if (!(n(i[o]) <= t)) {
                for (var r = i[o].split(/(\s+)/g), a = 0, s = 0; s < r.length; ++s) {
                    var l = n(r[s]);
                    (a += l) > t && (r[s] = "\n" + r[s], a = l)
                }
                i[o] = r.join("")
            }
            return i.join("\n")
        }
    }, "undefined" != typeof module && module.exports && (module.exports = t), void 0 !== Prism && (Prism.plugins.NormalizeWhitespace = new t({
        "remove-trailing": !0,
        "remove-indent": !0,
        "left-trim": !0,
        "right-trim": !0
    }), Prism.hooks.add("before-sanity-check", function (e) {
        var t = Prism.plugins.NormalizeWhitespace;
        if (!e.settings || !1 !== e.settings["whitespace-normalization"]) if (e.element && e.element.parentNode || !e.code) {
            var n = e.element.parentNode, i = /\bno-whitespace-normalization\b/;
            if (e.code && n && "pre" === n.nodeName.toLowerCase() && !i.test(n.className) && !i.test(e.element.className)) {
                for (var o = n.childNodes, r = "", a = "", s = !1, l = 0; l < o.length; ++l) {
                    var u = o[l];
                    u == e.element ? s = !0 : "#text" === u.nodeName && (s ? a += u.nodeValue : r += u.nodeValue, n.removeChild(u), --l)
                }
                if (e.element.children.length && Prism.plugins.KeepMarkup) {
                    var c = r + e.element.innerHTML + a;
                    e.element.innerHTML = t.normalize(c, e.settings), e.code = e.element.textContent
                } else e.code = r + e.code + a, e.code = t.normalize(e.code, e.settings)
            }
        } else e.code = t.normalize(e.code, e.settings)
    }))
}(), function () {
    if ("undefined" != typeof self && self.Prism && self.document) if (Prism.plugins.toolbar) {
        var e = window.ClipboardJS || void 0;
        e || "function" != typeof require || (e = require("clipboard"));
        var t = [];
        if (!e) {
            var n = document.createElement("script"), i = document.querySelector("head");
            n.onload = function () {
                if (e = window.ClipboardJS) for (; t.length;) t.pop()()
            }, n.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", i.appendChild(n)
        }
        Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (n) {
            var i = document.createElement("button");
            return i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code', i.classList = "btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect", e ? o() : t.push(o), i;

            function o() {
                var t = new e(i, {
                    text: function () {
                        return n.code
                    }
                });
                t.on("success", function () {
                    i.textContent = "Copied!", r()
                }), t.on("error", function () {
                    i.textContent = "Press Ctrl+C to copy", r()
                })
            }

            function r() {
                setTimeout(function () {
                    i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code'
                }, 5e3)
            }
        })
    } else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")
}(), $(function (e) {
    e('.documentation a[href="#"]').click(function (e) {
        e.preventDefault()
    })
}), function () {
    var e = window.location.host;
}(), jQuery(document).ready(function (e) {
    e("form#signup").on("submit", function (t) {
        t.preventDefault(), e.ajax({
            type: "POST",
            dataType: "json",
            url: mdw_search_object.ajaxurl,
            data: {
                action: "ajaxregister",
                name: e("#regname").val(),
                username: e("#regusername").val(),
                password: e("#regpassword").val(),
                email: e("#regemail").val(),
                security: e("#regsecurity").val()
            },
            success: function (t) {
                e("#ajax-response").text(t.message), 1 == t.loggedin && (document.location.href = "https://mdbootstrap.com/registration-completed/")
            },
            error: function (e) {
                console.log(e)
            }
        })
    })
});