import ChatResponse from "./ChatResponse";


export default function ConversationBox({conversation, likeDislikeHandler}){
    return (
        <div style={{maxHeight:600, overflowY:'auto'}}>
            {conversation.responses.map((response, index)=>
                    <ChatResponse 
                        response={response} 
                        key={'response-' + index}
                        likeDislikeHandler = {likeDislikeHandler}
                    />
            )}
        </div>
    )
}