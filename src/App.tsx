import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;
import Homepage from './components/Homepage/Homepage';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Emploi from './components/Emploi/Emploi';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7d3780'
    },
    secondary: {
      main: '#fd3535'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact={true}><Homepage /></Route>
            <Route path="/emploi"><Emploi /></Route>
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
