//? Base url: https://todo-for-n92.cyclic.app/

//! ----------------------------------------------

//? Register user:

//*   POST => https://todo-for-n92.cyclic.app/user/register

//*   body: {
//*     username: “Example”,
//*     password: “password#2023”
//*   }

//*   Success: {
//*     message: "Signup successfully",
//*     token: "example_token"
//*   }

//! ----------------------------------------------

//? Login user:

//*   POST => https://todo-for-n92.cyclic.app/user/login

//*   body: {
//*     username: “Example”,
//*     password: “password#2023”
//*   }

//*   Success: {
//*     message: "Login seccessful",
//*     token: token,
//*   }

//! ----------------------------------------------

//? Add todo:

//*   POST => https://todo-for-n92.cyclic.app/todos/add

//*   headers: {
//*     "x-access-token": "token";
//*   }

//*   body: {
//*     task: “Example task”,
//*   }

//*   Success: {
//*     message: "Successfully created",
//*     todo: {
//*       "task": "My task",
//*       "completed": false,
//*       "userId": "63dfcb1c8b87a82adf0ec266",
//*       "_id": "63e0151255214795ecb20235",
//*       "createdAt": "2023-02-05T20:44:02.582Z",
//*       "updatedAt": "2023-02-05T20:44:02.582Z",
//*       "__v": 0
//*       }
//*   }

//! ----------------------------------------------

//? Update todo:

//*   PUT => https://todo-for-n92.cyclic.app/todos/:id

//*   headers: {
//*     "x-access-token": "token";
//*   }

//*   body: {
//*     task: "Update task”,
//*   }

//*   Success: {
//*     {
//*       message: "Updated successfully",
//*       todo: updated todo object,
//*     }
//*   }

//! ----------------------------------------------

//? Toggle todo completed:

//*   PUT => https://todo-for-n92.cyclic.app/todos?id={todoId}

//*   headers: {
//*     "x-access-token": "token";
//*   }

//*  Success: {
//*    {
//*      message: "Updated successfully",
//*      todo: updated todo object,
//*    }
//*  }

//!  ----------------------------------------------

//? Delete todo:

//*   DELETE => https://todo-for-n92.cyclic.app/todos/:id

//*   headers: {
//*     "x-access-token": "token";
//*   }

//* Success: {
//*   {
//*     message: "Todo was successfully deleted",
//*     todo: Deleted todo object,
//*   }
//* }

//! ----------------------------------------------

//? Get all todos:

//*   GET => https://todo-for-n92.cyclic.app/todos/all

//*   headers: {
//*     "x-access-token": "token";
//*   }

//*  Success: {
//*    {
//*      message: "All Todos were found",
//*      allTodosCount: 0,
//*      allTodos: [
//*        {
//*          todo object
//*        },
//*        {
//*          todo object
//*        }
//*      ]
//*    }
//*  }

//! ----------------------------------------------

//? Get one todo:

//*   GET => https://todo-for-n92.cyclic.app/todos/:id

//*   headers: {
//*     "x-access-token": "token";
//*   }

//*   Success: {
//*     message: "Todo was found",
//*     todo: {
//*       todo object
//*     },
//*   }

//* 1. Register / Login
//* 2. Todo add form
//* 3. Edit function
//* 4. Toggle completed
//* 5. Delete todo
//* 6. LogOut