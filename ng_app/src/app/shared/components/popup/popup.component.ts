import {
  Component,
  Injectable,
  OnInit,
  ComponentFactoryResolver,
  ViewEncapsulation
} from "@angular/core";

import { StateService } from "../../../core/service";

@Injectable()
export class PopupService {
  constructor(
    public state: StateService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  open(component?: any): void {
    let c = component ? component : PopupComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(c);

    let viewContainerRef = this.state.viewContainer;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }

  close(): void {
    this.state.viewContainer.clear();
  }
}

@Component({
  selector: "app-popup",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"]
})
export class PopupComponent implements OnInit {
  constructor(public state: StateService, private popupService: PopupService) {}

  ngOnInit() {}

  close() {
    this.popupService.close();
  }
}
