from flask import Flask
from flask_restful import Resource,Api,reqparse

app = Flask(__name__)
api = Api(app)

toDoListDic ={
    1:{'task':'write','summery':'you need to write something'},
    2:{'task':'read','summery':'you need to read the book'}
}

class ToDoList(Resource):
    def get(self):
        return toDoListDic



parser = reqparse.RequestParser()
parser.add_argument('task', type=str, help='Add the Task Name',required=True)
parser.add_argument('summery', type=str, help='Add the summery for the task',required=True)


class ToDoListWithId(Resource):
    def get(self,id):
        if id in toDoListDic.keys():
            msg = toDoListDic[id]
        else:
            msg = {'data': f'Data is not exist for the id : {id}'}
        return msg

    def post(self,id):
        args = parser.parse_args()
        if id in toDoListDic.keys():
            msg  = {'data' : f'Data already exist for the id : {id}'}
        else:
            toDoListDic[id] = {'task':args['task'],'summery':args['summery']}
            msg = toDoListDic[id]
        return msg

    def put(self,id):
        args = parser.parse_args()
        if id not in toDoListDic.keys():
            msg = {'data': f'Data not exist for the id : {id}'}
        else:
            toDoListDic[id] = {'task': args['task'], 'summery': args['summery']}
            msg = toDoListDic[id]
        return msg

    def delete(self,id):
        if id not in toDoListDic.keys():
            msg = {'data': f'Data not exist for the id : {id}'}
        else:
            msg = toDoListDic[id]
            toDoListDic.pop(id)
            # msg = {"date":f'{id} deleted successfully'}
        return msg

api.add_resource(ToDoList,'/todoLists')
api.add_resource(ToDoListWithId,'/todoList/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)