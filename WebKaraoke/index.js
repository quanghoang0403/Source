$(document).ready(function (e) {
  $(document).on("click", ".title-region", function () {
    console.log($(this));
    $(this).parent(".region").toggleClass("active");
    $(this).parent(".region").find(".listing").slideToggle();
  });

  $(document).on("click", ".listing li", function () {
    $(this).toggleClass("active");
    $(this).find(".lyrics").slideToggle();
  });
});
