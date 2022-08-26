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

## 2 Programmierauftrag I