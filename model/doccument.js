import mongoose from "mongoose";
// Define the schema for the document metadata
const documentSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true, 
    trim: true, 
    lowercase: true 
  }, // The user who the document belongs to
  fileName: { 
    type: String, 
    required: true 
  }, // The name of the uploaded file
  fileUrl: { 
    type: String, 
    required: true 
  }, // The URL to access the file (from Vercel storage)
  uploadedAt: { 
    type: Date, 
    default: Date.now 
  } // Timestamp of when the document was uploaded
});

// Create and export the model based on the schema
const Document = mongoose.model('Document', documentSchema);

export default Document;
