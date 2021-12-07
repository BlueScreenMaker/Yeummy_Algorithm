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


    