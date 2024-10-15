
export default function MessageList(props){

    return(
        <div className="messageList">
            <h3>Chat-history:</h3>
            <ul>
            {
                props.message.map(
                    (element, index) => {
                       return(
                        <li>{element.user}{element.text}</li>
                       ) 

                    }
                )
            }

            </ul>
        </div>
    )
}
