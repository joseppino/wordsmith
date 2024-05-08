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
  <div class="pselect-container">
    <select name="select-poem-type" id="select-poem-type" bind:value={poemTypeId} on:change={() => infoBtn.disabled = false}>
        <option selected disabled value="0">Poem Type</option>
        <option value="1">Haiku</option>
        <option value="2">English Sonnet</option>
        <option value="3">Italian Sonnet</option>
        <option value="4">Limerick</option>
        <option value="5">Villanelle</option>
        <option value="6">Acrostic</option>
    </select>
    <button on:click={() => {showModal = true}} bind:this={infoBtn} disabled><i class="fa-solid fa-circle-info" /></button>
    <StructureInfo bind:showModal={showModal} {poemTypeId}/>
  </div>
  {#if poemTypeId !== "6"}
    <PoemSkeleton {poemTypeId}/>
  {:else}
    <label for="acrostic-letter-choices">Letters for Acrostic:</label>
    <input type="text" name="acrostic-letter-choices" bind:value={acrosticLettersInputVal}>
    <button on:click={validateAcrostic}>Confirm</button>
    {#if acrosticLetters}
      <PoemSkeleton poemTypeId={poemTypeId} acrostic={acrosticLetters} />
    {/if}
  {/if}
  <br>
  <input placeholder="Give me a word" type="text" bind:value={testStr}>
  <button on:click={async () => {
    const json = await (await fetch(`/api/rhyme/${testStr}`)).json()
    console.log(json);
  }}>Find me a rhyme</button>
  <p>Share Poem on:</p>
  <button>X</button>
  <button>Embed</button>
</main>
<Toaster />

<style>
  main {
    width: 100%
  }

  h1 {
    color: var(--colour1);
  }
</style>