import css from "./style.css";

{

    let openNavBtn = document.getElementById("open-right-navbtn");
    let closeNavBtn = document.getElementById("close-right-navbtn");

    let SideNav = document.getElementById("about");
    const aboutContent = document.getElementById("about-content");
    let navWidth = "20%";

    let content = document.getElementById("content");

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
            openNavBtn.style.backgroundColor = "#000000";
        });
        openNavBtn.addEventListener("mouseout", function () {
            openNavBtn.style.backgroundColor = "#222222";
        });
    }

    function CloseNav() {
        SideNav.style.left = "100%";
        SideNav.style.width = "0";
        content.style.marginRight = "0";
        openNavBtn.style.backgroundColor = "#222222";
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
                openNavBtn.style.backgroundColor = "#000000";
                aboutContent.style.display = "none";
                setTimeout(() => {  aboutContent.style.display = "inherit"; }, 500);
            }
            else {
                aboutContent.style.display = "none";
                setTimeout(() => {  aboutContent.style.display = "inherit"; }, 500);
                CloseNav();
            }
        }
    });

    //導覽列「關於我」按鈕

    //關於我左上的差號按鈕
    closeNavBtn.addEventListener("click", CloseNav);

}
