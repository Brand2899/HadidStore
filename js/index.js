const bannerTitleAnimation = document.getElementById("banner__title");

bannerTitleAnimation.addEventListener("mouseover", e => {
    console.log("in");
    animation.classList.add("animate__animated");
    animation.classList.add("animate__bounce");
});

bannerTitleAnimation.addEventListener("mouseout", e => {
    console.log("leave");
    animation.className = "title";
});