﻿/*!
    *
    * Wijmo Library 5.20202.724
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

var __extends=this&&this.__extends||function(){var extendStatics=function(o,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var r in n)n.hasOwnProperty(r)&&(o[r]=n[r])})(o,n)};return function(o,n){extendStatics(o,n);function __(){this.constructor=o}o.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();import{WjBinding}from"wijmo/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcGroup from"wijmo/wijmo.grid.grouppanel";var wjKo=mKo,wjGroupPanel=function(o){__extends(wjGroupPanel,o);function wjGroupPanel(){return null!==o&&o.apply(this,arguments)||this}wjGroupPanel.prototype._getControlConstructor=function(){return wjcGroup.GroupPanel};return wjGroupPanel}(WjBinding);export{wjGroupPanel};wjKo.bindingHandlers.wjGroupPanel=new wjGroupPanel;