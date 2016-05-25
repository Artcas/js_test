exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];
    function listOfFiles(data){        
        for (var i = 0; i < data.length; i++) {
            if(typeof data[i] == 'string'){
                files.push(data[i]);
            } else listOfFiles(data[i].files)
        };    
    }
    function listOfFilesInSubDir(obj){        
        if(obj.dir == dirName){
            listOfFiles(obj.files)
        } else {
            for (var i = 0; i < obj.files.length; i++) {
                if(typeof obj.files[i] == 'object') listOfFilesInSubDir(obj.files[i]);
            };
        }
    }
    if(arguments.length === 1){
        listOfFiles(data.files);
        return files;
    } else {
        listOfFilesInSubDir(data);
        return files;
    }
  },

  permute: function(arr) {
  	var permArr = [],
    usedChars = [];
    return (function main() {
        for (var i = 0; i < arr.length; i++) {
            var ch = arr.splice(i, 1)[0];
            usedChars.push(ch);
            if (arr.length == 0) {
                permArr.push(usedChars.slice());
            }
            main();
            arr.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    })();
  },

  fibonacci: function(n) {
  	function fibonacci(n) {
  		if(n <= 2) {
  			return 1;
  		} else {
  			return fibonacci(n-1)+fibonacci(n-2);
  		}
  	}
  	return fibonacci(n);
  },

validParentheses: function nPair(n) {
    if (n == 0){
        return [""];
}
    var result = [];
    for (var i = 0; i < n; i++) {
        var lefts = nPair(i);
        var rights = nPair(n - i - 1);
        for (var l = 0; l < lefts.length; l++)
            for (var r = 0; r < rights.length; r++)
                result.push("(" + lefts[l] + ")" + rights[r]);
    }
    return result;
}
};
