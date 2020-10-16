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

import{_getModule,CancelEventArgs,assert,isFunction,Control,CollectionView,DateTime,isArray,isDate,isString,asNumber,asBoolean,closest,hasClass,copy,getActiveElement,getEventOptions,Event,EventArgs,_registerModule}from"wijmo/wijmo";import*as selfModule from"wijmo/wijmo.undo";export class UndoableAction{constructor(t){this._target=t}undo(){if(this._actions)for(var t=this._actions.length-1;t>=0;t--)this._actions[t].undo();this.applyState(this._oldState)}redo(){this.applyState(this._newState);this._actions&&this._actions.forEach(t=>{t.redo()})}close(){return!0}applyState(t){}shouldAddAsChildAction(t){return!1}addChildAction(t){this._actions||(this._actions=[]);this._actions.push(t)}get target(){return this._target}}export class _UndoStackHTML{static addTarget(t,e){let n=!1;if(e instanceof HTMLInputElement){_UndoStackHTML._addInputElement(t,e);n=!0}else if(e instanceof HTMLTextAreaElement){_UndoStackHTML._addTextAreaElement(t,e);n=!0}else if(e instanceof HTMLSelectElement){_UndoStackHTML._addSelectElement(t,e);n=!0}else for(let i=0;i<e.children.length;i++){let o=e.children[i];t.addTarget(o)&&(n=!0)}return n}static _addInputElement(t,e){if("checkbox"==e.type)e.addEventListener("click",e=>{t._pendingAction=new CheckboxClickAction(e);t.pushPendingAction()});else if("radio"==e.type){e.addEventListener("mousedown",e=>{t._pendingAction=new RadioClickAction(e)},!0);let n=_UndoStackHTML._getLabel(e);n&&n.addEventListener("mousedown",n=>{t._pendingAction=new RadioClickAction({target:e})},!0);e.addEventListener("focus",e=>{t._pendingAction instanceof RadioClickAction&&t._pendingAction.target==e.target||(t._pendingAction=new RadioClickAction(e))});e.addEventListener("click",e=>{t._pendingAction instanceof RadioClickAction&&t.pushPendingAction()})}else{e.addEventListener("focus",e=>{t._pendingAction=new InputChangeAction(e)});e.addEventListener("blur",e=>{t._pendingAction instanceof InputChangeAction&&t.pushPendingAction()})}}static _addTextAreaElement(t,e){e.addEventListener("focus",e=>{t._pendingAction=new InputChangeAction(e)});e.addEventListener("blur",e=>{t._pendingAction instanceof InputChangeAction&&t.pushPendingAction()})}static _addSelectElement(t,e){e.addEventListener("focus",e=>{t._pendingAction=new InputChangeAction(e)});e.addEventListener("blur",e=>{t._pendingAction instanceof InputChangeAction&&t.pushPendingAction()})}static _getLabel(t){let e=t.parentElement;e instanceof HTMLLabelElement||(e=document.querySelector('label[for="'+t.id+'"'));return e}}export class InputChangeAction extends UndoableAction{constructor(t){super(t.target);this._oldState=this._target.value}close(){this._newState=this._target.value;return this._newState!=this._oldState}applyState(t){let e=this._target;e.value=t;e.dispatchEvent(UndoStack._evtInput);isFunction(e.select)?e.select():e.focus()}}export class CheckboxClickAction extends UndoableAction{constructor(t){super(t.target);assert("checkbox"==this._target.type,"checkbox expected");this._newState=this._target.checked;this._oldState=!this._newState}applyState(t){this._target.checked=t;this._target.focus()}}export class RadioClickAction extends UndoableAction{constructor(t){super(t.target);let e=this._target.type;assert("radio"==e,"radio button expected");this._oldState=this._getState()}close(){this._newState=this._getState();return this._newState!=this._oldState}applyState(t){if(t){t.checked=!0;t.focus()}}_getState(){let t='input[name="'+this._target.name+'"]',e=document.querySelectorAll(t);for(let t=0;t<e.length;t++)if(e[t].checked)return e[t];return null}}export class UndoStack{constructor(t,e){this._autoKbd=!0;this._stack=[];this._maxActions=1e3;this._ptr=0;this.addingTarget=new Event;this.addedTarget=new Event;this.addingAction=new Event;this.addedAction=new Event;this.undoingAction=new Event;this.undoneAction=new Event;this.redoingAction=new Event;this.redoneAction=new Event;this.stateChanged=new Event;UndoStack._evtInput=document.createEvent("HTMLEvents");UndoStack._evtInput.initEvent("input",!0,!1);copy(this,e);this.addTarget(t||"body");document.addEventListener("keydown",t=>{if(this._autoKbd&&t.ctrlKey&&!t.defaultPrevented)switch(t.keyCode){case 90:if(this.canUndo){getActiveElement().blur();setTimeout(()=>this.undo(),100);t.preventDefault()}break;case 89:if(this.canRedo){getActiveElement().blur();setTimeout(()=>this.redo(),100);t.preventDefault()}}},getEventOptions(!0,!1))}addTarget(t){let e=!1;if(isString(t)){let e=document.querySelectorAll(t),n=!1;for(let t=0;t<e.length;t++)this.addTarget(e[t])&&(n=!0);return n}assert(t instanceof HTMLElement,"Undo target should be an HTML element");let n=new AddTargetEventArgs(t);n.cancel=hasClass(t,"wj-no-undo");if(this.onAddingTarget(n)){let i=Control.getControl(t);i&&(e=_UndoStackWijmo.addTarget(this,i));e||closest(t,".wj-control")||(e=_UndoStackHTML.addTarget(this,t));e&&this.onAddedTarget(n)}return e}get autoKeyboard(){return this._autoKbd}set autoKeyboard(t){this._autoKbd=asBoolean(t)}get isDisabled(){return this._disabled}set isDisabled(t){this._disabled=asBoolean(t)}get maxActions(){return this._maxActions}set maxActions(t){if(t!=this._maxActions){this._maxActions=asNumber(t,!1,!0);this.clear()}}get actionCount(){return this._stack.length}get canUndo(){return this._stack.length&&this._ptr>0&&!this._disabled}get canRedo(){return this._stack.length&&this._ptr<this._stack.length&&!this._disabled}undo(){if(this.canUndo){let t=this._stack[this._ptr-1],e=new UndoActionEventArgs(t);if(this.onUndoingAction(e)){this._ptr--;this._undoing=!0;t.undo();this._undoing=!1;this._pendingAction=null;this.onUndoneAction(e);this.onStateChanged()}}}redo(){if(this.canRedo){let t=this._stack[this._ptr],e=new UndoActionEventArgs(t);if(this.onRedoingAction(e)){this._ptr++;this._undoing=!0;t.redo();this._undoing=!1;this._pendingAction=null;this.onRedoneAction(e);this.onStateChanged()}}}clear(){this._ptr=0;this._stack.splice(0,this._stack.length);this.onStateChanged()}onAddingTarget(t){this.addingTarget.raise(this,t);return!t.cancel}onAddedTarget(t){this.addedTarget.raise(this,t)}onAddingAction(t){this.addingAction.raise(this,t);return!t.cancel}onAddedAction(t){this.addedAction.raise(this,t)}onUndoingAction(t){this.undoingAction.raise(this,t);return!t.cancel}onUndoneAction(t){this.undoneAction.raise(this,t)}onRedoingAction(t){this.redoingAction.raise(this,t);return!t.cancel}onRedoneAction(t){this.redoneAction.raise(this,t)}onStateChanged(){this.stateChanged.raise(this,EventArgs.empty)}pushPendingAction(){if(!this._disabled&&!this._undoing&&this._pendingAction&&this._pendingAction.close()){this._stack.splice(this._ptr,this._stack.length-this._ptr);assert(this._stack.length==this._ptr,"should be at the end of the stack");if(this._stack.length){let t=this._stack[this._ptr-1];if(t.shouldAddAsChildAction(this._pendingAction)){t.addChildAction(this._pendingAction);this._pendingAction=null;this.onStateChanged();return}}let t=new UndoActionEventArgs(this._pendingAction);if(!this.onAddingAction(t))return;this._stack.push(this._pendingAction);this._ptr++;this._pendingAction=null;let e=this._stack.length-this._maxActions;if(e>0){this._stack.splice(0,e);this._ptr-=e;assert(this._ptr>=0,"pointer should not be negative")}this.onStateChanged()}}}export class AddTargetEventArgs extends CancelEventArgs{constructor(t){super();this._target=t}get target(){return this._target}}export class UndoActionEventArgs extends CancelEventArgs{constructor(t){super();this._action=t}get action(){return this._action}}export function softInput(){return _getModule("wijmo.input")}export function softGrid(){return _getModule("wijmo.grid")}export function softGauge(){return _getModule("wijmo.gauge")}export function softNav(){return _getModule("wijmo.nav")}export class _UndoStackWijmo{static addTarget(t,e){const n=_UndoStackWijmo;return softGrid()&&e instanceof softGrid().FlexGrid?n._addFlexGrid(t,e):softGauge()&&e instanceof softGauge().Gauge?n._addGauge(t,e):softNav()&&e instanceof softNav().TreeView?n._addTreeView(t,e):!!n._isInputControl(e)&&n._addInputControl(t,e)}static _isInputControl(t){const e=softInput();return!!e&&(t instanceof e.DropDown||t instanceof e.InputMask||t instanceof e.InputNumber||t instanceof e.Calendar||t instanceof e.ColorPicker)}static _addInputControl(t,e){const n=e.hostElement;n.addEventListener("focus",()=>{t._pendingAction instanceof InputControlChangeAction&&t._pendingAction.target==e||(t._pendingAction=new InputControlChangeAction({target:e}))},!0);n.addEventListener("blur",()=>{t._pendingAction instanceof InputControlChangeAction&&!e.containsFocus()&&t.pushPendingAction()},!0);return!0}static _addGauge(t,e){if(!(softGauge()&&e instanceof softGauge().Gauge))return!1;if(e.isReadOnly)return!1;let n=e.hostElement;n.addEventListener("focus",()=>{t._pendingAction instanceof GaugeChangeAction&&t._pendingAction.target==e||(t._pendingAction=new GaugeChangeAction(e))},!0);n.addEventListener("blur",()=>{t._pendingAction instanceof GaugeChangeAction&&!e.containsFocus()&&t.pushPendingAction()},!0)}static _addTreeView(t,e){if(!(softNav()&&e instanceof softNav().TreeView))return!1;e.nodeEditStarted.addHandler((e,n)=>{t._pendingAction=new TreeViewEditAction(e,n)});e.nodeEditEnded.addHandler((e,n)=>{t._pendingAction instanceof TreeViewEditAction&&t.pushPendingAction()});e.isCheckedChanging.addHandler((e,n)=>{t._pendingAction=new TreeViewCheckAction(e,n)});e.isCheckedChanged.addHandler((e,n)=>{t._pendingAction instanceof TreeViewCheckAction&&t.pushPendingAction()});return!0}static _addFlexGrid(t,e){if(!(softGrid()&&e instanceof softGrid().FlexGrid))return!1;e.beginningEdit.addHandler((e,n)=>{t._pendingAction=new GridEditAction(e,n)});e.cellEditEnded.addHandler((e,n)=>{t._pendingAction instanceof GridEditAction&&t.pushPendingAction()});e.pastingCell.addHandler((e,n)=>{t._pendingAction=new GridEditAction(e,n)});e.pastedCell.addHandler((e,n)=>{t._pendingAction instanceof GridEditAction&&t.pushPendingAction()});e.sortingColumn.addHandler((e,n)=>{t._pendingAction=new GridSortAction(e,n)});e.sortedColumn.addHandler((e,n)=>{t._pendingAction instanceof GridSortAction&&t.pushPendingAction()});e.resizingColumn.addHandler((e,n)=>{t._pendingAction instanceof GridResizeAction&&t._pendingAction.target==e||(t._pendingAction=new GridResizeAction(e,n))});e.resizedColumn.addHandler(()=>{t._pendingAction instanceof GridResizeAction&&t.pushPendingAction()});e.autoSizingColumn.addHandler((e,n)=>{t._pendingAction=new GridResizeAction(e,n)});e.autoSizedColumn.addHandler(()=>{t._pendingAction instanceof GridResizeAction&&t.pushPendingAction()});e.draggingColumn.addHandler((e,n)=>{t._pendingAction=new GridDragAction(e,n)});e.draggedColumn.addHandler((e,n)=>{t._pendingAction instanceof GridDragAction&&t.pushPendingAction()});e.rowAdded.addHandler((e,n)=>{if(!n.cancel){t._pendingAction=new GridAddRowAction(e,n);t.pushPendingAction()}});e.deletingRow.addHandler((e,n)=>{if(!n.cancel){t._pendingAction=new GridRemoveRowAction(e,n);t.pushPendingAction()}});return!0}}class InputControlChangeAction extends InputChangeAction{constructor(t){super(t);this._ctl=t.target;this._oldState=this._getControlState()}get control(){return this._ctl}close(){this._timeStamp=Date.now();this._newState=this._getControlState();return!this._sameContent(this._oldState,this._newState)}shouldAddAsChildAction(t){if(t instanceof InputControlChangeAction&&t.target==this.target&&t._timeStamp-this._timeStamp<500){this._timeStamp=Date.now();return!0}return!1}applyState(t){let e=this._ctl,n=softInput();if(n){e instanceof n.MultiSelect?e.checkedItems=t:e instanceof n.MultiAutoComplete?e.selectedItems=t:"value"in e?e.value=t:"text"in e?e.text=t:assert(!1,"can't get control state?");e.focus()}}_getControlState(){let t=this._ctl,e=softInput();if(e){if(t instanceof e.MultiSelect)return t.checkedItems.slice();if(t instanceof e.MultiAutoComplete)return t.selectedItems.slice();if("value"in t)return t.value;if("text"in t)return t.text;assert(!1,"can't get control state?")}}_sameContent(t,e){if(isArray(t)&&isArray(e)){if(t.length!=e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!=e[n])return!1;return!0}return isDate(t)||isDate(e)?DateTime.sameDate(t,e):t==e}}class GaugeChangeAction extends UndoableAction{constructor(t){super(t);this._oldState=t.value}get control(){return this._target}close(){this._newState=this._target.value;return this._newState!=this._oldState}applyState(t){let e=this._target;e.value=t;e.focus()}}class GridEditAction extends UndoableAction{constructor(t,e){super(t);let n=t.collectionView;this._row=e.row;this._col=e.col;this._dataItem=t.rows[e.row].dataItem;this._page=n instanceof CollectionView?n.pageIndex:-1;this._oldState=t.getCellData(e.row,e.col,!1)}get control(){return this._target}get row(){return this._row}get col(){return this._col}get dataItem(){return this._dataItem}close(){let t=this._target.collectionView;if(t&&t.currentAddItem)return!1;this._timeStamp=Date.now();this._newState=this._target.getCellData(this._row,this._col,!1);return this._newState!=this._oldState}applyState(t){let e=this._target,n=e.collectionView,i=e.columns[this._col],o=e._getBindingColumn(e.cells,this._row,i);if(o&&o._binding&&n){n instanceof CollectionView&&this._page>-1&&n.moveToPage(this._page);let e=this._dataItem;o._binding.setValue(e,t);n.refresh();n.moveCurrentTo(e)}e.focus()}shouldAddAsChildAction(t){return t instanceof GridEditAction&&t.target==this.target&&t._timeStamp-this._timeStamp<100}}class GridSortAction extends UndoableAction{constructor(t,e){super(t);let n=this._target.collectionView;n&&(this._oldState=n.sortDescriptions.slice())}get control(){return this._target}close(){let t=this._target.collectionView;if(t){this._newState=t.sortDescriptions.slice();return!0}return!1}applyState(t){let e=this._target.collectionView;e&&e.deferUpdate(()=>{let n=e.sortDescriptions;n.clear();t.forEach(t=>{n.push(t)})});this._target.focus()}}class GridResizeAction extends UndoableAction{constructor(t,e){super(t);this._col=t.columns[e.col];this._oldState=this._col.renderWidth}get control(){return this._target}get col(){return this._col}close(){this._newState=this._col.renderWidth;return this._newState!=this._oldState}applyState(t){this._col.width=t;this._target.focus()}}class GridDragAction extends UndoableAction{constructor(t,e){super(t);this._col=t.columns[e.col];this._oldState=t.columns.indexOf(this._col)}get control(){return this._target}get col(){return this._col}close(){this._newState=this._col.grid.columns.indexOf(this._col);return this._newState!=this._oldState}applyState(t){let e=this._col.grid.columns;e.deferUpdate(()=>{e.remove(this._col);e.insert(t,this._col)});this._target.focus()}}class GridAddRowAction extends UndoableAction{constructor(t,e){super(t);let n=this._target.collectionView;if(n&&n.currentAddItem){let t=n.currentAddItem,e=n.sourceCollection.indexOf(t),i=n.currentPosition;this._oldState={item:t,index:e,position:i};this._newState={index:e,position:i}}}get control(){return this._target}close(){return null!=this._oldState}applyState(t){let e=this._target.collectionView;if(e){let n=e.sourceCollection;if(t.item){n.splice(t.index,1);if(e instanceof CollectionView&&e.trackChanges){let n=t.item;assert(e.itemsAdded.indexOf(n)>-1,"item should be in the itemsAdded list");e.itemsAdded.remove(n)}}else{let i=this._oldState.item;n.splice(t.index,0,i);if(e instanceof CollectionView&&e.trackChanges){assert(e.itemsAdded.indexOf(i)<0,"item should not be in the itemsAdded list");e.itemsAdded.push(i)}}e.refresh();e.moveCurrentToPosition(t.position);this._target.focus()}}}class GridRemoveRowAction extends UndoableAction{constructor(t,e){super(t);let n=this._target.collectionView;if(n){let i=t.rows[e.row].dataItem,o=n.sourceCollection.indexOf(i),s=n.currentPosition;this._oldState={item:i,index:o,position:s};this._newState={index:o,position:s}}}get control(){return this._target}get dataItem(){return this._oldState.item}close(){this._timeStamp=Date.now();return null!=this._oldState}applyState(t){let e=this._target,n=e.collectionView;if(n){let i=n.sourceCollection;if(t.item){i.splice(t.index,0,t.item);if(n instanceof CollectionView&&n.trackChanges){let e=t.item;assert(n.itemsRemoved.indexOf(e)>-1,"item should be in the itemsRemoved list");n.itemsRemoved.remove(e)}}else{i.splice(t.index,1);if(n instanceof CollectionView&&n.trackChanges){let t=this._oldState.item;assert(n.itemsRemoved.indexOf(t)<0,"item should not be in the itemsRemoved list");n.itemsRemoved.push(t)}}n.refresh();n.moveCurrentToPosition(t.position);let o=new(softGrid().CellRange)(t.position,0,t.position,e.columns.length-1);e.select(o);e.focus()}}shouldAddAsChildAction(t){return t instanceof GridRemoveRowAction&&t.target==this.target&&t._timeStamp-this._timeStamp<100}}class TreeViewEditAction extends UndoableAction{constructor(t,e){super(t);this._nd=e.node;this._oldState=this._getNodeText()}get control(){return this._target}get node(){return this._nd}close(){this._newState=this._getNodeText();return this._newState!=this._oldState}applyState(t){this._nd.select();this._setNodeText(t);this._target.focus()}_getNodeText(){let t=this._nd.dataItem[this._getDisplayMemberPath()];return null!=t?t.toString():""}_setNodeText(t){let e=this._nd,n=e.dataItem,i=this._getDisplayMemberPath(),o=e.element.querySelector(".wj-node-text");n[i]=t;e.treeView.isContentHtml?o.innerHTML=t:o.textContent=t}_getDisplayMemberPath(){let t=this._nd,e=t.treeView.displayMemberPath;e instanceof Array&&(e=e[t.level]);return e}}class TreeViewCheckAction extends UndoableAction{constructor(t,e){super(t);this._nd=e.node;this._oldState=this._nd.isChecked}get control(){return this._target}get node(){return this._nd}close(){this._newState=this._nd.isChecked;return this._newState!=this._oldState}applyState(t){this._nd.select();this._nd.isChecked=t;this._target.focus()}}_registerModule("wijmo.undo",selfModule);