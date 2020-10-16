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
 * {@module wijmo.react.input}
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
import * as wjcCore from 'wijmo/wijmo';
/**
 * React component that encapsulates the {@link wijmo.input.ListBox} control.
 */
export declare class ListBox extends ComponentBase {
    wjItemTemplate: ItemTemplateRender;
    constructor(props: any);
    componentDidMount(): any;
}
/**
 * React component that encapsulates the {@link wijmo.input.MultiSelectListBox} control.
 */
export declare class MultiSelectListBox extends ComponentBase {
    constructor(props: any);
}
/**
 * React component that encapsulates the {@link wijmo.input.ComboBox} control.
 */
export declare class ComboBox extends ComponentBase {
    wjItemTemplate: ItemTemplateRender;
    constructor(props: any);
    componentDidMount(): any;
}
/**
 * React component that encapsulates the {@link wijmo.input.AutoComplete} control.
 */
export declare class AutoComplete extends ComponentBase {
    constructor(props: any);
}
/**
 * React component that encapsulates the {@link wijmo.input.Calendar} control.
 */
export declare class Calendar extends ComponentBase {
    constructor(props: any);
}
/**
 * React component that encapsulates the {@link wijmo.input.ColorPicker} control.
 */
export declare class ColorPicker extends ComponentBase {
    constructor(props: any);
}
/**
 * React component that encapsulates the {@link wijmo.input.InputMask} control.
 */
export declare class InputMask extends ComponentBase {
    constructor(props: any);
}
/**
 * React component that encapsulates the {@link wijmo.input.InputColor} control.
 */
export declare class InputColor extends ComponentBase {
    constructor(props: any);
}
/**
 * React component that encapsulates the {@link wijmo.input.MultiSelect} control.
 */
export declare class MultiSelect extends ComponentBase {
    wjItemTemplate: ItemTemplateRender;
    constructor(props: any);
    componentDidMount(): any;
}
/**
 * React component that encapsulates the {@link wijmo.input.MultiAutoComplete} control.
 */
export declare class MultiAutoComplete extends ComponentBase {
    constructor(props: any);
}
/**
 * React component that encapsulates the {@link wijmo.input.InputNumber} control.
 */
export declare class InputNumber extends ComponentBase {
    constructor(props: any);
}
/**
 * React component that encapsulates the {@link wijmo.input.InputDate} control.
 */
export declare class InputDate extends ComponentBase {
    constructor(props: any);
}
/**
 * React component that encapsulates the {@link wijmo.input.InputTime} control.
 */
export declare class InputTime extends ComponentBase {
    constructor(props: any);
}
/**
 * React component that encapsulates the {@link wijmo.input.InputDateTime} control.
 */
export declare class InputDateTime extends ComponentBase {
    constructor(props: any);
}
/**
 * React component that encapsulates the {@link wijmo.input.Menu} control.
 */
export declare class Menu extends ComponentBase {
    wjItemTemplate: ItemTemplateRender;
    private _definedHeader;
    private _value;
    private _contextMenuData;
    readonly contextMenuProp: string;
    constructor(props: any);
    value: any;
    componentDidMount(): any;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    protected _createControl(): any;
    private _updateHeader;
    private _fmtItem;
    private _contextMenuGetElementsIfChanged;
    private _contextMenuGetElements;
    private _contextMenuBindListeners;
    private _contextMenuUnbindListeners;
}
/**
 * React component that represents an item in a {@link wijmo.react.input.Menu}.
 */
export declare class MenuItem extends ComponentBase {
    _parentProp: string;
    _siblingId: string;
    contentRoot: HTMLElement;
    value: any;
    cmd: any;
    cmdParam: any;
    constructor(props: any);
    protected _createControl(): any;
    _renderImpl(): any;
    added(toItem: HTMLElement): void;
}
/**
 * React component that represents an item separator in a {@link wijmo.react.input.Menu}.
 */
export declare class MenuSeparator extends ComponentBase {
    _parentProp: string;
    _siblingId: string;
    contentRoot: HTMLElement;
    constructor(props: any);
    protected _createControl(): any;
    _renderImpl(): any;
    added(toItem: HTMLElement): void;
}
/**
* TBD
*/
export interface ItemTemplateContext {
    control: wjcCore.Control;
    item: any;
    itemIndex: number;
}
/**
 * TBD
 */
export declare type ItemTemplateRender = (context: ItemTemplateContext) => any;
/**
 * React component that encapsulates the {@link wijmo.input.Popup} control.
 */
export declare class Popup extends ComponentBase {
    constructor(props: any);
    _renderImpl(): any;
}
/**
 * React component that encapsulates the {@link wijmo.input.CollectionViewNavigator} control.
 */
export declare class CollectionViewNavigator extends ComponentBase {
    constructor(props: any);
}
