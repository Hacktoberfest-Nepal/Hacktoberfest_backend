var avatars = document.getElementsByClassName("avatars");


for (let i = 0; i < avatars.length; i++){
    var avatar = avatars[i];
    avatar.addEventListener("click", function () {
        document.getElementsByClassName("current")[0].classList.remove("current");
        this.classList.add("current");
        me.avatar = this.src;
    })
}