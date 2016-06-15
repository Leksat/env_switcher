(function() {

  var envDefs = env_switcher_getEnvDefs();

  for (var i = 0; i < envDefs.length; i++) {
    var envDef = envDefs[i];
    if (envDef.tabPrefix && document.location.hostname.indexOf(envDef.domainSuffix, document.location.hostname.length - envDef.domainSuffix.length) !== -1) {
      document.title = envDef.tabPrefix + ' ' + document.title;
      break;
    }
  }

})();
