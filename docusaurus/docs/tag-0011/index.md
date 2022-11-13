---
sidebar_position: 2
title: "Tag 11"
pagination_prev: null
tags:
  - Tag 11
  - PHP
  - LB1 / LB2
  - Regex
---

# Tag 11

:::info
Arbeiten an LB1 / LB2
:::

## 1 Regex / Reguläre Ausdrücke

Ein regulärer Audruck (kurz Regex) ist eine Zeichenkette, die mit Regeln eine andere Zeichenkette überprüfen kann (Pattern Matching). Viele Texteditors verwenden Regex bei der Suchen und ersetzen Funktion.

Die Seite [regexr.com](https://regexr.com/) kann helfen beim erstellen und herausfinden von regülären Ausdrücken.

```regex
/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/
```

Der obige Ausdruck überprüft ob die Eingabe eine gültige IP-Adresse ist.

**Wichtige Zeichen in Regex**

`^`: Anfang einer Zeichenkette  
`$`: Ende einer Zeichenkette  
`[a-z]`: Enhält ein Zeichen von a bis z  
`[a-zA-Z]`: Enhält ein Zeichen von a bis z und A bis Z  
`*`: Null oder mehrfach  
`+`: Ein bis n mall  
`?`: Null oder einmal  
`{2,4}`: 2 bis 4 mal