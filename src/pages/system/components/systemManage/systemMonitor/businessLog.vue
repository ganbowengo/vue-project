<template>
    <div>
        <SearchCondition :condition='condition' @queryData='getQueryData'></SearchCondition>
        <div id='echarts'></div>
    </div>
</template>

<script>

import pageMixin from '@system/mixins/systemPageMixin'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/radar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
    mixins: [pageMixin],
    data() {
        return {
            searchInfo: {},
            powerTree: [],
            condition: [
                {
                    index: 1,
                    value: '',
                    name: 'startDate',
                    type: 'datepicker',
                    label: '时间',
                    dateType: 'datetime',
                    format: 'yyyy-MM-dd HH:mm:ss',
                    placeholder: '请输入',
                    fn: this.dateChange
                },
                {
                    index: 2,
                    value: '',
                    name: 'method',
                    type: 'select',
                    label: '业务类型',
                    placeholder: '请选择',
                    options: [
                        {code: 'TaxDeviceController_saveBsp,TaxDeviceController_saveSkp', name: '盘发行情况'},
                        {code: 'TaxDeviceController_getTaxDeviceInfo', name: '大厅抄报'},
                        {code: 'HallHandworkCollect_ManualEntyr', name: '网上抄报'},
                        {code: 'KafkaConsumerXml_parseKafkaXml', name: '发票上传'},
                        {code: 'InvoiceRegisterController_addInvoiceSale', name: '发票发售'}
                    ]
                },
                {
                    type: 'button',
                    label: '查询',
                    color: 'primary',
                    fn: this.query
                }
            ],
            selectedData: [],
        }
    },
    methods: {
        dateChange(e){
            this.searchInfo.startDate = e
        },
        query(query) {
            if(!query.startDate) return this.$Message.error('时间不能为空')
            let endDate =  new Date(new Date(query.startDate).getTime() + 24 * 60 * 60 * 1000)
            endDate = this.globalTool.setDate(endDate)
            query = query || this.searchInfo
            query.startDate = this.searchInfo.startDate
            query.endDate = endDate
            this.http.post('/sys/log/statBizLog',{
                params: query
            }).then(res => {
                if(res.success){
                    this.initEcharts(res.data[0])
                }
            }).catch(error => {
                throw error
            })
        },
        initEcharts(data){
            let myChart = echarts.init(document.getElementById('echarts'))
            let resArr = [['success', '成功'], ['error', '失败']]
            let option = {
                data: [],
                xAlies: []
            }
            var colorList = ['green', 'red']
            resArr.forEach(function (list, index) {
                if (data[list[0]]) {
                    if (data[list[0]].value.length) {
                        option.xAlies = data[list[0]].xAlies
                        option.data = [{
                            data: data[list[0]].value,
                            type: 'line',
                            lineStyle: {
                                width: 1,
                                color: `${colorList[index]}`
                            },
                            itemStyle: {
                                color: `${colorList[index]}`
                            }
                        }]
                        option.title = {
                            text: '1234',
                            subtext: list[1] + '次数统计'
                        }
                        console.log(myChart)
                        // myChart.setData(option)
                    } else {
                        console.log('')
                    }
                } else {
                    console.log('')
                }
            })
        }
    }
}
</script>

<style lang="scss">
</style>
