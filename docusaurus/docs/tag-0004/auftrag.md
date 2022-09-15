# Auftrag

## 1 Repetitionsaufgaben

### 1.1 Welche Variablen sind gültig?

```php
$preis <-
$1preis
$_preis <-
$else
$gesamtpreis12 <-
$gesamt-preis
$MeNg <-
```

### 1.2 Ausgaben

1
```php
<?php
$j = "Hallo";
$k = "$j \"Onkel\" ";
echo $k;
?>
```
```text title="OUTPUT"
Hallo "Onkel" 
```

2
```php
<?php
$a = "Hallo ";
$a .= "Welt";
echo $a;
?>
```
```text title="OUTPUT"
Hallo Welt
```

3
```php
<?php
$a = "Hallo";
$b = "Welt";
echo $a." ".$b."<br />"
?>
```
```text title="OUTPUT"
Hallo Welt

```

4
```php
<?php
$preis = 49.90;
echo "Die Variable $preis enthält den Wert: $preis";
?>
```
```text title="OUTPUT"
Die Variable 49.90 enthält den Wert: 49.90
```

5
```php
<?php
$preis = 49.90;
echo 'Die Variable $preis enthält den Wert: $preis';
?>
```
```text title="OUTPUT"
Die Variable $preis enthält den Wert: $preis
```

6
```php
<?php
$preis = 49.90;
echo 'Die Variable $preis enthält den Wert:'.$preis;
?>
```
```text title="OUTPUT"
Die Variable $preis enthält den Wert: 49.90
```

### 1.3 Arrays

```php
<?php
$familie = array("Vater","Mutter","Tochter","Sohn");
echo "$familie[3]<br />";
echo "$familie[1]<br />";
echo "$familie[0]<br />";
echo "$familie[4]<br />";
echo "$familie[2]<br />";
?>
```
```text title="OUTPUT"
Sohn
Mutter
Vater

Tochter
```

### 1.4 Mathe und Datentypen

```php
<?php
$n = 5;
$o = 8;
echo $n + $o;
echo $n - $o;
echo $n * $o;
echo $n / $o;
echo $n % $o;
?>
```
```text title="OUTPUT"
13-3400.6255
---
13
-3
40
0.625
5
```

### 1.5 Operatoren

```php
$a == $b; // Gleicher Wert
$a === $b; // Identisch (gleicher Wert und gleiche Instanz/Datentyp)
```

## 2 CSR

### 2.1 Diagramm

![PlantUML CSR](/data/tag-0004/plantuml_csr.png)  
[Source Code](/appendix/plantuml_csr)  
[Quelle Diagramm](https://www.ionos.de/digitalguide/fileadmin/DigitalGuide/Teaser/client-side-rendering.png)

### 2.2 Erweiterung mit Datei

```php title="./app/api/api.php"
<?php
{
    $names = file("../data/api_data.txt");
    for ($i = 0; $i < count($names); $i++) {
        $zeile = explode(";", $names[$i]);
        $response[$zeile[0]] = $zeile[1];
    }

    // $response['alf'] = "zalf";
    // $response['balf'] = "calf";
    $response['response_code'] = $response_code;
    $response['response_desc'] = $response_desc;

    $json_response = json_encode($response);
    echo $json_response;
}
?>
```

```text title="./app/data/api_data.txt"
alf;zalf
balf;calf
```

## 3 PHP-Skript

### 3.1 Dateien lesen

Dateien per `file_get_contents()` auslesen:
```php
<?php
$zitate = file_get_contents('zitate.txt');
echo $zitate;
?>
```

Zeilebrüche in `<br>` umwandeln:
```php
<?php
$zitate = file_get_contents('zitate.txt');
echo nl2br($zitate);
?>
```

Einzelne Zeilen mit `file()` auslesen:
```php
<?php
$zitate = file("zitate.txt");
for($i=0;$i < count($zitate); $i++){
   echo $i.": ".$zitate[$i]."<br><br>";
}
?>
```

Zufällige Zeile auslesen:
```php
<?php
$zitate = file("zitate.txt");
$zitat_nummer = rand(0, count($zitate)-1);
echo $zitate[$zitat_nummer];
?>
```

### 3.2 Dateien schreiben

Datei überschreiben:
```php
<?php
$name = $_GET["name"];
$zeile = "Per GET wurde der Name $name übergeben \r\n";
file_put_contents("beispiel.txt", $zeile);
echo "beispiel.txt wurde überschrieben";
?>
```

Text in Datei anfügen:
```php
<?php
$name = $_GET["name"];
$zeile = "Per GET wurde der Name $name übergeben \r\n";
file_put_contents("beispiel.txt", $zeile, FILE_APPEND);
echo "beispiel.txt aktualisiert";
?>
```