<script lang="ts">
  import Modal from "./Modal.svelte";
  import structureSummaries from "$lib/ts/structureSummaries";
  import lookupPoemId from "$lib/ts/lookupPoemId";
  import capitaliseLeadChar from "$lib/ts/capitaliseLeadChar";

  export let showModal: boolean;
  export let poemTypeId: string;
  $: poemTypeName = lookupPoemId(poemTypeId);

</script>

<Modal bind:showModal>
  <h2 slot="header">
    {capitaliseLeadChar(poemTypeName)}
  </h2>

  <p>
    {structureSummaries[poemTypeName]}
  </p>

  <a href={`https://www.dictionary.com/browse/${poemTypeName}`}>Definition</a>

</Modal>