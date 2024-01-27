import {Content} from './content-interface';

export class ContentList {
    private _items: Content[] = [];

    constructor() {
        this._items = [];
    }

    get content(): Content[] {
        return this._items;
    }

    public addContent(Content: Content): void {
        this._items.push(Content);
    }

    public getNumberOfItem(): number {
        return this._items.length;
    }

    public getContent(index: number): string {
        const contentItem = this._items[index];
        var numOfItems = this.getNumberOfItem();
        if(index < 0 || index > numOfItems) {
            const errMsg = '<p style="color: red">Invalid Index</p>';

            return `<div> ${errMsg} </div>`;
        }
        else {

            var title = contentItem.title;
            var description = contentItem.description;
            var imgURL = contentItem.imgURL;
            var creator = contentItem.creator;
            var type = contentItem.type;
            var tags = contentItem.tags;
            var imgTag = imgURL ? `<img src="${imgURL}" alt="${title}">` : '';

            return `<div> <h3>${title}</h3> <p>${description}</p> <p>Creator: ${creator}</p> ${imgTag} <p>Type: ${type}</p> <p> Tags: ${tags} </p> </div><hr/>`;

        }
    }
}
