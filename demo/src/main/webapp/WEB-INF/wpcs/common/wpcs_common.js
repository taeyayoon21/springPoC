
if (dhx.isIE) {

  /**
   * For IE11 Promise PolyFill - bluebird
   */
  $.getScript('/ext/script/bluebird/bluebird.min.js' , function() {});

}

var setIconsPath      = "/ext/image/icon/";
var setBtnImgPath     = "/ext/image/button/";
/**
 * dhmtlx Skin
 *  material
 *  dhx_web
 *  dhx_terrace
 *  dhx_skyblue 
 */

dhx4.skin = 'dhx_terrace';





/**
 * Windows 
 * 
 */

$(window).on("load", function() {

    

});


$(document).ready(function() {

    $("a[href='https://www.grapecity.com/licensing/wijmo']").parent().remove();    

});


$(window).bind("onbeforeunload", function(e) {

    try {
        
        if(dhxWin) dhxWin.unload();

    } catch(e) {}


});



$(window).resize(function() {    

    try {
        
        if(mainLayout) {

            mainLayout.setSizes(false);    

        }

            
    
    } catch(e) {}
  

});



function reload() {

		
}


function refresh() {

		
}



window.onerror = function(errmsg, url, linenum) {

    alert("Line : " + linenum + "\n" + errmsg + "\n" + url);

}
























/**
 * Common Utility
 *  
 */


/**
 * Parameter Value
 * @param name
 * @returns {Number}
 */
		

function getUrlParam(name, url) {
	
	try {
		
		if(url==undefined) url = window.location.href;
		
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
		return decodeURI(results[1] || 0);
		
	} catch (e) {
		return "";
	}
	
}





function setCookie(key, value, expiredays) {

    var todayDate = new Date();

    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = key + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString( ) + ";"

}

function getCookie( key )
{
	var allCookies=document.cookie.split('; ');
	var str = "";
	for ( i=0 ; i < allCookies.length ; i++ )
	{
		cookieArray = allCookies[i].split('=');
		if ( key == cookieArray[0] )
		{
			str = unescape( cookieArray[1] );
		}
	}
  	return str;
}





















/**
 * dhtmlx Object Customize
 *  
 */
var _iconPath = "/ext/image/icon/";


dhtmlXToolbarObject.prototype.setItem = function (a) {

    if (!this.data) this.data = []; 
    this.data.push(a);
};

dhtmlXToolbarObject.prototype.load = function (a) {

    this.setIconsPath(_iconPath);
    this.loadStruct(a||(this.data||[]));
    
};

dhtmlXToolbarObject.prototype.addButton = function (h, g, c, t, a, w) {

    if (!this.conf.icons_path) this.conf.icons_path = _iconPath;




    this._addItem(
        {
           id: h,
           type: "button",
           text: c,
           title: t,
           img: a,
        }, g);

};






















/**
 * FlexGrid Object Custumize
 *  
 */



wijmo.setLicenseKey("wpcs.skec.com|cworks.skec.com,113366545215398#B0LLcNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPnR6QMFWO7lFU5okeOl4LsJFbQRXYppVMGVVOCxUN6QWbChjQ6MERDp5T9EjT4pWTrQ5M5FTUQRTeRpkZqh7bDxESjJWb8hWYQZ5KjZUb6JjcXxERmJkTmdnWw84Yr54cPVVY7YFOlFESBdXSXF6KEdVOQB5bMl6QyMTYBFHZmJ4dPt6ZxJDW6YEW8pGVzo4MQxUTSFUM5BDeLh5N9tWNOtiZ9lVNFZ6RitEe5NTb5gFbEpEWIhWWIFGbB5mcoh6dwQ5RoZXdaNmUiZUat5EbXtSUuR4c9EEaCJTcRJDNv2GMMF7UI5GcUBDdY3GdHt4bUhnQ9dXMK9kMIdzanlkM8sUMPxEOIBleFdVcMdFWhd7NNREWp3WdWNnWzhnbO3WNWNldKhWVsNXeiRVWYdGbERWMwMlcWRzVrcTa0VkVspnTzY4NtVmZShmUZd7SNpWVvpVMUJVRiojITJCLiMTMEFEN6QUNiojIIJCL6ADO4UTO4UzN0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsISNxMTN5ADI8ADNwAjMwIjI0ICdyNkIsISbvNmLjV6az9ycrJ7b7NGLt36YuMWZrNnLzNGc7JiOiMXbEJCLiwqgszomt79isz1osTbnsDIvsTqisD9lsLiOiEmTDJCLigTOzUTMyUDN5YjNzMTMxIiOiQWSiwSfiEjdwIDMyIiOiI3ZxJ");



wijmo.culture.Globalize.calendar.patterns.d = "yyyy-MM-dd";



/**
 * 
 * Allow Editing Custom
 * 
 * Parameter
 *  r : Row Index
 *  c : Col Index
 */

wijmo.grid.FlexGrid.prototype.allowEditing = function (r, c) {

    
    return false;
}



/**
 * Wijmo5-20193.646
 */
/*
wijmo.grid._EditHandler.prototype._allowEditing = function (e, i) {

    var o = this._g;
    if (o.isReadOnly || o.selectionMode == wijmo.grid.SelectionMode.None) return !1;
    if (e < 0 || e >= o.rows.length || i < 0 || i >= o.columns.length) return !1;
    var n = o.rows[e];
    var r = o._getBindingColumn(o.cells, e, o.columns[i]);

    if (!n || n.isReadOnly || !n.isVisible) return !1||o.allowEditing(e, i, n, r);
    
    return !(!r || r.isReadOnly || !r.isVisible)||o.allowEditing(e, i, n, r);

};
*/

/**
 * Wijmo5-20201.664
 */
wijmo.grid._EditHandler.prototype._allowEdit = function (e, i) {
    var o = this._g;
    if (o.isReadOnly || o.selectionMode == wijmo.grid.SelectionMode.None) return !1;
    if (o.collectionView && !o.editableCollectionView) return !1;
    if (null != e) {
        if (e < 0 || e >= o.rows.length) return !1;
        var n = o.rows[e];
        if (!n || n.isReadOnly || !n.isVisible) return !1 || o.allowEditing(e, i);
    }
    if (null != i) {
        if (i < 0 || i >= o.columns.length) return !1;
        var r = o._getBindingColumn(o.cells, e, o.columns[i]);
        if (!r || r.isReadOnly || !r.isVisible) return !1 || o.allowEditing(e, i);
    }
    return !0
};
































/**
 * Ajax
 *  
 *
 *   *********************************** EXAMPLE **************************************
 *
 *   
 *   var param = {param1: $("a").value, param2: $("aa").value, "param2": [ 1, 2, 3 ]};
 *   
 *   ajaxCall("Main.jsp?mode=ajaxSave", param, doFuntion);
 *   
 *   function doFuntion(xmlDoc){	
 *   	
 *   	//Json
 *   	var jsonData = getJsonData(xmlDoc, "json");
 *   	
 *   	//Item value
 *   	
 *   	//Case 1: Item Name does not exist
 *   	var value = getItem(xmlDoc).getProperty("property_Name");
 *   	
 *   	//Case 2: Item Name exist 
 *   	var value = getItem(xmlDoc, "item_Name").getProperty("property_Name");
 *   	
 *   }
 *   
 *   ************************************************************************************
 */

function ajaxCall(url, paramObj, callback){	
	
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













Date.prototype.yyyymmdd = function() {

    var mm = this.getMonth() + 1;
    var dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('-');
};
  




function checkDate(val) {

            
    if (/^[0-9+]{4}-[0-9]{2}-[0-9]{2}$/.test(val) == false) {

        return false;


    } else {

        var dt = new Date(val);

        if (dt == "Invalid Date") {

            return false;
        
        }

        if (dt.yyyymmdd() != val) {

            return false;

        }


    }

    return true;
}




























