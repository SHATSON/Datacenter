import { NodesDetailComponent } from './../nodes-detail/nodes-detail.component';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent {
  @Input() node: any;

  constructor(private modalService: NgbModal) {}

  isDanger(prop: string | number) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  open(node: any) {
    const modal = this.modalService.open(NodesDetailComponent);
    modal.componentInstance.node = node;
  }

}
