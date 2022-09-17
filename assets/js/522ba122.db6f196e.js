"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1183],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>u});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),m=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=m(a),u=t,c=h["".concat(p,".").concat(u)]||h[u]||d[u]||i;return a?r.createElement(c,l(l({ref:n},s),{},{components:a})):r.createElement(c,l({ref:n},s))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5356:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(7462),t=(a(7294),a(3905));const i={},l="Auftrag",o={unversionedId:"tag-0002/auftrag",id:"tag-0002/auftrag",title:"Auftrag",description:"1 PHP",source:"@site/docs/tag-0002/auftrag.md",sourceDirName:"tag-0002",slug:"/tag-0002/auftrag",permalink:"/lernportfolio-ZZELAV/docs/tag-0002/auftrag",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tag 2",permalink:"/lernportfolio-ZZELAV/docs/tag-0002/"},next:{title:"Reflexion",permalink:"/lernportfolio-ZZELAV/docs/tag-0002/reflexion"}},p={},m=[{value:"1 PHP",id:"1-php",level:2},{value:"1.1 Rechnen mit Variablen",id:"11-rechnen-mit-variablen",level:3},{value:"1.2 $_GET und $_POST",id:"12-_get-und-_post",level:3},{value:"1.3 Arrays",id:"13-arrays",level:3},{value:"2 Programmierauftrag I",id:"2-programmierauftrag-i",level:2}],s={toc:m};function d(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"auftrag"},"Auftrag"),(0,t.kt)("h2",{id:"1-php"},"1 PHP"),(0,t.kt)("h3",{id:"11-rechnen-mit-variablen"},"1.1 Rechnen mit Variablen"),(0,t.kt)("p",null,"In Variablen k\xf6nnen auch Zahlen abgespeichert werden und dadurch kann mit ihnen auch gerechnet werden. Beim Zuweisen einer Zahl an eine Variable d\xfcrfen keine ",(0,t.kt)("inlineCode",{parentName:"p"},'"')," genutzt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$zahl1 = 10;\n$zahl2 = 5;\necho "Zahl1: $zahl1 <br />";\necho "Zahl2: $zahl2";\n?>\n')),(0,t.kt)("p",null,"Hier werden zwei Variablen erstellt mit den Werten ",(0,t.kt)("inlineCode",{parentName:"p"},"10")," und ",(0,t.kt)("inlineCode",{parentName:"p"},"5"),". Diese werden dann mit zwei ",(0,t.kt)("inlineCode",{parentName:"p"},"echo"),"'s ausgegeben."),(0,t.kt)("p",null,"Um Zahlen zu addieren, kann das ",(0,t.kt)("inlineCode",{parentName:"p"},"+"),"-Zeichen genutzt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$zahl1 = 10;\n$zahl2 = 5;\n$ergebnis = $zahl1 + $zahl2;\necho "Ergebnis: $ergebnis";\n?>\n')),(0,t.kt)("p",null,"Wie im ersten Codeabschnitt werden zwei Variablen erstellt. Jetzt wird noch eine dritte erstellt, diese besteht aus den ersten zwei Variablen und wird zusammengerechnet. Als letztes wird die letzte Variable ausgegeben. Somit erh\xe4lt man die Summe der ersten beiden Variablen."),(0,t.kt)("p",null,"Um Zahlen zusammenzurechnen m\xfcssen nicht alle in Variablen gespeichert sein, es kann auch gemischt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$zahl = 1;\n$ergebnis = $zahl + 5;\necho $ergebnis;\n?>\n")),(0,t.kt)("p",null,"Folgend die weiteren Zeichen, die f\xfcr das Rechnen genutzt werden k\xf6nnen:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$zahl1 = 10;\n$zahl2 = 5;\necho $zahl1 + $zahl2; // addieren\necho "<br />";\necho $zahl1 - $zahl2; // subtrahieren\necho "<br />";\necho $zahl1 * $zahl2; // multiplizieren\necho "<br />";\necho $zahl1 / $zahl2; // dividieren\necho "<br />";\necho pow($zahl1,$zahl2); // Zahl1 hoch Zahl2 (10^5)\necho "<br />";\necho sqrt(64); // Wurzel von 64\necho "<br />";\necho 2*$zahl1 + 5*$zahl2 - 3; // Berechnet 2*10 + 5*5 - 3\n?>\n')),(0,t.kt)("p",null,"Variablen k\xf6nnen auch um 1 erh\xf6ht/verkleinert werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$erhoehen = 1;\n$erhoehen++;\necho $erhoehen;\n?>\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$senken = 2;\n$senken--;\necho $senken;\n?>\n")),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Mit dem Zeichen ",(0,t.kt)("inlineCode",{parentName:"p"},"++")," kann eine Zahlenvariable um 1 erh\xf6ht um mit einem ",(0,t.kt)("inlineCode",{parentName:"p"},"--")," verkleinert werden.")),(0,t.kt)("p",null,"Um Variablen um mehr als nur 1 zu erh\xf6hen/verkleinern, kann folgende Schreibweise genutzt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$zahl = 1;\n$zahl = $zahl + 10;\necho $zahl;\n?>\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="F\xfcr faule"',title:'"F\xfcr','faule"':!0},"<?php\n$zahl = 1;\n$zahl += 10;\necho $zahl;\n?>\n")),(0,t.kt)("p",null,"Mit dem Zeichen ",(0,t.kt)("inlineCode",{parentName:"p"},"+=")," kann die bereits existierende Variable um die folgende Zahl erh\xf6ht werden. Das gleiche gilt mit dem Zeichen ",(0,t.kt)("inlineCode",{parentName:"p"},"-=")," um zu verkleinern, ",(0,t.kt)("inlineCode",{parentName:"p"},"*=")," um zu multiplizieren und ",(0,t.kt)("inlineCode",{parentName:"p"},"/=")," um zu dividieren."),(0,t.kt)("p",null,"Es k\xf6nnen auch Fliesskommazahlen gespeichert werden. Mit Fliesskommazahlen kann wie mit ganzen Zahlen gerechnet werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$zahl1 = 2.5;\n$zahl2 = 5.5;\n$ergebnis = $zahl1 * $zahl2;\necho "Ergebnis: $ergebnis";\n?>\n')),(0,t.kt)("admonition",{title:"WICHTIG",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Es muss ein ",(0,t.kt)("inlineCode",{parentName:"p"},".")," als Trennzeichen genutzt werden.")),(0,t.kt)("h3",{id:"12-_get-und-_post"},"1.2 $_GET und $_POST"),(0,t.kt)("p",null,"Um Daten von einer Seite zur n\xe4chsten zu \xfcbertragen, werden die speziellen Variablen ",(0,t.kt)("inlineCode",{parentName:"p"},"$_GET")," und ",(0,t.kt)("inlineCode",{parentName:"p"},"$_POST")," genutzt."),(0,t.kt)("p",null,"Bei der GET-Methode werden die Werte in der URL \xfcbergeben, daher sind sie f\xfcr jeden sichtbar."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$vorname = $_GET['vorname'];\n$nachname = $_GET['nachname'];\necho \"Hallo $vorname $nachname\";\n?\n")),(0,t.kt)("p",null,"Die GET-Variablen in der URL sind daran erkennbar, was nach dem ",(0,t.kt)("inlineCode",{parentName:"p"},"?")," folgt. Die Werte sind in der Key-Value-Schema geschrieben. Mit dem ",(0,t.kt)("inlineCode",{parentName:"p"},"&")," k\xf6nnen mehrere Werte \xfcbergegeben werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-URL",metastring:'title="Beispiel URL"',title:'"Beispiel','URL"':!0},"index.php?name=Peter&id=123\n")),(0,t.kt)("p",null,"Die POST-Methode funktioniert ein bisschen anders, diese wird nicht mittels URL \xfcbergeben, sondern per Formular."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<form action="seite2.php" method="post">\nVorname: <input type="text" name="vorname" /><br />\nNamename: <input type="text" name="nachname" /><br />\n<input type="Submit" value="Absenden" />\n</form>\n')),(0,t.kt)("p",null,"Jedes Feld muss einen eindeutigen Namen haben, damit auf der zweiten Seite die Werte zur\xfcckgeholt werden k\xf6nnen. Ob ",(0,t.kt)("inlineCode",{parentName:"p"},"POST")," oder ",(0,t.kt)("inlineCode",{parentName:"p"},"GET")," genutzt werden, kann am Parameter ",(0,t.kt)("inlineCode",{parentName:"p"},"method")," gesehen werden."),(0,t.kt)("p",null,"Auf der zweiten Seite k\xf6nnen dann die Werte wie folgt zur\xfcckgeholt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$vorname = $_POST["vorname"];\n$nachname = $_POST["nachname"];\necho "Hallo $vorname $nachname";\n?>\n')),(0,t.kt)("p",null,"Hier werden mittels den eindeutigen Namen die Felder zur\xfcckgeholt und die Werte in die Variablen geschrieben."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"GET")," und ",(0,t.kt)("inlineCode",{parentName:"p"},"POST")," k\xf6nnen auch gleichzeitig genutzt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<form action="seite2.php?wochentag=Sonntag" method="post">\nVorname: <input type="text" name="vorname" /><br />\nNamename: <input type="text" name="nachname" /><br />\n<input type="Submit" value="Absenden" />\n</form>\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$vorname = $_POST["vorname"];\n$nachname = $_POST["nachname"];\n$wochentag = $_GET["wochentag"];\n\necho "Hallo $vorname $nachname. Treffen wir uns am $wochentag?";\n?>\n')),(0,t.kt)("p",null,"Der Vor- und Nachname wird mittels POST-Variable geholt und der Wochentag steht in der URL, also per GET-Variable."),(0,t.kt)("admonition",{title:"$_POST oder $_GET?",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"POST sollte genutzt werden, wenn man Eingaben von einem Formular \xfcbergeben m\xf6chte."),(0,t.kt)("p",{parentName:"admonition"},"GET sollte nur genutzt werden, um einfache Informationen zu \xfcbergeben."),(0,t.kt)("p",{parentName:"admonition"},"Die L\xe4nge der URL ist beschr\xe4nkt und daher kann man mit GET auch nicht so viel \xfcbergeben wie mit POST. Bei der GET-Methode kann auch anhand der URL gesehen werden welche Werte \xfcbergeben werden und diese k\xf6nnen sogar anpassen.")),(0,t.kt)("h3",{id:"13-arrays"},"1.3 Arrays"),(0,t.kt)("p",null,"Arrays sind geordnete Liste. In dieser Liste k\xf6nnen Zahlen oder Text gespeichert werden. Arrays sind Variablen die mehrere Werte gleichzeitig speichern kann."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$wochentage = array("Sonntag","Montag","Dienstag",\n"Mittwoch","Donnerstag","Freitag","Samstag");\necho $wochentage[1];\n?>\n')),(0,t.kt)("p",null,"Um ein Array zu erstellen, muss wie bei einer normalen Variable mit ",(0,t.kt)("inlineCode",{parentName:"p"},"$")," eine Variable erstellt werden. Danach kann mit der Funktion ",(0,t.kt)("inlineCode",{parentName:"p"},"array()")," diese Variable mit mehreren Werten gef\xfcllt werden. Das ",(0,t.kt)("inlineCode",{parentName:"p"},"echo")," gibt jetzt den ersten Wochentag aus, was allerdings nicht Sonntag sondern Montag ist, denn das Z\xe4hlen f\xe4ngt schon bei 0 an."),(0,t.kt)("p",null,"Eine weitere Array-Art ist das Assoziative Array. Diese wird genutzt wenn man einen Key zu einem Wert zuweisen m\xf6chte."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$wochentage = array(\n"so" => "Sonntag",\n"mo" => "Montag",\n"di" => "Dienstag",\n"mi" => "Mittwoch",\n"do" => "Donnerstag",\n"fr" => "Freitag",\n"sa" => "Samstag");\n\necho $wochentage["mo"];\n?>\n')),(0,t.kt)("p",null,"Somit gibt dieses Beispiel der Wert vom key ",(0,t.kt)("inlineCode",{parentName:"p"},"mo")," aus. Dies hat den Vorteil, dass man einfacher auf die Werte zugreifen kann. Man muss nur wissen wie der Key heisst."),(0,t.kt)("p",null,"Diese Werte k\xf6nnen auch nachtr\xe4glich bearbeitet werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$wochentage = array(\n"so" => "Sonntag",\n"mo" => "Montag",\n"di" => "Dienstag",\n"mi" => "Mittwoch",\n"do" => "Donnerstag",\n"fr" => "Freitag",\n"sa" => "Samstag");\n\n$wochentage["mo"] = "Monday";\necho $wochentage["mo"];\n?>\n')),(0,t.kt)("p",null,"Auch k\xf6nnen einem Array Werte hinzugef\xfcgt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$mitarbeiter = array("Bob","Peter");\n$mitarbeiter[] = "Lisa";\n\necho $mitarbeiter[2];\n?>\n')),(0,t.kt)("p",null,"Mit der Funktion ",(0,t.kt)("inlineCode",{parentName:"p"},"implode()")," k\xf6nnen Zeichenketten verbunden werden. Somit k\xf6nnen Werte aus einem Array in einen Strings umgewandelt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$namen = array("Paul", "Max", "Hans");\n\necho "Namen per Komma trennen: <br>";\n$namenStr = implode(", ", $namen);\necho $namenStr; \n\necho "<br><br>";\necho "Ein Name pro Zeile: <br>";\necho implode("<br>", $namen);\n')),(0,t.kt)("p",null,"Der erste Parameter definiert, wie es getrennt werden soll und der zweite Parameter definiert welches Array durchsucht werden soll."),(0,t.kt)("p",null,"Mit der Funktion ",(0,t.kt)("inlineCode",{parentName:"p"},"explode()")," k\xf6nnen Strings in Array umgewandelt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$text = "Paul,Max,Hannes";\n$namen = explode(",", $text ); //Konvertierung des Strings in ein Array\necho "<pre>"; var_dump($namen); echo "</pre>"; //Formartierte Ausgabe des Arrays\n\n\n//Ersetze die 1. Person durch neuen Namen\n$namen[1] = "Lisa";\n\n//Verwandel das Array zur\xfcck in einen String\n$text = implode(", ", $namen);\necho $text;\n')),(0,t.kt)("p",null,"Wie auch bei der ",(0,t.kt)("inlineCode",{parentName:"p"},"implode()"),"-Funktion definiert der erste Parameter das Trennzeichen und der zweite die Variable die getrennt werden soll."),(0,t.kt)("p",null,"Arrays k\xf6nnen auch in Arrays gespeichert werden. Diese werden mehrdimensionale Arrays genannt. Die Tiefe ist unbeschr\xe4nkt und wird Dimension genannt. Ein normales Arrays hat eine Dimension und ein Array in einem Array hat daher zwei Dimensionen usw."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$mitarbeiter = array(\n  array("Klaus", "Zabel"),\n  array("Arnie", "Meier"),\n  array("Willi", "Brand")\n);\n\n//Daten ausgeben\necho "Vorname: ".$mitarbeiter[0][0];\necho " Nachname: ".$mitarbeiter[0][1];\n?>\n')),(0,t.kt)("p",null,"Mehrdimensionale Arrays k\xf6nnen auch mit Key-Values-Arrays genutzt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$mitarbeiter = array();\n$mitarbeiter[] = array("Vorname"=>"Klaus",\n                       "Nachname"=>"Zabel");\n\n$mitarbeiter[] = array("Vorname"=>"Arnie",\n                       "Nachname"=>"Meier");\n\n$mitarbeiter[] = array("Vorname"=>"Willi",\n                       "Nachname"=>"Brand");\n\n//Daten ausgeben\necho "Vorname: ".$mitarbeiter[0]["Vorname"];\necho " Nachname: ".$mitarbeiter[0]["Nachname"];\n?>\n')),(0,t.kt)("p",null,"Auch k\xf6nnen Werte nachtr\xe4glich bearbeitet und hinzugef\xfcgt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$mitarbeiter = array();\n$mitarbeiter["Klaus"]["Vorname"] = "Klaus";\n$mitarbeiter["Klaus"]["Nachname"] = "Zabel";\n$mitarbeiter["Klaus"]["Kinder"][] = "Klaus-Junior";\n$mitarbeiter["Klaus"]["Kinder"][] = "Kind2";\n\n//Daten ausgeben\necho "Vorname: ".$mitarbeiter["Klaus"]["Vorname"];\necho " Nachname: ".$mitarbeiter["Klaus"]["Nachname"];\necho "<br> Er hat ";\necho count($mitarbeiter["Klaus"]["Kinder"])." Kinder";\n\n//Ausgabe von Kind1:\n//$mitarbeiter["Klaus"]["Kinder"][0];\n\necho "<br> Kinder: <br>";\nforeach($mitarbeiter["Klaus"]["Kinder"] AS $name) {\n   echo $name."<br>";\n}\n?>\n')),(0,t.kt)("p",null,"Um Arrays durchzusuchen, kann die Funktion ",(0,t.kt)("inlineCode",{parentName:"p"},"in_array()")," genutzt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$mitarbeiter = array("Bob","Peter","Lisa");\n$name = "Bob";\nif(in_array($name,$mitarbeiter)) {\n   echo "Der Name $name ist in dem Array enthalten";\n}\n?>\n')),(0,t.kt)("p",null,"Mit ",(0,t.kt)("inlineCode",{parentName:"p"},"array_key_exists()")," k\xf6nnen auch die Keys gesucht werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$mitarbeiter = array("Bob" => "Baumeister", "Klaus" => "Muster");\n$key = "Bob";\n\nif(array_key_exists($key, $mitarbeiter)) {\n  echo "Das Element $key hat den Wert: ".$mitarbeiter[$key];\n} else {\n  echo "Das Array hat keinen Schl\xfcssel $key";\n}\n?>\n')),(0,t.kt)("p",null,"Um die Elemente eines Arrays zu z\xe4hlen, kann die Funktion ",(0,t.kt)("inlineCode",{parentName:"p"},"count()")," genutzt werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$namen = array("Klaus", "Anna", "Dieter");\n\necho "<br> Durchlaufen des Arrays mittels for-Schleife: ";\nfor($i=0; $i<count($namen); $i++) {\n  echo $namen[$i].", ";\n}\n\necho "<br> Durchlaufen des Arrays mittels foreach-Schleife: ";\nforeach($namen AS $name) {\n  echo $name.", ";\n}\n?>\n')),(0,t.kt)("p",null,"Mit der Funktion ",(0,t.kt)("inlineCode",{parentName:"p"},"sort()")," k\xf6nnen Arrays sortiert werden."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n$namen = array("Klaus", "Dieter", "Anna", "Melissa", "arne");\n\nsort($namen);\necho implode(", ", $namen);\n?>\n')),(0,t.kt)("p",null,"Diese k\xf6nnen mit der Funktion ",(0,t.kt)("inlineCode",{parentName:"p"},"rsort()")," auch r\xfcckw\xe4rts sortiert werden und mit der Funktion ",(0,t.kt)("inlineCode",{parentName:"p"},"shuffle()")," kann ein Array zuf\xe4llig gemischt werden."),(0,t.kt)("h2",{id:"2-programmierauftrag-i"},"2 Programmierauftrag I"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'<?php\necho "<br>PROGRAMMIERAUFTRAG I<br>";\n$array = array(3, 7, 5, 1, 8, 13, 2);\n?>\n<table class="tg">\n   <tbody>\n      <tr>\n         <?php\n         foreach ($array as $value) {\n            echo "<td class=\'tg-0lax\'>" . $value . "</td>";\n         }\n         ?>\n      </tr>\n   </tbody>\n</table>\n?>\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},".tg {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n.tg td {\n    border-color: black;\n    border-style: solid;\n    border-width: 1px;\n    font-family: Arial, sans-serif;\n    font-size: 14px;\n    overflow: hidden;\n    padding: 10px 5px;\n    word-break: normal;\n}\n\n.tg th {\n    border-color: black;\n    border-style: solid;\n    border-width: 1px;\n    font-family: Arial, sans-serif;\n    font-size: 14px;\n    font-weight: normal;\n    overflow: hidden;\n    padding: 10px 5px;\n    word-break: normal;\n}\n\n.tg .tg-0lax {\n    text-align: left;\n    vertical-align: top\n}\n")),(0,t.kt)("p",null,"Als erstes wird mithilfe der ",(0,t.kt)("inlineCode",{parentName:"p"},"array()"),"-Funktion ein neues Array erstellt. Die Variable wird ",(0,t.kt)("inlineCode",{parentName:"p"},"$array")," genannt. Danach wird eine HTML-Tabelle erstellt und der Table-Data (",(0,t.kt)("inlineCode",{parentName:"p"},"<td>"),"), werden per ",(0,t.kt)("inlineCode",{parentName:"p"},"foreach")," die Werte des Arrays eingef\xfcllt."))}d.isMDXComponent=!0}}]);