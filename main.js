var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var image_array=["RA.jpg","cropped-header-9.jpg"];
var random_number=Math.floor(Math.random()*2)

var car1_Width=100,car1_Height=90,car_x=10,car_y=10,car1_image="car1.png",car2_image="car2.png",background_image=image_array[random_number],car2_Width=100,car2_Height=90;
var car1_x=10,car1_y=100;

function add(){
    backgroundImg=new Image();
    backgroundImg.onload=uploadBackground;
    backgroundImg.src=background_image;

    carImg=new Image();
    carImg.onload=uploadCar1;
    carImg.src=car1_image;

    car_Img=new Image();
    car_Img.onload=uploadCar2;
    car_Img.src=car2_image;

}
function uploadBackground(){
    ctx.drawImage(backgroundImg,0,0,canvas.width,canvas.height);
    
}
function uploadCar1(){
    ctx.drawImage(carImg,car_x,car_y,car1_Width,car1_Height);
}
function uploadCar2(){
    ctx.drawImage(car_Img,car1_x,car1_y,car2_Width,car2_Height);
} 
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    console.log(e.keyCode);
    var key=e.keyCode;
    if(key==37){
        car1_left();
        
        
    }
    if(key==38){
        
        car1_up();
    }
    if(key==39){
        car1_right();
       
       
    }
    if(key==40){
       
        car1_down();
    }
}
