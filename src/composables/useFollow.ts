import { get, useEventListener, useMouseInElement } from '@vueuse/core';
import { Ref } from 'vue';

type Options = {
	elementRef: Ref<HTMLElement | undefined>;
	rotate?: boolean;
	tension?: number;
	maxDistance?: number;
};

export const useFollow = (options: Options) => {
	const { elementRef, rotate, tension, maxDistance = 1000 } = options;
	const { elementX, elementY } = useMouseInElement(elementRef);

	useEventListener(document, 'mousemove', (event) => {
		const elementValue = get(elementRef);

		if (!elementValue) return;

		const rect = elementValue.getBoundingClientRect();
		const x = rect.left + rect.width / 2;
		const y = rect.top + rect.height / 2;
		const rad = Math.atan2(event.clientY - y, event.clientX - x); // Swap the arguments
		const rot = rad * (180 / Math.PI) + 90; // Remove the "-1" and add 90 degrees

		elementValue.style.transform = `translateX(${movePercentage(
			get(elementX),
		)}%) translateY(${movePercentage(get(elementY))}%)
  ${rotate ? `rotate(${rot}deg)` : ''}`;
	});

	const movePercentage = (distance: number) => {
		return (distance / maxDistance) * 100 * (tension || 1);
	};
};
