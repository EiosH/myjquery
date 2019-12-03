# myjquery
### 仿jquery写的小型函数库


	let myjquery = function(selector,context){
		return new myjquery.prototype.init(selector, context)
	}
	let print = log = console.log.bind(this)
	myjquery.prototype = {
		init : function(selector, context, rootjQuery){
			//模拟出数组格式
			let arr = []
			let results = document.querySelectorAll(selector)
			for (let i in results) {
				arr[i]= results[i]
			}
			arr.length = results.length;
			let that = this;
			that['arr'] = arr;
			return that;
		}
	}

