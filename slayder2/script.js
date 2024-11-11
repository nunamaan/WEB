document.querySelectorAll('.more-info').forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.card');
      card.classList.toggle('open');
    });
  });
  
  
