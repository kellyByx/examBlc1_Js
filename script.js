import './styles.scss';
import { bds } from './src/data';

const app = document.getElementById('app');

function render() {
  // cration de la liste des livres:
  let bdsContainer = '<section>';
  for (let i = 0; i < bds.length; i++) {
    bdsContainer += `
    <div class="card" id="${i}" style="width: 20rem;">
         <img src="images/${bds[i].image}" class="card-img-top" alt="afficheDeFilms">
         <div class="card-body">
            <h5 class="card-title">${bds[i].titre}</h5>
            <p class="card-text">Auteur(s): </br>${bds[i].auteurs}</p>
            <p class="card-text">Editeur: ${bds[i].editeur}</p>
            <p class="card-text">Collection: ${bds[i].collection}</p>
            <p class="card-text">Thème(s): </br>${bds[i].themes}</p>
            <p class="card-text">Type: ${bds[i].type}</p>
            <p class="card-text">Serie: ${bds[i].serie}</p>
            <p class="card-text">Isb: ${bds[i].isbn}</p>
            <p class="card-text">Année de parution: ${bds[i].annee_de_parution}</p>
            <p class="card-text">Numero du tome: ${bds[i].no_tome}</p>
            <p class="card-text">Etat: ${bds[i].etat}</p>
            <p class="card-text">Prix: ${bds[i].prix} euros</p>
            <p class="card-text">Like: ${bds[i].like ? 'aimer' : 'pas de like'}</p>
            <p class="card-text">Livre emprunter: ${bds[i].emprunt ? 'emprunté' : 'disponible'}</p>
            <p class="card-text texteResumer">Résumer: </br> ${bds[i].resume.substr(0, 30)}</p>
            <button class="btn-resumer">lire la suite</button>
            </br></br> </br>
            <button id="${i}" class="btn btn-primary btn-emprunter"> Emprunter </button>
        </div>
    </div>
    `;
  }
  bdsContainer += '</section>';

  // partie panier:
  let panier = '<div class="panier" >';
  panier += '<h3> Dans votre panier : </h3>';
  for (let i = 0; i < bds.length; i++) {
    if (bds[i].emprunter) { // !!! bien mettre emprunter => pareil dans tt le code
      panier += `
        <p> <h5>livre : ${bds[i].titre}</h5> </p>
        `;
    }
  }
  panier += '</div>';
  app.innerHTML = bdsContainer + panier;// veut donner
  // !!!ne pas faire += car on ne veut pas un cumul
  // =>sinon cela superpose le panier (fixe) à chaque "clic"
}

render();

// ----------- évenement remprunter:--------------------
//! !! mettre hors render => délégation
// le principe meme de la délégation est de ne pas etre liée à un "render",
// elle est juste là a attendre son heure, liée à rien

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn-emprunter')) {
    // créer bd individuel trouvé avec la bonne id
    const bd = bds[e.target.id];
    // change param de cette bd
    bd.emprunter = !bd.emprunter;
    render();
  }
});

// -------lire suite du résumer avec boutton lire la suite:--------
// utilisation du parentNode = en local => pas besoin de rendre le code
// parentNode :ici"la div dans laquelle il y a mon bouton"

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn-resumer')) {
    const parent = e.target.parentNode;
    const { id } = parent.parentNode;
    parent.querySelector('.texteResumer').innerHTML = bds[id].resume;
  }
});
