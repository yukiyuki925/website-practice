// 写真fadeIn
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

  // 次へボタンが押された時の処理
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

  // 戻るボタンが押された時の処理
  function reSlideTimer() {
    $("#slide li:nth-child(" + current + ")").fadeOut(duration);
    current = current - 1 > 0 ? current - 1 : count;
    $("#slide li:nth-child(" + current + ")").fadeIn(duration);
    next = current + 1;
    if (next > count) {
      next = 1;
    }
    $("#button li a").removeClass("target");
    $("#button li:nth-child(" + current + ") a").addClass("target");
  }

  // list a を押すと画像変遷
  $("#button li a").click(function () {
    next = $(this).html();
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    slideTimer();
    return false;
  });

  // 次へボタン
  $("#click-button #prevBtn").click(function () {
    slideTimer();
  });

  // 戻るボタン
  $("#click-button #prevBtn2").click(function () {
    reSlideTimer();
  });
});
