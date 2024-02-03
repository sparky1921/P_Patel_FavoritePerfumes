import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NgFor, NgStyle } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [NgFor, NgStyle, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 1,
        title: 'Les Royales Jardin dAmalfi',
        description: 'British perfumery Creed, creator of fragrances beloved by Audrey Hepburn and Grace Kelly, introduced this Royal Exclusive scent in 2011 to celebrate the house\'s 250th anniversary.',
        creator: 'CREED',
        imgURL: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696470800-1591136644-7ef2a988-17eb-4b12-9909-bcd8e382302d-651e170321a08.jpg?crop=1xw:1xh;center,top&resize=980:*',
        type: 'Floral',
        tags: ['Premium', 'Expensive']
      },
      {
        id: 2,
        title: 'Sauvage Eau de Parfum',
        description: 'A radically fresh composition, with a powerful name that speaks for itself. That was the way François Demachy, Dior Perfumer-Creator, wanted it: raw and noble all at once.',
        creator: 'DIOR',
        imgURL: 'https://www.dior.com/beauty/version-5.1559207191024/assets/fragrance/desktop/christian-dior-fragrance-fragrance-mens-fragrance-sauvage-dior-sauvage-eau-de-parfum-square.jpg',
        type: 'Woody',
        tags: ['Classic', 'Masculine']
      },
      {
        id: 3,
        title: 'Coco Mademoiselle',
        description: 'Sexy, fresh Oriental fragrance recalls the irrepressible spirit of the young Coco Chanel. An elegant, luxurious spray closest in strength and character to the parfum form.',
        creator: 'CHANEL',
        imgURL: 'https://cdn.shopify.com/s/files/1/0022/6546/3114/products/COCOMADEMOISELLE3_800x.jpg?v=1606356551',
        type: 'Oriental',
        tags: ['Feminine', 'Classic']
      },
      {
        id: 4,
        title: 'Acqua Di Gioia',
        description: 'Acqua di Gioia represents the joy of the Mediterranean Sea. This refreshing aquatic fragrance opens with a beautiful blend of fresh jasmine and zesty lemon.',
        creator: 'GIORGIO ARMANI',
        imgURL: 'https://cdn11.bigcommerce.com/s-5vposnr3y6/images/stencil/1280x1280/products/19255/23209/768614123450__15412.1587591563.jpg?c=2',
        type: 'Aquatic',
        tags: ['Fresh', 'Youthful']
      },
      {
        id: 5,
        title: 'Black Opium',
        description: 'Black Opium is an irresistible gourmand floral fragrance that embodies the spirit of Yves Saint Laurent. Notes of black coffee for a shot of adrenaline, white florals to instantly seduce, and vanilla for sweetness and sensuality.',
        creator: 'YVES SAINT LAURENT',
        imgURL: 'https://www.yslbeautyus.com/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-itemmaster_ysl/default/dw3158f39c/Black-Opium-EDP-Spray-Perfume-Yves-Saint-Laurent--60mL-3614270570126.jpg?sw=600&sh=600&sm=fit&q=70',
        type: 'Gourmand',
        tags: ['Sensual', 'Modern']
      },
      {
        id: 6,
        title: 'N°5 Eau de Parfum',
        description: 'The now and forever fragrance. The ultimate in femininity. An elegant, luxurious spray closest in strength and character to the parfum form.',
        creator: 'CHANEL',
        imgURL: 'https://cdn.shopify.com/s/files/1/0022/6546/3114/products/CHANEL_NO5_800x.jpg?v=1606356499',
        type: 'Floral',
        tags: ['Classic', 'Feminine']
      },
    ];
  }
}
