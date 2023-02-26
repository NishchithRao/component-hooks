(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(49387)}])},49387:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return ee}});var t=r(85893),n=r(9008),a=r.n(n),i=r(7160),d=r.n(i),c=r(60559),s=r(67294),l=r(97292),u=(0,l.iv)({display:"inline-flex",gap:"var(--ds-space-050, 4px)","> *":{flex:"1 0 auto"}});function b(e){var o=e.appearance,r=e.children;return(0,l.tZ)("div",{css:u},s.Children.map(s.Children.toArray(r),function(e,r){return e?(0,l.tZ)(s.Fragment,{key:r},o?s.cloneElement(e,{appearance:o}):e):null}))}var h=r(36898),p=r(41664),m=r.n(p),f=r(11781),g=r(87462),v=r(71002),x=r(4942),k=r(91),j=r(23098),C=r(29256),_=r(877),y=r(51198),w={light:"var(--ds-background-disabled, ".concat(_.YI,")"),dark:"var(--ds-background-disabled, ".concat(_.W5,")")},O={light:"var(--ds-background-input, ".concat(_.YI,")"),dark:"var(--ds-background-input, ".concat(_.W5,")")},N={light:"var(--ds-background-input-pressed, ".concat(_.N0,")"),dark:"var(--ds-background-input-pressed, ".concat(_.W5,")")},H={light:"var(--ds-background-input-hovered, ".concat(_.gt,")"),dark:"var(--ds-background-input-hovered, ".concat(_.Dw,")")},P={light:"var(--ds-border-input, ".concat(_.YS,")"),dark:"var(--ds-border-input, ".concat(_.xX,")")},F={light:"var(--ds-border-focused, ".concat(_.vP,")"),dark:"var(--ds-border-focused, ".concat(_.tE,")")},D={light:"transparent",dark:"transparent"},I={light:"var(--ds-text, ".concat(_.xA,")"),dark:"var(--ds-text, ".concat(_.ly,")")},Z={light:"var(--ds-text-disabled, ".concat(_.n2,")"),dark:"var(--ds-text-disabled, ".concat(_.rv,")")},E={light:"var(--ds-text-subtlest, ".concat(_.Y8,")"),dark:"var(--ds-text-subtlest, ".concat(_.rv,")")};function S(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function T(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?S(Object(r),!0).forEach(function(o){(0,x.Z)(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}var R=(0,y.JB)(),M=(0,y.ww)(),W={light:{backgroundColor:w.light,backgroundColorHover:w.light,borderColor:w.light,textColor:Z.light},dark:{backgroundColor:w.dark,backgroundColorHover:w.dark,borderColor:w.dark,textColor:Z.dark}},z={light:{backgroundColor:O.light,backgroundColorHover:H.light,backgroundColorFocus:N.light,borderColor:"var(--ds-border-danger, ".concat(_.$H,")"),borderColorFocus:F.light},dark:{backgroundColor:O.dark,backgroundColorHover:H.dark,backgroundColorFocus:N.dark,borderColor:"var(--ds-border-danger, ".concat(_.$H,")"),borderColorFocus:F.dark}},B={standard:O,subtle:D,none:D},A={standard:N,subtle:N,none:D},G={standard:H,subtle:H,none:D},U={standard:P,subtle:D,none:D},Y={standard:F,subtle:F,none:D},q={standard:P,subtle:{light:"var(--ds-border-input, transparent)",dark:"var(--ds-border-input, transparent)"},none:D},L={xsmall:80,small:160,medium:240,large:320,xlarge:480},X=["appearance","isCompact","isDisabled","isInvalid","isRequired","isReadOnly","isMonospaced","width","elemAfterInput","elemBeforeInput","testId","onFocus","onBlur","onMouseDown","className"];function Q(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function V(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?Q(Object(r),!0).forEach(function(o){(0,x.Z)(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}var $={componentName:"textField",packageName:"@atlaskit/textfield",packageVersion:"5.3.6"},J=(0,s.forwardRef)(function(e,o){var r=e.appearance,t=void 0===r?"standard":r,n=e.isCompact,a=e.isDisabled,i=void 0!==a&&a,d=e.isInvalid,c=void 0!==d&&d,u=e.isRequired,b=e.isReadOnly,h=e.isMonospaced,p=e.width,m=e.elemAfterInput,f=e.elemBeforeInput,x=e.testId,_=e.onFocus,w=e.onBlur,O=e.onMouseDown,N=e.className,H=(0,k.Z)(e,X),P=(0,s.useRef)(null),F=(0,C.m)().mode,D=(0,j.B)(V({fn:function(e){_&&_(e)},action:"focused"},$)),Z=(0,j.B)(V({fn:function(e){w&&w(e)},action:"blurred"},$)),S=(0,s.useCallback)(function(e){"INPUT"!==e.target.tagName&&e.preventDefault(),P&&P.current&&!i&&document.activeElement!==P.current&&P.current.focus(),O&&O(e)},[O,i]),Q=(0,s.useCallback)(function(e){P.current=e,o&&("object"===(0,v.Z)(o)&&(o.current=e),"function"==typeof o&&o(e))},[o]),J=(0,s.useMemo)(function(){var e,o,r;return e=t,o=F,r=p,T(T({alignItems:"center"},{backgroundColor:B[e][o],borderColor:U[e][o],color:I[o],cursor:"text","&:hover:not([data-disabled])":{backgroundColor:G[e][o],borderColor:q[e][o]},"&:focus-within:not([data-disabled])":{backgroundColor:A[e][o],borderColor:Y[e][o]},"&[data-disabled]":T({color:W[o].textColor,cursor:"not-allowed"},"standard"===e&&{backgroundColor:W[o].backgroundColor,borderColor:W[o].borderColor}),"&[data-invalid], &[data-invalid]:hover":{borderColor:z[o].borderColor},"&[data-invalid]:focus-within":{backgroundColor:z[o].backgroundColorFocus,borderColor:z[o].borderColorFocus},"@media screen and (-ms-high-contrast: active)":{"&[data-invalid]:focus-within":{borderColor:"Highlight"},"&:focus-within":{borderColor:"Highlight"},"&[data-disabled]":{borderColor:"GrayText"}}}),{},{borderRadius:3,borderWidth:2,borderStyle:"none"===e?"none":"solid",boxSizing:"border-box",display:"flex",flex:"1 1 100%",fontSize:R,justifyContent:"space-between",maxWidth:r?r in L?L[r]:+r:"100%",overflow:"hidden",transition:"background-color 0.2s ease-in-out, border-color 0.2s ease-in-out",wordWrap:"break-word",verticalAlign:"top",pointerEvents:"auto"})},[t,F,p]),K=(0,s.useMemo)(function(){return{backgroundColor:"transparent",border:0,boxSizing:"border-box",color:"inherit",cursor:"inherit",fontSize:R,minWidth:"0",outline:"none",width:"100%",lineHeight:2.5*M/R,fontFamily:(0,y.I8)(),"&[data-monospaced]":{fontFamily:(0,y.Vj)()},"&[data-compact]":{padding:"".concat(M/2,"px ").concat(M-2,"px"),height:"".concat((3.5*M/R).toFixed(2),"em")},"&:not([data-compact])":{padding:"".concat(M,"px ").concat(M-2,"px"),height:"".concat((4.5*M/R).toFixed(2),"em")},"&[disabled]":{WebkitTextFillColor:W[F].textColor},"&::-ms-clear":{display:"none"},"&:invalid":{boxShadow:"none"},"&::placeholder":{color:E[F],"&:disabled":{color:W[F].textColor}},"@media screen and (-ms-high-contrast: active)":{"&[disabled]":{color:"GrayText"}}}},[F]);return(0,l.tZ)("div",{"data-disabled":i||void 0,"data-invalid":c||void 0,"data-ds--text-field--container":!0,"data-testid":x&&"".concat(x,"-container"),onMouseDown:S,css:J,className:N},f,(0,l.tZ)("input",(0,g.Z)({},H,{"data-compact":void 0!==n&&n||void 0,"data-monospaced":void 0!==h&&h||void 0,"data-ds--text-field--input":!0,"data-testid":x,"aria-invalid":c||void 0,disabled:i,readOnly:void 0!==b&&b,required:void 0!==u&&u,onBlur:Z,onFocus:D,ref:Q,css:K})),m)});J.displayName="Textfield";var K=(0,s.memo)(J),ee=function(){return(0,t.jsxs)("div",{className:d().container,children:[(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:"Component Hooks"}),(0,t.jsx)("meta",{name:"description",content:"Create higly customized components"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(c.Z,{hideMobileMenu:!0}),(0,t.jsxs)("main",{className:d().main,children:[(0,t.jsx)("h1",{className:d().title,children:"Component Hooks"}),(0,t.jsx)("p",{className:d().description,children:"Create fully customized components with complete control of the UI while this library handles the behaviour"}),(0,t.jsxs)(b,{children:[(0,t.jsx)(h.Z,{size:40,appearance:"primary",children:(0,t.jsx)(m(),{href:"/accordion",children:"Get Started"})}),(0,t.jsx)(h.Z,{href:"https://github.com/NishchithRao/component-hooks",target:"_blank",appearance:"link",children:"Github"})]}),(0,t.jsxs)("section",{className:d()["features-section"],children:[(0,t.jsx)("h2",{className:d()["feature-title"],children:"Features"}),(0,t.jsxs)("div",{className:d().features,children:[(0,t.jsx)(f.Z,{title:"Focus on the UI",children:(0,t.jsx)("p",{children:"The UI is entirely dependent on you so you can customize it however you like"})}),(0,t.jsx)(f.Z,{title:"Extremely Flexible",children:(0,t.jsx)("p",{children:"All components are flexible in order to meet the business needs"})}),(0,t.jsx)(f.Z,{title:"Separation of concerns",children:(0,t.jsx)("p",{children:"The logic and UI are entirely separated and hence the components are easier to maintain"})})]})]})]}),(0,t.jsxs)("footer",{className:d().footer,children:[(0,t.jsxs)("div",{className:d()["footer-sections"],children:[(0,t.jsxs)("p",{children:["Designed and developed by",(0,t.jsx)("a",{href:"",target:"_blank",children:"Nishchith Rao"})]}),(0,t.jsxs)("form",{action:"@mailto=nishchitrao5@gmail.com",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("small",{children:"Get In Touch"}),(0,t.jsx)(K,{name:"email",type:"email"})]}),(0,t.jsx)(h.Z,{appearance:"primary",children:"Send a mail"})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("small",{children:" \xa9 2023 Nishchith Rao"})})]})]})}},7160:function(e){e.exports={main:"Home_main__nLjiQ",footer:"Home_footer____T7K","footer-sections":"Home_footer-sections__TMyjo",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",features:"Home_features__5mH2n","feature-title":"Home_feature-title__DFR_S","features-section":"Home_features-section__gHWdW"}}},function(e){e.O(0,[604,123,559,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);