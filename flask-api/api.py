from flask import Flask

app = Flask(__name__)

@app.route('/encode',methods=['POST'])
def encode_text():
    print("This is encoding the python structures function")


@app.route('/structures',methods=['POST'])
def get_structures():
    print("This is the fuction which produces python structures")

@app.route('/decode',methods=['POST'])
def decode_text():
    print("This is the function which decodes the python structures.")

app.run(host='0.0.0.0', port=8658, debug=True)
