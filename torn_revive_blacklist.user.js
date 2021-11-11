// ==UserScript==
// @run-at       document-end
// @name         Torn revive blacklist
// @namespace    torn
// @version      1.0
// @description  Adds a red background color at the revive icons (at hospital list)
// @include      https://www.torn.com/*
// @author       nikospag
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @updateURL    
// @icon         https://www.torn.com/favicon.ico
// ==/UserScript==

/* globals jQuery, $, waitForKeyElements */

// Add or remove user IDs between the brackets separated by commas.
// examlpe : [111111, 222222, 333333]. Here:
const userBlst = [111111, 222222];
//------------------------------

for (let i in userBlst) {
    waitForKeyElements('[href="revive.php?action=revive&ID='+userBlst[i]+'&text_response=1"]', function(jnd){
        jnd.css("background-color", "red");
    });
}
