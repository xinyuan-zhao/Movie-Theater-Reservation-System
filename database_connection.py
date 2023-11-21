import pymysql

# Function to execute an SQL file
def execute_sql_file(filepath, connection):
    with open(filepath, 'r') as sql_file:
        sql_script = sql_file.read()
    with connection.cursor() as cursor:
        for statement in sql_script.split(';'):  # Assuming SQL statements are separated by ';'
            if statement.strip():
                cursor.execute(statement)


if __name__ == "__main__":

    # Connect to MySQL without specifying a database
    connection = pymysql.connect(host='localhost',
                                user='root',
                                password='Shinyway001.')

    try:
        with connection.cursor() as cursor:
            # Create a new database named 'smartcine'
            cursor.execute("CREATE DATABASE IF NOT EXISTS smartcine")
            print("Database created successfully")
    except pymysql.MySQLError as e:
        print(f"An error occurred: {e}")
    # finally:
        # connection.close()

    try:
        # Execute the SQL file to create tables
        execute_sql_file('init_db.sql', connection)
        connection.commit()  # Commit changes
        print("Tables created successfully.")
    except pymysql.MySQLError as e:
        print(f"An error occurred: {e}")
    finally:
        connection.close()  # Close the connection

