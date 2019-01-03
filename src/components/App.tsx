import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../assests/css/index.css';
import '../assests/css/modal.css';
import Header from  "./Header";
import ItemDetailsContainer from "./ItemDetailsContainer";
import Layout from './Layout';
import List from './List';

class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <Layout>
                    <Header/>
                    <Switch>
                        <Route exact={true}
                               path="/"
                               component={List}/>
                        <Route exact={true}
                               path="/details/:id"
                               component={ItemDetailsContainer}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
