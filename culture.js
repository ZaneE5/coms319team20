fetch("./data.json")
    .then(response => response.json())
    .then(myclubs => loadClubs(myclubs));


function loadClubs(myclubs){
    loadCulturalClubs(myclubs);
}

function loadCulturalClubs(myclubs){
    var titleContainer = document.getElementById("title");

    let titlediv = document.createElement("div");
    titlediv.innerHTML = `
    <h1 class="fw-light"> Cultural Clubs at ISU</h1>
    <p> These clubs are focused for students of particular cultures. This is by no means an exhaustive list of cultural clubs at ISU, only a selective few that are focused more towards computer science and technology majors.</p>`;
    titleContainer.appendChild(titlediv);

    var mainContainer = document.getElementById("clubs");

    var checkboxes = [];
    var cards = [];

    for (var i = 0; i < myclubs.culturalclubs.length; i++){
        let name = myclubs.culturalclubs[i].name;
        let description = myclubs.culturalclubs[i].description;
        let img = myclubs.culturalclubs[i].img;
        let img_src = myclubs.culturalclubs[i].img_src;

        let checkbox = "checkbox" + i.toString();
        let card = "card" + i.toString();

        let div = document.createElement("div");
        div.className = "col";
        div.innerHTML = `
        <input type="checkbox" id=${checkbox} class="form-check-input" checked>
        <label for=${checkbox} class="form-check-label">Show Image ${i}</label>

        <div id = ${card} class="card shadow-sm">
          <img src="${img}" alt="Club image" width="410">
          <div class="card-body">
            <p class="card-text"><strong>${name}</strong></p>
            <p class="card-text">${description}</p>
            <p class="card-text">Image sourced from ${img_src}</p>
            <div class="d-flex justify-content-between align-items-center">
            </div>
          </div>
        </div>
      </div>`;
        mainContainer.appendChild(div);

        let cbox = document.getElementById(checkbox);
        checkboxes.push(cbox);
        let ccard = document.getElementById(card);
        cards.push(ccard);
    }
    console.log(checkboxes);
    console.log(cards);

    checkboxes.forEach((checkboxParam, index) => {
        console.log(index);
        checkboxParam.addEventListener('change', () => {
            if (checkboxParam.checked) {
                cards[index].style.display = 'block'; 
            } else {
                cards[index].style.display = 'none'; 
            }
        });
    });
}
