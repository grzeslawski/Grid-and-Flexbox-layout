const buttons = document.querySelectorAll(".filters__button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let currentButton = document.getElementsByClassName(
      "filters__button--active"
    );
    if (currentButton.length > 0) {
      currentButton[0].className = currentButton[0].className.replace(
        " filters__button--active",
        ""
      );
    }

    this.className += " filters__button--active";

    console.log("działa");
  });
}
