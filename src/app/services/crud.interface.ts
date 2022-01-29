export interface CrudI <T>{

get(t: T);

getAll(limit ? : number)

add(t : T);

update (t : T);

delete (t :T);




}
