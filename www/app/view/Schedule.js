// This page handles the scheduling of calendar.
var appointmentdetailView;
Ext.define("Zermelo.view.Schedule", {
    extend: 'Ext.Container',
    xtype: 'schedule',
    id: 'schedule',
    config: {
        listeners: {
            show: function() {
                appointmentdetailView = Ext.create('Zermelo.view.AppointmentDetails');
                changeRefreshIcon();
                messageShow = false;
                 // console.log(messageShow);
                if (window.localStorage.getItem('user_code') == '~me') {
                    if (loc == 'nl') {
                        Ext.getCmp("toolbar_main").setTitle("Rooster");
                        Ext.getCmp("toolbar_day_back").setTitle("Rooster");

                    } else {
                        Ext.getCmp("toolbar_main").setTitle("Schedule");
                        Ext.getCmp("toolbar_day_back").setTitle("Schedule");

                    }
                } else {
                    if (loc == 'nl') {
                        Ext.getCmp("toolbar_main").setTitle("Rooster van " + window.localStorage.getItem('user_code'));
                        Ext.getCmp("toolbar_day_back").setTitle("Rooster van " + window.localStorage.getItem('user_code'));

                    } else {
                        Ext.getCmp("toolbar_main").setTitle("Schedule of " + window.localStorage.getItem('user_code'));
                        Ext.getCmp("toolbar_day_back").setTitle("Schedule of " + window.localStorage.getItem('user_code'));

                    }
                }
            },
            painted: function() {
            	//  console.log("show");
            //Display user code on header
                if (window.localStorage.getItem('user_code') == '~me') {
                    if (loc == 'nl') {
                        Ext.getCmp("toolbar_main").setTitle("Rooster");
                        Ext.getCmp("toolbar_day_back").setTitle("Rooster");

                    } else {
                        Ext.getCmp("toolbar_main").setTitle("Schedule");
                        Ext.getCmp("toolbar_day_back").setTitle("Schedule");

                    }
                } else {
                    if (loc == 'nl') {
                        Ext.getCmp("toolbar_main").setTitle("Rooster van " + window.localStorage.getItem('user_code'));
                        Ext.getCmp("toolbar_day_back").setTitle("Rooster van " + window.localStorage.getItem('user_code'));

                    } else {
                        Ext.getCmp("toolbar_main").setTitle("Schedule of " + window.localStorage.getItem('user_code'));
                        Ext.getCmp("toolbar_day_back").setTitle("Schedule of " + window.localStorage.getItem('user_code'));

                    }
                }
            }
        },
        items: [{
            xtype: 'fullcalendarpanel',
            height: '100%',
            listeners: {
                eventclick: function(calEvent, jsEvent, view, fc) {
                    // get selected event data
                    // console.log("click");
                    //  console.log(clickButton);
                    if (clickButton) {
                        clickButton = false;
                    } else {
                        eventDetails = calEvent;
                        // create home view object

                        var home = Ext.getCmp('home');
                        // add appointment detail viewport
                        Ext.Viewport.add(appointmentdetailView);
                        //hide home view 
                        home.hide();
                        // show appointment detail
                        appointmentdetailView.show();
                        currentView = "appointmentDetail";
                    }
                },
            }
        }]
    }
});

function changeRefreshIcon() {
    
    Ext.getCmp('button_week_refresh').setIconCls('zermelo-refresh-button-' + imageType);
    Ext.getCmp('button_day_refresh').setIconCls('zermelo-refresh-button-' + imageType);
}