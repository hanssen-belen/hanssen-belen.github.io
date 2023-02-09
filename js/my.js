window.onscroll = function () {
    var element = document.querySelector(".fade-in");
    var position = element.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        element.style.opacity = 1;
    }
};



