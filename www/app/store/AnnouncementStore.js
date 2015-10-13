Ext.define('Zermelo.store.AnnouncementStore', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],
    config: {
        fields: ['announcement_id', 'start', 'end', 'title', 'text', 'read', 'valid'],
        //sorting field name
        sorters: 'start',
        grouper: {
            sortProperty: 'start',
            groupFn: function (record) {
                // set group header
                var d = new Date(record.get('start') * 1000);
                var endDate = new Date(record.get('end') * 1000).setSeconds(-1);
                if (Ext.Date.format(d, 'F j, Y') == Ext.Date.format(new Date(endDate), 'F j, Y'))
                    return Ext.Date.format(d, 'F j, Y');
                else
                    return Ext.Date.format(d, 'F j, Y') + '-' + Ext.Date.format(new Date(endDate), 'F j, Y');
            }
        },
        proxy: {
            type: 'localstorage',
            id: 'announcementstore'
        },
        root: 'user',
        autoLoad: true
    }
});