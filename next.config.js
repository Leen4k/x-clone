/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_SECRET:"jH1iIfTSlzIdmzxsCRTbV5J9dj4lNIwpzBOcYbcwMdw=",
    },
    images:{
        domains:[
            "lh3.googleusercontent.com",
        ]
    }    
}

module.exports = nextConfig
