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

import{WjDirective,WjLink,_registerNgModule,softRefGridDetail}from"wijmo/wijmo.angular.base";import*as mNg from"angular";import*as wjcGridDetail from"wijmo/wijmo.grid.detail";var wjNg=mNg;const wijmoGridDetailName="wj.grid.detail";export const ngModuleName="wj.grid.detail";var wijmoGridDetail=_registerNgModule("wj.grid.detail");softRefGridDetail()&&wijmoGridDetail.directive("wjFlexGridDetail",["$compile",function(e){return new WjFlexGridDetail(e)}]);export class WjFlexGridDetail extends WjDirective{constructor(e){super();this._$compile=e;this.require="^wjFlexGrid";this.terminal=!0;if(WjDirective._dynaTemplates){this.transclude=!1;this.priority=100;this.template=function(e,t){t[WjFlexGridDetail._detailTemplateProp]=e[0].innerHTML;return"<div />"}}else{this.transclude=!0;this.template="<div ng-transclude/>"}}get _controlConstructor(){return wjcGridDetail.FlexGridDetailProvider}_createLink(){return new WjFlexGridDetailLink}}WjFlexGridDetail._detailTemplateProp="$__wjDetailTemplate";WjFlexGridDetail._detailScopeProp="$_detailScope";class WjFlexGridDetailLink extends WjLink{_initParent(){super._initParent();var e=this,t=this.tAttrs[WjFlexGridDetail._detailTemplateProp],i=this.control;this.itemTemplate=this._getCellTemplate(null!=t?t:WjDirective._removeTransclude(this.tElement[0].innerHTML));var l=this._getCellTemplate(this.itemTemplate);this._tmplLink=this.directive._$compile("<div>"+l+"</div>");i.createDetailCell=function(t,l){var r=e._getCellScope(e.scope.$parent,t,l),a=e._tmplLink(r,(function(e,t){}))[0];a[WjDirective._elemScopeProp]=r;i.grid.hostElement.appendChild(a);r.$root&&!r.$root.$$phase&&r.$apply();a.parentElement.removeChild(a);return a};i.disposeDetailCell=function(e){if(e.detail){let t=e.detail[WjDirective._elemScopeProp];t&&t.$destroy()}};this.parent._isInitialized&&this.control&&this.control.invalidate()}_destroy(){var e=this.parent&&this.parent.control,t=this.control;t.createDetailCell=null;t.disposeDetailCell=null;super._destroy();this._tmplLink=null;e&&e.invalidate()}_getCellScope(e,t,i){var l=e.$new();l.$row=t;l.$col=i;l.$item=t.dataItem;return l}_getCellTemplate(e){e&&(e=(e=(e=e.replace(/ng\-style/g,"style")).replace(/ class\=\"ng\-scope\"( \"ng\-binding\")?/g,"")).replace(/<span>\s*<\/span>/g,""));return e}}