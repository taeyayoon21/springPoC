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

import{WjComponentBehavior}from"wijmo/wijmo.webcomponents.base";import*as wjcGridTransposed from"wijmo/wijmo.grid.transposed";let _wj_ns_exists_15=!0;export class WjcTransposedGrid extends wjcGridTransposed.TransposedGrid{constructor(){super(document.createElement("div"));this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}_wj_ns_exists_15&&WjComponentBehavior.register("wjc-transposed-grid",WjcTransposedGrid);export class WjcTransposedGridRow extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}_beforeInitParent(){let e=this.parentElement.control;if(e.autoGenerateRows){e.autoGenerateRows=!1;e._rowInfo.clear()}}}WjcTransposedGridRow.wrappedClass=()=>wjcGridTransposed.TransposedGridRow;WjcTransposedGridRow.parentProp="_rowInfo";_wj_ns_exists_15&&WjComponentBehavior.register("wjc-transposed-grid-row",WjcTransposedGridRow);