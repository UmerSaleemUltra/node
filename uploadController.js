import Document from "./model/doccument.js"


async function saveDocument(userId, fileName, fileUrl) {
  try {
    const document = new Document({
      userId,
      fileName,
      fileUrl
    });

    await document.save();
    console.log('Document saved successfully!');
  } catch (error) {
    console.error('Error saving document:', error);
  }
}

// Example function to retrieve documents for a user
async function getUserDocuments(userId) {
  try {
    const documents = await Document.find({ userId });
    return documents;
  } catch (error) {
    console.error('Error fetching documents:', error);
    return [];
  }
}

export { saveDocument, getUserDocuments };
