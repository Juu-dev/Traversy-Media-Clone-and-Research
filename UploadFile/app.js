const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

// Set The Storage Engine
// destination: where the file was uploaded
// filename: config file name
const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

// Check File Type
// regex.test(str) is a function that checks if the string "str" matches with regex => return true or not => return false
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb("Error: Images Only!");
    }
}

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
}).single("myImage");

// Init app
const app = express();

// Template engine setup
app.set("view engine", "ejs");

// Public folder setup
app.use(express.static(__dirname + "/public"));

// Index route
app.get("/", (req, res) => {
    res.render("index");
});

// catch form submit
app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render("index", {
                msg: err,
            });
        } else {
            if (req.file == undefined) {
                res.render("index", {
                    msg: "Error: No File Selected!",
                });
            } else {
                res.render("index", {
                    msg: "File Uploaded!",
                    file: `uploads/${req.file.filename}`,
                });
            }
        }
    });
});

// Define port
const port = 3000;

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
