Ext.define('Movildir.view.Main', {
  extend: 'Ext.Container',
  xtype: 'main',
  config: {
    cls: 'default-bg',
    layout: 'card',
    items: [{
      xtype: 'categories'
    }]
  }
});