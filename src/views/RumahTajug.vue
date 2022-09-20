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

        <section style="height: 240vh;">

            <div class="content1">
                <h1 class="judul_rumah">
                    <br>
                    Rumah Tajug
                </h1>

                
                <div class="deskripsirumah" v-for="(i,index) in getLabelClassRumahTajug" :key="index">
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {{i.description.value}}
                    </p>
                    <p>Sumber : Buku Arsitektur Rumah Tradisional Jawa </p>
                </div>	
            </div>

            <div class="navigasiImage">                   
                    <div class="content3" v-for="(i,index) in getRumahTajug" :key="index" >
                        <div v-if="i.image">
                            <img class="centerrumah" v-bind:src="'../assets/' + (i.image.value)">
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
    this.$store.dispatch('getRumahTajug'),
    this.$store.dispatch('getLabelClassRumahTajug')
     
  },
  computed:{
      ...mapState([
        'getRumahTajug',
        'getLabelClassRumahTajug'
      ])
  },
  methods:{
      ...mapActions([
        'getRumahTajug',
        'getLabelClassRumahTajug'
      ]),


  },
  data(){
    return{
      selectComponent: 'getRumahTajug'
    }
  },

}
</script>