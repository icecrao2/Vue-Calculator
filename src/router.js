import Vue from 'vue'
import VueRouter from 'vue-router'
import comp1 from './components/Component1.vue'
import comp2 from './components/Component2.vue'
import comp3 from './components/Component3.vue'
import comp4 from './components/Component4.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
	routes : [
		{
			path : '/',
			
			components:{
				com1 : comp1,
				com2 : comp2,
				com3 : comp3,
				com4 : comp4
			}
		}
	],
	
    
});