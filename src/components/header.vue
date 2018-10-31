<template>
  <div class="header-bar">
    <Icon class="menu-icon" type="md-menu" size="40" />
    <div class="icon-group">
      <Icon type="ios-musical-notes-outline" size="40" />
      <Icon type="ios-person-add-outline" size="40" />
    </div>
    <Icon class="search-icon" type="ios-search-outline" size="40" />
  </div>
</template>

<script>
  export default {
      name: 'header-bar',
      data() {
          return {

          }
      }
  }
</script>

<style scope>
  .header-bar {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    color: #fff;
    background: #d6413d;
  }
  .icon-group {
    display: inline-block;
  }
  .menu-icon {
    float: left;
    margin-left: 5%;
    line-height: 4rem;
  }
  .search-icon {
    float: right;
    margin-right: 5%;
    line-height: 4rem;
  }
</style>
