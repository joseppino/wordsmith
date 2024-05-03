<script lang="ts">
  import PoemSkeleton from "$lib/components/PoemSkeleton.svelte";
  import StructureInfo from "$lib/components/StructureInfo.svelte";

  let poemTypeId: string;
  let showModal: boolean = false;

  $: console.log(showModal);

  let testStr: string;
  let infoBtn: HTMLButtonElement;
  let acrosticLettersInputVal: string;
  let acrosticConfirmed: boolean = false;
  let acrosticLetters: string;
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
    <button on:click={() => acrosticLetters = acrosticLettersInputVal.trim().toUpperCase()}>Confirm</button>
    {#if acrosticConfirmed}
      <PoemSkeleton {poemTypeId} numLines={acrosticLetters.length} />
    {/if}
  {/if}
  <br>
  <input placeholder="Give me a word" type="text" bind:value={testStr}>
  <button on:click={async () => {
    const json = await (await fetch(`/api/rhyme/${testStr}`)).json()
    console.log(json);
  }}>Find me a rhyme</button>
</main>

<style>
  main {
    width: 100%
  }

  h1 {
    color: var(--colour1);
  }
</style>