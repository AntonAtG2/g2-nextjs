<script>
    document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".tab-link", {
        x: "100%", opacity: 0, duration: 0.6, stagger: 0.2, ease: "power3.out"
    });
});
</script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
    const submenu = document.getElementById("submenu");
    const submenuOffset = submenu.offsetTop; // Get initial position

    window.addEventListener("scroll", function () {
    if (window.scrollY > submenuOffset) {
    submenu.classList.add("fixed", "top-0", "w-full", "shadow-md");
} else {
    submenu.classList.remove("fixed", "top-0", "w-full", "shadow-md");
}
});
});
</script>