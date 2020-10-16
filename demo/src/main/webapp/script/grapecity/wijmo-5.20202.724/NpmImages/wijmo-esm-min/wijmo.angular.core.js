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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])})(t,o)};return function(t,o){extendStatics(t,o);function __(){this.constructor=t}t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{WjDirective,WjLink,_registerNgModule}from"wijmo/wijmo.angular.base";import*as mNg from"angular";import*as wjcCore from"wijmo/wijmo";var wjNg=mNg,wijmoContainersName="wj.container";export var ngModuleName=wijmoContainersName;var wijmoContainers=_registerNgModule(wijmoContainersName);wijmoContainers.directive("wjTooltip",[function(){return new WjTooltip}]);wijmoContainers.directive("wjValidationError",[function(){return new WjValidationError}]);var WjTooltip=function(t){__extends(WjTooltip,t);function WjTooltip(){var o=t.call(this)||this;o.restrict="A";o.template="";return o}Object.defineProperty(WjTooltip.prototype,"_controlConstructor",{get:function(){return wjcCore.Tooltip},enumerable:!0,configurable:!0});WjTooltip.prototype._initControl=function(t){return new wjcCore.Tooltip};WjTooltip.prototype._createLink=function(){return new WjTooltipLink};return WjTooltip}(WjDirective);export{WjTooltip};var WjTooltipLink=function(t){__extends(WjTooltipLink,t);function WjTooltipLink(){return null!==t&&t.apply(this,arguments)||this}WjTooltipLink.prototype._link=function(){t.prototype._link.call(this);var o=this.control,r=this;this.tAttrs.$observe("wjTooltip",(function(t){o.setTooltip(r.tElement[0],t)}))};return WjTooltipLink}(WjLink),WjValidationError=function(t){__extends(WjValidationError,t);function WjValidationError(){var o=t.call(this)||this;o.restrict="A";o.template="";o.require="ngModel";o.scope=!1;return o}WjValidationError.prototype._postLinkFn=function(){return function(t,o,r,i){var n="wjValidationError";t.$watch(r[n],(function(t){var r="INPUT"==o[0].tagName?o[0]:o[0].querySelector("input");"boolean"==typeof t&&(t=t?"error":"");r&&r.setCustomValidity&&r.setCustomValidity(t);i&&i.$setValidity(n,!t)}))}};WjValidationError.prototype._getMetaDataId=function(){return"ValidationError"};return WjValidationError}(WjDirective);export{WjValidationError};