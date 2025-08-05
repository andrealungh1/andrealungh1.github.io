document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.querySelector('.moon');
  if (!toggle) return;                 // la pagina non ha l’icona? esci.

  toggle.addEventListener('click', () => {
    // Aggiunge/toglie la classe .light all’elemento radice
    document.documentElement.classList.toggle('light');

    // Cambia l’emoji sull’icona
    toggle.textContent = document.documentElement.classList.contains('light')
      ? '🌚'   // ora è in modalità chiara → mostra luna piena
      : '🌙';  // modalità scura → mostra luna nuova
  });

});
