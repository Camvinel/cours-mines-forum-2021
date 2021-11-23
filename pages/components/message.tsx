interface Props {
    body: string
    author: string
    sujet: string
}

const Message = ({body, author, sujet} : Props) => {
    return(
    <div className="card">
        <div className="card-body">
            <h5 className="card-title" id = "subject">{sujet}</h5>
            <h6 className="card-subtitle mb-2 text-muted" id = "pseudo">{author}</h6>
            <p className="card-text">{body}</p>
        </div>
    </div>)
}

export default Message