Ext.define('Movildir.view.CategoriesList.CategoriesVista', {
  extend: 'Ext.Panel',
  xtype: 'categoriesvista',
  config: {
    title: 'Categorías',
    
    autoRender :true,
    styleHtmlContent: true,
    scrollable: 'vertical',
    tpl: new Ext.XTemplate(
      
        '<h5>Número: {id}</h5>'
            
    )
  }
});