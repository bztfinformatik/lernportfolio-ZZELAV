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

# :construction: IN WORK :construction:

# Tag 14

:::info
Arbeiten an LB1 / LB2
:::

## 1 Session

## 2 Cookies

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