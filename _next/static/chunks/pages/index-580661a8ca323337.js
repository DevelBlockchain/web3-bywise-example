(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6616)}])},6616:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return m}});var a=n(5893),c=n(9008),o=n.n(c),t=n(9034),r=n.n(t),i=n(7294),l=n(3807),d=n.n(l),h=n(3354),_=n(1163);function m(){let e=(0,_.useRouter)(),[s,n]=(0,i.useState)(!1),[c,t]=(0,i.useState)(""),[l,m]=(0,i.useState)("0"),[x,u]=(0,i.useState)(null),j="mainnet",p=new(d())(j),f=async()=>{let e=await p.connect();if(e){console.log("userInfo",e),t(p.address);let s=await p.web3.wallets.getWalletInfo(p.address,j);console.log("infoBlockchainUser",s),s&&(m(s.balance),u(s.name)),n(!0)}},g=async()=>{let e=await p.send({to:[h.BywiseHelper.ZERO_ADDRESS],amount:["0"],type:h.TxType.TX_JSON,data:{myData:"huehuehue"}});e?(console.log("result",e),alert("success - txId: ".concat(e.tx.hash))):alert("canceled transaction")};return(0,a.jsxs)("div",{className:r().container,children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Web3 Example"}),(0,a.jsx)("meta",{name:"description",content:"Bywise web3 provider example"}),(0,a.jsx)("link",{rel:"icon",href:"".concat(e.basePath,"/favicon.ico")})]}),(0,a.jsxs)("main",{className:r().main,children:[(0,a.jsx)("img",{className:r().bywise_logo,src:"".concat(e.basePath,"/favicon.ico"),alt:"Blockchain Bywise Logo"}),(0,a.jsxs)("h1",{className:r().title,children:["Welcome to ",(0,a.jsx)("a",{target:"_blank",href:"https://bywise.org",rel:"noopener noreferrer",children:"Bywise"})]}),(0,a.jsxs)("p",{className:r().description,children:["Get started by editing"," ",(0,a.jsx)("code",{className:r().code,children:"pages/index.js"})]}),s&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("p",{className:r().description,children:[(0,a.jsx)("span",{children:"Connected User"}),(0,a.jsx)("br",{}),(0,a.jsxs)("span",{children:["Address: ",(0,a.jsx)("code",{className:r().code,children:c})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("span",{children:["Balance: ",(0,a.jsxs)("code",{className:r().code,children:[l," BWS"]})]}),(0,a.jsx)("br",{}),x&&(0,a.jsxs)("span",{children:["Name: ",(0,a.jsx)("code",{className:r().code,children:x})]})]})}),(0,a.jsxs)("div",{className:r().grid,children:[s&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{className:r().card,onClick:g,children:(0,a.jsx)("h2",{children:"Send Transaction \uD83D\uDD25"})})}),!s&&(0,a.jsx)("button",{className:r().card,onClick:f,children:(0,a.jsx)("h2",{children:"Connect Wallet \uD83D\uDE80"})})]})]}),(0,a.jsx)("footer",{className:r().footer,children:(0,a.jsxs)("a",{href:"https://develblockchain.com",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,a.jsx)("span",{className:r().logo,children:(0,a.jsx)("img",{src:"".concat(e.basePath,"/devel.svg"),alt:"Devel Blockchain Logo",height:40})})]})})]})}},9034:function(e){e.exports={container:"Home_container__d256j",main:"Home_main__VkIEL",footer:"Home_footer__yFiaX",title:"Home_title__hYX6j",description:"Home_description__uXNdx",code:"Home_code__VVrIr",grid:"Home_grid__AVljO",card:"Home_card__E5spL",bywise_logo:"Home_bywise_logo__S3PBL"}},6601:function(){}},function(e){e.O(0,[714,543,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);