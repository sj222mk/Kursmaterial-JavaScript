/*
			var createRectangle = function(height, width){
				var rect = {
						height: height, 
						width:width
					}
				return rect;
			}

			var rect1 = createRectangle(10,20);
			var rect2 = createRectangle(30,50);
			
			console.log(rect1);
			console.log(rect2);
			
			console.log(rect1.height * rect1.width);
			console.log(rect2.height * rect2.width);
			*/

/*			
			var objectives = {
				info: "Save the world"
			}
			
			console.log(objectives.info);
			console.log(objectives["info"]);
			
			var myArr = [34, "Jack", 84.23, {}];

			
			for (var j=0, length=myArr.length; j < length; ++j) {
				console.log(typeof myArr[j]);
			}
*/
/*
			var a = 0.1;
			var b = 0.2;
			
			if (a + b >= 0.3)
			{
				console.log(a+b);
			}
	*/

			var tArr = [1,4,6];
			tArr.getLast = function(){
			
				return this[this.length-1];
			}
			
			console.log(tArr.getLast());
			