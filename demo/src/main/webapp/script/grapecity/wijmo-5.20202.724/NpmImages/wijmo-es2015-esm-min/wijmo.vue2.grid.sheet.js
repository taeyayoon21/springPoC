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

import{VueApi,WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as wjcGridSheet from"wijmo/wijmo.grid.sheet";class WjFlexSheetBehavior extends WjComponentBehavior{}WjFlexSheetBehavior.tag="wj-flex-sheet";WjFlexSheetBehavior.props=["isDisabled","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups","allowAutoFill","isTabHolderVisible","showFilterIcons","enableDragDrop","enableFormulas","selectedSheetIndex"];WjFlexSheetBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","beginningEdit","cellEditEnded","cellEditEnding","prepareCellForEdit","formatItem","resizingColumn","resizedColumn","autoSizingColumn","autoSizedColumn","draggingColumn","draggingColumnOver","draggedColumn","sortingColumn","sortedColumn","pinningColumn","pinnedColumn","resizingRow","resizedRow","autoSizingRow","autoSizedRow","draggingRow","draggingRowOver","draggedRow","deletingRow","deletedRow","loadingRows","loadedRows","rowEditStarting","rowEditStarted","rowEditEnding","rowEditEnded","rowAdded","groupCollapsedChanging","groupCollapsedChanged","itemsSourceChanging","itemsSourceChanged","selectionChanging","selectionChanged","scrollPositionChanged","updatingView","updatedView","updatingLayout","updatedLayout","pasting","pasted","pastingCell","pastedCell","copying","copied","draggingRowColumn","droppingRowColumn","beginDroppingRowColumn","endDroppingRowColumn","loaded","unknownFunction","sheetCleared","prepareChangingRow","prepareChangingColumn","rowChanged","columnChanged"];WjFlexSheetBehavior.changeEvents={selectedSheetChanged:["selectedSheetIndex"]};WjFlexSheetBehavior.classCtor=function(){return wjcGridSheet.FlexSheet};export var WjFlexSheet=WjFlexSheetBehavior.register();function registerV3WjFlexSheet(e){e.component(WjFlexSheetBehavior.tag,WjFlexSheet)}class WjSheetBehavior extends WjComponentBehavior{}WjSheetBehavior.tag="wj-sheet";WjSheetBehavior.parentProp="sheets";WjSheetBehavior.parentInCtor=!0;WjSheetBehavior.props=["wjProperty","name","itemsSource","visible","rowCount","columnCount"];WjSheetBehavior.events=["initialized","nameChanged"];WjSheetBehavior.classCtor=function(){return wjcGridSheet.Sheet};export var WjSheet=WjSheetBehavior.register();function registerV3WjSheet(e){e.component(WjSheetBehavior.tag,WjSheet)}export function registerGridSheet(e){if(VueApi.isV3Plus){registerV3WjFlexSheet(e);registerV3WjSheet(e)}}