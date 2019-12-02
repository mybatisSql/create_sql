function Map() {
				var struct = function(key, value) {
					this.key = key;
					this.value = value;
				}

				var put = function(key, value) {
					for(var i = 0; i < this.arr.length; i++) {
						if(this.arr[i].key === key) {
							this.arr[i].value = value;
							return;
						}
					}
					this.arr[this.arr.length] = new struct(key, value);
				}

				var get = function(key) {
					for(var i = 0; i < this.arr.length; i++) {
						if(this.arr[i].key === key) {
							return this.arr[i].value;
						}
					}
					return null;
				}

				var remove = function(key) {
					var v;
					for(var i = 0; i < this.arr.length; i++) {
						v = this.arr.pop();
						if(v.key === key) {
							continue;
						}
						this.arr.unshift(v);
					}
				}

				var size = function() {
					return this.arr.length;
				}

				var isEmpty = function() {
					return this.arr.length <= 0;
				}
				this.arr = new Array();
				this.get = get;//根据key获取
				this.put = put;//添加key,value
				this.remove = remove;//根据key移除
				this.size = size;//长度
				this.isEmpty = isEmpty;//是否为空
			}