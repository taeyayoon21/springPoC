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

var WjLinearGauge_1,WjBulletGraph_1,WjRadialGauge_1,WjRange_1,__decorate=this&&this.__decorate||function(e,t,a,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,a,o):i(t,a))||o);return r>3&&o&&Object.defineProperty(t,a,o),o},__param=this&&this.__param||function(e,t){return function(a,n){t(a,n,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"wijmo/wijmo.angular2.directiveBase";import*as wjcGauge from"wijmo/wijmo.gauge";var wjLinearGaugeMeta={selector:"wj-linear-gauge",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjLinearGaugeMeta};let WjLinearGauge=WjLinearGauge_1=class WjLinearGauge extends wjcGauge.LinearGauge{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this.wjModelProperty="value";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,n=!1){let i=WjDirectiveBehavior,r=i.ngZone;r&&i.outsideZoneEvents[t]?r.runOutsideAngular(()=>{super.addEventListener(e,t,a,n)}):super.addEventListener(e,t,a,n)}};WjLinearGauge.meta={outputs:wjLinearGaugeMeta.outputs,changeEvents:{valueChanged:["value"]}};WjLinearGauge=WjLinearGauge_1=__decorate([Component({selector:wjLinearGaugeMeta.selector,template:wjLinearGaugeMeta.template,inputs:wjLinearGaugeMeta.inputs,outputs:wjLinearGaugeMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjLinearGauge_1)},...wjLinearGaugeMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjLinearGauge);export{WjLinearGauge};var wjBulletGraphMeta={selector:"wj-bullet-graph",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction","target","good","bad"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBulletGraphMeta};let WjBulletGraph=WjBulletGraph_1=class WjBulletGraph extends wjcGauge.BulletGraph{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this.wjModelProperty="value";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,n=!1){let i=WjDirectiveBehavior,r=i.ngZone;r&&i.outsideZoneEvents[t]?r.runOutsideAngular(()=>{super.addEventListener(e,t,a,n)}):super.addEventListener(e,t,a,n)}};WjBulletGraph.meta={outputs:wjBulletGraphMeta.outputs,changeEvents:{valueChanged:["value"]}};WjBulletGraph=WjBulletGraph_1=__decorate([Component({selector:wjBulletGraphMeta.selector,template:wjBulletGraphMeta.template,inputs:wjBulletGraphMeta.inputs,outputs:wjBulletGraphMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjBulletGraph_1)},...wjBulletGraphMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBulletGraph);export{WjBulletGraph};var wjRadialGaugeMeta={selector:"wj-radial-gauge",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showTickText","showRanges","stackRanges","thumbSize","tickSpacing","getText","autoScale","startAngle","sweepAngle","needleShape","needleLength","needleElement"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjRadialGaugeMeta};let WjRadialGauge=WjRadialGauge_1=class WjRadialGauge extends wjcGauge.RadialGauge{constructor(e,t,a){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this.wjModelProperty="value";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,a,n=!1){let i=WjDirectiveBehavior,r=i.ngZone;r&&i.outsideZoneEvents[t]?r.runOutsideAngular(()=>{super.addEventListener(e,t,a,n)}):super.addEventListener(e,t,a,n)}};WjRadialGauge.meta={outputs:wjRadialGaugeMeta.outputs,changeEvents:{valueChanged:["value"]}};WjRadialGauge=WjRadialGauge_1=__decorate([Component({selector:wjRadialGaugeMeta.selector,template:wjRadialGaugeMeta.template,inputs:wjRadialGaugeMeta.inputs,outputs:wjRadialGaugeMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjRadialGauge_1)},...wjRadialGaugeMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjRadialGauge);export{WjRadialGauge};var wjRangeMeta={selector:"wj-range",template:"",inputs:["wjProperty","color","min","max","name","thickness"],outputs:["initialized"],providers:[]};export{wjRangeMeta};let WjRange=WjRange_1=class WjRange extends wjcGauge.Range{constructor(e,t,a){super();this.isInitialized=!1;this.wjProperty="ranges";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjRange.meta={outputs:wjRangeMeta.outputs};WjRange=WjRange_1=__decorate([Component({selector:wjRangeMeta.selector,template:wjRangeMeta.template,inputs:wjRangeMeta.inputs,outputs:wjRangeMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjRange_1)},...wjRangeMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjRange);export{WjRange};let moduleExports=[WjLinearGauge,WjBulletGraph,WjRadialGauge,WjRange],WjGaugeModule=class WjGaugeModule{};WjGaugeModule=__decorate([NgModule({imports:[CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjGaugeModule);export{WjGaugeModule};