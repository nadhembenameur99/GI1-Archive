var features = 'toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,status=no,left=,top=,width=,height=';
function searchPage(features)
{
   var element = document.getElementById('HomeSiteSearch1');
   window.open('homesitesearch1-results.html?q='+encodeURIComponent(element.value), '', features);
   return false;
}
$(document).ready(function()
{
   searchParseURL('HomeSiteSearch1');
   $("#page1Editbox3").validate(
   {
      required: false,
      type: 'custom',
      param: /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ \t\r\n\f0-9-]*$/,
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
      error_text: 'Invalid caracters!!'
   });
   $("#CONTACTBanner1").animatetext({showDelay: 50, hideDelay: 50, showMode: 2, hideMode: 2, pause: 500});
});
