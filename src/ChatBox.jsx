import React from "react";

class ChatBox extends React.Component{
    state= {message: ""}
constructor(props){
    super(props)

    this.onTextAreaChange = this.onTextAreaChange.bind(this);
}

onTextAreaChange(e){
this.setState({
    message: e.target.value
})
}


onButtonClick =(e)=>{
    this.props.onMessage(this.props.name, this.state.message)
    this.setState({
        message: ""
    })
}

render (){

    return(
        <div className="chatbox">
            <h2>{this.props.name}</h2>
            <label htmlFor="message">Meddelande</label>
            <textarea value={this.state.message} onChange={this.onTextAreaChange}></textarea>
            <button onClick={this.onButtonClick}>Send</button>
        </div>
    )
}
}

export default ChatBox


// import { useState } from "react";

// const ChatBox = (props) => {


//     const [formValues, setFormValues] = useState({message:""})
//     console.log("formValues", formValues)






//     return(
//         <div>
//             <h1>{props.name}</h1>
//             <div>
//                 <label htmlFor="">Meddelande</label>
//                 <input type="text" name="message" id="message" value={formValues.message}/> <br />
//                 <button>Send</button>
//             </div>
 
//         </div>
        
//     )

//     // const onClick = (e)=>{
//     //     console.log('Message from', (props.name),': ', (message))

//     // }

//     // const [message, onchange] = useState({message})

//     // return(
//     //     <>
//     //         <h1>{props.name}</h1>
//     //         <div>
//     //             <label>Message</label>
//     //             <textarea
//     //                 placeholder= 'Your message'                   
//     //                 onChange={ (e) => onchange(e.target.value)}
//     //                 value={message}
//     //             >
//     //             </textarea>
//     //         </div>
//     //         <button onClick={onClick}>Send Messade</button>
//     //     </>
//     // )
// }

// export default ChatBox