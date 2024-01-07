// 写真 fade in
$(function () {
  $(window).scroll(function () {
    $(".js-fade").each(function () {
      let pos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100) {
        $(this).addClass("scroll");
      }
    });
  });
});

// アコーディオン
$(function () {
  $(".js-accordion-title").on("click", function () {
    $(".js-accordion-title").not(this).removeClass("open");
    $(".js-accordion-title").not(this).removeClass("border");
    $(".js-accordion-title").not(this).next().slideUp(200);
    $(this).toggleClass("open");
    $(this).toggleClass("border");
    $(this).next().slideToggle(200);
  });
});
