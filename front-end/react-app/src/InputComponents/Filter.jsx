function Filter(props) {

    
    const [clicked, setClicked] = useState(false);
  
   
    function renderOptions() {
        return (
            <div className="pop-up">
            {
                
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