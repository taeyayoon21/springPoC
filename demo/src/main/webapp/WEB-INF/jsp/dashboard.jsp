<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SKEC</title>
    


    <!-- jQuery -->
    <script src="/script/jquery-3.5.1.min.js"></script>
    
    

    
    
    <!-- Bootstrap -->  
    <link rel="stylesheet" type="text/css" href="/script/bootstrap/dist/css/bootstrap.min.css"/>
    <script src="/script/bootstrap/dist/js/bootstrap.min.js"></script>

    
    <!-- dhtmlx suite 6 -->    
    <link rel="stylesheet" type="text/css" href="/script/dhtmlx/suite_trial/codebase/suite.css"/>
    <script src="/script/dhtmlx/suite_trial/codebase/suite.js"></script>


    


    <!-- Chart.js v2.9.3 -->
    <link rel="stylesheet" href="/script/chart.js/dist/Chart.min.css">
    <script src="/script/chart.js/dist/Chart.min.js"></script>

    
    <script src="/script/jszip.min.js"></script>


    <!-- MDI Icon Pack  [http://materialdesignicons.com] -->
    <link rel="stylesheet" type="text/css" href="/script/mdi/font/css/materialdesignicons.min.css"/>




    <link rel="stylesheet" type="text/css" href="/wpcs/common/skec.css"/>
    <script src="/wpcs/common/skec.js"></script>


    <style>
       


    </style>


    <script>

        var jsonProjectStat = {
            "OVERALL": {
                "TOTAL_CNT": 38,
                "REMAIN_CNT": 37,
                "ONGOING_CNT": 0,
                "COMPLETE_CNT": 1,
                "REMAIN_RT": 97.36,
                "ONGOING_RT": 0,
                "COMPLETE_RT": 2.63
            },
            "OVERALL_CHART": {
                "PLAN_WEEK_0": 1,
                "ACTU_WEEK_0": 1,
                "PLAN_WEEK_1": 1,
                "ACTU_WEEK_1": 1,
                "PLAN_WEEK_2": 1,
                "ACTU_WEEK_2": 1,
                "PLAN_WEEK_3": 1,
                "ACTU_WEEK_3": 1,
                "PLAN_WEEK_4": 1,
                "ACTU_WEEK_4": 1,
                "PLAN_WEEK_5": 1,
                "ACTU_WEEK_5": 1,
                "SPI_WEEK_0": 1,
                "SPI_WEEK_1": 1,
                "SPI_WEEK_2": 1,
                "SPI_WEEK_3": 1,
                "SPI_WEEK_4": 1,
                "SPI_WEEK_5": 1,
                "SPI_INCR_WEEK_0": 0,
                "SPI_INCR_WEEK_1": 0,
                "SPI_INCR_WEEK_2": 0,
                "SPI_INCR_WEEK_3": 0,
                "SPI_INCR_WEEK_4": 0,
                "SPI_INCR_WEEK_5": 0
            },
            "DISCIPLINE": [
                {
                    "DISC_CD": "C",
                    "DISC_CD_NM": "Civil",
                    "TOTAL_CNT": 5,
                    "REMAIN_CNT": 4,
                    "ONGOING_CNT": 0,
                    "COMPLETE_CNT": 1,
                    "REMAIN_RT": 80,
                    "ONGOING_RT": 0,
                    "COMPLETE_RT": 20
                },
                {
                    "DISC_CD": "A",
                    "DISC_CD_NM": "Architecture",
                    "TOTAL_CNT": 1,
                    "REMAIN_CNT": 1,
                    "ONGOING_CNT": 0,
                    "COMPLETE_CNT": 0,
                    "REMAIN_RT": 100,
                    "ONGOING_RT": 0,
                    "COMPLETE_RT": 0
                },
                {
                    "DISC_CD": "M",
                    "DISC_CD_NM": "Mechanical",
                    "TOTAL_CNT": 10,
                    "REMAIN_CNT": 10,
                    "ONGOING_CNT": 0,
                    "COMPLETE_CNT": 0,
                    "REMAIN_RT": 100,
                    "ONGOING_RT": 0,
                    "COMPLETE_RT": 0
                },
                {
                    "DISC_CD": "P",
                    "DISC_CD_NM": "Piping",
                    "TOTAL_CNT": 3,
                    "REMAIN_CNT": 3,
                    "ONGOING_CNT": 0,
                    "COMPLETE_CNT": 0,
                    "REMAIN_RT": 100,
                    "ONGOING_RT": 0,
                    "COMPLETE_RT": 0
                },
                {
                    "DISC_CD": "S",
                    "DISC_CD_NM": "Steel Structure",
                    "TOTAL_CNT": 4,
                    "REMAIN_CNT": 4,
                    "ONGOING_CNT": 0,
                    "COMPLETE_CNT": 0,
                    "REMAIN_RT": 100,
                    "ONGOING_RT": 0,
                    "COMPLETE_RT": 0
                },
                {
                    "DISC_CD": "E",
                    "DISC_CD_NM": "Electrical",
                    "TOTAL_CNT": 9,
                    "REMAIN_CNT": 9,
                    "ONGOING_CNT": 0,
                    "COMPLETE_CNT": 0,
                    "REMAIN_RT": 100,
                    "ONGOING_RT": 0,
                    "COMPLETE_RT": 0
                },
                {
                    "DISC_CD": "N",
                    "DISC_CD_NM": "Instrument",
                    "TOTAL_CNT": 4,
                    "REMAIN_CNT": 4,
                    "ONGOING_CNT": 0,
                    "COMPLETE_CNT": 0,
                    "REMAIN_RT": 100,
                    "ONGOING_RT": 0,
                    "COMPLETE_RT": 0
                },
                {
                    "DISC_CD": "U",
                    "DISC_CD_NM": "Insulation",
                    "TOTAL_CNT": 1,
                    "REMAIN_CNT": 1,
                    "ONGOING_CNT": 0,
                    "COMPLETE_CNT": 0,
                    "REMAIN_RT": 100,
                    "ONGOING_RT": 0,
                    "COMPLETE_RT": 0
                },
                {
                    "DISC_CD": "B",
                    "DISC_CD_NM": "Painting",
                    "TOTAL_CNT": 1,
                    "REMAIN_CNT": 1,
                    "ONGOING_CNT": 0,
                    "COMPLETE_CNT": 0,
                    "REMAIN_RT": 100,
                    "ONGOING_RT": 0,
                    "COMPLETE_RT": 0
                }
            ],
            "DISCIPLINE_CHART": [
                {
                    "DISC_CD": "A",
                    "PLAN_WEEK_0": 0,
                    "ACTU_WEEK_0": 0,
                    "PLAN_WEEK_1": 0,
                    "ACTU_WEEK_1": 0,
                    "PLAN_WEEK_2": 0,
                    "ACTU_WEEK_2": 0,
                    "PLAN_WEEK_3": 0,
                    "ACTU_WEEK_3": 0,
                    "PLAN_WEEK_4": 0,
                    "ACTU_WEEK_4": 0,
                    "PLAN_WEEK_5": 0,
                    "ACTU_WEEK_5": 0,
                    "SPI_WEEK_0": 0,
                    "SPI_WEEK_1": 0,
                    "SPI_WEEK_2": 0,
                    "SPI_WEEK_3": 0,
                    "SPI_WEEK_4": 0,
                    "SPI_WEEK_5": 0,
                    "SPI_INCR_WEEK_0": 0,
                    "SPI_INCR_WEEK_1": 0,
                    "SPI_INCR_WEEK_2": 0,
                    "SPI_INCR_WEEK_3": 0,
                    "SPI_INCR_WEEK_4": 0,
                    "SPI_INCR_WEEK_5": 0
                },
                {
                    "DISC_CD": "B",
                    "PLAN_WEEK_0": 0,
                    "ACTU_WEEK_0": 0,
                    "PLAN_WEEK_1": 0,
                    "ACTU_WEEK_1": 0,
                    "PLAN_WEEK_2": 0,
                    "ACTU_WEEK_2": 0,
                    "PLAN_WEEK_3": 0,
                    "ACTU_WEEK_3": 0,
                    "PLAN_WEEK_4": 0,
                    "ACTU_WEEK_4": 0,
                    "PLAN_WEEK_5": 0,
                    "ACTU_WEEK_5": 0,
                    "SPI_WEEK_0": 0,
                    "SPI_WEEK_1": 0,
                    "SPI_WEEK_2": 0,
                    "SPI_WEEK_3": 0,
                    "SPI_WEEK_4": 0,
                    "SPI_WEEK_5": 0,
                    "SPI_INCR_WEEK_0": 0,
                    "SPI_INCR_WEEK_1": 0,
                    "SPI_INCR_WEEK_2": 0,
                    "SPI_INCR_WEEK_3": 0,
                    "SPI_INCR_WEEK_4": 0,
                    "SPI_INCR_WEEK_5": 0
                },
                {
                    "DISC_CD": "C",
                    "PLAN_WEEK_0": 1,
                    "ACTU_WEEK_0": 1,
                    "PLAN_WEEK_1": 1,
                    "ACTU_WEEK_1": 1,
                    "PLAN_WEEK_2": 1,
                    "ACTU_WEEK_2": 1,
                    "PLAN_WEEK_3": 1,
                    "ACTU_WEEK_3": 1,
                    "PLAN_WEEK_4": 1,
                    "ACTU_WEEK_4": 1,
                    "PLAN_WEEK_5": 1,
                    "ACTU_WEEK_5": 1,
                    "SPI_WEEK_0": 1,
                    "SPI_WEEK_1": 1,
                    "SPI_WEEK_2": 1,
                    "SPI_WEEK_3": 1,
                    "SPI_WEEK_4": 1,
                    "SPI_WEEK_5": 1,
                    "SPI_INCR_WEEK_0": 0,
                    "SPI_INCR_WEEK_1": 0,
                    "SPI_INCR_WEEK_2": 0,
                    "SPI_INCR_WEEK_3": 0,
                    "SPI_INCR_WEEK_4": 0,
                    "SPI_INCR_WEEK_5": 0
                },
                {
                    "DISC_CD": "E",
                    "PLAN_WEEK_0": 0,
                    "ACTU_WEEK_0": 0,
                    "PLAN_WEEK_1": 0,
                    "ACTU_WEEK_1": 0,
                    "PLAN_WEEK_2": 0,
                    "ACTU_WEEK_2": 0,
                    "PLAN_WEEK_3": 0,
                    "ACTU_WEEK_3": 0,
                    "PLAN_WEEK_4": 0,
                    "ACTU_WEEK_4": 0,
                    "PLAN_WEEK_5": 0,
                    "ACTU_WEEK_5": 0,
                    "SPI_WEEK_0": 0,
                    "SPI_WEEK_1": 0,
                    "SPI_WEEK_2": 0,
                    "SPI_WEEK_3": 0,
                    "SPI_WEEK_4": 0,
                    "SPI_WEEK_5": 0,
                    "SPI_INCR_WEEK_0": 0,
                    "SPI_INCR_WEEK_1": 0,
                    "SPI_INCR_WEEK_2": 0,
                    "SPI_INCR_WEEK_3": 0,
                    "SPI_INCR_WEEK_4": 0,
                    "SPI_INCR_WEEK_5": 0
                },
                {
                    "DISC_CD": "M",
                    "PLAN_WEEK_0": 0,
                    "ACTU_WEEK_0": 0,
                    "PLAN_WEEK_1": 0,
                    "ACTU_WEEK_1": 0,
                    "PLAN_WEEK_2": 0,
                    "ACTU_WEEK_2": 0,
                    "PLAN_WEEK_3": 0,
                    "ACTU_WEEK_3": 0,
                    "PLAN_WEEK_4": 0,
                    "ACTU_WEEK_4": 0,
                    "PLAN_WEEK_5": 0,
                    "ACTU_WEEK_5": 0,
                    "SPI_WEEK_0": 0,
                    "SPI_WEEK_1": 0,
                    "SPI_WEEK_2": 0,
                    "SPI_WEEK_3": 0,
                    "SPI_WEEK_4": 0,
                    "SPI_WEEK_5": 0,
                    "SPI_INCR_WEEK_0": 0,
                    "SPI_INCR_WEEK_1": 0,
                    "SPI_INCR_WEEK_2": 0,
                    "SPI_INCR_WEEK_3": 0,
                    "SPI_INCR_WEEK_4": 0,
                    "SPI_INCR_WEEK_5": 0
                },
                {
                    "DISC_CD": "N",
                    "PLAN_WEEK_0": 0,
                    "ACTU_WEEK_0": 0,
                    "PLAN_WEEK_1": 0,
                    "ACTU_WEEK_1": 0,
                    "PLAN_WEEK_2": 0,
                    "ACTU_WEEK_2": 0,
                    "PLAN_WEEK_3": 0,
                    "ACTU_WEEK_3": 0,
                    "PLAN_WEEK_4": 0,
                    "ACTU_WEEK_4": 0,
                    "PLAN_WEEK_5": 0,
                    "ACTU_WEEK_5": 0,
                    "SPI_WEEK_0": 0,
                    "SPI_WEEK_1": 0,
                    "SPI_WEEK_2": 0,
                    "SPI_WEEK_3": 0,
                    "SPI_WEEK_4": 0,
                    "SPI_WEEK_5": 0,
                    "SPI_INCR_WEEK_0": 0,
                    "SPI_INCR_WEEK_1": 0,
                    "SPI_INCR_WEEK_2": 0,
                    "SPI_INCR_WEEK_3": 0,
                    "SPI_INCR_WEEK_4": 0,
                    "SPI_INCR_WEEK_5": 0
                },
                {
                    "DISC_CD": "P",
                    "PLAN_WEEK_0": 0,
                    "ACTU_WEEK_0": 0,
                    "PLAN_WEEK_1": 0,
                    "ACTU_WEEK_1": 0,
                    "PLAN_WEEK_2": 0,
                    "ACTU_WEEK_2": 0,
                    "PLAN_WEEK_3": 0,
                    "ACTU_WEEK_3": 0,
                    "PLAN_WEEK_4": 0,
                    "ACTU_WEEK_4": 0,
                    "PLAN_WEEK_5": 0,
                    "ACTU_WEEK_5": 0,
                    "SPI_WEEK_0": 0,
                    "SPI_WEEK_1": 0,
                    "SPI_WEEK_2": 0,
                    "SPI_WEEK_3": 0,
                    "SPI_WEEK_4": 0,
                    "SPI_WEEK_5": 0,
                    "SPI_INCR_WEEK_0": 0,
                    "SPI_INCR_WEEK_1": 0,
                    "SPI_INCR_WEEK_2": 0,
                    "SPI_INCR_WEEK_3": 0,
                    "SPI_INCR_WEEK_4": 0,
                    "SPI_INCR_WEEK_5": 0
                },
                {
                    "DISC_CD": "S",
                    "PLAN_WEEK_0": 0,
                    "ACTU_WEEK_0": 0,
                    "PLAN_WEEK_1": 0,
                    "ACTU_WEEK_1": 0,
                    "PLAN_WEEK_2": 0,
                    "ACTU_WEEK_2": 0,
                    "PLAN_WEEK_3": 0,
                    "ACTU_WEEK_3": 0,
                    "PLAN_WEEK_4": 0,
                    "ACTU_WEEK_4": 0,
                    "PLAN_WEEK_5": 0,
                    "ACTU_WEEK_5": 0,
                    "SPI_WEEK_0": 0,
                    "SPI_WEEK_1": 0,
                    "SPI_WEEK_2": 0,
                    "SPI_WEEK_3": 0,
                    "SPI_WEEK_4": 0,
                    "SPI_WEEK_5": 0,
                    "SPI_INCR_WEEK_0": 0,
                    "SPI_INCR_WEEK_1": 0,
                    "SPI_INCR_WEEK_2": 0,
                    "SPI_INCR_WEEK_3": 0,
                    "SPI_INCR_WEEK_4": 0,
                    "SPI_INCR_WEEK_5": 0
                },
                {
                    "DISC_CD": "U",
                    "PLAN_WEEK_0": 0,
                    "ACTU_WEEK_0": 0,
                    "PLAN_WEEK_1": 0,
                    "ACTU_WEEK_1": 0,
                    "PLAN_WEEK_2": 0,
                    "ACTU_WEEK_2": 0,
                    "PLAN_WEEK_3": 0,
                    "ACTU_WEEK_3": 0,
                    "PLAN_WEEK_4": 0,
                    "ACTU_WEEK_4": 0,
                    "PLAN_WEEK_5": 0,
                    "ACTU_WEEK_5": 0,
                    "SPI_WEEK_0": 0,
                    "SPI_WEEK_1": 0,
                    "SPI_WEEK_2": 0,
                    "SPI_WEEK_3": 0,
                    "SPI_WEEK_4": 0,
                    "SPI_WEEK_5": 0,
                    "SPI_INCR_WEEK_0": 0,
                    "SPI_INCR_WEEK_1": 0,
                    "SPI_INCR_WEEK_2": 0,
                    "SPI_INCR_WEEK_3": 0,
                    "SPI_INCR_WEEK_4": 0,
                    "SPI_INCR_WEEK_5": 0
                }
            ],
            "CHART_SERIES": {
                "WEEK_0": "10-05",
                "WEEK_1": "09-28",
                "WEEK_2": "09-21",
                "WEEK_3": "09-14",
                "WEEK_4": "09-07",
                "WEEK_5": "08-31"
            },
            "PROGRESS": {
                "PLAN_PROG_A": null,
                "ACTU_PROG_A": null,
                "PLAN_PROG_E": null,
                "ACTU_PROG_E": null,
                "PLAN_PROG_P": null,
                "ACTU_PROG_P": null,
                "PLAN_PROG_M": null,
                "ACTU_PROG_M": null,
                "PLAN_PROG_C": null,
                "ACTU_PROG_C": null,
                "DEV_PROG_A": null,
                "DEV_PROG_E": null,
                "DEV_PROG_P": null,
                "DEV_PROG_M": null,
                "DEV_PROG_C": null,
                "WF_E": 30,
                "WF_P": 40,
                "WF_M": 0,
                "WF_C": 30
            }
        };




    </script>




</head>

<body>
    
    

  

    <div class="nk-content-lg ">
        <div class="container-fluid">
            <div class="nk-content-inner">
                <div class="nk-content-body">
                    <div class="nk-block-head nk-block-head-sm">
                        <div class="nk-block-between">
                            <div class="nk-block-head-content">
                                <h3 class="nk-block-title page-title">G.Plant Project Dashboard</h3>                                
                            </div>                            
                        </div>
                    </div>
                    <div class="nk-block">
                        <div class="row g-gs">
                            <div class="col-xl-4">
                                <div class="row g-gs">
                                    <div class="col-lg-6 col-xl-12">
                                        <div class="card card-bordered card-full">
                                            <div class="card-inner">
                                                <div class="nk-cov-wg1">
                                                    <div class="card-title">
                                                        <h5 class="title">Overall CWP Status</h5>
                                                    </div>
                                                    <div class="nk-cov-data">
                                                        <h6 class="title">Total CWPs</h6>
                                                        <div class="card-amount">
                                                            <span class="amount" id="cwpTotCnt"></span></div>
                                                    </div>
                                                   
                                                    <canvas id="canvas1"></canvas>

                                                    <ul class="nk-cov-wg1-data">
                                                        <li>
                                                            <div class="title">
                                                                <div class="dot dot-lg sq bg-purple"></div>
                                                                <span id="cwpOnGoingTxt">On-Going </span>
                                                            </div>
                                                            <div class="count" id="cwpOnGoingCnt"></div>
                                                        </li>
                                                        <li>
                                                            <div class="title">
                                                                <div class="dot dot-lg sq bg-success"></div>
                                                                <span id="cwpCompletedTxt">Completed </span>
                                                            </div>
                                                            <div class="count" id="cwpCompletedCnt"></div>
                                                        </li>
                                                        <li>
                                                            <div class="title">
                                                                <div class="dot dot-lg sq bg-danger"></div>
                                                                <span id="cwpRemainingTxt">Remaining </span>
                                                            </div>
                                                            <div class="count" id="cwpRemainingCnt"></div>
                                                        </li>
                                                    </ul>                                                    
                                                </div>
                                                <div class="card-title-group mt-3">
                                                    <div class="card-title">
                                                        <h6 class="title">Progress Over Time - Last 5 Weeks</h6>
                                                    </div>
                                                </div>
                                                <div class="nk-cov-wg3">
                                                    <ul class="nav nav-tabs nav-tabs-card nav-tabs-xs">
                                                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#navi1">Progress</a></li>
                                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#navi2">SPI</a></li>
                                                    </ul>
                                                    <div class="tab-content mt-0">
                                                        <div class="tab-pane active" id="navi1">
                                                            <div class="nk-cov-wg4-ck">
                                                                <canvas id="canvas2"></canvas>
                                                            </div>                                                           
                                                        </div>
                                                        <div class="tab-pane" id="navi2">
                                                            <div class="nk-cov-wg4-ck">
                                                                <canvas id="canvas3"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                            <div class="col-xl-8">
                                <div class="card card-bordered card-full">
                                    <div class="nk-cov-wg4">
                                        <div class="nk-cov-wg4-aside">                                            
                                            <div class="nk-cov-wg4-aside-body" data-simplebar="init">
                                                <div class="simplebar-wrapper" style="margin: 0px;">
                                                    <div class="simplebar-height-auto-observer-wrapper">
                                                        <div class="simplebar-height-auto-observer"></div>
                                                    </div>
                                                    <div class="simplebar-mask">
                                                        <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                                            <div class="simplebar-content-wrapper" style="height: 100%; overflow: hidden scroll;">
                                                                <div class="simplebar-content" style="padding: 0px;">
                                                                    <ul class="nk-cov-wg4-list" id="cwpDiscCnt">
                                                                        
                                                                        
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="simplebar-placeholder" style="width: 231px; height: 1008px;"></div>
                                                </div>
                                                <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                                                    <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                                                </div>
                                                <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                                                    <div class="simplebar-scrollbar"
                                                        style="height: 245px; transform: translate3d(0px, 197px, 0px); display: block;"></div>
                                                </div>
                                            </div>                                            
                                        </div>
                                        <div class="nk-cov-wg4-content">
                                            <div class="nk-cov-wg4-map">
                                                <div class="card-inner">
                                                    <div class="nk-cov-wg1">

                                                        <div class="card-title">
                                                            <h5 class="title" id="discTxt">CWP Status by Discipline</h5>
                                                        </div>
                                                        
                                                        <div class="nk-cov-data">
                                                            <h6 class="title">Total CWPs</h6>
                                                            <div class="card-amount">
                                                                <span class="amount" id="discTotCnt">0</span>
                                                            </div>
                                                        </div>
                                                        <div class="nk-cov-wg1-progress">
                                                            <div class="progress progress-reverse progress-md progress-pill progress-bordered">
                                                                <div class="progress-bar bg-danger" id="discRemainingRt"></div>
                                                                <div class="progress-bar bg-success" id="discCompletedRt"></div>
                                                                <div class="progress-bar bg-purple" id="discOnGoingRt"></div>
                                                            </div>
                                                        </div>
                                                        <ul class="nk-cov-wg1-data">
                                                            <li>
                                                                <div class="title">
                                                                    <div class="dot dot-lg sq bg-purple"></div>
                                                                    <span id="discOnGoingTxt">On-Going (0%)</span>
                                                                </div>
                                                                <div class="count" id="discOnGoingCnt"></div>
                                                            </li>
                                                            <li>
                                                                <div class="title">
                                                                    <div class="dot dot-lg sq bg-success"></div>
                                                                    <span id="discCompletedTxt">Completed (0%)</span>
                                                                </div>
                                                                <div class="count" id="discCompletedCnt"></div>
                                                            </li>
                                                            <li>
                                                                <div class="title">
                                                                    <div class="dot dot-lg sq bg-danger"></div>
                                                                    <span id="discRemainingTxt">Remaining (0%)</span>
                                                                </div>
                                                                <div class="count" id="discRemainingCnt"></div>
                                                            </li>
                                                        </ul>                                                    
                                                    </div>
                                                </div>                                                
                                            </div>
                                            <div class="nk-cov-wg4-meta">
                                                <div class="card-title-group mb-1">
                                                    <div class="card-title">
                                                        <h6 class="title">Progress Over Time - Last 5 Weeks</h6>                                                        
                                                    </div>
                                                    
                                                </div>                                                                                    
                                            </div>
                                            <div class="nk-cov-wg3">
                                                <ul class="nav nav-tabs nav-tabs-card nav-tabs-xs">
                                                    <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#navi3">Progress</a></li>
                                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#navi4">SPI</a></li>
                                                </ul>
                                                <div class="tab-content mt-0">
                                                    <div class="tab-pane active" id="navi3">
                                                        <div class="nk-cov-wg4-ck">
                                                            <canvas  id="canvas4"></canvas>
                                                        </div>                                                       
                                                    </div>
                                                    <div class="tab-pane" id="navi4">
                                                        <div class="nk-cov-wg4-ck">
                                                            <canvas  id="canvas5"></canvas>
                                                        </div>                                                            
                                                    </div>
                                                </div>                                                
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div class="col-md-6 col-xxl-4">
                                <div class="card card-bordered card-full">
                                    <div class="card-inner d-flex flex-column h-100">
                                        <div class="card-title-group mb-3">
                                            <div class="card-title">
                                                <h6 class="title">EPC Overall Progress</h6>
                                                <p></p>
                                            </div>
                                        </div>
                                        <div class="progress-list gy-3">
                                            <div class="progress-wrap">
                                                <div class="progress-text">
                                                    <div class="progress-label">Planned</div>
                                                    <div class="progress-amount" id="PLAN_PROG_A"></div>
                                                </div>
                                                <div class="progress progress-md">
                                                    <div class="progress-bar" id="PLAN_PROG_A_RT"></div>
                                                </div>
                                            </div>
                                            <div class="progress-wrap">
                                                <div class="progress-text">
                                                    <div class="progress-label">Actual</div>
                                                    <div class="progress-amount" id="ACTU_PROG_A"></div>
                                                </div>
                                                <div class="progress progress-md">
                                                    <div class="progress-bar bg-orange" id="ACTU_PROG_A_RT"></div>                                                    
                                                </div>
                                            </div> 
                                            <div class="progress-wrap">
                                                <div class="progress-text">
                                                    <div class="progress-label">Deviation</div>
                                                    <div class="progress-amount" id="DEV_PROG_A"></div>
                                                </div>
                                                <div class="progress progress-md">
                                                    <div class="progress-bar bg-success" id="DEV_PROG_A_RT"></div>                                                    
                                                </div>
                                            </div>                                             
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xxl-4">
                                <div class="card card-bordered card-full">
                                    <div class="card-inner">
                                        <div class="card-title-group mb-1">
                                            <div class="card-title">
                                                <h6 class="title">EPC Phase Progress</h6>                                                
                                                <p>&nbsp;</p>
                                            </div>
                                        </div>
                                        <div class="nk-tb-list">
                                            <div class="nk-tb-item nk-tb-head">
                                                <div class="nk-tb-col tb-col-sm"><span>Phase</span></div>
                                                <div class="nk-tb-col tb-col-sm"><span>W.F</span></div>
                                                <div class="nk-tb-col tb-col-sm"><span>Planned</span></div>
                                                <div class="nk-tb-col tb-col-sm"><span>Actual</span></div>
                                                <div class="nk-tb-col tb-col-sm"><span>Dev.</span></div>                                            
                                            </div>
                                            <div class="nk-tb-item">                                            
                                                <div class="nk-tb-col">
                                                    <div class="user-card">
                                                        <div class="user-avatar user-avatar-xs bg-pink-dim"><span>E</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="nk-tb-col w-100px">
                                                    <span class="progress-amount" id="WF_E"></span>
                                                </div>
                                                <div class="nk-tb-col tb-col-sm">                                                    
                                                    <span class="progress-amount" id="PLAN_PROG_E"></span>
                                                </div>
                                                <div class="nk-tb-col tb-col-sm">                                                    
                                                    <span class="progress-amount" id="ACTU_PROG_E"></span>
                                                </div>
                                                <div class="nk-tb-col tb-col-sm">
                                                    <span class="progress-amount" id="DEV_PROG_E"></span>
                                                </div>
                                            </div>
                                            <div class="nk-tb-item">                                            
                                                <div class="nk-tb-col">
                                                    <div class="user-card">
                                                        <div class="user-avatar user-avatar-xs bg-azure-dim"><span>P</span>
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                                <div class="nk-tb-col w-100px">
                                                    <span class="progress-amount" id="WF_P"></span>
                                                </div>
                                                <div class="nk-tb-col tb-col-sm">                                                    
                                                    <span class="progress-amount" id="PLAN_PROG_P"></span>
                                                </div>
                                                <div class="nk-tb-col tb-col-sm">                                                    
                                                    <span class="progress-amount" id="ACTU_PROG_P"></span>
                                                </div>
                                                <div class="nk-tb-col tb-col-sm">
                                                    <span class="progress-amount" id="DEV_PROG_P"></span>
                                                </div>
                                            </div>
                                            <div class="nk-tb-item">
                                                <div class="nk-tb-col">
                                                    <div class="user-card">
                                                        <div class="user-avatar user-avatar-xs bg-purple-dim"><span>C</span>
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                                <div class="nk-tb-col w-100px">
                                                    <span class="progress-amount" id="WF_C"></span>
                                                </div>
                                                <div class="nk-tb-col tb-col-sm">                                                    
                                                    <span class="progress-amount" id="PLAN_PROG_C"></span>
                                                </div>
                                                <div class="nk-tb-col tb-col-sm">                                                    
                                                    <span class="progress-amount" id="ACTU_PROG_C"></span>
                                                </div>
                                                <div class="nk-tb-col tb-col-sm">
                                                    <span class="progress-amount" id="DEV_PROG_C"></span>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

            
 <script>



    var chart1 = new Chart(document.getElementById('canvas1').getContext('2d'), {


    type: "doughnut",
    data: {
            labels: ["On-Going", "Complete", "Remaining"],
            datasets: [{
                label: "",                    
                backgroundColor: ["#816bff", "#1ee0ac","#e85347"],
                data: [jsonProjectStat.OVERALL.ONGOING_CNT
                    ,jsonProjectStat.OVERALL.COMPLETE_CNT
                    ,jsonProjectStat.OVERALL.REMAIN_CNT]
            }]
        },
        options: {
            legend: {
                display: 0
            }
        }

    });


    
    var series = [];

    series.push(jsonProjectStat.CHART_SERIES.WEEK_5);
    series.push(jsonProjectStat.CHART_SERIES.WEEK_4);
    series.push(jsonProjectStat.CHART_SERIES.WEEK_3);
    series.push(jsonProjectStat.CHART_SERIES.WEEK_2);
    series.push(jsonProjectStat.CHART_SERIES.WEEK_1);
    series.push(jsonProjectStat.CHART_SERIES.WEEK_0);



    var chart1 = new Chart(document.getElementById('canvas1').getContext('2d'), {


        type: "doughnut",
        data: {
                labels: ["On-Going", "Complete", "Remaining"],
                datasets: [{
                    label: "",                    
                    backgroundColor: ["#816bff", "#1ee0ac","#e85347"],
                    data: [jsonProjectStat.OVERALL.ONGOING_CNT
                          ,jsonProjectStat.OVERALL.COMPLETE_CNT
                          ,jsonProjectStat.OVERALL.REMAIN_CNT]
                }]
            },
            options: {
                legend: {
                    display: 0
                }
            }
     
     });
        

    var chart2 = new Chart(document.getElementById('canvas2').getContext('2d'), {
                
        type: "bar",
        data: {
            labels: series,
            datasets: [{
                label: "Planned",
                color: "rgb(255, 99, 132)",                          
                backgroundColor: "rgba(101, 118, 255, 0.5)",
                data: [jsonProjectStat.OVERALL_CHART.PLAN_WEEK_5
                    ,jsonProjectStat.OVERALL_CHART.PLAN_WEEK_4
                    ,jsonProjectStat.OVERALL_CHART.PLAN_WEEK_3
                    ,jsonProjectStat.OVERALL_CHART.PLAN_WEEK_2
                    ,jsonProjectStat.OVERALL_CHART.PLAN_WEEK_1
                    ,jsonProjectStat.OVERALL_CHART.PLAN_WEEK_0
                ]
            }, {
                label: "Actual",                        
                backgroundColor: "rgba(255, 163, 83, 0.5)",
                data: [jsonProjectStat.OVERALL_CHART.ACTU_WEEK_5
                    ,jsonProjectStat.OVERALL_CHART.ACTU_WEEK_4
                    ,jsonProjectStat.OVERALL_CHART.ACTU_WEEK_3
                    ,jsonProjectStat.OVERALL_CHART.ACTU_WEEK_2
                    ,jsonProjectStat.OVERALL_CHART.ACTU_WEEK_1
                    ,jsonProjectStat.OVERALL_CHART.ACTU_WEEK_0
                ]
            }]
        },
        options: {
            legend: {
                display: 1,
                labels: {
                    boxWidth: 12,
                    padding: 10,
                    fontColor: "#6783b8"
                }
            },
            maintainAspectRatio: !1,
            tooltips: {
                enabled: !0,
                callbacks: {
                    title: function (a, e) {
                        return e.labels[a[0].index]
                    },
                    label: function (a, e) {
                        return e.datasets[a.datasetIndex].data[a.index]
                    }
                },
                backgroundColor: "#fff",
                borderColor: "#eff6ff",
                borderWidth: 2,
                titleFontSize: 13,
                titleFontColor: "#6783b8",
                titleMarginBottom: 6,
                bodyFontColor: "#9eaecf",
                bodyFontSize: 12,
                bodySpacing: 4,
                yPadding: 10,
                xPadding: 10,
                footerMarginTop: 0,
                displayColors: !1
            },
            scales: {
                yAxes: [{
                    display: !0,
                    ticks: {
                        beginAtZero: !0,
                        fontSize: 12,
                        fontColor: "#9eaecf",
                        padding: 8,
                        stepSize: 5
                    },
                    gridLines: {
                        color: "#e5ecf8",
                        tickMarkLength: 0,
                        zeroLineColor: "#e5ecf8"
                    }
                }],
                xAxes: [{
                    display: 1,
                    ticks: {
                        fontSize: 12,
                        fontColor: "#9eaecf",
                        source: "auto",
                        padding: 5
                    },
                    gridLines: {
                        color: "transparent",
                        tickMarkLength: 0,
                        zeroLineColor: "transparent",
                        offsetGridLines: !0
                    }
                }]
            }
        }
    });



    var chart3 = new Chart(document.getElementById('canvas3').getContext('2d'), {
            
        type: "line",
        data: {
            labels: series,
            datasets: [{
                label: "Incr.",
                borderColor: "rgb(30,224,172)",
                backgroundColor: "rgba(30,224,172, 0.8)",
                fill: false,
                data: [
                        jsonProjectStat.OVERALL_CHART.SPI_INCR_WEEK_5
                        ,jsonProjectStat.OVERALL_CHART.SPI_INCR_WEEK_4
                        ,jsonProjectStat.OVERALL_CHART.SPI_INCR_WEEK_3
                        ,jsonProjectStat.OVERALL_CHART.SPI_INCR_WEEK_2
                        ,jsonProjectStat.OVERALL_CHART.SPI_INCR_WEEK_1
                        ,jsonProjectStat.OVERALL_CHART.SPI_INCR_WEEK_0
                        ]
            }, {
                label: "Cumm.",
                borderColor: "rgb(232,83,71)",
                backgroundColor: "rgba(232,83,71, 0.8)",
                fill: false,
                data: [
                        jsonProjectStat.OVERALL_CHART.SPI_WEEK_5
                        ,jsonProjectStat.OVERALL_CHART.SPI_WEEK_4
                        ,jsonProjectStat.OVERALL_CHART.SPI_WEEK_3
                        ,jsonProjectStat.OVERALL_CHART.SPI_WEEK_2
                        ,jsonProjectStat.OVERALL_CHART.SPI_WEEK_1
                        ,jsonProjectStat.OVERALL_CHART.SPI_WEEK_0
                        ]
            }]
        },
        options: {
            legend: {
                display: 1,
                labels: {
                    boxWidth: 12,
                    padding: 10,
                    fontColor: "#6783b8"
                }
            },
            maintainAspectRatio: !1,
            tooltips: {
                enabled: !0,
                callbacks: {
                    title: function (a, e) {
                        return e.labels[a[0].index]
                    },
                    label: function (a, e) {
                        return e.datasets[a.datasetIndex].data[a.index]
                    }
                },
                backgroundColor: "#fff",
                borderColor: "#eff6ff",
                borderWidth: 2,
                titleFontSize: 13,
                titleFontColor: "#6783b8",
                titleMarginBottom: 6,
                bodyFontColor: "#9eaecf",
                bodyFontSize: 12,
                bodySpacing: 4,
                yPadding: 10,
                xPadding: 10,
                footerMarginTop: 0,
                displayColors: !1
            },
            scales: {
                yAxes: [{
                    display: 1,
                    ticks: {
                        beginAtZero: !0,
                        fontSize: 12,
                        fontColor: "#9eaecf",
                        padding: 8,
                        stepSize: 0.2
                    },
                    gridLines: {
                        color: "#e5ecf8",
                        tickMarkLength: 0,
                        zeroLineColor: "#e5ecf8"
                    }
                }],
                xAxes: [{
                    display: 1,
                    ticks: {
                        fontSize: 12,
                        fontColor: "#9eaecf",
                        source: "auto",
                        padding: 5
                    },
                    gridLines: {
                        color: "transparent",
                        tickMarkLength: 0,
                        zeroLineColor: "transparent",
                        offsetGridLines: !0
                    }
                }]
            }
        }
    });    

    
    var chart4 = new Chart(document.getElementById('canvas4').getContext('2d'), {
        type: "bar",
            data: {
                labels: series,
                datasets: [{
                    label: "Planned",
                    color: "rgb(255, 99, 132)",                          
                    backgroundColor: "rgba(101, 118, 255, 0.5)",
                    data: []
                }, {
                    label: "Actual",                        
                    backgroundColor: "rgba(255, 163, 83, 0.5)",
                    data: []
                }]
            },
            options: {
                legend: {
                    display: 1,
                    labels: {
                        boxWidth: 12,
                        padding: 10,
                        fontColor: "#6783b8"
                    }
                },
                maintainAspectRatio: !1,
                tooltips: {
                    enabled: !0,
                    callbacks: {
                        title: function (a, e) {
                            return e.labels[a[0].index]
                        },
                        label: function (a, e) {
                            return e.datasets[a.datasetIndex].data[a.index]
                        }
                    },
                    backgroundColor: "#fff",
                    borderColor: "#eff6ff",
                    borderWidth: 2,
                    titleFontSize: 13,
                    titleFontColor: "#6783b8",
                    titleMarginBottom: 6,
                    bodyFontColor: "#9eaecf",
                    bodyFontSize: 12,
                    bodySpacing: 4,
                    yPadding: 10,
                    xPadding: 10,
                    footerMarginTop: 0,
                    displayColors: !1
                },
                scales: {
                    yAxes: [{
                        display: !0,
                        ticks: {
                            beginAtZero: !0,
                            fontSize: 12,
                            fontColor: "#9eaecf",
                            padding: 8,
                            stepSize: 5
                        },
                        gridLines: {
                            color: "#e5ecf8",
                            tickMarkLength: 0,
                            zeroLineColor: "#e5ecf8"
                        }
                    }],
                    xAxes: [{
                        display: 1,
                        ticks: {
                            fontSize: 12,
                            fontColor: "#9eaecf",
                            source: "auto",
                            padding: 5
                        },
                        gridLines: {
                            color: "transparent",
                            tickMarkLength: 0,
                            zeroLineColor: "transparent",
                            offsetGridLines: !0
                        }
                    }]
                }
            }
    });


    var chart5 = new Chart(document.getElementById('canvas5').getContext('2d'), {
            
        type: "line",
        data: {
            labels: series,
            datasets: [{
                label: "Incr.",
                borderColor: "rgb(30,224,172)",
                fill:false,
                backgroundColor: "rgba(30,224,172, 0.8)",
                data: []
            }, {
                label: "Cumm.",          
                borderColor: "rgb(232,83,71)",         
                backgroundColor: "rgba(232,83,71, 0.8)",
                fill:false,
                data: []                        
            }]
        },
        options: {
            legend: {
                display: 1,
                labels: {
                    boxWidth: 12,
                    padding: 10,
                    fontColor: "#6783b8"
                }
            },
            maintainAspectRatio: !1,
            tooltips: {
                enabled: !0,
                callbacks: {
                    title: function (a, e) {
                        return e.labels[a[0].index]
                    },
                    label: function (a, e) {
                        return e.datasets[a.datasetIndex].data[a.index]
                    }
                },
                backgroundColor: "#fff",
                borderColor: "#eff6ff",
                borderWidth: 2,
                titleFontSize: 13,
                titleFontColor: "#6783b8",
                titleMarginBottom: 6,
                bodyFontColor: "#9eaecf",
                bodyFontSize: 12,
                bodySpacing: 4,
                yPadding: 10,
                xPadding: 10,
                footerMarginTop: 0,
                displayColors: !1
            },
            scales: {
                yAxes: [{
                    display: 1,
                    ticks: {
                        beginAtZero: !0,
                        fontSize: 12,
                        fontColor: "#9eaecf",
                        padding: 8,
                        stepSize: 0.2
                    },
                    gridLines: {
                        color: "#e5ecf8",
                        tickMarkLength: 0,
                        zeroLineColor: "#e5ecf8"
                    }
                }],
                xAxes: [{
                    display: 1,
                    ticks: {
                        fontSize: 12,
                        fontColor: "#9eaecf",
                        source: "auto",
                        padding: 5
                    },
                    gridLines: {
                        color: "transparent",
                        tickMarkLength: 0,
                        zeroLineColor: "transparent",
                        offsetGridLines: !0
                    }
                }]
            }
        }
    
    });




    function changeDisc(obj) {
        
        $(".nk-cov-wg4-list-item.active").removeClass("active");
        $(obj).addClass("active");

        var discCd = obj.firstElementChild.innerText;

        var discObj = jsonProjectStat.DISCIPLINE.filter(function(disc) { 
            
            if (disc.DISC_CD == discCd) return disc;

        })[0];


        $("#discTxt").html("CWP Status by Discipline - "+discObj.DISC_CD_NM);
        $("#discTotCnt").html(discObj.TOTAL_CNT);

        $("#discOnGoingTxt").html("On-Going (" + discObj.ONGOING_RT +"%)");
        $("#discOnGoingCnt").html(discObj.ONGOING_CNT);
        
        $("#discCompletedTxt").html("Completed (" + discObj.COMPLETE_RT +"%)");
        $("#discCompletedCnt").html(discObj.COMPLETE_CNT);
        
        $("#discRemainingTxt").html("Remaining (" + discObj.REMAIN_RT +"%)");
        $("#discRemainingCnt").html(discObj.REMAIN_CNT);


        $("#discRemainingRt").css("width", discObj.REMAIN_RT+"%");
        $("#discCompletedRt").css("width", discObj.COMPLETE_RT+"%");
        $("#discOnGoingRt").css("width", discObj.ONGOING_RT+"%");

        var discChart = jsonProjectStat.DISCIPLINE_CHART.filter(function(chart) { 
            
            if (chart.DISC_CD == discCd) return chart;

        })[0];


        chart4.data.datasets[0].data.pop();
        chart4.data.datasets[0].data.pop();
        chart4.data.datasets[0].data.pop();
        chart4.data.datasets[0].data.pop();
        chart4.data.datasets[0].data.pop();
        chart4.data.datasets[0].data.pop();

        chart4.data.datasets[1].data.pop();
        chart4.data.datasets[1].data.pop();
        chart4.data.datasets[1].data.pop();
        chart4.data.datasets[1].data.pop();
        chart4.data.datasets[1].data.pop();
        chart4.data.datasets[1].data.pop();

        
        chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_5);
        chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_4);
        chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_3);
        chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_2);
        chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_1);
        chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_0);

        chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_5);
        chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_4);
        chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_3);
        chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_2);
        chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_1);
        chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_0);
        
        
        chart5.data.datasets[0].data.pop();
        chart5.data.datasets[0].data.pop();
        chart5.data.datasets[0].data.pop();
        chart5.data.datasets[0].data.pop();
        chart5.data.datasets[0].data.pop();
        chart5.data.datasets[0].data.pop();

        chart5.data.datasets[1].data.pop();
        chart5.data.datasets[1].data.pop();
        chart5.data.datasets[1].data.pop();
        chart5.data.datasets[1].data.pop();
        chart5.data.datasets[1].data.pop();
        chart5.data.datasets[1].data.pop();

        
        chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_5);
        chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_4);
        chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_3);
        chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_2);
        chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_1);
        chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_0);

        chart5.data.datasets[1].data.push(discChart.SPI_WEEK_5);
        chart5.data.datasets[1].data.push(discChart.SPI_WEEK_4);
        chart5.data.datasets[1].data.push(discChart.SPI_WEEK_3);
        chart5.data.datasets[1].data.push(discChart.SPI_WEEK_2);
        chart5.data.datasets[1].data.push(discChart.SPI_WEEK_1);
        chart5.data.datasets[1].data.push(discChart.SPI_WEEK_0);         

        chart5.update();



     }


    /**
     * Overall CWP
     **/ 

    $("#cwpTotCnt").html(jsonProjectStat.OVERALL.TOTAL_CNT);

    $("#cwpOnGoingTxt").html("On-Going (" + jsonProjectStat.OVERALL.ONGOING_RT +"%)");
    $("#cwpOnGoingCnt").html(jsonProjectStat.OVERALL.ONGOING_CNT);
    
    $("#cwpCompletedTxt").html("Completed (" + jsonProjectStat.OVERALL.COMPLETE_RT +"%)");
    $("#cwpCompletedCnt").html(jsonProjectStat.OVERALL.COMPLETE_CNT);
    
    $("#cwpRemainingTxt").html("Remaining (" + jsonProjectStat.OVERALL.REMAIN_RT +"%)");
    $("#cwpRemainingCnt").html(jsonProjectStat.OVERALL.REMAIN_CNT);



    if (jsonProjectStat.DISCIPLINE) {

        jsonProjectStat.DISCIPLINE.forEach(function(disc, i) {        
    
            if (i==0) {
    
                $("#discTxt").html("CWP Status by Discipline - "+disc.DISC_CD_NM);
    
                $("#discTotCnt").html(disc.TOTAL_CNT);
    
                $("#discOnGoingTxt").html("On-Going (" + disc.ONGOING_RT +"%)");
                $("#discOnGoingCnt").html(disc.ONGOING_CNT);
                
                $("#discCompletedTxt").html("Completed (" + disc.COMPLETE_RT +"%)");
                $("#discCompletedCnt").html(disc.COMPLETE_CNT);
                
                $("#discRemainingTxt").html("Remaining (" + disc.REMAIN_RT +"%)");
                $("#discRemainingCnt").html(disc.REMAIN_CNT);
    
                $("#discRemainingRt").css("width", disc.REMAIN_RT+"%");
                $("#discCompletedRt").css("width", disc.COMPLETE_RT+"%");
                $("#discOnGoingRt").css("width", disc.ONGOING_RT+"%");
    
                $("#cwpDiscCnt").append('<li><a value="1" class="nk-cov-wg4-list-item active" href="#" onclick="changeDisc(this)"><span style="display:none">'+ disc.DISC_CD +'</span><span class="title">'+ disc.DISC_CD_NM +'</span><span class="count">'+ disc.TOTAL_CNT.toString() +'</span></a></li>')
    
    
    
                var discChart = jsonProjectStat.DISCIPLINE_CHART.filter(function(chart) { 
                
                    if (chart.DISC_CD == disc.DISC_CD) return chart;
    
                })[0];
                
                chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_5);
                chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_4);
                chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_3);
                chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_2);
                chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_1);
                chart4.data.datasets[0].data.push(discChart.PLAN_WEEK_0);
    
                chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_5);
                chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_4);
                chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_3);
                chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_2);
                chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_1);
                chart4.data.datasets[1].data.push(discChart.ACTU_WEEK_0);            
    
                chart4.update();
    
    
                chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_5);
                chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_4);
                chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_3);
                chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_2);
                chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_1);
                chart5.data.datasets[0].data.push(discChart.SPI_INCR_WEEK_0);
    
                chart5.data.datasets[1].data.push(discChart.SPI_WEEK_5);
                chart5.data.datasets[1].data.push(discChart.SPI_WEEK_4);
                chart5.data.datasets[1].data.push(discChart.SPI_WEEK_3);
                chart5.data.datasets[1].data.push(discChart.SPI_WEEK_2);
                chart5.data.datasets[1].data.push(discChart.SPI_WEEK_1);
                chart5.data.datasets[1].data.push(discChart.SPI_WEEK_0);            
    
                chart5.update();            
                            
                
            } else {
                
                $("#cwpDiscCnt").append('<li><a value="1" class="nk-cov-wg4-list-item" href="#" onclick="changeDisc(this)"><span style="display:none">'+ disc.DISC_CD +'</span><span class="title">'+ disc.DISC_CD_NM +'</span><span class="count">'+ disc.TOTAL_CNT.toString() +'</span></a></li>')
                
            }
    
        });



        /**
         * Progress
         **/

        if (jsonProjectStat.PROGRESS) {


            $("#PLAN_PROG_A").html((jsonProjectStat.PROGRESS.PLAN_PROG_A||0)+"%");
            $("#ACTU_PROG_A").html((jsonProjectStat.PROGRESS.ACTU_PROG_A||0)+"%");
            $("#DEV_PROG_A").html((jsonProjectStat.PROGRESS.DEV_PROG_A||0)+"%");
    
    
            $("#PLAN_PROG_A_RT").css("width", (jsonProjectStat.PROGRESS.PLAN_PROG_A||0)+"%");
            $("#PLAN_PROG_A_RT").css("width", (jsonProjectStat.PROGRESS.ACTU_PROG_A||0)+"%");
            $("#PLAN_PROG_A_RT").css("width", (jsonProjectStat.PROGRESS.DEV_PROG_A||0)+"%");    
    
    
            $("#WF_E").html((jsonProjectStat.PROGRESS.WF_E||0)+"%");
            $("#PLAN_PROG_E").html((jsonProjectStat.PROGRESS.PLAN_PROG_E||0)+"%");
            $("#ACTU_PROG_E").html((jsonProjectStat.PROGRESS.ACTU_PROG_E||0)+"%");
            $("#DEV_PROG_E").html((jsonProjectStat.PROGRESS.DEV_PROG_E||0)+"%");
    
    
            $("#WF_P").html((jsonProjectStat.PROGRESS.WF_P||0)+"%");
            $("#PLAN_PROG_P").html((jsonProjectStat.PROGRESS.PLAN_PROG_P||0)+"%");
            $("#ACTU_PROG_P").html((jsonProjectStat.PROGRESS.ACTU_PROG_P||0)+"%");
            $("#DEV_PROG_P").html((jsonProjectStat.PROGRESS.DEV_PROG_P||0)+"%");
    
    
            $("#WF_M").html((jsonProjectStat.PROGRESS.WF_M||0)+"%");
            $("#PLAN_PROG_M").html((jsonProjectStat.PROGRESS.PLAN_PROG_M||0)+"%");
            $("#ACTU_PROG_M").html((jsonProjectStat.PROGRESS.ACTU_PROG_M||0)+"%");
            $("#DEV_PROG_M").html((jsonProjectStat.PROGRESS.DEV_PROG_M||0)+"%");
    
            $("#WF_C").html((jsonProjectStat.PROGRESS.WF_C||0)+"%");
            $("#PLAN_PROG_C").html((jsonProjectStat.PROGRESS.PLAN_PROG_C||0)+"%");
            $("#ACTU_PROG_C").html((jsonProjectStat.PROGRESS.ACTU_PROG_C||0)+"%");
            $("#DEV_PROG_C").html((jsonProjectStat.PROGRESS.DEV_PROG_C||0)+"%");

        }
      
         

    }
    

   

 </script>



   
   
  
  </body>

</html>