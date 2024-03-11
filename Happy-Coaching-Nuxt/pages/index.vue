<template>
	<div class="container-background d-flex ">
		<div class="container-about-me mx-auto">
			<div class="text-about-me ">Hear out what my<br>clients say about me.</div>
			<v-sheet
			    class="mx-auto container-swiper"
			    elevation="8"
			>
			    <v-slide-group
			        v-model="model"
			        class="pa-4"
			        selected-class="bg-primary"
			        mandatory
			        show-arrows
			    >
			    <v-slide-group-item>
				    <div class='client-container'>
				    	<div class="container-text ">
				    		"I gained so much 
				    		<div class="bold-text d-inline">
				    		    confidence
				    		</div> 
				    		in my ability to connect and deepen my relationships with people. "
				    	</div>
				    	<div class="bold-text pt-4 pb-4">Jane</div>
				    	<NuxtImg class='img-people' preload src="/people.png" />  
				    	<div>
				    		<v-rating
				    		    v-model="activeRating"
				    		    active-color="orange"
				    		    color="orange-lighten-1"
				    		></v-rating>
				    	</div>
				    </div>
				</v-slide-group-item>
				<v-slide-group-item>
				    <div class='client-container'>
				    	<div class="container-text ">
				    		"I gained so much 
				    		<div class="bold-text d-inline">
				    		    confidence
				    		</div> 
				    		in my ability to connect and deepen my relationships with people. "
				    	</div>
				    	<div class="bold-text pt-4 pb-4">Jane</div>
				    	<NuxtImg class='img-people' preload src="/people.png" />  
				    	<div>
				    		<v-rating
				    		    v-model="noActive"
				    		    active-color="orange"
				    		    color="silwer"
				    		></v-rating>
				    	</div>
				    </div>
				</v-slide-group-item>
				<v-slide-group-item>
				    <div class='client-container'>
				    	<div class="container-text ">
				    		"I gained so much 
				    		<div class="bold-text d-inline">
				    		    confidence
				    		</div> 
				    		in my ability to connect and deepen my relationships with people. "
				    	</div>
				    	<div class="bold-text pt-4 pb-4">Jane</div>
				    	<NuxtImg class='img-people' preload src="/people.png" />  
				    	<div>
				    		<v-rating
				    		    v-model="noActive"
				    		    active-color="orange"
				    		    color="silwer"
				    		></v-rating>
				    	</div>
				    </div>
				</v-slide-group-item>
				<v-slide-group-item>
				    <div class='client-container'>
				    	<div class="container-text ">
				    		"I gained so much 
				    		<div class="bold-text d-inline">
				    		    confidence
				    		</div> 
				    		in my ability to connect and deepen my relationships with people. "
				    	</div>
				    	<div class="bold-text pt-4 pb-4">Jane</div>
				    	<NuxtImg class='img-people' preload src="/people.png" />  
				    	<div>
				    		<v-rating
				    		    v-model="noActive"
				    		    active-color="orange"
				    		    color="silwer"
				    		></v-rating>
				    	</div>
				    </div>
				</v-slide-group-item>
				<v-slide-group-item>
				    <div class='client-container'>
				    	<div class="container-text ">
				    		"I gained so much 
				    		<div class="bold-text d-inline">
				    		    confidence
				    		</div> 
				    		in my ability to connect and deepen my relationships with people. "
				    	</div>
				    	<div class="bold-text pt-4 pb-4">Jane</div>
				    	<NuxtImg class='img-people' preload src="/people.png" />  
				    	<div>
				    		<v-rating
				    		    v-model="noActive"
				    		    active-color="orange"
				    		    color="silwer"
				    		></v-rating>
				    	</div>
				    </div>
				</v-slide-group-item>
                </v-slide-group>
            </v-sheet>
        </div>
    </div>
</template>
<script>
  export default {
    data: () => ({
      model: null,
       activeRating: 5,
       noActive: 0
    }),
  }
</script>
<style>
.container-about-me{
	min-width: 375px;
}
.text-about-me{
	padding: 120px 0 10px 50px;
	font-size: 30px;
	font-weight: 800;
	line-height: 42px;
	letter-spacing: -0.01em;
	color: #333461;
}
.bold-text,
.container-text{
	font-size: 17px;
	line-height: 32px;
	letter-spacing: -0.03em;
}
.bold-text{
	font-weight: 700;
}
.container-text{
	font-weight: 400;
}
.v-rating__item .v-btn--variant-plain{
    width: 20px;
    margin-left: 3px;
    height: 20px;
}
.v-slide-group__next--disabled, .v-slide-group__prev--disabled,
.v-slide-group__next, .v-slide-group__prev{
	display: none;
}
.client-container {
	margin: 10px;
	width: 298px;
	height: 391px;
	padding: 48px;
	margin-right: 5px;
	background: white;
}
.container-swiper{
	max-width: 375px;
	background: none;
	box-shadow: none !important;
}
.img-people{
	width: 69px;
	height: 70px;
}
.container-background{
	background: #FAF8F6;
	width: 100%;
}	
@media only screen and (min-width: 768px){
	.v-slide-group__next--disabled, .v-slide-group__prev--disabled,
	.v-slide-group__next, .v-slide-group__prev{
		display: flex;
	}
	.container-about-me,
	.container-swiper{
		max-width: 764px;
	}
	.text-about-me{
		padding-left: 90px;
	}
}
@media only screen and (min-width: 1024px){
	.container-about-me{
		min-width: 1024px;
	}
	.client-container{
		width: 400px;
		height: 391px;
		margin-right: 27px;
	}
	.container-text,
	.bold-text{
		font-size: 24px;
	}
	.container-swiper{
		max-width: 1009px;
	}
}
@media only screen and (min-width: 1440px){
	.container-about-me{
		min-width: 1440px;
	}
	.text-about-me{
		font-size: 48px;
		line-height: 56px;
		padding-left: 150px;
	}
	.container-swiper{
		max-width: 1292px;
	}
}
</style>