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

import{isString,copy,asNumber,asString,clamp,PropertyChangedEventArgs,Event,assert,setAttribute,animate,setCss,toggleClass,mouseToPage,isiOS,isNumber,isFunction,asBoolean,asType,asFunction,asEnum,asArray,Globalize,Control,Color,Point,Rect,Key,ObservableArray,addClass,format,removeChild,Size,_deprecated,_registerModule}from"wijmo/wijmo";import*as selfModule from"wijmo/wijmo.gauge";export class Range{constructor(t){this._min=0;this._max=100;this._thickness=1;this.propertyChanged=new Event;isString(t)?this._name=t:copy(this,t)}get min(){return this._min}set min(t){this._setProp("_min",asNumber(t,!0))}get max(){return this._max}set max(t){this._setProp("_max",asNumber(t,!0))}get color(){return this._color}set color(t){this._setProp("_color",asString(t))}get thickness(){return this._thickness}set thickness(t){this._setProp("_thickness",clamp(asNumber(t),0,1))}get name(){return this._name}set name(t){this._setProp("_name",asString(t))}onPropertyChanged(t){this.propertyChanged.raise(this,t)}_setProp(t,e){let i=this[t];if(e!=i){this[t]=e;let s=new PropertyChangedEventArgs(t.substr(1),i,e);this.onPropertyChanged(s)}}}Range._ctr=0;export var ShowText;!function(t){t[t.None=0]="None";t[t.Value=1]="Value";t[t.MinMax=2]="MinMax";t[t.All=3]="All"}(ShowText||(ShowText={}));export class Gauge extends Control{constructor(t,e){super(t,null,!0);this._ranges=new ObservableArray;this._rngElements=[];this._format="n0";this._showRanges=!0;this._stackRanges=!1;this._shadow=!0;this._animated=!0;this._readOnly=!0;this._step=1;this._showText=ShowText.None;this._showTicks=!1;this._showTickText=!1;this._thickness=.8;this._initialized=!1;this.valueChanged=new Event;this._getPercent=function(t){let e=this.max>this.min?(t-this.min)/(this.max-this.min):0;return Math.max(0,Math.min(1,e))};Gauge._ctr++;let i=this.hostElement;setAttribute(i,"role","slider",!0);let s=this.getTemplate();this.applyTemplate("wj-control wj-gauge",s,{_dSvg:"dsvg",_svg:"svg",_filter:"filter",_gFace:"gface",_gRanges:"granges",_gPointer:"gpointer",_gCover:"gcover",_pFace:"pface",_pPointer:"ppointer",_cValue:"cvalue",_tValue:"value",_tMin:"min",_tMax:"max",_pTicks:"pticks",_gTicks:"gticks",_gNeedle:"gneedle"});setCss(this._dSvg,{width:"100%",height:"100%"});this._filterID="wj-gauge-filter-"+Gauge._ctr.toString(36);this._filter.setAttribute("id",this._filterID);this.face=new Range;this.pointer=new Range;this._ranges.collectionChanged.addHandler(()=>{this._ranges.forEach(t=>{assert(t instanceof Range,"ranges array must contain Range objects.")});this._rangesDirty=!0;this.invalidate()});this.addEventListener(i,"keydown",this._keydown.bind(this));this.addEventListener(i,"click",t=>{if(0==t.button){this.focus();this._applyMouseValue(t)}});this.addEventListener(i,"mousedown",t=>{if(0==t.button){this.focus();this._dragging=!0;setTimeout(()=>{this._applyMouseValue(t)})}});this.addEventListener(i,"mousemove",t=>{this._dragging&&this.containsFocus()&&this._applyMouseValue(t,!0)});this.addEventListener(i,"mouseup",t=>{this._dragging=!1});this.addEventListener(i,"mouseleave",t=>{t.target==i&&(this._dragging=!1)});if("ontouchstart"in window){this.addEventListener(i,"touchstart",t=>{this.focus();!t.defaultPrevented&&this._applyMouseValue(t,!1)&&t.preventDefault()});this.addEventListener(i,"touchmove",t=>{!t.defaultPrevented&&this._applyMouseValue(t,!0)&&t.preventDefault()})}this.addEventListener(i,"wheel",t=>{if(!t.defaultPrevented&&!this.isReadOnly&&this.containsFocus()&&null!=this.value&&this.hitTest(t)){let e=clamp(-t.deltaY,-1,1);this.value=clamp(this.value+(this.step||1)*e,this.min,this.max);t.preventDefault()}});this.isReadOnly=!0;this.initialize(e);this.invalidate()}get value(){return this._pointer.max}set value(t){if(t!=this.value){this._pointer.max=asNumber(t,!0);this._updateAria()}}get min(){return this._face.min}set min(t){if(t!=this.min){this._face.min=asNumber(t);this._updateAria()}}get max(){return this._face.max}set max(t){if(t!=this.max){this._face.max=asNumber(t);this._updateAria()}}get origin(){return this._origin}set origin(t){if(t!=this._origin){this._origin=asNumber(t,!0);this.invalidate()}}get isReadOnly(){return this._readOnly}set isReadOnly(t){this._readOnly=asBoolean(t);setAttribute(this._svg,"cursor",this._readOnly?null:"pointer");toggleClass(this.hostElement,"wj-state-readonly",this.isReadOnly)}get step(){return this._step}set step(t){if(t!=this._step){this._step=asNumber(t,!0);this.invalidate()}}get format(){return this._format}set format(t){if(t!=this._format){this._format=asString(t);this.invalidate()}}get getText(){return this._getText}set getText(t){if(t!=this._getText){this._getText=asFunction(t);this.invalidate()}}get thickness(){return this._thickness}set thickness(t){if(t!=this._thickness){this._thickness=clamp(asNumber(t,!1),0,1);this.invalidate()}}get face(){return this._face}set face(t){if(t!=this._face){this._face&&this._face.propertyChanged.removeHandler(this._rangeChanged);this._face=asType(t,Range);this._face&&this._face.propertyChanged.addHandler(this._rangeChanged,this);this.invalidate()}}get pointer(){return this._pointer}set pointer(t){if(t!=this._pointer){let e=null;if(this._pointer){e=this.value;this._pointer.propertyChanged.removeHandler(this._rangeChanged)}this._pointer=asType(t,Range);if(this._pointer){e&&(this.value=e);this._pointer.propertyChanged.addHandler(this._rangeChanged,this)}this.invalidate()}}get showText(){return this._showText}set showText(t){if((t=asEnum(t,ShowText))!=this._showText){this._showText=t;this.invalidate()}}get showTicks(){return this._showTicks}set showTicks(t){if(t!=this._showTicks){this._showTicks=asBoolean(t);this.invalidate()}}get showTickText(){return this._showTickText}set showTickText(t){if(t!=this._showTickText){this._showTickText=asBoolean(t);this.invalidate()}}get tickSpacing(){return this._tickSpacing}set tickSpacing(t){if(t!=this._tickSpacing){this._tickSpacing=asNumber(t,!0);this.invalidate()}}get thumbSize(){return this._thumbSize}set thumbSize(t){if(t!=this._thumbSize){this._thumbSize=asNumber(t,!0,!0);this.invalidate()}}get showRanges(){return this._showRanges}set showRanges(t){if(t!=this._showRanges){this._showRanges=asBoolean(t);this._animColor=null;this._rangesDirty=!0;this.invalidate()}}get stackRanges(){return this._stackRanges}set stackRanges(t){if(t!=this._stackRanges){this._stackRanges=asBoolean(t);this._animColor=null;this._rangesDirty=!0;this.invalidate()}}get hasShadow(){return this._shadow}set hasShadow(t){if(t!=this._shadow){this._shadow=asBoolean(t);this.invalidate()}}get isAnimated(){return this._animated}set isAnimated(t){this._animated=asBoolean(t)}get ranges(){return this._ranges}onValueChanged(t){this.valueChanged.raise(this,t)}refresh(t=!0){super.refresh(t);if(this._rangesDirty){this._rangesDirty=!1;let t=this._gRanges;this._rngElements.forEach(t=>{t.rng.propertyChanged.removeHandler(this._rangeChanged)});for(;t.lastChild;)t.removeChild(t.lastChild);this._rngElements=[];this._showRanges&&this._ranges.forEach(e=>{e.propertyChanged.addHandler(this._rangeChanged,this);this._rngElements.push({rng:e,el:this._createElement("path",t)})})}this._showElement(this._tValue,0!=(this.showText&ShowText.Value));this._showElement(this._tMin,0!=(this.showText&ShowText.MinMax));this._showElement(this._tMax,0!=(this.showText&ShowText.MinMax));this._showElement(this._cValue,0!=(this.showText&ShowText.Value)||this._thumbSize>0);this._updateText();let e=this._getFilterUrl();setAttribute(this._pFace,"filter",e);setAttribute(this._pPointer,"filter",e);this._updateRange(this._face);this._updateRange(this._pointer);this._updateTicks();this._ranges.forEach(t=>{this._updateRange(t)});this._initialized=!0}hitTest(t,e){isNumber(t)&&isNumber(e)?t=new Point(t,e):t instanceof Point||(t=mouseToPage(t));t=asType(t,Point);let i=Rect.fromBoundingRect(this._dSvg.getBoundingClientRect());t.x-=i.left+pageXOffset;t.y-=i.top+pageYOffset;return this._getValueFromPoint(t)}static _getBBox(t){try{return t.getBBox()}catch(t){return{x:0,y:0,width:0,height:0}}}_getFilterUrl(){return this.hasShadow&&!isiOS()?"url(#"+this._filterID+")":null}_getRangeElement(t){if(t==this._face)return this._pFace;if(t==this._pointer)return this._pPointer;for(let e=0;e<this._rngElements.length;e++){let i=this._rngElements[e];if(i.rng==t)return i.el}return null}_rangeChanged(t,e){if(t==this._pointer&&"max"==e.propertyName){this.onValueChanged();this._updateText()}if(t!=this._face){if(t==this._pointer&&"max"==e.propertyName){this._animInterval&&clearInterval(this._animInterval);if(this.isAnimated&&!this.isUpdating&&this._initialized){let i=this._getPointerColor(e.oldValue),s=this._getPointerColor(e.newValue),a=i?new Color(i):null,h=s?new Color(s):null,n=clamp(Math.abs(e.newValue-e.oldValue)/(this.max-this.min),0,1);this._animInterval=animate(i=>{this._animColor=a&&h?Color.interpolate(a,h,i).toString():null;this._updateRange(t,e.oldValue+i*(e.newValue-e.oldValue));if(i>=1){this._animColor=null;this._animInterval=null;this._updateRange(t);this._updateText()}},n*Control._ANIM_DEF_DURATION);return}}this._updateRange(t)}else this.invalidate()}_createElement(t,e,i){let s=document.createElementNS(Gauge._SVGNS,t);i&&s.setAttribute("class",i);e.appendChild(s);return s}_centerText(t,e,i){if("none"!=t.getAttribute("display")){let s=Globalize.format(e,this.format);if(isFunction(this.getText)){let i="";t==this._tValue?i="value":t==this._tMin?i="min":t==this._tMax&&(i="max");i&&(s=this.getText(this,i,e,s))}t.textContent=s;let a=Rect.fromBoundingRect(Gauge._getBBox(t)),h=i.x-a.width/2,n=i.y+a.height/4;t.setAttribute("x",this._fix(h));t.setAttribute("y",this._fix(n))}}_copy(t,e){if("ranges"==t){asArray(e).forEach(t=>{let e=new Range(t);this.ranges.push(e)});return!0}if("pointer"==t){copy(this.pointer,e);return!0}return!1}_showElement(t,e){setAttribute(t,"display",e?null:"none")}_updateRange(t,e=t.max){t==this._pointer&&(t.min=null!=this.origin?this.origin:this.min<0&&this.max>0?0:this.min);let i=this._getRangeElement(t);if(i){this._updateRangeElement(i,t,e);let s=t.color;t==this._pointer&&(s=this._animColor?this._animColor:this._getPointerColor(t.max));setAttribute(i,"style",s?"fill:"+s:null)}}_getPointerColor(t){if(!this._showRanges){let e;for(let i=0;i<this._ranges.length;i++){let s=this._ranges[i];if(t>=s.min&&t<=s.max){e=s;break}}if(e)return e.color}return this._pointer.color}_keydown(t){if(!this._readOnly&&this._step){let e=!0;switch(this._getKey(t.keyCode)){case Key.Left:case Key.Down:this.value=clamp(this.value-this._step,this.min,this.max);break;case Key.Right:case Key.Up:this.value=clamp(this.value+this._step,this.min,this.max);break;case Key.Home:this.value=this.min;break;case Key.End:this.value=this.max;break;default:e=!1}e&&t.preventDefault()}}_getKey(t){return t}_applyMouseValue(t,e){if(!this.isReadOnly&&this.containsFocus()){let i=this.hitTest(t);if(null!=i){let t=this._animated,s=this._step;e&&(this._animated=!1);s&&(i=Math.round(i/s)*s);this.value=clamp(i,this.min,this.max);this._animated=t;return!0}}return!1}_updateRangeElement(t,e,i){assert(!1,"Gauge is an abstract class.")}_updateText(){assert(!1,"Gauge is an abstract class.")}_updateTicks(){assert(!1,"Gauge is an abstract class.")}_getValueFromPoint(t){return null}_fix(t){return isNumber(t)?parseFloat(t.toFixed(4)).toString():this._fix(t.x)+" "+this._fix(t.y)}_updateAria(){let t=this.hostElement;if(t){setAttribute(t,"aria-valuemin",this.min);setAttribute(t,"aria-valuemax",this.max);setAttribute(t,"aria-valuenow",this.value)}}}Gauge._SVGNS="http://www.w3.org/2000/svg";Gauge._ctr=0;Gauge.controlTemplate='<div wj-part="dsvg" dir="ltr"><svg wj-part="svg" width="100%" height="100%"><defs><filter wj-part="filter"><feOffset dx="3" dy="3"></feOffset><feGaussianBlur result="offset-blur" stdDeviation="5"></feGaussianBlur><feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"></feComposite><feFlood flood-color="black" flood-opacity="0.2" result="color"></feFlood><feComposite operator="in" in="color" in2="inverse" result="shadow"></feComposite><feComposite operator="over" in="shadow" in2="SourceGraphic"></feComposite></filter></defs><g wj-part="gface" class="wj-face"><path wj-part="pface"/></g><g wj-part="granges" class="wj-ranges"/><g wj-part="gpointer" class="wj-pointer"><path wj-part="ppointer"/></g><g wj-part="gcover" class="wj-cover"><path wj-part="pticks" class="wj-ticks"/><g wj-part="gticks" aria-hidden="true" class="wj-tick-text"/><circle wj-part="cvalue" class="wj-pointer wj-thumb"/><g wj-part="gneedle" class="wj-needle"/><text wj-part="value" class="wj-value"/><text wj-part="min" class="wj-min" aria-hidden="true"/><text wj-part="max" class="wj-max" aria-hidden="true"/></g></svg></div>';export var NeedleShape;!function(t){t[t.None=0]="None";t[t.Triangle=1]="Triangle";t[t.Diamond=2]="Diamond";t[t.Hexagon=3]="Hexagon";t[t.Rectangle=4]="Rectangle";t[t.Arrow=5]="Arrow";t[t.WideArrow=6]="WideArrow";t[t.Pointer=7]="Pointer";t[t.WidePointer=8]="WidePointer";t[t.Outer=9]="Outer"}(NeedleShape||(NeedleShape={}));export var NeedleLength;!function(t){t[t.Outer=0]="Outer";t[t.Middle=1]="Middle";t[t.Inner=2]="Inner"}(NeedleLength||(NeedleLength={}));export class RadialGauge extends Gauge{constructor(t,e){super(t,null);this._startAngle=0;this._sweepAngle=180;this._autoScale=!0;this._ndlShape=NeedleShape.None;this._ndlLength=NeedleLength.Middle;addClass(this.hostElement,"wj-radialgauge");this._thickness=.4;this.showText=ShowText.All;this.initialize(e)}get startAngle(){return this._startAngle}set startAngle(t){if(t!=this._startAngle){this._startAngle=clamp(asNumber(t,!1),-360,360);this.invalidate()}}get sweepAngle(){return this._sweepAngle}set sweepAngle(t){if(t!=this._sweepAngle){this._sweepAngle=clamp(asNumber(t,!1),-360,360);this.invalidate()}}get autoScale(){return this._autoScale}set autoScale(t){if(t!=this._autoScale){this._autoScale=asBoolean(t);this.invalidate()}}get faceBounds(){return this._rcSvg?this._rcSvg.clone():null}get clientSize(){_deprecated("clientSize","faceBounds");let t=this._rcSvg;return t?new Size(t.width,t.height):null}get needleElement(){return this._ndlElement}set needleElement(t){if(t!=this._ndlElement){this._ndlShape=0;this._ndlElement=asType(t,SVGElement,!0);let e=this._gNeedle;for(;e.firstChild;)removeChild(e.firstChild);if(this._ndlElement){setAttribute(e,"transform","scale(0)");e.appendChild(this._ndlElement)}this.invalidate()}}get needleShape(){return this._ndlShape}set needleShape(t){if(t!=this._ndlShape){let e=null;switch(t=asEnum(t,NeedleShape)){case NeedleShape.Triangle:e=RadialGauge.createNeedleElement([{x:-10,y:10},{x:100,y:0}]);break;case NeedleShape.Diamond:e=RadialGauge.createNeedleElement([{x:-20,y:0},{x:0,y:10},{x:100,y:0}]);break;case NeedleShape.Hexagon:e=RadialGauge.createNeedleElement([{x:-15,y:0},{x:-10,y:5},{x:10,y:5},{x:100,y:0}]);break;case NeedleShape.Rectangle:e=RadialGauge.createNeedleElement([{x:-20,y:3},{x:100,y:3}],10);break;case NeedleShape.Arrow:e=RadialGauge.createNeedleElement([{x:-20,y:3},{x:70,y:3},{x:70,y:15},{x:100,y:0}],10);break;case NeedleShape.WideArrow:e=RadialGauge.createNeedleElement([{x:-30,y:5},{x:-40,y:15},{x:-20,y:15},{x:-10,y:5},{x:80,y:5},{x:70,y:15},{x:100,y:0}]);break;case NeedleShape.Pointer:e=RadialGauge.createNeedleElement([{x:0,y:10},{x:100,y:0}],20,10);break;case NeedleShape.WidePointer:e=RadialGauge.createNeedleElement([{x:0,y:20},{x:100,y:0}],20,10);break;case NeedleShape.Outer:e=RadialGauge.createNeedleElement([{x:60,y:20},{x:100,y:0}])}this.needleElement=e;this._ndlShape=t;this.invalidate()}}get needleLength(){return this._ndlLength}set needleLength(t){if(t!=this._ndlLength){this._ndlLength=asEnum(t,NeedleLength);this.invalidate()}}static createNeedleElement(t,e,i){let s="";for(let e=0;e<t.length;e++){let i=t[e];if(e==t.length-1&&0==i.y)break;s+=(e>0?" L ":"M ")+i.x+" "+i.y}for(let e=t.length-1;e>=0;e--){let i=t[e];s+=" L "+i.x+" "+-i.y}s+=" Z";let a="http://www.w3.org/2000/svg",h=document.createElementNS(a,"g"),n=document.createElementNS(a,"path");setAttribute(n,"d",s);h.appendChild(n);if(e){let t=document.createElementNS(a,"circle");addClass(t,"wj-needle-cap");setAttribute(t,"r",e);h.appendChild(t);if(i){t=document.createElementNS(a,"circle");addClass(t,"wj-inner-needle-cap");setAttribute(t,"r",i);h.appendChild(t)}}return h}refresh(t=!0){setAttribute(this._svg,"viewBox",null);this._rcSvg=Rect.fromBoundingRect(this._dSvg.getBoundingClientRect());super.refresh(t);this._ctmInv=null;this._ptSvg=null;if(this._autoScale){setAttribute(this._svg,"viewBox",null);let t=Rect.fromBoundingRect(Gauge._getBBox(this._pFace));0!=(this.showText&ShowText.Value)&&(t=Rect.union(t,Rect.fromBoundingRect(Gauge._getBBox(this._tValue))));if(0!=(this.showText&ShowText.MinMax)){t=Rect.union(t,Rect.fromBoundingRect(Gauge._getBBox(this._tMin)));t=Rect.union(t,Rect.fromBoundingRect(Gauge._getBBox(this._tMax)))}let e=[this._fix(t.left),this._fix(t.top),this._fix(t.width),this._fix(t.height)].join(" ");setAttribute(this._svg,"viewBox",e);let i=this._pFace.getCTM();this._ctmInv=i?i.inverse():null;this._ptSvg=this._svg.createSVGPoint()}}_updateRangeElement(t,e,i){if(this._rcSvg){let s=this._rcSvg,a=new Point(s.width/2,s.height/2),h=Math.min(s.width,s.height)/2,n=h*this.thickness,r=n*e.thickness,l=h-(n-r)/2,o=l-r,g=this.startAngle+180,c=this.sweepAngle,_=e==this._face,u=_?0:this._getPercent(e.min),d=g+c*u,p=c*((_?1:this._getPercent(i))-u);if(this.stackRanges&&e!=this.face&&e!=this.pointer){let t=this.ranges.indexOf(e);if(t>-1){let e=this.ranges.length,i=(l-o)/e;l=(o+=(e-1-t)*i)+i}}this._updateSegment(t,a,l,o,d,p);if(e==this._pointer){let t=this._fix;if(this.thumbSize>0){let s=this._animColor?this._animColor:this._getPointerColor(e.max),h=this._getPoint(a,g+c*this._getPercent(i),(l+o)/2),n=this._cValue;setAttribute(n,"cx",t(h.x));setAttribute(n,"cy",t(h.y));setAttribute(n,"style",s?"fill:"+s:null);setAttribute(n,"r",t(this.thumbSize/2))}if(this.needleElement){let e=l;this._ndlLength==NeedleLength.Inner?e=o:this._ndlLength==NeedleLength.Middle&&(e=(o+l)/2);let i="translate({cx}, {cy}) scale({scale}) rotate({angle})".replace("{cx}",t(a.x)).replace("{cy}",t(a.y)).replace("{scale}",t(e/100)).replace("{angle}",t(d+p));this._gNeedle.setAttribute("transform",i)}}}}_updateText(){if(this._rcSvg){let t=this._rcSvg,e=new Point(t.width/2,t.height/2),i=Math.min(t.width,t.height)/2,s=Math.max(0,i*(1-this.thickness)),a=this.startAngle+180,h=this.sweepAngle;this._showElement(this._cValue,this.thumbSize>0);let n=0!=(this.showText&ShowText.MinMax)&&Math.abs(h)<=300;this._showElement(this._tMin,n);this._showElement(this._tMax,n);this._centerText(this._tValue,this.value,e);let r=10*(this.sweepAngle<0?-1:1);this._centerText(this._tMin,this.min,this._getPoint(e,a-r,(i+s)/2));this._centerText(this._tMax,this.max,this._getPoint(e,a+h+r,(i+s)/2))}}_updateTicks(){let t=this.tickSpacing&&this.tickSpacing>0?this.tickSpacing:this.step,e="",i=this._gTicks;for(;i.firstChild;)removeChild(i.firstChild);if(this.showTicks&&t>0){let s=this._rcSvg,a=new Point(s.width/2,s.height/2),h=Math.min(s.width,s.height)/2,n=h*this.thickness,r=n*this._face.thickness,l=h-(n-r)/2,o=l-r,g=1.15*l;for(let s=this.min;s<=this.max;s+=t){let t=this.startAngle+180+this.sweepAngle*this._getPercent(s),h=this._fix(this._getPoint(a,t,o)),n=this._fix(this._getPoint(a,t,l));s>this.min&&s<this.max&&(e+="M "+h+" L "+n+" ");if(this.showTickText){let e=this._createElement("text",i),h=this._getPoint(a,t,g);this._centerText(e,s,h)}}}this._pTicks.setAttribute("d",e)}_updateSegment(t,e,i,s,a,h){h=Math.min(Math.max(h,-359.99),359.99);let n=this._getPoint(e,a,s),r=this._getPoint(e,a,i),l=this._getPoint(e,a+h,i),o=this._getPoint(e,a+h,s),g={large:Math.abs(h)>180?1:0,cw:h>0?1:0,ccw:h>0?0:1,or:this._fix(i),ir:this._fix(s),p1:this._fix(n),p2:this._fix(r),p3:this._fix(l),p4:this._fix(o)},c=format("M {p1} L {p2} A {or} {or} 0 {large} {cw} {p3} L {p4} A {ir} {ir} 0 {large} {ccw} {p1} Z",g);t.setAttribute("d",c)}_getPoint(t,e,i){e=e*Math.PI/180;return new Point(t.x+i*Math.cos(e),t.y+i*Math.sin(e))}_getValueFromPoint(t){if(this.autoScale&&this._ctmInv){this._ptSvg.x=t.x;this._ptSvg.y=t.y;this._ptSvg=this._ptSvg.matrixTransform(this._ctmInv);t.x=this._ptSvg.x;t.y=this._ptSvg.y}if(!this._rcSvg||!this.sweepAngle)return null;let e=this._rcSvg,i=new Point(e.width/2,e.height/2),s=Math.min(e.width,e.height)/2,a=t.x-i.x,h=t.y-i.y,n=h*h+a*a;if(n<100||n>(s+10)*(s+10))return null;let r=180*(Math.PI-Math.atan2(-h,a))/Math.PI,l=this.startAngle,o=this.sweepAngle,g=l+o;if(o>0){for(;r<l;)r+=360;for(;r>g;)r-=360}else{for(;r<g;)r+=360;for(;r>l;)r-=360}if((r-l)*(r-g)>0){let t=this._getPoint(i,r,s),e=this._getPoint(i,l,s),a=this._getPoint(i,g,s);r=this._getDist2(t,e)<this._getDist2(t,a)?l:g}let c=o?clamp(Math.abs(r-l)/Math.abs(o),0,1):0;return this.min+c*(this.max-this.min)}_getDist2(t,e){let i=t.x-e.x,s=t.y-e.y;return i*i+s*s}}export var GaugeDirection;!function(t){t[t.Right=0]="Right";t[t.Left=1]="Left";t[t.Up=2]="Up";t[t.Down=3]="Down"}(GaugeDirection||(GaugeDirection={}));export class LinearGauge extends Gauge{constructor(t,e){super(t,null);this._direction=GaugeDirection.Right;addClass(this.hostElement,"wj-lineargauge");this.initialize(e)}get direction(){return this._direction}set direction(t){if((t=asEnum(t,GaugeDirection))!=this._direction){this._direction=t;this.invalidate()}}get faceBounds(){return this._getRangeRect(this._face)}_updateRangeElement(t,e,i){let s=this._getRangeRect(e,i);this._updateSegment(t,s);let a=e==this._pointer&&0!=(this.showText&ShowText.Value),h=a||e==this._pointer&&this.thumbSize>0,n=s.left+s.width/2,r=s.top+s.height/2;switch(this._getDirection()){case GaugeDirection.Right:n=s.right;break;case GaugeDirection.Left:n=s.left;break;case GaugeDirection.Up:r=s.top;break;case GaugeDirection.Down:r=s.bottom}a&&this._centerText(this._tValue,i,new Point(n,r));if(a||h){s=Rect.fromBoundingRect(Gauge._getBBox(this._tValue));let t=this._animColor?this._animColor:this._getPointerColor(e.max),i=null!=this.thumbSize?this.thumbSize/2:.8*Math.max(s.width,s.height),a=this._cValue;setAttribute(a,"cx",this._fix(n));setAttribute(a,"cy",this._fix(r));setAttribute(a,"style",t?"fill:"+t:null);setAttribute(a,"r",this._fix(i))}}_updateText(){let t=this._getRangeRect(this._face);switch(this._getDirection()){case GaugeDirection.Right:this._setText(this._tMin,this.min,t,"left");this._setText(this._tMax,this.max,t,"right");break;case GaugeDirection.Left:this._setText(this._tMin,this.min,t,"right");this._setText(this._tMax,this.max,t,"left");break;case GaugeDirection.Up:this._setText(this._tMin,this.min,t,"bottom");this._setText(this._tMax,this.max,t,"top");break;case GaugeDirection.Down:this._setText(this._tMin,this.min,t,"top");this._setText(this._tMax,this.max,t,"bottom")}}_updateTicks(){let t=this.tickSpacing&&this.tickSpacing>0?this.tickSpacing:this.step,e="",i=this._gTicks;for(;i.firstChild;)removeChild(i.firstChild);if(this.showTicks&&t>0){let s,a=this._getRangeRect(this._face),h=new Point(a.left-.75*a.width,a.top-.75*a.height),n=this._fix;for(let r=this.min;r<=this.max;r+=t){let t=null;switch(this._getDirection()){case GaugeDirection.Right:h.x=a.left+a.width*this._getPercent(r);t="M "+(s=n(h.x))+" "+n(a.top)+" L "+s+" "+n(a.bottom)+" ";break;case GaugeDirection.Left:h.x=a.right-a.width*this._getPercent(r);t="M "+(s=n(h.x))+" "+n(a.top)+" L "+s+" "+n(a.bottom)+" ";break;case GaugeDirection.Up:h.y=a.bottom-a.height*this._getPercent(r);s=n(h.y);t="M "+n(a.left)+" "+s+" L "+n(a.right)+" "+s+" ";break;case GaugeDirection.Down:h.y=a.top+a.height*this._getPercent(r);s=n(h.y);t="M "+n(a.left)+" "+s+" L "+n(a.right)+" "+s+" "}r>this.min&&r<this.max&&(e+=t);if(this.showTickText){let t=this._createElement("text",i);this._centerText(t,r,h)}}}this._pTicks.setAttribute("d",e)}_updateSegment(t,e){let i={p1:this._fix(new Point(e.left,e.top)),p2:this._fix(new Point(e.right,e.top)),p3:this._fix(new Point(e.right,e.bottom)),p4:this._fix(new Point(e.left,e.bottom))},s=format("M {p1} L {p2} L {p3} L {p4} Z",i);t.setAttribute("d",s)}_setText(t,e,i,s){if("none"!=t.getAttribute("display")){let a=Globalize.format(e,this.format);if(isFunction(this.getText)){let i=t==this._tValue?"value":t==this._tMin?"min":t==this._tMax?"max":null;assert(null!=i,"unknown element");a=this.getText(this,i,e,a)}t.textContent=a;let h=Rect.fromBoundingRect(Gauge._getBBox(t)),n=new Point(i.left+i.width/2-h.width/2,i.top+i.height/2+h.height/2);switch(s){case"top":n.y=i.top-4;break;case"left":n.x=i.left-4-h.width;break;case"right":n.x=i.right+4;break;case"bottom":n.y=i.bottom+4+h.height}t.setAttribute("x",this._fix(n.x));t.setAttribute("y",this._fix(n.y))}}_getRangeRect(t,e=t.max){let i=this.hostElement,s=new Rect(0,0,i.clientWidth,i.clientHeight),a=this._getDirection(),h=this.thumbSize?Math.ceil(this.thumbSize/2):0;if(this.showText!=ShowText.None){let t=parseInt(getComputedStyle(i).fontSize);isNaN(t)||(h=Math.max(h,3*t))}switch(a){case GaugeDirection.Right:case GaugeDirection.Left:s=s.inflate(-h,-s.height*(1-this.thickness*t.thickness)/2);break;case GaugeDirection.Up:case GaugeDirection.Down:s=s.inflate(-s.width*(1-this.thickness*t.thickness)/2,-h)}if(this.stackRanges&&t!=this.face&&t!=this.pointer){let e=this.ranges.indexOf(t);if(e>-1){let t=this.ranges.length;switch(a){case GaugeDirection.Right:case GaugeDirection.Left:s.height/=t;s.top+=e*s.height;break;case GaugeDirection.Up:case GaugeDirection.Down:s.width/=t;s.left+=e*s.width}}}let n=t==this._face,r=n?0:this._getPercent(t.min),l=n?1:this._getPercent(e);switch(a){case GaugeDirection.Right:s.left+=s.width*r;s.width*=l-r;break;case GaugeDirection.Left:s.left=s.right-s.width*l;s.width=s.width*(l-r);break;case GaugeDirection.Down:s.top+=s.height*r;s.height*=l-r;break;case GaugeDirection.Up:s.top=s.bottom-s.height*l;s.height=s.height*(l-r)}return s}_getValueFromPoint(t){let e=this._getRangeRect(this._face),i=0;switch(this._getDirection()){case GaugeDirection.Right:i=e.width>0?(t.x-e.left)/e.width:0;break;case GaugeDirection.Left:i=e.width>0?(e.right-t.x)/e.width:0;break;case GaugeDirection.Up:i=e.height>0?(e.bottom-t.y)/e.height:0;break;case GaugeDirection.Down:i=e.height>0?(t.y-e.top)/e.height:0}return this.min+i*(this.max-this.min)}_getDirection(){let t=this._direction;if(this.rightToLeft)switch(t){case GaugeDirection.Left:t=GaugeDirection.Right;break;case GaugeDirection.Right:t=GaugeDirection.Left}return t}_getKey(t){switch(this._getDirection()){case GaugeDirection.Left:switch(t){case Key.Left:t=Key.Right;break;case Key.Right:t=Key.Left}break;case GaugeDirection.Down:switch(t){case Key.Up:t=Key.Down;break;case Key.Down:t=Key.Up}}return t}}export class BulletGraph extends LinearGauge{constructor(t,e){super(t,null);addClass(this.hostElement,"wj-bulletgraph");this._pointer.thickness=.35;this._rngTarget=new Range("target");this._rngTarget.thickness=.8;this._rngTarget.color="black";this._rngGood=new Range("good");this._rngGood.color="rgba(0,0,0,.15)";this._rngBad=new Range("bad");this._rngBad.color="rgba(0,0,0,.3)";this.ranges.push(this._rngBad);this.ranges.push(this._rngGood);this.ranges.push(this._rngTarget);this.initialize(e)}get target(){return this._rngTarget.max}set target(t){this._rngTarget.max=t}get good(){return this._rngGood.max}set good(t){this._rngGood.max=t}get bad(){return this._rngBad.max}set bad(t){this._rngBad.max=t}_getRangeRect(t,e=t.max){let i=super._getRangeRect(t,e);if(t==this._rngTarget)switch(this._getDirection()){case GaugeDirection.Right:i.left=i.right-1;i.width=3;break;case GaugeDirection.Left:i.width=3;break;case GaugeDirection.Up:i.height=3;break;case GaugeDirection.Down:i.top=i.bottom-1;i.height=3}return i}}_registerModule("wijmo.gauge",selfModule);