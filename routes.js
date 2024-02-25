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
    method: "*",
    path: "/{any*}",
    handler : (request,h) => {
        return "Halaman tidak ditemukan";
    }
  },
];

module.exports = routes;
