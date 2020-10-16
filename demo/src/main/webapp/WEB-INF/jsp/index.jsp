<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SKEC</title>



    <!-- jQuery -->
    <script src="/script/jquery-3.5.1.min.js"></script>





    <!-- Bootstrap -->
    <link rel="stylesheet" type="text/css" href="/script/bootstrap/dist/css/bootstrap.min.css" />
    <script src="/script/bootstrap/dist/js/bootstrap.min.js"></script>


    <!-- dhtmlx suite 6 -->
    <link rel="stylesheet" type="text/css" href="/script/dhtmlx/suite_trial/codebase/suite.css" />
    <script src="/script/dhtmlx/suite_trial/codebase/suite.js"></script>


    <!-- Wijmo5 -->
    <link rel="stylesheet" type="text/css" href="/script/grapecity/wijmo-5.20202.724/Dist/styles/wijmo.css" />
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


    <!-- Chart.js v2.9.3 -->
    <link rel="stylesheet" href="/script/chart.js/Dist/Chart.min.css">
    <script src="/script/chart.js/Dist/Chart.min.js"></script>


    <script src="/script/jszip.min.js"></script>


    <!-- MDI Icon Pack  [http://materialdesignicons.com] -->
    <link rel="stylesheet" type="text/css" href="/script/mdi/font/css/materialdesignicons.min.css" />




    <link rel="stylesheet" type="text/css" href="/skec.css"/>
    <script src="/skec.js"></script>


    <style>
        .dhx_sidebar {

            background: #ffb65d;
            background: -moz-linear-gradient(top, #ffb65d 0%, rgba(255, 82, 33, 0.7) 100%);
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffb65d), color-stop(100%, rgba(255, 82, 33, 0.7)));
            background: -webkit-linear-gradient(top, #ffb65d 0%, rgba(255, 82, 33, 0.7) 100%);
            background: -o-linear-gradient(top, #ffb65d 0%, rgba(255, 82, 33, 0.7) 100%);
            background: -ms-linear-gradient(top, #ffb65d 0%, rgba(255, 82, 33, 0.7) 100%);
            background: linear-gradient(to bottom, #ffb65d 0%, rgba(255, 82, 33, 0.7) 100%);
            background-size: 150% 150%;

        }
    </style>


    <script>





    </script>




</head>

<body>
    <div id="dhxObj"></div>


    <script>
        var config = {
            css: "dhx_layout-cell--bordered",
            height: "99vh",
            cols: [
                {
                    id: "sidebar",
                    gravity: false,
                    css: "dhx_layout-cell--border_right",
                    width: "260px",
                    height: "99vh"
                },
                {

                    rows: [

                        {
                            id: "content",
                            padding: 10,
                            gravity: false,
                            css: "bg-light",
                            height: "99vh"
                        }
                    ]
                }

            ]
        };
        var layout = new dhx.Layout("dhxObj", config);



        var sidebar = new dhx.Sidebar(null, { width: 260 });
        var data = [
            {
                id: "toggle",
                css: "toggle-button",
                icon: "mdi mdi-backburger",
            },
            {
                type: "customHTML",
                id: "logo",
                css: "mx-auto",
                html: "<img class='img-fluid' src='/src/image/logo.png'/>"
            },
            {
                type: "customHTML",
                id: "blank",
                html: "<div>&nbsp;</div>"
            },
            {
                "id": "dashboard",
                "value": "Dashboard",
                "icon": "mdi mdi-view-dashboard"
            },
            {
                "id": "document",
                "value": "Document Rev. Status",
                "icon": "mdi mdi-chart-line"
            },
            {
                "id": "material",
                "value": "Material Ref. Files",
                "icon": "mdi mdi-hammer-screwdriver"
            },
            /*
            {
                "id": "reports",
                "value": "Reports",
                "icon": "mdi mdi-file-chart"
            },
            */
            {
                "type": "spacer"
            },
            {
                "id": "notification",
                "value": "Notification",
                "count": 25,
                "icon": "mdi mdi-bell",
                "countColor": "primary"
            },
            {
                "id": "configuration",
                "value": "Configuration",
                "icon": "mdi mdi-settings",
                "items": [
                    {
                        "id": "myAccount",
                        "value": "My Account",
                        "icon": "mdi mdi-account-settings"
                    },
                    {
                        "id": "general",
                        "value": "General Configuration",
                        "icon": "mdi mdi-tune"
                    }
                ]
            }
        ];
        sidebar.data.parse(data);
        layout.cell("sidebar").attach(sidebar);
        layout.cell("sidebar").toggle()




        sidebar.events.on("Click", function (id, e) {

            if (id == "toggle") {


                this.toggle();
                //layout.cell("sidebar").toggle();


            } else if (id == "dashboard") {

                layout.cell("content").attachHTML('<iframe frameborder="0" style="width: 100%; height: 100%; position: relative;" src="/dashboard"></iframe>');

            } else if (id == "document") {

                layout.cell("content").attachHTML('<iframe frameborder="0" style="width: 100%; height: 100%; position: relative;" src="/document"></iframe>');

            } else if (id == "material") {

                layout.cell("content").attachHTML('<iframe frameborder="0" style="width: 100%; height: 100%; position: relative;" src="/material"></iframe>');

            }    



        });



        layout.cell("content").attachHTML('<iframe frameborder="0" style="width: 100%; height: 100%; position: relative;" src="/dashboard?dhxr1601878238036=1"></iframe>');



    </script>
</body>

</html>