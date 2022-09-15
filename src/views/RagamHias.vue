<template>
    <body>
        <nav style="height:11vh;">
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
					    <b>Ragam&nbsp;Hias</b>
				    </router-link>

                    <router-link :to="{name: 'visualisasi' }" class="visualisasi">
                        Visualisasi
                    </router-link>

                    <a href="#" class="search">SEARCH</a>
                    <div class="search" style="top:2.5px; margin:0; line-height:0.5;">
                        <input v-model="message" type="text" placeholder="Search" size="2" style="height:40%; width:100%;">
                        <span @click="reloadPage" type="submit" style="font-size: 12px; height:40%; border-radius:0; border:2px solid; border-color:black; padding-bottom:4px;">
                            <router-link :to="{ name: 'search', params: {id: message}}" style="text-align:center;">
                                <b>&nbsp;Search&nbsp;Rumah&nbsp;</b>
                            </router-link>
                        </span>
				    </div>
                </div>
                
            </div>
            
        </nav>

        <section style="height:185vh;">

            <div class="navigasiImage">                   
                    <div class="content3" v-for="(i,index) in getAllRagamHias" :key="index" >
                        <div v-if="i.image">
                            <img class="centerrumah" v-bind:src="'/src/assets/' + (i.image.value)">
                            <br>
                        </div>
                       
                        <div>
                            <div class="deskripsi_center" >
                                <p>
                                    <router-link :to="{ name: 'detailragamhias', params: {id: i.namaRagamHias.value}}">
                                         {{i.namaRagamHias.value}}
                                        <br>
                                    </router-link> 
                                </p>
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
    this.$store.dispatch('getAllRagamHias')
     
  },
  computed:{
      ...mapState([
        'getAllRagamHias',
      ])
  },
  methods:{
      ...mapActions([
        'getAllRagamHias',
      ]),


  },
  data(){
    return{
      message : '0'
    }
  },

}
</script>