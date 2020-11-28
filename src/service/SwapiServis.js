export default class SwapiServis {
    _apiBase = "https://swapi.dev/api";
    _urlImg = "https://starwars-visualguide.com/assets/img/";

    getResource = async(url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, receved ${res.status}`);
        }
        return await res.json();
    }


    getAllPeople = async (id) =>{
        let url = '';
        id ==0 ? url = '/people/' : url = `/people/?page=${id}`; 
        const res = await this.getResource(url);
        return this._transformList(res);
    }
    getAllPlanets = async (id) => {
        let url = '';
        id == 0 ? url = '/planets' : url = `/planets/?page=${id}`;
        const res = await this.getResource(url);
        return this._transformList(res);
    }
    getAllStarships = async(id) =>{
        let url = '';
        id ==0 ? url = '/starships/' : url = `/starships/?page=${id}`; 
        const res = await this.getResource(url);
        return this._transformList(res);
    }
    getPerson = async (id) =>{
        const person = await this.getResource(`/people/${id}/`);
        return this._trasformPerson(person)
    }
    getPlanet = async(id) =>{
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet)
    }
    getStarship = async(id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship)
    }

    getURl = async (id, type) => {
        const url = this._urlImg+'/'+type+'/'+id+'.jpg';
        return url
    }

    _extractId = (item)=>{
        const idRegExp = /\/([0-9]*)\/$/;
        return item.match(idRegExp)[1]
    }

    _transformPlanet = (planet)=>{
        return {
                name: planet.name,
                id: this._extractId(planet.url),
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
        }
    }
    _trasformPerson = (person) =>{
        return {
                name : person.name,
                id: this._extractId(person.url),
                age : person.age,
                gender : person.gender,
                eye_color: person.eye_color,
                birth_year: person.birth_year
        }
    }

    _transformStarship = (starship)=>{
        return {
            name: starship.name,
            id: this._extractId(starship.url),
            model: starship.model,
            cost_in_credits: starship.cost_in_credits 
        }
    }
    _transformList = (list)=>{
        list.results.map(el => {
            el.id = this._extractId(el.url);
        }) 
        
        return list;
    }



}
