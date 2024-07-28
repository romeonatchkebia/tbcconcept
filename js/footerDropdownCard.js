const dropDownData = [
  {
    title: "Products",
    item1: "Packages",
    item2: "Private banker",
  },
  {
    title: "Lifestyle",
    item1: "Offers",
    item2: "Events",
  },
  {
    title: "Concept Space",
    item1: "Library",
    item2: "Cafe",
  },
];

const dropDwonHTML = dropDownData
  .map(
    (item) => `
         <div class="footer_dropDown">
            <div class="dropdown_titleView">
              <div class="dropDownTitle">${item.title}</div>
              <img class="footerDropArrow" src="assets/icons/arrowDown.svg" />
            </div>

            <div class="dropDownList">
              <p class="dropDownListItem">${item.item1}</p>
              <p class="dropDownListItem">${item.item2}</p>
            </div>
          </div>
          `
  )
  .join("");

document.getElementById("footer_main").innerHTML = dropDwonHTML;
