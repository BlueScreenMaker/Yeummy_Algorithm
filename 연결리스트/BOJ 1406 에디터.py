import sys

class Node:
    def __init__(self, data, prev = None, next = None):
        self.data = data
        self.prev = prev
        self.next = next

class DoubleLinkedList:
    def __init__(self):
        self.head = Node(None)
        self.tail = Node(None)
        self.cur = self.tail

    def append(self, data):
        if self.head.data == None:
            self.head = Node(data)
            self.head.next = self.tail
            self.tail.prev = self.head
        else:
            new_node = Node(value, self.tail.prev, self.tail)

            self.tail.prev.next = new_node
            self.tail.prev = new_node
            self.cur = self.tail


    def insert(self, value):

        if self.cur == self.head:
            new_node = Node(value)
            self.head = new_node
            new_node.next = self.cur
            self.cur.prev = new_node
        else:
            new_node = Node(value, self.cur.prev, self.cur)

            self.cur.prev.next = new_node
            self.cur.prev = new_node


    def delete(self):

        if self.cur == self.head:
            return
        elif self.cur.prev == self.head:
            self.head = self.cur
        else:
            self.cur.prev = self.cur.prev.prev
            self.cur.prev.next = self.cur
    
    def move_cur_left(self):
        if self.cur != self.head:
            self.cur = self.cur.prev
    
    def move_cur_right(self):
        if self.cur != self.tail:
            self.cur = self.cur.next
    
    def print_list(self):
        target = self.head
        while target and target.data != None:
            if target.next != self.tail:
                print(target.data, end='')
            else:
                print(target.data)
            target = target.next

arr: list = list(sys.stdin.readline().strip())
n: int = int(input())
linked_list = DoubleLinkedList()

for value in arr:
    linked_list.append(value)

for i in range(n):
    temp = ''.join(sys.stdin.readline()).split()
    if temp[0] == 'L':
        linked_list.move_cur_left()
    elif temp[0] == 'D':
        linked_list.move_cur_right()
    elif temp[0] == 'B':
        linked_list.delete()
    elif temp[0] == 'P':
        linked_list.insert(temp[1])

linked_list.print_list()