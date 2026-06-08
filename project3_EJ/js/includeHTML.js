function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach((element) => {
    const file = element.getAttribute("data-include");

    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error("File not found: " + file);
        }
        return response.text();
      })
      .then((data) => {
        element.innerHTML = data;
      })
      .catch((error) => {
        element.innerHTML = "Content could not be loaded.";
        console.error(error);
      });
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);