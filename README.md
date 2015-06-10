# node-seqnum

## Installation

    npm install seqnum

## Usage

    var seqnum = require('seqnum');
    
    var n = seqnum('42');
    
    n.toString(); // => '42'
    JSON.stringify(n); // => '"42"'
    
    var m = n.next();
    
    m.toString(); // => '43'
    JSON.stringify(m); // => '"43"'
