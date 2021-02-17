import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '~store/root.reducer'
import { applyMiddleware, createStore } from 'redux'
import rootSaga from './store/root.sagas'
import Home from '~app/screens/Home/Home'
import GridPlanner from "~app/screens/GridPlanner/GridPlanner";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Global } from '@emotion/react';
import {globalStyles} from "~GlobalStyling";
import {createMuiTheme} from "@material-ui/core";
import themeVariables from "~style/themeVariables";
import { ThemeProvider } from '@material-ui/core/styles';
import Impressum from "~app/screens/Impressum/Impressum";
import Datenschutz from "~app/screens/Datenschutz/Datenschutz";
import ViewportToSmall from "~app/components/ViewportToSmall/ViewportToSmall";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeVariables.orange,
    },
    secondary: {
      main: themeVariables.blue,
    }
  }
});

const App = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
    ),
  )
  sagaMiddleware.run(rootSaga)

  return (
    <ParallaxProvider>
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />

            <ViewportToSmall />

            <Route exact path='/' component={Home} />
            <Route exact path='/planner' component={GridPlanner} />
            <Route exact path='/impressum' component={Impressum} />
            <Route exact path='/datenschutz' component={Datenschutz} />
          </ThemeProvider>
        </Router>
      </Provider>
    </ParallaxProvider>
  )
}

ReactDOM.render(<App />, window.document.getElementById('root'))
