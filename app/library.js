
module.exports ={

Array: function() {
	       this.toTwenty= function()
	       {
	            var a = [];
	            for(var i=1; i<= 20; i++){
		        a.push(i);
	            }
	            return a;
            }

            this.toForty = function()
           {
	            var b = [];
	            for(var i=2; i<= 40; i= i+2){
		        b.push(i);
	            }
	            return b;
            }

            this.toOneThousand = function()
            {
                var c = [];
                for(var i=10; i<=1000; i=i+10){
                c.push(i);
                }
                return c;
            }

        

            Array.prototype.search = function(num)
            {
	            var arr = this;   
	            var min = 0;
	            var max = arr.length -1;    
	            var count= 0;
	            var json ={};
	            var guess ;
	            var index = guess
	            if (max <min)  
	            {        //check if the array is empty
		            json["count"] = count;
		            json["index"] = -1;
		            json["length"] = 0;
		            return json;
	            }
	            if(num > this.length)
	            {
	            	json["count"] = count;
	            	json["index"] = -1;
	            	json["length"] = this.length;
	            	return json;
	            }
	            
	            while (true)
	            {                            //always loop
		            guess = Math.floor((min + max)/2);
		            
		           if(arr[guess] === num) 
		           {
			           json["count"] = count;
		               json["index"] = guess;
		               json["length"] = this.length;
		               break;
		            }
		            else if( arr[guess] < num )
		            {
		                min = guess + 1;
		            }
		            else
		            {
		                max = guess - 1;
		            }
		            count=count + 1
	            }
	            return json;
}	
}
}