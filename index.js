var toNum = function (str) {
  if (!str || typeof str !== 'string') {
    throw new Error('non-string input');
  }
  var i, j = str.length;
  var num = new Array(j);
  var c;
  for (i = 0; i < j; i++) {
    c = str.charCodeAt(i);
    if (c < 48 || c > 57) {
      throw new Error('non-numeric string');
    }
    num[i] = c - 48;
  }
  return num;
};

var toStr = function (num) {
  return num.join('');
};

var nextNum = function (num) {
  var i, j;
  var carry = 1;
  i = j = num.length;
  var next = new Array(j);
  while (i) {
    var dig = num[i - 1];
    var succ = (dig + carry) % 10;
    next[i - 1] = succ;
    carry = carry && dig == 9;
    i--;
  }
  if (carry) {
    next.unshift(1);
  }
  return next;
};

var mkNum = function (num) {
  return {
    next: function () { return mkNum(nextNum(num)); },
    toString: function () { return toStr(num); },
    toJSON: function () { return toStr(num); }
  };
};

module.exports = function (str) {
  return mkNum(toNum(str));
};
