import React,{ useState } from 'react';
import Data from './Data';
import List from './List';

const App = () => {

    const [people, setPeople] = useState(Data);

    return (
<main>
    <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}> Clear All</button>
    </section>
</main>
    )
}

export default App

// source = https://www.youtube.com/watch?v=a_7Z7C_JCyo
