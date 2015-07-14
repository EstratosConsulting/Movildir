Ext.define('Movildir.view.CategoriesList.Categories', {

	extend: 'Ext.List',
	xtype: 'categories',

	config: {
		title: 'Categorías',
		itemCls: 'map',
        variableHeights: true,
		itemTpl: [
            
            '<h3>Categoría: {name}</h3>',
            			            
            
		]
	}
});