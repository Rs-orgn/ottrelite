var home = document.getElementById("hm");
var yt = document.getElementById("yt");
var ot = document.getElementById("ot");
var cont = document.getElementById("cont");
var menu = document.getElementById("Menu");
var menuBut = document.getElementById("MenuButs");
var android = document.getElementById("DownloadGarena");
//extraction (the social media hyperlinks)
var fb = document.getElementById("fb");
var tw = document.getElementById("tw");
var ig = document.getElementById("ig");
var red = document.getElementById("Reddit");
//debug
//other vars
var opened = true;
//event listeners
yt.onclick = function () {
    var prop1 = window.confirm("This directly leads you to the YT page, continue?");
    if (prop1) {
        window.location.href = "https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.youtube.com/channel/UCCeTm3l8MAiGDP2biWm5FOw/about&ved=2ahUKEwj3q_PMvcv4AhXsR2wGHcYXC7oQjjh6BAgGEAE&usg=AOvVaw0dC2gFlCXcaneK4p58hPzH/Videos";
    }
    else {
        alert("You canceled the request");
    }
};
ot.onclick = function () {
    self.location.href = "/OurTeam/teamStats.html";
};
red.onclick = function () {
    var prop2 = window.confirm("This directly leads you to the subreddit (opens the app on mobile), continue?");
    if (prop2) {
        window.location.href = "https://www.reddit.com/r/Rsesports_submission?utm_medium=android_app&utm_source=share";
    }
    else {
        alert("You canceled the request");
    }
};
menuBut.onclick = function () {
    if (opened) {
        opened = false;
        Close();
    }
    else {
        opened = true;
        Open();
    }
};
android.onclick = function () {
    window.location.href = "https://play.google.com/store/apps/details?id=com.dts.freefiremax";
};
cont.onclick = function () {
    self.location.href = "/Contact/contact.html";
};
home.onclick = function () {
    alert("You are currently on the same page");
};
//open and close menu
function Close() {
    menu.style.position = "absolute";
    menu.style.visibility = "hidden";
    menu.style.opacity = '0';
}
function Open() {
    menu.style.position = "relative";
    menu.style.visibility = "visible";
    menu.style.opacity = '1';
}
