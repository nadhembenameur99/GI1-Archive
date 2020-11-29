$(document).ready(function()
{
   $("#page1Editbox1").validate(
   {
      required: false,
      type: 'custom',
      param: /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ \t\r\n\f]*$/,
      color_text: '#000000',
      color_hint: '#00FF00',
      color_error: '#FF0000',
      color_border: '#808080',
      nohint: false,
      font_family: 'Verdana',
      font_size: '13px',
      position: 'topleft',
      offsetx: 0,
      offsety: 0,
      effect: 'none',
      error_text: 'Invalid name'
   });
   $("#page1Editbox2").validate(
   {
      required: false,
      type: 'custom',
      param: /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ \t\r\n\f]*$/,
      color_text: '#000000',
      color_hint: '#00FF00',
      color_error: '#FF0000',
      color_border: '#808080',
      nohint: false,
      font_family: 'Verdana',
      font_size: '13px',
      position: 'topleft',
      offsetx: 0,
      offsety: 0,
      effect: 'none',
      error_text: 'Invalid first name'
   });
   $("#page1Editbox3").validate(
   {
      required: false,
      type: 'email',
      color_text: '#000000',
      color_hint: '#00FF00',
      color_error: '#FF0000',
      opacity: 0.30,
      color_border: '#808080',
      nohint: false,
      font_family: 'Verdana',
      font_size: '13px',
      position: 'topleft',
      offsetx: 0,
      offsety: 0,
      effect: 'slide',
      error_text: 'Invalid mail format'
   });
   $("#page1Editbox3").change(function()
   {
      if ($('#page1Editbox3').val().length == 0)
      {
         ShowObject('page1Editbox3', 1);
      }
   });
   $("#page1Editbox3").trigger('change');
});
