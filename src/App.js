import './App.css';
import { Grid } from '@mui/material';
import PastChats from './components/PastChats';
import ChatWindow from './components/ChatWindow';
import { useEffect, useState } from 'react';
import menu from './assets/menu.png';
import sampleData from './assets/sampleData.json'
import useLocalStorage from 'use-local-storage';
import { getCurrDate, getCurrTime } from './helpers/DateTime';
import { ConversationContext } from './components/ConversationContext';
import ChatHistory from './components/ChatHistory';

function App() {

  const data = sampleData;

  const [showMenu, setShowMenu] = useState(true);
  const [showMiniMenu, setShowMiniMenu] = useState(false);

  const [currInput, setCurrInput] = useState('');
  const [currQuestion, setCurrQuestion] = useState('');
  const [isCardQuestion, setIsCardQuestion] = useState(false);

  const [conversation, setConversation] = useState({responses:[], maxRating:''});
  const[pastConversations, setPastConversations] = useLocalStorage('botai-conversations', []);

  const[isChatHistory, setIsChatHistory] = useState(false);

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

  const addResponse = (isBot, response)=>{
    let strTime = getCurrTime();
    setConversation({...conversation, responses:[...conversation.responses, 
            {isBot:{isBot}, response:response, time:strTime, rating:0, feedback:''}]})
  }

  const updateResponse = (index, feedback, rating)=>{
    let conv_copy = [...conversation.responses];
    conv_copy[index].feedback = feedback;
    conv_copy[index].rating = rating;
    setConversation({...conversation, responses:conv_copy});
  }

  const saveConversationHandler = ()=>{
    let thisConv = {...conversation}
    let allRatings = thisConv.responses.map((resp)=>{return Number(resp.rating)});
    thisConv.maxRating = Math.max(...allRatings);
    thisConv.date = getCurrDate();
    setPastConversations([...pastConversations, thisConv]);
  }

  useEffect(()=> {
      if (currQuestion.length>0){
          addResponse(false, currQuestion)
          // let strTime = getCurrTime();
          // setConversation({...conversation, responses:[...conversation.responses, {isBot:false, response:currQuestion, time:strTime, rating:0, feedback:''}]});
      }
  }, [currQuestion])

  useEffect(()=>{
      if (currQuestion.length > 0){
          // let strTime = getCurrTime();
          if ((conversation.length <= 1 && isCardQuestion === false) || ['hi', 'hello'].includes(currQuestion.toLowerCase())){
              // setConversation({...conversation, date:getCurrDate()})
              addResponse(true, 'Hi There. How can I assist you today?')
              // setConversation({...conversation, responses:[...conversation.responses, {isBot:true, response:'Hi There. How can I assist you today?', time:strTime, rating:0, feedback:''}]});
          }
          else{
              console.log('finding answer to: ', currQuestion)
              let result = data.filter((item)=>{return item.question.toLowerCase() === currQuestion.toLowerCase()});
              if (result.length === 0){
                addResponse(true, 'As an AI Language Model, I don’t have the details')
                  // setConversation({...conversation, responses:[...conversation.responses, {isBot:true, response:'As an AI Language Model, I don’t have the details', time:strTime, rating:0, feedback:''}]});
              } else {
                addResponse(true, result[0].response)
                  // setConversation({...conversation, responses:[...conversation.responses, {isBot:true, response:result[0].response, time:strTime}]});
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

  const startNewConversation = ()=>{
    setConversation({date:'', responses:[], maxRating:''});
    hideChatHistory();
  }

  const showChatHistory = ()=>{
    if (pastConversations) setIsChatHistory(true);
  }

  const hideChatHistory = ()=>{
    setIsChatHistory(false);
  }

  return (
    <div className="App">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'start'}}>
        {showMenu &&
          <div >
            <PastChats newConversationHandler={startNewConversation} chatHistoryHandler={showChatHistory}/>
          </div>
        }
        <div 
          style={{background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)', 
                  padding:'0.5rem 1rem', width:'100%', height:'100%'}} 
        >
          <div style={{display:'flex', alignItems:'center'}}>
            {showMenu || 
              <div>
                <img 
                  src={menu} alt='menu' 
                  style={{height:16, width:'auto', padding:'0rem 0.5rem 0rem 0rem'}}
                  onClick={handleMiniMenu}
                />
                {showMiniMenu && <PastChats newConversationHandler={startNewConversation} chatHistoryHandler={showChatHistory}/>}
              </div>
            }
            <h1 style={{textAlign:'left', color:'#9785BA', padding:0, margin:0}}>Bot AI</h1>
          </div>
          <ConversationContext.Provider value={{conversation, updateResponse}} >
            { isChatHistory ? 
              <ChatHistory history={pastConversations}/>
              :
              <ChatWindow 
                inputHandler={inputHandler} 
                questionHandler={questionHandler}
                cardQuestionHandler = {setCardQuestion}
                conversation = {conversation}
                saveConversationHandler={saveConversationHandler}
              />
          }
          </ConversationContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
