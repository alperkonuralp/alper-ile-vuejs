<template>
    <div class="filter_item_container"
         tabindex="1"
         @click="focus" contenteditable="false">
        {{ filter.column.title }}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { FilterItem as FilterItemData } from './types';

    @Component
    export default class FilterItem extends Vue {

        @Prop({ required: true, type: Array })
        private filter!: FilterItemData;

        private focus(e: Event) {
            //debugger;
            e.stopPropagation();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .filter_item_container {
        display: inline-block;
        border: 1px solid black;
        border-radius: 15px;
        padding: 2px 10px;
        margin: 0 5px;
        -webkit-box-shadow: 5px 5px 15px 5px #000000;
        box-shadow: 5px 5px 15px 5px #000000;

        &:hover {
            -webkit-box-shadow: 5px 5px 15px 2px #000000;
            box-shadow: 5px 5px 15px 2px #000000;
        }
    }
</style>
