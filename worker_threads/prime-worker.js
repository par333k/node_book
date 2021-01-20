const { Worker, isMainThread, parentPort, workerData } = require('worker_threads/worker_threads');

const min = 2;
let primes = [];

function findPrimes(start, range) {
    let isPrime = true;
    let end = start + range;

    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
}

if (isMainThread) {
    const max = 10000000;
    const threadCount = 8;
    const threads = new Set();
    const range = Math.ceil((max - min) / threadCount);
    let start = min;
    console.time('prime');

    for (let i = 0; i < threadCount - 1; i++) {
        const wStart = start;
        threads.add(new Worker(__filename, { workerData: { start: wStart, range } }));
        start += range;
    }
    threads.add(new Worker(__filename, { workerData: { start, range: range + ((max - min + 1) % threadCount) } }));
    for (let worker of threads) {
        worker.on('error', (err) => {
            throw err;
        });
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.timeEnd('prime');
                console.log(primes.length);
            }
        });
        worker.on('message', (msg) => {
            primes = primes.concat(msg);
        });
    }
} else {
    findPrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}

// 멀티 스레딩을 할 때는 일을 나눠서 처리하는 것이 까다롭다. 공유하고 있는 데이터가 많아 일을 나누기 어려운 부분을 고민해야한다.
// 소수 찾기는 정해진 범위가 있어 정확히 나누기 수월할 뿐이다.
// 멀티스레드는 스레드가 늘어난다고 정확한 배수로 빨라지지 않는다. 스레드를 생성하고 통신하는 사이의 비용을 고려해 멀티스레딩을 활용해야한다