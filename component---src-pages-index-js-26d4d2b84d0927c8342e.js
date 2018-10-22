(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{135:function(e,t,n){e.exports=n(166)},149:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(7),c=n.n(i),l=n(8),o=n.n(l),s=n(9),u=n.n(s),d=n(10),m=n.n(d),p=n(0),h=n.n(p),f=n(3),v=n.n(f),y=n(114),E=n.n(y),g=function(e){function t(e){var n;return r()(this,t),(n=o()(this,u()(t).call(this,e))).element=h.a.createRef(),n}return m()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"highlight",value:function(){this.element.current.querySelectorAll("code").forEach(function(e){return E.a.highlightBlock(e)})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.language;return h.a.createElement("pre",{ref:this.element},h.a.createElement("code",{className:"hljs ".concat(n)},t))}}]),t}(p.Component);g.propTypes={children:v.a.node.isRequired,language:v.a.string},g.defaultProps={language:"javascript"},t.a=g},166:function(e,t,n){n(167),e.exports=n(91).Object.values},167:function(e,t,n){var a=n(96),r=n(146)(!1);a(a.S,"Object",{values:function(e){return r(e)}})},71:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n.n(a),i=n(95),c=n.n(i),l=n(0),o=n.n(l),s=n(81),u=n(3),d=n.n(u),m=n(76),p=n(77),h=n(74),f=n(72),v=n.n(f),y=n(83),E=n.n(y),g=n(135),b=n.n(g),j=n(79),k=n(100),q={active:d.a.any,disabled:d.a.any,header:d.a.node,listItem:d.a.bool,onClick:d.a.func,href:d.a.string,type:d.a.string},O=function(e){function t(){return e.apply(this,arguments)||this}Object(h.a)(t,e);var n=t.prototype;return n.renderHeader=function(e,t){return o.a.isValidElement(e)?Object(l.cloneElement)(e,{className:v()(e.props.className,t)}):o.a.createElement("h4",{className:t},e)},n.render=function(){var e,t=this.props,n=t.active,a=t.disabled,r=t.className,i=t.header,c=t.listItem,l=t.children,s=Object(p.a)(t,["active","disabled","className","header","listItem","children"]),u=Object(j.f)(s),d=u[0],h=u[1],f=Object(m.a)({},Object(j.d)(d),{active:n,disabled:a});return h.href?e="a":h.onClick?(e="button",h.type=h.type||"button"):e=c?"li":"span",h.className=v()(r,f),i?o.a.createElement(e,h,this.renderHeader(i,Object(j.e)(d,"heading")),o.a.createElement("p",{className:Object(j.e)(d,"text")},l)):o.a.createElement(e,h,l)},t}(o.a.Component);O.propTypes=q,O.defaultProps={listItem:!1};var R=Object(j.a)("list-group-item",Object(j.c)(b()(k.d),O)),x=n(148),C={componentClass:E.a};var N=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.componentClass,a=void 0===n?function(e){return e?x.a.some(e,function(e){return e.type!==R||e.props.href||e.props.onClick})?"div":"ul":"div"}(t):n,r=e.className,i=Object(p.a)(e,["children","componentClass","className"]),c=Object(j.f)(i),s=c[0],u=c[1],d=Object(j.d)(s),h="ul"===a&&x.a.every(t,function(e){return e.type===R});return o.a.createElement(a,Object(m.a)({},u,{className:v()(r,d)}),h?x.a.map(t,function(e){return Object(l.cloneElement)(e,{listItem:!0})}):t)},t}(o.a.Component);N.propTypes=C;var w=Object(j.a)("list-group",N),T=n(149),I=n(88),P=function(e){var t=e.header,n=e.children,a=c()(e,["header","children"]);return o.a.createElement(s.Link,r()({},a,{className:"list-group-item"}),o.a.createElement("h4",{className:"list-group-item-heading"},t),o.a.createElement("p",{className:"list-group-item-text"},n))};P.propTypes={header:d.a.string.isRequired,children:d.a.node.isRequired};t.default=function(){return o.a.createElement(I.a,null,o.a.createElement("h4",null,"Installation"),o.a.createElement(T.a,{language:"bash"},"npm install bandit-pouch --save"),o.a.createElement("hr",null),o.a.createElement(w,null,o.a.createElement(P,{header:"UI components",to:"/ui"},"Common React components"),o.a.createElement(P,{header:"Forms",to:"/forms"},"Form input control components"),o.a.createElement(P,{header:"Redux",to:"/redux"},"Redux helper functions"),o.a.createElement(P,{header:"Utils",to:"/utils"},"Custom utility funtions"),o.a.createElement(P,{header:"Component API",to:"/api"},"Component API documentation")))}},81:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(3),c=n.n(i),l=n(73),o=n.n(l);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(82),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(16);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},82:function(e,t,n){var a;e.exports=(a=n(84))&&a.default||a},84:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),i=n(0),c=n.n(i),l=n(3),o=n.n(l),s=n(25),u=n(2),d=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(s.a,r()({location:t,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},85:function(e){e.exports={data:{site:{siteMetadata:{title:"Bandit Pouch",description:"Common React components and utilities"}}}}},86:function(e,t,n){},88:function(e,t,n){"use strict";var a=n(85),r=n(0),i=n.n(r),c=n(3),l=n.n(c),o=n(102),s=n.n(o),u=n(81),d=n(272),m=n(570),p=n(571),h=n(22),f=n.n(h),v=n(95),y=n.n(v),E=n(72),g=n.n(E),b=n(581),j=n(569),k=function(e){var t=e.active,n=e.disabled,a=e.className,r=y()(e,["active","disabled","className"]);return delete r.onSelect,delete r.eventKey,delete r.activeKey,delete r.activeHref,i.a.createElement("li",{role:"presentation",className:g()(a,{active:t,disabled:n})},i.a.createElement(u.Link,f()({},r,{disabled:n})))},q=function(e){var t=e.siteTitle;return i.a.createElement(b.a,null,i.a.createElement(b.a.Header,null,i.a.createElement(b.a.Brand,null,i.a.createElement(u.Link,{to:"/"},t))),i.a.createElement(b.a.Collapse,null,i.a.createElement(j.a,null,i.a.createElement(k,{to:"/ui"},"UI components"),i.a.createElement(k,{to:"/forms"},"Form"),i.a.createElement(k,{to:"/redux"},"Redux"),i.a.createElement(k,{to:"/utils"},"Utilities"),i.a.createElement(k,{to:"/api"},"API"))))};q.propTypes={siteTitle:l.a.string.isRequired};var O=q,R=(n(103),n(104),n(105),n(86),function(e){var t=e.children,n=e.data.site,a=(void 0===n?{}:n).siteMetadata,r=void 0===a?{}:a;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:r.title,meta:[{name:"description",content:r.description},{name:"keywords",content:"kayak, react, redux"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(O,{siteTitle:r.title}),i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,{xs:12},t))))});R.propTypes={data:l.a.object.isRequired,children:l.a.node.isRequired};var x=function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"2779630680",render:function(e){return i.a.createElement(R,{data:e},t)},data:a})};x.propTypes={children:l.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-index-js-26d4d2b84d0927c8342e.js.map