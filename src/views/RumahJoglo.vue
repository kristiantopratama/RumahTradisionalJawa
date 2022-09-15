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
                </div>
                
            </div>
		
	    </nav>

        <section style="height: 215vh;">

            <div class="content1">
                <h1 class="judul_rumah">
                    <br>
                    Rumah Joglo
                </h1>

                
                <div class="deskripsirumah" v-for="(i,index) in getLabelClassRumahJoglo" :key="index">
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {{i.description.value}}
                    </p>
                    <p>Sumber : Buku Arsitektur Rumah Tradisional Jawa </p>
                </div>	
            </div>

            <div class="navigasiImage">                   
                <div class="content3" v-for="(i,index) in getRumahJoglo" :key="index" >
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
    this.$store.dispatch('getRumahJoglo'),
    this.$store.dispatch('getLabelClassRumahJoglo')
     
  },
  computed:{
      ...mapState([
        'getRumahJoglo',
        'getLabelClassRumahJoglo'
      ])
  },
  methods:{
      ...mapActions([
        'getRumahJoglo',
        'getLabelClassRumahJoglo'
      ]),


  },
  data(){
    return{
      selectComponent: 'getRumahJoglo'
    }
  },

}
</script>