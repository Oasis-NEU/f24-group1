import React, {useState, useContext, useEffect} from 'react';
import { FilterContext } from './App';

function Filter(props) {

    const {filters, setFilters} = useContext(FilterContext);

    const [clicked, setClicked] = useState(false);

    const [selected, setSelected] = useState(null);

    const handleClick = (index) => {
        setSelected(index);
        setFilters(f => {
            const newInfo = [...f];
            console.log('filterIndex = '+props.filterIndex + " which is "+ (typeof props.options));
            newInfo[props.filterIndex] = {[props.name] : props.options[selected]};
            console.log("new info is"+newInfo);
            return newInfo;
            
        })
        console.log(filters);
    }
    

    function renderOptions() {
        return (
            <div className="pop-up">
            {
                props.options.map((name, index)=> {
                    const style = (selected === index) ? {backgroundColor: "black", color: "white"} : {};
                   
                    return <button onClick={() => handleClick(index)} style={style} key={name+index}>{name}</button>
                })
            }
            </div>
        )
    }

    return (
        <div className="filter-section">
            <button onClick={() => setClicked(c => !c)}>{props.name}</button>
            {clicked && (
                renderOptions()
            )}
        </div>
    )
}

export default Filter;