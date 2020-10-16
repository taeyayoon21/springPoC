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

import{ComponentBase}from"wijmo/wijmo.react.base";import*as ReactDOM from"react-dom";import*as wjcCore from"wijmo/wijmo";import*as wjcGridDetail from"wijmo/wijmo.grid.detail";export class FlexGridDetail extends ComponentBase{constructor(e){super(e,wjcGridDetail.FlexGridDetailProvider);this._parentInCtor=!0;this._renderedCells=[];this._destroyCell=this._destroyCell.bind(this)}_onBeforeWillUnmount(e){super._onBeforeWillUnmount(e);this._unmountRenderedCells()}_initParent(){this._setTemplateRelatedProps(this.props);super._initParent()}componentDidUpdate(e){super.componentDidUpdate(e);this.props.template!==this._template&&this._setTemplateRelatedProps(this.props);this._template?this._renderedCells.forEach(e=>{const t=e.cell,r=this._template(this._getTemplateContext(e.row));ReactDOM.render(r,t)}):this._unmountRenderedCells()}_setTemplateRelatedProps(e){const t=this.control,r=this._template=e.template;if(r){t.createDetailCell=this._getCellCreator(r);t.disposeDetailCell=this._destroyCell}else{t.createDetailCell=e.createDetailCell;t.disposeDetailCell=e.disposeDetailCell}}_getTemplateContext(e){return{row:e,item:e.dataItem,provider:this.control}}_unmountRenderedCells(){this._renderedCells.forEach(e=>{ReactDOM.unmountComponentAtNode(e.cell)});this._renderedCells=[]}_getCellCreator(e){return t=>{const r=document.createElement("div"),l=e(this._getTemplateContext(t));ReactDOM.render(l,r);this._renderedCells.push({row:t,cell:r});return r}}_destroyCell(e){const t=this.control.grid.rows[e.index-1];let r=-1;this._renderedCells.some((e,l)=>e.row===t&&!!((r=l)+1));wjcCore.assert(-1!==r,"Main row rendered cell is not found");ReactDOM.unmountComponentAtNode(this._renderedCells[r].cell);this._renderedCells.splice(r,1);return!0}}