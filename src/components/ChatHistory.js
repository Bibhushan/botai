import { useEffect, useState } from "react";
import ConversationBox from "./ConversationBox";

export default function ChatHistory({history}){

    const [rating, setRating] = useState(0);

    const [currHistory, setCurrHistory] = useState(history);
   
    const handleRating = (event)=>{
        // console.log(event.target.value);
        setRating(parseInt(event.target.value));
    }

    useEffect(()=>{
        console.log('currHistory', currHistory);
        if (rating === 0){
            setCurrHistory(history);
        } else {
            setCurrHistory(history.filter((chat)=>{return chat.maxRating === rating}));
        }
    }, [rating])

    return(
        <div>
            <h2>Conversation History</h2>
            <select onChange={handleRating}>
                <option value={0}>All Ratings</option>
                <option value={1}>1 Star</option>
                <option value={2}>2 Star</option>
                <option value={3}>3 Star</option>
                <option value={4}>4 Star</option>
                <option value={5}>5 Star</option>
            </select>
            {currHistory.map((chat)=>{             
                    return <div style={{textAlign:'left'}}>
                        <h3>{chat.date}</h3>
                        <ConversationBox conversation={chat} isReadOnly={true}/>
                    </div>                  
            })

            }
        </div>
    )
}