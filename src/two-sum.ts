// O Two Sum é bastante comum durante entrevistas. Seu objetivo é identificar um par de números que somados batam com o valor da variável target.
// Ele pode ser escrito em um algoritmo que roda no tempo O(n).
// Exemplos
// Se o array é [4, 1, 2, -2, 11, 15, 1, -1, -6, -4] e o target é 9. Neste caso, seu programa deve retornar:
// [-2, 11]
// O motivo é bastante simples:
// -2 + 11 = 9
// Solução 1 O(N²)

function two_sum_On2 (vector: number[], target: number): [number, number] | [] {
    for (let i = 0; i < vector.length; i++) {
        for (let j = 0; j < vector.length; j++) {
            if (vector[i] + vector[j] === target) {
                return [vector[i], vector[j]];
            }
        }
    }

    return [];
}

function two_sum_On (vector: number[], target: number) : [number, number] | [] {

    let hash = new Map();

    for (let i = 0; i < vector.length; i++) {
        if (hash.has(target - vector[i])) {
            return [hash.get(target - vector[i]), vector[i]];
        }
        hash.set(vector[i], vector[i]);
    }

    return [];
}

export {two_sum_On2,
        two_sum_On }
