// JS

// const buttons = document.querySelectorAll(".filters__button");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     let currentButton = document.getElementsByClassName(
//       "filters__button--active"
//     );
//     if (currentButton.length > 0) {
//       currentButton[0].className = currentButton[0].className.replace(
//         " filters__button--active",
//         ""
//       );
//     }
//     this.className += " filters__button--active";
//   });
// }

// // jQuery

// $(document).ready(function() {
//   $(".filters__button").click(function() {
//     $(this).addClass("filters__button--active");
//     $(".filters__button")
//       .not(this)
//       .removeClass("filters__button--active");
//   });
// });

$(".filters__button").click(function() {
  $(".filters__button").removeClass("filters__button--active");
  $(this).addClass("filters__button--active");
  const dataLevel = $(this).data("level");
  console.log(dataLevel);

  if (dataLevel === "all") {
    $(".item").show();
  } else {
    $(".item").hide();
    $(`[data-level="${dataLevel}"]`).show();
  }
});
