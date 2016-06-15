function env_switcher_getEnvDefs() {
  var envDefs = kango.storage.getItem('env_defs');
  if (Object.prototype.toString.call(envDefs) !== '[object Array]') {
    envDefs = [];
  }
  return envDefs;
}

function env_switcher_parseUrl(url) {
  var link = document.createElement('a');
  link.href = url;

  if (link.host.indexOf('www.') === 0) {
    link.host = link.host.substring(4);
  }

  var envDefs = env_switcher_getEnvDefs();
  var envName = 'Production';
  var baseHost = link.host;
  for (var i = 0; i < envDefs.length; i++) {
    var envDef = envDefs[i];
    if (link.host.indexOf(envDef.domainSuffix, link.host.length - envDef.domainSuffix.length) !== -1) {
      envName = envDef.envName;
      baseHost = link.host.substr(0, link.host.length - envDef.domainSuffix.length);
      break;
    }
  }

  return {
    env: envName,
    baseHost: baseHost
  };
}
