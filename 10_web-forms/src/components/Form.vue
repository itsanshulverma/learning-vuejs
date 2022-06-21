<template>
  <form>
    <label for="email">Email</label>
    <input type="email" name="email" />
  </form>
</template>

<script>
export default {
  name: 'Form',
}
</script>

<style>
form {
  max-width: 480px;
  margin: 30px auto;
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px #ccc;
  text-align: left;
}
label {
  color: #999;
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.6em;
  letter-spacing: 1px;
}
input {
  display: block;
  width: 100%;
  padding: 10px 10px;
  color: #444;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
}
</style>