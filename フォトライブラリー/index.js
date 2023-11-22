//表示する写真を定義
let images = [
  {
    path: "img/IMG_0185.JPG",
    name: "name01",
    caption: "コメント1",
  },
  {
    path: "img/IMG_0236.JPG",
    name: "name02",
    caption: "コメント2",
  },
  {
    path: "img/IMG_0419.jpg",
    name: "name03",
    caption: "コメント3",
  },
];

//定義した写真をHTMLに追加する
for (let i = 0; i < images.length; i++) {
  let img;
  let caption;
  let div;
  img = document.createElement("img");
  img.setAttribute("id", "dragon");
  img.setAttribute("src", images[i].path);

  caption = document.createElement("div");
  caption.className = "inner";
  caption.innerHTML =
    "<p>" + images[i].caption + "<span>" + images[i].name + "</span></p>";

  div = document.createElement("div");
  div.className = "photo";
  div.appendChild(img);
  div.appendChild(caption);

  document.getElementById("img_unit").appendChild(div);
}

//写真をクリックしたら拡大
const photo = document.querySelectorAll(".photo");

for (let i = 0; i < photo.length; i++) {
  photo[i].addEventListener("click", () => {
    photo[i].classList.toggle("scale");
  });
}
