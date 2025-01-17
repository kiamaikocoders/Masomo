from flask import Blueprint, request, jsonify
from models import db, Student

# Create Blueprint for routes
app = Blueprint('app', __name__)

# Create Student
@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    new_student = Student(
        name=data['name'], email=data['email'], grade=data['grade']
    )
    db.session.add(new_student)
    db.session.commit()
    return jsonify({"message": "Student added successfully!"}), 201


# Read All Students
@app.route('/students', methods=['GET'])
def get_students():
    students = Student.query.all()
    output = []
    for student in students:
        output.append({'id': student.id, 'name': student.name, 'email': student.email, 'grade': student.grade})
    return jsonify(output)


# Update Student
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    student = Student.query.get(id)
    data = request.get_json()
    if not student:
        return jsonify({"message": "Student not found!"}), 404
    student.name = data['name']
    student.email = data['email']
    student.grade = data['grade']
    db.session.commit()
    return jsonify({"message": "Student updated successfully!"})


# Delete Student
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    student = Student.query.get(id)
    if not student:
        return jsonify({"message": "Student not found!"}), 404
    db.session.delete(student)
    db.session.commit()
    return jsonify({"message": "Student deleted successfully!"})
