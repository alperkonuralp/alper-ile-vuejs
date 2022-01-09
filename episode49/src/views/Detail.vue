<template>
    <div class="home">
        <table align="center">
            <tbody>
                <tr>
                    <th align="right">
                        #
                    </th>
                    <td align="left">
                        {{person.id}}
                    </td>
                </tr>
                <tr>
                    <th align="right">
                        Name
                    </th>
                    <td align="left">
                        {{person.name}}
                    </td>
                </tr>
                <tr>
                    <th align="right">
                        Position
                    </th>
                    <td align="left">
                        {{person.position}}
                    </td>
                </tr>
                <tr>
                    <th align="right">
                        Office
                    </th>
                    <td align="left">
                        {{person.office}}
                    </td>
                </tr>
                <tr>
                    <th align="right">
                        Age
                    </th>
                    <td align="left">
                        {{person.age}}
                    </td>
                </tr>
                <tr>
                    <th align="right">
                        Start Date
                    </th>
                    <td align="left">
                        {{person['start-date']}}
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
    export default class Detail extends Vue {
        private person: any = {};

        private mounted() {
            const id = parseInt(this.$route.params['id']);
            const people = DemoData.filter(x => x.id === id);
            if (people.length >= 1) {
                this.person = people[0];
            }
            // not found iþlemi yap
        }
    }
</script>
