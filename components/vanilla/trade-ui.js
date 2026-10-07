/* @ds-bundle: {"format":4,"namespace":"TradeUI","components":[{"name":"Button"},{"name":"TextInput"},{"name":"Card"},{"name":"NavBar"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var o = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k];
    return o;
  }

  /* ---------- Button ---------- */
  function Button(props) {
    var variant = props.variant || 'primary';
    var size = props.size || 'md';
    var shape = props.shape || 'pill';
    var iconOnly = !props.children && props.icon;
    var rest = omit(props, ['variant', 'size', 'shape', 'icon', 'iconRight', 'className', 'children', 'type', 'fullWidth']);
    return h('button', Object.assign({}, rest, {
      type: props.type || 'button',
      className: cx('tu-btn', 'tu-btn--' + variant, 'tu-btn--' + size, 'tu-btn--' + shape,
        iconOnly && 'tu-btn--icon', props.fullWidth && 'tu-btn--full', props.className)
    }),
      props.icon ? h('span', { className: 'tu-btn__icon', 'aria-hidden': 'true' }, props.icon) : null,
      props.children ? h('span', { className: 'tu-btn__label' }, props.children) : null,
      props.iconRight ? h('span', { className: 'tu-btn__icon', 'aria-hidden': 'true' }, props.iconRight) : null
    );
  }

  /* ---------- TextInput ---------- */
  var uid = 0;
  function TextInput(props) {
    var idRef = React.useRef(null);
    if (idRef.current === null) idRef.current = props.id || 'tu-input-' + (++uid);
    var id = idRef.current;
    var size = props.size || 'md';
    var hintId = id + '-hint';
    var message = props.error || props.hint;
    var rest = omit(props, ['label', 'hint', 'error', 'icon', 'suffix', 'size', 'className', 'id', 'type']);
    return h('div', { className: cx('tu-field', props.error && 'tu-field--error', props.disabled && 'tu-field--disabled', props.className) },
      props.label ? h('label', { className: 'tu-field__label', htmlFor: id }, props.label) : null,
      h('div', { className: cx('tu-input', 'tu-input--' + size) },
        props.icon ? h('span', { className: 'tu-input__icon', 'aria-hidden': 'true' }, props.icon) : null,
        h('input', Object.assign({}, rest, {
          id: id,
          type: props.type || 'text',
          className: 'tu-input__control',
          'aria-invalid': props.error ? 'true' : undefined,
          'aria-describedby': message ? hintId : undefined
        })),
        props.suffix ? h('span', { className: 'tu-input__suffix' }, props.suffix) : null
      ),
      message ? h('p', { id: hintId, className: 'tu-field__hint' }, message) : null
    );
  }

  /* ---------- Card ---------- */
  function Card(props) {
    var variant = props.variant || 'surface';
    var padding = props.padding || 'md';
    var Tag = props.as || 'section';
    var hasHeader = props.title || props.eyebrow || props.action;
    var rest = omit(props, ['variant', 'padding', 'as', 'title', 'eyebrow', 'action', 'footer', 'className', 'children']);
    return h(Tag, Object.assign({}, rest, { className: cx('tu-card', 'tu-card--' + variant, 'tu-card--pad-' + padding, props.className) }),
      hasHeader ? h('header', { className: 'tu-card__header' },
        h('div', { className: 'tu-card__heading' },
          props.eyebrow ? h('p', { className: 'tu-card__eyebrow' }, props.eyebrow) : null,
          props.title ? h('h3', { className: 'tu-card__title' }, props.title) : null
        ),
        props.action ? h('div', { className: 'tu-card__action' }, props.action) : null
      ) : null,
      props.children != null ? h('div', { className: 'tu-card__body' }, props.children) : null,
      props.footer ? h('footer', { className: 'tu-card__footer' }, props.footer) : null
    );
  }

  /* ---------- NavBar ---------- */
  function initials(name) {
    return (name || '').split(' ').filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
  }
  function NavBar(props) {
    var items = props.items || [];
    var brandName = props.brandName || 'Trade UI';
    var user = props.user;
    var onSelect = props.onSelect;
    return h('header', { className: cx('tu-nav', props.className) },
      h('a', { className: 'tu-nav__brand', href: props.brandHref || '#', 'aria-label': brandName },
        props.logo || h('span', { className: 'tu-nav__mark', 'aria-hidden': 'true' }, brandName.charAt(0)),
        h('span', { className: 'tu-nav__name' }, brandName)
      ),
      h('nav', { className: 'tu-nav__tabs', 'aria-label': 'Principal' },
        items.map(function (it, i) {
          return h('a', {
            key: it.key || it.label || i,
            href: it.href || '#',
            className: cx('tu-nav__tab', it.active && 'is-active'),
            'aria-current': it.active ? 'page' : undefined,
            onClick: onSelect ? function (e) { e.preventDefault(); onSelect(it, i); } : undefined
          }, it.label);
        })
      ),
      h('div', { className: 'tu-nav__end' },
        props.actions || null,
        user ? h('div', { className: 'tu-nav__user' },
          user.avatar
            ? h('img', { className: 'tu-nav__avatar', src: user.avatar, alt: '' })
            : h('span', { className: 'tu-nav__avatar', 'aria-hidden': 'true' }, initials(user.name)),
          h('span', { className: 'tu-nav__who' },
            h('span', { className: 'tu-nav__username' }, user.name),
            user.email ? h('span', { className: 'tu-nav__email' }, user.email) : null
          )
        ) : null
      )
    );
  }

  var api = { Button: Button, TextInput: TextInput, Card: Card, NavBar: NavBar };
  window.TradeUI = Object.assign(window.TradeUI || {}, api);
})();
