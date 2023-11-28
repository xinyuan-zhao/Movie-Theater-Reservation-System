import React, { useState, useEffect} from 'react';
import axios from 'axios';
import DataTable from '../components/DataTable';

function Dashboard() {
    const [movies, setMovies] = useState([]);
    const fetchMovies = () => {
        axios.get('http://localhost:5000/movies')  // URL to your Flask API
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => console.error('Error:', error));
    };
    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <DataTable  rows={movies}/>
    );
}

export default Dashboard;
