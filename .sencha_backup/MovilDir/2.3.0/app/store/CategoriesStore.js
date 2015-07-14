Ext.define('Movildir.store.CategoriesStore', {
	extend: 'Ext.data.Store',

    config: {
        model: 'Movildir.model.CategoriesModel',

       proxy: {
                type: 'ajax',
                url : 'Categories.json',
            reader: 'json'
    },
    autoLoad: true
    }
});