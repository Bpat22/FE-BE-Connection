import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const USERS_REST_API_URL = 'http://localhost:8080/api/users';


class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new UserService();
