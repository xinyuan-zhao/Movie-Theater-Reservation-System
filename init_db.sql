-- init_db.sql
CREATE DATABASE IF NOT EXISTS SmartCine;
USE SmartCine;


CREATE TABLE Admin (
    admin_id INT PRIMARY KEY,
    hire_date DATE,
    admin_name VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE Movie (
    movie_id INT PRIMARY KEY,
    title VARCHAR(255),
    director VARCHAR(255),
    release_date DATE,
    duration INT
);

CREATE TABLE Customer (
    customer_id INT PRIMARY KEY,
    password VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE Review (
    review_id INT PRIMARY KEY,
    rating INT,
    comment TEXT,
    date DATE,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Customer(customer_id)
);

CREATE TABLE Card (
    card_id INT PRIMARY KEY,
    register_date DATE,
    member_points INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Customer(customer_id)
);

CREATE TABLE Theater (
    theater_id INT PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255)
);

CREATE TABLE Performance (
    performance_id INT PRIMARY KEY,
    month INT,
    year INT,
    num_of_viewers INT,
    revenues DECIMAL,
    theater_id INT,
    FOREIGN KEY (theater_id) REFERENCES Theater(theater_id)
);

CREATE TABLE Theater_room (
    room_id INT PRIMARY KEY,
    available_seat INT,
    theater_id INT,
    FOREIGN KEY (theater_id) REFERENCES Theater(theater_id)
);

CREATE TABLE Schedule (
    schedule_id INT PRIMARY KEY,
    time_slot TIME,
    date DATE,
    movie_id INT,
    room_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movie(movie_id),
    FOREIGN KEY (room_id) REFERENCES Theater_room(room_id)
);

CREATE TABLE Ticket (
    ticket_id INT PRIMARY KEY,
    price DECIMAL,
    seat_num VARCHAR(255),
    added_points INT,
    card_id INT,
    schedule_id INT,
    movie_id INT,
    FOREIGN KEY (card_id) REFERENCES Card(card_id),
    FOREIGN KEY (schedule_id) REFERENCES Schedule(schedule_id),
    FOREIGN KEY (movie_id) REFERENCES Movie(movie_id)
);

CREATE TABLE Payment (
    payment_id INT PRIMARY KEY,
    card_type VARCHAR(255),
    time TIME,
    payment_amount DECIMAL,
    ticket_id INT,
    FOREIGN KEY (ticket_id) REFERENCES Ticket(ticket_id)
);

CREATE TABLE BuyTicket (
    ticket_id INT,
    customer_id INT,
    PRIMARY KEY (ticket_id, customer_id),
    FOREIGN KEY (ticket_id) REFERENCES Ticket(ticket_id),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

CREATE TABLE ModifyMovie (
    admin_id INT,
    movie_id INT,
    PRIMARY KEY (admin_id, movie_id),
    FOREIGN KEY (movie_id) REFERENCES Movie(movie_id),
    FOREIGN KEY (admin_id) REFERENCES Admin(admin_id)
);
