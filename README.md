SDK-Box
=====
SDK de desenvolvimento de WebApps em __HTML__, __CSS__ e __JS__ com __AngularJS__ conectado a __APIs__ fornecedoras de dados.

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
  <div class="span3">
   <span></span>
  </div>
```

2- Sempre removerás margins dos Spans usarando Row, p/ elementos na mesma linha:

```
<div class="container">
 <div class="row">
    <div class="span6"></div>
    <div class="span6"></div>
 </div>
</div>
```

3- Sempre selecionarás o elemento para estilo acoplando-o a seu elemento pai:

```
  HTML
  <div id="elemento_pai">
   <span></span>
  </div>
  
  CSS
  #elemento_pai span{
   /* code */
  }
```

####### Mandamentos HTML



####### Mandamentos JS

4- Manipularás o estilo dinamicamente __sem__ uso do jQuery:

```
  HTML
  <div class="{{ estilo.estado }}">
   <span></span>
  </div>
```

5- Sempre criará seu AngularJS Controller no arquivo de mesmo nome e setá-lo na div mãe da funcionalidade:

```
  editor_cor_letra.js
  
  SDK-Box_App.controller('EditorCorLetra', function($scope, $http){
   // Code
  });
  
  <div ng-controller="EditorCorLetra">
   <!-- MarkUp da funcionalidade aqui -->
  </div>
```

6- Encapsularás suas variáveis dentro de seu Controllers e/ou Models <del> __var global__ </del>:

```
  var xpto = 'BAD SMELL';
  
  SDK-Box_App.controller('EditorCorLetra', function($scope, $http){
   var xptolas_loucas = 'Heaven Semll';
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



