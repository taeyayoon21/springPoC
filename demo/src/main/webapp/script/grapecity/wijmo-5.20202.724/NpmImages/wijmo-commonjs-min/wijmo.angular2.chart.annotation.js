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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}(),__decorate=this&&this.__decorate||function(t,n,e,o){var a,r=arguments.length,i=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,e,o);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(i=(r<3?a(i):r>3?a(n,e,i):a(n,e))||i);return r>3&&i&&Object.defineProperty(n,e,i),i},__param=this&&this.__param||function(t,n){return function(e,o){n(e,o,t)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcChartAnnotation=require("wijmo/wijmo.chart.annotation"),wjFlexChartAnnotationLayerMeta={selector:"wj-flex-chart-annotation-layer",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty"],outputs:["initialized"],providers:[]};exports.wjFlexChartAnnotationLayerMeta=wjFlexChartAnnotationLayerMeta;var WjFlexChartAnnotationLayer=function(t){__extends(WjFlexChartAnnotationLayer,t);function WjFlexChartAnnotationLayer(n,e,o){var a=t.call(this,o)||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationLayer;WjFlexChartAnnotationLayer.prototype.created=function(){};WjFlexChartAnnotationLayer.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationLayer.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationLayer.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationLayer.meta={outputs:wjFlexChartAnnotationLayerMeta.outputs};return WjFlexChartAnnotationLayer=n=__decorate([core_1.Component({selector:wjFlexChartAnnotationLayerMeta.selector,template:wjFlexChartAnnotationLayerMeta.template,inputs:wjFlexChartAnnotationLayerMeta.inputs,outputs:wjFlexChartAnnotationLayerMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return n}))}].concat(wjFlexChartAnnotationLayerMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAnnotationLayer)}(wjcChartAnnotation.AnnotationLayer);exports.WjFlexChartAnnotationLayer=WjFlexChartAnnotationLayer;var wjFlexChartAnnotationTextMeta={selector:"wj-flex-chart-annotation-text",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};exports.wjFlexChartAnnotationTextMeta=wjFlexChartAnnotationTextMeta;var WjFlexChartAnnotationText=function(t){__extends(WjFlexChartAnnotationText,t);function WjFlexChartAnnotationText(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationText;WjFlexChartAnnotationText.prototype.created=function(){};WjFlexChartAnnotationText.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationText.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationText.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationText.meta={outputs:wjFlexChartAnnotationTextMeta.outputs,siblingId:"annotation"};return WjFlexChartAnnotationText=n=__decorate([core_1.Component({selector:wjFlexChartAnnotationTextMeta.selector,template:wjFlexChartAnnotationTextMeta.template,inputs:wjFlexChartAnnotationTextMeta.inputs,outputs:wjFlexChartAnnotationTextMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return n}))}].concat(wjFlexChartAnnotationTextMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAnnotationText)}(wjcChartAnnotation.Text);exports.WjFlexChartAnnotationText=WjFlexChartAnnotationText;var wjFlexChartAnnotationEllipseMeta={selector:"wj-flex-chart-annotation-ellipse",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};exports.wjFlexChartAnnotationEllipseMeta=wjFlexChartAnnotationEllipseMeta;var WjFlexChartAnnotationEllipse=function(t){__extends(WjFlexChartAnnotationEllipse,t);function WjFlexChartAnnotationEllipse(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationEllipse;WjFlexChartAnnotationEllipse.prototype.created=function(){};WjFlexChartAnnotationEllipse.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationEllipse.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationEllipse.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationEllipse.meta={outputs:wjFlexChartAnnotationEllipseMeta.outputs,siblingId:"annotation"};return WjFlexChartAnnotationEllipse=n=__decorate([core_1.Component({selector:wjFlexChartAnnotationEllipseMeta.selector,template:wjFlexChartAnnotationEllipseMeta.template,inputs:wjFlexChartAnnotationEllipseMeta.inputs,outputs:wjFlexChartAnnotationEllipseMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return n}))}].concat(wjFlexChartAnnotationEllipseMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAnnotationEllipse)}(wjcChartAnnotation.Ellipse);exports.WjFlexChartAnnotationEllipse=WjFlexChartAnnotationEllipse;var wjFlexChartAnnotationRectangleMeta={selector:"wj-flex-chart-annotation-rectangle",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};exports.wjFlexChartAnnotationRectangleMeta=wjFlexChartAnnotationRectangleMeta;var WjFlexChartAnnotationRectangle=function(t){__extends(WjFlexChartAnnotationRectangle,t);function WjFlexChartAnnotationRectangle(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationRectangle;WjFlexChartAnnotationRectangle.prototype.created=function(){};WjFlexChartAnnotationRectangle.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationRectangle.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationRectangle.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationRectangle.meta={outputs:wjFlexChartAnnotationRectangleMeta.outputs,siblingId:"annotation"};return WjFlexChartAnnotationRectangle=n=__decorate([core_1.Component({selector:wjFlexChartAnnotationRectangleMeta.selector,template:wjFlexChartAnnotationRectangleMeta.template,inputs:wjFlexChartAnnotationRectangleMeta.inputs,outputs:wjFlexChartAnnotationRectangleMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return n}))}].concat(wjFlexChartAnnotationRectangleMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAnnotationRectangle)}(wjcChartAnnotation.Rectangle);exports.WjFlexChartAnnotationRectangle=WjFlexChartAnnotationRectangle;var wjFlexChartAnnotationLineMeta={selector:"wj-flex-chart-annotation-line",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};exports.wjFlexChartAnnotationLineMeta=wjFlexChartAnnotationLineMeta;var WjFlexChartAnnotationLine=function(t){__extends(WjFlexChartAnnotationLine,t);function WjFlexChartAnnotationLine(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationLine;WjFlexChartAnnotationLine.prototype.created=function(){};WjFlexChartAnnotationLine.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationLine.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationLine.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationLine.meta={outputs:wjFlexChartAnnotationLineMeta.outputs,siblingId:"annotation"};return WjFlexChartAnnotationLine=n=__decorate([core_1.Component({selector:wjFlexChartAnnotationLineMeta.selector,template:wjFlexChartAnnotationLineMeta.template,inputs:wjFlexChartAnnotationLineMeta.inputs,outputs:wjFlexChartAnnotationLineMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return n}))}].concat(wjFlexChartAnnotationLineMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAnnotationLine)}(wjcChartAnnotation.Line);exports.WjFlexChartAnnotationLine=WjFlexChartAnnotationLine;var wjFlexChartAnnotationPolygonMeta={selector:"wj-flex-chart-annotation-polygon",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};exports.wjFlexChartAnnotationPolygonMeta=wjFlexChartAnnotationPolygonMeta;var WjFlexChartAnnotationPolygon=function(t){__extends(WjFlexChartAnnotationPolygon,t);function WjFlexChartAnnotationPolygon(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationPolygon;WjFlexChartAnnotationPolygon.prototype.created=function(){};WjFlexChartAnnotationPolygon.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationPolygon.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationPolygon.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationPolygon.meta={outputs:wjFlexChartAnnotationPolygonMeta.outputs,siblingId:"annotation"};return WjFlexChartAnnotationPolygon=n=__decorate([core_1.Component({selector:wjFlexChartAnnotationPolygonMeta.selector,template:wjFlexChartAnnotationPolygonMeta.template,inputs:wjFlexChartAnnotationPolygonMeta.inputs,outputs:wjFlexChartAnnotationPolygonMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return n}))}].concat(wjFlexChartAnnotationPolygonMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAnnotationPolygon)}(wjcChartAnnotation.Polygon);exports.WjFlexChartAnnotationPolygon=WjFlexChartAnnotationPolygon;var wjFlexChartAnnotationCircleMeta={selector:"wj-flex-chart-annotation-circle",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};exports.wjFlexChartAnnotationCircleMeta=wjFlexChartAnnotationCircleMeta;var WjFlexChartAnnotationCircle=function(t){__extends(WjFlexChartAnnotationCircle,t);function WjFlexChartAnnotationCircle(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationCircle;WjFlexChartAnnotationCircle.prototype.created=function(){};WjFlexChartAnnotationCircle.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationCircle.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationCircle.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationCircle.meta={outputs:wjFlexChartAnnotationCircleMeta.outputs,siblingId:"annotation"};return WjFlexChartAnnotationCircle=n=__decorate([core_1.Component({selector:wjFlexChartAnnotationCircleMeta.selector,template:wjFlexChartAnnotationCircleMeta.template,inputs:wjFlexChartAnnotationCircleMeta.inputs,outputs:wjFlexChartAnnotationCircleMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return n}))}].concat(wjFlexChartAnnotationCircleMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAnnotationCircle)}(wjcChartAnnotation.Circle);exports.WjFlexChartAnnotationCircle=WjFlexChartAnnotationCircle;var wjFlexChartAnnotationSquareMeta={selector:"wj-flex-chart-annotation-square",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};exports.wjFlexChartAnnotationSquareMeta=wjFlexChartAnnotationSquareMeta;var WjFlexChartAnnotationSquare=function(t){__extends(WjFlexChartAnnotationSquare,t);function WjFlexChartAnnotationSquare(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationSquare;WjFlexChartAnnotationSquare.prototype.created=function(){};WjFlexChartAnnotationSquare.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationSquare.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationSquare.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationSquare.meta={outputs:wjFlexChartAnnotationSquareMeta.outputs,siblingId:"annotation"};return WjFlexChartAnnotationSquare=n=__decorate([core_1.Component({selector:wjFlexChartAnnotationSquareMeta.selector,template:wjFlexChartAnnotationSquareMeta.template,inputs:wjFlexChartAnnotationSquareMeta.inputs,outputs:wjFlexChartAnnotationSquareMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return n}))}].concat(wjFlexChartAnnotationSquareMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAnnotationSquare)}(wjcChartAnnotation.Square);exports.WjFlexChartAnnotationSquare=WjFlexChartAnnotationSquare;var wjFlexChartAnnotationImageMeta={selector:"wj-flex-chart-annotation-image",template:"<div><ng-content></ng-content></div>",inputs:["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","style","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"],outputs:["initialized"],providers:[]};exports.wjFlexChartAnnotationImageMeta=wjFlexChartAnnotationImageMeta;var WjFlexChartAnnotationImage=function(t){__extends(WjFlexChartAnnotationImage,t);function WjFlexChartAnnotationImage(n,e,o){var a=t.call(this)||this;a.isInitialized=!1;a.wjProperty="items";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,n,e,o);a.created();return a}n=WjFlexChartAnnotationImage;WjFlexChartAnnotationImage.prototype.created=function(){};WjFlexChartAnnotationImage.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAnnotationImage.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAnnotationImage.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var n;WjFlexChartAnnotationImage.meta={outputs:wjFlexChartAnnotationImageMeta.outputs,siblingId:"annotation"};return WjFlexChartAnnotationImage=n=__decorate([core_1.Component({selector:wjFlexChartAnnotationImageMeta.selector,template:wjFlexChartAnnotationImageMeta.template,inputs:wjFlexChartAnnotationImageMeta.inputs,outputs:wjFlexChartAnnotationImageMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return n}))}].concat(wjFlexChartAnnotationImageMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAnnotationImage)}(wjcChartAnnotation.Image);exports.WjFlexChartAnnotationImage=WjFlexChartAnnotationImage;var moduleExports=[WjFlexChartAnnotationLayer,WjFlexChartAnnotationText,WjFlexChartAnnotationEllipse,WjFlexChartAnnotationRectangle,WjFlexChartAnnotationLine,WjFlexChartAnnotationPolygon,WjFlexChartAnnotationCircle,WjFlexChartAnnotationSquare,WjFlexChartAnnotationImage],WjChartAnnotationModule=function(){function WjChartAnnotationModule(){}return WjChartAnnotationModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjChartAnnotationModule)}();exports.WjChartAnnotationModule=WjChartAnnotationModule;