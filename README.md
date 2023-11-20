# ds5110_group_project
ds 5110 group project in 2023 fall 

# Project Proposal

## Project Title
**SmartCine: Movie Theater Reservation System**

## Project Participants
Our team comprises two members, Xinyuan Zhao and Xiaoyang Fei, each with specific responsibilities.

- **Xinyuan Zhao:** 
  - Designed and implemented the beta version of the SmartCine database structure and relational schema.
  - Will be responsible for future development of User, Admin, Customer, Review, Card, and Ticket tables’ design, ERD, decomposition, and related application functionality.

- **Xiaoyang Fei:** 
  - Determined the overall system architecture, including platform and library selections.
  - Will be responsible for future development of Payment, Movie, Theater, Performance, Schedule, Theater_room tables’ design, ERD, decomposition, and related application functionality.

## System Description
SmartCine is an intuitive movie theater reservation system designed to enhance the movie-going experience for users and streamline administrative tasks for theater operators using MySQL and Python. The system will enable users to search for movies, view detailed show information, reserve tickets, register cards, and receive electronic tickets. Administrators will manage movie data and schedules and access insights like popular movies and monthly revenue statistics.

## Database Design
### ERD
The ERD can be found at the end of this document.

### Relational Schema
1. **Admin(admin_id, hire_date, admin_name, password)**
   - Primary Key: admin_id
   - No Foreign Key in this table.
2. **ModifyMovie(admin_id, movie_id)**
   - Primary Key: admin_id, movie_id
   - Foreign Keys: 
     - movie_id references Movie(movie_id)
     - admin_id references Admin(admin_id)
3. **Customer(customer_id, password, email)**
   - Primary Key: customer_id
   - No Foreign Key in this table.
4. **Review(review_id, rating, comment, date, user_id)**
   - Primary Key: review_id
   - Foreign Key: user_id references Customer(user_id)
5. **Card(card_id, register_date, member_points, user_id)**
   - Primary Key: card_id
   - Foreign Key: user_id references Customer(user_id)
6. **BuyTicket(ticket_id, customer_id)**
   - Primary Key: ticket_id, customer_id
   - Foreign Keys: 
     - ticket_id references Ticket(ticket_id)
     - customer_id references Customer(customer_id)
7. **Ticket(ticket_id, price, seat_num, added_points, card_id, schedule_id, movie_id)**
   - Primary Key: ticket_id
   - Foreign Keys:
     - card_id references Card(card_id)
     - schedule_id references Schedule(schedule_id)
     - movie_id references Movie(movie_id)
8. **Payment(payment_id, card_type, time, payment_amount, ticket_id)**
   - Primary Key: payment_id
   - Foreign Key: ticket_id references Ticket(ticket_id)
9. **Movie(movie_id, title, director, release_date, duration)**
   - Primary Key: movie_id
   - No Foreign Key in this table.
10. **Theater(theater_id, name, location)**
    - Primary Key: theater_id
    - No Foreign Key in this table.
11. **Performance(performance_id, month, year, num_of_viewers, revenues, theater_id)**
    - Primary Key: performance_id
    - Foreign Key: theater_id references Theater(theater_id)
12. **Schedule(schedule_id, time_slot, date, movie_id, room_id)**
    - Primary Key: schedule_id
    - Foreign Keys:
      - movie_id references Movie(movie_id)
      - room_id references Theater_room(room_id)
13. **Theater_room(room_id, available_seat, theater_id)**
    - Primary Key: room_id
    - Foreign Key: theater_id references Theater(theater_id)

### Relationships
- Customer to Review: One to many; a customer can write multiple reviews.
- Customer to Card: One to one; a customer can register one card.
- Card to Ticket: One to many; a card can buy multiple tickets.
- Ticket to Payment: One to one; a ticket for one payment transaction.
- Admin to Theater: One to many; an admin can manage multiple theaters.
- Theater to Performance: One to many; a theater can host multiple performances.
- Theater to Theater_room: One to many; a theater can have multiple rooms.
- Movie to Theater_room: Many to many; a movie can be shown in multiple rooms.
- Movie to Schedule: One to many; a movie can have multiple schedules.
- Theater_room to Schedule: One to many; a room can have multiple schedules.

## Data Sources
Data will be initially collected from [IMDb Dataset on Kaggle](https://www.kaggle.com/datasets/komalkhetlani/imdb-dataset). We will extract 100 lines of data, focusing on
