<template>
    <div class="search-bar">
        <div class="search-bar-container">
            <mdicon class="icon" name="filter-variant" />
            <div class="text" 
                 @focus="showColumnList=true" 
                 @blur="showColumnList=false"
                 contenteditable="true">
                asd
            </div>
            <div class="columnList" v-if="showColumnList">
                <ul>
                    <li v-for="(c, i) in columnList"
                        :key="i">
                        {{ c.title }}
                    </li>
                </ul>
            </div>
        </div>
        
        <input type="text" placeholder="Search" />
        <button>Search</button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType, PagerType, DataSource, DataRow, ColumnDataTypeEnum } from './types';

    @Component
    export default class SearchBar extends Vue {
        private showColumnList = false;

        @Prop({ required: true, type: Array })
        private columnList!: ColumnType[];
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .search-bar {
        margin-bottom: 5px;
        padding: 5px;
        background-color: #eeeeee;
        color: black;
        text-align: left;

        input[type=text] {
            margin-right: 5px;
        }

        .search-bar-container {
            border: 1px solid #555;
            padding: 5px;
            position: relative;
            height: 20px;

            .icon {
                position: absolute;
                left: 5px;
                top: 3px;
            }

            .text {
                //display: inline-block;
                position: absolute;
                left: 30px;
                top: 7px;
                right: 3px;
            }

            .columnList{
                position: absolute;
                top: 19px;
                background: white;

                ul, li {
                    list-style: none;
                    margin:0;
                    padding:0;
                }
            }
        }
    }
</style>
