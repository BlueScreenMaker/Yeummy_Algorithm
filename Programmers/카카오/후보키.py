from itertools import combinations

'''
일단 가장 무식한 방법으로 할 수 있을 것 같은데, 

문제는 최소성이다. 

최소성은 하나라도 제외하면 해당 유일성이 깨지게 되기 때문에 미리 선택된 열의 경우 빼줘야 한다.

이를 그냥 조합으로 돌리게 되면.. No..

유일성을 포함하고 있는지 확인?

현재 생각으로는 유일성과 최소성을 모두 만족하는 애들을 배열 또는 리스트에 저장 한다.

이후, 모두 동일한 것이 없다면 
'''


def solution(relation):
    row_len = len(relation)
    col_list = [i for i in range(len(relation[0]))]
    possible_col_list = [list(combinations(col_list, i + 1)) for i in col_list]
    print(possible_col_list)
    candidate_key = []
    for cols in possible_col_list:

        for col in cols:
            possible_row_list = [elem for elem in zip(*[tuple(rel[i] for rel in relation) for i in col])]

            # 유일성
            if len(set(possible_row_list)) == row_len:
                is_valid = not any([set(key).issubset(set(col)) for key in candidate_key])

                if len(candidate_key) == 0 or is_valid: candidate_key = [*candidate_key, col]

    return len(candidate_key)

print(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]))