//taking them out from DOM
var HOME = document.getElementById("hm");
var YOUTUBE = document.getElementById("yt");
var OURTEAM = document.getElementById("ot");
var CONTACT = document.getElementById("cont");
var MENU = document.getElementById("Menu");
var MENUBUT = document.getElementById("MenuButs");
var LOGIN = document.getElementById('');
//social medias
//darkfire's
var REDDITOFDARKFIRE = document.getElementById("RedditOfDarkfire");
//Divine's
var REDDITOFDIVINE = document.getElementById("RedditOfDivine");
var REDDITOFLEGEND = document.getElementById("RedditOfLegend");
var REDDITOFMAFIA = document.getElementById("mafiaReddit");
//Other vars
var opened = true;
//event listeners
YOUTUBE.addEventListener("click", function () {
    var prop = window.confirm("This directly leads you to the YT page, continue?");
    if (prop) {
        window.location.href = "https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.youtube.com/channel/UCCeTm3l8MAiGDP2biWm5FOw/about&ved=2ahUKEwj3q_PMvcv4AhXsR2wGHcYXC7oQjjh6BAgGEAE&usg=AOvVaw0dC2gFlCXcaneK4p58hPzH/Videos";
    }
    else {
        alert("You canceled the request");
    }
});
HOME.addEventListener("click", function () {
    window.location.href = "http://localhost:8080/#";
});
REDDITOFDARKFIRE.addEventListener("click", function () {
    var prop = window.confirm("This directly leads you to the reddit account (opens the app on mobile), continue?");
    if (prop) {
        window.location.href = "";
    }
    else {
        alert("You canceled the request");
    }
});
REDDITOFDIVINE.addEventListener("click", function () {
    var prop = window.confirm("This directly leads you to the reddit account (opens the app on mobile), continue?");
    if (prop) {
        window.location.href = "https://www.reddit.com/u/Rs_divine?utm_medium=android_app&utm_source=share";
    }
    else {
        alert("You canceled the request");
    }
});
REDDITOFLEGEND.addEventListener("click", function () {
    var prop = window.confirm("This directly leads you to the reddit account (opens the app on mobile), continue?");
    if (prop) {
        window.location.href = "";
    }
    else {
        alert("You canceled the request");
    }
});
/*REDDITOFMAFIA.addEventListener("click", () => {
    let prop = window.confirm("This directly leads you to the reddit account (opens the app on mobile), continue?")
    if (prop) {
        window.location = "";
    }
    else {
        alert("You canceled the request");
    }

});*/
OURTEAM.onclick = function () {
    alert("you are already on the website");
};
MENUBUT.addEventListener("click", function () {
    if (opened) {
        opened = false;
        Close();
    }
    else {
        opened = true;
        Open();
    }
});
CONTACT.onclick = function () {
    self.location.href = "http://localhost:8080/ContactUs";
};
//functions
function Close() {
    MENU.style.position = "absolute";
    MENU.style.visibility = "hidden";
    MENU.style.opacity = '0';
}
function Open() {
    MENU.style.position = "relative";
    MENU.style.visibility = "visible";
    MENU.style.opacity = '1';
}
