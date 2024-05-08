<script lang="ts">
  import countSyllables from "$lib/ts/countSyllables";

  export let rhymeChar: string = "";

  let lineInput: HTMLInputElement;
  // $: syllablesInLine = lineInput.innerText.split(" ").forEach(word => {
  //   countSyllables(word)
  // });
</script>

<div class="line">
  <input class="line-input" type="text" bind:this={lineInput}>
  {#if rhymeChar}
    <span>{rhymeChar}</span>
  {/if}
</div>

<style>
  .line-input {
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid var(--colour2);
    color: var(--colour1);
    width: 60vw;
    max-width: 700px;
    height: 35px;
    font-size: 100%;
    padding: 0;
  }
  
  @media screen and (max-width: 600px) {
    .line-input {
      width: 250px;
    }
  }

  @media screen and (max-width: 600px) {
    .line-input {
      width: 250px;
    }
  }
</style>