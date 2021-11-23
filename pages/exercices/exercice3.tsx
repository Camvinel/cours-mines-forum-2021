import type { NextPage } from 'next'


const Exercise3: NextPage = () => {
  return (
    <div>
      <h1>Exercice 3</h1>
      <p>
      Consignes :
      </p>
      <ul>
        <li>Mettre en forme l&apos;exercice 3</li>
        <li>Recopier le formulaire d&apos;inscription précédent ci-dessous</li>
        <li>Grâce au fichier global.css, mettre le texte des labels en bleu, agrandir la police dans les input texte, placer un
      bloc en position absolue à droite du champ adresse email avec un texte de votre choix en police 10px rouge.</li>
      </ul>

      <div>
        <b>
          <p>Grrrr</p>
        </b>
      </div>

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

    </div>
  )
}

export default Exercise3
