KangoAPI.onReady(function() {

  kango.browser.tabs.getCurrent(function(tab) {

    var link = document.createElement('a');
    link.href = tab.getUrl();
    var parsed  = parseUrl(link.href);

    var switcher = document.getElementById('switcher');
    function makeButton(env, url) {
      var linkElement = document.createElement('a');
      linkElement.innerHTML = env;
      linkElement.href = url;
      var active = (env == parsed.env);
      linkElement.addEventListener('click', function(e) {
        if (active || e.metaKey) {
          return false;
        }
        tab.navigate(url);
        KangoAPI.closeWindow();
      });
      var div = document.createElement('div');
      switcher.appendChild(div);
      div.appendChild(linkElement);
    }

    link.protocol = 'http:'; // Always use HTTP.
    link.host = parsed.baseHost;
    makeButton('Production', link.href);
    var envDefs = getEnvDefs();
    for (var env in envDefs) {
      if (envDefs.hasOwnProperty(env)) {
        var suffix = envDefs[env];
        link.host = parsed.baseHost + suffix;
        makeButton(env, link.href);
      }
    }

    switcher.focus();

  });
});
