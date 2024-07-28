const contactsData = [
  {
    img: "phone.svg",
    info: "+995 32 2 27 27 00",
  },
  {
    img: "envelope.svg",
    info: "info@tbcconcept.ge",
  },
  {
    img: "location.svg",
    info: "Branches",
  },
];

const contactsHTML = contactsData
  .map(
    (item) => `
          <div class="contactsWrapper">
            <img src="assets/icons/${item.img}" />
            <div class="contactInfo">${item.info}</div>
          </div>
          `
  )
  .join("");

document.getElementById("contactCardsWrapper").innerHTML = contactsHTML;
