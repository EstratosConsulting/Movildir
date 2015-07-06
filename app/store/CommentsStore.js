Ext.define('Movildir.store.CommentsStore', {
	extend: 'Ext.data.Store',

    config: {
        model: 'Movildir.model.Comments',

       proxy: {
                type: 'ajax',
                url : 'Comments.json',
            reader: 'json'
    },
    autoLoad: true
    }
});