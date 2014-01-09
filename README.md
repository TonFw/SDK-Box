PrSDK
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



