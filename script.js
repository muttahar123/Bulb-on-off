

var bulb_box = document.getElementById('bulb_box');
var light = document.getElementById('light');

bulb_box.addEventListener('mouseover' , function(){

    light.src = "https://iheartcraftythings.com/wp-content/uploads/2021/04/Light-Bulb-DRAWING-%E2%80%93-STEP-10.jpg"

})


bulb_box.addEventListener('mouseout' , function(){
    light.src = 'https://i.pinimg.com/736x/f9/f4/09/f9f409cb18a5766c92da45ff90d7786a.jpg'
})