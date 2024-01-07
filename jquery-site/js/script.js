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
  /*タイトルをクリックすると*/
  $(".js-accordion-title").on("click", function () {
    $(this).toggleClass("border");
    $(this).next().slideToggle(200);
    $(this).toggleClass("open", 200);
  });
});
