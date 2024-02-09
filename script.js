document.addEventListener('DOMContentLoaded', function() {
  const spans = document.querySelectorAll('.Text-container span');

  spans.forEach(span => {
    span.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const target = document.getElementById(targetId);
      const img = this.querySelector('img');

      target.classList.toggle('active');

      if (target.classList.contains('active')) {
        img.src = "./assets/images/icon-minus.svg";
      } else {
        img.src = "./assets/images/icon-plus.svg";
      }
    });
  });
});
