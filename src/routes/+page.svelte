<script lang="ts">
  // COMPONENT IMPORTS
  import PoemSkeleton from "$lib/components/PoemSkeleton.svelte";
  import StructureInfo from "$lib/components/StructureInfo.svelte";
  // LIBRARY IMPORTS
  import toast, { Toaster } from "svelte-french-toast";

  const MAX_ACROSTIC_LENGTH: number = 16;

  let poemTypeId: string;
  let showModal: boolean = false;

  let testStr: string;
  let infoBtn: HTMLButtonElement;
  let acrosticLettersInputVal: string;
  let acrosticLetters: string = "";
  let countSyllables: boolean = false;

  function validateAcrostic() {
    if(acrosticLettersInputVal) {
      if (/[^A-Za-z0-9]/.test(acrosticLettersInputVal)) {
        toast.error(`Only letters and numbers allowed in the acrostic.`);
      }
      else if (acrosticLettersInputVal.length > MAX_ACROSTIC_LENGTH) {
        toast.error(`Maximum acrostic length is ${MAX_ACROSTIC_LENGTH} characters.`);
      } else {
        acrosticLetters = acrosticLettersInputVal.trim().toUpperCase();
      }
    }
  }
</script>

<main>
  <h1>Wordsmith</h1>
  <!-- Select value is equivalent to Poem Type ID -->
  <form class="pure-form">
    <fieldset>
      <div class="pselect-container">
        <select name="select-poem-type" id="select-poem-type" bind:value={poemTypeId}
        on:change={() => {
          infoBtn.disabled = false;
          // reset poem lines on type change
          document.querySelectorAll("input").forEach(el => {
            el.value = "";
          });
          document.querySelectorAll(".syllable-counter").forEach(el => {
            el.innerHTML = "0";
          });
        }}
        >
            <option selected disabled value="0">Poem Type</option>
            <option value="1">Haiku</option>
            <option value="2">English Sonnet</option>
            <option value="3">Italian Sonnet</option>
            <option value="4">Limerick</option>
            <option value="5">Villanelle</option>
            <option value="6">Acrostic</option>
        </select>
        <button type="button" on:click={() => {showModal = true}} bind:this={infoBtn} disabled><i class="fa-solid fa-circle-info" /></button>
        <StructureInfo bind:showModal={showModal} {poemTypeId}/>
      </div>
      <div>
        <label for="countsyls-checkbox">Count Syllables?</label>
        <input type="checkbox" name="countsyls-checkbox" id="countsyls-checkbox" bind:checked={countSyllables} on:change={() => console.log(countSyllables)}>
      </div>
  </fieldset>
  </form>
  {#if poemTypeId !== "6"}
    <PoemSkeleton {poemTypeId} bind:countSyllables={countSyllables} />
  <!-- If acrostic poem -->
  {:else}
    <label for="acrostic-letter-choices">Letters for Acrostic:</label>
    <input type="text" name="acrostic-letter-choices" bind:value={acrosticLettersInputVal}>
    <button type="button" class="pure-button" on:click={validateAcrostic}>Confirm</button>
    {#if acrosticLetters}
      <PoemSkeleton poemTypeId={poemTypeId} acrostic={acrosticLetters} bind:countSyllables={countSyllables}/>
    {/if}
  {/if}
  <br>
  <input placeholder="Give me a word" type="text" bind:value={testStr}>
  <button type="button" class="pure-button" on:click={async () => {
    const json = await (await fetch(`/api/rhyme/${testStr}`)).json()
    console.log(json);
  }}>Find me a rhyme</button>
  <p>Export Poem as:</p>
  <button type="button" class="pure-button">Text</button>
  <button type="button" class="pure-button">HTML</button>
</main>
<Toaster />

<style>
  main {
    width: 100%
  }

  h1 {
    color: var(--colour1);
  }

  /* select {
    text-align: center;
  } */
</style>