$(document).ready(function() {
    var categoriesLink = $("#categories-link");
    var categoriesSection = $(".categories-section");
  
    categoriesLink.on("click", function(e) {
      e.preventDefault();
      categoriesSection.toggle();
    });
  
    $(document).on("click", function(e) {
      if (!categoriesLink.is(e.target) && !categoriesSection.is(e.target) && categoriesSection.has(e.target).length === 0) {
        categoriesSection.hide();
      }
    });
  });
  