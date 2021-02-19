import { modalStyles } from '../styles/modalStyles'
import Modal from 'react-modal'
import { useState } from 'react'

const ChooseFile = () => {
    const [showModal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(true)
    }
    const closeModalHandler = () => {
        setShowModal(false)
    }
    return (
        <div>
            <button className="btn btn-dark btn-lg" onClick={showModalHandler}>
                Choose File
            </button>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModalHandler}
                style={modalStyles}
            >
                <div class="mb-3">
                    <label for="formFile" className="form-label">Choose file with data</label>
                    <input className="form-control" type="file" id="formFile"/>
                    <button className = 'btn btn-danger'>Confirm</button>
                </div>
            </Modal>
        </div>
    )
}

export default ChooseFile;