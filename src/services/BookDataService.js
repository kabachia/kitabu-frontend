import http from '../http-common';

class BookDataService{

    getAll(){
        return http.get("/books");
    }

    /*get(id){
	return http.get("/books/{$id}");
    }*/

    create(data) {
        return http.post("/books", data);
    }
}

export default new BookDataService();
