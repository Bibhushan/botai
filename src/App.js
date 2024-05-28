import './App.css';
import { Grid } from '@mui/material';
import PastChats from './components/PastChats';
import ChatWindow from './components/ChatWindow';
import { useEffect, useState } from 'react';
import menu from './assets/menu.png';
import sampleData from './assets/sampleData.json'
import useLocalStorage from 'use-local-storage';
import { getCurrDate, getCurrTime } from './helpers/DateTime';

function App() {

  const data = sampleData;

  const [showMenu, setShowMenu] = useState(true);
  const [showMiniMenu, setShowMiniMenu] = useState(false);

  const [currInput, setCurrInput] = useState('');
  const [currQuestion, setCurrQuestion] = useState('');
  const [isCardQuestion, setIsCardQuestion] = useState(false);

  const [conversation, setConversation] = useState({date:'', responses:[], feedback:''});
  const[pastConversations, setPastConversations] = useLocalStorage('botai-conversations', '');

  const handleMiniMenu = ()=>{
    setShowMiniMenu(!showMiniMenu);
  }

  const inputHandler = (event)=>{
    setCurrInput(event.target.value)
  }

  const questionHandler = ()=>{
    setCurrQuestion(currInput);
    setIsCardQuestion(false);
  }

  const setCardQuestion = (question)=>{
    setIsCardQuestion(true);
    setCurrQuestion(question);
  }

  const saveConversationHandler = ()=>{
    setPastConversations([...pastConversations, conversation]);
  }

  useEffect(()=> {
      if (currQuestion.length>0){
          let strTime = getCurrTime();
          setConversation({...conversation, responses:[...conversation.responses, {isBot:false, response:currQuestion, time:strTime}]});
      }
  }, [currQuestion])

  useEffect(()=>{
      if (currQuestion.length > 0){
          let strTime = getCurrTime();
          if ((conversation.length <= 1 && isCardQuestion === false) || ['hi', 'hello'].includes(currQuestion.toLowerCase())){
              setConversation({...conversation, date:getCurrDate()})
              setConversation({...conversation, responses:[...conversation.responses, {isBot:true, response:'Hi There. How can I assist you today?', time:strTime}]});
          }
          else{
              console.log('finding answer to: ', currQuestion)
              let result = data.filter((item)=>{return item.question.toLowerCase() === currQuestion.toLowerCase()});
              if (result.length === 0){
                  setConversation({...conversation, responses:[...conversation.responses, {isBot:true, response:'As an AI Language Model, I don’t have the details', time:strTime}]});
              } else {
                  setConversation({...conversation, responses:[...conversation.responses, {isBot:true, response:result[0].response, time:strTime}]});
              }                
          }
          setCurrQuestion('');
      }
  }, [conversation])

  useEffect(()=>{

    // console.log('sampleData', data);
    const handleResize = ()=>{
      if(window.innerWidth < 768){
        setShowMenu(false)
      } else {
        setShowMenu(true)
      }
    }

    window.addEventListener('resize', handleResize);

    return ()=>window.removeEventListener('resize', handleResize);

  }, [])

  return (
    <div className="App">
      <Grid container>
        {showMenu &&
          <Grid item sm={2}>
            <PastChats/>
          </Grid>
        }
        <Grid item sm={10} 
          style={{background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)', padding:'0.5rem 1rem'}} 
        >
          <div style={{display:'flex', alignItems:'center'}}>
            {showMenu || 
              <div>
                <img 
                  src={menu} alt='menu' 
                  style={{height:16, width:'auto', padding:'0rem 0.5rem 0rem 0rem'}}
                  onClick={handleMiniMenu}
                />
                {showMiniMenu && <PastChats/>}
              </div>
            }
            <h1 style={{textAlign:'left', color:'#9785BA', padding:0, margin:0}}>Bot AI</h1>
          </div>
          <ChatWindow 
            inputHandler={inputHandler} 
            questionHandler={questionHandler}
            cardQuestionHandler = {setCardQuestion}
            conversation = {conversation}
            saveConversationHandler={saveConversationHandler}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
