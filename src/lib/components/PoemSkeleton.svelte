<script lang="ts">
  import Line from "./Line.svelte";

  export let poemTypeId: string;
  export let numLines: number = 0;
  let rhymeScheme: string = "";
  
  $: if(poemTypeId) {
    switch(poemTypeId) {
      case "0":
        break;
      case "1":
        setHaiku();
        break;
      case "2":
        setEnglishSonnet();
        break;
      case "3":
        setItalianSonnet();
        break;
      case "4":
        setLimerick();
        break;
      case "5":
        setVillanelle();
        break;
      default:
        break;
    }
  }
  
  function setHaiku() {
    numLines = 3;
    rhymeScheme = ""
  }

  function setEnglishSonnet() {
    numLines = 14;
    rhymeScheme = "ABAB CDCD EFEF GG";
  }

  function setItalianSonnet() {
    numLines = 14;
    rhymeScheme = "ABBA ABBA CDE CDE";
  }

  function setLimerick() {
    numLines = 5;
    rhymeScheme = "AABBA";
  }

  function setVillanelle() {
    numLines = 19;
    rhymeScheme = "ABA ABA ABA ABA ABA ABAA";
  }
  
</script>

<div class="poem-skeleton">
  {#if rhymeScheme}
    <!-- Break rhymeScheme down by character e.g. A,B,A,B -->
    {#each rhymeScheme as rhyme}
      <!--  Account for spaces which will mark the end of a stanza -->
      {#if rhyme != " "}
        <Line rhymeChar={rhyme}/>
      {:else}
        <br>
      {/if}
    {/each}
  <!-- Fallback for structures without a rhyme scheme e.g. Haiku -->
  {:else if !rhymeScheme && numLines > 0}
    {#each {length: numLines} as _}
        <Line />
    {/each}
  {/if}
</div>

<style>
  .poem-skeleton {
    width: 100%;
  }
</style>