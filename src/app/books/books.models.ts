export class Books {
  id: number;
  author: string;
  title: string;
  datePublish: string;

  constructor(id: number, author: string, title: string, datePublish: string) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.datePublish = datePublish;
  }
}
