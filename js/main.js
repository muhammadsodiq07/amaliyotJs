let elImgHolder = document.querySelector(".zoom");
let elCircleImg = document.querySelector(".zoom_box img");

elImgHolder.addEventListener("mousemove", (e) => {
  let x = e.offsetX - 50;
  let y = e.offsetY - 40;
  elCircleImg.style.transform = `translate(-${x}px, -${y}px) scale(2)`;
})


// function imagezoom(imgID, resuitID) {

//   let img, lens, result, cx, cy;
//   img - document.getElementById(imgID);
//   result = document.getElementById(resuitID)
//   ;
//   lens = document.createElement("div");
//   lens.setAttribute("class", "img-zoom-lens");

//   img.parentElement.insertBefore(lens, img);
//   cx = result.offsetwidth / lens.offsetwidth;
//   cy = result.offsetHeight / lens.offsetHeight;

//   result.style.backgroundImage - "url('" + img.src + "')";
//   result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

//   lens.addEventListener("mousemove", moveLens);
//   img.addEventlistener("mousemove", moveLens);

//   lens.addEventListener("touchmove", moveLens);
//   img.addeventlistener("touchmove", moveLens);

//   function moveLens(e) {
//     let pos, x, y;
//     pos = getCursorPos(e);
//     x = pos.x - (lens.offsetWidth / 2);
//     y = pos.y - (lens.offsetHeight / 2);
//     if (x > img.width - lens.offsetWidth) {
//       x = img.width - lens.offsetWidth;
//     }
//     if (x < 0) {
//       x = 0;
//     }
//     if (y > img.height - lens.offsetHeight) {
//       y = img.height - lens.offsetHeight;
//     }
//     if (y < 0) {
//       y = 0;
//     }
//     lens.style.left = x + "px"
//     lens.style.top = y + "px"
//     result.style.backgroundPositon = "-" + (x * cx) + "px -" + (y * cy) + "px";
//   }

//   function getCursorPos(e) {
//     let a, x = 0,
//       y = 0;
//     e = e || window.event;
//     a = img.getBoundingClientRect();
//     x = e.pageX - a.left
//     y = e.pageY - a.top
//     x = x - window.pageXOffset
//     y = y - window.pageYOffset;
//     return {
//       x: x,
//       y: y
//     };
//   }
// }