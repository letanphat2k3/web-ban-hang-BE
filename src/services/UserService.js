const createUser = () => {
    return new Promise((resolve, reject) => {
        try {
           resolve({})
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    createUser
};


// const User = require("../models/UesrModel");
// const CreateUser = (newUser) => {
//     return new Promise(async(resolve, reject) => {
//         const {name, email, password, confirmPassword, phone} =  newUser

//         try{
//             const createdUser = await User.create({
//                         name, 
//                         email, 
//                         password, 
//                         confirmPassword, 
//                         phone
//                     });
//                     if(createdUser) {
//                     resolve({
//                         status: 'ok',
//                         message: 'success',
//                         data: createdUser
//                     }); 
//         }}
//         catch (e) {
//             reject(e)
//         }
//     });
// }


// module.exports = {
//     CreateUser
// }
