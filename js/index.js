		function obtainEntity(){
			var entitys=$("#entity").val();
			var strs= new Array(); //定义一数组
			strs=entitys.split(";");
			var attribute=new Array();//存属性
			for (i=0;i<strs.length-1;i++ )
			{
				var priv=strs[i]+";";
				
				var index;
				var privates=priv.indexOf("private");
				if(privates>=0){
					index=privates;
				}
				var publics=priv.indexOf("public");
				if(publics>=0){
					index=publics;
				}
				var protecteds=priv.indexOf("protected");
				if(protecteds>=0){
					index=protecteds;
				}
				/*var index=priv.indexOf("public");
				var index=priv.indexOf("protected");*/
				
				var threeEnt=priv.substring(index,priv.lastIndexOf(';'));
				threeEnt=threeEnt.replace("private","");
				threeEnt=threeEnt.replace("public","");
				threeEnt=threeEnt.replace("protected","");
				threeEnt=threeEnt.replace("\t","");
				threeEnt=threeEnt.replace("\n","");
				threeEnt=threeEnt.replace("\n","");//必须处理两次
				//alert(JSON.stringify(threeEnt));
				var demo= new Array();
				demo=threeEnt.split(" ");
				var bark=0;
				do{
					bark++;
				}while(demo[bark].length <= 0);
				var t=bark;
				do{
					t++;
					attribute[i]=demo[t];
					//alert(t+","+demo[t])
				}while(demo[t].length <= 0);
			}
			return attribute;
		}
		
		
		function setEntity(oneAndTwo){
			var data,str="";
			if (oneAndTwo) {
				data=obtainEntity($("#entity").val());
				for (var i=0;i<data.length;i++) {
					str += "<tr><td><input type='checkbox' name='entity' checked='checked' value='"+data[i]+"'>"+data[i]+"</td></tr>";
				}
				$("#entity_tr").html(str)
			} 
		} 
		
		
		function getEntity(){
			var getEntity=new Array();
			$("input[name='entity']:checked").each(function(i){
				getEntity[i]=$(this).val();
			});
				
			if(getEntity.length==0){
				 $.messager.alert("错误信息", "请先选择条件！","error");
				 return;
			}else{
				return getEntity;
			}
		}
		
		//查询sql
		function selectEntity(){
				
	 		if($("#formDemo").form("validate")) {
	 			var sql= getEntity();
	 			var result="<select id='***' parameterType='***.***' resultType='***.***'> \n SELECT \n"+sql+"\n FROM "+$("#tables").val();
	 			
	 			 	result+="\n <where> \n ";
					var ifTabs='';
					for(var i=0;i<sql.length;i++){
						ifTabs+='\t<if test="'+sql[i]+' !=null and '+sql[i]+' !=\'\' "> \n';
						ifTabs+="\t\t"+sql[i]+"=#{"+sql[i]+"},\n \t</if> \n";
					}
					result+=ifTabs;
					result+="</where> \n LIMIT #{page},#{rows} \n </select>";
	 				$("#sqls").val(result);
	 				shows();//显示复制按钮
	 		}
		}
		//删除sql
		function deleteEntity(){
			if($("#formDemo").form("validate")) {
				var ids=new Array();
				var sql= getEntity()+"";
				if(sql=="undefined"){
				 return;
				}
				ids=sql.split(",");
				var result="<delete id='***' parameterType='***.***'>\n \t\t DELETE FROM "+$("#tables").val()+" WHERE "+ids[0]+" = #{"+ids[0]+"}\n\t</delete>";
				$("#sqls").val(result);
				shows();//显示复制按钮
			}
		}
		//添加sql
		function insertEntity(){
			if($("#formDemo").form("validate")) {
				var ids=getEntity();
				var result="<insert id='***' parameterType='***.***'>\n \t\tINSERT INTO \n \t\t"+$("#tables").val()+"\n\t\t\t("+ids+") \n \t\tVALUES \n\t\t\t(";
				for(var i=0;i<ids.length;i++){
					result+="#{"+ids[i]+"},";
				}
				result=result.substring(0,result.lastIndexOf(","));
				result+=")";
				result+="\n\t</insert>";
				$("#sqls").val(result);
				shows();//显示复制按钮
			}
		}
		//修改sql
		function updateEntity(){
			if($("#formDemo").form("validate")) {
				var ids=getEntity();
				var result="<update id='***.***' parameterType='***.***'>\n \t UPDATE "+$("#tables").val()+"\n \t<set> \n ";
				var ifTabs='';
				for(var i=0;i<ids.length;i++){
					ifTabs+='\t \t<if test="'+ids[i]+' !=null and '+ids[i]+' !=\'\' "> \n';
					ifTabs+="\t\t\t"+ids[i]+"=#{"+ids[i]+"},\n \t</if> \n";
				}
				result+=ifTabs;
				result+="\t</set> \n \t WHERE "+ids[0]+"=#{"+ids[0]+"}";
				result+="\n</update>";
				$("#sqls").val(result); 
				shows();//显示复制按钮
			}
		}
		//mapper映射
		function mapperEntity(){
			if($("#formDemo").form("validate")) {
				var ids=getEntity();
				var id=$("#tables").val()+"Map";
				var type="实体类路径";
				var result="<resultMap id='"+id+"' type='"+type+"'> \n";
				result+="\t<id column='"+ids[0]+"' property='"+ids[0]+"'/> \n";
				for(var i=1;i<ids.length;i++){
					result+="\t <result column='"+ids[i]+"' property='"+ids[i]+"'/> \n";
				}
				result+="</resultMap>";
				$("#sqls").val(result);
				shows();//显示复制按钮
			}
		}