class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.left = None
        self.right = None

class Tree:
    def __init__(self, value):
        self.head = Node(value)
    
    def insert(self, value):
        self.current_node = self.head
        while True:
            if value < self.current_node.value:
                if self.current_node.left != None:
                    self.current_node = self.current_node.left
                else:
                    self.current_node.left = Node(value)
                    break
            else:
                if self.current_node.right != None:
                    self.current_node = self.current_node.right
                else:
                    self.current_node.right = Node(value)
                    break
    
    def search(self, value):
        # 현재 노드를 순회를 위해 해드로 설정
        self.current_node = self.head
        # self.current_node가 None이 아닐때 까지
        while self.current_node:
            # 트리에 해당 값이 존재한다면
            if self.current_node.value == value:
                return True # True를 반환하고
            # 만약, 찾으려는 값이 현재 노드의 값보다 작다면 => 왼쪽으로!
            elif value < self.current_node.value:
                self.current_node = self.current_node.left
            # 만약, 찾으려는 값이 현재 노드의 값보다 크면 => 오른쪽으로!
            else: 
                self.current_node = self.current_node.right
        # 찾으려는 값이 없다면 False를 반환한다.
        return False
                
    def delete(self, value):
        searched = False
        self.current_node = self.head(value)
        self.parent = self.head
        while self.current_node:
            if self.current_node.value == value:
                searched = True
                break
            elif value < self.current_node.value:
                self.parent = self.current_node
                self.current_node = self.current_node.left
            else:
                self.parent = self.current_node
                self.current_node = self.current_node.right
        if searched == False:
            return False
    
        if self.current_node.left == None and self.current_node.right == None:
            if value < self.prarent.value:
                self.parent.left = None
            else:
                self.parent.right = None
            del self.current_node

        if self.current_node.left != None and self.current_node.right == None:
            if value < self.parent.value:
                self.parent.left = self.current_node.left
            else:
                self.parent.right = self.current_node.left
        elif self.current_node.left == None and self.current_node.right != None:
            if value < self.parent.value:
                self.parent.left = self.current_node.right
            else:
                self.parent.right = self.current_node.right


        if self.current_node.left != None and self.current_node.right != None:
            if value < self.parent.value:
                self.change_node = self.current_node.right
                self.change_node_parent = self.current_node.right
                
                while self.change_node.left != None:
                    self.change_node_parent = self.change_node
                    self.change_node = self.change_node.left
                self.change_node_parent = None
                if self.change_node.right != None:
                    self.change_node_parent = self.change_node.right
                else:
                    self.change_node_parent.left = None
                self.parent.left = self.change_node
                self.change_node.right = self.current_node.right
                self.change_node.left = self.change_node.left
            else:
                self.change_node = self.current_node.right
                self.change_node_parent = self.current_node.right
                while self.change_node.left != None:
                    self.change_node_parent = self.change_node.left
                    self.change_node = self.change_node.left
                if self.change_node.right != None:
                    self.change_node_parent.left = self.change_node.right
                else:
                    self.change_node_parent.left = None
                self.parent.right = self.change_node
                self.change_node.left = self.current_node.left
                self.change_node.right = self.current_node.right


BST = Tree(50)

BST.insert(20)
BST.insert(60)
BST.insert(10)
BST.insert(30)
BST.insert(80)
BST.insert(70)
BST.insert(15)
BST.insert(25)

print(BST.search(25))