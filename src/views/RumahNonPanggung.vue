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

                    <router-link :to="{name: 'ornamen' }" class="ornamen">
                        Ornamen
                    </router-link>

                    <router-link :to="{name: 'visualisasi' }" class="visualisasi">
                        Visualisasi
                    </router-link>

                    <a href="#" class="search">SEARCH</a>
                </div>
                
            </div>
		
	    </nav>

        <section style="height: 230vh;">

            <div>
                <h1 class="judul_rumah">
                    <br>
                    Rumah Non Panggung
                </h1>
            </div>

            <div class="navigasiImage">                   
                    <div class="content3" v-for="(i,index) in getRumahNonPanggung" :key="index" >
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
    this.$store.dispatch('getRumahNonPanggung')
     
  },
  computed:{
      ...mapState([
        'getRumahNonPanggung',
      ])
  },
  methods:{
      ...mapActions([
        'getRumahNonPanggung',
      ]),


  },
  data(){
    return{
      selectComponent: 'getRumahNonPanggung'
    }
  },

}
</script>