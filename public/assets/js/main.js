function number_format(e,t,o,a){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var n=isFinite(+e)?+e:0,r=isFinite(+t)?Math.abs(t):0,i=void 0===a?",":a,s=void 0===o?".":o,l="";return(l=(r?function(e,t){var o=Math.pow(10,t);return""+Math.round(e*o)/o}(n,r):""+Math.round(n)).split("."))[0].length>3&&(l[0]=l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,i)),(l[1]||"").length<r&&(l[1]=l[1]||"",l[1]+=new Array(r-l[1].length+1).join("0")),l.join(s)}function getObjects(e,t,o){var a=[];for(var n in e)e.hasOwnProperty(n)&&("object"==typeof e[n]?a=a.concat(getObjects(e[n],t,o)):n==t&&e[t]==o&&a.push(e));return a}function capitalize(e,t){return(e=t?e.toLowerCase():e).replace(/(\b)([a-zA-Z])/g,function(e){return e.toUpperCase()})}function copy(e,t){let o=$("<input>");return e.append(o),o.val(t).select(),document.execCommand("copy"),o.remove(),!0}$.notifyDefaults({delay:5e3,offset:{x:65,y:46},z_index:1e4,mouse_over:"pause",animate:{enter:"animated fadeIn",exit:"animated fadeOut"},placement:{from:"bottom",align:"left"},template:'<div data-notify="container" class="alert alert-{0} alert-dismissible"><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><a href="{3}" target="{4}" data-notify="url"></a><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>'}),$.blockUI.defaults={message:'<div class="loader"></div>',title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"100%",height:"100%",textAlign:"center",color:"#000",border:"none",backgroundColor:"none",cursor:"wait"},overlayCSS:{backgroundColor:"#fff",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:null,color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:200,timeout:0,showOverlay:!0,focusInput:!0,onBlock:null,onUnblock:null,quirksmodeOffsetHack:4,blockMsgClass:"blockCustom",ignoreIfBlocked:!1},$.fn.dataTable.ext.errMode="none",$.extend(!0,$.fn.dataTable.defaults,{serverSide:!0,processing:!1,dom:"<'row'<'col-9'f><'col-3'B>><'row'<'col-12'tr>><'card-footer d-flex align-items-center'ip>",oLanguage:{sSearch:"",sSearchPlaceholder:"Search...",oPaginate:{sNext:'<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><polyline points="9 6 15 12 9 18"></polyline></svg>',sPrevious:'<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><polyline points="15 6 9 12 15 18"></polyline></svg>'}}});