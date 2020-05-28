require('jquery-ui');

const $menudropdown = $('.drop_down_services, .head__menu__drop_down');
  
    $menudropdown.mouseover(function(){
        $('.head__menu__drop_down').attr("style","display: flex");
    });
    $menudropdown.mouseout(function(){
        $('.head__menu__drop_down').attr("style","display: none");
    });

//Звездочки подключаем
$('#stars').barrating({
  theme: 'css-stars'
});
$('#stars').barrating('set', 3);

$('#stars2').barrating({
  theme: 'css-stars'
});
$('#stars2').barrating('set', 3);

$('#stars3').barrating({
  theme: 'css-stars'
});
$('#stars3').barrating('set', 4);

$(document).ready(function() {
  $("#lightSlider").lightSlider({
    item:1,
    loop:true,
    slideMargin:0
  }); 
});

