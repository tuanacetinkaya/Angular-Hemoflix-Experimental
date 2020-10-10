import { Component, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hemofili Dünyam';

  // @Output() context = [
  //   {
  //     id: 'anlamak',
  //     next: 'dunyam',

  //     headline: 'HEMOFİLİYİ ANLAMAK',
  //     title: 'Tedavi Yöntemleri',
  //     highlight: 'Kişiselleştirilmiş',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.',
  //   },
  //   {
  //     id: 'dunyam',
  //     next: 'yasamak',

  //     headline: 'HEMOFİLİ DÜNYAM',
  //     title: 'Hemofili',
  //     highlight: 'Babasıyım',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.',
  //   },
  //   {
  //     id: 'yasamak',
  //     next: 'destekciler',

  //     headline: 'HEMOFİLİ DÜNYASINDA YAŞAMAK',
  //     title: 'Hemofili',
  //     highlight: 've İş Dünyası',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.',
  //   },
  //   {
  //     id: 'destekciler',
  //     next: 'anlamak',

  //     headline: 'BU DÜNYANIN DESTEKÇİLERİ',
  //     title: 'Bu Dünyanın',
  //     highlight: 'Destekçileri',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum pretium blandit aliquet. Proin mattis, velit ac facilisis pulvinar.',
  //   },
  // ];

  ngOnInit() {
    //Toggle Click Function
    $('#menu-toggle').click(function (e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  }
}
