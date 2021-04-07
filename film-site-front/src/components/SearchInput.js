
import '../styles/search_input.css'
const SearchInput = ({ setLabel, setSearchTerm, label }) => {
    

    const labelHandler = (e) => {
        setLabel(!label)
    }
    const changeHandler = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className='input-group'>
            <input
                onChange={changeHandler}
                type="text"
                className="form-control item"
                placeholder="Search..."
                aria-label="Recipient's username with two button addons"
            />
            <div className="input-group-append" id="button-addon4">
                <button
                    className="btn btn-dark btn-lg item button"
                    type="button"
                    onClick={labelHandler}
                >
                    {label ? <h5 className='name_of_button'>Title</h5 > : <h5 className='name_of_button'>Stars</h5>}
                </button>
            </div>
        </div>
    )
}

export default SearchInput;