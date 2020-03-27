class Fetch {
    request(url) {
        return Promise.resolve('data from fetch')
    }
}


class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local strate'
        return dataFromLocalStorage
    }
}

class Database {
    constructor(client) {
        // this.fetch = new Fetch()
        this.client =client
    }

    getData(key) {
        // return this.fetch.request('vk.com')
        return this.client.clientGet(key)
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('vk.com')
    }
}


class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }
    clientGet(){
        return this.localStorage.get()
    }

}


const db = new Database(new LocalStorageClient())

console.log(db.getData('rand'));