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

        <section style="height: 110vh;">

            <div class="content1" v-for="(i,index) in getKomponenRumah" :key="index">
                <div v-if="i.namaKomponen">
                    <h1 class="judul_rumah" >
                        <br>
                        {{i.namaKomponen.value}}
                    </h1>
                </div>
                <div v-if="i.deskripsi">
                    <p class="deskripsi_ruang" >
                        <br>
                        "{{i.deskripsi.value}}"
                        <br><br>
                    </p>
                </div>
                <span v-else>
                    <br><br>
                </span>
            </div>
            
            <p class="judul_rumah" style="font-size:24px;" >
                Dimiliki oleh rumah :
            </p>
            <div class="navigasiKomponen">         
                <div class="content4" v-for="(i,index) in getRumahFromKomponen" :key="index" >
                    <!-- <div v-if="i.image">
                        <img class="centerrumahfromkomponen" v-bind:src="'/src/assets/' + (i.image.value)">
                        <br>
                    </div> -->
                    
                    <div>
                        <div class="deskripsi_komponen">
                            <p>
                                <router-link :to="{ name: 'detailrumah', params: {id: i.namaRumah.value}}">
                                    {{i.namaRumah.value}}
                                    <br>
                                </router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <!-- <div class="navigasi" v-for="(i,index) in getDeskripsiRagamHias" :key="index">
                <div class="content2"  >
                    <div v-if="i.image">
                        <img class="centerrumah" v-bind:src="'/src/assets/' + (i.image.value)" style="height:50vh;">
                        <br>
                    </div>
                </div>

                <div class="content2">  
                    <div class="deskripsiragamhias" v-if="i.Deskripsi">
                        <p style="line-height:2em; text-align:justify;">
                            <b>Deskripsi :</b>
                            <br>
                            {{i.Deskripsi.value}} 
                        </p>
                    </div>	
                    <div class="deskripsi" v-if="i.namaRumah">
                        <p style="line-height:2em;">
                            <b>Dimiliki oleh :</b>
                            <br>
                            <router-link :to="{ name: 'detailrumah', params: {id: i.namaRumah.value}}">
                                <i>{{i.namaRumah.value}}</i>  
                            </router-link>
                            
                        </p>
                    </div>	                    
                </div>


            </div> -->


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
    this.$store.dispatch('getKomponenRumah', this.$route.params.id),
    this.$store.dispatch('getRumahFromKomponen', this.$route.params.id)
     
  },
  computed:{
      ...mapState([
        'getKomponenRumah',
        'getRumahFromKomponen'
      ])
  },
  methods:{
      ...mapActions([
        'getKomponenRumah',
        'getRumahFromKomponen'
      ]),


  },
  data(){
    return{
      message : '0'
    }
  },

}
</script>