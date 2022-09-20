<template>

<body>
	<nav style="height:11vh;">
		<div class="navigasi">
			<router-link :to="{name: 'home' }" >
                        Rumah Tradisional <br> Indonesia
            </router-link>
			<div class="navigasi">
				<router-link :to="{name: 'home' }" class="home">
                    <b>Home</b>
                </router-link>

				<router-link :to="{name: 'upacaraadat' }" class="provinsi">
                        Upacara
                </router-link>

				<router-link :to="{name: 'ragamhias' }" class="ornamen">
					Ragam&nbsp;Hias
				</router-link>

				<router-link :to="{name: 'visualisasi' }" class="visualisasi">
					Visualisasi
				</router-link>

				<a href="#" class="search" style="margin-right:2%;">SEARCH</a>

				<div class="search" style="top:2.5px; margin:0; line-height:0.5;">
					<input v-model="message" type="text" placeholder="Search" size="2" style="height:40%; width:110%;border-radius:5px">
					<span @click="reloadPage" type="submit" style="font-size: 12px; height:40%; border-radius:0; border:2px solid; border-color:black; padding-bottom:4px;">
						<router-link :to="{ name: 'search', params: {id: message}}" style="text-align:center;">
							<b>&nbsp;Search&nbsp;Rumah&nbsp;</b>
						</router-link>
					</span>
				</div>
				
			</div>
			
		</div>
		
	</nav>

	<section style="height:315vh;">
		<div class="content1">
			<span class="judul_home">
				<b>Rumah Tradisional Jawa</b>	
			</span>

			<div>
				<img class="center" src="../assets/rumah_joglo.jpg" alt="">
			</div>
			
			<div class="deskripsi" v-for="(i,index) in getLabelClassRumah" :key="index">
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;
					{{i.description.value}}
				</p>
				<p>Sumber : Buku Arsitektur Rumah Tradisional Jawa </p>
			</div>	
		</div>

		<div class="navigasi">
			<div class="content2">
				<br>
				<img class="centerimage" src="../assets/joglohageng.jpeg" alt="">
				<br>
				<button class="centerbutton">
					<router-link :to="{name: 'rumahjoglo' }" style="color:black;">
                    	Rumah Joglo
                	</router-link>
				</button>
			</div>

			<div class="content2">
				<br>
				<img class="centerimage" src="../assets/limasanlawakan.jpeg" alt="">
				<br>
				<button class="centerbutton">
					<router-link :to="{name: 'rumahlimasan' }" style="color:black;">
                    	Rumah Limasan
                	</router-link>
				</button>
			</div>
		</div>


		<div class="navigasi">
			<div class="content2">
				<br>
				<img class="centerimage" src="../assets/kampungpokok.jpeg" alt="">
				<br>
				<button class="centerbutton">
					<router-link :to="{name: 'rumahkampung' }" style="color:black;">
                    	Rumah Kampung
                	</router-link>
				</button>
			</div>

			<div class="content2">
				<br>
				<img class="centerimage" src="../assets/masjidanlambangteplok.jpeg" alt="">
				<br>
				<button class="centerbutton">
					<router-link :to="{name: 'rumahtajug' }" style="color:black;">
                    	Rumah Tajug
                	</router-link>
				</button>
			</div>
		</div>

		<div class="navigasi">
			<div class="content2">
				<br>
				<img class="centerimage" src="../assets/panggangpepokok.jpeg" alt="">
				<br>
				<button class="centerbutton">
					<router-link :to="{name: 'rumahpanggangpe' }" style="color:black;">
                    	Rumah Panggang Pe
                	</router-link>
				</button>
			</div>

		</div>
		
	</section>

	<footer>
		<span class="footer_home">
				Universitas Kristen Duta Wacana	
		</span>
	</footer>

</body>

    
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'


export default {

  mounted(){
    this.$store.dispatch('searchRumah', this.$route.params.id),
	this.$store.dispatch('getLabelClassRumah')
     
  },
  computed:{
      ...mapState([
        'searchRumah',
		'getLabelClassRumah'
      ])
  },
  methods:{
      ...mapActions([
        'searchRumah',
		'getLabelClassRumah'       
      ]),

	  reloadPage() {
      window.location.reload();
    }

  },
  data(){
    return{
      message: '0'
    }
  },

}
</script>