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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcCore=require("wijmo/wijmo"),wjcInput=require("wijmo/wijmo.input");class WjListBoxBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjListBoxBehavior.tag="wj-list-box";WjListBoxBehavior.props=["isDisabled","isContentHtml","maxHeight","selectedValuePath","itemFormatter","displayMemberPath","checkedMemberPath","caseSensitiveSearch","itemsSource","showGroups","selectedIndex","selectedItem","selectedValue","checkedItems"];WjListBoxBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","formatItem","itemsChanged","itemChecked"];WjListBoxBehavior.changeEvents={selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],checkedItemsChanged:["checkedItems"]};WjListBoxBehavior.classCtor=function(){return wjcInput.ListBox};WjListBoxBehavior.modelProp="selectedValue";exports.WjListBox=WjListBoxBehavior.register();function registerV3WjListBox(e){e.component(WjListBoxBehavior.tag,exports.WjListBox)}class WjMultiSelectListBoxBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjMultiSelectListBoxBehavior.tag="wj-multi-select-list-box";WjMultiSelectListBoxBehavior.props=["isDisabled","itemsSource","displayMemberPath","isContentHtml","showGroups","checkOnFilter","showFilterInput","filterInputPlaceholder","showSelectAllCheckbox","selectAllLabel","checkedMemberPath","checkedItems"];WjMultiSelectListBoxBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjMultiSelectListBoxBehavior.changeEvents={checkedItemsChanged:["checkedItems"]};WjMultiSelectListBoxBehavior.classCtor=function(){return wjcInput.MultiSelectListBox};WjMultiSelectListBoxBehavior.modelProp="checkedItems";exports.WjMultiSelectListBox=WjMultiSelectListBoxBehavior.register();function registerV3WjMultiSelectListBox(e){e.component(WjMultiSelectListBoxBehavior.tag,exports.WjMultiSelectListBox)}class WjComboBoxBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjComboBoxBehavior.tag="wj-combo-box";WjComboBoxBehavior.props=["isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","clickAction","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","caseSensitiveSearch","itemsSource","text","selectedIndex","selectedItem","selectedValue"];WjComboBoxBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","isDroppedDownChanging","itemsSourceChanged","formatItem"];WjComboBoxBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"]};WjComboBoxBehavior.classCtor=function(){return wjcInput.ComboBox};WjComboBoxBehavior.modelProp="selectedValue";exports.WjComboBox=WjComboBoxBehavior.register();function registerV3WjComboBox(e){e.component(WjComboBoxBehavior.tag,exports.WjComboBox)}class WjAutoCompleteBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjAutoCompleteBehavior.tag="wj-auto-complete";WjAutoCompleteBehavior.props=["isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","clickAction","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","caseSensitiveSearch","delay","maxItems","minLength","cssMatch","itemsSourceFunction","searchMemberPath","itemsSource","text","selectedIndex","selectedItem","selectedValue"];WjAutoCompleteBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","isDroppedDownChanging","itemsSourceChanged","formatItem"];WjAutoCompleteBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"]};WjAutoCompleteBehavior.classCtor=function(){return wjcInput.AutoComplete};WjAutoCompleteBehavior.modelProp="selectedValue";exports.WjAutoComplete=WjAutoCompleteBehavior.register();function registerV3WjAutoComplete(e){e.component(WjAutoCompleteBehavior.tag,exports.WjAutoComplete)}class WjCalendarBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjCalendarBehavior.tag="wj-calendar";WjCalendarBehavior.props=["isDisabled","monthView","showHeader","itemFormatter","itemValidator","firstDayOfWeek","max","min","formatYearMonth","formatDayHeaders","formatDays","formatYear","formatMonths","selectionMode","isReadOnly","repeatButtons","showYearPicker","value","displayMonth"];WjCalendarBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","formatItem"];WjCalendarBehavior.changeEvents={valueChanged:["value"],displayMonthChanged:["displayMonth"]};WjCalendarBehavior.classCtor=function(){return wjcInput.Calendar};WjCalendarBehavior.modelProp="value";exports.WjCalendar=WjCalendarBehavior.register();function registerV3WjCalendar(e){e.component(WjCalendarBehavior.tag,exports.WjCalendar)}class WjColorPickerBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjColorPickerBehavior.tag="wj-color-picker";WjColorPickerBehavior.props=["isDisabled","showAlphaChannel","showColorString","palette","value"];WjColorPickerBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjColorPickerBehavior.changeEvents={valueChanged:["value"]};WjColorPickerBehavior.classCtor=function(){return wjcInput.ColorPicker};WjColorPickerBehavior.modelProp="value";exports.WjColorPicker=WjColorPickerBehavior.register();function registerV3WjColorPicker(e){e.component(WjColorPickerBehavior.tag,exports.WjColorPicker)}class WjInputMaskBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjInputMaskBehavior.tag="wj-input-mask";WjInputMaskBehavior.props=["isDisabled","mask","isRequired","isReadOnly","promptChar","placeholder","inputType","rawValue","value"];WjInputMaskBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjInputMaskBehavior.changeEvents={valueChanged:["rawValue","value"]};WjInputMaskBehavior.classCtor=function(){return wjcInput.InputMask};WjInputMaskBehavior.modelProp="value";exports.WjInputMask=WjInputMaskBehavior.register();function registerV3WjInputMask(e){e.component(WjInputMaskBehavior.tag,exports.WjInputMask)}class WjInputColorBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjInputColorBehavior.tag="wj-input-color";WjInputColorBehavior.props=["isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","clickAction","showAlphaChannel","showColorString","value","text"];WjInputColorBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","isDroppedDownChanging"];WjInputColorBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],valueChanged:["value"]};WjInputColorBehavior.classCtor=function(){return wjcInput.InputColor};WjInputColorBehavior.modelProp="value";exports.WjInputColor=WjInputColorBehavior.register();function registerV3WjInputColor(e){e.component(WjInputColorBehavior.tag,exports.WjInputColor)}class WjMultiSelectBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjMultiSelectBehavior.tag="wj-multi-select";WjMultiSelectBehavior.props=["isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","clickAction","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","caseSensitiveSearch","checkedMemberPath","maxHeaderItems","headerFormat","headerFormatter","showSelectAllCheckbox","selectAllLabel","showFilterInput","filterInputPlaceholder","checkOnFilter","itemsSource","checkedItems","text","selectedIndex","selectedItem","selectedValue"];WjMultiSelectBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","isDroppedDownChanging","itemsSourceChanged","formatItem"];WjMultiSelectBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],checkedItemsChanged:["checkedItems"]};WjMultiSelectBehavior.classCtor=function(){return wjcInput.MultiSelect};WjMultiSelectBehavior.modelProp="checkedItems";exports.WjMultiSelect=WjMultiSelectBehavior.register();function registerV3WjMultiSelect(e){e.component(WjMultiSelectBehavior.tag,exports.WjMultiSelect)}class WjMultiAutoCompleteBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjMultiAutoCompleteBehavior.tag="wj-multi-auto-complete";WjMultiAutoCompleteBehavior.props=["isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","clickAction","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","caseSensitiveSearch","delay","maxItems","minLength","cssMatch","itemsSourceFunction","searchMemberPath","maxSelectedItems","selectedItems","itemsSource","selectedMemberPath","text","selectedIndex","selectedItem","selectedValue"];WjMultiAutoCompleteBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","isDroppedDownChanging","itemsSourceChanged","formatItem"];WjMultiAutoCompleteBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],selectedItemsChanged:["selectedItems"]};WjMultiAutoCompleteBehavior.classCtor=function(){return wjcInput.MultiAutoComplete};WjMultiAutoCompleteBehavior.modelProp="selectedItems";exports.WjMultiAutoComplete=WjMultiAutoCompleteBehavior.register();function registerV3WjMultiAutoComplete(e){e.component(WjMultiAutoCompleteBehavior.tag,exports.WjMultiAutoComplete)}class WjInputNumberBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjInputNumberBehavior.tag="wj-input-number";WjInputNumberBehavior.props=["isDisabled","showSpinner","repeatButtons","max","min","step","isRequired","placeholder","inputType","format","isReadOnly","value","text"];WjInputNumberBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjInputNumberBehavior.changeEvents={valueChanged:["value"],textChanged:["text"]};WjInputNumberBehavior.classCtor=function(){return wjcInput.InputNumber};WjInputNumberBehavior.modelProp="value";exports.WjInputNumber=WjInputNumberBehavior.register();function registerV3WjInputNumber(e){e.component(WjInputNumberBehavior.tag,exports.WjInputNumber)}class WjInputDateBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjInputDateBehavior.tag="wj-input-date";WjInputDateBehavior.props=["isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","clickAction","selectionMode","format","mask","max","min","inputType","repeatButtons","showYearPicker","itemValidator","itemFormatter","text","value"];WjInputDateBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","isDroppedDownChanging"];WjInputDateBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],valueChanged:["value"]};WjInputDateBehavior.classCtor=function(){return wjcInput.InputDate};WjInputDateBehavior.modelProp="value";exports.WjInputDate=WjInputDateBehavior.register();function registerV3WjInputDate(e){e.component(WjInputDateBehavior.tag,exports.WjInputDate)}class WjInputTimeBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjInputTimeBehavior.tag="wj-input-time";WjInputTimeBehavior.props=["isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","clickAction","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","caseSensitiveSearch","max","min","step","format","mask","inputType","itemsSource","text","selectedIndex","selectedItem","selectedValue","value"];WjInputTimeBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","isDroppedDownChanging","itemsSourceChanged","formatItem"];WjInputTimeBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],valueChanged:["value"]};WjInputTimeBehavior.classCtor=function(){return wjcInput.InputTime};WjInputTimeBehavior.modelProp="value";exports.WjInputTime=WjInputTimeBehavior.register();function registerV3WjInputTime(e){e.component(WjInputTimeBehavior.tag,exports.WjInputTime)}class WjInputDateTimeBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjInputDateTimeBehavior.tag="wj-input-date-time";WjInputDateTimeBehavior.props=["isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","clickAction","selectionMode","format","mask","max","min","inputType","repeatButtons","showYearPicker","itemValidator","itemFormatter","timeMax","timeMin","timeStep","timeFormat","text","value"];WjInputDateTimeBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","isDroppedDownChanging"];WjInputDateTimeBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],valueChanged:["value"]};WjInputDateTimeBehavior.classCtor=function(){return wjcInput.InputDateTime};WjInputDateTimeBehavior.modelProp="value";exports.WjInputDateTime=WjInputDateTimeBehavior.register();function registerV3WjInputDateTime(e){e.component(WjInputDateTimeBehavior.tag,exports.WjInputDateTime)}class WjMenuBehavior extends wijmo_vue2_base_1.WjComponentBehavior{get value(){return this._value}set value(e){this._value=e;if(null!=e){this.control.selectedValue=e;this._updateHeader()}}_createControl(){const e=super._createControl();e.itemsSource=new wjcCore.ObservableArray;e.selectedIndex=0;e.listBox.formatItem.addHandler(this._fmtItem,this);e.invalidate();e.itemClicked.addHandler(e=>{this.value=this.control.selectedValue});return e}_updateControl(e,t){super._updateControl(e,t);if("header"===e){this._definedHeader=t;this._updateHeader()}"value"===e&&(this.value=t)}_updateHeader(){this.control.header=this._definedHeader||"";const e=this.control.selectedItem;if(null!=this.value&&e&&this.control.displayMemberPath){let t=null;if(e instanceof WjMenuItemBehavior){const o=e.contentRoot;t=o?o.innerHTML:e[this.control.displayMemberPath]}null!=t&&(this.control.header+=": <b>"+t+"</b>")}}_fmtItem(e,t){if(t.data instanceof WjMenuItemBehavior||t.data instanceof WjMenuSeparatorBehavior){t.item.textContent="";t.item.appendChild(t.data.contentRoot);t.data.added(t.item)}}}WjMenuBehavior.tag="wj-menu";WjMenuBehavior.props=["isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","clickAction","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","caseSensitiveSearch","header","commandParameterPath","commandPath","subItemsPath","openOnHover","closeOnLeave","isButton","itemsSource","text","selectedIndex","selectedItem","selectedValue","value"];WjMenuBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","isDroppedDownChanging","itemsSourceChanged","formatItem"];WjMenuBehavior.changeEvents={isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],itemClicked:["value"]};WjMenuBehavior.classCtor=function(){return wjcInput.Menu};WjMenuBehavior.modelProp="selectedValue";exports.WjMenu=WjMenuBehavior.register();function registerV3WjMenu(e){e.component(WjMenuBehavior.tag,exports.WjMenu)}class WjMenuItemBehavior extends wijmo_vue2_base_1.WjComponentBehavior{_createControl(){const e=this.parent.control;1==e.itemsSource.length&&e.selectedIndex<0&&(e.selectedIndex=0);e.displayMemberPath||(e.displayMemberPath="header");e.selectedValuePath||(e.selectedValuePath="value");e.commandPath||(e.commandPath="cmd");e.commandParameterPath||(e.commandParameterPath="cmdParam");this.contentRoot=this.component.$el.firstElementChild;this.component.$el.style.display="none";return this}added(e){}}WjMenuItemBehavior.tag="wj-menu-item";WjMenuItemBehavior.parentProp="itemsSource";WjMenuItemBehavior.siblingId="menuItemDir";WjMenuItemBehavior.props=["wjProperty","value","cmd","cmdParam"];WjMenuItemBehavior.events=["initialized"];WjMenuItemBehavior.render=function(e){if(wijmo_vue2_base_1.VueApi.isV3Plus){const e=wijmo_vue2_base_1.VueApi.h,t=this.$slots.default;return e("div",{},[e("div",{},t&&t())])}return e("div",[e("div",[this.$slots.default])])};exports.WjMenuItem=WjMenuItemBehavior.register();function registerV3WjMenuItem(e){e.component(WjMenuItemBehavior.tag,exports.WjMenuItem)}class WjMenuSeparatorBehavior extends wijmo_vue2_base_1.WjComponentBehavior{_createControl(){this.contentRoot=this.component.$el.firstElementChild;this.component.$el.style.display="none";return this}added(e){wjcCore.addClass(e,"wj-state-disabled")}}WjMenuSeparatorBehavior.tag="wj-menu-separator";WjMenuSeparatorBehavior.parentProp="itemsSource";WjMenuSeparatorBehavior.siblingId="menuItemDir";WjMenuSeparatorBehavior.props=["wjProperty"];WjMenuSeparatorBehavior.events=["initialized"];WjMenuSeparatorBehavior.render=function(e){const t={width:"100%",height:"1px","background-color":"lightgray"};if(wijmo_vue2_base_1.VueApi.isV3Plus){const e=wijmo_vue2_base_1.VueApi.h;return e("div",{},[e("div",{style:t})])}return e("div",[e("div",{style:t})])};exports.WjMenuSeparator=WjMenuSeparatorBehavior.register();function registerV3WjMenuSeparator(e){e.component(WjMenuSeparatorBehavior.tag,exports.WjMenuSeparator)}const WjItemTemplateDefinition={render:function(e){return wijmo_vue2_base_1.VueApi.isV3Plus?wijmo_vue2_base_1.VueApi.h("div"):e("div")},mounted:function(){const e=this.$parent;if(e){let t=e[wijmo_vue2_base_1.WjComponentBehavior._behProp];t._mountedCB(()=>{const e=t.control;this.ownerControl=e instanceof wjcInput.ListBox?e:e.listBox instanceof wjcInput.ListBox?e.listBox:void 0;this.itemComponents=[];const o=wijmo_vue2_base_1.VueApi.isV3Plus?this.$slots.default:this.$scopedSlots.default,i=this.ownerControl;if(i&&o){i.formatItem.addHandler((e,t)=>{const n=t.index;if(!this.itemComponents[n])if(wijmo_vue2_base_1.VueApi.isV3Plus){const e=wijmo_vue2_base_1.VueApi.h,r={parent:this.component,render:()=>e("div",{},o&&o({itemIndex:n,item:t.data,control:i}))},a=e(r);this.itemComponents[n]=t.item;t.item.textContent="";wijmo_vue2_base_1.VueApi.render(a,t.item)}else{const e=ItemTemplateComponentFactory(o,{itemIndex:n,item:t.data,control:this.ownerControl},this).$mount();this.itemComponents[n]=e;t.item.textContent="";t.item.appendChild(e.$el)}},this);this.ownerControl.loadingItems.addHandler(e=>{this._destroyItemComponents()})}})}},destroy(){this._destroyItemComponents()},methods:{_destroyItemComponents(){(this.itemComponents||[]).forEach(e=>{wijmo_vue2_base_1.VueApi.isV3Plus?wijmo_vue2_base_1.VueApi.render(null,e):e.$destroy()});this.itemComponents=[]}}},ItemTemplateComponentFactory=(e,t,o)=>{const i=new ItemTemplateComponent({parent:o});i.itemTemplate=e;i.itemData=t;return i},ItemTemplateComponent=wijmo_vue2_base_1.VueApi.extend({render:function(e){return e("div",{},this.itemTemplate&&this.itemTemplate(this.itemData))}}),WjItemTemplateTag="wj-item-template";exports.WjItemTemplate=wijmo_vue2_base_1.VueApi.isV3Plus?WjItemTemplateDefinition:wijmo_vue2_base_1.VueApi.component(WjItemTemplateTag,WjItemTemplateDefinition);function registerV3WjItemTemplate(e){e.component(WjItemTemplateTag,exports.WjItemTemplate)}class WjPopupBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjPopupBehavior.tag="wj-popup";WjPopupBehavior.props=["isDisabled","owner","showTrigger","hideTrigger","fadeIn","fadeOut","isDraggable","isResizable","dialogResultEnter","dialogResultSubmit","modal","removeOnHide"];WjPopupBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","showing","shown","hiding","hidden","resizing","sizeChanging","sizeChanged","resized","dragging","positionChanging","positionChanged","dragged"];WjPopupBehavior.classCtor=function(){return wjcInput.Popup};exports.WjPopup=WjPopupBehavior.register();function registerV3WjPopup(e){e.component(WjPopupBehavior.tag,exports.WjPopup)}class _CtxMenuUtils{constructor(){this.key="__wjCtxMenu"}get definition(){return wijmo_vue2_base_1.VueApi.isV3Plus?{mounted:this._bind.bind(this),updated:this._update.bind(this),unmounted:this._unbind.bind(this)}:{bind:this._bind.bind(this),update:this._update.bind(this),unbind:this._unbind.bind(this)}}_bind(e,t,o){const listener=i=>{if(wjcCore.closest(i.target,"[disabled]"))return;const n=this._getMenuControl(t,o);if(n&&n.dropDown){i.preventDefault();i.stopPropagation();n.owner=e;n.show(i)}};e.addEventListener("contextmenu",listener);e[this.key]={binding:t,listener:listener}}_unbind(e){const t=e[this.key]&&e[this.key].listener;t&&e.removeEventListener("contextmenu",t);e[this.key]=null}_update(e,t,o){const i=e[this.key]&&e[this.key].binding;if(!i||i.value!==t.value){this._unbind(e);this._bind(e,t,o)}}_getMenuControl(e,t){let o=null,i=null,n=e.value;if(null==n&&0===e.expression.indexOf("$refs.")){n=new wjcCore.Binding(e.expression).getValue(t.context)}wjcCore.isString(n)?i=document.getElementById(n):n instanceof HTMLElement&&(i=n);o=i?wjcCore.Control.getControl(i):n&&n.control||n;return wjcCore.tryCast(o,wjcInput.Menu)}}const wjContextMenuDefinition=(new _CtxMenuUtils).definition,WjContextMenuTag="wjContextMenu";exports.WjContextMenu=wijmo_vue2_base_1.VueApi.isV3Plus?wjContextMenuDefinition:wijmo_vue2_base_1.VueApi.directive(WjContextMenuTag,wjContextMenuDefinition);function registerV3WjContextMenu(e){e.directive(WjContextMenuTag,exports.WjContextMenu)}class WjCollectionViewNavigatorBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjCollectionViewNavigatorBehavior.tag="wj-collection-view-navigator";WjCollectionViewNavigatorBehavior.props=["isDisabled","cv","byPage","headerFormat","repeatButtons"];WjCollectionViewNavigatorBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjCollectionViewNavigatorBehavior.classCtor=function(){return wjcInput.CollectionViewNavigator};exports.WjCollectionViewNavigator=WjCollectionViewNavigatorBehavior.register();function registerV3WjCollectionViewNavigator(e){e.component(WjCollectionViewNavigatorBehavior.tag,exports.WjCollectionViewNavigator)}function registerInput(e){if(wijmo_vue2_base_1.VueApi.isV3Plus){registerV3WjListBox(e);registerV3WjMultiSelectListBox(e);registerV3WjComboBox(e);registerV3WjAutoComplete(e);registerV3WjCalendar(e);registerV3WjColorPicker(e);registerV3WjInputMask(e);registerV3WjInputColor(e);registerV3WjMultiSelect(e);registerV3WjMultiAutoComplete(e);registerV3WjInputNumber(e);registerV3WjInputDate(e);registerV3WjInputTime(e);registerV3WjInputDateTime(e);registerV3WjMenu(e);registerV3WjMenuItem(e);registerV3WjMenuSeparator(e);registerV3WjItemTemplate(e);registerV3WjPopup(e);registerV3WjContextMenu(e);registerV3WjCollectionViewNavigator(e)}}exports.registerInput=registerInput;