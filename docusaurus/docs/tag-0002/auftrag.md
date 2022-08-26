# Auftrag

## 1 PHP

### 1.1 Rechnen mit Variablen

In Variablen können auch Zahlen abgespeichert werden und dadurch kann mit ihnen auch gerechnet werden. Beim Zuweisen einer Zahl an eine Variable dürfen keine `"` genutzt werden.

```php
<?php
$zahl1 = 10;
$zahl2 = 5;
echo "Zahl1: $zahl1 <br />";
echo "Zahl2: $zahl2";
?>
```

Hier werden zwei Variablen erstellt mit den Werten `10` und `5`. Diese werden dann mit zwei `echo`'s ausgegeben.

Um Zahlen zu addieren, kann das `+`-Zeichen genutzt werden.

```php
<?php
$zahl1 = 10;
$zahl2 = 5;
$ergebnis = $zahl1 + $zahl2;
echo "Ergebnis: $ergebnis";
?>
```

Wie im ersten Codeabschnitt werden zwei Variablen erstellt. Jetzt wird noch eine dritte erstellt, diese besteht aus den ersten zwei Variablen und wird zusammengerechnet. Als letztes wird die letzte Variable ausgegeben. Somit erhält man die Summe der ersten beiden Variablen.

Um Zahlen zusammenzurechnen müssen nicht alle in Variablen gespeichert sein, es kann auch gemischt werden.

```php
<?php
$zahl = 1;
$ergebnis = $zahl + 5;
echo $ergebnis;
?>
```

Folgend die weiteren Zeichen, die für das Rechnen genutzt werden können:

```php
<?php
$zahl1 = 10;
$zahl2 = 5;
echo $zahl1 + $zahl2; // addieren
echo "<br />";
echo $zahl1 - $zahl2; // subtrahieren
echo "<br />";
echo $zahl1 * $zahl2; // multiplizieren
echo "<br />";
echo $zahl1 / $zahl2; // dividieren
echo "<br />";
echo pow($zahl1,$zahl2); // Zahl1 hoch Zahl2 (10^5)
echo "<br />";
echo sqrt(64); // Wurzel von 64
echo "<br />";
echo 2*$zahl1 + 5*$zahl2 - 3; // Berechnet 2*10 + 5*5 - 3
?>
```

Variablen können auch um 1 erhöht/verkleinert werden.

```php
<?php
$erhoehen = 1;
$erhoehen++;
echo $erhoehen;
?>
```

```php
<?php
$senken = 2;
$senken--;
echo $senken;
?>
```

:::info
Mit dem Zeichen `++` kann eine Zahlenvariable um 1 erhöht um mit einem `--` verkleinert werden.
:::

Um Variablen um mehr als nur 1 zu erhöhen/verkleinern, kann folgende Schreibweise genutzt werden.

```php
<?php
$zahl = 1;
$zahl = $zahl + 10;
echo $zahl;
?>
```

```php title="Für faule"
<?php
$zahl = 1;
$zahl += 10;
echo $zahl;
?>
```

Mit dem Zeichen `+=` kann die bereits existierende Variable um die folgende Zahl erhöht werden. Das gleiche gilt mit dem Zeichen `-=` um zu verkleinern, `*=` um zu multiplizieren und `/=` um zu dividieren.

Es können auch Fliesskommazahlen gespeichert werden. Mit Fliesskommazahlen kann wie mit ganzen Zahlen gerechnet werden.

```php
<?php
$zahl1 = 2.5;
$zahl2 = 5.5;
$ergebnis = $zahl1 * $zahl2;
echo "Ergebnis: $ergebnis";
?>
```

:::caution WICHTIG
Es muss ein `.` als Trennzeichen genutzt werden.
:::

### 1.2 $_GET und $_POST

Um Daten von einer Seite zur nächsten zu übertragen, werden die speziellen Variablen `$_GET` und `$_POST` genutzt.

Bei der GET-Methode werden die Werte in der URL übergeben, daher sind sie für jeden sichtbar.

```php
<?php
$vorname = $_GET['vorname'];
$nachname = $_GET['nachname'];
echo "Hallo $vorname $nachname";
?
```

Die GET-Variablen in der URL sind daran erkennbar, was nach dem `?` folgt. Die Werte sind in der Key-Value-Schema geschrieben. Mit dem `&` können mehrere Werte übergegeben werden.

```URL title="Beispiel URL"
index.php?name=Peter&id=123
```

Die POST-Methode funktioniert ein bisschen anders, diese wird nicht mittels URL übergeben, sondern per Formular.


```php
<form action="seite2.php" method="post">
Vorname: <input type="text" name="vorname" /><br />
Namename: <input type="text" name="nachname" /><br />
<input type="Submit" value="Absenden" />
</form>
```

Jedes Feld muss einen eindeutigen Namen haben, damit auf der zweiten Seite die Werte zurückgeholt werden können. Ob `POST` oder `GET` genutzt werden, kann am Parameter `method` gesehen werden.

Auf der zweiten Seite können dann die Werte wie folgt zurückgeholt werden.

```php
<?php
$vorname = $_POST["vorname"];
$nachname = $_POST["nachname"];
echo "Hallo $vorname $nachname";
?>
```

Hier werden mittels den eindeutigen Namen die Felder zurückgeholt und die Werte in die Variablen geschrieben.

`GET` und `POST` können auch gleichzeitig genutzt werden.

```php
<form action="seite2.php?wochentag=Sonntag" method="post">
Vorname: <input type="text" name="vorname" /><br />
Namename: <input type="text" name="nachname" /><br />
<input type="Submit" value="Absenden" />
</form>
```

```php
<?php
$vorname = $_POST["vorname"];
$nachname = $_POST["nachname"];
$wochentag = $_GET["wochentag"];

echo "Hallo $vorname $nachname. Treffen wir uns am $wochentag?";
?>
```

Der Vor- und Nachname wird mittels POST-Variable geholt und der Wochentag steht in der URL, also per GET-Variable.

:::note $_POST oder $_GET?
POST sollte genutzt werden, wenn man Eingaben von einem Formular übergeben möchte.

GET sollte nur genutzt werden, um einfache Informationen zu übergeben.

Die Länge der URL ist beschränkt und daher kann man mit GET auch nicht so viel übergeben wie mit POST. Bei der GET-Methode kann auch anhand der URL gesehen werden welche Werte übergeben werden und diese können sogar anpassen.
:::

### 1.3 Arrays

Arrays sind geordnete Liste. In dieser Liste können Zahlen oder Text gespeichert werden. Arrays sind Variablen die mehrere Werte gleichzeitig speichern kann.

```php
<?php
$wochentage = array("Sonntag","Montag","Dienstag",
"Mittwoch","Donnerstag","Freitag","Samstag");
echo $wochentage[1];
?>
```

Um ein Array zu erstellen, muss wie bei einer normalen Variable mit `$` eine Variable erstellt werden. Danach kann mit der Funktion `array()` diese Variable mit mehreren Werten gefüllt werden. Das `echo` gibt jetzt den ersten Wochentag aus, was allerdings nicht Sonntag sondern Montag ist, denn das Zählen fängt schon bei 0 an.

Eine weitere Array-Art ist das Assoziative Array. Diese wird genutzt wenn man einen Key zu einem Wert zuweisen möchte.

```php
<?php
$wochentage = array(
"so" => "Sonntag",
"mo" => "Montag",
"di" => "Dienstag",
"mi" => "Mittwoch",
"do" => "Donnerstag",
"fr" => "Freitag",
"sa" => "Samstag");

echo $wochentage["mo"];
?>
```

Somit gibt dieses Beispiel der Wert vom key `mo` aus. Dies hat den Vorteil, dass man einfacher auf die Werte zugreifen kann. Man muss nur wissen wie der Key heisst.

Diese Werte können auch nachträglich bearbeitet werden.

```php
<?php
$wochentage = array(
"so" => "Sonntag",
"mo" => "Montag",
"di" => "Dienstag",
"mi" => "Mittwoch",
"do" => "Donnerstag",
"fr" => "Freitag",
"sa" => "Samstag");

$wochentage["mo"] = "Monday";
echo $wochentage["mo"];
?>
```

Auch können einem Array Werte hinzugefügt werden.

```php
<?php
$mitarbeiter = array("Bob","Peter");
$mitarbeiter[] = "Lisa";

echo $mitarbeiter[2];
?>
```

Mit der Funktion `implode()` können Zeichenketten verbunden werden. Somit können Werte aus einem Array in einen Strings umgewandelt werden.

```php
<?php
$namen = array("Paul", "Max", "Hans");

echo "Namen per Komma trennen: <br>";
$namenStr = implode(", ", $namen);
echo $namenStr; 

echo "<br><br>";
echo "Ein Name pro Zeile: <br>";
echo implode("<br>", $namen);
```

Der erste Parameter definiert, wie es getrennt werden soll und der zweite Parameter definiert welches Array durchsucht werden soll.

Mit der Funktion `explode()` können Strings in Array umgewandelt werden.

```php
<?php
$text = "Paul,Max,Hannes";
$namen = explode(",", $text ); //Konvertierung des Strings in ein Array
echo "<pre>"; var_dump($namen); echo "</pre>"; //Formartierte Ausgabe des Arrays


//Ersetze die 1. Person durch neuen Namen
$namen[1] = "Lisa";

//Verwandel das Array zurück in einen String
$text = implode(", ", $namen);
echo $text;
```

Wie auch bei der `implode()`-Funktion definiert der erste Parameter das Trennzeichen und der zweite die Variable die getrennt werden soll.

Arrays können auch in Arrays gespeichert werden. Diese werden mehrdimensionale Arrays genannt. Die Tiefe ist unbeschränkt und wird Dimension genannt. Ein normales Arrays hat eine Dimension und ein Array in einem Array hat daher zwei Dimensionen usw.

```php
<?php
$mitarbeiter = array(
  array("Klaus", "Zabel"),
  array("Arnie", "Meier"),
  array("Willi", "Brand")
);

//Daten ausgeben
echo "Vorname: ".$mitarbeiter[0][0];
echo " Nachname: ".$mitarbeiter[0][1];
?>
```

Mehrdimensionale Arrays können auch mit Key-Values-Arrays genutzt werden.

```php
<?php
$mitarbeiter = array();
$mitarbeiter[] = array("Vorname"=>"Klaus",
                       "Nachname"=>"Zabel");

$mitarbeiter[] = array("Vorname"=>"Arnie",
                       "Nachname"=>"Meier");

$mitarbeiter[] = array("Vorname"=>"Willi",
                       "Nachname"=>"Brand");

//Daten ausgeben
echo "Vorname: ".$mitarbeiter[0]["Vorname"];
echo " Nachname: ".$mitarbeiter[0]["Nachname"];
?>
```

Auch können Werte nachträglich bearbeitet und hinzugefügt werden.

```php
<?php
$mitarbeiter = array();
$mitarbeiter["Klaus"]["Vorname"] = "Klaus";
$mitarbeiter["Klaus"]["Nachname"] = "Zabel";
$mitarbeiter["Klaus"]["Kinder"][] = "Klaus-Junior";
$mitarbeiter["Klaus"]["Kinder"][] = "Kind2";

//Daten ausgeben
echo "Vorname: ".$mitarbeiter["Klaus"]["Vorname"];
echo " Nachname: ".$mitarbeiter["Klaus"]["Nachname"];
echo "<br> Er hat ";
echo count($mitarbeiter["Klaus"]["Kinder"])." Kinder";

//Ausgabe von Kind1:
//$mitarbeiter["Klaus"]["Kinder"][0];

echo "<br> Kinder: <br>";
foreach($mitarbeiter["Klaus"]["Kinder"] AS $name) {
   echo $name."<br>";
}
?>
```

Um Arrays durchzusuchen, kann die Funktion `in_array()` genutzt werden.

```php
<?php
$mitarbeiter = array("Bob","Peter","Lisa");
$name = "Bob";
if(in_array($name,$mitarbeiter)) {
   echo "Der Name $name ist in dem Array enthalten";
}
?>
```

Mit `array_key_exists()` können auch die Keys gesucht werden.

```php
<?php
$mitarbeiter = array("Bob" => "Baumeister", "Klaus" => "Muster");
$key = "Bob";

if(array_key_exists($key, $mitarbeiter)) {
  echo "Das Element $key hat den Wert: ".$mitarbeiter[$key];
} else {
  echo "Das Array hat keinen Schlüssel $key";
}
?>
```

Um die Elemente eines Arrays zu zählen, kann die Funktion `count()` genutzt werden.

```php
<?php
$namen = array("Klaus", "Anna", "Dieter");

echo "<br> Durchlaufen des Arrays mittels for-Schleife: ";
for($i=0; $i<count($namen); $i++) {
  echo $namen[$i].", ";
}

echo "<br> Durchlaufen des Arrays mittels foreach-Schleife: ";
foreach($namen AS $name) {
  echo $name.", ";
}
?>
```

Mit der Funktion `sort()` können Arrays sortiert werden.

```php
<?php
$namen = array("Klaus", "Dieter", "Anna", "Melissa", "arne");

sort($namen);
echo implode(", ", $namen);
?>
```

Diese können mit der Funktion `rsort()` auch rückwärts sortiert werden und mit der Funktion `shuffle()` kann ein Array zufällig gemischt werden.

## 2 Programmierauftrag I