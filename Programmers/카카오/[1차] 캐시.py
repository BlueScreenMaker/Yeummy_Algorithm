def solution(cacheSize, cities):
    answer = 0
    cache = [None for i in range(cacheSize)]
    cities = [city.lower() for city in cities]
    
    for city in cities:

        if city in cache:
            cur_idx = cache.index(city)
            hit_val = cache.pop(cur_idx)
            cache = [hit_val, *cache]
            
            answer += 1
            continue  
        
        if cacheSize:
            del cache[-1]
            cache = [city, *cache]
        
        answer += 5
        
    return answer
