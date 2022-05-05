var slider_image = document.querySelector('.slider');
var img = ['bcg-0.jpg', 'bcg-1.jpg', 'bcg-2.jpg', 'bcg-3.jpg', 'bcg-4.jpg', 'bcg-5.jpg'];
var i = 0;

function prev(){
  if(i <= 0) i = img.length;
  i--;
  return setImg();
}

function next(){
  if (i >= img.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg(){
  return slider_image.setAttribute('src', 'img/' + img[i]);
}
