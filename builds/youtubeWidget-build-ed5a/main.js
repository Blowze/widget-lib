!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,o){"use strict";t.a=(e,t)=>{let o;for(o in t)e.style[o]=t[o]}},,function(e,t,o){"use strict";o.r(t);var n=o(0),a=()=>!!(/iphone|ipod|ipad|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())&&screen.width<992);t.default=e=>{const t=e.videoId?e.videoId:"M7lc1UVf-VE";let o=e.width?e.width:240;const r=e.marginSide?e.marginSide:50,i=e.marginBottom?e.marginBottom:50,c=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),l=document.createElement("span"),p=document.createElement("span"),b=document.createElement("span"),u=document.createElement("span");c.appendChild(d),d.appendChild(s),d.appendChild(l),d.appendChild(p),p.appendChild(b),p.appendChild(u),s.setAttribute("id","player"),c.className="getreview-widget",c.setAttribute("id","getreview_widget"),Object(n.a)(c,{position:"fixed",zIndex:"999999"}),Object(n.a)(d,{zIndex:"999999",overflow:"hidden",borderStyle:"solid",background:"#eeeeee",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.40)",transition:"transform 0.2s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, bottom 0.3s ease-in-out, border-color 0.2s ease-in-out, opacity 1s ease-in-out",outline:"none",cursor:"pointer",boxSizing:"border-box",userSelect:"none"}),Object(n.a)(l,{zIndex:"999999",position:"absolute",left:"0",right:"0",bottom:0,top:0,background:"#fff",opacity:.2}),Object(n.a)(d,{borderRadius:"20px","borderWidth:":"3px",borderColor:"rgb(255, 255, 255)"}),Object(n.a)(p,{position:"absolute",top:"6px",right:"6px",width:"20px",height:"20px","z-index":"250",opacity:"0",zIndex:"999999",transition:"transform 0.3s ease-in-out 0s, opacity 0.2s ease-in-out 0s"}),Object(n.a)(b,{position:"absolute",transform:"rotate(45deg)",left:"9px",top:"1px",height:"18px",width:"2px","box-shadow":"rgba(0, 0, 0, 0.5) 1px 1px 10px;",background:"white"}),Object(n.a)(u,{position:"absolute",transform:"rotate(-45deg)",left:"9px",top:"1px",height:"18px",width:"2px","box-shadow":"rgba(0, 0, 0, 0.5) 1px 1px 10px;",background:"white"}),Object(n.a)(s,{objectFit:"cover",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:"102%",minHeight:"102%",zIndex:"200",transition:"opacity 0.4s ease-in-out 0s"}),"right"===e.position?(Object(n.a)(d,{position:"absolute",right:a()?"".concat(Math.ceil(.75*r),"px"):r+"px",bottom:a()?"".concat(Math.ceil(.75*i),"px"):i+"px"}),Object(n.a)(c,{right:0,bottom:0})):(Object(n.a)(d,{position:"absolute",left:a()?"".concat(Math.ceil(.75*r),"px"):r+"px",bottom:a()?"".concat(Math.ceil(.75*i),"px"):i+"px"}),Object(n.a)(c,{left:0,bottom:0})),a()&&Object(n.a)(d,{maxWidth:320-Math.ceil(.75*r)+"px"});let m=!0,h=!1,f=!1;const x=t=>{"vertical"===e.orientation?(o=t,Object(n.a)(d,{width:a()?"".concat(Math.ceil(.75*o),"px"):o+"px",height:16*(a()?"".concat(Math.ceil(.75*o)):o)/9+"px"})):(o=t,Object(n.a)(d,{width:a()?"".concat(Math.ceil(.75*o),"px"):o+"px",height:9*(a()?"".concat(Math.ceil(.75*o)):o)/16+"px"}))};x(o),d.addEventListener("mouseover",()=>{!0===m&&(Object(n.a)(p,{opacity:"1"}),Object(n.a)(d,{borderColor:"rgb(0, 0, 255)",transform:"scale(1.05) translate(5px, -5px)"}))}),d.addEventListener("mouseout",()=>{!0===m&&(Object(n.a)(d,{borderColor:"rgb(255, 255, 255)",transform:"scale(1) translate(0,0)"}),Object(n.a)(p,{opacity:"0"}))});const g=e=>{let t=null;const a=()=>{window.YT.ready(()=>{t=new window.YT.Player("player",{height:"100%",width:"100%",videoId:e,playerVars:{playlist:e,modestbranding:1,loop:1,autoplay:1,controls:0,iv_load_policy:3,showinfo:0,rel:0,fs:0,disablekb:0},events:{onReady:e=>{!1===h&&t.mute(),p.onclick=()=>{!1===h?c.parentNode.removeChild(c):(t.mute(),x(Math.ceil(.5*o)),Object(n.a)(b,{transform:"rotate(45deg)"}),Object(n.a)(u,{transform:"rotate(-45deg)"}),Object(n.a)(l,{display:"block"}),Object(n.a)(d,{borderColor:"rgb(255, 255, 255)"}),h=!1,f=!1,m=!0)},l.onclick=()=>(!1===h&&(x(Math.ceil(2*o)),t.unMute(),Object(n.a)(l,{display:"none"}),Object(n.a)(d,{borderColor:"rgb(0, 0, 255)",transform:"none"}),Object(n.a)(b,{transform:"rotate(90deg)"}),Object(n.a)(u,{transform:"rotate(90deg)"}),m=!1,h=!0,f=!0),!1),document.addEventListener("click",e=>{c.contains(e.target)||!0===f&&(t.mute(),Object(n.a)(b,{transform:"rotate(45deg)"}),Object(n.a)(u,{transform:"rotate(-45deg)"}),x(Math.ceil(.5*o)),Object(n.a)(l,{display:"block"}),Object(n.a)(d,{borderColor:"rgb(255, 255, 255)"}),f=!1,h=!1,m=!0)})}}})})};!function(){const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),e.onload=a}()};"loading"!==document.readyState?g(t):document.addEventListener("DOMContentLoaded",()=>{g(t)}),document.body.append(c)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYnVpbGRzL3lvdXR1YmVXaWRnZXQtYnVpbGQtZWQ1YTViNWZhYmY2YTM2MTFhNWMvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl9fd2VicGFja19leHBvcnRzX18iLCJwRWxlbSIsInBTdHlsZXMiLCJzdHlsZSIsInNldFN0eWxlIiwid2lkZ2V0TW9iIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwic2NyZWVuIiwid2lkdGgiLCJwYXJhbXMiLCJ2aWRlbyIsInZpZGVvSWQiLCJtYXJnaW5TaWRlIiwibWFyZ2luQm90dG9tIiwid2lkZ2V0VmlkZW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWRnZXRWaWRlb0Jsb2NrIiwid2lkZ2V0VmlkZW9CbG9ja1ZpZGVvIiwid2lkZ2V0VmlkZW9CbG9ja0NsaWNrIiwid2lkZ2V0VmlkZW9CbG9ja0Nsb3NlIiwid2lkZ2V0VmlkZW9CbG9ja0Nsb3NlTGluZSIsIndpZGdldFZpZGVvQmxvY2tDbG9zZUxpbmVUd28iLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwiekluZGV4Iiwib3ZlcmZsb3ciLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwib3V0bGluZSIsImN1cnNvciIsImJveFNpemluZyIsInVzZXJTZWxlY3QiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0b3AiLCJvcGFjaXR5IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyV2lkdGg6IiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ6LWluZGV4IiwidHJhbnNmb3JtIiwiYm94LXNoYWRvdyIsIm9iamVjdEZpdCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiY29uY2F0IiwiTWF0aCIsImNlaWwiLCJtYXhXaWR0aCIsInN0YXRlSG92ZXIiLCJzdGF0ZU9wZW4iLCJzdGF0ZUNsb3NlQmciLCJzdHlsZU9yaWVudGF0aW9uIiwiaXRlbSIsIm9yaWVudGF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRWaWRlbyIsInBsYXllciIsInNldHVwUGxheWVyIiwid2luZG93IiwiWVQiLCJyZWFkeSIsIlBsYXllciIsInBsYXllclZhcnMiLCJwbGF5bGlzdCIsIm1vZGVzdGJyYW5kaW5nIiwibG9vcCIsImF1dG9wbGF5IiwiY29udHJvbHMiLCJpdl9sb2FkX3BvbGljeSIsInNob3dpbmZvIiwicmVsIiwiZnMiLCJkaXNhYmxla2IiLCJldmVudHMiLCJvblJlYWR5IiwiZXZlbnQiLCJtdXRlIiwib25jbGljayIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImRpc3BsYXkiLCJ1bk11dGUiLCJjb250YWlucyIsInRhcmdldCIsInRhZyIsInNyYyIsImZpcnN0U2NyaXB0VGFnIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnNlcnRCZWZvcmUiLCJvbmxvYWQiLCJyZWFkeVN0YXRlIiwiYm9keSIsImFwcGVuZCJdLCJtYXBwaW5ncyI6IkNBQVMsU0FBVUEsR0FFVCxJQUFJQyxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FB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cUIsSUFDdkJyRSxFQUVINEUsU0FBU1AsRUFBTVEsVUFDQyxJQUFqQmpDLElBQ0ZNLEVBQU9vQixPQUNQN0csT0FBTzBCLEVBQTBCLEVBQWpDMUIsQ0FBb0M4QyxFQUEyQixDQUM3RDBCLFVBQVcsa0JBRWJ4RSxPQUFPMEIsRUFBMEIsRUFBakMxQixDQUFvQytDLEVBQThCLENBQ2hFeUIsVUFBVyxtQkFFYlksRUFBaUJOLEtBQUtDLEtBQUssR0FBTTlDLElBQ2pDakMsT0FBTzBCLEVBQTBCLEVBQWpDMUIsQ0FBb0M0QyxFQUF1QixDQUN6RHFFLFFBQVMsVUFFWGpILE9BQU8wQixFQUEwQixFQUFqQzFCLENBQW9DMEMsRUFBa0IsQ0FDcEQyQixZQUFhLHVCQUVmYyxHQUFlLEVBQ2ZELEdBQVksRUFDWkQsR0FBYSxhQTZCekIsV0FDRSxNQUFNb0MsRUFBTTdFLFNBQVNDLGNBQWMsVUFDbkM0RSxFQUFJQyxJQUFNLHFDQUNWLE1BQU1DLEVBQWlCL0UsU0FBU2dGLHFCQUFxQixVQUFVLEdBQy9ERCxFQUFlUixXQUFXVSxhQUFhSixFQUFLRSxHQUM1Q0YsRUFBSUssT0FBU2hDLEVBTGYsSUFTMEIsWUFBeEJsRCxTQUFTbUYsV0FDWG5DLEVBQVVyRCxHQUVWSyxTQUFTK0MsaUJBQWlCLG1CQUFvQixLQUM1Q0MsRUFBVXJELEtBSWRLLFNBQVNvRixLQUFLQyxPQUFPdEYiLCJmaWxlIjoieW91dHViZVdpZGdldC1idWlsZC1lZDVhL21haW4uanMiLCJzb3VyY2VSb290IjoiIn0=