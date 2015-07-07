Ext.define('Movildir.view.CategoriesList.CategoriesNav', {

	extend: 'Ext.NavigationView',
	xtype: 'categoriesnav',

	config: {

		tab: {
			title: 'Categorías',
			iconCls: 'bookmarks'
		},

        autoDestroy: false,

		items: [
			{
				xtype: 'categories',
				store: 'CategoriesStore',
				grouped: false,
				pinHeaders: false
			}
		]
	}
});