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
        <div style={{background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)', padding:'1rem'}}>
            <h1 style={{textAlign:'left', color:'#9785BA', padding:'0rem 1rem'}}>Bot AI</h1>          
            <div style={{padding:'7rem 5rem 3rem 5rem'}}>
                <h2 style={{color:'black'}}>How Can I Help You Today?</h2>
                <img src={logo} alt='Bot AI' style={{height:69, width:'auto'}} />
            </div>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                {topChats.map((chat)=><QuestionCard question={chat.question} answer={chat.answer}/>)}
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'1rem'}}>
                <input style={{padding:'0.5rem', borderRadius:'5px', border:'1px solid #00000073', width:'100%', margin:'0.5rem'}} type='text'/>
                <button className='bot-button' style={{fontSize:20, fontWeight:400, margin:'0.25rem'}}>Ask</button>
                <button className='bot-button' style={{fontSize:20, fontWeight:400, margin: '0.25rem'}}>Save</button>
            </div>
        </div>
    )
}