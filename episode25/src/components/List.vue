<template>
    <div>
        <div class="header" v-if="baslik != ''">
            <slot name="header" 
                  v-bind:baslik="baslik"
                  v-bind:mesaj="strmesaj"
                  >{{baslik}}</slot>
        </div>

        <ul>
            <li v-for="eleman in liste" :key="eleman">
                <!--            <slot v-bind="{ eleman: eleman, mesaj: strmesaj }">{{eleman}}</slot>-->
                <slot v-bind:eleman="eleman" v-bind:mesaj="strmesaj">
                    {{eleman}}
                </slot>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class List extends Vue {
        @Prop({ type: Array, required: true })
        private liste!: string[];

        @Prop({ required: false, default: () => '' })
        private baslik!: string;

        private strmesaj = "Deneme";
    }
</script>

<style scoped lang="scss">
    div.header {
        font-weight: bold;
    }
</style>