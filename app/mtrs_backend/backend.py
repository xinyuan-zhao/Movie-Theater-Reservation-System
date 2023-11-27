from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import hashlib

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=['POST'])
def login():
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
        return jsonify({'message': 'User Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401
    
@app.route('/admin/login', methods=['POST'])
def adminlogin():
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
        return jsonify({'message': 'Admin Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)
