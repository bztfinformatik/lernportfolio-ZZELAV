# Auftrag

## 1 Objektorientierte Programmierung

Objektorientierte Programmierung (OOP) macht den Code leichter wartbar und kann beim wiederverwenden von z.B. Funktionen helfen.

### 1.1 Einführung

Bei OOP gibt es zwei wichtige Begriffe: **Klassen** und **Objekte**.

#### 1.1.1 Klasse

In Klassen werden Eigenschaften und Methoden definiert. Vergleicht man es mit einem Stuhl (Stuhl ist die Klasse), dann hat der Stuhl die Eigenschaft, vier Beine zu haben und auf ihm kann gesessen werden.

#### 1.1.2 Objekt

Objekte sind das Nutzen der Klassen als Instanz. Steht z.B. der Stuhl in der Küche, dann wäre der Stuhl ein Objekt.

### 1.2 Beispiel Webshop

Möchte man einen Webshop programmieren, so werden folgende Klassen benötigt:

**User** - Ist eine Person, mit einem Benutzernamen, Passwort und E-Mail.  
**Product** - Alle Produkte die im Shop verfügbar sind, dieses Produkt hat einen Namen, Preis, Beschreibung und vielleicht ein Produktbild.  
**Productorder** - Die Bestellungen der Benutzer müssen auch abgelegt werden, diese enthalten Benutzer und Produkte.

## 1.3 Grundlagen

```php
<?php
//Definition der Klasse User
class User {
	//Definition der Eigenschaften name, email und password
	public $name;
	public $email;
	public $password;

	//Definition der Methode setEmail
	function setEmail($newEmail) {
		if(filter_var($newEmail, FILTER_VALIDATE_EMAIL) !== false) {
			$this->email = $newEmail;
			return true;
		}
		return false; //Neue E-Mail-Adresse konnte nicht gespeichert werden, da diese ungültig war
	}
}

//Definition von zwei Objekten, Max und Lisa
$max = new User();
$max->name = "Max Mustermann";
$max->setEmail("max@muster.de");

$lisa = new User();
$lisa->name = "Lisa Meier";
$lisa->setEmail("lisa@meier.de");

echo "Max hat die E-Mail $max->email und Lisa die E-Mail $lisa->email";
?>
```

Als erstes wird eine Klasse, zwischen den geschweiften Klammern wird alles was mit der Klasse zu tun hat geschrieben. Nach der Definition der Klasse, kommen die Eigenschaften, diese sind `public`, d.h. sie können von jedem aufgerufen werden. Eigenschaften sind nichts anderes als Variablen. Als nächstes folgen die Methoden. In unserem Beispiel überprüft die Methode `setEmail()` ob eine gültige E-Mail eingegeben wurde.

Die Klasse wird jetzt mit der `}` geschlossen und jetzt folgen die Objekte. Um ein Objekt der Klasse `User` zu erstellen, verwendet man das Schlüsselwort `new`. Somit können so viele User erstellt werden, wie man möchte, in unserem zwei, Max und Lisa. Nach dem erstellen der Objekte mit `new`, können wir die Eigenschaften für diese User definieren, wie Name und E-Mail.

### 1.4 Notizen OOP

#### 1.4.1 Wie wird in PHP instanziert?

#### 1.4.2 Was bedeutet der Pfeil?

#### 1.4.3 Was bedeutet `$this`?

#### 1.4.4 Welche Möglichkeiten an Zugriffsmodifizierer kennt PHP?

#### 1.4.5 Dokumentieren Sie Beispiele zu Konstruktoren, Methoden, Klassen

#### 1.4.6  Dokumentieren Sie die Beispiele zur Vererbung mit PHP