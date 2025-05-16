//intro ink anim
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.ink-animation').remove();
      document.body.style.overflow = 'auto';
    }, 1000);
  });

  

// displaying things while scrolling
document.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null,
    threshold: 0.3,
    rootMargin:'-150px 0px 0px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-show');
      } else {
        entry.target.classList.remove('scroll-show');
      }
    });
  }, options);

  document.querySelectorAll('.scroll').forEach(el => {
    scrollObserver.observe(el);
  });
});

// transition for book box
const cosmerebg = document.querySelector(".cosmere-book-bg");
const observer = new IntersectionObserver((entries, observer) => {
  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("cosmere-book-bg-show");
      observer.unobserve(entry.target);
      console.log(entry.intersectionRatio);
    }
  });
}, {
  threshold: 0.2
});

if (cosmerebg) {
  observer.observe(cosmerebg);
}

// script for outros anim when clicking a link
const link = document.querySelectorAll(".delay-link");

link.forEach(link => {
  link.addEventListener('click', function(x) {
    x.preventDefault();
    console.log("aaa")
    const href = this.href;

    const outro = document.createElement('div');
    outro.classList.add('ink-animation-reverse');
    document.body.appendChild(outro);

    setTimeout(() => {
      window.location.href = href;

    }, 1200)
  })
})

console.log("WORKING AHHHH")

