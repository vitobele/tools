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
	  {
        name: "List.js",
		user: "javve",
		repo: "list.js",
		img_url: "https://listjs.com/assets/images/graphics/listjs-logo.png",
        repo_url: "https://github.com/javve/list.js",
		site_url: "https://listjs.com/",
        path: "javve/list.js",
		content:
          "The perfect library for adding search, sort, filters and flexibility to tables, lists and various HTML elements. Built to be invisible and work on existing HTML.",
      },
	  {
        name: "aaPanel",
		user: "aaPanel",
		repo: "aaPanel",
		img_url: "https://avatars.githubusercontent.com/u/31841517",
        repo_url: "https://github.com/aaPanel/aaPanel",
		site_url: "https://www.aapanel.com/",
        path: "aaPanel/aaPanel",
		content:
          "Simple but Powerful web-based Control Panel. Free and Open source Hosting Control Panel.",
      },
	  {
        name: "defer.js",
		user: "shinsenter",
		repo: "defer.js",
		img_url: "",
        repo_url: "https://github.com/shinsenter/defer.js",
		site_url: "https://shinsenter.github.io/defer.js/",
        path: "shinsenter/defer.js",
		content:
          "A super small, super efficient library that helps you lazy load almost everything like images, video, audio, iframes as well as stylesheets, and JavaScript.",
      },
	  {
        name: "laragon",
		user: "leokhoa",
		repo: "laragon",
		img_url: "",
        repo_url: "https://github.com/leokhoa/laragon",
		site_url: "https://laragon.org/",
        path: "leokhoa/laragon",
		content:
          "Laragon is a portable, isolated, fast & powerful universal development environment for PHP, Node.js, Python, Java, Go, Ruby. It is fast, lightweight, easy-to-use and easy-to-extend.",
      },
    ],
  });

  //Overwrite the contents of #target with the renderer HTML
  document.getElementById("target").innerHTML = rendered;
};
