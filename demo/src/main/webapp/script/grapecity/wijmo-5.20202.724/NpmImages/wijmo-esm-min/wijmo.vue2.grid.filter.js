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

var __extends=this&&this.__extends||function(){var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i])})(r,e)};return function(r,e){extendStatics(r,e);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{VueApi,WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as wjcGridFilter from"wijmo/wijmo.grid.filter";var WjFlexGridFilterBehavior=function(r){__extends(WjFlexGridFilterBehavior,r);function WjFlexGridFilterBehavior(){return null!==r&&r.apply(this,arguments)||this}WjFlexGridFilterBehavior.tag="wj-flex-grid-filter";WjFlexGridFilterBehavior.parentInCtor=!0;WjFlexGridFilterBehavior.props=["showFilterIcons","showSortButtons","defaultFilterType","filterColumns"];WjFlexGridFilterBehavior.events=["initialized","filterChanging","filterChanged","filterApplied"];WjFlexGridFilterBehavior.classCtor=function(){return wjcGridFilter.FlexGridFilter};return WjFlexGridFilterBehavior}(WjComponentBehavior);export var WjFlexGridFilter=WjFlexGridFilterBehavior.register();function registerV3WjFlexGridFilter(r){r.component(WjFlexGridFilterBehavior.tag,WjFlexGridFilter)}export function registerGridFilter(r){VueApi.isV3Plus&&registerV3WjFlexGridFilter(r)}