var img = document.getElementById('myImage');
let currentImgIdx = 1;
const images = [ 
    'https://cdn.pixabay.com/photo/2017/08/30/11/29/plant-2696729_960_720.jpg',
    'https://cdn.pixabay.com/photo/2022/04/19/16/10/climate-protection-7143295_960_720.jpg',
    'https://media.istockphoto.com/id/1061630236/photo/tree.jpg?b=1&s=170667a&w=0&k=20&c=eb8mMT5SnXUX8ANiUaCsjOITQUms8IXq3xuF7aAwmhs=',
    'https://media.istockphoto.com/id/1022673394/photo/coins-with-plant-on-top-put-on-the-soil-in-green-nature-background-for-business-growth-concept.jpg?b=1&s=170667a&w=0&k=20&c=RhhlZBQr1GSoujTKKk8wGmVwx4WT_NIUOUOSWyHqFoU=',
    'https://cdn.pixabay.com/photo/2019/10/27/15/51/nature-4582137__340.jpg',
]; 

function changeImage(){
    let inputVal = document.getElementById("inputId").value;
    if(currentImgIdx >= images.length){
        currentImgIdx = 0;
    }
    img.src = images[currentImgIdx];
    currentImgIdx++;
    document.getElementById("inputId").value = " ";
    document.getElementById("heading").innerHTML= "<h3>" + inputVal + "</h3>";
}