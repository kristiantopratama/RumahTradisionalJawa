<template>
    <body>
        <nav>
            <div class="navigasi">
                <router-link :to="{name: 'home' }" >
                        Rumah Tradisional <br> Indonesia
                </router-link>
                <div class="navigasi">
                    <router-link :to="{name: 'home' }" class="home">
                        Home
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

                    <a href="#" class="search">SEARCH</a>

                    <div class="search" style="top:2.5px; margin:0; line-height:0.5;">
                        <input v-model="message" type="text" placeholder="Search" size="2" style="height:40%; width:110%;">
                        <span @click="reloadPage" type="submit" style="font-size: 12px; height:40%; border-radius:0; border:2px solid; border-color:black; padding-bottom:4px;">
                            <router-link :to="{ name: 'search', params: {id: message}}" style="text-align:center;">
                                <b>&nbsp;Search&nbsp;Rumah&nbsp;</b>
                            </router-link>
                        </span>
				    </div>
                </div>
                
            </div>
		
	    </nav>

        <section style="height: 125vh;">

            <div class="content1" v-for="(i,index) in getDeskripsiUpacara" :key="index">
                <div v-if="i.namaUpacara">
                    <h1 class="judul_rumah" >
                        <br>
                        {{i.namaUpacara.value}}
                        <br>
                        <br>
                    </h1>
                </div>
            </div>

            <div class="navigasi" v-for="(i,index) in getDeskripsiUpacara" :key="index">
                <div class="content2"  >
                    <div v-if="i.image">
                        <img class="centerrumah" v-bind:src="'/src/assets/' + (i.image.value)" style="height:50vh;">
                        <br>
                    </div>
                </div>

                <div class="content2">  
                    <div class="deskripsiragamhias" v-if="i.deskripsi">
                        <p style="line-height:2em; text-align:justify;">
                            <b>Deskripsi :</b>
                            <br>
                            {{i.deskripsi.value}} 
                        </p>
                    </div>	
                </div>
            </div>

            <div style="margin-left: 18px; margin-top: 7px;">
                <br>
                <b>Dimiliki oleh :</b>
                <div class="navigasiImage">
                    <div class="content3" v-for="(i,index) in getRumahFromUpacara" :key="index" >
                        <div class="deskripsiupacaraadat" v-if="i.namaRumah" style="margin-right: 30px;">
                            <router-link :to="{ name: 'detailrumah', params: {id: i.namaRumah.value}}">
                                {{i.namaRumah.value}}
                            </router-link>
                        </div>
                    </div>	                    
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
    this.$store.dispatch('getDeskripsiUpacara', this.$route.params.id),
    this.$store.dispatch('getRumahFromUpacara', this.$route.params.id)
     
  },
  computed:{
      ...mapState([
        'getDeskripsiUpacara',
        'getRumahFromUpacara'
      ])
  },
  methods:{
      ...mapActions([
        'getDeskripsiUpacara',
        'getRumahFromUpacara'
      ]),


  },
  data(){
    return{
      message : '0'
    }
  },

}
</script>