<script lang="ts">
  import countSyllables from "$lib/ts/countSyllables";

  export let acrosticChar: string = "";
  export let rhymeChar: string = "";
  export let doCountSyllables: boolean = false;

  let lineInput: HTMLInputElement;
  // $: syllablesInLine = lineInput.innerText.split(" ").forEach(word => {
  //   countSyllables(word)
  // });

  function handleKeyUp() {

  }

  function evaluateSyllablesInLine() {
    let sylCount = 0;
    let wordsInLine = lineInput.innerText.split(" ");
    for(let word in wordsInLine) {
      sylCount += countSyllables(word);
    }
    return sylCount;
  }
</script>

<div class="line">
  {#if acrosticChar}
    <span>{acrosticChar}</span>
  {/if}
  <input class="line-input" type="text" bind:this={lineInput} on:keyup={handleKeyUp}>
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