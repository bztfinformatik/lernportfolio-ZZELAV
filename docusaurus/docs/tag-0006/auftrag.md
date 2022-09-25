# Auftrag

## 1 Sequenzdiagramm Webseitenaufruf

![PlantUML MVC](/data/tag-0006/plantuml_mvc_sequenceDiagram.png)

[Source Code](/appendix/plantuml_mvc#sequenzdiagramm)

## 2 Klassendiagramm Framework

![PlantUML MVC](/data/tag-0006/plantuml_mvc_classDiagram.png)

[Source Code](/appendix/plantuml_mvc#klassendiagramm)

## 3 Datenobjekt Auto

```php title="./app/app/models/Auto.php"
<?php

class Auto
{
    public $name;
}
```

```php title="./app/app/views/home/auto.php"
Auto <?=$data['name']?> ausgewählt
```

```php title="./app/app/controllers/home.php"
<?php

public function auto($name = '')
{
    $user = $this->model('Auto');
    $user->name = $name;

    $this->view('home/auto', ['name' => $user->name]);
}
```

Als erstes wird das Model "Auto" erstellt, in dieser Klasse gibt es eine Eigenschaft die den Namen hält. Als nächstes wird eine neue View erstellt, die die Eigenschaft vom Model "Auto" einsetzt. Im Controller wird eine neue Funktion `auto($name = '')` definiert, diese lädt das Model "Auto" und setzt aus den Übergabeparameter auf die Eigenschaft des Models. Zuletzt wird die View ausgewählt.