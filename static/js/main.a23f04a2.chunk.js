(this["webpackJsonpsku-game22"]=this["webpackJsonpsku-game22"]||[]).push([[0],{39:function(e,t,a){e.exports=a(69)},44:function(e,t,a){},45:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n,r,c,o=a(0),i=a.n(o),l=a(34),u=a.n(l),s=(a(44),a(10)),d=(a(45),a(20)),m=a(11),f=a(36);!function(e){e.tilelayer="tilelayer",e.objectgroup="objectgroup"}(n||(n={})),function(e){e.orthagonal="orthagonal",e.isometric="isometric",e.staggered="staggered",e.hexagonal="hexagonal"}(r||(r={})),function(e){e.rightUp="right-up",e.rightDown="right-down",e.leftUp="left-up",e.leftDown="left-down"}(c||(c={}));var p=a(7);window.PIXI=p;var g,h=Object(m.PixiComponent)("RectTileLayer",{create:function(e){return a(33),new window.PIXI.tilemap.CompositeRectTileLayer(0,[e.texture])},applyProps:function(e,t,a){var n=a.layer,r=a.tileset,c=a.horizontalTiles,o=a.spritesheet;if(n.data)for(var i=0;i<n.data.length;i++){var l=r.tilewidth,u=r.tileheight,s=i%c*l,d=Math.floor(i/c)*u;if(n.data[i]>0){var m="".concat(r.name,"-").concat(n.data[i]);e.addFrame(o.textures[m],s,d)}}}}),v=function(e){var t=e.basePath,a=e.data,r=e.setObjects,c=e.setWallLocations,l=Object(o.useState)(),u=Object(s.a)(l,2),d=u[0],f=u[1],g=Object(o.useState)(),h=Object(s.a)(g,2),v=h[0];h[1];return Object(o.useEffect)((function(){var e=w(a),o=b(a),i=p.Texture.from("".concat(t,"/").concat(o.image)),l=p.BaseTexture.from("".concat(t,"/").concat(o.image)),u=new p.Spritesheet(l,e),s=[];u.parse((function(){var e=a.layers.filter((function(e){return e.visible})).map((function(e){return e.properties&&e.properties.some((function(e){return"wall"===e.name&&!0===e.value}))&&x(s,e,e.width),E(e,i,a.width,o,u)})),t=a.layers.find((function(e){return e.type===n.objectgroup}));if(t){var l=t.objects.reduce((function(e,t){var n=t.x,r=t.y,c=[n/a.tilewidth,r/a.tileheight-1];return e["".concat(c[0],",").concat(c[1])]=t,e}),{});r(l)}c(s),f(e)}))}),[t,a,r,c]),i.a.createElement(m.Container,null,d,v)},b=function(e){if(!e.tilesets.length)throw new Error("No tilesets found! Can't continue");if(e.tilesets.length>1&&console.warn("Found more than one tileset. But we currently only support one."),e.tilesets[0].source)throw new Error("Please embed tilemaps in Tiled! Can't continue");return e.tilesets[0]},E=function(e,t,a,n,r){return i.a.createElement(h,{key:e.name,texture:t,layer:e,horizontalTiles:a,tileset:n,spritesheet:r})},w=function(e){for(var t=b(e),a=t.columns,n={},r=0;r<t.tilecount;r++){var c=t.tilewidth,o=t.tileheight,i=r%a*c,l=Math.floor(r/a)*o;n["".concat(t.name,"-").concat(r+1)]={frame:{x:i,y:l,w:c,h:o},spriteSourceSize:{x:i,y:l,w:c,h:o},rotated:!1,trimmed:!1,sourceSize:{w:c,h:o}}}return{frames:n,meta:{image:t.image,size:{w:t.imagewidth,h:t.imageheight},scale:1}}},x=function(e,t,a){t.data.reduce((function(e,t,n){if(t>0){var r=n%a,c=Math.floor(n/a);e.push([r,c])}return e}),e)};!function(e){e.A="A",e.B="B",e.C="C",e.D="D"}(g||(g={}));var y,O=function(e,t){switch(t.type){case"setWMS":return t.wms;default:return e}},j=[{category:g.A,productCode:"IRN 590",description:"product-description-clothes-iron"},{category:g.A,productCode:"CAM 679",description:"product-description-digital-camera"},{category:g.A,productCode:"SMK 019",description:"product-description-smoke-detector",pair:"BAT 917"},{category:g.A,productCode:"BAT 917",description:"product-description-battery-charger",pair:"SMK 019"},{category:g.B,productCode:"VRL 444",description:"product-description-vr-headset"},{category:g.B,productCode:"PTV 555",description:"product-description-plasma-tv",pair:"SPK 876"},{category:g.B,productCode:"SPK 876",description:"product-description-speaker-system",pair:"PTV 555"},{category:g.C,productCode:"WSH 322",description:"product-description-washing-machine"},{category:g.C,productCode:"RFG 411",description:"product-description-refrigerator"},{category:g.C,productCode:"SMX 041",description:"product-description-mixer"},{category:g.D,productCode:"TPH 255",description:"product-description-telephone"},{category:g.D,productCode:"CST 964",description:"product-description-casette-player"}],S=a(38),k=a(14),C=function(e,t){switch(t.type){case"setPickingLists":return t.pickingLists;case"startPicking":return e.map((function(e){return e.orderNo===t.orderNo?Object(k.a)(Object(k.a)({},e),{},{guy:t.guy}):e}));case"completeProductPick":return e.map((function(e){return e.orderNo===t.orderNo?Object(k.a)(Object(k.a)({},e),{},{pickedProducts:[].concat(Object(S.a)(e.pickedProducts||[]),[t.productCode])}):e}));case"completeOrder":return e.map((function(e){return e.orderNo===t.orderNo?Object(k.a)(Object(k.a)({},e),{},{complete:!0}):e}));case"restart":return e.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{guy:void 0,complete:!1,pickedProducts:[]})}));default:return e}},T=a(15),P=function(e){var t=e.map((function(e){return e.productCode}));return t.sort((function(){return.5-Math.random()})),t.reduce((function(e,t,a){return e[t]={location:[8+a,1]},e}),{})},N={boxes:P(j)},B=function(e,t,a){switch(t.type){case"cheat":return{boxes:{"IRN 590":{location:[16,8],zone:"A"},"CAM 679":{location:[17,8],zone:"A"},"BAT 917":{location:[16,6],zone:"A"},"SMK 019":{location:[17,6],zone:"A"},"VRL 444":{location:[11,8],zone:"B"},"PTV 555":{location:[11,6],zone:"B"},"SPK 876":{location:[12,6],zone:"B"},"WSH 322":{location:[6,8],zone:"C"},"SMX 041":{location:[7,8],zone:"C"},"RFG 411":{location:[6,6],zone:"C"},"TPH 255":{location:[1,6],zone:"D"},"CST 964":{location:[1,8],zone:"D"}}};case"placeBox":var n=t.location,r=t.zone,c=Object(k.a)(Object(k.a)({},e.boxes),{},Object(T.a)({},t.productCode,Object(k.a)(Object(k.a)({},e.boxes[t.productCode]),{},{location:n,zone:r})));return Object(k.a)(Object(k.a)({},e),{},{boxes:c});case"restart":return{boxes:P(a)};default:return e}};!function(e){e[e.intro=0]="intro",e[e.placingBoxes=1]="placingBoxes",e[e.pickingBoxes=2]="pickingBoxes",e[e.complete=3]="complete"}(y||(y={}));var M,R,L=function(e,t){switch(t.type){case"intro":return y.intro;case"startGame":return y.placingBoxes;case"startPicking":return y.pickingBoxes;case"completeGame":return y.complete;case"restart":return y.placingBoxes;default:return e}},A={statusText:"",gameState:y.intro,wms:j,pickingLists:(M=[["IRN 590","CAM 679"],["CAM 679","VRL 444","IRN 590"],["RFG 411","IRN 590","CAM 679"],["VRL 444","SMK 019","BAT 917","SPK 876","PTV 555"],["SMX 041","PTV 555","SPK 876","CAM 679"],["BAT 917","SMK 019","IRN 590","WSH 322"]],M.map((function(e){return{orderNo:Math.random().toString().slice(2,9),products:e}}))),warehouse:N,muted:"true"===localStorage.getItem("muted"),time:0},I=function(e,t){switch(t.type){case"setStatusText":return t.text;default:return e}},z=function(e,t){switch(t.type){case"setMuted":return localStorage.setItem("muted",t.value?"true":"false"),t.value;default:return e}},D=function(e,t){switch(t.type){case"tick":return performance.now()-t.start;default:return e}},F=Object(o.createContext)({state:A,dispatch:function(){return null}}),W=function(e,t){return{gameState:L(e.gameState,t),statusText:I(e.statusText,t),wms:O(e.wms,t),pickingLists:C(e.pickingLists,t),warehouse:B(e.warehouse,t,e.wms),muted:z(e.muted,t),time:D(e.time,t)}},H=function(e){var t=e.children,a=Object(o.useReducer)(W,A),n=Object(s.a)(a,2),r=n[0],c=n[1];return i.a.createElement(F.Provider,{value:{state:r,dispatch:c}},t)},G=a(70),K=a(17),V=(R={},Object(T.a)(R,g.A,15413795),Object(T.a)(R,g.B,2442883),Object(T.a)(R,g.C,15908162),Object(T.a)(R,g.D,12040119),R);G.a.registerPIXI(p),K.a.registerPlugin(G.a);var X,q=function(e){var t=e.location,a=void 0===t?[0,0]:t,n=e.tileWidth,r=void 0===n?0:n,c=e.tileHeight,l=void 0===c?0:c,u=e.behindWall,s=e.selected,d=Object(o.useRef)(null),f=Object(o.useRef)(null),g=Object(o.useRef)(null),h=Object(o.useRef)(),v=Object(o.useRef)(),b=Object(o.useMemo)((function(){return{x:a[0]*r,y:a[1]*l}}),[a,r,l]),E=b.x,w=b.y,x=function(t){v.current=t.data,t.currentTarget.zIndex=6,t.stopPropagation(),e.onClick&&e.onClick(t),h.current=v.current.getLocalPosition(d.current),f.current.visible=!1,g.current.visible=!0},y=function(t){e.behindWall?t.currentTarget.zIndex=3:t.currentTarget.zIndex=1,v.current=void 0,e.onReleased&&e.onReleased(t),f.current.visible=!0,g.current.visible=!1},O=function(t){if(v.current&&d.current){var a=v.current.getLocalPosition(d.current.parent),n=new p.Point(a.x-h.current.x,a.y-h.current.y);d.current.position=n,e.onDragged&&e.onDragged(t)}},j="".concat(".","/images/box1").concat(e.behindWall?"b":"",".png");return i.a.createElement(m.Container,Object.assign({},e,{x:E,y:w,ref:d,zIndex:e.behindWall?3:1,mousedown:x,touchstart:x,mouseup:y,mouseupoutside:y,touchend:y,mousemove:O,touchmove:O}),s&&i.a.createElement(m.Graphics,{draw:function(t){var a=V[e.product.category];t.clear(),t.lineStyle(2,a),u?t.drawRect(2,l/2-1,r-4,l/2+2):t.drawRect(2,-l/2-1,r-4,l+2),t.endFill()}}),i.a.createElement(m.Sprite,{anchor:u?[0,-.5]:[0,.5],image:j,ref:f}),i.a.createElement(m.Sprite,{name:"ghost",anchor:u?[0,-.5]:[0,.5],alpha:.9,image:"".concat(".","/images/box1.png"),ref:g,visible:!1}))},J=Object(m.PixiComponent)("SpriteAnimated",{create:function(e){var t=e.textures;return new p.AnimatedSprite(t||[],!0)},applyProps:function(e,t,a){Object(m.applyDefaultProps)(e,t,a),e.gotoAndPlay(0)}});!function(e){e.front="front",e.left="left",e.right="right",e.back="back"}(X||(X={}));var U=Object(o.forwardRef)((function(e,t){var a=e.atlas,n=e.carryBox,r=Object(d.a)(e,["atlas","carryBox"]),c=Object(o.useState)(null),l=Object(s.a)(c,2),u=l[0],f=l[1],g=Object(o.useState)(X.right),h=Object(s.a)(g,2),v=h[0],b=h[1],E=Object(m.useApp)(),w=Object(o.useRef)();if(Object(m.useTick)((function(){if(t&&t.current){var e=t.current.position,a=w.current;if(a&&!a.equals(e)){var n=Math.atan2(e.y-a.y,e.x-a.x);n>=Math.PI/-4&&n<=0||n>=0&&n<=Math.PI/4?b(X.right):n>=Math.PI/4&&n<=.75*Math.PI?b(X.front):n>.75*Math.PI||n<-.75*Math.PI?b(X.left):b(X.back)}w.current=e.clone()}})),Object(o.useEffect)((function(){E.loader.onComplete.once((function(){var e=E.loader.resources[a].data.frames,t=Object.keys(e).reduce((function(e,t){var a=t.substring(0,t.length-1);return e[a]||(e[a]=[]),e[a].push(p.Texture.from(t)),e}),{});f(t)})),E.loader.loading||E.loader.add(a).load()}),[E.loader,E.loader.loading,a,e.name]),!u)return null;var x=u["".concat(v).concat(n?"-box":"")];return i.a.createElement(m.Container,Object.assign({ref:t,zIndex:2},r),i.a.createElement(J,{animationSpeed:.15,isPlaying:!0,textures:x,anchor:[0,.1]}),!1)})),$=Object(o.memo)(U),_=a(5);G.a.registerPIXI(p),K.a.registerPlugin(G.a);var Q=function(e){return{x:e[0],y:e[1]}},Y=Object(o.memo)((function(e){var t=e.dispatch,a=e.pickingList,n=e.aStar,r=e.homeLocation,c=e.tileSize,l=e.getProductLocation,u=Object(d.a)(e,["dispatch","pickingList","aStar","homeLocation","tileSize","getProductLocation"]),m=Object(o.useRef)(null),f=Object(o.useState)(!1),p=Object(s.a)(f,2),g=p[0],h=p[1],v=Object(o.useRef)(r),b=Object(o.useRef)();return Object(o.useEffect)((function(){if(m.current&&a){var e=a.orderNo,o=a.products.find((function(e){return!(a.pickedProducts||[]).includes(e)})),i=o||"home";if(!b.current||b.current!==i){b.current=o||i,K.a.killTweensOf(m.current);var u=K.a.timeline(),s=Q(v.current||r);if(o){var d=l(o),f=d.location,p=d.far,g=(null===n||void 0===n?void 0:n.findPath(s,Q(f)))||[];g.forEach((function(e){u.to(m.current,{ease:_.b.easeNone,pixi:{x:e[0]*c,y:e[1]*c},duration:.1+(p?.035:0)})})),u.to(m.current,{delay:p?.2:0,onComplete:function(){h(!0),t({type:"completeProductPick",productCode:o,orderNo:e});var a=g[g.length-1];v.current=a}})}else{((null===n||void 0===n?void 0:n.findPath(s,Q(r)))||[]).forEach((function(e){u.to(m.current,{ease:_.b.easeNone,pixi:{x:e[0]*c,y:e[1]*c},duration:.1})})),u.to(m.current,{onComplete:function(){h(!1),v.current=r,t({type:"completeOrder",orderNo:e})}})}}}}),[n,t,l,r,a,c,e.name]),i.a.createElement($,Object.assign({atlas:"".concat(".","/images/sprites/guy/guy.json"),x:r[0]*c,y:r[1]*c,carryBox:g},u,{ref:m}))})),Z=a(18),ee=a(37),te=Object(ee.a)((function(e,t){return{texts:{},getText:function(e){var a=t().texts[e];return ae(a)},getTextRaw:function(e){return t().texts[e]}}})),ae=function(e){return null===e||void 0===e?void 0:e.split("\n").reduce((function(e,t){return null===e?t:o.createElement(o.Fragment,null,e,o.createElement("br",null),t)}),null)};a(33);G.a.registerPIXI(p),K.a.registerPlugin(G.a),window.PIXI=p;var ne=function(e){var t=e.tilemap,a=e.width,n=e.height,r=Object(d.a)(e,["tilemap","width","height"]),c=Object(o.useContext)(F),l=c.state,u=c.dispatch,g=te(),h=l.warehouse,b=Object(o.useState)(),E=Object(s.a)(b,2),w=E[0],x=E[1],O=Object(o.useState)(),j=Object(s.a)(O,2),S=j[0],k=j[1],C=Object(o.useState)([]),T=Object(s.a)(C,2),P=T[0],N=T[1],B=Object(o.useState)(),M=Object(s.a)(B,2),R=M[0],L=M[1],A=Object(o.useRef)(null),I="".concat(".","/").concat(t);Object(o.useEffect)((function(){(new p.Loader).add(I).load((function(e){var t=e.resources[I].data;x(t)}))}),[I]);var z=I.substr(0,I.lastIndexOf("/"));Object(o.useEffect)((function(){Z.a.add("snap","".concat(".","/sound/snap.wav")),Z.a.add("whoosh","".concat(".","/sound/whoosh.mp3")),Z.a.add("bennyHill","".concat(".","/sound/BennyHill.mp3"))}),[]),Object(o.useEffect)((function(){l.gameState!==y.pickingBoxes||l.muted?Z.a.stop("bennyHill"):Z.a.play("bennyHill")}),[l.gameState,l.muted]);var D=Object(o.useCallback)((function(e){return null===S||void 0===S?void 0:S["".concat(e[0],",").concat(e[1])]}),[S]),W=function(e){return{location:l.warehouse.boxes[e].location,far:!1}},H=Object(o.useCallback)((function(e){return(null===w||void 0===w?void 0:w.tilewidth)&&w.tileheight?[Math.floor(e.x/(null===w||void 0===w?void 0:w.tilewidth)),Math.floor(e.y/(null===w||void 0===w?void 0:w.tileheight))]:[0,0]}),[w]),G=function(e){var t=Object.entries(h.boxes).find((function(t){var a=Object(s.a)(t,2),n=(a[0],a[1]);return n.location[0]===e[0]&&n.location[1]===e[1]}));if(t)return t[0]},V=Object(o.useCallback)((function(e){return P.some((function(t){return t[0]===e[0]&&t[1]===e[1]}))}),[P]),X=Object(o.useMemo)((function(){if(!w||!P.length)return null;for(var e=[],t=0;t<w.height;t++){for(var a=[],n=0;n<w.width;n++){var r=V([n,t]);a.push(r?1:0)}e.push(a)}return new f.AStarFinder({grid:{matrix:e},diagonalAllowed:!1,includeStartNode:!1,heuristic:"Manhatten",weight:0})}),[w,V,P]),J=Object(o.useState)(),U=Object(s.a)(J,2),$=U[0],_=U[1],Q=Object(o.useState)(),ee=Object(s.a)(Q,2),ae=ee[0],ne=ee[1],oe=Object(o.useState)(),ie=Object(s.a)(oe,2),le=ie[0],ue=ie[1];Object(o.useEffect)((function(){if(l.gameState===y.pickingBoxes){L(void 0);var e=l.pickingLists.find((function(e,t){return!e.complete&&t%3===0}));_(e);var t=l.pickingLists.find((function(e,t){return!e.complete&&t%3===1}));ne(t);var a=l.pickingLists.find((function(e,t){return!e.complete&&t%3===2}));ue(a),e||t||a||u({type:"completeGame"})}}),[u,l.gameState,l.pickingLists]);return i.a.createElement(m.Stage,{width:a,height:n},i.a.createElement(m.Container,Object.assign({ref:A,interactive:!0,hitArea:new p.RoundedRectangle(0,0,a,n,0),sortableChildren:!0},r),w&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{basePath:z,data:w,setObjects:k,setWallLocations:N}),i.a.createElement(i.a.Fragment,null,i.a.createElement(m.Sprite,{x:127,y:383,image:"".concat(".","/images/sprites/floor/inbound.png")}),i.a.createElement(m.Sprite,{x:544,y:383,image:"".concat(".","/images/sprites/floor/outbound.png")})),w&&P.length?Object.entries(h.boxes).map((function(t){var a=Object(s.a)(t,2),n=a[0],r=a[1],c=l.wms.find((function(e){return e.productCode===n}));return i.a.createElement(q,{location:r.location,product:c,tileWidth:w.tilewidth,tileHeight:w.tileheight,selected:n===R,onClick:function(t){return function(t,a){e.onProductClick(t);var n=l.wms.find((function(e){return e.productCode===t}));u({type:"setStatusText",text:g.getTextRaw("status-selected").replace("{0}",g.getTextRaw(n.description)).replace("{1}",t)}),L(t)}(n)},onDragged:function(e){return function(e,t){var a=t.data.global,n=H(a),r=D(n),c=16777215;if("rack"===(null===r||void 0===r?void 0:r.type)){var o=G(n);c=o&&o!==e?16724736:65328}re(t.currentTarget,c)}(n,e)},onReleased:function(e){return function(e,t){var a=t.data.global,n=H(a);re(t.currentTarget,16777215);var r=D(n);if(r){var c=G(n);if(!c||c===e){var o,i;c===e||l.muted||Z.a.play("snap");var s=null===r||void 0===r||null===(o=r.properties)||void 0===o||null===(i=o.find((function(e){return"zone"===e.name})))||void 0===i?void 0:i.value;return void u({type:"placeBox",productCode:e,location:n,zone:s})}}var d=h.boxes[e],m=d.location[0]*w.tilewidth,f=d.location[1]*w.tileheight;l.muted||Z.a.play("whoosh"),K.a.to(t.currentTarget,{duration:.5,ease:"bounce.out",pixi:{x:m,y:f}})}(n,e)},key:n,behindWall:ce(r.location,P),interactive:l.gameState===y.placingBoxes})})):null,X?i.a.createElement(i.a.Fragment,null,i.a.createElement(Y,{name:"guy1",pickingList:$,homeLocation:[17,12],tileSize:w.tilewidth,getProductLocation:W,dispatch:u,aStar:X,visible:l.gameState===y.pickingBoxes}),i.a.createElement(Y,{name:"guy2",pickingList:ae,homeLocation:[18,12],tileSize:w.tilewidth,getProductLocation:W,dispatch:u,aStar:X,visible:l.gameState===y.pickingBoxes}),i.a.createElement(Y,{name:"guy3",pickingList:le,homeLocation:[19,12],tileSize:w.tilewidth,getProductLocation:W,dispatch:u,aStar:X,visible:l.gameState===y.pickingBoxes})):null)))},re=function(e,t){var a=e.children.find((function(e){return"ghost"===e.name}));a&&(a.tint=t)},ce=function(e,t){return t.some((function(t){return t[0]===e[0]&&t[1]===e[1]+1}))},oe=(a(61),function(e){var t=Object(o.useRef)(null),a=Object(o.useContext)(F).state,n=te(),r=a.wms;Object(o.useEffect)((function(){if(t.current){var a=t.current;return a.querySelectorAll('tr[data-code="'.concat(e.selectedProduct,'"]')).forEach((function(e){e.classList.add("highlight"),e.scrollIntoView({block:"end"})})),function(){a.querySelectorAll(".highlight").forEach((function(e){e.classList.remove("highlight")}))}}}),[e.selectedProduct]);var c=function(e){var t,a=(t={},Object(T.a)(t,g.A,"cat-a"),Object(T.a)(t,g.B,"cat-b"),Object(T.a)(t,g.C,"cat-c"),Object(T.a)(t,g.D,"cat-d"),t);return i.a.createElement(o.Fragment,{key:e.productCode},i.a.createElement("tr",{key:e.productCode,"data-code":e.productCode,className:a[e.category]},i.a.createElement("td",null,e.productCode),i.a.createElement("td",null,n.getText(e.description))),e.pair&&i.a.createElement("tr",{key:"".concat(e.productCode,"-pair"),"data-code":e.productCode,className:a[e.category]},i.a.createElement("td",{colSpan:2,className:"pair"},n.getTextRaw("frequently-sold-with").replace("{0}",e.pair))))};return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,n.getText("sku-velocity-profile")),i.a.createElement("table",{ref:t},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",{colSpan:2,className:"category-header-a"},n.getText("category-header-a"))),r.filter((function(e){return e.category===g.A})).map((function(e){return c(e)})),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:2,className:"category-header-b"},n.getText("category-header-b"))),r.filter((function(e){return e.category===g.B})).map((function(e){return c(e)})),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:2,className:"category-header-c"},n.getText("category-header-c"))),r.filter((function(e){return e.category===g.C})).map((function(e){return c(e)})),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:2,className:"category-header-d"},n.getText("category-header-d"))),r.filter((function(e){return e.category===g.D})).map((function(e){return c(e)})))))}),ie=function(){var e=Object(o.useContext)(F).state,t=te(),a=e.pickingLists,n=e.wms.reduce((function(e,a){return e[a.productCode]||(e[a.productCode]=t.getTextRaw(a.description)),e}),{}),r=function(e){return i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:3},t.getText("order-no"),": ",e.orderNo)),e.products.map((function(t){return c(e,t)}))))},c=function(e,t){var a,r=null===(a=e.pickedProducts)||void 0===a?void 0:a.some((function(e){return e===t}));return i.a.createElement("tr",{key:t,className:r?"completed":""},i.a.createElement("td",null),i.a.createElement("td",null,t),i.a.createElement("td",null,n[t]))};return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,t.getText("picking-lists")),a.map((function(e){return i.a.createElement("div",{key:e.orderNo},r(e))})))},le=function(e){var t=Object(o.useContext)(F).state.gameState;return i.a.createElement("div",{className:"ipad",style:{backgroundImage:"url(".concat(".","/images/ui/ipad.png)")}},i.a.createElement("div",{className:"content"},function(){switch(t){case y.placingBoxes:return i.a.createElement(oe,{selectedProduct:e.selectedProduct});case y.pickingBoxes:case y.complete:return i.a.createElement(ie,null)}}()))},ue=(a(62),function(){var e=Object(o.useContext)(F),t=e.state,a=e.dispatch,n=te();switch(t.gameState){case y.placingBoxes:return i.a.createElement("button",{onClick:function(){switch(t.gameState){case y.placingBoxes:if(!!Object.values(t.warehouse.boxes).some((function(e){return!e.zone})))return void a({type:"setStatusText",text:n.getTextRaw("first-place-goods")});a({type:"startPicking"});break;case y.complete:location.reload()}},className:"start-button"},i.a.createElement("h1",null,n.getText("button-complete")));default:return null}}),se=(a(63),function(){var e=Object(o.useContext)(F),t=e.state,a=e.dispatch,n=t.statusText,r=t.time;if(Object(o.useEffect)((function(){var e,n=performance.now();if(t.gameState===y.pickingBoxes){e=setInterval((function(){a({type:"tick",start:n})}),100)}return function(){clearTimeout(e)}}),[a,t.gameState]),t.gameState===y.pickingBoxes){var c=Math.min(r/45e3,1),l=r>3e4?"#f63a0f":"#86e01e";return i.a.createElement("div",{className:"status"},i.a.createElement("div",{className:"progress"},i.a.createElement("div",{className:"progress-bar",style:{width:"".concat(100*c,"%"),backgroundColor:l}}),i.a.createElement("div",{className:"text"},de(r))))}return i.a.createElement("div",{className:"status"},n)}),de=function(e){var t=e/1e3,a=Math.floor(t/3600);t%=3600;var n=Math.floor(t/60);return t%=60,a>0?"".concat(me(a),":").concat(me(n),":").concat(t.toFixed(1).padStart(4,"0")):"".concat(me(n),":").concat(t.toFixed(1).padStart(4,"0"))},me=function(e){return"".concat(e).padStart(2,"0")},fe=(a(64),function(){var e=Object(o.useContext)(F),t=e.state,a=e.dispatch,n=te();return window.cheat=function(){a({type:"cheat"})},i.a.createElement("div",{className:"settings"},i.a.createElement("input",{type:"checkbox",onChange:function(e){a({type:"setMuted",value:!e.target.checked})},checked:!1===t.muted}),i.a.createElement("label",null,n.getText("sound-on")))}),pe=(a(65),Object(o.memo)((function(){var e=Object(o.useContext)(F),t=e.state,a=e.dispatch,n=te(),r=Object(o.useState)(!1),c=Object(s.a)(r,2),l=c[0],u=c[1];Object(o.useEffect)((function(){t.gameState===y.pickingBoxes&&setTimeout(u,1e4,!0)}),[t.gameState]);var d=0,m=Object(o.useMemo)((function(){return t.wms.filter((function(e){return e.pair})).reduce((function(e,t){var a=e.find((function(e){return e.indexOf(t.pair)>-1}));return a?a[1]=t.productCode:e.push([t.productCode,""]),e}),[])}),[t.wms]);if(!l)return null;var f=function(e,a){var n=0,r=0;t.wms.forEach((function(e){if(e.category===a){r++;var c=t.warehouse.boxes[e.productCode].zone;(c===a.toString()||a===g.C&&"B"===c)&&n++}}));var c=n;return d+=c,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,"".concat(e," ")),i.a.createElement("div",null,"".concat(c," placed correct")),i.a.createElement("div",null,"".concat(c,"/").concat(r)))};return i.a.createElement("div",{className:"gameover-screen"},i.a.createElement("h1",null,n.getText("gameover-header")),i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"table"},i.a.createElement("div",{className:"table-header"},n.getText("gameover-header-products")),i.a.createElement("div",{className:"table-header"},n.getText("gameover-header-result")),i.a.createElement("div",{className:"table-header"},n.getText("gameover-header-score")),f("Fast moving products",g.A),f("Medium moving products",g.B),f("Slow moving products",g.C),m.map((function(e){return function(e){var a=t.warehouse.boxes[e[0]].location,r=t.warehouse.boxes[e[1]].location,c=0;return 1===Math.abs(a[0]-r[0])&&a[1]===r[1]?(d+=c=3,i.a.createElement(o.Fragment,{key:e.toString()},i.a.createElement("div",null,n.getText("gameover-pair"),"".concat(e)),i.a.createElement("div",null,n.getText("gameover-pair-placed")),i.a.createElement("div",null,"".concat(c,"/3")))):i.a.createElement(o.Fragment,{key:e.toString()},i.a.createElement("div",null,n.getText("gameover-pair"),"".concat(e)),i.a.createElement("div",null,n.getText("gameover-pair-notplaced")),i.a.createElement("div",null,"".concat(c,"/3")))}(e)})),function(){var e=0;t.wms.filter((function(e){return e.category===g.D})).forEach((function(a){t.warehouse.boxes[a.productCode].zone!==g.D.toString()&&e++})),t.wms.filter((function(e){return e.category!==g.D})).forEach((function(a){t.warehouse.boxes[a.productCode].zone===g.D.toString()&&e++}));var a=-5*e;return d+=a,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,n.getText("gameover-non-moving-products")),i.a.createElement("div",null,"".concat(e," ").concat(n.getText("gameover-mistakes-made"))),i.a.createElement("div",null,"".concat(a)))}(),i.a.createElement("div",{className:"table-footer summary"},16===d?i.a.createElement("span",{className:"success"},n.getText("gameover-success")):i.a.createElement("span",{className:"fail"},n.getText("gameover-fail"))),i.a.createElement("div",{className:"table-footer"},n.getText("gameover-total"),i.a.createElement("b",null,d)))),i.a.createElement("button",{onClick:function(){u(!1),a({type:"restart"})},className:"button"},n.getText("gameover-button-reset")))}))),ge=(a(66),Object(o.memo)((function(){var e=Object(o.useContext)(F),t=e.state,a=e.dispatch,n=te();return t.gameState!==y.intro?null:i.a.createElement("div",{className:"intro-screen"},i.a.createElement("h1",null,n.getText("intro-header")),i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"text"},n.getText("intro-description")),i.a.createElement("div",{className:"trilogy"},i.a.createElement("div",null,i.a.createElement("img",{src:"".concat(".","/images/intro/intro-1.png"),alt:"docking area"}),i.a.createElement("p",null,n.getText("intro-text1"))),i.a.createElement("div",null,i.a.createElement("img",{src:"".concat(".","/images/intro/intro-2.png"),alt:"docking area"}),i.a.createElement("p",null,n.getText("intro-text2")),i.a.createElement("p",null)),i.a.createElement("div",null,i.a.createElement("img",{src:"".concat(".","/images/intro/intro-3.png"),alt:"docking area"}),i.a.createElement("p",null,n.getText("intro-text3"))))),i.a.createElement("button",{onClick:function(){a({type:"startGame"})},className:"button"},n.getText("intro-start")))})));a(67);function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var be=i.a.createElement("defs",null,i.a.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}")),Ee=i.a.createElement("title",null,"Back"),we=i.a.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65}),xe=i.a.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"}),ye=i.a.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"}),Oe=i.a.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"}),je=i.a.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02}),Se=i.a.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11}),ke=function(e){var t=e.svgRef,a=e.title,n=ve(e,["svgRef","title"]);return i.a.createElement("svg",he({width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t},n),be,void 0===a?Ee:a?i.a.createElement("title",null,a):null,we,xe,ye,Oe,je,Se)},Ce=i.a.forwardRef((function(e,t){return i.a.createElement(ke,he({svgRef:t},e))})),Te=(a.p,function(e){var t=e.gameDataReceived,a=function(e){if(window.hasOwnProperty("webkit")&&window.webkit.hasOwnProperty("messageHandlers")){var t=JSON.stringify(e);webkit.messageHandlers.cordova_iab.postMessage(t)}else window.parent.postMessage(e,"*")};return Object(o.useEffect)((function(){window.setGameData=function(e){a({type:"setGameData",data:e})},window.GAMEDATA=null,window.getGameData=function(){return window.GAMEDATA},window.addEventListener("message",(function(e){e.data&&e.data.hasOwnProperty("userId")&&(window.GAMEDATA=e.data,t(e.data))}),!1)}),[t]),i.a.createElement("div",{className:"close"},i.a.createElement(Ce,{onClick:function(){a({type:"exit"})}}))}),Pe=(a(68),function(){return i.a.createElement("div",{className:"loading-background"},i.a.createElement("div",{className:"white-block"},i.a.createElement("div",{className:"outset"}),i.a.createElement("div",{className:"blue-block"})),i.a.createElement("div",{className:"subtext"},"Stay curious",i.a.createElement("span",{className:"dots"},i.a.createElement("span",{className:"dot1"},"."),i.a.createElement("span",{className:"dot2"},"."),i.a.createElement("span",{className:"dot3"},"."))))});window.PIXI=p;var Ne=function(){var e=Object(o.useState)(),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(o.useRef)(null),c=te();Object(o.useEffect)((function(){var e=function(){if(r.current)if(window.innerWidth-960<0||window.innerHeight-480<0){var e=1;e=window.innerWidth-960<window.innerHeight-480?window.innerWidth/960:window.innerHeight/480,r.current.style.transform="scale(".concat(e,") translate(-50%, -50%)")}else r.current.style.transform="translate(-50%, -50%)"};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var l=Object(o.useCallback)((function(e){if(e.translations){var t=e.translations.reduce((function(e,t){return e[t.key]=t.value,e}),{});te.setState({texts:t})}}),[]);Object(o.useEffect)((function(){0}),[l]);var u=0===Object.values(c.texts).length;return i.a.createElement(i.a.Fragment,null,i.a.createElement(H,null,i.a.createElement(Be,null),u&&i.a.createElement(Pe,null),!u&&i.a.createElement("div",{className:"App",ref:r},i.a.createElement(fe,null),i.a.createElement(ne,{tilemap:"scenes/level2.json",width:672,height:416,onProductClick:n}),i.a.createElement(le,{selectedProduct:a}),i.a.createElement(ue,null),i.a.createElement(se,null),i.a.createElement(ge,null),i.a.createElement(pe,null))))},Be=function(){var e=Object(o.useContext)(F).dispatch;return i.a.createElement(Te,{gameDataReceived:function(t){t.content.wms&&e({type:"setWMS",wms:t.content.wms}),t.content.pickingLists&&e({type:"setPickingLists",pickingLists:t.content.pickingLists}),e({type:"restart"}),e({type:"intro"})}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a23f04a2.chunk.js.map