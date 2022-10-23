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
                        <b>Visualisasi</b>
                    </router-link>

				    <a href="#" class="search" style="margin-right:2%;">SEARCH</a>

                    <div class="search" style="top:2.5px; margin:0; line-height:0.5;">
                        <input v-model="message" type="text" placeholder="Search" size="2" style="height:40%; width:110%;border-radius:5px">
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

        <section style="height:120vh;">

            <div class="content1">
                <span class="judul_visualisasi">
                    <b>Visualiasi Ontologi Rumah Tradisional Jawa</b>	
                </span>

                <div>
                    <img class="center_visualisasi" src="../assets/T-Box.jpg" alt="">
                </div>
                
                <div class="deskripsi">
                    <br><br>
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
        this.$store.dispatch('searchRumah', this.$route.params.id),
        this.$store.dispatch('getLabelClassRumah')
         
      },
      computed:{
          ...mapState([
            'searchRumah',
            'getLabelClassRumah'
          ])
      },
      methods:{
          ...mapActions([
            'searchRumah',
            'getLabelClassRumah'       
          ]),
    
          reloadPage() {
          window.location.reload();
        }
    
      },
      data(){
        return{
          message: null
        }
      },
    
    }
    </script>