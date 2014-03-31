var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3651725-21']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


document.addEventListener('DOMContentLoaded', function () {
  _gaq.push(['_trackEvent', 'main-button', 'clicked']);
  chrome.tabs.create({'url': "http://www.reddit.com/r/random"}, function(tab) {
    console.dir(tab);
  });
})
