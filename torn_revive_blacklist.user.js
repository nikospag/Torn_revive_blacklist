// ==UserScript==
// @run-at       document-end
// @name         Torn revive blacklist
// @namespace    torn
// @version      1.1
// @description  Adds a red background color at the revive icons (at hospital list)
// @include      https://www.torn.com/hospitalview.php*
// @author       nikospag
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @icon         https://www.torn.com/favicon.ico
// ==/UserScript==

/* globals jQuery, $, waitForKeyElements */

// User Blacklist. Add or remove user ID numbers between the brackets separated by commas.
// examlpe : [111111, 222222, 333333]. Here:
const userBlist = [586850, 2386684, 2375993, 2595217, 1208073, 452527, 2113469, 1199649, 2402913];
//------------------------------

// Faction Blacklist. Add or remove faction ID numbers between the brackets separated by commas.
// examlpe : [111111, 222222, 333333]. Here:
const factionBlist = [230];
//------------------------------

for (let i in userBlist) {
    waitForKeyElements('[href="revive.php?action=revive&ID='+userBlist[i]+'&text_response=1"]', function(jnd){
        jnd.css("background-color", "red");
    });
}

for (let i in factionBlist) {
    waitForKeyElements('[href="/factions.php?step=profile&ID='+factionBlist[i]+'"] ~ .revive', function(jnd){
        jnd.css("background-color", "red");
    });
}
