Ext.define('Movildir.controller.Comments', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            Comments: 'comments',
            CommentsVista: 'commentsvista'
        }
        ,
        control: {
      'comments': {
       
        itemtap: 'showDetail'
      }
    }}
    ,
    alerta : function() {
             alert('Esta es una alerta');
            }  ,
    
  showDetail: function(list, index, target, record) {
    
    this.getCommentsVista().push({
      xtype: 'commentsnav',
      data: record.data
    });
  }
            
    });