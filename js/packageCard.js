const packages = [
  { img: "digital.png", title: "Digital" },
  { img: "premium.png", title: "Premium" },
  { img: "360.png", title: "360" },
];

const packageHTML = packages
  .map(
    (pkg) => `
    <div class="selectPackageCard">
      <img class="selectPackageCardImage" src="assets/images/selectApackage/${pkg.img}" />
      <div class="PackageCardTextsView">
        <div class="PackageCardTitle">${pkg.title}</div>
        <div class="readMore">
          <img src="assets/icons/whiteArrow.svg" />
          <div class="readMoreText">READ MORE</div>
        </div>
      </div>
    </div>
  `
  )
  .join("");

document.getElementById("selectPackageWrapper").innerHTML = packageHTML;
