import React from 'react'
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
import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyB1EkBznswgGfQQgeZAjo31-tXVhiTUZEg",
  authDomain: "taskr-a222d.firebaseapp.com",
  projectId: "taskr-a222d",
  storageBucket: "taskr-a222d.appspot.com",
  messagingSenderId: "965424484266",
  appId: "1:965424484266:web:211500737137441f1a65d3"
})

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


