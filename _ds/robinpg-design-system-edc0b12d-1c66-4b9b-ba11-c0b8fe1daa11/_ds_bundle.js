/* @ds-bundle: {"format":3,"namespace":"RobinPGDesignSystem_edc0b1","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Callout","sourcePath":"components/layout/Callout.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/layout/Eyebrow.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"78074109cb74","components/core/Button.jsx":"e891644bb79d","components/core/IconButton.jsx":"876fd9b5a18c","components/core/StatBlock.jsx":"e466f853c6e4","components/core/Tag.jsx":"3a30dd1bc9c4","components/feedback/Accordion.jsx":"5ba75c817a12","components/feedback/Toast.jsx":"2daf3211c60f","components/forms/Checkbox.jsx":"0a15202319a7","components/forms/Input.jsx":"c2872cafbed2","components/forms/Select.jsx":"ab49d4c7307c","components/forms/Switch.jsx":"76828ad13b25","components/layout/Callout.jsx":"598c75af0cca","components/layout/Card.jsx":"6c11666ac03d","components/layout/Eyebrow.jsx":"e19ee1acb94b","ui_kits/website/Chrome.jsx":"8d57d9a67262","ui_kits/website/FaqScreen.jsx":"9cfe27e4cfcd","ui_kits/website/GuideScreen.jsx":"a5a7aa87ec6d","ui_kits/website/HomeScreen.jsx":"93abf00c91ce","ui_kits/website/ProductScreen.jsx":"3a60656bfc19"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RobinPGDesignSystem_edc0b1 = window.RobinPGDesignSystem_edc0b1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RobinPG Badge — small status pill. Tones map to signal colors.
 * `dot` adds a leading status dot (pulses when `pulse`).
 */
function Badge({
  children,
  tone = 'teal',
  dot = false,
  pulse = false,
  style = {},
  ...rest
}) {
  const tones = {
    teal: {
      fg: 'var(--teal-300)',
      bg: 'var(--teal-veil)',
      bd: 'rgba(57,204,206,0.35)'
    },
    ember: {
      fg: 'var(--ember-400)',
      bg: 'rgba(242,169,63,0.12)',
      bd: 'rgba(242,169,63,0.35)'
    },
    success: {
      fg: 'var(--signal-success)',
      bg: 'rgba(79,199,138,0.12)',
      bd: 'rgba(79,199,138,0.35)'
    },
    danger: {
      fg: 'var(--signal-danger)',
      bg: 'rgba(240,100,91,0.12)',
      bd: 'rgba(240,100,91,0.35)'
    },
    neutral: {
      fg: 'var(--text-soft)',
      bg: 'var(--white-08)',
      bd: 'var(--border)'
    }
  };
  const t = tones[tone] || tones.teal;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: '10.5px',
      lineHeight: 1,
      padding: '0.34rem 0.6rem',
      borderRadius: 'var(--radius-pill)',
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.fg,
      flex: 'none',
      animation: pulse ? 'rpg-pulse 2s infinite' : 'none'
    }
  }), children, /*#__PURE__*/React.createElement("style", null, `@keyframes rpg-pulse{0%,100%{opacity:1}50%{opacity:0.35}}`));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RobinPG Button — Coolvetica-condensed uppercase label, sharp corners.
 * Variants: primary (teal fill), secondary (hairline outline), ghost (text+arrow).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  arrow = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0.5rem 1rem',
      fontSize: '12px'
    },
    md: {
      padding: '0.7rem 1.5rem',
      fontSize: '13px'
    },
    lg: {
      padding: '0.95rem 2rem',
      fontSize: '15px'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-condensed)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: 400,
    lineHeight: 1,
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--on-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text)',
      borderColor: 'var(--border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      padding: '0.4rem 0'
    },
    danger: {
      background: 'var(--signal-danger)',
      color: '#fff'
    },
    ember: {
      background: 'var(--ember-500)',
      color: 'var(--ink-950)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--accent-hover)'
    },
    secondary: {
      borderColor: 'var(--text-soft)',
      color: 'var(--text-strong)'
    },
    ghost: {},
    danger: {
      filter: 'brightness(1.08)'
    },
    ember: {
      filter: 'brightness(1.06)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), icon, /*#__PURE__*/React.createElement("span", null, children), iconRight, arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      transition: 'transform var(--dur-base) var(--ease-out)',
      transform: hover ? 'translateX(3px)' : 'none'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RobinPG IconButton — square hairline control for glyph-only actions
 * (playback, D-pad, nav). Pass a glyph/SVG as children.
 */
function IconButton({
  children,
  label,
  size = 'md',
  variant = 'outline',
  onClick,
  disabled = false,
  style = {},
  ...rest
}) {
  const dim = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const [hover, setHover] = React.useState(false);
  const variants = {
    outline: {
      background: 'transparent',
      border: '1px solid var(--border)',
      color: hover ? 'var(--accent)' : 'var(--text-soft)'
    },
    solid: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      border: '1px solid transparent',
      color: 'var(--on-accent)'
    },
    ghost: {
      background: hover ? 'var(--surface-hover)' : 'transparent',
      border: '1px solid transparent',
      color: hover ? 'var(--text-strong)' : 'var(--text-soft)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontSize: dim * 0.42,
      lineHeight: 1,
      padding: 0,
      borderColor: hover && variant === 'outline' ? 'var(--border-strong)' : undefined,
      transition: 'all var(--dur-base) var(--ease-out)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RobinPG StatBlock — oversized teal numeral (Coolvetica Regular) over a
 * serif label. The studio's signature "proof in numbers" unit.
 */
function StatBlock({
  value,
  label,
  align = 'left',
  accent = true,
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: '2rem',
    md: '2.75rem',
    lg: '4rem'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      lineHeight: 0.95,
      fontSize: sizes[size] || sizes.md,
      color: accent ? 'var(--accent)' : 'var(--text-strong)',
      letterSpacing: '0'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '15px',
      color: 'var(--text-soft)',
      lineHeight: 1.45
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RobinPG Tag — feature chip. `check` prefixes a teal ✓ (the studio's
 * feature-list convention); otherwise a quiet hairline chip.
 */
function Tag({
  children,
  check = false,
  active = false,
  onClick,
  style = {},
  ...rest
}) {
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.45rem',
      fontFamily: 'var(--font-serif)',
      fontSize: '15px',
      lineHeight: 1,
      padding: '0.5rem 0.85rem',
      borderRadius: 'var(--radius-md)',
      color: active ? 'var(--text-strong)' : 'var(--text-soft)',
      background: active ? 'var(--accent-quiet)' : 'transparent',
      border: `1px solid ${active ? 'var(--border-strong)' : 'var(--border)'}`,
      cursor: clickable ? 'pointer' : 'default',
      transition: 'all var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), check && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, "\u2713"), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/**
 * RobinPG Accordion — FAQ-style disclosure list. Condensed question rows with a
 * teal +/× toggle (rotates), serif answers. Single-open by default.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  style = {}
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      type: "button",
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        background: isOpen ? 'var(--surface-hover)' : 'var(--surface-card)',
        border: 'none',
        padding: '1.1rem 1.4rem',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'background var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '17px',
        color: 'var(--text-strong)'
      }
    }, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 24,
        height: 24,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)',
        color: isOpen ? 'var(--accent)' : 'var(--text-muted)',
        fontSize: 16,
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
      }
    }, "+")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 1.4rem 1.2rem',
        background: 'var(--surface-hover)',
        fontFamily: 'var(--font-serif)',
        fontSize: '16.5px',
        lineHeight: 1.75,
        color: 'var(--text-soft)'
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * RobinPG Toast — compact notification card. Left accent border by tone, a
 * status dot, serif message. Render inline for specimens or stack fixed.
 */
function Toast({
  title,
  message,
  tone = 'info',
  onClose,
  style = {}
}) {
  const tones = {
    info: 'var(--accent)',
    success: 'var(--signal-success)',
    warning: 'var(--ember-500)',
    danger: 'var(--signal-danger)'
  };
  const c = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border)',
      borderLeft: `3px solid ${c}`,
      borderRadius: 'var(--radius-md)',
      padding: '0.9rem 1.1rem',
      minWidth: 280,
      maxWidth: 420,
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: c,
      flex: 'none',
      marginTop: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      color: 'var(--text-strong)',
      marginBottom: message ? '0.2rem' : 0
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--text-soft)'
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    type: "button",
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1,
      padding: 2,
      flex: 'none'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * RobinPG Checkbox — square hairline box with a teal check.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {}
}) {
  const fid = id || React.useId();
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (checked === undefined) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-serif)',
      fontSize: '15px',
      color: 'var(--text)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: "checkbox",
    checked: isOn,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isOn ? 'var(--accent)' : 'var(--surface-raised)',
      border: `1px solid ${isOn ? 'var(--accent)' : 'var(--border)'}`,
      color: 'var(--on-accent)',
      fontSize: 13,
      fontWeight: 700,
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, isOn ? '✓' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RobinPG Input — hairline field on ink. Optional label + hint; teal focus ring.
 */
function Input({
  label,
  hint,
  error,
  icon,
  type = 'text',
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '11px',
      color: 'var(--text-soft)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      color: 'var(--text-muted)',
      fontSize: 15,
      pointerEvents: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      fontFamily: 'var(--font-serif)',
      fontSize: '16.5px',
      color: 'var(--text-strong)',
      background: 'var(--surface-raised)',
      padding: icon ? '0.7rem 0.9rem 0.7rem 2.2rem' : '0.7rem 0.9rem',
      border: `1px solid ${error ? 'var(--signal-danger)' : focus ? 'var(--accent)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? '0 0 0 3px var(--teal-veil)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '13.5px',
      color: error ? 'var(--signal-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RobinPG Select — native select styled as a hairline field with a teal caret.
 */
function Select({
  label,
  hint,
  options = [],
  id,
  value,
  onChange,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '11px',
      color: 'var(--text-soft)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-serif)',
      fontSize: '16.5px',
      color: 'var(--text-strong)',
      background: 'var(--surface-raised)',
      padding: '0.7rem 2.2rem 0.7rem 0.9rem',
      border: `1px solid ${focus ? 'var(--accent)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus ? '0 0 0 3px var(--teal-veil)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out)'
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 0,
      height: 0,
      pointerEvents: 'none',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: '6px solid var(--accent)'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '12.5px',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * RobinPG Switch — pill toggle. Teal track when on; knob slides with a snap.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {}
}) {
  const fid = id || React.useId();
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !isOn;
    if (checked === undefined) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.65rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-serif)',
      fontSize: '15px',
      color: 'var(--text)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: fid,
    role: "switch",
    "aria-checked": isOn,
    type: "button",
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 42,
      height: 24,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: isOn ? 'var(--accent)' : 'var(--ink-600)',
      border: `1px solid ${isOn ? 'var(--accent)' : 'var(--border)'}`,
      position: 'relative',
      cursor: 'inherit',
      padding: 0,
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: isOn ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: isOn ? 'var(--ink-950)' : 'var(--bone-300)',
      transition: 'left var(--dur-base) var(--ease-snap)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RobinPG Callout — info / tip / warning box with a left teal (or tone) accent
 * border. Lifted from the guides page convention.
 */
function Callout({
  children,
  label,
  tone = 'info',
  title,
  style = {},
  ...rest
}) {
  const tones = {
    info: 'var(--accent)',
    tip: 'var(--signal-success)',
    warning: 'var(--ember-500)',
    danger: 'var(--signal-danger)'
  };
  const c = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--border)',
      borderLeft: `3px solid ${c}`,
      borderRadius: 'var(--radius-sm)',
      padding: '1.1rem 1.4rem',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      fontSize: '10px',
      color: c,
      marginBottom: '0.5rem'
    }
  }, label), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '15px',
      color: 'var(--text-strong)',
      marginBottom: '0.4rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '16px',
      lineHeight: 1.7,
      color: 'var(--text-soft)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Callout.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RobinPG Card — flat ink panel with a hairline border. No drop shadow at rest;
 * on hover it lifts one ink step (or glows when `glow`). `numbered` adds the
 * studio's "01 / 02" index label.
 */
function Card({
  children,
  title,
  body,
  number,
  cta,
  interactive = true,
  glow = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: interactive && hover ? 'var(--surface-hover)' : 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '1.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: glow && hover ? 'var(--glow-teal)' : 'none',
      transition: 'background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), number && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      fontSize: '11px',
      color: 'var(--text-muted)'
    }
  }, number), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      lineHeight: 1.2,
      color: 'var(--text-strong)'
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '16.5px',
      lineHeight: 1.65,
      color: 'var(--text-soft)',
      flex: 1
    }
  }, body), children, cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.25rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: hover ? '0.65rem' : '0.4rem',
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: '12px',
      color: 'var(--accent)',
      transition: 'gap var(--dur-base) var(--ease-out)'
    }
  }, cta, " ", /*#__PURE__*/React.createElement("span", null, "\u2192")));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RobinPG Eyebrow — the section kicker. Condensed UPPERCASE teal label with a
 * trailing hairline rule (the studio's section divider signature).
 */
function Eyebrow({
  children,
  rule = true,
  color = 'var(--accent)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      fontSize: '11px',
      color,
      ...style
    }
  }, rest), children, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 1,
      background: 'var(--border)'
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* ui_kits/website/Chrome.jsx — shared nav + footer for the RobinPG site kit */
const {
  Button,
  Badge
} = window.RobinPGDesignSystem_edc0b1;
const NAV = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'product',
  label: 'Basic Movement'
}, {
  id: 'guide',
  label: 'Blueprint & Guides'
}, {
  id: 'faq',
  label: 'FAQs'
}];
function Logo({
  onClick,
  size = 36
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo_RPG.png",
    alt: "RobinPG",
    style: {
      width: size,
      height: size
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      color: 'var(--text-strong)',
      letterSpacing: '0.01em'
    }
  }, "Robin", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "PG")));
}
function Nav({
  page,
  go
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.9rem 2.5rem',
      background: 'rgba(10,19,20,0.86)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: () => go('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.8rem',
      alignItems: 'center'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '12px',
      padding: 0,
      color: page === n.id ? 'var(--accent)' : 'var(--text-soft)',
      transition: 'color var(--dur-base) var(--ease-out)'
    }
  }, n.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('product')
  }, "Buy on FAB"));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border)',
      background: 'var(--surface-sunk)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '2.5rem',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      color: 'var(--text-strong)'
    }
  }, "Robin", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "PG")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '12.5px',
      color: 'var(--text-muted)',
      marginTop: '0.4rem'
    }
  }, "\xA9 2025 Robin Picture Graphic. Game animation for Unreal Engine 5.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.5rem',
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: '12px'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.6rem'
    }
  }, ['f', '⌘', '▶'].map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 34,
      height: 34,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, s)))));
}
Object.assign(window, {
  Logo,
  Nav,
  Footer,
  RPG_NAV: NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FaqScreen.jsx
try { (() => {
/* ui_kits/website/FaqScreen.jsx */
const {
  Accordion,
  Eyebrow,
  Card,
  Button
} = window.RobinPGDesignSystem_edc0b1;
function FaqScreen({
  go
}) {
  const items = [{
    q: 'What is included in the Basic Movement Female animation set?',
    a: '269 UE5 animations, 67 UE4 animations and 25 poses — walk, run, crouch, jump, roll, pivot, mantle and more, with FBX source and full ALS blueprint support.'
  }, {
    q: 'Do I need Advanced Locomotion System V4?',
    a: 'Yes. Our pack ships a child blueprint that runs on the free ALS V4. Grab ALS V4 on FAB first, then import our RPG_BasicMove_BP folder.'
  }, {
    q: 'Which Unreal Engine versions are supported?',
    a: 'Unreal Engine 5.2 and up. A separate UE4 animation set is included for older projects.'
  }, {
    q: 'Can I use these animations commercially?',
    a: 'Yes — the pack is licensed for use in commercial Unreal projects. The underlying ALS V4 blueprint keeps its own license, which we do not own.'
  }, {
    q: 'How do I get support if I run into trouble?',
    a: "Reach out on Discord or by email. We're happy to help with setup, retargeting, and blueprint questions."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '4rem 2.5rem 3rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.2rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Support")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
      lineHeight: 1.06,
      color: 'var(--text-strong)',
      marginBottom: '1rem'
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '19px',
      lineHeight: 1.7,
      color: 'var(--text-soft)',
      maxWidth: 640
    }
  }, "Wondering about something? We've got you covered. If you can't find your answer here, reach out via Discord or email."))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '4rem 2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Common questions")), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: items
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 1,
      background: 'var(--border)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Read the setup guide",
    body: "Step-by-step ALS blueprint installation.",
    cta: "Open guide",
    onClick: () => go('guide'),
    style: {
      borderRadius: 0,
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    title: "See the full pack",
    body: "269 animations, spec sheet, and screenshots.",
    cta: "View product",
    onClick: () => go('product'),
    style: {
      borderRadius: 0,
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    title: "Contact us",
    body: "Questions, suggestions, or ideas \u2014 we'd love to hear from you.",
    cta: "Get in touch",
    onClick: () => go('home'),
    style: {
      borderRadius: 0,
      border: 'none'
    }
  }))));
}
Object.assign(window, {
  FaqScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FaqScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GuideScreen.jsx
try { (() => {
/* ui_kits/website/GuideScreen.jsx */
const {
  Button,
  Eyebrow,
  Callout
} = window.RobinPGDesignSystem_edc0b1;
function Step({
  n,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '1.6rem 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '22px',
      color: 'var(--accent)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.6rem 1.9rem',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      color: 'var(--text-strong)',
      marginBottom: '0.5rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '16.5px',
      lineHeight: 1.7,
      color: 'var(--text-soft)'
    }
  }, children)));
}
function Mono({
  children
}) {
  return /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12.5px',
      color: 'var(--accent)',
      background: 'var(--ink-800)',
      padding: '0.1rem 0.4rem',
      borderRadius: 2
    }
  }, children);
}
function GuideScreen({
  go
}) {
  const container = {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '4rem 2.5rem'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '4rem 2.5rem 3rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.2rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Documentation")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
      lineHeight: 1.06,
      color: 'var(--text-strong)',
      marginBottom: '1rem'
    }
  }, "Blueprint & Guides"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '19px',
      lineHeight: 1.7,
      color: 'var(--text-soft)',
      maxWidth: 640
    }
  }, "New to the ALS Blueprint System? This guide walks you through every step \u2014 from downloading the base blueprint to getting your character running in Unreal Engine 5."))), /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.6rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "About the blueprint")), /*#__PURE__*/React.createElement(Callout, {
    tone: "info"
  }, "Our blueprint is based on the ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "Advanced Locomotion System V4"), " by LongmireLocomotion, free on the Unreal Marketplace. We provide the ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "child blueprint"), " \u2014 the animation sequences and adjustments. You'll need the main ALS blueprint first; ours enhances those base functionalities. We do not hold rights or ownership of the ALS blueprint.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Installation steps")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Step, {
    n: "1",
    title: "Get ALS V4 and create a new ALS project"
  }, "Download Advanced Locomotion System V4 (free) from FAB and create a new project from the ALS template."), /*#__PURE__*/React.createElement(Step, {
    n: "2",
    title: "Migrate ALS_GameMode_SP to your project"
  }, "Open the ALS project and migrate ", /*#__PURE__*/React.createElement(Mono, null, "ALS_GameMode_SP"), " into your project's ", /*#__PURE__*/React.createElement(Mono, null, "Content"), " folder."), /*#__PURE__*/React.createElement(Step, {
    n: "3",
    title: "Hard-import the RPG_BasicMove_BP folder"
  }, "Import our ", /*#__PURE__*/React.createElement(Mono, null, "RPG_BasicMove_BP"), " folder. Your Content should now hold AdvancedLocomotionV4, RPG_BasicMove, and RPG_BasicMove_BP."), /*#__PURE__*/React.createElement(Step, {
    n: "4",
    title: "Import the Input_ALS key settings"
  }, "Go to ", /*#__PURE__*/React.createElement(Mono, null, "Edit > Project Settings > Engine Input > Import\u2026"), " and import the ", /*#__PURE__*/React.createElement(Mono, null, "Input_ALS"), " file we provide."), /*#__PURE__*/React.createElement(Step, {
    n: "5",
    title: "Add 3 enumerators to ALS_OverlayState"
  }, "In the ", /*#__PURE__*/React.createElement(Mono, null, "ALS_OverlayState"), " enumerator, add Normal_A, Normal_B, and Normal_C."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '1.6rem 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '22px',
      color: 'var(--accent)'
    }
  }, "6"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.6rem 1.9rem',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      color: 'var(--text-strong)',
      marginBottom: '0.5rem'
    }
  }, "Set GameMode in World Details \u2014 and you're done!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '16.5px',
      lineHeight: 1.7,
      color: 'var(--text-soft)'
    }
  }, "Set GameMode Override \u2192 ", /*#__PURE__*/React.createElement(Mono, null, "ALS_GameMode_SP"), " and Default Pawn Class \u2192 ", /*#__PURE__*/React.createElement(Mono, null, "BP_RPG_FemaleUE5_CH"), ".", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.9rem',
      fontFamily: 'var(--font-display)',
      color: 'var(--accent)'
    }
  }, "Enjoy the experience! \uD83C\uDFAE"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "warning",
    label: "Known issue \u2014 camera jiggle"
  }, "The camera jiggles while the character falls near a ledge. Add camera sockets on the head skeleton: FP_Camera, TP_CameraTrace_R, TP_CameraTrace_L.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2rem',
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Join Discord"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    arrow: true,
    onClick: () => go('faq')
  }, "Browse FAQs")))));
}
Object.assign(window, {
  GuideScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GuideScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* ui_kits/website/HomeScreen.jsx */
const {
  Button,
  Badge,
  Card,
  Tag,
  Eyebrow
} = window.RobinPGDesignSystem_edc0b1;
const RPG_ICON = {
  gamepad: '../../assets/icons/gamepad.png',
  standup: '../../assets/icons/stand-up.png',
  architectural: '../../assets/icons/architectural.png',
  youtube: '../../assets/icons/youtube.png',
  howto: '../../assets/icons/how-to.png'
};
function IconStripItem({
  icon,
  kicker,
  label,
  onClick,
  last
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      flex: 1,
      border: 'none',
      padding: '2.6rem 1.25rem 2rem',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.1rem',
      textAlign: 'center',
      background: hover ? 'var(--surface-hover)' : 'var(--ink-850)',
      borderRight: last ? 'none' : '1px solid var(--border)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      borderRadius: 'var(--radius-md)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'var(--accent-quiet)' : 'transparent',
      boxShadow: hover ? 'var(--glow-soft)' : 'none',
      transition: 'background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-snap)',
      transform: hover ? 'translateY(-3px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: 52,
      height: 52,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: '10px',
      color: 'var(--accent)',
      marginBottom: '0.4rem'
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      color: 'var(--text-strong)'
    }
  }, label)));
}
function HomeScreen({
  go
}) {
  const container = {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '4rem 2.5rem'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      padding: '6rem 2rem 4.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 760,
      height: 420,
      background: 'radial-gradient(ellipse, var(--teal-glow) 0%, transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    dot: true,
    pulse: true
  }, "Available now \xB7 Unreal Engine 5")), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
      lineHeight: 1.04,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)',
      maxWidth: 780,
      margin: '1.6rem 0 1.1rem'
    }
  }, "Game motion & ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "animation"), " production"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-serif)',
      fontSize: '21px',
      lineHeight: 1.7,
      color: 'var(--text-soft)',
      maxWidth: 560,
      margin: '0 0 2.2rem'
    }
  }, "Perfect for bringing your female character to life with style and grace. Walk, run, crouch, jump, roll \u2014 every move covered."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '1.8rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('product')
  }, "Buy now on FAB"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    arrow: true,
    onClick: () => go('guide')
  }, "Download free demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, ['Female character animations', 'ALS Blueprint system', 'FBX included', 'UE5 ready'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    check: true
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(IconStripItem, {
    icon: RPG_ICON.gamepad,
    kicker: "Try it",
    label: "Free Demo",
    onClick: () => go('guide')
  }), /*#__PURE__*/React.createElement(IconStripItem, {
    icon: RPG_ICON.standup,
    kicker: "Product",
    label: "Animation",
    onClick: () => go('product')
  }), /*#__PURE__*/React.createElement(IconStripItem, {
    icon: RPG_ICON.architectural,
    kicker: "Docs",
    label: "Blueprint",
    onClick: () => go('guide')
  }), /*#__PURE__*/React.createElement(IconStripItem, {
    icon: RPG_ICON.youtube,
    kicker: "Watch",
    label: "Preview",
    onClick: () => go('product')
  }), /*#__PURE__*/React.createElement(IconStripItem, {
    icon: RPG_ICON.howto,
    kicker: "Support",
    label: "FAQ",
    onClick: () => go('faq'),
    last: true
  })), /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What's included")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: 1,
      background: 'var(--border)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    number: "01",
    title: "Basic Movement Pack",
    interactive: true,
    body: "Complete female locomotion \u2014 walk, run, crouch, jump, roll, pivot, start/stop and more. Built for ALS.",
    cta: "View animations",
    onClick: () => go('product'),
    style: {
      borderRadius: 0,
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    number: "02",
    title: "Free Demo Download",
    interactive: true,
    body: "Try before you buy. A free UE5 project so you can feel the animations live in-engine on Windows.",
    cta: "Download demo",
    onClick: () => go('guide'),
    style: {
      borderRadius: 0,
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    number: "03",
    title: "Blueprint & Guides",
    interactive: true,
    body: "New to ALS? Step-by-step guides walk you through the whole blueprint system without confusion.",
    cta: "Read the guide",
    onClick: () => go('guide'),
    style: {
      borderRadius: 0,
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    number: "04",
    title: "FAQs",
    interactive: true,
    body: "Questions about compatibility, licensing, or setup in your project? We've got you covered.",
    cta: "Browse FAQs",
    onClick: () => go('faq'),
    style: {
      borderRadius: 0,
      border: 'none'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '4rem 2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.7rem, 3vw, 2.2rem)',
      color: 'var(--text-strong)',
      marginBottom: '0.7rem'
    }
  }, "Try it before you buy it"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '17px',
      color: 'var(--text-soft)',
      maxWidth: 460,
      margin: '0 auto 1.8rem'
    }
  }, "Download a free Unreal Engine 5 project and experience the full animation set running in real time."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('guide')
  }, "Download demo.rar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: '11px',
      color: 'var(--text-muted)',
      marginTop: '1.1rem'
    }
  }, "Windows OS \xB7 Unreal Engine 5 \xB7 Free, no account needed")), /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "News & product updates")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, [['10 Jul 25', 'Bug fix —', 'Basic Movement Female: Mantle System blueprint issue resolved.'], ['15 Jan 25', 'New animations —', '6 more secondary-motion clips, new landing animations. Version update.'], ['28 Nov 24', 'Locomotion update —', '10-direction locomotion and 3-direction rolling added.'], ['08 Jun 24', 'Launch —', 'Basic Movement Female released on the Unreal Marketplace.']].map((r, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: '11px',
      color: 'var(--accent)',
      padding: '1.2rem 1.4rem',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center'
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '15.5px',
      color: 'var(--text-soft)',
      padding: '1.2rem 1.4rem'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 600
    }
  }, r[1]), " ", r[2]))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductScreen.jsx
try { (() => {
/* ui_kits/website/ProductScreen.jsx */
const {
  Button,
  Badge,
  StatBlock,
  Eyebrow,
  Card
} = window.RobinPGDesignSystem_edc0b1;
function ProductScreen({
  go
}) {
  const container = {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '4rem 2.5rem'
  };
  const counts = [['70', 'Walk — 10-direction S/L/S/Pivot'], ['70', 'Run — 10-direction S/L/S/Pivot'], ['70', 'Crouch walk — 10-direction'], ['14', 'Jump animations'], ['12', 'Turn animations'], ['10', 'Lean poses'], ['8', 'Locomotion poses'], ['7', 'Secondary motion (breathing)'], ['6', 'Transition animations'], ['4', 'Roll animations — 4 directions'], ['4', 'Get-up animations'], ['3', 'Mantle animations']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '4rem 2.5rem 3rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.2rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Product")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
      lineHeight: 1.06,
      color: 'var(--text-strong)',
      marginBottom: '1rem'
    }
  }, "Basic Movement Female"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '19px',
      lineHeight: 1.7,
      color: 'var(--text-soft)',
      maxWidth: 640
    }
  }, "An animation set that brings your female characters to life with style and grace. Ideal for adventure, action, and RPG \u2014 also perfect for NPCs to enhance the overall player experience."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginTop: '1.8rem'
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Buy on FAB"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    arrow: true,
    onClick: () => go('guide')
  }, "Download free demo")))), /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Preview")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      overflow: 'hidden',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--ink-850)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      border: '1px solid var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--accent)',
      fontSize: 22,
      boxShadow: 'var(--glow-soft)'
    }
  }, "\u25BA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, "In-engine preview \xB7 YouTube")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)'
    }
  }, [['269', 'UE5 animations'], ['67', 'UE4 animations'], ['25', 'Poses'], ['5.2+', 'UE version'], ['ALS v4', 'Blueprint']].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '1.6rem 1.5rem',
      borderRight: i < 4 ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: s[0],
    label: s[1],
    accent: i < 3,
    size: "md"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Animation counts")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
      gap: 1,
      background: 'var(--border)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, counts.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      padding: '1.4rem 1.6rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '2.2rem',
      lineHeight: 0.95,
      color: 'var(--accent)',
      marginBottom: '0.4rem'
    }
  }, c[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '14.5px',
      color: 'var(--text-soft)',
      lineHeight: 1.45
    }
  }, c[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2rem',
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    arrow: true
  }, "Full animation list"), /*#__PURE__*/React.createElement(Button, null, "Buy on FAB"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      borderTop: '1px solid var(--border)',
      padding: '3.5rem 2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontSize: '11px',
      color: 'var(--accent)',
      marginBottom: '0.9rem'
    }
  }, "Ready to integrate?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
      color: 'var(--text-strong)',
      marginBottom: '0.7rem'
    }
  }, "Get the full animation pack"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '17px',
      color: 'var(--text-soft)',
      maxWidth: 460,
      margin: '0 auto 1.8rem'
    }
  }, "Available now on the Unreal FAB Marketplace. Includes FBX files and full ALS blueprint support."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Buy on FAB store"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('guide')
  }, "Blueprint setup guide"))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

})();
