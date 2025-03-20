import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded', () => {
  console.log('Página carregada');

  // Animação simples com GSAP (opcional)
  gsap.fromTo('header', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });

  // Funcionalidade do botão de som (exemplo básico)
  const soundButton = document.querySelector('.sound-button');
  if (soundButton) {
    soundButton.addEventListener('click', () => {
      alert('Funcionalidade de som será implementada aqui.');
    });
  }
});