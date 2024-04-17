// ==UserScript==
// @name         UAT Auto Next Dialler no obfuscate with PC/VC check
// @namespace    Ornikar-Salesforce
// @version      1.9.4
// @downloadURL  https://github.com/ornikar/script-next-automatic-dialler/raw/main/prod-autonextdial-no-obfuscate.user.js
// @updateURL    https://github.com/ornikar/script-next-automatic-dialler/raw/main/prod-autonextdial-no-obfuscate.user.js
// @description  Automatically click the next button on the dialler component every 5 seconds
// @author       Team Salesforce Ornikar
// @match        https://*.lightning.force.com/lightning*
// @match        https://*.lightning.force.com/one*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=force.com
// @grant        none
// ==/UserScript==

// Date : 06-03-2024

(function() {
    'use strict';

    const delayClickNextButton = 5000; // 5 seconds
    const delayCheckScriptActivity = 30000; // 30 seconds
    const regexPlannedCall = /PC-2024\d{8} \| Planned Call/g; // Regex to find any Planned Call tab open
    const regexVoiceCall= /VC-\d{8}/g; // Regex to find any Voice Call tab open

    function checkVoiceCalls() {
        const matchedVoiceCall = document.body.innerText.match(regexVoiceCall);
        console.log(`Voice Call matches found: ${matchedVoiceCall ? matchedVoiceCall.length : 0}`);

        return !matchedVoiceCall || matchedVoiceCall.length === 0;
    }

    function checkPlannedCalls() {
        const matchedPlannedCall = document.body.innerText.match(regexPlannedCall);
        console.log(`Planned Call matches found: ${matchedPlannedCall ? matchedPlannedCall.length : 0}`);

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
