KangoAPI.onReady(function() {

  var envDefsTextarea = document.getElementById('env-defs');
  var saveButton = document.getElementById('save-button');

  var envDefs = kango.storage.getItem('env_defs');
  if (envDefs === null || typeof envDefs !== 'object') {
    envDefs = {};
  }
  var envDefsStrings = [];
  for (var name in envDefs) {
    if (envDefs.hasOwnProperty(name)) {
      var suffix = envDefs[name];
      envDefsStrings.push(name + '|' + suffix);
    }
  }
  var envDefsString = envDefsStrings.join('\n');

  envDefsTextarea.value = envDefsString;

  saveButton.addEventListener('click', function() {

    envDefsString = envDefsTextarea.value;
    envDefsStrings = envDefsString.split('\n');
    envDefs = {};
    for (var i = 0; i < envDefsStrings.length; i++) {
      var string = envDefsStrings[i].trim();
      var parts = string.split('|');
      if (parts.length == 2) {
        envDefs[parts[0]] = parts[1];
      }
    }

    kango.storage.setItem('env_defs', envDefs);

    // Prevent Chrome Canary localStorage bugs.
    window.close();

  }, false);

});
