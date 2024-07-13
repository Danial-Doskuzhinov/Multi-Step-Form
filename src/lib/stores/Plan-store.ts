
import { writable } from 'svelte/store';

type Plan = {
	id: 'arcade' | 'advanced' | 'pro';
	name: string;
	monthlyPrice: number;
	yearlyPrice: number;
};

type Subscription = {
	plan: Plan;
	billing: 'monthly' | 'yearly';
	addon: Addon[];
};

const plans: Plan[] = [
	{ id: 'arcade', name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90 },
	{ id: 'advanced', name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120 },
	{ id: 'pro', name: 'Pro', monthlyPrice: 15, yearlyPrice: 150 }
];

type Addon = {
	index:number,
	id: 'online' | 'storage' | 'customprofile';
	name: string;
	Yedil:string;
	monthlyPrice: number;
	yearlyPrice: number;
};

const addons: Addon[] = [
	{index:1, id: 'online', name: 'Online service',Yedil:'Access to multiplayer games', monthlyPrice: 1, yearlyPrice: 10 },
	{index:2,  id: 'storage', name: 'Larger storage',Yedil:'Extra 1TB of cloud save', monthlyPrice: 2, yearlyPrice: 20 },
	{index:3,  id: 'customprofile', name: 'Custom profile',Yedil:'Custom theme on your profile', monthlyPrice: 2, yearlyPrice: 20 }
];

const Value: Subscription = {
	plan: plans[0],
	billing: 'monthly',
	addon: addons
};

export const createPlanStore = () => {
	let initialPlan = Value;

	const { subscribe, update } = writable<Subscription>(initialPlan);

	const changePlan = (plan: Plan) =>
			update((val) => {
				const newSubscription = { plan, billing: val.billing ,addon:val.addon};
	
				return newSubscription;
			});
	const changeBilling = (billing: 'monthly' | 'yearly') => {
		update((value) => {
			const newBilling = { plan: value.plan, billing , addon:value.addon };
			return newBilling;
		});
	};

	const changeAddon = (addon: Addon[]) => {
		update((val2) => {
			const newAddon = { addon , plan:val2.plan , billing:val2.billing };
			return newAddon;
		});
	};
	
	const getTotalCost = (subscription: Subscription) => {
		const planCost =
			subscription.billing === 'monthly'
				? subscription.plan.monthlyPrice
				: subscription.plan.yearlyPrice;
		const addonCosts = subscription.addon.reduce(
			(acc, cur) =>
				subscription.billing === 'monthly'
					? (acc += cur.monthlyPrice)
					: (acc += cur.yearlyPrice),
			0
		);
		return planCost + addonCosts;
	};

	return {
		subscribe,
		changePlan,
		changeBilling,
		changeAddon,
		getTotalCost
	};
};

const subscription = createPlanStore();

export { plans, subscription, addons };