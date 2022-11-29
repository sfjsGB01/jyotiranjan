from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS

from config import mysqlConfig
from resources.user import User, UserRegister
from resources.store import Store, StoreList
from models.item import ItemModel
from models.store import StoreModel
from models.user import UserModel
from resources.item import Item, ItemList
from flask_jwt_extended import JWTManager
from models.user import UserModel

app = Flask(__name__)
CORS(app)

# Setup SQLAlchemy connection
app.config['SQLALCHEMY_DATABASE_URI'] = mysqlConfig
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Setup Flask JWT extension
app.config["JWT_SECRET_KEY"] = "my.secret.key"

jwt = JWTManager(app)
api = Api(app)


@app.before_first_request
def create_tables():
    # have the logic to create tables
    from db import db
    print("inside before first request")
    db.init_app(app)
    db.create_all()


# Declare routes
# Item related routes
api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items/<int:store_id>')
# Store get set
api.add_resource(Store, '/store/<string:storeName>')
api.add_resource(StoreList, '/stores/<string:storeOwner>')
# User get set
api.add_resource(User, '/user')
api.add_resource(UserRegister, '/register')

if __name__ == '__main__':
    app.run(debug=True)
