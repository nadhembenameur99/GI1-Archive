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
   $("#CONTACTBanner1").animatetext({showDelay: 50, hideDelay: 50, showMode: 2, hideMode: 2, pause: 500});
});
