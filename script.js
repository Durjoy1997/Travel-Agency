const handleLanguageSelect = (item) => {
  const element = document.getElementById(item);
  const all = document.getElementsByClassName("language");
  if (all) {
    for (let i = 0; i < 4; i++) {
      all[i].classList = "language dropdown-item";
    }
    element.className += element.className ? " active" : " active";

    console.log(element);
  }
};

const handleOnClick = (item) => {
  const element = document.getElementById(item);
  const all = document.getElementsByClassName("list-item");
  if (all) {
    for (let i = 0; i < 4; i++) {
      all[i].classList = "px-3 py-2  list-item";
    }
  }
  const elementId = item + "-form";
  console.log(elementId);
  const showingElement = document.getElementById(elementId);
  const allForms = document.getElementsByClassName("tour-form");
  if (allForms) {
    for (let i = 0; i < 4; i++) {
      allForms[i].classList.add("d-none");
    }
  }
  showingElement.classList.remove("d-none");

  element.className += element.className ? " selected" : "selected";
};
handleOnClick("cars");

const handleSearchRoute = () => {
  console.log("Search Clicked");
  const flyingFrom = document.getElementById("dhaka");
  const flyingTo = document.getElementById("ny");
  const journeyDate = document.getElementById("depart").value;
  const returnDate = document.getElementById("return").value;
  console.log(journeyDate);
};
const handleDetailsClick = () => {
  console.log("details clicked");
};
const handleSeeAllTours = (place) => {
  console.log(place);
};
const handleContactFormSubmit = (event) => {
  event.preventDefault();
  console.log("Form SUbmitted");
  const nameField = document.getElementById("full-name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");
  const name = nameField.value;
  const email = emailField.value;
  const message = messageField.value;
  console.log("Name: ", name);
  console.log("email: ", email);
  console.log("message ", message);
  const fullObject = {
    name,
    email,
    message,
  };
  console.log(fullObject);
};
