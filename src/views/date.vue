<template>
	<div class="calendar">
		<p>日历</p>
		<div class="table-header">
			<div class="table-header-item" v-for="(item, index) in weekList" :key="index">{{item}}</div>
		</div>
		<div class="table-body">
			<div class="table-body-content" v-for="item in dateList" :key="item.fullDate">
				<div class="table-body-date" :class="item.class">{{item.date}}</div>
				<el-select v-model="item.workPsnList" multiple clearable style="width: 90%;" :disabled="item.disabled" placeholder="请选择值班人员">
					<el-option label="张三" value="123456"></el-option>
					<el-option label="李四" value="1234567"></el-option>
					<el-option label="李四" value="1234569"></el-option>
					<el-option label="李四" value="1234568"></el-option>
					<el-option label="李四" value="1234560"></el-option>
					<el-option label="李四" value="1234565"></el-option>
				</el-select>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				weekList: ['一', '二', '三', '四', '五', '六', '日'],
				dateList: []
			};
		},
		created() {
			// const firstDate = this.$moment().startOf("month").format("YYYY-MM-DD");
			// const endDate = this.$moment().endOf("month").format("YYYY-MM-DD");
			const lastDate = this.$moment().endOf("month").format("DD");
			const curDate = this.$moment().format("D");
			const firstWeek = this.$moment().startOf("month").format("E");
			// const endWeek = this.$moment().endOf("month").format("E");
			const preDateLen = firstWeek - 1;
			let preDateList = [];
			let nextDateList = [];
			let curDateList = []
			let nextDateLen = 0;
			if (preDateLen + Number(lastDate) <= 35) {
				nextDateLen = 35 - preDateLen - Number(lastDate);
			} else {
				nextDateLen = 42 - preDateLen - Number(lastDate);
			}
			for (let i = 0; i < preDateLen; i++) {
				preDateList.unshift({
					fullDate: this.$moment().startOf("month").subtract(i + 1, 'days').format("YYYY-MM-DD"),
					date: this.$moment().startOf("month").subtract(i + 1, 'days').format("D"),
					disabled: true,
					workPsnList: [],
					class: 'preMonth'
				});
			}
			for (let i = 1; i <= nextDateLen; i++) {
				nextDateList.push({
					fullDate: this.$moment().endOf("month").subtract(-i, "days").format("YYYY-MM-DD"),
					date: this.$moment().endOf("month").subtract(-i, "days").format("D"),
					workPsnList: [],
					disabled: false,
					class: 'nextMonth'
				});
			}
			for (let i = 0; i < Number(lastDate); i++) {
				curDateList.push({
					fullDate: this.$moment().startOf("month").subtract(-i, "days").format("YYYY-MM-DD"),
					date: this.$moment().startOf("month").subtract(-i, "days").format("D"),
					workPsnList: [],
					disabled: Number(this.$moment().startOf("month").subtract(-i, "days").format('D') )< Number(curDate),
					class: 'curMonth'
				});
			}
			this.dateList = (preDateList.concat(curDateList)).concat(nextDateList);
			console.log(this.$moment().format("YYYY-MM-DD") > this.$moment().startOf("month").subtract(-1, "days"))
		}
	};
</script>
<style lang="scss" scoped>
	.calendar {
		margin-left: 1%;
	}
	
	.table-header {
		display: flex;
	}

	.table-header-item {
		flex: 0 0 14%;
		padding: 10px 0;
		border: 1px solid #333;
		// margin: 0px -1px -1px 0px;
	}

	.table-body {
		display: flex;
		flex-wrap: wrap;
	}

	.table-body-content {
		flex: 0 0 14%;
		padding: 10px 0;
		border: 1px solid #333;
		// margin: 0px -1px -1px 0px;
	}
	
	.table-body-date {
		height: 30px;
	}
	
	.preMonth, .nextMonth {
		color: #909399;
	}
</style>
