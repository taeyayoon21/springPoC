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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();import{WjDirective,_registerNgModule,softRefViewer}from"wijmo/wijmo.angular.base";import*as mNg from"angular";import*as wjcViewer from"wijmo/wijmo.viewer";var wjNg=mNg,wijmoViewerName="wj.viewer";export var ngModuleName=wijmoViewerName;var wijmoOlap=_registerNgModule(wijmoViewerName),wijmoViewer=window.angular.module("wj.viewer",[]);softRefViewer()&&softRefViewer().ReportViewer&&wijmoViewer.directive("wjReportViewer",[function(){return new WjReportViewer}]);wjcViewer&&wjcViewer.PdfViewer&&wijmoViewer.directive("wjPdfViewer",[function(){return new WjPdfViewer}]);var WjViewerBase=function(e){__extends(WjViewerBase,e);function WjViewerBase(){var r=e.call(this)||this;r.template="<div ng-transclude />";r.transclude=!0;return r}Object.defineProperty(WjViewerBase.prototype,"_controlConstructor",{get:function(){return wjcViewer.ViewerBase},enumerable:!0,configurable:!0});return WjViewerBase}(WjDirective),WjReportViewer=function(e){__extends(WjReportViewer,e);function WjReportViewer(){return e.call(this)||this}Object.defineProperty(WjReportViewer.prototype,"_controlConstructor",{get:function(){return wjcViewer.ReportViewer},enumerable:!0,configurable:!0});return WjReportViewer}(WjViewerBase),WjPdfViewer=function(e){__extends(WjPdfViewer,e);function WjPdfViewer(){return e.call(this)||this}Object.defineProperty(WjPdfViewer.prototype,"_controlConstructor",{get:function(){return wjcViewer.PdfViewer},enumerable:!0,configurable:!0});return WjPdfViewer}(WjViewerBase);