import css from "./style.css";

{

    const openNavBtn = document.getElementById("open-right-navbtn");
    const closeNavBtn = document.getElementById("close-right-navbtn");

    const SideNav = document.getElementById("about");
    const aboutContent = document.getElementById("about-content");
    let navWidth = "20%";
    const focusColor = "#222222";

    const content = document.getElementById("content");
    const darkMode = document.getElementsByClassName("dark-mode");
    const idNav = document.getElementById("nav"); 

    // class hover {
    //     hover(){
    //         openNavBtn.addEventListener("mouseover", this.mouseover);
    //         openNavBtn.addEventListener("mouseout", this.mouseout);
    //     }
    //     mouseover() {
    //         openNavBtn.style.backgroundColor = "#000000";
    //     }
    //     mouseout() {
    //         openNavBtn.style.backgroundColor = "#222222";
    //     }
    // }

    function hover() {
        openNavBtn.addEventListener("mouseover", function () {
            openNavBtn.style.backgroundColor = focusColor;
        });
        openNavBtn.addEventListener("mouseout", function () {
            openNavBtn.style.backgroundColor = idNav.style.backgroundColor;
        });
    }

    function CloseNav() {
        SideNav.style.left = "100%";
        SideNav.style.width = "0";
        content.style.marginRight = "0";
        openNavBtn.style.backgroundColor = idNav.style.backgroundColor;
        aboutContent.style.display = "none";
        setTimeout(() => {  aboutContent.style.display = "inherit"; }, 500);
        // openNavBtn.addEventListener("mouseover", hover.mouseover);
        // openNavBtn.addEventListener("mouseout", hover.mouseout);
        hover();
    }

    // if (window.matchMedia("(max-width: 1024px)") {
    // }
    // if(window.innerWidth <= 1024){
    //     console.log("close")
    //     CloseNav();
    // }

    //「關於我」按鈕
    openNavBtn.addEventListener("click", function OpenNav() {
        //判斷螢幕大小是否符合
        if (window.innerWidth <= 1024) {
            CloseNav();
        } 
        else {
            // 判斷「關於我」寬度
            if (SideNav.style.width != navWidth) {
                // SideNav.style.left = "80%";
                SideNav.style.setProperty("left", "calc(50% + 30%)");
                SideNav.style.width = navWidth;
                content.style.marginRight = navWidth;
                openNavBtn.style.backgroundColor = focusColor;
                aboutContent.style.display = "none";
                setTimeout(() => {  aboutContent.style.display = "inherit"; }, 500);
            }
            else {
                CloseNav();
            }
        }
    });

    //導覽列「關於我」按鈕

    //關於我左上的差號按鈕
    closeNavBtn.addEventListener("click", CloseNav);
}



const openModalButton = document.getElementsByClassName("modal-open");
const closeModalButton = document.getElementById("modal-close");
const modalSlide = document.getElementById("modalSlide");
const modalImg = document.getElementById("modalImg");

for (let i = 0; i < openModalButton.length; i++) {
    openModalButton[i].addEventListener("click", openModal);
}
closeModalButton.addEventListener("click", closeModal);

function openModal(){
    document.getElementById("myModal").style.display = "block";
}

function closeModal(){
    document.getElementById("myModal").style.display = "none";
    modalSlide.style.display = "none";
    modalImg.style.display = "none";
}

let slideIndex = 1;

function showSlides(num){
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const demo = document.getElementsByClassName("demo");
    
    
    //使slide遞增循環
    if (num > slides.length) {
        slideIndex = 1;
    }
    
    //使slide遞減循環
    if (num < 1) {slideIndex = slides.length;}
    
    //將所有slides關閉顯示
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    //將所有demo的class內，含"active"替換為""
    for (i = 0; i < demo.length; i++) {
        demo[i].className = demo[i].className.replace("active", "");
    }
    
    modalSlide.style.display = "inline";
    slides[slideIndex-1].style.display = "block";
    demo[slideIndex-1].className += " active";
}


function showModalImg() {
    modalImg.style.display = "inline";
    modalImg.src = this.src;
}

const modalprev = document.getElementsByClassName("prev");
const modalnext = document.getElementsByClassName("next");

for (let i = 0; i  < modalprev.length; i++) {
    modalprev[i].addEventListener("click", plusSlide.bind(null, -1));
}
for (let i = 0; i  < modalnext.length; i++) {
    modalnext[i].addEventListener("click", plusSlide.bind(null, 1));
}

function plusSlide(num) {
    showSlides(slideIndex += num);
}

const veg1 = document.getElementsByClassName("veg1");
const veg2 = document.getElementsByClassName("veg2");
const blenderLion = document.getElementById("blenderLion");
const smallRoom = document.getElementById("smallRoom");
const dotsPong = document.getElementById("dotsPong");

// vge1.addEventListener("click", openModal);
for (let i = 0; i  < veg1.length; i++) {
    veg1[i].addEventListener("click", currentSlide.bind(null, 1));
}
for (let i = 0; i < veg2.length; i++) {
    veg2[i].addEventListener("click", currentSlide.bind(null, 2));
}
blenderLion.addEventListener("click", showModalImg);
smallRoom.addEventListener("click", showModalImg);
dotsPong.addEventListener("click", showModalImg);

function currentSlide(num) {
    showSlides(slideIndex = num);
}



