import React from 'react';
import './App.css';
import { RecoilRoot } from "recoil";
import { TodosConnected } from "./components/Todos/Todos.connected";

function App() {

    return (
        <RecoilRoot>
            <div className="App">
                <header className="App-header">
                    <div className="todos">
                        <TodosConnected />
                    </div>
                </header>
            </div>
        </RecoilRoot>
    );
}

export default App;
