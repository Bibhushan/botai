import { Box, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Rating, TextField } from "@mui/material";
import bot from '../assets/botAI.png';
import you from '../assets/You.png';
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlined from "@mui/icons-material/ThumbDownAltOutlined";
import './styles.css';
import { useEffect, useState } from "react";
import feedback from '../assets/feedback.png';
import CloseIcon from '@mui/icons-material/Close';

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

export default function ChatResponse({id, response, responseHandler}){

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

    const updateFeedbackText = (event)=>{
        setFeedbackText(event.target.value);
    }

    const submitFeedback = ()=>{
        responseHandler(id, feedbackText, response.rating);
        setIsFeedbackOpen(false);
    }


    const updateRating = (event)=>{
        responseHandler(id, response.feedback, event.target.value);        
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
                    {response.feedback.length>0 && <Rating value={response.rating} onChange={updateRating}/>}
                    {likeDislike && 
                        <div>                            
                            <ThumbUpAltOutlined onClick={likeDislikeHandler} sx={{padding:'0.5rem', opacity:'50%'}}/>
                            <ThumbDownAltOutlined onClick = {likeDislikeHandler} sx={{padding:'0.5rem', opacity:'50%'}}/>
                        </div>
                    }                    
                </div>
                {response.feedback.length > 0 && 
                    <p style={{padding:0, padding:0.5}}>
                        <span style={{fontWeight:'bold'}}>Response: </span> 
                        {response.feedback}
                    </p>}
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
                    <textarea rows={10} cols={50} onChange={updateFeedbackText}
                        style={{fontSize:16, margin:'1rem'}}
                    >
                        {response.feedback}
                    </textarea>
                </DialogContent>
                <DialogActions>
                    <button 
                        className='chat-button' 
                        style={{backgroundColor:'#9785BA', padding:'0.5rem 1rem', margin:0}} 
                        onClick={submitFeedback}
                        disabled={feedbackText.length <=0}
                    >
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
        </Card>
    )    
}