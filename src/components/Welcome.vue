<template>
 <div>
	<navbar v-if="isLoggedIn" />
	<sidebar v-if="isLoggedIn" />
<router-view/>
	<Footer v-if="isLoggedIn" />
 </div>
</template>

<script>
	import Sidebar from './structure/Sidebar'
	import Navbar from './structure/Navbar'
	import Footer from './structure/Footer'
	export default {
		name: "Welcome",
		components: {
			Sidebar,
			Navbar,
			Footer,
		}
	}
</script>

<style>

</style>