window.onload = function() {
	var copyright = document.querySelector('#copyright');

	setCopyrightYear();

	function setCopyrightYear() {
		let year = new Date().getFullYear();

		copyright.append(year);
	}
}
