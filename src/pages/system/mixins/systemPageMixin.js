/**
 *
 * author ganbowen
 * description systemManage 中的page的查询的公共方法
 * created 2019/05/22 17:28:13
 *
 */
export default {
    methods: {
        getQueryData (query) {
            this.searchInfo = query
        },
        change (current) {
            this.table.page.current = current
            this.query()
        },
        sizeChange (size) {
            this.table.page.size = size
            this.query()
        }
    }
}
