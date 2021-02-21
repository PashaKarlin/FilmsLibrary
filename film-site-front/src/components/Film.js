import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteFilm } from '../redux/actions'
import '../styles/film-style.css'

const Film = ({ title, releaseYear, stars, format, id }) => {
    const [aboutStatus, setAboutStatus] = useState(false)
    const [personalID,setID] = useState()
    const dispatch = useDispatch()
    const handleStatus = () => {
        setAboutStatus(!aboutStatus)
        console.log(stars)
    }
    const deleteHandler = (e) => {
        dispatch(deleteFilm(e.target.id))
    }
    
    return (
        <div className='card'>
            <div className='card-body'>
                <div>
                    <div>
                        {title}<br />
                        Year : {releaseYear}
                    </div>
                    {aboutStatus &&
                        <div>
                            <div>Stars: {stars + ''}</div>
                            <div>Format : {format}</div>
                            <button className='btn btn-danger' id={id} onClick={deleteHandler}>Delete Film</button>
                        </div>
                    }
                    {aboutStatus ?
                        <button className='btn btn-primary m-2' onClick={handleStatus}>Close Info</button> :
                        <button className='btn btn-primary m-2' onClick={handleStatus}>Show Info</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Film;