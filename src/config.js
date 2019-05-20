const url = 'http://localhost:3000/api';
const urlUsers = url + '/Users';

export default {
    STORAGE: {
        AUTH: 'auth',
        TYPES: 'types'
    },
    MESSAGES: {
        ERROR: 'Oops, something went wrong!',
        SUCCESS_LOGIN: 'Successfully login!',
        LOGOUT: 'you are logout now',
        TYPES_ERROR: 'Oops, something went wrong getting types of news',
        SING_UP: 'User has been created successfully',
        NO_IMAGE_SET: 'Please, choose a image for the new',
        NEW_CREATED: 'New has been created successfully!'
    },
    URLs: {
        LOGIN: urlUsers + '/login',
        LOGOUT: urlUsers + '/logout?access_token=',
        TYPES: url + '/TypeNews',
        SING_UP: urlUsers,
        CLOUDINARY: 'https://api.cloudinary.com/v1_1/bahdcoder/image/upload',
        NEWS: url + '/News'
    },
    ROUTES: {
        HOME: 'home',
        LOGIN: 'login'
    }
}