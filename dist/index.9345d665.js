const bannerTitleAnimation = document.getElementById("banner__title");
bannerTitleAnimation.addEventListener("mouseover", (e)=>{
    console.log("in");
    bannerTitleAnimation.classList.add("animate__animated");
    bannerTitleAnimation.classList.add("animate__bounce");
});
bannerTitleAnimation.addEventListener("mouseout", (e)=>{
    console.log("leave");
    bannerTitleAnimation.className = "title";
});
window.onscroll = function(e) {
    const posY = document.documentElement.scrollTop;
    if (posY >= 0) {
        bannerTitleAnimation.classList.add('animateanimated');
        bannerTitleAnimation.classList.add("animatebounce");
    } else bannerTitleAnimation.className = "title";
};

//# sourceMappingURL=index.9345d665.js.map
