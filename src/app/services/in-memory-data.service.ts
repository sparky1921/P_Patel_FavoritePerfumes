import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    //setting it to the value of our array of content
    const content = [
  {
    id: 0,
    title: 'Chanel No. 5',
    description: 'Iconic fragrance loved by millions.',
    creator: 'Chanel',
    imgURL: 'assets/images/chanel_no5.jpeg',
    type: 'Eau de Parfum',
    tags: ['floral', 'powdery', 'citrus'],
  },
  {
    id: 1,
    title: 'Dior Sauvage',
    description: 'A rugged and sophisticated scent for men.',
    creator: 'Dior',
    imgURL: 'assets/images/dior_sauvage.jpeg',
    type: 'Eau de Toilette',
    tags: ['woody', 'spicy', 'amber'],
  },
  {
    id: 2,
    title: 'Gucci Bloom',
    description: 'A luxurious and romantic floral fragrance.',
    creator: 'Gucci',
    imgURL: 'assets/images/gucci_bloom.jpeg',
    type: 'Eau de Parfum',
    tags: ['jasmine', 'tuberose', 'orris'],
  },
  {
    id: 3,
    title: 'Jo Malone Wood Sage & Sea Salt',
    description: 'Captures the essence of the British coastline.',
    creator: 'Jo Malone London',
    imgURL: 'assets/images/jo_malone_wood_sage_sea_salt.jpeg',
    type: 'Cologne',
    tags: ['sage', 'sea salt', 'wood'],
  },
  {
    id: 4,
    title: 'Yves Saint Laurent Black Opium',
    description: 'A bold and addictive fragrance for women.',
    creator: 'Yves Saint Laurent',
    imgURL: 'assets/images/yves_saint_laurent_black_opium.jpeg',
    type: 'Eau de Parfum',
    tags: ['coffee', 'vanilla', 'white flowers'],
  },
  {
    id: 5,
    title: 'Tom Ford Oud Wood',
    description: 'A rich and exotic scent with oud at its heart.',
    creator: 'Tom Ford',
    imgURL: 'assets/images/tom_ford_oud_wood.jpeg',
    type: 'Eau de Parfum',
    tags: ['oud', 'sandalwood', 'rosewood'],
  },
  {
    id: 6,
    title: 'Marc Jacobs Daisy',
    description: 'A youthful and fresh floral fragrance.',
    creator: 'Marc Jacobs',
    imgURL: 'assets/images/marc_jacobs_daisy.jpeg',
    type: 'Eau de Toilette',
    tags: ['strawberry', 'violet', 'jasmine'],
  },
];
    return {content};
  }

  //take the CONTENT we defined in our contentDb file previously and move the values to this service
  genId(content: Content[]): number{
    return content.length > 0 ? Math.max(...content.map(c => c.id ?? 0)) + 1 : 1;
  }

  constructor() { }
}
