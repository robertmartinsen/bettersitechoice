function toggleAffiliates(event) {
  event.preventDefault(); // Prevent default link behavior

  var affiliatesList = document.getElementById("affiliatesList");

  if (affiliatesList.style.display === "none" || affiliatesList.style.display === "") {
    affiliatesList.style.display = "block";
    sortAffiliates();
  } else {
    affiliatesList.style.display = "none";
  }
}

function sortAffiliates() {
  var affiliatesList = document.getElementById("affiliatesList");
  var listItems = affiliatesList.getElementsByTagName("li");
  var sortedItems = Array.from(listItems).sort((a, b) => a.textContent.localeCompare(b.textContent));

  for (var i = 0; i < sortedItems.length; i++) {
    affiliatesList.appendChild(sortedItems[i]);
  }
}

