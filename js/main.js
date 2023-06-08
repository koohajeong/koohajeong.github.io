// 인트로 이름(제이쿼리)
$(document).ready(function() {
    const content = ["구","하","정"];
    const text = $(".intro-img>h1:nth-child(2)");
    let i = 0;
    
    function typing() {
    let txt = content[i++];
    text.append(txt);
    if (i > content.length) {
    text.empty();
    i = 0;
    }
    }
    setInterval(typing, 750);
    });

    $(document).ready(function() {
        $(window).scroll(function(){
            if($(this).scrollTop() >= 1300){
                $('.top').fadeIn();

            }else{
                $('.top').fadeOut();

            }
         });
         $('.top').click(function(e){
            e.preventDefault();
            $('html, body').stop().animate({scrollTop:0},500);

         });

    });


// getover 스크롤 애니메이션
window.addEventListener("load", function () {
    const $getover = document.querySelector(".getover");

    window.addEventListener("scroll", function (e) {
        e.preventDefault();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollTop);
        if (scrollTop > 180) {   
            $getover.classList.add("getover-side");
        }else {
            $getover.classList.remove("getover-side");
        }
    });

    // getover 포부 애니메이션
    const $getoverDtext = this.document.querySelector(".getover-text");
    window.addEventListener("scroll", function (e) {
        e.preventDefault();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollTop);
        if (scrollTop > 900) {   
            $getoverDtext.classList.add("text-side");
        }else {
            $getoverDtext.classList.remove("text-side");
        }
    });


    // aboutme-logo 애니메이션
    // const $aboutmeDlogo = this.document.querySelector(".aboutme-logo");
    // window.addEventListener("scroll", function (e) {
    //     e.preventDefault();
    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     console.log(scrollTop);
    //     if (scrollTop > 1300) {   
    //         $aboutmeDlogo.classList.add("aboutme");
    //     }
    // });


    // skill-logo 애니메이션
    // const $skillDlogo = document.querySelector(".skill-logo");
    // window.addEventListener("scroll", function (e) {
    //     e.preventDefault();
    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     console.log(scrollTop);
    //     if (scrollTop > 2400) {   
    //         $skillDlogo.classList.add("skill");
    //     }
    // });
    //포토샵 애니메이션
    const $ps = document.querySelector(".ps");

    window.addEventListener("scroll", function (e) {
        e.preventDefault();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollTop);
        if (scrollTop > 2900) {
            
            $ps.classList.add("psline");
        }else{
            $ps.classList.remove("psline");
        }

    });
    // 일러스트 애니메이션
    const $ai = document.querySelector(".ai");

    window.addEventListener("scroll", function (e) {
        e.preventDefault();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollTop);
        if (scrollTop > 2900) {
            
            $ai.classList.add("ailine");
        }else {
            $ai.classList.remove("ailine");
        }

    });
    // 비주얼스튜디오 애니메이션
    const $vi = document.querySelector(".vi");

    window.addEventListener("scroll", function (e) {
        e.preventDefault();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollTop);
        if (scrollTop > 2900) {
            
            $vi.classList.add("viline");
        }else{
            $vi.classList.remove("viline");
        }

    });

    // portfolio-logo 애니메이션
    // const $portfolioDlogo = document.querySelector(".portfolio-logo");
    // window.addEventListener("scroll", function (e) {
    //     e.preventDefault();
    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     console.log(scrollTop);
    //     if (scrollTop > 3500) {   
    //         $portfolioDlogo.classList.add("portfolio-slide");
    //     }
    // });


    
});

// window.addEventListener("load", function () {
//     const $ps = document.querySelector(".ps");

//     window.addEventListener("scroll", function (e) {
//         e.preventDefault();
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         console.log(scrollTop);
//         if (scrollTop > 3000) {
            
//             $ps.classList.add("psline");
//         }

//     });

// });

