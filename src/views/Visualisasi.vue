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
                        <b>Visualisasi</b>
                    </router-link>

                    <a href="#" class="search">SEARCH</a>
                </div>
                
            </div>
		
	    </nav>

        <section>

            <div class="content1">
                <span class="judul_visualisasi">
                    <b>Visualiasi Ontologi Rumah Tradisional Indonesia</b>	
                </span>

                <div>
                    <img class="center" src="../assets/RumahTradisional.png" alt="">
                </div>
                
                <div class="deskripsi">
                
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