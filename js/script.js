/*
! fetched data:
* picture.medium
* name.title
* name.first
* name.last
*/

const getUsers = (e) => {
  e.preventDefault();
  const url = createUrl();
  fetchAndAddUsers(url);
};

function createUrl() {
  const usersNumber = document.querySelector('[name = "count"]').value;
  const usersGender = document.querySelector('[name = "gender"]').value;
  return `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender}`;
}

function fetchAndAddUsers(url) {
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw Error("To nie jest odpowiedź 200");
      } else {
        return response.json();
      }
    })
    .then((json) => addUsersToDOM(json.results))
    .catch((error) => console.log(error));
}

function addUsersToDOM(json) {
  const peopleContainer = document.querySelector(".people");
  peopleContainer.innerHTML = "";
  json.forEach((user) => {
    const {
      name: { title: userTitle, first: userName, last: userSurname },
      picture: { medium: userAvatar },
    } = user;
    const person = document.createElement("div");
    person.className = "person";
    person.innerHTML = `
    <img
    class="person__image"
    src="${userAvatar}"
    alt="avatar"
    />
    <h2 class="person__name">${userTitle} ${userName} ${userSurname}</h2>
    `
    peopleContainer.appendChild(person)
  });
}

const form = document.querySelector(".generator");
form.addEventListener("submit", getUsers);
