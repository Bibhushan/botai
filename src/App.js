import './App.css';
import { Box, Grid } from '@mui/material';
import PastChats from './components/PastChats';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item md={2}>
          <PastChats/>
        </Grid>
        <Grid item md={10} className='secondary'>
          <ChatWindow />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
