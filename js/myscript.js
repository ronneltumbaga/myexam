
  $( function() {
    var availableTags = [
      "Nowheresville, 12 00000",
      "Heresville, 43 53454",
      "Thereville, 33 23423",
      "Theville, 44, 65723"
    ];
    $( "#zip" ).autocomplete({
        source: availableTags,
        position: {
            offset: '50 4' // Shift 20px to the left, 4px down.
        }
    });
  } );