import type { NextPage } from 'next'

const Exercise2: NextPage = () => {
  return (
    <div className = "container">
      <h1>Exercice 2</h1>
      <p>
        Consignes :
      </p>
      <ul>
        <li>Mettre en forme l&apos;exercice 2</li>
        <li>Créer ci-dessous un formulaire d&apos;inscription contenant les champs : Prénom, nom, email, mot de passe, checkbox pour
        accepter un quelconque règlement et un bouton de validation.</li>
      </ul>
      <form method="post">
        <div>
          <label htmlFor="name">Prénom</label>
          <input type="text" id="name" name="name" placeholder="Prénom" />
        </div>

        <div>
          <label htmlFor="lastname">Nom</label>
          <input type="text" id="lastname" name="lastname" placeholder="Nom" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder = "Email" />
        </div>

        <div>
          <label htmlFor="mdp">Mot de Passe</label>
          <input type="password" id="password" name="mdp" placeholder = "Mot de Passe" />
        </div>

        <div>
          <label htmlFor="règlement">Accepter un quelconque règlement </label>
          <input type="checkbox" id="règlement" name="règlement" />
        </div>

        <div>
          <button type="submit">Envoyer</button>
        </div>
        </form>

        <div id = "main-content">
          <div className = "box">
            <a href = "https://google.Fr">Test</a>
          </div>

        </div>
    </div>
  )
}

export default Exercise2
