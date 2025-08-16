# Saturday Mornings

## Run The Server 

* First open the terminal by typing "terminal" in the search bar next to windows or open the terminal in VS Code
* Then in the terminal `cd C:\Users\ASudr\Coding\Initial` 
* Now type `python -m http.server`
* In a browser open http://localhost:8000 (or 127.0.0.1:8000)

## Resources

* https://http.cat/
* https://developer.mozilla.org/en-US/
* https://freesound.org
* https://preshing.com/20110811/xkcd-password-generator/
* https://hackr.io/blog/how-to-build-a-javascript-drum-kit#project-prerequisites
* https://chromium.googlesource.com/devtools/devtools-frontend/+/main/docs/ecosystem/automatic_workspace_folders.md

## Notes

* Ctrl + Shift + Ins to paste in git terminal
* Ctrl + C to stop current active process
* wget http://example.com

### Windows Group Policy Issues

#### Install gp Edit on Windows Home

* `FOR %F IN ("%SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~*.mum") DO DISM /Online /NoRestart /Add-Package:"%F"` and `FOR %F IN ("%SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~*.mum") DO DISM /Online /NoRestart /Add-Package:"%F"` (Now wait)
* * https://windowsforum.com/threads/how-to-enable-group-policy-editor-on-windows-11-home-step-by-step-guide-for-full-system-control.360840/ 

#### Enable App Downloads for Edge

##### Step 1: Open the Settings App
First, press the Windows key + I to open the Settings app.

Opening the Settings app is the gateway to all your system preferences. From here, you can manage everything from network settings to display configurations.

##### Step 2: Navigate to Privacy & Security
Second, click on ‘Privacy & security’ from the left-hand menu.

This section houses all the security settings, including those that control what kind of content can be downloaded onto your computer.

##### Step 3: Select Windows Security
Third, click on ‘Windows Security’ located within the Privacy & security section.

Windows Security is your built-in antivirus and security management tool. It keeps your system safe and is where you’ll find settings related to downloads.

##### Step 4: Open App & Browser Control
Fourth, under Windows Security, choose ‘App & browser control.’

This option allows you to tweak how your computer interacts with apps and the web, including settings that affect downloads.

##### Step 5: Adjust Reputation-Based Protection Settings
Fifth, click on ‘Reputation-based protection settings’ and ensure the ‘Check apps and files’ option is turned off or set to your preference.

Disabling this setting might make your computer more vulnerable, so consider carefully before changing it. Alternatively, you can adjust the settings to allow downloads from trusted sources only.