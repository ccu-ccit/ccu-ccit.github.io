<template>
  <a-table :columns="columns" :data-source="activity.questions" :row-selection="rowSelection" />
</template>
<script>

const columns = [
  {
    title: '題目',
    dataIndex: 'question',
    key: 'question',
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default {
  name: 'selectQuestion',
  props: {
    activity: {
      type: Object,
      default: null
    }
  },
  created(){
    console.log(this.activity)
  },
  data() {
    return {
      columns,
      rowSelection,
    };
  },
};
</script>
