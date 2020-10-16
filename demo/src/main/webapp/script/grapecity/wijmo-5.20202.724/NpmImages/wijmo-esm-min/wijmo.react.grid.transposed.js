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

var __extends=this&&this.__extends||function(){var extendStatics=function(r,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var t in o)o.hasOwnProperty(t)&&(r[t]=o[t])})(r,o)};return function(r,o){extendStatics(r,o);function __(){this.constructor=r}r.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{ComponentBase}from"wijmo/wijmo.react.base";import*as wjcGridTransposed from"wijmo/wijmo.grid.transposed";var TransposedGrid=function(r){__extends(TransposedGrid,r);function TransposedGrid(o){return r.call(this,o,wjcGridTransposed.TransposedGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups"]})||this}return TransposedGrid}(ComponentBase);export{TransposedGrid};var TransposedGridRow=function(r){__extends(TransposedGridRow,r);function TransposedGridRow(o){var t=r.call(this,o,wjcGridTransposed.TransposedGridRow,{objectProps:["dataMap","cellTemplate","editor"]})||this;t._parentProp="_rowInfo";return t}TransposedGridRow.prototype._initParent=function(){var o=this.parent.control;if(o.autoGenerateRows){o.autoGenerateRows=!1;o._rowInfo.clear()}r.prototype._initParent.call(this)};return TransposedGridRow}(ComponentBase);export{TransposedGridRow};