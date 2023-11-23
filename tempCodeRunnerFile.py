   insert_csv_to_mysql('./admin.csv', 'admin', ['admin_id', 'hire_date', 'admin_name', 'password'], ['hire_date'])
    insert_csv_to_mysql('./customer.csv', 'customer', ['customer_id', 'password', 'email']) 
    insert_csv_to_mysql('./theater.csv', 'theater', ['theater_id', 'name', 'location']) 
    insert_csv_to_mysql('./movie.csv', 'movie', ['movie_id', 'title', 'director','release_date', 'duration'], ['release_date']) 
    insert_csv_to_mysql('./modifyMovie.csv', 'modifyMovie', ['admin_id', 'movie_id']) 
    insert_csv_to_mysql('./theater_room.csv', 'theater_room', ['room_id', 'available_seat','theater_id']) 
    insert_csv_to_mysql('./review.csv', 'review', ['review_id', 'rating','comment','date', 'customer_id', 'movie_id'], ['date']) 
    insert_csv_to_mysql('./card.csv', 'card', ['card_id', 'register_date','member_points','customer_id'], ['register_date']) 
    
