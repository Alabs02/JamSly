<template>
    <div>
               <v-navigation-drawer
            v-model="drawer"
            :color="color"
            absolute
            temporary
            
        >

            <v-list
             dense
             class="py-0"
            >
                <v-list-item>
                    <v-list-item-avatar id="tit">
                        <img src="https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png" alt="logo">
                    </v-list-item-avatar>

                    <v-list-item-content dark>
                        <v-list-item-title class="white--text fonz">Jam<span class="font-weight-thin">Sly</span></v-list-item-title>
                        <v-list-item-subtitle class="white--text">Entertainment</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider color="white"></v-divider>

                <v-list-item
                 v-for="link in links"
                 :key="link.title"
                 router :to="link.route"
                 link
                >
                    <v-list-item-icon>
                        <v-icon dark>{{ link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
           
        </v-navigation-drawer>
        <v-app-bar
        app
        color="blue-grey darken-4"
        dark
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="title">
                Jam<span class="font-weight-thin">Sly</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="hidden-md-and-down">
                <v-btn
                v-for="(nav_item, i) in nav_items"
                :key="i"
                router :to="nav_item.route"
                class="ml-1"
                text
                >  
                    <span>{{ nav_item.title }}</span>
                </v-btn>
            </div> 
            <app-login />
            <app-signup />        
        </v-app-bar>

    </div>
</template>


<script>
import Login from '../components/core/Login';
import SignUp from '../components/core/Signup';


export default {
    // components: { Login },
    components: {
        'app-login': Login,
        'app-signup': SignUp
    },

    data: () => ({
        drawer: false,
        color: 'blue-grey darken-4',
        alert: false,
        valid: true,
        nav_items: [
            { title: 'Home', route: '/' },
            { title: 'Music', route: '/musics' },
            { title: 'Videos', route: '/videos' },
            { title: 'Events', route: '/events' },
            { title: 'Blog', route: '/blogposts' },
        ],
    



        links: [
            {title: "Home", icon: "mdi-home", route: '/'},
            {title: "Musics", icon: "mdi-music-box", route: '/musics'},
            {title: "Videos", icon: "mdi-library-video", route: '/videos'},
            {title: "Events", icon: "mdi-calendar-star", route: '/events'},
            {title: "Blog", icon: "mdi-blogger", route: '/blogposts'},
            {title: "About", icon: "mdi-account-circle", route: '/about'}
        ],
    }),

    methods: {

    },
}
</script>


<style scoped>
    #tit {
        color: transparent;
    }

    .fonz {
        font-size: 40px;
    }
</style>