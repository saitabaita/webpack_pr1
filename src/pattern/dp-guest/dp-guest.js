$( function() {
    $('.dp-guest__selectBox').click(function(){
        if ($('.dp-guest__checkboxes').css("display")=="none") {
            $('.dp-guest__checkboxes').css("display","block");
        } else {
            $('.dp-guest__checkboxes').css("display", "none");
            var i = 0,
            g=' гост';
            $('.dp-guest__checkboxes__box_control label').each(function(index, element){
                i = i + parseInt($(this).text());
            });
            if(i==0 || i>4) g+='ей';
            if(i==1) g+='ь';
            if(i>1 && i<5) g+='я';
            $('.dp-guest__selectBox select option:selected').text(i+g);
        }
    });
});