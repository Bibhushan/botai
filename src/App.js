import './App.css';
import { Box, Grid } from '@mui/material';
import PastChats from './components/PastChats';
import ChatWindow from './components/ChatWindow';
import { useEffect, useState } from 'react';
import menu from './assets/menu.png';

function App() {

  const [showMenu, setShowMenu] = useState(true);
  const [showMiniMenu, setShowMiniMenu] = useState(false);

  const handleMiniMenu = ()=>{
    setShowMiniMenu(!showMiniMenu);
  }

  useEffect(()=>{

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
          <Grid item sm={3}>
            <PastChats/>
          </Grid>
        }
        <Grid item sm={9} 
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
          <ChatWindow />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
