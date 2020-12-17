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
    if (bds[i].emprunt) {
      panier += `
        <p> <h5>livre : ${bds[i].titre}</h5> </p>
        `;
    }
  }
  panier += '</div>';
  app.innerHTML += bdsContainer + panier;

  // évenement remprunter:
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.btn-emprunter')) {
      const listEmprunt = bds[e.target.id];
      bds.emprunter = !bds.emprunter;
      render();
    }
  });

  // lire suite du résumer avec boutton lire la suite:
  // faire remove puis add du texte complet

  /* document.body.addEventListener('click', (e) => {
    if (e.target.matches('.btn-resumer')) {
      bdsContainer.remove('<p class="card-text"> ${bds[i].resume.substr(30)}</p>');
      bdsContainer.add(' <p class="card-text"> ${bds[i].resume.substr(30)} </p>');
      render();
    }
  });
}
*/

/* // autre test:

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn-resumer')) {
    bdsContainer -= `<p class="card-text"> ${bds[i].resume.substr(0, 30)}</p>`;
    bdsContainer += ` <p class="card-text"> ${bds[i].resume}</p> `;
    render();
  } */
}

render();

/* //autre piste notion de enfant / parent (compliquer...):

 const resumer = document.querySelectorAll('.btn-resumer');
  for (let i = 0; i < bds.length; i++) {
  resumer[i].addEventListener('click', () => {
   suite.parentNode.removeChild();
   document.body.appendChild()
   p.appendChild();
    render();
  });
  } */
