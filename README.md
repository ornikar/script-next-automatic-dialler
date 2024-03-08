# script-next-automatic-dialler

User script to automatically click the "Next" button on the Vonage campaign call component.

### Must Do Checklist when changed the userscript :

* [ ] Change the @version parameter
  ex : ~~1.9.2~~ > 1.9.3 (minor) 2.0.0 (major)
* [ ] Change the date at the beginning of the script, with last update date
  ex : ~~07-03-2024~~ > 17-03-2024
* [ ] Modifify the script on "no-obfuscate.user.js" files to develop and test the update
* [ ] Obfuscate the script in other files with [JavaScript Obfuscator Tool](https://obfuscator.io/#code) once testing is fine
* [ ] Commit and push all JS files (Uat & Prod/Obuscate & no obfuscate versions)
* [ ] If there is a new @match parameter or modification to an existing @match, notify IT managers so that the script can be manually update on all workstations.