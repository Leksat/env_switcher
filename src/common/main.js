kango.ui.browserButton.setTooltipText('');
kango.ui.browserButton.setPopup({url: 'popup.html', width: 300, height: 300});

// It seems that we can't have different badge labels on different windows...
//function onChange(e) {
//  function onChange(tab) {
//    var parsed = parseUrl(tab._tab.url);
//    var badge = parsed.env === 'Production' ? '' : parsed.env;
//    kango.ui.browserButton.setBadgeValue(badge);
//  }
//  var tab = e.target;
//  if (tab.isActive()) {
//    onChange(tab);
//  }
//  else {
//    kango.browser.tabs.getCurrent(onChange);
//  }
//}
//kango.browser.addEventListener(kango.browser.event.BEFORE_NAVIGATE, onChange);
//kango.browser.addEventListener(kango.browser.event.TAB_CREATED, onChange);
//kango.browser.addEventListener(kango.browser.event.TAB_CHANGED, onChange);
//kango.browser.addEventListener(kango.browser.event.TAB_REMOVED, onChange);
