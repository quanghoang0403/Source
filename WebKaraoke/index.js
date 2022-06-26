$(document).ready(function (e) {
  $(document).on("click", ".title-region", function () {
    $(".region").not($(this).parent(".region")).removeClass("active");
    $(this).parent(".region").toggleClass("active");
    $(".region").not($(this).parent(".region")).find(".listing").slideUp();
    $(this).parent(".region").find(".listing").slideToggle();
  });

  $(document).on("click", ".listing li", function () {
    $(".listing li").not(this).removeClass("active");
    $(this).toggleClass("active");
    $(".listing li").not(this).find(".lyrics").slideUp();
    $(this).find(".lyrics").slideToggle();
  });
});
