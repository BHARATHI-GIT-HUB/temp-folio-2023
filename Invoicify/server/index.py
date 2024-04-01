from flask import Flask, request, jsonify
from docquery import document, pipeline
import tempfile
import os

app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    return "Welcome to the document query service!"

@app.route('/query', methods=['POST'])
def query_document():

    # Check if the POST request has a file part
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'})

    # Get the file from the POST request
    file = request.files['image']

    # If the user does not select a file, the browser submits an empty file without a filename
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # Save the file to a temporary directory
    temp_dir = tempfile.mkdtemp()
    temp_file = os.path.join(temp_dir, file.filename)
    file.save(temp_file)

    # Load document from the saved file
    doc = document.load_document(temp_file)

    # Extract questions from request
    questions = request.form['questions']

    print("request",doc , questions)
    # Perform question answering
    answers = {}
    p = pipeline('document-question-answering')

    for q in [questions]:
        answers[q] = p(question=q, **doc.context)
        print("Question :" , questions,"🔥 answer : " , answers , q )

    # Remove the temporary directory and file
    os.remove(temp_file)
    os.rmdir(temp_dir)

    return jsonify(answers)


if __name__ == '__main__':
    app.run(debug=True)
