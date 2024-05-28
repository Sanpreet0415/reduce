function processFiles(files) {
  // Calculate total size of all files
  const totalSize = files.reduce((acc, file) => acc + file.size, 0);

  // Find the 5 largest files
  const largestFiles = files.slice()
    .sort((a, b) => b.size - a.size)
    .slice(0, 5)
    .map(file => ({ name: file.name, size: file.size }));

  // Group files by extension
  const filesByExtension = files.reduce((acc, file) => {
    const extension = file.name.split('.').pop().toLowerCase();
    if (!acc[extension]) {
      acc[extension] = [];
    }
    acc[extension].push(file.name);
    return acc;
  }, {});

  return {
    totalSize,
    largestFiles,
    filesByExtension
  };
}

// Example usage:
const files = [
  { name: "document1.pdf", size: 500 },
  { name: "document2.pdf", size: 700 },
  // Add more file objects here
];

const result = processFiles(files);
console.log(result);
