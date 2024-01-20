export interface Content {
  id?: number;
  title: string;
  description: string;
  creator: string;
  imgURL?: string;
  type?: string;
}

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {
    // Array is set to be empty
    this.contentArray = [];
  }

  // Getter function to returns the Content array
  getItems(): Content[] {
    return this.contentArray;
  }

  // function that adds 1 Content item to the end of the array
  add(item: Content): void {
    this.contentArray.push(item);
  }

  // Function that returns the number of items in the array
  getItemCount(): number {
    return this.contentArray.length;
  }

  // Function that returns a reader-friendly HTML output of a Content item's properties at a given index
  getHtmlOutput(index: number): string {
    if (index < 0 || index >= this.contentArray.length) {
      // Bonus: Return an HTML error message for an invalid index
      return '<p>Error: Index out of range</p>';
    }

    const contentItem = this.contentArray[index];

    // Generate an image tag if imgURL is provided
    const imgTag = contentItem.imgURL ? `<img src="${contentItem.imgURL}" alt="${contentItem.title}">` : '';

    // Generate reader-friendly HTML output
    const htmlOutput = `
      <div>
        <h3>${contentItem.title}</h3>
        <p>${contentItem.description}</p>
        <p>Creator: ${contentItem.creator}</p>
        ${imgTag}
        <p>Type: ${contentItem.type}</p>
      </div>
    `;

    return htmlOutput;
  }


  // Added function for BONUS that shows a error message if it is out of range
  displayItem(index: number): void {
    const output = this.getHtmlOutput(index);
    console.log(output);
  }
}
