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

                    <router-link :to="{name: 'provinsi' }" class="provinsi">
                        Provinsi
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

        <section style="height: 175vh;">

            <!--
            <div class="content1">
                <div v-for="(i,index) in getDetailBahan" :key="index">
                    <div v-if="i.namaBahan">
                        <h1 class="judul_rumah" >
                            <br>
                            {{i.namaBahan.value}}
                        </h1>
                    </div>
                </div>

                <div class="deskripsi">
                    <p>Deskripsi : Kayu Belian adalah .........</p>
                </div>	
            </div>
            -->

            <div v-for="(i,index) in getDetailBahan" :key="index">
                <div v-if="i.namaBahan">
                    <h1 class="judul_rumah">
                        <br>
                        Rumah Tradisional berbahan
                        <i>"{{i.namaBahan.value}}"</i> 
                    </h1>
                </div>

                
                <!-- <div class="navigasiImage">                   
                    <div class="content3" v-for="(i,index) in getRumahFromBahan" :key="index" >
                        <div v-if="i.image">
                            <img class="centerrumah" v-bind:src="'/src/assets/' + (i.image.value)">
                            <br>
                        </div>
                       
                        <div>
                            <div class="deskripsi_center">
                                <p>
                                    <router-link :to="{ name: 'detailrumah', params: {id: i.namaRumah.value}}">
                                        {{i.namaRumah.value}}
                                        <br>
                                    </router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div> -->
                
                <!--
                <div v-for="(i,index) in getRumahFromBahan" :key="index">
                    <div class="deskripsi" v-if="i.namaRumah">
                        <p>
                            <router-link :to="{ name: 'detailrumah', params: {id: i.namaRumah.value}}">
                                {{i.namaRumah.value}}
                                <br>
                            </router-link>
                        </p>
                    </div>
                </div>
                -->
                
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
    this.$store.dispatch('getDetailBahan', this.$route.params.id),
    this.$store.dispatch('getRumahFromBahan', this.$route.params.id)
     
  },
  computed:{
      ...mapState([
        'getDetailBahan',
        'getRumahFromBahan'
      ])
  },
  methods:{
      ...mapActions([
        'getDetailBahan',
        'getRumahFromBahan'
      ]),


  },
  data(){
    return{
      message : '0'
    }
  },

}
</script>