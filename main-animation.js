// GSAP と ScrollTrigger のグローバル変数を参照
const { gsap } = window;
const { ScrollTrigger } = window;

// ScrollTrigger プラグインを GSAP に登録
gsap.registerPlugin(ScrollTrigger);

// ページの読み込みが完了したら実行
window.addEventListener("load", () => {
  // フェードインエフェクトを適用する要素を取得
  const fadeInElements = document.querySelectorAll(".fade-in");

  // 各要素に対してフェードインアニメーションを設定
  // fadeInElements.forEach((element) => {
  //   gsap.from(element, {
  //     opacity: 0,
  //     y: 10,
  //     duration: 1,
  //     delay: 0.4,
  //     ease: "power3.easeInOut",
  //     scrollTrigger: {
  //       trigger: element,
  //       start: "top 70%",
  //     },
  //   });
  // });
});

document.addEventListener('DOMContentLoaded', function () {
  //  HERO ANIMATION
    const heroImage = document.querySelector('.hero-image');
    const heroCaption = document.querySelector('.hero-caption');
    const headerLogo = document.getElementById('header-logo');
    const headerLogoSp = document.getElementById('header-logo-sp');
    const headerMenu = document.querySelector('.header-menu');
    const bannerTop = document.getElementById('bannerTop');
    const sectionProblem = document.getElementById('sectionProblem');


    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power1.easeInOut' } });

    tl.from(heroImage, { opacity: 0, duration:2, },'+=.9')
      .from(heroCaption, { opacity: 0, y: -10 }, '-=1.4')
      .from(headerLogo, { opacity: 0, x: 20 }, '-=.3')
      .from(headerLogoSp, { opacity: 0 }, '<')
      .from(headerMenu, { opacity: 0, y:10 }, '<')
      .from(bannerTop, { opacity: 0, y:10 }, '<');
  });

  // gsap.set(".fade-in", { autoAlpha: 0 });
  
  const fadeInTL = gsap.timeline({
      delay: 0.4,
      scrollTrigger: {
      trigger: "#sectionProblem",
      start: "top bottom",
    },
  })
  console.log('FIRE');

  // Add animations to the timeline
  // fadeInTL
  //   .to("h2 > picture", { duration: 1, autoAlpha: 1, y:-10 }, 0)
  //   .to("h2 > span", { duration: 1, autoAlpha: 1, y:-10 }, 0.5)
  //   .to("picture:last-of-type", { duration: 1, autoAlpha: 1, y:-10 }, 1);
  fadeInTL
    .from("#sectionProblem > h2 > picture", { duration: 1, autoAlpha: 0, y:-10 }, 0)
    .from("#sectionProblem > h2 > span", { duration: 1, autoAlpha: 0, y:-10 }, 0.5)
    .from("#sectionProblem > picture:last-of-type", { duration: 1, autoAlpha: 0, y:-10 }, 1);