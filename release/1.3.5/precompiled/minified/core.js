var k=true,l=null,n=false;function aa(a){return function(){return a}}var p=Object,q=Array,r=RegExp,s=Date,t=String,u=Number,v=Math,ba=typeof global!=="undefined"?global:this,ca=p.defineProperty&&p.defineProperties,x="Array,Boolean,Date,Function,Number,String,RegExp".split(","),da=y(x[0]),fa=y(x[1]),ga=y(x[2]),z=y(x[3]),A=y(x[4]),C=y(x[5]),D=y(x[6]);function y(a){return function(b){return p.prototype.toString.call(b)==="[object "+a+"]"}}
function ha(a){if(!a.SugarMethods){ia(a,"SugarMethods",{});E(a,n,n,{restore:function(){var b=arguments.length===0,c=F(arguments);G(a.SugarMethods,function(d,e){if(b||c.indexOf(d)>-1)ia(e.wa?a.prototype:a,d,e.method)})},extend:function(b,c,d){E(a,d!==n,c,b)}})}}function E(a,b,c,d){var e=b?a.prototype:a,g;ha(a);G(d,function(f,i){g=e[f];if(typeof c==="function")i=ja(e[f],i,c);if(c!==n||!e[f])ia(e,f,i);a.SugarMethods[f]={wa:b,method:i,Da:g}})}
function H(a,b,c,d,e){var g={};d=C(d)?d.split(","):d;d.forEach(function(f,i){e(g,f,i)});E(a,b,c,g)}function ja(a,b,c){return function(){return a&&(c===k||!c.apply(this,arguments))?a.apply(this,arguments):b.apply(this,arguments)}}function ia(a,b,c){if(ca)p.defineProperty(a,b,{value:c,configurable:k,enumerable:n,writable:k});else a[b]=c}function F(a,b){var c=[],d;for(d=0;d<a.length;d++){c.push(a[d]);b&&b.call(a,a[d],d)}return c}function I(a){return a!==void 0}function K(a){return a===void 0}
function ka(a){return a&&typeof a==="object"}function L(a){return!!a&&p.prototype.toString.call(a)==="[object Object]"&&"hasOwnProperty"in a}function la(a,b){return p.hasOwnProperty.call(a,b)}function G(a,b){for(var c in a)if(la(a,c))if(b.call(a,c,a[c])===n)break}function ma(a,b){G(b,function(c){a[c]=b[c]});return a}function na(a){ma(this,a)}na.prototype.constructor=p;function oa(a,b,c,d){var e=[];a=parseInt(a);for(var g=d<0;!g&&a<=b||g&&a>=b;){e.push(a);c&&c.call(this,a);a+=d||1}return e}
function M(a,b,c){c=v[c||"round"];var d=v.pow(10,v.abs(b||0));if(b<0)d=1/d;return c(a*d)/d}function N(a,b){return M(a,b,"floor")}function P(a,b,c,d){d=v.abs(a).toString(d||10);d=pa(b-d.replace(/\.\d+/,"").length,"0")+d;if(c||a<0)d=(a<0?"-":"+")+d;return d}function qa(a){if(a>=11&&a<=13)return"th";else switch(a%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}
function ra(){return"\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u2028\u2029\u3000\ufeff"}function pa(a,b){return q(v.max(0,I(a)?a:1)+1).join(b||"")}function sa(a,b){var c=a.toString().match(/[^/]*$/)[0];if(b)c=(c+b).split("").sort().join("").replace(/([gimy])\1+/g,"$1");return c}function Q(a){C(a)||(a=t(a));return a.replace(/([\\/'*+?|()\[\]{}.^$])/g,"\\$1")}
function ta(a,b){var c=typeof a,d,e,g,f,i,j;if(c==="string")return a;g=p.prototype.toString.call(a);d=L(a);e=g==="[object Array]";if(a!=l&&d||e){b||(b=[]);if(b.length>1)for(j=b.length;j--;)if(b[j]===a)return"CYC";b.push(a);d=t(a.constructor);f=e?a:p.keys(a).sort();for(j=0;j<f.length;j++){i=e?j:f[j];d+=i+ta(a[i],b)}b.pop()}else d=1/a===-Infinity?"-0":t(a&&a.valueOf?a.valueOf():a);return c+g+d}
function ua(a){var b=p.prototype.toString.call(a);return b==="[object Date]"||b==="[object Array]"||b==="[object String]"||b==="[object Number]"||b==="[object RegExp]"||b==="[object Boolean]"||b==="[object Arguments]"||L(a)}function va(a,b,c){var d=[],e=a.length,g=b[b.length-1]!==n,f;F(b,function(i){if(fa(i))return n;if(g){i%=e;if(i<0)i=e+i}f=c?a.charAt(i)||"":a[i];d.push(f)});return d.length<2?d[0]:d}
function wa(a,b){H(b,k,n,a,function(c,d){c[d+(d==="equal"?"s":"")]=function(){return p[d].apply(l,[this].concat(F(arguments)))}})}ha(p);G(x,function(a,b){ha(ba[b])});