import type { NextPage } from 'next'
import MessageList2 from '../components/messageList2'

const Forum2: NextPage = () => {
  return (
    <div>
      <div id ="forum-wrapper" className = "d-flex flex-column">
        <div id = "message-container2" className = "flex-grow-1">
            <div className = "container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="forum">Xenoblade Chronicles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="forum2">Portal</a>
                    </li>
                    <li className = "nav-item" id = "retour">
                        <a className="nav-link active" aria-current="page" href="pageAccueil">Retour</a>
                    </li>
                </ul>
            </div>
          <MessageList2></MessageList2>
        </div>
        <div id = "new-message-container">
          <div className = "container">
            <form method="post">
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

export default Forum2
