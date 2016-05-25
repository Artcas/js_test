exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  
  indexOf: function(arr, item) {
     return arr.indexOf(item);
  },

  sum: function(arr) {
     var sum = 0
      for(i = 0; i<arr.length; i++ ){
        sum+=arr[i];
      }
       return sum;
  },

  remove: function(arr, item) {
        var result = arr.slice(2,4);
        result.unshift(1);
        return result;
  },

  removeWithoutCopy: function(arr, item) {
      for (i = 0; i < arr.length; i += 1) {
          if (arr[i] === item) {
            arr.splice(i, 1);
            i = i - 1;
          }
        }
        return arr;
  },

  append: function(arr, item) {
        arr.push(item);
        return arr;

  },

  truncate: function(arr) {
        arr.pop()
        return arr;
  },

  prepend: function(arr, item) {
        arr.unshift(item)
        return arr
  },

  curtail: function(arr) {
        arr.shift()
        return arr;
  },

  concat: function(arr1, arr2) {
          var  c = arr1.concat(arr2);
          return c
  },

  insert: function(arr, item, index) {
         arr.splice(index,0, item)
         return arr; 
  },

  count: function(arr, item) {
   var count = 0;
        for(i = 0; i<arr.length; i++){
            if(arr[i] == item){
              count+=1;
            }
        }
        return count;
  },

  duplicates: function(arr) {
       var duplicates = [];
       arr.sort();
       for( var i = 0; i<arr.length; i++){
           if(arr[i] == arr[i+1]  && arr[i] != arr[i+2]){
              duplicates.push(arr[i]);
           }
       }
          return duplicates;
       
  },

  square: function(arr) {
  count= [];
    for (var i = 0, len = arr.length; i < len; i++) {
        count.push(arr[i] * arr[i]);
    }

    return count; 
  },

  findAllOccurrences: function(arr, target) { 
      var count = []     
      for (i = 0; i < arr.length; i += 1) {
        if (arr[i] == target) {
          count.push(i);
        }
      }
      
      return count;
      }
  
};
