exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    var newFn = fn.apply(this,arr);
    return  newFn
  },

  speak: function(fn, obj) {
      return fn.call(obj);
  },

  functionFunction: function(str) {
    return function (param){
      return str + ', ' + param
    }
  },

  makeClosures: function(arr, fn) {
    var newArr = [];
    var newFn = function(val) {
      return function() { 
        return fn(val); 
      };
    };
    for (var i = 0, len = arr.length; i < len; i++) {
      newArr.push(newFn(arr[i]));
    }
    return newArr;
  },

  partial: function(fn, str1, str2) {
    return function  (param){
        return fn(str1, str2, param);
     }
  },

  useArguments: function() {
    var sum = 0
    for(i = 0; i<arguments.length;i++){
       sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.splice.call(arguments, 1);
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function() { 
        var newargs = args.concat(Array.prototype.slice.call(arguments));
       return fn.apply(null, newargs);
      };
 
    
  },

  curryIt: function(fn) {
       var v = function(p1) {
      return function(p2) {
        return function(p3) {
          return fn(p1,p2,p3);
        }
      }
    }
    return v;
  }
};
