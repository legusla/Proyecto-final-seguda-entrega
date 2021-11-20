const options = {
    mongodb: {
        host: 'mongodb://localhost/eccomerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        }
    },
    file: {
        path: './data'
    },
    firestore: {       
            "type": "service_account",
            "project_id": "ecommerce-coderhouse-2f6ff",
            //credenciales borradas
            //private_key_id 
            //private_key
            "client_email": "firebase-adminsdk-396ay@ecommerce-coderhouse-2f6ff.iam.gserviceaccount.com",
            "client_id": "111185112773901024347",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-396ay%40ecommerce-coderhouse-2f6ff.iam.gserviceaccount.com"          
    },
    mysql: {

    },
    sqlite: {

    }
}

module.exports = options;