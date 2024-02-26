const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Home page";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "halaman tidak bisa diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About home page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak bisa diakses dengan menggunakan method";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${name}!`;
      }

      return `Hello, ${name}!`;
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}!`;
    },
  },
  {
    method: "POST",
    path: "/user",
    handler: (request, h) => {
      //return h.response("created").code(201);

      // Detail notation
      // const response = h.response("success");
      // response.type("text/plain");
      // response.header("Custom-Header","some-value");
      // return response;

      //Chained notation
      return h.response("success")
      .type("text/plain")
      .header("Custom-Header","some-value");
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
