<template>
    <v-card height="77vh" elevation="0">


        <v-row no-gutters class="pt-16">

            <v-col close-delay="12" class="inbox">
                <v-img src="../../assets/img/coffe.png" max-height="80" max-width="80"> </v-img>
                <p class="headmessage">Zero request to sign or approve.</p>
                <p class="submessage">You're all caught up! Take it easy, enjoy the moment..</p>
            </v-col>
        </v-row>

    </v-card>

</template>

<script>

export default {
    name: "inBox",
    data() {
        return {


        };
    },
};
</script>

<style scoped lang="scss">
.inbox {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10rem;

    .headmessage {
        margin-top: 2rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 20px;
    }
}
</style>
