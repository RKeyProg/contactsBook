(function(t){function e(e){for(var a,i,r=e[0],s=e[1],l=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},c={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/contactsBook/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ba8":function(t,e,n){},1:function(t,e){},"112d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("book"),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"book"},[n("book-input"),t.contacts.length>0?n("book-list",{attrs:{contacts:t.filteredContacts}}):t._e()],1)])},r=[],s=(n("4de4"),n("5530")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-input"},[n("div",{staticClass:"input-wrapper"},[n("div",{staticClass:"error"},[t._v(t._s(t.validation.firstError("contact.name"))+" ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"}],staticClass:"input",class:{"valid-error":t.validation.hasError("contact.name")},attrs:{type:"text",placeholder:"Contact name",autofocus:""},domProps:{value:t.contact.name},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewContact(e)},input:function(e){e.target.composing||t.$set(t.contact,"name",e.target.value)}}})]),n("div",{staticClass:"input-wrapper"},[n("div",{staticClass:"error"},[t._v(t._s(t.validation.firstError("contact.phone")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.phone,expression:"contact.phone"}],staticClass:"input",class:{"valid-error":t.validation.hasError("contact.phone")},attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.contact.phone},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewContact(e)},input:function(e){e.target.composing||t.$set(t.contact,"phone",e.target.value)}}})])])},u=[],d=(n("b0c0"),n("95b1")),f=n.n(d),p=n("2f62"),h=0,v={mixins:[n("95b1").mixin],data:function(){return{contact:{id:0,name:"",phone:"",checked:!1}}},validators:{"contact.name":function(t){return d["Validator"].value(t).required("Can't be empty").regex("^[A-Za-z]*$","The name can only contain Latin characters")},"contact.phone":function(t){return d["Validator"].value(t).required("Can't be empty").integer("Check the entered number (unsigned +)").minLength(10,"Not matched").maxLength(12,"Must have at least 12 characters")}},methods:Object(s["a"])(Object(s["a"])({},Object(p["b"])(["addContact"])),{},{addNewContact:function(){var t=this;this.$validate().then((function(e){e&&(h++,t.contact.id=h,t.addContact(Object(s["a"])({},t.contact)),t.contact.name="",t.contact.phone="",t.validation.reset())}))}})},b=v,m=(n("69a4"),n("0c7c")),C=Object(m["a"])(b,l,u,!1,null,"36611d7d",null),g=C.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-list"},[n("div",{staticClass:"content"},[n("ul",{staticClass:"list"},t._l(t.contacts,(function(t){return n("li",{staticClass:"item"},[n("book-list-item",{attrs:{contact:t}})],1)})),0)]),n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-content"},[n("div",{staticClass:"counter"},[t._v(t._s(t.contacts.length)+" contacts in the book ")]),n("div",{staticClass:"filter"},[n("book-list-filter")],1)])])])},k=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.filters,(function(e){return n("button",{class:{active:t.currentFilter===e},attrs:{type:"button"},on:{click:function(n){return t.filterCurrentContacts(e)}}},[t._v(t._s(e))])})),0)},_=[],j={data:function(){return{filters:["all","important"],currentFilter:"all"}},methods:Object(s["a"])(Object(s["a"])({},Object(p["b"])(["filterContacts"])),{},{filterCurrentContacts:function(t){this.currentFilter=t,this.filterContacts(t)}})},x=j,w=(n("60f0"),Object(m["a"])(x,O,_,!1,null,"04bda70b",null)),E=w.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-item",class:{checked:t.contact.checked}},[n("label",{staticClass:"label"},[n("div",{staticClass:"input-block"},[n("input",{staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:t.contact.checked},on:{change:t.checkContactAsImportant}})]),n("div",{staticClass:"title"},[n("div",{staticClass:"name"},[t._v(t._s(t.contact.name))]),n("div",{staticClass:"phone"},[t._v(t._s(t.contact.phone))])])]),n("div",{staticClass:"button"},[n("router-link",{staticClass:"link",attrs:{tag:"button",to:{name:"toContact",params:{contactName:t.contact.name,contactId:t.contact.id}}}},[t._v("→ ")])],1),n("div",{staticClass:"button"},[n("button",{staticClass:"remove",attrs:{type:"button"},on:{click:t.removeExistedContact}},[t._v("x")])])])},$=[],F={props:{contact:Object},methods:Object(s["a"])(Object(s["a"])({},Object(p["b"])(["removeContact","checkContact"])),{},{removeExistedContact:function(){var t=confirm("Are you sure you want to delete a contact?");t&&this.removeContact(this.contact.id)},checkContactAsImportant:function(t){var e=Object(s["a"])(Object(s["a"])({},this.contact),{},{checked:t.target.checked});this.checkContact(e)}})},N=F,P=(n("87f5"),Object(m["a"])(N,I,$,!1,null,"08a980dc",null)),A=P.exports,L={props:{contacts:Array},components:{bookListFilter:E,bookListItem:A}},M=L,S=(n("a299"),Object(m["a"])(M,y,k,!1,null,"54a4a7f8",null)),V=S.exports,T={components:{bookInput:g,bookList:V},computed:Object(s["a"])(Object(s["a"])({},Object(p["c"])({contacts:function(t){return t.contacts.contacts},filter:function(t){return t.contacts.filter}})),{},{filteredContacts:function(){switch(this.filter){case"all":return this.contacts;case"important":return this.contacts.filter((function(t){return!0===t.checked}))}}})},q=T,B=(n("bc4a"),Object(m["a"])(q,i,r,!1,null,"3433563e",null)),J=B.exports,K={name:"App",components:{book:J}},z=K,G=(n("5c0b"),Object(m["a"])(z,c,o,!1,null,null,null)),Z=G.exports,D=n("8c4f"),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("contact-input",{attrs:{contactId:t.contactId}}),n("contact-info-list",{attrs:{contactId:t.contactId}}),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.goBack}},[t._v("Go back")])],1)},Q=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-input"},[n("div",{staticClass:"input-wrapper"},[n("div",{staticClass:"error"},[t._v(t._s(t.validation.firstError("forChange.title")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.forChange.title,expression:"forChange.title"}],staticClass:"input",class:{"valid-error":t.validation.hasError("forChange.title")},attrs:{type:"text",placeholder:"Title"},domProps:{value:t.forChange.title},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewField(e)},input:function(e){e.target.composing||t.$set(t.forChange,"title",e.target.value)}}})]),n("div",{staticClass:"input-wrapper"},[n("div",{staticClass:"error"},[t._v(t._s(t.validation.firstError("forChange.value")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.forChange.value,expression:"forChange.value"}],staticClass:"input",class:{"valid-error":t.validation.hasError("forChange.value")},attrs:{type:"text",placeholder:"Value"},domProps:{value:t.forChange.value},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewField(e)},input:function(e){e.target.composing||t.$set(t.forChange,"value",e.target.value)}}})])])},U=[],W=(n("7db0"),n("a9e3"),{mixins:[n("95b1").mixin],props:{contactId:Number},data:function(){return{forChange:{title:"",value:""},contactIdObject:{contactId:this.contactId}}},validators:{"forChange.title":function(t){return d["Validator"].value(t).required("Can't be empty").maxLength(15,"Must have at least 15 characters")},"forChange.value":function(t){return d["Validator"].value(t).required("Can't be empty").maxLength(20,"Must have at least 20 characters")}},computed:Object(s["a"])(Object(s["a"])({},Object(p["c"])({contacts:function(t){return t.contacts.contacts}})),{},{getContact:function(){return this.contacts.find((function(t){return t.id===this.contactId}),this.contactIdObject)}}),methods:Object(s["a"])(Object(s["a"])({},Object(p["b"])(["addField"])),{},{addNewField:function(){var t=this;this.$validate().then((function(e){e&&(t.getContact[t.forChange.title]=t.forChange.value,t.addField(t.getContact),t.forChange.title="",t.forChange.value="",t.validation.reset())}))}})}),X=W,Y=(n("9336"),Object(m["a"])(X,R,U,!1,null,"e78f16f2",null)),tt=Y.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-info"},[n("ul",{staticClass:"list"},t._l(t.contactKeysArray,(function(e){return n("li",{staticClass:"item"},[n("contact-info-list-item",{attrs:{field:e,contact:t.getContact}})],1)})),0)])},nt=[],at=(n("c975"),n("a434"),n("b64b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"contact-info__item"},[n("div",{staticClass:"field-wrapper",class:{active:t.change}},[n("div",{staticClass:"field-title"},[t._v(t._s(t.field)+":")]),this.change?n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact[t.field],expression:"contact[field]"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.contact[t.field]},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.applyChanges(e)},input:function(e){e.target.composing||t.$set(t.contact,t.field,e.target.value)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact[t.field],expression:"contact[field]"}],ref:"fieldValue",staticClass:"input",attrs:{type:"text",readonly:""},domProps:{value:t.contact[t.field]},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.applyChanges(e)},input:function(e){e.target.composing||t.$set(t.contact,t.field,e.target.value)}}}),n("div",{staticClass:"buttons"},[this.change?n("div",{staticClass:"buttons-apply"},[n("button",{staticClass:"button",on:{click:t.applyChanges}},[t._v("Apply")]),n("button",{staticClass:"button",on:{click:t.notApplyChanges}},[t._v("Cancel")])]):n("div",{staticClass:"buttos-edit"},[n("button",{staticClass:"button",on:{click:t.changeOnEditMode}},[t._v("Change")]),"name"!==t.field&&"phone"!==t.field?n("button",{staticClass:"remove",attrs:{type:"button"},on:{click:t.removeExistedField}},[t._v("x")]):t._e()])])])])])}),ct=[],ot={props:{field:String,contact:Object},data:function(){return{change:!1,beforeChangeField:""}},computed:Object(s["a"])(Object(s["a"])({},Object(p["c"])({contacts:function(t){return t.contacts.contacts}})),{},{getContact:function(){return this.contacts.find((function(t){return t.id===this.id}),this.contact)}}),methods:Object(s["a"])(Object(s["a"])({},Object(p["b"])(["removeField"])),{},{changeOnEditMode:function(){this.beforeChangeField=this.contact[this.field],this.change=!this.change,this.$refs.fieldValue.focus()},applyChanges:function(){confirm("Are you sure you want to change the data?")&&(this.change=!this.change)},notApplyChanges:function(){confirm("Are you sure you want to undo the changes?")&&(this.contact[this.field]=this.beforeChangeField,this.change=!this.change)},removeExistedField:function(){var t=confirm("Are you sure you want to delete a this field?");delete this.getContact[this.field],t&&this.removeField(this.getContact)}})},it=ot,rt=(n("bd9f"),Object(m["a"])(it,at,ct,!1,null,"6f5c186c",null)),st=rt.exports,lt={props:{contactId:Number},data:function(){return{contactIdObject:{contactId:this.contactId}}},components:{contactInfoListItem:st},computed:Object(s["a"])(Object(s["a"])({},Object(p["c"])({contacts:function(t){return t.contacts.contacts}})),{},{contactKeysArray:function(){var t=Object.keys(this.getContact);return t.splice([t.indexOf("id")],1),t.splice([t.indexOf("checked")],1),t},getContact:function(){return this.contacts.find((function(t){return t.id===this.contactId}),this.contactIdObject)}})},ut=lt,dt=Object(m["a"])(ut,et,nt,!1,null,null,null),ft=dt.exports,pt={props:["contactId"],computed:{},components:{contactInput:tt,contactInfoList:ft},methods:{goBack:function(){this.$router.go(-1)}}},ht=pt,vt=(n("bfe1"),Object(m["a"])(ht,H,Q,!1,null,"73f7ba88",null)),bt=vt.exports;a["a"].use(D["a"]);var mt=[{path:"/",component:J},{path:"/contact/:contactName",component:bt,name:"toContact",props:!0}],Ct=new D["a"]({routes:mt,mode:"history",base:"/contactsBook/"}),gt=(n("d81d"),{state:{contacts:[],filter:"all"},mutations:{addContact:function(t,e){t.contacts.push(e)},removeContact:function(t,e){t.contacts=t.contacts.filter((function(t){return t.id!==e}))},checkContact:function(t,e){t.contacts=t.contacts.map((function(t){return t.id===e.id?e:t}))},filterContacts:function(t,e){t.filter=e},addField:function(t,e){t.contacts=t.contacts.map((function(t){return t.id===e.id?e:t}))},removeField:function(t,e){t.contacts=t.contacts.map((function(t){return t.id===e.id?e:t}))}}}),yt=gt;a["a"].use(p["a"]);var kt=new p["a"].Store({modules:{contacts:yt}});a["a"].use(f.a),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Z)},router:Ct,store:kt}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("c165"),c=n.n(a);c.a},"60f0":function(t,e,n){"use strict";var a=n("d413"),c=n.n(a);c.a},"69a4":function(t,e,n){"use strict";var a=n("95d9"),c=n.n(a);c.a},"794e":function(t,e,n){},"87f5":function(t,e,n){"use strict";var a=n("0ba8"),c=n.n(a);c.a},9336:function(t,e,n){"use strict";var a=n("ad58"),c=n.n(a);c.a},"95d9":function(t,e,n){},a299:function(t,e,n){"use strict";var a=n("112d"),c=n.n(a);c.a},ad58:function(t,e,n){},bc4a:function(t,e,n){"use strict";var a=n("f752"),c=n.n(a);c.a},bd9f:function(t,e,n){"use strict";var a=n("d010"),c=n.n(a);c.a},bfe1:function(t,e,n){"use strict";var a=n("794e"),c=n.n(a);c.a},c165:function(t,e,n){},d010:function(t,e,n){},d413:function(t,e,n){},f752:function(t,e,n){}});
//# sourceMappingURL=app.c4ab0995.js.map