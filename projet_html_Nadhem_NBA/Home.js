var features = 'toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,status=no,left=,top=,width=,height=';
function searchPage(features)
{
   var element = document.getElementById('HomeSiteSearch1');
   window.open('homesitesearch1-results.html?q='+encodeURIComponent(element.value), '', features);
   return false;
}
$(document).ready(function()
{
   $("#HomeRollOverText1").hover(function()
   {
      var y = $(this).height() - $(".caption", this).outerHeight();
      $(".caption", this).css("top", y);
      $(".caption", this).stop().animate({opacity: 0.60},{queue:false, duration:500});
   }, function()
   {
      $(".caption", this).stop().animate({opacity: 0},{queue:false, duration:500});
   });
   searchParseURL('HomeSiteSearch1');
   searchAutoComplete('HomeSiteSearch1', 0, '_parent');
   $("#HomeDatePicker1").datepicker(
   {
      dateFormat: 'mm/dd/yy',
      changeMonth: false,
      changeYear: false,
      showButtonPanel: false,
      showAnim: 'fadeIn'
   });
   $("#HomeDatePicker1").datepicker("setDate", "new Date()");
   $("#HomeDatePicker1").change(function()
   {
      $('#HomeDatePicker1_input').attr('value',$(this).val());
   });
   $("#HomeRollOverText2").hover(function()
   {
      var y = $(this).height() - $(".caption", this).outerHeight();
      $(".caption", this).css("top", y);
      $(".caption", this).stop().animate({opacity: 0.60},{queue:false, duration:500});
   }, function()
   {
      $(".caption", this).stop().animate({opacity: 0},{queue:false, duration:500});
   });
   $("#HomeRollOverText3").hover(function()
   {
      var y = $(this).height() - $(".caption", this).outerHeight();
      $(".caption", this).css("top", y);
      $(".caption", this).stop().animate({opacity: 0.60},{queue:false, duration:500});
   }, function()
   {
      $(".caption", this).stop().animate({opacity: 0},{queue:false, duration:500});
   });
   $("#HomeRollOverText4").hover(function()
   {
      var y = $(this).height() - $(".caption", this).outerHeight();
      $(".caption", this).css("top", y);
      $(".caption", this).stop().animate({opacity: 0.60},{queue:false, duration:500});
   }, function()
   {
      $(".caption", this).stop().animate({opacity: 0},{queue:false, duration:500});
   });
   $("#CONTACTBanner1").animatetext({showDelay: 50, hideDelay: 50, showMode: 2, hideMode: 2, pause: 500});
});
