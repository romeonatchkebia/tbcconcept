const contactsData = [
  {
    img: "phone.svg",
    info: "+995 32 2 27 27 00",
    href: "#",
  },
  {
    img: "envelope.svg",
    info: "info@tbcconcept.ge",
    href: "mailto:info@tbcconcept.ge",
  },
  {
    img: "location.svg",
    info: "Branches",
    href: "https://tbcconcept.ge/en/concept-space/concept-branches",
  },
];

const contactsHTML = contactsData
  .map(
    (item) =>
      `<a class="contactsWrapper" href=${item.href} style="text-decoration: none;">
          <img src="assets/icons/${item.img}"/>
          <div class="contactInfo">${item.info}</div>
        </a>`
  )
  .join("");

document.getElementById("contactCardsWrapper").innerHTML = contactsHTML;
