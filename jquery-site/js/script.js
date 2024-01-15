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

  // 次に進む処理
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

  // 戻る処理
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

// スライダー　sp price
$(function () {
  let count = $(".price-flex div").length;
  let current = 1;
  w = $(window).width();

  function slideLeft() {
    if (w <= 375) {
      $(".price-flex div:nth-child(" + current + ")").animate(
        { "margin-left": "-280px" },
        500,
        function () {
          // アニメーションが完了したら呼び出されるコールバック関数
          if (current === 3) {
            // 最後の要素に達したら最初の要素に戻す
            current = 1;
            $(".price-flex div").css("margin-left", "0"); // 全ての要素のmarginを初期化
          } else {
            current++;
          }
        }
      );
    } else if (w > 375 && w <= 500) {
      $(".price-flex div:nth-child(" + current + ")").animate(
        { "margin-left": "-240px" },
        500,
        function () {
          // アニメーションが完了したら呼び出されるコールバック関数
          if (current === 3) {
            // 最後の要素に達したら最初の要素に戻す
            current = 1;
            $(".price-flex div").css("margin-left", "0"); // 全ての要素のmarginを初期化
          } else {
            current++;
          }
        }
      );
    }
  }

  // 3秒ごとにslideLeft関数を実行
  setInterval(slideLeft, 3000);
});

// topに戻るボタン
$(function () {
  $(".top-button").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0, //上から0pxの位置に戻る
      },
      800
    );
    return false;
  });
});

// トグルメニュー
$(function () {
  let count = 1;
  $(".openbtn").on("click", function () {
    $(this).toggleClass("active");
    count++;
    $(".btnli").slideToggle(300);
    if (count % 2 === 0) {
      $(".openbtn span").css("background", "#FFFFFF");
    } else {
      $(".openbtn span").css("background", "#00B21B");
    }
  });
});

// mv切り替え
$(function () {
  function mvSlider() {
    // 現在表示されている画像のインデックスを取得
    let current = $(".header-wrapper img:visible").index();
    // 次の画像のインデックスを計算
    let next = (current + 1) % $(".header-wrapper img").length;
    // 現在の画像を非表示にし、次の画像を表示する
    $(".header-wrapper img").eq(current).fadeOut();
    $(".header-wrapper img").eq(next).fadeIn();
  }

  // 初回実行
  mvSlider();

  // 3秒ごとに autoImageSlider 関数を実行
  setInterval(mvSlider, 3000);
});

// trainerとstaffを切り替え
$(function () {
  $(".trainer-img-wrapper").show();
  $(".staff-img-wrapper").hide();
  $(".trainer-trainer").on("click", function () {
    $(".small").removeClass("hover");
    $(".trainer-img-wrapper").show();
    // スタッフ画像を非表示
    $(".staff-img-wrapper").hide();
  });

  $(".trainer-staff").on("click", function () {
    $(".small").addClass("hover");
    $(".staff-img-wrapper").show();
    // スタッフ画像を非表示
    $(".trainer-img-wrapper").hide();
  });
});
