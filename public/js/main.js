


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
    let linkCard = document.createElement("a")
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
    projectImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${project.photo})`
    boxTitleContainer.classList.add("boxTitleContainer");
    boxTitle.classList.add("boxTitle");
    boxLanguages.classList.add("boxLanguages");
    boxDesc.classList.add("boxDesc");
    
    boxDesc.textContent = project.desc;
    boxTitle.textContent = project.nom;
    linkCard.href = project.url;

    boxTitleContainer.appendChild(boxTitle);
    projectImg.append(boxTitleContainer,boxDesc);
    linkCard.appendChild(projectImg);
    
    projectBox.append(linkCard,boxLanguages);

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