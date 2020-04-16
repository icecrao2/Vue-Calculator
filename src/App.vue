<template>
  <div id="app" >
    <router-view name = "com1" id = "com1"></router-view>
    <router-view name = "com4" id = "com4" v-bind:Calculator="Calculator"></router-view>
    <router-view name = "com2" id = "com2" v-on:NumbInput = "NumbInput"></router-view>
    <router-view name = "com3" id = "com3" v-bind:CalculatorLog="CalculatorLog"></router-view>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      Calculator : '',
      Value : 0,
      CalculatorLog : []
    }
  },

  methods : {

    NumbInput(event){
      
      if(event == "=")
      {
        if(this.Calculator.length != 0)
        {
          var Cal = {};
          Cal.cal = this.Calculator;

          this.Value = this.Calculation(Cal);
          if(this.Value != null)
          {
            this.CalculatorLog.push(this.Calculator + " = " + this.Value.toString());

            this.Calculator = this.Value.toString();
          }
        }
      }
      else if(event=="cls")
      {
        this.Calculator = '';
      }

      else
      {
        if(event.toString().charCodeAt(0) != 40 && event.toString().charCodeAt(0) != 41)
        {
          if(this.Calculator.charCodeAt(this.Calculator.length-1)< 48 || this.Calculator.charCodeAt(this.Calculator.length-1) > 57)
          {
            if(event.toString().charCodeAt(0) < 48 || event.toString().charCodeAt(0) > 57)
            {
              this.Calculator = this.Calculator.substring(0,this.Calculator.length-1);
            }
          } 
        }
        this.Calculator += event;
      }

    },

    Calculation(calcul){
      
      //this.FindBindSignal(calcul);

      try
      {
        var Value = eval(calcul.cal);
        return Value;
      }
      catch(event)
      {
        alert("Pleas confirm your Input"); 
        return null;
      }
    }


  }
}
</script>

<style>
#app{
  position:absolute;

  width: 100%;
  height : 100%;
}

#com1{
  position : relative;
}

#com2{
  position : relative;
  width: 650px;
  height: 600px;
  float:left;

}
#com3{
  width:500px;
	height : 600px;
  display:inline-block; 
}

#com4{
  left:2px;
  position : relative;
  width: 1150px;
  height:50px;
	border:5px solid black;
}

</style>
