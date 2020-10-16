/*!
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
/**
 * {@module wijmo.react.grid}
 * Wijmo interop module for
 * <a href="https://reactjs.org/" target="_blank">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an {@link InputNumber} control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://reactjs.org/docs/react-component.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
import * as React from 'react';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcInteropGrid from 'wijmo/wijmo.interop.grid';
/**
 * Represents a cell template types enumeration.
 */
export import CellTemplateType = wjcInteropGrid.GridCellTemplateType;
/**
 * React component that encapsulates the {@link wijmo.grid.FlexGrid} control.
 * The example below shows how to instantiate and initialize a
 * {@link wijmo.grid.FlexGrid} control in JSX:
 *
 * <pre>&lt;Wj.FlexGrid
 *   autoGenerateColumns={ false }
 *   columns={[
 *     { binding: 'name', header: 'Name' },
 *     { binding: 'sales', header: 'Sales', format: 'c0' },
 *     { binding: 'expenses', header: 'Expenses', format: 'c0' },
 *     { binding: 'active', header: 'Active' },
 *     { binding: 'date', header: 'Date' }
 *   ]}
 *   itemsSource={ this.state.data } /&gt;</pre>
 *
 * The code sets the <b>autoGenerateColumns</b> property to false, then
 * sets the <b>columns</b> property, and finally sets the <b>itemsSource</b>
 * property. This order is important, it prevents the grid from automatically
 * generating the columns.
 */
export declare class FlexGrid extends ComponentBase {
    constructor(props: any);
    protected _createControl(): any;
}
/**
 * React component that represents a {@link wijmo.grid.Column} in a {@link wijmo.react.grid.FlexGrid}.
 */
export declare class FlexGridColumn extends ComponentBase {
    _parentProp: string;
    constructor(props: any);
    protected _initParent(): void;
}
export interface ICellTemplateContext {
    row: wjcGrid.Row;
    col: wjcGrid.Column;
    item: any;
    value: any;
    values: any;
}
export declare type CellTemplateRender = (context: ICellTemplateContext) => any;
/**
* React component for the {@link FlexGrid} cell templates.
*
* The <b>FlexGridCellTemplate</b> component defines a template for a certain
* cell type in {@link FlexGrid}. The template element must contain a <b>cellType</b> property that
* specifies the {@link wijmo.react.grid.CellTemplateType}. Depending on the template's cell type,
* the <b>FlexGridCellTemplate</b> element must be a child
* of either {@link wijmo.react.grid.FlexGrid}
* or {@link wijmo.react.grid.FlexGridColumn} components.
*
* Column-specific cell templates must be contained in <b>FlexGridColumn</b>
* components, and cells that are not column-specific (like row header or top left cells)
* must be contained in the <b>FlexGrid</b> component.
*
* The content of cells is defined using the <b>template</b> <i>render prop</i>, which receives
* a render function that should return a virtual element tree representing the cell content.
* The function has the <b>context</b> parameter where the data context of each certain cell is
* passed. This is an object with the <b>col</b>, <b>row</b>, and <b>item</b> properties,
* which refer to the {@link Column}, {@link Row}, and <b>Row.dataItem</b> objects pertaining to the cell.
*
* For cell types like <b>Group</b> and <b>CellEdit</b>, an additional <b>value</b>
* context property containing an unformatted cell value is provided.
*
* For example, here is a
* {@link FlexGrid} control with templates for row header cells and, regular
* and column header cells of the Country column:
*
* ```html
* <!-- component.html -->
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="RowHeader"
*       template={ (context) => context.row.index + 1 } />
*   <wjGrid.FlexGridCellTemplate
*       cellType="RowHeaderEdit"
*       template={ (context) => '...' } />
*
*   <wjGrid.FlexGridColumn header="Country" binding="country">
*     <wjGrid.FlexGridCellTemplate
*           cellType="ColumnHeader"
*           template={ (context) => {
*               return <React.Fragment>
*                   <img src="resources/globe.png" />
*                   {context.col.header}
*               </React.Fragment>
*               }
*           }
*      />
*     <wjGrid.FlexGridCellTemplate
*           cellType="Cell"
*           template={ (context) => {
*               return <React.Fragment>
*                  <img src={`resources/${context.item.country}.png`} />
*                  {context.item.country}
*               </React.Fragment>
*           } }
*       />
*   </wjGrid.FlexGridColumn>
*   <wjGrid.FlexGridColumn header="Sales" binding="sales"></wjGrid.FlexGridColumn>
* </wjGrid.FlexGrid>
* ```
*
* The <b>FlexGridCellTemplate</b> directive supports the following properties:
*
* <dl class="dl-horizontal">
*   <dt>cellType</dt>
*   <dd>
*     The <b>CellTemplateType</b> value defining the type of cell to which the template is applied.
*   </dd>
*   <dt>autoSizeRows</dt>
*   <dd>
*     Indicates whether the cell template will increase grid's default row height
*     to accomodate cells content. Defaults to true.
*   </dd>
*   <dt>cellOverflow</dt>
*   <dd>
*     Defines the <b>style.overflow</b> property value for cells.
*   </dd>
*   <dt>forceFullEdit</dt>
*   <dd>
*     For cell edit templates, indicates whether cell editing forcibly starts in full edit mode,
*     regardless of how the editing was initiated. In full edit mode pressing cursor keys don't finish editing.
*     Defaults to true.
*   </dd>
* </dl>
*
* The <b>cellType</b> attribute takes any of the following enumerated values:
*
* <b>Cell</b>
*
* Defines a regular (data) cell template. Must be a child of the {@link wijmo.react.grid.FlexGridColumn} component.
* For example, this cell template shows flags in the cells of Country column:
*
* ```html
* <wjGrid.FlexGridColumn header="Country" binding="country">
*   <wjGrid.FlexGridCellTemplate
*       cellType="Cell"
*       template={ (context) => {
*           return <React.Fragment>
*              <img src={`resources/${context.item.country}.png`} />
*              {context.item.country}
*           </React.Fragment>
*       }
*    }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* If <b>Group</b> template is not provided for a hierarchical {@link FlexGrid} (that is, one with the <b>childItemsPath</b> property
* specified), non-header cells in group rows of
* this {@link Column} also use this template.
*
* <b>CellEdit</b>
*
* Defines a template for a cell in edit mode. Must be a child of the {@link wijmo.react.grid.FlexGridColumn} component.
* This cell type has an additional <b>context.value</b> property. It contains the
* original cell value before editing, and the updated value after editing.
*
* For example, here is a template that uses the Wijmo {@link InputNumber} control as an editor
* for the "Sales" column:
* ```html
* <wjGrid.FlexGridColumn header="Sales" binding="sales">
*   <wjGrid.FlexGridCellTemplate
*       cellType="CellEdit"
*       template={ (context) => {
*            return <wjInput.InputNumber
*                step={1}
*                value={context.value}
*                valueChanged={(inpNum: wjcInput.InputNumber) =>
*                    context.value = inpNum.value
*                } />
*            }
*       }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* <b>ColumnHeader</b>
*
* Defines a template for a column header cell. Must be a child of the {@link wijmo.react.grid.FlexGridColumn} component.
* For example, this template adds an image to the header of the "Country" column:
*
* ```html
* <wjGrid.FlexGridColumn header="Country" binding="country">
*   <wjGrid.FlexGridCellTemplate
*         cellType="ColumnHeader"
*         template={ (context) => {
*             return <React.Fragment>
*                 <img src="resources/globe.png" />
*                 {context.col.header}
*             </React.Fragment>
*             }
*         }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* <b>RowHeader</b>
*
* Defines a template for a row header cell. Must be a child of the {@link wijmo.react.grid.FlexGrid} component.
* For example, this template shows row indices in the row headers:
*
* ```html
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="RowHeader"
*       template={ (context) => context.row.index + 1 } />
* </wjGrid.FlexGrid>
* ```
*
* Note that this template is applied to a row header cell, even if it is in a row that is
* in edit mode. In order to provide an edit-mode version of a row header cell with alternate
* content, define the <b>RowHeaderEdit</b> template.
*
* <b>RowHeaderEdit</b>
*
* Defines a template for a row header cell in edit mode. Must be a child of the
* {@link wijmo.react.grid.FlexGrid} component. For example, this template shows dots in the header
* of rows being edited:
*
* ```html
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="RowHeaderEdit"
*       template={ (context) => '...' } />
* </wjGrid.FlexGrid>
* ```
*
* Use the following <b>RowHeaderEdit</b> template to add the standard edit-mode indicator to cells where
* the <b>RowHeader</b> template applies:
*
* ```html
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="RowHeaderEdit"
*       template={ (context) => '\u270e\ufe0e' } />
* </wjGrid.FlexGrid>
* ```
*
* <b>TopLeft</b>
*
* Defines a template for the top left cell. Must be a child of the {@link wijmo.react.grid.FlexGrid} component.
* For example, this template shows a down/right glyph in the top-left cell of the grid:
*
* ```html
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="TopLeft"
*       template={ (context) => {
*           return <span class="wj-glyph-down-right"></span>
*       } }
*   />
* </wjGrid.FlexGrid>
* ```
*
* <b>GroupHeader</b>
*
* Defines a template for a group header cell in a {@link GroupRow}. Must be a child of
* the {@link wijmo.react.grid.FlexGridColumn} component.
*
* The <b>context.row</b> property contains an instance of the <b>GroupRow</b> class. If the grouping comes
* from {@link CollectionView}, the <b>context.item</b> property references the {@link CollectionViewGroup} object.
*
* For example, this template uses a checkbox element as an expand/collapse toggle:
*
* ```html
* <wjGrid.FlexGridColumn header="Country" binding="country">
*   <wjGrid.FlexGridCellTemplate
*       cellType="GroupHeader"
*       template={ (context) => {
*          return <React.Fragment>
*            <input type="checkbox"
*                checked={context.row.isCollapsed}
*                onChange={e =>
*                    context.row.isCollapsed = e.target.checked as boolean
*                } />
*            {context.item.name} ({context.item.items.length} items)
*          </React.Fragment>
*          }
*        }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* <b>Group</b>
*
* Defines a template for a regular cell (not a group header) in a {@link GroupRow}. Must be a child of the
* {@link wijmo.react.grid.FlexGridColumn} component. This cell type has an additional <b>context.value</b>
* property. In cases where columns have the <b>aggregate</b> property specified, it contains the unformatted
* aggregate value.
*
* For example, this template shows aggregate's value and kind for group row cells in the "Sales"
* column:
*
* ```html
* <wjGrid.FlexGridColumn header="Sales" binding="sales" aggregate="Avg">
*   <wjGrid.FlexGridCellTemplate
*       cellType="Group"
*       template={ (context) => {
*          return <React.Fragment>
*            Average: {wjcCore.Globalize.formatNumber(context.value, 'N0')}
*          </React.Fragment>
*          }
*        }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* <b>ColumnFooter</b>
*
* Defines a template for a regular cell in a <b>columnFooters</b> panel. Must be a child of the
* {@link wijmo.react.grid.FlexGridColumn} component. This cell type provides an additional <b>context.value</b>
* property available for binding that contains an aggregated cell value.
*
* For example, this template shows aggregate's value and kind for a footer cell in the "Sales"
* column:
*
* ```html
* <wjGrid.FlexGridColumn header="Sales" binding="sales" aggregate="Avg">
*   <wjGrid.FlexGridCellTemplate
*       cellType="ColumnFooter"
*       template={ (context) => {
*          return <React.Fragment>
*            Average: {wjcCore.Globalize.formatNumber(context.value, 'N0')}
*          </React.Fragment>
*          }
*        }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* <b>BottomLeft</b>
*
* Defines a template for the bottom left cells (at the intersection of the row header and column footer cells).
* Must be a child of the {@link wijmo.react.grid.FlexGrid} component.
* For example, this template shows a sigma glyph in the bottom-left cell of the grid:
*
* ```html
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="BottomLeft"
*       template={(context) => <span>&#931;</span>} />
* </wjGrid.FlexGrid>
* ```
*
* <b>NewCellTemplate</b>
*
* Defines a cell in a new row template. Must be a child of the {@link wijmo.react.grid.FlexGridColumn} component.
* Note that the <b>context.item</b> property is undefined for this type of a cell.
* For example, this cell template shows a placeholder in the Date column's cell in the "new row" item:
*
* ```html
* <wjGrid.FlexGridColumn header="Date" binding="date">
*   <wjGrid.FlexGridCellTemplate
*       cellType="NewCellTemplate"
*       template={ (context) => 'Enter a date here' } />
* </wjGrid.FlexGridColumn>
* ```
*/
export declare class FlexGridCellTemplate extends React.Component<any, any> {
    static readonly _CellRenderFuncProp: string;
    grid: wjcGrid.FlexGrid;
    column: wjcGrid.Column;
    ownerControl: wjcGrid.FlexGrid | wjcGrid.Column;
    cellType: CellTemplateType;
    readonly cellOverflow: string;
    readonly autoSizeRows: boolean;
    readonly forceFullEdit: boolean;
    readonly valuePaths: Object;
    readonly template: CellTemplateRender;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any): void;
    render(): any;
    private _attachToControl;
    private _detachFromControl;
}
