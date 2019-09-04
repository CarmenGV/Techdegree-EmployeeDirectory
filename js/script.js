const employeeUrl = 'https://randomuser.me/api/?results=12&inc=name,location,email,picture&nat=us';
const employeeGrid = document.getElementById('grid-list');

//CAPITALIZE FIRST LETER
function capitalize(string){
  return string.split(' ').map(str => {
    return str.charAt(0).toUpperCase(0) + str.substring(1);
  }).join(' ');
}

//HTML EMPLOYEE CARD GENERATOR
function employeeCard(json){
  const data = json.results;
  data.map(employee => {
    const cardDiv = document.createElement('div');
    cardDiv.className = "grid-item";
    employeeGrid.appendChild(cardDiv);
    cardDiv.innerHTML = `
      <div class="emp-img">
        <img src=${employee.picture.large}>
      </div>
      <div class="emp-des">
        <h2>${capitalize(employee.name.first)} ${capitalize(employee.name.last)}</h2>
        <p>${employee.email}</p>
        <p>${capitalize(employee.location.state)}</p>
      </div>
    `;
  });
}

window.addEventListener('load', ()=>{
  fetch(employeeUrl)
    .then(response => response.json())
    .then(employeeCard);
});
