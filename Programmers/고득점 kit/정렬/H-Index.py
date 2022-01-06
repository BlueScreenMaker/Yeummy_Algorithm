def solution(citations):
    answer = 0
    sorted_citations = [citation for citation in enumerate(sorted(citations, reverse=True), 1)]
    
    for index, item in sorted_citations:
        if index <= item:
            answer = index
        else:
            break
    
    return answer

# const data = [
# { input: [3, 0, 6, 1, 5], answer: 3 },
#   { input: [0, 0, 0, 0, 0], answer: 0 },
#   { input: [0, 0, 0, 0, 1], answer: 1 },
#   { input: [9, 9, 9, 12], answer: 4 },
#   { input: [9, 7, 6, 2, 1], answer: 3 }, // from Wikipedia
#   { input: [10, 8, 5, 4, 3], answer: 4 }, // from Wikipedia
#   { input: [25, 8, 5, 3, 3], answer: 3 }, // from Wikipedia
#   { input: [1, 1, 5, 7, 6], answer: 3 },
#   { input: [0], answer: 0 },
#   { input: [0, 0], answer: 0 }
# ]

citations = [0, 0]

print(solution(citations))