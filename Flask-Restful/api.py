
from email import message
from flask import Flask, request
from flask_restful import Resource, Api, reqparse, abort

app = Flask(__name__)
api = Api(app)

todos = {
    1: {"task": "write helloworld program", "summary": "write hello world in python"},
    2: {"task": "send email to boss", "summary": "remember he is the boss"},
    3: {"task": "delegate tasks to interns", "summary": "interns are experienced in python"}
}

task_post_args = reqparse.RequestParser()
task_post_args.add_argument("task", type=str, help="Task is required", required=True)
task_post_args.add_argument("summary", type=str, help="summary is required", required=True)

task_update_args = reqparse.RequestParser()
task_post_args.add_argument("task", type=str)
task_post_args.add_argument("summary", type=str)

class ToDoList(Resource):
    def get(self):
        return todos

class Todo(Resource):
    def get(self, todo_id):
        return todos[todo_id]

    def post(self, todo_id):
        args = task_post_args.parse_args()
        if todo_id in todos:
            abort(409)
        todos[todo_id] = {"task": args["task"], "summary": args["summary"]}
        return todos[todo_id]

    def put(self, todo_id):
        args = task_update_args.parse_args()
        if todo_id not in todos:
            abort(404, message="Task does not exist, cannot update")
        if args['task']:
            todos['todo_id']['task'] = args['task']

        if args['summary']:
            todos['todo_id']['summary'] = args['summary']
        return todos[todo_id]


api.add_resource(Todo, '/todos/<int:todo_id>')
api.add_resource(ToDoList, '/todos')

if __name__ == '__main__':
    app.run(debug=True)