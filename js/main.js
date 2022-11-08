document.addEventListener("DOMContentLoaded", init)

function init(){

    //for lang
    let langCurrent = document.querySelector('.lang__current');
    let langList = document.querySelector('.lang__list-wrapper');
    let langArrow = document.querySelector('.lang__arrow')
    let header = document.querySelector('.header');
    //for header
    let headerHeight = header.offsetHeight;
    let headerLink = document.querySelector('.nav__link');
    let burger = document.querySelector('.header__burger'),
      navList = document.querySelector('.nav');
    //for animations
    let swordBlock = document.querySelector('.storytale__second');
    let sword = document.querySelector('.storytale__second-sword');
    let swordSmoke = document.querySelector(".storytale__second-smoke");
    let tuskBlock = document.querySelector('.storytale__third');
    let tusk = document.querySelector('.storytale__third-tusk');
    let tuskSmoke = document.querySelector('.storytale__third-smoke');
    //for hidden stories
    let moreStoriesBtn = document.querySelector('.stories__more');
    let hiddenStories = document.querySelector('.stories-list-hidden');
    let storiesNote = document.querySelector('.stories__note');
    //for modal-stories
    let modalStories = document.querySelector('.modal-stories');
    let modalStoriesCloseBtn = document.querySelector('.modal-stories__close');
    let modalStoriesImage = document.querySelector('.modal-stories__img');
    let modalStoriesTitle = document.querySelector('.modal-stories__title');
    let modalStoriesText = document.querySelector('.modal-stories__text');
    const storiesItemsArray = Array.from(document.querySelectorAll('.story'));
    //for modal news
    let modalNews = document.querySelector('.modal-news');
    let modalNewsCloseBtn = document.querySelector('.modal-news__close');
    let modalNewsImage = document.querySelector('.modal-news__img');
    let modalNewsTitle = document.querySelector('.modal-news__title');
    let modalNewsText = document.querySelector('.modal-news__text');
    const newsItemsArray = Array.from(document.querySelectorAll('.news-modal-item'));

    
     //Fixed header + animations
     window.onscroll = function () {
      let swordBlockTopPos = swordBlock.offsetTop - headerHeight;
      let tuskBlockTopPos = tuskBlock.offsetTop - headerHeight;
      //Fixed header
      if (window.pageYOffset >= headerHeight) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
      //Animations
      if(window.pageYOffset >= swordBlockTopPos){
        sword.classList.add('animate');
        swordSmoke.classList.add('animate');
      }
      if(window.pageYOffset >= tuskBlockTopPos){
        tusk.classList.add('animate');
        tuskSmoke.classList.add('animate');
      }
    };

    //Lang list
    langCurrent.addEventListener('click', event => {
        langList.classList.toggle('active');
        langArrow.classList.toggle('active');
    });

    //Modal Stories
    const createModalStoriesContent = (imgSrc, title, text) => {
      modalStoriesImage.attributes.src.value = imgSrc;
      modalStoriesTitle.innerText = title;
      modalStoriesText.innerHTML = text;
    };

    const hideStoriesModal = () => {
      modalStories.classList.toggle('modal__hide');
      modalStories.classList.toggle('modal__show');
      modalStories.children[0].classList.remove('hide');
    };

    modalStoriesCloseBtn.addEventListener('click', () => {
      modalStories.children[0].classList.add('hide');
      document.body.classList.toggle('lock');
      setTimeout(hideStoriesModal, 500);
    });

    window.addEventListener('click', (e) => {
      if(e.target == modalStories){
        modalStories.children[0].classList.add('hide');
        document.body.classList.remove('lock');
        setTimeout(hideStoriesModal, 500);
      }
    });

    storiesItemsArray.forEach(element => {
      element.addEventListener('click', event => {
        let title = null;
        let imgSrc = element.children[0].children[0].attributes.src.value;
        let text = element.children[1].children[2].innerHTML;
        if (element.children[1].children[0].children[0]) {
          title = element.children[1].children[0].children[0].innerText;
        } else {
          title = element.children[1].children[0].innerText;
        }
        createModalStoriesContent(imgSrc, title, text);
        document.body.classList.toggle('lock');
        modalStories.classList.remove('modal__hide');
        modalStories.classList.toggle('modal__show')
      })
    });

 

    //Modal News
    const createModalNewsContent = (imgSrc, title, text) => {
      modalNewsImage.attributes.src.value = imgSrc;
      modalNewsTitle.innerText = title;
      modalNewsText.innerHTML = text;
    };

    const hideNewsModal = () => {
      modalNews.classList.toggle('modal__hide');
      modalNews.classList.toggle('modal__show');
      modalNews.children[0].classList.remove('hide');
    };

    modalNewsCloseBtn.addEventListener('click', () => {
      modalNews.children[0].classList.add('hide');
      document.body.classList.toggle('lock');
      setTimeout(hideNewsModal, 500);
    });

    window.addEventListener('click', (e) => {
      if(e.target == modalNews){
        modalNews.children[0].classList.add('hide');
        document.body.classList.remove('lock');
        setTimeout(hideNewsModal, 500);
      }
    });

    newsItemsArray.forEach(element => {
      element.addEventListener('click', event => {
        let imgSrc = element.children[0].children[0].attributes.src.value;
        let title = element.children[1].children[0].innerText;
        let text = element.children[1].children[1].innerHTML;
        createModalNewsContent(imgSrc, title, text);
        document.body.classList.toggle('lock');
        modalNews.classList.remove('modal__hide');
        modalNews.classList.toggle('modal__show')
      })
    });

   
      // burger.addEventListener('click', event => {
      //   document.body.classList.toggle('lock');
      //   burger.classList.toggle('active');
      //   burger.classList.toggle('mobile');
      //   navList.classList.toggle('active');
      // })


    //Show hidden stories
    moreStoriesBtn.addEventListener('click', event => {
      hiddenStories.classList.add('visible');
      moreStoriesBtn.classList.add('hidden');
      storiesNote.classList.add('visible');
    });

    //Sliders
    var swiperThumbs = new Swiper(".mySwiperThumbs", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      // Disable preloading of all images
      preloadImages: false,
      // Enable lazy loading
      lazy: true,
    });

    var swiperTop = new Swiper(".mySwiperTop", {
      loop: true,
      spaceBetween: 10,
      // Disable preloading of all images
      preloadImages: false,
      // Enable lazy loading
      lazy: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      thumbs: {
        swiper: swiperThumbs,
      },
    });

    const swiperPrev = document.getElementById('swiperPrev');
    const swiperNext = document.getElementById('swiperNext');

    swiperPrev.addEventListener('click', () => {
      swiperTop.slidePrev();
    });

    swiperNext.addEventListener('click', () => {
      swiperTop.slideNext();
    });

}
