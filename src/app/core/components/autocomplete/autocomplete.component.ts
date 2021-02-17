import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

import { scrollear } from '@core/helpers/scroll.helper';
import { AutoCompleteItem } from '../../entities/common.entities';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  @Input() formGroup: FormGroup;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() items: AutoCompleteItem[] = [];
  @Input() textClass: string = 'default';
  @Input() containerId: string;

  @Output() doBlur: EventEmitter<void> = new EventEmitter();
  @Output() doFocus: EventEmitter<void> = new EventEmitter();
  @Output() selected: EventEmitter<AutoCompleteItem> = new EventEmitter();

  @ViewChild('result', { static: false }) public resultElement: ElementRef;
  @ViewChildren('item') public itemElement: QueryList<ElementRef>;

  public itemsFiltered: AutoCompleteItem[] = [];
  public itemSelected: AutoCompleteItem;
  public isOpen: boolean = false;
  public clickOut: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public counter: number = 0;
  public itemActived: AutoCompleteItem;
  public maxItemsVisibles: number = 0;
  public isItemSelected: boolean = false;
  public readonly itemId: string = 'item';
  public readonly itemTextId: string = 'item-text';
  public readonly maxListHeight: number = 156;
  public cumulativeHeight: number = 0;
  public itemElementArray: ElementRef[] = [];
  public subscriptions: Array<Subscription> = [];

  ngOnInit(): void {
    this.subscriptions.push(
      this.formGroup.get(this.id).valueChanges.subscribe((data) => {
        this.filterList(data);
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  @HostListener('document:mousedown', ['$event'])
  clickedOutside($event: any): void {
    const idTarget = $event.target.id;
    const id = !!$event.toElement.offsetParent
      ? $event.toElement.offsetParent.id || 'id'
      : 'id';
    if (
      !!id &&
      id !== this.containerId &&
      ![this.itemId, this.itemTextId].includes(idTarget)
    ) {
      this.isOpen = false;
      this.clickOut.next(true);
    }
  }

  public selectItem(item: AutoCompleteItem): void {
    if (!!item) {
      this.formGroup.get(this.id).setValue(item.name);
      this.itemSelected = item;
      this.isOpen = false;
      this.isItemSelected = true;
      this.selected.emit(item);
    }
  }

  public filterList(text: string): void {
    if (!!text) {
      this.checkItemSelected(text);
      this.applyFilter(text);
    } else {
      this.restartList();
    }
    setTimeout(() => {
      this.itemElementArray = this.itemElement.toArray();
      this.maxItemsVisibles = this.calculateMaxItems();
    }, 200);
  }

  public activateItem(
    item: AutoCompleteItem,
    position: number,
    increase: boolean,
  ): void {
    this.itemActived = item;
    if (position > this.maxItemsVisibles && increase) {
      this.cumulativeHeight += this.itemElementArray[
        position - 1
      ].nativeElement.scrollHeight;
    } else if (position > this.maxItemsVisibles && !increase) {
      this.cumulativeHeight -= this.itemElementArray[
        position
      ].nativeElement.scrollHeight;
    } else {
      this.cumulativeHeight = 0;
    }

    const scroll = this.calculatePositionScroll(position);
    scrollear(this.resultElement, scroll);
  }

  public focusInput(): void {
    const valFocus = this.formGroup.get(this.id).value;
    this.filterList(valFocus);
    this.isOpen = true;
    this.doFocus.emit();
  }

  private applyFilter(text: string): void {
    if (!!this.items) {
      this.itemsFiltered = this.items.filter((data) =>
        data.filter.includes(text),
      );
    }
  }

  private calculatePositionScroll(position: number): number {
    return position > this.maxItemsVisibles ? this.cumulativeHeight : 0;
  }

  private restartList(): void {
    this.isOpen = false;
    this.itemsFiltered = [];
    this.itemActived = null;
    this.counter = 0;
  }

  private checkItemSelected(text: string): void {
    if (this.isItemSelected) {
      if (this.itemSelected.name === text) {
        this.isOpen = false;
        this.restartList();
      } else {
        this.isOpen = true;
        this.isItemSelected = false;
      }
    } else {
      this.isOpen = true;
    }
  }

  private calculateMaxItems(): number {
    let maxItems = 1;
    if (!!this.itemElementArray && this.itemElementArray.length > 0) {
      const sumHeight = this.itemElementArray
        .filter((element, index) => index < 3)
        .map((element) => element.nativeElement.scrollHeight)
        .reduce((prev, cur) => prev + cur);
      maxItems = sumHeight > this.maxListHeight ? 2 : 3;
    }
    return maxItems;
  }

  get activateOptions(): boolean {
    return this.isOpen && !!this.itemsFiltered && this.itemsFiltered.length > 0;
  }

  get clickOut$(): Observable<boolean> {
    return this.clickOut.asObservable();
  }
}
