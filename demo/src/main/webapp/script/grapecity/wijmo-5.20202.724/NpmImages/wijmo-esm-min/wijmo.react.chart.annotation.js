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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();import{ComponentBase}from"wijmo/wijmo.react.base";import*as wjcChartAnnotation from"wijmo/wijmo.chart.annotation";var FlexChartAnnotationLayer=function(t){__extends(FlexChartAnnotationLayer,t);function FlexChartAnnotationLayer(n){var o=t.call(this,n,wjcChartAnnotation.AnnotationLayer)||this;o._parentInCtor=!0;return o}return FlexChartAnnotationLayer}(ComponentBase);export{FlexChartAnnotationLayer};var FlexChartAnnotation=function(t){__extends(FlexChartAnnotation,t);function FlexChartAnnotation(n){var o=t.call(this,n,null,{objectProps:["point","offset","style","start","end"]})||this;o._parentProp="items";return o}FlexChartAnnotation.prototype._createControl=function(){return new wjcChartAnnotation[this.props.type]};return FlexChartAnnotation}(ComponentBase);export{FlexChartAnnotation};