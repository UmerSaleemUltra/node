import express from 'express';
import db from './config/db.js'
import { saveDocument, getUserDocuments } from './uploadController.js'; // Import your controller functions

const app = express();
const PORT = process.env.PORT || 3000

// Connect to MongoDB
db.connection.once('open', () => {
    console.log('Database connected successfully!');
});
app.use(express.json());

// Example route to save document
app.post('/upload', async (req, res) => {
  const { userId, fileName, fileUrl } = req.body;
  
  try {
    await saveDocument(userId, fileName, fileUrl);
    res.status(200).json({ message: 'Document uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload document' });
  }
});

// Example route to get user documents
app.get('/documents/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const documents = await getUserDocuments(userId);
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
