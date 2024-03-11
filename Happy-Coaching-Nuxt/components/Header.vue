<template>
    <v-container class=" container-header mx-auto justify-space-between align-center desktop-haeder">
  	    <NuxtImg class='img-logo' preload src="/logo.png" />
  	    <div class='d-flex align-center'>
  		    <v-list class='d-flex h-auto '>
  			    <v-list-item class='pa-0 margin-right cursor-pointer'>Home</v-list-item>
  			    <v-list-item class='pa-0 margin-right cursor-pointer'>Services</v-list-item>
  			    <v-list-item class='pa-0 margin-right cursor-pointer'>About us</v-list-item>
  			    <v-list-item class='pa-0 margin-right cursor-pointer'>Extra Salespage</v-list-item>
  		    </v-list>
  		    <v-btn class='btn-header'>
  		        Get your free guide now
  		    </v-btn>
  	    </div>
    </v-container>
    <v-container class="container-header mx-auto justify-space-between align-center mobile-haeder">
  	    <NuxtImg class='img-logo' preload src="/logo.png" />
  	    <NuxtImg @click="modalHeader = true" class='burger-header' preload src="/burger.svg" />  
  	    <v-dialog
  	        class='modal-header'
  	        v-model="modalHeader"
  	        width="auto"
  	    >
  	     <NuxtImg @click="modalHeader = false" class='close-burger-header mr-5 mt-5' preload src="/closeBurgerMenu.png" />  
  	    	<v-list class='d-block h-auto '>
  			    <v-list-item class='pa-0 margin-right text-end pr-5 '>Home</v-list-item>
  			    <v-list-item class='pa-0 margin-right text-end pr-5'>Services</v-list-item>
  			    <v-list-item class='pa-0 margin-right text-end pr-5'>About us</v-list-item>
  			    <v-list-item class='pa-0 margin-right text-end pr-5'>Extra Salespage</v-list-item>
  		    </v-list>
  		    <v-btn class='btn-header mr-5 mb-4'>
  		        Get your free guide now
  		    </v-btn>
  	    </v-dialog>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        modalHeader: false,
      }
    },
  }
</script>
<style>
.close-burger-header{
	width: 21px;
	height: 21px;
}
.btn-header{
	box-shadow: none;
	text-transform: none;
	background: #20AD96;
	width: 168px;
	height: 35px;
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0px;
	color: white;
}
.v-dialog.modal-header  .v-list,
.v-dialog.modal-header > .v-overlay__content{
	background: #FAF8F6;
}
.v-dialog.modal-header > .v-overlay__content{
	position: absolute;
	margin: 0;
	display: flex;
	align-items: flex-end;
	min-width: 263px;
    inset: 0 0 auto auto;
}
.burger-header{
	min-width: 30px;
	height: 18px;
}
.img-logo{
	max-width: 149px;
	height: 28px;
}
.container-header{
	max-width: 375px;
}
.mobile-haeder,
.modal-header{
	display: flex;
}
.desktop-haeder{
	display: none;
}
@media only screen and (min-width: 768px){
	.mobile-haeder,
	.modal-header{
		display: none;
	}
	.desktop-haeder{
		display: flex;
	}
	.container-header{
		padding: 0 30px 0 35px;
		max-width: 768px;
		height: 60px;
	}
	.margin-right{
		font-size: 14px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: -0.02em;
		text-align: right;
		margin-right: 15px !important;
	}
}
@media only screen and (min-width: 1024px){
	.container-header{
		padding: 0 75px 0 85px;
		max-width: 1024px;
	}

	.margin-right:last-child{
		margin-right: 27px !important;
	}
	.margin-right{
		font-size: 15px;
		margin-right: 30px !important;
	}
	.btn-header{
		width: 193px;
		height: 40px;
		font-size: 14px;
	}
}
@media only screen and (min-width: 1440px){
	.container-header{
		max-width: 1440px;
	}
}
</style>