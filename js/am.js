$(document).ready(function() {
	var $gravatar = $('#gravatar'),
		$projectsLink = $('#projectsLink'),
		$projects = $('#projects'),
		$projectsClose = $('#closeButton'),
		$copyright = $('#copyright');

	setCopyrightYear();

	$gravatar.empty()
		.append($.gravatar('tony@anthonymatsas.com'));

	$projectsLink.on('click', function(event) {
		event.preventDefault();

		$projects.show();
	});

	$projectsClose.on('click', function(event) {
		event.preventDefault();

		$projects.hide();
	});

	function setCopyrightYear() {
		let year = new Date().getFullYear();

		$copyright.append(year);
	}
});
