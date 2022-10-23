<template>
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
                Ragam&nbsp;Hias
            </router-link>

            <router-link :to="{name: 'visualisasi' }" class="visualisasi">
                Visualisasi
            </router-link>

            <a href="#" class="search">SEARCH</a>
            <div class="search" style="top:2.5px; margin:0; line-height:0.5;">
              <input onClick="refresh" v-model="message" type="text" placeholder="Search" size="2" style="height:40%; width:110%;border-radius:5px">
              <span onClick="window.location.href=window.location.href" type="submit" style="font-size: 12px; height:40%; border-radius:0; border:2px solid; border-color:black; padding-bottom:4px;">
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


    <section style="height: 300vh;">
      <div>
          <h1 class="judul_rumah">
              <br>
              <span v-if="this.$route.params.id == 'null'">
                DATA NULL
              </span>
              <span v-else>
                Hasil Pencarian "{{this.$route.params.id}}"
              </span>
              
          </h1>
      </div>

      <span v-if="searchRumah.length" class="navigasiImage">  
        <div class="content3" v-for="(i,index) in searchRumah" :key="index" >
            <div v-if="i.image">
                <img class="centerrumah" v-bind:src="'../src/assets/' + (i.image.value)">
                <br>
            </div>
            
            <div>
                <div class="deskripsi_center">
                    <p>
                        <router-link :to="{ name: 'detailrumah', params: {id: i.namaRumah.value}}" style="color: indigo;">
                            {{i.namaRumah.value}}
                            <br>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
      </span>
      <span v-else-if="this.$route.params.id == 'null'">
        <p style="margin-left:1%;">Input SEARCH harus terisi, silahkan kembali ke halaman 
          <router-link :to="{name: 'home' }">
              Home
          </router-link>
        </p>
      </span>
      <span v-else>
        <p style="margin-left:1%;">Data tidak ditemukan, silahkan kembali ke halaman 
          <router-link :to="{name: 'home' }">
              Home
          </router-link>
        </p>
      </span>
      <br><br>

    </section>

 
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'


export default {

  mounted(){
    this.$store.dispatch('searchRumah', this.$route.params.id)
     
  },
  computed:{
      ...mapState([
        'searchRumah'  
      ])
  },
  methods:{
      ...mapActions([
        'searchRumah'        
      ]),


  },
  data(){
    return{
      message: null
    }
  },

}
</script>
