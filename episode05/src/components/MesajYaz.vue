<template>
  <div :class="DurumSinifi">{{ mesaj }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export enum MesajDurumu {
  Bilgi = "Bilgi",
  Uyarı = "Uyari",
  Hata = "Hata",
}

@Component
export default class MesajYaz extends Vue {
  @Prop({ required: true, type: String })
  private mesaj!: string;

  @Prop({ default: () => MesajDurumu.Bilgi })
  private durum!: MesajDurumu;

  private get DurumSinifi(): string {
    switch (this.durum) {
      case MesajDurumu.Bilgi:
        return "Bilgi";
      case MesajDurumu.Uyarı:
        return "Uyari";
      case MesajDurumu.Hata:
        return "Hata";
    }
    return "Bilgi";
  }
}
</script>

<style lang="scss">
.Bilgi {
  color: green;
}
.Uyari {
  color: orange;
}
.Hata {
  color: red;
}
</style>
