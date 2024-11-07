// ==UserScript==
// @name         PROD Auto Next Dialler no obfuscate 
// @namespace    Ornikar-Salesforce
// @version      1.9.4
// @downloadURL  https://github.com/ornikar/script-next-automatic-dialler/raw/main/prod-autonextdial.user.js
// @updateURL    https://github.com/ornikar/script-next-automatic-dialler/raw/main/prod-autonextdial.user.js
// @description  Automatically click the next button on the dialler component every 5 seconds
// @author       Team Salesforce Ornikar
// @match        https://*.lightning.force.com/lightning*
// @match        https://*.lightning.force.com/one*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=force.com
// @grant        none
// ==/UserScript==

// Date : 07-11-2024

/*
(function() {
    'use strict';

    const delayClickNextButton = 5000; // 5 seconds
    const delayCheckScriptActivity = 30000; // 30 seconds

    // Define a function that tries to find the next button and click it
    function clickNextButton() {
        let isUserOnline = checkOnlineStatus();

        if (isUserOnline) {
            // Try to find the next button by its selector
            let buttonNext = document.querySelector("button.slds-button.slds-button_neutral.moveToNextButton.uiButton");
            // Check if the next button exists
            if (buttonNext) {
                // Click the next button, log a message
                buttonNext.click();
                console.log("Button next clicked");
            } else {
                // Log a message that the next button is not found
                console.log("Button next not found");
            }
        }
    }

    // Define a function that click on a custom button to send user script activity
    function sendUserActivity() {
        // Find the custom button by its selector
        let buttonActiveScriptUser = document.querySelector("button.slds-button.slds-button--neutral.checkNextButtonUserActivityV2.uiButton");
        // Check if the custom button exists
        if (buttonActiveScriptUser) {
            // Call Aura javascript function then call apex to store activity on user record
            buttonActiveScriptUser.click();
            console.log("Button check script user activity found : store user activity");
        } else {
            console.log("Button check script user activity not found");
        }
    }

    // Function that checks if the user is online before clicking on the next button
    function checkOnlineStatus() {
    // Try to find the span with the title "Online Status".
    let spanEN = document.querySelector('span[title="Online Status"]');
    let spanFR = document.querySelector('span[title="Statut en ligne"]');
    // Check if the span exists
    if (spanEN || spanFR) {
        // If found, return true
        console.log("Element with 'Online Status' found");
        return true;
    } else {
        // If not found, return false
        console.log("Element with 'Online Status' not found");
        return false;
    }
}


    // Set different intervals for the functions
    let intervalClickUserScriptActivity = setInterval(sendUserActivity, delayCheckScriptActivity);
    let intervalClickNext = setInterval(clickNextButton, delayClickNextButton);

})();
*/