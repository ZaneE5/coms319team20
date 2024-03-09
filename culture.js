fetch("./data.json")
    .then(response => response.json())
    .then(myclubs => loadClubs(myclubs));


function loadClubs(myclubs){
    loadCulturalClubs(myclubs);
}

function loadCulturalClubs(myclubs){
    var mainContainer = document.getElementById("clubs");

    var checkboxes = [];
    var cards = [];

    for (var i = 0; i < myclubs.foreignclubs.length; i++){
        let name = myclubs.foreignclubs[i].name;
        let description = myclubs.foreignclubs[i].description;
        let img = myclubs.foreignclubs[i].img;

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
