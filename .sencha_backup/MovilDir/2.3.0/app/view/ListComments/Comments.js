Ext.define('Movildir.view.ListComments.Comments', {

	extend: 'Ext.List',
	xtype: 'comments',

	config: {
		title: 'Comentarios',
		itemCls: 'map',
        variableHeights: true,
		itemTpl: [
            
            
             '<h2>Empresa: {id_bussines}</h2>'
            
            
		]
	}
});