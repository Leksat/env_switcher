function getEnvDefs() {
  var envDefs = kango.storage.getItem('env_defs');
  if (envDefs === null || typeof envDefs !== 'object') {
    envDefs = {};
  }
  return envDefs;
}

function parseUrl(url) {
  var link = document.createElement('a');
  link.href = url;

  if (link.host.indexOf('www.') === 0) {
    link.host = link.host.substring(4);
  }

  var envDefs = getEnvDefs();
  var env = 'Production';
  var baseHost = link.host;
  for (var name in envDefs) {
    if (envDefs.hasOwnProperty(name)) {
      var suffix = envDefs[name];
      if (link.host.indexOf(suffix, link.host.length - suffix.length) !== -1) {
        env = name;
        baseHost = link.host.substr(0, link.host.length - suffix.length);
        break;
      }
    }
  }

  return {
    env: env,
    baseHost: baseHost
  };
}
