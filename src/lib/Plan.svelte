<script lang="ts">
  import Button from './Button.svelte';
  import { createPlanStore, plans , subscription } from "./stores/Plan-store";
 
  // export let subscriptionType = '';
  //  export let yearsubs = false;
  
  // type Subscription = {
  // 	plan: Plan;
  // 	billing: 'monthly' | 'yearly';
  // };
  
  // function changePlan () {
  //   updatePlan('pro', 15)
  // }
  
  
  // //примитивно через новую функцию отправляем новые данные
  // function changePlan () {
  //   updatePlan('pro', 15)
  // }
  
  // function changePlanAdv () {
  //   updatePlan('advanced', 12)
  // }
  
  // function changePlanArc () {
  //   updatePlan('arcade', 9)
  // }
  
  // function changebilling () {
  //   subscription.changeBilling()
  // }
  
  function Test () {
  console.log("text ex", $subscription);
}

</script>
  
  <div>
    <h2 class="step-title">Select your plan</h2>
      <p class="step-subtitle">You have the option of mounthly or yearly billing.</p>
      <div class="button-plan">
        {#each plans as plan (plan.id)}
				<button class={$subscription.plan.id === plan.id ? 'active radio-button' : 'radio-button'}
					on:click={() => subscription.changePlan(plan)}>
					<img src={`/imgs/icon-${plan.id}.svg`} alt={`${plan.id} plan`} />
					<div>
						<p class="planName">{plan.name}</p>		
              {#if $subscription.billing === 'yearly'}
              <p class="price"> $ {plan.yearlyPrice} /yr</p>
              <p class="price2">2 months free</p>
              {:else}
              <p class="price">$ {plan.monthlyPrice} /mo</p>
						  {/if}
					</div>
				</button>
			{/each}

      </div>
      <div class="container-switch">
      <label class="switch">
       
        <input type="checkbox" checked={$subscription.billing === 'yearly'}
        on:change={() =>
          subscription.changeBilling($subscription.billing === 'yearly' ? 'monthly' :  'yearly')} />
                  <span class="slider round">  </span>  

      </label>
      <div class="is">
      {#if $subscription.billing === 'yearly' }
      <p class="monthly">Yearly.</p> 
      {:else}
       <p class="monthly"> Monthly.</p> {/if}
      </div>
      </div>
      </div> 
      <Button />
  
  <style>
    .container-switch{
      display: flex;
    }
    .is{
      padding-top: 1.5rem;
      padding-left: 1.5rem;
    }
    .monthly{
      color: rgb(2, 41, 89);
font-family: Ubuntu;
font-size: 14px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0px;
margin-right: 3rem;
margin-bottom: 114px;

    }
    .planName{
      color: rgb(2, 41, 89);
font-family: Ubuntu;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0px;
    }
    .price2{
      color: rgb(2, 41, 89);
font-family: Ubuntu;
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0px;
    }
    .price{
      color: rgb(150, 153, 170);
      font-family: Ubuntu;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0px;
text-align: left;
    }
  .radio-button {
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 3px;
    border: 1px solid #b3b3b3; 
    border-radius: 0.375rem; 
    padding: 0.75rem; 
}

.radio-button:hover {
    border-color: #6610f2; 
}

@media (min-width: 48em) {
    .radio-button {
        width: 33.333333%; 
        flex-direction: column; 
        align-items: flex-start; 
        gap: 1.25rem; 
        padding-right: 2.5rem; 
    }
}

.radio-button.active {
    border-color: #6610f2; 
    background-color: #f8f8f8; 
}

  .button-plan {
  /* width: 450px; */
  /* height: 160px; */
  display: flex;
  justify-content:space-between;
  background: rgb(248, 248, 248);
  }
  

  
  
  .step-title{
  color: rgb(2, 41, 89);
  font-family: 'Ubuntu';
  font-size: 32px;
  font-weight: 700;
  line-height: 37px;
  letter-spacing: 0px;
  }
  .step-subtitle{
  color: rgb(150, 153, 170);
  font-family: 'Ubuntu';
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  }
  .switch {
    margin-left: 8rem;
    margin-top: 2rem;
  position: relative;
  display: flex;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

  
  
  </style>