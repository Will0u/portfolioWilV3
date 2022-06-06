

let selectProjectArea = document.querySelector("#projectArea")

class Project {
    constructor(nom,url,photo, languages, desc) {
        this.nom = nom,
        this.url = url,
        this.photo = photo,
        this.languages = languages,
        this.desc = desc
    }
}


const portfolioEmile = new Project("Portfolio d'Émile" , "https://cv-emile.vercel.app/" , "/img/emile.png", ["html","css"], "Portfolio réalisé pour un ami." )

const portfolioAlex = new Project("Portfolio d'Alexandre" , "https://portfolio-alex-sch.vercel.app/" , "/img/alex.png" , ["html","css"], "Portfolio réalisé pour un ami.")

const jdc = new Project("Jeu du clique" , "https://jeuduclick.vercel.app/" , "/img/jdc.png" , ["html","css","angular"], "Petit projet réalisé lors de l'apprentissage du framework Angular !" )

let projectArray = [portfolioEmile,portfolioAlex,jdc]

projectArray.forEach(project => {
    let projectBox = document.createElement("div");
    let projectImg = document.createElement("div");
    let boxTitleContainer = document.createElement("div");
    let boxTitle = document.createElement("p");
    let boxLanguages = document.createElement("div");
    let boxDesc = document.createElement("p");


    project.languages.forEach(language => {
        let txtLanguages = document.createElement("span");
        txtLanguages.classList.add("txtLanguages");
        txtLanguages.textContent = language;
        boxLanguages.append(txtLanguages);
    });


    projectBox.classList.add("projectBox");
    projectImg.classList.add("projectImg");
    projectImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${project.photo})`;
    projectImg.onclick = function(){
        window.location = project.url
    }
    boxTitleContainer.classList.add("boxTitleContainer");
    boxTitle.classList.add("boxTitle");
    boxLanguages.classList.add("boxLanguages");
    boxDesc.classList.add("boxDesc");
    
    boxDesc.textContent = project.desc;
    boxTitle.textContent = project.nom;

    boxTitleContainer.appendChild(boxTitle);
    projectImg.append(boxTitleContainer,boxDesc);
    //linkCard.appendChild(projectImg);
    
    projectBox.append(projectImg,boxLanguages);

    selectProjectArea.append(projectBox);

    let selectProjectCard = document.querySelectorAll(".projectImg");
    selectProjectCard.forEach(card => {
        card.addEventListener("mouseover",function(){
            card.classList.add("activeImgBox");
            this.children[0].children[0].style.backgroundColor="blue";
        });
    
        card.addEventListener("mouseout",function(){
            card.classList.remove("activeImgBox")
            this.children[0].children[0].style.backgroundColor="darkblue";
        });

    });
});


class Language {
    constructor(nom,appris) {
        this.nom = nom
        this.appris = appris
    }
}

let languagesArray = [
    new Language("angular", true),
    new Language("html", true),
    new Language("css", true),
    new Language("javascript", true),
    new Language("python", true),
    new Language("lateX", true),
    new Language("sql", true),
    new Language("php", false),
    new Language("symphony", false),
    new Language("wordpress", false),
]


languagesArray.forEach(language => {
    let newLanguageBox = document.createElement("span");
    if (language.appris) {
        newLanguageBox.classList.add("language");
    } else {
        newLanguageBox.classList.add("languageNon");
    }
    newLanguageBox.textContent = language.nom;
    document.querySelector("#skills").appendChild(newLanguageBox);
});


class Diploma {
    constructor(nom,date,desc,img) {
        this.nom = nom
        this.date = date
        this.desc = desc
        this.img = img
    }
}

let diplomasArray = [
    new Diploma("bac","2019","Bac S Science Ingénieur Option ISN","img/bac.png"),
    new Diploma("pmm","2019","Préparation Militaire Marine","img/marine.png"),
    new Diploma("bnssa","2021","Brevet National de Sécurité et de Sauvetage Aquatique","img/bnssa.png")
]

diplomasArray.forEach(diploma => {
    let newDiplomaBox = document.createElement("div");
    let newSpanContainer = document.createElement("div");
    let newDiplomaTitle = document.createElement("span");
    let newDiplomaDate = document.createElement("span");
    let newDiplomaDesc = document.createElement("p");

    newDiplomaBox.classList.add("diplomaBox");
    newSpanContainer.classList.add("flex");
    newDiplomaTitle.classList.add("diplomaTitle");
    newDiplomaDate.classList.add("diplomaDate");
    newDiplomaDesc.classList.add("diplomaDesc");

    newDiplomaTitle.textContent = diploma.nom
    newDiplomaDate.textContent = diploma.date
    newDiplomaDesc.textContent = diploma.desc
    newDiplomaBox.style.backgroundImage = ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${diploma.img}") `

    newSpanContainer.append(newDiplomaTitle,newDiplomaDate);
    newDiplomaBox.append(newSpanContainer,newDiplomaDesc);
    document.querySelector("#diplomas").appendChild(newDiplomaBox);
    
});