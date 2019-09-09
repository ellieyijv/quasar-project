import MusicList from '../assets/listObject.json'
const state = {
    musics: MusicList,
    search: ''
}

const mutations = {
    setSearch(state, value) {
        state.search = value
    }
}

const actions = {
    setSearch({ commit }, value) {
        commit('setSearch', value)
    }
}

const getters = {

    musicsFiltered: (state) => {
        let musicsFiltered = {}
        if(state.search) {
            Object.keys(state.musics).forEach((key) =>{
                let music = state.musics[key]
                if(music.title.includes(state.search)){
                    musicsFiltered[key] = music
                }
            })
            return musicsFiltered
        }
        return state.musics
    },
    musics: (state, getters) => {
        let musicsFiltered = getters.musicsFiltered
        return musicsFiltered
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}