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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])})(t,r)};return function(t,r){extendStatics(t,r);function __(){this.constructor=t}t.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();import{WjBinding}from"wijmo/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcFilter from"wijmo/wijmo.grid.filter";var wjKo=mKo,wjFlexGridFilter=function(t){__extends(wjFlexGridFilter,t);function wjFlexGridFilter(){return null!==t&&t.apply(this,arguments)||this}wjFlexGridFilter.prototype._getControlConstructor=function(){return wjcFilter.FlexGridFilter};return wjFlexGridFilter}(WjBinding);export{wjFlexGridFilter};wjKo.bindingHandlers.wjFlexGridFilter=new wjFlexGridFilter;