document.addEventListener("DOMContentLoaded", function () {
    const aboutPopup = document.getElementById("aboutPopup");
    const openBtn = document.getElementById("openAbout");
    const closeBtn = document.getElementById("closeAbout");
  
    // Hide popup by default
    aboutPopup?.classList.remove("active");
  
    if (openBtn && aboutPopup) {
      openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        aboutPopup.classList.add("active");
      });
    }
  
    if (closeBtn && aboutPopup) {
      closeBtn.addEventListener("click", function () {
        aboutPopup.classList.remove("active");
      });
    }
  });
  