<template>
     <q-list dense bordered padding class="rounded-borders">
      <q-item clickable v-ripple>
        <q-item-section>
          {{music.title}}{{id}}
        </q-item-section>
      </q-item>
    </q-list>
</template>

<script>
export default {
    props: ['music', 'id']
}
</script>

<style scoped>

</style>