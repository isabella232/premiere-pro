(self.webpackChunkdev_site_platform_template=self.webpackChunkdev_site_platform_template||[]).push([[505],{8300:function(e,t,n){"use strict";n.d(t,{o:function(){return P}});var r=n(18),i=n(2137),s=n(7757),a=n.n(s),o=n(5007),c=n(4922),l=n(2275),u=n(465),m=n(7197),d=n(7851),p=n(2390),f=n(5900),h=n.n(f),g=n(5961),v=n(755);var b="688px",w=function(e,t){var n=new URLSearchParams(window.location.search);n.set(e,t),window.history.replaceState({},"",window.location.pathname+"?"+n)},y=function(e){return e.map((function(e){return Object.keys(e)[0]}))},x=function(){var e=(0,i.Z)(a().mark((function e(t,n,r,i){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],(r="all"===Object.keys(r[0])[0]?i:y(r).filter((function(e){return"all"!==e}))).forEach((function(e){s.push({indexName:e,query:n,params:{hitsPerPage:Math.ceil(10/r.length),attributesToRetrieve:["objectID","url","title","description"]}})})),e.next=5,t.multipleQueries(s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}(),Z=function(){var e=(0,i.Z)(a().mark((function e(t,n,r,i,s){var o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("all"===r&&(r=i),Array.isArray(r)){e.next=8;break}return o=t.initIndex(r),e.next=5,o.search(n,{attributesToRetrieve:["objectID","url"],hitsPerPage:100,filters:s.map((function(e){return'keywords:"'+e+'"'})).join(" AND ")});case 5:return e.abrupt("return",e.sent);case 8:return c=[],r.forEach((function(e){c.push({indexName:e,query:n,params:{attributesToRetrieve:["objectID","url"],hitsPerPage:Math.ceil(100/r.length),filters:s.map((function(e){return'keywords:"'+e+'"'})).join(" AND ")}})})),e.next=12,t.multipleQueries(c);case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r,i,s){return e.apply(this,arguments)}}(),k=function(e,t){e.forEach((function(e){var n=e.objectID,r=e.url,i=e._highlightResult;t.push({objectID:n,url:r,_highlightResult:i})}))},z={name:"wciztf",styles:"position:fixed;z-index:1;top:calc(var(--spectrum-global-dimension-size-1200) + var(--spectrum-global-dimension-size-800));bottom:0;left:0;right:0;background-color:rgba(0, 0, 0, 0.4);pointer-events:none"},S={name:"5fn1g1",styles:"margin-top:var(--spectrum-global-dimension-size-100)"},A={name:"pcg0ds",styles:"width:var(--spectrum-global-dimension-size-2400);height:var(--spectrum-global-dimension-size-1200);margin-bottom:var(--spectrum-global-dimension-size-300);fill:var(--spectrum-global-color-static-gray-500)"},j={name:"d8fin9",styles:"margin:var(--spectrum-global-dimension-size-50) 0"},E={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},N={name:"1hctma0",styles:"margin:var(--spectrum-global-dimension-size-300);mark,em{background-color:transparent;color:inherit;font-weight:700;font-style:inherit;}"},R={name:"13udsys",styles:"height:100%"},H={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},_={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},q={name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"},I={name:"14gwd3k",styles:"margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-800)"},L={name:"aj4kza",styles:"white-space:nowrap;text-overflow:ellipsis;overflow:hidden"},M={name:"a4hmbt",styles:"position:absolute"},B={name:"11qpleq",styles:"min-width:auto;width:100%"},D={name:"1d3w5wq",styles:"width:100%"},P=function(e){var t=e.algolia,n=e.searchIndex,s=e.searchKeywords,f=e.indexAll,P=e.showSearch,C=e.setShowSearch,T=e.searchButtonId,Q=(0,o.useState)(""),V=Q[0],F=Q[1],O=(0,o.useState)(y(n)[0]),U=O[0],X=O[1],J=(0,o.useState)([]),K=J[0],G=J[1],W=(0,o.useState)(!1),Y=W[0],$=W[1],ee=(0,o.useState)(!1),te=ee[0],ne=ee[1],re=(0,o.useState)(!1),ie=re[0],se=re[1],ae=(0,o.useRef)(null),oe=(0,o.useRef)(null),ce=(0,o.useRef)(null),le=(0,o.useState)([]),ue=le[0],me=le[1],de=(0,o.useState)([]),pe=de[0],fe=de[1],he=(0,o.useState)(!1),ge=he[0],ve=he[1],be=(0,o.useState)(!1),we=be[0],ye=be[1],xe=(0,o.useRef)(null),Ze=(0,o.useState)(!1),ke=Ze[0],ze=Ze[1],Se=function(e){var t;void 0===e&&(e=n[y(n).indexOf(U)].tabRef),Y&&null!==(t=e)&&void 0!==t&&t.current&&((0,u.Rp)(xe,ke),(0,u.BA)(xe,e))},Ae=function(){var e=(0,i.Z)(a().mark((function e(){var n,r,i,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!V.length){e.next=13;break}return ve(!1),w(p.AQ.query,V),w(p.AQ.keywords,K),w(p.AQ.index,U),Se(),$(!0),e.next=9,Z(t,V,U,f,K);case 9:i=e.sent,s=[],null!=i&&null!==(n=i.results)&&void 0!==n&&n.length?i.results.forEach((function(e){var t=e.hits;k(t,s)})):null!=i&&null!==(r=i.hits)&&void 0!==r&&r.length&&k(i.hits,s),fe(s);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){if(P){var e=new URL(window.location).searchParams,t=e.get(p.AQ.query),n=e.get(p.AQ.keywords),r=e.get(p.AQ.index);r&&X(r),n&&G(n.split(",")),null!=t&&t.length&&(F(t),se(!0),ye(!0)),null!=oe&&oe.current&&oe.current.focus()}}),[P]),(0,o.useEffect)((function(){Ae()}),[U,K]),(0,o.useEffect)((function(){we&&(ye(!1),Ae())}),[we,ye]),(0,o.useEffect)((function(){null!=ce&&ce.current&&(ce.current.scrollTop=0)}),[pe]),(0,o.useEffect)((function(){Y?(Se(),ze(!0)):ze(!1)}),[Y]),(0,o.useEffect)((function(){var e=function(e){var t=e.target;ve(!1),Y||!ae.current||ae.current.contains(t)||t.id===T||C(!1)};return document.addEventListener("click",e,!0),function(){document.removeEventListener("click",e,!0)}}),[ve,Y,C,ae]),(0,o.useEffect)((function(){var e=function(e){"Escape"===e.key&&C(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[C]),(0,c.tZ)(o.default.Fragment,null,(0,c.tZ)("div",{ref:ae,css:(0,c.iv)("position:fixed;top:var(--spectrum-global-dimension-size-800);left:0;right:0;",Y&&"bottom: 0;"," background-color:var(--spectrum-global-color-static-white);z-index:10;@media screen and (max-width: ",p.q9,"){top:var(--spectrum-global-dimension-size-1200);}","")},(0,c.tZ)("div",{css:(0,c.iv)("position:relative;margin:var(--spectrum-global-dimension-size-400) auto;max-width:",b,";@media screen and (max-width: ",p.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},(0,c.tZ)("form",{css:D,className:"spectrum-Search",onSubmit:function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Ae();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(0,c.tZ)("div",{className:h()("spectrum-Textfield",{"is-focused":te}),css:B},(0,c.tZ)(g.Magnify,{className:"spectrum-Textfield-icon"}),(0,c.tZ)("input",{ref:oe,value:V,onFocus:function(){ne(!0)},onBlur:function(){ne(!1)},onChange:function(){var e=(0,i.Z)(a().mark((function e(r){var i,s,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.target.value,F(i),!i.length){e.next=11;break}return se(!0),e.next=6,x(t,i,n,f);case 6:null!=(o=e.sent)&&null!==(s=o.results)&&void 0!==s&&s.length?(c=[],o.results.forEach((function(e){e.hits.forEach((function(e){var t=e.objectID,n=e.url,r=e.title,i=e.description;c.push({objectID:t,url:n,title:r,description:i})}))})),me(c)):me([]),ve(!0),e.next=13;break;case 11:se(!1),ve(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"aria-label":"Search",type:"search",placeholder:"Search",className:"spectrum-Textfield-input spectrum-Search-input",autoComplete:"off"})),ie&&(0,c.tZ)("button",{css:M,"aria-label":"Clear Search",type:"reset",className:"spectrum-ClearButton spectrum-Search-clearButton",onClick:function(){F(""),oe.current.focus()}},(0,c.tZ)(g.Cross,null))),(0,c.tZ)(d.J,{isOpen:ge,css:(0,c.iv)("position:absolute;top:var(--spectrum-global-dimension-size-400);width:",b,";@media screen and (max-width: ",p.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},ue.length>0?(0,c.tZ)(m.v2,null,ue.map((function(e,t){return(0,c.tZ)(m.ck,{isHighlighted:0===t,key:e.objectID,href:e.url},(0,c.tZ)("div",{css:L},(0,c.tZ)("strong",null,e.title)," - ",e.description))}))):(0,c.tZ)("div",{css:I},(0,c.tZ)("div",{css:q},(0,c.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS",css:_},"No Results Found"),(0,c.tZ)("em",null,"Try another search term"))))),Y&&(0,c.tZ)("div",{css:(0,c.iv)("display:flex;max-width:",p.Av,";margin:auto;height:100%;@media screen and (max-width: ",p.q9,"){overflow:auto;flex-wrap:wrap;}","")},(0,c.tZ)("div",{css:(0,c.iv)("display:flex;align-items:flex-start;flex-direction:column;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);min-width:",p.dP,";","")},(0,c.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:H},"Filter by"),(0,c.tZ)("div",{css:(0,c.iv)("margin-top:var(--spectrum-global-dimension-size-100);margin-bottom:var(--spectrum-global-dimension-size-1200);display:flex;flex-direction:column;overflow:auto;@media screen and (max-width: ",p.q9,"){margin-bottom:0;}","")},s.map((function(e,t){return(0,c.tZ)(v.X,{key:t,isSelected:K.includes(e),value:e,onChange:function(t){G(t?function(t){return[].concat((0,r.Z)(t),[e])}:K.filter((function(t){return t!==e})))}},e)})))),(0,c.tZ)("div",{css:R},(0,c.tZ)(u.mQ,{onFontsReady:function(){Se()}},n.map((function(e,t){var n=Object.keys(e)[0],r=e[n];return(0,c.tZ)(u.ck,{key:t,ref:function(t){e.tabRef={current:t}},selected:U===n,tabIndex:0,onClick:(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X(n);case 1:case"end":return e.stop()}}),e)})))},(0,c.tZ)(u.__,null,r))})),(0,c.tZ)(u.NN,{ref:xe})),pe.length>0?(0,c.tZ)("div",{ref:ce,css:(0,c.iv)("height:calc(\n                      100% - var(--spectrum-global-dimension-size-800) - var(--spectrum-global-dimension-size-800) -\n                        var(--spectrum-global-dimension-size-200)\n                    );overflow:auto;@media screen and (max-width: ",p.q9,"){height:auto;overflow:inherit;}","")},pe.map((function(e){return(0,c.tZ)("div",{css:N},(0,c.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeM",css:E},(0,c.tZ)(l.P,{to:e.url},(0,c.tZ)("span",{dangerouslySetInnerHTML:{__html:e._highlightResult.title.value}}))),(0,c.tZ)(l.P,{to:e.url},""+location.origin+e.url),(0,c.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS",css:j,dangerouslySetInnerHTML:{__html:e._highlightResult.description.value}}))}))):(0,c.tZ)("div",{css:(0,c.iv)("position:absolute;top:var(--spectrum-global-dimension-size-3600);height:calc(2 * var(--spectrum-global-dimension-size-1250));margin-top:calc(-1 * var(--spectrum-global-dimension-size-1250));text-align:center;right:0;left:0;padding:0 var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",p.q9,"){position:static;margin:var(--spectrum-global-dimension-size-800) 0;height:auto;}","")},(0,c.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 104 90",css:A},(0,c.tZ)("g",null,(0,c.tZ)("g",null,(0,c.tZ)("path",{d:"M37.5,69A24.54,24.54,0,1,0,17,57.92l0,0L1.46,73.52A5,5,0,0,0,5,82.05H5a5,5,0,0,0,3.54-1.47L24.06,65l0,0A24.33,24.33,0,0,0,37.5,69Zm0-46A21.5,21.5,0,1,1,16,44.5,21.52,21.52,0,0,1,37.5,23ZM6.41,78.46A2,2,0,0,1,5,79.05H5a2,2,0,0,1-1.42-3.42L18.83,60.34a25.21,25.21,0,0,0,2.83,2.83Z"}),(0,c.tZ)("path",{d:"M28.67,53.33a1.51,1.51,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l6.71-6.71,6.71,6.71a1.5,1.5,0,0,0,2.12,0,1.49,1.49,0,0,0,0-2.12L39.62,44.5l6.71-6.71a1.49,1.49,0,0,0,0-2.12,1.51,1.51,0,0,0-2.12,0L37.5,42.38l-6.71-6.71a1.5,1.5,0,0,0-2.12,2.12l6.71,6.71-6.71,6.71A1.51,1.51,0,0,0,28.67,53.33Z"}),(0,c.tZ)("path",{d:"M102.5,31a1.5,1.5,0,0,0-1.5,1.5V86.17a.83.83,0,0,1-.83.83H38.83a.83.83,0,0,1-.83-.83V73.5a1.5,1.5,0,0,0-3,0V86.17A3.84,3.84,0,0,0,38.83,90h61.34A3.84,3.84,0,0,0,104,86.17V32.5A1.5,1.5,0,0,0,102.5,31Z"}),(0,c.tZ)("path",{d:"M37.5,17A1.5,1.5,0,0,0,39,15.5V3.83A.83.83,0,0,1,39.83,3H75V26.5A1.5,1.5,0,0,0,76.5,28h25.55a1.5,1.5,0,0,0,1-2.57L77.55.43a1.43,1.43,0,0,0-.49-.32A1.41,1.41,0,0,0,76.52,0H39.83A3.84,3.84,0,0,0,36,3.83V15.5A1.5,1.5,0,0,0,37.5,17ZM78,5.07,98.37,25H78Z"})))),(0,c.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--light spectrum-Heading--sizeM"},"Sorry, we couldn't find any results for ",(0,c.tZ)("strong",null,V)),(0,c.tZ)("p",{className:"spectrum-Body spectrum-Body--S",css:S},"Make sure all the words are spelled correctly or try to refine your keywords."))))),!Y&&(0,c.tZ)("div",{css:z}))}}}]);
//# sourceMappingURL=379b34f3-a45bb7786c64b251d993.js.map