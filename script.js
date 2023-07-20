"use strict";

//daten fetchen + in ein neues array pushen
const contactUrl1 =
  "https://dummy-apis.netlify.app/api/contact-suggestions?count=1";
const contactUrl8 =
  "https://dummy-apis.netlify.app/api/contact-suggestions?count=8";

let contact1 = [];
let contact8 = [];

fetch(contactUrl1)
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    contact1 = jsonData; //json wird als array wiedergegeben
    console.log(contact1);
  });

fetch(contactUrl8)
  .then((response) => {
    return response.json();
  })
  .then((jsonDataAll) => {
    contact8 = jsonDataAll;
    console.log(contact8);
    renderAllContacts();
  });

//variablen aus HTML ziehen
//const profileBackground = document.querySelector(".profile-background");

function renderAllContacts() {
  contact8.forEach(function (contact) {
    const backgroundImage = document.createElement("img"); //HTML-Elemente erstellen
    const btnClose = document.createElement("button");
    const profilePicture = document.createElement("img");
    const contactName = document.createElement("h2");
    const profession = document.createElement("p");
    const connections = document.createElement("p");
    const btnConnect = document.createElement("button");

    backgroundImage.setAttribute("src", contact.backgroundImage); //auf das erstellte HTML-Element API-Werte einfügen
    btnClose.innerText = "x";
    btnClose.setAttribute("class", "remove-button");
    profilePicture.setAttribute("src", contact.profilePicture);
    contactName.innerText =
      contact.name.title + " " + contact.name.first + " " + contact.name.last;
    profession.innerText = contact.title;
    connections.innerText = contact.mutualConnections + " mutual connections";
    btnConnect.innerText = "Connect";

    const cardWrapper = document.createElement("div");
    cardWrapper.append(
      backgroundImage,
      btnClose,
      profilePicture,
      contactName,
      profession,
      connections,
      btnConnect
    );
    document.body.appendChild(cardWrapper);
  });
}

document
  .querySelector(".remove-button")
  .addEventListener("click", removeContactCard);

function removeContactCard() {}
