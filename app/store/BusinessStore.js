
Ext.define('Movildir.store.BusinessStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Movildir.model.Business',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'Movildir.model.Business',
        storeId: 'BusinessStore',
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'businesses'
            }
        }
    }
});