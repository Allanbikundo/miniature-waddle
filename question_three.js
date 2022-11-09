function generateString(A, B) {
    let string = []
    if (Math.abs(A-B) > 3) {
        return "the dfference is greater than three so its not possible to generate the string"
    }
    while (0 < A || 0 < B) {
        if (A < B) {
            if (0 < B--) {
                string.push('b')
            }
            if (0 < B--) {
                string.push('b')
            }
            if (0 < A--) {
                string.push('a')
            }
        }
        else if (B < A) {
            if (0 < A--) {
                string.push('a')
            }
            if (0 < A--) {
                string.push('a')
            }
            if (0 < B--) {
                string.push('b')
            }
        }
        else {
            if (0 < A--) {
                string.push('a')
            }
            if (0 < B--) {
                string.push('b')
            }
        }
    }
    return string.join()
}

console.log(generateString(10,3))
