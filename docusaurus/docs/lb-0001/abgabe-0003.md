---
title: "Abgabe 3"
tags:
  - LB1
  - Abgabe 3
  - Sourcecode
---

# Abgabe 3

[GitHub Sourcecode Repo](https://github.com/bztfinformatik/lb1-ZZELAV)

## 1 SQL-Scripts

Da Docker-Container die enthalten Daten standardmässig nicht auf dem System speichert, müssen die benötigten Daten exportiert werden und beim rebuilden wieder importiert werden. In unserem Fall können wir dies mit SQL-Scripts machen, welche die Daten in die Datenbank schreibt. Um dies zu machen wird im `mysql`-Ordner ein `initscripts`-Ordner angelegt, welcher als Volume im `docker-compose`-File eingebaut wird.

```docker title="docker-compose.yml"
  mysql:
    image: mysql:8
    ports:
      - 3306:3306
    command: --default-authentication-plugin=mysql_native_password
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_USER: 
      MYSQL_PASSWORD: 
      MYSQL_DATABASE: meeting_protocol 
    volumes:
      - ./mysql/initscripts:/docker-entrypoint-initdb.d
      - ./mysql/mysqldata:/var/lib/mysql/
```

Der `initscripts`-Ordner sieht in meinem Fall wie folgt aus:
```
+---./mysql/initscripts
|       100_database.sql
|       101_tableTask.sql
|       102_tableUser.sql
|       103_createAdminUser.sql
|       999_testDataTasks.sql
|
```

Die Reihenfolge ist entscheidend, daher sollten die Scripts benannt werden. Als erstes wird die Datenbank erstellt (`100_database.sql`), anschliessend werden die Tabellen `task` und `user` importiert (`101_tableTask.sql`, `102_tableUser.sql`). Danach wird noch der Admin-User in der Tabelle `user`erstellt (`103_createAdminUser.sql`). Als letztes Script werden die Testdaten importiert (`999_testData.sql`). Die Scripts können [hier](/appendix/initscripts_sql) gefunden werden.