/* eslint-disable */

<template>
    <div class="music-drive">
      <div class="search-box">
        <h2 class="text-center">Tìm bài hát</h2>
        <b-input-group size="lg" prepend="Tên bài hát">
          <b-form-input @keyup.enter.native="findSong" v-model="songKey" type="text"></b-form-input>
          <b-input-group-append>
            <b-btn variant="info" @click="findSong">Button</b-btn>
          </b-input-group-append>
        </b-input-group>
      </div>

      <div class="row">
        <div class="col-4 result-list">
          <b-list-group v-for="song in songs">
            <b-list-group-item>
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ song.songName }}</h5>
                <small>{{ song.songLength }} {{ song.quality }}</small>
              </div>
              <p class="">{{ song.author }}</p>
            </b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-4 download-list">
          <b-list-group v-for="song in songs">
            <b-list-group-item href="#some-link">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ song.songName }}</h5>
                <small>{{ song.songLength }} {{ song.quality }}</small>
              </div>
              <p class="">{{ song.author }}</p>
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </div>
</template>

<script>
import {AXIOS} from './http-common'

export default {
  name: 'MusicDrive',
  data () {
    return {
      response: [],
      songKey: '',
      errors: [],
      songs: [{"songName":"Đếm Ngày Xa Em","author":"OnlyC; Lou Hoàng","quality":"Lossless","link":"http://mp3.chiasenhac.vn/mp3/vietnam/v-pop/dem-ngay-xa-em~onlyc-lou-hoang~tsvtbq63qfqekw.html","songLength":"4:15"}
      ]
    }
  },
  mounted() {
    let saveToDriveScript = document.createElement('script')
    saveToDriveScript.setAttribute('src', 'https://apis.google.com/js/platform.js')
    saveToDriveScript.async = true
    saveToDriveScript.defer = true
    document.head.appendChild(saveToDriveScript)
  },
  methods: {
    findSong () {
      AXIOS.get(`/` + this.songKey)
        .then(response => {
          this.songs = response.data
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>
.row {
  margin-top: 50px;
}
</style>
