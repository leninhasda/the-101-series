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

model = Cluster()
model.cid = 101
model.avg = 55
model.save()

model = Cluster()
model.cid = 102
model.avg = 66
model.save()

for cl in Cluster.objects:
    print("{} {}".format(cl.cid, clc.avg))
