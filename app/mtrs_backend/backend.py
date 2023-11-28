from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

@app.route('/signin', methods=['POST'])
def signin():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    db = mysql.connector.connect(
        host="localhost",
        user="mtrs",
        password="ds5110",
        database="smartcine"
    )

    cursor = db.cursor(dictionary=True)

    cursor.execute('SELECT * FROM customer WHERE email = %s AND password = %s', (email, password))

    user = cursor.fetchone()
    cursor.close()
    db.close()

    if user:
        return jsonify({'message': 'User signin successful'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401
    
@app.route('/admin/signin', methods=['POST'])
def adminsignin():
    data = request.json
    admin_name = data.get('email')
    password = data.get('password')
    db = mysql.connector.connect(
        host="localhost",
        user="mtrs",
        password="ds5110",
        database="smartcine"
    )

    cursor = db.cursor(dictionary=True)

    cursor.execute('SELECT * FROM admin WHERE admin_name = %s AND password = %s', (admin_name, password))

    admin = cursor.fetchone()
    cursor.close()
    db.close()

    if admin:
        return jsonify({'message': 'Admin signin successful'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    try:
        db = mysql.connector.connect(
            host="localhost",
            user="mtrs",
            password="ds5110",
            database="smartcine"
        )
        cursor = db.cursor(dictionary=True)

        cursor.execute('SELECT * FROM customer WHERE email = %s', (email,))
        user = cursor.fetchone()
        if user:
            return jsonify({'message': 'Email already exists'}), 409
        else:
            cursor.execute('INSERT INTO customer (email, password) VALUES (%s, %s)', (email, password))
            db.commit()
            return jsonify({'message': 'User signup successful'}), 200
    finally:
        cursor.close()
        db.close()

@app.route('/movies', methods=['GET'])
def get_movies():
    try:
        db = mysql.connector.connect(
            host="localhost",
            user="mtrs",
            password="ds5110",
            database="smartcine"
        )
        cursor = db.cursor(dictionary=True)

        cursor.execute('SELECT * FROM movie')
        movies = cursor.fetchall()
        return jsonify(movies), 200
    except mysql.connector.Error as err:
        app.logger.error(f'Error: {err}')
        return jsonify({'message': f'Database connection error: {err}'}), 500
    finally:
        cursor.close()
        db.close()


if __name__ == '__main__':
    app.run(debug=True)
