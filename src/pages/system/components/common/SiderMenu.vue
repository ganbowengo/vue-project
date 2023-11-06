<template>
    <Menu
        ref="siderMenu"
        :active-name="activeName"
        :open-names="openNames"
        accordion
        @on-select="breadcrumb"
    >
        <Submenu v-for="itemFrist in menuList" :name="itemFrist.name" :key="itemFrist.id">
            <template slot="title">
                <Icon type="ios-analytics" />
                {{itemFrist.name}}
            </template>
            <div v-for="itemSecond in itemFrist.children" :key="itemSecond.id">
                <Submenu v-if="itemSecond.children" :name="itemSecond.name">
                    <template slot="title">{{itemSecond.name}}</template>
                    <MenuItem
                        v-for="itemThrid in itemSecond.children"
                        :to="itemThrid.url"
                        :name="itemFrist.name + ',' + itemSecond.name + ',' + itemThrid.name"
                        :key="itemThrid.id"
                    >{{itemThrid.name}}</MenuItem>
                </Submenu>
                <MenuItem
                    v-if="!itemSecond.children"
                    :to="itemSecond.url"
                    :name="itemFrist.name + ',' + itemSecond.name"
                >{{itemSecond.name}}</MenuItem>
            </div>
        </Submenu>
    </Menu>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// 建立URL 与 菜单名称的映射
let urlReflection = {};
let allUrlReflection = (data, name) => {
    for (let i in data) {
        let item = data[i];
        let names = name + "," + item.name;
        if (item.children) {
            allUrlReflection(item.children, names);
        } else {
            if (item.url) {
                urlReflection[item.url] = name + "," + item.name;
            }
        }
    }
};
export default {
    data() {
        return {
            menuList: [],
            activeName: "",
            openNames: [],
            data: [
                {
                    hide: false,
                    children: [
                        {
                            hide: false,
                            children: [
                                {
                                    hide: false,
                                    name: "角色管理",
                                    pid: "syspower",
                                    id: "sysrole",
                                    xtqx: "1",
                                    check: false,
                                    url: "/roleManage"
                                }
                            ],
                            name: "权限管理",
                            pid: "sys",
                            id: "syspower",
                            xtqx: "1",
                            check: false,
                            url: "#"
                        },
                        {
                            hide: false,
                            children: [
                                {
                                    hide: false,
                                    name: "发票种类代码管理",
                                    pid: "syscode",
                                    id: "invtypcode",
                                    xtqx: "1",
                                    check: false,
                                    url: "/systemCodeInvoiceType"
                                },
                                {
                                    hide: false,
                                    name: "发票代码管理",
                                    pid: "syscode",
                                    id: "invcode",
                                    xtqx: "1",
                                    check: false,
                                    url: "/systemCodeInvoice"
                                }
                            ],
                            name: "代码管理",
                            pid: "sys",
                            id: "syscode",
                            xtqx: "1",
                            check: false,
                            url: "#"
                        },
                        {
                            hide: false,
                            children: [
                                {
                                    hide: false,
                                    name: "业务监控",
                                    pid: "xtjk",
                                    id: "ywjk",
                                    xtqx: "1",
                                    check: false,
                                    url: "/businessLog"
                                },
                                {
                                    hide: false,
                                    name: "主机监控",
                                    pid: "xtjk",
                                    id: "zjjk",
                                    xtqx: "1",
                                    check: false,
                                    url: "/hostLog"
                                }
                            ],
                            name: "系统监控",
                            pid: "sys",
                            id: "xtjk",
                            xtqx: "1",
                            check: false,
                            url: "#"
                        },
                        {
                            hide: false,
                            name: "报税期限维护",
                            pid: "sys",
                            id: "taxperiod",
                            xtqx: "1",
                            check: false,
                            url: "/systemTaxPeriod"
                        }
                    ],
                    name: "系统管理",
                    pid: null,
                    id: "sys",
                    xtqx: "1",
                    check: false,
                    url: "#"
                }
            ]
        };
    },
    computed: mapGetters("menu", ["menuName"]),
    created() {
        // let userCode = sessionStorage.getItem("userCode") || "";
        // this.http
        //     .post("/sys/user/queryUserPowerMenu", { swrydm: userCode })
        //     .then(res => {
        // this.menuList = res.data;
        // allUrlReflection(res.data, "");
        // this.setMenu(this.menuName);
        // })
        // .catch(error => {
        //     throw error;
        // });

        this.menuList = this.data;
        allUrlReflection(this.data, "");
        this.setMenu(this.menuName);
    },
    methods: {
        ...mapActions("menu", ["breadcrumb"]),
        setMenu(menuName) {
            let open_names = menuName || [];
            let active_name = menuName.join(",");
            if (open_names || active_name) {
                this.openNames = open_names.slice(0, -1);
                this.activeName = active_name;
                this.$nextTick(() => {
                    this.$refs.siderMenu.updateOpened();
                    this.$refs.siderMenu.updateActiveName();
                });
            }
        }
    },
    watch: {
        $route(val) {
            let url = val.path;
            let menuName = urlReflection[url];
            menuName = menuName && menuName.split(",");
            this.setMenu(menuName.slice(1));
        }
    }
};
</script>

