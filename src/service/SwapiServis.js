export default class SwapiServis {
    _apiBase = "https://swapi.co/api";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, receved ${res.status}`);
        }
        return await res.json();
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
    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet)
    }
    getStarship(id){
        return this.getResource(`/starships/${id}/`);
    }

    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.match(idRegExp)[1]
    }

    _transformPlanet(planet){
        return {
                name: planet.name,
                id: this._extractId(planet.url),
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
        }
    }
    _trasformPerson(person){
        return {

        }
    }



}
