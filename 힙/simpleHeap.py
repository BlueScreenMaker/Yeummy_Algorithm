
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

    def move_down(self, poped_idx):
        # 왼쪽 자식 인덱스
        left_child_idx = poped_idx * 2
        # 오른쪽 자식 인덱스
        right_child_idx = poped_idx * 2 + 1

        # 왼쪽 자식 인덱스 유효성 체크
        if left_child_idx >= len(self.heap_array):
            return False

        # 오른쪽 자식 인덱스 유효성 체크 
        elif right_child_idx >= len(self.heap_array):
            # 오른쪽 자식이 유효하지 않다면, 그냥 바로 왼쪽 자식으로 스왑
            if self.heap_array[poped_idx] < self.heap_array[left_child_idx]:
                return True
        # 해당 부모 노드에 두 개의 자식 노드를 가질 때
        else:
            # 부모보다 자식 노드가 큰 것이 있을 때
            if self.heap_array[poped_idx] < self.heap_array[left_child_idx] or self.heap_array[poped_idx] < self.heap_array[right_child_idx]:
                return True
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

    def pop(self):
        if len(self.heap_array) <= 1:
            return None
        
        returned_data = self.heap_array[1]

        self.heap_array[1] = self.heap_array[-1]

        del self.heap_array[-1]

        poped_idx = 1

        while self.move_down(poped_idx):
            left_child_idx = poped_idx * 2
            right_child_idx = poped_idx * 2 + 1

            # 오른쪽 인덱스가 유효하지 않고, 왼쪽 인덱스의 값이 부모의 값보다 클 때
            if right_child_idx >= len(self.heap_array) and self.heap_array[poped_idx] < self.heap_array[left_child_idx]:
                self.heap_array[left_child_idx], self.heap_array[poped_idx] = self.heap_array[poped_idx], self.heap_array[left_child_idx]

                poped_idx = left_child_idx
                return
            
            # 부모 노드가 두 개의 노드를 가지고 있고, 이 자식 노드가 부모의 값보다 클 때
            if self.heap_array[poped_idx] < self.heap_array[left_child_idx] or self.heap_array[poped_idx] < self.heap_array[right_child_idx]:
                max_idx = right_child_idx if self.heap_array[left_child_idx] < self.heap_array[right_child_idx] else left_child_idx

                self.heap_array[max_idx], self.heap_array[poped_idx] = self.heap_array[poped_idx], self.heap_array[max_idx]

                poped_idx = max_idx
                return
            
        return returned_data
    

heap = Heap(15)
heap.insert(10)
heap.insert(8)
heap.insert(5)
heap.insert(4)
heap.insert(20)
print(heap.heap_array)

heap.pop()
print(heap.heap_array)