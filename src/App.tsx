import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;
import Homepage from './components/Homepage';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Emploi from './components/Emploi';
import Search from './components/Search';

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
            <Route path="/search/:keyword"><Search /></Route>
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
