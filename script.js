(function () {
  const $ = (el) => document.querySelector(el);

  const closeCountSpan = $("#close-count");
  let closeCount = 0;

  $("#close").addEventListener("click", () => {
    closeCountSpan.innerText = ++closeCount;
  });

  $("#maximize").addEventListener("click", () => {
    closeCount = 0;
    closeCountSpan.innerText = closeCount;
  });

  $("#minimize").addEventListener("click", () => {
    if (closeCount > 0) {
      closeCountSpan.innerText = --closeCount;
    }
  });
})();
