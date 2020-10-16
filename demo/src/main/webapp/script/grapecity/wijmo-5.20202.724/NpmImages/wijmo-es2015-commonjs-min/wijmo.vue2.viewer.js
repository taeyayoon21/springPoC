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

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcViewer=require("wijmo/wijmo.viewer");class WjReportViewerBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjReportViewerBehavior.tag="wj-report-viewer";WjReportViewerBehavior.props=["isDisabled","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders","parameters","paginated","reportName"];WjReportViewerBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","pageIndexChanged","queryLoadingData","beforeSendRequest"];WjReportViewerBehavior.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"],mouseModeChanged:["mouseMode"],viewModeChanged:["viewMode"]};WjReportViewerBehavior.classCtor=function(){return wjcViewer.ReportViewer};exports.WjReportViewer=WjReportViewerBehavior.register();function registerV3WjReportViewer(e){e.component(WjReportViewerBehavior.tag,exports.WjReportViewer)}class WjPdfViewerBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjPdfViewerBehavior.tag="wj-pdf-viewer";WjPdfViewerBehavior.props=["isDisabled","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders"];WjPdfViewerBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","pageIndexChanged","queryLoadingData","beforeSendRequest"];WjPdfViewerBehavior.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"],mouseModeChanged:["mouseMode"],viewModeChanged:["viewMode"]};WjPdfViewerBehavior.classCtor=function(){return wjcViewer.PdfViewer};exports.WjPdfViewer=WjPdfViewerBehavior.register();function registerV3WjPdfViewer(e){e.component(WjPdfViewerBehavior.tag,exports.WjPdfViewer)}function registerViewer(e){if(wijmo_vue2_base_1.VueApi.isV3Plus){registerV3WjReportViewer(e);registerV3WjPdfViewer(e)}}exports.registerViewer=registerViewer;