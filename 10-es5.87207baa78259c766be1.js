function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8Tpx":function(e,n,r){"use strict";r.r(n),r.d(n,"UserModule",(function(){return Q}));var t=r("ofXK"),i=r("tyNb"),o=r("3Pt+"),a=r("fXoL"),c=r("SAtu");function s(e,n){1&e&&a.Pb(0,"span",10)}function b(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"email is required."),a.Tb())}function d(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"enter a valid email"),a.Tb())}function u(e,n){if(1&e&&(a.Ub(0,"div"),a.zc(1,b,2,0,"em",20),a.zc(2,d,2,0,"em",20),a.Tb()),2&e){a.gc();var r=a.sc(9);a.Cb(1),a.nc("ngIf",r.errors.required),a.Cb(1),a.nc("ngIf",r.errors.email)}}function l(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"password is required."),a.Tb())}function m(e,n){if(1&e&&(a.Ub(0,"div"),a.zc(1,l,2,0,"em",20),a.Tb()),2&e){a.gc();var r=a.sc(16);a.Cb(1),a.nc("ngIf",r.errors.required)}}function f(e,n){if(1&e&&(a.Ub(0,"button",30),a.Ac(1,"Save"),a.Tb()),2&e){a.gc();var r=a.sc(2);a.nc("disabled",r.invalid||r.invalid)}}var g=function(e){return{error:e}};function p(e,n){if(1&e){var r=a.Vb();a.Ub(0,"div",11),a.Ub(1,"form",12,13),a.cc("ngSubmit",(function(){a.tc(r);var e=a.sc(2);return a.gc().save(e)})),a.Ub(3,"div",14),a.Ub(4,"div",15),a.Ub(5,"div",16),a.Ub(6,"label",17),a.Ac(7,"Email:"),a.Tb(),a.Pb(8,"input",18,19),a.zc(10,u,3,2,"div",20),a.Tb(),a.Tb(),a.Ub(11,"div",15),a.Ub(12,"div",16),a.Ub(13,"label",21),a.Ac(14,"Password:"),a.Tb(),a.Pb(15,"input",22,23),a.zc(17,m,2,1,"div",20),a.Tb(),a.Tb(),a.Tb(),a.Ub(18,"div",24),a.Pb(19,"br"),a.Ub(20,"span",25),a.cc("mouseenter",(function(){return a.tc(r),a.gc().mouseOver=!0}))("mouseleave",(function(){return a.tc(r),a.gc().mouseOver=!1})),a.zc(21,f,2,1,"button",26),a.Tb(),a.Ub(22,"button",27),a.cc("click",(function(){return a.tc(r),a.gc().cancel()})),a.Ac(23,"Cancel"),a.Tb(),a.Ub(24,"p",28),a.Ac(25,"Dont have an account? please "),a.Ub(26,"span",29),a.Ac(27," REGISTER"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Pb(28,"br"),a.Tb()}if(2&e){var t=a.sc(9),i=a.sc(16),o=a.gc();a.Cb(5),a.nc("ngClass",a.pc(5,g,t.invalid&&(t.touched||t.dirty||o.mouseOver))),a.Cb(5),a.nc("ngIf",t.invalid&&(t.touched||t.dirty||o.mouseOver)),a.Cb(2),a.nc("ngClass",a.pc(7,g,i.invalid&&(i.touched||i.dirty||o.mouseOver))),a.Cb(5),a.nc("ngIf",i.invalid&&(i.touched||i.dirty||o.mouseOver)),a.Cb(4),a.nc("ngIf",!o.loading)}}var v,h,U=((h=function(){function e(n,r){_classCallCheck(this,e),this.router=n,this.userservice=r}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.authStatusSub=this.userservice.getAuthStatusListener().subscribe({next:function(n){e.loading=n}})}},{key:"save",value:function(e){e.invalid||(this.loading=!0,console.log(e.value),this.userservice.login({email:e.value.email,password:e.value.password}))}},{key:"cancel",value:function(){this.router.navigate(["/"])}},{key:"ngOnDestroy",value:function(){this.authStatusSub.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||h)(a.Ob(i.f),a.Ob(c.a))},h.\u0275cmp=a.Ib({type:h,selectors:[["app-clints"]],decls:16,vars:2,consts:[[1,"main","container","bg-light"],[1,"text-center","animate__animated","animate__bounceInRight"],[1,"d-block"],[1,"fa","fa-user"],[2,"color","green"],[1,"lead","mb-2"],[1,"text-success","mb-2","font-weight-bold"],[1,"sub-main","row","justify-content-center"],["class","fa fa-spinner spinner",4,"ngIf"],["class","col-sm-6 col-md-8",4,"ngIf"],[1,"fa","fa-spinner","spinner"],[1,"col-sm-6","col-md-8"],["novalidate","",3,"ngSubmit"],["loginForm","ngForm"],[1,"row","justify-content-around","mt-2"],[1,"col-md-5"],[1,"form-group",3,"ngClass"],["for","email"],["type","text","ngModel","","name","email","placeholder","email(required)","required","","email","",1,"form-control"],["email","ngModel"],[4,"ngIf"],["for","password"],["type","password","ngModel","","name","password","placeholder","password(required)","required","",1,"form-control"],["pass","ngModel"],[1,"w-75","mx-auto"],[1,"d-block",3,"mouseenter","mouseleave"],["type","submit","class","btn btn-success shadow-lg p-1 mb-2 rounded text-white","style","width: 100%;",3,"disabled",4,"ngIf"],["type","button",1,"btn","btn-outline-secondary","mt-2",2,"width","100%",3,"click"],[1,"text-success","mt-2","font-weight-bold"],["routerLink","/user/signup","id","log",1,"text-danger"],["type","submit",1,"btn","btn-success","shadow-lg","p-1","mb-2","rounded","text-white",2,"width","100%",3,"disabled"]],template:function(e,n){1&e&&(a.Ub(0,"div",0),a.Pb(1,"br"),a.Ub(2,"div",1),a.Ub(3,"span",2),a.Pb(4,"i",3),a.Tb(),a.Ub(5,"h1",4),a.Ac(6,"goOrganic"),a.Tb(),a.Ub(7,"p",5),a.Ac(8,"Please Login Here..."),a.Tb(),a.Ub(9,"p",6),a.Ac(10,"User's Point"),a.Tb(),a.Tb(),a.Ub(11,"div",7),a.Pb(12,"br"),a.Pb(13,"br"),a.zc(14,s,1,0,"span",8),a.zc(15,p,29,9,"div",9),a.Tb(),a.Tb()),2&e&&(a.Cb(14),a.nc("ngIf",n.loading),a.Cb(1),a.nc("ngIf",!n.loading))},directives:[t.l,o.x,o.k,o.l,t.j,o.a,o.j,o.m,o.t,o.b,i.g],styles:[".main[_ngcontent-%COMP%]{padding-top:13vh;min-height:100vh}input[_ngcontent-%COMP%]{width:100%;border-radius:5px;border:.1px solid #eee;margin-bottom:5px}label[_ngcontent-%COMP%]{color:#28a745;font-weight:900}.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f1a8a8}em[_ngcontent-%COMP%]{color:red;background-color:#fff;border-radius:5px}.sub-main[_ngcontent-%COMP%]{border-radius:10px;border:0 solid #28a745}form[_ngcontent-%COMP%]{margin-bottom:20px;background-color:#fff;height:100%;padding:5px;border-radius:10px;border:.5px solid #28a745}#log[_ngcontent-%COMP%]{cursor:pointer}.fa[_ngcontent-%COMP%]{font-size:1.2rem;color:#450f5a}.spinner[_ngcontent-%COMP%]{font-size:400%;position:absolute;top:50%;left:50%;z-index:10;color:green}.fa-spinner[_ngcontent-%COMP%]{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}"]}),h),T=((v=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"validate",value:function(e){var n=e.parent.get(this.appconfirmpassword);return n&&n.value!==e.value?{notEqual:!0}:null}}]),e}()).\u0275fac=function(e){return new(e||v)},v.\u0275dir=a.Jb({type:v,selectors:[["","appconfirmpassword",""]],inputs:{appconfirmpassword:"appconfirmpassword"},features:[a.Bb([{provide:o.h,useExisting:v,multi:!0}])]}),v);function C(e,n){1&e&&a.Pb(0,"span",10)}function w(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"first-name is required."),a.Tb())}function y(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"first-name must with a letter."),a.Tb())}function P(e,n){if(1&e&&(a.Ub(0,"div"),a.zc(1,w,2,0,"em",20),a.zc(2,y,2,0,"em",20),a.Tb()),2&e){a.gc();var r=a.sc(9);a.Cb(1),a.nc("ngIf",r.errors.required),a.Cb(1),a.nc("ngIf",r.errors.pattern)}}function O(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"lastname name is required."),a.Tb())}function M(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"lastname must with a letter."),a.Tb())}function A(e,n){if(1&e&&(a.Ub(0,"div"),a.zc(1,O,2,0,"em",20),a.zc(2,M,2,0,"em",20),a.Tb()),2&e){a.gc();var r=a.sc(16);a.Cb(1),a.nc("ngIf",r.errors.required),a.Cb(1),a.nc("ngIf",r.errors.pattern)}}function I(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"user contacts required"),a.Tb())}function _(e,n){if(1&e&&(a.Ub(0,"div"),a.zc(1,I,2,0,"em",20),a.Tb()),2&e){a.gc();var r=a.sc(24);a.Cb(1),a.nc("ngIf",r.errors.required)}}function q(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"email is required."),a.Tb())}function x(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"username must with a letter."),a.Tb())}function k(e,n){if(1&e&&(a.Ub(0,"div"),a.zc(1,q,2,0,"em",20),a.zc(2,x,2,0,"em",20),a.Tb()),2&e){a.gc();var r=a.sc(31);a.Cb(1),a.nc("ngIf",r.errors.required),a.Cb(1),a.nc("ngIf",r.errors.pattern)}}function z(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"password is required."),a.Tb())}function S(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"password is short and weak."),a.Tb())}function j(e,n){if(1&e&&(a.Ub(0,"div"),a.zc(1,z,2,0,"em",20),a.zc(2,S,2,0,"em",20),a.Tb()),2&e){a.gc();var r=a.sc(41);a.Cb(1),a.nc("ngIf",r.errors.required),a.Cb(1),a.nc("ngIf",r.errors.minlength)}}function N(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"Confirm password."),a.Tb())}function L(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"password is short and not matching"),a.Tb())}function E(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"password does not match."),a.Tb())}function G(e,n){if(1&e&&(a.Ub(0,"div"),a.zc(1,N,2,0,"em",20),a.zc(2,L,2,0,"em",20),a.zc(3,E,2,0,"em",20),a.Tb()),2&e){a.gc();var r=a.sc(48);a.Cb(1),a.nc("ngIf",r.errors.required),a.Cb(1),a.nc("ngIf",r.errors.minlength),a.Cb(1),a.nc("ngIf",r.errors.notEqual&&!r.errors.required&&!r.errors.minlength)}}function F(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"Your id number is required"),a.Tb())}function R(e,n){if(1&e&&(a.Ub(0,"div"),a.zc(1,F,2,0,"em",20),a.Tb()),2&e){a.gc();var r=a.sc(62);a.Cb(1),a.nc("ngIf",r.errors.required)}}function D(e,n){1&e&&(a.Ub(0,"em"),a.Ac(1,"Please specify role"),a.Tb())}function V(e,n){if(1&e&&(a.Ub(0,"div"),a.zc(1,D,2,0,"em",20),a.Tb()),2&e){a.gc();var r=a.sc(71);a.Cb(1),a.nc("ngIf",r.errors.required)}}var H=function(e){return{error:e}};function J(e,n){if(1&e){var r=a.Vb();a.Ub(0,"div",11),a.Ub(1,"form",12,13),a.cc("ngSubmit",(function(){a.tc(r);var e=a.sc(2);return a.gc().save(e)})),a.Ub(3,"div",14),a.Ub(4,"div",15),a.Ub(5,"div",16),a.Ub(6,"label",17),a.Ac(7,"Firstname *"),a.Tb(),a.Pb(8,"input",18,19),a.zc(10,P,3,2,"div",20),a.Tb(),a.Tb(),a.Ub(11,"div",15),a.Ub(12,"div",16),a.Ub(13,"label",21),a.Ac(14,"Lastname *"),a.Tb(),a.Pb(15,"input",22,23),a.zc(17,A,3,2,"div",20),a.Tb(),a.Tb(),a.Tb(),a.Ub(18,"div",14),a.Ub(19,"div",15),a.Ub(20,"div",16),a.Ub(21,"label",24),a.Ac(22,"Phone *"),a.Tb(),a.Pb(23,"input",25,26),a.zc(25,_,2,1,"div",20),a.Tb(),a.Tb(),a.Ub(26,"div",15),a.Ub(27,"div",16),a.Ub(28,"label",27),a.Ac(29,"Email *"),a.Tb(),a.Pb(30,"input",28,29),a.zc(32,k,3,2,"div",20),a.Tb(),a.Tb(),a.Tb(),a.Ub(33,"div",30,31),a.Ub(35,"div",32),a.Ub(36,"div",15),a.Ub(37,"div",16),a.Ub(38,"label",33),a.Ac(39,"Password *"),a.Tb(),a.Ub(40,"input",34,35),a.cc("input",(function(){return a.tc(r),a.sc(48).control.updateValueAndValidity()})),a.Tb(),a.zc(42,j,3,2,"div",20),a.Tb(),a.Tb(),a.Ub(43,"div",15),a.Ub(44,"div",16),a.Ub(45,"label",36),a.Ac(46,"Confirm Password *"),a.Tb(),a.Pb(47,"input",37,38),a.zc(49,G,4,3,"div",20),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(50,"div",14),a.Ub(51,"div",15),a.Ub(52,"div",39),a.Ub(53,"label",40),a.Ac(54,"Alternate Phone"),a.Tb(),a.Pb(55,"input",41,42),a.Tb(),a.Tb(),a.Ub(57,"div",15),a.Ub(58,"div",16),a.Ub(59,"label",43),a.Ac(60,"ID Number *"),a.Tb(),a.Pb(61,"input",44,45),a.zc(63,R,2,1,"div",20),a.Tb(),a.Tb(),a.Tb(),a.Ub(64,"div",46),a.Ub(65,"div",47),a.Ub(66,"div",39),a.Ub(67,"div",48),a.Ac(68,"Select Role *"),a.Tb(),a.Ub(69,"label",49),a.Pb(70,"input",50,51),a.Ac(72,"Buyer"),a.Tb(),a.Ub(73,"label",49),a.Pb(74,"input",52,51),a.Ac(76,"Farmer"),a.Tb(),a.Ub(77,"label",53),a.Pb(78,"input",54,51),a.Ac(80," Agro-Company"),a.Tb(),a.Tb(),a.zc(81,V,2,1,"div",20),a.Tb(),a.Tb(),a.Ub(82,"div",55),a.Pb(83,"br"),a.Ub(84,"span",56),a.cc("mouseenter",(function(){return a.tc(r),a.gc().mouseOver=!0}))("mouseleave",(function(){return a.tc(r),a.gc().mouseOver=!1})),a.Ub(85,"button",57),a.Ac(86,"Save"),a.Tb(),a.Tb(),a.Ub(87,"button",58),a.cc("click",(function(){return a.tc(r),a.gc().cancel()})),a.Ac(88,"Cancel"),a.Tb(),a.Ub(89,"p",59),a.Ac(90,"Have an account? please "),a.Ub(91,"span",60),a.Ac(92," LOGIN"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Pb(93,"br"),a.Tb()}if(2&e){var t=a.sc(2),i=a.sc(9),o=a.sc(16),c=a.sc(24),s=a.sc(31),b=a.sc(41),d=a.sc(48),u=a.sc(62),l=a.sc(71),m=a.gc();a.Cb(5),a.nc("ngClass",a.pc(17,H,i.invalid&&(i.touched||i.dirty||m.mouseOver))),a.Cb(5),a.nc("ngIf",i.invalid&&(i.touched||i.dirty||m.mouseOver)),a.Cb(2),a.nc("ngClass",a.pc(19,H,o.invalid&&(o.touched||o.dirty||m.mouseOver))),a.Cb(5),a.nc("ngIf",o.invalid&&(o.touched||o.dirty||m.mouseOver)),a.Cb(3),a.nc("ngClass",a.pc(21,H,c.invalid&&(c.touched||c.dirty||m.mouseOver))),a.Cb(5),a.nc("ngIf",c.invalid&&(c.touched||c.dirty||m.mouseOver)),a.Cb(2),a.nc("ngClass",a.pc(23,H,s.invalid&&(s.touched||s.dirty||m.mouseOver))),a.Cb(5),a.nc("ngIf",s.invalid&&(s.touched||s.dirty||m.mouseOver)),a.Cb(1),a.nc("ngClass",a.pc(25,H,d.invalid&&(d.touched||d.dirty||m.mouseOver)&&!d.errors.required)),a.Cb(4),a.nc("ngClass",a.pc(27,H,b.invalid&&(b.touched||b.dirty||m.mouseOver))),a.Cb(5),a.nc("ngIf",b.invalid&&(b.touched||b.dirty||m.mouseOver)),a.Cb(2),a.nc("ngClass",a.pc(29,H,b.invalid&&(b.touched||b.dirty||m.mouseOver))),a.Cb(5),a.nc("ngIf",d.invalid&&(d.touched||d.dirty||m.mouseOver)),a.Cb(9),a.nc("ngClass",a.pc(31,H,u.invalid&&(u.touched||u.dirty||m.mouseOver))),a.Cb(5),a.nc("ngIf",u.invalid&&(u.touched||u.dirty||m.mouseOver)),a.Cb(18),a.nc("ngIf",l.invalid&&(l.dirty||m.mouseOver)),a.Cb(4),a.nc("disabled",t.invalid||t.invalid)}}var B,K,X=((B=function(){function e(n,r){_classCallCheck(this,e),this.router=n,this.userservice=r,this.loading=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.authStatusSub=this.userservice.getAuthStatusListener().subscribe({next:function(n){e.loading=n}})}},{key:"save",value:function(e){if(!e.invalid){this.loading=!0;var n={firstname:e.value.firstname,lastname:e.value.lastname,email:e.value.email,password:e.value.passwordGroup.password,phone:e.value.phoneNumber,role:e.value.role,idNumber:e.value.idNumber?e.value.idNumber:"",alternatePhone:e.value.alternatePhone?e.value.alternatePhone:""};console.log(e.value),this.userservice.signup(n)}}},{key:"cancel",value:function(){this.router.navigate(["/user/login"])}},{key:"ngOnDestroy",value:function(){this.authStatusSub.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||B)(a.Ob(i.f),a.Ob(c.a))},B.\u0275cmp=a.Ib({type:B,selectors:[["ng-component"]],decls:16,vars:2,consts:[[1,"main","container","bg-light"],[1,"text-center","animate__animated","animate__bounceInRight"],[1,"d-block"],[1,"fa","fa-user"],[2,"color","green"],[1,"lead","mb-2"],[1,"text-success","mb-2","font-weight-bold"],[1,"sub-main","row","justify-content-center"],["class","fa fa-spinner spinner",4,"ngIf"],["class","col-sm-6 col-md-8",4,"ngIf"],[1,"fa","fa-spinner","spinner"],[1,"col-sm-6","col-md-8"],["autocomplete","off","novalidate","",3,"ngSubmit"],["signUpForm","ngForm"],[1,"row","justify-content-around","mt-2"],[1,"col-md-5"],[1,"form-group",3,"ngClass"],["for","fname"],["type","text","ngModel","","name","firstname","placeholder","firstname(required)","required","","pattern","[a-zA-Z].*",1,"form-control"],["fname","ngModel"],[4,"ngIf"],["for","lname"],["type","text","ngModel","","name","lastname","placeholder","lastname(required)","id","lname","required","","pattern","[a-zA-Z].*",1,"form-control"],["sname","ngModel"],["for","usernum"],["type","tel","ngModel","","name","phoneNumber","placeholder","phoneNumber(required)","id","username","required","",1,"form-control"],["usern","ngModel"],["for","email"],["type","text","name","email","ngModel","","placeholder","email(required)","required","","id","email","email","",1,"form-control"],["useremail","ngModel"],["ngModelGroup","passwordGroup",3,"ngClass"],["passwordGroup","ngModelGroup"],[1,"row","justify-content-around"],["for","password"],["type","password","ngModel","","name","password","id","password","placeholder","password(required)","required","","minlength","6",1,"form-control",3,"input"],["pass","ngModel"],["for","c_password"],["type","password","ngModel","","name","c_password","appconfirmpassword","password","id","c_password","placeholder","confirm password(required)","required","","minlength","6",1,"form-control"],["c_pass","ngModel"],[1,"form-group"],["for","phone"],["type","tel","ngModel","","name","alternatePhone","placeholder","alternatePhone(optional)","id","phone",1,"form-control"],["altphone","ngModel"],["for","idnum"],["type","text","name","idNumber","ngModel","","placeholder","ID Number(required)","required","","id","idnum","required","",1,"form-control"],["idnum","ngModel"],[1,"row","justify-content-start"],[1,"col-md-6","ml-md-3"],[1,"font-weight-bold","text-success","ml-3"],[1,"radio-inline","mr-3","font-weight-normal",2,"color","#111"],["type","radio","value","buyer","name","role","id","buyer","ngModel","","required","",1,"margin-left-2"],["role","ngModel"],["type","radio","value","farmer","name","role","id","farmer","ngModel","","required",""],[1,"radio-inline","font-weight-normal",2,"color","#111"],["type","radio","value","agro-chemical-company","name","role","id","agro-chemical-company","ngModel","","required",""],[1,"w-75","mx-auto"],[1,"d-block",3,"mouseenter","mouseleave"],["type","submit",1,"btn","btn-success","shadow-lg","p-1","mb-2","rounded","text-white",2,"width","100%",3,"disabled"],["type","button",1,"btn","btn-outline-secondary","mt-3",2,"width","100%",3,"click"],[1,"text-success","my-2","font-weight-bold"],["routerLink","/user/client-signin","id","log",1,"text-danger"]],template:function(e,n){1&e&&(a.Ub(0,"div",0),a.Pb(1,"br"),a.Ub(2,"div",1),a.Ub(3,"span",2),a.Pb(4,"i",3),a.Tb(),a.Ub(5,"h1",4),a.Ac(6,"goOrganic"),a.Tb(),a.Ub(7,"p",5),a.Ac(8,"Please Register Here"),a.Tb(),a.Ub(9,"p",6),a.Ac(10,"User's Point"),a.Tb(),a.Tb(),a.Ub(11,"div",7),a.Pb(12,"br"),a.Pb(13,"br"),a.zc(14,C,1,0,"span",8),a.zc(15,J,94,33,"div",9),a.Tb(),a.Tb()),2&e&&(a.Cb(14),a.nc("ngIf",n.loading),a.Cb(1),a.nc("ngIf",!n.loading))},directives:[t.l,o.x,o.k,o.l,t.j,o.a,o.j,o.m,o.t,o.q,o.b,o.n,o.g,T,o.r,i.g],styles:[".main[_ngcontent-%COMP%]{padding-top:13vh;min-height:100vh}input[_ngcontent-%COMP%]{width:100%;border-radius:5px;border:.1px solid #eee;margin-bottom:5px}label[_ngcontent-%COMP%]{color:#28a745;font-weight:900}.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f1a8a8}em[_ngcontent-%COMP%]{color:red;background-color:#fff;border-radius:5px}.sub-main[_ngcontent-%COMP%]{border-radius:10px;border:0 solid #28a745}form[_ngcontent-%COMP%]{margin-bottom:20px;background-color:#fff;height:100%;padding:5px;border-radius:10px;border:.5px solid #28a745}#log[_ngcontent-%COMP%]{cursor:pointer}.fa[_ngcontent-%COMP%]{font-size:1.2rem;color:#450f5a}.spinner[_ngcontent-%COMP%]{font-size:400%;position:absolute;top:50%;left:50%;z-index:10;color:green}.fa-spinner[_ngcontent-%COMP%]{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}"]}),B),Z=r("KM1M"),Y=[{path:"login",component:U},{path:"signup",component:X}],Q=((K=function e(){_classCallCheck(this,e)}).\u0275mod=a.Mb({type:K}),K.\u0275inj=a.Lb({factory:function(e){return new(e||K)},imports:[[t.b,i.j.forChild(Y),Z.a,o.f,o.s],i.j,t.b,o.f,o.s]}),K)}}]);