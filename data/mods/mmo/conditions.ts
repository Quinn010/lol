export const Conditions: {[k: string]: ModdedConditionData} = {
	gem: {
		duration: 1,
		affectsFainted: true,
		onBasePower(basePower, user, target, move) {
			this.debug('Gem Boost');
			return this.chainModify(1.5);
		},
	},
};
