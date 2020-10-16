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

var __extends=this&&this.__extends||function(){var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i])})(r,e)};return function(r,e){extendStatics(r,e);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{VueApi,WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as wjcGridSearch from"wijmo/wijmo.grid.search";var WjFlexGridSearchBehavior=function(r){__extends(WjFlexGridSearchBehavior,r);function WjFlexGridSearchBehavior(){return null!==r&&r.apply(this,arguments)||this}WjFlexGridSearchBehavior.tag="wj-flex-grid-search";WjFlexGridSearchBehavior.props=["isDisabled","text","delay","placeholder","cssMatch","grid"];WjFlexGridSearchBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjFlexGridSearchBehavior.classCtor=function(){return wjcGridSearch.FlexGridSearch};return WjFlexGridSearchBehavior}(WjComponentBehavior);export var WjFlexGridSearch=WjFlexGridSearchBehavior.register();function registerV3WjFlexGridSearch(r){r.component(WjFlexGridSearchBehavior.tag,WjFlexGridSearch)}export function registerGridSearch(r){VueApi.isV3Plus&&registerV3WjFlexGridSearch(r)}