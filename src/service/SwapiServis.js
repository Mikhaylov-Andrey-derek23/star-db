export default class SwapiServis {
    _apiBase = "https://swapi.co/api";
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, receved ${res.status}`);
        }
        return await res.json();;
    }

    async getAllPeople(){
        const res = await this.getResource('/people/');
        return res;
    }
    async getAllPlanets(){
        const res = await this.getResource('/planets/');
        return res;
    }
    async getAllStarships(){
        const res = await this.getResource('/starships/');
        return res;
    }
    getPerson(id){
        return this.getResource(`/people/${id}/`);
    }
    getPlanet(id){
        return this.getResource(`/planets/${id}/`);
    }
    getStarship(id){
        return this.getResource(`/starships/${id}/`);
    }


}
