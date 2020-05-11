$( function() {
    $('.e-multiselect__selectBox').click(function(){
        if ($('.e-multiselect__checkboxes').css("display")=="none") {
            $('.e-multiselect__checkboxes').css("display","block");
        } else {
            $('.e-multiselect__checkboxes').css("display", "none");
        }
    });
});