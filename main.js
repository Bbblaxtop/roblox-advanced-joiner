// ==UserScript==
// @name         Roblox Advanced Joiner
// @version      1.0
// @description  Join on places or public servers with Advanced Joiner
// @author       salat20
// @match        https://*.roblox.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roblox.com
// @grant        none
// ==/UserScript==

var useAdvancedJoiner = confirm("Join with Advanced Joiner by salat20?");
//alert(useAdvancedJoiner);
if (useAdvancedJoiner == true) {
    //VARIABLES
    var placeId = prompt("Enter PlaceId"); //game.PlaceId
    var jobId = prompt("Enter JobId"); //game.JobId

    window.Roblox.GameLauncher.joinGameInstance(placeId,jobId);
}
