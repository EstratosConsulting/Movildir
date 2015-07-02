Ext.define('Movildir.view.ListContainer', {
    extend: 'Ext.Container',
    alias: 'widget.listcontainer',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'list',
                id: 'dataList',
                itemTpl: [ '<div>{name} </div>',
        '<img class="photo" src="{photo_url}" width="40" height="40"/>{name}<br/><img src="{rating_img_url_small}"/>&nbsp;<small>{address1}</small>'
                ]
            }
        ]
    }

});