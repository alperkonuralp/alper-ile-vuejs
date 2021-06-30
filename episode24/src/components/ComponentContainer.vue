<template>
    <div class="ComponentContainer">
        <span class="label">
            <slot name="labelArea">
                <Label :text="text" />
            </slot>
        </span>
        <span class="content">
            <slot>
                Boş Kontrol
            </slot>
        </span>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class ComponentContainer extends Vue {
        @Prop() private text!: string;
    }
</script>

<style lang="scss" scoped>
    div {
        text-align: left;
        margin: 5px;
        width: 500px;

        .label {
            display: inline-block;
            width: 100px;
        }

        .content {
            display: inline-block;
            width: 380px;
        }
    }
</style>