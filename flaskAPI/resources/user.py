from flask import jsonify
from flask_jwt_extended import create_access_token, current_user, jwt_required, get_jwt_identity
from flask_restful import Resource,reqparse
from models.user import UserModel
from util.encoder import AlchemyEncoder
import json


class User(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('username', type=str, required=True, help='Username cannot be left blank')
    parser.add_argument('password', type=str, required=True, help='Username cannot be left blank')

    @jwt_required()
    def get(self):
        currentUser = get_jwt_identity()
        jsonobject = json.loads(currentUser)
        return {"username":jsonobject["username"],"userID":jsonobject["userID"]}

    def post(self):
        data = User.parser.parse_args()
        username = data['username']
        password = data['password']
        user = UserModel.query.filter_by(username=username).one_or_none()
        if not user or not user.check_password(password):
            return {'message': "wrong username or password"}, 401
        access_token = create_access_token(identity=json.dumps(user, cls=AlchemyEncoder))
        return jsonify(access_token=access_token)

class UserRegister(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('username', type=str, required=True, help='Username cannot be left blank')
    parser.add_argument('password', type=str, required=True, help='Username cannot be left blank')
    parser.add_argument('firstName', type=str, required=True, help='Firstname cannot be left blank')
    parser.add_argument('lastName', type=str, required=True, help='Lastname cannot be left blank')

    def post(self):
        data = UserRegister.parser.parse_args()
        if UserModel.find_by_username(data['username']):
            return {'message': 'username already exists, please try another'}, 400
        user = UserModel(**data)
        user.save_to_db()
        return {"message": "User has been successfully created"}, 201