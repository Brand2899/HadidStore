var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},c=e.parcelRequirefc9c;null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in t){var c=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,c.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){t[e]=o},e.parcelRequirefc9c=c);var r=c("6QD2Y"),n=c("etBjH"),a=c("aYguL");async function l(e,o=[]){try{return o.map((async o=>{const t=await async function(e,o){try{const t=a.ref(e,`products/images/${o.name}`);return await a.uploadBytes(t,o)}catch(e){console.log(e)}}(e,o);return a.getDownloadURL(a.ref(e,t.ref.fullPath))}))}catch(e){console.log(e)}}const u=document.getElementById("form");document.getElementById("bn_upload").addEventListener("click",(async e=>{if(e.preventDefault(),""===u.product_name.value||""===u.product_price.value||"ct_blank"===u.product_category.value||"cl_blank"===u.product_colection.value||""===u.product_reference.value||""===u.product_color.value)return void alert("Hay al menos un campo vacío");const o=u.product_name.value,t=u.product_price.value,c=u.product_img.files,a=u.product_category.value,d=u.product_colection.value,i=u.product_reference.value,p=u.product_color.value;let s=[];if(c.length){const e=await l(r.storage,[...c]);s=await Promise.all(e)}const f={product_name:o,product_price:t,product_img:s,product_category:a,product_colection:d,product_reference:i,product_color:p};await async function(e,o){try{await n.addDoc(n.collection(e,"products"),o)}catch(e){console.log(e)}}(r.db,f)}));
//# sourceMappingURL=forms.38cc1d44.js.map