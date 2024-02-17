const routes = (handler) => [
  // menambah catatan
  {
    method: "POST",
    path: "/notes",
    handler: handler.postNoteHandler,
    options: {
      auth: "notesapp_jwt",
    },
  },
  // menampilkan seluruh catatan
  {
    method: "GET",
    path: "/notes",
    handler: handler.getNotesHandler,
    options: {
      auth: "notesapp_jwt",
    },
  },
  // menampilkan detail dari catatan
  {
    method: "GET",
    path: "/notes/{id}",
    handler: handler.getNoteByIdHandler,
    options: {
      auth: "notesapp_jwt",
    },
  },
  // mengubah catatan
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: handler.putNoteByIdHandler,
    options: {
      auth: "notesapp_jwt",
    },
  },
  // menghapus catatan berdasarkan id
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: handler.deleteNoteByIdHandler,
    options: {
      auth: "notesapp_jwt",
    },
  },
];

module.exports = routes;
