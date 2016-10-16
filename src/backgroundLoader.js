
const queue = [];
const delayBetweanChunks = 200;
const firstDelay = 1000;
let isWaiting = false;
let delay = firstDelay;

const requestLoad = () => {
    if (isWaiting) {
        return;
    }
    if (!queue.length) {
        return;
    }
    const loader = queue.pop();
    isWaiting = true;
    setTimeout(() => {
        delay = delayBetweanChunks;
        loader(() => {}, () => {
            isWaiting = false;
            requestLoad();
        });
    }, delay);
};

export default fn => {
    queue.push(fn);
    requestLoad();
};
