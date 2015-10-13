Ext.define('Zermelo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    id: 'main',
    config: {
        listeners: {
            show: function () {
                if (window.localStorage.getItem('accessToken')!=null )
                    if( window.localStorage.getItem('accessToken').length != 0) {
                    //set home view
                    this.setActiveItem(1)
                    
                } else {
                    // set login view
                    this.setActiveItem(0)
                }
            }
        },
        layout: 'card',
        items: [{
            xtype: 'login'
        }, {
            xtype: 'home'
        }]
    }
});