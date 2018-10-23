<template>
  <div>
    <el-radio-group v-model="radioIndex">
      <el-radio :label="1">radio1</el-radio>
      <el-radio :label="2">radio1</el-radio>
      <el-radio :label="3">radio1</el-radio>
    </el-radio-group>
    <hr />
    <el-checkbox :indeterminate="IsDeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group :min="1" :max="4" v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in checkOptions" :label="city" :key="city">{{ city }}</el-checkbox>
    </el-checkbox-group>
    <hr />
    <el-row>
      <el-col :span="12">
        <el-input palceholder="date" suffix-icon="el-icon-date"></el-input>
      </el-col>
      <el-col :span="12">
        <el-input palceholder="search" prefix-icon="el-icon-search" clearable></el-input>
      </el-col>
    </el-row>
    <el-input-number :min="1" :max="5" v-model="currentNum"></el-input-number>
    <hr />
    <el-select v-model="selectValue" multiple placeholder="请选择">
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled">
      </el-option>
    </el-select>
    <hr />
    <el-switch v-model="selectValue" active-text="选中" inactive-text="未选中" active-color="#13ce66" inactive-color="ff4949"></el-switch>
    <hr />
    <el-slider v-model="sliderValue" :format-tooltip="formatterTooltip"></el-slider>
    <hr />
    <div class="block">
      <el-date-picker v-model="pickerValue" type="date" align="right" :picker-options="pickerOptions" placeholder="选择日期"></el-date-picker>
    </div>
    <hr />
    <el-upload ref="uploader" action="https://jsonplaceholder.typicode.com/posts/" :file-list="fileList" :auto-upload="false" multiple :limit="fileLimitNum" :on-exceed="execedLImit">
      <el-button trigger="slot" size="small" type="primary">添加文件</el-button>
      <el-button size="small" type="success" @click="onUpload">提交</el-button>
    </el-upload>
    <hr />
    <el-rate v-model="rateValue" show-text></el-rate>
    <hr />
    <el-table height="200" border :data="tableArr" v-loading="true" element-loading-text="拼命加载中" element-loading-spinner-icon="el-loading-icon" element-loading-background="rgba(0,0,0,0.6)">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <hr />
    <el-button type="primary" @click="openMessage()"></el-button>
  </div>
</template>

<script>
  import ElCheckboxGroup from "../../../node_modules/element-ui/packages/checkbox/src/checkbox-group";
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
  export default {
    components: {
      ElCheckbox,
      ElCheckboxGroup},
    data() {
          return {
            currentNum: 1,
            radioIndex: 1,
            checkedCount: 2,
            checkAll: false,
            IsDeterminate: true,
            checkOptions: ['上海','北京','广州','深圳'],
            checkedCities: ['上海','北京'],
            selectOptions: [
                {
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶',
              disabled: true
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }
            ],
            selectValue: [],
            sliderValue: 0,
            pickerValue: '',
            pickerOptions: {
                disabledDate: function(time) {
                    return time.getTime() > Date.now();
                }
            },
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
            fileLimitNum: 3,
            rateValue: '',
            tableArr: [
                {
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-08',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-07',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }
            ]
          }
      },
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? this.checkOptions: [];
            this.IsDeterminate = false;
        },
      handleCheckedCitiesChange(val) {
            this.checkedCount = this.checkedCities.length;
            this.checkAll = this.checkedCount === this.checkOptions.length;
            this.IsDeterminate = 0 < this.checkedCount && this.checkedCount < this.checkOptions.length;
      },
      formatterTooltip(val) {
            return val / 100
      },
      onUpload() {
            this.$ref.uploader.submit();
      },
      execedLImit(file,fileList) {
            if(fileList.length == this.fileLimitNum) {
                alert('文件个数超出限制！');
            }
      },
      openMessage() {
            this.$message({
              message: 'message',
              type: 'success'
            });
      }
    }
  }
</script>
