fetch("./data.json")
    .then(response => response.json())
    .then(myclubs => loadclubs(myclubs));


function loadClubs(myclubs){
    loadWomenClubs(myclubs);
    loadCulturalClubs(myclubs);
}

function loadWomenClubs(myclubs){
    var mainContainer = document.getElementById("clubs");

    for (var i = 0; i < myclubs.womenclubs.length; i++){
        let name = myclubs.womenclubs[i].name;
        let description = myclubs.womenclubs[i].description;
        let img = myclubs.womenclubs[i].img;

        let div = document.createElement("div");
        div.className = "col";
        div.innerHTML = `
        <div class="col">
        <div class="card shadow-sm">
          <img src="${img}" alt="Club image">
          <div class="card-body">
            <p class="card-text"><strong>${name}</strong></p>
            <p class="card-text">${description}</p>
            <div class="d-flex justify-content-between align-items-center">
            </div>
          </div>
        </div>
      </div>`;
        mainContainer.appendChild(div);
    }
}

function loadCulturalClubs(myclubs){
    var mainContainer = document.getElementById("clubs");

    for (var i = 0; i < myclubs.culturalclubs.length; i++){
        let name = myclubs.culturalclubs[i].name;
        let description = myclubs.culturalclubs[i].description;
        let img = myclubs.culturalclubs[i].img;
        let imgsrc = myclubs.culturalclubs[i].img-src;

        let div = document.createElement("div");
        div.className = "col";
        div.innerHTML = `
        <div class="col">
        <div class="card shadow-sm">
          <img src="${img}" alt="Club image">
          <div class="card-body">
            <p class="card-text"><strong>${name}</strong></p>
            <p class="card-text">${description} "Image sourced from ${imgsrc}.</p>
            <div class="d-flex justify-content-between align-items-center">
            </div>
          </div>
        </div>
      </div>`;
        mainContainer.appendChild(div);
    }
}