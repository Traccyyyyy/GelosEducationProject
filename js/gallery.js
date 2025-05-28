let imagesSlides=["images/pexels-thirdman-8926410-1.jpg", "images/pexels-cowomen-2041624-2.jpg",
"images/pexels-thirdman-6502731-3.jpg","images/pexels-charlotte-may-5965576.jpg"];
let currentImgIndex=1;

const previousEl=document.getElementById("previous");
const nextEl=document.getElementById("next");
const currentImg=document.getElementById("currentImg");

    function pre(){
    if (currentImgIndex>0){ 
        currentImgIndex--;
        currentImg.src=imagesSlides[currentImgIndex];
    } 
    }

    function next(){
        if (currentImgIndex==imagesSlides.length-1){

        } else{
            currentImgIndex++;
            currentImg.src=imagesSlides[currentImgIndex];
        }
    }

    function showPic(whichPic){
        var source=whichPic.getAttribute("href");
        if (!document.getElementById("currentImg")){
            return true;
        }
        currentImg.src=source;
        return false;
    }
    function prepareGallery(){
        if(!document.getElementsByTagName || !document.getElementById || !document.getElementById("galleryBtn")){
            return false;
        } 
    var imagLi=document.getElementById("galleryBtn")
    var links=document.getElementsByClassName("slides");
    for (i=0;i<links.length;i++){
        links[i].onclick=function(){
            console.log(i);
            return showPic(this);
            return false;
        }
    }
}
addEventListener("load",prepareGallery);