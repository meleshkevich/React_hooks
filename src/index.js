import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

 

const App = () => {
     

    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);

    if(visible) {
        return (
            <div>
                <button 
                onClick= {() => setValue((v) => v+1)}>+ </button>
                <button onClick= {() => setVisible(false)}>Hide </button>
                <PlanetInfo id={value}/>
                {/* <HookCounter value= {value} /> */}
            </div>
        );
    } else {
        return <button 
                onClick= {() => setVisible(true)}>Show</button>;
    }
}
// // const HookCounter = ({value}) => {
// //     return <p> {value } </p>;
// };

const PlanetInfo = ({id}) => {

    const [name, setName] = useState(null); 
    
    useEffect(() => {
        let cancelled = false;
        fetch(`https://swapi.dev/api/planets/${id}`)
        .then(res => res.json())
        .then(data => !cancelled && setName(data.name));

        return () => cancelled = true;
    }, [id]);    

    return (
        <div>{id} - {name}</div>
    );
};  
 
ReactDOM.render(<App />,
    document.getElementById('root'));