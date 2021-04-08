// Attraverso una chiamata ajax all’API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.


var app = new Vue ({

    el: '#app',
    data: {
      albums:  [ ],
      genre: [ "All", ],
      select:"",
    },

    mounted: function() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((risposta) => {
        // console.log(risposta);
        this.albums = risposta.data.response;
        // console.log(this.albums);
        for (var i = 0; i < this.albums.length; i++) {
          if (this.genre.includes(this.albums[i].genre)== false ) {
            this.genre.push(this.albums[i].genre);
          }
        }
      });
    }

});
