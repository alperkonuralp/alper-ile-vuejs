<template>
    <div class="home">
        <table align="center">
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Position
                    </th>
                    <th>
                        Office
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in pageData" :key="person.id">
                    <td>
                        <router-link :to="'/detail/' + person.id">{{person.id}}</router-link>
                    </td>
                    <td align="left">
                        <router-link :to="{ name: 'Detail', params: { id: person.id }}">{{person.name}}</router-link>
                    </td>
                    <td align="left">
                        {{person.position}}
                    </td>
                    <td align="left">
                        {{person.office}}
                    </td>
                    <td>
                        {{person.age}}
                    </td>
                    <td>
                        <button @click="sendToDetailPage(person.id)">Detail</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import DemoData from '@/data.json';

    @Component
    export default class Home extends Vue {
        private pageData = DemoData;

        private sendToDetailPage(id: number) {
            //// 1. yöntem : elle url tanýlama
            //this.$router.push('/detail/' + id);

            // 2. yöntem : isminden route kaydýna ulaþarak
            this.$router.push({ name: 'Detail', params: { 'id': id.toString() } });
        }
    }
</script>
