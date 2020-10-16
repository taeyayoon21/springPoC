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

var WjReportViewer_1,WjPdfViewer_1,__decorate=this&&this.__decorate||function(e,o,r,t){var n,a=arguments.length,i=a<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,r,t);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(i=(a<3?n(i):a>3?n(o,r,i):n(o,r))||i);return a>3&&i&&Object.defineProperty(o,r,i),i},__param=this&&this.__param||function(e,o){return function(r,t){o(r,t,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"wijmo/wijmo.angular2.directiveBase";import*as wjcViewer from"wijmo/wijmo.viewer";var wjReportViewerMeta={selector:"wj-report-viewer",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders","parameters","paginated","reportName"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","pageIndexChangedNg: pageIndexChanged","viewModeChangedNg: viewModeChanged","viewModeChangePC: viewModeChange","mouseModeChangedNg: mouseModeChanged","mouseModeChangePC: mouseModeChange","fullScreenChangedNg: fullScreenChanged","fullScreenChangePC: fullScreenChange","zoomFactorChangedNg: zoomFactorChanged","zoomFactorChangePC: zoomFactorChange","zoomModeChangedNg: zoomModeChanged","zoomModeChangePC: zoomModeChange","queryLoadingDataNg: queryLoadingData","beforeSendRequestNg: beforeSendRequest"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjReportViewerMeta};let WjReportViewer=WjReportViewer_1=class WjReportViewer extends wjcViewer.ReportViewer{constructor(e,o,r){super(WjDirectiveBehavior.getHostElement(e,o));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,o,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,o,r,t=!1){let n=WjDirectiveBehavior,a=n.ngZone;a&&n.outsideZoneEvents[o]?a.runOutsideAngular(()=>{super.addEventListener(e,o,r,t)}):super.addEventListener(e,o,r,t)}};WjReportViewer.meta={outputs:wjReportViewerMeta.outputs,changeEvents:{viewModeChanged:["viewMode"],mouseModeChanged:["mouseMode"],fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"]}};WjReportViewer=WjReportViewer_1=__decorate([Component({selector:wjReportViewerMeta.selector,template:wjReportViewerMeta.template,inputs:wjReportViewerMeta.inputs,outputs:wjReportViewerMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjReportViewer_1)},...wjReportViewerMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjReportViewer);export{WjReportViewer};var wjPdfViewerMeta={selector:"wj-pdf-viewer",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","pageIndexChangedNg: pageIndexChanged","viewModeChangedNg: viewModeChanged","viewModeChangePC: viewModeChange","mouseModeChangedNg: mouseModeChanged","mouseModeChangePC: mouseModeChange","fullScreenChangedNg: fullScreenChanged","fullScreenChangePC: fullScreenChange","zoomFactorChangedNg: zoomFactorChanged","zoomFactorChangePC: zoomFactorChange","zoomModeChangedNg: zoomModeChanged","zoomModeChangePC: zoomModeChange","queryLoadingDataNg: queryLoadingData","beforeSendRequestNg: beforeSendRequest"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjPdfViewerMeta};let WjPdfViewer=WjPdfViewer_1=class WjPdfViewer extends wjcViewer.PdfViewer{constructor(e,o,r){super(WjDirectiveBehavior.getHostElement(e,o));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,o,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,o,r,t=!1){let n=WjDirectiveBehavior,a=n.ngZone;a&&n.outsideZoneEvents[o]?a.runOutsideAngular(()=>{super.addEventListener(e,o,r,t)}):super.addEventListener(e,o,r,t)}};WjPdfViewer.meta={outputs:wjPdfViewerMeta.outputs,changeEvents:{viewModeChanged:["viewMode"],mouseModeChanged:["mouseMode"],fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"]}};WjPdfViewer=WjPdfViewer_1=__decorate([Component({selector:wjPdfViewerMeta.selector,template:wjPdfViewerMeta.template,inputs:wjPdfViewerMeta.inputs,outputs:wjPdfViewerMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjPdfViewer_1)},...wjPdfViewerMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjPdfViewer);export{WjPdfViewer};let moduleExports=[WjReportViewer,WjPdfViewer],WjViewerModule=class WjViewerModule{};WjViewerModule=__decorate([NgModule({imports:[CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjViewerModule);export{WjViewerModule};