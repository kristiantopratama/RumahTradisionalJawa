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

                    <a href="#" class="search" style="margin-right:2%;">SEARCH</a>

                    <div class="search" style="top:2.5px; margin:0; line-height:0.5;">
                        <input v-model="message" type="text" placeholder="Search" size="2" style="height:40%; width:110%;border-radius: 5px;">
                        <span @click="reloadPage" type="submit" style="font-size: 12px; height:40%; border-radius:0; border:2px solid; border-color:black; padding-bottom:4px;">
                            <span v-if="message==null">
                                <router-link :to="{ name: 'search', params: {id: 'null'}}" style="text-align:center;">
                                    <b>&nbsp;Search&nbsp;Rumah&nbsp;</b>
                                </router-link>
						    </span>
                            <span v-else>
                                <router-link :to="{ name: 'search', params: {id: message}}" style="text-align:center;">
                                    <b>&nbsp;Search&nbsp;Rumah&nbsp;</b>
                                </router-link>
                            </span>
                        </span>
				    </div>

                </div>
                
            </div>
		
	    </nav>

        <section style="height: 95vh;">

            <div class="content1" v-for="(i,index) in getRuangRumahDetail" :key="index">
                <div v-if="i.namaRuang">
                    <h1 class="judul_rumah" >
                        <br>
                        {{i.namaRuang.value}}
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
                <div class="content4" v-for="(i,index) in getRumahFromRuang" :key="index" >
                    <!-- <div v-if="i.image">
                        <img class="centerrumahfromRuang" v-bind:src="'/src/assets/' + (i.image.value)">
                        <br>
                    </div> -->
                    
                    <div>
                        <div class="deskripsi_komponen">
                            <p>
                                <router-link :to="{ name: 'detailrumah', params: {id: i.namaRumah.value}}" style="color: indigo;">
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
    this.$store.dispatch('getRuangRumahDetail', this.$route.params.id),
    this.$store.dispatch('getRumahFromRuang', this.$route.params.id)
     
  },
  computed:{
      ...mapState([
        'getRuangRumahDetail',
        'getRumahFromRuang'
      ])
  },
  methods:{
      ...mapActions([
        'getRuangRumahDetail',
        'getRumahFromRuang'
      ]),


  },
  data(){
    return{
      message : null
    }
  },

}
</script>