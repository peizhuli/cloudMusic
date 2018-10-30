<template>
  <div>
    <ul class="pagination" >
      <li @click="current != 1 ? (current-- && getPage(current--) ) : ''" :disabled="current == 1"  :class="{disabled: current == 1}"><a>&lt;</a></li>
      <li v-for="index in pages" @click="getPage(index)" :class="{'active':current == index}" :key="index">
        <a href="#" >{{index}}</a>
      </li>
      <li @click="current != allpage ? (current++ && getPage(current++)) : ''" :disabled="current == allpage" :class="{disabled: current == allpage}"><a>&gt;</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gotoPage: ''
      }
    },
    props: ['current', 'showItem', 'allpage'],
    computed:{
      pages:function(){
        var pag = [];
        if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
          //总页数和要显示的条数那个大就显示多少条
          var i = Math.min(this.showItem,this.allpage);
          while(i){
            pag.unshift(i--);
          }
        }else{ //当前页数大于显示页数了
          var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
            i = this.showItem;
          if( middle >  (this.allpage - this.showItem)  ){
            middle = (this.allpage - this.showItem) + 1
          }
          while(i--){
            pag.push( middle++ );
          }
        }
        return pag
      }
    },
    methods:{
      getPage:function(index){
        if(index == this.current) return;
        this.current = index;
        this.$emit('getPageData',index);
      }
    }
  }
</script>

<style scoped>
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  .pagination {
    position: relative;

  }
  .pagination li{
    display: inline-block;
    margin:0 5px;
  }
  .pagination li a{
    padding: 2px 10px;
    display:inline-block;
    border: none;
    border-radius: 3px;
    background: #fff;
    color: #333;
  }
  .pagination li a:hover{
    background:#2760f5;
    color:#fff;
  }
  .pagination li.active a{
    background:#2760f5;
    color:#fff;
  }
  .pagination > li:first-child > a,
  .pagination > li:last-child > a {
    border-radius: 0;
  }
  .pagination li.disabled a:hover {
    background: #2760f5;
    color: #fff;
  }
  .goPagination {
    position: relative;
    top: -6px;
    font-size: 13px;
  }
  .goPagination > input {
    background: none;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    width: 60px;
    padding: 0 10px;
    text-align: center;
  }
</style>
