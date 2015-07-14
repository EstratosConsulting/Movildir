

Ext.define('Movildir.view.MainNav', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainnav',
    xtype: 'mainnav',

    requires: [
        'Movildir.view.ListContainer'
    ],

    config: {
        iconCls: 'search',
    title: 'Lista de Contenido',
    items: [
      {xtype: 'listcontainer'}
    ]
  }
        
        
    

});