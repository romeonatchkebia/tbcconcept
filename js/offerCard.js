const offersData = [
  {
    img: "image_2.jpg",
    title: "IVERIA BEACH - Cashback 30%",
    subtitle: "JAZZ FESTIVAL OFFERS",
  },
  {
    img: "image_3.png",
    title: "Tegeta Motors - 50% Discount",
    subtitle: "AUTO TEGETA MOTORS",
  },
  {
    img: "image_4.png",
    title: "Tegeta Motors - Batumi",
    subtitle: "AUTO JAZZ FESTIVAL OFFERS TEGETA MOTORS",
  },
  {
    img: "image_5.png",
    title: "Le Meridien Batumi - 15% Discount",
    subtitle: "LEISURE VISA JAZZ FESTIVAL",
  },
  {
    img: "image_6.png",
    title: " Colosseum Marina Hotel - 15% Discount",
    subtitle: "LEISURE VISA JAZZ FESTIVAL",
  },
];

const offersHTML = offersData
  .map(
    (item) => `
       <div class="swiper-slide">
            <img class="sliderImg" src="assets/images/offers/${item.img}" />

            <div class="sliderCardsTextsWrapper">
              <div class="sliderCardSubtitle">${item.subtitle}</div>
              <div class="sliderCardTitle">${item.title}</div>
            </div>
          </div>
      `
  )
  .join("");

document.getElementById("offersWrapper").innerHTML = offersHTML;
