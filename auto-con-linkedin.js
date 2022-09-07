// ==UserScript==
// @name     AUTOCONNECT Linkedin
// @version  1
// @grant    none
// ==/UserScript==

/*
 LINKEDIN connect list: /html/body/div[6]/div[3]/div/div/div/div[2]/div/div/aside/div[2]/section/ul/li[1]/div/button
*/
console.log(" ========== LOADED LINKEDIN AUTO-CONNECT ========== ");

function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}

function click(xpath) {
  document.evaluate(
      xpath,
      document,
      null,
      XPathResult.ANY_TYPE,
      null
  )?.iterateNext()?.click();
}

function count(xpath) {
  return document.evaluate(
      'count(' + xpath + ')', 
      document,
      null,
      XPathResult.ANY_TYPE,
      null
  )?.numberValue;
}
  
function autoConnect()
{
  return new Promise((resolve, reject) => {
		const SHOW_MORE = "/html/body/div[6]/div[3]/div/div/div/div[2]/div/div/aside/div[2]/footer/button"
		const CONNECT_LIST = "/html/body/div[6]/div[3]/div/div/div/div[2]/div/div/aside/div[2]/section/ul/li";

    console.log(" ========== START LINKEDIN AUTO-CONNECT ========== ");
    click(SHOW_MORE);
    
    // count items in "connections"
    const connections_len = count(CONNECT_LIST);
    
    // if nothing, bad news
    if (!connections_len) {
        console.log(" ========== FAILED LINKEDIN AUTO-CONNECT ========== ");
        return;
    }
    
    // click "connect" button
    for (let i = 1; connections_len + 1 > i; i++) {
      click(CONNECT_LIST + "[" + i + "]/div/button");
    }
		
    console.log(" ========== DONE LINKED-IN AUTO-CONNECT ========== ");
  })
}

sleep(4500)
    .then(autoConnect);
