//  ====================== MOBILE NAV ======================
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function() {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

//  ======================== VIDEO ========================
const videoBtn = document.querySelector('#video-story-btn');
const videofile = document.querySelector('#video-story');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#videon-story-overlay');

videoBtn.addEventListener('click', function() {

    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        }
    }
        
    if (videofile.paused) {
        videofile.play();
        videoBtnIcon.src = './img/story/pause-icon.svg';

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;

    } else {
        videofile.pause();
        videoBtnIcon.src = './img/story/play-white.svg';
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;

    }


    videofile.addEventListener('ended', myHandler, false);
    function myHandler() {
        videoBtnIcon.src = './img/story/play-white.svg';
    }
});


$(document).ready(function() {
    // Всплывающая подсказка 
    $('.header__nav a').on('click', function(e) {
        if ( $('span', this).css('display') == 'none' ) {
            $('span', this).show(500).delay(2000).hide(500);
        }
    });
    
    // modal 1 
    
    // открыть по кнопке 1 
    $('.popup-1__open-btn').click(function(e) { 
        $('.popup-1__overlay').fadeIn(600);
        // scroll
        document.getElementsByTagName("body")[0].style.overflow="hidden";
        e.preventDefault();
    });
    
    // открыть по кнопке 2
    $('.popup-1__open-btn-2').click(function(e) { 
        $('.popup-1__overlay').fadeIn(600);
        // scroll
        document.getElementsByTagName("body")[0].style.overflow="hidden";
        e.preventDefault();
    });
    
    // закрыть на крестик
    $('.popup-1__close-btn').click(function() { 
        $('.popup-1__overlay').fadeOut(600);
        // scroll
        document.getElementsByTagName("body")[0].style.overflow="visible";
        e.preventDefault();
    });
    
    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.popup-1__body');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.popup-1__overlay').fadeOut();
            // scroll	
            document.getElementsByTagName("body")[0].style.overflow="visible";
        }
    });
    
    
    // Показываем картинку в модале
    $('.popup-1__img-btn').on('click', function(e) {
        if ( $('.popup-1__img img').css('display') == 'none' ) {
            $('.popup-1__img img').show(800);
        } else {
            $('.popup-1__img img').hide(800);
        }
        e.preventDefault();
    })
    
    // Меняем картинку(кнопка 1) 
    $('.popup-1__open-btn').on('click', function() {
        $('.popup-1__img img').attr('src', './img/modals/cat-img.jpg');
    })
    
    // Меняем картинку(кнопка 2) 
    $('.popup-1__open-btn-2').on('click', function() {
        $('.popup-1__img img').attr('src', './img/modals/cats-img.jpg');
    })
    
    // всплывающая подсказка
    $('.home__btn a').on('click', function() {
        if ( $('.home__btn span').css('display') == 'none' ) {
            $('.home__btn span').show(500).delay(2500).hide(500);
        }
    });
    
    // modal 2
    $('.story__btn > a').click(function() {
        $("#ex1").modal({
            fadeDuration: 500,
            fadeDelay: 0.50
        });
        return false;
    });

    $('.popup-2__img-btn').on('click', function(e) {
        document.getElementsByTagName("body")[0].style.overflow="hidden";
        e.preventDefault();
    })

    // Показываем картинку 
    // $('.popup-2__img-btn').on('click', function() {
    //     if 
    //     $('.popup-2__img img').show(500);
    // });
    // Показываем картинку в модале
    $('.popup-2__img-btn').on('click', function(e) {
        if ( $('.popup-2__img img').css('display') == 'none' ) {
            $('.popup-2__img img').show(800);
        } else {
            $('.popup-2__img img').hide(800);
        }
        e.preventDefault();
    })


    

    
});


    

