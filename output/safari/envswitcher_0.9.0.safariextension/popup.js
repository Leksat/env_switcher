KangoAPI.onReady(function() {

  kango.browser.tabs.getCurrent(function(tab) {

    var link = document.createElement('a');
    link.href = tab.getUrl();
    var parsed  = parseUrl(link.href);

    var switcher = document.getElementById('switcher');
    function makeButton(env, url) {
      var button = document.createElement('button');
      button.innerHTML = env;
      if (env === parsed.env) {
        button.disabled = true;
      }
      button.addEventListener('click', function() {
        tab.navigate(url);
        KangoAPI.closeWindow();
      });
      var div = document.createElement('div');
      switcher.appendChild(div);
      div.appendChild(button);
    }

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
