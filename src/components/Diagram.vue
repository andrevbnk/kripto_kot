<template>
    <div id='diagram'>
      <h1> <center> {{curPairShow.from}} | {{curPairShow.to}}</center></h1>
    <div ref="chartdiv" class="graph"></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


export default {
  name: 'Diagram',
    data () {
      return {
        curPairShow: this.$store.state.curPair?this.$store.state.curPair:this.$store.state.quotation.pairs[0]
      }
    },
  async mounted() {
    const res = await this.getDataDiag(({from: this.curPairShow.from, to: this.curPairShow.to}));
    await this.drawDiag(res);
  },
  methods:{
    ...mapActions(['getDataDiag']),

       drawDiag:function(data){
        let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

        chart.paddingRight = 20;
        chart.data = data;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";

        series.tooltipText = "{valueY.value}";
        chart.cursor = new am4charts.XYCursor();

        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;

        this.chart = chart;
      }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  watch:{
     '$store.state.curPair':async function(val){
        this.curPairShow = val;
        const res = await this.getDataDiag(({from: val.from, to:val.to}));
        console.log(res);
        await this.drawDiag(res);
     }
        
  }
}
</script>

<style scoped>
.graph{
  height: 85%;
}
#diagram{
  background-color: white;
  grid-area: diagram;
}
</style>