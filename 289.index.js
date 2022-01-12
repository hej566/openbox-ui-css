"use strict";(this.webpackChunkUI=this.webpackChunkUI||[]).push([[289],{6289:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var a=n(7294),i=n(2690),m=n(3454);function o(e){const{children:t,isDisabled:n,isActive:i,onClick:m}=e,o=["page-item"];return n&&o.push("disabled"),i&&o.push("active"),a.createElement("li",{className:o.join(" "),onClick:m,onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),e.currentTarget.click())}},a.createElement("span",{className:"page-link",tabIndex:0},t))}o.defaultProps={isActive:!1,isDisabled:!1,onClick:()=>{}};const r=o;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){const{children:t,ariaLabel:n,size:i,position:m}=e,o=["pagination"],[r,l]=(0,a.useState)({}),[c,I]=(0,a.useState)({});function g(e){return()=>{Object.keys(r).forEach((e=>{r[e]=!1})),r[e]=!0,l((()=>s({},r))),I((()=>s({},c)))}}i&&o.push(`pagination-${i}`),m&&o.push(`justify-content-${m}`),Object.keys(r).length||a.Children.forEach(t,(e=>{const{isActive:t,isDisabled:n,itemId:a}=e.props;a&&(r[a]=t,c[a]=n)}));const P=a.Children.map(t,(e=>{const{itemId:t}=e.props;if(t)return a.cloneElement(e,{isActive:r[t],isDisabled:c[t],onClick:c[t]?null:g(t)})}));return a.createElement("nav",{"aria-label":n},a.createElement("ul",{className:o.join(" ")},P))}I.defaultProps={ariaLabel:"",size:"",position:""};const g=I,P=function(){return a.createElement("div",{className:"rb-paginations container-fluid"},a.createElement("section",{className:"rb-pagination-basic"},a.createElement("h1",{className:"rb-title"},"Pagination"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-pagination-wrapper"},a.createElement(g,null,a.createElement(r,{itemId:"1",isDisabled:!0},a.createElement("span",null,"Previous")),a.createElement(r,{itemId:"2"},"1"),a.createElement(r,{itemId:"3"},"2"),a.createElement(r,{itemId:"4"},"3"),a.createElement(r,{itemId:"5"},a.createElement("span",null,"Next"))))),a.createElement("div",{className:"rb-code"},a.createElement(i.Z,{language:"javascript",style:m.Z},'\n    import PaginationItem from \'../components/PaginationItem\';\n    import Pagination from \'../components/Pagination\';\n    \n    <Pagination>\n      <PaginationItem itemId="1" isDisabled>\n        <span>Previous</span>\n      </PaginationItem>\n      <PaginationItem itemId="2">1</PaginationItem>\n      <PaginationItem itemId="3">2</PaginationItem>\n      <PaginationItem itemId="4">3</PaginationItem>\n      <PaginationItem itemId="5">\n        <span>Next</span>\n      </PaginationItem>\n    </Pagination>\n  '))),a.createElement("section",{className:"rb-pagination-basic"},a.createElement("h1",{className:"rb-title"},"Sizing"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-pagination-wrapper"},a.createElement(g,{size:"lg"},a.createElement(r,{itemId:"1"},a.createElement("span",null,"Previous")),a.createElement(r,{itemId:"2"},"1"),a.createElement(r,{itemId:"3"},"2"),a.createElement(r,{itemId:"4"},"3"),a.createElement(r,{itemId:"5"},a.createElement("span",null,"Next"))),a.createElement(g,{size:"sm"},a.createElement(r,{itemId:"1"},a.createElement("span",{"aria-label":"Previous"},"Previous")),a.createElement(r,{itemId:"2"},"1"),a.createElement(r,{itemId:"3"},"2"),a.createElement(r,{itemId:"4"},"3"),a.createElement(r,{itemId:"5"},a.createElement("span",null,"Next"))))),a.createElement("div",{className:"rb-code"},a.createElement(i.Z,{language:"javascript",style:m.Z},'\n    import PaginationItem from \'../components/PaginationItem\';\n    import Pagination from \'../components/Pagination\';\n    \n    <Pagination size="lg">\n      <PaginationItem itemId="1">\n        <span>Previous</span>\n      </PaginationItem>\n      <PaginationItem itemId="2">1</PaginationItem>\n      <PaginationItem itemId="3">2</PaginationItem>\n      <PaginationItem itemId="4">3</PaginationItem>\n      <PaginationItem itemId="5">\n        <span>Next</span>\n      </PaginationItem>\n    </Pagination>\n    <Pagination size="sm">\n      <PaginationItem itemId="1">\n        <span aria-label="Previous">Previous</span>\n      </PaginationItem>\n      <PaginationItem itemId="2">1</PaginationItem>\n      <PaginationItem itemId="3">2</PaginationItem>\n      <PaginationItem itemId="4">3</PaginationItem>\n      <PaginationItem itemId="5">\n        <span>Next</span>\n      </PaginationItem>\n    </Pagination>\n  '))),a.createElement("section",{className:"rb-pagination-basic"},a.createElement("h1",{className:"rb-title"},"Alignment"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-pagination-wrapper"},a.createElement(g,null,a.createElement(r,{itemId:"1"},a.createElement("span",null,"Previous")),a.createElement(r,{itemId:"2"},"1"),a.createElement(r,{itemId:"3"},"2"),a.createElement(r,{itemId:"4"},"3"),a.createElement(r,{itemId:"5"},a.createElement("span",null,"Next"))),a.createElement(g,{position:"center"},a.createElement(r,{itemId:"1"},a.createElement("span",null,"Previous")),a.createElement(r,{itemId:"2"},"1"),a.createElement(r,{itemId:"3"},"2"),a.createElement(r,{itemId:"4"},"3"),a.createElement(r,{itemId:"5"},a.createElement("span",null,"Next"))),a.createElement(g,{position:"end"},a.createElement(r,{itemId:"1"},a.createElement("span",null,"Previous")),a.createElement(r,{itemId:"2"},"1"),a.createElement(r,{itemId:"3"},"2"),a.createElement(r,{itemId:"4"},"3"),a.createElement(r,{itemId:"5"},a.createElement("span",null,"Next"))))),a.createElement("div",{className:"rb-code"},a.createElement(i.Z,{language:"javascript",style:m.Z},'\n    import PaginationItem from \'../components/PaginationItem\';\n    import Pagination from \'../components/Pagination\';\n    \n    <Pagination>\n      <PaginationItem itemId="1">\n        <span>Previous</span>\n      </PaginationItem>\n      <PaginationItem itemId="2">1</PaginationItem>\n      <PaginationItem itemId="3">2</PaginationItem>\n      <PaginationItem itemId="4">3</PaginationItem>\n      <PaginationItem itemId="5">\n        <span>Next</span>\n      </PaginationItem>\n    </Pagination>\n\n    <Pagination position="center">\n      <PaginationItem itemId="1">\n        <span>Previous</span>\n      </PaginationItem>\n      <PaginationItem itemId="2">1</PaginationItem>\n      <PaginationItem itemId="3">2</PaginationItem>\n      <PaginationItem itemId="4">3</PaginationItem>\n      <PaginationItem itemId="5">\n        <span>Next</span>\n      </PaginationItem>\n    </Pagination>\n    \n    <Pagination position="end">\n      <PaginationItem itemId="1">\n        <span>Previous</span>\n      </PaginationItem>\n      <PaginationItem itemId="2">1</PaginationItem>\n      <PaginationItem itemId="3">2</PaginationItem>\n      <PaginationItem itemId="4">3</PaginationItem>\n      <PaginationItem itemId="5">\n        <span>Next</span>\n      </PaginationItem>\n    </Pagination>\n  '))))}}}]);