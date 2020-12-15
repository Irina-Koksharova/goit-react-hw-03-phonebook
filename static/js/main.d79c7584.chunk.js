(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={input:"Filter_input__dJK7D",label:"Filter_label__2CGQ3",reactIcons:"Filter_reactIcons__2STTh"}},14:function(t,e,n){t.exports={toast:"App_toast__rtoWH",progress:"App_progress__28NK5"}},17:function(t,e,n){t.exports={container:"Container_container__24Rmf"}},18:function(t,e,n){t.exports={section:"Section_section__3OQbp"}},21:function(t,e,n){},29:function(t,e,n){},4:function(t,e,n){t.exports={form:"ContactsForm_form__C3_LZ",label:"ContactsForm_label__2FNkj",input:"ContactsForm_input__10ceL",button:"ContactsForm_button__2Q0c2",toast:"ContactsForm_toast__1ku_f",progress:"ContactsForm_progress__daDxB"}},41:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(1),o=n.n(r),c=n(3),s=n.n(c),i=(n(28),n(29),n(22)),l=n(7),u=n(8),m=n(10),b=n(9),h=n(16),d=n.n(h),j=n(12),p=(n(38),n(14)),f=n.n(p),_=n(17),O=n.n(_);var x=function(t){var e=t.children;return Object(a.jsx)("div",{className:O.a.container,children:e})},v=n(18),C=n.n(v);var g=function(t){var e=t.children;return Object(a.jsx)("section",{className:C.a.section,children:e})},F=n(19),N=n(4),S=n.n(N),y=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChangeForm=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(F.a)({},a,r))},t.handleSubmitForm=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;""!==a.trim()?""!==r.trim()?(t.props.onSubmit(t.state),t.resetForm()):t.props.onSubmitError("Contact number is missing"):t.props.onSubmitError("Contact name is missing")},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:S.a.form,onSubmit:this.handleSubmitForm,children:[Object(a.jsx)("label",{className:S.a.label,htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{className:S.a.input,type:"text",name:"name",value:e,placeholder:"Enter the name",autoComplete:"off",id:"name",onChange:this.handleChangeForm}),Object(a.jsx)("label",{className:S.a.label,htmlFor:"number",children:"Number"}),Object(a.jsx)("input",{className:S.a.input,type:"tel",name:"number",value:n,placeholder:"111-11-11",autoComplete:"off",id:"number",onChange:this.handleChangeForm}),Object(a.jsx)("button",{className:S.a.button,type:"submit",children:"Add contact"})]})}}]),n}(r.Component),k=n(20),I=n(0),D=n(11),w=n.n(D),T=function(t){var e=t.value,n=t.onFilter;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:w.a.label,htmlFor:"input",children:"Find contact by name"}),Object(a.jsx)(I.b.Provider,{value:{className:"".concat(w.a.reactIcons)},children:Object(a.jsx)(k.a,{})}),Object(a.jsx)("input",{className:w.a.input,id:"input",value:e,onChange:n})]})},A=n(21),E=n.n(A),J=n(5),B=n.n(J),L=function(t){var e=t.id,n=t.name,r=t.number,o=t.onDelete;return Object(a.jsxs)("li",{className:B.a.item,children:[Object(a.jsxs)("p",{className:B.a.name,children:[n,":"]}),Object(a.jsx)("p",{className:B.a.number,children:r}),Object(a.jsx)("button",{className:B.a.button,onClick:function(){o(e)},children:"Del"})]})},P=function(t){var e=t.contacts,n=t.onDelete;return Object(a.jsx)("ul",{className:E.a.list,children:e.map((function(t){var e=t.id,r=t.name,o=t.number;return Object(a.jsx)(L,{id:e,name:r,number:o,onDelete:n},e)}))})},H=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleSubmitForm=function(e){var n=e.name,a=e.number,r={id:d.a.generate(),name:n,number:a};t.state.contacts.some((function(t){return t.name===r.name}))?t.notify("".concat(r.name," is already in your contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(i.a)(e))}}))},t.notify=function(t){j.b.dark(t,{className:"".concat(f.a.toast),progressClassName:"".concat(f.a.progress),position:j.b.POSITION.TOP_RIGHT})},t.handleChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.handleDeleteButton=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e})),filter:""}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,r=n.toLowerCase(),o=e.filter((function(t){return t.name.toLowerCase().includes(r)}));return Object(a.jsxs)(x,{children:[Object(a.jsxs)(g,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(y,{onSubmit:this.handleSubmitForm,onSubmitError:this.notify}),Object(a.jsx)(j.a,{autoClose:3e3,limit:1,style:{width:"352px"}})]}),e.length>0&&Object(a.jsxs)(g,{children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(T,{value:n,onFilter:this.handleChangeFilter}),Object(a.jsx)(P,{contacts:o,onDelete:this.handleDeleteButton})]})]})}}]),n}(r.Component);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(H,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={item:"ContactItem_item__31ibU",name:"ContactItem_name__3g9b-",number:"ContactItem_number__5VUOS",button:"ContactItem_button__10tNV"}}},[[41,1,2]]]);
//# sourceMappingURL=main.d79c7584.chunk.js.map