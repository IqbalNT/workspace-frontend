(self.webpackChunkums=self.webpackChunkums||[]).push([[378],{378:(e,r,t)=>{"use strict";t.r(r),t.d(r,{AuthModule:()=>B});var i=t(8909),n=t(3679),o=t(4839),a=t(2238);class s{static match(e){return r=>{const t=r.parent&&r.parent.get(e);return t&&t.value===r.value?null:{match:!0}}}static emailCheck(e){const r=e.value;return null===r||""===r||r.toString().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||r.toString().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?null:{email:!0}}static cellNumberCheck(e){const r=e.value;return null===r||""===r||r.toString().match(/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/)||r.toString().match(/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/)?null:{cellNumber:!0}}}var c=t(7716),l=t(384),m=t(62),u=t(5777),d=t(5618),f=t(8295),g=t(9983),p=t(8583);function h(e,r){1&e&&(c.ynx(0),c._uU(1,"Name is required"),c.BQk())}function x(e,r){if(1&e&&(c.TgZ(0,"mat-error"),c.YNc(1,h,2,0,"ng-container",6),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngIf",e.name.hasError("required"))}}function Z(e,r){1&e&&(c.ynx(0),c._uU(1,"Email is required"),c.BQk())}function v(e,r){1&e&&(c.ynx(0),c._uU(1,"Invalid Email address"),c.BQk())}function y(e,r){if(1&e&&(c.TgZ(0,"mat-error"),c.YNc(1,Z,2,0,"ng-container",6),c.YNc(2,v,2,0,"ng-container",6),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngIf",e.email.hasError("required")),c.xp6(1),c.Q6J("ngIf",e.email.hasError("email"))}}function q(e,r){1&e&&(c.ynx(0),c._uU(1,"Phone Nummber is required"),c.BQk())}function A(e,r){1&e&&(c.ynx(0),c._uU(1,"Invalid phone no."),c.BQk())}function b(e,r){if(1&e&&(c.TgZ(0,"mat-error"),c.YNc(1,q,2,0,"ng-container",6),c.YNc(2,A,2,0,"ng-container",6),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngIf",e.cellNo.hasError("required")),c.xp6(1),c.Q6J("ngIf",e.cellNo.hasError("cellNumber"))}}function w(e,r){1&e&&(c.ynx(0),c._uU(1,"Phone Nummber is required"),c.BQk())}function S(e,r){if(1&e&&(c.TgZ(0,"mat-error"),c.YNc(1,w,2,0,"ng-container",6),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngIf",e.password.hasError("required"))}}let N=(()=>{class e{constructor(e,r,t,i,n,o,a){this.fb=e,this.auhService=r,this.commonService=t,this.authService=i,this.asyncService=n,this.dialogRef=o,this.data=a,this.formId="serviceAddForm"}ngOnInit(){this.form=this.fb.group({name:["",n.kI.required],password:["",n.kI.required],email:["",[n.kI.required,s.emailCheck]],cellNo:["",[n.kI.required,s.cellNumberCheck]]})}get name(){return this.form.get("name")}get password(){return this.form.get("password")}get email(){return this.form.get("email")}get cellNo(){return this.form.get("cellNo")}addUser(e){this.form.valid&&(this.asyncService.start(),this.userAddSub=this.authService.addNewUser(e).subscribe(e=>{e?(this.commonService.showSuccessMsg("Success! The User registration completed!"),this.asyncService.finish(),this.close()):(this.asyncService.finish(),this.commonService.showErrorMsg("Error! The User registration not completed!"))},e=>{this.asyncService.finish(),this.commonService.showErrorMsg("Error! Something went worng")}))}close(){this.dialogRef.close(),this.asyncService.finish()}ngOnDestroy(){this.userAddSub&&this.userAddSub.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(c.Y36(n.qu),c.Y36(l.e),c.Y36(m.v),c.Y36(l.e),c.Y36(u.t),c.Y36(a.so),c.Y36(a.WI))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-signup"]],decls:33,vars:10,consts:[["mat-dialog-title",""],[3,"id","formGroup","ngSubmit"],["fxLayout","column","fxLayout.xs","column","fxLayout.sm","column",1,"tab"],["fxLayout","column wrap","fxLayoutGap","10px","fxFlex","100%","fxFlex.sm","50%","fxLayout.lt-sm","column","fxFlex.xs","100%","fxLayoutAlign","flex-start"],["fxFlex","0 1 calc(66% - 10px)","fxFlex.lt-md","0 1 calc(100% - 10px)","fxFlex.lt-sm","100%","fxFlex.xs","100%","appearance","fill"],["matInput","","placeholder","Enter your name","formControlName","name","required",""],[4,"ngIf"],["fxFlex","0 1 calc(33% - 10px)","fxFlex.lt-md","0 1 calc(100% - 10px)","fxFlex.lt-sm","100%","fxFlex.xs","100%","appearance","fill"],["matInput","","placeholder","Enter your email","formControlName","email","required",""],["fxFlex","0 1 calc(10% - 10px)","fxFlex.lt-md","0 1 calc(100% - 10px)","fxFlex.lt-sm","100%","fxFlex.xs","100%","appearance","fill"],["matInput","","placeholder","Enter your phone number","formControlName","cellNo","required",""],["matInput","","type","password","placeholder","Enter your Password","formControlName","password","required",""],["fxLayoutGap","10px",2,"float","right","margin-right","3px"],[1,"mat-raised-button",3,"click"],["type","submit",1,"mat-raised-button","mat-primary",3,"disabled"]],template:function(e,r){1&e&&(c.TgZ(0,"h3",0),c._uU(1,"Add Service/Spare Parts"),c.qZA(),c.TgZ(2,"div"),c.TgZ(3,"mat-dialog-content"),c.TgZ(4,"form",1),c.NdJ("ngSubmit",function(){return r.addUser(r.form.value)}),c.TgZ(5,"div",2),c.TgZ(6,"div",3),c.TgZ(7,"mat-form-field",4),c.TgZ(8,"mat-label"),c._uU(9,"Name"),c.qZA(),c._UZ(10,"input",5),c.YNc(11,x,2,1,"mat-error",6),c.qZA(),c.TgZ(12,"mat-form-field",7),c.TgZ(13,"mat-label"),c._uU(14,"Email"),c.qZA(),c._UZ(15,"input",8),c.YNc(16,y,3,2,"mat-error",6),c.qZA(),c.TgZ(17,"mat-form-field",9),c.TgZ(18,"mat-label"),c._uU(19,"Phone Number"),c.qZA(),c._UZ(20,"input",10),c.YNc(21,b,3,2,"mat-error",6),c.qZA(),c.TgZ(22,"mat-form-field",9),c.TgZ(23,"mat-label"),c._uU(24,"Password"),c.qZA(),c._UZ(25,"input",11),c.YNc(26,S,2,1,"mat-error",6),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(27,"mat-dialog-actions",12),c.TgZ(28,"button",13),c.NdJ("click",function(){return r.close()}),c._uU(29,"Close"),c.qZA(),c.TgZ(30,"button",14),c.ALo(31,"async"),c._uU(32," Save "),c.qZA(),c.qZA()),2&e&&(c.xp6(4),c.Q6J("id",r.formId)("formGroup",r.form),c.xp6(7),c.Q6J("ngIf",r.name.invalid&&(r.name.dirty||r.name.touched)),c.xp6(5),c.Q6J("ngIf",r.email.invalid&&(r.email.dirty||r.email.touched)),c.xp6(5),c.Q6J("ngIf",r.cellNo.invalid&&(r.cellNo.dirty||r.cellNo.touched)),c.xp6(5),c.Q6J("ngIf",r.password.invalid&&(r.password.dirty||r.password.touched)),c.xp6(4),c.Q6J("disabled",c.lcZ(31,8,null==r.asyncService?null:r.asyncService.isLoading)),c.uIk("form",r.formId))},directives:[a.uh,a.xY,n._Y,n.JL,n.sg,d.xw,d.SQ,d.yH,d.Wh,f.KE,f.hX,g.Nt,n.Fj,n.JJ,n.u,n.Q7,p.O5,a.H8,f.TO],pipes:[p.Ov],styles:[".mat-form-field[_ngcontent-%COMP%]{display:block}"]}),e})();var T=t(8645),I=t(1095),U=t(2178);function _(e,r){1&e&&c._UZ(0,"mat-progress-bar",19)}function Y(e,r){1&e&&(c.ynx(0),c._uU(1,"Email is required."),c.BQk())}function J(e,r){if(1&e&&(c.TgZ(0,"mat-error"),c.YNc(1,Y,2,0,"ng-container",15),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngIf",e.email.hasError("required"))}}function Q(e,r){1&e&&(c.ynx(0),c._uU(1,"Password is required."),c.BQk())}function k(e,r){if(1&e&&(c.TgZ(0,"mat-error"),c.YNc(1,Q,2,0,"ng-container",15),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngIf",e.password.hasError("required"))}}let E=(()=>{class e{constructor(e,r,t,i,n,o,a){this.fb=e,this.router=r,this.store=t,this.commonService=i,this.asyncService=n,this.authService=o,this.dialog=a,this.formId="loginForm"}ngOnInit(){this.form=this.fb.group({email:["",[n.kI.required]],password:["",[n.kI.required]]})}get email(){return this.form.get("email")}get password(){return this.form.get("password")}onLogin(e){this.form.valid&&(this.asyncService.start(),this.commonService.removeEmptyProperties(e),this.loginedsub=this.authService.authenticate(e).subscribe(e=>{if(this.asyncService.finish(),!e||!e.isAuthenticated)return this.commonService.showErrorMsg("Invalid email or password. Try again!"),void this.asyncService.finish();this.store.dispatch(new o.m(e)),this.router.navigate(["/"]),this.asyncService.finish()},e=>{this.asyncService.finish(),this.commonService.showErrorMsg("Error! Something went worng")}))}onRegister(){this.dialog.open(N,{width:"500px",data:"info"})}ngOnDestroy(){this.loginedsub&&this.loginedsub.unsubscribe(),this.asyncService.finish()}}return e.\u0275fac=function(r){return new(r||e)(c.Y36(n.qu),c.Y36(i.F0),c.Y36(T.yh),c.Y36(m.v),c.Y36(u.t),c.Y36(l.e),c.Y36(a.uw))},e.\u0275cmp=c.Xpm({type:e,selectors:[["signin-component"]],decls:34,vars:13,consts:[["mode","indeterminate",4,"ngIf"],[1,"container"],[1,"row"],[1,"col-md-3"],[1,"col-md-6"],[1,"imgcontainer"],["src","../../../assets/images/avatars/avatar-1.png","alt","Avatar",1,"avatar"],[1,"loginForm"],[1,"col-md-2"],[1,"col-md-8"],["novalidate","",3,"id","formGroup","ngSubmit"],["fxLayout","column","fxLayout.xs","column","fxLayout.sm","column"],["fxLayout","column wrap","fxLayoutGap","10px","fxFlex","100%","fxFlex.sm","100%","fxLayout.lt-sm","column","fxFlex.xs","100%","fxLayoutAlign","flex-start"],["fxFlex","0 1 calc(50% - 10px)","fxFlex.lt-md","0 1 calc(100% - 10px)","fxFlex.lt-sm","100%","fxFlex.xs","100%","appearance","fill"],["matInput","","placeholder","Enter Your Email","formControlName","email","required",""],[4,"ngIf"],["type","password","matInput","","placeholder","Password","formControlName","password","required",""],["mat-raised-button","","color","primary",3,"disabled","click"],["type","button","mat-raised-button","","color","primary",3,"disabled","click"],["mode","indeterminate"]],template:function(e,r){1&e&&(c.YNc(0,_,1,0,"mat-progress-bar",0),c.ALo(1,"async"),c.TgZ(2,"div",1),c.TgZ(3,"div",2),c._UZ(4,"div",3),c.TgZ(5,"div",4),c.TgZ(6,"div",5),c._UZ(7,"img",6),c.qZA(),c.TgZ(8,"div",7),c.TgZ(9,"div",2),c._UZ(10,"div",8),c.TgZ(11,"div",9),c.TgZ(12,"form",10),c.NdJ("ngSubmit",function(){return r.onLogin(r.form.value)}),c.TgZ(13,"div",11),c.TgZ(14,"div",12),c.TgZ(15,"mat-form-field",13),c.TgZ(16,"mat-label"),c._uU(17,"Email"),c.qZA(),c._UZ(18,"input",14),c.YNc(19,J,2,1,"mat-error",15),c.qZA(),c.TgZ(20,"mat-form-field",13),c.TgZ(21,"mat-label"),c._uU(22,"Password"),c.qZA(),c._UZ(23,"input",16),c.YNc(24,k,2,1,"mat-error",15),c.qZA(),c.TgZ(25,"button",17),c.NdJ("click",function(){return r.onLogin(r.form.value)}),c.ALo(26,"async"),c._uU(27," Login "),c.qZA(),c._uU(28," Don't Have Account Yet? Register Here "),c.TgZ(29,"button",18),c.NdJ("click",function(){return r.onRegister()}),c.ALo(30,"async"),c._uU(31," Registation "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(32,"div",8),c.qZA(),c.qZA(),c.qZA(),c._UZ(33,"div",3),c.qZA(),c.qZA()),2&e&&(c.Q6J("ngIf",c.lcZ(1,7,null==r.asyncService?null:r.asyncService.isLoading)),c.xp6(12),c.Q6J("id",r.formId)("formGroup",r.form),c.xp6(7),c.Q6J("ngIf",r.email.invalid&&(r.email.dirty||r.email.touched)),c.xp6(5),c.Q6J("ngIf",r.password.invalid&&(r.password.dirty||r.password.touched)),c.xp6(1),c.Q6J("disabled",c.lcZ(26,9,r.asyncService.isLoading)),c.xp6(4),c.Q6J("disabled",c.lcZ(30,11,r.asyncService.isLoading)))},directives:[p.O5,n._Y,n.JL,n.sg,d.xw,d.SQ,d.yH,d.Wh,f.KE,f.hX,g.Nt,n.Fj,n.JJ,n.u,n.Q7,I.lW,U.pW,f.TO],pipes:[p.Ov],styles:[".imgcontainer[_ngcontent-%COMP%]{text-align:center;margin:24px 0 12px}"]}),e})();const L=[{path:"",component:E},{path:"login",component:E}];let F=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.Bz.forChild(L)],i.Bz]}),e})();var C=t(1956);let B=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({providers:[],imports:[[C.m,F]]}),e})()}}]);