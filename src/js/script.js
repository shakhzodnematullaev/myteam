alert

var btn = document.querySelector(".d__btn");
var itembox = document.querySelector(".item__box");
var boxinfo = document.querySelector(".box-info");

var btn2 = document.querySelector(".d__btn2");
var itembox2 = document.querySelector(".item__box2");
var boxinfo2 = document.querySelector(".box-info2");

var btn3 = document.querySelector(".d__btn3");
var itembox3 = document.querySelector(".item__box3");
var boxinfo3 = document.querySelector(".box-info3");

var btn4 = document.querySelector(".d__btn4");
var itembox4 = document.querySelector(".item__box4");
var boxinfo4 = document.querySelector(".box-info4");

var btn5 = document.querySelector(".d__btn5");
var itembox5 = document.querySelector(".item__box5");
var boxinfo5 = document.querySelector(".box-info5");

var btn6 = document.querySelector(".d__btn6");
var itembox6 = document.querySelector(".item__box6");
var boxinfo6 = document.querySelector(".box-info6");

var burger = document.querySelector(".hamburger");
var nav = document.querySelector(".wrapper");
var body = document.querySelector("body");

burger.addEventListener("click", function() {
    burger.classList.toggle("hamburger--active");
    nav.classList.toggle("wrapper--active");
    body.classList.toggle("body")
})

btn.addEventListener("click", function() {
    btn.classList.toggle("d__btn--active");
    itembox.classList.toggle("item__box--active");
    boxinfo.classList.toggle("box-info--active");
    btn2.classList.remove("d__btn2--active");
    itembox2.classList.remove("item__box2--active");
    boxinfo2.classList.remove("box-info2--active");
    btn3.classList.remove("d__btn3--active");
    itembox3.classList.remove("item__box3--active");
    boxinfo3.classList.remove("box-info3--active");
    btn4.classList.remove("d__btn4--active");
    itembox4.classList.remove("item__box4--active");
    boxinfo4.classList.remove("box-info4--active");
    btn5.classList.remove("d__btn5--active");
    itembox5.classList.remove("item__box5--active");
    boxinfo5.classList.remove("box-info5--active");
    btn6.classList.remove("d__btn6--active");
    itembox6.classList.remove("item__box6--active");
    boxinfo6.classList.remove("box-info6--active");
})

btn2.addEventListener("click", function() {
    btn2.classList.toggle("d__btn2--active");
    itembox2.classList.toggle("item__box2--active");
    boxinfo2.classList.toggle("box-info2--active");
    btn.classList.remove("d__btn--active");
    itembox.classList.remove("item__box--active");
    boxinfo.classList.remove("box-info--active");
    btn3.classList.remove("d__btn3--active");
    itembox3.classList.remove("item__box3--active");
    boxinfo3.classList.remove("box-info3--active");
    btn4.classList.remove("d__btn4--active");
    itembox4.classList.remove("item__box4--active");
    boxinfo4.classList.remove("box-info4--active");
    btn5.classList.remove("d__btn5--active");
    itembox5.classList.remove("item__box5--active");
    boxinfo5.classList.remove("box-info5--active");
    btn6.classList.remove("d__btn6--active");
    itembox6.classList.remove("item__box6--active");
    boxinfo6.classList.remove("box-info6--active");
})

btn3.addEventListener("click", function() {
    btn3.classList.toggle("d__btn3--active");
    itembox3.classList.toggle("item__box3--active");
    boxinfo3.classList.toggle("box-info3--active");
    btn.classList.remove("d__btn--active");
    itembox.classList.remove("item__box--active");
    boxinfo.classList.remove("box-info--active");
    btn2.classList.remove("d__btn2--active");
    itembox2.classList.remove("item__box2--active");
    boxinfo2.classList.remove("box-info2--active");
    btn4.classList.remove("d__btn4--active");
    itembox4.classList.remove("item__box4--active");
    boxinfo4.classList.remove("box-info4--active");
    btn5.classList.remove("d__btn5--active");
    itembox5.classList.remove("item__box5--active");
    boxinfo5.classList.remove("box-info5--active");
    btn6.classList.remove("d__btn6--active");
    itembox6.classList.remove("item__box6--active");
    boxinfo6.classList.remove("box-info6--active");
})

btn4.addEventListener("click", function() {
    btn4.classList.toggle("d__btn4--active");
    itembox4.classList.toggle("item__box4--active");
    boxinfo4.classList.toggle("box-info4--active");
    btn.classList.remove("d__btn--active");
    itembox.classList.remove("item__box--active");
    boxinfo.classList.remove("box-info--active");
    btn2.classList.remove("d__btn2--active");
    itembox2.classList.remove("item__box2--active");
    boxinfo2.classList.remove("box-info2--active");
    btn3.classList.remove("d__btn3--active");
    itembox3.classList.remove("item__box3--active");
    boxinfo3.classList.remove("box-info3--active");
    btn5.classList.remove("d__btn5--active");
    itembox5.classList.remove("item__box5--active");
    boxinfo5.classList.remove("box-info5--active");
    btn6.classList.remove("d__btn6--active");
    itembox6.classList.remove("item__box6--active");
    boxinfo6.classList.remove("box-info6--active");
})

btn5.addEventListener("click", function() {
    btn5.classList.toggle("d__btn5--active");
    itembox5.classList.toggle("item__box5--active");
    boxinfo5.classList.toggle("box-info5--active");
    btn.classList.remove("d__btn--active");
    itembox.classList.remove("item__box--active");
    boxinfo.classList.remove("box-info--active");
    btn2.classList.remove("d__btn2--active");
    itembox2.classList.remove("item__box2--active");
    boxinfo2.classList.remove("box-info2--active");
    btn3.classList.remove("d__btn3--active");
    itembox3.classList.remove("item__box3--active");
    boxinfo3.classList.remove("box-info3--active");
    btn4.classList.remove("d__btn4--active");
    itembox4.classList.remove("item__box4--active");
    boxinfo4.classList.remove("box-info4--active");
    btn6.classList.remove("d__btn6--active");
    itembox6.classList.remove("item__box6--active");
    boxinfo6.classList.remove("box-info6--active");
})

btn6.addEventListener("click", function() {
    btn6.classList.toggle("d__btn6--active");
    itembox6.classList.toggle("item__box6--active");
    boxinfo6.classList.toggle("box-info6--active");
    btn.classList.remove("d__btn--active");
    itembox.classList.remove("item__box--active");
    boxinfo.classList.remove("box-info--active");
    btn2.classList.remove("d__btn2--active");
    itembox2.classList.remove("item__box2--active");
    boxinfo2.classList.remove("box-info2--active");
    btn3.classList.remove("d__btn3--active");
    itembox3.classList.remove("item__box3--active");
    boxinfo3.classList.remove("box-info3--active");
    btn4.classList.remove("d__btn4--active");
    itembox4.classList.remove("item__box4--active");
    boxinfo4.classList.remove("box-info4--active");
    btn5.classList.remove("d__btn5--active");
    itembox5.classList.remove("item__box5--active");
    boxinfo5.classList.remove("box-info5--active");
})
