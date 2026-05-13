const bar = document.querySelector(".bar");
const closes = document.querySelector(".closes");
const uls = document.querySelector("ul");



bar.onclick = function () {
    uls.style.cssText = "height: 75px;";
}

closes.onclick = function () {
    uls.style.cssText = "height: 0;"
}

let arrowRight = document.querySelectorAll(".ang-right");
let arrowLeft = document.querySelectorAll(".ang-left");

arrowRight.forEach((ele) => {
    ele.addEventListener("click", function () {
        let head_page = document.querySelector(".parent-page .head-page.dis-flex");

        if (head_page && head_page.nextElementSibling) {
            head_page.classList.remove("dis-flex");
            head_page.nextElementSibling.classList.add("dis-flex");
        }
    })
})


arrowLeft.forEach((ele) => {
    ele.addEventListener("click", function () {
        let head_page = document.querySelector(".parent-page .head-page.dis-flex");
        if (head_page && head_page.previousElementSibling) {
            head_page.classList.remove("dis-flex");
            head_page.previousElementSibling.classList.add("dis-flex");
        }
    })
})
