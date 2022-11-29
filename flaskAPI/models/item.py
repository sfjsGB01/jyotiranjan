'''
Maps item resource to its corresponding database table.
Contains code to execute queries on these tables.
'''

from db import db


class ItemModel(db.Model):
    __tablename__ = 'items'

    # Declare Columns which map to DB tables
    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(200))
    item_price = db.Column(db.Float(precision=2))
    item_category = db.Column(db.String(100))
    # Foreign Key
    store_id = db.Column(db.Integer, db.ForeignKey('stores.id'))
    store = db.relationship('StoreModel')

    # Class constructor -  always has first parameter as 'self' which is reference to the object
    def __init__(self, name, price, category, store_id) -> None:
        self.item_name = name
        self.item_price = price
        self.item_category = category
        self.store_id = store_id

    # converts instance of class ItemModel into a python dict
    # python dict is a representation/similar of/to JSON
    # instance method: for each and every instance of class ItemModel - the output will vary.
    def json(self):
        return {'name': self.item_name, 'price': self.item_price, 'category': self.item_category,
                'store_id': self.store_id}

    # class method: It will be called by using classname
    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(item_name=name).first()

    @classmethod
    def find_by_store_name(cls, name):
        return cls.query.filter_by(item_name=name).first()

    @classmethod
    def find_by_store_id(cls, store_id):
        return cls.query.filter_by(store_id=store_id)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
