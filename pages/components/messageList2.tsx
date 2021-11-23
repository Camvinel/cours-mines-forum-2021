import Message from './message'

const MessageList2 = () => {
    const messages = [
        {
            body: "Now you're gone",
            author: "Portal",
            subject: "Glados"
        }
    ]

    return(
        <div className = "container">
            {messages.map(({body, author, subject}, i) => <Message key = {i} body = {body} author = {author} sujet = {subject} />)}
        </div>)
}

export default MessageList2