<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="email" v-model="email" required />

    <label>Password</label>
    <input type="password" v-model="password" required />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role</label>
    <select v-model="role">
      <option value="frontend">Frontend Developer</option>
      <option value="backend">Backend Developer</option>
      <option value="database">Data Engineer</option>
      <option value="mobile">Mobile Developer</option>
    </select>

    <label>Preferences</label>
    <div class="preferences">
      <input type="checkbox" value="fulltime" v-model="prefers" />
      <label>Full-time</label>
      <input type="checkbox" value="parttime" v-model="prefers" />
      <label>Part-time</label>
      <input type="checkbox" value="internship" v-model="prefers" />
      <label>Internship</label>
    </div>

    <label>Skills (push , to add skill)</label>
    <br />
    <div class="pill" v-for="skill in skills" :key="skill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>
    <input type="text" v-model="tSkill" @keyup="addSkill" />

    <input type="checkbox" v-model="terms" required />
    <label>I accept terms and conditions.</label>

    <div class="submit-btn">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      email: '',
      password: '',
      role: '',
      prefers: [],
      tSkill: '',
      skills: [],
      terms: false,
      passwordError: ''
    }
  },
  methods: {
    addSkill(e) {
      if (e.key === ',' && this.tSkill) {
        let tempSkill = this.tSkill.replace(/[,]+$/, "").trim()
        if (!this.skills.includes(tempSkill)){
          this.skills.push(tempSkill)
        }
        this.tSkill = ''
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => item !== skill)
    },
    handleSubmit() {
      if (this.password.length < 8) {
        this.passwordError = '! Password must be at least 8 characters long'
      }
      if (!this.passwordError) {
        console.log(JSON.stringify({
          email: this.email,
          password: this.password,
          role: this.role,
          preferences: this.prefers,
          skills: this.skills,
          terms: this.terms
        },'\t', 4))
      }
    }
  }
}
</script>

<style>
form {
  max-width: 480px;
  margin: 30px auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px #ddd;
  text-align: left;
}
label {
  color: #999;
  display: inline-block;
  margin: 30px 0 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.65em;
  letter-spacing: 1px;
}
input, select {
  display: block;
  width: 100%;
  padding: 9px 5px;
  color: #444;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 0.9em;
}
input:focus, input:active, 
select:hover, select:active {
  outline: 1.5px solid #777;
  border-radius: 3px;
}
input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin: 0 9px 0 0;
  outline: none;
  border: none;
  position: relative;
  top: 2px;
  cursor: pointer;
}
.preferences label {
  margin: 0 20px 0 0;
}
.pill {
  display: inline-block;
  padding: 6px 15px;
  margin: 0 9px 15px 0;
  background-color: rgb(244, 194, 106);
  border-radius: 20px;
  color: #444;
  cursor: pointer;
}
.submit-btn {
  text-align: center;
}
.submit-btn button {
  margin: 10px 0 0;
  padding: 10px 20px;
  font-weight: bold;
  color: #fff;
  background-color: rgb(32, 85, 153);
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.error {
  color: red;
  font-size: 0.9em;
  margin: 10px 0;
}
</style>