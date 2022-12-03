This project is not mine, I clone from a youtuber: Travery media (channel).
His repo: https://github.com/bradtraversy/nodeuploads (Please give a star for him)

I just push project up my repo to save knowledge that I learn and research.

**Explain Tools and lib:**

-   ejs: template engine
    https://ejs.co/#docs
-   express: framework
    https://expressjs.com/
-   multer: upload file
    https://github.com/expressjs/multer#readme

**Processor:**

-   Upload file:
    -   use multer to init configuration upload file (storage, limits, fileFilter)
        -   storage: Here config destination and filename
        -   limits: Limits of the uploaded data
        -   fileFilter: Function to control which files are accepted
    -   Note:
        -   don't foget attribute enctype="multipart/form-data" in form will submit
        -   multer().single(fieldname): Accept a single file with the name _fieldname_. The single file will be stored in _req.file_ return a function like (req, res) =>
            {}
        -   cb: This callback is a so called error-first function (detail: https://stackoverflow.com/questions/55925522/what-is-cb-in-multer or https://www.tabnine.com/code/javascript/functions/multer/cb)
        -   mime: Multipurpose Internet Mail Extensions (detail: https://wiki.tino.org/mime-type-la-gi/)

**Custom middleware:**

-   storage and checkFileType will customize.
