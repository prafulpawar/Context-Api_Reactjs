const employees = [
  {
    "id": 1,
    "firstName": "John",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "activeTasks": 2,
      "newTasks": 2,
      "completedTasks": 1,
      "failedTasks": 0
    },
    "tasks": [
      {
        "title": "Task 1",
        "description": "Complete report",
        "date": "2025-02-18",
        "category": "Documentation",
        "active": true,
        "new": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Fix bug in module",
        "date": "2025-02-19",
        "category": "Development",
        "active": false,
        "new": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Prepare slides for meeting",
        "date": "2025-02-20",
        "category": "Presentation",
        "active": true,
        "new": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Emily",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "activeTasks": 2,
      "newTasks": 2,
      "completedTasks": 1,
      "failedTasks": 0
    },
    "tasks": [
      {
        "title": "Task 1",
        "description": "Review PRs",
        "date": "2025-02-18",
        "category": "Code Review",
        "active": true,
        "new": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Write documentation",
        "date": "2025-02-20",
        "category": "Documentation",
        "active": false,
        "new": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Optimize codebase",
        "date": "2025-02-22",
        "category": "Development",
        "active": true,
        "new": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Michael",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "activeTasks": 2,
      "newTasks": 2,
      "completedTasks": 0,
      "failedTasks": 1
    },
    "tasks": [
      {
        "title": "Task 1",
        "description": "Set up CI/CD",
        "date": "2025-02-18",
        "category": "DevOps",
        "active": true,
        "new": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Optimize database",
        "date": "2025-02-22",
        "category": "Database",
        "active": false,
        "new": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Task 3",
        "description": "Implement logging system",
        "date": "2025-02-25",
        "category": "Infrastructure",
        "active": true,
        "new": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];



const admin = [
    {
        "admin": {
            "id": 1, "email":
             "admin@example.com",
             "password": "123"
          }
    }
]

export const  setLocalStorage = () =>{
  console.log("Setting localStorage with employees and admin...");
      localStorage.setItem('employees',JSON.stringify(employees));
      localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
    const employees =  JSON.parse(localStorage.getItem('employees'))
    const admin =  JSON.parse(localStorage.getItem('admin'))
    return {
      employees ,admin
    }
}

