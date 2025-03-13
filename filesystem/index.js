import fs from "fs";

//create a file in the filesystem

// fs.writeFileSync("./newfile.txt", "this is my new file");

// //write the new file

// fs.writeFileSync("./newfile.txt", "this is my updated content");

// //append the new content to the file

// fs.appendFileSync("./newfile.txt", "this is my new file content");

//read the file

// const data= fs.readFileSync("./file.txt","utf8");
// console.log(data);

//delete a file
// fs.unlinkSync("./file.txt");

//rename a file

// fs.renameSync("./newfile.txt", "AITAM.txt");

//read file async
// fs.readFile("./AITAM.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("error fetching file:",err);
//     return;
//   }
//   console.log("file content is:",data);
// });

//write/create file async

// fs.writeFile("./hello.txt", "\nNode js class", (err) => {
//   if (err) {
//     console.log("error writing to file:", err);
//     return;
//   }
//   console.log("file created successfully");
// });

// fs.appendFile("./hello.txt", "\nNode js class started", (err) => {
//     if (err) {
//       console.log("error writing to file:", err);
//       return;
//     }
//     console.log("file created successfully");
//   });

// fs.rmdir("myfolder", (err) => {
//   if (err) {
//     console.log("error creating folder:", err);
//     return;
//   }
//   console.log("folder created successfully");
// });

//stream for large files

// const writeStream = fs.createWriteStream("./helloWorld.txt");
// writeStream.write("this is data");
// writeStream.end("final line of data");

//read the stream

// const readStream = fs.createReadStream("./helloWorld.txt");
// readStream.on("data", (chunk) => {
//   console.log("chunk received", chunk);
// });
