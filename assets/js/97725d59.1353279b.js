"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9866],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),p=i,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const a={},o="LB2 Concept Map",l={unversionedId:"lb2_concept_map",id:"lb2_concept_map",title:"LB2 Concept Map",description:"",source:"@site/appendix/lb2_concept_map.md",sourceDirName:".",slug:"/lb2_concept_map",permalink:"/lernportfolio-ZZELAV/appendix/lb2_concept_map",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initscripts SQL",permalink:"/lernportfolio-ZZELAV/appendix/initscripts_sql"},next:{title:"PlantUML CSR",permalink:"/lernportfolio-ZZELAV/appendix/plantuml_csr"}},s={},d=[],c={toc:d};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lb2-concept-map"},"LB2 Concept Map"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plantuml"},'@startuml\n\n\' ### Vorgegebene Begriffe ###\n(SSR)\n(CSR)\n(Template-Engine) as (TE)\n(Use-Case) as (UC)\n(Aktoren)\n(Funktionale Anforderung) as (FA)\n(Testszenario) as (TS)\n(Testfall) as (TF)\n\n\' ### Hilfsbegriffe ###\n(Rendering)\n(Twig)\n\n\' ### Map ###\n(Rendering) <---\x3e (SSR)\n(Rendering) <---\x3e (CSR)\n(SSR) <---\x3e (CSR)\n\n(FA) <---\x3e (TS)\n(FA) <---\x3e (TF)\n(FA) <---\x3e (UC)\n(FA) <---\x3e (Aktoren)\n(TF) <---\x3e (TS)\n\n(TE) <---\x3e (Twig)\n\n\' ### Notes ###\nnote right of (Rendering)\n  Code in eine Webseite umwandeln\nend note\n\nnote right of (SSR)\n  Server-Side Rendering, die Webseite wird auf dem\n  Server gerendert.\n  Z.B. PHP, wird auf dem Server\n  kompiliert und anschliessend als HTML-Datei\n  an den Client geschickt.\nend note\n\nnote right of (CSR)\n  Client-Side Rendering, die Webseite wird auf dem\n  Client gerendert.\n  Es wird eine einzige HTML-Datei geschickt, und mit JavaScript\n  gerendert.\nend note\n\nnote right of (TE)\n  Eine Template-Engine ist eine Vorlagen-Datei/Struktur,\n  die Platzhalter mit Inhalt ersetzen kann.\nend note\n\nnote right of (Twig)\n  Template-Engine f\xfcr PHP\nend note\n\nnote right of (FA)\n  Eine Eigenschaft/Leistung die\n  ein Programm erreichen muss.\nend note\n\nnote right of (Aktoren)\n  Eine Rolle in einem Programm.\n  Jede Rolle hat andere Funktionen und Berechtigungen.\n  Z.B. kann der Aktor "Admin" in einem Programm\n  andere Aktoren und das Programm verwalten.\n  Ein Aktor "Gast" k\xf6nnte nur Daten lesen.\nend note\n\nnote right of (TF)\n  Ein Test auf Funktionen in einem Programm.\n  Z.B. kann sich ein User anmelden.\nend note\n\nnote right of (TS)\n  Eine Kombination aus mehreren Testf\xe4llen.\n  Z.B. User kann neuen Auftrag erfassen.\n  Daf\xfcr braucht es den Testfall "User kann sich anmelden"\n  und "Auftrag erfassen erfolgreich".\nend note\n\nnote right of (UC)\n  Use-Case ist eine Beschreibung,\n  was ein Programm machen soll.\nend note\n\n@enduml\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plantuml"},'@startuml\n\n\' ### Vorgegebene Begriffe ###\n(if-Funktion bei Twig) as (if)\n(Mocking von Daten) as (mock)\n(Rendern von View) as (rendV)\n(empty-Funktion) as (empFunc)\n(sanitizen von Daten) as (san)\n\n\' ### Hilfsbegriffe ###\n(Twig)\n(PHP)\n(Model)\n\n\' ### Map ###\n(Twig) <---\x3e (if) : {% if %}\n(Twig) <---\x3e (rendV) : Mit Twig eine View (Template) erstellen\n\n(PHP) <---\x3e (mock) : Fakedaten mittels Array erstellen\n(PHP) <---\x3e (empFunc) : \xfcberpr\xfcfen ob Variable leer ist\n(PHP) <---\x3e (san) : Mit FILTER_SANITIZE_* Eingabe reinigen\n\n(rendV) <---\x3e (mock) : Die Mocking-Daten in die View laden\n\n(mock) <---\x3e (Model) : Die Daten werden im Model erstellt\n\n(empFunc) <---\x3e (if) : empty() in if nutzen um zu \xfcberpr\xfcfen\n\n\' ### Notes ###\nnote bottom of (if)\n  In Twig k\xf6nnen if-Funktionen\n  wie im PHP geschrieben werden.\n  Somit kann bei einem True-Statement\n  eine andere Ausgabe angezeigt\n  werden, als bei einem False-Statement.\nend note\n\nnote right of (mock)\n  Mocking ist das vort\xe4uschen von Daten.\n  Somit kann beim entwickeln von\n  einem Programm ohne komplexe Datenbank\n  gearbeitet werden.\nend note\n\nnote right of (rendV)\n  Die View ist die Benutzer\xf6berfl\xe4che,\n  welche der Enduser zu sehen bekommt.\n  Diese wird bei Twig in HTML geschrieben.\n  Mithilfe vom Controller und des Models\n  werden dann die Daten aus einer Datenbank\n  in die View geladen.\nend note\n\nnote right of (empFunc)\n  die empty-Funktion \xfcberpr\xfcft ob eine Variable leer ist.\n  Trifft dies zu, wird true zur\xfcckgegeben.\n  Z.B. kann \xfcberpr\xfcft werden ob in der Variable\n  $username etwas enthalten ist.\n  \n  $username = "";\n  if (empty($username)) { // username leer => true\n    echo "Username is empty";\n  }\nend note\n\nnote right of (san)\n  Mit dem Sanitizen k\xf6nnen mit Filtern Inputs\n  bereinigt werden. Das sanitizen ist wichtig f\xfcr\n  die Sicherheit, z.B. f\xfcr eine Datenbank (SQL-Injection).\n  Somit wird aus "<h1>Hello World</h1>"\n  mit dem Filter FILTER_SANITIZE_STRING\n  "Hello World".\n  \n  <?php\n  $str = "<h1>Hello World!</h1>";\n  $newstr = filter_var($str, FILTER_SANITIZE_STRING);\n  echo $newstr; // Gibt "Hello World" aus\n  ?>\nend note\n\n@enduml\n')))}m.isMDXComponent=!0}}]);