  
  Before you run app 
  - create .env file in root folder 
  - MONGO_URL="your_mongodb_url" 
    ===== How to run server for api =====
    - cd server
    - npm run dev
    -----------------------
    ---- question api
    - post method (create question) --> localhost:9999/api/create-question | required -id(Number), -question(Str)
    - get method (get all user) --> localhost:9999/api/get-questions | not required
    - get method (get user by Id) --> localhost:9999/api/get-question/:id  | not required


    ---- quesionnaires api
    - post method (create questionnaires) --> localhost:9999/api/create-questionnaires | required -questionId(String) -userId(String) -answer(Number)
    - get method (get all questionnaires) --> localhost:9999/api/get-questionnaires | not requires
    - get method (get questionnaires by userId) --> localhost:9999/api/get-questionnaire/:id | required userId(Number)
