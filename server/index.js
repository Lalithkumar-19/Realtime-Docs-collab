const { default: mongoose } = require("mongoose");
const Document = require("./Document");
require("dotenv").config();
const { MONGO_URL } = process.env;

mongoose.connect( MONGO_URL).then(()=>console.log("connected to DB successfully"));

const io=require("socket.io")(3001,{
    cors: {
        origin: "http://localhost:5173", // Adjust this to match your frontend's origin
        methods: ["GET", "POST"],
        credentials: true
      }
})

// io.on('connection',(socket)=>{
//     console.log("user connected");
//     socket.on('get-document',async( documentId)=>{
//         const document=await findorcreateDocument(documentId);
//         socket.join(documentId);
//         socket.emit("load-document",document.data);
//         socket.on("send-changes",(delta)=>{
//             socket.broadcast.to(documentId).emit("receive-changes",delta);
//         })
//         socket.on("save-document",async (data)=>{
//             await Document.findByIdAndUpdate(documentId,{data});
//         })

//     })
   
//     socket.on('disconnect',()=>{
//         console.log("user disconnected");
//     });

//   });
// }) 
io.on('connection', (socket) => {
  console.log("User connected");

  socket.on('get-document', async (documentId) => {
      const document = await findorcreateDocument(documentId);
      socket.join(documentId);
      socket.emit("load-document", document.data);

      if (!socket.hasListeners('send-changes')) {
        socket.on("send-changes", (delta) => {
            socket.broadcast.to(documentId).emit("receive-changes", delta);
        });
    }

      socket.on("send-changes", (delta) => {
          socket.broadcast.to(documentId).emit("receive-changes", delta);
      });

      socket.on("save-document", async (data) => {
          await Document.findByIdAndUpdate(documentId, { data });
      });
  });

  socket.on('disconnect', () => {
      console.log("User disconnected");
  });

  socket.on('error', (err) => {
      console.error('Socket error:', err);
  });
});
// io.on('connection', (socket) => {
//     console.log("User connected");
  
//     socket.on('get-document', async (documentId) => {
//       try {
//         const document = await findorcreateDocument(documentId);
//         socket.join(documentId);
//         socket.emit("load-document", document.data);
  
//         socket.on("send-changes", (delta) => {
//           socket.broadcast.to(documentId).emit("receive-changes", delta);
//         });
  
//         socket.on("save-document", async (data) => {
//           await Document.findByIdAndUpdate(documentId, {data});
//         });
  
//       } catch (error) {
//         console.error('Error in get-document:', error);
//         socket.emit('error', 'An error occurred while retrieving the document.');
//       }
//     });
  
//     socket.on('disconnect', () => {
//       console.log("User disconnected");
//     });
  
//     socket.on('error', (err) => {
//       console.error('Socket error:', err);
//     });
//   });
  




async function findorcreateDocument(id){
    if(id==null) return;
    const document=await Document.findById(id);
    if(document) return document;
    return await Document.create({
        _id:id,
        data:""
    })

}