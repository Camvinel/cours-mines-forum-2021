import Message from './message'

const MessageList = () => {
    const messages = [
        {
            body: "Bonjour, je cherche à finir la quête 'Une amie pour Paula' mais je n'arrive pas à augmenter suffisamment l'amitié entre Sharla et Fiora",
            author: "Camvinel",
            subject: "Xenoblade Chronicles"
        },

        {
            body: "Essaye de les mettre dans le même groupe et de les faire intéragir pdt les combats",
            author: "FanDeMekon",
            subject: "Xenoblade Chronicles"
        },

        {
            body: "Ou les fins de quête (quand tu parles à un pnj)",
            author: "ABasMumkhar",
            subject: "Xenoblade Chronicles"
        }
    ]

    return(
        <div className = "container">
            {messages.map(({body, author, subject}, i) => <Message key = {i} body = {body} author = {author} sujet = {subject} />)}
        </div>)
}

export default MessageList