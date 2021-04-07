import React, { useState } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addFilm } from '../redux/actions'
import { modalStyles } from '../styles/modalStyles'
import '../styles/form.css'


const AddFilm = () => {

    const [showModal, setShowModal] = useState(false)
    const { handleSubmit, register } = useForm()
    const dispatch = useDispatch()

    const showModalHandler = () => {
        setShowModal(true)
    }
    const closeModalHandler = () => {
        setShowModal(false)
    }

    const onSubmit = film => {
        dispatch(addFilm(film))
        setShowModal(false)
    }
    return (
        <div>
            <button className="btn btn-dark btn-lg" onClick={showModalHandler}>
                Add Film
            </button>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModalHandler}
                style={modalStyles}
                closeTimeoutMS={500}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form_item'>
                        <label>Title:</label>
                        <input
                            name='title'
                            className='form_input'
                            type='text'
                            ref={register({ required: true })}
                        />
                    </div>
                    <div className='form_item'>
                        <label>Stars:</label>
                        <input
                            name='stars'
                            className='form_input'
                            type='text'
                            ref={register({ required: true })}
                        />
                    </div>
                    <div className='form_item'>
                        <label>Year:</label>
                        <input
                            name='releaseYear'
                            className='form_input'
                            type='text'
                            ref={register({ required: true })}
                        />
                    </div>
                    <div className='form_item'>
                        <label>Format:</label>
                        <input
                            name='format'
                            className='form_input'
                            type='text'
                            ref={register({ required: true })}
                        />
                    </div>
                    <input type='submit' />
                </form>

            </Modal>

        </div>
    )
}

export default AddFilm;