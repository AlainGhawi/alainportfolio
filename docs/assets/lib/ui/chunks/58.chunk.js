(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1740:function(e,t,a){"use strict";a.r(t);a(99),a(7),a(84),a(18),a(11),a(13),a(12),a(8),a(9),a(10),a(15),a(14),a(20),a(16);var n=a(17),o=a.n(n),i=a(248),l=a(21),r=[{displayMode:"Single",pageTransition:"default",layout:"single"},{displayMode:"Continuous",pageTransition:"continuous",layout:"single"},{displayMode:"Facing",pageTransition:"default",layout:"double"},{displayMode:"FacingContinuous",pageTransition:"continuous",layout:"double"},{displayMode:"CoverFacing",pageTransition:"default",layout:"cover"},{displayMode:"Cover",pageTransition:"continuous",layout:"cover"}],c=a(1),u=a(0),s=a.n(u),m=a(366),d=a(6),p=a(3),g=a(249),E=a(51),v=a(422),y=a(2),f=a(440),w=a(5),C=a(39);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,o,i,l,r=[],c=!0,u=!1;try{if(i=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(n=i.call(a)).done)&&(r.push(n.value),r.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(u)throw o}}return r}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var T=function(){var e,t=b(Object(m.a)(),1)[0],a=Object(d.f)(),n=b(Object(d.e)((function(e){return[p.a.getTotalPages(e),p.a.getDisplayMode(e),p.a.isElementDisabled(e,w.a.VIEW_CONTROLS_OVERLAY),p.a.isReaderMode(e),p.a.isMultiViewerMode(e),p.a.isFullScreen(e),p.a.getActiveDocumentViewerKey(e),p.a.getIsMultiTab(e)]})),8),u=n[0],N=n[1],T=n[2],h=n[3],k=n[4],M=n[5],O=n[6],A=n[7],D=u<1e3,j=c.a.getDocumentViewer(),B=null==j?void 0:j.getDisplayModeManager();B&&B.isVirtualDisplayEnabled()&&(D=!0);var F,S,V=!C.g&&!A,L=function(e,t){var n=function(){var a=r.find((function(a){return a.pageTransition===e&&a.layout===t}));c.a.setDisplayMode(a.displayMode)};h?(Object(v.b)(a),setTimeout((function(){n()}))):n()};if(T)return null;var I=r.find((function(e){return e.displayMode===N}));I&&(F=I.pageTransition,S=I.layout);var P=c.a.isFullPDFEnabled()&&"pdf"===(null===(e=c.a.getDocument())||void 0===e?void 0:e.getType());return s.a.createElement(g.a,{menu:w.a.VIEW_CONTROLS_OVERLAY,trigger:w.a.VIEW_CONTROLS_OVERLAY_BUTTON,ariaLabel:t("component.viewControlsOverlay")},D&&s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{dataElement:"pageTransitionHeader",className:"type"},t("option.displayMode.pageTransition")),s.a.createElement(E.a,{className:o()({row:!0,active:"continuous"===F&&!h}),onClick:function(){return L("continuous",S)},dataElement:"continuousPageTransitionButton"},s.a.createElement(l.a,{title:"option.pageTransition.continuous",img:"icon-header-page-manipulation-page-transition-continuous-page-line",isActive:"continuous"===F&&!h,role:"option"}),s.a.createElement("div",{className:"title"},t("option.pageTransition.continuous"))),s.a.createElement(E.a,{className:o()({row:!0,active:"default"===F&&!h}),onClick:function(){return L("default",S)},dataElement:"defaultPageTransitionButton"},s.a.createElement(l.a,{title:"option.pageTransition.default",img:"icon-header-page-manipulation-page-transition-page-by-page-line",isActive:"default"===F&&!h,role:"option"}),s.a.createElement("div",{className:"title"},t("option.pageTransition.default"))),P&&s.a.createElement(E.a,{className:o()({row:!0,active:h}),onClick:function(){h||Object(v.a)(a)},dataElement:"readerPageTransitionButton"},s.a.createElement(l.a,{title:"option.pageTransition.reader",img:"icon-header-page-manipulation-page-transition-reader",isActive:h,role:"option"}),s.a.createElement("div",{className:"title"},t("option.pageTransition.reader"))),!h&&s.a.createElement(E.a,{dataElement:"viewControlsDivider1",className:"divider"})),!h&&s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{dataElement:"rotateHeader",className:"type"},t("action.rotate")),s.a.createElement(E.a,{className:"row",onClick:function(){return c.a.rotateClockwise(O)},dataElement:"rotateClockwiseButton"},s.a.createElement(i.a,{title:"action.rotateClockwise",img:"icon-header-page-manipulation-page-rotation-clockwise-line",role:"option"}),s.a.createElement("div",{className:"title"},t("action.rotateClockwise"))),s.a.createElement(E.a,{className:"row",onClick:function(){return c.a.rotateCounterClockwise(O)},dataElement:"rotateCounterClockwiseButton"},s.a.createElement(i.a,{title:"action.rotateCounterClockwise",img:"icon-header-page-manipulation-page-rotation-counterclockwise-line",role:"option"}),s.a.createElement("div",{className:"title"},t("action.rotateCounterClockwise"))),s.a.createElement(E.a,{dataElement:"viewControlsDivider2",className:"divider"}),s.a.createElement(E.a,{dataElement:"layoutHeader",className:"type"},t("option.displayMode.layout")),s.a.createElement(E.a,{className:o()({row:!0,active:"single"===S}),onClick:function(){return L(F,"single")},dataElement:"singleLayoutButton"},s.a.createElement(l.a,{title:"option.layout.single",img:"icon-header-page-manipulation-page-layout-single-page-line",isActive:"single"===S,role:"option"}),s.a.createElement("div",{className:"title"},t("option.layout.single"))),s.a.createElement(E.a,{className:o()({row:!0,active:"double"===S}),onClick:function(){return L(F,"double")},dataElement:"doubleLayoutButton"},s.a.createElement(l.a,{title:"option.layout.double",img:"icon-header-page-manipulation-page-layout-double-page-line",isActive:"double"===S,role:"option"}),s.a.createElement("div",{className:"title"},t("option.layout.double"))),s.a.createElement(E.a,{className:o()({row:!0,active:"cover"===S}),onClick:function(){return L(F,"cover")},dataElement:"coverLayoutButton"},s.a.createElement(l.a,{title:"option.layout.cover",img:"icon-header-page-manipulation-page-layout-cover-line",isActive:"cover"===S,role:"option"}),s.a.createElement("div",{className:"title"},t("option.layout.cover"))),V&&s.a.createElement(E.a,{className:o()({row:!0,active:k}),onClick:function(){a.dispatch(y.a.setIsMultiViewerMode(!k))},dataElement:"toggleCompareModeButton"},s.a.createElement(l.a,{title:"action.comparePages",img:"icon-header-compare",isActive:k,role:"option"}),s.a.createElement("div",{className:"title"},t("action.comparePages")))),C.i&&!C.j?null:s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{dataElement:"viewControlsDivider3",className:"divider"}),s.a.createElement(E.a,{className:"row",onClick:f.a,dataElement:"fullScreenButton"},s.a.createElement(l.a,{img:M?"icon-header-full-screen-exit":"icon-header-full-screen",role:"option"}),s.a.createElement("div",{className:"title"},t(M?"action.exitFullscreen":"action.enterFullscreen")))))};t.default=T}}]);
//# sourceMappingURL=58.chunk.js.map