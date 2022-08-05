// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("60.49523809523809em")
                .setHeight("19.65714285714286em")
                .setLayoutData({
                    "rows" : 5,
                    "cols" : 5,
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 50
                        },
                        "2" : {
                            "manualHeight" : 50
                        },
                        "3" : {
                            "manualHeight" : 50
                        },
                        "4" : {
                            "manualHeight" : 50
                        },
                        "5" : {
                            "manualHeight" : 50
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Icon")
                .setHost(host,"xui_ui_icon1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("12.038095238095238em")
                .setHeight("3.7333333333333334em")
                .setImageClass("xuifont xui-icon-xui")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#FF4500"
                    }
                }),
                "C1"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button7")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("12.038095238095238em")
                .setHeight("3.7333333333333334em")
                .setCaption("Cancel")
                .setFontColor("#FF0000")
                .setFontWeight("900"),
                "C4"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button8")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("12.038095238095238em")
                .setHeight("3.7333333333333334em")
                .setCaption("Export")
                .setFontColor("#D2691E")
                .setFontWeight("900"),
                "D4"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button9")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("12.038095238095238em")
                .setHeight("3.7333333333333334em")
                .setCaption("Save")
                .setFontColor("#191970")
                .setFontWeight("900"),
                "B4"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});