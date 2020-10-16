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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{Size,asNumber,isArray,Point,isDate,Rect,asBoolean,asEnum,ObservableArray,hasClass,Tooltip,NotifyCollectionChangedAction,_registerModule}from"wijmo/wijmo";import{DataPoint,SeriesVisibility,ChartTooltip}from"wijmo/wijmo.chart";import*as selfModule from"wijmo/wijmo.chart.annotation";export var AnnotationAttachment;!function(t){t[t.DataIndex=0]="DataIndex";t[t.DataCoordinate=1]="DataCoordinate";t[t.Relative=2]="Relative";t[t.Absolute=3]="Absolute"}(AnnotationAttachment||(AnnotationAttachment={}));export var AnnotationPosition;!function(t){t[t.Center=0]="Center";t[t.Top=1]="Top";t[t.Bottom=2]="Bottom";t[t.Left=4]="Left";t[t.Right=8]="Right"}(AnnotationPosition||(AnnotationPosition={}));var AnnotationBase=function(){function AnnotationBase(t){this._resetDefaultValue();this._copy(this,t)}Object.defineProperty(AnnotationBase.prototype,"attachment",{get:function(){return this._attachment},set:function(t){if((t=asEnum(t,AnnotationAttachment))!=this._attachment){this._attachment=t;this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(AnnotationBase.prototype,"point",{get:function(){return this._point},set:function(t){if(null!=t.x&&null!=t.y&&(t.x!==this._point.x||t.y!==this._point.y)){this._point=t;this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(AnnotationBase.prototype,"seriesIndex",{get:function(){return this._seriesIndex},set:function(t){if((t=asNumber(t,!1,!0))!=this._seriesIndex){this._seriesIndex=t;this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(AnnotationBase.prototype,"pointIndex",{get:function(){return this._pointIndex},set:function(t){if(t!==this._pointIndex){this._pointIndex=asNumber(t,!1,!0);this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(AnnotationBase.prototype,"position",{get:function(){return this._position},set:function(t){if(t!=this._position){this._position=t;this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(AnnotationBase.prototype,"offset",{get:function(){return this._offset},set:function(t){if(null!=t.x&&null!=t.y&&(t.x!==this._offset.x||t.y!==this._offset.y)){this._offset=t;this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(AnnotationBase.prototype,"style",{get:function(){null==this._style&&(this._style={});return this._style},set:function(t){if(t!=this._style){this._style=t;this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(AnnotationBase.prototype,"isVisible",{get:function(){return this._isVisible},set:function(t){if((t=asBoolean(t,!1))!=this._isVisible){this._isVisible=t;this._toggleVisibility(t)}},enumerable:!0,configurable:!0});Object.defineProperty(AnnotationBase.prototype,"tooltip",{get:function(){return this._tooltip},set:function(t){this._tooltip=t},enumerable:!0,configurable:!0});Object.defineProperty(AnnotationBase.prototype,"name",{get:function(){return this._name},set:function(t){this._name=t},enumerable:!0,configurable:!0});AnnotationBase.prototype.render=function(t){var e;this._element=t.startGroup(this._getCSSClass());t.fill="#88bde6";t.strokeWidth=1;t.stroke="#000000";this._render(t);t.endGroup();this._element[AnnotationBase._DATA_KEY]=this;this._isVisible?this._attachment===AnnotationAttachment.DataIndex&&(!(e=this._layer._chart.series[this._seriesIndex])||e.visibility!==SeriesVisibility.Legend&&e.visibility!==SeriesVisibility.Hidden||this._toggleVisibility(!1)):this._toggleVisibility(!1)};AnnotationBase.prototype.destroy=function(){};AnnotationBase.prototype._copy=function(t,e){for(var n in e)n in t&&this._processOptions(n,t,e)};AnnotationBase.prototype._processOptions=function(t,e,n){e[t]=n[t]};AnnotationBase.prototype._resetDefaultValue=function(){this._attachment=AnnotationAttachment.Absolute;this._point=new DataPoint(0,0);this._seriesIndex=0;this._pointIndex=0;this._position=AnnotationPosition.Center;this._offset=new Point(0,0);this._isVisible=!0;this._tooltip=""};AnnotationBase.prototype._toggleVisibility=function(t){var e=t?"visible":"hidden";this._element&&this._element.setAttribute("visibility",e)};AnnotationBase.prototype._getCSSClass=function(){return AnnotationBase._CSS_ANNOTATION};AnnotationBase.prototype._render=function(t){this._element=null};AnnotationBase.prototype._repaint=function(){this._layer&&this._layer._renderAnnotation(this)};AnnotationBase.prototype._convertPoint=function(t){var e,n,i,o,r,s,a,h=this._attachment,l=new Point;this._layer&&this._layer._chart&&(n=(e=this._layer._chart)._plotRect);switch(h){case AnnotationAttachment.DataIndex:if(!e.series||e.series.length<=this.seriesIndex)break;if(!(s=(r=e.series[this.seriesIndex])._getItem(this.pointIndex)))break;i=r.axisX||e.axisX;o=r.axisY||e.axisY;a=s[r.bindingX]||s.x;var _=s[r._getBinding(0)]||o.actualMin+.25;null!=r._getYOffset&&(_=r._getYOffset(this.pointIndex));if("string"==typeof a){a=this.pointIndex;null!=r._getXOffset&&(a+=r._getXOffset())}l.x=this._convertDataToLen(n.width,i,a);l.y=this._convertDataToLen(n.height,o,_,!0);break;case AnnotationAttachment.DataCoordinate:i=e.axisX;o=e.axisY;l.x=this._convertDataToLen(n.width,i,t.x);l.y=this._convertDataToLen(n.height,o,t.y,!0);break;case AnnotationAttachment.Relative:l.x=n.width*t.x;l.y=n.height*t.y;break;case AnnotationAttachment.Absolute:default:l.x=t.x;l.y=t.y}return l};AnnotationBase.prototype._convertDataToLen=function(t,e,n,i){void 0===i&&(i=!1);var o=null==e.min?e.actualMin:e.min,r=null==e.max?e.actualMax:e.max,s=e._getLogBase();e.reversed&&(i=!i);if(s){if(n<=0)return NaN;var a=Math.log(r/o);return i?t*(1-Math.log(n/o)/a):t*Math.log(n/o)/a}return i?t*(1-(n-o)/(r-o)):t*(n-o)/(r-o)};AnnotationBase.prototype._renderCenteredText=function(t,e,n,i,o,r){var s,a;if(this._isValidPoint(n)){o?e.drawStringRotated(t,n,n,o,i,r):e.drawString(t,n,i,r);if(s=this._element.querySelector("text")){a=s.getBBox();s.setAttribute("x",(n.x-a.width/2).toFixed(1));s.setAttribute("y",(n.y+a.height/6).toFixed(1))}}};AnnotationBase.prototype._adjustOffset=function(t,e){t.x=t.x+e.x;t.y=t.y+e.y};AnnotationBase.prototype._getOffset=function(t){var e=this._getPositionOffset(t);return new Point(this._offset.x+e.x,this._offset.y+e.y)};AnnotationBase.prototype._getPositionOffset=function(t){var e=new Point(0,0),n=this.position,i=this._getSize(t);(n&AnnotationPosition.Top)===AnnotationPosition.Top?e.y-=i.height/2:(n&AnnotationPosition.Bottom)===AnnotationPosition.Bottom&&(e.y+=i.height/2);(n&AnnotationPosition.Left)===AnnotationPosition.Left?e.x-=i.width/2:(n&AnnotationPosition.Right)===AnnotationPosition.Right&&(e.x+=i.width/2);return e};AnnotationBase.prototype._getSize=function(t){return new Size};AnnotationBase.prototype._isValidPoint=function(t){return isFinite(t.x)&&isFinite(t.y)};AnnotationBase.prototype._measureString=function(t,e,n){var i,o=t;if(o._textGroup&&null==o._textGroup.parentNode){o._svg.appendChild(o._textGroup);i=o.measureString(e,n,null,this.style);o.endRender()}else i=o.measureString(e,n,null,this.style);return i};AnnotationBase._DATA_KEY="wj-chart-annotation";AnnotationBase._CSS_ANNOTATION="gcchart-annotation";AnnotationBase._CSS_ANNO_TEXT="anno-text";AnnotationBase._CSS_ANNO_SHAPE="anno-shape";return AnnotationBase}();export{AnnotationBase};var Text=function(t){__extends(Text,t);function Text(e){return t.call(this,e)||this}Text.prototype._resetDefaultValue=function(){t.prototype._resetDefaultValue.call(this);this._text="";this.position=AnnotationPosition.Top};Text.prototype._getCSSClass=function(){return t.prototype._getCSSClass.call(this)+" "+Text._CSS_TEXT};Object.defineProperty(Text.prototype,"text",{get:function(){return this._text},set:function(t){if(t!==this._text){this._text=t;this._repaint()}},enumerable:!0,configurable:!0});Text.prototype._render=function(t){var e,n=this._convertPoint(this.point);e=this._getOffset(t);this._adjustOffset(n,e);this._renderCenteredText(this._text,t,n,AnnotationBase._CSS_ANNO_TEXT,null,this.style)};Text.prototype._getSize=function(t){return t?this._measureString(t,this._text,AnnotationBase._CSS_ANNO_TEXT):new Size};Text._CSS_TEXT="gcchart-anno-text";return Text}(AnnotationBase);export{Text};var Shape=function(t){__extends(Shape,t);function Shape(e){return t.call(this,e)||this}Shape.prototype._resetDefaultValue=function(){t.prototype._resetDefaultValue.call(this);this._content=""};Shape.prototype._getCSSClass=function(){return t.prototype._getCSSClass.call(this)+" "+Shape._CSS_SHAPE};Object.defineProperty(Shape.prototype,"content",{get:function(){return this._content},set:function(t){if(t!==this._content){this._content=t;this._repaint()}},enumerable:!0,configurable:!0});Shape.prototype._render=function(t){this._shapeContainer=t.startGroup();t.stroke="#000";this._renderShape(t);t.stroke=null;t.endGroup();this._content&&this._renderText(t)};Shape.prototype._getContentCenter=function(){return this.point};Shape.prototype._renderShape=function(t){};Shape.prototype._renderText=function(t){var e,n;e=this._convertPoint(this._getContentCenter());if(this._isValidPoint(e)){n=this._getOffset();this._adjustOffset(e,n);this._renderCenteredText(this._content,t,e,AnnotationBase._CSS_ANNO_TEXT)}};Shape._CSS_SHAPE="gcchart-anno-shape";return Shape}(AnnotationBase);export{Shape};var Ellipse=function(t){__extends(Ellipse,t);function Ellipse(e){return t.call(this,e)||this}Object.defineProperty(Ellipse.prototype,"width",{get:function(){return this._width},set:function(t){if(t!==this._width){this._width=asNumber(t,!1,!0);this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(Ellipse.prototype,"height",{get:function(){return this._height},set:function(t){if(t!==this._height){this._height=asNumber(t,!1,!0);this._repaint()}},enumerable:!0,configurable:!0});Ellipse.prototype._resetDefaultValue=function(){t.prototype._resetDefaultValue.call(this);this._width=100;this._height=80};Ellipse.prototype._getCSSClass=function(){return t.prototype._getCSSClass.call(this)+" "+Ellipse._CSS_ELLIPSE};Ellipse.prototype._renderShape=function(e){t.prototype._renderShape.call(this,e);var n=this._convertPoint(this.point),i=this._width,o=this._height,r=this._getOffset();this._adjustOffset(n,r);this._isValidPoint(n)&&e.drawEllipse(n.x,n.y,i/2,o/2,AnnotationBase._CSS_ANNO_SHAPE,this.style)};Ellipse.prototype._getSize=function(){return new Size(this.width,this.height)};Ellipse._CSS_ELLIPSE="gcchart-anno-ellipse";return Ellipse}(Shape);export{Ellipse};var Rectangle=function(t){__extends(Rectangle,t);function Rectangle(e){return t.call(this,e)||this}Object.defineProperty(Rectangle.prototype,"width",{get:function(){return this._width},set:function(t){if(t!==this._width){this._width=asNumber(t,!1,!0);this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(Rectangle.prototype,"height",{get:function(){return this._height},set:function(t){if(t!==this._height){this._height=asNumber(t,!1,!0);this._repaint()}},enumerable:!0,configurable:!0});Rectangle.prototype._resetDefaultValue=function(){t.prototype._resetDefaultValue.call(this);this._width=100;this._height=80};Rectangle.prototype._getCSSClass=function(){return t.prototype._getCSSClass.call(this)+" "+Rectangle._CSS_RECTANGLE};Rectangle.prototype._renderShape=function(e){t.prototype._renderShape.call(this,e);var n=this._convertPoint(this.point),i=this._width,o=this._height,r=this._getOffset();this._adjustOffset(n,r);this._isValidPoint(n)&&e.drawRect(n.x-i/2,n.y-o/2,this._width,this._height,AnnotationBase._CSS_ANNO_SHAPE,this.style)};Rectangle.prototype._getSize=function(){return new Size(this.width,this.height)};Rectangle._CSS_RECTANGLE="gcchart-anno-rectangle";return Rectangle}(Shape);export{Rectangle};var Line=function(t){__extends(Line,t);function Line(e){return t.call(this,e)||this}Object.defineProperty(Line.prototype,"start",{get:function(){return this._start},set:function(t){if(null!=t.x&&null!=t.y&&(t.x!==this._start.x||t.y!==this._start.y)){this._start=t;this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(Line.prototype,"end",{get:function(){return this._end},set:function(t){if(null!=t.x&&null!=t.y&&(t.x!==this._end.x||t.y!==this._end.y)){this._end=t;this._repaint()}},enumerable:!0,configurable:!0});Line.prototype._resetDefaultValue=function(){t.prototype._resetDefaultValue.call(this);this._start=new DataPoint(0,0);this._end=new DataPoint(0,0);this.position=AnnotationPosition.Top};Line.prototype._getCSSClass=function(){return t.prototype._getCSSClass.call(this)+" "+Line._CSS_LINE};Line.prototype._getContentCenter=function(){var t=this.start,e=this.end;return isDate(t.x)&&isDate(e.x)?new DataPoint(new Date((t.x.getTime()+e.x.getTime())/2),(t.y+e.y)/2):new DataPoint((t.x+e.x)/2,(t.y+e.y)/2)};Line.prototype._renderShape=function(e){t.prototype._renderShape.call(this,e);var n,i=this._convertPoint(this._start),o=this._convertPoint(this._end);this._cS=i;this._cE=o;n=this._getOffset();this._adjustOffset(i,n);this._adjustOffset(o,n);this._isValidPoint(i)&&this._isValidPoint(o)&&e.drawLine(i.x,i.y,o.x,o.y,AnnotationBase._CSS_ANNO_SHAPE,this.style)};Line.prototype._getSize=function(){var t=this._cS,e=this._cE;return new Size(Math.abs(t.x-e.x),Math.abs(t.y-e.y))};Line.prototype._renderText=function(t){var e,n,i,o=this._cS,r=this._cE;e=this._convertPoint(this._getContentCenter());n=this._getOffset();this._adjustOffset(e,n);if(this._isValidPoint(e)){i=(i=180*Math.atan2(r.y-o.y,r.x-o.x)/Math.PI)<-90?i+180:i>90?i-180:i;this._renderCenteredText(this.content,t,e,AnnotationBase._CSS_ANNO_TEXT,i)}};Line.prototype._renderCenteredText=function(e,n,i,o,r,s){if(null!=r){var a,h,l,_;l=this._measureString(n,e,o).height/2;_=r*Math.PI/180;a=l*Math.sin(_);h=l*Math.cos(_);i.x=i.x+a;i.y=i.y-h}t.prototype._renderCenteredText.call(this,e,n,i,o,r,s)};Line._CSS_LINE="gcchart-anno-line";return Line}(Shape);export{Line};var Polygon=function(t){__extends(Polygon,t);function Polygon(e){return t.call(this,e)||this}Polygon.prototype._processOptions=function(e,n,i){var o=this;if("points"===e){var r=i[e];isArray(r)&&r.forEach((function(t){o.points.push(t)}))}else t.prototype._processOptions.call(this,e,n,i)};Object.defineProperty(Polygon.prototype,"points",{get:function(){return this._points},enumerable:!0,configurable:!0});Polygon.prototype._resetDefaultValue=function(){var e=this;t.prototype._resetDefaultValue.call(this);e._points=new ObservableArray;e._points.collectionChanged.addHandler((function(){e._element&&e._repaint()}))};Polygon.prototype._getCSSClass=function(){return t.prototype._getCSSClass.call(this)+" "+Polygon._CSS_POLYGON};Polygon.prototype._getContentCenter=function(){var t,e=this.points,n=e.length,i=0,o=0;for(t=0;t<n;t++){i+=isDate(e[t].x)?e[t].x.getTime():e[t].x;o+=isDate(e[t].y)?e[t].y.getTime():e[t].y}return new DataPoint(i/n,o/n)};Polygon.prototype._renderShape=function(e){t.prototype._renderShape.call(this,e);var n,i,o=[],r=[],s=this._points,a=s.length,h=this._getOffset();for(n=0;n<a;n++){i=this._convertPoint(s[n]);if(!this._isValidPoint(i))return;this._adjustOffset(i,h);o.push(i.x);r.push(i.y)}e.drawPolygon(o,r,AnnotationBase._CSS_ANNO_SHAPE,this.style)};Polygon.prototype._getSize=function(){var t,e,n,i,o,r,s,a=this,h=a._points.length;s=[].map.call(a._points,(function(t){return a._convertPoint(t)}));for(o=0;o<h;o++){r=s[o];if(0!==o){r.x<t?t=r.x:r.x>e&&(e=r.x);r.y<n?n=r.y:r.y>i&&(i=r.y)}else{t=e=r.x;n=i=r.y}}return new Size(e-t,i-n)};Polygon._CSS_POLYGON="gcchart-anno-polygon";return Polygon}(Shape);export{Polygon};var Circle=function(t){__extends(Circle,t);function Circle(e){return t.call(this,e)||this}Object.defineProperty(Circle.prototype,"radius",{get:function(){return this._radius},set:function(t){if(t!==this._radius){this._radius=asNumber(t,!1,!0);this._repaint()}},enumerable:!0,configurable:!0});Circle.prototype._resetDefaultValue=function(){t.prototype._resetDefaultValue.call(this);this._radius=100};Circle.prototype._getCSSClass=function(){return t.prototype._getCSSClass.call(this)+" "+Circle._CSS_CIRCLE};Circle.prototype._renderShape=function(e){t.prototype._renderShape.call(this,e);var n=this._convertPoint(this.point),i=this._getOffset();this._adjustOffset(n,i);this._isValidPoint(n)&&e.drawPieSegment(n.x,n.y,this.radius,0,360,AnnotationBase._CSS_ANNO_SHAPE,this.style)};Circle.prototype._getSize=function(){var t=2*this.radius;return new Size(t,t)};Circle._CSS_CIRCLE="gcchart-anno-circle";return Circle}(Shape);export{Circle};var Square=function(t){__extends(Square,t);function Square(e){return t.call(this,e)||this}Object.defineProperty(Square.prototype,"length",{get:function(){return this._length},set:function(t){if(t!==this._length){this._length=asNumber(t,!1,!0);this._repaint()}},enumerable:!0,configurable:!0});Square.prototype._resetDefaultValue=function(){t.prototype._resetDefaultValue.call(this);this._length=100};Square.prototype._getCSSClass=function(){return t.prototype._getCSSClass.call(this)+" "+Square._CSS_SQUARE};Square.prototype._renderShape=function(e){t.prototype._renderShape.call(this,e);var n=this._convertPoint(this.point),i=this.length,o=this._getOffset();this._adjustOffset(n,o);this._isValidPoint(n)&&e.drawRect(n.x-i/2,n.y-i/2,i,i,AnnotationBase._CSS_ANNO_SHAPE,this.style)};Square.prototype._getSize=function(){return new Size(this.length,this.length)};Square._CSS_SQUARE="gcchart-anno-square";return Square}(Shape);export{Square};var Image=function(t){__extends(Image,t);function Image(e){return t.call(this,e)||this}Object.defineProperty(Image.prototype,"width",{get:function(){return this._width},set:function(t){if(t!==this._width){this._width=asNumber(t,!1,!0);this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(Image.prototype,"height",{get:function(){return this._height},set:function(t){if(t!==this._height){this._height=asNumber(t,!1,!0);this._repaint()}},enumerable:!0,configurable:!0});Object.defineProperty(Image.prototype,"href",{get:function(){return this._href},set:function(t){if(t!==this._href){this._href=t;this._repaint()}},enumerable:!0,configurable:!0});Image.prototype._resetDefaultValue=function(){t.prototype._resetDefaultValue.call(this);this._width=100;this._height=100;this._href=""};Image.prototype._getCSSClass=function(){return t.prototype._getCSSClass.call(this)+" "+Image._CSS_IMAGE};Image.prototype._renderShape=function(e){t.prototype._renderShape.call(this,e);var n=this._convertPoint(this.point),i=this._href,o=this.width,r=this.height,s=this._getOffset();if(i.length>0&&this._isValidPoint(n)){this._adjustOffset(n,s);e.drawImage(i,n.x-o/2,n.y-r/2,o,r)}this._applyStyle(this._element,this.style)};Image.prototype._getSize=function(){return new Size(this.width,this.height)};Image.prototype._applyStyle=function(t,e){if(e)for(var n in e)t.setAttribute(this._deCase(n),e[n])};Image.prototype._deCase=function(t){return t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}))};Image._CSS_IMAGE="gcchart-anno-image";return Image}(Shape);export{Image};var AnnotationLayer=function(){function AnnotationLayer(t,e){var n=this;n._init(t);n._renderGroup();n._bindTooltip();e&&isArray(e)&&e.forEach((function(t){var e,i=t.type||"Circle";if(selfModule[i]){e=new selfModule[i](t);n._items.push(e)}}))}AnnotationLayer.prototype._init=function(t){this._items=new ObservableArray;this._items.collectionChanged.addHandler(this._itemsChanged,this);this._chart=t;this._forceTTShowing=!1;this._annoTTShowing=!1;this._engine=t._currentRenderEngine;t.rendered.addHandler(this._renderAnnotations,this);t.lostFocus.addHandler(this._lostFocus,this)};AnnotationLayer.prototype._lostFocus=function(t){this._toggleTooltip(this._tooltip,t,this._chart.hostElement)};Object.defineProperty(AnnotationLayer.prototype,"items",{get:function(){return this._items},enumerable:!0,configurable:!0});AnnotationLayer.prototype.getItem=function(t){var e=this.getItems(t);return e.length>0?e[0]:null};AnnotationLayer.prototype.getItems=function(t){var e=[];if(0===this._items.length||!t||""===t)return e;for(var n=0;n<this._items.length;n++)t===this._items[n].name&&e.push(this._items[n]);return e};AnnotationLayer.prototype._bindTooltip=function(){var t,e=this,n=e._chart.hostElement,i=e._tooltip;if(!i){i=e._tooltip=new ChartTooltip;t=Tooltip.prototype.hide;Tooltip.prototype.hide=function(){e._forceTTShowing||t.call(i)}}if(n){n.addEventListener("click",(function(t){e._toggleTooltip(i,t,n)}));document.addEventListener("mousemove",(function(t){e._showTooltip()&&e._toggleTooltip(i,t,n)}))}};AnnotationLayer.prototype._showTooltip=function(){return!this._chart.isTouching};AnnotationLayer.prototype._toggleTooltip=function(t,e,n){var i=this._getAnnotation(e.target,n);if(i&&i.tooltip){this._forceTTShowing=!0;this._annoTTShowing=!0;t.show(this._layerEle,i.tooltip,new Rect(e.clientX,e.clientY,5,5))}else{if(!this._annoTTShowing)return;this._annoTTShowing=!1;this._forceTTShowing=!1;t.hide()}};AnnotationLayer.prototype._getAnnotation=function(t,e){var n=this._getAnnotationElement(t,e);return null==n?null:n[AnnotationBase._DATA_KEY]};AnnotationLayer.prototype._getAnnotationElement=function(t,e){if(!t||!e)return null;var n=t.parentNode;return hasClass(t,AnnotationBase._CSS_ANNOTATION)?t:null==n||n===document.body||n===document||n===e?null:this._getAnnotationElement(n,e)};AnnotationLayer.prototype._itemsChanged=function(t,e){var n=e.action,i=e.item;switch(n){case NotifyCollectionChangedAction.Add:case NotifyCollectionChangedAction.Change:i._layer=this;this._renderAnnotation(i);break;case NotifyCollectionChangedAction.Remove:this._destroyAnnotation(i);break;default:this._destroyAnnotations();this._renderAnnotations()}};AnnotationLayer.prototype._renderAnnotations=function(){var t,e=this.items,n=e.length;this._renderGroup();for(t=0;t<n;t++)this._renderAnnotation(e[t])};AnnotationLayer.prototype._renderGroup=function(){var t=this._engine,e=this._chart._plotRect;if(e&&(!this._layerEle||null==this._layerEle.parentNode)){this._plotrectId="plotRect"+(1e6*Math.random()).toFixed();t.addClipRect({left:0,top:0,width:e.width,height:e.height},this._plotrectId);this._layerEle=t.startGroup(AnnotationLayer._CSS_Layer,this._plotrectId);this._layerEle.setAttribute("transform","translate("+e.left+", "+e.top+")");t.endGroup()}};AnnotationLayer.prototype._renderAnnotation=function(t){if(this._layerEle&&null!=this._layerEle.parentNode){t._element&&t._element.parentNode==this._layerEle&&this._layerEle.removeChild(t._element);t.render(this._engine);this._layerEle.appendChild(t._element)}};AnnotationLayer.prototype._destroyAnnotations=function(){var t,e=this.items,n=e.length;for(t=0;t<n;t++)this._destroyAnnotation(e[t]);this._layerEle.innerHTML=""};AnnotationLayer.prototype._destroyAnnotation=function(t){this._layerEle&&this._layerEle.removeChild(t._element);t.destroy()};AnnotationLayer._CSS_Layer="wj-chart-annotationlayer";return AnnotationLayer}();export{AnnotationLayer};_registerModule("wijmo.chart.annotation",selfModule);