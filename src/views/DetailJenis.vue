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

        <section style="height: 80vh;">

            <div class="content1">
                <div>
                    <h1 class="judul_rumah">
                        <br>
                        Bolon Karo
                    </h1>
                </div>

                <div class="deskripsi">
                    <p>Deskripsi : Bolon Karo adalah .........</p>
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