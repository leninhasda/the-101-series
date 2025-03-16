from collections import Counter
# n=int(input(n))
# for i in range(n):
# 	a=int(input())
# 	mylist.append(a)
# mylist = [20, 30, 25, 20,25]
# x = [k for k,v in Counter(mylist).items() if v>1]
# for a,b in Counter(mylist).items():
# 	print(a)
# 	print(b)
# print(x)

#x = [int(x) for x in input().split()]
i="5 6 1 9 9 9 9 6 5 4 3"
x = [int(x) for x in i.split()]
xx = Counter(x).items()
print(xx.keys())
