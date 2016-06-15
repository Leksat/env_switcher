KangoAPI.onReady(function() {

  kango.browser.tabs.getCurrent(function(tab) {

    var link = document.createElement('a');
    link.href = tab.getUrl();
    var parsed  = env_switcher_parseUrl(link.href);

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
    var envDefs = env_switcher_getEnvDefs();
    for (var i = 0; i < envDefs.length; i++) {
      var envDef = envDefs[i];
      link.host = parsed.baseHost + envDef.domainSuffix;
      makeButton(envDef.envName, link.href);
    }

    switcher.focus();

  });
});
