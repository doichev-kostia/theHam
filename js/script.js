function switchTabs(){
    const servicesTabs = document.querySelector(".services-tabs");
    servicesTabs.addEventListener("click", event =>{
        if (event.target.classList.contains("services-tab-title")){
            document.querySelectorAll(".services-tab-title").forEach(item => item.classList.remove("active"));
            document.querySelectorAll(".services-tab-content-item").forEach(item=>item.classList.remove("active"));

            event.target.classList.add("active");
            document.querySelector(`.${event.target.textContent.toLowerCase().replace(" ","-")}`).classList.add("active");
            console.log(document.querySelector(`.${event.target.textContent.toLowerCase().replace(" ", "-")}`));
        }
    });
}

switchTabs();

function switchPortfolioTabs(){
    const portfolioTabs = document.querySelector(".portfolio-tabs")
    portfolioTabs.addEventListener("click",event =>{
       if (event.target.classList.contains("portfolio-tabs-title")) {
           document.querySelectorAll(".portfolio-tabs-title").forEach(item => item.classList.remove("active"));
           document.querySelectorAll(".portfolio-image-item").forEach(item=>item.classList.remove("active"));

           event.target.classList.add("active");
            let tabContent = document.querySelectorAll(".portfolio-image-item")
           tabContent.forEach(item =>{
               if (item.dataset.imageCategory === event.target.dataset.imageCategory){//! 1 === 2 hidden
                   item.hidden = false;
               }else if (event.target.textContent.toLowerCase()=== "all"){
                   item.hidden = false;
               }else {
                   item.hidden = true;
               }
           })
       }
    });
}

switchPortfolioTabs();


function portfolioImageHover() {
    const portfolioImageContainer = document.querySelectorAll(".portfolio-image-item");
    portfolioImageContainer.forEach(item => item.addEventListener("mouseenter", event => {
        if (!event.target.lastElementChild.classList.contains("overlay")) {
            event.target.insertAdjacentHTML("beforeend", `<div class="overlay">
                        <a href="#" class="overlay-link link">
                            <svg width="15" height="15" viewBox="0 0 15 15" class="overlay-link-svg" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z"/>
                            </svg>
                        </a>
                        <a href="#" class="overlay-play link">
                        <div class="overlay-play-square"></div>
                        </a> <p class="overlay-description">Project name</p
                        ><p class="overlay-category-name">${event.target.dataset.imageCategory[0].toUpperCase() + event.target.dataset.imageCategory.slice(1).replace("-", " ")}</p></div>`)
                // document.querySelector(".overlay").classList.add("active")
        }
        // const imageOverlay = document.querySelector(".overlay")
        //
        //
        // portfolioImageContainer.forEach(item => {
        //     item.addEventListener("mouseleave", event =>{
        //         imageOverlay.remove()
        //     })
        // })
    }));
}

portfolioImageHover();

function loadOnButtonClick(){
    const portfolioImageContainer = document.querySelectorAll(".portfolio-image-item");
    let loadingAnimation = document.querySelector(".loader");
    // function  createElements (element){
    //     let newElement;
    //        newElement = document.createElement(element.tag);
    //        newElement.classList.add(element.class);
    //        newElement.setAttribute(element.attr,element.attrValue);
    // }

    // let newELements =[{
    //     tag: "div",
    //     class:"portfolio-image-item",
    // },
    //     {
    //      tag: "img",
    //      class: "portfolio-image",
    //         attr:"src",
    //         attrValue:""
    //     }]

    if (document.querySelector(".portfolio-tabs-title.active")) {
        document.addEventListener("click", event => {
            if (event.target.classList.contains("load-btn")) {
                loadingAnimation.hidden = false;
                event.target.parentNode.replaceChild(loadingAnimation, event.target);
                setTimeout(() => {
                    loadingAnimation.hidden = true;
                    portfolioImageContainer.forEach(item => item.hidden = false);
                }, 2000)
            }
        });
    }
}

loadOnButtonClick()

// $(document).ready(function(){
//     let position = 0;
//     const slidesToShow = 4;
//     const slidesToScroll = 1;
//     const carouselContainer = $(".reviews-carousel-author-image-container");
//     const carouselTrack = $(".reviews-carousel-author-image-track");
//     const item = $(".reviews-carousel-author-image-item");
//     const btnPrev = $(".btn-prev");
//     const btnNext = $(".btn-next");
//     const itemWidth = carouselContainer.width() / slidesToShow
//     const movePosition = slidesToShow * itemWidth ;
//
//
//     item.each(function(index, item){
//         $("item").css({
//             minWidth: itemWidth,
//         })
//     });
//
//     btnPrev.click(function(){
//         position += movePosition;
//
//         carouselTrack.css({
//             transform: `translateX(${position})`
//         })
//     });
//
//     btnNext.click(function(){
//         position -= movePosition;
//
//         carouselTrack.css({
//             transform: `translateX(${position})`
//         })
//     });
//
//
//
// });
    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 1;
    const carouselContainer = document.querySelector(".reviews-carousel-author-image-container");
    const carouselTrack = document.querySelector(".reviews-carousel-author-image-track");
    const items = document.querySelectorAll(".reviews-carousel-author-image-item");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");
    const itemsCount =  items.length;
    let itemWidth = carouselContainer.clientWidth / slidesToShow
    const movePosition = slidesToShow * itemWidth;

    items.forEach((item) =>{
        item.style.minWidth = `${itemWidth}`
    });


    btnPrev.addEventListener("click", (event)=>{
       const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToShow? movePosition :itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    btnNext.addEventListener("click",(event) =>{
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position += itemsLeft >= slidesToShow? movePosition :itemsLeft * itemWidth;

        setPosition();
        checkBtns();

    });
    const setPosition =() =>{
        carouselTrack.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () =>{
        btnPrev.disabled = position === 0;

        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    }

    checkBtns();



