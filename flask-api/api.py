from flask import Flask
import os
app = Flask(__name__)

@app.route('/encode',methods=['POST'])
def encode_text():
    print("This is encoding the python structures function")


@app.route('/structures',methods=['POST'])
def get_structures():
    send_dict={}
    print("This is the fuction which produces python structures")
    text=eval(request.json["asn_text"])
    file = open("test.asn1", "w")
    for i in text:
        file.write(i)
        file.write("\n")
    file.close()
    os.system("python pycrate_asn1compile.py -i test.asn1")
    file_new = open("output.py", "r")
    output=file_new.read()
    sending_list=output.split("\n")
    send_dict["output"]=sending_list
    return jsonify(send_dict)

@app.route('/decode',methods=['POST'])
def decode_text():
    print("This is the function which decodes the python structures.")

app.run(host='0.0.0.0', port=8658, debug=True)
