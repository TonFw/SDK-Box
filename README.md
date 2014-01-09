SDK-Box
=====
SDK p/ desenvolvimento de WebApps __HTML5__, __CSS3__ e __JS (AngularJS)__ conectado a __APIs__ fornecedoras de dados.

## Frameworks

* CSS
  * [Bootstrap 2](http://getbootstrap.com/2.3.2/)

* JavaScript
  * [AngularJS](http://angularjs.org/)
  * [Bootstrap](http://getbootstrap.com/2.3.2/javascript.html) (jQuery Plugin)
  * <del>[jQuery](http://jquery.com/)</del> (Este será usado apenas para alimentar o Bootstrap)

* Icon Fonts
  * [Foundation Icon 3](http://zurb.com/playground/foundation-icon-fonts-3)
  * [Font Awesome](http://fontawesome.io/icons/)
  * [Ico moon](http://icomoon.io/)
  * <del>[Fontello](http://fontello.com/)</del> (Não recomendável utilizar mais icones deste)


## Padrões de codificação do SDK

####### Os 10 mandamentos

####### Mandamentos CSS

1- Não utilizarás Width setado na mão e nem CSS inline:

```
ERRADO
div {
 width: 2px;
}

SEU CÓDIGO É TÃO BOM QUE ME DEU CÂNCER
<div style="width: 100%">
```


```
MEUS OLHOS BRILHAM
<div class="span3">
 <span></span>
</div>
```

2- Sempre removerás margins dos Spans usarando Row, p/ elementos na mesma linha:

```
ERRADO
#funcionalidade div {
 margin: 0;
}

SEU CÓDIGO É TÃO BOM QUE ME DEU CÂNCER
div {
 margin: 0;
}
```

```
MEUS OLHOS BRILHAM
<div class="container">
 <div id="funcionalidade" class="row">
    <div class="span6"></div>
    <div class="span6"></div>
 </div>
</div>
```

3- Sempre selecionarás o elemento para estilo acoplando-o a seu elemento pai:

```
ERRADO
#funcionalidade div {
 /* estilo */
}

SEU CÓDIGO É TÃO BOM QUE ME DEU CÂNCER
div {
 /* estilo */
}
```

```
MEUS OLHOS BRILHAM
<div id="elemento_pai">
 <span class="elemento_funcional"></span>
</div>

#elemento_pai span.elemento_funcional {
 /* estilo */
}
```

####### Mandamentos HTML

4-

5-

6-


####### Mandamentos JS

7- Manipularás o estilo dinamicamente __sem__ uso do jQuery:

```
ERRADO
val = $('#input').val();
$('.elemento').addClass(val);

SEU CÓDIGO É TÃO BOM QUE ME DEU CÂNCER
val = $('form input')[0].val();
$('.elemento').removeClass(val);
```

```
MEUS OLHOS BRILHAM
<input ng-model="val" />
<span class="elemento {{ val }}">  </span>
```

8- Sempre criará seu AngularJS Controller no arquivo de mesmo nome e setá-lo na div mãe da funcionalidade:

```
ERRADO
editor_cor_letra.js
SDK-Box_App.controller('editor_cor_letra', function($scope, $http){
   // Code
});

SEU CÓDIGO É TÃO BOM QUE ME DEU CÂNCER
EditorCorLetra.js
SDK-Box_App.controller('Editor_Cor_Letra', function($scope, $http){
   // Code
});
<body ng-controller="Editor_Cor_Letra">
```

```
MEUS OLHOS BRILHAM
editor_cor_letra.js
SDK-Box_App.controller('EditorCorLetra', function($scope, $http){
 // Code
});
<div ng-controller="EditorCorLetra">
 <!-- MarkUp da funcionalidade aqui -->
</div>
```

9- Encapsularás suas variáveis dentro de seu Controllers e/ou Models <del> __var global__ </del>:

```
ERRADO
var xpto = 'BAD SMELL';

SEU CÓDIGO É TÃO BOM QUE ME DEU CÂNCER
var xpto = 'BAD SMELL';
SDK-Box_App.controller('EditorCorLetra', function($scope, $http){
   var xpto = 'ferrei tudo de vez';
});
```

```
MEUS OLHOS BRILHAM
SDK-Box_App.controller('EditorCorLetra', function($scope, $http){
   var xptolas_loucas = 'GOD LIKE';
});
```

10- Funções adicionadas ao escopo serão nome1_nome2 e modelos serão CamelCase:

```
ERRADO
SDK-Box_App.controller('EditorCorLetra', function($scope, $http){
   $scope.funcao_marota = function(){ };
});

SEU CÓDIGO É TÃO BOM QUE ME DEU CÂNCER
SDK-Box_App.controller('EditorCorLetra', function($scope, $http){
   $scope.Xpto_Las = 'OLA';
});
```

```
MEUS OLHOS BRILHAM
SDK-Box_App.controller('EditorCorLetra', function($scope, $http){
 // Definição do modelo deste escopo de Controller
 $scope.FuncaoMarota = funcao_marota();
 
 // Definição da função
 function funcao_marota() { };
});
```


### CSS
--------
Work Flow:
* Cria a pasta com o nome da funcionalidade/elemento a ser desenvolvida(o)
* Cria style_geral.css, dentro do pasta que, importa os outros CSS deste dado elemento/funcionaliade

```
  @import "nome_css.css";
```

* Adiciona a linha de código ao Style.css (este só deve conter imports em seu conteúdo)

```
  @import "nome_elemento/style_geral.css";
```

### HTML
--------



### JS
--------
Work Flow:



### AngularJS
--------
Work Flow:



