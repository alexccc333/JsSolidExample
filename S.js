//Singe Resposobility Principe


class News {

    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false
    }

    update(text) {
        this.text = text;
        this.modified = true
    }

    // toHtml(){
    //     return `
    //         <div class="news">
    //         <h1>${this.title}</h1>
    //         <p>${this.text}</p>
    //         </div>
    //     `
    // }
    //
    // toJson(){
    //     return JSON.stringify({
    //         title:this.title,
    //         text:this.text,
    //         modified:this.modified
    //     })
    // }
}

const news = new News('Что там', 'где то там')

class NewsPrinter {
    constructor(news) {
        this.news = news;
    }

    html() {
        return `
            <div class="news">
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
            </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        })
    }

    xml() {
        return `
            <news>
              <title>${this.news.title}</title>
               <text>${this.news.text}</text>
            </news>
        `
    }
}

const  printer = new NewsPrinter( new News('Что','Там'))


console.log(printer.html())
console.log(printer.xml())
console.log(printer.json())