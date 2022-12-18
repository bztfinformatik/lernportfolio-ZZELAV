---
sidebar_position: 2
title: "Tag 14"
pagination_prev: null
tags:
  - Tag 14
  - PHP
  - LB1 / LB2
  - Session
  - Cookies
---

# Tag 14

:::info
Arbeiten an LB1 / LB2
:::

## 1 Session

HTTP ist zustandlos, d.h. jeder neue Anfrage hat nichts mit der vorherigen zu tun. Damit Informationen zwischen Seiten zwischengespeichert werden können, werden Sessions genutzt.

Um Session zu nutzen, muss DIREKT nach `<?php` die `session_start();`-Funktion aufgerufen werden. Damit wird eine eindeutige ID dieser Sitzung erstellt. In der Session können dann noch selbst Daten gespeichert werden. Z.B. den Username:

```php
`$_SESSION['username'] = 'admin';
```

Um die Daten aus der Session zu löschen, z.B. beim Logout, gibt es zwei Wege.

```php title="Einzelne Werte löschen"
unset($_SESSION['username']);
```

```php title="Komplette Session löschen"
session_destroy();
```

Die Session-Daten bleiben allerdings nur so lange bis der Browser geschlossen wird. Damit Daten länger gespeichert werden können, müssen Cookies genutzt werden.

## 2 Cookies

Cookies hat grundsätzlich die gleiche Funktion wie Session, nur das die Daten auf dem Client gespeichert werden.

Um einen Cookie zu setzen muss folgendes genutzt werden:


```php
setcookie("username","admin",0); // Dieser Cookie wird bis zum Ende der Session gespeichert.
setcookie("email","admin@admin.ch",time()+(3600*24)); // Dieser Cookie wird 24 Stunden gespeichert (muss in Sekunden angegeben werden. 3600 Sekunden * 24 = 86400 Sekunden = 24 Stunden)
```

Cookie auslesen:  
```php
$username = $_COOKIE["username"];
echo "Dein Username ist: $username";
```

Cookie löschen:  
```php
setcookie("username",""time()-3600); // Cookie auf Minuszeit stellen
```

## 3 Auftrag Gästezähler

![Auftrag Gästezähler](/data/tag-0014/auftrag_gaestezaehler.png)

```php
<?php
session_start();

$currentSession = session_id();

setcookie("session", $currentSession, time() + 3600);

if ($currentSession != $_COOKIE["session"]) {
    if (isset($_COOKIE["counter"])) {
        $count = $_COOKIE["counter"];
        $count++;
        setcookie("counter", $count, time() + 3600);
    } else {
        setcookie("counter", 0, time() + 3600);
    }
}

echo "Current session: " . $currentSession;
echo "<br>Cookie session: " . $_COOKIE["session"];
echo "<br><br>" . $_COOKIE["counter"];
```

Da mit Session gearbeitet wird, muss als erstes `session_start()` ausgeführt werden. Danach wird die derzeitige Session-ID geholt. Mit dieser können wir überprüfen, ob der User nur die Seite neu lädt oder wirklich den ganzen Browser neustartet, denn bei jedem neuem Prozess von einem Browser, wird eine neue Session-ID generiert. Danach schreiben wir diese Session in einen Cookie, der für 1 Stunde beibehalten wird. Danach können wir überprüfen ob die derzeigte Session der Session im Cookie zutrifft. Trifft dies nicht zu holen wir uns, falls vorhanden, den Cookie `counter` und erhöhen den um einen. Dieser Cookie wird ebenfalls für eine 1 Stunde gespeichert. Als letztes geben wir noch die derzeigte und die Cookie Session aus (um zu überprüfen) und den Counter.  
[(Besseres Beispiel)](https://www.php-einfach.de/experte/php-codebeispiele/besucherzaehler-mit-reload-sperre/)