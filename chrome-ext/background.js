/* eslint-env webextensions */

// see https://developer.chrome.com/docs/extensions/reference/action/#injecting-a-content-script-on-click
// see https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/examples/page-redder/background.js

chrome.action.onClicked.addListener(function (tab) {
  if (tab.url.includes('chrome://')) {
    return
  }
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: function sciprtFunction () {
      const s = document.createElement('script')
      s.src = chrome.runtime.getURL('main.js')
      document.body.appendChild(s)
    }
  })
})
