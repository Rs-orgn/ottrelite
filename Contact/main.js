var home = document.getElementById("hm");
var yt = document.getElementById("yt");
var ot = document.getElementById("ot");
var cont = document.getElementById("cont");
var menu = document.getElementById("Menu");
var menuBut = document.getElementById("MenuButs");
var red = document.getElementById("Reddit");
//other vars
var opened = true;
//type conversions
//event listeners
cont.onclick = function () {
    alert("you are on the same page");
};
yt.addEventListener("click", function () {
    var prop = window.confirm("This directly leads you to the YT page, continue?");
    if (prop) {
        self.location.href = "https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.youtube.com/channel/UCCeTm3l8MAiGDP2biWm5FOw/about&ved=2ahUKEwj3q_PMvcv4AhXsR2wGHcYXC7oQjjh6BAgGEAE&usg=AOvVaw0dC2gFlCXcaneK4p58hPzH/Videos";
    }
    else {
        alert("You canceled the request");
    }
});
home.addEventListener("click", function () {
    self.location.href = "/MainPage/index.html";
});
menuBut.addEventListener("click", function () {
    if (opened) {
        opened = false;
        Close();
    }
    else {
        opened = true;
        Open();
    }
});
ot.onclick = function () {
    self.location.href = "/OurTeam/teamStats.html";
};
//functions
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
