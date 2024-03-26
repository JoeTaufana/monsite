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


window.onload = () => {
  // On va chercher tous les éléments avec la classe "accordionElement"
  const elts = document.querySelectorAll(".accordionElement");

  for (let elt of elts) {
    elt.addEventListener("click", function() {
      // On récupère l'élément actif
      const active = document.querySelector(".accordionElement.active");
      
      // Si l'élément cliqué n'est pas déjà actif
      if (active !== this) {
        // On retire la classe "active" de l'élément actif
        if (active) {
          active.classList.remove("active");
          // On réduit sa hauteur
          active.querySelector(".accordionContent").style.height = 0;
        }

        // On met la classe "active" à l'élément cliqué
        this.classList.add("active");

        // On récupère la balise <ul> à l'intérieur de l'élément cliqué
        let section = this.querySelector(".accordionContent ul");

        // On récupère la hauteur de la balise <ul>
        let sectionHeight = section.offsetHeight + 25;

        // On définit la hauteur de .accordionContent
        this.querySelector(".accordionContent").style.height = sectionHeight + "px";
      } else {
        // Si l'élément cliqué est déjà actif, on le réduit
        this.classList.remove("active");
        this.querySelector(".accordionContent").style.height = 0;
      }
    });
  }
}
