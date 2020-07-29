import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* Importente: a ordem das rotas define prioridade! */}
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      {/* Quando não encontrar a rota (404), vai para essa página */}
      <Route component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
