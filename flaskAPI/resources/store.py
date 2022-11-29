from flask_restful import Resource, reqparse
from models.store import StoreModel
from flask_jwt_extended import jwt_required


class Store(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('store_owner', type=str, required=True, help='store owner is a required field')

    def get(self, storeName):
        store = StoreModel.find_by_name(name=storeName)
        if store:
            # we will do the task to return the store in JSON format
            return store.json()
        return {'message': 'Store not found'}, 404

    def post(self, storeName):
        data = Store.parser.parse_args()

        if StoreModel.find_by_name(storeName):
            return {"message": f"Store with name: {storeName} already exists"}, 400

        store = StoreModel(storeName, data['store_owner'])
        try:
            store.save_to_db()
        except Exception as ex:
            print("Exception while trying to add a store: {}".format(ex))
            return {"message": "Exception while trying to add a store: {}".format(ex)}, 500

        return store.json(), 201

    def delete(self, storeName):
        store = StoreModel.find_by_name(storeName)
        if store:
            store.delete_from_db()
            return {"message": "store deleted"}

        return {"message": "store does not exist"}, 400

    def put(self, storeName):
        data = Store.parser.parse_args()

        if StoreModel.find_by_name(storeName):
            return {"message": f"Store with name: {storeName} already exists"}, 400

        store = StoreModel(storeName, data['store_owner'])
        try:
            store.save_to_db()
        except Exception as ex:
            print("Exception while trying to add a store: {}".format(ex))
            return {"message": "Exception while trying to add a store: {}".format(ex)}, 500

        return store.json(), 201

class StoreList(Resource):
    def get(self,storeOwner):
        return {'stores': [store.json() for store in StoreModel.find_by_owner(storeOwner)]}

