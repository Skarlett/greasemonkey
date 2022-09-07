// ==UserScript==
// @name     AUTOCONNECT Linkedin
// @version  1
// @grant    none
// ==/UserScript==

/*
 LINKEDIN connect list: /html/body/div[6]/div[3]/div/div/div/div[2]/div/div/aside/div[2]/section/ul/li[1]/div/button
*/

const CONNECT_LIST = "/html/body/div[6]/div[3]/div/div/div/div[2]/div/div/aside/div[2]/section/ul/li";

const connections_len = document.evaluate(
  'count(' + CONNECT_LIST + ')',
  document,
  null,
  XPathResult.ANY_TYPE,
  null
).numberValue;

for (let i = 1; connections_len + 1 > i; i++) {
  var button_path = CONNECT_LIST + "[" + i + "]/div/button";
  document.evaluate(
  	button_path,
  	document,
  	null,
  	XPathResult.ANY_TYPE,
  	null
	).nextIterate()?.click();
}
