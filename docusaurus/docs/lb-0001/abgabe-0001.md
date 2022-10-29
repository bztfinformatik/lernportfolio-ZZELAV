---
title: "Abgabe 1"
tags:
  - LB1
  - Abgabe 1
  - Architekturkonzept
  - Use-Cases
  - Testszenarios
---

# Abgabe 1

## 1 Architekturkonzept

### 1.1 Beschreibung MVC

MVC wurde bereits [hier](../tag-0005/auftrag.md#2-mvc-model-view-controller) beschrieben.

### 1.2 Beschreibung Twig

Twig wurde bereits [hier](../tag-0007/auftrag.md#1-twig) beschrieben.

### 1.3 SSR

Bei SSR (Server-side rendering) wird die Webseite direkt auf dem Server gerendert und anschliessend wird die HTML-Datei an den Client gesendet. Dies ist der Fall bei PHP. Wenn ein Link auf einer SSR-Webseite angeklickt wird, wird die Anfrage auf dem Server bearbeitet und anschliessend eine neue HTML-Datei ausgeliefert.

![SSR](/data/lb-0001/ssr.png)  
[Quelle](https://www.blog.duomly.com/article-images/2020/09/ssr.png)

### 1.4 Aufgabenstellung

Ich möchte mittels MVC und Twig eine Webseite bauen, die es erlaubt Aufträge zu erfassen und Benutzern zuzuweisen. Die Benutzer können ihre Aufträge in einer Liste sehen und den Status und Kommentare erfassen.

Das Formular für die Auftragserfassung sollte wie folgt aussehen:  
![Formular](/data/lb-0001/form_meeting_protocol.png)

Ich werde für alle Aufgaben und für die zugewiesenen Aufgaben je einen Controller erstellen. Die Views und Models kann ich noch nicht richtig bestimmen.

Ich werde drei Twig-Templates erstellen, einen für die Navbar, einen für den Main-Teil und einen für den Footer.

## 2 Use-Cases

| ID | UC-001 |
|---|---|
| Name | Auftrag erfassen |
| Ziel | Ein Benutzer kann einen Auftrag erfassen |
| Akteure | Benutzer |
| Essenzielle Schritte | 1. Benutzer öffnet das Formular für die Auftragerstellung<br/>2. Benutzer füllt das Formular aus und es wird validiert<br/>3. Die Daten werden abgespeichert und in einer Übersicht angezeigt |

| ID | UC-002 |
|---|---|
| Name | Status von Auftrag ändern |
| Ziel | Benutzer muss den Status eines Auftrags ändern können |
| Akteure | Benutzer |
| Essenzielle Schritte | 1. Benutzer öffnet den Auftrag<br/>2. Ändert den Status<br/>3. Neuer Status wird in der Datenbank angepasst |

| ID | UC-003 |
|---|---|
| Name | Auftragsnotizen hinzufügen |
| Ziel | In einem Auftrag können Notizen erfasst werden |
| Akteure | Benutzer |
| Essenzielle Schritte | 1. Benutzer öffnet Auftrag<br/>2. Fügt neue Notizzeile hinzu<br/>3. Erfasst seine Notiz<br/>4. Notiz wird in Datenbank gespeichert |

| ID | UC-004 |
|---|---|
| Name | Neuer Benutzer erfassen |
| Ziel | Admin kann neuen Benutzer erstellen |
| Akteure | Admin, Benutzer |
| Essenzielle Schritte | 1. Admin öffnet Benutzerverwaltung<br/>2. Admin erstellt neuen Benutzer<br/>3. Benutzer kann sich anmelden |

Diagramm Use-Cases:  
![Use-Cases](/data/lb-0001/use_cases_diagram.svg)

Aktoren:  
![Aktoren](/data/lb-0001/actor_diagram.svg)

## 3 Funktionale Anforderungen

- Das Formular muss in der Datenbank gespeichert werden
- Die zugewiesenen Aufträge müssen in einer Liste ersichtbar sein
- Nur Admins können neue Benutzer erstellen
- Alle Benutzer müssen in den zuweisbaren Personen sichtbar sein

## 4 Testszenarios

- Unter "Tasks" kann ein neues Formular geöffnet werden. Dieses Formular kann er ausfüllen und wird anschliessend in der Datenbank gespeichert.
- Unter "My Tasks" kann der eingeloggte Benutzer seine Aufträge sehen. Da soll er direkt Notizen erfassen können und den Status anpassen.
- Ein Admin hat einen speziellen Punkt, wie ein Admin-Portal, wo er die Rolle/Berechtigung der Benutzer verwalten kann. In diesem Admin-Portal soll er auch neue Benutzer erstellen könnn. Normale Benutzer sollten dieses Admin-Panel nicht sehen.
- Alle Benutzer die in der Datenbank gespeichert sind, sollten in einem Auftrag auch als auswählbare Person zu sehen sein.