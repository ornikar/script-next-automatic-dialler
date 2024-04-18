// ==UserScript==
// @name         UAT Auto Next Dialler no obfuscate with PC/VC check
// @namespace    Ornikar-Salesforce
// @version      1.9.5
// @downloadURL  https://github.com/ornikar/script-next-automatic-dialler/raw/main/prod-autonextdial-no-obfuscate.user.js
// @updateURL    https://github.com/ornikar/script-next-automatic-dialler/raw/main/prod-autonextdial-no-obfuscate.user.js
// @description  Automatically click the next button on the dialler component every 5 seconds
// @author       Team Salesforce Ornikar
// @match        https://*.lightning.force.com/lightning*
// @match        https://*.lightning.force.com/one*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=force.com
// @grant        none
// ==/UserScript==

// Date : 18-04-2024

(function() {
    'use strict';

    const delayClickNextButton = 5000; // 5 seconds
    const delayCheckScriptActivity = 30000; // 30 seconds
    const regexPlannedCall = /PC-2024\d{9} \| Planned Call/g; // Regex to find any Planned Call tab open
    const regexVoiceCall= /VC-\d{8}/g; // Regex to find any Voice Call tab open

    // Check if there is a voice call opened in one of the console tabs.
    function checkVoiceCalls() {
        const tabItems = document.querySelectorAll('li.oneConsoleTabItem');
        let matchedVoiceCall = [];
    
        tabItems.forEach(item => {
            const match = item.textContent.match(regexVoiceCall);
            if (match) matchedVoiceCall = matchedVoiceCall.concat(match);
        });
    
        console.log(`Voice Call matches found: ${matchedVoiceCall.length}`);
        return !matchedVoiceCall || matchedVoiceCall.length === 0;
    }
     // Check if there is a planned call opened in one of the console tabs.
    function checkPlannedCalls() {
        const tabItems = document.querySelectorAll('li.oneConsoleTabItem');
        let matchedPlannedCall = [];
    
        tabItems.forEach(item => {
            const match = item.textContent.match(regexPlannedCall);
            if (match) matchedPlannedCall = matchedPlannedCall.concat(match);
        });
    
        console.log(`Planned Call matches found: ${matchedPlannedCall.length}`);
        return !matchedPlannedCall || matchedPlannedCall.length === 0;
    }

    // Define a function that tries to find the next button and click it
    function clickNextButton() {
        let isUserOnline = checkOnlineStatus();
        let noPlannedCall = checkPlannedCalls();
        let noVoiceCall = checkVoiceCalls();

        if (isUserOnline && noPlannedCall && noVoiceCall) {
            // Try to find the next button by its selector
            let buttonNext = document.querySelector("button.slds-button.slds-button--neutral.moveToNextButton.uiButton");
            // Check if the next button exists
            if (buttonNext) {
                // Click the next button, log a message
                buttonNext.click();
                console.log("Next Button clicked");
            } else {
                console.log("Button next not found");
            }
        } else {
            console.log("Button next won't be clicked due to matches or online status.");
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
