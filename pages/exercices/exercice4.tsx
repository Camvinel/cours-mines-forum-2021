import type { NextPage } from 'next'

const Exercise4: NextPage = () => {
  return (
    <div className = "container">
      <h1>Exercice 4</h1>
      <p>
      Consignes :
      </p>
      <ul>
        <li>Recopier les exercices 1 et 2 ci-dessous</li>
        <li>Les adapter pour que les 2 exercices soient sur 2 colonnes différentes sur Desktop, et sur une seule colonne sur
      Mobile</li>
        <li>Adapter le formulaire pour qu&apos;il respecte les guidelines Bootstrap sur les formulaires</li>
      </ul>

      <div className="row">
        <div className = "col-md">
          <table className="table">
            <tr><th>Balise</th><th>Contenu</th></tr>
            <tr><td>h1</td><td>Titre 1</td></tr>
            <tr><td>h2</td><td>Titre 2</td></tr>
            <tr><td>h3</td><td>Titre 3</td>
            </tr><tr><td>h4</td><td>Titre 4</td></tr>
            <tr><td>p</td><td>Paragraphe</td></tr>
            <tr><td>ul - li</td><td>Liste</td></tr>
            <tr><td>table - tr - th/td</td><td>Tableau</td></tr>
          </table>
        </div>
        <div className = "col-md">
          <form method="post">
            <div>
              <label className = "form-label" htmlFor="name">Prénom</label>
              <br />
              <input className="form-control" type="text" id="name" name="name" placeholder="Prénom" />
            </div>

            <div>
              <label htmlFor="lastname">Nom</label>
              <br />
              <input className="form-control" type="text" id="lastname" name="lastname" placeholder="Nom" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input className="form-control" type="email" id="email" name="email" placeholder = "Email" />
            </div>

            <div>
              <label htmlFor="mdp">Mot de Passe</label>
              <br />
              <input className="form-control" type="password" id="password" name="mdp" placeholder = "Mot de Passe" />
            </div>

            <div className="form-check">
              <input className ="form-check-input" type="checkbox" id="règlement" name="règlement" />
              <label className = "form-check-label" htmlFor="règlement">Accepter un quelconque règlement </label>
            </div>

            <div className = "d-grid">
              <button className ="btn btn-primary mb-2" type="submit">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Exercise4
