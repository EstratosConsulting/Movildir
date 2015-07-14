Ext.define('Movildir.view.ListComments.CommentsVista', {

	extend: 'Ext.NavigationView',
	xtype: 'commentsvista',

	config: {

		tab: {
			title: 'Comentarios',
			iconCls: 'star'
		},

        autoDestroy: false,

		items: [
			{
				xtype: 'comments',
				store: 'CommentsStore',
				grouped: false,
				pinHeaders: false
			}
		]
	}
});