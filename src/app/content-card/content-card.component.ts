import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})

export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.add({
      title: 'Les Royales Jardin dAmalfi',
      description: 'British perfumery Creed, creator of fragrances beloved by Audrey Hepburn and Grace Kelly, introduced this Royal Exclusive scent in 2011 to celebrate the houses 250th anniversary.',
      creator: 'CREED',
      imgURL: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696470800-1591136644-7ef2a988-17eb-4b12-9909-bcd8e382302d-651e170321a08.jpg?crop=1xw:1xh;center,top&resize=980:*',
      type: 'Floral',
    });

    this.contentList.add({
      title: 'Parfums Roja Haute Luxe',
      description: 'Roja Dove is a lavish, flamboyant perfumer, a man who is not afraid of even the most decadent overdose of exquisite ingredients. Haute Luxe is a chypre oriental that practically drips money.',
      creator: 'ROJA',
      imgURL: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696471174-0400098308583-nocolor-651e187a086b0.jpg?crop=1xw:1xh;center,top&resize=980:*',
      type: 'Scent',
    });

    this.contentList.add({
      title: 'Eleganter Schwan 06 - Limited Edition Perfume',
      description: 'Albert Krigler was inspired by Bavaria Neuschwanstein Castle (the model for Disneyland iconic Sleeping Beauty Castle) when creating this warm, romantic rose-and-sandalwood eau, and named it after the historic sites famous swans.',
      creator: 'KRIGLER',
      imgURL: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696471506-1649859174-66849530-07b-1649859096-651e19bdd8774.jpg?crop=1xw:1xh;center,top&resize=980:*',
      type: 'COLOGNE',
    });
  }

  ngOnInit(): void {}
}
