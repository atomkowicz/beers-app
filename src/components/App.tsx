import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../assests/scss/index.css';
import List from './List';
import ListItem from './ListItem';

class App extends React.Component<any, any> {

    public render() {

        return (
            <div className="App">
                <div className="container">
                    <Switch>
                        <Route exact={true}
                               path="/"
                               component={List}/>

                        <Route exact={true}
                               path="/bier/:id"
                               component={ListItem}/>

                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
