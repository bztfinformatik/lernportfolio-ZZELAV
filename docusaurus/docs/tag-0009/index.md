---
sidebar_position: 2
title: "Tag 9"
pagination_prev: null
tags:
  - Tag 9
  - PHP
  - LB1 / LB2
---

# Tag 9

:::info
Arbeiten an LB1 / LB2
:::

## 1 Input Validierung

Validerung kann clientseitig und serverseitig ausgeführt werden. Es macht Sinn eine einfache Validierung bereits auf clientseite zu machen. In den input-Elementen kann z.B. festgelegt werden, ob dieses Feld eine E-Mail enthalten muss. Somit wird bereits überpüft ob die Eingabe ein @-Symbol enthält.

Es gilt die goldene Regel *never trust the user*.

Hat man z.B. zwei Zahlen, die dividiert werden sollen, soll eine Eingabe von `0` bei der zweiten Zahl nicht möglich sein.

Dies könnte mit einem if abgefangen werden.

```
...
if($zahl2 != 0) {
  echo $zahl1 / $zahl2;
} else {
  echo "Infinity";
}
...
```