import type { NextPage } from 'next'

const Exercise1: NextPage = () => {
  return (
    <div>
    <h1>
      Exercice 1
    </h1>
    <p>
      Consignes :
    </p>
    <ul>
        <li>Mettre en forme l&apos;exercice 1</li>
        <li>En-dessous, regrouper les noms de balises vues jusqu&apos;ici dans un tableau avec en-têtes ayant pour colonnes : Balise,
      Contenu. Dans la colonne contenu spécifier la ou les balises qu&apos;il est possible d&apos;insérer à l&apos;intérieur, ou &quot;texte&quot;
      (pour les titres par exemple).</li>
    </ul>
    <table className="table">
      <tr>
        <th>Balise</th>
        <th>Contenu</th>
      </tr>
      <tr>
        <td>h1</td>
        <td>Titre 1</td>
      </tr>
      <tr>
        <td>h2</td>
        <td>Titre 2</td>
      </tr>
      <tr>
        <td>h3</td>
        <td>Titre 3</td>
      </tr>
      <tr>
        <td>h4</td>
        <td>Titre 4</td>
      </tr>
      <tr>
        <td>p</td>
        <td>Paragraphe</td>
      </tr>
      <tr>
        <td>ul - li</td>
        <td>Liste</td>
      </tr>
      <tr>
        <td>table - tr - th/td</td>
        <td>Tableau</td>
      </tr>
    </table>
  </div>
  )
}

export default Exercise1
