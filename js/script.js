//FOR SOCIAL MEDIA - HEADER AND FOOTER
var social, facebook, instagram, twitter;
    social = document.getElementsByClassName("social");
    social[0].href = facebook;
    social[1].href = twitter;
    social[2].href = instagram;
    social[3].href = facebook;
    social[4].href = instagram;
    social[5].href = twitter;

//FOR NAME AND LINK IN GOOGLE PLAY
var googlePlay, yourName, yourLink, googlePlay_Display;
    googlePlay = document.getElementsByClassName("googlePlay");
    googlePlay[0].innerHTML = yourName;
    googlePlay[0].href = yourLink;
    googlePlay[1].href = yourLink;


//FOR TITLE
var mainTitle, title01, title02;
    mainTitle = document.getElementsByClassName("h1-title");
    mainTitle[0].innerHTML = title01;
    mainTitle[1].innerHTML = title02;


//for Featured application
var nameAppFeatured, appImg, appName, appStatus, appDescription, appButtoun, appLink;
    nameAppFeatured = document.getElementsByClassName("spclApp");
    nameAppFeatured[0].src = appImg;
    nameAppFeatured[1].innerHTML = appName;
    nameAppFeatured[2].innerHTML = appStatus;
    nameAppFeatured[3].innerHTML = appDescription;
    nameAppFeatured[4].innerHTML = appButtoun;
    nameAppFeatured[4].href = appLink;


//FOR EDIT APPS LIST

var apps, mainListapps;

    mainListapps = document.querySelector('.main-listapps');
for(i = 1; i <= apps; i++){
    var article = document.createElement('article');
        mainListapps.appendChild(article)
    var editApp = document.createElement('div');
        article.appendChild(editApp);
        editApp.setAttribute('class', 'listapps-cntr');
    var listappsImg = document.createElement('div');
        editApp.appendChild(listappsImg);
        listappsImg.setAttribute('class', 'listapps-img');
    var imgapp = document.createElement('img');
        listappsImg.appendChild(imgapp);
        imgapp.setAttribute('class', 'my-img');
        imgapp.src = "";
    var listappsInfo = document.createElement('div');
        editApp.appendChild(listappsInfo);
        listappsInfo.setAttribute('class', 'listapps-info');
    var h4 = document.createElement('h4');
        h4.setAttribute('class', 'my-h4');
    var span = document.createElement('span');
        span.setAttribute('class', 'my-span');
    var a = document.createElement('a');
        a.setAttribute('class', 'my-a');
        listappsInfo.appendChild(h4);
        listappsInfo.appendChild(span);
        listappsInfo.appendChild(a);
    
};
var ImgApp = document.getElementsByClassName('my-img');
var TitleApp = document.getElementsByClassName('my-h4');
var StatusApp = document.getElementsByClassName('my-span');
var ButtonApp = document.getElementsByClassName('my-a');
//FOR COPYRIGHT 
var copyright, yourCopyright;
    copyright = document.getElementsByClassName("copyright");
    copyright[0].innerHTML = yourCopyright;
