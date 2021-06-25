import { SimpleChanges } from '@angular/core';
import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';


@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnChanges{
  ngOnChnages(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  @Input('used') value: number = 0;
  @Input('available') max: number = 100;
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value && isNaN(changes.value.currentValue)) this.value = 0;
    if (changes.max && isNaN(changes.max.currentValue)) this.max = 0;
  }

  isDanger(){
    return this.value / this.max > 0.7;
  }
}
