# Will contain configuration of the project and about every external entity that we will connect to.
# SQL username, password, rabbitmq connection details, logger related details.

# mysql = {
#     'host': 'localhost',
#     'user': 'jp',
#     'password': '',
#     'db': 'oms'
# }
mysql = {
    'host': 'flask-code-db.cronhsfvoloy.us-east-1.rds.amazonaws.com',
    'user': 'admin',
    'password': 'pIyog679pDKRIBR56zgX',
    'db': 'oms'
}

mysqlConfig = f"mysql+pymysql://{mysql['user']}:{mysql['password']}@{mysql['host']}/{mysql['db']}"