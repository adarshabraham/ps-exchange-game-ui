import { Layout } from 'antd';
import { Switch, useHistory } from 'react-router-dom';
import './App.css';
import AppRoute from './Routes/AppRouter';
import routes from './Routes/routes';


function App() {
let history = useHistory();
const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ textAlign: 'center' }} history={history}>
        <h1 style={{color:'White'}}>PS EXCHANGE GAME</h1>
      </Header>
      <Content>
    <Switch>
      {
        routes.map(route=>(
          <AppRoute
          key={route.path}
          path={route.path}
          component={route.component}
          history={history}
          />
        ))
      }
    </Switch>
    </Content>
    <Footer style={{ textAlign: 'center', backgroundColor:'#001529' }}>
      <h4 style={{color:'White'}}>
      R3 ©2022
      </h4>
    </Footer>
    </Layout>
  );
}

export default App;
