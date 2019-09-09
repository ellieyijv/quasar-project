<template>
       <q-input outlined v-model="searchField" label="Search" class="col">
        <template v-slot:append>
          <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>
      </q-input>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState('musics', ['search']),
        searchField: {
            get(){
                return this.search;
            },
            set(value){
                this.setSearch(value);
            }
        }
    },
    methods: {
         ...mapActions('musics', ['setSearch']),
    }
}
</script>