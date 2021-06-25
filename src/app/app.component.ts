import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alertRef?: ComponentRef<AlertComponent>;
  @ViewChild(DashboardComponent) dashboard!: DashboardComponent;
  @ViewChild('alertBox', { read: ViewContainerRef }) alertBox!: ViewContainerRef;

  constructor(private ComponentFactoryResolver: ComponentFactoryResolver) {}

  alert(date: any) {
    if (!this.alertRef) {
      const alertComponent = this.ComponentFactoryResolver.resolveComponentFactory(AlertComponent);
      this.alertRef = this.alertBox.createComponent(alertComponent);
    }

    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();

    setTimeout(() => this.destroyAlert(), 5000);
  }

  destroyAlert() {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }

  refresh() {
    this.dashboard.generateData();
  }
  // title = 'app';
}
