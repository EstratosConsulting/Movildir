

Ext.define('Movildir.view.MainNav', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainnav',
    xtype: 'mainnav',

    requires: [
        'Movildir.view.ListContainer'
    ],

    config: {
        iconCls: 'news',
    title: 'List Container',
    items: [
      {xtype: 'listcontainer'}
    ]
  }
        
        
    

});