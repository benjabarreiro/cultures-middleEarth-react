import { useState } from 'react';

const AddCulture = ({ addCulture }) => {

    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        addCulture({ name })

        setName('')
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label>Culture's name</label>
                <input type="text" value={name} placeholder="Add culture" onChange={(e) => setName(e.target.value)} />
            </div>
            <input type="submit" value="Save culture" />
        </form>
    )
}

export default AddCulture;