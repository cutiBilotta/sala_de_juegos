"use strict";(self.webpackChunksalaDeJuegos=self.webpackChunksalaDeJuegos||[]).push([[614],{6614:(Z,d,r)=>{r.r(d),r.d(d,{HomeModule:()=>x});var l=r(6814),u=r(1826),e=r(5879),g=r(2333),s=r(95);function m(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"div",2),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.mostrarChat=!0)}),e._UZ(1,"img",3),e.qZA()}}function p(n,i){if(1&n&&(e.TgZ(0,"p",15)(1,"a",16),e._uU(2),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"a",16),e._uU(5),e.qZA(),e._uU(6),e.qZA()),2&n){const o=i.$implicit,t=e.oxw(2);e.Q6J("ngClass",t.usuarioLogeado.uid==o.emisor?"enviado":"recibido"),e.xp6(2),e.Oqu(t.email),e.xp6(3),e.Oqu(o.hora),e.xp6(1),e.hij(" \xa0",o.texto," ")}}const h=function(){return{standalone:!0}};function _(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"div",4)(1,"div",5),e._uU(2,"Chat "),e.TgZ(3,"div",6),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.mostrarChat=!1)}),e._uU(4,"X"),e.qZA()(),e.TgZ(5,"div",7)(6,"div",8),e.YNc(7,p,7,4,"p",9),e.qZA()(),e.TgZ(8,"form",10),e.NdJ("ngSubmit",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.enviarMensaje())}),e.TgZ(9,"input",11),e.NdJ("ngModelChange",function(a){e.CHM(o);const c=e.oxw();return e.KtG(c.nuevoMensaje=a)}),e.qZA(),e.TgZ(10,"div",12),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.enviarMensaje())}),e.TgZ(11,"span",13),e._UZ(12,"img",14),e.qZA()()()()}if(2&n){const o=e.oxw();e.xp6(7),e.Q6J("ngForOf",o.mensajes),e.xp6(2),e.Q6J("ngModel",o.nuevoMensaje)("ngModelOptions",e.DdM(3,h))}}let f=(()=>{var n;class i{constructor(t){this.authService=t,this.nuevoMensaje="",this.mensajes=[],this.email="",this.mostrarChat=!1,this.info=""}ngOnInit(){this.authService.getUserLogged().subscribe(t=>{this.usuarioLogeado=t}),this.authService.getUserEmail().subscribe(t=>{this.email=t,null!==t?console.log("Correo electr\xf3nico:",t):console.log("Usuario no autenticado")},t=>{console.error("Error:",t)})}enviarMensaje(){if(console.log(this.nuevoMensaje),""!=this.nuevoMensaje){var t=new Date,a=t.getHours(),c=t.getMinutes();this.info=a+":"+c+"  ",this.mensajes.push({hora:this.info,emisor:this.usuarioLogeado.uid,texto:this.nuevoMensaje}),this.nuevoMensaje="",setTimeout(()=>{this.scrollHastaUltimoMensaje()})}}scrollHastaUltimoMensaje(){const t=document.getElementById("contenedorDeMensajes");t&&(t.scrollTop=t.scrollHeight)}}return(n=i).\u0275fac=function(t){return new(t||n)(e.Y36(g.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-chat"]],decls:2,vars:2,consts:[["class","chatIconContainer",3,"click",4,"ngIf"],["class","card text-center cardContainer",4,"ngIf"],[1,"chatIconContainer",3,"click"],["src","../../../assets/img/chat.png","alt","",1,"chatIcon"],[1,"card","text-center","cardContainer"],[1,"card-header"],[1,"closeIcon",3,"click"],[1,"card-body"],["id","contenedorDeMensajes",1,"contenedorMensajes","h-100"],["class","msj p-2",3,"ngClass",4,"ngFor","ngForOf"],[1,"card-footer","text-muted","input-group",3,"ngSubmit"],["type","text","placeholder","ingrese su mensaje",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"input-group-append",3,"click"],[1,"input-group-text"],["src","../../../assets/img/send.png","width","20px","height","20px",1,"imgEnviar"],[1,"msj","p-2",3,"ngClass"],[1,"hora","text-muted"]],template:function(t,a){1&t&&(e.YNc(0,m,2,0,"div",0),e.YNc(1,_,13,4,"div",1)),2&t&&(e.Q6J("ngIf",a.usuarioLogeado&&!a.mostrarChat),e.xp6(1),e.Q6J("ngIf",a.usuarioLogeado&&a.mostrarChat))},dependencies:[l.mk,l.sg,l.O5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F],styles:[".cardContainer[_ngcontent-%COMP%]{width:300px;height:500px;position:fixed;right:.5rem;bottom:.5rem}.card-header[_ngcontent-%COMP%]{background-color:#151c4e;color:#fff;font-weight:700}.card-body[_ngcontent-%COMP%]{padding:.5rem}.imgEnviar[_ngcontent-%COMP%]:active{transform:scale(.9)}.enviado[_ngcontent-%COMP%]{display:block;float:right;background-color:teal;color:#fff;min-width:50.01%;border-radius:10px;text-align:left}.recbido[_ngcontent-%COMP%]{display:block;float:left;background-color:gray;color:#fff;min-width:50.01%;border-radius:10px;text-align:left}.contenedorMensajes[_ngcontent-%COMP%]{overflow:scroll;padding:.3rem}.contenedorMensajes[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.chatIconContainer[_ngcontent-%COMP%]{position:fixed;right:.5rem;bottom:.5rem;display:flex;justify-content:center;align-items:center;width:60px;height:60px;cursor:pointer;border-radius:100%}.chatIcon[_ngcontent-%COMP%]{width:40px;height:40px}.closeIcon[_ngcontent-%COMP%]{position:absolute;right:.5rem;top:0rem;cursor:pointer}.hora[_ngcontent-%COMP%]{font-size:x-small;text-decoration:none}"]}),i})();const v=[{path:"",component:(()=>{var n;class i{constructor(t,a){this.authService=t,this.router=a,this.userLogged=null,this.email=""}ngOnInit(){this.authService.getUserEmail().subscribe(t=>{this.email=t,null!==t?console.log("Correo electr\xf3nico:",t):console.log("Usuario no autenticado")},t=>{console.error("Error:",t)})}logOut(){this.authService.logout(),this.email="Bienvenido!"}quienSoy(){this.router.navigate(["/quien-soy"])}}return(n=i).\u0275fac=function(t){return new(t||n)(e.Y36(g.e),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:51,vars:1,consts:[[1,"container"],[1,"navbar","navbar-light",2,"background-color","#dc3545"],["href","#",1,"navbar-brand"],["src","../../../assets/img/icon.png","width","30","height","30","alt","",1,"d-inline-block","align-top"],[1,"ml-auto"],["type","button",1,"btn","btn-warning","mx-2","my-2",3,"click"],[1,"text-light"],[1,"card-group","ms-5","me-5","mt-3"],[1,"card","col-md-4","mx-2","my-2"],["src","../../../assets/img/cards2.png","alt","cartas",1,"card-img-top",2,"height","300px","width","520px"],[1,"card-body"],[1,"card-title","text-center"],[1,"card-text"],[1,"text-muted"],["routerLink","/mayor-o-menor"],["src","../../../assets/img/3D.jpg","alt","dados",1,"card-img-top",2,"height","300px","width","520px"],["routerLink","#"],["src","../../../assets/img/hangman.jpg","alt","dados",1,"card-img-top",2,"height","300px","width","520px"],["routerLink","/ahorcado"]],template:function(t,a){1&t&&(e.TgZ(0,"body")(1,"div",0),e._UZ(2,"br")(3,"br"),e.TgZ(4,"nav",1)(5,"a",2),e._uU(6,"\xa0\xa0\xa0\xa0\xa0 "),e._UZ(7,"img",3),e._uU(8),e.qZA(),e.TgZ(9,"div",4)(10,"button",5),e.NdJ("click",function(){return a.quienSoy()}),e._uU(11,"Qui\xe9n soy"),e.qZA(),e.TgZ(12,"button",5),e.NdJ("click",function(){return a.logOut()}),e._uU(13,"Log Out"),e.qZA()()(),e.TgZ(14,"h1",6),e._uU(15,"Bienvenido a la Sala de Juegos"),e.qZA(),e.TgZ(16,"div",7)(17,"div",8),e._UZ(18,"img",9),e.TgZ(19,"div",10)(20,"h5",11),e._uU(21,"Mayor o Menor"),e.qZA(),e.TgZ(22,"p",12),e._uU(23,"Este juego consiste en desafiar al azar, el jugador debera adivinar si la carta siguiente sera mayor o menor a la actual."),e.qZA(),e.TgZ(24,"p",12)(25,"small",13)(26,"a",14),e._uU(27,"Jugar ahora"),e.qZA()()()()(),e.TgZ(28,"div",8),e._UZ(29,"img",15),e.TgZ(30,"div",10)(31,"h5",11),e._uU(32,"Millenium"),e.qZA(),e.TgZ(33,"p",12),e._uU(34,"Desaf\xeda al cubilete! Tendras que sacar el 1 o el 5 para poder sumar puntos hasta el 1000, sino perder\xe1s una vida."),e.qZA(),e.TgZ(35,"p",12)(36,"small",13)(37,"a",16),e._uU(38,"Jugar ahora"),e.qZA()()()()(),e.TgZ(39,"div",8),e._UZ(40,"img",17),e.TgZ(41,"div",10)(42,"h5",11),e._uU(43,"Ahorcado"),e.qZA(),e.TgZ(44,"p",12),e._uU(45,"Tendr\xe1s que adivinar la palabra! Tienes 5 vidas para adivinar las letras correctas"),e.qZA(),e.TgZ(46,"p",12)(47,"small",13)(48,"a",18),e._uU(49,"Jugar ahora"),e.qZA()()()()()(),e._UZ(50,"app-chat"),e.qZA()()),2&t&&(e.xp6(8),e.hij(" ",a.email," "))},dependencies:[u.rH,f],styles:["body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;background-image:url(91655.ae077556769fd17a.jpg);background-size:100%}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{margin-top:40px;display:flex;justify-content:center;align-items:center}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}"]}),i})()}];let C=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(v),u.Bz]}),i})(),x=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,C,s.u5]}),i})()}}]);