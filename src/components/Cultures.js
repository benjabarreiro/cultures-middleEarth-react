import Culture from './Culture';

const Cultures = ({ cultures, onDelete }) => {
    return(
        <>
        {cultures.map((culture, index) => (
            <Culture key={index} culture={culture} onDelete={onDelete} />
        ))}
        </>
    )
}

export default Cultures;