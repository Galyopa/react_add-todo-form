(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var i=a(5),n=a.n(i),s=a(2),r=a(4),c=a(1),o=a(0),l=function(e){var t=e.title,a=e.isCompleted;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"subtitle is-2",children:t}),Object(o.jsx)("p",{className:"subtitle is-5 has-text-danger",children:a?"Done":"Not completed!"})]})},d=function(e){var t=e.user;return Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"subtitle is-5","data-cy":"username",children:t.name}),Object(o.jsx)("p",{"data-cy":"email",children:t.email})]})})},u=function(e){var t=e.todos;return Object(o.jsx)("ul",{className:"block",children:t.map((function(e){return Object(o.jsxs)("li",{className:"box",children:[Object(o.jsx)(l,{title:e.title,isCompleted:e.completed}),Object(o.jsx)(d,{user:e.user})]},e.id)}))})},m=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],b=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:m.find((function(t){return t.id===e.userId}))||null})})),h=function(){var e=Object(c.useState)(b),t=Object(s.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(""),r=Object(s.a)(n,2),l=r[0],d=r[1],h=Object(c.useState)(-1),p=Object(s.a)(h,2),j=p[0],g=p[1],y=Object(c.useState)(""),O=Object(s.a)(y,2),x=O[0],f=O[1],v=Object(c.useState)(""),S=Object(s.a)(v,2),w=S[0],N=S[1];return Object(o.jsxs)("div",{className:"App container",children:[Object(o.jsx)("h1",{className:"title",children:"Add todo form"}),Object(o.jsxs)("form",{className:"box",onSubmit:function(e){return function(e){if(e.preventDefault(),j<0)f("Please choose a user");else if(""===l)N("Please enter the title");else{var t=m.find((function(e){return e.id===j}))||null,n={id:a.length+1,userId:j,title:l,completed:!1,user:t};i(a.concat(n)),g(-1),d("")}}(e)},children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"todoTitle",children:"Enter your TODO"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{className:"input is-medium",type:"text",name:"todoTitle",id:"todoTitle",value:l,placeholder:"Add your TODO","data-cy":"titleInput",onChange:function(e){var t=e.target.value.replace(/[^a-z\u0430-\u044f\u04510-9\s]/gi,"");d(t),""===e.target.value?N("Please enter the title"):N("")}})}),w&&Object(o.jsx)("p",{className:"help is-danger",children:w})]}),Object(o.jsxs)("div",{className:"select",children:[Object(o.jsxs)("select",{name:"username",id:"username",onChange:function(e){g(Number(e.target.value)),Number(e.target.value)<0?f("Please choose a user"):f("")},"data-cy":"userSelect",children:[Object(o.jsx)("option",{value:"-1",children:"Choose a user"}),m.map((function(e){return Object(o.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),x&&Object(o.jsx)("p",{className:"help is-danger",children:x})]}),Object(o.jsx)("button",{className:"button is-primary",type:"submit",children:"Add TODO"})]}),Object(o.jsx)(u,{todos:a})]})};n.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.e42e6c8f.chunk.js.map