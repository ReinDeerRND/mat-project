import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { FormControl } from '@angular/forms';

interface Item {
  id: number;
  title: string;
  children?: Item[];
}

/** Flat node with expandable and level information */
interface FlatNode extends Item {
  expandable: boolean;
  level: number;
}

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss'],
})
export class TreeSelectComponent<T extends Item> implements OnInit {
  private _transformer = (node: Item, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      title: node.title,
      id: node.id,
      level: level,
    };
  };
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );
  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  @Input() list: T[] = [];
  @Input() defaultItem: T | undefined = undefined;
  @Input() title = "";
  @Output() selected: EventEmitter<Item> = new EventEmitter();
  selectedItem: T | undefined;
  inputControl = new FormControl();

  ngOnInit(): void {
    if (this.defaultItem) {
      this.inputControl.setValue(this.defaultItem.title);
      this.selectedItem = { ...this.defaultItem };
    }
    this.dataSource.data = this.list;
  }
  hasChild = (_: number, node: FlatNode) => node.expandable;

  selectNode(node: any) {
    this.selectedItem = node;
    this.selected.emit({ id: node.id, title: node.title });
  }
}
