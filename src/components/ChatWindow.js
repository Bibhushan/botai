import { Grid } from '@mui/material';
// import { useEffect, useState } from 'react';
import logo from '../assets/botAI.png';
import QuestionCard from './QuestionCard';
// import useLocalStorage from 'use-local-storage';
import ConversationBox from './ConversationBox';

const chats=[
    {question:'Hi, what is the weather', answer: 'Get immediate AI generated response'},
    {question:'Hi, what is my location', answer: 'Get immediate AI generated response'},
    {question:'Hi, what is the temperature', answer: 'Get immediate AI generated response'},
    {question:'Hi, how are you', answer: 'Get immediate AI generated response'},
]

export default function ChatWindow({inputHandler, questionHandler, cardQuestionHandler, conversation, saveConversationHandler, likeDislikeHandler}){

    const topChats = chats; 

    // const [currInput, setCurrInput] = useState('');

    // const [currQuestion, setCurrQuestion] = useState('');

    // const [conversation, setConversation] = useState({date:'', responses:[], feedback:''});

    // const [isCardQuestion, setIsCardQuestion] = useState(false);

    // const[pastConversations, setPastConversations] = useLocalStorage('botai-conversations', '');

    // const addQuestion = ()=>{
    //     setCurrQuestion(currInput);
    //     setIsCardQuestion(false);
    // }

    // const setCardQuestion = (question)=>{
    //     setIsCardQuestion(true);
    //     setCurrQuestion(question);
    // }

    // const handleSaveConversation = ()=>{
    //     setPastConversations([...pastConversations, conversation]);
    // }

    // useEffect(()=> {
    //     if (currQuestion.length>0){
    //         let strTime = getCurrTime();
    //         setConversation({...conversation, responses:[...conversation.responses, {isBot:false, response:currQuestion, time:strTime}]});
    //     }
    // }, [currQuestion])

    // useEffect(()=>{
    //     if (currQuestion.length > 0){
    //         let strTime = getCurrTime();
    //         if ((conversation.length <= 1 && isCardQuestion === false) || ['hi', 'hello'].includes(currQuestion.toLowerCase())){
    //             setConversation({...conversation, date:getCurrDate()})
    //             setConversation({...conversation, responses:[...conversation.responses, {isBot:true, response:'Hi There. How can I assist you today?', time:strTime}]});
    //         }
    //         else{
    //             console.log('finding answer to: ', currQuestion)
    //             let result = chatData.filter((item)=>{return item.question.toLowerCase() === currQuestion.toLowerCase()});
    //             if (result.length === 0){
    //                 setConversation({...conversation, responses:[...conversation.responses, {isBot:true, response:'As an AI Language Model, I don’t have the details', time:strTime}]});
    //             } else {
    //                 setConversation({...conversation, responses:[...conversation.responses, {isBot:true, response:result[0].response, time:strTime}]});
    //             }                
    //         }
    //         setCurrQuestion('');
    //     }
    // }, [conversation])

    return(
        <div>
            {conversation.responses.length === 0 ? 
                <div>
                    <div style={{padding:'7rem 5rem 3rem 5rem'}}>
                        <h2 style={{color:'black'}}>How Can I Help You Today?</h2>
                        <img src={logo} alt='Bot AI' style={{height:69, width:'auto'}} />
                    </div>
                    <Grid container sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}} spacing={2}>
                        {topChats.map((chat, index)=><QuestionCard 
                            question={chat.question} 
                            answer={chat.answer} 
                            key={'key-card-'+index}                 
                            onClickHandler = {()=>cardQuestionHandler(chat.question)}/>
                        )}
                    </Grid>
                </div>
            :
                <ConversationBox/>
            }
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'1rem 0rem'}}>
                <input 
                    id='chat-input'
                    style={{padding:'0.5rem 1rem', borderRadius:'5px', border:'1px solid #00000073', width:'100%', margin:'0.5rem 0.5rem 0.5rem 0rem'}} 
                    type='text'
                    onChange={inputHandler}
                    placeholder='Chat with AI model powered by Soul AI'
                />
                <button 
                    className='bot-button chat-button'
                    onClick={questionHandler}
                >
                    Ask
                </button>
                <button 
                    className='bot-button chat-button' 
                    onClick={saveConversationHandler}
                >
                    Save
                </button>
            </div>
        </div>
    )
}