def solve(A, B, C):
    A = [str(x) for x in A]
    ctr = 0
    maxNumber = int("9" * B)
    if (B != 1):
        minNumber = int("9" * (B - 1)) + 1
    else:
        minNumber = 0
    print(minNumber, maxNumber)
    maxNumber = min(maxNumber, C)
    for i in range(minNumber, maxNumber + 1):
        digits = list(str(i))
        # print(digits)
        flag = True
        for j in list(str(i)):
            print(j)
            if j not in A:
                flag = False
                break
        if flag:
            ctr += 1
    return ctr


print(solve([0, 1, 5], 1, 2))
