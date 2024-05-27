import logo from '../assets/botAI.png';
import newChat from '../assets/newChat.png';
import '../App.css';
import './styles.css';


export default function PastChats(){
    
    return(
        <div>
            <div className='primary'  style={{display:'flex', maxHeight:50, justifyContent:'space-between', alignItems:'center'}}>
                <img src={logo} alt='BotAI' style={{height:40, width:'auto', margin:8}}/>
                <h3>New Chat</h3>
                <img src={newChat} alt='New Chat' style={{height:24, width:'auto', margin:8}} />
            </div>
            <button className='primary bot-button' style={{fontWeight:'bold'}} >
                Past Conversations
            </button>
        </div>
    );
};