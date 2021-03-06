import React from 'react'
import Dashboard from "./views/Dashboard";
import Start from "./views/Start";
import Profile from "./views/Profile";
import Loading from './views/Loading';
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
    type: 'dark',
    primary: {
      main: "#212644"
    },
    secondary: {
      main: "#36a2d5"
    }
  },
  typography: {
    h4: {
      fontWeight: "700",
    },
    h5: {
      fontWeight: "700",
    },
    h2: {
      fontWeight: "700",
    },
    h3: {
      fontWeight: "700",
    },
  }
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard admin={false} new={false}/>
            </Route>
            <Route exact path="/1">
              <Dashboard admin={false} new={true}/>
            </Route>
            <Route path="/admin">
              <Dashboard admin={true} new={false}/>
            </Route>
            <Route path="/admin1">
              <Dashboard admin={true} new={true}/>
            </Route>
            <Route path="/start">
              <Start admin={false} />
            </Route>
            <Route path="/loading">
              <Loading admin={false}/>
            </Route>
            <Route path="/loadingAdmin">
              <Loading admin={true} />
            </Route>
            <Route path="/adminStart">
              <Start admin={true} />
            </Route>
            <ThemeProvider theme={lightTheme}>
              <Route path="/profile">
                <Profile />
              </Route>
            </ThemeProvider>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;


