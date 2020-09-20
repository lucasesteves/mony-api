interface Auth {
    secret:string
}

export = {
    secret: process.env.AUTH
} as Auth; 