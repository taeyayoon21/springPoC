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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcGrid=require("wijmo/wijmo.grid");let _wj_ns_exists_17=!0;class WjcFlexGrid extends wjcGrid.FlexGrid{constructor(){super(document.createElement("div"));this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcFlexGrid=WjcFlexGrid;_wj_ns_exists_17&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-flex-grid",WjcFlexGrid);class WjcFlexGridColumn extends HTMLElement{constructor(){super();this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}_beforeInitParent(){let e=this.parentElement.control;if(e.autoGenerateColumns){e.autoGenerateColumns=!1;e.columns.clear()}}}WjcFlexGridColumn.wrappedClass=()=>wjcGrid.Column;WjcFlexGridColumn.parentProp="columns";exports.WjcFlexGridColumn=WjcFlexGridColumn;_wj_ns_exists_17&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-flex-grid-column",WjcFlexGridColumn);