---
sidebar_position: 2
title: "Tag 12"
pagination_prev: null
tags:
  - Tag 12
  - PHP
  - LB1 / LB2
  - Datenbank
  - mysql
  - PDO
---

# Tag 12

:::info
Arbeiten an LB1 / LB2
:::

## 1 Datenbankzugriffe

### 1.1 mysql

Die mysql-Extension ist veraltet und sollte nicht mehr genutzt werden. Die Performance ist niedrig und es gibt kein OOP. Offizielle Warnung von PHP:  
![MySQL PHP Warning](/data/tag-0012/mysql_php_warning.png)

### 1.2 mysqli

Die mysqli-Extension ist die Weiterentwicklung von der der ursprünglichen mysql-Extension und kann auch OOP. Das i steht für *improved*.

```php
<?php
$aid = $_GET['aid'];

// Connection
$mysqli = new mysqli('127.0.0.1', 'your_user', 'your_pass', 'sakila');

if ($mysqli->connect_errno) {
  // Error-Handling
  exit;
}

$sql = "SELECT actor_id, first_name, last_name FROM actor WHERE actor_id = $aid";
if (!$result = $mysqli->query($sql)) {
  // Oh no! The query failed.
  echo "Sorry, the website is experiencing problems.";
  exit;
}

if ($result->num_rows === 0) {
  echo "We could not find a match for ID $aid, sorry about that. Please try again.";
  exit;
}
```

Als erstes wird per GET-Varialbe ein Wert geholt. Dies hat noch nichts mit SQL zu tun. die new `mysqli()`-Funktion erstellt eine Verbindung zu einer Datenbank. Die Reihenfolge der Argumente ist wie folgt: `'HOST', 'USERNAME', 'PASSWORD', 'DATABASE'`. Mit `connect_errno` kann bei einem Verbindungsproblem das Programm beendet werden. Die Funktion `query()` nimmt als Argument eine SQL-Query und frägt diese bei der Datenbank ab.

### 1.3 PDO

PDO ist rein OOP und hat eine hohe Performance.

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=databasename', 'username', 'password');

$statement = $pdo->prepare("SELECT * FROM users WHERE vorname = :vorname AND nachname = :nachname");
$statement->execute(array(':vorname' => 'Max', ':nachname' => 'Mustermann'));
while($row = $statement->fetch()) {
  echo $row['vorname']." ".$row['nachname']."<br />";
  echo "E-Mail: ".$row['email']."<br /><br />";
}

$anzahl_user = $statement->rowCount();
echo "Es wurden $anzahl_user gefunden";

$statement = $pdo->prepare("INSERT INTO users (email, vorname, nachname) VALUES (?, ?, ?)");
$statement->execute(array('info@php-einfach.de', 'Klaus', 'Neumann'));

$neue_id = $pdo->lastInsertId();
echo "Neuer Nutzer mit id $neue_id angelegt";
?>
```

Bei PDO kann mit `new PDO()` eine Datenbankverbindung herstgestellt werden. Die Reihenfolge der Argumente ist wie folgt: `DBMS:host=HOST;dbname=DATABASE', 'USERNAME', 'PASSWORD'`. Mit der Funktion `prepare()` kann eine SQL-Query **vorbereitet** werden. In diesem Statement werden nur Variablen eingesetzt. Mit `execute()` kann diese dann ausgeführt werden. Dafür kann mit einem PHP-Array die Variable zu einem Wert gelinkt werden. Mit `fetch()` können die Resultate ausgelesen werden.

## 2 Prepared statements

Prepared statements werden genutzt um immer wieder die gleiche SQL-Query mit möglichst hoher Effizienz auszuführen. Ein prepared statement kann wie folgt aussehen:

```sql
-- mysqli
INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)

-- PDO
INSERT INTO MyGuests (firstname, lastname, email) VALUES (:firstname, :lastname, :email)
```

Dieses statement wird der Datenbank geschickt und die Daten werden leer gelassen (in mysqli mit `?`, in PDO mit `:STRING`). Später im Programm werden dann die Daten in die Platzhalter eingefüllt und in der Datenbank gespeichert.

Vorteile von Prepared statement:

- Es ist schneller auszuführen, da das eigentliche statement nur einmal an die Datenbank geschickt wird
- Es wird weniger Bandbreite gebraucht um die Daten in der Datenbank zu speichern (es werden nur die Daten gesendet und nicht das ganze statement)
- Sie helfen gegen SQL Injections, da die Daten mit einem anderen Protokoll an die Datenbank gesendet werden, wo sie "escaped" werden.

```php
// prepare sql and bind parameters
  $stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (:firstname, :lastname, :email)");
  $stmt->bindParam(':firstname', $firstname);
  $stmt->bindParam(':lastname', $lastname);
  $stmt->bindParam(':email', $email);
```

Als erstes wird mit `prepare()` das statement vorbereitet. Anschliessend müssen mit `bindParam()` die Werte zu den Platzhaltern gebunden werden.

```php
// set parameters and execute
$firstname = "John";
$lastname = "Doe";
$email = "john@example.com";
$stmt->execute();
```

Danach können die Variablen mit den Werten gefüllt werden und mit der Funktion `execute()` ausgeführt werden. Dieser Teil kann so oft wie nötig wiederholt werden.

Als letztes muss die Datenbankverbindung geschlossen werden.

```php
$conn = null;
```

[Prepared statement W3schools](https://www.w3schools.com/php/php_mysql_prepared_statements.asp)

### 2.1 SQL Injection

```php
$aid = $_GET['aid'];
// $aid ist jetzt gleich -> "42;UPDATE USER SET TYPE="admin" WHERE ID=23;"
$sql = "SELECT actor_id, first_name, last_name FROM actor WHERE actor_id = $aid";
// sql ist jetzt gleich -> SELECT actor_id, first_name,
// last_name FROM actor WHERE actor_id =
// 42;UPDATE USER SET TYPE="admin" WHERE ID=23;
```

In diesem Fall werden mit einer SQL-Query die an die Datenbank geschickt werden, gleich zwei Sachen ausgeführt und zwar schlimme Sachen. Das zweite statement updated den User zum Admin.