# Auftrag

## 1 Twig

Twig ist eine Template-Engine für PHP. Es kann genutzt werden um HTML-Code wiederzuverwenden und z.B. for-Schleifen in HTML-Code einzubauen.

Aufbau der Twig Ordnerstruktur:
```
├───app
│   ├───app
│   │   ├───config
│   │   ├───controllers
│   │   ├───core
│   │   ├───helpers
│   │   ├───models
│   │   └───views
│   │       ├───auto
│   │       ├───base
│   │       └───home
│   └───public
│       └───css
├───mysql
│   ├───initscripts
│   └───mysqldata
│       ├───#innodb_redo
│       ├───#innodb_temp
│       ├───mysql
│       ├───performance_schema
│       ├───sys
│       └───testdb
└───php
```

### 1.1 Design

Um Twig zu nutzen, muss die Datei mit `.twig.html` enden.

#### 1.1.1 Base

Als erstes muss man ein Base Template erstellen. Diese ist der Start für jede HTML-Seite später.

```html title="./views/base/layout.twig.html"
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" href="asset/favicon.ico">
  <link rel="stylesheet" href="css/style.css">
  <script src="https://cdn.tailwindcss.com"></script>

  <title>{{ title }}</title>

</head>

<body>

  <!-- Include der Navbar -->
  {{ include('base/header.twig.html') }}


  <!-- Begin page content -->
  <main role="main" class="mx-5">

    <!-- Der Content Block kann von Subtemplates überschrieben werden -->
    {% block content %}
    {% endblock %}

  </main>


  <!-- Include Footer -->
  {{ include('base/footer.twig.html') }}

  <!-- Include von js-Imports -->
  {{ include('base/corejs.twig.html') }}
</body>

</html>
```

include: Mit `{{ include('...') }}` kann eine andere Datei in diesen Bereich eingebunden werden. somit kann z.B. Header, Main und Footer in verschiedene Dateien unterteilt werden.

block: Mit `{% block ... %} {% endblock %}` kann ein Bereich definiert werden, der durch Subtemplates überschrieben werden kann.

#### 1.1.2 Subtemplates

In Subtemplates kann der Inhalt für die verschiedenen Seiten geschrieben werden und immer die gleiche Vorlage genutzt werden.

```html title="./views/home/index.twig.html"
{% extends "base/layout.twig.html" %}

{% block content %}

<h1>Home</h1>

{% endblock %}
```

extends: Mit `{% extends "..." %}` kann eine andere Vorlage eingebunden und erweitert werden.

block: `{% block ... %}` kann der im Template definierte Bereich überschreiben.

#### 1.1.3 Funktionen

In Twig kann im HTML-Code direkt mit Funktionen gearbeitet werden.

##### 1.1.3.1 If

```html
{% if condition %}
    <p>if</p>
{% elseif condition2 %}
    <p>else if</p>
{% else %}
    <p>else</p>
{% endif %}
```

##### 1.1.3.2 For

```html
{% for item in array %}
    <p>{{ item }}</p>
{% endfor %}
```

### 1.2 Logik

Mit Twig können Formulare direkt in HTML geschrieben werden.

```html
{% extends "base/layout.twig.html" %}

<!-- Wir überschreiben den Content-Block -->
{% block content %}
<form>
    <div class="form-container">
        <label for="formel1Fahrer">Formel 1 Fahrer</label>
        <input type="text" class="form-input" id="formel1Fahrer" name="formel1Fahrer" value="{{ formel1.fahrer }}">
    </div>
    <div class="form-container">
        <label for="formel1Team">Formel 1 Team</label>
        <input type="text" class="form-input" id="formel1Team" name="formel1Team" value="{{ formel1.team }}">
    </div>
</form>
{% endblock %}
```