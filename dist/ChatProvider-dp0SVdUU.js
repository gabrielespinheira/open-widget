"use client";
var kl = Object.defineProperty;
var Sl = (e, t, n) => t in e ? kl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Fi = (e, t, n) => Sl(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as ce, Fragment as El, jsxs as Nn } from "react/jsx-runtime";
import * as ei from "react";
import Ot, { createContext as fs, useContext as hs, useMemo as Jt, createElement as vl, useEffect as He, useLayoutEffect as Cl, useRef as pt, useCallback as we, useDebugValue as Al, useState as vn, useReducer as Ol } from "react";
import * as _t from "@radix-ui/react-avatar";
import { clsx as _l } from "clsx";
import { produce as Tl } from "immer";
import A from "zod";
function ti(e) {
  const t = fs({});
  return [() => {
    const r = hs(t);
    if (r === void 0)
      throw new Error("useSafeContext must be used within a Provider");
    return r;
  }, t.Provider];
}
const Rl = {
  ok: "حسنا",
  yes: "نعم",
  no: "لا",
  agree: "موافق",
  cancel: "إلغاء",
  "yes-exit": "نعم، اخرج",
  "yes-reset": "نعم، إعادة تعيين",
  "no-cancel": "لا، إلغاء",
  "are-you-sure": "هل أنت متأكد؟",
  recording: "تسجيل",
  "thank-you": "شكرا",
  "sorry-try-again": "عذرا، حاول مرة أخرى",
  "error-occurred": "حدث خطأ",
  "please-try-again": "يرجى المحاولة مرة أخرى",
  "write-a-message": "اكتب رسالة...",
  "send-message": "إرسال رسالة",
  connected: "متصل",
  connecting: "جاري الاتصال",
  reconnecting: "جاري إعادة الاتصال",
  reconnected: "تم إعادة الاتصال",
  disconnecting: "جاري قطع الاتصال",
  disconnected: "قطع الاتصال",
  error: "خطأ",
  "persist-session": "حفظ الجلسة",
  settings: "إعدادات",
  close: "إغلاق",
  help: "مساعدة",
  chat: "محادثة",
  send: "إرسال",
  copy: "نسخ",
  copied: "تم النسخ",
  "sound-effects": "التاثيرات الصوتية",
  language: "اللغة",
  select: "اختر",
  agent: "الوكيل",
  user: "المستخدم",
  bot: "البوت",
  "reset-conversation-confirm": "هل أنت متأكد من أنك تريد إعادة تعيين المحادثة؟",
  "close-widget": "إغلاق الودجة",
  "got-any-questions": "هل لديك أي أسئلة؟ تحدث معنا!",
  "typical-response-time": "عادة ما نرد في أقل من دقيقة واحدة",
  "session-closed-lead": "تم حل مشكلتك!"
}, Il = {
  ok: "OK",
  yes: "Ja",
  no: "Nein",
  agree: "Zustimmen",
  cancel: "Stornieren",
  "yes-exit": "Ja, beenden",
  "yes-reset": "Ja, zurücksetzen",
  "no-cancel": "Nein, abbrechen",
  "are-you-sure": "Sind Sie sicher?",
  recording: "Aufnahme läuft",
  "thank-you": "Vielen Dank",
  "sorry-try-again": "Entschuldigung, bitte versuchen Sie es erneut",
  "error-occurred": "Ein Fehler ist aufgetreten",
  "please-try-again": "Bitte versuchen Sie es erneut",
  "write-a-message": "Nachricht schreiben...",
  "send-message": "Nachricht senden",
  connected: "Verbunden",
  connecting: "Verbindung wird hergestellt",
  reconnecting: "Verbindung wird wiederhergestellt",
  reconnected: "Wieder verbunden",
  disconnecting: "Verbindung wird getrennt",
  disconnected: "Verbindung getrennt",
  error: "Fehler",
  "persist-session": "Sitzung beibehalten",
  settings: "Einstellungen",
  close: "Schließen",
  help: "Hilfe",
  chat: "Chat",
  send: "Senden",
  copy: "Kopieren",
  copied: "Kopiert",
  "sound-effects": "Soundeffekte",
  language: "Sprache",
  select: "Auswählen",
  agent: "Agent",
  user: "Benutzer",
  bot: "Bot",
  "got-any-questions": "Haben Sie Fragen? Chatten Sie mit uns!",
  "typical-response-time": "Üblicherweise antworten wir in weniger als 1 Minute",
  "reset-conversation-confirm": "Möchten Sie die Konversation wirklich zurücksetzen?",
  "close-widget": "Widget schließen",
  "session-closed-lead": "Ihr Problem wurde gelöst!"
}, Ll = {
  ok: "OK",
  yes: "Yes",
  no: "No",
  agree: "Agree",
  cancel: "Cancel",
  "yes-exit": "Yes, exit",
  "yes-reset": "Yes, reset",
  "no-cancel": "No, cancel",
  "are-you-sure": "Are you sure?",
  recording: "Recording...",
  "thank-you": "Thank you",
  "sorry-try-again": "Sorry, please try again",
  "error-occurred": "An error occurred",
  "please-try-again": "Please try again",
  "write-a-message": "Write a message...",
  "send-message": "Send message",
  connected: "Connected",
  connecting: "Connecting",
  reconnecting: "Reconnecting",
  reconnected: "Reconnected",
  disconnecting: "Disconnecting",
  disconnected: "Disconnected",
  error: "Error",
  "persist-session": "Persist session",
  settings: "Settings",
  close: "Close",
  help: "Help",
  chat: "Chat",
  send: "Send",
  copy: "Copy",
  copied: "Copied",
  "sound-effects": "Sound effects",
  language: "Language",
  select: "Select",
  agent: "Agent",
  user: "User",
  bot: "Bot",
  "reset-conversation-confirm": "Are you sure you want to reset the conversation?",
  "close-widget": "Close widget",
  "got-any-questions": "Got any questions? Chat with us!",
  "typical-response-time": "Typically respond in less than 1 minute",
  "session-closed-lead": "Your issue has been resolved!"
}, Nl = {
  ok: "D'accord",
  yes: "Oui",
  no: "Non",
  agree: "Accepter",
  cancel: "Annuler",
  "yes-exit": "Oui, quitter",
  "yes-reset": "Oui, réinitialiser",
  "no-cancel": "Non, annuler",
  "are-you-sure": "Êtes-vous sûr ?",
  recording: "Enregistrement...",
  "thank-you": "Merci",
  "sorry-try-again": "Désolé, veuillez réessayer",
  "error-occurred": "Une erreur s'est produite",
  "please-try-again": "Veuillez réessayer",
  "write-a-message": "Écrivez un message...",
  "send-message": "Envoyer le message",
  connected: "Connecté",
  connecting: "Connexion en cours",
  reconnecting: "Reconnexion en cours",
  reconnected: "Reconnecté",
  disconnecting: "Déconnexion en cours",
  disconnected: "Déconnecté",
  error: "Erreur",
  "persist-session": "Conserver la session",
  settings: "Paramètres",
  close: "Fermer",
  help: "Aide",
  chat: "Chat",
  send: "Envoyer",
  copy: "Copier",
  copied: "Copié",
  "sound-effects": "Effets sonores",
  language: "Langue",
  select: "Sélectionner",
  agent: "Agent",
  user: "Utilisateur",
  bot: "Bot",
  "reset-conversation-confirm": "Êtes-vous sûr de vouloir réinitialiser la conversation ?",
  "close-widget": "Fermer le widget",
  "got-any-questions": "Vous avez des questions ? Chattez avec nous !",
  "typical-response-time": "Nous répondons généralement en moins d'une minute",
  "session-closed-lead": "Votre problème a été résolu !"
}, Pl = {
  ok: "OK",
  yes: "Ja",
  no: "Nee",
  agree: "Akkoord",
  cancel: "Annuleren",
  "yes-exit": "Ja, afsluiten",
  "yes-reset": "Ja, resetten",
  "no-cancel": "Nee, annuleren",
  "are-you-sure": "Weet u het zeker?",
  recording: "Opname...",
  "thank-you": "Dank u",
  "sorry-try-again": "Sorry, probeer het opnieuw",
  "error-occurred": "Er is een fout opgetreden",
  "please-try-again": "Probeer het opnieuw",
  "write-a-message": "Schrijf een bericht...",
  "send-message": "Bericht verzenden",
  connected: "Verbonden",
  connecting: "Verbinding maken",
  reconnecting: "Opnieuw verbinding maken",
  reconnected: "Opnieuw verbonden",
  disconnecting: "Verbinding verbreken",
  disconnected: "Verbinding verbroken",
  error: "Fout",
  "persist-session": "Sessie behouden",
  settings: "Instellingen",
  close: "Sluiten",
  help: "Help",
  chat: "Chat",
  send: "Verzenden",
  copy: "Kopiëren",
  copied: "Gekopieerd",
  "sound-effects": "Geluidseffecten",
  language: "Taal",
  select: "Selecteren",
  agent: "Agent",
  user: "Gebruiker",
  bot: "Bot",
  "reset-conversation-confirm": "Weet u zeker dat u het gesprek wilt resetten?",
  "close-widget": "Widget sluiten",
  "got-any-questions": "Heeft u vragen? Chat met ons!",
  "typical-response-time": "We reageren doorgaans binnen 1 minuut",
  "session-closed-lead": "Your issue has been resolved!"
}, Dl = {
  ok: "OK",
  yes: "Sim",
  no: "Não",
  agree: "Concordo",
  cancel: "Cancelar",
  "yes-exit": "Sim, sair",
  "yes-reset": "Sim, redefinir",
  "no-cancel": "Não, cancelar",
  "are-you-sure": "Você tem certeza?",
  recording: "Gravando...",
  "thank-you": "Obrigado",
  "sorry-try-again": "Desculpe, tente novamente",
  "error-occurred": "Ocorreu um erro",
  "please-try-again": "Por favor, tente novamente",
  "write-a-message": "Escreva uma mensagem...",
  "send-message": "Enviar mensagem",
  connected: "Conectado",
  connecting: "Conectando",
  reconnecting: "Reconectando",
  reconnected: "Reconectado",
  disconnecting: "Desconectando",
  disconnected: "Desconectado",
  error: "Erro",
  "persist-session": "Persistir sessão",
  settings: "Configurações",
  close: "Fechar",
  help: "Ajuda",
  chat: "Bate-papo",
  send: "Enviar",
  copy: "Copiar",
  copied: "Copiado",
  "sound-effects": "Efeitos sonoros",
  language: "Idioma",
  select: "Selecionar",
  agent: "Agente",
  user: "Usuário",
  bot: "Bot",
  "reset-conversation-confirm": "Você tem certeza de que deseja redefinir a conversa?",
  "close-widget": "Fechar widget",
  "got-any-questions": "Tem alguma dúvida? Converse conosco!",
  "typical-response-time": "Geralmente respondemos em menos de 1 minuto",
  "session-closed-lead": "Seu problema foi resolvido!"
}, Fl = {
  en: Ll,
  ar: Rl,
  nl: Pl,
  fr: Nl,
  de: Il,
  pt: Dl
};
function zl(e, t) {
  const n = Fl[t];
  return n && n[e] || "";
}
const [Bl, Ml] = ti();
function jl({ children: e }) {
  const t = ni();
  return /* @__PURE__ */ ce(
    Ml,
    {
      value: {
        get: (n, r) => zl(n, t.language ?? "en") + (r ?? ""),
        lang: t.language
      },
      children: e
    }
  );
}
const [ni, Ul] = ti(), ql = "en";
function rx({
  children: e,
  data: t
}) {
  const n = Jt(() => ({
    ...t,
    language: t.language ?? ql
  }), [t]);
  return /* @__PURE__ */ ce(Ul, { value: n, children: /* @__PURE__ */ ce(jl, { children: e }) });
}
function zi(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
const Se = ft(/[A-Za-z]/), xe = ft(/[\dA-Za-z]/), Vl = ft(/[#-'*+\--9=?A-Z^-~]/);
function Cn(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const vr = ft(/\d/), Hl = ft(/[\dA-Fa-f]/), Gl = ft(/[!-/:-@[-`{-~]/);
function F(e) {
  return e !== null && e < -2;
}
function ne(e) {
  return e !== null && (e < 0 || e === 32);
}
function G(e) {
  return e === -2 || e === -1 || e === 32;
}
const Pn = ft(new RegExp("\\p{P}|\\p{S}", "u")), bt = ft(/\s/);
function ft(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Wl(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const Dn = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Ql;
    if (typeof e == "function")
      return Fn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Yl(e) : Xl(e);
    if (typeof e == "string")
      return Kl(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Yl(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Dn(e[n]);
  return Fn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function Xl(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Fn(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function Kl(e) {
  return Fn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Fn(e) {
  return t;
  function t(n, r, i) {
    return !!(Jl(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Ql() {
  return !0;
}
function Jl(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const ps = [], Zl = !0, Cr = !1, $l = "skip";
function ds(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Dn(i), s = r ? -1 : 1;
  a(e, void 0, [])();
  function a(l, u, f) {
    const c = (
      /** @type {Record<string, unknown>} */
      l && typeof l == "object" ? l : {}
    );
    if (typeof c.type == "string") {
      const h = (
        // `hast`
        typeof c.tagName == "string" ? c.tagName : (
          // `xast`
          typeof c.name == "string" ? c.name : void 0
        )
      );
      Object.defineProperty(d, "name", {
        value: "node (" + (l.type + (h ? "<" + h + ">" : "")) + ")"
      });
    }
    return d;
    function d() {
      let h = ps, p, g, w;
      if ((!t || o(l, u, f[f.length - 1] || void 0)) && (h = eu(n(l, f)), h[0] === Cr))
        return h;
      if ("children" in l && l.children) {
        const b = (
          /** @type {UnistParent} */
          l
        );
        if (b.children && h[0] !== $l)
          for (g = (r ? b.children.length : -1) + s, w = f.concat(b); g > -1 && g < b.children.length; ) {
            const v = b.children[g];
            if (p = a(v, g, w)(), p[0] === Cr)
              return p;
            g = typeof p[1] == "number" ? p[1] : g + s;
          }
      }
      return h;
    }
  }
}
function eu(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Zl, e] : e == null ? ps : [e];
}
function tu(e, t, n) {
  const i = Dn((n || {}).ignore || []), o = nu(t);
  let s = -1;
  for (; ++s < o.length; )
    ds(e, "text", a);
  function a(u, f) {
    let c = -1, d;
    for (; ++c < f.length; ) {
      const h = f[c], p = d ? d.children : void 0;
      if (i(
        h,
        p ? p.indexOf(h) : void 0,
        d
      ))
        return;
      d = h;
    }
    if (d)
      return l(u, f);
  }
  function l(u, f) {
    const c = f[f.length - 1], d = o[s][0], h = o[s][1];
    let p = 0;
    const w = c.children.indexOf(u);
    let b = !1, v = [];
    d.lastIndex = 0;
    let x = d.exec(u.value);
    for (; x; ) {
      const O = x.index, _ = {
        index: x.index,
        input: x.input,
        stack: [...f, u]
      };
      let k = h(...x, _);
      if (typeof k == "string" && (k = k.length > 0 ? { type: "text", value: k } : void 0), k === !1 ? d.lastIndex = O + 1 : (p !== O && v.push({
        type: "text",
        value: u.value.slice(p, O)
      }), Array.isArray(k) ? v.push(...k) : k && v.push(k), p = O + x[0].length, b = !0), !d.global)
        break;
      x = d.exec(u.value);
    }
    return b ? (p < u.value.length && v.push({ type: "text", value: u.value.slice(p) }), c.children.splice(w, 1, ...v)) : v = [u], w + v.length;
  }
}
function nu(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([ru(i[0]), iu(i[1])]);
  }
  return t;
}
function ru(e) {
  return typeof e == "string" ? new RegExp(Wl(e), "g") : e;
}
function iu(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Yn = "phrasing", Xn = ["autolink", "link", "image", "label"];
function ou() {
  return {
    transforms: [hu],
    enter: {
      literalAutolink: au,
      literalAutolinkEmail: Kn,
      literalAutolinkHttp: Kn,
      literalAutolinkWww: Kn
    },
    exit: {
      literalAutolink: fu,
      literalAutolinkEmail: cu,
      literalAutolinkHttp: lu,
      literalAutolinkWww: uu
    }
  };
}
function su() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Yn,
        notInConstruct: Xn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Yn,
        notInConstruct: Xn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Yn,
        notInConstruct: Xn
      }
    ]
  };
}
function au(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Kn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function lu(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function uu(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function cu(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function fu(e) {
  this.exit(e);
}
function hu(e) {
  tu(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, pu],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), du]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function pu(e, t, n, r, i) {
  let o = "";
  if (!ms(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !mu(n)))
    return !1;
  const s = gu(n + r);
  if (!s[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: o + t + s[0],
    children: [{ type: "text", value: t + s[0] }]
  };
  return s[1] ? [a, { type: "text", value: s[1] }] : a;
}
function du(e, t, n, r) {
  return (
    // Not an expected previous character.
    !ms(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function mu(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function gu(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = zi(e, "(");
  let o = zi(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function ms(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || bt(n) || Pn(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
function Ge(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
gs.peek = Ou;
function yu() {
  return {
    enter: {
      gfmFootnoteDefinition: wu,
      gfmFootnoteDefinitionLabelString: xu,
      gfmFootnoteCall: Eu,
      gfmFootnoteCallString: vu
    },
    exit: {
      gfmFootnoteDefinition: Su,
      gfmFootnoteDefinitionLabelString: ku,
      gfmFootnoteCall: Au,
      gfmFootnoteCallString: Cu
    }
  };
}
function bu() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: _u, footnoteReference: gs }
  };
}
function wu(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function xu() {
  this.buffer();
}
function ku(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.label = t, n.identifier = Ge(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Su(e) {
  this.exit(e);
}
function Eu(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function vu() {
  this.buffer();
}
function Cu(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.label = t, n.identifier = Ge(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Au(e) {
  this.exit(e);
}
function gs(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const s = n.enter("footnoteReference"), a = n.enter("reference");
  return o += i.move(
    n.safe(n.associationId(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), a(), s(), o += i.move("]"), o;
}
function Ou() {
  return "[";
}
function _u(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const s = n.enter("footnoteDefinition"), a = n.enter("label");
  return o += i.move(
    n.safe(n.associationId(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), a(), o += i.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), i.shift(4), o += i.move(
    n.indentLines(n.containerFlow(e, i.current()), Tu)
  ), s(), o;
}
function Tu(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
const Ru = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
ys.peek = Du;
function Iu() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Nu },
    exit: { strikethrough: Pu }
  };
}
function Lu() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Ru
      }
    ],
    handlers: { delete: ys }
  };
}
function Nu(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Pu(e) {
  this.exit(e);
}
function ys(e, t, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let s = i.move("~~");
  return s += n.containerPhrasing(e, {
    ...i.current(),
    before: s,
    after: "~"
  }), s += i.move("~~"), o(), s;
}
function Du() {
  return "~";
}
function Fu(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || Bu, i = [], o = [], s = [], a = [];
  let l = 0, u = -1;
  for (; ++u < e.length; ) {
    const p = [], g = [];
    let w = -1;
    for (e[u].length > l && (l = e[u].length); ++w < e[u].length; ) {
      const b = zu(e[u][w]);
      if (t.alignDelimiters !== !1) {
        const v = r(b);
        g[w] = v, (a[w] === void 0 || v > a[w]) && (a[w] = v);
      }
      p.push(b);
    }
    o[u] = p, s[u] = g;
  }
  let f = -1;
  if (typeof n == "object" && "length" in n)
    for (; ++f < l; )
      i[f] = Bi(n[f]);
  else {
    const p = Bi(n);
    for (; ++f < l; )
      i[f] = p;
  }
  f = -1;
  const c = [], d = [];
  for (; ++f < l; ) {
    const p = i[f];
    let g = "", w = "";
    p === 99 ? (g = ":", w = ":") : p === 108 ? g = ":" : p === 114 && (w = ":");
    let b = t.alignDelimiters === !1 ? 1 : Math.max(
      1,
      a[f] - g.length - w.length
    );
    const v = g + "-".repeat(b) + w;
    t.alignDelimiters !== !1 && (b = g.length + b + w.length, b > a[f] && (a[f] = b), d[f] = b), c[f] = v;
  }
  o.splice(1, 0, c), s.splice(1, 0, d), u = -1;
  const h = [];
  for (; ++u < o.length; ) {
    const p = o[u], g = s[u];
    f = -1;
    const w = [];
    for (; ++f < l; ) {
      const b = p[f] || "";
      let v = "", x = "";
      if (t.alignDelimiters !== !1) {
        const O = a[f] - (g[f] || 0), _ = i[f];
        _ === 114 ? v = " ".repeat(O) : _ === 99 ? O % 2 ? (v = " ".repeat(O / 2 + 0.5), x = " ".repeat(O / 2 - 0.5)) : (v = " ".repeat(O / 2), x = v) : x = " ".repeat(O);
      }
      t.delimiterStart !== !1 && !f && w.push("|"), t.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(t.alignDelimiters === !1 && b === "") && (t.delimiterStart !== !1 || f) && w.push(" "), t.alignDelimiters !== !1 && w.push(v), w.push(b), t.alignDelimiters !== !1 && w.push(x), t.padding !== !1 && w.push(" "), (t.delimiterEnd !== !1 || f !== l - 1) && w.push("|");
    }
    h.push(
      t.delimiterEnd === !1 ? w.join("").replace(/ +$/, "") : w.join("")
    );
  }
  return h.join(`
`);
}
function zu(e) {
  return e == null ? "" : String(e);
}
function Bu(e) {
  return e.length;
}
function Bi(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Mu(e, t, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const s = n.indentLines(
    n.containerFlow(e, o.current()),
    ju
  );
  return i(), s;
}
function ju(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Uu(e, t) {
  return Mi(e, t.inConstruct, !0) && !Mi(e, t.notInConstruct, !1);
}
function Mi(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function ji(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Uu(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function qu(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, o = 0, s = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > s && (s = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
  return s;
}
function Vu(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Hu(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Gu(e, t, n, r) {
  const i = Hu(n), o = e.value || "", s = i === "`" ? "GraveAccent" : "Tilde";
  if (Vu(e, n)) {
    const c = n.enter("codeIndented"), d = n.indentLines(o, Wu);
    return c(), d;
  }
  const a = n.createTracker(r), l = i.repeat(Math.max(qu(o, i) + 1, 3)), u = n.enter("codeFenced");
  let f = a.move(l);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${s}`);
    f += a.move(
      n.safe(e.lang, {
        before: f,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = n.enter(`codeFencedMeta${s}`);
    f += a.move(" "), f += a.move(
      n.safe(e.meta, {
        before: f,
        after: `
`,
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  return f += a.move(`
`), o && (f += a.move(o + `
`)), f += a.move(l), u(), f;
}
function Wu(e, t, n) {
  return (n ? "" : "    ") + e;
}
function ri(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Yu(e, t, n, r) {
  const i = ri(n), o = i === '"' ? "Quote" : "Apostrophe", s = n.enter("definition");
  let a = n.enter("label");
  const l = n.createTracker(r);
  let u = l.move("[");
  return u += l.move(
    n.safe(n.associationId(e), {
      before: u,
      after: "]",
      ...l.current()
    })
  ), u += l.move("]: "), a(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), u += l.move("<"), u += l.move(
    n.safe(e.url, { before: u, after: ">", ...l.current() })
  ), u += l.move(">")) : (a = n.enter("destinationRaw"), u += l.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...l.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), u += l.move(" " + i), u += l.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })
  ), u += l.move(i), a()), s(), u;
}
function Xu(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
bs.peek = Ku;
function bs(e, t, n, r) {
  const i = Xu(n), o = n.enter("emphasis"), s = n.createTracker(r);
  let a = s.move(i);
  return a += s.move(
    n.containerPhrasing(e, {
      before: a,
      after: i,
      ...s.current()
    })
  ), a += s.move(i), o(), a;
}
function Ku(e, t, n) {
  return n.options.emphasis || "*";
}
function ii(e, t, n, r) {
  let i, o, s;
  typeof t == "function" && typeof n != "function" ? (o = void 0, s = t, i = n) : (o = t, s = n, i = r), ds(e, o, a, i);
  function a(l, u) {
    const f = u[u.length - 1], c = f ? f.children.indexOf(l) : void 0;
    return s(l, c, f);
  }
}
const Qu = {};
function oi(e, t) {
  const n = Qu, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return ws(e, r, i);
}
function ws(e, t, n) {
  if (Ju(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Ui(e.children, t, n);
  }
  return Array.isArray(e) ? Ui(e, t, n) : "";
}
function Ui(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = ws(e[i], t, n);
  return r.join("");
}
function Ju(e) {
  return !!(e && typeof e == "object");
}
function Zu(e, t) {
  let n = !1;
  return ii(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, Cr;
  }), !!((!e.depth || e.depth < 3) && oi(e) && (t.options.setext || n));
}
function $u(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (Zu(e, n)) {
    const f = n.enter("headingSetext"), c = n.enter("phrasing"), d = n.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return c(), f(), d + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      d.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(d.lastIndexOf("\r"), d.lastIndexOf(`
`)) + 1)
    );
  }
  const s = "#".repeat(i), a = n.enter("headingAtx"), l = n.enter("phrasing");
  o.move(s + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(u) && (u = "&#x" + u.charCodeAt(0).toString(16).toUpperCase() + ";" + u.slice(1)), u = u ? s + " " + u : s, n.options.closeAtx && (u += " " + s), l(), a(), u;
}
xs.peek = ec;
function xs(e) {
  return e.value || "";
}
function ec() {
  return "<";
}
ks.peek = tc;
function ks(e, t, n, r) {
  const i = ri(n), o = i === '"' ? "Quote" : "Apostrophe", s = n.enter("image");
  let a = n.enter("label");
  const l = n.createTracker(r);
  let u = l.move("![");
  return u += l.move(
    n.safe(e.alt, { before: u, after: "]", ...l.current() })
  ), u += l.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), u += l.move("<"), u += l.move(
    n.safe(e.url, { before: u, after: ">", ...l.current() })
  ), u += l.move(">")) : (a = n.enter("destinationRaw"), u += l.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), u += l.move(" " + i), u += l.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })
  ), u += l.move(i), a()), u += l.move(")"), s(), u;
}
function tc() {
  return "!";
}
Ss.peek = nc;
function Ss(e, t, n, r) {
  const i = e.referenceType, o = n.enter("imageReference");
  let s = n.enter("label");
  const a = n.createTracker(r);
  let l = a.move("![");
  const u = n.safe(e.alt, {
    before: l,
    after: "]",
    ...a.current()
  });
  l += a.move(u + "]["), s();
  const f = n.stack;
  n.stack = [], s = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: l,
    after: "]",
    ...a.current()
  });
  return s(), n.stack = f, o(), i === "full" || !u || u !== c ? l += a.move(c + "]") : i === "shortcut" ? l = l.slice(0, -1) : l += a.move("]"), l;
}
function nc() {
  return "!";
}
Es.peek = rc;
function Es(e, t, n) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const s = n.unsafe[o], a = n.compilePattern(s);
    let l;
    if (s.atBreak)
      for (; l = a.exec(r); ) {
        let u = l.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(l.index + 1);
      }
  }
  return i + r + i;
}
function rc() {
  return "`";
}
function vs(e, t) {
  const n = oi(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Cs.peek = ic;
function Cs(e, t, n, r) {
  const i = ri(n), o = i === '"' ? "Quote" : "Apostrophe", s = n.createTracker(r);
  let a, l;
  if (vs(e, n)) {
    const f = n.stack;
    n.stack = [], a = n.enter("autolink");
    let c = s.move("<");
    return c += s.move(
      n.containerPhrasing(e, {
        before: c,
        after: ">",
        ...s.current()
      })
    ), c += s.move(">"), a(), n.stack = f, c;
  }
  a = n.enter("link"), l = n.enter("label");
  let u = s.move("[");
  return u += s.move(
    n.containerPhrasing(e, {
      before: u,
      after: "](",
      ...s.current()
    })
  ), u += s.move("]("), l(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (l = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${o}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), l()), u += s.move(")"), a(), u;
}
function ic(e, t, n) {
  return vs(e, n) ? "<" : "[";
}
As.peek = oc;
function As(e, t, n, r) {
  const i = e.referenceType, o = n.enter("linkReference");
  let s = n.enter("label");
  const a = n.createTracker(r);
  let l = a.move("[");
  const u = n.containerPhrasing(e, {
    before: l,
    after: "]",
    ...a.current()
  });
  l += a.move(u + "]["), s();
  const f = n.stack;
  n.stack = [], s = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: l,
    after: "]",
    ...a.current()
  });
  return s(), n.stack = f, o(), i === "full" || !u || u !== c ? l += a.move(c + "]") : i === "shortcut" ? l = l.slice(0, -1) : l += a.move("]"), l;
}
function oc() {
  return "[";
}
function si(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function sc(e) {
  const t = si(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function ac(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Os(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function lc(e, t, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let s = e.ordered ? ac(n) : si(n);
  const a = e.ordered ? s === "." ? ")" : "." : sc(n);
  let l = t && n.bulletLastUsed ? s === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (s === "*" || s === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (l = !0), Os(n) === s && f
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const d = e.children[c];
        if (d && d.type === "listItem" && d.children && d.children[0] && d.children[0].type === "thematicBreak") {
          l = !0;
          break;
        }
      }
    }
  }
  l && (s = a), n.bulletCurrent = s;
  const u = n.containerFlow(e, r);
  return n.bulletLastUsed = s, n.bulletCurrent = o, i(), u;
}
function uc(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function cc(e, t, n, r) {
  const i = uc(n);
  let o = n.bulletCurrent || si(n);
  t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
  let s = o.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (s = Math.ceil(s / 4) * 4);
  const a = n.createTracker(r);
  a.move(o + " ".repeat(s - o.length)), a.shift(s);
  const l = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, a.current()),
    f
  );
  return l(), u;
  function f(c, d, h) {
    return d ? (h ? "" : " ".repeat(s)) + c : (h ? o : o + " ".repeat(s - o.length)) + c;
  }
}
function fc(e, t, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), s = n.containerPhrasing(e, r);
  return o(), i(), s;
}
const hc = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Dn([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function pc(e, t, n, r) {
  return (e.children.some(function(s) {
    return hc(s);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function dc(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
_s.peek = mc;
function _s(e, t, n, r) {
  const i = dc(n), o = n.enter("strong"), s = n.createTracker(r);
  let a = s.move(i + i);
  return a += s.move(
    n.containerPhrasing(e, {
      before: a,
      after: i,
      ...s.current()
    })
  ), a += s.move(i + i), o(), a;
}
function mc(e, t, n) {
  return n.options.strong || "*";
}
function gc(e, t, n, r) {
  return n.safe(e.value, r);
}
function yc(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function bc(e, t, n) {
  const r = (Os(n) + (n.options.ruleSpaces ? " " : "")).repeat(yc(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Ts = {
  blockquote: Mu,
  break: ji,
  code: Gu,
  definition: Yu,
  emphasis: bs,
  hardBreak: ji,
  heading: $u,
  html: xs,
  image: ks,
  imageReference: Ss,
  inlineCode: Es,
  link: Cs,
  linkReference: As,
  list: lc,
  listItem: cc,
  paragraph: fc,
  root: pc,
  strong: _s,
  text: gc,
  thematicBreak: bc
}, qi = document.createElement("i");
function ai(e) {
  const t = "&" + e + ";";
  qi.innerHTML = t;
  const n = qi.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Rs(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
const wc = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function xc(e) {
  return e.replace(wc, kc);
}
function kc(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return Rs(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return ai(n) || e;
}
function Sc() {
  return {
    enter: {
      table: Ec,
      tableData: Vi,
      tableHeader: Vi,
      tableRow: Cc
    },
    exit: {
      codeText: Ac,
      table: vc,
      tableData: Qn,
      tableHeader: Qn,
      tableRow: Qn
    }
  };
}
function Ec(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function vc(e) {
  this.exit(e), this.data.inTable = void 0;
}
function Cc(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Qn(e) {
  this.exit(e);
}
function Vi(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function Ac(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, Oc));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function Oc(e, t) {
  return t === "|" ? t : e;
}
function _c(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, o = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: d,
      table: s,
      tableCell: l,
      tableRow: a
    }
  };
  function s(h, p, g, w) {
    return u(f(h, g, w), h.align);
  }
  function a(h, p, g, w) {
    const b = c(h, g, w), v = u([b]);
    return v.slice(0, v.indexOf(`
`));
  }
  function l(h, p, g, w) {
    const b = g.enter("tableCell"), v = g.enter("phrasing"), x = g.containerPhrasing(h, {
      ...w,
      before: o,
      after: o
    });
    return v(), b(), x;
  }
  function u(h, p) {
    return Fu(h, {
      align: p,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function f(h, p, g) {
    const w = h.children;
    let b = -1;
    const v = [], x = p.enter("table");
    for (; ++b < w.length; )
      v[b] = c(w[b], p, g);
    return x(), v;
  }
  function c(h, p, g) {
    const w = h.children;
    let b = -1;
    const v = [], x = p.enter("tableRow");
    for (; ++b < w.length; )
      v[b] = l(w[b], h, p, g);
    return x(), v;
  }
  function d(h, p, g) {
    let w = Ts.inlineCode(h, p, g);
    return g.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function Tc() {
  return {
    exit: {
      taskListCheckValueChecked: Hi,
      taskListCheckValueUnchecked: Hi,
      paragraph: Ic
    }
  };
}
function Rc() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Lc }
  };
}
function Hi(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Ic(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let o = -1, s;
      for (; ++o < i.length; ) {
        const a = i[o];
        if (a.type === "paragraph") {
          s = a;
          break;
        }
      }
      s === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function Lc(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", s = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  o && a.move(s);
  let l = Ts.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return o && (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), l;
  function u(f) {
    return f + s;
  }
}
function Nc() {
  return [
    ou(),
    yu(),
    Iu(),
    Sc(),
    Tc()
  ];
}
function Pc(e) {
  return {
    extensions: [
      su(),
      bu(),
      Lu(),
      _c(e),
      Rc()
    ]
  };
}
function Be(e, t, n, r) {
  const i = e.length;
  let o = 0, s;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    s = Array.from(r), s.unshift(t, n), e.splice(...s);
  else
    for (n && e.splice(t, n); o < r.length; )
      s = r.slice(o, o + 1e4), s.unshift(t, 0), e.splice(...s), o += 1e4, t += 1e4;
}
function De(e, t) {
  return e.length > 0 ? (Be(e, e.length, 0, t), e) : t;
}
const Gi = {}.hasOwnProperty;
function Is(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Dc(t, e[n]);
  return t;
}
function Dc(e, t) {
  let n;
  for (n in t) {
    const i = (Gi.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let s;
    if (o)
      for (s in o) {
        Gi.call(i, s) || (i[s] = []);
        const a = o[s];
        Fc(
          // @ts-expect-error Looks like a list.
          i[s],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Fc(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Be(e, 0, 0, r);
}
const zc = {
  tokenize: Vc,
  partial: !0
}, Ls = {
  tokenize: Hc,
  partial: !0
}, Ns = {
  tokenize: Gc,
  partial: !0
}, Ps = {
  tokenize: Wc,
  partial: !0
}, Bc = {
  tokenize: Yc,
  partial: !0
}, Ds = {
  name: "wwwAutolink",
  tokenize: Uc,
  previous: zs
}, Fs = {
  name: "protocolAutolink",
  tokenize: qc,
  previous: Bs
}, rt = {
  name: "emailAutolink",
  tokenize: jc,
  previous: Ms
}, Je = {};
function Mc() {
  return {
    text: Je
  };
}
let dt = 48;
for (; dt < 123; )
  Je[dt] = rt, dt++, dt === 58 ? dt = 65 : dt === 91 && (dt = 97);
Je[43] = rt;
Je[45] = rt;
Je[46] = rt;
Je[95] = rt;
Je[72] = [rt, Fs];
Je[104] = [rt, Fs];
Je[87] = [rt, Ds];
Je[119] = [rt, Ds];
function jc(e, t, n) {
  const r = this;
  let i, o;
  return s;
  function s(c) {
    return !Ar(c) || !Ms.call(r, r.previous) || li(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return Ar(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), l) : n(c);
  }
  function l(c) {
    return c === 46 ? e.check(Bc, f, u)(c) : c === 45 || c === 95 || xe(c) ? (o = !0, e.consume(c), l) : f(c);
  }
  function u(c) {
    return e.consume(c), i = !0, l;
  }
  function f(c) {
    return o && i && Se(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function Uc(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return s !== 87 && s !== 119 || !zs.call(r, r.previous) || li(r.events) ? n(s) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(zc, e.attempt(Ls, e.attempt(Ns, o), n), n)(s));
  }
  function o(s) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(s);
  }
}
function qc(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return s;
  function s(c) {
    return (c === 72 || c === 104) && Bs.call(r, r.previous) && !li(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : n(c);
  }
  function a(c) {
    if (Se(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), a;
    if (c === 58) {
      const d = i.toLowerCase();
      if (d === "http" || d === "https")
        return e.consume(c), l;
    }
    return n(c);
  }
  function l(c) {
    return c === 47 ? (e.consume(c), o ? u : (o = !0, l)) : n(c);
  }
  function u(c) {
    return c === null || Cn(c) || ne(c) || bt(c) || Pn(c) ? n(c) : e.attempt(Ls, e.attempt(Ns, f), n)(c);
  }
  function f(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function Vc(e, t, n) {
  let r = 0;
  return i;
  function i(s) {
    return (s === 87 || s === 119) && r < 3 ? (r++, e.consume(s), i) : s === 46 && r === 3 ? (e.consume(s), o) : n(s);
  }
  function o(s) {
    return s === null ? n(s) : t(s);
  }
}
function Hc(e, t, n) {
  let r, i, o;
  return s;
  function s(u) {
    return u === 46 || u === 95 ? e.check(Ps, l, a)(u) : u === null || ne(u) || bt(u) || u !== 45 && Pn(u) ? l(u) : (o = !0, e.consume(u), s);
  }
  function a(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), s;
  }
  function l(u) {
    return i || r || !o ? n(u) : t(u);
  }
}
function Gc(e, t) {
  let n = 0, r = 0;
  return i;
  function i(s) {
    return s === 40 ? (n++, e.consume(s), i) : s === 41 && r < n ? o(s) : s === 33 || s === 34 || s === 38 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 60 || s === 63 || s === 93 || s === 95 || s === 126 ? e.check(Ps, t, o)(s) : s === null || ne(s) || bt(s) ? t(s) : (e.consume(s), i);
  }
  function o(s) {
    return s === 41 && r++, e.consume(s), i;
  }
}
function Wc(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || ne(a) || bt(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || ne(a) || bt(a) ? t(a) : r(a);
  }
  function o(a) {
    return Se(a) ? s(a) : n(a);
  }
  function s(a) {
    return a === 59 ? (e.consume(a), r) : Se(a) ? (e.consume(a), s) : n(a);
  }
}
function Yc(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return xe(o) ? n(o) : t(o);
  }
}
function zs(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || ne(e);
}
function Bs(e) {
  return !Se(e);
}
function Ms(e) {
  return !(e === 47 || Ar(e));
}
function Ar(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || xe(e);
}
function li(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
function Tt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let s = "";
    if (o === 37 && xe(e.charCodeAt(n + 1)) && xe(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (s = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(n + 1);
      o < 56320 && a > 56319 && a < 57344 ? (s = String.fromCharCode(o, a), i = 1) : s = "�";
    } else
      s = String.fromCharCode(o);
    s && (t.push(e.slice(r, n), encodeURIComponent(s)), r = n + i + 1, s = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function An(e) {
  if (e === null || ne(e) || bt(e))
    return 1;
  if (Pn(e))
    return 2;
}
function zn(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const Or = {
  name: "attention",
  tokenize: Kc,
  resolveAll: Xc
};
function Xc(e, t) {
  let n = -1, r, i, o, s, a, l, u, f;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          l = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const c = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          Wi(c, -l), Wi(d, l), s = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: Object.assign({}, e[r][1].end)
          }, a = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, e[n][1].start),
            end: d
          }, o = {
            type: l > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, e[r][1].end),
            end: Object.assign({}, e[n][1].start)
          }, i = {
            type: l > 1 ? "strong" : "emphasis",
            start: Object.assign({}, s.start),
            end: Object.assign({}, a.end)
          }, e[r][1].end = Object.assign({}, s.start), e[n][1].start = Object.assign({}, a.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = De(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = De(u, [["enter", i, t], ["enter", s, t], ["exit", s, t], ["enter", o, t]]), u = De(u, zn(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = De(u, [["exit", o, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (f = 2, u = De(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : f = 0, Be(e, r - 1, n - r + 3, u), n = r + u.length - f - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Kc(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = An(r);
  let o;
  return s;
  function s(l) {
    return o = l, e.enter("attentionSequence"), a(l);
  }
  function a(l) {
    if (l === o)
      return e.consume(l), a;
    const u = e.exit("attentionSequence"), f = An(l), c = !f || f === 2 && i || n.includes(l), d = !i || i === 2 && f || n.includes(r);
    return u._open = !!(o === 42 ? c : c && (i || !d)), u._close = !!(o === 42 ? d : d && (f || !c)), t(l);
  }
}
function Wi(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Qc = {
  name: "autolink",
  tokenize: Jc
};
function Jc(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(h) {
    return Se(h) ? (e.consume(h), s) : h === 64 ? n(h) : u(h);
  }
  function s(h) {
    return h === 43 || h === 45 || h === 46 || xe(h) ? (r = 1, a(h)) : u(h);
  }
  function a(h) {
    return h === 58 ? (e.consume(h), r = 0, l) : (h === 43 || h === 45 || h === 46 || xe(h)) && r++ < 32 ? (e.consume(h), a) : (r = 0, u(h));
  }
  function l(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : h === null || h === 32 || h === 60 || Cn(h) ? n(h) : (e.consume(h), l);
  }
  function u(h) {
    return h === 64 ? (e.consume(h), f) : Vl(h) ? (e.consume(h), u) : n(h);
  }
  function f(h) {
    return xe(h) ? c(h) : n(h);
  }
  function c(h) {
    return h === 46 ? (e.consume(h), r = 0, f) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(h);
  }
  function d(h) {
    if ((h === 45 || xe(h)) && r++ < 63) {
      const p = h === 45 ? d : c;
      return e.consume(h), p;
    }
    return n(h);
  }
}
function K(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return s;
  function s(l) {
    return G(l) ? (e.enter(n), a(l)) : t(l);
  }
  function a(l) {
    return G(l) && o++ < i ? (e.consume(l), a) : (e.exit(n), t(l));
  }
}
const Zt = {
  tokenize: Zc,
  partial: !0
};
function Zc(e, t, n) {
  return r;
  function r(o) {
    return G(o) ? K(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || F(o) ? t(o) : n(o);
  }
}
const js = {
  name: "blockQuote",
  tokenize: $c,
  continuation: {
    tokenize: ef
  },
  exit: tf
};
function $c(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    if (s === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(s), e.exit("blockQuoteMarker"), o;
    }
    return n(s);
  }
  function o(s) {
    return G(s) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(s), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(s));
  }
}
function ef(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return G(s) ? K(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s) : o(s);
  }
  function o(s) {
    return e.attempt(js, t, n)(s);
  }
}
function tf(e) {
  e.exit("blockQuote");
}
const Us = {
  name: "characterEscape",
  tokenize: nf
};
function nf(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Gl(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const qs = {
  name: "characterReference",
  tokenize: rf
};
function rf(e, t, n) {
  const r = this;
  let i = 0, o, s;
  return a;
  function a(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), l;
  }
  function l(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, s = xe, f(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, s = Hl, f) : (e.enter("characterReferenceValue"), o = 7, s = vr, f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return s === xe && !ai(r.sliceSerialize(d)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return s(c) && i++ < o ? (e.consume(c), f) : n(c);
  }
}
const Yi = {
  tokenize: sf,
  partial: !0
}, Xi = {
  name: "codeFenced",
  tokenize: of,
  concrete: !0
};
function of(e, t, n) {
  const r = this, i = {
    tokenize: _,
    partial: !0
  };
  let o = 0, s = 0, a;
  return l;
  function l(k) {
    return u(k);
  }
  function u(k) {
    const L = r.events[r.events.length - 1];
    return o = L && L[1].type === "linePrefix" ? L[2].sliceSerialize(L[1], !0).length : 0, a = k, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), f(k);
  }
  function f(k) {
    return k === a ? (s++, e.consume(k), f) : s < 3 ? n(k) : (e.exit("codeFencedFenceSequence"), G(k) ? K(e, c, "whitespace")(k) : c(k));
  }
  function c(k) {
    return k === null || F(k) ? (e.exit("codeFencedFence"), r.interrupt ? t(k) : e.check(Yi, g, O)(k)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(k));
  }
  function d(k) {
    return k === null || F(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(k)) : G(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), K(e, h, "whitespace")(k)) : k === 96 && k === a ? n(k) : (e.consume(k), d);
  }
  function h(k) {
    return k === null || F(k) ? c(k) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), p(k));
  }
  function p(k) {
    return k === null || F(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(k)) : k === 96 && k === a ? n(k) : (e.consume(k), p);
  }
  function g(k) {
    return e.attempt(i, O, w)(k);
  }
  function w(k) {
    return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), b;
  }
  function b(k) {
    return o > 0 && G(k) ? K(e, v, "linePrefix", o + 1)(k) : v(k);
  }
  function v(k) {
    return k === null || F(k) ? e.check(Yi, g, O)(k) : (e.enter("codeFlowValue"), x(k));
  }
  function x(k) {
    return k === null || F(k) ? (e.exit("codeFlowValue"), v(k)) : (e.consume(k), x);
  }
  function O(k) {
    return e.exit("codeFenced"), t(k);
  }
  function _(k, L, P) {
    let D = 0;
    return S;
    function S(q) {
      return k.enter("lineEnding"), k.consume(q), k.exit("lineEnding"), N;
    }
    function N(q) {
      return k.enter("codeFencedFence"), G(q) ? K(k, T, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(q) : T(q);
    }
    function T(q) {
      return q === a ? (k.enter("codeFencedFenceSequence"), B(q)) : P(q);
    }
    function B(q) {
      return q === a ? (D++, k.consume(q), B) : D >= s ? (k.exit("codeFencedFenceSequence"), G(q) ? K(k, H, "whitespace")(q) : H(q)) : P(q);
    }
    function H(q) {
      return q === null || F(q) ? (k.exit("codeFencedFence"), L(q)) : P(q);
    }
  }
}
function sf(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return s === null ? n(s) : (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), o);
  }
  function o(s) {
    return r.parser.lazy[r.now().line] ? n(s) : t(s);
  }
}
const Jn = {
  name: "codeIndented",
  tokenize: lf
}, af = {
  tokenize: uf,
  partial: !0
};
function lf(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), K(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? s(u) : n(u);
  }
  function s(u) {
    return u === null ? l(u) : F(u) ? e.attempt(af, s, l)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || F(u) ? (e.exit("codeFlowValue"), s(u)) : (e.consume(u), a);
  }
  function l(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function uf(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return r.parser.lazy[r.now().line] ? n(s) : F(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), i) : K(e, o, "linePrefix", 5)(s);
  }
  function o(s) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : F(s) ? i(s) : n(s);
  }
}
const cf = {
  name: "codeText",
  tokenize: pf,
  resolve: ff,
  previous: hf
};
function ff(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function hf(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function pf(e, t, n) {
  let r = 0, i, o;
  return s;
  function s(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), l(c));
  }
  function l(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), l) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, f(c)) : F(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), l) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || F(c) ? (e.exit("codeTextData"), l(c)) : (e.consume(c), u);
  }
  function f(c) {
    return c === 96 ? (e.consume(c), i++, f) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (o.type = "codeTextData", u(c));
  }
}
class df {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && zt(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), zt(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), zt(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        zt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        zt(this.left, n.reverse());
      }
  }
}
function zt(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function Vs(e) {
  const t = {};
  let n = -1, r, i, o, s, a, l, u;
  const f = new df(e);
  for (; ++n < f.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = f.get(n), n && r[1].type === "chunkFlow" && f.get(n - 1)[1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, o = 0, o < l.length && l[o][1].type === "lineEndingBlank" && (o += 2), o < l.length && l[o][1].type === "content"))
      for (; ++o < l.length && l[o][1].type !== "content"; )
        l[o][1].type === "chunkText" && (l[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, mf(f, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o-- && (s = f.get(o), s[1].type === "lineEnding" || s[1].type === "lineEndingBlank"); )
        s[0] === "enter" && (i && (f.get(i)[1].type = "lineEndingBlank"), s[1].type = "lineEnding", i = o);
      i && (r[1].end = Object.assign({}, f.get(i)[1].start), a = f.slice(i, n), a.unshift(r), f.splice(i, n - i + 1, a));
    }
  }
  return Be(e, 0, Number.POSITIVE_INFINITY, f.slice(0)), !u;
}
function mf(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [], s = n._tokenizer || r.parser[n.contentType](n.start), a = s.events, l = [], u = {};
  let f, c, d = -1, h = n, p = 0, g = 0;
  const w = [g];
  for (; h; ) {
    for (; e.get(++i)[1] !== h; )
      ;
    o.push(i), h._tokenizer || (f = r.sliceStream(h), h.next || f.push(null), c && s.defineSkip(h.start), h._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = !0), s.write(f), h._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)), c = h, h = h.next;
  }
  for (h = n; ++d < a.length; )
    // Find a void token that includes a break.
    a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (g = d + 1, w.push(g), h._tokenizer = void 0, h.previous = void 0, h = h.next);
  for (s.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : w.pop(), d = w.length; d--; ) {
    const b = a.slice(w[d], w[d + 1]), v = o.pop();
    l.push([v, v + b.length - 1]), e.splice(v, 2, b);
  }
  for (l.reverse(), d = -1; ++d < l.length; )
    u[p + l[d][0]] = p + l[d][1], p += l[d][1] - l[d][0] - 1;
  return u;
}
const gf = {
  tokenize: wf,
  resolve: bf
}, yf = {
  tokenize: xf,
  partial: !0
};
function bf(e) {
  return Vs(e), e;
}
function wf(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : F(a) ? e.check(yf, s, o)(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function s(a) {
    return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function xf(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), K(e, o, "linePrefix");
  }
  function o(s) {
    if (s === null || F(s))
      return n(s);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : e.interrupt(r.parser.constructs.flow, n, t)(s);
  }
}
function Hs(e, t, n, r, i, o, s, a, l) {
  const u = l || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(b) {
    return b === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(b), e.exit(o), d) : b === null || b === 32 || b === 41 || Cn(b) ? n(b) : (e.enter(r), e.enter(s), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), g(b));
  }
  function d(b) {
    return b === 62 ? (e.enter(o), e.consume(b), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), h(b));
  }
  function h(b) {
    return b === 62 ? (e.exit("chunkString"), e.exit(a), d(b)) : b === null || b === 60 || F(b) ? n(b) : (e.consume(b), b === 92 ? p : h);
  }
  function p(b) {
    return b === 60 || b === 62 || b === 92 ? (e.consume(b), h) : h(b);
  }
  function g(b) {
    return !f && (b === null || b === 41 || ne(b)) ? (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(b)) : f < u && b === 40 ? (e.consume(b), f++, g) : b === 41 ? (e.consume(b), f--, g) : b === null || b === 32 || b === 40 || Cn(b) ? n(b) : (e.consume(b), b === 92 ? w : g);
  }
  function w(b) {
    return b === 40 || b === 41 || b === 92 ? (e.consume(b), g) : g(b);
  }
}
function Gs(e, t, n, r, i, o) {
  const s = this;
  let a = 0, l;
  return u;
  function u(h) {
    return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(o), f;
  }
  function f(h) {
    return a > 999 || h === null || h === 91 || h === 93 && !l || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    h === 94 && !a && "_hiddenFootnoteSupport" in s.parser.constructs ? n(h) : h === 93 ? (e.exit(o), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : F(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), f) : (e.enter("chunkString", {
      contentType: "string"
    }), c(h));
  }
  function c(h) {
    return h === null || h === 91 || h === 93 || F(h) || a++ > 999 ? (e.exit("chunkString"), f(h)) : (e.consume(h), l || (l = !G(h)), h === 92 ? d : c);
  }
  function d(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, c) : c(h);
  }
}
function Ws(e, t, n, r, i, o) {
  let s;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), s = d === 40 ? 41 : d, l) : n(d);
  }
  function l(d) {
    return d === s ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(o), u(d));
  }
  function u(d) {
    return d === s ? (e.exit(o), l(s)) : d === null ? n(d) : F(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), K(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), f(d));
  }
  function f(d) {
    return d === s || d === null || F(d) ? (e.exit("chunkString"), u(d)) : (e.consume(d), d === 92 ? c : f);
  }
  function c(d) {
    return d === s || d === 92 ? (e.consume(d), f) : f(d);
  }
}
function Gt(e, t) {
  let n;
  return r;
  function r(i) {
    return F(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : G(i) ? K(
      e,
      r,
      n ? "linePrefix" : "lineSuffix"
    )(i) : t(i);
  }
}
const kf = {
  name: "definition",
  tokenize: Ef
}, Sf = {
  tokenize: vf,
  partial: !0
};
function Ef(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(h) {
    return e.enter("definition"), s(h);
  }
  function s(h) {
    return Gs.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(h);
  }
  function a(h) {
    return i = Ge(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), l) : n(h);
  }
  function l(h) {
    return ne(h) ? Gt(e, u)(h) : u(h);
  }
  function u(h) {
    return Hs(
      e,
      f,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(h);
  }
  function f(h) {
    return e.attempt(Sf, c, c)(h);
  }
  function c(h) {
    return G(h) ? K(e, d, "whitespace")(h) : d(h);
  }
  function d(h) {
    return h === null || F(h) ? (e.exit("definition"), r.parser.defined.push(i), t(h)) : n(h);
  }
}
function vf(e, t, n) {
  return r;
  function r(a) {
    return ne(a) ? Gt(e, i)(a) : n(a);
  }
  function i(a) {
    return Ws(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return G(a) ? K(e, s, "whitespace")(a) : s(a);
  }
  function s(a) {
    return a === null || F(a) ? t(a) : n(a);
  }
}
const Cf = {
  name: "hardBreakEscape",
  tokenize: Af
};
function Af(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return F(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const Of = {
  name: "headingAtx",
  tokenize: Tf,
  resolve: _f
};
function _f(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Be(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function Tf(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("atxHeading"), o(f);
  }
  function o(f) {
    return e.enter("atxHeadingSequence"), s(f);
  }
  function s(f) {
    return f === 35 && r++ < 6 ? (e.consume(f), s) : f === null || ne(f) ? (e.exit("atxHeadingSequence"), a(f)) : n(f);
  }
  function a(f) {
    return f === 35 ? (e.enter("atxHeadingSequence"), l(f)) : f === null || F(f) ? (e.exit("atxHeading"), t(f)) : G(f) ? K(e, a, "whitespace")(f) : (e.enter("atxHeadingText"), u(f));
  }
  function l(f) {
    return f === 35 ? (e.consume(f), l) : (e.exit("atxHeadingSequence"), a(f));
  }
  function u(f) {
    return f === null || f === 35 || ne(f) ? (e.exit("atxHeadingText"), a(f)) : (e.consume(f), u);
  }
}
const Rf = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Ki = ["pre", "script", "style", "textarea"], If = {
  name: "htmlFlow",
  tokenize: Df,
  resolveTo: Pf,
  concrete: !0
}, Lf = {
  tokenize: zf,
  partial: !0
}, Nf = {
  tokenize: Ff,
  partial: !0
};
function Pf(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Df(e, t, n) {
  const r = this;
  let i, o, s, a, l;
  return u;
  function u(m) {
    return f(m);
  }
  function f(m) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(m), c;
  }
  function c(m) {
    return m === 33 ? (e.consume(m), d) : m === 47 ? (e.consume(m), o = !0, g) : m === 63 ? (e.consume(m), i = 3, r.interrupt ? t : y) : Se(m) ? (e.consume(m), s = String.fromCharCode(m), w) : n(m);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), i = 2, h) : m === 91 ? (e.consume(m), i = 5, a = 0, p) : Se(m) ? (e.consume(m), i = 4, r.interrupt ? t : y) : n(m);
  }
  function h(m) {
    return m === 45 ? (e.consume(m), r.interrupt ? t : y) : n(m);
  }
  function p(m) {
    const V = "CDATA[";
    return m === V.charCodeAt(a++) ? (e.consume(m), a === V.length ? r.interrupt ? t : T : p) : n(m);
  }
  function g(m) {
    return Se(m) ? (e.consume(m), s = String.fromCharCode(m), w) : n(m);
  }
  function w(m) {
    if (m === null || m === 47 || m === 62 || ne(m)) {
      const V = m === 47, W = s.toLowerCase();
      return !V && !o && Ki.includes(W) ? (i = 1, r.interrupt ? t(m) : T(m)) : Rf.includes(s.toLowerCase()) ? (i = 6, V ? (e.consume(m), b) : r.interrupt ? t(m) : T(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : o ? v(m) : x(m));
    }
    return m === 45 || xe(m) ? (e.consume(m), s += String.fromCharCode(m), w) : n(m);
  }
  function b(m) {
    return m === 62 ? (e.consume(m), r.interrupt ? t : T) : n(m);
  }
  function v(m) {
    return G(m) ? (e.consume(m), v) : S(m);
  }
  function x(m) {
    return m === 47 ? (e.consume(m), S) : m === 58 || m === 95 || Se(m) ? (e.consume(m), O) : G(m) ? (e.consume(m), x) : S(m);
  }
  function O(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || xe(m) ? (e.consume(m), O) : _(m);
  }
  function _(m) {
    return m === 61 ? (e.consume(m), k) : G(m) ? (e.consume(m), _) : x(m);
  }
  function k(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), l = m, L) : G(m) ? (e.consume(m), k) : P(m);
  }
  function L(m) {
    return m === l ? (e.consume(m), l = null, D) : m === null || F(m) ? n(m) : (e.consume(m), L);
  }
  function P(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || ne(m) ? _(m) : (e.consume(m), P);
  }
  function D(m) {
    return m === 47 || m === 62 || G(m) ? x(m) : n(m);
  }
  function S(m) {
    return m === 62 ? (e.consume(m), N) : n(m);
  }
  function N(m) {
    return m === null || F(m) ? T(m) : G(m) ? (e.consume(m), N) : n(m);
  }
  function T(m) {
    return m === 45 && i === 2 ? (e.consume(m), $) : m === 60 && i === 1 ? (e.consume(m), re) : m === 62 && i === 4 ? (e.consume(m), Q) : m === 63 && i === 3 ? (e.consume(m), y) : m === 93 && i === 5 ? (e.consume(m), fe) : F(m) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Lf, ge, B)(m)) : m === null || F(m) ? (e.exit("htmlFlowData"), B(m)) : (e.consume(m), T);
  }
  function B(m) {
    return e.check(Nf, H, ge)(m);
  }
  function H(m) {
    return e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), q;
  }
  function q(m) {
    return m === null || F(m) ? B(m) : (e.enter("htmlFlowData"), T(m));
  }
  function $(m) {
    return m === 45 ? (e.consume(m), y) : T(m);
  }
  function re(m) {
    return m === 47 ? (e.consume(m), s = "", oe) : T(m);
  }
  function oe(m) {
    if (m === 62) {
      const V = s.toLowerCase();
      return Ki.includes(V) ? (e.consume(m), Q) : T(m);
    }
    return Se(m) && s.length < 8 ? (e.consume(m), s += String.fromCharCode(m), oe) : T(m);
  }
  function fe(m) {
    return m === 93 ? (e.consume(m), y) : T(m);
  }
  function y(m) {
    return m === 62 ? (e.consume(m), Q) : m === 45 && i === 2 ? (e.consume(m), y) : T(m);
  }
  function Q(m) {
    return m === null || F(m) ? (e.exit("htmlFlowData"), ge(m)) : (e.consume(m), Q);
  }
  function ge(m) {
    return e.exit("htmlFlow"), t(m);
  }
}
function Ff(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return F(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), o) : n(s);
  }
  function o(s) {
    return r.parser.lazy[r.now().line] ? n(s) : t(s);
  }
}
function zf(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Zt, t, n);
  }
}
const Bf = {
  name: "htmlText",
  tokenize: Mf
};
function Mf(e, t, n) {
  const r = this;
  let i, o, s;
  return a;
  function a(y) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(y), l;
  }
  function l(y) {
    return y === 33 ? (e.consume(y), u) : y === 47 ? (e.consume(y), _) : y === 63 ? (e.consume(y), x) : Se(y) ? (e.consume(y), P) : n(y);
  }
  function u(y) {
    return y === 45 ? (e.consume(y), f) : y === 91 ? (e.consume(y), o = 0, p) : Se(y) ? (e.consume(y), v) : n(y);
  }
  function f(y) {
    return y === 45 ? (e.consume(y), h) : n(y);
  }
  function c(y) {
    return y === null ? n(y) : y === 45 ? (e.consume(y), d) : F(y) ? (s = c, re(y)) : (e.consume(y), c);
  }
  function d(y) {
    return y === 45 ? (e.consume(y), h) : c(y);
  }
  function h(y) {
    return y === 62 ? $(y) : y === 45 ? d(y) : c(y);
  }
  function p(y) {
    const Q = "CDATA[";
    return y === Q.charCodeAt(o++) ? (e.consume(y), o === Q.length ? g : p) : n(y);
  }
  function g(y) {
    return y === null ? n(y) : y === 93 ? (e.consume(y), w) : F(y) ? (s = g, re(y)) : (e.consume(y), g);
  }
  function w(y) {
    return y === 93 ? (e.consume(y), b) : g(y);
  }
  function b(y) {
    return y === 62 ? $(y) : y === 93 ? (e.consume(y), b) : g(y);
  }
  function v(y) {
    return y === null || y === 62 ? $(y) : F(y) ? (s = v, re(y)) : (e.consume(y), v);
  }
  function x(y) {
    return y === null ? n(y) : y === 63 ? (e.consume(y), O) : F(y) ? (s = x, re(y)) : (e.consume(y), x);
  }
  function O(y) {
    return y === 62 ? $(y) : x(y);
  }
  function _(y) {
    return Se(y) ? (e.consume(y), k) : n(y);
  }
  function k(y) {
    return y === 45 || xe(y) ? (e.consume(y), k) : L(y);
  }
  function L(y) {
    return F(y) ? (s = L, re(y)) : G(y) ? (e.consume(y), L) : $(y);
  }
  function P(y) {
    return y === 45 || xe(y) ? (e.consume(y), P) : y === 47 || y === 62 || ne(y) ? D(y) : n(y);
  }
  function D(y) {
    return y === 47 ? (e.consume(y), $) : y === 58 || y === 95 || Se(y) ? (e.consume(y), S) : F(y) ? (s = D, re(y)) : G(y) ? (e.consume(y), D) : $(y);
  }
  function S(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || xe(y) ? (e.consume(y), S) : N(y);
  }
  function N(y) {
    return y === 61 ? (e.consume(y), T) : F(y) ? (s = N, re(y)) : G(y) ? (e.consume(y), N) : D(y);
  }
  function T(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? n(y) : y === 34 || y === 39 ? (e.consume(y), i = y, B) : F(y) ? (s = T, re(y)) : G(y) ? (e.consume(y), T) : (e.consume(y), H);
  }
  function B(y) {
    return y === i ? (e.consume(y), i = void 0, q) : y === null ? n(y) : F(y) ? (s = B, re(y)) : (e.consume(y), B);
  }
  function H(y) {
    return y === null || y === 34 || y === 39 || y === 60 || y === 61 || y === 96 ? n(y) : y === 47 || y === 62 || ne(y) ? D(y) : (e.consume(y), H);
  }
  function q(y) {
    return y === 47 || y === 62 || ne(y) ? D(y) : n(y);
  }
  function $(y) {
    return y === 62 ? (e.consume(y), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(y);
  }
  function re(y) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), oe;
  }
  function oe(y) {
    return G(y) ? K(e, fe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(y) : fe(y);
  }
  function fe(y) {
    return e.enter("htmlTextData"), s(y);
  }
}
const ui = {
  name: "labelEnd",
  tokenize: Gf,
  resolveTo: Hf,
  resolveAll: Vf
}, jf = {
  tokenize: Wf
}, Uf = {
  tokenize: Yf
}, qf = {
  tokenize: Xf
};
function Vf(e) {
  let t = -1;
  for (; ++t < e.length; ) {
    const n = e[t][1];
    (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  }
  return e;
}
function Hf(e, t) {
  let n = e.length, r = 0, i, o, s, a;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (s) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (s = n);
  const l = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, u = {
    type: "label",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[s][1].end)
  }, f = {
    type: "labelText",
    start: Object.assign({}, e[o + r + 2][1].end),
    end: Object.assign({}, e[s - 2][1].start)
  };
  return a = [["enter", l, t], ["enter", u, t]], a = De(a, e.slice(o + 1, o + r + 3)), a = De(a, [["enter", f, t]]), a = De(a, zn(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, s - 3), t)), a = De(a, [["exit", f, t], e[s - 2], e[s - 1], ["exit", u, t]]), a = De(a, e.slice(s + 1)), a = De(a, [["exit", l, t]]), Be(e, o, e.length, a), e;
}
function Gf(e, t, n) {
  const r = this;
  let i = r.events.length, o, s;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return o ? o._inactive ? c(d) : (s = r.parser.defined.includes(Ge(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(d);
  }
  function l(d) {
    return d === 40 ? e.attempt(jf, f, s ? f : c)(d) : d === 91 ? e.attempt(Uf, f, s ? u : c)(d) : s ? f(d) : c(d);
  }
  function u(d) {
    return e.attempt(qf, f, c)(d);
  }
  function f(d) {
    return t(d);
  }
  function c(d) {
    return o._balanced = !0, n(d);
  }
}
function Wf(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return ne(c) ? Gt(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? f(c) : Hs(e, s, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function s(c) {
    return ne(c) ? Gt(e, l)(c) : f(c);
  }
  function a(c) {
    return n(c);
  }
  function l(c) {
    return c === 34 || c === 39 || c === 40 ? Ws(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : f(c);
  }
  function u(c) {
    return ne(c) ? Gt(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function Yf(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return Gs.call(r, e, o, s, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(Ge(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function s(a) {
    return n(a);
  }
}
function Xf(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const Kf = {
  name: "labelStartImage",
  tokenize: Qf,
  resolveAll: ui.resolveAll
};
function Qf(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), s) : n(a);
  }
  function s(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const Jf = {
  name: "labelStartLink",
  tokenize: Zf,
  resolveAll: ui.resolveAll
};
function Zf(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
  }
}
const Zn = {
  name: "lineEnding",
  tokenize: $f
};
function $f(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), K(e, t, "linePrefix");
  }
}
const mn = {
  name: "thematicBreak",
  tokenize: eh
};
function eh(e, t, n) {
  let r = 0, i;
  return o;
  function o(u) {
    return e.enter("thematicBreak"), s(u);
  }
  function s(u) {
    return i = u, a(u);
  }
  function a(u) {
    return u === i ? (e.enter("thematicBreakSequence"), l(u)) : r >= 3 && (u === null || F(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function l(u) {
    return u === i ? (e.consume(u), r++, l) : (e.exit("thematicBreakSequence"), G(u) ? K(e, a, "whitespace")(u) : a(u));
  }
}
const ve = {
  name: "list",
  tokenize: rh,
  continuation: {
    tokenize: ih
  },
  exit: sh
}, th = {
  tokenize: ah,
  partial: !0
}, nh = {
  tokenize: oh,
  partial: !0
};
function rh(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, s = 0;
  return a;
  function a(h) {
    const p = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (p === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : vr(h)) {
      if (r.containerState.type || (r.containerState.type = p, e.enter(p, {
        _container: !0
      })), p === "listUnordered")
        return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(mn, n, u)(h) : u(h);
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), l(h);
    }
    return n(h);
  }
  function l(h) {
    return vr(h) && ++s < 10 ? (e.consume(h), l) : (!r.interrupt || s < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), u(h)) : n(h);
  }
  function u(h) {
    return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check(
      Zt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : f,
      e.attempt(th, d, c)
    );
  }
  function f(h) {
    return r.containerState.initialBlankLine = !0, o++, d(h);
  }
  function c(h) {
    return G(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), d) : n(h);
  }
  function d(h) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h);
  }
}
function ih(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Zt, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, K(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !G(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, s(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(nh, t, s)(a));
  }
  function s(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, K(e, e.attempt(ve, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function oh(e, t, n) {
  const r = this;
  return K(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "listItemIndent" && s[2].sliceSerialize(s[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function sh(e) {
  e.exit(this.containerState.type);
}
function ah(e, t, n) {
  const r = this;
  return K(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const s = r.events[r.events.length - 1];
    return !G(o) && s && s[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Qi = {
  name: "setextUnderline",
  tokenize: uh,
  resolveTo: lh
};
function lh(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const s = {
    type: "setextHeading",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", s, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[o][1].end)) : e[r][1] = s, e.push(["exit", s, t]), e;
}
function uh(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(u) {
    let f = r.events.length, c;
    for (; f--; )
      if (r.events[f][1].type !== "lineEnding" && r.events[f][1].type !== "linePrefix" && r.events[f][1].type !== "content") {
        c = r.events[f][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, s(u)) : n(u);
  }
  function s(u) {
    return e.enter("setextHeadingLineSequence"), a(u);
  }
  function a(u) {
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), G(u) ? K(e, l, "lineSuffix")(u) : l(u));
  }
  function l(u) {
    return u === null || F(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const ch = {
  tokenize: bh,
  partial: !0
};
function fh() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: mh,
        continuation: {
          tokenize: gh
        },
        exit: yh
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: dh
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: hh,
        resolveTo: ph
      }
    }
  };
}
function hh(e, t, n) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let s;
  for (; i--; ) {
    const l = r.events[i][1];
    if (l.type === "labelImage") {
      s = l;
      break;
    }
    if (l.type === "gfmFootnoteCall" || l.type === "labelLink" || l.type === "label" || l.type === "image" || l.type === "link")
      break;
  }
  return a;
  function a(l) {
    if (!s || !s._balanced)
      return n(l);
    const u = Ge(r.sliceSerialize({
      start: s.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? n(l) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l));
  }
}
function ph(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, s = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, a = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", o, t],
    ["enter", s, t],
    ["exit", s, t],
    ["exit", o, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...a), e;
}
function dh(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, s;
  return a;
  function a(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), l;
  }
  function l(c) {
    return c !== 94 ? n(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      c === 93 && !s || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || ne(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return i.includes(Ge(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return ne(c) || (s = !0), o++, e.consume(c), c === 92 ? f : u;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
  }
}
function mh(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, s = 0, a;
  return l;
  function l(p) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(p) {
    return p === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", f) : n(p);
  }
  function f(p) {
    if (
      // Too long.
      s > 999 || // Closing brace with nothing.
      p === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      p === null || p === 91 || ne(p)
    )
      return n(p);
    if (p === 93) {
      e.exit("chunkString");
      const g = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Ge(r.sliceSerialize(g)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return ne(p) || (a = !0), s++, e.consume(p), p === 92 ? c : f;
  }
  function c(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), s++, f) : f(p);
  }
  function d(p) {
    return p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), i.includes(o) || i.push(o), K(e, h, "gfmFootnoteDefinitionWhitespace")) : n(p);
  }
  function h(p) {
    return t(p);
  }
}
function gh(e, t, n) {
  return e.check(Zt, t, e.attempt(ch, t, n));
}
function yh(e) {
  e.exit("gfmFootnoteDefinition");
}
function bh(e, t, n) {
  const r = this;
  return K(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "gfmFootnoteDefinitionIndent" && s[2].sliceSerialize(s[1], !0).length === 4 ? t(o) : n(o);
  }
}
function wh(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
    resolveAll: i
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(s, a) {
    let l = -1;
    for (; ++l < s.length; )
      if (s[l][0] === "enter" && s[l][1].type === "strikethroughSequenceTemporary" && s[l][1]._close) {
        let u = l;
        for (; u--; )
          if (s[u][0] === "exit" && s[u][1].type === "strikethroughSequenceTemporary" && s[u][1]._open && // If the sizes are the same:
          s[l][1].end.offset - s[l][1].start.offset === s[u][1].end.offset - s[u][1].start.offset) {
            s[l][1].type = "strikethroughSequence", s[u][1].type = "strikethroughSequence";
            const f = {
              type: "strikethrough",
              start: Object.assign({}, s[u][1].start),
              end: Object.assign({}, s[l][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, s[u][1].end),
              end: Object.assign({}, s[l][1].start)
            }, d = [["enter", f, a], ["enter", s[u][1], a], ["exit", s[u][1], a], ["enter", c, a]], h = a.parser.constructs.insideSpan.null;
            h && Be(d, d.length, 0, zn(h, s.slice(u + 1, l), a)), Be(d, d.length, 0, [["exit", c, a], ["enter", s[l][1], a], ["exit", s[l][1], a], ["exit", f, a]]), Be(s, u - 1, l - u + 3, d), l = u + d.length - 2;
            break;
          }
      }
    for (l = -1; ++l < s.length; )
      s[l][1].type === "strikethroughSequenceTemporary" && (s[l][1].type = "data");
    return s;
  }
  function o(s, a, l) {
    const u = this.previous, f = this.events;
    let c = 0;
    return d;
    function d(p) {
      return u === 126 && f[f.length - 1][1].type !== "characterEscape" ? l(p) : (s.enter("strikethroughSequenceTemporary"), h(p));
    }
    function h(p) {
      const g = An(u);
      if (p === 126)
        return c > 1 ? l(p) : (s.consume(p), c++, h);
      if (c < 2 && !n) return l(p);
      const w = s.exit("strikethroughSequenceTemporary"), b = An(p);
      return w._open = !b || b === 2 && !!g, w._close = !g || g === 2 && !!b, a(p);
    }
  }
}
class xh {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(t, n, r) {
    kh(this, t, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(t) {
    if (this.map.sort(function(o, s) {
      return o[0] - s[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push([...t]), t.length = 0;
    let i = r.pop();
    for (; i; )
      t.push(...i), i = r.pop();
    this.map.length = 0;
  }
}
function kh(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function Sh(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function Eh() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: vh,
        resolveAll: Ch
      }
    }
  };
}
function vh(e, t, n) {
  const r = this;
  let i = 0, o = 0, s;
  return a;
  function a(S) {
    let N = r.events.length - 1;
    for (; N > -1; ) {
      const H = r.events[N][1].type;
      if (H === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      H === "linePrefix") N--;
      else break;
    }
    const T = N > -1 ? r.events[N][1].type : null, B = T === "tableHead" || T === "tableRow" ? k : l;
    return B === k && r.parser.lazy[r.now().line] ? n(S) : B(S);
  }
  function l(S) {
    return e.enter("tableHead"), e.enter("tableRow"), u(S);
  }
  function u(S) {
    return S === 124 || (s = !0, o += 1), f(S);
  }
  function f(S) {
    return S === null ? n(S) : F(S) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), h) : n(S) : G(S) ? K(e, f, "whitespace")(S) : (o += 1, s && (s = !1, i += 1), S === 124 ? (e.enter("tableCellDivider"), e.consume(S), e.exit("tableCellDivider"), s = !0, f) : (e.enter("data"), c(S)));
  }
  function c(S) {
    return S === null || S === 124 || ne(S) ? (e.exit("data"), f(S)) : (e.consume(S), S === 92 ? d : c);
  }
  function d(S) {
    return S === 92 || S === 124 ? (e.consume(S), c) : c(S);
  }
  function h(S) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(S) : (e.enter("tableDelimiterRow"), s = !1, G(S) ? K(e, p, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : p(S));
  }
  function p(S) {
    return S === 45 || S === 58 ? w(S) : S === 124 ? (s = !0, e.enter("tableCellDivider"), e.consume(S), e.exit("tableCellDivider"), g) : _(S);
  }
  function g(S) {
    return G(S) ? K(e, w, "whitespace")(S) : w(S);
  }
  function w(S) {
    return S === 58 ? (o += 1, s = !0, e.enter("tableDelimiterMarker"), e.consume(S), e.exit("tableDelimiterMarker"), b) : S === 45 ? (o += 1, b(S)) : S === null || F(S) ? O(S) : _(S);
  }
  function b(S) {
    return S === 45 ? (e.enter("tableDelimiterFiller"), v(S)) : _(S);
  }
  function v(S) {
    return S === 45 ? (e.consume(S), v) : S === 58 ? (s = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(S), e.exit("tableDelimiterMarker"), x) : (e.exit("tableDelimiterFiller"), x(S));
  }
  function x(S) {
    return G(S) ? K(e, O, "whitespace")(S) : O(S);
  }
  function O(S) {
    return S === 124 ? p(S) : S === null || F(S) ? !s || i !== o ? _(S) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(S)) : _(S);
  }
  function _(S) {
    return n(S);
  }
  function k(S) {
    return e.enter("tableRow"), L(S);
  }
  function L(S) {
    return S === 124 ? (e.enter("tableCellDivider"), e.consume(S), e.exit("tableCellDivider"), L) : S === null || F(S) ? (e.exit("tableRow"), t(S)) : G(S) ? K(e, L, "whitespace")(S) : (e.enter("data"), P(S));
  }
  function P(S) {
    return S === null || S === 124 || ne(S) ? (e.exit("data"), L(S)) : (e.consume(S), S === 92 ? D : P);
  }
  function D(S) {
    return S === 92 || S === 124 ? (e.consume(S), P) : P(S);
  }
}
function Ch(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], s = [0, 0, 0, 0], a = !1, l = 0, u, f, c;
  const d = new xh();
  for (; ++n < e.length; ) {
    const h = e[n], p = h[1];
    h[0] === "enter" ? p.type === "tableHead" ? (a = !1, l !== 0 && (Ji(d, t, l, u, f), f = void 0, l = 0), u = {
      type: "table",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, d.add(n, 0, [["enter", u, t]])) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (r = !0, c = void 0, o = [0, 0, 0, 0], s = [0, n + 1, 0, 0], a && (a = !1, f = {
      type: "tableBody",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, d.add(n, 0, [["enter", f, t]])), i = p.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") ? (r = !1, s[2] === 0 && (o[1] !== 0 && (s[0] = s[1], c = an(d, t, o, i, void 0, c), o = [0, 0, 0, 0]), s[2] = n)) : p.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (s[0] = s[1], c = an(d, t, o, i, void 0, c)), o = s, s = [o[1], n, 0, 0])) : p.type === "tableHead" ? (a = !0, l = n) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (l = n, o[1] !== 0 ? (s[0] = s[1], c = an(d, t, o, i, n, c)) : s[1] !== 0 && (c = an(d, t, s, i, n, c)), i = 0) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") && (s[3] = n);
  }
  for (l !== 0 && Ji(d, t, l, u, f), d.consume(t.events), n = -1; ++n < t.events.length; ) {
    const h = t.events[n];
    h[0] === "enter" && h[1].type === "table" && (h[1]._align = Sh(t.events, n));
  }
  return e;
}
function an(e, t, n, r, i, o) {
  const s = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, Et(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const l = Et(t.events, n[1]);
  if (o = {
    type: s,
    start: Object.assign({}, l),
    // Note: correct end is set later.
    end: Object.assign({}, l)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const u = Et(t.events, n[2]), f = Et(t.events, n[3]), c = {
      type: a,
      start: Object.assign({}, u),
      end: Object.assign({}, f)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const d = t.events[n[2]], h = t.events[n[3]];
      if (d[1].end = Object.assign({}, h[1].end), d[1].type = "chunkText", d[1].contentType = "text", n[3] > n[2] + 1) {
        const p = n[2] + 1, g = n[3] - n[2] - 1;
        e.add(p, g, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, Et(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function Ji(e, t, n, r, i) {
  const o = [], s = Et(t.events, n);
  i && (i.end = Object.assign({}, s), o.push(["exit", i, t])), r.end = Object.assign({}, s), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function Et(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Ah = {
  name: "tasklistCheck",
  tokenize: _h
};
function Oh() {
  return {
    text: {
      91: Ah
    }
  };
}
function _h(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(l) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(l), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(l) {
    return ne(l) ? (e.enter("taskListCheckValueUnchecked"), e.consume(l), e.exit("taskListCheckValueUnchecked"), s) : l === 88 || l === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(l), e.exit("taskListCheckValueChecked"), s) : n(l);
  }
  function s(l) {
    return l === 93 ? (e.enter("taskListCheckMarker"), e.consume(l), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(l);
  }
  function a(l) {
    return F(l) ? t(l) : G(l) ? e.check({
      tokenize: Th
    }, t, n)(l) : n(l);
  }
}
function Th(e, t, n) {
  return K(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function Rh(e) {
  return Is([
    Mc(),
    fh(),
    wh(e),
    Eh(),
    Oh()
  ]);
}
const Ih = {};
function Lh(e) {
  const t = (
    /** @type {Processor} */
    this
  ), n = e || Ih, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), s = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(Rh(n)), o.push(Nc()), s.push(Pc(n));
}
function Nh(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Ph = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Dh = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Fh = {};
function Zi(e, t) {
  return (Fh.jsx ? Dh : Ph).test(e);
}
const zh = /[ \t\n\f\r]/g;
function Bh(e) {
  return typeof e == "object" ? e.type === "text" ? $i(e.value) : !1 : $i(e);
}
function $i(e) {
  return e.replace(zh, "") === "";
}
class $t {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
$t.prototype.property = {};
$t.prototype.normal = {};
$t.prototype.space = null;
function Ys(e, t) {
  const n = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
  return new $t(n, r, t);
}
function _r(e) {
  return e.toLowerCase();
}
class Me {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(t, n) {
    this.property = t, this.attribute = n;
  }
}
Me.prototype.space = null;
Me.prototype.boolean = !1;
Me.prototype.booleanish = !1;
Me.prototype.overloadedBoolean = !1;
Me.prototype.number = !1;
Me.prototype.commaSeparated = !1;
Me.prototype.spaceSeparated = !1;
Me.prototype.commaOrSpaceSeparated = !1;
Me.prototype.mustUseProperty = !1;
Me.prototype.defined = !1;
let Mh = 0;
const M = xt(), he = xt(), Xs = xt(), R = xt(), ie = xt(), vt = xt(), Ie = xt();
function xt() {
  return 2 ** ++Mh;
}
const Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: M,
  booleanish: he,
  commaOrSpaceSeparated: Ie,
  commaSeparated: vt,
  number: R,
  overloadedBoolean: Xs,
  spaceSeparated: ie
}, Symbol.toStringTag, { value: "Module" })), $n = Object.keys(Tr);
class ci extends Me {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), eo(this, "space", i), typeof r == "number")
      for (; ++o < $n.length; ) {
        const s = $n[o];
        eo(this, $n[o], (r & Tr[s]) === Tr[s]);
      }
  }
}
ci.prototype.defined = !0;
function eo(e, t, n) {
  n && (e[t] = n);
}
const jh = {}.hasOwnProperty;
function Rt(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (jh.call(e.properties, r)) {
      const i = e.properties[r], o = new ci(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[_r(r)] = r, n[_r(o.attribute)] = r;
    }
  return new $t(t, n, e.space);
}
const Ks = Rt({
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), Qs = Rt({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Js(e, t) {
  return t in e ? e[t] : t;
}
function Zs(e, t) {
  return Js(e, t.toLowerCase());
}
const $s = Rt({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: Zs,
  properties: { xmlns: null, xmlnsXLink: null }
}), ea = Rt({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: he,
    ariaAutoComplete: null,
    ariaBusy: he,
    ariaChecked: he,
    ariaColCount: R,
    ariaColIndex: R,
    ariaColSpan: R,
    ariaControls: ie,
    ariaCurrent: null,
    ariaDescribedBy: ie,
    ariaDetails: null,
    ariaDisabled: he,
    ariaDropEffect: ie,
    ariaErrorMessage: null,
    ariaExpanded: he,
    ariaFlowTo: ie,
    ariaGrabbed: he,
    ariaHasPopup: null,
    ariaHidden: he,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ie,
    ariaLevel: R,
    ariaLive: null,
    ariaModal: he,
    ariaMultiLine: he,
    ariaMultiSelectable: he,
    ariaOrientation: null,
    ariaOwns: ie,
    ariaPlaceholder: null,
    ariaPosInSet: R,
    ariaPressed: he,
    ariaReadOnly: he,
    ariaRelevant: null,
    ariaRequired: he,
    ariaRoleDescription: ie,
    ariaRowCount: R,
    ariaRowIndex: R,
    ariaRowSpan: R,
    ariaSelected: he,
    ariaSetSize: R,
    ariaSort: null,
    ariaValueMax: R,
    ariaValueMin: R,
    ariaValueNow: R,
    ariaValueText: null,
    role: null
  }
}), Uh = Rt({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: Zs,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: vt,
    acceptCharset: ie,
    accessKey: ie,
    action: null,
    allow: null,
    allowFullScreen: M,
    allowPaymentRequest: M,
    allowUserMedia: M,
    alt: null,
    as: null,
    async: M,
    autoCapitalize: null,
    autoComplete: ie,
    autoFocus: M,
    autoPlay: M,
    blocking: ie,
    capture: null,
    charSet: null,
    checked: M,
    cite: null,
    className: ie,
    cols: R,
    colSpan: null,
    content: null,
    contentEditable: he,
    controls: M,
    controlsList: ie,
    coords: R | vt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: M,
    defer: M,
    dir: null,
    dirName: null,
    disabled: M,
    download: Xs,
    draggable: he,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: M,
    formTarget: null,
    headers: ie,
    height: R,
    hidden: M,
    high: R,
    href: null,
    hrefLang: null,
    htmlFor: ie,
    httpEquiv: ie,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: M,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: M,
    itemId: null,
    itemProp: ie,
    itemRef: ie,
    itemScope: M,
    itemType: ie,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: M,
    low: R,
    manifest: null,
    max: null,
    maxLength: R,
    media: null,
    method: null,
    min: null,
    minLength: R,
    multiple: M,
    muted: M,
    name: null,
    nonce: null,
    noModule: M,
    noValidate: M,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: M,
    optimum: R,
    pattern: null,
    ping: ie,
    placeholder: null,
    playsInline: M,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: M,
    referrerPolicy: null,
    rel: ie,
    required: M,
    reversed: M,
    rows: R,
    rowSpan: R,
    sandbox: ie,
    scope: null,
    scoped: M,
    seamless: M,
    selected: M,
    shadowRootClonable: M,
    shadowRootDelegatesFocus: M,
    shadowRootMode: null,
    shape: null,
    size: R,
    sizes: null,
    slot: null,
    span: R,
    spellCheck: he,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: R,
    step: null,
    style: null,
    tabIndex: R,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: M,
    useMap: null,
    value: he,
    width: R,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ie,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: R,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: R,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: M,
    // Lists. Use CSS to reduce space between items instead
    declare: M,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: R,
    // `<img>` and `<object>`
    leftMargin: R,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: R,
    // `<body>`
    marginWidth: R,
    // `<body>`
    noResize: M,
    // `<frame>`
    noHref: M,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: M,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: M,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: R,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: he,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: R,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: R,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: M,
    disableRemotePlayback: M,
    prefix: null,
    property: null,
    results: R,
    security: null,
    unselectable: null
  }
}), qh = Rt({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: Js,
  properties: {
    about: Ie,
    accentHeight: R,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: R,
    amplitude: R,
    arabicForm: null,
    ascent: R,
    attributeName: null,
    attributeType: null,
    azimuth: R,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: R,
    by: null,
    calcMode: null,
    capHeight: R,
    className: ie,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: R,
    diffuseConstant: R,
    direction: null,
    display: null,
    dur: null,
    divisor: R,
    dominantBaseline: null,
    download: M,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: R,
    enableBackground: null,
    end: null,
    event: null,
    exponent: R,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: R,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: vt,
    g2: vt,
    glyphName: vt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: R,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: R,
    horizOriginX: R,
    horizOriginY: R,
    id: null,
    ideographic: R,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: R,
    k: R,
    k1: R,
    k2: R,
    k3: R,
    k4: R,
    kernelMatrix: Ie,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: R,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: R,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: R,
    overlineThickness: R,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: R,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ie,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: R,
    pointsAtY: R,
    pointsAtZ: R,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Ie,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ie,
    rev: Ie,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ie,
    requiredFeatures: Ie,
    requiredFonts: Ie,
    requiredFormats: Ie,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: R,
    specularExponent: R,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: R,
    strikethroughThickness: R,
    string: null,
    stroke: null,
    strokeDashArray: Ie,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: R,
    strokeOpacity: R,
    strokeWidth: null,
    style: null,
    surfaceScale: R,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ie,
    tabIndex: R,
    tableValues: null,
    target: null,
    targetX: R,
    targetY: R,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Ie,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: R,
    underlineThickness: R,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: R,
    values: null,
    vAlphabetic: R,
    vMathematical: R,
    vectorEffect: null,
    vHanging: R,
    vIdeographic: R,
    version: null,
    vertAdvY: R,
    vertOriginX: R,
    vertOriginY: R,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: R,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), Vh = /^data[-\w.:]+$/i, to = /-[a-z]/g, Hh = /[A-Z]/g;
function Gh(e, t) {
  const n = _r(t);
  let r = t, i = Me;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Vh.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(to, Yh);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!to.test(o)) {
        let s = o.replace(Hh, Wh);
        s.charAt(0) !== "-" && (s = "-" + s), t = "data" + s;
      }
    }
    i = ci;
  }
  return new i(r, t);
}
function Wh(e) {
  return "-" + e.toLowerCase();
}
function Yh(e) {
  return e.charAt(1).toUpperCase();
}
const Xh = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Kh = Ys([Qs, Ks, $s, ea, Uh], "html"), fi = Ys([Qs, Ks, $s, ea, qh], "svg");
function Qh(e) {
  return e.join(" ").trim();
}
var no = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ta = {}, ro = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Zh = /\n/g, $h = /^\s*/, ep = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, tp = /^:\s*/, np = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, rp = /^[;\s]*/, ip = /^\s+|\s+$/g, op = `
`, io = "/", oo = "*", mt = "", sp = "comment", ap = "declaration", lp = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(p) {
    var g = p.match(Zh);
    g && (n += g.length);
    var w = p.lastIndexOf(op);
    r = ~w ? p.length - w : r + p.length;
  }
  function o() {
    var p = { line: n, column: r };
    return function(g) {
      return g.position = new s(p), u(), g;
    };
  }
  function s(p) {
    this.start = p, this.end = { line: n, column: r }, this.source = t.source;
  }
  s.prototype.content = e;
  function a(p) {
    var g = new Error(
      t.source + ":" + n + ":" + r + ": " + p
    );
    if (g.reason = p, g.filename = t.source, g.line = n, g.column = r, g.source = e, !t.silent) throw g;
  }
  function l(p) {
    var g = p.exec(e);
    if (g) {
      var w = g[0];
      return i(w), e = e.slice(w.length), g;
    }
  }
  function u() {
    l($h);
  }
  function f(p) {
    var g;
    for (p = p || []; g = c(); )
      g !== !1 && p.push(g);
    return p;
  }
  function c() {
    var p = o();
    if (!(io != e.charAt(0) || oo != e.charAt(1))) {
      for (var g = 2; mt != e.charAt(g) && (oo != e.charAt(g) || io != e.charAt(g + 1)); )
        ++g;
      if (g += 2, mt === e.charAt(g - 1))
        return a("End of comment missing");
      var w = e.slice(2, g - 2);
      return r += 2, i(w), e = e.slice(g), r += 2, p({
        type: sp,
        comment: w
      });
    }
  }
  function d() {
    var p = o(), g = l(ep);
    if (g) {
      if (c(), !l(tp)) return a("property missing ':'");
      var w = l(np), b = p({
        type: ap,
        property: so(g[0].replace(ro, mt)),
        value: w ? so(w[0].replace(ro, mt)) : mt
      });
      return l(rp), b;
    }
  }
  function h() {
    var p = [];
    f(p);
    for (var g; g = d(); )
      g !== !1 && (p.push(g), f(p));
    return p;
  }
  return u(), h();
};
function so(e) {
  return e ? e.replace(ip, mt) : mt;
}
var up = no && no.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ta, "__esModule", { value: !0 });
var ao = ta.default = fp, cp = up(lp);
function fp(e, t) {
  var n = null;
  if (!e || typeof e != "string")
    return n;
  var r = (0, cp.default)(e), i = typeof t == "function";
  return r.forEach(function(o) {
    if (o.type === "declaration") {
      var s = o.property, a = o.value;
      i ? t(s, a, o) : a && (n = n || {}, n[s] = a);
    }
  }), n;
}
const hp = ao.default || ao, na = ra("end"), hi = ra("start");
function ra(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function pp(e) {
  const t = hi(e), n = na(e);
  if (t && n)
    return { start: t, end: n };
}
function Wt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? lo(e.position) : "start" in e || "end" in e ? lo(e) : "line" in e || "column" in e ? Rr(e) : "";
}
function Rr(e) {
  return uo(e && e.line) + ":" + uo(e && e.column);
}
function lo(e) {
  return Rr(e && e.start) + "-" + Rr(e && e.end);
}
function uo(e) {
  return e && typeof e == "number" ? e : 1;
}
class ke extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", o = {}, s = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (s = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const l = r.indexOf(":");
      l === -1 ? o.ruleId = r : (o.source = r.slice(0, l), o.ruleId = r.slice(l + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const l = o.ancestors[o.ancestors.length - 1];
      l && (o.place = l.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = a ? a.line : void 0, this.name = Wt(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = s && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
ke.prototype.file = "";
ke.prototype.name = "";
ke.prototype.reason = "";
ke.prototype.message = "";
ke.prototype.stack = "";
ke.prototype.column = void 0;
ke.prototype.line = void 0;
ke.prototype.ancestors = void 0;
ke.prototype.cause = void 0;
ke.prototype.fatal = void 0;
ke.prototype.place = void 0;
ke.prototype.ruleId = void 0;
ke.prototype.source = void 0;
const pi = {}.hasOwnProperty, dp = /* @__PURE__ */ new Map(), mp = /[A-Z]/g, gp = /-([a-z])/g, yp = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), bp = /* @__PURE__ */ new Set(["td", "th"]), ia = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function wp(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Op(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Ap(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? fi : Kh,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = oa(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function oa(e, t, n) {
  if (t.type === "element")
    return xp(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return kp(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return Ep(e, t, n);
  if (t.type === "mdxjsEsm")
    return Sp(e, t);
  if (t.type === "root")
    return vp(e, t, n);
  if (t.type === "text")
    return Cp(e, t);
}
function xp(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = fi, e.schema = i), e.ancestors.push(t);
  const o = aa(e, t.tagName, !1), s = _p(e, t);
  let a = mi(e, t);
  return yp.has(t.tagName) && (a = a.filter(function(l) {
    return typeof l == "string" ? !Bh(l) : !0;
  })), sa(e, s, o, t), di(s, a), e.ancestors.pop(), e.schema = r, e.create(t, o, s, n);
}
function kp(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  Yt(e, t.position);
}
function Sp(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  Yt(e, t.position);
}
function Ep(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = fi, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : aa(e, t.name, !0), s = Tp(e, t), a = mi(e, t);
  return sa(e, s, o, t), di(s, a), e.ancestors.pop(), e.schema = r, e.create(t, o, s, n);
}
function vp(e, t, n) {
  const r = {};
  return di(r, mi(e, t)), e.create(t, e.Fragment, r, n);
}
function Cp(e, t) {
  return t.value;
}
function sa(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function di(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Ap(e, t, n) {
  return r;
  function r(i, o, s, a) {
    const u = Array.isArray(s.children) ? n : t;
    return a ? u(o, s, a) : u(o, s);
  }
}
function Op(e, t) {
  return n;
  function n(r, i, o, s) {
    const a = Array.isArray(o.children), l = hi(r);
    return t(
      i,
      o,
      s,
      a,
      {
        columnNumber: l ? l.column - 1 : void 0,
        fileName: e,
        lineNumber: l ? l.line : void 0
      },
      void 0
    );
  }
}
function _p(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && pi.call(t.properties, i)) {
      const o = Rp(e, i, t.properties[i]);
      if (o) {
        const [s, a] = o;
        e.tableCellAlignToStyle && s === "align" && typeof a == "string" && bp.has(t.tagName) ? r = a : n[s] = a;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Tp(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const s = o.expression;
        s.type;
        const a = s.properties[0];
        a.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        Yt(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, o = e.evaluater.evaluateExpression(a.expression);
        } else
          Yt(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function mi(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : dp;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let s;
    if (e.passKeys) {
      const l = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (l) {
        const u = i.get(l) || 0;
        s = l + "-" + u, i.set(l, u + 1);
      }
    }
    const a = oa(e, o, s);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Rp(e, t, n) {
  const r = Gh(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Nh(n) : Qh(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Ip(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Lp(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Xh[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Ip(e, t) {
  const n = {};
  try {
    hp(t, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const o = (
        /** @type {Error} */
        i
      ), s = new ke("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: o,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw s.file = e.filePath || void 0, s.url = ia + "#cannot-parse-style-attribute", s;
    }
  }
  return n;
  function r(i, o) {
    let s = i;
    s.slice(0, 2) !== "--" && (s.slice(0, 4) === "-ms-" && (s = "ms-" + s.slice(4)), s = s.replace(gp, Pp)), n[s] = o;
  }
}
function aa(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, s;
    for (; ++o < i.length; ) {
      const a = Zi(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      s = s ? {
        type: "MemberExpression",
        object: s,
        property: a,
        computed: !!(o && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = s;
  } else
    r = Zi(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {keyof JSX.IntrinsicElements} */
      r.value
    );
    return pi.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  Yt(e);
}
function Yt(e, t) {
  const n = new ke(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = ia + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Lp(e) {
  const t = {};
  let n;
  for (n in e)
    pi.call(e, n) && (t[Np(n)] = e[n]);
  return t;
}
function Np(e) {
  let t = e.replace(mp, Dp);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Pp(e, t) {
  return t.toUpperCase();
}
function Dp(e) {
  return "-" + e.toLowerCase();
}
const er = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, Fp = {
  tokenize: zp
};
function zp(e) {
  const t = e.attempt(
    this.parser.constructs.contentInitial,
    r,
    i
  );
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), K(e, t, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const l = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = l), n = l, s(a);
  }
  function s(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return F(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), s);
  }
}
const Bp = {
  tokenize: Mp
}, co = {
  tokenize: jp
};
function Mp(e) {
  const t = this, n = [];
  let r = 0, i, o, s;
  return a;
  function a(x) {
    if (r < n.length) {
      const O = n[r];
      return t.containerState = O[1], e.attempt(
        O[0].continuation,
        l,
        u
      )(x);
    }
    return u(x);
  }
  function l(x) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && v();
      const O = t.events.length;
      let _ = O, k;
      for (; _--; )
        if (t.events[_][0] === "exit" && t.events[_][1].type === "chunkFlow") {
          k = t.events[_][1].end;
          break;
        }
      b(r);
      let L = O;
      for (; L < t.events.length; )
        t.events[L][1].end = Object.assign({}, k), L++;
      return Be(
        t.events,
        _ + 1,
        0,
        t.events.slice(O)
      ), t.events.length = L, u(x);
    }
    return a(x);
  }
  function u(x) {
    if (r === n.length) {
      if (!i)
        return d(x);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return p(x);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(
      co,
      f,
      c
    )(x);
  }
  function f(x) {
    return i && v(), b(r), d(x);
  }
  function c(x) {
    return t.parser.lazy[t.now().line] = r !== n.length, s = t.now().offset, p(x);
  }
  function d(x) {
    return t.containerState = {}, e.attempt(
      co,
      h,
      p
    )(x);
  }
  function h(x) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(x);
  }
  function p(x) {
    if (x === null) {
      i && v(), b(0), e.consume(x);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      contentType: "flow",
      previous: o,
      _tokenizer: i
    }), g(x);
  }
  function g(x) {
    if (x === null) {
      w(e.exit("chunkFlow"), !0), b(0), e.consume(x);
      return;
    }
    return F(x) ? (e.consume(x), w(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(x), g);
  }
  function w(x, O) {
    const _ = t.sliceStream(x);
    if (O && _.push(null), x.previous = o, o && (o.next = x), o = x, i.defineSkip(x.start), i.write(_), t.parser.lazy[x.start.line]) {
      let k = i.events.length;
      for (; k--; )
        if (
          // The token starts before the line ending…
          i.events[k][1].start.offset < s && // …and either is not ended yet…
          (!i.events[k][1].end || // …or ends after it.
          i.events[k][1].end.offset > s)
        )
          return;
      const L = t.events.length;
      let P = L, D, S;
      for (; P--; )
        if (t.events[P][0] === "exit" && t.events[P][1].type === "chunkFlow") {
          if (D) {
            S = t.events[P][1].end;
            break;
          }
          D = !0;
        }
      for (b(r), k = L; k < t.events.length; )
        t.events[k][1].end = Object.assign({}, S), k++;
      Be(
        t.events,
        P + 1,
        0,
        t.events.slice(L)
      ), t.events.length = k;
    }
  }
  function b(x) {
    let O = n.length;
    for (; O-- > x; ) {
      const _ = n[O];
      t.containerState = _[1], _[0].exit.call(t, e);
    }
    n.length = x;
  }
  function v() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function jp(e, t, n) {
  return K(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
const Up = {
  tokenize: qp
};
function qp(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    Zt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(
      this.parser.constructs.flowInitial,
      i,
      K(
        e,
        e.attempt(
          this.parser.constructs.flow,
          i,
          e.attempt(gf, i)
        ),
        "linePrefix"
      )
    )
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Vp = {
  resolveAll: ua()
}, Hp = la("string"), Gp = la("text");
function la(e) {
  return {
    tokenize: t,
    resolveAll: ua(
      e === "text" ? Wp : void 0
    )
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, s, a);
    return s;
    function s(f) {
      return u(f) ? o(f) : a(f);
    }
    function a(f) {
      if (f === null) {
        n.consume(f);
        return;
      }
      return n.enter("data"), n.consume(f), l;
    }
    function l(f) {
      return u(f) ? (n.exit("data"), o(f)) : (n.consume(f), l);
    }
    function u(f) {
      if (f === null)
        return !0;
      const c = i[f];
      let d = -1;
      if (c)
        for (; ++d < c.length; ) {
          const h = c[d];
          if (!h.previous || h.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function ua(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function Wp(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, s = -1, a = 0, l;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == "string") {
          for (s = u.length; u.charCodeAt(s - 1) === 32; )
            a++, s--;
          if (s) break;
          s = -1;
        } else if (u === -2)
          l = !0, a++;
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (a) {
        const u = {
          type: n === e.length || l || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
            _index: r.start._index + o,
            _bufferIndex: o ? s : r.start._bufferIndex + s
          },
          end: Object.assign({}, r.end)
        };
        r.end = Object.assign({}, u.start), r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(
          n,
          0,
          ["enter", u, t],
          ["exit", u, t]
        ), n += 2);
      }
      n++;
    }
  return e;
}
function Yp(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const i = {}, o = [];
  let s = [], a = [];
  const l = {
    consume: v,
    enter: x,
    exit: O,
    attempt: L(_),
    check: L(k),
    interrupt: L(k, {
      interrupt: !0
    })
  }, u = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: e,
    sliceStream: h,
    sliceSerialize: d,
    now: p,
    defineSkip: g,
    write: c
  };
  let f = t.tokenize.call(u, l);
  return t.resolveAll && o.push(t), u;
  function c(N) {
    return s = De(s, N), w(), s[s.length - 1] !== null ? [] : (P(t, 0), u.events = zn(o, u.events, u), u.events);
  }
  function d(N, T) {
    return Kp(h(N), T);
  }
  function h(N) {
    return Xp(s, N);
  }
  function p() {
    const { line: N, column: T, offset: B, _index: H, _bufferIndex: q } = r;
    return {
      line: N,
      column: T,
      offset: B,
      _index: H,
      _bufferIndex: q
    };
  }
  function g(N) {
    i[N.line] = N.column, S();
  }
  function w() {
    let N;
    for (; r._index < s.length; ) {
      const T = s[r._index];
      if (typeof T == "string")
        for (N = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === N && r._bufferIndex < T.length; )
          b(T.charCodeAt(r._bufferIndex));
      else
        b(T);
    }
  }
  function b(N) {
    f = f(N);
  }
  function v(N) {
    F(N) ? (r.line++, r.column = 1, r.offset += N === -3 ? 2 : 1, S()) : N !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === s[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = N;
  }
  function x(N, T) {
    const B = T || {};
    return B.type = N, B.start = p(), u.events.push(["enter", B, u]), a.push(B), B;
  }
  function O(N) {
    const T = a.pop();
    return T.end = p(), u.events.push(["exit", T, u]), T;
  }
  function _(N, T) {
    P(N, T.from);
  }
  function k(N, T) {
    T.restore();
  }
  function L(N, T) {
    return B;
    function B(H, q, $) {
      let re, oe, fe, y;
      return Array.isArray(H) ? ge(H) : "tokenize" in H ? (
        // @ts-expect-error Looks like a construct.
        ge([H])
      ) : Q(H);
      function Q(se) {
        return Ye;
        function Ye(Ne) {
          const _e = Ne !== null && se[Ne], ue = Ne !== null && se.null, je = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(_e) ? _e : _e ? [_e] : [],
            ...Array.isArray(ue) ? ue : ue ? [ue] : []
          ];
          return ge(je)(Ne);
        }
      }
      function ge(se) {
        return re = se, oe = 0, se.length === 0 ? $ : m(se[oe]);
      }
      function m(se) {
        return Ye;
        function Ye(Ne) {
          return y = D(), fe = se, se.partial || (u.currentConstruct = se), se.name && u.parser.constructs.disable.null.includes(se.name) ? W() : se.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            T ? Object.assign(Object.create(u), T) : u,
            l,
            V,
            W
          )(Ne);
        }
      }
      function V(se) {
        return N(fe, y), q;
      }
      function W(se) {
        return y.restore(), ++oe < re.length ? m(re[oe]) : $;
      }
    }
  }
  function P(N, T) {
    N.resolveAll && !o.includes(N) && o.push(N), N.resolve && Be(
      u.events,
      T,
      u.events.length - T,
      N.resolve(u.events.slice(T), u)
    ), N.resolveTo && (u.events = N.resolveTo(u.events, u));
  }
  function D() {
    const N = p(), T = u.previous, B = u.currentConstruct, H = u.events.length, q = Array.from(a);
    return {
      restore: $,
      from: H
    };
    function $() {
      r = N, u.previous = T, u.currentConstruct = B, u.events.length = H, a = q, S();
    }
  }
  function S() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Xp(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let s;
  if (n === i)
    s = [e[n].slice(r, o)];
  else {
    if (s = e.slice(n, i), r > -1) {
      const a = s[0];
      typeof a == "string" ? s[0] = a.slice(r) : s.shift();
    }
    o > 0 && s.push(e[i].slice(0, o));
  }
  return s;
}
function Kp(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let s;
    if (typeof o == "string")
      s = o;
    else
      switch (o) {
        case -5: {
          s = "\r";
          break;
        }
        case -4: {
          s = `
`;
          break;
        }
        case -3: {
          s = `\r
`;
          break;
        }
        case -2: {
          s = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && i) continue;
          s = " ";
          break;
        }
        default:
          s = String.fromCharCode(o);
      }
    i = o === -2, r.push(s);
  }
  return r.join("");
}
const Qp = {
  42: ve,
  43: ve,
  45: ve,
  48: ve,
  49: ve,
  50: ve,
  51: ve,
  52: ve,
  53: ve,
  54: ve,
  55: ve,
  56: ve,
  57: ve,
  62: js
}, Jp = {
  91: kf
}, Zp = {
  [-2]: Jn,
  [-1]: Jn,
  32: Jn
}, $p = {
  35: Of,
  42: mn,
  45: [Qi, mn],
  60: If,
  61: Qi,
  95: mn,
  96: Xi,
  126: Xi
}, ed = {
  38: qs,
  92: Us
}, td = {
  [-5]: Zn,
  [-4]: Zn,
  [-3]: Zn,
  33: Kf,
  38: qs,
  42: Or,
  60: [Qc, Bf],
  91: Jf,
  92: [Cf, Us],
  93: ui,
  95: Or,
  96: cf
}, nd = {
  null: [Or, Vp]
}, rd = {
  null: [42, 95]
}, id = {
  null: []
}, od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: rd,
  contentInitial: Jp,
  disable: id,
  document: Qp,
  flow: $p,
  flowInitial: Zp,
  insideSpan: nd,
  string: ed,
  text: td
}, Symbol.toStringTag, { value: "Module" }));
function sd(e) {
  const n = (
    /** @type {FullNormalizedExtension} */
    Is([od, ...(e || {}).extensions || []])
  ), r = {
    defined: [],
    lazy: {},
    constructs: n,
    content: i(Fp),
    document: i(Bp),
    flow: i(Up),
    string: i(Hp),
    text: i(Gp)
  };
  return r;
  function i(o) {
    return s;
    function s(a) {
      return Yp(r, o, a);
    }
  }
}
function ad(e) {
  for (; !Vs(e); )
    ;
  return e;
}
const fo = /[\0\t\n\r]/g;
function ld() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, s, a) {
    const l = [];
    let u, f, c, d, h;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(s || void 0).decode(o)), c = 0, t = "", n && (o.charCodeAt(0) === 65279 && c++, n = void 0); c < o.length; ) {
      if (fo.lastIndex = c, u = fo.exec(o), d = u && u.index !== void 0 ? u.index : o.length, h = o.charCodeAt(d), !u) {
        t = o.slice(c);
        break;
      }
      if (h === 10 && c === d && r)
        l.push(-3), r = void 0;
      else
        switch (r && (l.push(-5), r = void 0), c < d && (l.push(o.slice(c, d)), e += d - c), h) {
          case 0: {
            l.push(65533), e++;
            break;
          }
          case 9: {
            for (f = Math.ceil(e / 4) * 4, l.push(-2); e++ < f; ) l.push(-1);
            break;
          }
          case 10: {
            l.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = d + 1;
    }
    return a && (r && l.push(-5), t && l.push(t), l.push(null)), l;
  }
}
const ca = {}.hasOwnProperty;
function ud(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), cd(n)(ad(sd(n).document().write(ld()(e, t, !0))));
}
function cd(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(be),
      autolinkProtocol: D,
      autolinkEmail: D,
      atxHeading: o(le),
      blockQuote: o(ue),
      characterEscape: D,
      characterReference: D,
      codeFenced: o(je),
      codeFencedFenceInfo: s,
      codeFencedFenceMeta: s,
      codeIndented: o(je, s),
      codeText: o(Z, s),
      codeTextData: D,
      data: D,
      codeFlowValue: D,
      definition: o(ee),
      definitionDestinationString: s,
      definitionLabelString: s,
      definitionTitleString: s,
      emphasis: o(ye),
      hardBreakEscape: o(Te),
      hardBreakTrailing: o(Te),
      htmlFlow: o(Ze, s),
      htmlFlowData: D,
      htmlText: o(Ze, s),
      htmlTextData: D,
      image: o(me),
      label: s,
      link: o(be),
      listItem: o(rn),
      listItemValue: d,
      listOrdered: o(Pe, c),
      listUnordered: o(Pe),
      paragraph: o(on),
      reference: m,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: o(le),
      strong: o(sn),
      thematicBreak: o(Ue)
    },
    exit: {
      atxHeading: l(),
      atxHeadingSequence: _,
      autolink: l(),
      autolinkEmail: _e,
      autolinkProtocol: Ne,
      blockQuote: l(),
      characterEscapeValue: S,
      characterReferenceMarkerHexadecimal: W,
      characterReferenceMarkerNumeric: W,
      characterReferenceValue: se,
      characterReference: Ye,
      codeFenced: l(w),
      codeFencedFence: g,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: p,
      codeFlowValue: S,
      codeIndented: l(b),
      codeText: l(q),
      codeTextData: S,
      data: S,
      definition: l(),
      definitionDestinationString: O,
      definitionLabelString: v,
      definitionTitleString: x,
      emphasis: l(),
      hardBreakEscape: l(T),
      hardBreakTrailing: l(T),
      htmlFlow: l(B),
      htmlFlowData: S,
      htmlText: l(H),
      htmlTextData: S,
      image: l(re),
      label: fe,
      labelText: oe,
      lineEnding: N,
      link: l($),
      listItem: l(),
      listOrdered: l(),
      listUnordered: l(),
      paragraph: l(),
      referenceString: V,
      resourceDestinationString: y,
      resourceTitleString: Q,
      resource: ge,
      setextHeading: l(P),
      setextHeadingLineSequence: L,
      setextHeadingText: k,
      strong: l(),
      thematicBreak: l()
    }
  };
  fa(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(C) {
    let I = {
      type: "root",
      children: []
    };
    const z = {
      stack: [I],
      tokenStack: [],
      config: t,
      enter: a,
      exit: u,
      buffer: s,
      resume: f,
      data: n
    }, Y = [];
    let te = -1;
    for (; ++te < C.length; )
      if (C[te][1].type === "listOrdered" || C[te][1].type === "listUnordered")
        if (C[te][0] === "enter")
          Y.push(te);
        else {
          const qe = Y.pop();
          te = i(C, qe, te);
        }
    for (te = -1; ++te < C.length; ) {
      const qe = t[C[te][0]];
      ca.call(qe, C[te][1].type) && qe[C[te][1].type].call(Object.assign({
        sliceSerialize: C[te][2].sliceSerialize
      }, z), C[te][1]);
    }
    if (z.tokenStack.length > 0) {
      const qe = z.tokenStack[z.tokenStack.length - 1];
      (qe[1] || ho).call(z, void 0, qe[0]);
    }
    for (I.position = {
      start: it(C.length > 0 ? C[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: it(C.length > 0 ? C[C.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, te = -1; ++te < t.transforms.length; )
      I = t.transforms[te](I) || I;
    return I;
  }
  function i(C, I, z) {
    let Y = I - 1, te = -1, qe = !1, ht, $e, Dt, Ft;
    for (; ++Y <= z; ) {
      const Re = C[Y];
      switch (Re[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Re[0] === "enter" ? te++ : te--, Ft = void 0;
          break;
        }
        case "lineEndingBlank": {
          Re[0] === "enter" && (ht && !Ft && !te && !Dt && (Dt = Y), Ft = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ft = void 0;
      }
      if (!te && Re[0] === "enter" && Re[1].type === "listItemPrefix" || te === -1 && Re[0] === "exit" && (Re[1].type === "listUnordered" || Re[1].type === "listOrdered")) {
        if (ht) {
          let kt = Y;
          for ($e = void 0; kt--; ) {
            const et = C[kt];
            if (et[1].type === "lineEnding" || et[1].type === "lineEndingBlank") {
              if (et[0] === "exit") continue;
              $e && (C[$e][1].type = "lineEndingBlank", qe = !0), et[1].type = "lineEnding", $e = kt;
            } else if (!(et[1].type === "linePrefix" || et[1].type === "blockQuotePrefix" || et[1].type === "blockQuotePrefixWhitespace" || et[1].type === "blockQuoteMarker" || et[1].type === "listItemIndent")) break;
          }
          Dt && (!$e || Dt < $e) && (ht._spread = !0), ht.end = Object.assign({}, $e ? C[$e][1].start : Re[1].end), C.splice($e || Y, 0, ["exit", ht, Re[2]]), Y++, z++;
        }
        if (Re[1].type === "listItemPrefix") {
          const kt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Re[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          ht = kt, C.splice(Y, 0, ["enter", kt, Re[2]]), Y++, z++, Dt = void 0, Ft = !0;
        }
      }
    }
    return C[I][1]._spread = qe, z;
  }
  function o(C, I) {
    return z;
    function z(Y) {
      a.call(this, C(Y), Y), I && I.call(this, Y);
    }
  }
  function s() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(C, I, z) {
    this.stack[this.stack.length - 1].children.push(C), this.stack.push(C), this.tokenStack.push([I, z]), C.position = {
      start: it(I.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function l(C) {
    return I;
    function I(z) {
      C && C.call(this, z), u.call(this, z);
    }
  }
  function u(C, I) {
    const z = this.stack.pop(), Y = this.tokenStack.pop();
    if (Y)
      Y[0].type !== C.type && (I ? I.call(this, C, Y[0]) : (Y[1] || ho).call(this, C, Y[0]));
    else throw new Error("Cannot close `" + C.type + "` (" + Wt({
      start: C.start,
      end: C.end
    }) + "): it’s not open");
    z.position.end = it(C.end);
  }
  function f() {
    return oi(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(C) {
    if (this.data.expectingFirstListItemValue) {
      const I = this.stack[this.stack.length - 2];
      I.start = Number.parseInt(this.sliceSerialize(C), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function h() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.lang = C;
  }
  function p() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.meta = C;
  }
  function g() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function w() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function b() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C.replace(/(\r?\n|\r)$/g, "");
  }
  function v(C) {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = I, z.identifier = Ge(this.sliceSerialize(C)).toLowerCase();
  }
  function x() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = C;
  }
  function O() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = C;
  }
  function _(C) {
    const I = this.stack[this.stack.length - 1];
    if (!I.depth) {
      const z = this.sliceSerialize(C).length;
      I.depth = z;
    }
  }
  function k() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function L(C) {
    const I = this.stack[this.stack.length - 1];
    I.depth = this.sliceSerialize(C).codePointAt(0) === 61 ? 1 : 2;
  }
  function P() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function D(C) {
    const z = this.stack[this.stack.length - 1].children;
    let Y = z[z.length - 1];
    (!Y || Y.type !== "text") && (Y = Ee(), Y.position = {
      start: it(C.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, z.push(Y)), this.stack.push(Y);
  }
  function S(C) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(C), I.position.end = it(C.end);
  }
  function N(C) {
    const I = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const z = I.children[I.children.length - 1];
      z.position.end = it(C.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(I.type) && (D.call(this, C), S.call(this, C));
  }
  function T() {
    this.data.atHardBreak = !0;
  }
  function B() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function H() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function q() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = C;
  }
  function $() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      C.type += "Reference", C.referenceType = I, delete C.url, delete C.title;
    } else
      delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function re() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      C.type += "Reference", C.referenceType = I, delete C.url, delete C.title;
    } else
      delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function oe(C) {
    const I = this.sliceSerialize(C), z = this.stack[this.stack.length - 2];
    z.label = xc(I), z.identifier = Ge(I).toLowerCase();
  }
  function fe() {
    const C = this.stack[this.stack.length - 1], I = this.resume(), z = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, z.type === "link") {
      const Y = C.children;
      z.children = Y;
    } else
      z.alt = I;
  }
  function y() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = C;
  }
  function Q() {
    const C = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = C;
  }
  function ge() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function V(C) {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = I, z.identifier = Ge(this.sliceSerialize(C)).toLowerCase(), this.data.referenceType = "full";
  }
  function W(C) {
    this.data.characterReferenceType = C.type;
  }
  function se(C) {
    const I = this.sliceSerialize(C), z = this.data.characterReferenceType;
    let Y;
    z ? (Y = Rs(I, z === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Y = ai(I);
    const te = this.stack[this.stack.length - 1];
    te.value += Y;
  }
  function Ye(C) {
    const I = this.stack.pop();
    I.position.end = it(C.end);
  }
  function Ne(C) {
    S.call(this, C);
    const I = this.stack[this.stack.length - 1];
    I.url = this.sliceSerialize(C);
  }
  function _e(C) {
    S.call(this, C);
    const I = this.stack[this.stack.length - 1];
    I.url = "mailto:" + this.sliceSerialize(C);
  }
  function ue() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function je() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Z() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function ee() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function ye() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function le() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Te() {
    return {
      type: "break"
    };
  }
  function Ze() {
    return {
      type: "html",
      value: ""
    };
  }
  function me() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function be() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Pe(C) {
    return {
      type: "list",
      ordered: C.type === "listOrdered",
      start: null,
      spread: C._spread,
      children: []
    };
  }
  function rn(C) {
    return {
      type: "listItem",
      spread: C._spread,
      checked: null,
      children: []
    };
  }
  function on() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function sn() {
    return {
      type: "strong",
      children: []
    };
  }
  function Ee() {
    return {
      type: "text",
      value: ""
    };
  }
  function Ue() {
    return {
      type: "thematicBreak"
    };
  }
}
function it(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function fa(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? fa(e, r) : fd(e, r);
  }
}
function fd(e, t) {
  let n;
  for (n in t)
    if (ca.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function ho(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Wt({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + Wt({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Wt({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function hd(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return ud(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function pd(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function dd(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function md(e, t) {
  const n = t.value ? t.value + `
` : "", r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function gd(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function yd(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function bd(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Tt(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let s, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), s = e.footnoteOrder.length) : s = o + 1, a += 1, e.footnoteCounts.set(r, a);
  const l = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(s) }]
  };
  e.patch(t, l);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [l]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function wd(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function xd(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function ha(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const s = i[i.length - 1];
  return s && s.type === "text" ? s.value += r : i.push({ type: "text", value: r }), i;
}
function kd(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return ha(e, t);
  const i = { src: Tt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function Sd(e, t) {
  const n = { src: Tt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Ed(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function vd(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return ha(e, t);
  const i = { href: Tt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Cd(e, t) {
  const n = { href: Tt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Ad(e, t, n) {
  const r = e.all(t), i = n ? Od(n) : pa(t), o = {}, s = [];
  if (typeof t.checked == "boolean") {
    const f = r[0];
    let c;
    f && f.type === "element" && f.tagName === "p" ? c = f : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const f = r[a];
    (i || a !== 0 || f.type !== "element" || f.tagName !== "p") && s.push({ type: "text", value: `
` }), f.type === "element" && f.tagName === "p" && !i ? s.push(...f.children) : s.push(f);
  }
  const l = r[r.length - 1];
  l && (i || l.type !== "element" || l.tagName !== "p") && s.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: o, children: s };
  return e.patch(t, u), e.applyData(t, u);
}
function Od(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = pa(n[r]);
  }
  return t;
}
function pa(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function _d(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const s = r[i];
    if (s.type === "element" && s.tagName === "li" && s.properties && Array.isArray(s.properties.className) && s.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Td(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Rd(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Id(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ld(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const s = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], s), i.push(s);
  }
  if (n.length > 0) {
    const s = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, a = hi(t.children[1]), l = na(t.children[t.children.length - 1]);
    a && l && (s.position = { start: a, end: l }), i.push(s);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Nd(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", s = n && n.type === "table" ? n.align : void 0, a = s ? s.length : t.children.length;
  let l = -1;
  const u = [];
  for (; ++l < a; ) {
    const c = t.children[l], d = {}, h = s ? s[l] : void 0;
    h && (d.align = h);
    let p = { type: "element", tagName: o, properties: d, children: [] };
    c && (p.children = e.all(c), e.patch(c, p), p = e.applyData(c, p)), u.push(p);
  }
  const f = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, f), e.applyData(t, f);
}
function Pd(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const po = 9, mo = 32;
function Dd(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      go(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(go(t.slice(i), i > 0, !1)), o.join("");
}
function go(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === po || o === mo; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === po || o === mo; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Fd(e, t) {
  const n = { type: "text", value: Dd(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function zd(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Bd = {
  blockquote: pd,
  break: dd,
  code: md,
  delete: gd,
  emphasis: yd,
  footnoteReference: bd,
  heading: wd,
  html: xd,
  imageReference: kd,
  image: Sd,
  inlineCode: Ed,
  linkReference: vd,
  link: Cd,
  listItem: Ad,
  list: _d,
  paragraph: Td,
  // @ts-expect-error: root is different, but hard to type.
  root: Rd,
  strong: Id,
  table: Ld,
  tableCell: Pd,
  tableRow: Nd,
  text: Fd,
  thematicBreak: zd,
  toml: ln,
  yaml: ln,
  definition: ln,
  footnoteDefinition: ln
};
function ln() {
}
const da = -1, Bn = 0, On = 1, _n = 2, gi = 3, yi = 4, bi = 5, wi = 6, ma = 7, ga = 8, yo = typeof self == "object" ? self : globalThis, Md = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, s] = t[i];
    switch (o) {
      case Bn:
      case da:
        return n(s, i);
      case On: {
        const a = n([], i);
        for (const l of s)
          a.push(r(l));
        return a;
      }
      case _n: {
        const a = n({}, i);
        for (const [l, u] of s)
          a[r(l)] = r(u);
        return a;
      }
      case gi:
        return n(new Date(s), i);
      case yi: {
        const { source: a, flags: l } = s;
        return n(new RegExp(a, l), i);
      }
      case bi: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [l, u] of s)
          a.set(r(l), r(u));
        return a;
      }
      case wi: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const l of s)
          a.add(r(l));
        return a;
      }
      case ma: {
        const { name: a, message: l } = s;
        return n(new yo[a](l), i);
      }
      case ga:
        return n(BigInt(s), i);
      case "BigInt":
        return n(Object(BigInt(s)), i);
    }
    return n(new yo[o](s), i);
  };
  return r;
}, bo = (e) => Md(/* @__PURE__ */ new Map(), e)(0), St = "", { toString: jd } = {}, { keys: Ud } = Object, Bt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Bn, t];
  const n = jd.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [On, St];
    case "Object":
      return [_n, St];
    case "Date":
      return [gi, St];
    case "RegExp":
      return [yi, St];
    case "Map":
      return [bi, St];
    case "Set":
      return [wi, St];
  }
  return n.includes("Array") ? [On, n] : n.includes("Error") ? [ma, n] : [_n, n];
}, un = ([e, t]) => e === Bn && (t === "function" || t === "symbol"), qd = (e, t, n, r) => {
  const i = (s, a) => {
    const l = r.push(s) - 1;
    return n.set(a, l), l;
  }, o = (s) => {
    if (n.has(s))
      return n.get(s);
    let [a, l] = Bt(s);
    switch (a) {
      case Bn: {
        let f = s;
        switch (l) {
          case "bigint":
            a = ga, f = s.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + l);
            f = null;
            break;
          case "undefined":
            return i([da], s);
        }
        return i([a, f], s);
      }
      case On: {
        if (l)
          return i([l, [...s]], s);
        const f = [], c = i([a, f], s);
        for (const d of s)
          f.push(o(d));
        return c;
      }
      case _n: {
        if (l)
          switch (l) {
            case "BigInt":
              return i([l, s.toString()], s);
            case "Boolean":
            case "Number":
            case "String":
              return i([l, s.valueOf()], s);
          }
        if (t && "toJSON" in s)
          return o(s.toJSON());
        const f = [], c = i([a, f], s);
        for (const d of Ud(s))
          (e || !un(Bt(s[d]))) && f.push([o(d), o(s[d])]);
        return c;
      }
      case gi:
        return i([a, s.toISOString()], s);
      case yi: {
        const { source: f, flags: c } = s;
        return i([a, { source: f, flags: c }], s);
      }
      case bi: {
        const f = [], c = i([a, f], s);
        for (const [d, h] of s)
          (e || !(un(Bt(d)) || un(Bt(h)))) && f.push([o(d), o(h)]);
        return c;
      }
      case wi: {
        const f = [], c = i([a, f], s);
        for (const d of s)
          (e || !un(Bt(d))) && f.push(o(d));
        return c;
      }
    }
    const { message: u } = s;
    return i([a, { name: l, message: u }], s);
  };
  return o;
}, wo = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return qd(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Tn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? bo(wo(e, t)) : structuredClone(e)
) : (e, t) => bo(wo(e, t));
function Vd(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Hd(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Gd(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Vd, r = e.options.footnoteBackLabel || Hd, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", s = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let l = -1;
  for (; ++l < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[l]
    );
    if (!u)
      continue;
    const f = e.all(u), c = String(u.identifier).toUpperCase(), d = Tt(c.toLowerCase());
    let h = 0;
    const p = [], g = e.footnoteCounts.get(c);
    for (; g !== void 0 && ++h <= g; ) {
      p.length > 0 && p.push({ type: "text", value: " " });
      let v = typeof n == "string" ? n : n(l, h);
      typeof v == "string" && (v = { type: "text", value: v }), p.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + d + (h > 1 ? "-" + h : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(l, h),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(v) ? v : [v]
      });
    }
    const w = f[f.length - 1];
    if (w && w.type === "element" && w.tagName === "p") {
      const v = w.children[w.children.length - 1];
      v && v.type === "text" ? v.value += " " : w.children.push({ type: "text", value: " " }), w.children.push(...p);
    } else
      f.push(...p);
    const b = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(f, !0)
    };
    e.patch(u, b), a.push(b);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...Tn(s),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Ir = {}.hasOwnProperty, Wd = {};
function Yd(e, t) {
  const n = t || Wd, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = { ...Bd, ...n.handlers }, a = {
    all: u,
    applyData: Kd,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: s,
    one: l,
    options: n,
    patch: Xd,
    wrap: Jd
  };
  return ii(e, function(f) {
    if (f.type === "definition" || f.type === "footnoteDefinition") {
      const c = f.type === "definition" ? r : i, d = String(f.identifier).toUpperCase();
      c.has(d) || c.set(d, f);
    }
  }), a;
  function l(f, c) {
    const d = f.type, h = a.handlers[d];
    if (Ir.call(a.handlers, d) && h)
      return h(a, f, c);
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ("children" in f) {
        const { children: g, ...w } = f, b = Tn(w);
        return b.children = a.all(f), b;
      }
      return Tn(f);
    }
    return (a.options.unknownHandler || Qd)(a, f, c);
  }
  function u(f) {
    const c = [];
    if ("children" in f) {
      const d = f.children;
      let h = -1;
      for (; ++h < d.length; ) {
        const p = a.one(d[h], f);
        if (p) {
          if (h && d[h - 1].type === "break" && (!Array.isArray(p) && p.type === "text" && (p.value = xo(p.value)), !Array.isArray(p) && p.type === "element")) {
            const g = p.children[0];
            g && g.type === "text" && (g.value = xo(g.value));
          }
          Array.isArray(p) ? c.push(...p) : c.push(p);
        }
      }
    }
    return c;
  }
}
function Xd(e, t) {
  e.position && (t.position = pp(e));
}
function Kd(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const s = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: s };
      }
    n.type === "element" && o && Object.assign(n.properties, Tn(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Qd(e, t) {
  const n = t.data || {}, r = "value" in t && !(Ir.call(n, "hProperties") || Ir.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Jd(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function xo(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function ko(e, t) {
  const n = Yd(e, t), r = n.one(e, void 0), i = Gd(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Zd(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      ko(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      ko(n, { file: r, ...e || t })
    );
  };
}
function So(e) {
  if (e)
    throw e;
}
var gn = Object.prototype.hasOwnProperty, ya = Object.prototype.toString, Eo = Object.defineProperty, vo = Object.getOwnPropertyDescriptor, Co = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : ya.call(t) === "[object Array]";
}, Ao = function(t) {
  if (!t || ya.call(t) !== "[object Object]")
    return !1;
  var n = gn.call(t, "constructor"), r = t.constructor && t.constructor.prototype && gn.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || gn.call(t, i);
}, Oo = function(t, n) {
  Eo && n.name === "__proto__" ? Eo(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, _o = function(t, n) {
  if (n === "__proto__")
    if (gn.call(t, n)) {
      if (vo)
        return vo(t, n).value;
    } else return;
  return t[n];
}, $d = function e() {
  var t, n, r, i, o, s, a = arguments[0], l = 1, u = arguments.length, f = !1;
  for (typeof a == "boolean" && (f = a, a = arguments[1] || {}, l = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); l < u; ++l)
    if (t = arguments[l], t != null)
      for (n in t)
        r = _o(a, n), i = _o(t, n), a !== i && (f && i && (Ao(i) || (o = Co(i))) ? (o ? (o = !1, s = r && Co(r) ? r : []) : s = r && Ao(r) ? r : {}, Oo(a, { name: n, newValue: e(f, s, i) })) : typeof i < "u" && Oo(a, { name: n, newValue: i }));
  return a;
};
const tr = /* @__PURE__ */ Jh($d);
function Lr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function em() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const s = i.pop();
    if (typeof s != "function")
      throw new TypeError("Expected function as last argument, not " + s);
    a(null, ...i);
    function a(l, ...u) {
      const f = e[++o];
      let c = -1;
      if (l) {
        s(l);
        return;
      }
      for (; ++c < i.length; )
        (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
      i = u, f ? tm(f, a)(...u) : s(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function tm(e, t) {
  let n;
  return r;
  function r(...s) {
    const a = e.length > s.length;
    let l;
    a && s.push(i);
    try {
      l = e.apply(this, s);
    } catch (u) {
      const f = (
        /** @type {Error} */
        u
      );
      if (a && n)
        throw f;
      return i(f);
    }
    a || (l && l.then && typeof l.then == "function" ? l.then(o, i) : l instanceof Error ? i(l) : o(l));
  }
  function i(s, ...a) {
    n || (n = !0, t(s, ...a));
  }
  function o(s) {
    i(null, s);
  }
}
const Xe = { basename: nm, dirname: rm, extname: im, join: om, sep: "/" };
function nm(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  en(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let s = -1, a = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      s < 0 && (o = !0, s = i + 1), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = s));
  return n === r ? r = s : r < 0 && (r = e.length), e.slice(n, r);
}
function rm(e) {
  if (en(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function im(e) {
  en(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, s;
  for (; t--; ) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (s) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (s = !0, n = t + 1), a === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function om(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    en(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : sm(n);
}
function sm(e) {
  en(e);
  const t = e.codePointAt(0) === 47;
  let n = am(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function am(e, t) {
  let n = "", r = 0, i = -1, o = 0, s = -1, a, l;
  for (; ++s <= e.length; ) {
    if (s < e.length)
      a = e.codePointAt(s);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === s - 1 || o === 1)) if (i !== s - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (l = n.lastIndexOf("/"), l !== n.length - 1) {
              l < 0 ? (n = "", r = 0) : (n = n.slice(0, l), r = n.length - 1 - n.lastIndexOf("/")), i = s, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = s, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, s) : n = e.slice(i + 1, s), r = s - i - 1;
      i = s, o = 0;
    } else a === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function en(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const lm = { cwd: um };
function um() {
  return "/";
}
function Nr(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function cm(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Nr(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return fm(e);
}
function fm(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const nr = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class ba {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? Nr(t) ? n = { path: t } : typeof t == "string" || hm(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : lm.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < nr.length; ) {
      const o = nr[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      nr.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Xe.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    ir(t, "basename"), rr(t, "basename"), this.path = Xe.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Xe.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    To(this.basename, "dirname"), this.path = Xe.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Xe.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (rr(t, "extname"), To(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Xe.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    Nr(t) && (t = cm(t)), ir(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Xe.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    ir(t, "stem"), rr(t, "stem"), this.path = Xe.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new ke(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function rr(e, t) {
  if (e && e.includes(Xe.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Xe.sep + "`"
    );
}
function ir(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function To(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function hm(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const pm = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), dm = {}.hasOwnProperty;
class xi extends pm {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = em();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new xi()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(tr(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (ar("data", this.frozen), this.namespace[t] = n, this) : dm.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (ar("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = cn(t), r = this.parser || this.Parser;
    return or("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), or("process", this.parser || this.Parser), sr("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, s) {
      const a = cn(t), l = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(l, a, function(f, c, d) {
        if (f || !c || !d)
          return u(f);
        const h = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), p = r.stringify(h, d);
        ym(p) ? d.value = p : d.result = p, u(
          f,
          /** @type {VFileWithOutput<CompileResult>} */
          d
        );
      });
      function u(f, c) {
        f || !c ? s(f) : o ? o(c) : n(void 0, c);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), or("processSync", this.parser || this.Parser), sr("processSync", this.compiler || this.Compiler), this.process(t, i), Io("processSync", "process", n), r;
    function i(o, s) {
      n = !0, So(o), r = s;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    Ro(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(s, a) {
      const l = cn(n);
      i.run(t, l, u);
      function u(f, c, d) {
        const h = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        f ? a(f) : s ? s(h) : r(void 0, h, d);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, o), Io("runSync", "run", r), i;
    function o(s, a) {
      So(s), i = a, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = cn(n), i = this.compiler || this.Compiler;
    return sr("stringify", i), Ro(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (ar("use", this.frozen), t != null) if (typeof t == "function")
      l(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? a(t) : s(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(u) {
      if (typeof u == "function")
        l(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [f, ...c] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          l(f, c);
        } else
          s(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function s(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(u.plugins), u.settings && (i.settings = tr(!0, i.settings, u.settings));
    }
    function a(u) {
      let f = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++f < u.length; ) {
          const c = u[f];
          o(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function l(u, f) {
      let c = -1, d = -1;
      for (; ++c < r.length; )
        if (r[c][0] === u) {
          d = c;
          break;
        }
      if (d === -1)
        r.push([u, ...f]);
      else if (f.length > 0) {
        let [h, ...p] = f;
        const g = r[d][1];
        Lr(g) && Lr(h) && (h = tr(!0, g, h)), r[d] = [u, h, ...p];
      }
    }
  }
}
const mm = new xi().freeze();
function or(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function sr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function ar(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Ro(e) {
  if (!Lr(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Io(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function cn(e) {
  return gm(e) ? e : new ba(e);
}
function gm(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function ym(e) {
  return typeof e == "string" || bm(e);
}
function bm(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const wm = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Lo = [], No = { allowDangerousHtml: !0 }, xm = /^(https?|ircs?|mailto|xmpp)$/i, km = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Sm(e) {
  const t = e.allowedElements, n = e.allowElement, r = e.children || "", i = e.className, o = e.components, s = e.disallowedElements, a = e.rehypePlugins || Lo, l = e.remarkPlugins || Lo, u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...No } : No, f = e.skipHtml, c = e.unwrapDisallowed, d = e.urlTransform || Em, h = mm().use(hd).use(l).use(Zd, u).use(a), p = new ba();
  typeof r == "string" && (p.value = r);
  for (const v of km)
    Object.hasOwn(e, v.from) && ("" + v.from + (v.to ? "use `" + v.to + "` instead" : "remove it") + wm + v.id, void 0);
  const g = h.parse(p);
  let w = h.runSync(g, p);
  return i && (w = {
    type: "element",
    tagName: "div",
    properties: { className: i },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      w.type === "root" ? w.children : [w]
    )
  }), ii(w, b), wp(w, {
    Fragment: El,
    components: o,
    ignoreInvalidStyle: !0,
    jsx: ce,
    jsxs: Nn,
    passKeys: !0,
    passNode: !0
  });
  function b(v, x, O) {
    if (v.type === "raw" && O && typeof x == "number")
      return f ? O.children.splice(x, 1) : O.children[x] = { type: "text", value: v.value }, x;
    if (v.type === "element") {
      let _;
      for (_ in er)
        if (Object.hasOwn(er, _) && Object.hasOwn(v.properties, _)) {
          const k = v.properties[_], L = er[_];
          (L === null || L.includes(v.tagName)) && (v.properties[_] = d(String(k || ""), _, v));
        }
    }
    if (v.type === "element") {
      let _ = t ? !t.includes(v.tagName) : s ? s.includes(v.tagName) : !1;
      if (!_ && n && typeof x == "number" && (_ = !n(v, x, O)), _ && O && typeof x == "number")
        return c && v.children ? O.children.splice(x, 1, ...v.children) : O.children.splice(x, 1), x;
    }
  }
}
function Em(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i > -1 && t > i || n > -1 && t > n || r > -1 && t > r || // It is a protocol, it should be allowed.
    xm.test(e.slice(0, t)) ? e : ""
  );
}
const vm = Ot.memo(Sm, (e, t) => e.children === t.children && e.className === t.className);
function Cm({
  data: e,
  id: t,
  type: n
}) {
  return /* @__PURE__ */ ce(
    vm,
    {
      "data-type": n,
      "data-id": t,
      remarkPlugins: [Lh],
      className: "leading-snug font-medium text-sm",
      children: e.message
    }
  );
}
const ki = "-", Am = (e) => {
  const t = _m(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(ki);
      return a[0] === "" && a.length !== 1 && a.shift(), wa(a, t) || Om(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const l = n[s] || [];
      return a && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, wa = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), i = r ? wa(e.slice(1), r) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(ki);
  return (s = t.validators.find(({
    validator: a
  }) => a(o))) == null ? void 0 : s.classGroupId;
}, Po = /^\[(.+)\]$/, Om = (e) => {
  if (Po.test(e)) {
    const t = Po.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, _m = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Rm(Object.entries(e.classGroups), n).forEach(([o, s]) => {
    Pr(s, r, o, t);
  }), r;
}, Pr = (e, t, n, r) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : Do(t, i);
      o.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (Tm(i)) {
        Pr(i(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(([o, s]) => {
      Pr(s, Do(t, o), n, r);
    });
  });
}, Do = (e, t) => {
  let n = e;
  return t.split(ki).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Tm = (e) => e.isThemeGetter, Rm = (e, t) => t ? e.map(([n, r]) => {
  const i = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([s, a]) => [t + s, a])) : o);
  return [n, i];
}) : e, Im = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const i = (o, s) => {
    n.set(o, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let s = n.get(o);
      if (s !== void 0)
        return s;
      if ((s = r.get(o)) !== void 0)
        return i(o, s), s;
    },
    set(o, s) {
      n.has(o) ? n.set(o, s) : i(o, s);
    }
  };
}, xa = "!", Lm = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, i = t[0], o = t.length, s = (a) => {
    const l = [];
    let u = 0, f = 0, c;
    for (let w = 0; w < a.length; w++) {
      let b = a[w];
      if (u === 0) {
        if (b === i && (r || a.slice(w, w + o) === t)) {
          l.push(a.slice(f, w)), f = w + o;
          continue;
        }
        if (b === "/") {
          c = w;
          continue;
        }
      }
      b === "[" ? u++ : b === "]" && u--;
    }
    const d = l.length === 0 ? a : a.substring(f), h = d.startsWith(xa), p = h ? d.substring(1) : d, g = c && c > f ? c - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: h,
      baseClassName: p,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: s
  }) : s;
}, Nm = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, Pm = (e) => ({
  cache: Im(e.cacheSize),
  parseClassName: Lm(e),
  ...Am(e)
}), Dm = /\s+/, Fm = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: i
  } = t, o = [], s = e.trim().split(Dm);
  let a = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const u = s[l], {
      modifiers: f,
      hasImportantModifier: c,
      baseClassName: d,
      maybePostfixModifierPosition: h
    } = n(u);
    let p = !!h, g = r(p ? d.substring(0, h) : d);
    if (!g) {
      if (!p) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (g = r(d), !g) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      p = !1;
    }
    const w = Nm(f).join(":"), b = c ? w + xa : w, v = b + g;
    if (o.includes(v))
      continue;
    o.push(v);
    const x = i(g, p);
    for (let O = 0; O < x.length; ++O) {
      const _ = x[O];
      o.push(b + _);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function zm() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ka(t)) && (r && (r += " "), r += n);
  return r;
}
const ka = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ka(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Bm(e, ...t) {
  let n, r, i, o = s;
  function s(l) {
    const u = t.reduce((f, c) => c(f), e());
    return n = Pm(u), r = n.cache.get, i = n.cache.set, o = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const f = Fm(l, n);
    return i(l, f), f;
  }
  return function() {
    return o(zm.apply(null, arguments));
  };
}
const ae = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Sa = /^\[(?:([a-z-]+):)?(.+)\]$/i, Mm = /^\d+\/\d+$/, jm = /* @__PURE__ */ new Set(["px", "full", "screen"]), Um = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qm = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Hm = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Gm = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, tt = (e) => Ct(e) || jm.has(e) || Mm.test(e), ot = (e) => It(e, "length", $m), Ct = (e) => !!e && !Number.isNaN(Number(e)), lr = (e) => It(e, "number", Ct), Mt = (e) => !!e && Number.isInteger(Number(e)), Wm = (e) => e.endsWith("%") && Ct(e.slice(0, -1)), U = (e) => Sa.test(e), st = (e) => Um.test(e), Ym = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Xm = (e) => It(e, Ym, Ea), Km = (e) => It(e, "position", Ea), Qm = /* @__PURE__ */ new Set(["image", "url"]), Jm = (e) => It(e, Qm, tg), Zm = (e) => It(e, "", eg), jt = () => !0, It = (e, t, n) => {
  const r = Sa.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, $m = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qm.test(e) && !Vm.test(e)
), Ea = () => !1, eg = (e) => Hm.test(e), tg = (e) => Gm.test(e), ng = () => {
  const e = ae("colors"), t = ae("spacing"), n = ae("blur"), r = ae("brightness"), i = ae("borderColor"), o = ae("borderRadius"), s = ae("borderSpacing"), a = ae("borderWidth"), l = ae("contrast"), u = ae("grayscale"), f = ae("hueRotate"), c = ae("invert"), d = ae("gap"), h = ae("gradientColorStops"), p = ae("gradientColorStopPositions"), g = ae("inset"), w = ae("margin"), b = ae("opacity"), v = ae("padding"), x = ae("saturate"), O = ae("scale"), _ = ae("sepia"), k = ae("skew"), L = ae("space"), P = ae("translate"), D = () => ["auto", "contain", "none"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", U, t], T = () => [U, t], B = () => ["", tt, ot], H = () => ["auto", Ct, U], q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], $ = () => ["solid", "dashed", "dotted", "double", "none"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], oe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], fe = () => ["", "0", U], y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [Ct, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [jt],
      spacing: [tt, ot],
      blur: ["none", "", st, U],
      brightness: Q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", st, U],
      borderSpacing: T(),
      borderWidth: B(),
      contrast: Q(),
      grayscale: fe(),
      hueRotate: Q(),
      invert: fe(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Wm, ot],
      inset: N(),
      margin: N(),
      opacity: Q(),
      padding: T(),
      saturate: Q(),
      scale: Q(),
      sepia: fe(),
      skew: Q(),
      space: T(),
      translate: T()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", U]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [st]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...q(), U]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Mt, U]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: N()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: fe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: fe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Mt, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [jt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Mt, U]
        }, U]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [jt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Mt, U]
        }, U]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [d]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [d]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [d]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...oe()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...oe(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...oe(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [L]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [L]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [U, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [U, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [st]
        }, st]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [U, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", st, ot]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", lr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [jt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ct, lr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", tt, U]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [b]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...$(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", tt, ot]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", tt, U]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", U]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [b]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...q(), Km]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Xm]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Jm]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [p]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...$(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: $()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...$()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [tt, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [tt, ot]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: B()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [tt, ot]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", st, Zm]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [jt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...re(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", st, U]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [O]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [O]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [O]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Mt, U]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [P]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [P]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", U]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [tt, ot, lr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, rg = /* @__PURE__ */ Bm(ng);
function Si(...e) {
  return rg(_l(e));
}
const Ei = ei.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ce(
  _t.Root,
  {
    ref: n,
    className: Si(
      "relative flex size-6 aspect-square shrink-0 overflow-hidden rounded-lg border bg-secondary",
      e
    ),
    ...t
  }
));
Ei.displayName = _t.Root.displayName;
const va = ei.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ce(
  _t.Image,
  {
    ref: n,
    className: Si("aspect-square h-full w-full", e),
    ...t
  }
));
va.displayName = _t.Image.displayName;
const Ca = ei.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ce(
  _t.Fallback,
  {
    ref: n,
    className: Si(
      "flex size-full text-sm items-center justify-center rounded-lg",
      e
    ),
    ...t
  }
));
Ca.displayName = _t.Fallback.displayName;
function ig() {
  return /* @__PURE__ */ Nn("div", { className: "flex flex-col items-end wfull gap-1", children: [
    /* @__PURE__ */ ce("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ ce(Ei, { className: "animate-pulse bg-secondary", children: /* @__PURE__ */ ce(Ca, {}) }) }),
    /* @__PURE__ */ ce("div", { className: "w-1/2 min-w-[60%]", children: /* @__PURE__ */ ce("div", { className: "bg-secondary p-6 rounded-lg animate-pulse" }) })
  ] });
}
function og(e) {
  return /* @__PURE__ */ ce("div", { className: "w-full max-w-full overflow-auto shrink-0", children: /* @__PURE__ */ ce("pre", { dir: "auto", className: "text-xs leading-tight", children: JSON.stringify(e, null, 1) }) });
}
const sg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABlCAYAAAC7vkbxAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACd2SURBVHgB7X15lGZHdd+99b6vu2dfNNIghIgEYonELhkQIGDACB8WOUAsMBgbjA9yYiIHEjA2OO4Tzsk5JCeHBIEd2+AQUBJHAmFAQiBrQ4A2tDHDKEH7vs1oZnqme7q/5dXNrap7a3nf6+nu6ZmR/qD6vP7eV69evXp3+d2l6r0P4FflV+VXZf6C8DQuRGS+dt99Yx/7zuPrBp3hJgN4VLcDGwDN+g7iKiJYwTfQ5ZYVIFogHBLCXF3XM2RpL3/ZXVewq7N/sPN5R6/f9V8/+JLeFsQhPI3L04ohzAB826U3rLntYTqOiX/KjtnBS7n6ZCbyc5FgIxmzlofcWXyPlrj9LN/kk9z3I7y/rVuZX6wbN7etm4V737fzlbsnJ5mRT6PylDPkAqLqC1/dvu7W/q4XD2vaYhBfBmRewJTcjEQrWfY7rAnoyWbceM3SxswdkTuDO+P9ITO2z59PVpW5t7ZwC/d25abxVbf9u5cPHj/ntNMG8BSXp4QhThNe+o2tK3eb3sk7pvrvZkq9tiY6mYezBslpgCc6OmqSIXeGRdLxLp0hzEj/IX2kI+4PaYYV6d6xqnP1+vHuZXtruOGrG07dffbZWMNTUI4oQyYnyVz0nGs3Pbi3etOMHb4LjH0NU+QYPsRMQBOHQzoshzjun6U0XnPox0y++yH3Ps08um2ia769ultdftagc+ffnHNkteaIMGSSjfNXvnrd+qm+fd2Q4A+GQ3gdV68Fw5SPIzggQ7SN2w7fmL0aoSWsZ1lCfs4wecHm1cP/c++H3vgE4pGxNYeVIQ6aXvh33139JD3j9dO9wfvI2jMt4Ea+aYMOLJxotjIkHyFlNY5TBg7fgMNGhkeJDJ41zPH1t41X5r+Nb1jxw4+97+WPTR5mxhw2hpz619S9b8W1Z+zr2w/RAH+Dbep6rq6S+HONEEC+m6edFx7HRj1TwU3GmC+fumb1D37ygZfshsNUDg8FLtg+NrHvyd+rrf0cX2ITWmMgswJayMmalSP0NGSIluSp7eH459vdavxT+845bScchnJoKcAQteHrP34xuy1/TkP8Z8ZihTXzwqEM0si12HeCgEl8zGLWDQh8tPhGh3P88xXvjzl5qT1jEMw2Y6s/e9F4ddnNh9joH7IbOun869fu7vXfPUPwaarsiVCbjvaP4S7cjRXXI/Fsna1p7TSgNXlsi/CWNzVHhiF+FPLp5IOFBy3uHevgFzevPfq8u3/3pCfgEJXl3xAT87iv37hxX907lwOtjxJUx9TGkVpFHgNDHNEbDpINDJGbpba+g5I4xrjAzgcU3A85f8D3jXCA0w9XoeCRuG2/MfSdcYTPTv2L193Lw1n2KJbFECfZGy669dnDfdOfZpq9j1mwznAsTAYksDvwRSxhOzVJT6cEX8En9ceotnI8eWWkXbSR5FDqkdgT44fmA9cayVy70lSf+Pg/fdXPJ7csL1d20EN1zDjuwp8ev7dff5HH+OtctdKTzHokwsXECx6JAhwFakfkcoR3hoeC4c+JbBOTSF3gjBlRo7QcLi+Z9D49X5yffMOEwf/0268cu+RvlpGCOSiGOGac+K3rXvBk3/4Hzqr+prNyAVIyV4oW13cy4JikPD9um/uU2jse5pcV5pXaUijr4SxOnG6f6MKfvHXDwz+48OyzDyr1suSROmYcf/ENJ+2ZnvsSD+EM7mGCP72sqG+bwTukigUuaTPiu9gLM2kXzYnIpTxpMtGSutJZncDcyAUPA5O8ptDWFeOdz3xl3QM/PPsgmFLBEsv/PuWtx+2s587j2zmT4+2OV1tnMzj2RvdZhRDPZad87waCBTTBJvv2KrT5BhIamnR3qMdM2PzxjNGaSNHNcQNDuiXUQWrg7e1iBGM5JYjlMXVtT7/cHr31U6945gNXX331kgz9kkb1sm/fuv6+wdQXrIEPsNRV/ta9AUePWFkGquyZcixrXFIgx8cklNXpSRaL4aqWjNgKV632pc7GYaukWVaudURgzN6yfqJ6746PnH73UryvRY/qnd+9aeVPe/s/zS7FJ5n6Y07sHFJ53AAcIXWRjmqt1apARKqNQBMV7ague9B9bztsgixE6cdtw7x7TPapljGQ1LeWQ8YoHp29rEL70dk/esODiz1pUVd/41VXdbbvMu/hOPUv68psQBXNYDqW4aklt1WJxgnICFVkKaobSZvoiQknSCL6wr6wClPUPIj89U6A9mlV26ih0odGe8RtHPCE21+eBOs/u/2PTplezHkLOoXOiG/d290yNPSnPHu6HgXGA0azjjBwLWkz2YbWS3b4zvuV9W2ivTCK//qdxI5QpBuKIcGWfZTBRrOjNiqeS7HNIUcwLzvY5Ym3D9xrp9770b++qbuY0xacnz7ue1cfxZ3/MXbhFGutCTeBYi9tcq0WWcgmrAjdCO6rra9UqhHESun9idSrgeAaG+QpeNxB+hFUiQRGXROxT/4yBkGBEah0EGhJd3LAuyTtlOV50wDtx79ZD7fz+G/ABezJATXkty64gGe08behwi0uFWLMgNOFQ0txCwZkKZthgujmNMAxJXyHmAjhdAQY1aZK963UByK7OtNhjTK1Pxa1Ss4z2XngtM+fD+E6buukTbzBzMNbdglya6PMvWDa1p9Y++UrNi504vxDYFrfsOHYLX2sP2aqeswRomKHxc8sFfADB78VUKQwFpJEEU6KczAQTqEo1mFymbUeYeR8g6KFynxxqeO+wteyS+rQ64MDdoK3z9GK957CUxMHOnNeyHrWD3+4YaYa+7d8w8+pnE8qQOvyVGhU63FRmYlCR/PQGxOU6C2Q5A99RhX1bIEiK8BmkrF2EIcerlDWLFCYWhGXy4c9KF9rsU+uWwd3GNqQ7uqw7KGEr9A3d7mCafmxB/btuZWh6/r5oKuVIc6QP+eqq/55j+i13JsJ6XO1GxjSTGJCMIswoNU4UgpD1FOSoksX1EYrFfwSk2hfkhss6XqxBZl77HmcqOq8wOh9KePyGIcCpsSYRry44HdpMi6c286YpXlinnyeDPS8Xo/++KWXXbaVq2fa2rYy5Iyf/GT9HMB7KoQVHuCztQjk8yQyLPFU4jBbmE75ZxDuPEqM6oFSQ6ABJo0EmIFIIQhVzSEZiF6b8iuTCFBWG40+xi7k+iT1GGOacIM0EoAeVAlT8Q7xt+x5dN0Lef/mtmatiLMDh+9lCXy1wz5QuE5bhs/k7YpubqLWG95iAzHeYTqp4n+VnG94x3Rkq4zsu08+1iXvBntDXCUbYTpc7zdnkE0amNuXvoKr67w09JAWHYgqbMZgdIdz+xTdX7nhkAYamcZZVrFEG6bm6Pe/eOed423HRy71r+688+iLHrn/cr7lFxkKfofLmTHrYjSIoiSeQDBfSTBDmqWOsJC30IEEsXUwYVX6balhIZmofZEYHIEVDQalt5iityjQEyQ9KpfN2kg7TXAW9bF9tj9CwoU4RlCcSbijIvOBuXNPv7ytt6K88Cc/+r3pYf0lvu9VlQABGeYr1oIghoXOxJ7n90pKchdp8qycvGo1nHnU0fy5xu8fqJcFD9LSznXHp/o1b0PYumsavnz7w3D/vn5kIMkEGgkDNR822u/S/GWeceQMFF742p39D149uaWY0CqoefoFF6x4fPNRl/QBXu/jJzRBQ9yqSpPCt6pNiQWG0nc15Fg4Vjr4tZ0OnHvcCfD7z3wWPJ3K+Xc9AZ+68R7YMzcsZjRj8tNrUZMlS2RIMG47n7Fh4s0Pvf/UrfP2NP2sZ7ySFeDULsMxYz16DOetqjzuM0xzlYH2dEnu+2NwRXVxQ2oXDP/xE+Nw8UtOe9oxw5XfOekYuO6sl8GGlZW3V95mNWMkA8uzK0640W6cme6/3y2vLQ7pDtuOcU4evosJv7rDlizObXRCdFvxP8ObM8ouwBrZTCNPJYbSaCTu24UI+7MnPA+eNT4BT9fyT1ZPwN9vOVmyByn41QA0zrHAwRYXDxFOD4dnXX7atnX5kej23rlz57FDsm9ACfs8WAm7JECGA6KyPyfzI2P7YPSsZFnftekZ8JYNm4pTp+oh3D07AzsHfQFsdYIxfaWyxxRDNG41r6OSBpDNp+ixLhN2w1gHTl67ClZ10nzdGZvXwe889xj4BkNYcpUpibD0d1AuMepY8YTH9s46F/g6PRQZ8iDOngoVnUQyn+MJjJQlASQ2nH8iIZIxBRjySSYwmHffvenY4py9zIzrpnbBAGQlScaQgrAN4sYqyk6LJ4knllWFoBxLf4c/Z90YhkN4ZLYHbzhmA6zvptDsA8/dDOff8/iIEPj9KHu4gPfQUsQ75DGN75mhX5/cvv3myVNO6btDnt8fpZu63YpeB1W9Ejhh5zbDgYzjTcVnGc0tGbEDcSttCKQcOJScDOev7VbwytUbirHdMj3l3dwKQ3wS4hTZF5jzuT+BvQoT/Pl9yVFV2abHtG0F+TmQ+pZz3eZ8yOt3ThVjc1qybrwTxENybrogS+sOalULRULB1Nzwjdc9iEfpIS8O+34x3MiJ9VcbBv1ak9cGdHa2Ifmg36TLXGdz5aGRuuMnVkBe9rF29DidXrUsQCymWUvFCd8BS2XFhnaJSJOIM8VKEPXCTFFC4zmG1f1DCys7iconsD3ZOpgJgbZrZqR9vu7vYHJfkmIgsi/+5RPTz+cvj7la4/JWe+zwxAHUz/aObiaBgGmhQQxi/XBsYwIIYxolbalepWptp1xTMSSKEq0ZgAoh04QkwUlr1KblWpRpgYGoCapdrk1H+wSI1/N9GncsZRD21+VCkXXjldx/w5M0wvEcCSKxabEw5qLstY/u6/+aSlfnQrZrj3V6L2OOb/QCkPw58gl9DaJFjtKFbRCYBSYR/CoyCURGc10kq3Mxq1HmhxvOgu+oEakXyVNFxRAtwcyUgFaFtvmzQLlxUOVqurOBARaSZc9GqtpnwsKakBmAzIa20wZzbTdmrEZ4NXzjMgcfM53PbbtkFdH4S/nCYwJSOqvio3CjqiH12LCuCz2/EoaFcu1ygIGhbScp4RMsCN1agnMsjW7OXCppWK7dw9ImR4FvckQGScKslKQIn161KQSLNtCIFoNfWRPGrRceZ9ZteNgxZALXrO5B/yQT1jD7roxJo0r8yNZJ6a1jG4ma94PqM44QHwVGQo/qLkGU9rgrNiBJL6b24DNtnumFoyWuleh4SQttKNMmIn+t2WqIkIuFDfPpf4WmXIEMxRWUiyp+/gY2mMG4cz8f6rBZ3UxoT3TQ47K1HvYNxvSA2AA1QZg/roEAi4hYo2UduWG1GYG0piHp8WwoIY0K9HAjqxAjbaJnLkw11Ey+h3OJMiJmrvPI/Yh3CZrMdEW9LVklqXNEvkqlIV9ntkBhsq7f1Zs9idXh5g53+EyGkjVh9SH56UDfqBIDjko6yu1LvD9sVowUGTyEuKZZTNQGClKOInx6NskNN64RPSw55vqxFpIpgejIFI/8JPjOOIoQ5z9G+IEQ0/K6gCA6ljl8mdBJca1FLST1FBhjdTjh3Evv6nZozG5muJqwRhPg1lMu2NWYFAf5GuGrBW3nL6hG3bYMB9NNqSFHzNYJKwOafTYE0NFVgs8EdXK+PKQFWAaLMqhCQ0aGrpBlUIJLygREoSz1qs+oEqobsSgqVf3aPvu8Rx8f61RoNjLLx0J2N1zHiEFXaQsfclG5eLXgpXBkt2HTQTLHsU0BT4TZRw5Zaa8gIGIZqxTtsdE3FAxVbdLYtigmGXM/llp60tgjzT9ng1NYNYuDLXKPANlNMEMTHc7kbiBZcx0AI8wo+9m+7GbTOBGgjRnY1ICU9InLPVsALhp10tbZwYxyTY+TMrwMdAkPVunJlLm/KmkE7RwjnJ9uKIYOZQILIF1bF3DHJ/YSihae24IlCNP6FeO4gmMiWq1wJAddtOjtuhhhOZQI3ApWSA0vymZ7mG6uUQR61bOUK8i9FHaiZE4+N58NIsYdBrOF2QDRkwKAMhbB7DyAFkELzoiu86AIUUmzI+ph0mgU8U7LWVpoVhDCrLRDcJAF41YTe2LEjXsqLYTqWN6qQGYrKSA6BK5UWZshQDS8zXNMJukgRIqMwbwaoynIe6CC4rGL9v1MYmMgqFUjfeslJNYSvPUeVzQ4lOROFyva3L5YWTkJB8rJhmJhHKpu1eEJp/Gka0ErUDUysx+jq0tapL3YT+2dS31Ahug9gUpb2X+QeoIRL6iALtEeIA1si/PDjsKauiZCRMJc4MsxSso9vEwI4+rGBMMybkd0XQViU1sfubu6hTwujs7J9jo8F2V4UlC4bdJqds0j6aDKGCJpy4h4y0fuJVXyOR9kNUjQ6u1Q4Y2l5T+ZHU2MgRzumtCGsXm5H763wbHmLf2VhSGeAQgJsgTJwnFMx40MtybMBH+0GLdKo3ILbmT9KwR+KNFCAjHcpV+2A7JKsYWoLTQt6pQ5nSZpsDTqUa6xSShIUIaBudGitUB00ybFznAUbAsxa1H8fLrWy72HINHh6ERRvIHCoIur7CfnjXc0xMMxMHqlIJpsQ2xtxQ9Jrm6QFI07AjPS8WRYkpxhE0uyotGracQhSYAg9h1tApQeUiHpVHaSOwMNtGskJzNnAEe7AmgTLmzRAhFayWZQfhwTVGkkEgnZovkZkXjmo08dNt59RSMPTYAZFAXPSQmnkbvJAVcma0bzmlF2IrPa4MmMona7i5tXZe6tZ6FQONkgiOI+6lHJ14w4MUGL0DIaSATOmOIZHIgh8CSMUGdB7YfvJFPZ+ZiC0IPx8WGnQ5bnZZwqojgywhSQOQUQw8bikLS3HLaB+aP2XKPaMrt5OqaALa3LiBTZUHAMy4eqIsFy6kPUJOVL1G2imO5vo1V0bIzAVG4n9LkU0APhYqhUxPCdFLpU8y2Nst6YHg5h6Iz6PkM2MFDXHLuYAkK4KBNV/mqJ8CVm4Ej3TTNKxc2leijWDERNgmw9bqYhsS5qMECaO88GgRl8lU0TQ7BxUSjbxmKCx6tvBonJEEko+pK/WCIDD3n3gYe26A16LwxGC9kZU0Pf2ZApXRkaICuol/H9kUKK782IJJUeVy3437yT1MaCOg31yL0bwRj1ZBIN051FG0FJP2PvmQOgicgEV5Qkn3SZuBzLISzxHtqyCSH7DQnKFRdNlKCQ3VUJs+nc0mPM3SzRN1nSzzSdmkWa7TD+7YKKajfYCtLLKpwBRkEyHXkMCnFU4nHkZvTaFMcx6vZi5m8ErDG5DmaEUq41hL5sEzVEMsCAEQbjubKSP59eL0dUFpMuHSTeSocZ44OnQMl50kceSBOSoCnsoO++2qWvSPAM3RMYO2F8pt+hDjzCZ+yvkFZ2kIJQqR0xmeeVETxMacZv8p9a4wwQqaWWmwVoBoZYEiYnWkukWzABdKYuSF9kHDYoj7ktguQFAfhE50QjA3r79HRkYJ4Fwfwa+fAa0BUrEaIgB9mjlMlxUQrgfZw46XW6hI+x8d7Fd7MJgkHwzfLAMNwYyOE0ZyJkSLalbTpXwNTPdzQYFucaqLwXGu2lkGiFgry3YA5yqjTgQsafu74kGkliUNZ0ysdlHpqbg311HbXfM0VmBLM5sDRPImyK8ydyj5C8NAQq74/YcHB/dccx5ENv7Hc41ftEr6L7BkTPj497+Y7E+8juupILJMKGKbPkKs9XgjRVLW0qvSnAhKzptKKm6X2NXIXyK5Zjb2oISico8LOGY+RVVcmQ//LAvXyzwe6hW+xnMSRKTaG6iTs6VyLpFqgEr9zTwU4ohTkR4izoSKaOWzVx510MPR0cW7XH2L33cLrdx5MmE1eDSeq0r6ARGdkyuzZvwfj+pbIaMhiEojsPH2uqsXZ1macsoWlRqhZpeqg3B9984tFiTAm7IIvIMYtuG/ClBh5xFNbkU0Blx1zVf9ztdF51/8TctSfMbLM0HHLePT4hqmudAEq3VhONKaZIrJiPKTYuGRo9NhoYBmasNl1ImbUjW9zS0vfffoukPqixbiGnfPLL4oSng4G6cBcFtbldrc9bYsQvr18G7ngIV+1xzY173/lKHLuVD085Qrj+/MIxCEtI/ZJSt7nH1+QxNV1eWhVbWH6atrQEVRe94Txz6vnmFrQpM+igZf7gy0P9OThr+43wcH9Wxi/jlnvxE3cZnPu1ayZbapstqPPoRJlAu1Ui5N+aRPo2Cvf6DWb69fDBl7hlxmEp6aqxsXtmerMMmOBe+00mmcAsfxXDL4lH5pmoapTcSGPLsXz5jruBldjNYOzIqceN03vgij1PwEU7H4OpwTB6GBqZo75pSLG7eNk2ScLuwBpdzFU5LoU3T+xlFv0M5JBnyPNWj++e6neu58j9VY5vaSmpEiblq8KyzmaSsJx/T1cNxS2m9gaqOUDAaEfc5wp5/VZevjV7F/xo7uH4iFlY0xtQwZlbnTlw9bUNa7RqT59gbN05iiDupTRWacf1ro1bOfpwr+fbWUnGegm3ogJO6m0idOYURg8xZIExeF9a7zyreedAMrfS4Hac3X+30toz5Bw8bXDO7kuv6RB8pEZYhXEiMmkFiotooKQ7gT7ZDQAHWLFXemclU1y/41iNMOMf5u6Ei3gLD3s6YpkYzQeiC7EpRPHKkKEQ1z+SwsSsZWjWVkW9+6xt4EAavxptiukVVCIXnhRAXOCQ2wuEbBKMIE/U6totz0TJoa2fqK54/Rue9fiF/yb0EoV2PXVuYr/ujkpw3MjUZbQJ3rsK+yKngTCyDfnbECDbqNhq177FhlSeGaOa8R1mhGOIUacCk6YDpLXxuYDkbfQ4IOqrTLxLg2LfAjFlpVtc8UbSd8pyq/76axmKEJX6aKBUpChlAwxusGejCeE7+jfw0exRK8w/XijPhrgSHW+q9+/uVuM/tta+ArLBxIwvQJSQCAsQ8kOLNb3NZyXdbY5hZwR2v9e7i7e7/dSvCqAj0zDAblzAYBriqXKJmWtqRBvyet9ajxmMIYEyMCUsmwXTHDmkGCaPeXT1I5nUV1aEg4KNFu7fuGZ4R94g8nPlprNmuqa+iFV1vzsnLv2HgJHBDgQtGFCpCXVja9MO3crbG7WBF/fugO/yFjwyeZ+WSK2XfJNrAGUakfY19soFKTkjJW2MSrkeUxiC/DPXhqQlsR9tE0G8vMH4WEb2XCCjhYOafzh2/6N7oY0hk6zLL1u98kbm7E01c9C5sh0JAgkSA/rMlDkmVJ839xjagPsdWLdRsc1R2HoUvrtnQe6zU3Cgckn/Dvg+b8bjtw0Qk7nfRl94Ft1qcZcBYj1COObGXgEVMZR6hxHbi2wEzc+USNhyK4wzjPqSUePS+ZgYi7urDv79hWefbVsZ4sqHccvcChj7Gkumc/wiutbOG5HNa4qrE4l3z37U0LJRtsn3fbYP/69u/1GBHwzuhMuYGZVKM5RP+aIEqvFdH3FThwHK9vr6jJZrqZE2je85/dSjxFzKmysv9RhAMZbYvpkr8hruPQInOZd98v7Xb4dGgmEkuD59zVEXs2Td5aEXUoSamBBsRx3rwuZe5dyXbQC5sU+b+/6F2RvhmkF6J+R+GsCFve1wSe+XRTzin28ElWj1pHU2kyKkqRHOBLm4x6QRaomaFE3wV0p6o1lz1U1kBiWlwOxDISwNKlUaeoL//13bL8S1CRB8fN+l/7JHg89bxNU5I4LEJ2ao+6mkiW90pfyFwILVEIy48yLc/jHVKtgIY7CbZmGW2aV47yVX7n1IIXXp8q21N4LBiA8oxDXe77N12KfKw6JbAW/V7QVxgS1I/GHAvTbefXd96iIQW4cJKO+o+OOhvua4RZ9wq2U61R/z7TG6z35fHtixdXDNHZGsPyb1AyOrTizfSv1X++sHPgUf/vBck/at6acXrj76f/Kp1/KZ5JjgbrTHN86EoKGvI74O+dfkKnOc1gx927AlyAovirEZ3LntiXoG7qn3wF7bi8TzGwUtcPDUQShinwAnpngSV+MYtSX+U57YjQFrixgqDPqvmQeQw6E+h5j3g7lRauu60JYWbQOz88TVq7/axox5GfJROHUvdfCbnGSZFQ1gIUCFsOi9D4Fi5OulRfcBIDEq1OUQl6COIjNLeMyzwyUcpY0yAmFru0gZVIsKpREHAMwnjbJ6gHa64yhCLaLEVdlDvsiV1ao9d83XspUhbnJ970r8JkPGNUNk1WC9UN+cbQH1uAl7UNgn721Rj3Wmzw2c7XBw4jwxbgNzfiOGpOBthY3rZOtnx/vRTXY2iLwHF16TY31A2sHwGUAsswWF4S7dTlSJlxsNr/oIniOCutVqxFPSsJVQDoblgSC/TyVzRokYbU8A0I7b4Na6rr+09cwz98NSGOLK/4J37OlC58tM3Lv5bGQiuc3DFxOO/EbBy/J1cfOvNqS8ri72A5QpPOlnDmtqk/Sh0wqT11XOz2ChDdpeY7KCMZFO6n3lMASFQU7eUnrMOsRAaQyLeLGZ57qfY63cglCcrkz9ldkVT9wIB3hV7PzzSu45hTX4jxxHn8dy1GMj6MhIQxT3l9S7chE0OmJjdIsp30ooUoKL3dPXscdoWY+HW6IRCMrcepF0SK4nlMRXbdH6FMDpsQLYRkkQXdhGAyyvmV0q7oRnTsIj0z4INPQ9xLFvwQK/mHDAib7z8G29sbVwvq07V7IXQawtKJE3MpSxxgDOyubgqRc27GH67mAs2odob8hPWqlb7JjalyBTH11ITm3D3YQsmJPcVNggzEdkZ44WanwupuRR+AHbEKDmScj/sE1Y2eiwtv7l2Dh8aeq3Tl/w5/bMQg2+hu/aY031F8yA2xyr3UJgnzqRLQWNQLV4YH6zVgLJ4O35n/agMGPm45hMi0igK2gKxc0V9aIUtnKDmmbhG8UzB7KXM8vNNgNFzDPQmDkIo/21FgmI0juIMb3DkXWjcoBlYWdlzX98yWq6daG3WvsxwiLKK9a97ZZxqD4/QbiHIHhbCjfRu2pCFUC0C8FTy4gOCaK0HvJjRWAHgK0eFB3Qy1GGlW3mo0eCNlhU+7KNwmbRiWeSrSuqz+/s3nvR1Vu29BbR2eIYMsk9n7hv8D2Oc76A3jkKHJASNMQ6rwvyzXtUPbfvPDNniMCtKMZkd8Sr8vMVensSeNaRgVkEjQHqLNLIoxbp6SKBLEGaEPHrwoysaJ/Q4iohACwozM5IZN6B27cy++HnJnwId6mpxv7zzo/85j5YJE4uiiGufOH4s2fHqT6PYfIbTNuag9VITAjj8e+OzOOS6EkxmvpnJlVjQIw3JY0gWv4MOs5TgzBqA4JTMF9Z7Eialt6f50NmZsrPjhqvP77z1ssfgyUUhCWWd8/84NiHevv+ljO4b3NEl9lnbyNqyhf2y02je2ubj3j9hFlH3FIXAbsX1+rbeiYwJA7d8TEG4Y7fN9CVOp/6Z7UYUNCeMD1rJCsQUifW+4FhFtClSUIKBVWDfYLGSurEp100YepTHyE1MqzdvpW0iJG23OcQ5HdJ5Hx3rKY4G1l7b8S9m4S5YfHurh3+4aNvf/PVi7EbeVm0hmi5aNVvPDpmVpzLKZtL2QXueYAgTZu4PFPNgWHtRkUO1YLW+KlWtCMOKSxNJEhTKc0HIEQDvK8psh9hJ6dHaYWWV8SzUpOHkuky5pbxqvOxM/bvumapzAA4CIa48uN1b79383D9v2YP5WIm+JyVe5T8W7DZmAKO5UKRllEPKy/UaLXc0ua9UctxsUHuxWOV+eWEqf7kkalHrjzYn81b8Add2gqGl6Pf9cp93/9Mv7efxcK+g4e1IoxNDBtlJMtW0C+n0Mg3nL8VtZ2zyJLe1B/CP71UqNPXK1DUD+ejGHP9CuxOfvhNr/nR5DJ+c/2gNEQHfeOat91ZEX2GGfJXjLnTRnKjkn0lSS8oh9o8l3np1fQi9UuYi7Fgm1DkAwFNfQoFnR0BjAnN3LFewo1mUBi+ut/61aeoGCV6HaqvGLfwCWbG1cthhisHzxA/HqTbjzn7ruPx2MlubT7fIdgbAjL/0zLzhVllF/pPVwcsWCj7v+AAFyb/4h0q0lxO5Q0Gi6CpZyu038LB3CcfvPZHtyyXGeEyh6h8iK6auGnHk2f1afg5zoSe5F5iiOKSG59fA7/yqisX7QQvizryzuYJt4/hQYcJ712FyNktNq4KL0s9m6AB0cvyHpR6WShelvGZZz8n49dstXpZxB4WFl6Wr/OvF+d6EyavbHiDmHvrSO3993o3B1VfPL7Gv/3pW97yKByEAW8rh4whrji79mu7v31Krzf4c7ZO72LN7piQfIpTzO7BePdLE+5N2eMsaX7fMQAhur0TEfYaDLEumESJYYJLm9xeE5OZgSGyEC66vW4yjRNLnrhxptOneJzL7NaAtDNEZv0YJ/l8d320VN/E02d/NvazbT++69xz3SzCofJbDs6oz1fEzfvFJG3/4Pce3/a77AL+e67Y7NM7Gn8A6dtBSWOQfLGb9FR801RLPBoxPc8Mp8/k4sX0PLWtHlvUuxFlOP736WrazaO9YIO1f7H1tVsO2Y/a52V5NmSeMomn9J+z2XydSf++MYP/g9Vkt67xCnMVGFI9mnkQ2+EZBI2UOAYvJ5/Hj+vEQOhPcQ6FUoYAwC7OgNMBv4a1QtNcfw11O3+4fg7+dOtrztwBh6kcUshqK+985LsrB+P9MxgR/oAJ9xaG5NXuR266PoNrMDx67RY/EHXdDzJAWu6j79rFMPEVom7QRdHo4ShAFgTIcgzhBkMykvQMEXuAJhe0BsjKppp9vbchbtIi/No0Dd13V1NzjFXj9RyI/neambri/1657XGYnFy24T5QOewMccXZlnPh0rEd+/CtM4P95zCRX22N+wlXZ+jJE969uKsruuIXOID8IgNIwjES0WQMMX4OpZalnd52Mx2HbJni5FiAL2e4oe8JDxKsYjTqnJjzDBla144ncnlWmq/y89oOv9afw4tf/sD0owcb6C21HBGGaHGMOWfnD58xXfXeNGfsOznV8rquMZt5VrLqsmHoiHa4QXUlgNFHL3w+iYJBJgzpGNYEFC/Jx6TsCFkn7TX7dH65D/ilOCEj7aI3yYDGxxFAGOKcADbaQwt72HP7Oc9jXPjsFWsuefn53394cnJyqYHLssoRZUhe3njvVRObj5k+mQaD9zBTXsMxzIvZU17vfvfK/3gMhpf2DcSbis+HCNSQMsSGX5X3xK9lVSVLudqSYYAocin/2i2dkckyn192E6AA+5kZDzO0Xcms+f5gx/CGbWe8wz1edsSYkJenjCFaJhn898NPV03t2/0iU8GbzZBOZ9B4PqciNjJN1jDRqyHjW98nKwBk9YtPcA/ZTwuZ3exHoPnfQAnPZwwkm8uxkR1YY2u3SAZhBycR7uWM9W0MmVcMsXvz9Se+eScD5hGBpQOVp5whRWGaT+64YNVeXPXMzgS9qEf2VLLVK1iMn78f4Si2yKv17V6eIeEBHFKb4mI396IPbxN86tUST5TtR2t2TVh7P3t9t1oau2XcVNsGg5mHXnXSit2TsKUGfGq0oa38f1JavN8hxQxDAAAAAElFTkSuQmCC";
function ix({
  children: e,
  bot: t
}) {
  return /* @__PURE__ */ Nn("div", { className: "flex flex-row items-end w-full gap-2", children: [
    /* @__PURE__ */ ce(Ei, { className: "flex items-center size-7 border-0", children: /* @__PURE__ */ ce(
      va,
      {
        src: (t == null ? void 0 : t.avatarUrl) ?? sg,
        alt: "Agent Icon"
      }
    ) }),
    /* @__PURE__ */ ce("div", { className: "w-fit min-w-[50%]", children: /* @__PURE__ */ ce(
      "div",
      {
        className: "bg-primary p-2.5 min-w-fit text-white rounded-lg",
        style: {
          background: "white",
          boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.04)",
          borderRadius: "6px",
          color: "black"
        },
        children: e
      }
    ) })
  ] });
}
var Rn = /* @__PURE__ */ ((e) => (e[e.OPEN = 0] = "OPEN", e[e.CLOSED_RESOLVED = 1] = "CLOSED_RESOLVED", e[e.CLOSED_UNRESOLVED = 2] = "CLOSED_UNRESOLVED", e))(Rn || {}), Aa = /* @__PURE__ */ ((e) => (e.WEB = "web", e.WEB_VOICE = "web_voice", e.PHONE_VOICE = "phone_voice", e.EMAIL = "email", e.SMS = "sms", e.WHATSAPP = "whatsapp", e.API = "api", e))(Aa || {}), Oa = /* @__PURE__ */ ((e) => (e.resolved = "resolved", e.assumed_resolved = "assumed_resolved", e.handed_off = "handed_off", e))(Oa || {}), _a = /* @__PURE__ */ ((e) => (e.hard = "hard", e.light = "light", e))(_a || {}), Ta = /* @__PURE__ */ ((e) => (e.happy = "happy", e.neutral = "neutral", e.angry = "angry", e))(Ta || {}), Ra = /* @__PURE__ */ ((e) => (e.MESSAGE = "message", e.HANDOFF = "handoff", e.HANDOFF_TO_ZENDESK = "handoff_to_zendesk", e.AGENT_MESSAGE = "agent_message", e.AGENT_JOINED = "agent_joined", e.AGENT_COMMENT = "agent_comment", e.AGENT_TOOK_SESSION_FROM_AI = "agent_took_session_from_ai", e.AI_DECIDED_TO_RESOLVE_THE_ISSUE = "ai_decided_to_resolve_the_issue", e.EMAIL_DRAFT_MESSAGE = "email_draft_message", e.FOLLOWUP = "followup", e.AI_ASSUMED_THE_SESSION_RESOLVED = "ai_assumed_the_session_resolved", e.CONTACT_RESOLVED_THE_SESSION = "user_confirmed_the_session_resolved", e))(Ra || {});
const ag = A.object({
  status: A.nativeEnum(Rn),
  channel: A.nativeEnum(Aa),
  assignee_id: A.number().nullable(),
  summary: A.string().nullable(),
  classification: A.string().nullable(),
  contact_id: A.string().nullable(),
  copilot_id: A.string(),
  email: A.string().nullable(),
  email_thread_id: A.string().nullable(),
  group_id: A.string().nullable(),
  id: A.string(),
  is_notification_enabled: A.number(),
  short_token: A.string().nullable(),
  last_seen_at: A.date().nullable(),
  is_online: A.number(),
  ai_closure_type: A.nativeEnum(Oa).nullable(),
  ai_billing_type: A.nativeEnum(_a).nullable(),
  language: A.string().nullable(),
  last_message: A.string().nullable(),
  last_message_at: A.date().nullable(),
  short_link: A.string().nullable(),
  meta: A.custom().and(
    A.object({
      title: A.string().optional(),
      whatsappToNumber: A.string().optional(),
      recordingUrl: A.string().optional(),
      title_generation_type: A.enum(["user", "system"]).nullable(),
      summary: A.string().optional(),
      phoneNumber: A.string().optional()
    })
  ),
  mobileNumber: A.string().nullable(),
  queryOrgId: A.string().nullable(),
  created_at: A.date(),
  updated_at: A.date(),
  assignee: A.object({
    name: A.string(),
    email: A.string(),
    avatar_url: A.string().optional()
  }).nullable(),
  fallback_channel: A.enum(["email", "sms"]).nullable(),
  sentiment: A.nativeEnum(Ta).nullable(),
  ticket_number: A.number(),
  ai_phone_call_sid: A.string().nullable(),
  ai_phone_call_recording_url: A.string().nullable()
});
A.object({
  message: A.string().nullable(),
  type: A.string().nullable(),
  agent_avatar: A.string().nullable(),
  agent_id: A.number().nullable(),
  agent_name: A.string().nullable(),
  api_called: A.boolean().nullable(),
  chatbot_id: A.string().nullable(),
  created_at: A.string(),
  debug_json: A.any().nullable(),
  extra_params: A.any(),
  from_user: A.boolean().nullable(),
  handoff_happened_during_office_hours: A.boolean().nullable(),
  id: A.number(),
  knowledgebase_called: A.boolean().nullable(),
  session_id: A.string(),
  updated_at: A.string().nullable()
});
const lg = A.object({
  name: A.string(),
  is_ai: A.boolean(),
  profile_picture: A.string().optional().nullable(),
  id: A.string().nullable()
}), ug = A.object({
  type: A.literal("message"),
  value: A.string(),
  is_stream_chunk: A.boolean().optional(),
  server_session_id: A.string(),
  client_message_id: A.string().optional()
}), cg = A.object({
  type: A.literal("vote"),
  server_message_id: A.number().optional(),
  client_message_id: A.string().optional(),
  server_session_id: A.string()
}), fg = A.object({
  type: A.literal("info"),
  value: A.string()
}), hg = A.object({
  type: A.literal("ui"),
  value: A.object({
    type: A.string(),
    request_response: A.any(),
    name: A.string(),
    content: A.string(),
    message_id: A.string().optional()
  }),
  client_message_id: A.string().optional(),
  server_session_id: A.string()
}), pg = A.object({
  type: A.literal("form"),
  value: A.object({
    inferredArgs: A.any(),
    parametersSchema: A.object({
      pathParams: A.any(),
      queryParams: A.any(),
      bodyParams: A.any()
    })
  })
}), dg = A.object({
  type: A.literal("chat_event"),
  value: A.object({
    event: A.nativeEnum(Ra),
    message: A.string()
  })
}), mg = A.object({
  type: A.literal("options"),
  value: A.object({
    options: A.array(A.string())
  }),
  server_session_id: A.string()
}), gg = A.object({
  type: A.literal("session_update"),
  value: A.object({
    session: ag
  }),
  server_session_id: A.string()
});
A.discriminatedUnion("type", [
  ug,
  cg,
  fg,
  hg,
  pg,
  dg,
  mg,
  gg
]).and(A.object({
  timestamp: A.string(),
  agent: lg
}));
function yg(e) {
  return /* @__PURE__ */ Nn("div", { className: "w-full relative py-3", children: [
    /* @__PURE__ */ ce(
      "span",
      {
        className: "absolute top-1/2 left-0 right-0 h-px text-primary-foreground bg-secondary w-full"
      }
    ),
    /* @__PURE__ */ ce("p", { className: "text-primary-foreground absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-secondary p-1 text-xs rounded-lg w-fit text-center font-medium shadow-sm", children: e.data.message })
  ] });
}
class bg {
  constructor(t) {
    Fi(this, "components", [
      {
        key: "TEXT",
        component: Cm
      },
      {
        key: "FALLBACK",
        component: og
      },
      {
        key: "LOADING",
        component: ig
      },
      {
        key: "CHAT_EVENT",
        component: yg
      }
    ]);
    const { components: n } = t;
    if (n && n.forEach((r) => this.register(r)), this.components.length === 0)
      throw new Error("No components registered");
    if (!this.get("FALLBACK"))
      throw new Error("No fallback component registered");
  }
  register(t) {
    const n = this.components.findIndex((r) => r.key === t.key);
    return n !== -1 ? this.components[n] = t : this.components.push(t), this;
  }
  get(t) {
    const n = this.components.find(
      (r) => r.key.toUpperCase() === t.toUpperCase()
    );
    return n || null;
  }
  getOrFallback(t) {
    return t ? this.get(t) || this.get("FALLBACK") : this.get("FALLBACK");
  }
  getComponent(t, n) {
    var r;
    return n ? this.getOrFallback(t).component : (r = this.get(t)) == null ? void 0 : r.component;
  }
}
function ox({
  message: e
}) {
  const t = ni(), r = Jt(
    () => new bg({
      components: t.components
    }),
    [t]
  ).getComponent(e.component, t.debug);
  return r ? /* @__PURE__ */ vl(
    r,
    {
      ...e,
      data: e.data ?? {},
      id: e.id,
      key: e.id
    }
  ) : null;
}
function Fo(...e) {
  process.env.NODE_ENV === "development" && console.log("[useChat]", ...e);
}
const Fe = (e = 20) => {
  const t = "abcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let r = 0; r < e; r++)
    n += t[Math.floor(Math.random() * t.length)];
  return n;
};
async function zo(e, t) {
  return e.post("/chat-session/" + t);
}
const sx = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
  "WeekDays",
  "Everyday"
];
async function wg(e, t) {
  return e.get("/chat/init", {
    headers: {
      "X-Session-Id": t
    }
  });
}
async function xg(e, t) {
  return e.get("/chat-session/one/" + t);
}
async function ax(e) {
  return e.get("/copilot/office-hours/public");
}
function kg(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (r.from_user === !0)
      r.message && r.message.length > 0 && t.push({
        type: "FROM_USER",
        content: r.message,
        id: r.id.toString(),
        session_id: r.session_id ?? "",
        timestamp: r.created_at ?? "",
        serverId: r.id.toString(),
        deliveredAt: null
      });
    else
      switch (r.type) {
        case "message":
          t.push({
            type: "FROM_BOT",
            component: "TEXT",
            data: {
              message: r.message ?? ""
            },
            id: r.id.toString() ?? Fe(),
            serverId: r.id ?? Fe(),
            timestamp: r.created_at ?? "",
            original: r,
            agent: {
              is_ai: !0,
              name: r.agent_name ?? ""
            }
          });
          break;
        case "agent_message":
          t.push({
            type: "FROM_BOT",
            component: "TEXT",
            data: {
              message: r.message ?? ""
            },
            id: r.id.toString() ?? Fe(),
            serverId: r.id ?? Fe(),
            timestamp: r.created_at ?? "",
            original: r,
            agent: {
              is_ai: !1,
              name: r.agent_name ?? "",
              agent_avatar: r.agent_avatar ?? ""
            }
          });
          break;
        default:
          t.push({
            type: "FROM_BOT",
            component: "CHAT_EVENT",
            data: {
              event: r.type,
              message: r.message
            },
            id: r.id.toString() ?? Fe(),
            serverId: r.id ?? Fe(),
            original: r,
            timestamp: r.created_at ?? "",
            agent: {
              is_ai: !0,
              name: r.agent_name ?? ""
            }
          });
      }
  }
  return t;
}
var Dr = { exports: {} }, ur = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo;
function Sg() {
  if (Bo) return ur;
  Bo = 1;
  var e = Ot;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, i = e.useEffect, o = e.useLayoutEffect, s = e.useDebugValue;
  function a(c, d) {
    var h = d(), p = r({ inst: { value: h, getSnapshot: d } }), g = p[0].inst, w = p[1];
    return o(function() {
      g.value = h, g.getSnapshot = d, l(g) && w({ inst: g });
    }, [c, h, d]), i(function() {
      return l(g) && w({ inst: g }), c(function() {
        l(g) && w({ inst: g });
      });
    }, [c]), s(h), h;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var h = d();
      return !n(c, h);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : a;
  return ur.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, ur;
}
var cr = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function Eg() {
  return Mo || (Mo = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Ot, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var O = arguments.length, _ = new Array(O > 1 ? O - 1 : 0), k = 1; k < O; k++)
          _[k - 1] = arguments[k];
        r("error", x, _);
      }
    }
    function r(x, O, _) {
      {
        var k = t.ReactDebugCurrentFrame, L = k.getStackAddendum();
        L !== "" && (O += "%s", _ = _.concat([L]));
        var P = _.map(function(D) {
          return String(D);
        });
        P.unshift("Warning: " + O), Function.prototype.apply.call(console[x], console, P);
      }
    }
    function i(x, O) {
      return x === O && (x !== 0 || 1 / x === 1 / O) || x !== x && O !== O;
    }
    var o = typeof Object.is == "function" ? Object.is : i, s = e.useState, a = e.useEffect, l = e.useLayoutEffect, u = e.useDebugValue, f = !1, c = !1;
    function d(x, O, _) {
      f || e.startTransition !== void 0 && (f = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var k = O();
      if (!c) {
        var L = O();
        o(k, L) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var P = s({
        inst: {
          value: k,
          getSnapshot: O
        }
      }), D = P[0].inst, S = P[1];
      return l(function() {
        D.value = k, D.getSnapshot = O, h(D) && S({
          inst: D
        });
      }, [x, k, O]), a(function() {
        h(D) && S({
          inst: D
        });
        var N = function() {
          h(D) && S({
            inst: D
          });
        };
        return x(N);
      }, [x]), u(k), k;
    }
    function h(x) {
      var O = x.getSnapshot, _ = x.value;
      try {
        var k = O();
        return !o(_, k);
      } catch {
        return !0;
      }
    }
    function p(x, O, _) {
      return O();
    }
    var g = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", w = !g, b = w ? p : d, v = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    cr.useSyncExternalStore = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), cr;
}
process.env.NODE_ENV === "production" ? Dr.exports = Sg() : Dr.exports = Eg();
var vg = Dr.exports;
const lt = () => {
}, Ce = (
  /*#__NOINLINE__*/
  lt()
), fr = Object, J = (e) => e === Ce, Ke = (e) => typeof e == "function", ct = (e, t) => ({
  ...e,
  ...t
}), Cg = (e) => Ke(e.then), fn = /* @__PURE__ */ new WeakMap();
let Ag = 0;
const Xt = (e) => {
  const t = typeof e, n = e && e.constructor, r = n == Date;
  let i, o;
  if (fr(e) === e && !r && n != RegExp) {
    if (i = fn.get(e), i) return i;
    if (i = ++Ag + "~", fn.set(e, i), n == Array) {
      for (i = "@", o = 0; o < e.length; o++)
        i += Xt(e[o]) + ",";
      fn.set(e, i);
    }
    if (n == fr) {
      i = "#";
      const s = fr.keys(e).sort();
      for (; !J(o = s.pop()); )
        J(e[o]) || (i += o + ":" + Xt(e[o]) + ",");
      fn.set(e, i);
    }
  } else
    i = r ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return i;
}, nt = /* @__PURE__ */ new WeakMap(), hr = {}, hn = {}, vi = "undefined", Mn = typeof window != vi, Fr = typeof document != vi, Og = () => Mn && typeof window.requestAnimationFrame != vi, Ia = (e, t) => {
  const n = nt.get(e);
  return [
    // Getter
    () => !J(t) && e.get(t) || hr,
    // Setter
    (r) => {
      if (!J(t)) {
        const i = e.get(t);
        t in hn || (hn[t] = i), n[5](t, ct(i, r), i || hr);
      }
    },
    // Subscriber
    n[6],
    // Get server cache snapshot
    () => !J(t) && t in hn ? hn[t] : !J(t) && e.get(t) || hr
  ];
};
let zr = !0;
const _g = () => zr, [Br, Mr] = Mn && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  lt,
  lt
], Tg = () => {
  const e = Fr && document.visibilityState;
  return J(e) || e !== "hidden";
}, Rg = (e) => (Fr && document.addEventListener("visibilitychange", e), Br("focus", e), () => {
  Fr && document.removeEventListener("visibilitychange", e), Mr("focus", e);
}), Ig = (e) => {
  const t = () => {
    zr = !0, e();
  }, n = () => {
    zr = !1;
  };
  return Br("online", t), Br("offline", n), () => {
    Mr("online", t), Mr("offline", n);
  };
}, Lg = {
  isOnline: _g,
  isVisible: Tg
}, Ng = {
  initFocus: Rg,
  initReconnect: Ig
}, jo = !Ot.useId, Kt = !Mn || "Deno" in window, Pg = (e) => Og() ? window.requestAnimationFrame(e) : setTimeout(e, 1), pr = Kt ? He : Cl, dr = typeof navigator < "u" && navigator.connection, Uo = !Kt && dr && ([
  "slow-2g",
  "2g"
].includes(dr.effectiveType) || dr.saveData), Ci = (e) => {
  if (Ke(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  const t = e;
  return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? Xt(e) : "", [
    e,
    t
  ];
};
let Dg = 0;
const jr = () => ++Dg, La = 0, Na = 1, Pa = 2, Fg = 3;
var Ut = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: Fg,
  FOCUS_EVENT: La,
  MUTATE_EVENT: Pa,
  RECONNECT_EVENT: Na
};
async function Da(...e) {
  const [t, n, r, i] = e, o = ct({
    populateCache: !0,
    throwOnError: !0
  }, typeof i == "boolean" ? {
    revalidate: i
  } : i || {});
  let s = o.populateCache;
  const a = o.rollbackOnError;
  let l = o.optimisticData;
  const u = (d) => typeof a == "function" ? a(d) : a !== !1, f = o.throwOnError;
  if (Ke(n)) {
    const d = n, h = [], p = t.keys();
    for (const g of p)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(g) && d(t.get(g)._k) && h.push(g);
    return Promise.all(h.map(c));
  }
  return c(n);
  async function c(d) {
    const [h] = Ci(d);
    if (!h) return;
    const [p, g] = Ia(t, h), [w, b, v, x] = nt.get(t), O = () => {
      const B = w[h];
      return (Ke(o.revalidate) ? o.revalidate(p().data, d) : o.revalidate !== !1) && (delete v[h], delete x[h], B && B[0]) ? B[0](Pa).then(() => p().data) : p().data;
    };
    if (e.length < 3)
      return O();
    let _ = r, k;
    const L = jr();
    b[h] = [
      L,
      0
    ];
    const P = !J(l), D = p(), S = D.data, N = D._c, T = J(N) ? S : N;
    if (P && (l = Ke(l) ? l(T, S) : l, g({
      data: l,
      _c: T
    })), Ke(_))
      try {
        _ = _(T);
      } catch (B) {
        k = B;
      }
    if (_ && Cg(_))
      if (_ = await _.catch((B) => {
        k = B;
      }), L !== b[h][0]) {
        if (k) throw k;
        return _;
      } else k && P && u(k) && (s = !0, g({
        data: T,
        _c: Ce
      }));
    if (s && !k)
      if (Ke(s)) {
        const B = s(_, T);
        g({
          data: B,
          error: Ce,
          _c: Ce
        });
      } else
        g({
          data: _,
          error: Ce,
          _c: Ce
        });
    if (b[h][1] = jr(), Promise.resolve(O()).then(() => {
      g({
        _c: Ce
      });
    }), k) {
      if (f) throw k;
      return;
    }
    return _;
  }
}
const qo = (e, t) => {
  for (const n in e)
    e[n][0] && e[n][0](t);
}, zg = (e, t) => {
  if (!nt.has(e)) {
    const n = ct(Ng, t), r = {}, i = Da.bind(Ce, e);
    let o = lt;
    const s = {}, a = (f, c) => {
      const d = s[f] || [];
      return s[f] = d, d.push(c), () => d.splice(d.indexOf(c), 1);
    }, l = (f, c, d) => {
      e.set(f, c);
      const h = s[f];
      if (h)
        for (const p of h)
          p(c, d);
    }, u = () => {
      if (!nt.has(e) && (nt.set(e, [
        r,
        {},
        {},
        {},
        i,
        l,
        a
      ]), !Kt)) {
        const f = n.initFocus(setTimeout.bind(Ce, qo.bind(Ce, r, La))), c = n.initReconnect(setTimeout.bind(Ce, qo.bind(Ce, r, Na)));
        o = () => {
          f && f(), c && c(), nt.delete(e);
        };
      }
    };
    return u(), [
      e,
      i,
      u,
      o
    ];
  }
  return [
    e,
    nt.get(e)[4]
  ];
}, Bg = (e, t, n, r, i) => {
  const o = n.errorRetryCount, s = i.retryCount, a = ~~((Math.random() + 0.5) * (1 << (s < 8 ? s : 8))) * n.errorRetryInterval;
  !J(o) && s > o || setTimeout(r, a, i);
}, Mg = (e, t) => Xt(e) == Xt(t), [Fa, jg] = zg(/* @__PURE__ */ new Map()), Ug = ct(
  {
    // events
    onLoadingSlow: lt,
    onSuccess: lt,
    onError: lt,
    onErrorRetry: Bg,
    onDiscarded: lt,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: Uo ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Uo ? 5e3 : 3e3,
    // providers
    compare: Mg,
    isPaused: () => !1,
    cache: Fa,
    mutate: jg,
    fallback: {}
  },
  // use web preset by default
  Lg
), qg = (e, t) => {
  const n = ct(e, t);
  if (t) {
    const { use: r, fallback: i } = e, { use: o, fallback: s } = t;
    r && o && (n.use = r.concat(o)), i && s && (n.fallback = ct(i, s));
  }
  return n;
}, Vg = fs({}), Hg = "$inf$", za = Mn && window.__SWR_DEVTOOLS_USE__, Gg = za ? window.__SWR_DEVTOOLS_USE__ : [], Wg = () => {
  za && (window.__SWR_DEVTOOLS_REACT__ = Ot);
}, Yg = (e) => Ke(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], Xg = () => ct(Ug, hs(Vg)), Kg = (e) => (t, n, r) => e(t, n && ((...o) => {
  const [s] = Ci(t), [, , , a] = nt.get(Fa);
  if (s.startsWith(Hg))
    return n(...o);
  const l = a[s];
  return J(l) ? n(...o) : (delete a[s], l);
}), r), Qg = Gg.concat(Kg), Jg = (e) => function(...n) {
  const r = Xg(), [i, o, s] = Yg(n), a = qg(r, s);
  let l = e;
  const { use: u } = a, f = (u || []).concat(Qg);
  for (let c = f.length; c--; )
    l = f[c](l);
  return l(i, o || a.fetcher || null, a);
}, Zg = (e, t, n) => {
  const r = t[e] || (t[e] = []);
  return r.push(n), () => {
    const i = r.indexOf(n);
    i >= 0 && (r[i] = r[r.length - 1], r.pop());
  };
};
Wg();
const Vo = Ot.use || ((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then((t) => {
    e.status = "fulfilled", e.value = t;
  }, (t) => {
    e.status = "rejected", e.reason = t;
  }), e);
}), mr = {
  dedupe: !0
}, $g = (e, t, n) => {
  const { cache: r, compare: i, suspense: o, fallbackData: s, revalidateOnMount: a, revalidateIfStale: l, refreshInterval: u, refreshWhenHidden: f, refreshWhenOffline: c, keepPreviousData: d } = n, [h, p, g, w] = nt.get(r), [b, v] = Ci(e), x = pt(!1), O = pt(!1), _ = pt(b), k = pt(t), L = pt(n), P = () => L.current, D = () => P().isVisible() && P().isOnline(), [S, N, T, B] = Ia(r, b), H = pt({}).current, q = J(s) ? n.fallback[b] : s, $ = (Z, ee) => {
    for (const ye in H) {
      const le = ye;
      if (le === "data") {
        if (!i(Z[le], ee[le]) && (!J(Z[le]) || !i(W, ee[le])))
          return !1;
      } else if (ee[le] !== Z[le])
        return !1;
    }
    return !0;
  }, re = Jt(() => {
    const Z = !b || !t ? !1 : J(a) ? P().isPaused() || o ? !1 : J(l) ? !0 : l : a, ee = (be) => {
      const Pe = ct(be);
      return delete Pe._k, Z ? {
        isValidating: !0,
        isLoading: !0,
        ...Pe
      } : Pe;
    }, ye = S(), le = B(), Te = ee(ye), Ze = ye === le ? Te : ee(le);
    let me = Te;
    return [
      () => {
        const be = ee(S());
        return $(be, me) ? (me.data = be.data, me.isLoading = be.isLoading, me.isValidating = be.isValidating, me.error = be.error, me) : (me = be, be);
      },
      () => Ze
    ];
  }, [
    r,
    b
  ]), oe = vg.useSyncExternalStore(we(
    (Z) => T(b, (ee, ye) => {
      $(ye, ee) || Z();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      b
    ]
  ), re[0], re[1]), fe = !x.current, y = h[b] && h[b].length > 0, Q = oe.data, ge = J(Q) ? q : Q, m = oe.error, V = pt(ge), W = d ? J(Q) ? V.current : Q : ge, se = y && !J(m) ? !1 : fe && !J(a) ? a : P().isPaused() ? !1 : o ? J(ge) ? !1 : l : J(ge) || l, Ye = !!(b && t && fe && se), Ne = J(oe.isValidating) ? Ye : oe.isValidating, _e = J(oe.isLoading) ? Ye : oe.isLoading, ue = we(
    async (Z) => {
      const ee = k.current;
      if (!b || !ee || O.current || P().isPaused())
        return !1;
      let ye, le, Te = !0;
      const Ze = Z || {}, me = !g[b] || !Ze.dedupe, be = () => jo ? !O.current && b === _.current && x.current : b === _.current, Pe = {
        isValidating: !1,
        isLoading: !1
      }, rn = () => {
        N(Pe);
      }, on = () => {
        const Ee = g[b];
        Ee && Ee[1] === le && delete g[b];
      }, sn = {
        isValidating: !0
      };
      J(S().data) && (sn.isLoading = !0);
      try {
        if (me && (N(sn), n.loadingTimeout && J(S().data) && setTimeout(() => {
          Te && be() && P().onLoadingSlow(b, n);
        }, n.loadingTimeout), g[b] = [
          ee(v),
          jr()
        ]), [ye, le] = g[b], ye = await ye, me && setTimeout(on, n.dedupingInterval), !g[b] || g[b][1] !== le)
          return me && be() && P().onDiscarded(b), !1;
        Pe.error = Ce;
        const Ee = p[b];
        if (!J(Ee) && // case 1
        (le <= Ee[0] || // case 2
        le <= Ee[1] || // case 3
        Ee[1] === 0))
          return rn(), me && be() && P().onDiscarded(b), !1;
        const Ue = S().data;
        Pe.data = i(Ue, ye) ? Ue : ye, me && be() && P().onSuccess(ye, b, n);
      } catch (Ee) {
        on();
        const Ue = P(), { shouldRetryOnError: C } = Ue;
        Ue.isPaused() || (Pe.error = Ee, me && be() && (Ue.onError(Ee, b, Ue), (C === !0 || Ke(C) && C(Ee)) && (!P().revalidateOnFocus || !P().revalidateOnReconnect || D()) && Ue.onErrorRetry(Ee, b, Ue, (I) => {
          const z = h[b];
          z && z[0] && z[0](Ut.ERROR_REVALIDATE_EVENT, I);
        }, {
          retryCount: (Ze.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return Te = !1, rn(), !0;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      b,
      r
    ]
  ), je = we(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...Z) => Da(r, _.current, ...Z),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (pr(() => {
    k.current = t, L.current = n, J(Q) || (V.current = Q);
  }), pr(() => {
    if (!b) return;
    const Z = ue.bind(Ce, mr);
    let ee = 0;
    const le = Zg(b, h, (Te, Ze = {}) => {
      if (Te == Ut.FOCUS_EVENT) {
        const me = Date.now();
        P().revalidateOnFocus && me > ee && D() && (ee = me + P().focusThrottleInterval, Z());
      } else if (Te == Ut.RECONNECT_EVENT)
        P().revalidateOnReconnect && D() && Z();
      else {
        if (Te == Ut.MUTATE_EVENT)
          return ue();
        if (Te == Ut.ERROR_REVALIDATE_EVENT)
          return ue(Ze);
      }
    });
    return O.current = !1, _.current = b, x.current = !0, N({
      _k: v
    }), se && (J(ge) || Kt ? Z() : Pg(Z)), () => {
      O.current = !0, le();
    };
  }, [
    b
  ]), pr(() => {
    let Z;
    function ee() {
      const le = Ke(u) ? u(S().data) : u;
      le && Z !== -1 && (Z = setTimeout(ye, le));
    }
    function ye() {
      !S().error && (f || P().isVisible()) && (c || P().isOnline()) ? ue(mr).then(ee) : ee();
    }
    return ee(), () => {
      Z && (clearTimeout(Z), Z = -1);
    };
  }, [
    u,
    f,
    c,
    b
  ]), Al(W), o && J(ge) && b) {
    if (!jo && Kt)
      throw new Error("Fallback data is required when using suspense in SSR.");
    k.current = t, L.current = n, O.current = !1;
    const Z = w[b];
    if (!J(Z)) {
      const ee = je(Z);
      Vo(ee);
    }
    if (J(m)) {
      const ee = ue(mr);
      J(W) || (ee.status = "fulfilled", ee.value = !0), Vo(ee);
    } else
      throw m;
  }
  return {
    mutate: je,
    get data() {
      return H.data = !0, W;
    },
    get error() {
      return H.error = !0, m;
    },
    get isValidating() {
      return H.isValidating = !0, Ne;
    },
    get isLoading() {
      return H.isLoading = !0, _e;
    }
  };
}, ey = Jg($g), ty = "@openchatai/widget", ny = "1.3.9", ry = "module", iy = {
  access: "public"
}, oy = {
  prepare: "vite build",
  clean: "rm -rf ./dist ./dist-embed",
  "clean:dist": "rm -rf ./dist ./dist-embed",
  prepublishOnly: "pnpm clean && pnpm test && pnpm batman",
  build: "vite build",
  dev: "vite",
  "build:embed": "vite build -c vite.embed.config.ts",
  test: "vitest run",
  batman: "pnpm build && pnpm build:embed",
  "test:watch": "vitest --watch"
}, sy = {
  "lucide-react": "^0.412.0",
  react: "^18.3.1"
}, ay = {
  "@testing-library/dom": "^10.4.0",
  "@testing-library/jest-dom": "^6.5.0",
  "@testing-library/react": "^16.0.1",
  "@types/node": "^20.14.8",
  "@types/react": "^18.3.4",
  "@types/react-dom": "^18.3.0",
  "@uiw/react-iframe": "^1.0.3",
  "@vitejs/plugin-react": "^4.3.1",
  autoprefixer: "^10.4.20",
  axios: "^1.7.5",
  "class-variance-authority": "^0.7.0",
  jsdom: "^25.0.1",
  postcss: "^8.4.41",
  "postcss-prefix-selector": "^1.16.1",
  react: "^18.3.1",
  "@biomejs/biome": "1.9.4",
  "react-dom": "^18.3.1",
  "react-markdown": "^9.0.1",
  "remark-gfm": "^4.0.0",
  "socket.io-client": "^4.7.5",
  swr: "^2.2.5",
  "tailwind-merge": "^2.4.0",
  tailwindcss: "^3.4.6",
  "tailwindcss-animate": "^1.0.7",
  typescript: "^5.5.4",
  vite: "^5.4.2",
  "vite-plugin-dts": "4.0.3",
  "vite-plugin-externalize-deps": "^0.8.0",
  "vite-tsconfig-paths": "^5.0.1",
  "@changesets/cli": "^2.27.9",
  vitest: "^2.0.5"
}, ly = [
  "dist",
  "dist-embed"
], uy = {
  url: "https://github.com/openchatai/OpenCopilot/issues"
}, cy = {
  name: "openchatai",
  url: "https://github.com/openchatai"
}, fy = "./dist/index.cjs.js", hy = "./dist/index.es.js", py = "./dist/index.d.ts", dy = !1, my = {
  ".": {
    import: "./dist/index.es.js",
    require: "./dist/index.cjs.js",
    types: "./dist/index.d.ts"
  },
  "./basic": {
    import: "./dist/basic.es.js",
    require: "./dist/basic.cjs.js",
    types: "./dist/basic.d.ts"
  },
  "./package.json": "./package.json",
  "./dist/*.css": "./dist/*.css"
}, gy = {
  "@radix-ui/react-avatar": "^1.1.0",
  "@radix-ui/react-popover": "^1.1.1",
  "@radix-ui/react-slot": "^1.1.0",
  "@radix-ui/react-switch": "^1.1.0",
  "@radix-ui/react-toast": "^1.2.1",
  "@radix-ui/react-tooltip": "^1.1.2",
  clsx: "^2.1.1",
  "framer-motion": "^11.3.30",
  immer: "^10.1.1",
  "lucide-react": "^0.436.0",
  wouter: "^3.3.5",
  zod: "^3.23.8"
}, Ho = {
  name: ty,
  private: !1,
  version: ny,
  type: ry,
  publishConfig: iy,
  scripts: oy,
  peerDependencies: sy,
  devDependencies: ay,
  files: ly,
  bugs: uy,
  author: cy,
  main: fy,
  module: hy,
  types: py,
  sideEffects: dy,
  exports: my,
  dependencies: gy
};
function yy(e, t) {
  const [n, r] = vn(e);
  return He(() => {
    const i = setTimeout(() => r(e), t);
    return () => clearTimeout(i);
  }, [e, t, n]), [n, r];
}
function by(e) {
  var n, r, i, o, s, a, l, u, f;
  const t = e._message;
  switch (t && ((n = e.onAny) == null || n.call(e, t, e)), t.type) {
    case "message": {
      (r = e.onBotMessage) == null || r.call(e, {
        type: "FROM_BOT",
        component: "TEXT",
        id: Fe(15),
        serverId: null,
        bot: t.agent,
        timestamp: t.timestamp,
        data: {
          message: t.value
        },
        agent: t.agent
      }, e);
      break;
    }
    case "info":
      (i = e.onInfo) == null || i.call(e, t, e);
      break;
    case "chat_event": {
      (o = e.onChatEvent) == null || o.call(e, {
        component: "CHAT_EVENT",
        type: "FROM_BOT",
        id: Fe(),
        serverId: null,
        data: {
          event: t.value.event,
          message: t.value.message
        },
        timestamp: t.timestamp
      }, e);
      break;
    }
    case "session_update":
      (s = e.onSessionUpdate) == null || s.call(e, t, e);
      break;
    case "options":
      (a = e.onOptions) == null || a.call(e, t, e);
      break;
    case "ui": {
      const c = t.value;
      (l = e.onUi) == null || l.call(e, {
        type: "FROM_BOT",
        component: c.name,
        data: c.request_response,
        serverId: null,
        id: Fe(),
        bot: t.agent,
        timestamp: t.timestamp
      }, e);
      break;
    }
    case "form": {
      const c = t.value;
      (u = e.onForm) == null || u.call(e, {
        type: "FROM_BOT",
        component: "FORM",
        data: c,
        serverId: null,
        id: Fe(),
        bot: t.agent,
        timestamp: t.timestamp
      }, e);
      break;
    }
    case "vote": {
      (f = e.onVote) == null || f.call(e, t, e);
      break;
    }
  }
}
const Qe = /* @__PURE__ */ Object.create(null);
Qe.open = "0";
Qe.close = "1";
Qe.ping = "2";
Qe.pong = "3";
Qe.message = "4";
Qe.upgrade = "5";
Qe.noop = "6";
const yn = /* @__PURE__ */ Object.create(null);
Object.keys(Qe).forEach((e) => {
  yn[Qe[e]] = e;
});
const Ur = { type: "error", data: "parser error" }, Ba = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ma = typeof ArrayBuffer == "function", ja = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Ai = ({ type: e, data: t }, n, r) => Ba && t instanceof Blob ? n ? r(t) : Go(t, r) : Ma && (t instanceof ArrayBuffer || ja(t)) ? n ? r(t) : Go(new Blob([t]), r) : r(Qe[e] + (t || "")), Go = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    t("b" + (r || ""));
  }, n.readAsDataURL(e);
};
function Wo(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let gr;
function wy(e, t) {
  if (Ba && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Wo).then(t);
  if (Ma && (e.data instanceof ArrayBuffer || ja(e.data)))
    return t(Wo(e.data));
  Ai(e, !1, (n) => {
    gr || (gr = new TextEncoder()), t(gr.encode(n));
  });
}
const Yo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ht = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Yo.length; e++)
  Ht[Yo.charCodeAt(e)] = e;
const xy = (e) => {
  let t = e.length * 0.75, n = e.length, r, i = 0, o, s, a, l;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const u = new ArrayBuffer(t), f = new Uint8Array(u);
  for (r = 0; r < n; r += 4)
    o = Ht[e.charCodeAt(r)], s = Ht[e.charCodeAt(r + 1)], a = Ht[e.charCodeAt(r + 2)], l = Ht[e.charCodeAt(r + 3)], f[i++] = o << 2 | s >> 4, f[i++] = (s & 15) << 4 | a >> 2, f[i++] = (a & 3) << 6 | l & 63;
  return u;
}, ky = typeof ArrayBuffer == "function", Oi = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Ua(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: Sy(e.substring(1), t)
  } : yn[n] ? e.length > 1 ? {
    type: yn[n],
    data: e.substring(1)
  } : {
    type: yn[n]
  } : Ur;
}, Sy = (e, t) => {
  if (ky) {
    const n = xy(e);
    return Ua(n, t);
  } else
    return { base64: !0, data: e };
}, Ua = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, qa = "", Ey = (e, t) => {
  const n = e.length, r = new Array(n);
  let i = 0;
  e.forEach((o, s) => {
    Ai(o, !1, (a) => {
      r[s] = a, ++i === n && t(r.join(qa));
    });
  });
}, vy = (e, t) => {
  const n = e.split(qa), r = [];
  for (let i = 0; i < n.length; i++) {
    const o = Oi(n[i], t);
    if (r.push(o), o.type === "error")
      break;
  }
  return r;
};
function Cy() {
  return new TransformStream({
    transform(e, t) {
      wy(e, (n) => {
        const r = n.length;
        let i;
        if (r < 126)
          i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, r);
        else if (r < 65536) {
          i = new Uint8Array(3);
          const o = new DataView(i.buffer);
          o.setUint8(0, 126), o.setUint16(1, r);
        } else {
          i = new Uint8Array(9);
          const o = new DataView(i.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (i[0] |= 128), t.enqueue(i), t.enqueue(n);
      });
    }
  });
}
let yr;
function pn(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function dn(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let i = 0; i < t; i++)
    n[i] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function Ay(e, t) {
  yr || (yr = new TextDecoder());
  const n = [];
  let r = 0, i = -1, o = !1;
  return new TransformStream({
    transform(s, a) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (pn(n) < 1)
            break;
          const l = dn(n, 1);
          o = (l[0] & 128) === 128, i = l[0] & 127, i < 126 ? r = 3 : i === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (pn(n) < 2)
            break;
          const l = dn(n, 2);
          i = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (pn(n) < 8)
            break;
          const l = dn(n, 8), u = new DataView(l.buffer, l.byteOffset, l.length), f = u.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Ur);
            break;
          }
          i = f * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (pn(n) < i)
            break;
          const l = dn(n, i);
          a.enqueue(Oi(o ? l : yr.decode(l), t)), r = 0;
        }
        if (i === 0 || i > e) {
          a.enqueue(Ur);
          break;
        }
      }
    }
  });
}
const Va = 4;
function pe(e) {
  if (e) return Oy(e);
}
function Oy(e) {
  for (var t in pe.prototype)
    e[t] = pe.prototype[t];
  return e;
}
pe.prototype.on = pe.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
pe.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
pe.prototype.off = pe.prototype.removeListener = pe.prototype.removeAllListeners = pe.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + e];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var r, i = 0; i < n.length; i++)
    if (r = n[i], r === t || r.fn === t) {
      n.splice(i, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + e], this;
};
pe.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r)
      n[r].apply(this, t);
  }
  return this;
};
pe.prototype.emitReserved = pe.prototype.emit;
pe.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
pe.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const jn = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), ze = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), _y = "arraybuffer";
function Ha(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const Ty = ze.setTimeout, Ry = ze.clearTimeout;
function Un(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = Ty.bind(ze), e.clearTimeoutFn = Ry.bind(ze)) : (e.setTimeoutFn = ze.setTimeout.bind(ze), e.clearTimeoutFn = ze.clearTimeout.bind(ze));
}
const Iy = 1.33;
function Ly(e) {
  return typeof e == "string" ? Ny(e) : Math.ceil((e.byteLength || e.size) * Iy);
}
function Ny(e) {
  let t = 0, n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function Ga() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Py(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function Dy(e) {
  let t = {}, n = e.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let o = n[r].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
class Fy extends Error {
  constructor(t, n, r) {
    super(t), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class _i extends pe {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, Un(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(t, n, r) {
    return super.emitReserved("error", new Fy(t, n, r)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(t) {
    const n = Oi(t, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
  createUri(t, n = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const n = Py(t);
    return n.length ? "?" + n : "";
  }
}
class zy extends _i {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", t();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || n();
      })), this.writable || (r++, this.once("drain", function() {
        --r || n();
      }));
    } else
      n();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(t) {
    const n = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    vy(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, Ey(t, (n) => {
      this.doWrite(n, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Ga()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let Wa = !1;
try {
  Wa = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const By = Wa;
function My() {
}
class jy extends zy {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || r !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, n) {
    const r = this.request({
      method: "POST",
      data: t
    });
    r.on("success", n), r.on("error", (i, o) => {
      this.onError("xhr post error", i, o);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (n, r) => {
      this.onError("xhr poll error", n, r);
    }), this.pollXhr = t;
  }
}
let At = class bn extends pe {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n, r) {
    super(), this.createRequest = t, Un(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const n = Ha(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(n);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let i in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(i) && r.setRequestHeader(i, this._opts.extraHeaders[i]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
        var i;
        r.readyState === 3 && ((i = this._opts.cookieJar) === null || i === void 0 || i.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this._onError(i);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = bn.requestsCount++, bn.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = My, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete bn.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
};
At.requestsCount = 0;
At.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Xo);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in ze ? "pagehide" : "unload";
    addEventListener(e, Xo, !1);
  }
}
function Xo() {
  for (let e in At.requests)
    At.requests.hasOwnProperty(e) && At.requests[e].abort();
}
const Uy = function() {
  const e = Ya({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class qy extends jy {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = Uy && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new At(Ya, this.uri(), t);
  }
}
function Ya(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || By))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new ze[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Xa = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Vy extends _i {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, r = Xa ? {} : Ha(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = n === t.length - 1;
      Ai(r, this.supportsBinary, (o) => {
        try {
          this.doWrite(r, o);
        } catch {
        }
        i && jn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Ga()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const br = ze.WebSocket || ze.MozWebSocket;
class Hy extends Vy {
  createSocket(t, n, r) {
    return Xa ? new br(t, n, r) : n ? new br(t, n) : new br(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class Gy extends _i {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((t) => {
      this.onError("webtransport error", t);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((t) => {
        const n = Ay(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(n).getReader(), i = Cy();
        i.readable.pipeTo(t.writable), this._writer = i.writable.getWriter();
        const o = () => {
          r.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), o());
          }).catch((a) => {
          });
        };
        o();
        const s = { type: "open" };
        this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`), this._writer.write(s).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = n === t.length - 1;
      this._writer.write(r).then(() => {
        i && jn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const Wy = {
  websocket: Hy,
  webtransport: Gy,
  polling: qy
}, Yy = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Xy = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function qr(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), r = e.indexOf("]");
  n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
  let i = Yy.exec(e || ""), o = {}, s = 14;
  for (; s--; )
    o[Xy[s]] = i[s] || "";
  return n != -1 && r != -1 && (o.source = t, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = Ky(o, o.path), o.queryKey = Qy(o, o.query), o;
}
function Ky(e, t) {
  const n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Qy(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, o) {
    i && (n[i] = o);
  }), n;
}
const Vr = typeof addEventListener == "function" && typeof removeEventListener == "function", wn = [];
Vr && addEventListener("offline", () => {
  wn.forEach((e) => e());
}, !1);
class ut extends pe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = _y, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const r = qr(t);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = qr(n.host).host);
    Un(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
      const i = r.prototype.name;
      this.transports.push(i), this._transportsByName[i] = r;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Dy(this.opts.query)), Vr && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, wn.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = Va, n.transport = t, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](r);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const t = this.opts.rememberUpgrade && ut.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(t);
    n.open(), this.setTransport(n);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (n) => this._onClose("transport close", n));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", ut.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const n = new Error("server error");
          n.code = t.data, this._onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this._pingInterval = t.pingInterval, this._pingTimeout = t.pingTimeout, this._maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + t, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, t), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const t = this._getWritablePackets();
      this.transport.send(t), this._prevBufferLen = t.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if (i && (n += Ly(i)), r > 0 && n > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const t = Date.now() > this._pingTimeoutTime;
    return t && (this._pingTimeoutTime = 0, jn(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), t;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(t, n, r, i) {
    if (typeof n == "function" && (i = n, n = void 0), typeof r == "function" && (i = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const o = {
      type: t,
      data: n,
      options: r
    };
    this.emitReserved("packetCreate", o), this.writeBuffer.push(o), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), t();
    }, r = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : t();
    }) : this.upgrading ? r() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (ut.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Vr && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = wn.indexOf(this._offlineEventListener);
        r !== -1 && wn.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
ut.protocol = Va;
class Jy extends ut {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(t) {
    let n = this.createTransport(t), r = !1;
    ut.priorWebsocketSuccess = !1;
    const i = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (c) => {
        if (!r)
          if (c.type === "pong" && c.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            ut.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (f(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const d = new Error("probe error");
            d.transport = n.name, this.emitReserved("upgradeError", d);
          }
      }));
    };
    function o() {
      r || (r = !0, f(), n.close(), n = null);
    }
    const s = (c) => {
      const d = new Error("probe error: " + c);
      d.transport = n.name, o(), this.emitReserved("upgradeError", d);
    };
    function a() {
      s("transport closed");
    }
    function l() {
      s("socket closed");
    }
    function u(c) {
      n && c.name !== n.name && o();
    }
    const f = () => {
      n.removeListener("open", i), n.removeListener("error", s), n.removeListener("close", a), this.off("close", l), this.off("upgrading", u);
    };
    n.once("open", i), n.once("error", s), n.once("close", a), this.once("close", l), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      r || n.open();
    }, 200) : n.open();
  }
  onHandshake(t) {
    this._upgrades = this._filterUpgrades(t.upgrades), super.onHandshake(t);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(t) {
    const n = [];
    for (let r = 0; r < t.length; r++)
      ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
}
let Zy = class extends Jy {
  constructor(t, n = {}) {
    const r = typeof t == "object" ? t : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((i) => Wy[i]).filter((i) => !!i)), super(t, r);
  }
};
function $y(e, t = "", n) {
  let r = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = qr(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + o + ":" + r.port + t, r.href = r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const eb = typeof ArrayBuffer == "function", tb = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Ka = Object.prototype.toString, nb = typeof Blob == "function" || typeof Blob < "u" && Ka.call(Blob) === "[object BlobConstructor]", rb = typeof File == "function" || typeof File < "u" && Ka.call(File) === "[object FileConstructor]";
function Ti(e) {
  return eb && (e instanceof ArrayBuffer || tb(e)) || nb && e instanceof Blob || rb && e instanceof File;
}
function xn(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++)
      if (xn(e[n]))
        return !0;
    return !1;
  }
  if (Ti(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return xn(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && xn(e[n]))
      return !0;
  return !1;
}
function ib(e) {
  const t = [], n = e.data, r = e;
  return r.data = Hr(n, t), r.attachments = t.length, { packet: r, buffers: t };
}
function Hr(e, t) {
  if (!e)
    return e;
  if (Ti(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      n[r] = Hr(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Hr(e[r], t));
    return n;
  }
  return e;
}
function ob(e, t) {
  return e.data = Gr(e.data, t), delete e.attachments, e;
}
function Gr(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = Gr(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Gr(e[n], t));
  return e;
}
const sb = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], ab = 5;
var X;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(X || (X = {}));
class lb {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === X.EVENT || t.type === X.ACK) && xn(t) ? this.encodeAsBinary({
      type: t.type === X.EVENT ? X.BINARY_EVENT : X.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let n = "" + t.type;
    return (t.type === X.BINARY_EVENT || t.type === X.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = ib(t), r = this.encodeAsString(n.packet), i = n.buffers;
    return i.unshift(r), i;
  }
}
function Ko(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Ri extends pe {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === X.BINARY_EVENT;
      r || n.type === X.BINARY_ACK ? (n.type = r ? X.EVENT : X.ACK, this.reconstructor = new ub(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Ti(t) || t.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let n = 0;
    const r = {
      type: Number(t.charAt(0))
    };
    if (X[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === X.BINARY_EVENT || r.type === X.BINARY_ACK) {
      const o = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; )
        ;
      const s = t.substring(o, n);
      if (s != Number(s) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (t.charAt(n + 1) === "/") {
      const o = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); )
        ;
      r.nsp = t.substring(o, n);
    } else
      r.nsp = "/";
    const i = t.charAt(n + 1);
    if (i !== "" && Number(i) == i) {
      const o = n + 1;
      for (; ++n; ) {
        const s = t.charAt(n);
        if (s == null || Number(s) != s) {
          --n;
          break;
        }
        if (n === t.length)
          break;
      }
      r.id = Number(t.substring(o, n + 1));
    }
    if (t.charAt(++n)) {
      const o = this.tryParse(t.substr(n));
      if (Ri.isPayloadValid(r.type, o))
        r.data = o;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case X.CONNECT:
        return Ko(n);
      case X.DISCONNECT:
        return n === void 0;
      case X.CONNECT_ERROR:
        return typeof n == "string" || Ko(n);
      case X.EVENT:
      case X.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && sb.indexOf(n[0]) === -1);
      case X.ACK:
      case X.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class ub {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const n = ob(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const cb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Ri,
  Encoder: lb,
  get PacketType() {
    return X;
  },
  protocol: ab
}, Symbol.toStringTag, { value: "Module" }));
function Ve(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const fb = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Qa extends pe {
  /**
   * `Socket` constructor.
   */
  constructor(t, n, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const t = this.io;
    this.subs = [
      Ve(t, "open", this.onopen.bind(this)),
      Ve(t, "packet", this.onpacket.bind(this)),
      Ve(t, "error", this.onerror.bind(this)),
      Ve(t, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(t, ...n) {
    var r, i, o;
    if (fb.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const s = {
      type: X.EVENT,
      data: n
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const f = this.ids++, c = n.pop();
      this._registerAckCallback(f, c), s.id = f;
    }
    const a = (i = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || i === void 0 ? void 0 : i.writable, l = this.connected && !(!((o = this.io.engine) === null || o === void 0) && o._hasPingExpired());
    return this.flags.volatile && !a || (l ? (this.notifyOutgoingListeners(s), this.packet(s)) : this.sendBuffer.push(s)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, n) {
    var r;
    const i = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = n;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, i), s = (...a) => {
      this.io.clearTimeoutFn(o), n.apply(this, a);
    };
    s.withError = !0, this.acks[t] = s;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(t, ...n) {
    return new Promise((r, i) => {
      const o = (s, a) => s ? i(s) : r(a);
      o.withError = !0, n.push(o), this.emit(t, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((i, ...o) => r !== this._queue[0] ? void 0 : (i !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(i)) : (this._queue.shift(), n && n(null, ...o)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: X.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case X.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case X.EVENT:
        case X.BINARY_EVENT:
          this.onevent(t);
          break;
        case X.ACK:
        case X.BINARY_ACK:
          this.onack(t);
          break;
        case X.DISCONNECT:
          this.ondisconnect();
          break;
        case X.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          r.data = t.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n)
        r.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const n = this;
    let r = !1;
    return function(...i) {
      r || (r = !0, n.packet({
        type: X.ACK,
        id: t,
        data: i
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, n) {
    this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: X.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(t) {
    return this.flags.compress = t, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(t) {
    return this.flags.timeout = t, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n)
        r.apply(this, t.data);
    }
  }
}
function Lt(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Lt.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
Lt.prototype.reset = function() {
  this.attempts = 0;
};
Lt.prototype.setMin = function(e) {
  this.ms = e;
};
Lt.prototype.setMax = function(e) {
  this.max = e;
};
Lt.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Wr extends pe {
  constructor(t, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Un(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Lt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const i = n.parser || cb;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Zy(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = Ve(n, "open", function() {
      r.onopen(), t && t();
    }), o = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, s = Ve(n, "error", o);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        i(), o(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
      });
    }
    return this.subs.push(i), this.subs.push(s), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      Ve(t, "ping", this.onping.bind(this)),
      Ve(t, "data", this.ondata.bind(this)),
      Ve(t, "error", this.onerror.bind(this)),
      Ve(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      Ve(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    jn(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, n) {
    let r = this.nsps[t];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Qa(this, t, n), this.nsps[t] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++)
      this.engine.write(n[r], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(t, n) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((i) => {
          i ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", i)) : t.onreconnect();
        }));
      }, n);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const qt = {};
function kn(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = $y(e, t.path || "/socket.io"), r = n.source, i = n.id, o = n.path, s = qt[i] && o in qt[i].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let l;
  return a ? l = new Wr(r, t) : (qt[i] || (qt[i] = new Wr(r, t)), l = qt[i]), n.query && !t.query && (t.query = n.queryKey), l.socket(n.path, t);
}
Object.assign(kn, {
  Manager: Wr,
  Socket: Qa,
  io: kn,
  connect: kn
});
function hb(e, t, n = []) {
  const [r, i] = vn(null), [o, s] = vn("disconnected"), a = (w) => {
    s(w);
  }, l = () => {
    r && (r.disconnect(), i(null), a("disconnected"));
  }, u = we(() => a("connected"), [a]), f = we(() => a("disconnected"), [a]), c = we(() => a("error"), [a]), d = we(() => a("reconnected"), [a]), h = we(() => a("reconnecting"), [a]), p = we(() => a("error"), [a]), g = we(() => a("error"), [a]);
  return He(() => {
    if (!e) return;
    const w = kn(e, t);
    return i(w), () => {
      w.disconnect(), i(null);
    };
  }, [e]), He(() => {
    if (r)
      return r.on("connect", u), r.on("disconnect", f), r.on("connect_error", c), r.on("reconnect", d), r.on("reconnecting", h), r.on("reconnect_error", p), r.on("reconnect_failed", g), () => {
        r.off("connect", u), r.off("disconnect", f), r.off("connect_error", c), r.off("reconnect", d), r.off("reconnecting", h), r.off("reconnect_error", p), r.off("reconnect_failed", g);
      };
  }, [
    u,
    c,
    f,
    d,
    p,
    g,
    h,
    r
  ]), {
    socket: r,
    socketState: o,
    disconnect: l
  };
}
function pb(e, t) {
  switch (e) {
    case "connected":
      return t("connected", "🟢");
    case "connecting":
      return t("connecting", "🟡");
    case "reconnecting":
      return t("reconnecting", "🟡");
    case "reconnected":
      return t("reconnected", "🟢");
    case "disconnecting":
      return t("disconnecting", "🔴");
    case "disconnected":
      return t("disconnected", "🔴");
    case "error":
      return t("error", "❌");
  }
}
function Ja(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: db } = Object.prototype, { getPrototypeOf: Ii } = Object, qn = /* @__PURE__ */ ((e) => (t) => {
  const n = db.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), We = (e) => (e = e.toLowerCase(), (t) => qn(t) === e), Vn = (e) => (t) => typeof t === e, { isArray: Nt } = Array, Qt = Vn("undefined");
function mb(e) {
  return e !== null && !Qt(e) && e.constructor !== null && !Qt(e.constructor) && Le(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Za = We("ArrayBuffer");
function gb(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Za(e.buffer), t;
}
const yb = Vn("string"), Le = Vn("function"), $a = Vn("number"), Hn = (e) => e !== null && typeof e == "object", bb = (e) => e === !0 || e === !1, Sn = (e) => {
  if (qn(e) !== "object")
    return !1;
  const t = Ii(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, wb = We("Date"), xb = We("File"), kb = We("Blob"), Sb = We("FileList"), Eb = (e) => Hn(e) && Le(e.pipe), vb = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Le(e.append) && ((t = qn(e)) === "formdata" || // detect form-data instance
  t === "object" && Le(e.toString) && e.toString() === "[object FormData]"));
}, Cb = We("URLSearchParams"), [Ab, Ob, _b, Tb] = ["ReadableStream", "Request", "Response", "Headers"].map(We), Rb = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function tn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), Nt(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let a;
    for (r = 0; r < s; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function el(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const gt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, tl = (e) => !Qt(e) && e !== gt;
function Yr() {
  const { caseless: e } = tl(this) && this || {}, t = {}, n = (r, i) => {
    const o = e && el(t, i) || i;
    Sn(t[o]) && Sn(r) ? t[o] = Yr(t[o], r) : Sn(r) ? t[o] = Yr({}, r) : Nt(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && tn(arguments[r], n);
  return t;
}
const Ib = (e, t, n, { allOwnKeys: r } = {}) => (tn(t, (i, o) => {
  n && Le(i) ? e[o] = Ja(i, n) : e[o] = i;
}, { allOwnKeys: r }), e), Lb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Nb = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Pb = (e, t, n, r) => {
  let i, o, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      s = i[o], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && Ii(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Db = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Fb = (e) => {
  if (!e) return null;
  if (Nt(e)) return e;
  let t = e.length;
  if (!$a(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, zb = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ii(Uint8Array)), Bb = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, Mb = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, jb = We("HTMLFormElement"), Ub = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), Qo = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), qb = We("RegExp"), nl = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  tn(n, (i, o) => {
    let s;
    (s = t(i, o, e)) !== !1 && (r[o] = s || i);
  }), Object.defineProperties(e, r);
}, Vb = (e) => {
  nl(e, (t, n) => {
    if (Le(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Le(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Hb = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return Nt(e) ? r(e) : r(String(e).split(t)), n;
}, Gb = () => {
}, Wb = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, wr = "abcdefghijklmnopqrstuvwxyz", Jo = "0123456789", rl = {
  DIGIT: Jo,
  ALPHA: wr,
  ALPHA_DIGIT: wr + wr.toUpperCase() + Jo
}, Yb = (e = 16, t = rl.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Xb(e) {
  return !!(e && Le(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Kb = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (Hn(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const o = Nt(r) ? [] : {};
        return tn(r, (s, a) => {
          const l = n(s, i + 1);
          !Qt(l) && (o[a] = l);
        }), t[i] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Qb = We("AsyncFunction"), Jb = (e) => e && (Hn(e) || Le(e)) && Le(e.then) && Le(e.catch), il = ((e, t) => e ? setImmediate : t ? ((n, r) => (gt.addEventListener("message", ({ source: i, data: o }) => {
  i === gt && o === n && r.length && r.shift()();
}, !1), (i) => {
  r.push(i), gt.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Le(gt.postMessage)
), Zb = typeof queueMicrotask < "u" ? queueMicrotask.bind(gt) : typeof process < "u" && process.nextTick || il, E = {
  isArray: Nt,
  isArrayBuffer: Za,
  isBuffer: mb,
  isFormData: vb,
  isArrayBufferView: gb,
  isString: yb,
  isNumber: $a,
  isBoolean: bb,
  isObject: Hn,
  isPlainObject: Sn,
  isReadableStream: Ab,
  isRequest: Ob,
  isResponse: _b,
  isHeaders: Tb,
  isUndefined: Qt,
  isDate: wb,
  isFile: xb,
  isBlob: kb,
  isRegExp: qb,
  isFunction: Le,
  isStream: Eb,
  isURLSearchParams: Cb,
  isTypedArray: zb,
  isFileList: Sb,
  forEach: tn,
  merge: Yr,
  extend: Ib,
  trim: Rb,
  stripBOM: Lb,
  inherits: Nb,
  toFlatObject: Pb,
  kindOf: qn,
  kindOfTest: We,
  endsWith: Db,
  toArray: Fb,
  forEachEntry: Bb,
  matchAll: Mb,
  isHTMLForm: jb,
  hasOwnProperty: Qo,
  hasOwnProp: Qo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: nl,
  freezeMethods: Vb,
  toObjectSet: Hb,
  toCamelCase: Ub,
  noop: Gb,
  toFiniteNumber: Wb,
  findKey: el,
  global: gt,
  isContextDefined: tl,
  ALPHABET: rl,
  generateString: Yb,
  isSpecCompliantForm: Xb,
  toJSONObject: Kb,
  isAsyncFn: Qb,
  isThenable: Jb,
  setImmediate: il,
  asap: Zb
};
function j(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status ? i.status : null);
}
E.inherits(j, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ol = j.prototype, sl = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  sl[e] = { value: e };
});
Object.defineProperties(j, sl);
Object.defineProperty(ol, "isAxiosError", { value: !0 });
j.from = (e, t, n, r, i, o) => {
  const s = Object.create(ol);
  return E.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), j.call(s, e.message, t, n, r, i), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const $b = null;
function Xr(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function al(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Zo(e, t, n) {
  return e ? e.concat(t).map(function(i, o) {
    return i = al(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function ew(e) {
  return E.isArray(e) && !e.some(Xr);
}
const tw = E.toFlatObject(E, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Gn(e, t, n) {
  if (!E.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = E.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, w) {
    return !E.isUndefined(w[g]);
  });
  const r = n.metaTokens, i = n.visitor || f, o = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(t);
  if (!E.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (E.isDate(p))
      return p.toISOString();
    if (!l && E.isBlob(p))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(p) || E.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, g, w) {
    let b = p;
    if (p && !w && typeof p == "object") {
      if (E.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), p = JSON.stringify(p);
      else if (E.isArray(p) && ew(p) || (E.isFileList(p) || E.endsWith(g, "[]")) && (b = E.toArray(p)))
        return g = al(g), b.forEach(function(x, O) {
          !(E.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Zo([g], O, o) : s === null ? g : g + "[]",
            u(x)
          );
        }), !1;
    }
    return Xr(p) ? !0 : (t.append(Zo(w, g, o), u(p)), !1);
  }
  const c = [], d = Object.assign(tw, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Xr
  });
  function h(p, g) {
    if (!E.isUndefined(p)) {
      if (c.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      c.push(p), E.forEach(p, function(b, v) {
        (!(E.isUndefined(b) || b === null) && i.call(
          t,
          b,
          E.isString(v) ? v.trim() : v,
          g,
          d
        )) === !0 && h(b, g ? g.concat(v) : [v]);
      }), c.pop();
    }
  }
  if (!E.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function $o(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Li(e, t) {
  this._pairs = [], e && Gn(e, this, t);
}
const ll = Li.prototype;
ll.append = function(t, n) {
  this._pairs.push([t, n]);
};
ll.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, $o);
  } : $o;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function nw(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ul(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || nw, i = n && n.serialize;
  let o;
  if (i ? o = i(t, n) : o = E.isURLSearchParams(t) ? t.toString() : new Li(t, n).toString(r), o) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class es {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    E.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const cl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rw = typeof URLSearchParams < "u" ? URLSearchParams : Li, iw = typeof FormData < "u" ? FormData : null, ow = typeof Blob < "u" ? Blob : null, sw = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rw,
    FormData: iw,
    Blob: ow
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ni = typeof window < "u" && typeof document < "u", Kr = typeof navigator == "object" && navigator || void 0, aw = Ni && (!Kr || ["ReactNative", "NativeScript", "NS"].indexOf(Kr.product) < 0), lw = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", uw = Ni && window.location.href || "http://localhost", cw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ni,
  hasStandardBrowserEnv: aw,
  hasStandardBrowserWebWorkerEnv: lw,
  navigator: Kr,
  origin: uw
}, Symbol.toStringTag, { value: "Module" })), Ae = {
  ...cw,
  ...sw
};
function fw(e, t) {
  return Gn(e, new Ae.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, o) {
      return Ae.isNode && E.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function hw(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function pw(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function fl(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), l = o >= n.length;
    return s = !s && E.isArray(i) ? i.length : s, l ? (E.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !a) : ((!i[s] || !E.isObject(i[s])) && (i[s] = []), t(n, r, i[s], o) && E.isArray(i[s]) && (i[s] = pw(i[s])), !a);
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return E.forEachEntry(e, (r, i) => {
      t(hw(r), i, n, 0);
    }), n;
  }
  return null;
}
function dw(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const nn = {
  transitional: cl,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = E.isObject(t);
    if (o && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t))
      return i ? JSON.stringify(fl(t)) : t;
    if (E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t) || E.isReadableStream(t))
      return t;
    if (E.isArrayBufferView(t))
      return t.buffer;
    if (E.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return fw(t, this.formSerializer).toString();
      if ((a = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Gn(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), dw(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || nn.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (E.isResponse(t) || E.isReadableStream(t))
      return t;
    if (t && E.isString(t) && (r && !this.responseType || i)) {
      const s = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? j.from(a, j.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ae.classes.FormData,
    Blob: Ae.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  nn.headers[e] = {};
});
const mw = E.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), gw = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), n = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!n || t[n] && mw[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ts = Symbol("internals");
function Vt(e) {
  return e && String(e).trim().toLowerCase();
}
function En(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(En) : String(e);
}
function yw(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const bw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function xr(e, t, n, r, i) {
  if (E.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!E.isString(t)) {
    if (E.isString(r))
      return t.indexOf(r) !== -1;
    if (E.isRegExp(r))
      return r.test(t);
  }
}
function ww(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function xw(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0
    });
  });
}
class Oe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(a, l, u) {
      const f = Vt(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const c = E.findKey(i, f);
      (!c || i[c] === void 0 || u === !0 || u === void 0 && i[c] !== !1) && (i[c || l] = En(a));
    }
    const s = (a, l) => E.forEach(a, (u, f) => o(u, f, l));
    if (E.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (E.isString(t) && (t = t.trim()) && !bw(t))
      s(gw(t), n);
    else if (E.isHeaders(t))
      for (const [a, l] of t.entries())
        o(l, a, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Vt(t), t) {
      const r = E.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return yw(i);
        if (E.isFunction(n))
          return n.call(this, i, r);
        if (E.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Vt(t), t) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || xr(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (s = Vt(s), s) {
        const a = E.findKey(r, s);
        a && (!n || xr(r, r[a], a, n)) && (delete r[a], i = !0);
      }
    }
    return E.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || xr(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return E.forEach(this, (i, o) => {
      const s = E.findKey(r, o);
      if (s) {
        n[s] = En(i), delete n[o];
        return;
      }
      const a = t ? ww(o) : String(o).trim();
      a !== o && delete n[o], n[a] = En(i), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && E.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[ts] = this[ts] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(s) {
      const a = Vt(s);
      r[a] || (xw(i, s), r[a] = !0);
    }
    return E.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Oe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Oe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
E.freezeMethods(Oe);
function kr(e, t) {
  const n = this || nn, r = t || n, i = Oe.from(r.headers);
  let o = r.data;
  return E.forEach(e, function(a) {
    o = a.call(n, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function hl(e) {
  return !!(e && e.__CANCEL__);
}
function Pt(e, t, n) {
  j.call(this, e ?? "canceled", j.ERR_CANCELED, t, n), this.name = "CanceledError";
}
E.inherits(Pt, j, {
  __CANCEL__: !0
});
function pl(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new j(
    "Request failed with status code " + n.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function kw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Sw(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), f = r[o];
    s || (s = u), n[i] = l, r[i] = u;
    let c = o, d = 0;
    for (; c !== i; )
      d += n[c++], c = c % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), u - s < t)
      return;
    const h = f && u - f;
    return h ? Math.round(d * 1e3 / h) : void 0;
  };
}
function Ew(e, t) {
  let n = 0, r = 1e3 / t, i, o;
  const s = (u, f = Date.now()) => {
    n = f, i = null, o && (clearTimeout(o), o = null), e.apply(null, u);
  };
  return [(...u) => {
    const f = Date.now(), c = f - n;
    c >= r ? s(u, f) : (i = u, o || (o = setTimeout(() => {
      o = null, s(i);
    }, r - c)));
  }, () => i && s(i)];
}
const In = (e, t, n = 3) => {
  let r = 0;
  const i = Sw(50, 250);
  return Ew((o) => {
    const s = o.loaded, a = o.lengthComputable ? o.total : void 0, l = s - r, u = i(l), f = s <= a;
    r = s;
    const c = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && a && f ? (a - s) / u : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(c);
  }, n);
}, ns = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, rs = (e) => (...t) => E.asap(() => e(...t)), vw = Ae.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = Ae.navigator && /(msie|trident)/i.test(Ae.navigator.userAgent), n = document.createElement("a");
    let r;
    function i(o) {
      let s = o;
      return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = i(window.location.href), function(s) {
      const a = E.isString(s) ? i(s) : s;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Cw = Ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, o) {
      const s = [e + "=" + encodeURIComponent(t)];
      E.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), E.isString(r) && s.push("path=" + r), E.isString(i) && s.push("domain=" + i), o === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Aw(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ow(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function dl(e, t) {
  return e && !Aw(t) ? Ow(e, t) : t;
}
const is = (e) => e instanceof Oe ? { ...e } : e;
function wt(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, c) {
    return E.isPlainObject(u) && E.isPlainObject(f) ? E.merge.call({ caseless: c }, u, f) : E.isPlainObject(f) ? E.merge({}, f) : E.isArray(f) ? f.slice() : f;
  }
  function i(u, f, c) {
    if (E.isUndefined(f)) {
      if (!E.isUndefined(u))
        return r(void 0, u, c);
    } else return r(u, f, c);
  }
  function o(u, f) {
    if (!E.isUndefined(f))
      return r(void 0, f);
  }
  function s(u, f) {
    if (E.isUndefined(f)) {
      if (!E.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, f);
  }
  function a(u, f, c) {
    if (c in t)
      return r(u, f);
    if (c in e)
      return r(void 0, u);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, f) => i(is(u), is(f), !0)
  };
  return E.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const c = l[f] || i, d = c(e[f], t[f], f);
    E.isUndefined(d) && c !== a || (n[f] = d);
  }), n;
}
const ml = (e) => {
  const t = wt({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: a } = t;
  t.headers = s = Oe.from(s), t.url = ul(dl(t.baseURL, t.url), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (E.isFormData(n)) {
    if (Ae.hasStandardBrowserEnv || Ae.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((l = s.getContentType()) !== !1) {
      const [u, ...f] = l ? l.split(";").map((c) => c.trim()).filter(Boolean) : [];
      s.setContentType([u || "multipart/form-data", ...f].join("; "));
    }
  }
  if (Ae.hasStandardBrowserEnv && (r && E.isFunction(r) && (r = r(t)), r || r !== !1 && vw(t.url))) {
    const u = i && o && Cw.read(o);
    u && s.set(i, u);
  }
  return t;
}, _w = typeof XMLHttpRequest < "u", Tw = _w && function(e) {
  return new Promise(function(n, r) {
    const i = ml(e);
    let o = i.data;
    const s = Oe.from(i.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = i, f, c, d, h, p;
    function g() {
      h && h(), p && p(), i.cancelToken && i.cancelToken.unsubscribe(f), i.signal && i.signal.removeEventListener("abort", f);
    }
    let w = new XMLHttpRequest();
    w.open(i.method.toUpperCase(), i.url, !0), w.timeout = i.timeout;
    function b() {
      if (!w)
        return;
      const x = Oe.from(
        "getAllResponseHeaders" in w && w.getAllResponseHeaders()
      ), _ = {
        data: !a || a === "text" || a === "json" ? w.responseText : w.response,
        status: w.status,
        statusText: w.statusText,
        headers: x,
        config: e,
        request: w
      };
      pl(function(L) {
        n(L), g();
      }, function(L) {
        r(L), g();
      }, _), w = null;
    }
    "onloadend" in w ? w.onloadend = b : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, w.onabort = function() {
      w && (r(new j("Request aborted", j.ECONNABORTED, e, w)), w = null);
    }, w.onerror = function() {
      r(new j("Network Error", j.ERR_NETWORK, e, w)), w = null;
    }, w.ontimeout = function() {
      let O = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const _ = i.transitional || cl;
      i.timeoutErrorMessage && (O = i.timeoutErrorMessage), r(new j(
        O,
        _.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        e,
        w
      )), w = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in w && E.forEach(s.toJSON(), function(O, _) {
      w.setRequestHeader(_, O);
    }), E.isUndefined(i.withCredentials) || (w.withCredentials = !!i.withCredentials), a && a !== "json" && (w.responseType = i.responseType), u && ([d, p] = In(u, !0), w.addEventListener("progress", d)), l && w.upload && ([c, h] = In(l), w.upload.addEventListener("progress", c), w.upload.addEventListener("loadend", h)), (i.cancelToken || i.signal) && (f = (x) => {
      w && (r(!x || x.type ? new Pt(null, e, w) : x), w.abort(), w = null);
    }, i.cancelToken && i.cancelToken.subscribe(f), i.signal && (i.signal.aborted ? f() : i.signal.addEventListener("abort", f)));
    const v = kw(i.url);
    if (v && Ae.protocols.indexOf(v) === -1) {
      r(new j("Unsupported protocol " + v + ":", j.ERR_BAD_REQUEST, e));
      return;
    }
    w.send(o || null);
  });
}, Rw = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), i;
    const o = function(u) {
      if (!i) {
        i = !0, a();
        const f = u instanceof Error ? u : this.reason;
        r.abort(f instanceof j ? f : new Pt(f instanceof Error ? f.message : f));
      }
    };
    let s = t && setTimeout(() => {
      s = null, o(new j(`timeout ${t} of ms exceeded`, j.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: l } = r;
    return l.unsubscribe = () => E.asap(a), l;
  }
}, Iw = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + t, yield e.slice(r, i), r = i;
}, Lw = async function* (e, t) {
  for await (const n of Nw(e))
    yield* Iw(n, t);
}, Nw = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, os = (e, t, n, r) => {
  const i = Lw(e, t);
  let o = 0, s, a = (l) => {
    s || (s = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: f } = await i.next();
        if (u) {
          a(), l.close();
          return;
        }
        let c = f.byteLength;
        if (n) {
          let d = o += c;
          n(d);
        }
        l.enqueue(new Uint8Array(f));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(l) {
      return a(l), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Wn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", gl = Wn && typeof ReadableStream == "function", Pw = Wn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), yl = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Dw = gl && yl(() => {
  let e = !1;
  const t = new Request(Ae.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), ss = 64 * 1024, Qr = gl && yl(() => E.isReadableStream(new Response("").body)), Ln = {
  stream: Qr && ((e) => e.body)
};
Wn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ln[t] && (Ln[t] = E.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new j(`Response type '${t}' is not supported`, j.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Fw = async (e) => {
  if (e == null)
    return 0;
  if (E.isBlob(e))
    return e.size;
  if (E.isSpecCompliantForm(e))
    return (await new Request(Ae.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (E.isArrayBufferView(e) || E.isArrayBuffer(e))
    return e.byteLength;
  if (E.isURLSearchParams(e) && (e = e + ""), E.isString(e))
    return (await Pw(e)).byteLength;
}, zw = async (e, t) => {
  const n = E.toFiniteNumber(e.getContentLength());
  return n ?? Fw(t);
}, Bw = Wn && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: i,
    cancelToken: o,
    timeout: s,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: u,
    headers: f,
    withCredentials: c = "same-origin",
    fetchOptions: d
  } = ml(e);
  u = u ? (u + "").toLowerCase() : "text";
  let h = Rw([i, o && o.toAbortSignal()], s), p;
  const g = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let w;
  try {
    if (l && Dw && n !== "get" && n !== "head" && (w = await zw(f, r)) !== 0) {
      let _ = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), k;
      if (E.isFormData(r) && (k = _.headers.get("content-type")) && f.setContentType(k), _.body) {
        const [L, P] = ns(
          w,
          In(rs(l))
        );
        r = os(_.body, ss, L, P);
      }
    }
    E.isString(c) || (c = c ? "include" : "omit");
    const b = "credentials" in Request.prototype;
    p = new Request(t, {
      ...d,
      signal: h,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: b ? c : void 0
    });
    let v = await fetch(p);
    const x = Qr && (u === "stream" || u === "response");
    if (Qr && (a || x && g)) {
      const _ = {};
      ["status", "statusText", "headers"].forEach((D) => {
        _[D] = v[D];
      });
      const k = E.toFiniteNumber(v.headers.get("content-length")), [L, P] = a && ns(
        k,
        In(rs(a), !0)
      ) || [];
      v = new Response(
        os(v.body, ss, L, () => {
          P && P(), g && g();
        }),
        _
      );
    }
    u = u || "text";
    let O = await Ln[E.findKey(Ln, u) || "text"](v, e);
    return !x && g && g(), await new Promise((_, k) => {
      pl(_, k, {
        data: O,
        headers: Oe.from(v.headers),
        status: v.status,
        statusText: v.statusText,
        config: e,
        request: p
      });
    });
  } catch (b) {
    throw g && g(), b && b.name === "TypeError" && /fetch/i.test(b.message) ? Object.assign(
      new j("Network Error", j.ERR_NETWORK, e, p),
      {
        cause: b.cause || b
      }
    ) : j.from(b, b && b.code, e, p);
  }
}), Jr = {
  http: $b,
  xhr: Tw,
  fetch: Bw
};
E.forEach(Jr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const as = (e) => `- ${e}`, Mw = (e) => E.isFunction(e) || e === null || e === !1, bl = {
  getAdapter: (e) => {
    e = E.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const i = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let s;
      if (r = n, !Mw(n) && (r = Jr[(s = String(n)).toLowerCase()], r === void 0))
        throw new j(`Unknown adapter '${s}'`);
      if (r)
        break;
      i[s || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(i).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? o.length > 1 ? `since :
` + o.map(as).join(`
`) : " " + as(o[0]) : "as no adapter specified";
      throw new j(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Jr
};
function Sr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Pt(null, e);
}
function ls(e) {
  return Sr(e), e.headers = Oe.from(e.headers), e.data = kr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), bl.getAdapter(e.adapter || nn.adapter)(e).then(function(r) {
    return Sr(e), r.data = kr.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Oe.from(r.headers), r;
  }, function(r) {
    return hl(r) || (Sr(e), r && r.response && (r.response.data = kr.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Oe.from(r.response.headers))), Promise.reject(r);
  });
}
const wl = "1.7.7", Pi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Pi[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const us = {};
Pi.transitional = function(t, n, r) {
  function i(o, s) {
    return "[Axios v" + wl + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, a) => {
    if (t === !1)
      throw new j(
        i(s, " has been removed" + (n ? " in " + n : "")),
        j.ERR_DEPRECATED
      );
    return n && !us[s] && (us[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, s, a) : !0;
  };
};
function jw(e, t, n) {
  if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], s = t[o];
    if (s) {
      const a = e[o], l = a === void 0 || s(a, o, e);
      if (l !== !0)
        throw new j("option " + o + " must be " + l, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new j("Unknown option " + o, j.ERR_BAD_OPTION);
  }
}
const Zr = {
  assertOptions: jw,
  validators: Pi
}, at = Zr.validators;
class yt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new es(),
      response: new es()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = wt(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && Zr.assertOptions(r, {
      silentJSONParsing: at.transitional(at.boolean),
      forcedJSONParsing: at.transitional(at.boolean),
      clarifyTimeoutError: at.transitional(at.boolean)
    }, !1), i != null && (E.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : Zr.assertOptions(i, {
      encode: at.function,
      serialize: at.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = o && E.merge(
      o.common,
      o[n.method]
    );
    o && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = Oe.concat(s, o);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let f, c = 0, d;
    if (!l) {
      const p = [ls.bind(this), void 0];
      for (p.unshift.apply(p, a), p.push.apply(p, u), d = p.length, f = Promise.resolve(n); c < d; )
        f = f.then(p[c++], p[c++]);
      return f;
    }
    d = a.length;
    let h = n;
    for (c = 0; c < d; ) {
      const p = a[c++], g = a[c++];
      try {
        h = p(h);
      } catch (w) {
        g.call(this, w);
        break;
      }
    }
    try {
      f = ls.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (c = 0, d = u.length; c < d; )
      f = f.then(u[c++], u[c++]);
    return f;
  }
  getUri(t) {
    t = wt(this.defaults, t);
    const n = dl(t.baseURL, t.url);
    return ul(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function(t) {
  yt.prototype[t] = function(n, r) {
    return this.request(wt(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, s, a) {
      return this.request(wt(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  yt.prototype[t] = n(), yt.prototype[t + "Form"] = n(!0);
});
class Di {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const s = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(i);
      return s.cancel = function() {
        r.unsubscribe(o);
      }, s;
    }, t(function(o, s, a) {
      r.reason || (r.reason = new Pt(o, s, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Di(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
function Uw(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function qw(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const $r = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries($r).forEach(([e, t]) => {
  $r[t] = e;
});
function xl(e) {
  const t = new yt(e), n = Ja(yt.prototype.request, t);
  return E.extend(n, yt.prototype, t, { allOwnKeys: !0 }), E.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return xl(wt(e, i));
  }, n;
}
const de = xl(nn);
de.Axios = yt;
de.CanceledError = Pt;
de.CancelToken = Di;
de.isCancel = hl;
de.VERSION = wl;
de.toFormData = Gn;
de.AxiosError = j;
de.Cancel = de.CanceledError;
de.all = function(t) {
  return Promise.all(t);
};
de.spread = Uw;
de.isAxiosError = qw;
de.mergeConfig = wt;
de.AxiosHeaders = Oe;
de.formToJSON = (e) => fl(E.isHTMLForm(e) ? new FormData(e) : e);
de.getAdapter = bl.getAdapter;
de.HttpStatusCode = $r;
de.default = de;
function Vw({
  apiUrl: e,
  botToken: t
}) {
  return de.create({
    baseURL: e,
    headers: {
      "X-Bot-Token": t
    }
  });
}
function Hw({ apiUrl: e, botToken: t }) {
  return Jt(() => Vw({
    botToken: t,
    apiUrl: e
  }), [t, e]);
}
const Gw = typeof window > "u", cs = {
  getItem: () => null,
  setItem: () => {
  },
  removeItem: () => {
  }
};
function Ww(e) {
  return Gw ? cs : e === "local" ? localStorage : e === "session" ? sessionStorage : cs;
}
function Er(e, t, n = "session") {
  const r = Jt(() => Ww(n), [n]), [i, o] = vn(() => {
    const l = r.getItem(e);
    if (l !== null)
      try {
        return JSON.parse(l);
      } catch (u) {
        console.error(`Error parsing stored value for key '${e}':`, u);
      }
    return typeof t == "function" ? t() : t ?? null;
  }), s = we(
    (l) => {
      if (o(l), l === null)
        r.removeItem(e);
      else
        try {
          r.setItem(e, JSON.stringify(l));
        } catch (u) {
          console.error(
            `Error saving state to storage for key '${e}':`,
            u
          );
        }
    },
    [e, r]
  ), a = we(() => {
    o(null), r.removeItem(e);
  }, [e, r]);
  return He(() => {
    const l = (u) => {
      u.key === e && u.newValue !== JSON.stringify(i) && o(u.newValue ? JSON.parse(u.newValue) : null);
    };
    return window.addEventListener("storage", l), () => {
      window.removeEventListener("storage", l);
    };
  }, [e, i]), [i, s, a];
}
function Yw(e, t) {
  return Tl(e, (n) => {
    const r = () => {
      n.lastUpdated = Date.now();
    };
    switch (t.type) {
      case "INIT": {
        r();
        break;
      }
      case "ADD_RESPONSE_MESSAGE": {
        n.messages.push(t.payload), r();
        break;
      }
      case "APPEND_USER_MESSAGE": {
        n.messages.push(t.payload), r();
        break;
      }
      case "RESET": {
        n.messages = [], n.lastUpdated = null, n.keyboard = null;
        break;
      }
      case "PREPEND_HISTORY": {
        const i = t.payload.map((o) => o.id);
        n.messages = n.messages.filter(
          (o) => !i.includes(o.id)
        ), n.messages = [...t.payload, ...n.messages], r();
        break;
      }
      case "SET_SERVER_ID": {
        const { clientMessageId: i, ServerMessageId: o } = t.payload, s = n.messages.find(
          (a) => a.id === i
        );
        s && (s.serverId = o);
        break;
      }
      case "SET_KEYBOARD": {
        n.keyboard = t.payload;
        break;
      }
    }
  });
}
const Xw = (e, t) => `[OPEN_SESSION_${e}]_${t || "session"}`;
function Kw({
  apiUrl: e,
  socketUrl: t,
  botToken: n,
  defaultHookSettings: r,
  onSessionDestroy: i,
  headers: o,
  queryParams: s,
  pathParams: a,
  userData: l,
  language: u
}) {
  const f = Bl(), [c, d] = Er(
    "[SETTINGS]:[OPEN]",
    {
      persistSession: (r == null ? void 0 : r.persistSession) ?? !1,
      useSoundEffects: (r == null ? void 0 : r.useSoundEffects) ?? !1
    },
    "local"
  ), h = Hw({
    apiUrl: e,
    botToken: n
  }), [p, g] = Er(
    Xw(n, l != null && l.external_id ? l == null ? void 0 : l.external_id : l == null ? void 0 : l.email),
    void 0,
    c != null && c.persistSession ? "local" : "memory"
  ), [w, b] = Er(
    "hookState",
    "idle"
  );
  async function v(m) {
    let V = await xg(h, m);
    return V.data && g(V.data), V.data;
  }
  He(() => {
    p != null && p.id && v(p.id);
  }, []);
  const { socket: x, socketState: O } = hb(t, {
    autoConnect: !0,
    transports: ["websocket"],
    closeOnBeforeunload: !0,
    query: {
      botToken: n,
      sessionId: p == null ? void 0 : p.id,
      client: "widget",
      clientVersion: Ho.version
    }
  });
  He(() => {
    let m;
    if (p && x) {
      const W = {
        sessionId: p.id,
        client: "widget",
        botToken: n,
        user: l,
        timestamp: Date.now()
      };
      async function se() {
        x == null || x.emit("heartbeat", W);
      }
      se(), m = setInterval(() => {
        se();
      }, 50 * 1e3);
    }
    return () => {
      clearInterval(m);
    };
  }, [x, p, n, l]), He(() => {
    if (Fo("✨ Welcome to Open Widget"), p)
      return x == null || x.on("heartbeat:ack", (m) => {
        m.success && Fo("heartbeat ack");
      }), () => {
        x == null || x.off("heartbeat:ack");
      };
  }, [p]);
  const _ = (m) => {
    d(Object.assign({}, c, m));
  }, [k, L] = Ol(Yw, {
    lastUpdated: null,
    messages: [],
    keyboard: null
  }), [P, D] = yy(
    () => pb(O, f.get),
    1e3
  ), S = ey(
    ["initialData", n],
    async ([m, V]) => {
      const { data: W } = await wg(h, p == null ? void 0 : p.id);
      return {
        history: W ? kg(W.history) : [],
        faq: (W == null ? void 0 : W.faq) ?? [],
        initial_questions: (W == null ? void 0 : W.initial_questions) ?? [],
        logo: (W == null ? void 0 : W.logo) ?? ""
      };
    },
    {
      onSuccess(m) {
        L({
          type: "PREPEND_HISTORY",
          payload: m.history
        });
      },
      fallbackData: {
        history: [],
        faq: [],
        initial_questions: [],
        logo: ""
      },
      revalidateOnFocus: !1,
      revalidateOnReconnect: !1,
      revalidateOnMount: !0
    }
  ), N = we(() => {
    p && x && x.emit("join_session", { session_id: p.id });
  }, [p == null ? void 0 : p.id, x]), T = we(() => {
    p && x && x.emit("join_session", { session_id: p.id });
  }, [x]);
  He(() => (x == null || x.on("connect", N), x == null || x.on("reconnect", T), () => {
    x == null || x.off("connect", N), x == null || x.off("reconnect", T);
  }), [N, x, T]);
  function B(m) {
    x == null || x.emit("join_session", {
      session_id: m
    });
  }
  function H() {
    x == null || x.emit("leave_session", { session_id: p == null ? void 0 : p.id }), g(null), L({ type: "RESET" }), i == null || i();
  }
  function q() {
    H(), zo(h, n).then(({ data: m }) => {
      g(m), B(m.id);
    });
  }
  const $ = (m) => {
    by({
      _message: m,
      _socket: x,
      onSessionUpdate(V, W) {
        g(V.value.session);
      },
      onBotMessage(V, W) {
        L({ type: "ADD_RESPONSE_MESSAGE", payload: V });
      },
      onChatEvent(V, W) {
        L({ type: "ADD_RESPONSE_MESSAGE", payload: V });
      },
      onUi(V, W) {
        L({ type: "ADD_RESPONSE_MESSAGE", payload: V });
      },
      onForm(V, W) {
        L({ type: "ADD_RESPONSE_MESSAGE", payload: V });
      },
      onOptions(V, W) {
        L({
          type: "SET_KEYBOARD",
          payload: {
            options: V.value.options
          }
        });
      },
      onVote(V, W) {
        V.server_message_id && V.client_message_id && L({
          type: "SET_SERVER_ID",
          payload: {
            clientMessageId: V.client_message_id,
            ServerMessageId: V.server_message_id
          }
        });
      }
    });
  }, re = we(
    (m) => {
      D(m);
    },
    [D]
  ), oe = we(
    (m) => {
      L({
        type: "APPEND_USER_MESSAGE",
        payload: {
          user: m.user,
          type: "FROM_USER",
          deliveredAt: null,
          serverId: null,
          session_id: (p == null ? void 0 : p.id) ?? "",
          content: m.content,
          id: m.id ?? Fe(10)
        }
      });
    },
    []
  ), fe = we((m) => {
    L({
      type: "SET_DELIVERED_AT",
      payload: {
        clientMessageId: m.id,
        deliveredAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    });
  }, []);
  He(() => {
    if (x)
      return x.on("structured_message", $), x.on("user_message_broadcast", oe), x.on("ack:chat_message:delivered", fe), x.on("info", re), () => {
        x.off("structured_message"), x.off("info"), x.off("user_message_broadcast"), x.off("ack:chat_message:delivered");
      };
  }, [$, re, oe, x]), He(() => {
    L({ type: "INIT" });
  }, []);
  const y = k.messages.length === 0;
  async function Q({
    content: m,
    user: V,
    headers: W,
    PathParams: se,
    query_params: Ye,
    ...Ne
  }) {
    let _e = p;
    if (!p && y)
      try {
        const { data: ue } = await zo(h, n);
        if (ue)
          g(ue), B(ue.id), b("loading"), _e = ue;
        else
          throw new Error("Failed to create session");
      } catch (ue) {
        return console.error("Error creating session:", ue), null;
      }
    if (_e && x) {
      const ue = Fe(), je = {
        id: ue,
        bot_token: n,
        content: m.text,
        session_id: _e.id,
        headers: {
          ...o,
          ...W
        },
        pathParams: {
          ...a,
          ...se
        },
        query_params: {
          ...s,
          ...Ye
        },
        user: {
          ...l,
          ...V
        },
        language: u,
        ...Ne
      };
      try {
        return L({
          type: "APPEND_USER_MESSAGE",
          payload: {
            type: "FROM_USER",
            id: ue,
            content: m.text,
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            session_id: _e.id,
            user: je.user,
            deliveredAt: null,
            serverId: null
          }
        }), k.keyboard && L({
          type: "SET_KEYBOARD",
          payload: null
        }), b("loading"), x.emit("send_chat", je), je;
      } catch (Z) {
        return console.error("Error sending message:", Z), null;
      }
    }
    return null;
  }
  const ge = we((m) => {
    Q({
      content: {
        text: m
      }
    }), L({
      type: "SET_KEYBOARD",
      payload: null
    });
  }, [L, Q, x]);
  return console.log("✨ Welcome to Open Widget"), {
    version: Ho.version,
    state: k,
    session: p ?? null,
    // Derived // 
    isSessionClosed: (p == null ? void 0 : p.status) === Rn.CLOSED_RESOLVED || (p == null ? void 0 : p.status) === Rn.CLOSED_UNRESOLVED,
    noMessages: y,
    initialData: (S == null ? void 0 : S.data) ?? null,
    // ------- //
    recreateSession: q,
    clearSession: H,
    sendMessage: Q,
    info: P,
    settings: c,
    setSettings: _,
    axiosInstance: h,
    handleKeyboard: ge,
    hookState: w,
    setHookState: b
  };
}
const [ux, Qw] = ti();
function cx({
  children: e
}) {
  var r, i;
  const t = ni(), n = Kw({
    apiUrl: t.apiUrl ?? "https://api-v2.opencopilot.so/backend",
    socketUrl: t.socketUrl ?? "https://api-v2.opencopilot.so",
    botToken: t.token,
    headers: t.headers ?? {},
    queryParams: t.queryParams ?? {},
    pathParams: t.pathParams ?? {},
    userData: t.user ?? {},
    language: t.language,
    defaultHookSettings: {
      persistSession: ((r = t.settings) == null ? void 0 : r.persistSession) ?? !0,
      useSoundEffects: ((i = t.settings) == null ? void 0 : i.useSoundEffects) ?? !1
    }
  });
  return /* @__PURE__ */ ce(Qw, { value: n, children: e });
}
export {
  Ei as A,
  ix as B,
  bg as C,
  og as F,
  jl as L,
  Ra as M,
  va as a,
  Si as b,
  ti as c,
  ni as d,
  ox as e,
  Bl as f,
  rx as g,
  cx as h,
  Cm as i,
  ig as j,
  yg as k,
  zo as l,
  wg as m,
  xg as n,
  ax as o,
  Er as p,
  Hw as q,
  ux as u,
  sx as w
};
