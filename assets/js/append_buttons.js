// ButtonsLinks / HTML to append to page
var linkList = [
  // '<a href="cut-piece.html" class="current-page-item">Cut-Piece</a>',
  '<a href="cut-piece.html">Cut-Piece</a>',
  '<a href="take-up-fittings.html">Total take-up of fittings</a>',
  '<a href="minimum-offset.html">Minimum Offset</a>',
  '<a href="rolling-offset.html">Rolling Offset</a>',
  '<a href="threecolumn.html">Three Column</a>',
];

// const getCurrentPage = linkList[0].match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, "");
var currentPage = window.location.pathname.slice(1);
var findHeader = document.getElementById("nav");

linkList.forEach(function (item, index, array) {
  // Loop through each link and append HTML to page.
  findHeader.innerHTML += linkList[index]; // Append Button
  const getCurrentLink = linkList[index]
    .match(/(?:"[^"]*"|^[^"]*$)/)[0]
    .replace(/"/g, "");

  // Add current-page-item class
  if (currentPage == getCurrentLink) {
    findHeader.lastChild.classList.add("current-page-item");
  }
});
