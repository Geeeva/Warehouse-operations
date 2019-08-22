import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Home from '../components/Home/Home';
import Documents from '../components/Documents/Documents';
import About from '../components/About/About';
import NotFound from '../components/NotFound/NotFound';
import Footer from '../components/Footer/Footer';
import Cover from '../assets/images/cover.png';
import documents from '../data/documents.json';
import '../assets/sass/main.scss';

class App extends Component {
    state = { 
        directionName: {
            name: 'asc'
        },
        documents: documents
    }

    sortByStringHandler = key => {
        this.setState({
            documents: documents.sort((a, b) => {
                const asc = this.state.directionName[key] === 'asc';
                if (a[key] < b[key]) {
                    return asc ? -1 : 1;
                } else if (a[key] > b[key]) {
                    return asc ? 1 : -1;
                } else {
                    return 0;
                }
            }),

            directionName: {
                [key]: this.state.directionName[key] === 'asc'
                ? 'desc'
                : 'asc'
            }
        })
    }

    render () {
        return (
            <Router basename="/Warehouse-operations/">
                <header>
                    <div className="container-fluid">
                        <div className="container">
                            <div className="cover-wrapper">
                                <img src={Cover} alt="warehouse"/>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="container-fluid">
                        <div className="container">
                            <div className="main-wrapper">         
                                <Menu/>
                                <Switch>
                                    <Route className="home-route" path="/" exact strict component={Home}/>
                                    <Route 
                                        className="documents-route" 
                                        path="/documents" 
                                        exact strict
                                        render={(props) => 
                                        <Documents
                                            data={this.state.documents} 
                                            sortByStringHandler={this.sortByStringHandler}
                                            {...props} />}
                                    />
                                 
                                    <Route className="about-route" path="/about" exact strict component={About}/>
                                    <Route className="not-found" component={NotFound} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </Router>
        )
    }
}
export default App;
