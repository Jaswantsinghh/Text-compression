module.exports.comp = function comp(str) {

    let freqs = {};
    for (let i in str) {
        if (freqs[str[i]] == undefined) {
            freqs[str[i]] = 1;
        }
        else {
            freqs[str[i]] = freqs[str[i]] + 1;
        }
    }
    let res = sortFreq(freqs);
    let tup = buildtree(res);

    console.log(tup);
    return tup;
}

function sortFreq(freqs) {
    var tuples = [];
    for (let i in freqs) {
        tuples.push([freqs[i], i]);
    }
    return tuples.sort();
}

function buildtree(tuples) {
    while (tuples.length > 1) {
        let leasttwo = tuples.slice(0, 2);
        let therest = tuples.slice(2, tuples.length);
        let combfreq = tuples[0][0] + tuples[1][0];
        tuples = therest;
        let end = [combfreq, leasttwo];
        tuples.push(end);
        tuples.sort();
    }
    return tuples[0];
}