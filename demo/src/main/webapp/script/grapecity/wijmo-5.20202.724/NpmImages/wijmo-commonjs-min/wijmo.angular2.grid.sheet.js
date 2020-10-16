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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var g=e.length-1;g>=0;g--)(r=e[g])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},__param=this&&this.__param||function(e,t){return function(o,n){t(o,n,e)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcGridSheet=require("wijmo/wijmo.grid.sheet"),wjFlexSheetMeta={selector:"wj-flex-sheet",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups","allowAutoFill","isTabHolderVisible","showFilterIcons","enableDragDrop","enableFormulas","selectedSheetIndex"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","beginningEditNg: beginningEdit","cellEditEndedNg: cellEditEnded","cellEditEndingNg: cellEditEnding","prepareCellForEditNg: prepareCellForEdit","formatItemNg: formatItem","resizingColumnNg: resizingColumn","resizedColumnNg: resizedColumn","autoSizingColumnNg: autoSizingColumn","autoSizedColumnNg: autoSizedColumn","draggingColumnNg: draggingColumn","draggingColumnOverNg: draggingColumnOver","draggedColumnNg: draggedColumn","sortingColumnNg: sortingColumn","sortedColumnNg: sortedColumn","pinningColumnNg: pinningColumn","pinnedColumnNg: pinnedColumn","resizingRowNg: resizingRow","resizedRowNg: resizedRow","autoSizingRowNg: autoSizingRow","autoSizedRowNg: autoSizedRow","draggingRowNg: draggingRow","draggingRowOverNg: draggingRowOver","draggedRowNg: draggedRow","deletingRowNg: deletingRow","deletedRowNg: deletedRow","loadingRowsNg: loadingRows","loadedRowsNg: loadedRows","rowEditStartingNg: rowEditStarting","rowEditStartedNg: rowEditStarted","rowEditEndingNg: rowEditEnding","rowEditEndedNg: rowEditEnded","rowAddedNg: rowAdded","groupCollapsedChangingNg: groupCollapsedChanging","groupCollapsedChangedNg: groupCollapsedChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","selectionChangingNg: selectionChanging","selectionChangedNg: selectionChanged","scrollPositionChangedNg: scrollPositionChanged","updatingViewNg: updatingView","updatedViewNg: updatedView","updatingLayoutNg: updatingLayout","updatedLayoutNg: updatedLayout","pastingNg: pasting","pastedNg: pasted","pastingCellNg: pastingCell","pastedCellNg: pastedCell","copyingNg: copying","copiedNg: copied","selectedSheetChangedNg: selectedSheetChanged","selectedSheetIndexChangePC: selectedSheetIndexChange","draggingRowColumnNg: draggingRowColumn","droppingRowColumnNg: droppingRowColumn","beginDroppingRowColumnNg: beginDroppingRowColumn","endDroppingRowColumnNg: endDroppingRowColumn","loadedNg: loaded","unknownFunctionNg: unknownFunction","sheetClearedNg: sheetCleared","prepareChangingRowNg: prepareChangingRow","prepareChangingColumnNg: prepareChangingColumn","rowChangedNg: rowChanged","columnChangedNg: columnChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjFlexSheetMeta=wjFlexSheetMeta;var WjFlexSheet=function(e){__extends(WjFlexSheet,e);function WjFlexSheet(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1;r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);r.created();return r}t=WjFlexSheet;WjFlexSheet.prototype.created=function(){};WjFlexSheet.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexSheet.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexSheet.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFlexSheet.prototype.addEventListener=function(t,o,n,r){var i=this;void 0===r&&(r=!1);var a=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,g=a.ngZone;g&&a.outsideZoneEvents[o]?g.runOutsideAngular((function(){e.prototype.addEventListener.call(i,t,o,n,r)})):e.prototype.addEventListener.call(this,t,o,n,r)};var t;WjFlexSheet.meta={outputs:wjFlexSheetMeta.outputs,changeEvents:{selectedSheetChanged:["selectedSheetIndex"]}};return WjFlexSheet=t=__decorate([core_1.Component({selector:wjFlexSheetMeta.selector,template:wjFlexSheetMeta.template,inputs:wjFlexSheetMeta.inputs,outputs:wjFlexSheetMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexSheetMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexSheet)}(wjcGridSheet.FlexSheet);exports.WjFlexSheet=WjFlexSheet;var wjSheetMeta={selector:"wj-sheet",template:"",inputs:["wjProperty","name","itemsSource","visible","rowCount","columnCount"],outputs:["initialized","nameChangedNg: nameChanged"],providers:[]};exports.wjSheetMeta=wjSheetMeta;var WjSheet=function(e){__extends(WjSheet,e);function WjSheet(t,o,n){var r=e.call(this,n)||this;r.isInitialized=!1;r.wjProperty="sheets";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);r.created();return r}t=WjSheet;WjSheet.prototype.created=function(){};WjSheet.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjSheet.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjSheet.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjSheet.prototype.ngOnChanges=function(e){var t;(t=e.rowCount)&&t.isFirstChange&&(this.boundRowCount=t.currentValue);(t=e.columnCount)&&t.isFirstChange&&(this.boundColumnCount=t.currentValue)};var t;WjSheet.meta={outputs:wjSheetMeta.outputs};return WjSheet=t=__decorate([core_1.Component({selector:wjSheetMeta.selector,template:wjSheetMeta.template,inputs:wjSheetMeta.inputs,outputs:wjSheetMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjSheetMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjSheet)}(wjcGridSheet.Sheet);exports.WjSheet=WjSheet;var moduleExports=[WjFlexSheet,WjSheet],WjGridSheetModule=function(){function WjGridSheetModule(){}return WjGridSheetModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjGridSheetModule)}();exports.WjGridSheetModule=WjGridSheetModule;