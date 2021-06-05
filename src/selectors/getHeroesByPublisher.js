import {heroes} from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers= ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)){
        throw new Error (`The publisher "${publisher}" you have just sent is not correct`);
    }

    return heroes.filter(hero => hero.publisher===publisher);

}