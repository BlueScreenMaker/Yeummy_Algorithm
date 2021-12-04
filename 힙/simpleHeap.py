
class Heap:
    def __init__(self, data):
        self.heap_array = list()
        # 가장 맨 처음의 값은 None으로 
        self.heap_array.append(None)
        # 루트 노드의 데이터 초기화
        self.heap_array.append(data)

    def move_up(self, inerted_idx):
        # 만약, 인덱스가 루트일때
        if inerted_idx <= 1:
            return False

        parent_idx = inerted_idx // 2
        if self.heap_array[inerted_idx] > self.heap_array[parent_idx]:
            return True
        else:
            return False

    def insert(self, data):
        if len(self.heap_array) == 0:
            self.heap_array.append(None)
            self.heap_array.append(data)
            return True
        
        self.heap_array.append(data)

        inserted_idx = len(self.heap_array) - 1

        while self.move_up(inserted_idx):
            # 부모 인덱스를 가져온다.
            parent_idx = inserted_idx // 2
            # 스왑한다.
            self.heap_array[inserted_idx], self.heap_array[parent_idx] = self.heap_array[parent_idx], self.heap_array[inserted_idx]
            # 스왑한 인덱스를 바꾼다.
            inserted_idx = parent_idx

        return True