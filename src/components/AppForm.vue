<template>
<div>
    <div class="container div-outer">
        <FormulateForm>
            <fieldset class="fsStyle">
            <legend class="legendStyle">
                <span class="spancss">General Information</span>
            </legend>
            <div class="double-wide">
                <FormulateInput 
                :options="{
                option1: 'ANDAMAN AND NICOBAR', 
                option2: 'ANDHRA PRADESH', 
                option3: 'ARUNACHAL PRADESH', 
                option4: 'BIHAR', 
                option5:'CHANDIGARH',
                option6:'CHHATTISGARH',
                option7:'DELHI',
                option8:'GOA',
                option9:'GUJRAT',
                option10:'HARYANA',
                option11:'HIMANCHAL PRADESH',
                option12:'JAMMU AND KASHMIR',
                option13:'JHARKHAND',
                option14:'KARNATAKA',
                option15:'KERALA',
                option16:'LADHAK',
                option17:'LAKSHADWEEP',
                option18:'MADHYA PRADESH',
                option19:'MAHARASHTRA',
                option20:'MANIPUR',
                option21:'MIZORAM',
                option22:'NAGALAND',
                option23:'ODISHA',
                option24:'PUDUCHERRY',
                option25:'PUNJAB',
                option26:'RAJASTHAN',
                option27:'SIKKIM',
                option28:'TAMIL NADU',
                option29:'TELANGANA',
                option30:'THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU',
                option31:'TRIPURA',
                option32:'UTTARAKHAND',
                option33:'UTTAR PRADESH',
                option34:'WEST BENGAL',
               }"
                type="select"
                placeholder="Select an option"
                label="State of Domicile"/>
                <div class="inner">
                <FormulateInput 
                :options="{first: 'Pre Matric', second: 'Post Matric/Top Class/MCM'}"
                type="select"
                placeholder="Select an option"
                label="Scholarship Category"/>
                </div>
            </div>
            <div class="four-wide">
                <FormulateInput type="text" label="Name of Student" name="studentName" error-behavior="live"></FormulateInput>
                <FormulateInput type="date" label="Date of Birth" name="dateofBirth" min="2018-12-01" max="2021-01-01" error-behavior="live"></FormulateInput>
                <FormulateInput :options="{first:'Male',second:'Female'}" type="select" label="Gender" name="gender" placeholder="Select an option" error-behavior="live">
                </FormulateInput>
                <div class="rel">
                <FormulateInput 
                :options="{first: 'Hindu', second: 'Muslim', third: 'Christian', fourth: 'Sikh', fifth:'Jain',sixth:'Buddhist', seventh:'Others'}"
                type="select"
                placeholder="Select an option"
                label="Religion"/>
                </div>
            </div>
            <div class="four-wide_2">
              <div class="comm">
              <FormulateInput 
                :options="{first: 'HINDU', second: 'MUSLIM', third: 'CHRISTIAN'}"
                type="select"
                placeholder="Select an option"
                label="Religion"/>
                </div>
                <FormulateInput type="text" label="Father Name" name="fatherName" error-behavior="live"></FormulateInput>
                <FormulateInput type="text" label="Mother Name" name="MotherName" error-behavior="live"></FormulateInput>
                <FormulateInput type="text" label="Annual Family Income" name="AnuualInc" error-behavior="live"></FormulateInput>
                
            </div>
            <div class="four-wide_3">
                <FormulateInput type="text" label="Aadhar Number" name="fatherName" error-behavior="live"></FormulateInput>
                <FormulateInput type="text" label="Mobile Number" name="MotherName" error-behavior="live"></FormulateInput>
                <FormulateInput type="email" label="Email Id" name="AnuualInc" error-behavior="live"></FormulateInput>
                <FormulateInput 
                :options="{first: 'Day Scholar', second: 'Hosteler'}"
                type="select"
                placeholder="Select an option"
                label="Day Scholar/Hosteler"/>
            </div>
            </fieldset>
        </FormulateForm>
        <div>
          <button v-on:click="goToHome()">Submit</button>
        </div>
    </div>
    <div class="container div-outer">
      <FormulateForm>
            <fieldset class="fsStyle">
            <legend class="legendStyle">
              <span class="spancss">Academic Details</span>
              <div class="container mt-5">
                <div>
                  <b-button v-b-modal.modal-1>Show Modal</b-button>
      <b-modal id="modal-1" title="Vue Js Bootstrap Modal Example">
        <p class="my-4">Content goes here...</p>
      </b-modal>
      </div>
      </div>
            </legend>
            
            </fieldset>
      </FormulateForm>
    </div>

    </div>
</template>
<script>
export default{
methods : {
  goToHome(){

    this.$router.push('/hellow')
  }
}
}
</script>


<style scoped>
.div-outer {
margin-left: 25em;
margin-top: 2em;
min-width:200px;
max-width:1050px;
}
legend.legendStyle {
padding-left: 5px;
padding-right: 5px;
width: auto;
    
    
}
fieldset.fsStyle {

font-family: Verdana, Arial, sans-serif;
font-size: small;
font-weight: normal;
border: 1px solid #999999;
padding-left: 14px;
padding-right: 14px;
padding-bottom: 14px;
margin-top: 5px;
background-color: #fce9de;
}
.spancss {
  color: #EA6D00;
  font-size: 16px;
  font-weight: bold;
}
.voffset1 { margin-top: 8px; }
@media (min-width: 420px) {
    .four-wide {
    display: flex;
    }
.four-wide .formulate-input{
    margin-left: 5em;
  }
  
  .four-wide .formulate-input:first-child
  
  {
    margin-left: 2px;
  }
  .four-wide .formulate-input:last-child{
    margin-left : 5em;
  }
}
 @media (min-width: 420px){
  .four-wide_2 {
    display: flex;
    }

.four-wide_2 .formulate-input {

    
    margin-left: 5em;
    margin-right: 0em;
  }
  
  
  .four-wide_2 .formulate-input:first-child {
    margin-left: 2px;
    margin-right: 3.5em;
  }
  }
  @media (min-width: 420px){
  .four-wide_3 {
    display: flex;
    }
  
.four-wide_3 .formulate-input:first-child{
  margin-left:2px;
  
}
  .four-wide_3 .formulate-input {
    margin-left: 5em;
  }
.four-wide_3 .formulate-input:last-child{
  margin-left: 5em;
}
}

@media (min-width: 660px){
  .double-wide {
    display: flex;
  }
  
  .double-wide .formulate-input{
    margin-left: 0.2em;
    margin-right: 120px;
  }
  .double-wide .formulate-input:last-child{
    margin-left: 0.8em;
  }
  
}
</style>