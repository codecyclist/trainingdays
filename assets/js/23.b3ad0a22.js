(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{514:function(e,t,a){e.exports=a.p+"assets/img/architecture_bo1.b12c560b.png"},515:function(e,t,a){e.exports=a.p+"assets/img/bo1_code.53561b6a.png"},516:function(e,t,a){e.exports=a.p+"assets/img/vscode_debug_contacts.3a7ea5e4.png"},517:function(e,t,a){e.exports=a.p+"assets/img/browser_swagger_contacts.8bef4036.png"},518:function(e,t,a){e.exports=a.p+"assets/img/browser_bo1.8af58e5f.png"},519:function(e,t,a){e.exports=a.p+"assets/img/browser_mobile_bo1.01aaa5e4.png"},786:function(e,t,a){"use strict";a.r(t);var s=a(45),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"break-out-1-deploy-the-azure-dev-college-sample-application-to-azure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#break-out-1-deploy-the-azure-dev-college-sample-application-to-azure"}},[e._v("#")]),e._v(" Break Out #1: Deploy the Azure Dev College sample application to Azure")]),e._v(" "),s("p",[e._v('Now it\'s time to get familiar with our sample application. You will now clone the repository to your local machine, setup your "local loop" and deploy a first version to Azure.')]),e._v(" "),s("p",[s("img",{attrs:{src:a(514),alt:"architecture_bo1",title:"architecture_bo1"}})]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Before proceeding")]),e._v(": Please check, that all the "),s("RouterLink",{attrs:{to:"/day2/challenges/challenge-0.html"}},[e._v("Prerequisites")]),e._v(" are present on your machine.")],1)]),e._v(" "),s("h2",{attrs:{id:"setup-local-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-local-loop"}},[e._v("#")]),e._v(" Setup Local Loop")]),e._v(" "),s("p",[e._v("Clone the repository to your local machine. Run this command from a blank folder.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/azuredevcollege/trainingdays.git\n\nCloning into "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'azure-developer-college'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nremote: Enumerating objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("236")]),e._v(", done.\nremote: Counting objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("236")]),e._v("/236"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(", done.\nremote: Compressing objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("178")]),e._v("/178"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(", done.\nremote: Total "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2473")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("delta "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("89")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(", reused "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("177")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("delta "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("51")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(", pack-reused "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2237")]),e._v("\nReceiving objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2473")]),e._v("/2473"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("22.78")]),e._v(" MiB "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("16.39")]),e._v(" MiB/s, done.\nResolving deltas: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1392")]),e._v("/1392"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(", done.\n")])])]),s("p",[e._v("Switch to the "),s("em",[e._v("azure-developer-college")]),e._v(" folder and open VS Code:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ code "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),s("p",[e._v("Open folder Day2/apps. In that folder, we will be concentrating on "),s("em",[e._v("dotnetcore/Scm")]),e._v(" and "),s("em",[e._v("frontend/scmfe")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(515),alt:"bo1_code",title:"bo1_code"}})]),e._v(" "),s("p",[e._v("The first one contains the backend logic for working with "),s("em",[e._v("contacts")]),e._v(" objects, the latter one contains the Single page Application (SPA) which is written in VueJS.")]),e._v(" "),s("p",[e._v("Open each folder and get familiar with the code in there.")]),e._v(" "),s("blockquote",[s("p",[e._v("If you have any questions, reach out to one of the proctors.")])]),e._v(" "),s("h2",{attrs:{id:"run-the-contacts-service-locally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-the-contacts-service-locally"}},[e._v("#")]),e._v(" Run the "),s("em",[e._v("Contacts")]),e._v(" service locally")]),e._v(" "),s("p",[e._v('Now it\'s time to run the contacts API on your local machine. Therefore, a debug configuration has already been prepared for you. So, switch to the "Debug" view in Visual Studio Code and in the drop-down, choose '),s("strong",[e._v("Day2 - Launch SCM Contacts API")]),e._v('. Click the "Run" button.')]),e._v(" "),s("p",[s("img",{attrs:{src:a(516),alt:"vscode_debug_contacts",title:"vscode_debug_contacts"}})]),e._v(" "),s("p",[e._v("If you correctly set up your machine, after a few seconds a browser window will open and show the Swagger UI for the "),s("em",[e._v("contacts")]),e._v(" API.")]),e._v(" "),s("p",[e._v("Get familiar with all the available operations and also test a few of them via the UI.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(517),alt:"browser_swagger_contacts",title:"browser_swagger_contacts"}})]),e._v(" "),s("h3",{attrs:{id:"preparing-the-spa-for-the-first-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparing-the-spa-for-the-first-run"}},[e._v("#")]),e._v(" Preparing the SPA for the first run")]),e._v(" "),s("p",[e._v("To run the Single Page Application on your local machine, we first need to install all the neccessary Node packages via the Node Package Manager (NPM).")]),e._v(" "),s("p",[e._v("On the command line, switch to the folder "),s("em",[e._v("apps/frontend/scmfe")]),e._v(" and run the following command:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nadded "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1281")]),e._v(" packages from "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("895")]),e._v(" contributors and audited "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("26623")]),e._v(" packages "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("24")]),e._v(".125s\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("Back in Visual Studio Code, we need to tell the SPA where to call the contacts service (the contacts API endpoint, as well as all other upcoming endpoint, can be dynamically configured per environment).")]),e._v(" "),s("p",[e._v("Open the file "),s("em",[e._v("apps/frontend/scmfe/public/settings/settings.js")]),e._v(" and make sure the property "),s("em",[e._v("endpoint")]),e._v(" has the value "),s("strong",[e._v("http://localhost:5050")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[e._v("var uisettings = "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"endpoint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://localhost:5050/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"resourcesEndpoint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"aiKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("This file will be loaded during the startup of our application and will configure the contacts module to use our local service for contacts management.")]),e._v(" "),s("p",[e._v("So, everything is in place now...let's start the application. Go back to the "),s("em",[e._v("Debug")]),e._v(" view, choose "),s("strong",[e._v("Day2 - Launch Frontend")]),e._v(".")]),e._v(" "),s("blockquote",[s("p",[e._v("There "),s("strong",[e._v("may")]),e._v(' be a problem when running that debug configuration. In case "npm" cannot be started, please go to the commandline and run '),s("code",[e._v("npm run serve")]),e._v("!")])]),e._v(" "),s("p",[s("strong",[e._v("IMPORTANT")]),e._v(": Make sure the contacts API still runs!")]),e._v(" "),s("p",[e._v("When you run the config, a local build will be kicked-off and after finishing, the Chrome Debugger will be launched.")]),e._v(" "),s("p",[e._v("Again, get familiar with the application, open the contacts list, create a few contacts, edit a contact and delete one.")]),e._v(" "),s("p",[e._v("If you want to, you can also test the mobile experience of the app by opening the Chrome Developer Tool and switching to a mobile user-agent.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(518),alt:"browser_bo1",title:"browser_bo1"}})]),e._v(" "),s("p",[s("img",{attrs:{src:a(519),alt:"browser_mobile_bo1",title:"browser_mobile_bo1"}})]),e._v(" "),s("h2",{attrs:{id:"deploy-to-azure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-azure"}},[e._v("#")]),e._v(" Deploy to Azure")]),e._v(" "),s("p",[e._v("We have now been able to run the application locally. Of course, we want to have it in Azure. In this first Break Out, we only deploy the "),s("em",[e._v("Contacts")]),e._v(" API to Azure and run the SPA on our local machine.")]),e._v(" "),s("p",[e._v("So, first of all, let's deploy the backend to Azure. You already know how to do it ("),s("RouterLink",{attrs:{to:"/day2/challenges/challenge-1.html"}},[e._v("Challenge 1 - Azure Web Applications")]),e._v(' is your "cheat sheet"), so here is just an overview:')],1),e._v(" "),s("ol",[s("li",[e._v("create a new resource group, name it e.g. "),s("strong",[e._v("scm-breakout-rg")]),e._v(", location "),s("em",[e._v("West Europe")])]),e._v(" "),s("li",[e._v("create an Azure Web App (OS: "),s("strong",[e._v("Windows")]),e._v(", RuntimeStack: "),s("strong",[e._v(".NET Core 3.1 (LTS)")]),e._v(", Size: "),s("strong",[e._v("S1")]),e._v(", AppInsights is not needed at the moment). You can choose to use the Portal or the Azure CLI.")]),e._v(" "),s("li",[e._v("deploy the Contacts API to Azure")]),e._v(" "),s("li",[e._v("after deployment, check whether the API is running (open the Swagger UI)")])]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Hint for Step 3")]),e._v(": now that we have a lot of projects in our folder, VS Code is not able to determine which project to pick when deploying via the Azure Tools App Services extension. We first need to publish the project to a local folder and take that as our deployment source. There is already a predefined task for you, called "),s("strong",[e._v("day2publishScmContacts")]),e._v(" (btw, all tasks are defined in the "),s("strong",[e._v(".vscode")]),e._v(" folder). To run it, simply press "),s("strong",[e._v("F1")]),e._v(" and choose "),s("strong",[e._v('"Tasks: Run Task"')]),e._v(". In the dropdown, select "),s("strong",[e._v("day2publishScmContacts")]),e._v(". A release build will be started and the outputs placed in the folder "),s("strong",[e._v("apps/dotnetcore/Scm/Adc.Scm.Api/publish")]),e._v(' folder. Choose that folder when "right-click-deploying" from the Azure AppService extension (via "Browse...").')])]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("WARNING")]),e._v(": Please don't confirm the message that asks to always deploy that service to the Azure AppService! If you accidentially did, delete the file "),s("em",[e._v(".vscode/settings.json")]),e._v("! Then you will be able to select the folder to publish again.")])]),e._v(" "),s("p",[e._v("When everything works as expected in Azure, go back to the "),s("strong",[e._v("settings.js")]),e._v(" file of your SPA and adjust the "),s("strong",[e._v("endpoint")]),e._v(" property. Enter the value of your newly deployed API for it, e.g. https://mynewcontactsapi.azurewebsites.net/.")]),e._v(" "),s("p",[e._v("Open the browser and check, if your application still works as expected.")]),e._v(" "),s("h2",{attrs:{id:"finished-before-time"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finished-before-time"}},[e._v("#")]),e._v(" Finished before Time?")]),e._v(" "),s("p",[e._v("Try adding slots to your app and deploy the service to the slot, afterwards swap it!")]),e._v(" "),s("h1",{attrs:{id:"wrap-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),s("p",[e._v("We have now set up our local development environment. We cloned the repo, installed dependencies of the SPA, ran both services and deployed the contacts API to Azure.")]),e._v(" "),s("p",[e._v("You can now proceed to the next challenge: "),s("RouterLink",{attrs:{to:"/day2/challenges/challenge-2.html"}},[e._v("Challenge 2 - Serverless")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);