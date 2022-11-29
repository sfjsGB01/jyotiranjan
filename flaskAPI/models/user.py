'''
Maps user resource to its corresponding database table.
Contains code to execute queries on these tables.
'''

from db import db
from werkzeug.security import hmac


class UserModel(db.Model):
    __tablename__ = 'users'

    userID = db.Column(db.Integer, primary_key=True)
    lastName = db.Column(db.String(80))
    firstName = db.Column(db.String(80))
    username = db.Column(db.String(80))
    password = db.Column(db.String(80))

    def __init__(self, username, password,lastName,firstName) -> None:
        self.username = username
        self.password = password
        self.lastName = lastName
        self.firstName =firstName

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_username(cls, name):
        return cls.query.filter_by(username=name).first()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    def check_password(self, password):
        return hmac.compare_digest(self.password, password)