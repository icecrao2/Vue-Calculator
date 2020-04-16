<template>
	<div class = CalculText>{{Calculator}}</div>	
</template>

<script>
export default {
	data : function(){
		return {
			Answer : ''
		}
	},

	props : ['Calculator'],
	
	methods : {
		AnswerInput(){

		}
    },
}
</script>

<style scoped>

.CalculText{
	font-size: 30px;
}

</style>