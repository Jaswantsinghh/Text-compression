

function here() {
    let str = mains();
    let freq = frequency(str);
    let fre = sortfreq(freq);
    document.getElementById("freq").innerHTML = JSON.stringify(fre);

}

function mains() {
    let str;
    str = document.getElementById("enter").value;
    return str;
}

function frequency(str) {
    var freqs = {};
    for (var i = 0; i <= str.length; i++) {
        if (str[i] in freqs) {
            freqs[str[i]]++;
        }
        else {
            freqs[str[i]] = 1;
        }
    }
    delete freqs.undefined;
    return freqs;
}

function sortfreq(freqs) {
    var letters = [];
    for (var ch in freqs) {
        letters.push([freqs[ch], ch]);
    }
    return letters.sort();
}

