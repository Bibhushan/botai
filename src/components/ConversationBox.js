import ChatResponse from "./ChatResponse";


export default function ConversationBox({conversation}){
    return (
        <div style={{maxHeight:600, overflowY:'auto'}}>
            {conversation.responses.map((response, index)=>
                    <ChatResponse isBot={response.isBot} response={response.response} time={response.time} key={'response-' + index}/>
            )}
        </div>
    )
}