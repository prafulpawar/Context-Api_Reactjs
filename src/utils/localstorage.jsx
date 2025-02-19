const employees =[
  
    {
      "id": 1, "email": "employee1@example.com", "password": "123",
      "tasks": [
        {"title": "Task 1", "description": "Complete report", "date": "2025-02-18", "category": "Documentation", "active": true, "new": true, "completed": false, "failed": false},
        {"title": "Task 2", "description": "Fix bug in module", "date": "2025-02-19", "category": "Development", "active": false, "new": false, "completed": true, "failed": false}
      ]
    },
    {
      "id": 2, "email": "employee2@example.com", "password": "123",
      "tasks": [
        {"title": "Task 1", "description": "Review PRs", "date": "2025-02-18", "category": "Code Review", "active": true, "new": true, "completed": false, "failed": false},
        {"title": "Task 2", "description": "Write documentation", "date": "2025-02-20", "category": "Documentation", "active": false, "new": false, "completed": true, "failed": false}
      ]
    },
    {
      "id": 3, "email": "employee3@example.com", "password": "123",
      "tasks": [
        {"title": "Task 1", "description": "Set up CI/CD", "date": "2025-02-18", "category": "DevOps", "active": true, "new": true, "completed": false, "failed": false},
        {"title": "Task 2", "description": "Optimize database", "date": "2025-02-22", "category": "Database", "active": false, "new": false, "completed": false, "failed": true}
      ]
    },
    {
      "id": 4, "email": "employee4@example.com", "password": "123",
      "tasks": [
        {"title": "Task 1", "description": "Design new UI", "date": "2025-02-18", "category": "UI/UX", "active": true, "new": true, "completed": false, "failed": false},
        {"title": "Task 2", "description": "Conduct user testing", "date": "2025-02-21", "category": "Research", "active": false, "new": false, "completed": true, "failed": false}
      ]
    },
    {
      "id": 5, "email": "employee5@example.com", "password": "123",
      "tasks": [
        {"title": "Task 1", "description": "Develop API endpoints", "date": "2025-02-18", "category": "Backend", "active": true, "new": true, "completed": false, "failed": false},
        {"title": "Task 2", "description": "Write unit tests", "date": "2025-02-23", "category": "Testing", "active": false, "new": false, "completed": true, "failed": false}
      ]
    }
  ]

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

