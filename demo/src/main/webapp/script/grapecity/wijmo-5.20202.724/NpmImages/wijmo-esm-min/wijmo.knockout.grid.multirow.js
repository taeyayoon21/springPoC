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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])})(t,o)};return function(t,o){extendStatics(t,o);function __(){this.constructor=t}t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{wjFlexGrid}from"wijmo/wijmo.knockout.grid";import*as mKo from"knockout";import*as wjcMultirow from"wijmo/wijmo.grid.multirow";var wjKo=mKo,wjMultiRow=function(t){__extends(wjMultiRow,t);function wjMultiRow(){return null!==t&&t.apply(this,arguments)||this}wjMultiRow.prototype._getControlConstructor=function(){return wjcMultirow.MultiRow};return wjMultiRow}(wjFlexGrid);export{wjMultiRow};wjKo.bindingHandlers.wjMultiRow=new wjMultiRow;