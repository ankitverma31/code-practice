// Problem Statement: In-memory filesystem library in JavaScript

// // // // //
// Features //
// // // // //

// createDirectory(name) – Creates a new directory at the current path.
// changeDirectory(path) – Changes the directory path.
// addFile(name) – Adds a new file at the current path.
// deleteFile(name) – Deletes the file with given name at the current path.
// deleteDirectory(name) – Deletes the directory with given name at the given path.
// getRootDirectory – Returns the root directory and all its nested childs.
// getCurDirectory – Returns the items of current directory.
// getCurDirectoryPath – Returns the path of the current directory.

const FileSystem = function () {
  this.directory = { root: {} };
  this.currentDir = this.directory["root"];
  this.currentDirPath = "root";

  // createDirectory(name) – Creates a new directory at the current path.
  this.createDirectory = function (name) {
    this.currentDir[name] = {};
  };

  // changeDirectory(path) – Changes the directory path.
  this.changeDirectory = function (path) {
    let current = this.directory;
    let paths = path.split("-");
    for (let path of paths) {
      current = current[path];
    }
    this.currentDir = current;
    this.currentDirPath = path;
  };

  // getRootDirectory – Returns the root directory and all its nested childs.
  this.getRootDirectory = function () {
    return this.directory;
  };

  // addFile(name) – Adds a new file at the current path.
  this.addFile = function (name) {
    if (this.currentDir.files) {
      this.currentDir.files.push(name);
    } else {
      this.currentDir["files"] = [name];
    }
  };

  // deleteFile(name) – Deletes the file with given name at the current path.
  this.deleteFile = function (name) {
    this.currentDir.files = this.currentDir.files.filter(
      (file) => file !== name
    );
  };

  // deleteDirectory(name) – Deletes the directory with given name at the given path.
  this.deleteDirectory = function (name) {
    delete this.currentDir[name];
  };

  // getCurDirectoryPath – Returns the path of the current directory.
  this.getCurDirectoryPath = function () {
    return this.currentDirPath;
  };

  // getCurDirectory – Returns the items of current directory.
  this.getCurDirectory = function () {
    return this.currentDir;
  };
};

const dir = new FileSystem();
dir.createDirectory("students");
dir.changeDirectory("root-students");
dir.addFile("index.html");
dir.addFile("data.json");
dir.deleteFile("data.json");

console.log(dir.getRootDirectory());
