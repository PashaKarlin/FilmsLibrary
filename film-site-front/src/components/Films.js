import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Film from './Film'
import { Loader } from './Loader';
import { fetchFilms } from '../redux/actions';


const Films = () => {
    const films = useSelector(state => state.film.films)
    const loading = useSelector(state => state.app.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilms())
    }, [])

if(loading){
    return <Loader/>
}

const renderFilms = (film) => {
    return (
        <Film
            title={film.title}
            releaseYear={film.releaseYear}
            stars={film.stars}
            format={film.format}
            id={film._id}
        />
    )
}
return (
    <div>
        {films.map(renderFilms)}
    </div>
)
}

export default Films;