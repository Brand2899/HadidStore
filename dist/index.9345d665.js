alert("entró");
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

//# sourceMappingURL=index.9345d665.js.map
