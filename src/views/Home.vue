<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<!-- vuex -->
		<div>{{ count }}</div>
		<div>{{ num }}</div>
		<div>{{ count1 }}</div>
		<!-- 气泡框 -->
		<div class="margin-triangle">hi, sister</div>
		<van-loading type="spinner" color="#98f6fa" />
		<el-table v-fit-columns :data="tableData" style="width: 100%">
			<el-table-column label="日期" width="180">
				<template slot-scope="scope">
					<i class="el-icon-time"></i>
					<span style="margin-left: 10px">{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="数据" width="180">
				<template slot-scope="scope">
					<span style="margin-left: 10px">{{scope.row.data}}</span>
				</template>
			</el-table-column>
			<el-table-column label="姓名" width="180">
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<p>姓名: {{ scope.row.name }}</p>
						<p>住址: {{ scope.row.address }}</p>
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{ scope.row.name }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span style="margin-left: 10px">{{scope.row.describe}}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from "@/components/HelloWorld.vue";
	import myMixin from "@/assets/mixin.js";
	import {
		mapState
	} from "vuex";
	import {
		mapMutations
	} from "vuex";
	import {
		mapActions
	} from "vuex";
	import api from "@/api/demo";

	export default {
		name: "Home",
		mixins: [myMixin],
		components: {
			HelloWorld,
		},
		data() {
			return {
				tableData: [{
						date: "2016-05-02",
						name: "王小虎",
						phone: 12345678910,
						address: "上海市普陀区金沙江路 1518 弄",
						data: 100000000000000000000000000000000,
						describe: "松江区，位于上海市西南部，历史文化悠久，有着“上海之根” 的称呼。位于黄浦江上游，东与闵行区、奉贤区为邻，南、西南与金山区交界，西、北与青浦区接壤",
					},
					{
						date: "2016-05-04",
						name: "王小虎",
						phone: 12345678910,
						address: "上海市普陀区金沙江路 1517 弄FDSA",
						data: 10000000000.89,
						describe: "徐汇区，上海市辖区，位于上海中心城区的西南部，东北侧与黄浦区毗邻，东临黄浦江，与浦东新区隔江相望，西与闵行区分界，北与静安区、长宁区接壤。",
					},
					{
						date: "2016-05-01",
						name: "王小虎",
						phone: 12345678910,
						address: "上海市普陀区金沙江路 1519 弄54YGFDSF",
						data: 100000000000000000000000000000000,
						describe: "浦东新区为上海市的一个市辖区，因地处黄浦江东而得名。浦东南与奉贤区、闵行区两区接壤，西与徐汇区、黄浦区、虹口区、杨浦区、宝山区五区隔黄浦江相望，北与崇明区隔长江相望；地势东南高，西北低，气温偏高、降水偏多、日照时数偏少",
					},
					{
						date: "2016-05-03",
						name: "王小虎",
						phone: 12345678910,
						address: "上海市普陀区金沙江路 1516 弄",
						data: 100000000000000000000000000000000,
						describe: "黄浦区，隶属于上海市，地处黄浦江和苏州河合流处的西南端。北起苏州河，东、南濒黄浦江，西至成都北路、延安中路、陕西南路、肇嘉浜路、瑞金南路。",
					},
				],
			};
		},
		computed: {
			// count() {
			//   return this.$store.state.count
			// }
			...mapState(["count", "num", "count1"]), // 映射 this.count 为 store.state.count
		},
		directives:{
			"fit-columns": {
				update(el, binding,vnode) {
				    setTimeout(() => {
							console.log(vnode)
				        vnode.context.adjustColumnWidth(el, binding.value);
				    }, 300);
				},
				bind(el, binding,vnode) {
				    setTimeout(() => {
							console.log(vnode)
				        vnode.context.adjustColumnWidth(el, binding.value);
				    }, 300);
				},
				inserted(el, binding,vnode) {
				    setTimeout(() => {
							console.log(vnode)
				        vnode.context.adjustColumnWidth(el, binding.value);
				    }, 300);
				},
				componentUpdated(el, binding,vnode) {
				    el.classList.add("r-table");
				    setTimeout(() => {
				        vnode.context.adjustColumnWidth(el, binding.value);
				    }, 300);
				},
				unbind() {},
			}
		},
		created() {
			// console.log(this.getDemo())
			// this.getDemo();
			this.increment();
			this.delNum();
			this.increment1();
			console.log(this.$store.getters.doneTodos);
			this.$store.commit("increment", {
				a: 5
			});
			console.log(this.lodash.chunk(["a", "b", "c", "d"], 3));
			console.log(this.lodash.compact([0, 1, false, 2, "", 3]));
			/**
			 *$emit(eventName)  触发当前实例上的事件，附加参数都会传给监听器回调。
			 *$on(eventName) 监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。
			 **/
			this.EventBus.$emit("test", {
				test: "test"
			});
			this.EventBus.$emit("test2", {
				test2: "test2"
			});
			console.log(this.format(10000000.01));
			console.log(this.flatten([
				[
					[1, 2], 3
				], 4, 4, 3
			]));
			console.log(this.digitUppercase(123));
			// 千分位分隔符
			let str = "10000";
			let reg = /(?=(\B\d{3})+$)/g;
			console.log(str.replace(reg, ","));
			console.log(this.$moment().subtract(7, "days").format("YYYY-MM-DD"));
			let regx = /^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{6,20}$/;
			console.log(regx.test("123456abcdeA33333333333333"));

			console.log(this.tableData)
			this.$nextTick(() => {
				this.tableData.forEach(ele => {
					ele.data = new Number(ele.data).toLocaleString();
				})
			})
			this.mixinNum++;
			console.log(this.mixinNum)
		},

		methods: {
			adjustColumnWidth(table, padding = 10) {
				const colgroup = table.querySelector("colgroup");
				const colDefs = [...colgroup.querySelectorAll("col")];
				colDefs.forEach((col) => {
					const clsName = col.getAttribute("name");
					const cells = [
						...table.querySelectorAll(`td.${clsName}`),
						...table.querySelectorAll(`th.${clsName}`),
					];
					if (cells[0]?.classList?.contains?.("leave-alone")) {
						return;
					}
					const widthList = cells.map((el) => {
						return el.querySelector(".cell")?.scrollWidth || 0;
					});
					const max = Math.max(...widthList);
					table.querySelectorAll(`col[name=${clsName}]`).forEach((el) => {
						el.setAttribute("width", max + padding);
					});
				});
			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			tableRowClassName({
				row,
				rowIndex
			}) {
				console.log(row);
				if (rowIndex === 1) {
					return "warning-row";
				} else if (rowIndex === 3) {
					return "success-row";
				}
				return "";
			},
			increment() {
				console.log(this.$store.state.count);
			},
			...mapMutations([
			"delNum"]), //将`this.delNum`映射为this.$store.commit('delNum'),也可以将`this.delNum`映射为this.$store.commit('delNum'，amount)
			//actions进行异步操作
			...mapActions([
			"increment1"]), //将`this.increment1`映射为this.$store.dispatch('increment1'),也可以将`this.increment1`映射为this.$store.dispatch('increment1'，amount)
			format(n) {
				let num = n.toString();
				let len = num.length;
				if (len <= 3) {
					return num;
				} else {
					let temp = "";
					let remainder = len % 3;
					if (remainder > 0) {
						// 不是3的整数倍
						return (
							num.slice(0, remainder) +
							"," +
							num.slice(remainder, len).match(/\d{3}/g).join(",") +
							temp
						);
					} else {
						// 3的整数倍
						return num.slice(0, len).match(/\d{3}/g).join(",") + temp;
					}
				}
			},
			flatten(arr) {
				let result = [];
				for (let i = 0; i < arr.length; i++) {
					if (Array.isArray(arr[i])) {
						result = result.concat(this.flatten(arr[i]));
					} else {
						result.push(arr[i]);
					}
				}
				return result;
			},

			telFormat(tel) {
				tel = String(tel);
				return tel.substr(0, 3) + "****" + tel.substr(7);
			},
			digitUppercase(n) {
				const fraction = ["角", "分"];
				const digit = [
					"零",
					"壹",
					"贰",
					"叁",
					"肆",
					"伍",
					"陆",
					"柒",
					"捌",
					"玖",
				];
				const unit = [
					["元", "万", "亿"],
					["", "拾", "佰", "仟"],
				];
				n = Math.abs(n);
				let s = "";
				for (let i = 0; i < fraction.length; i++) {
					s += (
						digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
					).replace(/零./, "");
				}
				s = s || "整";
				n = Math.floor(n);
				for (let i = 0; i < unit[0].length && n > 0; i++) {
					let p = "";
					for (let j = 0; j < unit[1].length && n > 0; j++) {
						p = digit[n % 10] + unit[1][j] + p;
						n = Math.floor(n / 10);
					}
					s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
				}
				return s
					.replace(/(零.)*零元/, "元")
					.replace(/(零.)+/g, "零")
					.replace(/^整$/, "零元整");
			},
			setNewsApi() {
				api.JH_news("/news/index", "type=top&key=123456").then((res) => {
					console.log(res);
				});
			},
			getDemo() {
				api.hello({
					name: "q"
				}).then((res) => {
					console.log(res);
				});
			},
		},
	};
</script>
<style lang="scss" scoped>
	.margin-triangle {
		position: relative;
		width: 300px;
		height: 60px;
		padding: 10px;
		border: 1px solid cyan;
		border-radius: 8px;
		margin-left: 40px;
	}

	.margin-triangle::before {
		position: absolute;
		top: 34px;
		left: -10px;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-right: 10px solid cyan;
		content: "";
	}

	.margin-triangle::after {
		position: absolute;
		top: 34px;
		left: -8px;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-right: 10px solid #fff;
		content: "";
	}
</style>
