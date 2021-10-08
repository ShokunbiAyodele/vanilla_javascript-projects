function easyHTTP(){

  this.http = new XMLHttpRequest();
}


//Using get HTTP prototype

easyHTTP.prototype.get = function(url,callback){
  this.http.open('GET',url, true);

  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null,self.http.responseText);
    }
    else{
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send()
}


//Using post HTTP prototype
easyHTTP.prototype.post = function(url,data,callback){

  this.http.open('POST',url,true);
  this.http.setRequestHeader('content-type','application/json');

  let self = this;
  this.http.onload = function(){
      callback(self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}



//Using put HTTP prototype
easyHTTP.prototype.put = function(url,data,callback){

  this.http.open('PUT',url,true);
  this.http.setRequestHeader('content-type','application/json');

  let self = this;
  this.http.onload = function(){
      callback(self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


//Using DELETE HTTP prototype

easyHTTP.prototype.delete = function(url,callback){
  this.http.open('DELETED',url, true);

  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null,"Post deleted");
    }
    else{
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send()
}