class Node:
    def __init__(self, data, next = None) -> None:
        self.data = data
        self.next = next
    
class LinkedList:
    def __init__(self):
        self.head = Node(None)
        self.tail = Node(None)
        self.size = 0
    
    def listSize(self):
        return self.size
    
    def isEmpty(self):
        return True if self.size == 0 else False
    
    def append(self, value):

        if self.isEmpty():
            self.head = Node(value)
            self.tail = Node(value)
            self.size += 1
        
        else:
            self.tail.next = Node(value)
            self.size += 1
    