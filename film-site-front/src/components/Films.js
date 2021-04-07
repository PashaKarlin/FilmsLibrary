import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Film from './Film'
import { Loader } from './Loader';
import { fetchFilms } from '../redux/actions';


const Films = ({ searchTerm, label }) => {
    const films = useSelector(state => state.film.films)
    const loading = useSelector(state => state.app.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilms())
    }, [])

    if (loading) {
        return <Loader />
    }
    const filtration = (items) => {
        if (label) {
            return (
                items.filter(item => {
                    if (searchTerm === '') {
                        return item
                    } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return item
                    }
                })
            )
        } else {
            return (
                items.filter(item => {
                    if (searchTerm === '') {
                        return item
                    } else if (item.stars.includes(searchTerm)) {
                        return item
                    }
                })
            )
        }

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
            {filtration(films).map(renderFilms)}
        </div>
    )
}

export default Films;