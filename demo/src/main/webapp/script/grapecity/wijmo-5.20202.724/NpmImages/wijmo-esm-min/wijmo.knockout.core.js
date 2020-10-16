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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])})(t,o)};return function(t,o){extendStatics(t,o);function __(){this.constructor=t}t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{WjBinding,WjContext}from"wijmo/wijmo.knockout.base";import{Tooltip}from"wijmo/wijmo";import*as mKo from"knockout";var wjKo=mKo,wjTooltip=function(t){__extends(wjTooltip,t);function wjTooltip(){return null!==t&&t.apply(this,arguments)||this}wjTooltip.prototype._getControlConstructor=function(){return Tooltip};wjTooltip.prototype._createControl=function(o){return t.prototype._createControl.call(this,null)};wjTooltip.prototype._createWijmoContext=function(){return new WjTooltipContext(this)};return wjTooltip}(WjBinding);export{wjTooltip};var WjTooltipContext=function(t){__extends(WjTooltipContext,t);function WjTooltipContext(){return null!==t&&t.apply(this,arguments)||this}WjTooltipContext.prototype.update=function(o,n,e,i,r){t.prototype.update.call(this,o,n,e,i,r);this._updateTooltip()};WjTooltipContext.prototype._updateTooltip=function(){this.control.setTooltip(this.element,wjKo.unwrap(this.valueAccessor()))};return WjTooltipContext}(WjContext);export{WjTooltipContext};wjKo.bindingHandlers.wjTooltip=new wjTooltip;