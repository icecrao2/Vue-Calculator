<template>
	<div>
		<p v-for = "Log in this.CalculatorLog" v-bind:key = "Log">{{Log}}</p>
	</div>
</template>

<script>
export default {
	data : function(){
		return {
			calcul : this.CalculatorLog
		}
	},

	props:['CalculatorLog'],
	
	methods : {
		InputLog : function(){

		}
	},
	
	
}
</script>

<style scoped>

</style>