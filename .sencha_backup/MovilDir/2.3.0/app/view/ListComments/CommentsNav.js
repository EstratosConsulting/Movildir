Ext.define('Movildir.view.ListComments.CommentsNav', {
  extend: 'Ext.Panel',
  xtype: 'commentsnav',
  config: {
    title: 'Comentarios',
    
    autoRender :true,
    styleHtmlContent: true,
    scrollable: 'vertical',
    tpl: new Ext.XTemplate(
      
        
            '<h3>Comentarios: {text_comment}</h3>',
			'<h6>Calificación: {rating}</h6>'
            
    )
  }
});