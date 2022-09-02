<template>
    <v-card height="77vh" elevation="0">


        <v-row no-gutters class="pt-16">

            <v-col cols=3 class="message">
                <p>my message</p>
            </v-col>
            <v-col cols=6>
                <v-tabs v-model="currentItem" class="buttons" slider-size="0">
                    <v-tab class="tab"  
                     active-class="active" v-for="item in items" :key="item"
                        :href="'#tab-' + item.title">
                        <v-icon class="mr-2">{{ item.icon }} </v-icon>
                        {{ item.title }}
                    </v-tab>
                </v-tabs>
            </v-col>
            <v-col cols=3 class="button">
                <v-btn class="ma-2" color="#33ffad" rounded>
                   filters
                </v-btn>
            </v-col>

        </v-row>
        <v-tabs-items v-model="currentItem">
            <v-tab-item v-for="item in items" :key="item" :value="'tab-' + item.title">
                <v-card>
                    <v-card-text>
                        <h2>{{ item.title }}</h2>
                        {{ text }}
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>

</template>

<script>

export default {
    name: "signitureVue",
    data() {
        return {

            currentItem: 'tab-request',

            items: [
                { title: "request", icon: "mdi-apps" },
                { title: "bookmark", icon: "mdi-currency-krw" },
                { title: "Trash", icon: "mdi-currency-krw" },
            ],
            text: 'Lorem ipsum dmod xercitatuat.',




        };
    },
};
</script>

<style scoped lang="scss">
@mixin flexbox {
    display: flex;
    align-items: center;
    justify-content: center;
}

.buttons {
  
    @include flexbox;
}

.button {
    @include flexbox;
}

.message {
    @include flexbox;
}

.tab {
   font-size: 10px;
    border: 0.5px solid rgb(167, 164, 164);
    width: 10rem;
    &:nth-child(2){
         border-top-left-radius: 10px;
         border-bottom-left-radius: 10px;
    } &:nth-child(4){
         border-top-right-radius: 10px;
         border-bottom-right-radius: 10px;
    }
}
.active{
    background-color: rgb(231, 230, 230);color: rgb(85, 83, 83);
}
</style>
