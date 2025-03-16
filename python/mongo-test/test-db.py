from mongoengine import *
from pprint import pprint
import datetime

connect('mydb')

def dd(var):
    pprint(var)
    exit()

class Cluster(Document):
    cid = IntField(required=True)
    avg = FloatField(required=True)

cls = Cluster()
cls.cid = 100
cls.avg = 100.10
cls.save()
dd(cls)