<%@ page contentType="text/html; charset=utf-8" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html>
<head>
    
    
    
    

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="description" content="" />
    <link href="/favicon.ico" rel="shortcut icon" />

    <title>SKEC - Work Package Control System</title>

    <!-- jQuery -->
    <script src="/ext/script/jquery/jquery-3.4.1.min.js"></script>
   
    <!-- dhtmlx suite 5 -->  
    <link rel="stylesheet" type="text/css" href="/ext/script/dhtmlx/dhtmlxSuite_5_1_pro/skins/material/dhtmlx.css"/>
    <link rel="stylesheet" type="text/css" href="/ext/script/dhtmlx/dhtmlxSuite_5_1_pro/skins/web/dhtmlx.css">
    <link rel="stylesheet" type="text/css" href="/ext/script/dhtmlx/dhtmlxSuite_5_1_pro/skins/terrace/dhtmlx.css"/>

    <script src="/ext/script/dhtmlx/dhtmlxSuite_5_1_pro/codebase/dhtmlx.js"></script>
   
   
    <!-- Chart.js v2.9.3 -->
    <link rel="stylesheet" href="/ext/script/chartjs/Chart.min.css">
    <script src="/ext/script/chartjs/Chart.min.js"></script>

   
    <!-- Bootstrap -->  
    <link rel="stylesheet" type="text/css" href="/ext/style/bootstrap/bootstrap.min.css"/>
    <script src="/ext/script/bootstrap/bootstrap.min.js"></script>

   
    <!-- Wijmo5 -->
    <link rel="stylesheet" type="text/css" href="/ext/script/grapecity/Wijmo5-20201.664/Dist/styles/wijmo.css"/>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.input.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.pdf.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.viewer.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.xlsx.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.undo.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.nav.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/cultures/wijmo.culture.en.min.js"></script>
   
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.filter.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.detail.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.grouppanel.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.multirow.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.sheet.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.xlsx.min.js"></script>

	  <!-- EXCEL MODULE 20200318-->
	  <script src="/ext/script/jszip.min.js"></script>
	  <script src="/ext/script/jszip.js"></script>



    <!-- MDI Icon Pack  [http://meterialdesignicons.com] -->
    <link rel="stylesheet" type="text/css" href="/ext/style/mdi/css/materialdesignicons.css"/>

   
    <!-- WPCS Common  -->
    <link rel="stylesheet" type="text/css" href="/wpcs/common/wpcs_common.css"/>
    <script src="/wpcs/common/wpcs_common.js"></script>
    <script type="text/javascript" src="/scripts/amcharts/amcharts.js?v=<%=System.currentTimeMillis() %>"></script>
    <script src="/wpcs/common/skec.js"></script>
    <script src="/wpcs/common/message.js"></script>
    
    
    

    <!-- Define inline CSS -->
    <style> 

        .dhxform_obj_dhx_terrace div.dhxform_item_label_left {
    
            padding-top: 1px;
        }

        .dhxform_obj_dhx_terrace div.dhxform_btn div.dhxform_btn_txt {
        
            height: 24px;
            line-height: 24px
        }

    </style>    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     <!-- Define Javascript For Event & Search & Save -->
    <script>
       
   

        /**
         * 1. Grobal Variables
         */
        
        
        <%-- 
        var jsonDivCode = <%=jsonDivCode%>;
        var jsonDiscCode = <%=jsonDiscCode%>;

 --%>
        


 

        /** Set Menu Name & Menu Path */
        //const _menuAuth = "<c:out value="W"/>";
        //const _menuNm = "<c:out value="${MENU_NM}"/>";
        //const _menuPath = "<c:out value="${MENU_PATH}"/>";     

 



        /**
         * 2. Combo Json
         */  
        
        //var jsonDataMap =[];        



        /**
         * 3. Onload 
         */  
        function onLoad() {
            

            ajaxSearch();

        }



        /**
         * 4. dhtmlx Event
         */
        
        function formEvent() {


/*             c1.form.getCombo("disc_CD").attachEvent("onSelectionChange", function() {


                ajaxSearch();


            });
 */



        }
   
        function toolbarEvent() {
            
           
            mainToolbar.attachEvent("onClick", function(id) {
 
                if (id == 'btnStd') setWinStdWpkg();

            });
            
            c2.toolbar.attachEvent("onClick", function(id) {

                
                if (id == 'btnImport') excelImportWin();
                if (id == 'btnHeader') skec.flexGrid.toggleColumnPicker(fg, this, id);
                if (id == 'btnFilter') skec.flexGrid.toggleFilter(fg);
                if (id == 'btnExcel') skec.flexGrid.excelExport(fg, 'Project Work Package');
                if (id == 'btnAdd') skec.flexGrid.addRow(fg);
                if (id == 'btnDel') {

                    if (deleteInvalid(fg)) return;
                    skec.flexGrid.deleteRow(fg);

                }
                if (id == 'btnSave') saveValidation(fg);


            });

        }



        
        /**
         * 5. Grid Event 
         * 
         */  
   
        /* function flexGridEvent(fg) {
            
            var tooltip = new wijmo.Tooltip();           

            fg.formatItem.addHandler(function (fg, e) {

                if (e.panel.cellType == 1) {

                    if (e.col == 0 && fg.rows[e.row].dataItem.wpkg_TYPE == "Standard") {

                        fg.rows[e.row].isReadOnly = true;                        
                                        
                    } 

                    if (fg.getColumn(e.col).binding == 'wpkg_CD') {
                        
                        
                        if (fg.rows[e.row].dataItem.WPKG_CNT > 0) {

                            wijmo.toggleClass(e.cell, 'wj-has-notes', true);
                            tooltip.setTooltip(e.cell, '<b>Note : </b><br/>This Work Package Code used in AWP Code.<br/>Can`t edit or delete this work package<br/>'+fg.rows[e.row].dataItem.wpkg_CD);

                        } else {

                            wijmo.toggleClass(e.cell, 'wj-has-notes', false);
                            tooltip.setTooltip(e.cell, '');

                        }

                    }
              
                }

            });



            fg.getCodeIdValid = function(val) {

                if (!val) return true;

                if (!/^[A-Z+][A-Z0-9]{3}$/.test(val)) {

                    return false;

                } else {

                    return true;
                }

            };

            fg.itemValidator = function(row, col) {


                if (fg.columns.getColumn(col).binding == "wpkg_CD") { 

                    var val = fg.getCellData(row, col);

                    if (!fg.getCodeIdValid(val)) {

                        return 'Capital Letter + Number = 4 Digits';

                    } else {

                        return null;
                    }

                }


            };

            fg.deletingRow.addHandler(function (fg, e) {

                if (fg.rows[e.row].dataItem.WPKG_CNT > 0) {

                    skec.error("This Work Package Code used in AWP Code.<br/>"+fg.rows[e.row].dataItem.wpkg_CD);
                    e.cancel = true;
                    
                }

            });            


            /* @Deprecated
            fg.addEventListener(fg.hostElement, 'click', function(e){

                if (_menuAuth != "W") return;

                var h = fg.hitTest(e);

                if (h.panel == fg.rowHeaders) {

                    if (fg.rows[h.row].dataItem.wpkg_TYPE == "Project") {
                        
                        var item = fg.rows[h.row].dataItem;
    
                        editWpkg(item);

                    }

                }

            });
            

            fg._cv.collectionChanged.addHandler(function (cv, e) {

                // Add Row 초기값 
                if (cv.currentAddItem) {
                    
                    e.item.wpkg_TYPE = "Project";

                }

            });

            fg.allowEditing = function(r, c) {

                
                if ((fg.getColumn(c).binding == "disc_CD" || fg.getColumn(c).binding == "wpkg_CD") && fg.rows[r].dataItem.wpkg_TYPE == "Project") {

                    if (fg.rows[r].dataItem.newItem || fg.rows[r].dataItem.WPKG_CNT == 0) {

                        return true;

                    } else {
                        
                        return false; 

                    }
                    
                }                

            }

            
        } */




        function deleteInvalid(fg) {

            if (fg.activeEditor && !fg.getCodeIdValid(fg.activeEditor.value)) {
                        
                fg.activeEditor.value = "";
                fg._cv.remove(fg.rows[fg.selection.row].dataItem);
                
                return true
                
            }
            return false

        }






        /**
         * 6. Search
         * 
         */  
        function ajaxSearch() {


            
            var param = {

                disc_CD : c1.form.getItemValue("disc_CD")

            };

            mainLayout.progressOn();            


            ajaxCall("/poclists", param, function(result, response) {
            //ajaxCall(param, function(result, response) {
                
                if (response) {

                    fg._cv.sourceCollection = response;

                }
            
                mainLayout.progressOff();

            });

        }


        function ajaxCall(url, paramObj, callback){
        //function ajaxCall(paramObj, callback){	
        	
        	if(paramObj==undefined) paramObj = null;
        	
            $.ajax({
                url: url,
                data: paramObj,
                type: "POST",
                dataType: "json",        
                success: function(response, textStatus, jqXHR) {
                	
             
               		
               		if (response.msg == "Session Close") {
                   			
                           skec.error("This session has been terminated.", function() {
                               parent.document.location.href = "/Index.jsp";
                           });
                       
                    
                    }  else {
                           
                        callback(true, response);
                    
                        
                    }
                		
             
                    
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    
                    skec.error("System Error.");
                    console.log(errorThrown);
                    callback(false);
                	
                }

            });

        }
        

        /**
         * 7. Save
         * 
         */  


        function saveValidation(fg) {


            var items = skec.flexGrid.getChangedItems(fg).itemsAdded.concat(skec.flexGrid.getChangedItems(fg).itemsEdited);


            for (var i in items) {

                if (!items[i].disc_CD) {

                    skec.error("Please select Discipline", function() {

                        fg.select(new wijmo.grid.CellRange(fg._findRow(items[i]), fg.getColumn("disc_CD").index, fg._findRow(items[i]), fg.getColumn("disc_CD").index), true);

                    });

                    return;

                }

                if (!items[i].wpkg_CD) {

                    skec.error("Please input Work package Code", function() {

                        fg.select(new wijmo.grid.CellRange(fg._findRow(items[i]), fg.getColumn("wpkg_CD").index, fg._findRow(items[i]), fg.getColumn("wpkg_CD").index), true);

                    });

                    return;

                }

            
            }

                       
            skec.flexGrid.checkDupData(fg, ["wpkg_CD"]).then(function(result) {

                if (!result) ajaxSave(fg);

            });


        }



        function ajaxSave() {
       
            
            var param = {
                ITEMS : skec.flexGrid.getChangedItemsJson(fg)
            }


            mainLayout.progressOn();

            ajaxCall("PjtWorkPackage.jsp?mode=ajaxSave", param, function(result, response) {
                
                if (response) {

                    if (response.result == "success") {

                        skec.alert(skec.msg.fg.saveOK);
                        ajaxSearch();

                    } else if (response.result == "error") {

                        skec.error(response.msg);

                    }
                
                }
                
                mainLayout.progressOff();

            });   


        }
        


    </script>   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</head>






















<body> 

    
    <!-- dhtmlx.Layout Element -->
    <div id="dhtmlxObj"></div>


    <!-- Define Javascript For Components Definition -->
    <script>     
    

          
        /** 1. Set dhtmlx Main Layout 
         *  
         * var mainLayout = new dhtmlXLayoutObject("dhtmlxObj", '2U');
         * 
         * 1 Cell  : 1C
         * 2 Cells : 2E, 2U 
         * 3 Cells : 3E, 3W, 3J, 3L, 3T, 3U
         *
         */
        var mainLayout = new dhtmlXLayoutObject("dhtmlxObj", '2E');



        /** 2. Meun & Breadcrumb */
        //var mainToolbar = skec.breadcrumb(mainLayout, _menuNm, _menuPath);
        //var mainToolbar = skec.breadcrumb(mainLayout, 'Project Work Package', 'hi2');
        var mainToolbar = skec.breadcrumb(mainLayout, 'Project Work Package', 'Project > AWP Code Mgmt > Project WOrk Package');

        
        /** 2-1. mainToolbar Button  
         * 
         * mainToolbar.addButton(Stirng|ButtonId, Int|Order, String|Text, Stirng|ImageName);
         * 
         **/         
        //mainToolbar.addButton("btnSearch", 1, "Search", "Search", "Detail.gif");
        //mainToolbar.addButton("btnStd", 1, "Get Std. Workpackage", "Header", "btn_icon_link.gif");

        mainToolbar.addButton("btnStd", 1, "Get Std. Workpackage", "Get Std. Work Package", "btn_icon_link.gif", "W");
        
        
        




        /**
         * 3. Define Main Layout Cells
         * 
         * var c1 = mainLayout.cells('a');
         * var c2 = mainLayout.cells('b'); 
         * var c3 = mainLayout.cells('c'); 
         * 
         */            
        var c1 = mainLayout.cells('a');
        var c2 = mainLayout.cells('b');




        /**
         * 3-1. Define Sub-Layout Cells
         * 
         * c1.lay = new dhtmlXLayoutObject(c1, '2E');
         * c1.lay.c1 = c1.lay.cells('a');
         * c1.lay.c2 = c1.lay.cells('b');
         * 
         * c2.lay = new dhtmlXLayoutObject(c2, '2E');
         * c2.lay.c1 = c2.lay.cells('a');
         * c2.lay.c2 = c2.lay.cells('b');
         * 
         */






        
        /**
         * 4. Set Layout Cells Properties         
         * 
         * c1.setWidth(int);
         * c1.setHeight(int);
         * c1.setText('headerTxt')
         * c1.hideHeader();
         * c1.hideArrow();
         * c1.fixSize(true, false);         
         * 
         */  
  
        c1.hideHeader();
        c1.setHeight(50);
        c1.fixSize(true, true);        
        c2.hideHeader();


        




        /**
         * 5. Set Layout Cell Form
         * 
         * c1.form = c1.attachattachForm();
         * c1.form.load(json_form);
         */
        
        
        var json_form = [            
              {type: "block", width: "*", blockOffset: 10, offsetLeft: "0", offsetTop: "10", list: [
                {type: "combo", name:"disc_CD", label: "Discipline", position:"label-left", labelWidth: 90, inputWidth:  "150", value: "", offsetLeft: 10, readonly: true}                
              ]
        	}
        ];

        c1.form = c1.attachForm();
        c1.form.load(json_form);


        c1.form.getCombo("disc_CD").addOption([{"value":"","text":"All"}]);
        //c1.form.getCombo("disc_CD").addOption(jsonDiscCode);
        c1.form.getCombo("disc_CD").selectOption(0);


        
        /**
         *  6. Set Main Layout Cell Toolbar
         *           
         *  c1.toolbar = c1.attachToolbar();       
         *
         *  c1.toolbar.setItem({ id: "btnNew", type: "button",  title: "New", img: "RowPlus.gif" });
         *  c1.toolbar.setItem({ id: "btnDel", type: "button",  title: "Delete", img: "RowMinus.gif" });
         *  c1.toolbar.setItem({ id: "btnSave", type: "button",  title: "Save", img: "Save.gif"});
         *  c1.toolbar.setAlign("right");
         *  c1.toolbar.load();
         * 
         *  c1.toolbar.addSpacer("btnExcel");
         */


        c2.toolbar = c2.attachToolbar();            

      
        
        
        
         
        /* if(_menuAuth == 'W') { */
        
            c2.toolbar.setAlign("left");
            c2.toolbar.addButton("btnImport", 1, "Excel Import", "Excel Import", "Excel.gif", "W");
            c2.toolbar.addSpacer("btnImport");
/*         
        } else {

            c2.toolbar.setAlign("right");

        } */
        
        
        c2.toolbar.addButton("btnHeader", 6, "", "Header", "HeaderDef.gif");
        c2.toolbar.addButton("btnFilter", 7, "", "Filter", "filter_hidden.gif");
        c2.toolbar.addButton("btnExcel", 8, "", "Export", "Excel.gif");
        c2.toolbar.addButton("btnAdd", 9, "", "New", "RowPlus.gif", "W");        
        c2.toolbar.addButton("btnDel", 10, "", "Delete", "RowMinus.gif", "W");
        c2.toolbar.addButton("btnSave", 11, "", "Save", "Save.gif", "W");                   
        
        
        
                

        



        /**
         * 7. Set Layout Cell Statusbar For FlexGrid
         * 
         * c1.statusbar = c1.attachStatusBar();
         * 
         */          
         c2.statusbar = c2.attachStatusBar();

        
        


        /**
         * 8. Define FlexGrid 
         * 
         */      

        
        /**
         * 8-1. Set FlexGrid host Element
         * 
         * ex)
         * c2.attachHTMLString("<div id='fg' class='flexGrid'></div>");
         * 
         */      
        c2.attachHTMLString("<div id='fg' class='flexGrid'></div>");
        
        
        
        /**
         * 8-2. Define DataMap 
         * 
         * ex)
         * var lv1 = new wijmo.grid.DataMap(json_lv1, "id", "id");
         * 
         */ 
         /* jsonDataMap["disc_CD"] = new wijmo.grid.DataMap(jsonDiscCode, "value", "text"); */
       
        
        
        
        

        


        /**
         * 8-3. FlexGrid Init.
         * 
         * Ex.1)
         * var fg = skec.flexGrid.init("#fg");
         * 
         * Ex.2)
         * var fg = skec.flexGrid.init("#fg", {
         * 
         *    columns : [     
         * 
         *    ]
         * 
         * });
         * 
         * 
         */ 
        var fg = skec.flexGrid.init("#fg", {

            columns : [
               
               {binding:'wpkg_TYPE', header: 'Package Type', width: 120, align:'center', isReadOnly: true },               
               {binding:'disc_CD', header: 'Discipline', width: 140, align:'center'}, //, dataMap: jsonDataMap["disc_CD"]},
               {binding:'wpkg_CD', header: 'Work Package', width: 150, align:'center', maxLength:4, isReadOnly: true},
               {binding:'wpkg_DESC', header: 'Description', width: 300, align:''},
               {binding:'wpkg_RMK', header: 'Remark', width: '*', align:'', isRequired:false}
           ]

        });

        //fg.rowHeaders.columns.getColumn(0).width = 40;


        fg.statusbar = c2.statusbar;




        /**
         * 8-4. Define Column Group
         * 
         * fg.columnGroups = [
         * 
         *   
         * 
         * ]
         * 
         */
       
       
        
        



        /**
         * 8-5. FlexGrid Filter Optional
         * 
         * ex)
         * skec.flexGrid.filter(fg); 
         * 
         */ 
        skec.flexGrid.filter(fg);



        /**
         * 8-6. FlexGrid Column Picker Optional
         * 
         * ex)
         * skec.flexGrid.setColumPicker(fg);
         * 
         */         
         skec.flexGrid.columPicker(fg);



        /**
         * 8-7. FlexGrid contextMenu Optional
         * 
         * ex)
         * skec.flexGrid.ctxMenu(fg);
         * 
         */         
        skec.flexGrid.ctxMenu(fg);

        
        
 


        
        /**
         * 8-8. FlexGrid set Read-Only Optional
         * 
         * ex)
         * fg.isReadOnly = true;
         * 
         */     

        


        




        /**
         * 9. FlexGrid Event Call
         * 
         * ex)
         * flexGridEvent(fg)
         * 
         */

        //flexGridEvent(fg);




          

        
        /**
         * 10. dhtmlx Event
         * 
         */ 
        //formEvent();
        //toolbarEvent();






        /**
         * 11. OnLoad Function 
         * 
         */ 
         onLoad();



         function onLoad() {
             

             ajaxSearch();

         }


         function ajaxSearch() {


             
             var param = {

                 disc_CD : c1.form.getItemValue("disc_CD")

             };

             mainLayout.progressOn();            


             ajaxCall("/poclists", param, function(result, response) {
             //ajaxCall(param, function(result, response) {
                 
                 if (response) {
					//alert('response!! : ' + response);
                     fg._cv.sourceCollection = response;

                 }
             
                 mainLayout.progressOff();

             });

         }


         function ajaxCall(url, paramObj, callback){
         //function ajaxCall(paramObj, callback){	
         	
         	if(paramObj==undefined) paramObj = null;
         	
             $.ajax({
                 url: url,
                 data: paramObj,
                 type: "POST",
                 dataType: "json",        
                 success: function(response, textStatus, jqXHR) {
                 	
              
                		
                		
                		if (response.msg == "Session Close") {
                    			
                            skec.error("This session has been terminated.", function() {
                                parent.document.location.href = "/Index.jsp";
                            });
                        
                     
                     }  else {

                         
                         
                         callback(true, response);
                     
                         
                     }
                 		
              
                     
                 },
                 error: function(jqXHR, textStatus, errorThrown) {
                     
                     skec.error("System Error.");
                     console.log(errorThrown);
                     callback(false);
                 	
                 }

             });

         }

         

        /**
         * 11. Define Popup Window
         * 
         *   var dhxWin = new dhtmlXWindows();
         *   dhxWin.attachViewportTo("dhtmlxObj");
         */

        var dhxWin = new dhtmlXWindows();
        dhxWin.attachViewportTo("dhtmlxObj");

        
        var win, fs, fsfg;


        function excelImportWin() {

            
            var win = dhxWin.createWindow("w1", 20, 30, 1060, 650);

            dhxWin.window("w1").centerOnScreen();
                
            win.setModal(true);
            win.setText("Excel Import");
                
            win.layout = win.attachLayout('1C');
                
            win.c1 = win.layout.cells('a');

            win.c1.setText("Project Work Package");            
            
            
            win.toolbar = win.layout.attachToolbar();

            /*
            win.toolbar.setAlign("left");
            win.toolbar.addButton("btnExcel", 1, "Excel Upload", "Excel Upload", "Excel.gif");
            win.toolbar.addSeparator("sep1",2);
            win.toolbar.addButton("btnTmplt", 3, "Excel Template", "Excel Template", "btn_icon_download.gif");
            win.toolbar.addSpacer("btnTmplt");
            win.toolbar.addSeparator("sep2",4);
            */
            win.toolbar.addButton("btnSave", 5, "Save", "Save", "Save.gif");
            win.toolbar.setAlign("right");
            

            win.toolbar.attachEvent("onClick", function(id) {

                if (id == "btnSave") {
                    
                    importValidation();                   

                } 

            });

            win.c1.attachHTMLString("<div id='fs' class='flexSheet'></div>");


            fs = new wijmo.grid.sheet.FlexSheet('#fs');

            fs.allowAddNew=true;
            fs.autoGenerateColumns = false;

            fsfg = new wijmo.grid.FlexGrid(document.createElement("div"), {
                
                autoGenerateColumns:false,
                columns: JSON.parse(fg.columnLayout).columns

            });
            
            fs.addBoundSheet("Sheet", new wijmo.collections.CollectionView([]), 0, fsfg);


            fs.columns.remove(fs.getColumn("wpkg_TYPE"));
            //fs.getColumn("disc_CD").dataMap = jsonDataMap["disc_CD"];
            fs.getColumn("wpkg_CD").isReadOnly = false;
            fs.getColumn("wpkg_DESC").width = 300;
            fs.getColumn("wpkg_RMK").width = 300;


            fs.cellEditEnded.addHandler(function(fg, e) {

                if (fg.getColumn(e.col).binding == "wpkg_CD") {

                    if (fg.getCellData(e.row, e.col)) {

                        fg.setCellData(e.row, e.col, fg.getCellData(e.row, e.col).toUpperCase());

                    }

                }

            });


            
            function importValidation() {


                for (var i in fs._cv.items) {

                    var rowIndx = fs._findRow(fs._cv.items[i]);

                    if (!fs._cv.items[i].disc_CD) {

                        skec.error("Please select Discipline", function() { 

                            fs.select(rowIndx, fs.getColumn("disc_CD").index);

                        });

                        return;

                    }

                    if (!fs._cv.items[i].wpkg_CD) {

                        skec.error("Please input Work Package", function() { 

                            fs.select(rowIndx, fs.getColumn("wpkg_CD").index);

                        });

                        return;

                    } else {

                        if (!fg.getCodeIdValid(fs._cv.items[i].wpkg_CD)) {

                            skec.error("Work Package must be 4 Digits<br/>[Capital Letter + Number]", function() { 

                                fs.select(rowIndx, fs.getColumn("wpkg_CD").index);

                            });
                            return;
                            
                        }

                    }
                    

                }

            
                skec.flexGrid.checkDupData(fs, ["wpkg_CD"]).then(function(result) {

                    if (!result) importSave();

                });

                


            }




           function importSave() {


                var param = {
                    ITEMS : JSON.stringify(fs._cv.items.map(function(arr){ return arr}))
                }                


                win.layout.progressOn();

                ajaxCall("PjtWorkPackage.jsp?mode=ajaxImportSave", param, function(result, response) {
                    
                    if (response) {

                        if (response.result == "success") {

                            skec.alert(skec.msg.fg.saveOK);
                            ajaxSearch();

                        } else if (response.result == "error") {

                            skec.error(response.msg);

                        }
                    
                    }
                    
                    win.layout.progressOff();

                });


            }            

            




            win.attachEvent("onResizeFinish", function(win) {

                if (dhx.isIE) fs.refresh()   


            });

        }  


        
        function setWinStdWpkg() {


            win = dhxWin.createWindow("w2", 20, 30, 330, 155);

            dhxWin.window("w2").centerOnScreen();
            
            win.setModal(true);


            win.setText("Get Std. Work Package");
            
            
            win.layout = win.attachLayout('1C');        
            
            win.c1 = win.layout.cells('a');

            win.c1.setHeight('160');
            win.c1.hideHeader();



            var json_from = [
                
                {type: "block", blockOffset: 0, offsetTop: 10, list: [
                    
                    {type: "combo", name: "DIV_CD", label: "Division Code", position:"label-left", required: true, options: jsonDivCode, labelWidth: 130, offsetLeft: 10, offsetTop: 0, inputWidth:"147"},                    
                    {type: "button", name: "btnOk", value: "Ok", offsetLeft: 120, offsetTop: 15}
                    
                ]
            }];
                                 
            win.c1.form = win.c1.attachForm(json_from);


                  

            $(".dhx_cell_wins").find(".dhxform_label").css({"background-color":"#f5f5f5"});




            win.c1.form.attachEvent("onButtonClick", function(name){


                if (name == "btnOk") {

                    win.layout.progressOn();

                    var param = {
                        
                        DIV_CD : win.c1.form.getItemValue("DIV_CD")

                    }

                    ajaxCall("PjtWorkPackage.jsp?mode=ajaxGetStd", param, function(result, response) {
                        
                        if (response) {

                            if (response.result == "success") {

                                skec.alert(skec.msg.fg.saveOK, function() {

                                    win.layout.progressOff();
                                    dhxWin.window("w2").close();

                                });

                            } else if (response.result == "error") {

                                skec.error(response.msg);
                                win.layout.progressOff();

                            }
                        
                        }
                        

                    });

                }


                
            });

            


            win.attachEvent("onClose", function(win) {
    
                ajaxSearch();
                return true;

            });            







        }

    </script>
    

 
 
 </body>







</html>