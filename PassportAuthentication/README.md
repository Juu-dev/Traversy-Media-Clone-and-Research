This project is not mine, I clone from a youtuber: Travery media (channel).
His repo: https://github.com/bradtraversy/node_passport_login (Please give a star for him)

I just push project up my repo to save knowledge that I learn and research.

Explain Tools and lib:

-   bcryptjs: Encrypt passwords for added security (slower bcrypt lib)
    https://www.npmjs.com/package/bcryptjs
-   connect-flash: Used to support opening flash messages in any angle (flash session)
    https://www.npmjs.com/package/connect-flash
-   ejs: template engine
    https://ejs.co/#docs
-   express:
    https://expressjs.com/
-   express-ejs-layouts:
    https://www.npmjs.com/package/express-ejs-layouts
-   express-session: manipulate with session
    https://www.npmjs.com/package/express-session
-   mongoose:
    https://mongoosejs.com/docs/index.html
-   passport: Express-compatible authentication middleware
    https://www.npmjs.com/package/passport
-   passport-local: The local authentication strategy authenticates users using a username and password (local is local of server)
    https://www.npmjs.com/package/passport-local

Processor:

-   Register: validate -> hash password -> save credential to database
-   Login: validate -> passport (check user and password, then establish session in where save userID)
-   Logout: destroy session -> logout

Custom middleware: (path: config/auth.js)

-   forwardAuthenticated and ensureAuthenticated: check authenticate to redirect to corresponding page

Learn more passwork working (vietnamese): https://viblo.asia/p/tim-hieu-ve-passportjs-cac-buoc-xac-thuc-tai-khoan-GrLZDVQJ5k0
