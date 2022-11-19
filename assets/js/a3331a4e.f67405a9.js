"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Reflexion",l={unversionedId:"tag-0001/reflexion",id:"tag-0001/reflexion",title:"Reflexion",description:"Heute habe ich repetiert was Container-Virtualisierung ist und wof\xfcr Docker verwendet wird.",source:"@site/docs/tag-0001/reflexion.md",sourceDirName:"tag-0001",slug:"/tag-0001/reflexion",permalink:"/lernportfolio-ZZELAV/docs/tag-0001/reflexion",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Auftrag",permalink:"/lernportfolio-ZZELAV/docs/tag-0001/auftrag"},next:{title:"Tag 2",permalink:"/lernportfolio-ZZELAV/docs/tag-0002/"}},p={},c=[],u={toc:c};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reflexion"},"Reflexion"),(0,a.kt)("p",null,"Heute habe ich repetiert was ",(0,a.kt)("a",{parentName:"p",href:"/lernportfolio-ZZELAV/docs/tag-0001/auftrag#11-was-ist-container-virtualisierung"},"Container-Virtualisierung")," ist und wof\xfcr ",(0,a.kt)("a",{parentName:"p",href:"/lernportfolio-ZZELAV/docs/tag-0001/auftrag#12-wof%C3%BCr-wird-docker-verwendet"},"Docker")," verwendet wird."),(0,a.kt)("p",null,"Danach haben wir eine PHP-Einf\xfchrung mit ",(0,a.kt)("a",{parentName:"p",href:"https://www.php-einfach.de/"},"php-einfach.de")," durchgef\xfchrt. Da haben wir die Kapitel ",(0,a.kt)("a",{parentName:"p",href:"/lernportfolio-ZZELAV/docs/tag-0001/auftrag#21-erste-schritte"},"Erste Schritte"),", ",(0,a.kt)("a",{parentName:"p",href:"/lernportfolio-ZZELAV/docs/tag-0001/auftrag#22-text-ausgeben-per-echo"},"Text ausgeben per echo"),", ",(0,a.kt)("a",{parentName:"p",href:"/lernportfolio-ZZELAV/docs/tag-0001/auftrag#23-php-kommentare"},"Kommentare")," und ",(0,a.kt)("a",{parentName:"p",href:"/lernportfolio-ZZELAV/docs/tag-0001/auftrag#24-variablen"},"Variablen")," durchgef\xfchrt."),(0,a.kt)("admonition",{title:"MERKE",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Container nutzen das Host-Betriebssystem und sind voneinander isoliert."),(0,a.kt)("li",{parentName:"ul"},"Mit Docker k\xf6nnen Container verwaltet (starten, stoppen, etc.) werden."),(0,a.kt)("li",{parentName:"ul"},"PHP-Code wird zwischen ",(0,a.kt)("inlineCode",{parentName:"li"},"<?php")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"?>")," geschrieben."),(0,a.kt)("li",{parentName:"ul"},"HTML kann auch in eine PHP-Datei geschrieben werden."))))}f.isMDXComponent=!0}}]);