console.log("background script starting");

chrome.action.onClicked.addListener(buttonClicked);

// }
function buttonClicked() {
  // get all the windows currently opened
  // get the focused window
  // get tabs in the current window

  // chrome.windows.getAll({ populate: true }, (m) => console.log(m));
  chrome.windows.getAll({ populate: true }, getAllOpenTabs);

  function getAllOpenTabs(windowsData) {
    let tabs = [];
    let totalTabs;
    let currentWindow;
    let librarywindowandTabs;
    for (let i in windowsData) {
      currentWindow = windowsData[i];
      if (currentWindow.focused === true) {
        let windowTabs = currentWindow.tabs;
        totalTabs = windowTabs.length;
        librarywindowandTabs = windowTabs;
      }
    }

    let currentTab;
    for (let j = 0; j < totalTabs; j++) {
      currentTab = librarywindowandTabs[j];
      tabs.push({
        url: currentTab.url,
        title: currentTab.title,
        favicon: currentTab.favIconUrl,
      });
    }
    console.log(tabs);
  }
}
