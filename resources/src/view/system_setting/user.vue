<template>
  <Card>
    <div class="search-con search-con-top">
      <Select v-model="searchKey" class="search-col">
        <Option v-for="item in columns" v-if="item.key !== 'handle'" :value="item.key"
                :key="`search-col-${item.key}`">
          {{ item.title }}
        </Option>
      </Select>
      <Input @on-change="handleClear" clearable placeholder="输入关键字搜索" class="search-input" v-model="searchValue"/>
      <Button @click="handleSearch" class="search-btn" type="primary">
        <Icon type="search"/>&nbsp;&nbsp;搜索
      </Button>
    </div>
    <Table :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 250 : ''"
           :size="tableSize" :data="tableData3" :columns="tableColumns3"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1"></Page>
      </div>
    </div>
  </Card>
</template>

<script>
import './index.less'

export default {
  name: 'user',
  data() {
    return {
      tableData3: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      showBorder: false,
      showStripe: false,
      showHeader: true,
      showIndex: true,
      showCheckbox: false,
      fixedHeader: false,
      tableSize: 'default',
      searchKey: ''
    }
  },
  computed: {
    tableColumns3() {
      let columns = []
      if (this.showCheckbox) {
        columns.push({
          type: 'selection',
          width: 60,
          align: 'center'
        })
      }
      if (this.showIndex) {
        columns.push({
          type: 'index',
          width: 60,
          align: 'center'
        })
      }
      columns.push({
        title: 'Date',
        key: 'date',
        sortable: true
      })
      columns.push({
        title: 'Name',
        key: 'name'
      })
      columns.push({
        title: 'Age',
        key: 'age',
        sortable: true,
        filters: [
          {
            label: 'Greater than 25',
            value: 1
          },
          {
            label: 'Less than 25',
            value: 2
          }
        ],
        filterMultiple: false,
        filterMethod(value, row) {
          if (value === 1) {
            return row.age > 25
          } else if (value === 2) {
            return row.age < 25
          }
        }
      })
      columns.push({
        title: 'Address',
        key: 'address',
        filters: [
          {
            label: 'New York',
            value: 'New York'
          },
          {
            label: 'London',
            value: 'London'
          },
          {
            label: 'Sydney',
            value: 'Sydney'
          }
        ],
        filterMethod(value, row) {
          return row.address.indexOf(value) > -1
        }
      })
      return columns
    }
  },
  methods: {},
  watch: {
    columns(columns) {
      this.handleColumns(columns)
      this.setDefaultSearchKey()
    },
    value(val) {
      this.handleTableData()
      this.handleSearch()
    }
  },
  mounted() {
    this.handleColumns(this.columns)
    this.setDefaultSearchKey()
    this.handleTableData()
  }
}
</script>
