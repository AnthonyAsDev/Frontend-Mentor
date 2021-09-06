let accordion = Array.from(document.getElementsByClassName("accordion"));

accordion.forEach((element) => {
  element.addEventListener("click", function () {
    // console.log(this);
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
