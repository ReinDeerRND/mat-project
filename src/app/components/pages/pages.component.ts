import { Component, OnInit } from '@angular/core';
import { Page, PageType } from 'src/app/models/interfaces';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  defaultTabs: Page[] = [
    {
      title: 'Редактирование геопериода',
      index: 0,
      type: PageType.second,
    },
    {
      title: 'Добавление динозавра',
      data: 'Трицератопс',
      index: 1,
      type: PageType.first,
    },
    {
      title: 'Доп.информация',
      data: 'Иная информация',
      index: 2,
      type: PageType.third,
    },
  ];
  tabs: Page[] = [];
  pagesTypes = PageType;

  ngOnInit(): void {
    this.tabs = [...this.defaultTabs];
  }

  addTab() {
    this.tabs.push({
      title: 'New',
      data: 'New Record',
      type: PageType.third,
      index: this.tabs[this.tabs.length - 1].index + 1,
    });
  }

  removeTab(index: number) {
    this.tabs = this.tabs.filter((item) => item.index !== index);
  }
}
