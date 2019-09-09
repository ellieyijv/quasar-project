<template>
  <q-page padding>
    
     <!-- <q-select borderless v-model="sortBy" :options="options">
        <template v-slot:prepend>
          <q-icon name="filter_list" />
        </template>
      </q-select> -->
      <div class="row q-mb-lg">
         <search />
      </div>
     
    <q-select filled v-model="model" :options="options" class="col q-ml-sm">
    </q-select>
    <!-- if it's key, it will use json objects -->
    <music v-for="(music, key) in musics" :key="key" :music = "music" :id="key">
    </music>
    <div class="row q-ma-lg">
      <q-input v-model="text" placeholder="Add new task" class="col" @keyup.enter="addTask"/>
      <q-btn color="primary" size="md" label="Add" @click.native="addTask"/>
    </div>
    <div class="row q-mb-lg">
         <q-list highlight bordered padding class="col">
            <q-item-label>Tasks</q-item-label>
            <q-item clickable v-ripple v-for="(task, index) in tasks" :key="index">
                <q-item-section>{{task}}</q-item-section>
                <q-item-section avatar top side @click.native="moveToDone(index)">
                  <q-avatar avatar color="purple" text-color="white">
                    <q-icon name="check"/>
                  </q-avatar>
                </q-item-section>
            </q-item>   
        </q-list>
    </div>
    <div class="row">
      <q-list highlight padding bordered class="col">
        <q-item-label>Done</q-item-label>
        <q-item clickable v-ripple v-for="(doneTask, index) in done" :key="index">
                <q-item-section>{{doneTask}}</q-item-section>
                <q-item-section avatar top side @click.native="confirm=true">
                     <q-icon name="close" color="red"/>
                </q-item-section>
        </q-item>   
        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
              <span class="q-ml-sm">Are you sure to delete</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cancel" color="primary" v-close-popup />
              <q-btn flat label="Confirm" color="primary" v-close-popup  @click.native="deleteTask(index)"/>
            </q-card-actions>
          </q-card>
    </q-dialog>
      </q-list>
    </div>
   
  </q-page>
</template>

<style>
</style>

<script>
import {mapGetters, mapActions} from 'vuex'
import { request } from 'http';
export default {
  name: 'PageIndex',
  data(){
    return{
      text: '',
      tasks: [],
      done: [],
      confirm: false,
      sortBy: null,
      model: null,
      options: [
        'title', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
    }
  },
  components: {
    'music' : require('components/Musics/Music.vue').default,
    'search' : require('components/Tools/Search.vue').default
  },
  computed: {
    ...mapGetters('musics', ['musics'])
  },
  methods: {
    addTask(){
        this.tasks.push(this.text);
        this.text="";
    },
    moveToDone(index){
        this.done.push(this.tasks[index]);
        this.tasks.splice(index, 1)
    },
    deleteTask(index){
        this.done.splice(index, 1)  
    }
  }
}
</script>

<style scope>
  /* .q-field__control-container{
    display:none;
  }
  .q-field__append{
    display:none;
  }
  .q-menu{
    min-width: 200px !important;
  } */
  .q-select{
    flex: 0 0 200px;
  }
</style>
