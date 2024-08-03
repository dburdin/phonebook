"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[335],{3309:function(n,e,t){t.d(e,{Mm:function(){return f},gN:function(){return d},l0:function(){return l},lX:function(){return p}});var r,o,i,a,u=t(168),c=t(5705),s=t(6444),l=(0,s.ZP)(c.l0)(r||(r=(0,u.Z)(["\n  margin: 0 auto;\n  width: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n  padding: 5px 5px;\n  font-size: large;\n  color: #494d5f;\n"]))),p=s.ZP.label(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),d=(0,s.ZP)(c.gN)(i||(i=(0,u.Z)(["\n  height: 30px;\n  outline: none;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  font-size: medium;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  background-color: #e5eaf5;\n\n  :active,\n  :focus {\n    outline: 1px solid #a0d2eb;\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px inset;\n  }\n"]))),f=s.ZP.button(a||(a=(0,u.Z)(["\n  width: 200px;\n  height: 50px;\n  margin: 20px auto;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n\n  font-size: 18px;\n\n  padding: 3px 24px;\n  border: none;\n  border-radius: 10px;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-weight: 400;\n  color: #494d5f;\n  background-color: #e5eaf5;\n  text-align: center;\n\n  transition-property: background-color, transform;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.065, 0.445, 0.88, 0.195);\n\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n\n  :hover,\n  :active {\n    background-color: #d0bdf4;\n  }\n"])))},6757:function(n,e,t){t.d(e,{i:function(){return i}});var r,o=t(168),i=t(6444).ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 550px;\n  margin: 30px auto;\n  padding: 30px 20px;\n  border: solid 3px #eee;\n  box-shadow: 5px 5px 15px 5px #eeeeee;\n  color: #494d5f;\n  border-radius: 40px;\n\n  background: linear-gradient(\n    45deg,\n    rgba(229, 234, 245, 1) 0%,\n    rgba(160, 210, 235, 1) 20%,\n    rgba(208, 189, 244, 0.5522584033613445) 100%\n  );\n"])))},6335:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r=t(2791),o=t(9434),i=t(6907),a=t(1413),u=t(5705),c=t(6727),s=t(3309),l=t(3634),p="NOT_FOUND";var d=function(n,e){return n===e};function f(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?d:r,i=t.maxSize,a=void 0===i?1:i,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),s=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:p},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return p}return{get:r,put:function(e,o){r(e)===p&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function l(){var e=s.get(arguments);if(e===p){if(e=n.apply(null,arguments),u){var t=s.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function x(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function m(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,l=s.memoizeOptions,p=void 0===l?t:l,d=Array.isArray(p)?p:[p],f=x(r),m=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),h=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return i=m.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:f,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h};return o}var h,b,g,v,y=m(f),j=function(n){return n.contacts.items},w=function(n){return n.filter.value},k=function(n){return n.contacts.item},Z=function(n){return n.contacts.error},z=y([j,w],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),C=t(3329),A={name:"",number:""},P=c.Ry({name:c.Z_().min(2,"Too Short!").required().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),number:c.Z_().min(5,"Too Short!").required().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})}),F=function(){var n=(0,o.I0)(),e=(0,o.v9)(j);return(0,C.jsx)(u.J9,{initialValues:A,validationSchema:P,onSubmit:function(t,r){var o,i=r.resetForm,u=(o=t,e.filter((function(n){return n.name.toLowerCase()===o.name.toLowerCase()})));if(u[0])return window.alert("".concat(t.name," is already in contacts!"));n((0,l.uK)((0,a.Z)({},t))),i()},children:(0,C.jsxs)(s.l0,{autoComplete:"off",children:[(0,C.jsxs)(s.lX,{htmlFor:"name",children:[(0,C.jsx)("span",{children:"Name"}),(0,C.jsx)(s.gN,{id:"name",type:"text",name:"name"}),(0,C.jsx)(u.Bc,{name:"name",component:"div",style:{color:"red",fontSize:"11px",textTransform:"uppercase"}})]}),(0,C.jsxs)(s.lX,{htmlFor:"number",children:[(0,C.jsx)("span",{children:"Number"}),(0,C.jsx)(s.gN,{id:"number",type:"tel",name:"number"}),(0,C.jsx)(u.Bc,{name:"number",component:"div",style:{color:"red",fontSize:"11px",textTransform:"uppercase"}})]}),(0,C.jsx)(s.Mm,{type:"submit",children:"Add Contact"})]})})},N=t(168),S=t(6444),E=S.ZP.ul(h||(h=(0,N.Z)(["\n  width: 400px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  font-size: 20px;\n"]))),_=S.ZP.li(b||(b=(0,N.Z)(["\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  font-size: 20px;\n  text-transform: capitalize;\n"]))),q=S.ZP.button(g||(g=(0,N.Z)(["\n  width: 70px;\n  height: auto;\n  margin: 0 auto;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 5px 5px;\n  border: none;\n  border-radius: 10px;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-weight: 400;\n  color: #494d5f;\n  background-color: #e5eaf5;\n\n  transition-property: background-color, transform;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.065, 0.445, 0.88, 0.195);\n\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n\n  :hover,\n  :active {\n    background-color: #d0bdf4;\n  }\n"]))),T=function(n){var e=n.id,t=n.name,r=n.number,i=(0,o.I0)();return(0,C.jsxs)(_,{children:[t,": ",r,(0,C.jsx)(q,{onClick:function(){return i((0,l.GK)(e))},type:"button",children:"Delete"})]},e)},I=function(){var n=(0,o.v9)(z);return(0,C.jsx)(E,{children:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,C.jsx)(T,{id:r,name:e,number:t},r)}))})},O=t(1634),B=S.ZP.input(v||(v=(0,N.Z)(["\n  width: 400px;\n  height: 20px;\n  margin: 20px 0;\n  padding: 10px;\n  outline: none;\n  border: 10px;\n  border-radius: 10px;\n  font-size: medium;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n\n  background-color: #e5eaf5;\n\n  :active,\n  :focus {\n    outline: 1px solid #a0d2eb;\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px inset;\n  }\n"]))),L=function(){var n=(0,o.I0)(),e=(0,o.v9)(w);return(0,C.jsx)(B,{type:"text",name:"filter",placeholder:"Find contacts by name",onChange:function(e){n((0,O.T)(e.target.value.toLowerCase()))},value:e})},R=t(966),M=t(6757);function X(){var n=(0,o.I0)(),e=(0,o.v9)(k),t=(0,o.v9)(Z),a=(0,o.v9)(j);return(0,r.useEffect)((function(){n((0,l.yF)())}),[n]),(0,C.jsxs)("section",{children:[(0,C.jsx)(i.ql,{children:(0,C.jsx)("title",{children:"Phonebook"})}),(0,C.jsxs)(M.i,{children:[(0,C.jsx)("h1",{children:"PhoneBook"}),(0,C.jsx)(F,{}),(0,C.jsx)("h2",{children:"Contacts"}),e&&!t&&(0,C.jsx)(R.a,{}),a.length>0?(0,C.jsxs)("div",{children:[(0,C.jsx)(L,{}),(0,C.jsx)(I,{})]}):"You have no contacts"]})]})}}}]);
//# sourceMappingURL=335.df4c6346.chunk.js.map