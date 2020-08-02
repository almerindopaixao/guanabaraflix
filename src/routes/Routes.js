import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CadastroVideo from '../pages/Cadastro/Video';
import CadastroCategoria from '../pages/Cadastro/Categoria';
import EditaCategoria from '../pages/Editar/Categoria';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro/video" component={CadastroVideo} />
      <Route exact path="/cadastro/categoria" component={CadastroCategoria} />
      <Route exact path="/editar/:dados" component={EditaCategoria} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
