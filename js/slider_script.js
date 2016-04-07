var dImages = new Array();
var numImages = 6;

for(i=0;i<numImages;i++)
{
    dImages[i]=new Image();
    dImages[i].src="img/slideshow/image"+(i)+".jpg";
}

var img = 0;
function swapPicture(target) {
    image = document.getElementById("myImage")
    img = img + target;
    console.log(img);
    if(img < 0)
    {
       img = 5;
    }
    else
    {
       if(img > 5)
       {
          img = 0;
       }
    }
    image.src = "img/slideshow/image"+(img)+".jpg";
}

function showArrowRight(val){
    var visibility = val?'visible':'hidden'; 
    
    var imgTwo= document.getElementById('case-right');
    imgTwo.style.visibility=visibility;   
}

function showArrowLeft(valTwo){
    var visibility = valTwo?'visible':'hidden'; 
        
    var img= document.getElementById('case-left');
    img.style.visibility=visibility;
}