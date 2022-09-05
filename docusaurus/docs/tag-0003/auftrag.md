# Auftrag

## 1 PHP Tutorial

### 1.1 if-Anweisungen

Mit `if`'s können Bedingungen überpüft werden. Trifft diese Bedingung zu, können Anweisungen ausgeführt werden.

```php
<?php
if(Bedingung)
   {
   Anweisung
   }
?>
```

Die Bedingung wird in Klammern direkt nach dem `if` geschrieben. In den geschwungenen Klammern wird die auszuführende Anweisung geschrieben. Diese Anweisung wird ausgeführt, wenn die Bedingung zutrifft (`true`).

```php
<?php
$user = "Nils";

if($user == "Nils") 
   {
   echo "Hallo Nils";
   }
?>
```

Diese Bedingung überprüft, ob die Variable `$user` den Wert `Nils` beinhaltet. Da dies der Fall ist, wird die Anweisung `echo "Hallo Nils";` ausgeführt.

```php
<?php
$user = "Nils";

if($user == "Hans") 
   {
   echo "Hallo Hans";
   }
?>
```

Hier wird die Variable `$user` auf den Wert `Hans` überprüft. Diese Bedingung trifft nicht zu (`false`), dadurch wird die Anweisung nicht ausgeführt.

Möchte man eine Ausgabe, wenn eine Bedingung nicht zutrifft kann die `if-else`-Anweisung genutzt werden.

```php
<?php
if(Bedingung) 
   {
   Anweisung
   } 
else 
   {
   Anweisung
   }
?>
```

Der `else`-Teil wird dann ausgeführt, wenn die Bedingung `false` ist.

```php
<?php
$user = "Klaus";

if($user == "Nils") 
   {
   echo "Hallo Nils";
   } 
else 
   {
   echo "Du bist nicht Nils!";
   }
?>
```

Hier wird wieder auf `Nils` überprüft. Dies ist nicht zutreffend, daher wird der `else`-Teil ausgeführt, also `echo "Du bist nicht Nils!";`.

if-Anweisungen können auch verschachtelt werden.

```php
<?php
$vorname = "Nils";
$nachname = "Reimers";


if($vorname=="Nils")
   {
   echo "Hallo Nils";

   if($nachname=="Reimers")
      {
      echo "Reimers";
      }
   }
else
   {
   echo "Du bist nicht Nils";
   }
?>
```

Hier wird als erstes überprüft, ob `$vorname` `Nils` ist. Trifft dies zu wird `Hallo Nils` ausgegeben und eine weitere Bedingung überprüft. Diese prüft, ob `$nachname` `Reimers` ist. Trifft dies auch noch zu wird dazu noch `Reimers` ausgegeben. Trifft die erste Bedingung nicht zu (`$vorname=="Nils"`), wird `Du bist nicht Nils` ausgegeben.

Mit einem `else if` können nach einem `if` auch auf weitere Bedingung überprüft werden.

```php
<?php
$user = "Nils";

if($user=="Nils")
   {
   echo "Hallo Nils";
   }
else if($user == "Reimers")
   {
   echo "Hallo Herr Reimers";
   }
else if($user == "Meier")
   {
   echo "Hallo Herr Meier";
   }
else
   {
   echo "Du bist weder Herr Reimers noch Herr Meier";
   }

?>
```

Im ersten `else if` wird überprüft, ob `$user` `Reimers` ist. Trifft dies nicht zu geht es weiter zum zweiten `else if`.

Es kann auch überprüft werden, ob eine Bedingung nicht zutrifft.

```php
<?php
$user = "Nils";

if($user != "Nils")
   {
   echo "Du bist nicht Nils";
   }
else
   {
   echo "Hallo Nils";
   }
?>
```

Hier wird übeprüft, ob `$user` **nicht** `Nils` ist.

### 1.2 Vergleichsoperatoren

Mit Vergleichsoperatoren können Werte und Variablen verglichen werden.

| Operator | Name | Erläuterung |
|---|---|---|
| `$a == $b` | Gleich | Dieser Vergleich ist erfüllt, falls `$a` und `$b` den selben Wert beinhaltet. Sind die Typen der Variablen verschieden, so werden die konvertiert. |
| `$a === $b` | Identisch | Dieser Vergleich ist erfüllt, falls `$a` und `$b` den selben Typ und den Inhalt besitzen. Wäre ein Wert vom Typ int und der andere from Typ String, so würde false zurück gegeben werden. |
| `$a != $b` | Ungleich | Dieser Vergleich ist erfüllt, falls `$a` und `$b` nicht den selben Wert beinhaltet. Sind die Typen der Variablen verschieden, so werden die konvertiert. |
| `$a !== $b` | Nicht identisch | Dieser Vergleich ist erfüllt, falls `$a` und `$b` einen unterschiedlichen Typ haben oder einen unterschiedlichen Wert. |
| `$a < $b` | Kleiner | `$a` muss kleiner als `$b` sein. |
| `$a <= $b` | Kleiner gleich | `$a` muss kleiner oder gleich `$b` sein. |
| `$a > $b` | Grösser | $a muss größer als $b sein. |
| `$a >= $b` | Grösser gleich | `$a` muss größer oder gleich `$b` sein. |

### 1.3 Logische Operatoren

Um in `if`-Anweisungen nicht nur einen Bedingung gleichzeitig zu überprüfen, können logische Operatoren genutzt werden. Mit diesen können mehrere Bedingungen überprüft werden.

| Operator | alternative Schreibweise | Erläuterung |
|---|---|---|
| `&&` | `AND` | Beide Bedingungen müssen erfüllt werden. |
| \|\| | `OR` | Mindestens eine Bedingung muss erfüllt werden. |
| `!` | | Diese Bedingung darf nicht zutreffen. |
| `( ... )` | | Mit Klammern können Bedingungen gruppiert werden. |

#### 1.3.1 Beispiele

```php title="AND und OR"
<?php 
$username = "Nils"; 
$passwort = "php-einfach"; 
if($username == "Nils" AND $passwort == "php-einfach") { 
   echo "Beide Bedingungen waren erfüllt - Zugriff erlaubt. <br />"; 
} 

if($username == "Nils" OR $passwort == "php-einfach") {
  echo "Eine oder beide Bedingungen waren erfüllt.";
}
?>
```

```php title="Negation"
<?php
$zahl = 25;

if($zahl >= 10 AND $zahl <= 20) {
   echo "Die Zahl ist zwischen 10 und 20. <br />";
}

if( !($zahl >= 10 AND $zahl <= 20) ) {
   echo "Die Zahl war NICHT zwischen 10 und 20 <br />";
}
?>
```

```php title="Gruppieren"
<?php
$username = "Nils";
$passwort = "php-einfach";

if( ($username == "Nils" AND $passwort == "php-einfach") OR ($username == "Paul" AND $passwort == "geheim") ) {
  echo "Benutzername und Passwort passten zusammen. <br />";
}

if( $username == "Nils" AND ($passwort == "php-einfach" OR $passwort == "geheim") ) {
  echo "Der Benutzername war Nils, und das Passwort entweder php-einfach oder geheim.";
}
```

### 1.4 While-Schleife

Mit `while`-Schleifen können Anweisungen solange ausgeführt werden, bis ein bestimmtes Ergebnis eintritt.

```php
<?php
while(Bedingung)  {
Anweisungen
}
?>
```

Im folgenden Beispiel werden die Zahlen 0-10 per `while`-Schleife ausgegeben.

```php
<?php
$i = 0;
while($i < 10) {
   echo "$i, ";
   $i++;
}
?>
```

Als erstes wird eine Variable `$i` mit dem Wert `0` initialisiert. Die Bedingung in der `while`-Schleife überprüft ob `$i` kleiner als 10 ist, trifft dies zu, wird die Variable ausgegeben und um eins erhöht.

Abläufe können auch während der Laufzeit beeinflusst werden. Dafür gibt es die zwei Befehle `break` und `continue`.

Mit einem `break` können Abläufe beendet werden.

```php
<?php
$max = 30;
$zaehler = 0;
$increment = 2;

while($zaehler < $max) {
   if($zaehler == 10) {
      echo "Bei der Zahl 10 hören wir auf";
      break;
   }
   echo "$zaehler , ";
   $zaehler += $increment; //Erhöht den $zaehler um den Wert $increment
}
?>
```

In diesem Skript wird per `while` überprüft, ob die Variable `$zaehler` kleiner als `$max` ist und anschliessend per `if`, ob `$zaehler` den Wert `10` hat. Ist das der Fall, wird per `echo` `Bei der Zahl 10 hören wir auf` ausgegeben und die `while`-Schleife per `break` beendet. Trifft die Bedingung aus dem `if` nicht zu, wird nur der Wert von `$zaehler` ausgegeben und um 2 per `$increment` erhöht.

Wird `continue` genutzt, springt der Ablauf wieder zum Schleifenanfang und macht von dort aus weiter.

```php
<?php
$max = 30;
$zaehler = 0;
$increment = 2;

while($zaehler < $max) {
   $zaehler += $increment; //Erhöht den $zahler um den Wert $increment
   if($zaehler >= 10 AND $zaehler <= 15) {
      echo "Eine Zahl zwischen 10 und 15 <br>";
      continue;
   }

   echo "$zaehler <br>"; 
}
?>
```

Während `$zaehler` kleiner als `$max` ist wird die Zähler-Variable um 2 erhöht und per `if` überprüft, ob sie zwischen 10 und 15 ist. Ist der Wert dazwischen, wird `Eine Zahl zwischen 10 und 15` ausgegeben und per `continue` wieder an den Schleifenanfang gegangen. Da `$zaehler` noch nicht `$max` erreicht hat, geht der Prozess weiter. Hätte man `break` anstatt `continue` genutzt würde die Ausgabe nur einmal ausgegeben werden und dann die Schleife beendet werden.

Eine weitere Art der `while`-Schleife ist die `do-while`-Schleife. Diese überprüft eine Bedingung erst nach der Anweisung. Somit wird diese Schleife immer mindestens einmal ausgeführt.

```php
<?php
do  {
Anweisungen
}  while(Bedingung);
?>
```

Möchte man eine zufällige Zahl zwischen 0 und 10 oder 20 und 30 generieren, würde das mit einer `while`-Schleife wie folgt aussehen.

```php
<?php
$zufall = rand(0, 30);
while($zufall > 10 AND $zufall < 20) {
   $zufall = rand(0, 30);
}

echo "Unsere Zufallszahl: $zufall";
?>
```

Als erstes muss die Zufallszahl von 0 bis 30 generiert werden und anschliessend überprüft werden ob die Zufallszahl zwischen 10 und 20 ist. Trifft dies zu, muss sie neu generiert werden.

Das kann mit einer `do-while`-Schleife einfacher und kürzer gemacht werden.

```php
<?php
do {
   $zufall = rand(0, 30);
} while($zufall > 10 AND $zufall < 20);

echo "Unsere Zufallszahl: $zufall";
?>
```

Im `do`-Teil generieren wir die Zufallszahl zwischen 0 und 30 und anschliessend wir mit einem `while` überprüft, ob sie zwischen 10 und 20 ist.

`while`-Schleifen werden dann genutzt, wenn vorab nicht klar ist, wie viele Durchläufe es geben wird.

### 1.5 For-Schleife

Die `for`-Schleife funktioniert ähnlich wie die `while`-Schleife. Sie führt auch Anweisung aus, solange eine Bedingung stimmt.

```php
<?php
for(Startwert;  Bedingung;  Schleifenschritt)  {
Anweisungen
}
?>
```

Möchte man wie bei der `while`-Schleife die Zahlen von 0 bis 10 durchzählen, kann das mit einer `for`-Schleife wie folgt gemacht werden.

```php
<?php
for($i=0; $i < 10; $i++) {
   echo "$i, ";
}
?>
```

Als erstes wird die Variable `$i` auf `0`  gesetzt (Startwert). Nach dem ersten Semikolon folgt die Bedingung, die kann wie bei den `if`'s und `while`'s geschrieben werden. Als letztes wird noch bestimmt, was jeweils nach dem Ausführend der Schleife passieren soll, in diesem Fall soll `$i` und eins erhöht werden.

Der Startwert, die Bedingung und der Schleifenschritt müssen nicht unbedingt gesetzt werden. Eine `for`-Schleife kann auch leer sein.

```php
<?php
for( ; ; ) {
Anweisungen
}
?>
```

Wie bei den `while`-Schleifen können bei den `for`-Schleifen auch `break` und `continue` genutzt werden.

```php
<?php
for($i=0; $i < 20; $i++) {
   if($i == 13) {
     echo "Dreizehn ist eine Unglückszahl!!! <br>";
     break;
   }

   echo "$i, ";
}
?>
```

Hier wird der Ablauf abgebrochen sobald `$i` den Wert `13` erreicht hat.

```php
<?php
for($i=0; $i < 20; $i++) {
   if($i == 13) {
     echo "Dreizehn ist eine Unglückszahl!!! <br>";
     continue;
   }

   echo "$i, ";
}
?>
```

Wird `continue` genutzt, wird bei der Zahl 13 wieder an den Anfang der Schleife gesprungen.

`for`-Schleifen werden dann genutzt wenn etwas hochgezählt werden muss und vorab klar ist wie viele Durchläufe es geben wird.

## 2 Praxisaufgabe "Brauerei Locher"

```html title="./app/index.php"
<!DOCTYPE html>
<html lang="de">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Brauerei Locher</title>
</head>

<body>
   <h1>Brauerei Locher</h1>
   <form action="./form.php" method="post">
      <div class="anrede-container">
         Anrede:
         <input type="radio" name="anrede" id="anrede_mann" value="Mann" required>
         <label for="anrede_mann">Mann</label>
         <input type="radio" name="anrede" id="anrede_frau" value="Frau" required>
         <label for="anrede_frau">Frau</label>
         <input type="radio" name="anrede" id="anrede_undefiniert" value="undefiniert" required>
         <label for="anrede_undefiniert">undefiniert</label>
      </div>
      <div class="koordinaten-container">
         Name:
         <input type="text" name="kundenname" id="kundenname" required><br>
         Adresse:
         <input type="text" name="adresse" id="adresse" required><br>
         Mailadresse:
         <input type="email" name="email" id="email" required><br>
      </div>
      <div class="produkte-container">
         <input type="checkbox" name="produkt[]" id="produkt_nicht_alkohol" value="Nicht alkoholische Getränke">
         <label for="produkt_nicht_alkohol">Nicht alkoholische Getränke</label><br>
         <input type="checkbox" name="produkt[]" id="produkt_schnaps" value="Schnäpse">
         <label for="produkt_schnaps">Schnäpse</label><br>
         <input type="checkbox" name="produkt[]" id="produkt_bier" value="Bier">
         <label for="produkt_bier">Bier</label>
      </div>
      <div class="bemerkungen-container">
         <textarea name="bemerkung" id="bemerkung" cols="60" rows="10"></textarea>
      </div>
      <input type="submit" value="Absenden">
   </form>
</body>

</html>
```

```php title="./app/form.php"
<?php

if(isset($_POST["anrede"]))
$anrede = $_POST["anrede"];
$kundenname = $_POST["kundenname"];
$adresse = $_POST["adresse"];
$email = $_POST["email"];
$produkt = $_POST["produkt"];
$bemerkung = $_POST["bemerkung"];

?>

<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brauerei Locher</title>
</head>

<body>
    <h1>Brauerei Locher</h1>
    <p>
        <?php
        if ($anrede == "Mann")
        echo "Sehr geehrter Herr ";

        if ($anrede == "Frau")
        echo "Sehr geehrte Frau ";

        if ($anrede == "undefiniert")
        echo "Hallo ";

        echo $kundenname . ",<br>";
        echo "Vielen Dank für Ihre Bestellung.<br>Folgend können Sie nochmals alle ausgefüllten Informationen sehen.<br><br>";
        echo "Bestellte Produkte:<br>";

        if(isset($produkt[0]))
        echo "- " . $produkt[0] . "<br>";

        if(isset($produkt[1]))
        echo "- " . $produkt[1] . "<br>";

        if(isset($produkt[2]))
        echo "- " . $produkt[2] . "<br>";

        if(!empty($bemerkung))
        echo "Bemerkung:<br>" . $bemerkung . "<br>";

        echo "<br>Rechnungs- und Lieferadresse:<br>";
        echo $kundenname . "<br>";
        echo $adresse . "<br><br>";

        echo "Diese Übersicht wird Ihnen auch per E-Mail an " . $email . " gesendet.<br><br>";

        echo "Freundliche Grüsse<br>";
        echo "Brauerei Locher";
        ?>
    </p>
</body>

</html>
```