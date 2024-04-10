<script lang="ts">
  export let rhymeChar: string = "";

  function syllableCount(word: string) {
    word = word.toLowerCase();
    let t_some: number = 0;
    if(word.length>3) {
      if(word.substring(0,4) == "some") {
        word = word.replace("some","");
        t_some++;
      }
    }                 
    word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');   
    word = word.replace(/^y/, '');                                 
    //return word.match(/[aeiouy]{1,2}/g).length;   
    let syl = word.match(/[aeiouy]{1,2}/g);
    console.log(syl);
    if(syl) {
        return syl.length + t_some;
    }
  }
</script>

<div class="line">
  <input class="line-input" type="text">
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