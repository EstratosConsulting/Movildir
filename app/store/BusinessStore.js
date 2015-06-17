
Ext.define('Movildir.store.BusinessStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Movildir.model.Business',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'CityBars.model.Business',
        storeId: 'BusinessStore',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
                rootProperty: 'businesses'
            }
        }
    }
});