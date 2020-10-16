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

import{VueApi,WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as wjcViewer from"wijmo/wijmo.viewer";class WjReportViewerBehavior extends WjComponentBehavior{}WjReportViewerBehavior.tag="wj-report-viewer";WjReportViewerBehavior.props=["isDisabled","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders","parameters","paginated","reportName"];WjReportViewerBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","pageIndexChanged","queryLoadingData","beforeSendRequest"];WjReportViewerBehavior.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"],mouseModeChanged:["mouseMode"],viewModeChanged:["viewMode"]};WjReportViewerBehavior.classCtor=function(){return wjcViewer.ReportViewer};export var WjReportViewer=WjReportViewerBehavior.register();function registerV3WjReportViewer(e){e.component(WjReportViewerBehavior.tag,WjReportViewer)}class WjPdfViewerBehavior extends WjComponentBehavior{}WjPdfViewerBehavior.tag="wj-pdf-viewer";WjPdfViewerBehavior.props=["isDisabled","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders"];WjPdfViewerBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","pageIndexChanged","queryLoadingData","beforeSendRequest"];WjPdfViewerBehavior.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"],mouseModeChanged:["mouseMode"],viewModeChanged:["viewMode"]};WjPdfViewerBehavior.classCtor=function(){return wjcViewer.PdfViewer};export var WjPdfViewer=WjPdfViewerBehavior.register();function registerV3WjPdfViewer(e){e.component(WjPdfViewerBehavior.tag,WjPdfViewer)}export function registerViewer(e){if(VueApi.isV3Plus){registerV3WjReportViewer(e);registerV3WjPdfViewer(e)}}