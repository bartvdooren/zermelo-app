Ext.define('Zermelo.store.ReadmessageStore', {
    extend: 'Ext.data.Store',
    config: {
        fields: ['readId'],
        proxy: {
            type: 'localstorage',
            id: 'read'
        },
        root: 'user',
        autoLoad: true
    }
});