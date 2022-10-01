def solution(babbling):
    answer = 0
    list = ['aya', 'ye', 'woo', 'ma']

    # 주어진 값에 대해서 반복문을 돈다.
    for babble in babbling:
        current_babble, resent_babble = babble, ''
        is_babble_empty = False

        # 주어진 리스트에 대해 반복문을 돌린다.
        while True:
            is_babble_invalid = True
            for li in list:
                if li in current_babble and li != resent_babble:
                    # 중간에 한 개만 없어져야 하기 때문에 slice를 한 후 값을 초기화 시켜준다.
                    idx = current_babble.find(li)
                    resent_babble = li
                    left_str, right_str = current_babble[0:idx], current_babble[idx + len(li):]
                    current_babble = left_str + right_str

                    if len(current_babble) == 0:
                        answer += 1
                        is_babble_empty = True
                        break

                    is_babble_invalid = False

            if is_babble_empty or is_babble_invalid:
                break

    return answer

print(solution(["aya", "yee", "u", "maa"]))
print(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))
print(solution(["ayayewoomawooma"]))

