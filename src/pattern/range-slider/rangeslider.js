$( function() {
    $( ".slider-range > .slider").slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( ".slider-range > .slider" ).slider( "values", 0 ) +
      " - $" + $( ".slider-range > .slider" ).slider( "values", 1 ) );
});