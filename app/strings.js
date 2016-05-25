exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      var newArr = [];
      var arr1 = []
      newArr = str.split('');
     if(amount == 2){
      for(i = 0; i<newArr.length; i++){
          if(newArr[i] == newArr[i + amount]){
              arr1.push(newArr[i]);
          }
          else if(newArr[i] != newArr[i-amount] ){
            arr1.push(newArr[i]);
          }
      }
    }
    else{
      for(i = 0; i<newArr.length; i++){
          if(newArr[i] == newArr[i + 3]){
              arr1.push(newArr[i]);
          }
      }
  }
     arr1 =  arr1.join('');
      return arr1;
  },

wordWrap: function(str, cols) {
    var arr = str.split(' ');
    var newArr = [], count = 0;
    for(var i=0; i<arr.length-1; i++) {
        count += arr[i].length;
        if(count < cols) {
          if(arr[i].length === 1) {
            newArr.push(arr[i] + ' ');
          } else {
            newArr.push(arr[i] + '\n');
          }
          count++;
        } else {
          newArr.push(arr[i] + '\n');
        }
    }
    newArr.push(arr[arr.length-1]);
    return newArr.join('');
  },

  reverseString: function(str) {
  	  var newStr = [];
	  for (var i = str.length - 1, j = 0; i >= 0; i--, j++)
	    newStr[j] = str[i];
	  return newStr.join('');
	  }
};
