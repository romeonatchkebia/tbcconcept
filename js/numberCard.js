const data = [
  { title: "94 750", subtitle: "Users" },
  { title: "150+", subtitle: "Events" },
  { title: "130+", subtitle: "Offers" },
];

const HTML = data
  .map(
    (item) => `
      <div class="numberCard">
        <div class="numberCardTitle">${item.title}</div>
        <div class="numberCardSubtitle">${item.subtitle}</div>
      </div>
    `
  )
  .join("");

document.getElementById("numbersWrapper").innerHTML = HTML;
