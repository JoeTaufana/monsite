document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const navMenu = document.querySelector('.nav-menu');

    // Ajouter un gestionnaire d'événements au clic sur le bouton du menu
    menuButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Empêcher la propagation du clic en dehors de la barre de navigation
        navMenu.classList.toggle('active');
    });

    // Ajouter un gestionnaire d'événements de clic à l'ensemble du document
    document.addEventListener('click', function(event) {
        // Vérifier si le clic n'est pas à l'intérieur de la barre de navigation ou sur le bouton du menu
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnMenuButton = event.target === menuButton;

        if (!isClickInsideNav && !isClickOnMenuButton) {
            // Si le clic est en dehors de la barre de navigation et du bouton du menu, fermez la barre de navigation
            navMenu.classList.remove('active');
        }
    });
});



$( function() {
  $( "#accordion" )
    .accordion({
      header: "> div > h3"
    })
    .sortable({
      axis: "y",
      handle: "h3",
      stop: function( event, ui ) {
        // IE doesn't register the blur when sorting
        // so trigger focusout handlers to remove .ui-state-focus
        ui.item.children( "h3" ).triggerHandler( "focusout" );

        // Refresh accordion to handle new order
        $( this ).accordion( "refresh" );
      }
    });
} );
