const productsData = [
  {
    img: "digital.png",
    title: "Digital",
    subtitle: ` TBC Concept Digital Package is for those who
                <strong>engage in banking daily</strong>, enjoy
                <strong>nonbanking offers and products</strong> and prefer to
                manage their finances and transactions on their own,
                <strong>without a personal banker's assistance</strong>.`,
  },
  {
    img: "premium.png",
    title: "Premium",
    subtitle: ` TBC Concept <strong>Premium Package</strong> client relationship
                format offers<strong> Personal Banker's services</strong>, along
                with other banking and nonbanking benefits. Your Personal
                Banker's main goal is to make your life easier, provide you with
                top quality services and contribute to your comfort and
                well-being.`,
  },
  {
    img: "360.png",
    title: "360",
    subtitle: ` <span style="color: #010202"
                  ><strong>TBC Concept 360&nbsp;</strong>package is tailored to
                  those, who need even
                  <strong
                    >more financial tools, bigger array of
                    opportunities&nbsp;</strong
                  >and Personal Banker's support, along with banking and
                  non-banking benefits.</span
                >`,
  },
];

const productsHTML = productsData
  .map(
    (item) => `
        <div class="swiper-slide">
            <img
              class="sliderImg productsImg"
              src="assets/images/selectApackage/${item.img}"
              height="190"
            />

            <div class="sliderCardsTextsWrapper">
              <div class="sliderCardTitle">${item.title}</div>

              <p class="productsSubtitle">
                  ${item.subtitle}
              </p>
            </div>
          </div>
        `
  )
  .join("");

document.getElementById("productsWrapper").innerHTML = productsHTML;
