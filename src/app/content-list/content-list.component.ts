import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent {
  searchTitle: string = '';
  searchMsg: string = '';
  isTitleFound: boolean = false;
  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 0,
        title: 'Black Coco Parfum',
        description: 'The Coco now and forever fragrance. Sexy, fresh Oriental fragrance recalls the irrepressible spirit of the young Coco Chanel.. An elegant, luxurious spray closest in strength and character to the parfum form.',
        creator: 'CHANEL',
        imgURL: 'https://i.ebayimg.com/images/g/640AAOSwyc9jJeMh/s-l1200.webp',
        type: '',
        tags: ['Classic', 'Feminine']
      },
      {
        id: 1,
        title: 'Les Royales Jardin dAmalfi',
        description: 'British perfumery Creed, creator of fragrances beloved by Audrey Hepburn and Grace Kelly, introduced this Royal Exclusive scent in 2011 to celebrate the house\'s 250th anniversary.',
        creator: 'CREED',
        // imgURL: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696470800-1591136644-7ef2a988-17eb-4b12-9909-bcd8e382302d-651e170321a08.jpg?crop=1xw:1xh;center,top&resize=980:*',
        type: 'Cluster Fragnance',
        tags: ['Premium', 'Expensive']
      },
      {
        id: 2,
        title: 'Sauvage Eau de Parfum',
        description: 'A radically fresh composition, with a powerful name that speaks for itself. That was the way François Demachy, Dior Perfumer-Creator, wanted it: raw and noble all at once.',
        creator: 'DIOR',
        imgURL: 'https://perfumeboss.ca/wp-content/uploads/2018/12/sauvage-edp-m-e1544122357711.jpg',
        type: 'Cluster Fragnance',
        tags: ['Classic', 'Masculine']
      },
      {
        id: 3,
        title: 'Coco Mademoiselle',
        description: 'Sexy, fresh Oriental fragrance recalls the irrepressible spirit of the young Coco Chanel. An elegant, luxurious spray closest in strength and character to the parfum form.',
        creator: 'CHANEL',
        imgURL: 'https://i.ebayimg.com/images/g/XFAAAOSwwkhgNAAe/s-l1200.webp',
        type: 'Cluster Fragnance',
        tags: ['Feminine', 'Classic']
      },
      {
        id: 4,
        title: 'Acqua Di Gioia',
        description: 'Acqua di Gioia represents the joy of the Mediterranean Sea. This refreshing aquatic fragrance opens with a beautiful blend of fresh jasmine and zesty lemon.',
        creator: 'GIORGIO ARMANI',
        imgURL: 'https://m.media-amazon.com/images/I/51L51-6qoTL.jpg',
        type: 'Individual Fragnance',
        tags: ['Fresh', 'Youthful']
      },
      {
        id: 5,
        title: 'Black Opium',
        description: 'Black Opium is an irresistible gourmand floral fragrance that embodies the spirit of Yves Saint Laurent. Notes of black coffee for a shot of adrenaline, white florals to instantly seduce, and vanilla for sweetness and sensuality.',
        creator: 'YVES SAINT LAURENT',
        imgURL: 'https://perfumeboss.ca/wp-content/uploads/2017/08/Yves-Saint-Laurent-Black-Opium-Eau-de-Parfum-50ml.jpg',
        type: 'Individual Fragnance',
        tags: ['Sensual', 'Modern']
      },
      {
        id: 6,
        title: 'N°5 Eau de Parfum',
        description: 'The now and forever fragrance. The ultimate in femininity. An elegant, luxurious spray closest in strength and character to the parfum form.',
        creator: 'CHANEL',
        // imgURL: 'https://i.ebayimg.com/images/g/640AAOSwyc9jJeMh/s-l1200.webp',
        type: 'Individual Fragnance',
        tags: ['Classic', 'Feminine']
      },
    ];
  }

searchContentByTitle() {
  const doesTitleMatch = this.contentArray.some(
    (contentArray) =>
      contentArray.title.toLowerCase() === this.searchTitle.toLowerCase()
  );

  this.isTitleFound = doesTitleMatch;
  this.searchMsg = doesTitleMatch
    ? `Content with title '${this.searchTitle}' exists.`
    : `Content with title '${this.searchTitle}' does not exist.`;
}
}
