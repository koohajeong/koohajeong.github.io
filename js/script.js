// 인트로 이름 
document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('#name', {
      speed:400,
  startDelay:1000,
  waitUntilVisible: true}) //
  .go();
});
