<script lang="ts">
	import { step } from '../lib/stores/store-step';
	import { subscription } from '../lib/stores/Plan-store';
	import Button from './Button.svelte';
  </script>
  
  <div class="form-step">
	<section class="form-content">
	  <h1 class="header">Finishing up</h1>
	  <p class="description">
		Double-check everything looks OK before confirming.
	  </p>
	  <div class="addon-summary">
		<div class="addon-header">
		  <div>
			<p class="plan-info">
			  {$subscription.plan.name}
			  {$subscription.billing === 'monthly' ? '(Monthly)' : '(Yearly)'}
			</p>
			<!-- <button class="change-button">Change</button> -->
			<!-- on:click={() => step.backToPlanStep()} -->
		  </div>
		  <p class="plan-price">
			{$subscription.billing === 'monthly'
			  ? `$${$subscription.plan.monthlyPrice}/mo`
			  : `$${$subscription.plan.yearlyPrice}/yr`}
		  </p>
		</div>
		{#if $subscription.addon.length}
		  <hr class="divider" />
		{/if}
		<div class="addon-list">
		  {#each $subscription.addon as addon (addon.id)}
			<div class="addon-item">
			  <p class="addon-name">{addon.name}</p>
			  <p class="addon-price">
				{$subscription.billing === 'monthly'
				  ? `+$${addon.monthlyPrice}/mo`
				  : `+$${addon.yearlyPrice}/yr`}
			  </p>
			</div>
		  {/each}
		</div>
	  </div>
	  <div class="total-cost">
		<p class="total-label">
		  {$subscription.billing === 'monthly' ? 'Total (per month)' : 'Total (per year)'}
		</p>
		<p class="total-amount">
		  {`+$${subscription.getTotalCost($subscription)}`}{$subscription.billing === 'monthly'
			? '/mo'
			: '/yr'}
		</p>
	  </div>
	</section>
	<Button/>
  </div>
  
  <style>
	.form-step {
	  display: flex;
	  flex-direction: column;
	  gap: 20px;
	  /* margin-top:; */
	}
  
	.form-content {
	  background-color: #f9fafb;
	  border-radius: 8px;
	}
   .header{
	color: rgb(2, 41, 89);
font-family: Ubuntu;
font-size: 32px;
font-weight: 700;
line-height: 37px;
letter-spacing: 0px;
   }
	.description {
	  margin-bottom: 10px;
	  color: #6b7280;
	}
  
	.addon-summary {
	  margin-top: 1px;
	  display: flex;
	  flex-direction: column;
	  gap: 10px;
	  background-color: #fafafa;
	  border-radius: 8px;
	}
  
	.addon-header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  
	}
  
	.plan-info {
		color: rgb(2, 41, 89);
font-family: Ubuntu;
font-size: 16px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0px;
	}
	.plan-price {
	  font-weight: 700;
	  color: #1e3a8a;
	}
  
	.divider {
	  margin: 2px 0;
	}
  
	.addon-list {
	  display: flex;
	  flex-direction: column;
	  gap: 10px;
	}
  
	.addon-item {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
  
	.addon-name {
	  color: #6b7280;
	}
  
	.addon-price {
	  font-weight: 500;
	  color: #1e3a8a;
	}
  
	.total-cost {
	  margin-top: 2px;
	  display: flex;
	  justify-content: space-between;
	  padding: 0 2px;
	}
  
	.total-label {
	  color: #6b7280;
	}
  
	.total-amount {
		color: rgb(72, 62, 255);
font-family: Ubuntu;
font-size: 20px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0px;
	}
  </style>
  