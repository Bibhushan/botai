import { Box, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, TextField } from "@mui/material";
import bot from '../assets/botAI.png';
import you from '../assets/You.png';
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlined from "@mui/icons-material/ThumbDownAltOutlined";
import './styles.css';
import { useEffect, useState } from "react";
import feedback from '../assets/feedback.png';
import CloseIcon from '@mui/icons-material/Close';
import Close from "@mui/icons-material/Close";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ChatResponse({response, responseHandler}){

    const [likeDislike, setLikeDislike] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [feedbackText, setFeedbackText] = useState('');

    const showLikeDislike = ()=>{
        if (response.isBot){
            setLikeDislike(true);
        }
    }

    const hideLikeDislike = ()=>{
        if (response.isBot){
            setLikeDislike(false);
        }
    }

    const likeDislikeHandler = ()=>{
        console.log('like / dislike clicked.');
        setIsFeedbackOpen(true);
    }

    const closeFeedback = ()=>{
        setIsFeedbackOpen(false);
    }

    const submitFeedback = ()=>{

    }

    return(
        <Card 
            className='chat-response' 
            onMouseEnter={showLikeDislike} 
            onMouseLeave={hideLikeDislike}
            style={{display:'flex', alignItems:'center', borderRadius:'20px', margin:'0.5rem', backgroundColor:'#D7C7F421'}}
        >
            <img src={response.isBot ? bot : you} alt='chat' style={{height:'100%', width:65, padding:'1rem'}}/>
            <div style={{textAlign:'left'}}>
                <p style={{fontWeight:'bold', padding:'0.5rem', margin:0}}>{response.isBot ? 'Soul AI' : 'You'}</p>
                <p style={{padding:'0.5rem', margin:0}}>{response.response}</p>
                <div style={{display:'flex', padding:0, alignItems:'center', fontSize:12}}>
                    <p style={{padding:'0.5rem'}}>{response.time}</p>
                    {likeDislike && 
                        <div>
                            <ThumbUpAltOutlined onClick={likeDislikeHandler} sx={{padding:'0.5rem', opacity:'50%'}}/>
                            <ThumbDownAltOutlined onClick = {likeDislikeHandler} sx={{padding:'0.5rem', opacity:'50%'}}/>
                        </div>
                    }
                </div>
            </div>
            <Dialog
                open={isFeedbackOpen}
                onClose={closeFeedback}
                // sx={{minWidth:'450'}}
            >
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:0}}>
                    <div style={{display:'flex', justifyContent:'left', alignItems:'center'}}>
                        <img src={feedback} alt='feedback' style={{width:42, height:'100%', padding:'0.5rem'}}/>
                        <p style={{padding:'0.5rem', fontSize:22}}>Provide Additional Feedback</p>
                    </div>
                    <CloseIcon onClick={closeFeedback} sx={{padding:'0.5rem 1rem'}}/>
                </div>
                <DialogContent>
                    <textarea rows={10} cols={60}>{feedbackText}</textarea>
                </DialogContent>
                <DialogActions>
                    <button className='chat-button' style={{backgroundColor:'#9785BA'}} onClick={{submitFeedback}}>Submit Feedback</button>
                </DialogActions>
            </Dialog>
        </Card>
    )    
}