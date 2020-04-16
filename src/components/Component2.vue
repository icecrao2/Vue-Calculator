<template>
	<div>
		<table class="table">
			<tr class ="tableEle" v-for = "trNumber in Numbers" v-bind:key="trNumber">
				<td class ="tableEle" v-for = "tdNumber in Numbers" v-bind:key="tdNumber">
					<input v-on:click="InputText((trNumber - 1) * 3 + tdNumber)" class = "NumbButton" type = "button" v-bind:value = '(trNumber - 1) * 3 + tdNumber'>	
				</td>
				<td class = "tableEle" colspan = 1>
					<input v-on:click="InputText(Sign[trNumber-1])" class = "NumbButton" type = "button" v-bind:value = 'Sign[trNumber-1]'>
				</td>
			</tr>
			<tr>
				<td class = "tableEle" colspan = 1>
					<input v-on:click="InputText(0)" class = "NumbButton" type = "button" value = "0">
				</td>
				<td class = "tableEle" colspan = 1>
					<input v-on:click="InputText(Sign[5])" class = "NumbButton" type = "button" v-bind:value='Sign[5]'>
				</td>
				<td class = "tableEle" colspan = 1>
					<input v-on:click="InputText(Sign[4])" class = "NumbButton" type = "button" v-bind:value='Sign[4]'>
				</td>
				<td class = "tableEle" colspan = 1>
					<input v-on:click="InputText(Sign[3])" class = "NumbButton" type = "button" v-bind:value = 'Sign[3]'>
				</td>
				<td class = "tableEle" colspan = 1>
					<input v-on:click="InputText(Sign[6])" class = "NumbButton" type = "button" v-bind:value = 'Sign[6]'>
				</td>
				<td class = "tableEle" colspan = 1>
					<input v-on:click="InputText(Sign[7])" class = "NumbButton" type = "button" v-bind:value = 'Sign[7]'>
				</td>
			</tr>
		</table>	
	</div>	
</template>

<script>
export default {
	
	data : function(){
		return {
			Numbers : [1,2,3],
			Sign : ['+','-','*','/','=','cls','(',')']
		}
	},
	
	methods : {
		InputText(event){
			this.$emit('NumbInput',event);
		}
    },
	
}
</script>

<style scoped>

.NumbButton{
	font-size:80px;
	width:155px;
	height:140px;
	border : 5px solid black;
}

.table{
	border: 5px solid black;
	width : 500px;
	height : 600px;
	text-align: center;
}
</style>