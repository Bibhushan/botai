import { Card } from "@mui/material";
import bot from '../assets/botAI.png';
import you from '../assets/You.png';
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlined from "@mui/icons-material/ThumbDownAltOutlined";
import './styles.css';
import { useEffect, useState } from "react";

export default function ChatResponse({isBot, response, time}){

    const [likeDislike, setLikeDislike] = useState(false);

    const showLikeDislike = ()=>{
        if (isBot){
            setLikeDislike(!likeDislike);
        }
    }

    return(
        <Card 
            className='chat-response' 
            onMouseEnter={showLikeDislike} 
            onMouseLeave={showLikeDislike}
            style={{display:'flex', alignItems:'center', borderRadius:'20px', margin:'0.5rem', backgroundColor:'#D7C7F421'}}
        >
            <img src={isBot ? bot : you} alt='chat' style={{height:'100%', width:65, padding:'1rem'}}/>
            <div style={{textAlign:'left'}}>
                <p style={{fontWeight:'bold', padding:'0.5rem', margin:0}}>{isBot ? 'Soul AI' : 'You'}</p>
                <p style={{padding:'0.5rem', margin:0}}>{response}</p>
                <div style={{display:'flex', padding:0, alignItems:'center', fontSize:12}}>
                    <p style={{padding:'0.5rem'}}>{time}</p>
                    {likeDislike && 
                        <div>
                            <ThumbUpAltOutlined sx={{padding:'0.5rem', opacity:'50%'}}/>
                            <ThumbDownAltOutlined sx={{padding:'0.5rem', opacity:'50%'}}/>
                        </div>
                    }
                </div>
            </div>
        </Card>
    )    
}