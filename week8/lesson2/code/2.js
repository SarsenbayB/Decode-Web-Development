let strings = ['Again, there is no universal specification for these methods, so that’s fine.', 'For browsers, timers are described in the timers section of HTML5 standard.'];

let block;

window.onload = function () {

    block =  document.getElementById('test');

    let sentence = 0;
    let idx = 0;
    let outStr = "";

    function writer() {
        let interval = setTimeout(function() {
            outStr += strings[sentence][idx];
            block.innerHTML = outStr + "|";
            idx++;

            if(idx >= strings[sentence].length) {
                idx = 0;
                outStr += "<br>";
                sentence++;

                if(sentence >= strings.length) {
                    clearInterval(interval);
                    block.innerHTML = outStr;
                    return true;
                }
            } 
            writer();
        }, getRandom(getRandom(400)));
    }

    writer();
};

function getRandom(bound) {
    return Math.floor(Math.random() * Math.floor(bound));
}