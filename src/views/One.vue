<template>
  <div class="one">
    {{ this.$store.state.title[0].title }} 

    <main>
      <div>
        const URL = "http://recruit.web.smartjackwp.co.kr/menu";<br/>
        <br/>
        function getData() {<br/>

          <div class="out">fetch(URL, {</div>
            <div class="in">headers: { 'Accept': 'application / json' }</div>
          <div class="out">})</div>
            <div class="out">.then((res) => res.json())</div>
            <div class="out">.then((data) => { return JSON.stringify(data); })</div>
            <div class="out">.catch((err) => { console.log(err); });</div>
          <div>}</div>
          <br/>
          <div>getData()</div>
      </div>
    </main>



  </div>
</template>

<script>

export default {
  name: "one",
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
