// ハンバーガーメニュー
const nav = document.querySelector("#js-nav");
const pageLink = document.querySelectorAll(".entry-kengaku-link");
const ham = document.querySelector("#js-hamburger");
// console.log(nav);
ham.addEventListener("click", function () {
  // console.log('ok');
  ham.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  body.classList.toggle("is_hidden");
  pageLink.addEventListener("click", function () {
    nav.classList.remove("is-active");
  });
});

const scrollAreasSub = document.querySelectorAll(".js-scroll-trigger");

scrollAreasSub.forEach(function (scrollAreas) {
  e(scrollAreas);
});

// 左右から出てくるやつ
const KengakuItem = document.querySelectorAll(".entry-kengaku_list>li");
console.log(KengakuItem);

KengakuItem.forEach(function (KengakuItem, index) {
  gsap.from(KengakuItem, {
    x: function () {
      if ((index + 1) % 2 == 0) {
        return "100%";
      } else {
        return "-100%";
      }
    },
    x: function () {
      if ((index + 1) % 2 == 0) {
        return "-100%";
      } else {
        return "100%";
      }
    },
    // autoAlpha: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".js-entry-kengaku",
      start: "top center",
      markers: true,
    },
  });
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  let scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll >= 800) {
    //800pxスクロールしたら
    $(".page-top").removeClass("DownMove"); // DownMoveというクラス名を除去して
    $(".page-top").addClass("UpMove"); // UpMoveというクラス名を追加して出現
  } else {
    //それ以外は
    if ($(".page-top").hasClass("UpMove")) {
      //UpMoveというクラス名が既に付与されていたら
      $(".page-top").removeClass("UpMove"); //  UpMoveというクラス名を除去し
      $(".page-top").addClass("DownMove"); // DownMoveというクラス名を追加して非表示
    }
  }

  let wH = window.innerHeight; //画面の高さを取得
  let footerPos = $(".l_footer").offset().top; //footerの位置を取得
  if (scroll + wH >= footerPos + 10) {
    let pos = scroll + wH - footerPos + 10; //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
    $(".page-top").css("bottom", pos); //.page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
  } else {
    //それ以外は
    if ($(".page-top").hasClass("UpMove")) {
      //UpMoveというクラス名がついていたら
      $(".page-top").css("bottom", "24px"); // 下から10pxの位置にページリンクを指定
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// .page-topをクリックした際の設定
$(".page-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0, //ページトップまでスクロール
    },
    1000
  ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false; //リンク自体の無効化
});
