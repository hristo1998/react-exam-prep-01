async function register(name, email, password) {
 await fetch('http://localhost:5000/auth/signup', {
     method: 'POST',
     body: {
         name,
         email,
         password
     }
 });
}

async function login(name, email, password) {
    await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        body: {            
            email,
            password
        }
    });
}

export { register, login };