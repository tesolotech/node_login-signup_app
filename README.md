# Node Express: User signup & login

Discription : This is simple user signup and login application with JWT token(expireid: 1h).

# DATABASE : Mongodb Atlas

# API URLS

- http://localhost:3000/api/signup # POST # API Payloads :

      ```json

  {
  "name": "Vikash Kumar",
  "email": "vikashk6@chetu.com",
  "password": "vikash@123"
  }

````

- http://localhost:3000/api/login
    # POST

    # API Payloads :

    ```json
{
	"email":"vikashk6@chetu.com",
	"password":"vikash@123"
}
````

# RESPONSE

````
{
   "message": "Auth Successful",
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpa2FzaGs2QGNoZXR1LmNvbSIsInVzZXJJZCI6IjYxZjgxZjk4ZjVjMDJlMzczNTU3NzllZSIsImlhdCI6MTY0MzY1MTIyNiwiZXhwIjoxNjQzNjU0ODI2fQ.bAEJmYATV4UxoChp6y0Gdi4vn6PB5BgqB3hAc4wB5eI"
}

```

- http://localhost:3000/api/users
   # GET
   # API HEADERS :
   Authorization : <jwt token>

- http://localhost:3000/api/user/<userid>
   # GET
   # API HEADERS :
   Authorization : <jwt token>
   Response : {
   "data": {
       "_id": "61f81f1bb1bcc63630d241c2",
       "name": "Vikash Kumar",
       "email": "megasoft909@gmail.com",
       "password": "$2a$10$OAObDpkF7gIqhUWGVO0.D.EmubQhLvhVCdmFhL8c8hMeVFpUX7NIy",
       "createdAt": "2022-01-31T17:40:43.412Z",
       "updatedAt": "2022-01-31T17:40:43.412Z",
       "__v": 0
   }
}

### Project Specifications

**POSTMAN API TESTING AND DATABASE VIEWS**
# URL : https://github.com/tesolotech/node_login-signup_app/tree/master/postman_%26_mongo_atlas_pic

# PORT : 3000

**Commands**
- install: `npm install`
- run: `npm start`
````
