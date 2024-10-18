(()=>{"use strict";var t=function(){function t(){this.highlightClass="upez-highlight",console.log("HoverEffect constructor called"),this.settings=window.upez__cart_settings||{},this.addHighlightStyle()}return t.prototype.getSettingValue=function(t,e){var n,o;return window.state&&"function"==typeof window.state.getSettingValue?null!==(n=window.state.getSettingValue(t))&&void 0!==n?n:e:null!==(o=this.settings[t])&&void 0!==o?o:e},t.prototype.addHighlightStyle=function(){console.log("Adding highlight style");var t=document.createElement("style");t.textContent="\n      .".concat(this.highlightClass," {\n     outline: 2px solid red !important;\n        box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);\n        transition: all 0.3s ease-in-out;\n        position: relative;\n        z-index: 9999;\n      }\n    "),document.head.appendChild(t),console.log("Highlight style added")},t.prototype.hexToRGBA=function(t,e){var n=parseInt(t.slice(1,3),16),o=parseInt(t.slice(3,5),16),i=parseInt(t.slice(5,7),16);return"rgba(".concat(n,", ").concat(o,", ").concat(i,", ").concat(e,")")},t.prototype.addHoverListeners=function(){var t=this;console.log("Adding hover listeners"),document.body.addEventListener("mouseover",(function(e){var n=e.target;t.isElementRelatedToSetting(n)&&(n.classList.add(t.highlightClass),console.log("Hovered element:",n),console.log("Related setting:",t.getRelatedSetting(n)))})),document.body.addEventListener("mouseout",(function(e){e.target.classList.remove(t.highlightClass)}))},t.prototype.isElementRelatedToSetting=function(t){var e,n=t.id,o=t.classList,i=null===(e=t.textContent)||void 0===e?void 0:e.trim();if(o.contains("upez-btn--basic-button")||o.contains("upez-btn--blue")||"upezCart"===n||i===this.getSettingValue("__label_checkout")||i===this.getSettingValue("__label_cart_empty"))return!0;var l=this.getSettingValue("shipping_goals",[]);if(l.length>0)for(var s=0,a=l;s<a.length;s++){var r=a[s];if((null==i?void 0:i.includes(r.goal_label))||(null==i?void 0:i.includes(r.goal_value)))return!0}var c=this.getSettingValue("free_gift_template__settings",{});return!(!c||i!==c.button_label)},t.prototype.getRelatedSetting=function(t){return{settingName:"Example Setting",value:"Example Value"}},t.prototype.init=function(){console.log("HoverEffect init started"),this.addHoverListeners(),console.log("Hover effect initialized")},t}();function e(){console.log("Initializing HoverEffect");var e=function(){return window.upez__cart_settings?(console.log("UPEZ cart settings found:",window.upez__cart_settings),!0):(console.log("UPEZ cart settings not found, retrying..."),!1)},n=function(){try{console.log("Creating HoverEffect instance");var e=new t;console.log("HoverEffect instance created successfully"),console.log("Calling init method"),e.init(),console.log("HoverEffect initialized successfully"),console.log("You can now hover over the elements to see the effect")}catch(t){console.error("Error initializing HoverEffect:",t)}};if(e())n();else var o=0,i=setInterval((function(){o++,e()?(clearInterval(i),n()):o>=10&&(clearInterval(i),console.error("Failed to find UPEZ cart settings after multiple attempts"))}),1e3)}console.log("HoverEffect script started"),"complete"===document.readyState?e():window.addEventListener("load",e),console.log("HoverEffect script setup completed")})();