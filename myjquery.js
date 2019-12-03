
(function(window,undefied){


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

	let _$ = window.$;   //_$

	myjquery.extend = myjquery.prototype.extend = function(...arg) {
		let options,target = arg[0] || {}
			target = this; //调用的上下文对象jQuery/或者实例
			options = arg[0]
			for (name in options) {
				target[name] = options[name];
			}
		log(target)
		return target;
	}


	myjquery.extend ({
		isInteger (num){
			if(num){
				return num + ' is ' + (Number.isInteger(num)===true?'':'not') +' a integer'
			}
			else{
				return 'nothing to do'
			}
		},
		each: function(obj, callback, context = null, arg=null) {
			log(obj)
			if(!obj){
				throw new Error('obj is null')
			}
			if(!callback){
				throw new Error('must have a function')
			}
		    let i = 0;
		    let value;
		    let length = obj.length;
		    for (; i < length; i++) {
		        value = callback.call(context, obj[i], arg);
		        if (value === false) {
		            break;
		        }
		    }
		},
		noConflict (){
			window.$ = _$;
			return this
		}
	})
	myjquery.prototype.extend ({
		css : function(b,c){
			    log(b)
			    log(c)
				let DQ = this['arr']
				let i = 0;
				while(DQ[i]){
					DQ[i].style.cssText+=	b + ':' + c;
					i++
				}
				return this

		},
		html : function(contend){
			if(this){
				let DQ = this
				let i = 0;
				while(DQ[i]){
					DQ[i].innerHTML= contend
					i++
				}
				return this
			}
		},
		eq: function( i ) {     //未完成
    			// print(this)
    			return this
		},
		done : function(selector){
			log(this.selector + ' have done')
			return this
		},
		get: function(num) {
			if (num != null) {
				return (num < 0 ? this[num + this.length] : this[num])
			} else {
				return Array.prototype.slice.call(this)
			}
		},
		each: function(callback, args) {
    		return myjquery.each(this, callback, args);
		}
	})



	 myjquery.prototype.init.prototype =  myjquery.prototype;
	window.$ = window.wyh =   myjquery
})(window)

