KangoAPI.onReady(function() {

  var envDefsTextarea = document.getElementById('env-defs');
  var saveButton = document.getElementById('save-button');

  var envDefs = env_switcher_getEnvDefs();

  var envDefStrings = [];
  for (var i = 0; i < envDefs.length; i++) {
    var envDef = envDefs[i];
    var envDefString = envDef.envName + '|' + envDef.domainSuffix;
    if (envDef.tabPrefix) {
      envDefString += '|' + envDef.tabPrefix;
    }
    envDefStrings.push(envDefString);
  }

  envDefsTextarea.value = envDefStrings.join('\n');

  saveButton.addEventListener('click', function() {

    envDefStrings = envDefsTextarea.value.split('\n');
    envDefs = [];
    for (var i = 0; i < envDefStrings.length; i++) {
      var string = envDefStrings[i].trim();
      var parts = string.split('|');
      if (parts.length >= 2 && parts.length <= 3) {
        envDef = {
          envName: parts[0],
          domainSuffix: parts[1]
        };
        if (parts.length === 3) {
          envDef.tabPrefix = parts[2];
        }
        envDefs.push(envDef);
      }
    }

    kango.storage.setItem('env_defs', envDefs);
    window.close();

  }, false);

});
