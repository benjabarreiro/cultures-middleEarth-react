const Culture = ({ culture, onDelete }) => {
    return(
        <div>
            <h3>
                {culture.name}
            </h3>
            <button onClick={() => onDelete(culture.id)}>Delete</button>
        </div>
    )
}

export default Culture;