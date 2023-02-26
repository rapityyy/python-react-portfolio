from flask import Flask

app = Flask(__name__)

# # Home directory 
# @app.route("/")
# def home_page():
#     return "<h1>Welcome to HomePage!</h1>"

# API Routes
@app.route("/visitors")
def visitors():
    return {"visitors" : ["v1, v2, v3"]}

if __name__ == "__main__":
    app.run(debug=True)