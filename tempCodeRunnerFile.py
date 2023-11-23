    insert_csv_to_mysql('./theater.csv', 'theater', ['theater_id', 'name', 'location']) 
    insert_csv_to_mysql('./movie.csv', 'movie', ['movie_id', 'title', 'director','release_date', 'duration'], ['release_date']) 
    
    insert_csv_to_mysql('./modifyMovie.csv', 'modifyMovie', ['admin_id', 'movie_id']) 
    
    insert_csv_to_mysql('./theater_room.csv', 'theater_room', ['room_id', 'available_seat','theater_id'])