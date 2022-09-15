<template>
    
    <!--
    <h1>Test</h1>
    <div id="app">
      <span v-for="(i,index) in getDetailRumah" :key="index">
        <span v-if="i.image">
          <img v-bind:src="'/src/assets/' + (i.image.value)" width="600" height="400">
          <br>
        </span>
        <span v-if="i.asalDaerah" style="font-size: 18px">
          Asal Daerah : {{i.asalDaerah.value}}
          <br>
        </span>
        <span v-if="i.tipe" style="font-size: 18px">
          Tipe : {{i.tipe.value}}
          <br>
        </span>
        <span v-if="i.Deskripsi" style="font-size: 18px">
          Deskripsi : {{i.Deskripsi.value}}
          <br>
          <br>
        </span>
      </span>
      
      <span v-for="(i,index) in getRuangRumah" :key="index">
        <li v-if="i.ruangRumah">
          {{i.ruangRumah.value}}
          <br>
        </li>
      </span>
    </div>
    -->

    <div>
      <h1>Hasil Pencarian</h1>
      <span v-for="(i,index) in searchRumah" :key="index">
        <li v-if="i.namaRumah">
          {{i.namaRumah.value}}
          <br>
        </li>
      </span>
    </div>
     <section style="height:270vh;">

            <div class="navigasiImage">                   
                <div class="content3" v-for="(i,index) in searchRumah" :key="index" >
                    <div v-if="i.image">
                        <img class="centerrumah" v-bind:src="'/src/assets/' + (i.image.value)">
                        <br>
                    </div>
                    
                    <div>
                        <div class="deskripsi_center">
                            <p>
                                <router-link :to="{ name: 'detailrumah', params: {id: i.namaRumah.value}}">
                                    {{i.asalDaerah.value}}
                                    <br>
                                </router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>


 
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'


export default {

  mounted(){
    this.$store.dispatch('getDetailRumah', this.$route.params.id),
    this.$store.dispatch('getRuangRumah', this.$route.params.id),
    this.$store.dispatch('searchRumah', this.$route.params.id)
     
  },
  computed:{
      ...mapState([
        'getDetailRumah',
        'getRuangRumah',
        'searchRumah'  
      ])
  },
  methods:{
      ...mapActions([
        'getDetailRumah',
        'getRuangRumah',
        'searchRumah'        
      ]),


  },
  data(){
    return{
      selectComponent: 'SearchRumah',
    }
  },

}
</script>
