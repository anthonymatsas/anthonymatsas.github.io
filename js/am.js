(function () {
	var STORAGE_KEY = 'am-theme';

	function getStoredTheme() {
		try {
			return localStorage.getItem(STORAGE_KEY);
		} catch (err) {
			return null;
		}
	}

	function setStoredTheme(theme) {
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch (err) {}
	}

	function applyTheme(theme, options) {
		var root = document.body;
		if (!root) { return; }

		root.dataset.theme = theme;

		var toggle = document.getElementById('theme-toggle');
		if (toggle) {
			var icon = toggle.querySelector('i');
			var isDark = theme === 'dark';

			toggle.setAttribute('aria-pressed', String(isDark));
			toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');

			if (icon) {
				icon.classList.remove('fa-moon-o', 'fa-sun-o');
				icon.classList.add(isDark ? 'fa-sun-o' : 'fa-moon-o');
			}
		}

		if (options && options.persist) {
			setStoredTheme(theme);
		}
	}

	window.addEventListener('DOMContentLoaded', function () {
		var storedTheme = getStoredTheme();
		var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
		var initialTheme = storedTheme || (prefersDark && prefersDark.matches ? 'dark' : 'light');

		applyTheme(initialTheme, storedTheme ? { persist: true } : null);

		var toggle = document.getElementById('theme-toggle');
		if (toggle) {
			toggle.addEventListener('click', function () {
				var nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
				applyTheme(nextTheme, { persist: true });
			});
		}

		if (prefersDark && prefersDark.addEventListener) {
			prefersDark.addEventListener('change', function (event) {
				if (! getStoredTheme()) {
					applyTheme(event.matches ? 'dark' : 'light');
				}
			});
		}

		var copyright = document.querySelector('#copyright');
		if (copyright) {
			copyright.textContent = new Date().getFullYear();
		}
	});
})();
