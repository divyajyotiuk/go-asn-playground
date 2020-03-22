from flask import Flask, jsonify, Request, request
from pycrate_asn1compile import execute
app = Flask(__name__)

@app.route('/encode',methods=['POST'])
def encode_text():
    print("This is encoding the python structures function")


@app.route('/structures',methods=['POST'])
def get_structures():
    send_dict={}
    print("This is the fuction which produces python structures")
    print("asn text ------->", request.data)
    text=eval(request.data.decode())
    text=text["asn_text"]
    text=text.split("\n")
    file = open("test.asn1", "w")
    for i in text:
        file.write(i)
        file.write("\n")
    file.close()
    execute()
    file_new = open("out.py", "r")
    output=file_new.read()
    send_dict["output"]=output
    return jsonify(send_dict)

@app.route('/decode',methods=['POST'])
def decode_text():
    print("This is the function which decodes the python structures.")

app.run(host='0.0.0.0', port=8658, debug=True)
