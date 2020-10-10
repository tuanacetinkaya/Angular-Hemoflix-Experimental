import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  context = [
    {
      id: 'anlamak',
      next: 'dunyam',
      
      'headline': '#HEMOFİLİYİ ANLAMAK',
      'title': 'Tedavi Yöntemleri',
      'highlight': 'Kişiselleştirilmiş',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.'
    },
    {
      id: 'dunyam',
      next: 'yasamak',

      'headline': '#HEMOFİLİ DÜNYAM',
      'title': 'Hemofili',
      'highlight': 'Babasıyım',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.'
    },
    {
      id: 'yasamak',
      next: 'destekciler',

      'headline': '#HEMOFİLİ DÜNYASINDA YAŞAMAK',
      'title': 'Hemofili',
      'highlight': 've İş Dünyası',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.'
    },
    {
      id: 'destekciler',
      next: 'anlamak',

      'headline': '#BUDÜNYANINDESTEKÇİLERİ',
      'title': 'Bu Dünyanın',
      'highlight': 'Destekçileri',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.'
    }
  ];

  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;

  constructor() { }

  ngOnInit(): void {
    
  }
  // getScrollingElement(): Element {
  //   return document.scrollingElement || document.documentElement;
  // }

  // onNextSearchPosition(): any{
  //   // this.panel.nativeElement.scrollTop +=20;
  //   setTimeout(() => {
  //     this.panel.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  // });
  // }
}
