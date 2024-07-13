<script lang="ts">
import {step} from './stores/store-step'
import './Font'
</script>
<div class="btns">
    <button class="btnBack" type="button" on:click={()=>step.updateStep("-")}>Go Back</button>
    <button class="btn" type="button" on:click={()=>step.updateStep('+')}>
      {#if $step === 4}
        Confirm {:else} Next Step
      {/if}</button>
  </div>

<style>
  .btns{
    /* display: flex; */
    /* justify-content: space-between; */
    position: absolute;
  bottom: 2rem;
  right: 2rem;
  }
.btnBack{
  margin-right: 11rem;
  border: none;
  color: rgb(150, 153, 170);
font-family: 'Ubuntu';
font-size: 16px;
font-family: 'Ubuntu';
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0px;
width: 123px;
height: 48px;
background-color:  rgb(255, 255, 255);
cursor: pointer;
}
.btn{
  
  color: rgb(255, 255, 255);
font-family: 'Ubuntu';
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0px;
width: 123px;
height: 48px;
border-radius: 8px;
background: rgb(2, 41, 89);
cursor: pointer;
}  
</style>