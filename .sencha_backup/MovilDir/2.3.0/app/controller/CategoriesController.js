Ext.define('Movildir.controller.CategoriesController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            Categories: 'categories',
            CategoriesNav: 'categoriesnav'
        }
        ,
        control: {
      'categories': {
       
        itemtap: 'showDetail'
      }
    }}
    ,
    alerta : function() {
             alert('esta es una alerta');
            }  ,
    
  showDetail: function(list, index, target, record) {
    
    this.getCategoriesNav().push({
      xtype: 'categoriesvista',
      data: record.data
    });
  }
            
    });