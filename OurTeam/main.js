"use strict";
exports.__esModule = true;
/*
const HOME = document.getElementById("hm")
const YOUTUBE = document.getElementById("yt");
const OURTEAM = document.getElementById("ot");
const CONTACT = document.getElementById("cont");
const MENU = document.getElementById("Menu");
const MENUBUT = document.getElementById("MenuButs");
*/
//social medias
//darkfire's
var REDDITOFDARKFIRE = document.getElementById("RedditOfDarkfire");
//Divine's
var REDDITOFDIVINE = document.getElementById("RedditOfDivine");
var REDDITOFLEGEND = document.getElementById("RedditOfLegend");
var REDDITOFMAFIA = document.getElementById("RedditOfMafia");
//Other vars
var opened = true;
//event listeners
/*YOUTUBE.addEventListener("click", ()=>{
  let prop = window.confirm("This directly leads you to the YT page, continue?");
  if(prop){
      window.location.href = "https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.youtube.com/channel/UCCeTm3l8MAiGDP2biWm5FOw/about&ved=2ahUKEwj3q_PMvcv4AhXsR2wGHcYXC7oQjjh6BAgGEAE&usg=AOvVaw0dC2gFlCXcaneK4p58hPzH/Videos";
  }
  else{
      alert("You canceled the request");
  }
  
});

HOME.addEventListener("click", ()=>{
    self.location.href = "/MainPage/main.html";
});*/
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
REDDITOFMAFIA.addEventListener("click", function () {
    var prop = window.confirm("This directly leads you to the reddit account (opens the app on mobile), continue?");
    if (prop) {
        window.location.href = "";
    }
    else {
        alert("You canceled the request");
    }
});
/*OURTEAM.onclick = ()=>{
    alert("you are already on the website");
}

MENUBUT.addEventListener("click", ()=>{
    if(opened){
        opened = false;
        Close()
    }
    else{
        opened = true;
        Open()
    }
    
});
CONTACT.onclick = ()=> {
    self.location.href = "/Contact/contact.html"
}
*/
//functions
/*function Close(){
    MENU.style.position = "absolute";
    MENU.style.visibility = "hidden";
    MENU.style.opacity = '0';
}

function Open(){
    MENU.style.position = "relative";
    MENU.style.visibility = "visible";
    MENU.style.opacity = '1';
}
*/
