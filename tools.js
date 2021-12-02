window.onload = function () {
  //Grab the inline template
  var template = document.getElementById("template").innerHTML;

  //Compile the template
  var compiled_template = Handlebars.compile(template);

  //Render the data into the template
  var rendered = compiled_template({
    tool: [
      {
        name: "SweetAlert2",
		user: "sweetalert2",
		repo: "sweetalert2",
		img_url: "https://avatars.githubusercontent.com/u/35137722",
        url: "https://github.com/sweetalert2/sweetalert2",
        path: "sweetalert2/sweetalert2",
        content:
          "A beautiful, responsive, highly customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies.",
      },
      {
        name: "Tool Name",
		user: "",
		repo: "",
		img_url: "https://via.placeholder.com/400",
        url: "#",
        path: "path/dir",
		content:
          "Suspendisse nec placerat enim. Phasellus molestie, justo eget elementum imperdiet, mi ipsum semper turpis, tempus mattis dolor ex et leo. Quisque consequat vel leo sit amet commodo. Sed mattis augue viverra tortor auctor, non vestibulum est suscipit. In libero lacus, pretium faucibus.",
      },
	  {
        name: "Tool Name",
		user: "",
		repo: "",
		img_url: "",
        url: "#",
        path: "path/dir",
		content:
          "Suspendisse nec placerat enim. Phasellus molestie, justo eget elementum imperdiet, mi ipsum semper turpis, tempus mattis dolor ex et leo. Quisque consequat vel leo sit amet commodo. Sed mattis augue viverra tortor auctor, non vestibulum est suscipit. In libero lacus, pretium faucibus.",
      },
    ],
  });

  //Overwrite the contents of #target with the renderer HTML
  document.getElementById("target").innerHTML = rendered;
};
