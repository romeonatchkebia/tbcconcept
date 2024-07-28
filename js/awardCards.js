const awardsData = [
  {
    img: "globalFinance.png",
    title: "The Best Private Banking Service 2024",
    subtitle: "The Global Finance",
  },
  {
    img: "euromoney.png",
    title: "The Best Private Banking Experience in Georgia 2023",
    subtitle: "Euromoney",
  },
  {
    img: "globalFinance.png",
    title: "The Best Private Banking Service 2022",
    subtitle: "The Global Finance",
  },
  {
    img: "theBanker.png",
    title: "The Best Private Banking Service in Georgia 2021",
    subtitle: "The Banker & PWM",
  },
];

const awardsHTML = awardsData
  .map(
    (item) => `
        <div class="swiper-slide awardSlide">
            <img
              src="assets/logos/${item.img}"
              width="129"
              height="58"
              style="object-fit: cover"
              class="awardsImg"
            />

            <div class="awardCardsTextWrapper">
              <div class="sliderCardTitle">
                ${item.title}
              </div>
              <div class="sliderCardSubtitle">${item.subtitle}</div>
            </div>
          </div>
        `
  )
  .join("");

document.getElementById("awardsWrapper").innerHTML = awardsHTML;
