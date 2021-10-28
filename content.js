let para = document.getElementsByTagName("p");

for (let i = 0; i < para.length; i++) {
  let element = para[i];

  element.style["background-color"] = "red";
  element.style["-webkit-box-shadow"] = "1px 1px 17px 14px #DDDED8";
  element.style["box-shadow"] = "1px 1px 17px 14px #DDDED8";
}

// code on the content page is executed once every thing is loaded on the page
