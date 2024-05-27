import { Card } from "@mui/material";
import bot from '../assets/botAI.png';
import you from '../assets/You.png';
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlined from "@mui/icons-material/ThumbDownAltOutlined";
import './styles.css';

export default function ChatResponse({isBot, response, time}){

    return(
        <div className='chat-reponse' display='flex'>
            <img src={isBot ? bot : you} alt='chat' style={{height:'auto', width:65}}/>
            <div style={{textAlign:'left'}}>
                <p style={{fontWeight:'bold', padding:'0.5rem'}}>{isBot ? 'Soul AI' : 'You'}</p>
                <p style={{padding:'0.5rem'}}>{response}</p>
                <div style={{display:'flex', padding:'0.5rem', alignItems:'center', fontSize:12}}>
                    <p style={{margin:'0.5rem'}}>{time}</p>
                    <ThumbUpAltOutlined sx={{padding:'0.5rem', opacity:'50%'}}/>
                    <ThumbDownAltOutlined sx={{padding:'0.5rem', opacity:'50%'}}/>
                </div>
            </div>
        </div>
    )    
}