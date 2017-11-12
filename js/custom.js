$(document).ready(function() {
	var $gravatar = $('#gravatar');
	var $projectsLink = $('#projectsLink');
	var $projects = $('#projects');
	var $projectsClose = $('#closeButton');

	$gravatar.empty()
		.append($.gravatar('tonymatsas@gmail.com'));

	$projectsLink.on('click', function(event) {
		event.preventDefault();

		$projects.show();
	});

	$projectsClose.on('click', function(event) {
		event.preventDefault();

		$projects.hide();
	});
});
