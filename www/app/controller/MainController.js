// from http://trevorbrindle.com/chrome-43-broke-sencha/
Ext.override(Ext.util.SizeMonitor, {
    constructor: function(config) {
        var namespace = Ext.util.sizemonitor;

        if (Ext.browser.is.Firefox) {
            return new namespace.OverflowChange(config);
        } else if (Ext.browser.is.WebKit) {
            if (!Ext.browser.is.Silk && Ext.browser.engineVersion.gtEq('535') && !Ext.browser.engineVersion.ltEq('537.36')) {
                return new namespace.OverflowChange(config);
            } else {
                return new namespace.Scroll(config);
            }
        } else if (Ext.browser.is.IE11) {
           return new namespace.Scroll(config);
        } else {
           return new namespace.Scroll(config);
        }
    }
});
Ext.override(Ext.util.PaintMonitor, {
   constructor: function(config) {
       if (Ext.browser.is.Firefox || (Ext.browser.is.WebKit && Ext.browser.engineVersion.gtEq('536') && !Ext.browser.engineVersion.ltEq('537.36') && !Ext.os.is.Blackberry)) {
           return new Ext.util.paintmonitor.OverflowChange(config);
       }
       else {
           return new Ext.util.paintmonitor.CssAnimation(config);
       }
   }
});

Ext.define('Zermelo.controller.MainController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            // ids
            announcementlist: '#announcementlist',
            messageDetails_back: '#messageDetails_back',
            appointmentDetails_back: '#appointmentDetails_back',

            // views xtype
            messageList: 'messageList',
            messageDetails: 'messageDetails',
            home: 'home',
            appointmentDetails: 'appointmentDetails',
        },
        control: {
            announcementlist: {
                itemtap: 'onItemTap'
            },
            messageDetails_back: {
                tap: 'back_messageList'
            },
            appointmentDetails_back: {
                tap: 'back_schedule'
            }
        },
    },
    // Announcement list item tap
    onItemTap: function (list, index, target, record) {
        // create home view object
        home = this.getHome() || Ext.create('Zermelo.view.Home');
        // create messagedetail view object
        messagedetails = this.getMessageDetails() || Ext.create('Zermelo.view.MessageDetails');
        //get selected index record
        var rec = list.getStore().getAt(index);
        messageDetails = rec.data;
        //add messagedetail in viewport
        Ext.Viewport.add(messagedetails);
        messagedetails.show();
        home.hide();
        currentView="messageDetail";
    },
    // tap back button on annoucement detail view
    back_messageList: function () {
        home = this.getHome() || Ext.create('Zermelo.view.Home');
        home.list.removeCls('zermelo-menu-list');
        messagedetails = this.getMessageDetails() || Ext.create('Zermelo.view.MessageDetails');
        messagedetails.hide();
        home.show();
        currentView="";
    },
    // tap back button on appointment detail view
    back_schedule: function () {
        console.log("back");
        appointment_detail_open=false;
        home = this.getHome() || Ext.create('Zermelo.view.Home');
        home.list.removeCls('zermelo-menu-list');
        appointmentDetail = this.getAppointmentDetails() || Ext.create('Zermelo.view.AppointmentDetails');
        home.show();
        appointmentDetail.hide();
        currentView="";
    }
});
