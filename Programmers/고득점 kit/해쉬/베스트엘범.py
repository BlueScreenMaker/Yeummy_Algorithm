import collections

def solution(genres, plays):
    answer: list = []
    play_time: dict = collections.defaultdict(int)
    play_list: dict = collections.defaultdict(list)

    for genre, play, idx in zip(genres, plays, range(len(genres))):

        play_time[genre] += play
        play_list[genre].append([play, idx])
        
    lenght: int = len(play_time)

    for _ in range(0, lenght):
        if len(play_time) == 0:
            break

        max_genre: str = max(play_time, key=play_time.get)
        play_list[max_genre].sort(key=lambda x: -x[0]) 

        for _ in range(0, 2):

            if len(play_list[max_genre]) == 0:
                break

            max_pl_time: int = play_list[max_genre].pop(0)
            answer.append(max_pl_time[1])
            

        del play_time[max_genre]

    return answer

# print(solution(['A', 'B', 'A', 'A', 'B'], [
#       500, 600, 150, 800, 2500]) == [4, 1, 3, 0])
# print(solution(['B', 'A'], [500, 600]) == [1, 0])
# print(solution(['B'], [500]) == [0])
# print(solution(['B', 'A'], [600, 500]) == [0, 1])
# print(solution(['A', 'B'], [600, 500]) == [0, 1])
# print(solution(['A', 'A', 'B'], [600, 500, 300]) == [0, 1, 2])
print(solution(['A', 'B', 'A'], [600, 500, 600]) == [0, 2, 1])
# print(solution(['A', 'B', 'A'], [600, 500, 700]) == [2, 0, 1])
# print(solution(['A', 'A', 'A'], [600, 500, 700]) == [2, 0])
# print(solution(['A', 'A', 'A'], [3, 2, 1]) == [0, 1])
# print(solution(['classic', 'pop', 'classic', 'classic', 'pop'],
#                [500, 600, 150, 800, 2500]) == [4, 1, 3, 0])
# print(solution(['classic'], [2500]) == [0])
print(solution(['A', 'B', 'C'], [1, 2, 3]) == [2, 1, 0])
print(solution(['A', 'B', 'C', 'D'], [1, 2, 3, 1]) == [2, 1, 0, 3])
print(solution(['A', 'A', 'B', 'A'], [2, 2, 2, 3]) == [3, 0, 2])
print(solution(['A', 'A', 'B', 'A'], [5, 5, 6, 5]) == [0, 1, 2])
print(solution(['A', 'A', 'B', 'A', 'B', 'B'], [5, 5, 6, 5, 7, 7]) == [4, 5, 0, 1])
