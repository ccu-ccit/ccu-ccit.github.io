<template>
  <div>
      <div style="background-color: #ececec; padding: 30px;">
      <a-row :gutter="40" style="margin-bottom:30px">
        <a-col :span="8">
          <a-card title="2020/12/05" :bordered="false" style="min-height:300px">
              <ve-pie :data="chartData"></ve-pie>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="2020/12/15" :bordered="false" style="min-height:300px">
            <ve-histogram :data="barChartData" ></ve-histogram>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="2020/12/20" :bordered="false" style="min-height:300px">
            <ve-line :data="chartData"></ve-line>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  export default {
    name:'history',
    data () {
      return {
        chartData: {
          columns: ['日期', '錯誤次數'],
          rows: [
            { '日期': 'A', '錯誤次數': 1393 },
            { '日期': 'B', '錯誤次數': 3530 },
            { '日期': 'C', '錯誤次數': 2923 },
            { '日期': 'D', '錯誤次數': 1723 }
          ]
        },
        barChartData: {
          columns: ['日期', '學生數量', '出勤', '出勤率'],
          rows: [
            { '日期': '1/1', '學生數量': 1393, '出勤': 1093, '出勤率': 0.32 },
            { '日期': '1/2', '學生數量': 3530, '出勤': 3230, '出勤率': 0.26 },
            { '日期': '1/3', '學生數量': 2923, '出勤': 2623, '出勤率': 0.76 },
            { '日期': '1/4', '學生數量': 1723, '出勤': 1423, '出勤率': 0.49 },
            { '日期': '1/5', '學生數量': 3792, '出勤': 3492, '出勤率': 0.323 },
            { '日期': '1/6', '學生數量': 4593, '出勤': 4293, '出勤率': 0.78 }
          ]
        }
        
      }
    }
  }
</script>