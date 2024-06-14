window.addEventListener("DOMContentLoaded", function () {
  const header = $("#headerArea");

  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var scroll = window.scrollY || window.scrollTop;

    if (scroll < lastScrollTop) {
      header.removeClass("white");
    } else {
      scroll > lastScrollTop
        ? header.addClass("hidden").removeClass("white")
        : header.removeClass("hidden").addClass("white");
    }

    lastScrollTop = scroll;
  });
});
