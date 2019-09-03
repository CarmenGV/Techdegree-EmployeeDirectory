const employeeUrl = 'https://randomuser.me/api/?results=12&inc=name,location,email,picture';
const employeeGrid = document.getElementById('grid-list');

//RETRIEVE EMPLOYEE DATA
function formatData(json){
  const data = json.results.map(person => {
    person.location.state.charAt(0).toUpperCase();
    person.name.first.charAt(0).toUpperCase();
    person.name.last.charAt(0).toUpperCase();
  });
  console.log(data);
}

//HTML EMPLOYEE CARD GENERATOR
function employeeCard(json){
  const data = json.results;
  console.log(data);
  data.map(employee => {
    const cardDiv = document.createElement('div');
    cardDiv.className = "grid-item";
    employeeGrid.appendChild(cardDiv);
    cardDiv.innerHTML = `
      <div class="emp-img">
        <img src=${employee.picture.large}>
      </div>
      <div class="emp-des">
        <h2>${employee.name.first} ${employee.name.last}</h2>
        <p>${employee.email}</p>
        <p>${employee.location.state}</p>
      </div>
    `;
  });
}

window.addEventListener('load', ()=>{
  fetch(employeeUrl)
    .then(response => response.json())
    .then(formatData);
});
