var images = [
    "/coche1.jpg","/coche2.jpg","/coche3.jpg","/coche4.jpg","/coche5.jpg","/coche6.jpg"
];
var num=0;

function next()
{
  var slider =document.getElementById('slide');
  num++;
  
  if(num>=images.length)
  {
    num=0;
    
  }
  slider.src=images[num];
}

function previous()
{
  var slider =document.getElementById('slide');
  num--;
  
  if(num<0)
  {
    num=images.length-1;
    
  }
  slider.src=images[num];
}   