import Dashboard from "./views/Dashboard";
import Start from "./views/Start";
import '@fontsource/roboto';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#262c52"
    },
    secondary: {
      main: "#66bf39"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/start">
              <Start />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
