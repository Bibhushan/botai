import { useContext } from "react";
import ChatResponse from "./ChatResponse";
import { ConversationContext } from "./ConversationContext";


export default function ConversationBox(){

    const {conversation, updateResponse} = useContext(ConversationContext);

    console.log('conv',conversation);

    return (
        <div style={{maxHeight:600, overflowY:'auto'}}>
            {conversation.responses.map((response, index)=>
                    <ChatResponse 
                        id={index}
                        response={response} 
                        key={'response-' + index}
                        responseHandler={updateResponse}
                    />
            )}
        </div>
    )
}