const { default: mongoose } = require("mongoose");
const Document = require("./Document");
require("dotenv").config();
const { MONGO_URL } = process.env;

mongoose.connect( MONGO_URL).then(()=>console.log("connected to DB successfully"));

const io=require("socket.io")(3001,{
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
      }
})


io.on('connection', (socket) => {
  console.log("User connected");

  let currentDocumentId;

  // Listener for loading documents
  socket.on('get-document', async (documentId) => {
      currentDocumentId = documentId;
      const document = await findorcreateDocument(documentId);
      socket.join(documentId);
      socket.emit("load-document", document.data);
  });

  // Set up listeners only once per connection
  socket.on("send-changes", (delta) => {
      if (currentDocumentId) {
          socket.broadcast.to(currentDocumentId).emit("receive-changes", delta);
      }
  });

  socket.on("save-document", async (data) => {
      if (currentDocumentId) {
          await Document.findByIdAndUpdate(currentDocumentId, { data });
      }
  });

  socket.on('disconnect', () => {
      console.log("User disconnected");
  });

  socket.on('error', (err) => {
      console.error('Socket error:', err);
  });
});




async function findorcreateDocument(id){
    if(id==null) return;
    const document=await Document.findById(id);
    if(document) return document;
    return await Document.create({
        _id:id,
        data:""
    })

}