import pandas as pd
import mysql.connector
from mysql.connector import Error



def insert_csv_to_mysql(csv_file_path, table_name, column_names, date_columns = None):
    try:
        data = pd.read_csv(csv_file_path)

        # Debugging: Print column types before conversion
        print("Data types before conversion:", data.dtypes)
        # Convert date columns to the correct format (YYYY-MM-DD)
        if date_columns:
            for date_col in date_columns:
                data[date_col] = pd.to_datetime(data[date_col]).dt.strftime('%Y-%m-%d')

        # Convert int64 columns to Python's native int
        for col in data.columns:
            if pd.api.types.is_integer_dtype(data[col]):
                data[col] = data[col].astype(int)

        
        # Debugging: Print column types before insertion
        print("Data types after conversion:", data.dtypes)

        connection = mysql.connector.connect(host='localhost', database='smartcine', user='root', password='Shinyway001.')
        if connection.is_connected():
            cursor = connection.cursor()
            insert_query = f"INSERT INTO {table_name} ({', '.join(column_names)}) VALUES ({', '.join(['%s'] * len(column_names))})"
            
            for _, row in data.iterrows():
                # Convert each value to a type that's compatible with MySQL
                formatted_row = [int(row[col]) if pd.api.types.is_integer_dtype(data[col]) else row[col] for col in column_names]
                cursor.execute(insert_query, formatted_row)
                connection.commit()

            print("Data inserted successfully")

    except Error as e:
        print("Error while connecting to MySQL", e)

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


if __name__ == "__main__":
    """
    csv_file_path = 'path_to_your_csv_file.csv'
    table_name = 'your_table_name'
    column_names = ['column1', 'column2', 'column3']  
    List of column names in the same order as in your CSV
    insert_csv_to_mysql(csv_file_path, table_name, column_names)
    """
    # insert_csv_to_mysql('./admin.csv', 'admin', ['admin_id', 'hire_date', 'admin_name', 'password'], ['hire_date'])
    # insert_csv_to_mysql('./customer.csv', 'customer', ['customer_id', 'password', 'email']) 
    # insert_csv_to_mysql('./theater.csv', 'theater', ['theater_id', 'name', 'location']) 
    # insert_csv_to_mysql('./movie.csv', 'movie', ['movie_id', 'title', 'director','release_date', 'duration'], ['release_date']) 
    # insert_csv_to_mysql('./modifyMovie.csv', 'modifyMovie', ['admin_id', 'movie_id']) 
    # insert_csv_to_mysql('./theater_room.csv', 'theater_room', ['room_id', 'available_seat','theater_id']) 
    # insert_csv_to_mysql('./review.csv', 'review', ['review_id', 'rating','comment','date', 'customer_id', 'movie_id'], ['date']) 
    # insert_csv_to_mysql('./card.csv', 'card', ['card_id', 'register_date','member_points','customer_id'], ['register_date']) 
    # insert_csv_to_mysql('./schedule.csv', 'schedule', ['schedule_id', 'time_slot','date','room_id'], ['date']) 
    
    # insert_csv_to_mysql('./ticket.csv', 'ticket', ['ticket_id','price','seat_num','card_id','schedule_id','movie_id']) 
    # insert_csv_to_mysql('./buyTicket.csv', 'buyTicket', ['ticket_id','customer_id']) 
    insert_csv_to_mysql('./data/payment.csv', 'payment', ['payment_id','card_type','ticket_id']) 


    # execute_sql_from_file(sql_file_path)



    






    # def execute_sql_from_file(file_path):
    # """
    # Executes SQL commands from a file on a MySQL database.
    # :param file_path: Path to the SQL file containing the SQL commands.
    # :param host_name: Host name of the MySQL server.
    # :param db_name: Name of the MySQL database.
    # :param user_name: Username for the MySQL database.
    # :param user_password: Password for the MySQL database.
    # """
    # try:
    #     # Read SQL commands from the file
    #     with open(file_path, 'r') as file:
    #         sql_commands = file.read()

    #     # Connect to the MySQL database
    #     connection = mysql.connector.connect(host='localhost', database='smartcine',
    #                                         user='root', password='Shinyway001.')
    #     if connection.is_connected():
    #         cursor = connection.cursor()

    #         # Execute each SQL command
    #         for command in sql_commands.split(';'):
    #             if command.strip():
    #                 cursor.execute(command)
    #                 connection.commit()

    #         print("SQL commands executed successfully")

    # except Error as e:
    #     print("Error while connecting to MySQL or executing SQL commands", e)

    # finally:
    #     if connection.is_connected():
    #         cursor.close()
    #         connection.close()
    #         print("MySQL connection is closed")