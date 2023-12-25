import { writable } from 'svelte/store';

export const userType = writable(null);
export const screenType = writable(null);
export const isIframe = writable(true);
export const darkMode = writable(true);

export const animationSpeed = writable(1.0);
export const lastAnimationSpeed = writable(1.0);

export const mousePosition = writable({ x: 0, y: 0, z: 0 });

// export const showRightSidebar = writable(true);
// export const showLeftSidebar = writable(true);

export const fullDatabaseView = writable(false);
export const showFilters = writable(false);

export const visual = writable('space');

export const xPlane = writable({
	name: 'X PLANE',
	visible: false,
	min: 0,
	max: 100,
	value: 50
});

export const yPlane = writable({
	name: 'Y PLANE',
	visible: false,
	min: 0,
	max: 100,
	value: 50
});

export const zPlane = writable({
	name: 'Z PLANE',
	visible: false,
	min: 0,
	max: 100,
	value: 50
});
