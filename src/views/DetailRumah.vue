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

        <section style="height: 245vh;">
        
            <span v-for="(i,index) in getDetailRumah.slice(getDetailRumah,1)" :key="index">
                <div class="borderbawah">
                    <span v-if="i.namaRumah">
                        <h1 class="judul_rumah">
                            <br>
                            {{i.namaRumah.value}}
                        </h1>
                    </span>
            
                    <span v-if="i.image" class="navigasiImage">
                        <img class="center_detail" v-bind:src="'/src/assets/' + (i.image.value)">
                        <img class="center_detail" v-bind:src="'/src/assets/' + (i.image2.value)">
                        <br>
                    </span>

                    <div class="deskripsi" v-if="i.deskripsi">
                        <p> <b>Deskripsi</b> <br> {{i.deskripsi.value}}</p>
                        
                        <div v-for="(i,index) in getKastaRumah" :key="index">
                            <p> <b>Kasta</b> <br> {{i.kastaRumah.value}}</p> 
                        </div>
                         
                    </div>
                </div>
                
                <div class="navigasi">
                    <div class="content2" >
                        <div class="deskripsi2">
                            <p><b>Komponen Atap Rumah </b></p>
                            <div class="navigasi2" v-if="getAtapRumah.length">
                                <div v-for="(i,index) in getAtapRumah" :key="index">
                                    <li v-if="i.atapRumah">
                                        <router-link :to="{ name: 'detailkomponenrumah', params: {id: i.atapRumah.value}}">
                                            {{i.atapRumah.value}} 
                                            &nbsp;&nbsp;&nbsp;
                                            <br>
                                        </router-link>
                                        <br>
                                    </li>
                                </div>
                            </div>
                            <span v-else>
                                <i> Data Tidak Ditemukan </i>
                            </span>
                        </div>

                        <div class="deskripsi2">
                            <p><b>Komponen Tiang Rumah </b></p>
                            <div class="navigasi2" v-if="getTiangRumah.length">
                                <div v-for="(i,index) in getTiangRumah" :key="index">
                                    <li v-if="i.tiangRumah">
                                        <router-link :to="{ name: 'detailkomponenrumah', params: {id: i.tiangRumah.value}}">
                                            {{i.tiangRumah.value}} 
                                            &nbsp;&nbsp;&nbsp;
                                            <br>
                                        </router-link>
                                        <br>
                                    </li>
                                </div>
                            </div>
                            <span v-else>
                                <i> Data Tidak Ditemukan </i>
                            </span>
                        </div>

                        <div class="deskripsi2">
                            <p><b>Komponen Lainnya </b></p>
                            <div class="navigasi2" v-if="getKomponenAll.length">
                                <div v-for="(i,index) in getKomponenAll" :key="index">
                                    <li v-if="i.komponenRumah">
                                        <router-link :to="{ name: 'detailkomponenrumah', params: {id: i.komponenRumah.value}}">
                                            {{i.komponenRumah.value}} 
                                            &nbsp;&nbsp;&nbsp;
                                            <br>
                                        </router-link>
                                        <br>
                                    </li>
                                </div>
                            </div>
                            <span v-else>
                                <i> Data Tidak Ditemukan </i>
                            </span>
                        </div>
                    </div>

                    <div class="content2" >
                        <div class="deskripsi2">
                            <p><b>Ruang Rumah </b></p>
                            <div class="navigasi2" v-if="getRuangRumah.length">
                                <div v-for="(i,index) in getRuangRumah" :key="index">
                                    <li v-if="i.ruangRumah">
                                        <router-link :to="{ name: 'detailruang', params: {id: i.ruangRumah.value}}">
                                            {{i.ruangRumah.value}} 
                                            &nbsp;&nbsp;&nbsp;
                                            <br>
                                        </router-link>
                                        <br>
                                    </li>
                                </div>
                            </div>
                            <span v-else>
                                <i> Data Tidak Ditemukan </i>
                            </span>
                        </div>

                        <div class="deskripsi2">
                            <p><b>Upacara Adat </b></p>
                            <div class="navigasi2" v-if="getUpacaraAdat.length">
                                <div v-for="(i,index) in getUpacaraAdat" :key="index">
                                    <li v-if="i.upacaraAdat">
                                        <router-link :to="{ name: 'detailupacaraadat', params: {id: i.upacaraAdat.value}}">
                                            {{i.upacaraAdat.value}} 
                                            &nbsp;&nbsp;&nbsp;
                                            <br>
                                        </router-link>
                                        <br>
                                    </li>
                                </div>
                            </div>
                            <span v-else>
                                <i> Data Tidak Ditemukan </i>
                            </span>
                        </div>

                        <div class="deskripsi2">
                            <p><b>Ragam Hias </b></p>
                            <div class="navigasi2" v-if="getRagamHias.length">
                                <div v-for="(i,index) in getRagamHias" :key="index">
                                    <li v-if="i.ragamHias">
                                        <router-link :to="{ name: 'detailragamhias', params: {id: i.ragamHias.value}}">
                                            {{i.ragamHias.value}} 
                                            &nbsp;&nbsp;&nbsp;
                                            <br>
                                        </router-link>
                                        <br>
                                    </li>
                                </div>
                            </div>
                            <span v-else>
                                <i> Data Tidak Ditemukan </i>
                            </span>
                        </div>
                    </div>
                </div>
            </span>
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
    this.$store.dispatch('getDetailRumah', this.$route.params.id),
    this.$store.dispatch('getRuangRumah', this.$route.params.id),
    this.$store.dispatch('getAtapRumah', this.$route.params.id),
    this.$store.dispatch('getTiangRumah', this.$route.params.id),
    this.$store.dispatch('getKastaRumah', this.$route.params.id),
    this.$store.dispatch('getKomponenAll', this.$route.params.id),
    this.$store.dispatch('getUpacaraAdat', this.$route.params.id),
    this.$store.dispatch('getRagamHias', this.$route.params.id)

    // this.$store.dispatch('getDetailRumah', this.$route.params.id),
    // this.$store.dispatch('getRuangRumah', this.$route.params.id),
    // this.$store.dispatch('getTinggiRumah', this.$route.params.id),
    // this.$store.dispatch('getOrnamen', this.$route.params.id),
    // this.$store.dispatch('getAtap', this.$route.params.id),
    // this.$store.dispatch('getDinding', this.$route.params.id),
    // this.$store.dispatch('getTiang', this.$route.params.id),
    // this.$store.dispatch('getLantai', this.$route.params.id),
    // this.$store.dispatch('getJenisRumah', this.$route.params.id)
     
  },
  computed:{
      ...mapState([
        'getDetailRumah',
        'getRuangRumah',
        'getAtapRumah',
        'getKastaRumah',
        'getTiangRumah',
        'getKomponenAll',
        'getUpacaraAdat',
        'getRagamHias'

        // 'getDetailRumah',
        // 'getRuangRumah',
        // 'getTinggiRumah',
        // 'getOrnamen',
        // 'getAtap',
        // 'getDinding',
        // 'getTiang',
        // 'getLantai',
        // 'getJenisRumah'
      ])
  },
  methods:{
      ...mapActions([
        'getDetailRumah',
        'getRuangRumah',
        'getaAtapRumah',
        'getKastaRumah',
        'getTiangRumah',
        'getKomponenAll',
        'getUpacaraAdat',
        'getRagamHias'
        
        // 'getDetailRumah',
        // 'getRuangRumah',
        // 'getTinggiRumah',
        // 'getOrnamen',
        // 'getAtap',
        // 'getDinding',
        // 'getTiang',
        // 'getLantai',
        // 'getJenisRumah'
      ]),


  },
  data(){
    return{
        message : '0'
    }
  },

}
</script>
