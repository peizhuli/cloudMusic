<template>
  <div>
    <div class="">
      <img :src="profile.avatarUrl" />
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';
  export default {
      mounted() {
          this.getUserInfo();
      },
      computed: {
        ...mapState(['profile'])
      },
      methods: {
          getUserInfo: function() {
          }
      }
  }
</script>
