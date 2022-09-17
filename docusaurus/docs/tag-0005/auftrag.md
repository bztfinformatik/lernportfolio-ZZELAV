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

### 1.3 Grundlagen

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

"Instanzieren" ist das erstellen eines Objekt von einer Klasse.

```php
<?php
$objekt = new Klasse();
?>
```

#### 1.4.2 Was bedeutet der Pfeil?

Mit dem `->` können Methoden und Eigenschaften vom Objekt (von der Klasse) aufgerufen werden.

```php
<?php
$objekt->methode();
$objekt->eigenschaft = "";
?>
```

#### 1.4.3 Was bedeutet `$this`?

Mit `$this` können Eigenschaften und Methoden von Objekten innerhalb einer Klasse aufgerufen werden, die nicht instanziert sind. Es wird das Objekt dieser Klasse aufgerufen.

```php
<?php
class Klasse {
	public $eigenschaft;

	public function methode() {
		return "Hello World";
	}

	$this->eigenschaft = "";
	$this->methode();
}
?>
```

#### 1.4.4 Welche Möglichkeiten an Zugriffsmodifizierer kennt PHP?

`public`, `protected`, `private`

`public`: Kann von überall drauf zugegriffen werden.  
`protected`: Nur Elternklassen, abgeleitete Klassen un die eigene können zugreifen.  
`private`: Nur die eigene Klasse kann zugreifen.

#### 1.4.5 Dokumentieren Sie Beispiele zu Konstruktoren, Methoden, Klassen

```php
<?php

// Klasse erstellen
class Klasse {
	// Konstruktor definieren, der die Methode "methode()" aufruft
	public function __construct() {
		// Mit $this, die Methode "methode()" aufrufen
		$this->methode();
	}

	// Methode, die von überall aufgerufen werden kann, erstellen
	public function methode() {
		print "Hello World<br>";
	}
}

// Neues Objekt der Klasse erstellen (wird den Konstruktor ausführen)
$obj = new Klasse();

// Methode direkt aufrufen
$obj->methode();
?>
```

#### 1.4.6  Dokumentieren Sie die Beispiele zur Vererbung mit PHP

```php
<?php

class ElternKlasse {
	public function __construct() {
		print "Elternklasse<br>";
	}
}

class SubKlasse1 extends ElternKlasse {
	public function __construct() {
		parent::__construct();
		print "Subklasse<br>";
	}
}

class SubKlasse2 extends ElternKlasse {
	// __construct von ElternKlasse
}

$elternKlasseObj = new ElternKlasse();

$subKlasse1Obj = new SubKlasse1();

$subKlasse2Obj = new SubKlasse2();
?>
```

## 2 MVC (Model-View-Controller)

Model-View-Controller ist das häufigste Design Pattern in PHP. Bei MVC wird das Klassendesign in drei verschiedene Kategorieren unterteilt:

**Model**: Für jede Entität wird eine eigene Model-Klasse erstellt, am Beispiel des Online-Shops, hätte man eine Model-Klasse für User, eine für Artikel, usw. Die Model-Klassen sind dafür zuständig, dass die Daten aus der Datenbank geladen und gespeichert werden.  
**View**: View ist zuständig für die Darstellung. Dazu gehören Templates die HTML und CSS zurückgegeben. Im View ist keine Logik eingebunden.  
**Controller**: Der Controller verbindet das Model und die View. Hier ist die Logik der Applikation verankert, z.B. kommen Login-Daten von der View, der Controller überprüft diese auf Gültigkeit und falls diese stimmen, "sagt" der Controller der View, dass die nächste Seite angezeigt werden soll.

### 2.1 Warum MVC

Ein Vorteil ist die Trennung zwischen Verarbeitung (Model), Darstellung (View) und der Logik (Controller). Muss an der Datenstruktur etwas geändert werden, so muss dies nur in der Model-Klasse gemacht werden. An der Darstellung under Logik muss nichts gemacht werden. Möchte man zur Web-Version auch eine Mobile-Version erstellen, muss nur eine neue View erstellt werden. Somit ist die Wartung der einzelnen Komponenten einfacher und die Person, die für die View zuständig ist, muss keine Ahnung von der Logik oder der Daten haben.

### 2.2 Model

Im Model wird der Datenbankzugriff programmiert.

```php
<?php
//$pdo enthält die Datenbankverbindung
 
class User {
   // Klasse zur Abbildung eurer Benutzer
 
   public static function newUser($email, $vorname, $nachname, $passwort) {
   }
 
   public static function findByEmail($email) {
   }
 
 
   public function delete() {
   }
 
   public function setPassword($newPassword) {
   }
 
}
 
class Product {
   // Klasse zur Darstellung von Produkten im Online-Shop ähnlich wie oben
   //...
}
 
class ProductOrder {
   // Klasse zur Darstellung neuer Produktbestellungen
   public function __constructor(User $user) {
   }
 
   public function addProduct(Product $product) {
   }
 
   public function addProductById($productId) {
   }
 
   public function buy() {
   } 
}
?>
```

Weiterfolgende Programmierung wird dadurch einfacher.

```php
<?php
$max = User::findByEmail("max@muster.de");
 
$order = new ProductOrder($max);
$order->addProductById(23);
$order->addProductById(42);
 
if($order->buy()) {
   echo "Gesamtpreis der Bestellung: ".$order->price();
}
?>
```

### 2.3 View

Im View wird die Darstellung programmiert.

```php
<?php
$max = User::findByEmail("max@muster.de");
 
$order = new ProductOrder($max);
$order->addProductById(23);
$order->addProductById(42);
 
if($order->buy()) {
   include("order-successful.view.php");
} else {
   include("order-failed.view.php");
}
?>
```

```php title="order-successful.view.php"
Deine Bestellung über <?php echo $order->getPrice(); ?> war <b>erfolgreich</b>.
```

```php title="order-failed.view.php"
Deine Bestellung ist leider <b>fehlgeschlagen</b>. Bitte kontaktiere unseren Support.
```

### 2.4 Controller

Der Controller implementiert die Logik.

```php
<?php
class UserController {
 public function registerNewUser($email, $password) {
 //Entsprechende Überprüfungen und SQL Queries zum Registrieren des Nutzers
 //Gibt z.B. true zurück, falls die Registrierung funktioniert hat
 }
 
 public function changeUserPassword(User $user, $new_password) {
 //Ändert das Benutzerpasswort für den Nutzer $user
 }
 
 public function sendNewPassword(User $user) {
 //Sendet dem Benutzer ein neues Passwort zu
 }
}
?>
```

Die Skripts können dann auf die Controller zurückgreifen.

```php
<?php
$userController = new UserController();
 
if($userController->registerNewUser($_POST['email'], $_POST['password'])) {
  include("templates/registerSuccess.inc.php");
} else {
  include("templates/registerFailed.inc.php");
}
?>
```