---
title: "Abgabe 4"
tags:
  - LB1
  - Abgabe 4
  - Sourcecode
  - Testfälle
---

# Abgabe 4

[GitHub Sourcecode Repo](https://github.com/bztfinformatik/lb1-ZZELAV)

## 1 Testfälle

### 1.1 Use-Cases

[Ursprüngliche Use-Cases](./abgabe-0001.md#2-use-cases)

| ID | Ziel (Soll) | Ist | Status |
|---|---|---|---|
| UC-001 | Ein Benutzer kann einen Auftrag erfassen | Alle eingeloggten Benutzer können neue Aufträge erfassen und bearbeiten | :white_check_mark:
| UC-002 | Benutzer muss den Status eines Auftrags ändern können | Eingeloggte Benutzer können beim bearbeiten den Status ändern | :white_check_mark:
| UC-003 | In einem Auftrag können Notizen erfasst werden | Notizen können in einem Textfeld erfasst werden | :white_check_mark:
| UC-004 | Admin kann neuen Benutzer erstellen | Im Admin-Center können User mit der Rolle "Admin", neue Benutzer erstellen | :white_check_mark:

### 1.2 Testszenarios

[Ursprüngliche Testszenarios](./abgabe-0001.md#4-testszenarios)

| ID | Kurzbeschreibung (Soll) | Ist | Status |
|---|---|---|---|
| 001 | Task mit Formular erstellen und in DB speichern | Tasks können per Formular erstellt und anschliessend in der Datenbank gespeichert werden | :white_check_mark:
| 002 | Eigene Aufgaben ansehen | Nicht implementiert, die Zuweisung erfolgt nicht mehr per Dropdown, sondern per Eingabe. Somit können auch Aufgaben auch nicht erfassten Benutzer zugeteilt werden (z.B. externe Dienstleister) | :x:
| 003 | Admin hat Zugriff auf das Admin-Center und kann Rollen anpassen und neue Benutzer erstellen. Admin-Center soll für normale User nicht verfügbar sein | Rollen können nicht angepasst werden. Ein Admin reicht. Der Admin kann neue Benutzer erstellen und die Passwörter per User ID zurücksetzen. Das Admin-Center ist nur per Rolle "Admin" erreichbar | :arrows_clockwise: