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
    <link rel="stylesheet" href="/script/chart.js/Dist/Chart.min.css">
    <script src="/script/chart.js/Dist/Chart.min.js"></script>



    <!-- Wijmo5 -->
    <link rel="stylesheet" type="text/css" href="/script/grapecity/wijmo-5.20202.724/Dist/styles/wijmo.css"/>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.input.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.pdf.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.viewer.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.xlsx.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.undo.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.nav.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/cultures/wijmo.culture.en.min.js"></script>

    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.grid.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.grid.filter.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.grid.detail.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.grid.grouppanel.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.grid.multirow.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.grid.sheet.min.js"></script>
    <script src="/script/grapecity/wijmo-5.20202.724/Dist/controls/wijmo.grid.xlsx.min.js"></script>

    
    <script src="/script/jszip.min.js"></script>


    <!-- MDI Icon Pack  [http://materialdesignicons.com] -->
    <link rel="stylesheet" type="text/css" href="/script/mdi/font/css/materialdesignicons.min.css"/>




    <link rel="stylesheet" type="text/css" href="/skec.css"/>
    <script src="/skec.js"></script>


    <style>
       


    </style>


    <script>

       



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
                                <h3 class="nk-block-title page-title">Document Rev. Status</h3>                                
                            </div>                            
                        </div>
                    </div>
                    <div class="nk-block">
                        <div id="fg" class="flexGrid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

            
    <script>



        var fg = new wijmo.grid.FlexGrid("#fg", {
            
            autoGenerateColumns:false,
            columns : [
            
                {binding:"COL2" , header: "OUT_TR_NO", width: 200, align: 'center'},
                {binding:"COL3" , header: "IN_TR_NO", width: 220, align: 'center'},
                {binding:"COL4" , header: "APPROVAL_STATUS", width: 220, align: 'left'},
                {binding:"COL5" , header: "ACTIVITY_CODE", width: 120, align: 'center'},
                {binding:"COL6" , header: "ACTIVITY_NAME", width: 120, align: 'center'},
                {binding:"COL7" , header: "UNIT", width: 120, align: 'center'},
                {binding:"COL8" , header: "DISCIPLINE", width: 120, align: 'center'},
                {binding:"COL9" , header: "DOC_NO", width: 120, align: 'center'},
                {binding:"COL10", header: "DISP_DOC_NO", width: 120, align: 'center'},
                {binding:"COL11", header: "REV_NO", width: 120, align: 'center'},
                {binding:"COL12", header: "DOC_TITLE", width: 120, align: 'center'},
                {binding:"COL13", header: "CLASS", width: 120, align: 'center'},
                {binding:"COL14", header: "WF_TYPE", width: 120, align: 'center'},
                {binding:"COL15", header: "MAN_HOUR", width: 120, align: 'center'},
                {binding:"COL16", header: "DOC_TYPE_NM", width: 120, align: 'center'},
                {binding:"COL17", header: "DOC_SIZE", width: 120, align: 'center'},
                {binding:"COL18", header: "REMARK", width: 150, align: 'center'},
                {binding:"COL19", header: "STATUS", width: 150, align: 'center'},
                {binding:"COL20", header: "REASON", width: 150, align: 'center'},
                {binding:"COL21", header: "ES_DT", width: 150, align: 'center'},
                {binding:"COL22", header: "EF_DT", width: 150, align: 'center'},
                {binding:"E19_P", header:"Design Started (E19) Plan", width: 150, align:"center"},
                {binding:"E19_A", header:"Design Started (E19) Actual", width: 150, align:"center"},
                {binding:"E63_P", header:"Drafting Completed (E63) Plan", width: 150, align:"center"},
                {binding:"E63_A", header:"Drafting Completed (E63) Actual", width: 150, align:"center"},
                {binding:"E62_P", header:"Issue to COMPANY for INFORMATION / DESIGN (E62) Plan", width: 150, align:"center"},
                {binding:"E62_A", header:"Issue to COMPANY for INFORMATION / DESIGN (E62) Actual", width: 150, align:"center"},
                {binding:"E01_P", header:"IFR Completed (E01) Plan", width: 150, align:"center"},
                {binding:"E01_A", header:"IFR Completed (E01) Actual", width: 150, align:"center"},
                {binding:"E65_P", header:"Issued to Company for Review / Comments (E64) Plan", width: 150, align:"center"},
                {binding:"E65_A", header:"Issued to Company for Review / Comments (E64) Actual", width: 150, align:"center"},
                {binding:"E64_P", header:"Submission of IFH (E65) Plan", width: 150, align:"center"},
                {binding:"E64_A", header:"Submission of IFH (E65) Actual", width: 150, align:"center"},
                {binding:"E66_P", header:"Receive COMPANY approval for IFH (E66) Plan", width: 150, align:"center"},
                {binding:"E66_A", header:"Receive COMPANY approval for IFH (E66) Actual", width: 150, align:"center"},
                {binding:"E18_P", header:"Company Comments Received (E18) Plan", width: 150, align:"center"},
                {binding:"E18_A", header:"Company Comments Received (E18) Actual", width: 150, align:"center"},
                {binding:"E20_P", header:"Submission of IFA (E20) Plan", width: 150, align:"center"},
                {binding:"E20_A", header:"Submission of IFA (E20) Actual", width: 150, align:"center"},
                {binding:"E06_P", header:"Resubmit for Final Approval (E06) Plan", width: 150, align:"center"},
                {binding:"E06_A", header:"Resubmit for Final Approval (E06) Actual", width: 150, align:"center"},
                {binding:"E22_P", header:"Receive Company Approval (E22) Plan", width: 150, align:"center"},
                {binding:"E22_A", header:"Receive Company Approval (E22) Actual", width: 150, align:"center"},
                {binding:"E16_P", header:"Issue for Construction (IFC) - 1st Issue (E16) Plan", width: 150, align:"center"},
                {binding:"E16_A", header:"Issue for Construction (IFC) - 1st Issue (E16) Actual", width: 150, align:"center"},
                {binding:"E17_P", header:"Issue for Construction (IFC) - Final Issue (E17) Plan", width: 150, align:"center"},
                {binding:"E17_A", header:"Issue for Construction (IFC) - Final Issue (E17) Actual", width: 150, align:"center"}
            

        
            ]
            
            
        });

        fg.itemsSource  = new wijmo.collections.CollectionView([]);


        $.ajax({

            url : "/flexGridData.json",
            datatype : "json",
            success: function(data) {

                fg._cv.sourceCollection = data;
            }

        })
        
        
    

    </script>
   
   
  
  </body>

</html>