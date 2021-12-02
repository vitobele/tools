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
        repo_url: "https://github.com/sweetalert2/sweetalert2",
		site_url: "https://sweetalert2.github.io",
        path: "sweetalert2/sweetalert2",
        content:
          "A beautiful, responsive, highly customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies.",
      },
      {
        name: "Typora-Portable",
		user: "tobyqin",
		repo: "Typora-Portable",
		img_url: "",
        repo_url: "https://github.com/tobyqin/Typora-Portable",
		site_url: "#",
        path: "tobyqin/Typora-Portable",
		content:
          "The portable version of typora, go to Release page to download the zip package, then you are ready to go! Please note, this portable version is only for Windows platform.",
      },
	  {
        name: "UserFrosting",
		user: "userfrosting",
		repo: "UserFrosting",
		img_url: "https://avatars.githubusercontent.com/u/12834031",
        repo_url: "https://github.com/tobyqin/Typora-Portable",
		site_url: "https://www.userfrosting.com",
        path: "userfrosting/UserFrosting",
		content:
          "A secure, modern user management system for PHP. UserFrosting is a secure, modern user management system written in PHP and built on top of the Slim Microframework, Twig templating engine, and Eloquent ORM.",
      },
    ],
  });

  //Overwrite the contents of #target with the renderer HTML
  document.getElementById("target").innerHTML = rendered;
};
