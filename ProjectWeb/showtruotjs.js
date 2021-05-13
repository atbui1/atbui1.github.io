var img = document.getElementById("anhtruot");
var imgarray = ["hinh/truot1.jpg", "hinh/truot2.jpg", "hinh/truot3.gif", "hinh/truot4.jpg", "hinh/truot5.jpg",];
var anhdautien = 0;
function changimg(){
    anhtruot.setAttribute("src", imgarray[anhdautien]);
    anhdautien++;
    if(anhdautien >= 5){
        anhdautien=0;
    }
}
var thoigian = setInterval(changimg,2000);