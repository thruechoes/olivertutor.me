(this["webpackJsonpolivertutor.me"]=this["webpackJsonpolivertutor.me"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Logo.b3e02eee.svg"},,,function(e,t,a){e.exports=a.p+"static/media/computer2-1.22491904.png"},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/bird-books.96d96ef2.png"},function(e,t,a){e.exports=a.p+"static/media/contact-image.b9195a98.png"},function(e,t,a){e.exports=a.p+"static/media/girl-books.41c09400.png"},function(e,t,a){e.exports=a.p+"static/media/resume-writing.07d018c3.png"},function(e,t,a){e.exports=a.p+"static/media/scheduling.6c319d54.png"},,function(e,t,a){e.exports=a(44)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),c=(a(40),a(11)),i=a(2),s=a(16),m=a.n(s),u=(a(41),function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-content"},r.a.createElement("img",{src:m.a,alt:"OliverTutor.me Logo",className:"navbar-logo"}),r.a.createElement("ul",{className:"navbar-menu"},r.a.createElement("li",null,r.a.createElement("i",null,"Coming soon: ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#contact-section"},"Book Session")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Online Courses")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Blog")))))}),d=a(3),h=[{id:1,name:"Mar",title:"Oliver is a Great Teacher!",text:"He is super knowledgeable, patient, and helpful. I highly recommend him to anyone looking for an experienced Data Science tutor.",rating:5,lessons:9,date:"30-Aug-2023",subjects:"Data Science, Machine Learning"},{id:2,name:"Hannah",title:"My Favorite Tutor",text:"5-star teacher",rating:5,lessons:4,date:"30-Aug-2023",subjects:"Data Science, Statistical Analysis"},{id:3,name:"Evan",title:"Helpful and Knowledgeable",text:"Oliver helped me tackle some issues I've been having with my portfolio. Within one session most of my problems were solved. I would definitely use him again.",rating:5,lessons:3,date:"07-Sept-2023",subjects:"React, JavaScript"},{id:4,name:"Preeti",title:"Excellent Tutor",text:"He was a very patient and great tutor. I really look forward to working with him again on future projects.",rating:5,lessons:4,date:"03-May-2023",subjects:"Python, Machine Learning"}],g=["#FFC8FF","#C5ABFF","#A7FFD5"],E=function(){var e=Math.floor(Math.random()*g.length);return g[e]},p=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2);t[0],t[1],function(e,t){for(var a=[],n=0;n<e.length;n+=t)a.push(e.slice(n,n+t))}(h,3);return r.a.createElement("section",{className:"reviews-section"},r.a.createElement("h2",null,"What people are saying"),r.a.createElement("div",{className:"row reviews-container"},h.map((function(e){return r.a.createElement("div",{key:e.id,className:"column-thirds review-card borderer",style:{backgroundColor:E()}},r.a.createElement("div",{className:"row lil-data centered-content"},r.a.createElement("div",{className:"column-review"},e.name,","),r.a.createElement("div",{className:"column-review"},e.lessons," lessons with Oliver")),r.a.createElement("div",{className:"star-rating centered-content"},Array(e.rating).fill().map((function(e,t){return r.a.createElement("span",{key:t},"\u2605")}))),r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:"lil-data"},e.text))}))))},b=a(4),v=a(22),f=a(31),N=function(){var e=Object(n.useState)({name:"",email:"",phone:"",message:""}),t=Object(d.a)(e,2),a=t[0],l=t[1],o=function(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(b.a)({},a,n))}))};return r.a.createElement("section",{className:"contact-section",id:"contact-section"},r.a.createElement("h2",null,"Contact Oliver"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f.a.sendForm("bmail_service","olivertutorme_temp",e.target,"U3so8R1n2D1I1qnJ5").then((function(e){console.log(e.text),alert("Message sent successfully! Expect a response within 1 business day.")}),(function(e){console.log(e.text),alert("Failed to send message! Please refresh this page and try again.")})),e.target.reset()},className:"contact-form"},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{className:"input-label borderer"},"Name"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",value:a.name,onChange:o,required:!0})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{className:"input-label borderer"},"Email"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Email Address",value:a.email,onChange:o})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{className:"input-label borderer"},"Ring Ring"),r.a.createElement("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:a.phone,onChange:o})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{className:"input-label borderer"},"Anything else?"),r.a.createElement("textarea",{name:"message",placeholder:"Write Oliver a note here!",value:a.message,onChange:o,required:!0})),r.a.createElement("button",{type:"submit",className:"contact-button"},"Contact Now")))},y=(a(24),a(19)),w=a.n(y),k=a(26),x=a.n(k),I=a(27),C=a.n(I),O=a(28),A=a.n(O),S=a(29),j=a.n(S),F=a(30),B=a.n(F),P=function(){Object(i.o)();return r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"row borderer"},r.a.createElement("div",{className:"column borderer"},r.a.createElement("img",{src:w.a,alt:"Olivertutor.me",className:"full-img"})),r.a.createElement("div",{className:"column intro-section borderer"},r.a.createElement("h1",null,"Enhance Your Career With Confidence"),r.a.createElement("p",null,"Join me on this exciting journey into AI and Python. Let's not just learn, but innovate, explore, and lead the future together."),r.a.createElement("a",{href:"#contact-section"},r.a.createElement("button",{className:"book-tutoring-btn"},"Book Tutoring")))),r.a.createElement(p,null),r.a.createElement("div",{className:"row borderer"},r.a.createElement("section",{className:"about-oliver"},r.a.createElement("h2",null,"About Oliver: ",r.a.createElement("i",null,"from Bayesian Inference to Generative AI")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column-about"},r.a.createElement("p",{className:"shift-p"},"Hello! I'm Oliver, and I'm here to guide you through the fascinating and intricate realms of AI and Python. Teaching myself coding and AI, I know how daunting and intimidating complex topics can be.")),r.a.createElement("div",{className:"column-about"},r.a.createElement("p",{className:"shift-p"}," I offer a down-to-earth teaching style that helps make this complex material less intimidating and more digestible. I am your teammate.")),r.a.createElement("p",{className:"shift-p"},"Here's why I believe our journey together will be enlightening and rewarding.")))),r.a.createElement("div",{className:"row borderer"},r.a.createElement("div",{className:"column resume-image borderer"},r.a.createElement("img",{src:j.a,alt:"Oliver's Resume"})),r.a.createElement("div",{className:"column resume-section borderer"},r.a.createElement("h2",{className:"big-font"},"Check out Oliver's Resume"),r.a.createElement("h4",null,"1. Hands-on Experience"),r.a.createElement("p",null,"As Lead AI Researcher at Yeuvi LLC, I craft cutting-edge AI solutions for the business world. I bring this real-world, practical knowledge into our tutoring sessions, ensuring you're not just learning the theory but also its impactful applications."),r.a.createElement("button",{className:"resume-button"},"Resume Coming Soon"))),r.a.createElement("div",{className:"row borderer"},r.a.createElement("div",{className:"column portfolio-section borderer"},r.a.createElement("h2",null,"Oliver's Portfolio"),r.a.createElement("h4",null,"2. A Self-taught Journey"),r.a.createElement("p",null,"My path into the world of coding, statistics, ML, and AI started from scratch. I've been in the shoes of both a beginner and an expert, and this allows me to tailor our sessions to precisely where you are and where you aim to be."),r.a.createElement("button",{className:"portfolio-button"},"Portfolio Coming Soon")),r.a.createElement("div",{className:"column portfolio-image borderer"},r.a.createElement("img",{src:x.a,alt:"Publications Galore"}))),r.a.createElement("div",{className:"row borderer"},r.a.createElement("div",{className:"column blog-image borderer"},r.a.createElement("img",{src:A.a,alt:"Oliver's Blog"})),r.a.createElement("div",{className:"column blog-section borderer"},r.a.createElement("h2",null,"Want to read the blog?"),r.a.createElement("h4",null,"3. A Story of Resilience and Curiosity"),r.a.createElement("p",null,'My upbringing in the hills of West Virginia, learning about nature\'s marvels, and my evolution into the world of code have crafted my unique teaching philosophy. With me, every session is not just about codes and algorithms; it\'s about understanding the deeper "why" and "how" behind them.'),r.a.createElement("button",{className:"gray-btn"},"Blog Coming Soon"))),r.a.createElement("div",{className:"row borderer"},r.a.createElement("div",{className:"column scheduling-section borderer"},r.a.createElement("h2",null,"Schedule your tutoring session"),r.a.createElement("h4",null,"4. A Blend of Academic and Practical Excellence"),r.a.createElement("p",null,"My journey at UC Berkeley has seen me publish 12 scientific papers, deeply rooted in Python and AI. Together, we can navigate this confluence of academic rigor and real-world applications for a holistic learning experience."),r.a.createElement("a",{href:"#contact-section"},r.a.createElement("button",{className:"book-tutoring-btn"},"Book Tutoring"))),r.a.createElement("div",{className:"column scheduling-image borderer"},r.a.createElement("img",{src:B.a,alt:"Schedule your Session"}))),r.a.createElement("div",{className:"row borderer"},r.a.createElement("div",{className:"column contact-image"},r.a.createElement("img",{src:C.a,alt:"Student giving a thumbs up!"})),r.a.createElement("div",{className:"column contact-oliver"},r.a.createElement(N,null))))},M=function(){return r.a.createElement("div",{className:"coming-soon"},r.a.createElement("div",{className:"row borderer"},r.a.createElement("div",{className:"column borderer"},r.a.createElement("img",{src:w.a,alt:"Olivertutor.me",className:"full-img"})),r.a.createElement("div",{className:"column intro-section borderer"},r.a.createElement("h1",null,"This page is coming soon!"),r.a.createElement("p",null,"Join me on this exciting journey into AI and Python. But this section is in the works!"),r.a.createElement("a",{href:"/#contact-section"},r.a.createElement("button",{className:"book-tutoring-btn"},"Book a session")))),r.a.createElement("div",{className:"row borderer"},r.a.createElement("section",{className:"about-oliver"})))},L=(a(42),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer-content"},r.a.createElement("div",{className:"footer-logo"},r.a.createElement("img",{src:m.a,alt:"Olivertutor.me"})),r.a.createElement("div",{className:"footer-links"},r.a.createElement("a",{href:"/"},"Blog"),r.a.createElement("a",{href:"/"},"Courses"),r.a.createElement("a",{href:"/#contact-section"},"Contact")),r.a.createElement("div",{className:"footer-social"},r.a.createElement("a",{href:"https://github.com/thruechoes"},"GitHub"),r.a.createElement("a",{href:"https://www.linkedin.com/in/oliver-muellerklein/"},"LinkedIn"))),r.a.createElement("div",{className:"footer-copyright"},"\xa9 ",(new Date).getFullYear()," OliverTutor.me All rights reserved."))});a(43);var T=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"app-container"},r.a.createElement(u,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(P,null)}),r.a.createElement(i.a,{path:"/comingsoon",element:r.a.createElement(M,null)})),r.a.createElement(L,null)))},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),H()}],[[32,1,2]]]);
//# sourceMappingURL=main.a8175e05.chunk.js.map