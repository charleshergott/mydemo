import{c as e}from"./chunk-ETWP6KK6.js";import{c as a,d as r,h as s,k as n}from"./chunk-4BM3I6XE.js";import"./chunk-VNSOYX7J.js";var i=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",c=i,p=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",d=p,l=(()=>{let t=class{constructor(o){n(this,o),this.ionBackdropTap=s(this,"ionBackdropTap",7),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}onMouseDown(o){this.emitTap(o)}emitTap(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){let o=e(this);return a(r,{key:"c803b4302c8e722064feb03dafe3cb6e190b4f2b",tabindex:"-1","aria-hidden":"true",class:{[o]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};return t.style={ios:c,md:d},t})();export{l as ion_backdrop};
