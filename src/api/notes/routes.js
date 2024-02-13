const routes = (handler) => [
  // menambah catatan
  {
    method: "POST",
    path: "/notes",
    handler: handler.postNoteHandler,
  },
  // menampilkan seluruh catatan
  {
    method: "GET",
    path: "/notes",
    handler: handler.getNotesHandler,
  },
  // menampilkan detail dari catatan
  {
    method: "GET",
    path: "/notes/{id}",
    handler: handler.getNoteByIdHandler,
  },
  // mengubah catatan
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: handler.putNoteByIdHandler,
  },
  // menghapus catatan berdasarkan id
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
