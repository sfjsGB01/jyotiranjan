def star(function):
    def inner(*args,**kwargs):
        print("*****************************")
        function(*args,**kwargs)
        print("*****************************")
    return inner

def eql(function):
    def inner(*args,**kwargs):
        print("=======================")
        function(*args,**kwargs)
        print("=======================")
    return inner
@star
@eql
def msg(txt):
    print(txt)

msg("Hey! Welcome to India")
print("\n")

@star
def div(a,b):
    print(a/b)

div(4,2)