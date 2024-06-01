const { createApp } = Vue;

createApp({
    data() {
        return {
            searchText: '',
            collections: [],
            selectedCollection: null,
            apiKey: 'd41a3d5c61d0096310b052e19024e207',
        }
    },
    methods: {
        async searchCollection() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/collection?api_key=${this.apiKey}&query=${this.searchText}&language=pt-BR`);
                const data = await response.json();
                this.collections = data.results;
            } catch (error) {
                console.error('Erro:', error);
            }
        },
        async fetchCollectionDetails(collectionId) {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/collection/${collectionId}?api_key=${this.apiKey}&language=pt-BR`);
                const data = await response.json();
                this.selectedCollection = data;
            } catch (error) {
                console.error('Erro:', error);
            }
        }
    }
}).mount("#app");
