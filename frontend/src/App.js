import '../src/styles/app.css';

import {Routes, Route, Link} from 'react-router-dom'

import MessagesList from "./components/messageList/messagesList";
import Form from "./components/form/form";
import Response from "./components/response/response";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Form/>}/>
                <Route path={'/messages'} element={<Response/>}/>

            </Routes>
        </div>
    );
}

export default App;
