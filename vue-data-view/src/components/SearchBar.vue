<template>
    <div class="search-bar" @blur="showColumnList=false">
        <div class="search-bar-container">
            <span class="icon" @click="focus">
                <mdicon name="filter-variant" />
                <div class="columnList">
                    <ul>
                        <li class="header">
                            Columns
                        </li>
                        <li v-for="(c, i) in columnList"
                            :key="i"
                            class="item"
                            @click="columnClicked(c)">
                            {{ c.title }}
                        </li>
                    </ul>
                </div>
            </span>
            <div class="text">
                <FilterItem v-for="(f, i) in filters"
                            :key="'filter_' + i"
                            :filter="f">
                    {{ f.column.title }}
                </FilterItem>
            </div>
        </div>

        <input type="text" placeholder="Search" />
        <button>Search</button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType, FilterItem as FilterItemData } from './types';
    import FilterItem from './FilterItem.vue';

    @Component({
        components: {
            FilterItem,
        }
    })
    export default class SearchBar extends Vue {
        private showColumnList = false;

        private filters: FilterItemData[] = [];

        @Prop({ required: true, type: Array })
        private columnList!: ColumnType[];

        private columnClicked(column: ColumnType) {
            this.filters.push({ column });
            this.showColumnList = false;
        }


        private focus(e: Event) {
            //debugger;
            this.showColumnList = true;
            e.stopPropagation();
        }
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
            height: 30px;

            .icon {
                position: absolute;
                left: 5px;
                top: 3px;

                .columnList {
                    position: absolute;
                    top: 30px;
                    left: 0px;
                    background: white;
                    padding: 5px 0;
                    border: 1px solid #555;
                    display: none;

                    ul, li {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }

                    li {
                        margin: 1px;
                        padding: 3px 13px;

                        &.header {
                            font-weight: bold;
                            cursor: default;
                        }

                        &.item:hover {
                            background: #CCC;
                            cursor: pointer;
                        }
                    }
                }
            
                &:hover .columnList {
                    display: block;
                }    
            }

            .text {
                //display: inline-block;
                position: absolute;
                left: 30px;
                top: 7px;
                right: 3px;
            }
        }
    }
</style>
