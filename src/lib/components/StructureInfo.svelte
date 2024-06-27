<script lang="ts">
  import Modal from "./Modal.svelte";
  import structureSummaries from "$lib/ts/structureSummaries";

  export let showModal: boolean;
  export let poemTypeId: string;

</script>

<Modal bind:showModal>
  <h2 slot="header">
    {structureSummaries[poemTypeId]["name"]}
  </h2>

  <p>
    {structureSummaries[poemTypeId]["summary"]}
  </p>

  <a href={`https://www.dictionary.com/browse/${structureSummaries[poemTypeId]["name"].toLowerCase()}`}>Definition</a>

</Modal>