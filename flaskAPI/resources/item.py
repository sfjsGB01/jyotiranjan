'''
Contains functions corresponding to the endpoints of item related APIs.
logic for processing these APIs.
'''
from flask_restful import Resource, reqparse
from requests import delete
from models.item import ItemModel


class Item(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('price', type=float, required=True, help='price is a required field')
    parser.add_argument('category', type=str)
    parser.add_argument('store_id', type=int, required=True, help="Must enter store id")

    def get(self, name):
        ''' find an item by name'''
        item = ItemModel.find_by_name(name)
        if item:
            return item.json()
        return {"message": "item not found"}, 404

    def post(self, name):
        ''' Insert a new item into the DB'''
        data = Item.parser.parse_args()
        # print(name)
        # print(data)
        item = ItemModel(name, data['price'], data['category'], data['store_id'])
        try:
            item.save_to_db()
        except Exception as ex:
            print(f"item post got an exception:{ex}")
            return {"message": "An error occurred in inserting the item"}, 500
        return item.json(), 201

    def delete(self, name):
        item = ItemModel.find_by_name(name)
        if item:
            item.delete_from_db()
            return {'message': 'item has been deleted'}, 200
        return 'Item not found', 404

    def put(self, name):
        # create or update
        data = Item.parser.parse_args()
        item = ItemModel.find_by_name(name)
        print(item)
        if not item:
            print("Item does not exist")
            item = ItemModel(name, data['price'], None, data['store_id'])
        else:
            print("item exists")
            item.item_price = data['price']

        item.save_to_db()

        return item.json()


class ItemList(Resource):
    def get(self,store_id):
        '''Gets all the items from the DB. Uses python list comprehension'''
        t = ItemModel.find_by_store_id(store_id)
        print(t)
        return {
            'items': [item.json() for item in ItemModel.find_by_store_id(store_id)]
        }