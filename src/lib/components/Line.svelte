<script lang="ts">
  import countSyllables from "$lib/ts/countSyllables";
  import { syllable } from "syllable";

  export let lineProps;

  let lineText: string = "";
  let syllablesInLineCount: number = 0;
  
  function handleKeyUp() {
    syllablesInLineCount = evaluateSyllablesInLine();
  }

  function evaluateSyllablesInLine() {
    let sylCount = 0;
    let wordsInLine = lineText.split(" ");
    for(let word of wordsInLine) {
      sylCount += syllable(word);
    }
    return sylCount;
  }
</script>

<div class="line">
  <span>
  {#if lineProps.acrosticChar}
    <span>{lineProps.acrosticChar}</span>
  {/if}
    <input class="line-input" type="text"
    bind:value={lineText}
    on:keyup={handleKeyUp}
    style={lineProps.centraliseText ? "text-align: center" : ""}>
    {#if lineProps.rhymeChar}
      <span>{lineProps.rhymeChar}</span>
    {/if}
    {#if lineProps.doCountSyllables}
      <span class="syllable-counter">{syllablesInLineCount}</span>
    {/if}
  </span>
</div>

<style>
  .line {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

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
  .rhyme-suggestions {
    max-width: 700px;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>