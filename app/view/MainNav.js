

Ext.define('Movildir.view.MainNav', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainnav',

    requires: [
        'Movildir.view.ListContainer'
    ],

    config: {
        navigationBar: {

        },
        items: [
            {
                xtype: 'listcontainer',
                title: 'Movil Dir'
            }
        ]
    }

});