import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersistance from 'vuex-persist'

const app = createApp(App)

app.use(Vuex, axios)

var urlsparql = "http://localhost:3030/RumahTradisionalJawa"

// var urlsparql = "http://app.alunalun.info/fuseki/rumahtradisional"

export default new Vuex.Store({
  state: {
    id:[],
    getRumahJoglo:[],
    getRumahLimasan:[],
    getRumahKampung:[],
    getRumahTajug:[],
    getRumahPanggangPe:[],
    getLabelClassRumah:[],
    getLabelClassRumahJoglo:[],
    getLabelClassRumahLimasan:[],
    getLabelClassRumahKampung:[],
    getLabelClassRumahTajug:[],
    getLabelClassRumahPanggangPe:[],
    getDetailRumah:[],
    getRuangRumah:[],
    getAtapRumah:[],
    getTiangRumah:[],
    getKastaRumah:[],
    getKomponenAll:[],
    getUpacaraAdat:[],
    getDeskripsiRagamHias:[],
    getAllRagamHias:[],
    getAllUpacaraAdat:[],
    getRumahFromUpacara:[],
    getDeskripsiUpacara:[],
    getKomponenRumah:[],
    getRumahFromKomponen:[],
    getRuangRumahDetail:[],
    getRumahFromRuang:[],
    searchRumah:[],
    getRagamHias:[],
    getRumahFromRagamHias:[]

  },

  plugins:[new VuexPersistance().plugin],
  mutations: {
    GetRumahJoglo(state, hasil) {
      state.getRumahJoglo = hasil
    },
    GetRumahLimasan(state, hasil) {
      state.getRumahLimasan = hasil
    },
    GetLabelClassRumah(state, hasil) {
      state.getLabelClassRumah = hasil
    },
    GetRumahKampung(state, hasil) {
      state.getRumahKampung = hasil
    },
    GetRumahTajug(state, hasil) {
      state.getRumahTajug = hasil
    },
    GetRumahPanggangPe(state, hasil) {
      state.getRumahPanggangPe = hasil
    },
    GetLabelClassRumahJoglo(state, hasil) {
      state.getLabelClassRumahJoglo = hasil
    },
    GetLabelClassRumahLimasan(state, hasil) {
      state.getLabelClassRumahLimasan = hasil
    },
    GetLabelClassRumahKampung(state, hasil) {
      state.getLabelClassRumahKampung = hasil
    },
    GetLabelClassRumahTajug(state, hasil) {
      state.getLabelClassRumahTajug = hasil
    },
    GetLabelClassRumahPanggangPe(state, hasil) {
      state.getLabelClassRumahPanggangPe = hasil
    },
    GetDetailRumah(state, hasil) {
      state.getDetailRumah = hasil
    },
    GetRuangRumah(state, hasil) {
      state.getRuangRumah = hasil
    },
    GetAtapRumah(state, hasil) {
      state.getAtapRumah = hasil
    },
    GetTiangRumah(state, hasil) {
      state.getTiangRumah = hasil
    },
    GetKastaRumah(state, hasil) {
      state.getKastaRumah = hasil
    },
    GetKomponenAll(state, hasil) {
      state.getKomponenAll = hasil
    },
    GetUpacaraAdat(state, hasil) {
      state.getUpacaraAdat = hasil
    },
    GetDeskripsiRagamHias(state, hasil) {
      state.getDeskripsiRagamHias = hasil
    },
    GetAllRagamHias(state, hasil) {
      state.getAllRagamHias = hasil
    },
    GetAllUpacaraAdat(state, hasil) {
      state.getAllUpacaraAdat = hasil
    },
    GetRumahFromUpacara(state, hasil) {
      state.getRumahFromUpacara = hasil
    },
    GetDeskripsiUpacara(state, hasil) {
      state.getDeskripsiUpacara = hasil
    },
    GetKomponenRumah(state, hasil) {
      state.getKomponenRumah = hasil
    },
    GetRumahFromKomponen(state, hasil) {
      state.getRumahFromKomponen = hasil
    },
    GetRuangRumahDetail(state, hasil) {
      state.getRuangRumahDetail = hasil
    },
    GetRumahFromRuang(state, hasil) {
      state.getRumahFromRuang = hasil
    },
    SearchRumah(state, hasil) {
      state.searchRumah = hasil
    },
    GetRagamHias(state, hasil){
      state.getRagamHias = hasil
    },
    GetRumahFromRagamHias(state, hasil){
      state.getRumahFromRagamHias = hasil
    }

  },
  actions: {
      getRumahJoglo({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?image ?image2
          WHERE { 
            ?a rdf:type rumah:RumahJoglo .
            ?a rdfs:label ?namaRumah .
            ?a schema:image ?image .
            ?a schema:image2 ?image2 .
          }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetRumahJoglo', hasil)
      })
    },
    
    getRumahLimasan({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?image ?image2
          WHERE { 
            ?a rdf:type rumah:RumahLimasan .
            ?a rdfs:label ?namaRumah .
            ?a schema:image ?image .
            ?a schema:image2 ?image2 .
          }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetRumahLimasan', hasil)
      })
    },

    getRumahKampung({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?image ?image2
          WHERE { 
            ?a rdf:type rumah:RumahKampung .
            ?a rdfs:label ?namaRumah .
            ?a schema:image ?image .
            ?a schema:image2 ?image2 .
          }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetRumahKampung', hasil)
      })
    },

    getRumahTajug({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?image ?image2
          WHERE { 
            ?a rdf:type rumah:RumahTajug .
            ?a rdfs:label ?namaRumah .
            ?a schema:image ?image .
            ?a schema:image2 ?image2 .
          }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetRumahTajug', hasil)
      })
    },

    getRumahPanggangPe({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?image ?image2
          WHERE { 
            ?a rdf:type rumah:RumahPanggangPe .
            ?a rdfs:label ?namaRumah .
            ?a schema:image ?image .
            ?a schema:image2 ?image2 .
          }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetRumahPanggangPe', hasil)
      })
    },

    getLabelClassRumah({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT DISTINCT ?class ?label ?description
          WHERE {
              ?class a owl:Class .
              ?class rdfs:label 'Rumah Tradisional Jawa' .
              ?class rdfs:label ?label .
              ?class rdfs:comment ?description .
          } `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetLabelClassRumah', hasil)
      })
    },

    getLabelClassRumahJoglo({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT DISTINCT ?class ?label ?description
          WHERE {
              ?class a owl:Class .
              ?class rdfs:label 'Rumah Joglo' .
              ?class rdfs:label ?label .
              ?class rdfs:comment ?description .
          } `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetLabelClassRumahJoglo', hasil)
      })
    },

    getLabelClassRumahLimasan({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT DISTINCT ?class ?label ?description
          WHERE {
              ?class a owl:Class .
              ?class rdfs:label 'Rumah Limasan' .
              ?class rdfs:label ?label .
              ?class rdfs:comment ?description .
          } `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetLabelClassRumahLimasan', hasil)
      })
    },

    getLabelClassRumahKampung({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT DISTINCT ?class ?label ?description
          WHERE {
              ?class a owl:Class .
              ?class rdfs:label 'Rumah Kampung' .
              ?class rdfs:label ?label .
              ?class rdfs:comment ?description .
          } `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetLabelClassRumahKampung', hasil)
      })
    },

    getLabelClassRumahTajug({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT DISTINCT ?class ?label ?description
          WHERE {
              ?class a owl:Class .
              ?class rdfs:label 'Rumah Tajug' .
              ?class rdfs:label ?label .
              ?class rdfs:comment ?description .
          } `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetLabelClassRumahTajug', hasil)
      })
    },

    getLabelClassRumahPanggangPe({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT DISTINCT ?class ?label ?description
          WHERE {
              ?class a owl:Class .
              ?class rdfs:label 'Rumah Panggang Pe' .
              ?class rdfs:label ?label .
              ?class rdfs:comment ?description .
          } `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetLabelClassRumahPanggangPe', hasil)
      })
    },

    getDetailRumah({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?image ?image2 ?deskripsi
          WHERE { 
              ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdf:type ?type .
              ?a rdfs:label "${id}" .
              ?a rdfs:label ?namaRumah .
              ?a schema:image ?image .
              ?a schema:image2 ?image2 .
              ?a rdfs:comment ?deskripsi .
                
              }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetDetailRumah', hasil)
      })
    },

    getRuangRumah({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?ruangRumah
            WHERE { 
              ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdf:type ?type .
              ?a rdfs:label "${id}" .
              ?a rdfs:label ?namaRumah .
              ?a rumah:hasRuang ?b .
              ?b rdfs:label ?ruangRumah .
                
              }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetRuangRumah', hasil)
      })
    },

    getAtapRumah({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?atapRumah
            WHERE { 
              ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdf:type ?type .
              ?a rdfs:label "${id}" .
              ?a rdfs:label ?namaRumah .
              ?a rumah:hasKomponen ?b .
              ?b rdf:type rumah:Atap .
              ?b rdfs:label ?atapRumah .
          }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetAtapRumah', hasil)
      })
    },

    getTiangRumah({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?tiangRumah
            WHERE { 
              ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdf:type ?type .
              ?a rdfs:label "${id}" .
              ?a rdfs:label ?namaRumah .
              ?a rumah:hasKomponen ?b .
              ?b rdf:type rumah:Tiang .
              ?b rdfs:label ?tiangRumah .
          }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetTiangRumah', hasil)
      })
    },

    getKastaRumah({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?kastaRumah
            WHERE { 
              ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdf:type ?type .
              ?a rdfs:label "${id}" .
              ?a rdfs:label ?namaRumah .
              ?a rumah:hasKasta ?b .
              ?b rdfs:label ?kastaRumah .
          }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetKastaRumah', hasil)
      })
    },

    getKomponenAll({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?namaRumah ?komponenRumah
            WHERE { 
              ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdf:type ?type .
              ?a rdfs:label "${id}" .
              ?a rdfs:label ?namaRumah .
              ?a rumah:hasKomponen ?b .
  			      ?b rdfs:label ?komponenRumah .
  			    FILTER (
  				    !EXISTS {
    				    ?b rdf:type rumah:Tiang
					    }
  				  )
  			    FILTER (
  				    !EXISTS {
    				    ?b rdf:type rumah:Atap
					    }
  				  )
          } `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetKomponenAll', hasil)
      })
    },

    getUpacaraAdat({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?upacaraAdat
            WHERE { 
              ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdf:type ?type .
              ?a rdfs:label "${id}" .
              ?a rdfs:label ?namaRumah .
              ?a rumah:hasUpacara ?b .
              ?b rdfs:label ?upacaraAdat .
              }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetUpacaraAdat', hasil)
      })
    },

    getDeskripsiRagamHias({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>
          
          SELECT ?namaRumah ?namaRagamHias ?Deskripsi ?image
          WHERE {
              ?a rdf:type rumah:RagamHias .
              ?a rdfs:label ?namaRagamHias .
              ?a rdfs:label "${id}" .
              ?a rdfs:comment ?Deskripsi .
              ?a schema:image ?image
          } `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('GetDeskripsiRagamHias', hasil)
      })
    },

    getAllRagamHias({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?namaRagamHias ?image
          WHERE {
              ?a rdf:type rumah:RagamHias .
              ?a rdfs:label ?namaRagamHias .
              ?a schema:image ?image .
          } `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('GetAllRagamHias', hasil)
      })
    },

    getAllUpacaraAdat({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?namaUpacara ?image
            WHERE { 
              ?a rdf:type rumah:UpacaraAdat .
  				    ?a rdfs:label ?namaUpacara .
            	?a schema:image ?image .     
              } `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('GetAllUpacaraAdat', hasil)
      })
    },

    getRumahFromUpacara({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?namaRumah ?namaUpacara ?image
            WHERE { 
	            ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
  			      ?a rdf:type ?type .
  				    ?a rdfs:label ?namaRumah .
  				    ?a rumah:hasUpacara ?b.
  				    ?b rdfs:label "${id}" .
  				    ?b rdfs:label ?namaUpacara .
            	?a schema:image ?image .     
            } 
            order by ?namaRumah`
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetRumahFromUpacara', hasil)
      })
    },

    getDeskripsiUpacara({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?namaUpacara ?image ?deskripsi
            WHERE { 
              ?a rdf:type rumah:UpacaraAdat .
  				    ?a rdfs:label ?namaUpacara .
              ?a rdfs:label "${id}" .
              ?a rdfs:comment ?deskripsi .
            	?a schema:image ?image .
              } `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('GetDeskripsiUpacara', hasil)
      })
    },

    getKomponenRumah({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?namaKomponen ?deskripsi
            WHERE { 
  				    ?type rdfs:subClassOf* rumah:KomponenRumah .
              ?a rdf:type ?type .
              ?a rdfs:label "${id}" .
  				    ?a rdfs:label ?namaKomponen .
              OPTIONAL { ?a rdfs:comment ?deskripsi }
              } `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('GetKomponenRumah', hasil)
      })
    },

    getRumahFromKomponen({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?namaKomponen ?namaRumah ?image
            WHERE { 
  				    ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdf:type ?type .
              ?a rdfs:label ?namaRumah .
              ?a schema:image ?image .
              ?a rumah:hasKomponen ?b .
              ?b rdfs:label "${id}" .
              ?b rdfs:label ?namaKomponen .
            } `
          }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('GetRumahFromKomponen', hasil)
      })
    },

    getRuangRumahDetail({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?namaRuang ?deskripsi
            WHERE { 
              ?a rdf:type rumah:RuangRumah .
              ?a rdfs:label "${id}" .
  				    ?a rdfs:label ?namaRuang .
              OPTIONAL { ?a rdfs:comment ?deskripsi }.
              } `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('GetRuangRumahDetail', hasil)
      })
    },

    getRumahFromRuang({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?namaRuang ?namaRumah ?image
            WHERE { 
  				    ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdf:type ?type .
              ?a rdfs:label ?namaRumah .
              ?a schema:image ?image .
              ?a rumah:hasRuang ?b .
              ?b rdfs:label "${id}" .
              ?b rdfs:label ?namaRuang .
            } `
          }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('GetRumahFromRuang', hasil)
      })
    },

    searchRumah({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?namaRumah ?image ?deskripsi
        	WHERE {
              ?a rdf:type ?type .
              ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdfs:label ?namaRumah .
              ?a schema:image ?image .
  				    ?a rdfs:comment ?deskripsi .
   			      FILTER regex(?namaRumah, "${id}", "i") .
           } `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('SearchRumah', hasil)
      })
    },

    getRagamHias({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?type ?namaRumah ?ragamHias
            WHERE { 
              ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdf:type ?type .
              ?a rdfs:label "${id}" .
              ?a rdfs:label ?namaRumah .
              ?a rumah:hasRagamHias ?b .
              ?b rdfs:label ?ragamHias .
                
              }
          order by ?type `
        }
      }).then((response) => {
        const result = response.data.results.bindings

        let hasil = result
        //console.log(response);
        //console.log(hasil);

        commit('GetRagamHias', hasil)
      })
    },

    getRumahFromRagamHias({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX schema: <http://schema.org/>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
          PREFIX rumah: <http://alunalun.info/ontology/rumahtradisional#>

          SELECT ?ragamHias ?namaRumah ?image
            WHERE { 
  				    ?type rdfs:subClassOf* rumah:RumahTradisionalJawa .
              ?a rdf:type ?type .
              ?a rdfs:label ?namaRumah .
              ?a schema:image ?image .
              ?a rumah:hasRagamHias ?b .
              ?b rdfs:label "${id}" .
              ?b rdfs:label ?ragamHias .
            } `
          }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('GetRumahFromRagamHias', hasil)
      })
    },


  }
})


// var urlsparql = "http://localhost:3030/RumahIndonesia"


// export default new Vuex.Store({
//   state: {
//     id:[],
//     getDetailRumah:[],
//     getTipe:[],
//     getDeskripsi:[],
//     getImage:[],
//     getRuangRumah:[],
//     getJenisRumah:[],
//     getTinggiRumah:[],
//     getOrnamen:[],
//     getAtap:[],
//     getDinding:[],
//     getLantai:[],
//     getTiang:[],
//     getDeskripsiBagianRumah:[],
//     getDeskripsiOrnamen:[],
//     getDeskripsiRuangRumah:[],
//     getFungsiRuangRumah:[],
//     getRuangRumahDetail:[],
//     getRumahFromBahan:[],
//     getDetailBahan:[],
//     getRumahPanggung:[],
//     getRumahNonPanggung:[],
//     getRumahFromProvinsi:[],
//     getAllOrnamen:[],
//     searchRumah:[],
//   },
  
//   plugins:[new VuexPersistance().plugin],
// 	mutations: {

//     GetDetailRumah(state, hasil) {
//       state.getDetailRumah = hasil
//     },
//     GetTipe(state, hasil){
//       state.getTipe = hasil
//     },
//     GetDeskripsi(state, hasil){
//       state.getDeskripsi = hasil
//     },
//     GetImage(state, hasil){
//       state.getImage = hasil
//     },
//     GetRuangRumah(state, hasil){
//       state.getRuangRumah = hasil
//     },
//     GetJenisRumah(state, hasil){
//       state.getJenisRumah = hasil
//     },
//     GetTinggiRumah(state, hasil){
//       state.getTinggiRumah = hasil
//     },
//     GetOrnamen(state, hasil){
//       state.getOrnamen = hasil
//     },
//     GetAtap(state, hasil){
//       state.getAtap = hasil
//     },
//     GetDinding(state, hasil){
//       state.getDinding = hasil
//     },
//     GetLantai(state, hasil){
//       state.getLantai = hasil
//     },
//     GetTiang(state, hasil){
//       state.getTiang = hasil
//     },
//     GetDeskripsiBagianRumah(state, hasil){
//       state.getDeskripsiBagianRumah = hasil
//     },
//     GetDeskripsiOrnamen(state, hasil){
//       state.getDeskripsiOrnamen = hasil
//     },
//     GetDeskripsiRuangRumah(state, hasil){
//       state.getDeskripsiRuangRumah = hasil
//     },
//     GetFungsiRuangRumah(state, hasil){
//       state.getFungsiRuangRumah = hasil
//     },
//     GetRuangRumahDetail(state, hasil){
//       state.getRuangRumahDetail = hasil
//     },
//     GetRumahFromBahan(state, hasil){
//       state.getRumahFromBahan = hasil
//     },
//     GetDetailBahan(state, hasil){
//       state.getDetailBahan = hasil
//     },
//     GetRumahPanggung(state, hasil){
//       state.getRumahPanggung = hasil
//     },
//     GetRumahNonPanggung(state, hasil){
//       state.getRumahNonPanggung = hasil
//     },
//     GetRumahFromProvinsi(state, hasil){
//       state.getRumahFromProvinsi = hasil
//     },
//     GetAllOrnamen(state, hasil){
//       state.getAllOrnamen = hasil
//     },
//     SearchRumah(state, hasil){
//       state.searchRumah = hasil
//     }
	
//   },
//   actions: {
//     getDetailRumah({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?tipe ?asalDaerah ?image ?Deskripsi
//           WHERE {
//             ?a rdf:type ?type .
//               ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//               ?a rdfs:label ?namaRumah .
//               ?type rdfs:label ?tipe .
//               ?a rdfs:label "${id}" .
            
            
//               ?a rumah:asalDaerah ?b .
//               ?b rdfs:label ?asalDaerah .
              
//               ?a schema:image ?image .
            
//               ?a rumah:hasDeskripsi ?Deskripsi .
              
//           }
//           order by ?asalDaerah `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetDetailRumah', hasil)
//       })
//     },

//     getRuangRumah({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?ruangRumah ?asalDaerah
//           WHERE {
//             ?a rdf:type ?type .
//               ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//               ?a rdfs:label ?namaRumah .
//               ?a rdfs:label "${id}" .
            
//               ?a rumah:asalDaerah ?b .
//               ?b rdfs:label ?asalDaerah .
            
//               ?a rumah:hasRuang ?c .
//               ?c rdfs:label ?ruangRumah .
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetRuangRumah', hasil)
//       })
//     },

//     getTinggiRumah({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?tinggiRumah
//           WHERE {
//             ?a rdf:type ?type .
//               ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//               ?a rdfs:label ?namaRumah .
//               ?a rdfs:label "${id}" .
//               ?a rumah:tinggiRumah ?tinggiRumah
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetTinggiRumah', hasil)
//       })
//     },

//     getOrnamen({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?Ornamen
//           WHERE {
//             ?a rdf:type ?type .
//               ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//               ?a rdfs:label ?namaRumah .
//               ?a rdfs:label "${id}" .
//               ?a rumah:hasOrnamen ?b .
//               ?b rdfs:label ?Ornamen .
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetOrnamen', hasil)
//       })
//     },

//     getAtap({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?Atap
//           WHERE {
//             ?a rdf:type ?type .
//               ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//               ?a rdfs:label ?namaRumah .
//               ?a rdfs:label "${id}" .
//               ?a rumah:hasAtap ?b .
//               ?b rdfs:label ?Atap .
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetAtap', hasil)
//       })
//     },

//     getDinding({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?Dinding
//           WHERE {
//             ?a rdf:type ?type .
//               ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//               ?a rdfs:label ?namaRumah .
//               ?a rdfs:label "${id}" .
//               ?a rumah:hasDinding ?b .
//               ?b rdfs:label ?Dinding .
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetDinding', hasil)
//       })
//     },

//     getTiang({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?Tiang
//           WHERE {
//             ?a rdf:type ?type .
//               ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//               ?a rdfs:label ?namaRumah .
//               ?a rdfs:label "${id}" .
//               ?a rumah:hasTiang ?b .
//               ?b rdfs:label ?Tiang .
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetTiang', hasil)
//       })
//     },

//     getLantai({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?Lantai
//           WHERE {
//             ?a rdf:type ?type .
//               ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//               ?a rdfs:label ?namaRumah .
//               ?a rdfs:label "${id}" .
//               ?a rumah:hasLantai ?b .
//               ?b rdfs:label ?Lantai .
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetLantai', hasil)
//       })
//     },

//     getJenisRumah({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//             PREFIX schema: <http://schema.org/>
//             PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//             PREFIX owl: <http://www.w3.org/2002/07/owl#>
//             PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//             PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//             PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//             BASE <http://alunalun.info/RumahTradisional#>

//             SELECT ?namaRumah ?jenisRumah
//             WHERE {
//               ?a rdf:type ?type .
//                 ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//                 ?a rdfs:label ?namaRumah .
//                 ?a rdfs:label "${id}" .
//                 ?a rumah:hasJenis ?b .
//                 ?b rdfs:label ?jenisRumah .
//             } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetJenisRumah', hasil)
//       })
//     },

//     getDeskripsiOrnamen({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>
          
//           SELECT ?namaRumah ?namaOrnamen ?Deskripsi ?image
//           WHERE {
//               ?a rdf:type rumah:Ornamen .
//               ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//   			      ?b rdf:type ?type .
//               ?b rumah:hasOrnamen ?a .
//               ?b rdfs:label ?namaRumah .
//               ?a rdfs:label ?namaOrnamen .
//               ?a rdfs:label "${id}" .
//               ?a rumah:hasDeskripsi ?Deskripsi .
//               ?a schema:image ?image
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetDeskripsiOrnamen', hasil)
//       })
//     },

//     getDeskripsiRuangRumah({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?ruangRumah ?Deskripsi
//           WHERE {
//               ?a rdf:type rumah:Ruang_Rumah .
//               ?a rdfs:label ?ruangRumah .
//               ?a rdfs:label "${id}" .
//               ?a rumah:hasDeskripsi ?Deskripsi .
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetDeskripsiRuangRumah', hasil)
//       })

//     },

//     getFungsiRuangRumah({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?ruangRumah ?Deskripsi
//           WHERE {
//               ?a rdf:type rumah:Ruang_Rumah .
//               ?a rdfs:label ?ruangRumah .
//               ?a rdfs:label "${id}" .
//               ?a rumah:fungsiRuang ?Deskripsi .
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetFungsiRuangRumah', hasil)
//       })

//     },

//     getRuangRumahDetail({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT DISTINCT ?ruangRumah
//           WHERE {
//             ?a rdf:type rumah:Ruang_Rumah .
//             ?a rdfs:label ?ruangRumah .
//             ?a rdfs:label "${id}" .
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetRuangRumahDetail', hasil)
//       })

//     },

//     getRumahFromBahan({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT DISTINCT ?namaRumah ?image
//           WHERE {
//             ?a rdf:type ?type .
//             ?type rdfs:subClassOf* rumah:Bagian_Rumah .
//             ?a rdfs:label ?namaBahan .
            
//             ?b rdf:type ?type2 .
//             ?type2 rdfs:subClassOf* rumah:Rumah_Tradisional .
//             ?b rdfs:label ?namaRumah .
//             ?b ?p ?a .
//             ?a rdfs:label "${id}" .
//             FILTER (?p IN (rumah:hasDinding, rumah:hasAtap, rumah:hasTiang, rumah:hasLantai) )

//             ?b schema:image ?image
            
//           }`
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetRumahFromBahan', hasil)
//       })
//     },

//     getDetailBahan({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT DISTINCT ?namaRumah ?namaBahan
//           WHERE {
//             ?a rdf:type ?type .
//               ?type rdfs:subClassOf* rumah:Bagian_Rumah .
//               ?a rdfs:label ?namaBahan .
//               ?a rdfs:label "${id}" .
//           }
//           order by ?namaBahan `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetDetailBahan', hasil)
//       })
//     },

//     getRumahPanggung({ commit }){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?image
//           WHERE {
//               ?a rdf:type rumah:Rumah_Panggung .
//               ?a rdfs:label ?namaRumah .       
//               ?a schema:image ?image .              
//           } `
//         }
//       }).then((response) => {
//         const result = response.data.results.bindings

//         let hasil = result
//         //console.log(response);
//         //console.log(hasil);

//         commit('GetRumahPanggung', hasil)
//       })
//     },

//     getRumahNonPanggung({ commit }){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?image
//           WHERE {
//               ?a rdf:type rumah:Rumah_Non_Panggung .
//               ?a rdfs:label ?namaRumah .    
//               ?a schema:image ?image .              
//           } `
//         }
//       }).then((response) => {
//         const result = response.data.results.bindings

//         let hasil = result
//         //console.log(response);
//         //console.log(hasil);

//         commit('GetRumahNonPanggung', hasil)
//       })
//     },

//     getRumahFromProvinsi({ commit }){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?asalDaerah ?image
//           WHERE {
//               ?a rdf:type ?type .
//               ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//               ?a rdfs:label ?namaRumah .            
            
//               ?a rumah:asalDaerah ?b .
//               ?b rdfs:label ?asalDaerah .
              
//               ?a schema:image ?image .
              
//           }
//           order by ?asalDaerah `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetRumahFromProvinsi', hasil)
//       })
//     },

//     getAllOrnamen({ commit }){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaOrnamen ?image
//           WHERE {
//             ?a rdf:type rumah:Ornamen .
//               ?a rdfs:label ?namaOrnamen .
//               ?a schema:image ?image .
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('GetAllOrnamen', hasil)
//       })
//     },

//     searchRumah({ commit }, id){
//       axios.get(urlsparql, {
//         params: {
//           query: `
//           PREFIX schema: <http://schema.org/>
//           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//           PREFIX owl: <http://www.w3.org/2002/07/owl#>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//           PREFIX rumah: <http://alunalun.info/RumahTradisional#>
//           BASE <http://alunalun.info/RumahTradisional#>

//           SELECT ?namaRumah ?tipe ?asalDaerah ?image ?Deskripsi
//           WHERE {
//               ?a rdf:type ?type .
//               ?type rdfs:subClassOf* rumah:Rumah_Tradisional .
//               ?a rdfs:label ?namaRumah .
//               ?type rdfs:label ?tipe .
//               ?a rumah:asalDaerah ?b .
//               ?b rdfs:label ?asalDaerah .
//               ?a schema:image ?image .
//               ?a rumah:hasDeskripsi ?Deskripsi .
//   			      FILTER regex(?namaRumah, "${id}", "i") .
//           } `
//         }
//       }).then((response) => {
//           const result = response.data.results.bindings

//           let hasil = result
//           //console.log(response);
//           //console.log(hasil);

//           commit('SearchRumah', hasil)
//       })
//     },


//   }
// })