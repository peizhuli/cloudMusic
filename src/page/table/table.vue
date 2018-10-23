<template>
  <div>
    <mt-header fixed title="标题">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-cell title="标题" value="cell" label="备注信息" icon="more"></mt-cell>
    <mt-switch v-model="switchValue">switch：{{ switchValue }}</mt-switch>
    <mt-field label="邮箱" :state="fieldState" v-model="fieldEmail"></mt-field>
    <mt-checklist :options="checkOptions" v-model="checklistValue"></mt-checklist>
  </div>
</template>

<script>
  import { Cell, Switch, Field, Checklist, Header } from 'mint-ui';
  export default {
      data() {
          return {
            switchValue: false,
            fieldEmail: '',
            fieldState: 'error',
            checklistValue: [],
            checkOptions: [
              {
                label: '被禁用',
                value: '值F',
                disabled: true
              },
              {
                label: '选中禁用',
                value: '选中禁用的值',
                disabled: true
              },
              {
                label: '选项A',
                value: '值A'
              },
              {
                label: '选项B',
                value: '值B'
              }
            ]
          }
      },
      components: {
        Cell,
        Switch,
        Field,
        Checklist,
        Header
      }
  }
</script>
