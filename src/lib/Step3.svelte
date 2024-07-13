<script lang="ts">
	import checkMarkImg from './img/icon-checkmark.svg';
	import { step } from './stores/store-step'; // Импорт step из store-step
	import { subscription, addons } from "./stores/Plan-store";
	import { onMount } from 'svelte';
	import Button from './Button.svelte';

	const updateAddons = (addon: (typeof $subscription.addon)[0]) => {
		subscription.changeAddon(
			$subscription.addon.map((a) => a.id).includes(addon.id)
				? $subscription.addon.filter((a) => a.id !== addon.id)
				: [...$subscription.addon, addon]
		);
	};
	let showComponent = false;
  
	onMount(() => {
	  showComponent = true;
	});
  
	const goToNextStep = () => {
	  step.updateStep('+');
	};
  
	const goBack = () => {
	  step.updateStep('-');
	};
  
	function Test() {
	  console.log("text ex", $subscription);
	}
  

  </script>
  
  <main>
	<form class="AddOns-form" class:show={showComponent}>
	  <h3>Pick add-ons</h3>
	  <p class="AddOns-description">Add-ons help enhance your gaming experience.</p>
	  <div class="AddOns-container">
		{#each addons as addon (addon.id)}
		  <div class="AddOns-choice" >
			<div class="checkbox-wrapper-43">
			  <input type="checkbox"
			  name={addon.id}
			  id={addon.id}
			  checked={$subscription.addon.map((a) =>a.id ).includes(addon.id)}
			  on:change={() => updateAddons(addon)}>
			  <label for={`${addon.id}`} class="check">
				<svg width="18px" height="18px" viewBox="0 0 18 18">
				  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
				  <polyline points="1 9 7 14 15 4"></polyline>
				</svg>
			  </label>
			</div>
			<img src={checkMarkImg} alt="check" />
			<div class="choice-info">
			  <p class="choice-info-1">{addon.name}</p>
			  <p class="choice-info-2">{addon.Yedil}</p>
			</div>
			{#if $subscription.billing === 'monthly'}
			  <p class="price">${addon.monthlyPrice}/mo</p>
			{:else}
			  <p class="price">${addon.yearlyPrice}/yr</p>
			{/if}
		  </div>
		{/each}
	  </div>
		<Button/>
	</form>
  </main>
  
  <style>
	.checkbox-wrapper-43 input[type="checkbox"] {
	  display: none;
	  visibility: hidden;
	}
  
	.checkbox-wrapper-43 label {
	  display: inline-block;
	}
  
	.checkbox-wrapper-43 .check {
	  cursor: pointer;
	  position: relative;
	  margin: auto;
	  width: 18px;
	  height: 18px;
	  -webkit-tap-highlight-color: transparent;
	  transform: translate3d(0, 0, 0);
	}
	.checkbox-wrapper-43 .check:before {
	  content: "";
	  position: absolute;
	  top: -15px;
	  left: -15px;
	  width: 48px;
	  height: 48px;
	  border-radius: 50%;
	  background: rgba(34,50,84,0.03);
	  opacity: 0;
	  transition: opacity 0.2s ease;
	}
	.checkbox-wrapper-43 .check svg {
	  position: relative;
	  z-index: 1;
	  fill: none;
	  stroke-linecap: round;
	  stroke-linejoin: round;
	  stroke: #c8ccd4;
	  stroke-width: 1.5;
	  transform: translate3d(0, 0, 0);
	  transition: all 0.2s ease;
	}
	.checkbox-wrapper-43 .check svg path {
	  stroke-dasharray: 60;
	  stroke-dashoffset: 0;
	}
	.checkbox-wrapper-43 .check svg polyline {
	  stroke-dasharray: 22;
	  stroke-dashoffset: 66;
	}
	.checkbox-wrapper-43 .check:hover:before {
	  opacity: 1;
	}
	.checkbox-wrapper-43 .check:hover svg {
	  stroke: #4285f4;
	}
	.checkbox-wrapper-43 input[type="checkbox"]:checked + .check svg {
	  stroke: #4285f4;
	}
	.checkbox-wrapper-43 input[type="checkbox"]:checked + .check svg path {
	  stroke-dashoffset: 60;
	  transition: all 0.3s linear;
	}
	.checkbox-wrapper-43 input[type="checkbox"]:checked + .check svg polyline {
	  stroke-dashoffset: 42;
	  transition: all 0.2s linear;
	  transition-delay: 0.15s;
	}
	h3 {
	  font-family: 'Ubuntu';
	  font-weight: 700;
	  font-size: 24px;
	  line-height: 28px;
	  color: #022959;
	  margin-bottom: 9px;
	}
  
	.AddOns-description {
	  font-size: 16px;
	  line-height: 25px;
	  color: #9699aa;
	  margin-bottom: 22px;
	}
  
	.AddOns-container {
	  display: flex;
	  flex-direction: column;
	  gap: 12px;
	  margin-bottom: 50px;
	}
  
	.AddOns-choice {
	  height: 62px;
	  background-color: white;
	  border: 1px solid #d6d9e6;
	  border-radius: 8px;
	  cursor: pointer;
	  padding-inline: 16px;
	  display: flex;
	  align-items: center;
	  gap: 16px;
	}
  
	.choice-info {
	  text-align: left;
	}
  
	.choice-info-1 {
	  font-family: 'Ubuntu';
	  font-weight: 700;
	  font-size: 14px;
	  line-height: 16px;
	  color: #022959;
	}
  
	.choice-info-2 {
	  font-family: 'Ubuntu';
	  font-size: 12px;
	  line-height: 20px;
	  color: #9699aa;
	}
  
	.price {
	  font-family: 'Ubuntu';
	  font-size: 12px;
	  line-height: 20px;
	  color: #483eff;
	  margin-left: auto;
	}
  
	@media screen and (min-width: 1440px) {
	  h3 {
		font-size: 32px;
		line-height: 37px;
		margin-bottom: 11px;
	  }
  
	  .AddOns-description {
		margin-bottom: 35px;
	  }
  
	  .AddOns-choice {
		height: 81px;
		padding-inline: 24px;
		transition: 0.15s;
	  }
  
	  .choice-info-1 {
		font-family: 'Ubuntu';
		font-weight: 700;
		font-size: 16px;
		line-height: 18px;
	  }
  
	  .choice-info-2 {
		font-family: 'Ubuntu';
		font-size: 14px;
	  }
  
	  .price {
		font-family: 'Ubuntu';
		font-size: 14px;
	  }
	}
  
  </style>
  