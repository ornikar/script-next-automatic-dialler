// ==UserScript==
// @name         PROD Auto Next Dialler
// @namespace    Ornikar-Salesforce
// @version      1.9.1
// @downloadURL  https://github.com/ornikar/script-next-automatic-dialler/raw/main/prod-autonextdial.user.js
// @updateURL    https://github.com/ornikar/script-next-automatic-dialler/raw/main/prod-autonextdial.user.js
// @description  Automatically click the next button on the dialler component every 5 seconds
// @author       Team Salesforce Ornikar
// @match        https://*.lightning.force.com/lightning/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=force.com
// @grant        none
// ==/UserScript==

// Date : 06-03-2024

function _0x4956(_0x267122,_0x39535c){const _0x2193af=_0x2193();return _0x4956=function(_0x49567c,_0x25bbcd){_0x49567c=_0x49567c-0xf1;let _0x55b6c5=_0x2193af[_0x49567c];return _0x55b6c5;},_0x4956(_0x267122,_0x39535c);}function _0x2193(){const _0x36cab6=['button.slds-button.slds-button--neutral.moveToNextButton.uiButton','Element\x20with\x20\x27Online\x20Status\x27\x20found','56007cncuPu','log','span[title=\x22Online\x20Status\x22]','41058AirUnT','3314808VWNLxk','125mPIvyt','60LhHGPK','button.slds-button.slds-button--neutral.checkNextButtonUserActivityV2.uiButton','1146CfWosO','Button\x20next\x20not\x20found','1506810hCGMiu','Element\x20with\x20\x27Online\x20Status\x27\x20not\x20found','querySelector','156nvsYAf','646929gXYYcG','533339aUZGUk','span[title=\x22Statut\x20en\x20ligne\x22]','Button\x20check\x20script\x20user\x20activity\x20not\x20found'];_0x2193=function(){return _0x36cab6;};return _0x2193();}(function(_0x11bc56,_0x1d9070){const _0x7b6578=_0x4956,_0x5e407f=_0x11bc56();while(!![]){try{const _0x1f1c82=parseInt(_0x7b6578(0xf6))/0x1+-parseInt(_0x7b6578(0xf1))/0x2+parseInt(_0x7b6578(0x103))/0x3*(-parseInt(_0x7b6578(0xf4))/0x4)+parseInt(_0x7b6578(0x100))/0x5*(-parseInt(_0x7b6578(0xfe))/0x6)+parseInt(_0x7b6578(0xfb))/0x7+parseInt(_0x7b6578(0xff))/0x8+parseInt(_0x7b6578(0xf5))/0x9*(parseInt(_0x7b6578(0x101))/0xa);if(_0x1f1c82===_0x1d9070)break;else _0x5e407f['push'](_0x5e407f['shift']());}catch(_0x33411d){_0x5e407f['push'](_0x5e407f['shift']());}}}(_0x2193,0x6d46f),(function(){'use strict';const _0x3f1b33=0x1388,_0x1ac4bc=0x7530;function _0x3be3e8(){const _0x231d47=_0x4956;let _0xaa5802=_0x3d9a27();if(_0xaa5802){let _0x2fbbf6=document[_0x231d47(0xf3)](_0x231d47(0xf9));_0x2fbbf6?(_0x2fbbf6['click'](),console[_0x231d47(0xfc)]('Button\x20next\x20clicked')):console['log'](_0x231d47(0x104));}}function _0x4fd8fa(){const _0x276a95=_0x4956;let _0x189417=document[_0x276a95(0xf3)](_0x276a95(0x102));_0x189417?(_0x189417['click'](),console['log']('Button\x20check\x20script\x20user\x20activity\x20found\x20:\x20store\x20user\x20activity')):console[_0x276a95(0xfc)](_0x276a95(0xf8));}function _0x3d9a27(){const _0x25c106=_0x4956;let _0x438dad=document[_0x25c106(0xf3)](_0x25c106(0xfd)),_0x150f23=document[_0x25c106(0xf3)](_0x25c106(0xf7));return _0x438dad||_0x150f23?(console[_0x25c106(0xfc)](_0x25c106(0xfa)),!![]):(console[_0x25c106(0xfc)](_0x25c106(0xf2)),![]);}let _0x329137=setInterval(_0x4fd8fa,_0x1ac4bc),_0x5c3527=setInterval(_0x3be3e8,_0x3f1b33);}()));