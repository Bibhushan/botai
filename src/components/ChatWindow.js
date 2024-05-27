import { Grid } from '@mui/material';
import logo from '../assets/botAI.png';
import QuestionCard from './QuestionCard';

const chats=[
    {question:'Hi, what is the weather', answer: 'Get immediate AI generated response'},
    {question:'Hi, what is my location', answer: 'Get immediate AI generated response'},
    {question:'Hi, what is the temperature', answer: 'Get immediate AI generated response'},
    {question:'Hi, how are you', answer: 'Get immediate AI generated response'},
]

export default function ChatWindow(){

    const topChats = chats; 

    return(
        <div>
            <div style={{padding:'7rem 5rem 3rem 5rem'}}>
                <h2 style={{color:'black'}}>How Can I Help You Today?</h2>
                <img src={logo} alt='Bot AI' style={{height:69, width:'auto'}} />
            </div>
            <Grid container sx={{display:'flex', flexWrap:'wrap'}} spacing={2}>
                {topChats.map((chat, index)=><QuestionCard question={chat.question} answer={chat.answer} key={'key-card-'+index}/>)}
            </Grid>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'1rem 0rem'}}>
                <input style={{padding:'0.5rem 0rem', borderRadius:'5px', border:'1px solid #00000073', width:'100%', margin:'0.5rem 0.5rem 0.5rem 0rem'}} type='text'/>
                <button className='bot-button chat-button' >Ask</button>
                <button className='bot-button chat-button' >Save</button>
            </div>
        </div>
    )
}