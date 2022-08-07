"use strict";
exports.__esModule = true;
exports.android = exports.menuBut = exports.menu = exports.cont = exports.ot = exports.yt = exports.home = void 0;
exports.home = document.getElementById("hm");
exports.yt = document.getElementById("yt");
exports.ot = document.getElementById("ot");
exports.cont = document.getElementById("cont");
exports.menu = document.getElementById("Menu");
exports.menuBut = document.getElementById("MenuButs");
exports.android = document.getElementById("DownloadGarena");
//extraction (the social media hyperlinks)
var fb = document.getElementById("fb");
var tw = document.getElementById("tw");
var ig = document.getElementById("ig");
var red = document.getElementById("Reddit");
//debug
//other vars
var opened = true;
//event listeners
exports.yt.onclick = function () {
    var prop1 = window.confirm("This directly leads you to the YT page, continue?");
    if (prop1) {
        window.location.href = "https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.youtube.com/channel/UCCeTm3l8MAiGDP2biWm5FOw/about&ved=2ahUKEwj3q_PMvcv4AhXsR2wGHcYXC7oQjjh6BAgGEAE&usg=AOvVaw0dC2gFlCXcaneK4p58hPzH/Videos";
    }
    else {
        alert("You canceled the request");
    }
};
exports.ot.onclick = function () {
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
exports.menuBut.onclick = function () {
    if (opened) {
        opened = false;
        Close();
    }
    else {
        opened = true;
        Open();
    }
};
exports.android.onclick = function () {
    window.location.href = "https://play.google.com/store/apps/details?id=com.dts.freefiremax";
};
exports.cont.onclick = function () {
    self.location.href = "/Contact/contact.html";
};
exports.home.onclick = function () {
    alert("You are currently on the same page");
};
//open and close menu
function Close() {
    exports.menu.style.position = "absolute";
    exports.menu.style.visibility = "hidden";
    exports.menu.style.opacity = '0';
}
function Open() {
    exports.menu.style.position = "relative";
    exports.menu.style.visibility = "visible";
    exports.menu.style.opacity = '1';
}
