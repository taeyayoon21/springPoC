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

"use strict";var __decorate=this&&this.__decorate||function(e,o,t,r){var i,n=arguments.length,p=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,o,t,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(p=(n<3?i(p):n>3?i(o,t,p):i(o,t))||p);return n>3&&p&&Object.defineProperty(o,t,p),p},__param=this&&this.__param||function(e,o){return function(t,r){o(t,r,e)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),ngCore=require("@angular/core"),wjcCore=require("wijmo/wijmo"),wjTooltipMeta={selector:"[wjTooltip]",inputs:[],outputs:["initialized"],exportAs:"wjTooltip",providers:[]};exports.wjTooltipMeta=wjTooltipMeta;var WjTooltip=function(){function WjTooltip(o,t,r){this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,o,t,r);this._elRef=o;e._toolTip||(e._toolTip=new wjcCore.Tooltip);this.created()}e=WjTooltip;WjTooltip.prototype.created=function(){};WjTooltip.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjTooltip.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjTooltip.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy();this.wjTooltip=null};Object.defineProperty(WjTooltip.prototype,"wjTooltip",{get:function(){return this._toolTipText},set:function(o){if(this._toolTipText!=o){this._toolTipText=o;e._toolTip.setTooltip(this._elRef.nativeElement,o)}},enumerable:!0,configurable:!0});var e;WjTooltip.meta={outputs:wjTooltipMeta.outputs};__decorate([core_1.Input()],WjTooltip.prototype,"wjTooltip",null);return WjTooltip=e=__decorate([core_1.Directive({selector:wjTooltipMeta.selector,inputs:wjTooltipMeta.inputs,outputs:wjTooltipMeta.outputs,exportAs:wjTooltipMeta.exportAs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return e}))}].concat(wjTooltipMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjTooltip)}();exports.WjTooltip=WjTooltip;var WjComponentLoader=function(){function WjComponentLoader(e,o){this._cmpResolver=e;this._elementRef=o;this._isInit=!1;this.propertiesChange=new ngCore.EventEmitter}Object.defineProperty(WjComponentLoader.prototype,"component",{get:function(){return this._component},set:function(e){if(this._component!==e){this._component=e;this._createComponent()}},enumerable:!0,configurable:!0});Object.defineProperty(WjComponentLoader.prototype,"properties",{get:function(){return this._properties},set:function(e){this._properties=e;this._updateProperties()},enumerable:!0,configurable:!0});WjComponentLoader.prototype.ngOnInit=function(){this._isInit=!0;this._createComponent()};WjComponentLoader.prototype._createComponent=function(){if(this._isInit){if(this._cmpRef){this._cmpRef.destroy();this._cmpRef=null}var e=this._component;if(e&&this._anchor){this._cmpRef=this._anchor.createComponent(this._cmpResolver.resolveComponentFactory(e));this._updateProperties()}}};WjComponentLoader.prototype._updateProperties=function(){var e=this._cmpRef&&this._cmpRef.instance,o=this.properties;if(e&&o)for(var t=0,r=Object.getOwnPropertyNames(o);t<r.length;t++){var i=r[t];e[i]=o[i];var n=e[i+"Change"];n instanceof core_1.EventEmitter&&this._addPropListener(e,i,n)}};WjComponentLoader.prototype._addPropListener=function(e,o,t){var r=this;t.subscribe((function(t){r.properties[o]=r.properties[o]=e[o];r.propertiesChange.next(r.properties)}))};__decorate([core_1.ViewChild("anchor",{read:core_1.ViewContainerRef,static:!0})],WjComponentLoader.prototype,"_anchor",void 0);return WjComponentLoader=__decorate([core_1.Component({selector:"wj-component-loader",template:"<div #anchor></div>",inputs:["component","properties"],outputs:["propertiesChange"]}),__param(0,core_1.Inject(core_1.ComponentFactoryResolver)),__param(1,core_1.Inject(core_1.ElementRef))],WjComponentLoader)}();exports.WjComponentLoader=WjComponentLoader;var moduleExports=[WjTooltip,WjComponentLoader],WjCoreModule=function(){function WjCoreModule(){}return WjCoreModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjCoreModule)}();exports.WjCoreModule=WjCoreModule;