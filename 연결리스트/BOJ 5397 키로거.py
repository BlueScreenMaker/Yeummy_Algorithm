import sys

class Node:
    def __init__(self, value, prev, next):
        self.value = value
        self.prev = prev
        self.next = next

class DobuleLinkedList:
    def __init__(self):
        self.head = Node(None, None, None)
        self.tail = Node(None, self.head, None)
        self.head.next = self.tail
        self.cur = self.tail

    def insert(self, value):
        new_node = Node(value, self.cur.prev, self.cur)
        
        self.cur.prev.next = new_node
        self.cur.prev = new_node

    def delete(self):
        if self.cur.prev.value == None:
            return
        delete_node = self.cur.prev
        d_prev_node = delete_node.prev

        d_prev_node.next = self.cur
        self.cur.prev = d_prev_node

    def move_cur_left(self):
        if self.cur.prev == self.head:
            return
        self.cur = self.cur.prev
    
    def move_cur_right(self):
        if self.cur == self.tail:
            return
        self.cur = self.cur.next

    def print_list(self):
        temp = []
        target = self.head
        while target:
            if target != self.tail and target != self.head:
                temp.append(target.value)
            target = target.next

        print(''.join(temp), end='\n')
num: int = int(sys.stdin.readline().strip())

while num:
    temp = list(sys.stdin.readline().strip())
    linked_list = DobuleLinkedList()

    for elem in temp:

        if elem == '<':
            linked_list.move_cur_left()
        elif elem == '>':
            linked_list.move_cur_right()
        elif elem == '-':
            linked_list.delete()
        else:
            linked_list.insert(elem)
            
    linked_list.print_list()
    num -= 1