!function(e){var r=[],n=[],a=[],t=[],o={init:function(s,i){for(var l=e.extend({bind:"click",passwordElement:null,displayElement:null,passwordLength:16,uppercase:!0,lowercase:!0,numbers:!0,specialChars:!0,additionalSpecialChars:[],onPasswordGenerated:function(e){}},s),p=48;p<58;p++)r.push(p);for(p=65;p<91;p++)n.push(p);for(p=97;p<123;p++)a.push(p);return t=[33,35,64,36,38,42,91,93,123,125,92,47,63,58,59,95,45].concat(l.additionalSpecialChars),this.each(function(){e(this).bind(l.bind,function(e){e.preventDefault(),o.generatePassword(l)})})},generatePassword:function(o){var i=new Array,l=o.uppercase+o.lowercase+o.numbers+o.specialChars,p=0,h=new Array,d=Math.floor(o.passwordLength/l);if(o.uppercase){for(var u=0;u<d;u++)i.push(String.fromCharCode(n[s(0,n.length-1)]));h=h.concat(n),p++}if(o.numbers){for(u=0;u<d;u++)i.push(String.fromCharCode(r[s(0,r.length-1)]));h=h.concat(r),p++}if(o.specialChars){for(u=0;u<d;u++)i.push(String.fromCharCode(t[s(0,t.length-1)]));h=h.concat(t),p++}var c=o.passwordLength-p*d;if(o.lowercase)for(u=0;u<c;u++)i.push(String.fromCharCode(a[s(0,a.length-1)]));else for(u=0;u<c;u++)i.push(String.fromCharCode(h[s(0,h.length-1)]));i=function(e){for(var r,n,a=e.length;a;r=parseInt(Math.random()*a),n=e[--a],e[a]=e[r],e[r]=n);return e}(i).join(""),null!==o.passwordElement&&e(o.passwordElement).val(i),null!==o.displayElement&&(e(o.displayElement).is("input")?e(o.displayElement).val(i):e(o.displayElement).text(i)),o.onPasswordGenerated(i)}};function s(e,r){return Math.floor(Math.random()*(r-e+1)+e)}e.fn.pGenerator=function(r){return o[r]?o[r].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof r&&r?void e.error("Method "+r+" does not exist on jQuery.pGenerator"):o.init.apply(this,arguments)}}(jQuery);