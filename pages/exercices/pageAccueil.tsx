import type { NextPage } from 'next'

const PageAccueil: NextPage = () => {
    return (<div>
        <div id ="forum-wrapper" className = "d-flex flex-column">
          <div id = "listOfSubject" className = "flex-grow-1">
            <h1 id = "titre">Forum</h1>
            <div className = "container">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="forum">Xenoblade Chronicles</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="forum2">Portal</a>
                </li>
              </ul>
            </div>
          </div>
          <div id = "new-message-container">
            <div className = "container">
              <form method="post">
                <div>
                  <input className="form-control" type="text" id="newSubject" name="New subject" placeholder="New subject" />
                </div>

                <div>
                  <input className="form-control" type="text" id="Username" name="Username" placeholder="Username" />
                </div>
  
                <div>
                  <textarea className="form-control" id="new-message" name="New-message" placeholder="Message" rows = {3}/>
                </div>
  
                <div className = "d-grid">
                  <button className ="btn btn-primary mb-2" type="submit">Envoyer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default PageAccueil