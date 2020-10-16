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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("wijmo/wijmo.react.base"),React=require("react"),ReactDOM=require("react-dom"),wjcCore=require("wijmo/wijmo"),wjcInput=require("wijmo/wijmo.input");class ListBox extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.ListBox,{objectProps:["itemsSource","selectedItem","selectedValue","checkedItems","wjItemTemplate"]})}componentDidMount(){const e=super.componentDidMount();new ItemTemplate(this);return e}}exports.ListBox=ListBox;class MultiSelectListBox extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.MultiSelectListBox,{objectProps:["itemsSource","checkedItems"]})}}exports.MultiSelectListBox=MultiSelectListBox;class ComboBox extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.ComboBox,{objectProps:["itemsSource","selectedItem","selectedValue","wjItemTemplate"]})}componentDidMount(){const e=super.componentDidMount();new ItemTemplate(this);return e}}exports.ComboBox=ComboBox;class AutoComplete extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.AutoComplete,{objectProps:["itemsSource","selectedItem","selectedValue"]})}}exports.AutoComplete=AutoComplete;class Calendar extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.Calendar)}}exports.Calendar=Calendar;class ColorPicker extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.ColorPicker,{objectProps:["palette"]})}}exports.ColorPicker=ColorPicker;class InputMask extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.InputMask)}}exports.InputMask=InputMask;class InputColor extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.InputColor)}}exports.InputColor=InputColor;class MultiSelect extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.MultiSelect,{objectProps:["itemsSource","selectedItem","selectedValue","checkedItems","wjItemTemplate"]})}componentDidMount(){const e=super.componentDidMount();new ItemTemplate(this);return e}}exports.MultiSelect=MultiSelect;class MultiAutoComplete extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.MultiAutoComplete,{objectProps:["itemsSource","selectedItem","selectedValue","selectedItems"]})}}exports.MultiAutoComplete=MultiAutoComplete;class InputNumber extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.InputNumber)}}exports.InputNumber=InputNumber;class InputDate extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.InputDate)}}exports.InputDate=InputDate;class InputTime extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.InputTime,{objectProps:["itemsSource","selectedItem","selectedValue"]})}}exports.InputTime=InputTime;class InputDateTime extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.InputDateTime)}}exports.InputDateTime=InputDateTime;class Menu extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.Menu,{objectProps:["itemsSource","selectedItem","selectedValue","wjItemTemplate"]});this._contextMenuData={};this.contextMenuProp="contextMenuOf"}get value(){return this._value}set value(e){this._value=e;if(null!=e){this.control.selectedValue=e;this._updateHeader()}}componentDidMount(){const e=super.componentDidMount();this._definedHeader=this.props.header;this.value=this.props.value;new ItemTemplate(this);this._contextMenuBindListeners();return e}componentDidUpdate(e){super.componentDidUpdate(e);this._definedHeader=this.props.header;this.value=this.props.value;const t=this._contextMenuGetElementsIfChanged();if(t){this._contextMenuUnbindListeners();this._contextMenuBindListeners(t)}}componentWillUnmount(){this._contextMenuUnbindListeners();super.componentWillUnmount()}_createControl(){const e=super._createControl();e.itemsSource=new wjcCore.ObservableArray;e.selectedIndex=0;e.listBox.formatItem.addHandler(this._fmtItem,this);e.invalidate();e.itemClicked.addHandler(e=>{this.value=this.control.selectedValue});return e}_updateHeader(){this.control.header=this._definedHeader||"";const e=this.control.selectedItem;if(null!=this.value&&e&&this.control.displayMemberPath){let t=null;if(e instanceof MenuItem){const o=e.contentRoot;t=o?o.innerHTML:e[this.control.displayMemberPath]}null!=t&&(this.control.header+=": <b>"+t+"</b>")}}_fmtItem(e,t){if(t.data instanceof MenuItem||t.data instanceof MenuSeparator){t.item.textContent="";t.item.appendChild(t.data.contentRoot);t.data.added(t.item)}}_contextMenuGetElementsIfChanged(){const e=this._contextMenuData.elements||[],t=this._contextMenuGetElements(this.props[this.contextMenuProp]);if(e.length!==t.length)return t;for(let o in e)if(e[o]!==t[o])return t;return null}_contextMenuGetElements(e){const t=[];(wjcCore.isArray(e)?e:[e]).forEach(e=>{if(e){let o=null;if("string"==typeof e)o=document.getElementById(e);else if("object"==typeof e){const t=e.current;if(t)if(t instanceof HTMLElement)o=t;else if(t instanceof wijmo_react_base_1.ComponentBase)o=t.control.hostElement;else{wijmo_react_base_1.ComponentBase.isInStrictMode(t)&&console.warn(`In React StrictMode reference in Menu ${this.contextMenuProp} prop should point to HTMLElement (not custom component)`);o=ReactDOM.findDOMNode(t)}}o&&t.push(o)}});return t}_contextMenuBindListeners(e=null){this.props.hasOwnProperty(this.contextMenuProp)&&(this.control.hostElement.style.display="none");const t=e||this._contextMenuGetElements(this.props[this.contextMenuProp]),o=[];t.forEach(e=>{let t=null;if(e){t=t=>{if(wjcCore.closest(t.target,"[disabled]"))return;const o=this.control;if(o&&o.dropDown){t.preventDefault();t.stopPropagation();o.owner=e;o.show(t)}};e.addEventListener("contextmenu",t)}o.push(t)});this._contextMenuData={elements:t,listeners:o}}_contextMenuUnbindListeners(){const e=this._contextMenuData;for(let t in e.elements||[]){const o=e.elements[t];if(o){o.removeEventListener("contextmenu",e.listeners[t]);const n=this.control;if(n.owner===o&&n.isDroppedDown){n.owner=void 0;n.hide()}}}this._contextMenuData={}}}exports.Menu=Menu;class MenuItem extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,null,{objectProps:["value","cmd","cmdParam"]});this._parentProp="itemsSource";this._siblingId="menuItemDir";this.value=null;this.cmd=null;this.cmdParam=null}_createControl(){const e=this.parent.control;1==e.itemsSource.length&&e.selectedIndex<0&&(e.selectedIndex=0);e.displayMemberPath||(e.displayMemberPath="header");e.selectedValuePath||(e.selectedValuePath="value");e.commandPath||(e.commandPath="cmd");e.commandParameterPath||(e.commandParameterPath="cmdParam");return this}_renderImpl(){return React.createElement("div",{style:{display:"none"},ref:this._hostRef},React.createElement("div",{ref:e=>this.contentRoot=e},this.props.children))}added(e){}}exports.MenuItem=MenuItem;class MenuSeparator extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,null);this._parentProp="itemsSource";this._siblingId="menuItemDir"}_createControl(){return this}_renderImpl(){return React.createElement("div",{style:{display:"none"},ref:this._hostRef},React.createElement("div",{ref:e=>this.contentRoot=e,style:{width:"100%",height:"1px",backgroundColor:"lightgray"}},this.props.children))}added(e){wjcCore.addClass(e,"wj-state-disabled")}}exports.MenuSeparator=MenuSeparator;class ItemTemplate{constructor(e){this._templateItems=[];this.component=e;this.ownerControl=e.control;this.wjItemTemplate=this.component.props.wjItemTemplate;this.listBox=this._getListBox(this.ownerControl);this._attachToComponent();this._attachToControl()}_attachToComponent(){this.component._afterRender.addHandler(this._afterRender,this);this.component._beforeWillUnmount.addHandler(this._beforeWillUnmount,this)}_beforeWillUnmount(){this.component._afterRender.removeHandler(this._afterRender,this);this.component._beforeWillUnmount.removeHandler(this._beforeWillUnmount,this);this._destroyTemplateItems()}_afterRender(){if(null==this.component.props.wjItemTemplate&&wjcCore.isFunction(this.wjItemTemplate)){this.wjItemTemplate=null;this._templateItems.forEach(e=>{ReactDOM.unmountComponentAtNode(e.itemEl);setTimeout(()=>{const t=wjcCore.isString(e.item)?e.item:e.item[this.listBox.displayMemberPath];e.itemEl.textContent=t})})}else if(wjcCore.isFunction(this.component.props.wjItemTemplate)){this.wjItemTemplate=this.component.props.wjItemTemplate;this._templateItems.forEach(e=>{ReactDOM.render(this._createItemElTpl(e),e.itemEl)})}}_attachToControl(){this.listBox.formatItem.addHandler(this._fmtItem,this);this.listBox.loadingItems.addHandler(this._destroyTemplateItems,this);this.ownerControl.invalidate()}_fmtItem(e,t){const o=t.item,n={control:e,item:t.data,itemIndex:t.index};this._templateItems.push(Object.assign({},n,{itemEl:o}));if(wjcCore.isFunction(this.wjItemTemplate)){o.textContent="";ReactDOM.render(this._createItemElTpl(n),o)}}_getListBox(e){return e instanceof wjcInput.ListBox?e:e.listBox}_destroyTemplateItems(){wjcCore.isFunction(this.wjItemTemplate)&&this._templateItems.forEach(e=>{ReactDOM.unmountComponentAtNode(e.itemEl)});this._templateItems=[]}_createItemElTpl(e){return React.createElement("div",{},this.wjItemTemplate({control:e.control,item:e.item,itemIndex:e.itemIndex}))}}class Popup extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.Popup)}_renderImpl(){return React.createElement("div",{ref:this._hostRef},this.props.children)}}exports.Popup=Popup;class CollectionViewNavigator extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcInput.CollectionViewNavigator,{objectProps:["cv"]})}}exports.CollectionViewNavigator=CollectionViewNavigator;