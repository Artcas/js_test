exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	  var promise1 = new Promise(function(resolve){
        setTimeout(
          function(){
            resolve(value);
          },1000)
      })
      return promise1;
      
  },

  manipulateRemoteData: function(url) {
  	var datas = ''
  	var newArr = [];
  	return $.ajax({
  		dataType:'json',
  		type:'get',
  		url:url,
  	}).then(function(result){
      console.log(result);
  			var newArr = [];
  			for(i = 0; i<result.people.length; i++){
  				newArr.push(result.people[i].name);	
  			}
  			newArr.sort();
  			return newArr;
  		}, function(error){
  			alert();
  		})
  }
};
