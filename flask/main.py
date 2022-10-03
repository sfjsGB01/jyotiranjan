from flask import Flask
from flask_restful import Resource,Api

app = Flask(__name__)
api = Api(app)

class helloWorld(Resource):
    def get(self):
        return {'data':'hello world'}

class helloWorldwithName(Resource):
    def get(self,name):
        return {'data':f'hello world{name}'}

api.add_resource(helloWorld,'/helloWorld')
api.add_resource(helloWorldwithName,'/helloWorld/<string:name>')

if __name__ == '__main__':
    app.run(debug=True)

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
