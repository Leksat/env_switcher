# Environment switcher

A browser extension for website developers allowing for quick-switch website domains.

Source code: https://github.com/Leksat/env_switcher

## How it works

If your development environments are based on the domain suffixes, this extension will help you to quick-switch environments preserving the URL path. It also can prefix browser tabs to distinguish environments.

Example. You are working on example.com website.

- example.com holds the production instance
- example.com.dev.my-company.com is a dev instance
- example.com.staging.my-company.com - a staging
- example.com.docker.local - local Docker environment

In this case the extension's configuration is the following:

```
Dev server|.dev.my-company.com|[dev]
Staging server|.staging.my-company.com|[staging]
Docker|.docker.local|[docker]
```

The format of a configuration line:

```
{environment name}|{domain suffix}|{optional tab prefix}
```

## Browsers support

The extension is built with the Kango framework (http://kangoextensions.com), so it should work with Crome, Firefox and Safari. However, I only tested latest changes in Chrome, so I can't guarantee that it still works in other browsers.
