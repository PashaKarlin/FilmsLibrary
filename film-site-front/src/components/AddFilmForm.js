import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { addFilm, updateFormat, updateTitle, updateStars, updateYear } from '../redux/actions'
import { modalStyles } from '../styles/modalStyles'
import '../styles/form.css'
const AddFilm = () => {

    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const film = useSelector(state => ({
        name: state.film.name,
        year: state.film.year,
        stars: state.film.stars,
        format: state.film.format,
    }))
    const showModalHandler = () => {
        setShowModal(true)
    }
    const closeModalHandler = () => {
        setShowModal(false)
    }
    const setName = (e) => {
        const value = e.target.value
        dispatch(updateTitle(value))
    }
    const setYear = (e) => {
        const value = e.target.value
        dispatch(updateYear(value))
    }
    const setStars = (e) => {
        const value = e.target.value
        dispatch(updateStars(value))
    }
    const setFormat = (e) => {
        const value = e.target.value
        dispatch(updateFormat(value))
    }
    const submitHandler = () => { 
        dispatch(addFilm())
        setShowModal(false) 
    }
    return (
        <div>
            <button className="btn btn-dark btn-lg" onClick={showModalHandler}>
                Add Film
            </button>
            <Modal isOpen={showModal}
                onRequestClose={closeModalHandler}
                style={modalStyles}
            >
                <form>
                    <div className='form_item'>
                        <label>Title:</label>
                        <input
                            className='form_input'
                            type='text'
                            onChange={setName}
                            value={film.title}
                        />
                    </div>
                    <div className='form_item'>
                        <label>Stars:</label>
                        <input
                            className='form_input'
                            type='text'
                            onChange={setStars}
                            value={film.stars}
                        />
                    </div>
                    <div className='form_item'>
                        <label>Year:</label>
                        <input
                            className='form_input'
                            type='text'
                            onChange={setYear}
                            value={film.year}
                        />
                    </div>
                    <div className='form_item'>
                        <label>Format:</label>
                        <input
                            className='form_input'
                            type='text'
                            onChange={setFormat}
                            value={film.format}
                        />
                    </div>
                </form>
                <button onClick={submitHandler} className='btn btn-danger'>Add Film</button>
            </Modal>

        </div>
    )
}

export default AddFilm;