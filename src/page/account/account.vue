<template>
    <div>
        <input type="hidden" :id="profile.userId" />
        <img :src="profile.avatarUrl" />
        <p>昵称：{{ profile.nickname }}</p>
        <p>描述：{{ profile.description }}</p>
        <p>是否VIP：{{ profile.vipType == 0 ? '否' : '是' }}</p>
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
	}
	}
}
</script>
