// This page shows the necessary detail of announcement which comes from webservice.
Ext.define('Zermelo.view.MessageDetails', {
    extend: 'Ext.Container',
    xtype: 'messageDetails',
    id: 'messageDetails',
    config: {
        listeners: {
            show: function () {
                // check if this message is unread then add in localstoreage message id as read
                if (messageDetails.read == 0) {
                    var mystore = Ext.getStore('ReadmessageStore');
                    mystore.add({
                        readId: messageDetails.announcement_id
                    });
                    mystore.sync();
                }
                // set message details in labels
                Ext.getCmp('messageDetails_title_lbl').setHtml(messageDetails.title);
                //Ext.getCmp('messageDetails_startDate_lbl').setHtml(Ext.Date.format(new Date(messageDetails.start * 1000), 'F j, Y'));
                //Ext.getCmp('messageDetails_endDate_lbl').setHtml(Ext.Date.format(new Date(new Date(messageDetails.end * 1000).setSeconds(-1)), 'F j, Y'));
                Ext.getCmp('messageDetails_description_lbl').setHtml(messageDetails.text);
            }
        },
        layout: {
            type: 'vbox',
            align: 'stretch',
        },
        scrollable: true,
        items: [{
                // titlebar
                xtype: 'titlebar',
                id: 'messageDetails_title',
                docked: 'top',
                cls: 'zermelo-toolbar-main',
                height: '47px',
                locales: {
                    title: 'menu.announcement'
                },
                items: [{
                    //back button in title bar
                    xtype: 'button',
                    locales: {
                        text: 'back.back',
                    },
                    style: {
                        'padding-left': '0px'
                    },
                    iconCls: 'zermelo-back-button-' + imageType,
                    align: 'left',
                    ui: 'plain',
                    id: 'messageDetails_back',
                }]
            }, { //body container
                xtype: 'container',
                style: {
                    'font-size': '14px'
                },
                //padding top left bottom right
                padding: '20 20 10 20',
                items: [{
                    //message title
                    xtype: 'label',
                    id: 'messageDetails_title_lbl',
                    cls: 'zermelo-messagedetail-title',
                }, /*{
                    // start date container
                    xtype: 'container',
                    layout: 'hbox',
                    style: {
                        'margin-bottom': '10px'
                    },
                    items: [{
                        //start date label
                        xtype: 'label',
                        flex: 1,
                        locales: {
                            html: 'announcement.startDate',
                        },
                        cls: 'zermelo-announcement-label',
                    }, {
                        // start date value label
                        xtype: 'label',
                        flex: 1.5,
                        id: 'messageDetails_startDate_lbl',
                        // html:'dfksf',
                        cls: 'zermelo-announcement-label',
                    }]
                    //end start date container
                }, {
                    // end date container
                    xtype: 'container',
                    layout: 'hbox',
                    style: {
                        'margin-bottom': '20px'
                    },
                    items: [{
                        //end date label
                        xtype: 'label',
                        flex: 1,
                        locales: {
                            html: 'announcement.endDate',
                        },
                        cls: 'zermelo-announcement-label',
                    }, {
                        //end date value label
                        xtype: 'label',
                        flex: 1.5,
                        id: 'messageDetails_endDate_lbl',

                        cls: 'zermelo-announcement-label',
                    }]
                    //end end date container
                }, */{
                    //description label
                    xtype: 'label',
                    locales: {
                        html: 'announcement.description',
                    },
                    margin: '10 0 10 0',

                }, {
                    //description value label
                    xtype: 'label',
                    id: 'messageDetails_description_lbl'

                }]
            } //end body container

        ]
    } //end config
});
