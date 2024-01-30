  
  Before you run app 
  - create .env file in root folder 
  - MONGO_URL="your_mongodb_url" 
    ===== How to run server for api =====
    - cd server
    - npm run dev
    -----------------------
    ---- question api
    - post method (create question) --> localhost:9999/api/form/create-question | 
              required -id(Number), -question(Str)
    - get method (get all user) --> localhost:9999/api/form/get-questions | 
              not required
    - get method (get user by Id) --> localhost:9999/api/form/get-question/:id  | 
              not required

------------------------------------------
    ---- quesionnaires api
    - post method (create questionnaires) --> localhost:9999/api/form/create-questionnaires | 
              required -questionId(String)  -answer(Number)
    - get method (get all questionnaires) --> localhost:9999/api/form/get-questionnaires | 
              not requires
    - get method (get questionnaires by userId) --> localhost:9999/api/form/get-questionnaire/:id | 
              required userId(Number)
-------------------------------------------

    ----- User API
    - post method (login line ) --> http://localhost:9999/api/user/user-login | 
              required -token
    - post method (update user data ) --> http://localhost:9999/api/user/update-user-data | 
              required - data ***********
    - get method (get users data )  http://localhost:9999/api/user/get-users | required nothing