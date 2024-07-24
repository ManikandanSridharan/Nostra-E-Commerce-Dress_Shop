// sidebar 
var toggle = document.querySelector(".toggle")
var sidebar = document.querySelector(".sidebar")
var sideclose = document.querySelector(".sideclose")
toggle.addEventListener("click", function () {
    sidebar.style.marginLeft = "0px"
})
sideclose.addEventListener("click", function () {
    sidebar.style.marginLeft = "-100%"
})

//alertclose
var alertclose = document.querySelector(".alertclose")

alertclose.addEventListener("click", function () {
    alertclose.closest(".alert").remove()
})

//slider
var navleft = document.querySelector(".nav__left")
var navright = document.querySelector(".nav__right")
var scroll = document.querySelector(".slider__images")
var scrollmargin = 0
navleft.addEventListener("click", function () {
    if (scrollmargin == 0) {
        scrollmargin = 200
        scroll.style.marginLeft = "-" + scrollmargin + "vw"
    }
    else {
        scrollmargin = scrollmargin - 100
        scroll.style.marginLeft = "-" + scrollmargin + "vw"
    }
})
navright.addEventListener("click", function () {
    scrollmargin = scrollmargin + 100
    if (scrollmargin > 200) {
        scroll.style.marginLeft = "0vw"
        scrollmargin = 0
    }
    else {
        scroll.style.marginLeft = "-" + scrollmargin + "vw"
    }
})

//heart
var heart = document.querySelectorAll(".heart")
heart.forEach(function (el) {
    var empty = el.querySelector(".empty")
    var fill = el.querySelector(".fill")
    empty.addEventListener("click", function () {
        empty.style.display = "none"
        fill.style.display = "block"
    })
    fill.addEventListener("click", function () {
        empty.style.display = "block"
        fill.style.display = "none"
    })
}
)

