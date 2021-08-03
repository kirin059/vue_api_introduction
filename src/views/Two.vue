<template>
  <div class="two">
   {{ this.$store.state.title[1].title }}
    <main>
      <div>
        const URL = "http://recruit.web.smartjackwp.co.kr/menu";<br/>
        <br/>
          <div>axios.get(URL)</div>
            <div class="out">.then((res)=>{ return res.data); })</div>
            <div class="out">.catch((Error)=>{ console.log(Error); })</div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "two",
  };
</script>

<style>
  main {
    margin-top: 50px;
    padding: 2% 10%;
  }
  main div {
    text-align: left;
  }
  .out {
    text-indent: 2em;
  }
  .in {
    text-indent: 4em;
  }
</style>
