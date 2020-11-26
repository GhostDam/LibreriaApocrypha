import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './historias/escritos.css'
import {Header} from './header/Header'

import {Sons} from './historias/stavesoftime/Index'
import {Luna} from './historias/lunatica/Index'

const App = ()=> (
    <BrowserRouter>
      <Header/>
        <Switch>
          <div className='contenedor'>
            <Route exact path='/' component={Sons} />
            <Route exact path='/lunatica' component={Luna} />
            {/* <Route component={Unfound}/> */}
          </div>
        </Switch>
    </BrowserRouter>
  )

export default App;
