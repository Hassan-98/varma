export default function parallaxie(selector: string, speed = 0.8) {
  let elementBg = document.querySelector<HTMLDivElement>(selector)!;
  let image = elementBg.getAttribute("data-background");
  let position = elementBg.getBoundingClientRect().top * speed;

  elementBg.style.backgroundImage = `url("${image}")`;
  elementBg.style.backgroundRepeat = 'no-repeat';
  elementBg.style.backgroundAttachment = 'fixed';
  elementBg.style.backgroundPosition = `center ${position}px`;

  window.addEventListener('scroll', () => {
    position = elementBg.getBoundingClientRect().top * speed;
    elementBg.style.backgroundPosition = `center ${position}px`;
  });
}