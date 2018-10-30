<template>
    <div>
        <input type="hidden" :id="profile.userId" />
        <img :src="profile.avatarUrl" />
        <p>昵称：{{ profile.nickname }}</p>
        <p>描述：{{ profile.description }}</p>
        <p>是否VIP：{{ profile.vipType == 0 ? '否' : '是' }}</p>
      <div @click="goCollections(profile.userId)">个人收藏</div>
      <div @click="goPlayRecord(profile.userId)">播放记录</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
mounted() {
	this.getUserInfo();
},
    data() {
        return {

        }
    },
	computed: {
	 ...mapState(['profile'])
	},
	methods: {
    getUserInfo: function() {
      console.log(this.profile);
    },
    goCollections: function(id) {
      this.$router.push({path: '/collection', query: { id: id }});
    },
    goPlayRecord: function(id) {
      this.$router.push({path: '/playRecord', query: { id: id }})
    }
	}
}
</script>
