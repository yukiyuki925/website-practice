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

// スライダー
$(function () {
  let count = $("#slide li").length;
  let current = 1;
  let next = 2;
  let interval = 3000;
  let duration = 500;
  let timer;
  $("#slide li:not(:first-child)").hide();
  timer = setInterval(slideTimer, interval);

  function slideTimer() {
    $("#slide li:nth-child(" + current + ")").fadeOut(duration);
    $("#slide li:nth-child(" + next + ")").fadeIn(duration);
    current = next;
    next = ++next;
    if (next > count) {
      next = 1;
    }

    $("#button li a").removeClass("target");
    $("#button li:nth-child(" + current + ") a").addClass("target");
  }

  $("#button li a").click(function () {
    next = $(this).html();
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    slideTimer();
    return false;
  });
});
