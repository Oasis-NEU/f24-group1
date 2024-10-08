
function StarRating(props) {

    function getStyle() {
        if (props.rating < 1) {
            return {backgroundColor: "#FF0000"}
        }else if (props.rating < 2) {
            return {backgroundColor: "#FFA500"}
        }else if (props.rating < 3) {
            return {backgroundColor: "#FFFF00"}
        }else if (props.rating < 4) {
            return {backgroundColor: "#90EE90"}
        }else {
            return {backgroundColor: "#66CDAA"}
        }
    }


    
    return (
        <h1 className="star-rating">{props.rating.toFixed(1)}</h1>
    )
}


export default StarRating;