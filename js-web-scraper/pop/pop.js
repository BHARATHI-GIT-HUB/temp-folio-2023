chrome.tabs.query(
  {
    active: true,
    lastFocusedWindow: true,
  },
  function (tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    alert(tab.url);
  }
);
