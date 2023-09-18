import http from '../http-common';

class AuthorDataService{

    getAll(){
        return http.get("/authors");
    }

    /*get(id){
	return http.get("/authors/{$id}");
    }*/

    create(data) {
        return http.post("/authors", data);
    }
}

export default new AuthorDataService();
