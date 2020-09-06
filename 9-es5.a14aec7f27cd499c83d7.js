function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,r):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,r,e){return r&&_defineProperties(t.prototype,r),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"Ann/":function(t,r,e){"use strict";e.r(r),e.d(r,"ProductsModule",(function(){return z}));var n,c=e("ofXK"),o=e("tyNb"),i=e("3Pt+"),a=e("KM1M"),u=e("fXoL"),d=e("SAtu"),s=((n=function(){function t(r,e){_classCallCheck(this,t),this.userservice=r,this.router=e}return _createClass(t,[{key:"canActivate",value:function(t,r){return this.checkIfAuth(r.url)}},{key:"checkIfAuth",value:function(t){return this.userservice.getIsAuth()||(this.userservice.redirectURL=t,this.router.navigate(["/user/login"]),!1)}}]),t}()).\u0275fac=function(t){return new(t||n)(u.Yb(d.a),u.Yb(o.f))},n.\u0275prov=u.Kb({token:n,factory:n.\u0275fac,providedIn:"root"}),n),b=e("R0Ic"),l=e("Wp6s"),p=function(t){return[t]};function h(t,r){if(1&t&&(u.Ub(0,"mat-card",1),u.Ub(1,"mat-card-header"),u.Ub(2,"mat-card-title",2),u.Ac(3),u.Tb(),u.Ub(4,"mat-card-subtitle"),u.Ac(5,"Fresh Product!"),u.Tb(),u.Tb(),u.Ub(6,"mat-card-content"),u.Ub(7,"div",3),u.Pb(8,"img",4),u.Pb(9,"br"),u.Ub(10,"div"),u.Ub(11,"div",5),u.Ub(12,"div",6),u.Ub(13,"div",7),u.Pb(14,"span",8),u.Pb(15,"span",8),u.Pb(16,"span",8),u.Pb(17,"span",8),u.Pb(18,"span",8),u.Tb(),u.Tb(),u.Tb(),u.Ub(19,"p"),u.Ub(20,"span"),u.Ac(21),u.hc(22,"currency"),u.Tb(),u.Pb(23,"br"),u.Ub(24,"span"),u.Ac(25),u.Tb(),u.Pb(26,"br"),u.Tb(),u.Tb(),u.Tb(),u.Ub(27,"div",9),u.Ub(28,"p",10),u.Ac(29,"Click to view in product-details"),u.Tb(),u.Tb(),u.Tb(),u.Tb()),2&t){var e=u.gc();u.nc("routerLink",u.pc(15,p,e.product.productId))("title","Click to view product details"),u.Cb(3),u.Bc(null==e.product?null:e.product.name),u.Cb(5),u.nc("src",null==e.product?null:e.product.imageUrl,u.vc)("alt",null==e.product?null:e.product.name),u.Cb(4),u.yc("width",e.starWidth,"px"),u.nc("title",e.rating),u.Cb(9),u.Bc(u.kc(22,10,null==e.product?null:e.product.price,"ksh ","symbol","1.2-2")),u.Cb(4),u.Cc("Serial: ",null==e.product?null:e.product.productCode,"")}}var m,f=((m=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnChanges",value:function(){this.product&&(this.rating=this.product.productCode,this.starWidth=15*this.rating)}}]),t}()).\u0275fac=function(t){return new(t||m)},m.\u0275cmp=u.Ib({type:m,selectors:[["app-product-thumbnail"]],inputs:{product:"product"},features:[u.Ab],decls:1,vars:1,consts:[["class","shadow-lg p-3 mb-5 bg-white rounded","id","matCard",3,"routerLink","title",4,"ngIf"],["id","matCard",1,"shadow-lg","p-3","mb-5","bg-white","rounded",3,"routerLink","title"],[1,"mat-card-title","text-success"],[1,"row","px-2"],[1,"card-img-top",3,"src","alt"],[1,""],[1,"crop","div",3,"title"],[1,"div",2,"width","75px"],[1,"fa","fa-star"],[1,"d-block"],[1,"grad"]],template:function(t,r){1&t&&u.zc(0,h,30,17,"mat-card",0),2&t&&u.nc("ngIf",r.product)},directives:[c.l,l.a,o.g,l.d,l.g,l.f,l.b],pipes:[c.c],styles:["img[_ngcontent-%COMP%]{width:100%;height:27vh}#matCard[_ngcontent-%COMP%]{margin-bottom:10px;margin-left:10px;cursor:pointer}.mat-card-title[_ngcontent-%COMP%]{color:#07f}#matCard[_ngcontent-%COMP%]:hover{background-color:#cbbdd8}.grad[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#eee,green);color:green;margin-left:10px;height:6vh;padding-top:2px}.crop[_ngcontent-%COMP%]{overflow:hidden}.div[_ngcontent-%COMP%]{cursor:pointer}.fa-star[_ngcontent-%COMP%]{color:#240361}@media (max-width:575px){img[_ngcontent-%COMP%]{width:80%}}"]}),m);function g(t,r){if(1&t&&(u.Ub(0,"div",11),u.Pb(1,"app-product-thumbnail",12),u.Tb()),2&t){var e=r.$implicit;u.nc("@fade",void 0),u.Cb(1),u.nc("product",e)}}var v,C,T=((v=function(){function t(r,e){_classCallCheck(this,t),this.router=r,this.route=e,this.listfilter=""}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.route.data.subscribe({next:function(r){t.products=r.products,t.filteredArr=t.products}})}},{key:"performFilter",value:function(t){return t=t.toLocaleLowerCase(),this.products.filter((function(r){return-1!==r.name.toLocaleLowerCase().indexOf(t)}))}},{key:"listfilter",get:function(){return this._listfilter},set:function(t){this._listfilter=t,this.filteredArr=this.listfilter?this.performFilter(this.listfilter):this.products}}]),t}()).\u0275fac=function(t){return new(t||v)(u.Ob(o.f),u.Ob(o.a))},v.\u0275cmp=u.Ib({type:v,selectors:[["app-product-list"]],decls:14,vars:2,consts:[[1,"container","main"],[1,"text-white","bg-success","py-2","pl-2","font-weight-bold","animate__animated","animate__bounceInRight"],[1,"row","container"],[1,"col-sm-8","col-md-5"],[1,"input-group"],["type","text","placeholder","search...",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append"],[1,"input-group-text"],[1,"fa","fa-search"],[1,"row","mx-sm-0","mx-md-2","p-md-3","d-flex","justify-content-center"],["class","col-sm-4 col-md-3 ",4,"ngFor","ngForOf"],[1,"col-sm-4","col-md-3"],[3,"product"]],template:function(t,r){1&t&&(u.Ub(0,"div",0),u.Ub(1,"h2",1),u.Ac(2,"Our Top Products"),u.Tb(),u.Pb(3,"hr"),u.Ub(4,"div",2),u.Ub(5,"div",3),u.Ub(6,"div",4),u.Ub(7,"input",5),u.cc("ngModelChange",(function(t){return r.listfilter=t})),u.Tb(),u.Ub(8,"div",6),u.Ub(9,"span",7),u.Pb(10,"i",8),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Pb(11,"br"),u.Ub(12,"div",9),u.zc(13,g,2,2,"div",10),u.Tb(),u.Tb()),2&t&&(u.Cb(7),u.nc("ngModel",r.listfilter),u.Cb(6),u.nc("ngForOf",r.filteredArr))},directives:[i.a,i.j,i.m,c.k,f],styles:[".fa[_ngcontent-%COMP%]{color:green}h2[_ngcontent-%COMP%]{color:#fff;margin-top:20px}.main[_ngcontent-%COMP%]{padding-top:15vh}"],data:{animation:[Object(b.m)("fade",[Object(b.l)("void => *",[Object(b.k)({backgroundColor:"eee",opacity:0}),Object(b.e)(5e3,Object(b.k)({backgroundColor:"fff",opacity:1}))])])]}}),v),U=e("HUr+"),y=e("LRne"),w=e("lJxs"),P=e("JIr8"),_=e("S3Px"),x=((C=function(){function t(r){_classCallCheck(this,t),this.productservice=r}return _createClass(t,[{key:"resolve",value:function(t,r){var e=+t.paramMap.get("id");if(isNaN(e)){var n="Wrong router "+e;return console.error(n),Object(y.a)({product:null,error:n})}return this.productservice.getProduct(e).pipe(Object(w.a)((function(t){return{product:t}})),Object(P.a)((function(t){var r="There occured an error: "+t;return console.error(r),Object(y.a)({product:null,error:r})})))}}]),t}()).\u0275fac=function(t){return new(t||C)(u.Yb(_.a))},C.\u0275prov=u.Kb({token:C,factory:C.\u0275fac,providedIn:"root"}),C),k=e("jrh1"),A=function(){return["/services/products"]};function O(t,r){if(1&t){var e=u.Vb();u.Ub(0,"div",8),u.Ub(1,"div",3),u.Ub(2,"div",9),u.Pb(3,"img",10),u.Tb(),u.Ub(4,"div",9),u.Pb(5,"br"),u.Ub(6,"strong",11),u.Ac(7,"Price: "),u.Tb(),u.Ub(8,"span"),u.Ac(9),u.hc(10,"currency"),u.Tb(),u.Pb(11,"br"),u.Ub(12,"strong",11),u.Ac(13,"Realese Date:"),u.Tb(),u.Ub(14,"span"),u.Ac(15),u.Tb(),u.Pb(16,"br"),u.Ub(17,"strong",11),u.Ac(18,"Product Code:"),u.Tb(),u.Ub(19,"span"),u.Ac(20),u.Tb(),u.Pb(21,"br"),u.Ub(22,"div"),u.Ub(23,"div",12),u.Ub(24,"div",13),u.Pb(25,"span",14),u.Pb(26,"span",14),u.Pb(27,"span",14),u.Pb(28,"span",14),u.Pb(29,"span",14),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Pb(30,"br"),u.Ub(31,"div",3),u.Ub(32,"div",15),u.Ub(33,"h3",16),u.Ac(34,"Product Details"),u.Tb(),u.Ub(35,"p",17),u.Ac(36),u.Tb(),u.Tb(),u.Tb(),u.Ub(37,"div",3),u.Ub(38,"div",9),u.Ub(39,"button",18),u.Ac(40,"Shop"),u.Tb(),u.Tb(),u.Ub(41,"div",9),u.Ub(42,"button",19),u.cc("click",(function(){u.tc(e);var t=u.gc();return t.addToCart(t.product)})),u.Ac(43," ADD TO CART "),u.Tb(),u.Tb(),u.Tb(),u.Tb()}if(2&t){var n=u.gc();u.Cb(3),u.nc("src",null==n.product?null:n.product.imageUrl,u.vc)("alt",null==n.product?null:n.product.name),u.Cb(6),u.Cc(" ",u.kc(10,10,null==n.product?null:n.product.price,"Ksh","symbol","1.2-2"),""),u.Cb(6),u.Cc(" ",null==n.product?null:n.product.releaseDate,""),u.Cb(5),u.Cc(" ",null==n.product?null:n.product.productCode,""),u.Cb(3),u.yc("width",n.starWidth,"px"),u.nc("title",n.rating),u.Cb(13),u.Bc(null==n.product?null:n.product.description),u.Cb(3),u.nc("routerLink",u.oc(15,A))}}function M(t,r){if(1&t&&(u.Ub(0,"div",20),u.Ac(1),u.Tb()),2&t){var e=u.gc();u.Cb(1),u.Cc(" ",e.errorMessage," ")}}var I,j=((I=function(){function t(r,e,n){_classCallCheck(this,t),this.productservice=r,this.route=e,this.cartservice=n,this.errorMessage=""}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this.route.snapshot.data.productResolve;this.errorMessage=t.error,this.onProductRetrival(t.product)}},{key:"onProductRetrival",value:function(t){this.product=t,this.pageTitle=this.product?""+this.product.name:"No product found"}},{key:"addToCart",value:function(t){this.cartservice.addToCart(t)}},{key:"ngOnChanges",value:function(){this.product&&(this.rating=this.product.productCode,this.starWidth=15*this.rating)}}]),t}()).\u0275fac=function(t){return new(t||I)(u.Ob(_.a),u.Ob(o.a),u.Ob(k.a))},I.\u0275cmp=u.Ib({type:I,selectors:[["app-product-detail"]],features:[u.Ab],decls:12,vars:3,consts:[[1,"container","main"],[1,"row","justify-content-center"],[1,"col-sm-10"],[1,"row"],[1,"col-md-9"],[1,"py-2","bg-success","pl-2","text-white","border",2,"border-radius","8px"],["class","sub-main",4,"ngIf"],["class","bg-danger text-white font-weight-bold",4,"ngIf"],[1,"sub-main"],[1,"col-md-5"],[3,"src","alt"],[1,"text-success"],[1,"crop","div",3,"title"],[1,"div",2,"width","75px"],[1,"fa","fa-star"],[1,"col-sm-10","ml-md-1"],[1,"text-success","mb-1","font-weight-bold",2,"text-decoration","underline"],[1,"details","text-success","px-1","py-3","text-justify","border","border-success",2,"border-radius","8px"],["type","button",1,"btn","btn-success","mr-3","text-white","w-75","mx-auto",2,"border-radius","8px",3,"routerLink"],["type","button",1,"btn","btn-warning","text-danger","w-75","mx-auto",2,"border-radius","8px",3,"click"],[1,"bg-danger","text-white","font-weight-bold"]],template:function(t,r){1&t&&(u.Ub(0,"div",0),u.Ub(1,"div",1),u.Ub(2,"div",2),u.Ub(3,"div",3),u.Ub(4,"div",4),u.Pb(5,"br"),u.Ub(6,"h2",5),u.Ac(7),u.Tb(),u.Pb(8,"hr"),u.Tb(),u.Tb(),u.zc(9,O,44,16,"div",6),u.Tb(),u.Tb(),u.Pb(10,"br"),u.zc(11,M,2,1,"div",7),u.Tb()),2&t&&(u.Cb(7),u.Bc(r.pageTitle),u.Cb(2),u.nc("ngIf",r.product),u.Cb(2),u.nc("ngIf",!r.product))},directives:[c.l,o.g],pipes:[c.c],styles:["img[_ngcontent-%COMP%]{width:100%;height:200px}.main[_ngcontent-%COMP%]{padding-top:15vh}.crop[_ngcontent-%COMP%]{overflow:hidden}.div[_ngcontent-%COMP%]{cursor:pointer}.fa-star[_ngcontent-%COMP%]{color:#240361}@media (max-width:575px){img[_ngcontent-%COMP%]{width:100%}}@media (min-width:576px){img[_ngcontent-%COMP%]{width:60%}}@media (min-width:768px){img[_ngcontent-%COMP%]{width:80%}}@media (min-width:900px){img[_ngcontent-%COMP%]{width:80%}}@media (min-width:1200px){img[_ngcontent-%COMP%]{width:80%}}"]}),I);function L(t,r){if(1&t){var e=u.Vb();u.Ub(0,"div"),u.Ub(1,"div",2),u.Ub(2,"div",3),u.Ub(3,"div"),u.Pb(4,"img",4),u.Tb(),u.Tb(),u.Ub(5,"div",5),u.Ub(6,"div",6),u.Ac(7),u.Tb(),u.Pb(8,"br"),u.Ub(9,"div",7),u.Ac(10),u.Tb(),u.Ub(11,"div",8),u.Ac(12),u.hc(13,"currency"),u.Tb(),u.Ub(14,"div",9),u.Ub(15,"em",10),u.Ac(16,"Change Quantity"),u.Tb(),u.Ub(17,"input",11),u.cc("ngModelChange",(function(t){return u.tc(e),u.gc().product.num=t}))("ngModelChange",(function(t){return u.tc(e),u.gc().modelChanged(t)})),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb()}if(2&t){var n=u.gc();u.Cb(4),u.nc("src",n.product.imageUrl,u.vc)("alt",n.product.name),u.Cb(3),u.Bc(n.product.name),u.Cb(3),u.Cc("Quatity: ",n.product.num,""),u.Cb(2),u.Cc("Price: ",u.kc(13,6,n.totalUnit(),"ksh ","symbol","1.2-2"),""),u.Cb(5),u.nc("ngModel",n.product.num)}}var R,N=((R=function(){function t(r){_classCallCheck(this,t),this.cartservice=r,this.productRemoved=new u.o,this.productNum=new u.o}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"modelChanged",value:function(t){0===this.product.num?this.productRemoved.emit(this.product):this.productNum.emit(this.product)}},{key:"totalUnit",value:function(){return this.product.num*this.product.price}}]),t}()).\u0275fac=function(t){return new(t||R)(u.Ob(k.a))},R.\u0275cmp=u.Ib({type:R,selectors:[["app-cart"]],inputs:{product:"product"},outputs:{productRemoved:"productRemoved",productNum:"productNum"},decls:2,vars:1,consts:[[1,"container","main"],[4,"ngIf"],[1,"row"],[1,"col-md-4"],[3,"src","alt"],[1,"col-md-8"],[1,"bg-success","text-white"],[1,"text-warning",2,"font-weight","bold"],[1,"mt-2","text-success"],[1,"mt-2"],[1,"mb-0","text-success"],["type","number","min","0",1,"form-control","mt-0",2,"width","100%","border-radius","5px",3,"ngModel","ngModelChange"]],template:function(t,r){1&t&&(u.Ub(0,"div",0),u.zc(1,L,18,11,"div",1),u.Tb()),2&t&&(u.Cb(1),u.nc("ngIf",r.product))},directives:[c.l,i.p,i.a,i.j,i.m],pipes:[c.c],styles:["@media (max-width:575px){img[_ngcontent-%COMP%]{width:100%}}@media (min-width:576px){img[_ngcontent-%COMP%]{width:60%}}@media (min-width:768px){img[_ngcontent-%COMP%]{width:100%;height:100%}}@media (min-width:900px){img[_ngcontent-%COMP%]{width:100%}}@media (min-width:1200px){img[_ngcontent-%COMP%]{width:100%}}"]}),R);function S(t,r){if(1&t){var e=u.Vb();u.Ub(0,"div",19),u.Pb(1,"br"),u.Ub(2,"app-cart",20),u.cc("productRemoved",(function(t){return u.tc(e),u.gc().removeProduct(t)}))("productNum",(function(t){return u.tc(e),u.gc().productNum(t)})),u.Tb(),u.Pb(3,"br"),u.Tb()}if(2&t){var n=r.$implicit;u.Cb(2),u.nc("product",n)}}var D,F,W=function(){return["/services/products"]},K=[{path:"products",component:T,resolve:{products:U.a}},{path:"products/cart",component:(D=function(){function t(r){_classCallCheck(this,t),this.cart=r,this.productRemoved=new u.o}return _createClass(t,[{key:"productNum",value:function(t){return this.productNumber=t,this.ngOnChanges(),t}},{key:"ngOnInit",value:function(){this.products=this.cart.getItems(),this.calcTotal(),this.navData=this.calcTotal(),this.cart.shopCartitem(this.navData),this.totalPrice=this.cart.getTotal(),this.totalPrice2=this.totalPrice,console.log("navbar",this.getNavData())}},{key:"calcTotal",value:function(){return this.products.reduce((function(t,r){return t+r.num}),0)}},{key:"getNavData",value:function(){return this.navData}},{key:"removeProduct",value:function(t){this.products=this.cart.removeOneItem(t);var r=_toConsumableArray(this.products).map((function(t){return t.price*t.num})).reduce((function(t,r){return t+r}),0);this.navData=this.products.reduce((function(t,r){return t+r.num}),0),this.cart.shopCartitem(this.navData),this.totalPrice2=r}},{key:"ngOnChanges",value:function(){var t=this;if(this.productNumber){var r=this.products.findIndex((function(r){return r.productId===t.productNumber.productId}));this.products[r]=this.productNumber;var e=_toConsumableArray(this.products).map((function(t){return t.price*t.num})).reduce((function(t,r){return t+r}),0);this.totalPrice2=e,this.navData=this.products.reduce((function(t,r){return t+r.num}),0),this.cart.shopCartitem(this.navData)}}}]),t}(),D.\u0275fac=function(t){return new(t||D)(u.Ob(k.a))},D.\u0275cmp=u.Ib({type:D,selectors:[["app-shoppingcart"]],outputs:{productRemoved:"productRemoved"},features:[u.Ab],decls:46,vars:16,consts:[[1,"container","main"],[1,"bg-success","text-light","mb-2","text-center","bg-success","animate__animated","animate__bounceInRight",2,"border-radius","10px"],[1,"text-center","font-weight-bold"],[1,"lead"],[1,"clearfix"],[1,"float-right","mr-2","bg-white","text-danger","p-2",2,"font-size","1.2em","border-radius","3px"],[1,"fa","fa-shopping-cart"],[1,"row","mx-2"],[1,"col-md-8"],[1,"row","justify-content-around"],["class","col-md-5 border border-success rounded mb-1",4,"ngFor","ngForOf"],[1,"col-md-4","border","border-info","rounded"],[1,"bg-success","text-white","text-center",2,"width","100%"],[1,"table"],[1,"text-warning","font-weight-bold"],[1,"row"],[1,"col-md-5"],[1,"btn","btn-success","text-light",3,"routerLink"],[1,"btn","btn-warning","text-danger"],[1,"col-md-5","border","border-success","rounded","mb-1"],[3,"product","productRemoved","productNum"]],template:function(t,r){1&t&&(u.Ub(0,"div",0),u.Ub(1,"div",1),u.Ub(2,"h2",2),u.Ac(3,"Shopping Cart"),u.Tb(),u.Ub(4,"p",3),u.Ac(5,"Welcome to goOrganic"),u.Tb(),u.Ub(6,"div",4),u.Ub(7,"p",5),u.Pb(8,"i",6),u.Ac(9),u.Tb(),u.Tb(),u.Tb(),u.Ub(10,"div",7),u.Ub(11,"div",8),u.Ub(12,"div",9),u.zc(13,S,4,1,"div",10),u.Tb(),u.Tb(),u.Ub(14,"div",11),u.Pb(15,"br"),u.Ub(16,"h2",12),u.Ac(17,"goOrganic Checkout"),u.Tb(),u.Ub(18,"div",13),u.Ub(19,"thead"),u.Ub(20,"tr"),u.Ub(21,"th"),u.Ac(22,"Subtotal:"),u.Tb(),u.Ub(23,"th"),u.Ac(24),u.hc(25,"currency"),u.Tb(),u.Tb(),u.Tb(),u.Ub(26,"tbody"),u.Ub(27,"tr"),u.Ub(28,"td"),u.Ac(29,"VAT"),u.Tb(),u.Ub(30,"td"),u.Ac(31,"KSH 0"),u.Tb(),u.Tb(),u.Ub(32,"tr"),u.Ub(33,"td"),u.Ac(34,"TOTAL"),u.Tb(),u.Ub(35,"td",14),u.Ac(36),u.hc(37,"currency"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(38,"div",15),u.Ub(39,"div",16),u.Ub(40,"button",17),u.Ac(41,"Shop"),u.Tb(),u.Tb(),u.Ub(42,"div",16),u.Ub(43,"button",18),u.Ac(44,"Checkout"),u.Tb(),u.Tb(),u.Tb(),u.Pb(45,"br"),u.Tb(),u.Tb(),u.Tb()),2&t&&(u.Cb(9),u.Cc(" Items: ",r.calcTotal(),""),u.Cb(4),u.nc("ngForOf",r.products),u.Cb(11),u.Bc(u.kc(25,5,r.totalPrice2,"KSH ","symbol","1.2-2")),u.Cb(12),u.Bc(u.kc(37,10,r.totalPrice2,"KSH ","symbol","1.2-2")),u.Cb(4),u.nc("routerLink",u.oc(15,W)))},directives:[c.k,o.g,N],pipes:[c.c],styles:[".main[_ngcontent-%COMP%]{padding-top:20vh;background-color:#fff}"]}),D),canActivate:[s]},{path:"products/:id",component:j,canActivate:[s],resolve:{productResolve:x}}],z=((F=function t(){_classCallCheck(this,t)}).\u0275mod=u.Mb({type:F}),F.\u0275inj=u.Lb({factory:function(t){return new(t||F)},imports:[[c.b,o.j.forChild(K),a.a,i.f],o.j,i.f,a.a]}),F)}}]);