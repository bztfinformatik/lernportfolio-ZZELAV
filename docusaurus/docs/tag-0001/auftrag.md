# Auftrag

## 1 Recherche Docker und Docker-Compose

### 1.1 Was ist Container-Virtualisierung?

Containervirtualisierung ist ein Konzept, bei dem Funktionen des Host-Betriebssystem genutzt werden, um Anwendungen isoliert voneinander laufen zu lassen.

Container greifen auf den Kernel des Hosts zu und nutzen diese Ressourcen, hingegen VM (Virtuelle Maschinen) sind ein ganz eigenes Betriebssystem.

![Virtualisation vs Container](/data/tag-0001/vm_container.png)

[Quelle Text](https://gridscale.io/community/glossar/was-ist-containervirtualisierung/)

[Quelle Bild](https://it4retailers.de/wp-content/uploads/2018/04/Virtualisierung-vs-Container.png)

### 1.2 Wofür wird Docker verwendet?

Docker ermöglicht das "managen" der Container. Docker kann mittels der Image-Datei auf jedem System laufen, dass Docker installiert hat. Wenn es bei jemanden funktioniert, funktioniert es auch bei den anderen.

### 1.3 Hello World laufen lassen

docker run hello-world

## 2 PHP-Einführung

### 2.1 Erste Schritte

Die Funktion `phpinfo()` gibt Informationen wie welche Version von PHP auf dem Server läuft.

```php title="phpinfo.php"
<?php
phpinfo();
?>
```

Ist PHP nicht auf dem Server installiert, wird eine Fehlermeldung angezeigt und es muss noch installiert werden.

In ein PHP-File kann auch normaler HTML-Code geschrieben werden. Möchte man PHP-Befehle ausführen, müssen diese zwischen `<?php` und `?>` geschrieben werden.

```php title="ersteseite.php"
<!DOCTYPE html>
<html> 
<head>
	<meta charset="UTF-8" />
	<title>Eure erster PHP-Script</title> 
</head>
 
<body>
<h1>Herzlich Willkommen</h1>

<p>Dies ist eure erste PHP-Datei. Eine Scriptumgebung könnt ihr wie folgt starten: 
<?php
echo "Mittels echo können Daten ausgegeben werden";
?></p>

<p>Später könnt ihr in PHP dynamische Inhalte erzeugen. Ein einfaches Beispiel ist das aktuelle Datum auszugeben: 
<?php
echo date("d.m.Y H:i:s");
?></p>
 
</body>
</html>
```

Hier wird im ersten PHP-Abschnitt eine einfache Textausgabe mittels `echo` gemacht. Im zweiten Abschnitt wird mit der Funktion `date()` der aktuelle Zeitstempel ausgegeben. In den Klammern der Funktion kann das Format definiert werden.

### 2.2 Text ausgeben per echo

Text kann in PHP mittels `echo` ausgegeben werden.

```php title="hallo.php"
<?php
echo "Hello World";
?>
```

Wird diese Datei jetzt aufgerufen, wird `Hello World` angezeigt.

Der auszugebende Text muss immer zwischen zwei `"` oder zwei `'` geschrieben werden.

```php title="Gültiger Code"
<?php
echo "Hello World";
?>

<?php
echo 'Hello World';
?>
```

```php title="Ungültiger Code"
<?php
echo Hello World;
?>

<?php
echo 'Hello World";
?>
```

Wenn `"`-Zeichen in einer Ausgabe genutzt werden soll, muss das Gänsefüsschen mit einem Backslash (`\`) angeführt werden. Dies ist auch der Fall wenn man ein Backslash ausgeben will.

```php
<?php
echo "Hello \"World\"";
?>

<?php
echo "D:\\xampp";
?>
```

### 2.3 PHP Kommentare

Kommentare dienen der Verständlichkeit des Codes und werden vom PHP Interpreter nicht angeschaut/ausgeführt.

Einzeilige Kommentare können mit `//` oder `#` genutzt werden und mehrzeilige fangen mit `/*` an und enden mit `*/`.

```php title="Einzeiliger Kommentar"
<?php
// Einzeiliger Kommentar 1
# Einzeiliger Kommentar 2
?>
```

```php title="Mehrzeiliger Kommentar"
<?php
/* Mehrzeiliger
Kommentar */
?>
```

### 2.4 Variablen

Variablen können während der Laufzeit andere Werte haben und sind sehr praktisch im Programmieren.

Variablen in PHP werden mit einem `$` definiert. Nach dem Dollarzeigen kommt der Variablenname und anschliessend kann mit `=` und zwischen `"` ein Wert mitgegeben werden. Am Schluss jeder PHP-Zeile muss ein `;` angefügt werden.

```php title="Variable"
<?php
$name = "Nils Reimers";
?>
```

Variablen können jetzt in echos genutzt werden.

```php title="Variable mit echo ausgeben"
<?php
$name = "Nils Reimers";
echo "Mein Name ist $name";
?>
```

Variablen können mehrmals und unterschiedlich genutzt werden.

```php title="Variablen mehrmals nutzen"
<?php
$name = "Paul Meier";
echo "Zuerst heiße ich $name <br />";

$name = "Stefan Müller";
echo "Dann ist mein Name $name";
?>
```

Folgend sind weitere Beispiele mit Variablen.

```php
# Nur Variable ausgeben
<?php
$name = "Nils Reimers";
echo $name;
?>

# Variable erweitern und ausgeben
<?php
$name = "Nils ";
$name .= "Reimers";
echo $name;
?>

# Zusammengesetzte Ausgabe
<?php
$name = "Nils";
echo "Mein Name ist ".$name." Reimers";
?>

# Zusammengesetzte Variable ausgeben
<?php
$farbe = "rotes";
$text = "Wir haben ein ".$farbe." Haus";
echo $text;
?>
```

#### 2.4.1 Variablentypen

**Integer** -> Ganzzahl, Zahl ohne Komma

```php
<?php
$integer = 15;
?>
```

**String** -> Text

```php
<?php
$string = "Text";
?>
```

**Float/Double** -> Fliesskommazahl, Zahl mit Komma

```php
<?php
$float = 15.5;
?>
```

**bool** -> Binärer Wert, `true` oder `false`

```php
<?php
$bool = true;
?>
```