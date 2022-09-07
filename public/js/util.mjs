export const router = (route) => {
	// window.location.href = `${window.origin}/${route}`;
	document.location.assign(`${window.origin}/${route}`);
};
